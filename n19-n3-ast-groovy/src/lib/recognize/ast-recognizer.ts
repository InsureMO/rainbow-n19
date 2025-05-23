import {GroovyAst} from '../ast';
import {CommentKeyword, CommentKeywords} from '../captor';
import {CompilationUnitNode, GroovyAstNode} from '../node';
import {TokenId} from '../tokens';
import {NodeAttributeOperator} from './node-attribute';
import {NodePointcutHandler} from './node-pointcut-handler';
import {NodeRecognizerRepository} from './node-recognizer-repository';
import {AstRecognitionCommentKeywordOption, AstRecognizerOptions} from './types';

/**
 * Stateful, and an instance needs to be created for each use.
 */
export class AstRecognizer {
	private readonly _scriptCommandEnabled: boolean;
	private readonly _buildCommentKeywords: CommentKeywords;
	private readonly _multipleLinesCommentHighlightEnabled: boolean;
	private readonly _jdkVersion: number;
	private readonly _recognizerRepository: NodeRecognizerRepository;

	// recognition
	// ancestors, closest is 0, root is the last
	private readonly _currentAncestors: Array<GroovyAstNode> = [];

	constructor(options?: AstRecognizerOptions) {
		const {
			scriptCommandEnabled,
			commentKeywords, multipleLinesCommentHighlightEnabled,
			jdkVersion,
			...restOptions
		} = options ?? {};
		this._scriptCommandEnabled = scriptCommandEnabled ?? true;
		this._buildCommentKeywords = this.initializeCommentKeywords(commentKeywords);
		// default enabled
		this._multipleLinesCommentHighlightEnabled = multipleLinesCommentHighlightEnabled ?? true;
		// default use 17
		this._jdkVersion = jdkVersion ?? 17;
		// recognizers
		this._recognizerRepository = new NodeRecognizerRepository(restOptions);
	}

	// initializing
	protected initializeCommentKeywords(keywords?: AstRecognizerOptions['commentKeywords']): CommentKeywords {
		keywords = keywords ?? {};

		let todoConfigured = false;
		const defs = Object.keys(keywords).reduce((keywords, keyword) => {
			const option = keywords[keyword];
			keyword = keyword.trim();
			switch (option) {
				case AstRecognitionCommentKeywordOption.DISABLED:
					// ignored
					break;
				case AstRecognitionCommentKeywordOption.ENABLE_AND_CASE_SENSITIVE:
					keywords.push({
						keyword,
						pattern: new RegExp(`\\b${keyword}\\b`),
						caseSensitive: true,
						keywordLength: keyword.length
					});
					break;
				case AstRecognitionCommentKeywordOption.ENABLE_AND_CASE_INSENSITIVE:
				default:
					// default treated as case-insensitive
					keywords.push({
						keyword: keyword.toLowerCase(),
						pattern: new RegExp(`\\b${keyword}\\b`, 'i'),
						caseSensitive: false,
						keywordLength: keyword.length
					});

			}
			if (keyword.toLowerCase() === 'todo') {
				todoConfigured = true;
			}
			return keywords;
		}, [] as Array<CommentKeyword>);
		if (!todoConfigured) {
			// push a "t odo" (a blank to avoid IDE highlight detecting) as first one
			defs.unshift({keyword: 'todo', pattern: /\btodo\b/i, caseSensitive: false, keywordLength: 4});
		}

		const maxLength = Math.max(...defs.map(({keywordLength: length}) => length));
		const filtered: { [key in number]: Array<CommentKeyword> } = {};
		return {
			minLength: Math.min(...defs.map(({keywordLength: length}) => length)),
			available: (contentLength: number) => {
				if (contentLength >= maxLength) {
					return defs;
				}
				if (filtered[contentLength] == null) {
					filtered[contentLength] = defs.filter(({keywordLength: length}) => length <= contentLength);
				}
				return filtered[contentLength];
			},
			all: defs
		};
	}

	nodeRecognizers(): NodeRecognizerRepository {
		return this._recognizerRepository;
	}

	get commentKeywords(): CommentKeywords {
		return this._buildCommentKeywords;
	}

	get isScriptCommandEnabled(): boolean {
		return this._scriptCommandEnabled;
	}

	get isMultipleLinesCommentHighlightEnabled(): boolean {
		return this._multipleLinesCommentHighlightEnabled;
	}

	// noinspection JSUnusedGlobalSymbols
	get jdkVersion(): number {
		return this._jdkVersion;
	}

	/**
	 * preview in 14 and 15, formal release in 16
	 */
	get isRecordClassSupported(): boolean {
		return this._jdkVersion >= 14;
	}

	/**
	 * preview in 15 and 16, formal release in 17
	 */
	get isSealedClassSupported(): boolean {
		return this._jdkVersion >= 15;
	}

	/**
	 * no preview in 15 and 16, formal release in 17
	 */
	get isNonSealedKeywordSupported(): boolean {
		return this._jdkVersion >= 17;
	}

	// recognition
	getCurrentAncestors(): Array<GroovyAstNode> {
		return this._currentAncestors;
	}

	getCurrentParent(): GroovyAstNode {
		return this._currentAncestors[0];
	}

	/**
	 * 1. accepted by {@link NodeAttributeOperator.Accept5BaseNodesAsChild}, returns true,
	 * 2. accepted by {@link NodeAttributeOperator.TakeLBraceAs}, returns true,
	 * 3. accepted by {@link NodeAttributeOperator.EndWithAnyOfTokenIds}, returns true,
	 * 4. rejected by {@link NodeAttributeOperator.RejectTokenIdsAsChild}, returns false,
	 * 5. no definitions on {@link NodeAttributeOperator.AcceptTokenIdsAsChild}, {@link NodeAttributeOperator.AcceptTokenTypesAsChild},
	 *    or {@link NodeAttributeOperator.ChildAcceptableCheck}, returns true,
	 * 6. accepted by {@link NodeAttributeOperator.AcceptTokenIdsAsChild}, returns true,
	 * 7. accepted by {@link NodeAttributeOperator.AcceptTokenTypesAsChild}, returns true,
	 * 8. accepted by {@link NodeAttributeOperator.ChildAcceptableCheck}, returns true,
	 * 9. returns false.
	 */
	protected acceptChild(parent: GroovyAstNode, child: GroovyAstNode): boolean {
		if (NodePointcutHandler.acceptedBy5BaseNodes(parent, child)
			|| NodePointcutHandler.acceptedByTakeLBraceAs(parent, child)
			|| NodePointcutHandler.acceptedByEndTokenIds(parent, child)) {
			return true;
		}
		if (NodePointcutHandler.rejectedByPresetTokenIds(parent, child)) {
			return false;
		}

		let hasRule = false;
		const acceptedByGivenTokenIds = NodePointcutHandler.acceptedByPresetTokenIds(parent, child);
		if (acceptedByGivenTokenIds === true) {
			return true;
		} else if (acceptedByGivenTokenIds === false) {
			hasRule = true;
		}
		const acceptedByGivenTokenTypes = NodePointcutHandler.acceptedByPresetTokenTypes(parent, child);
		if (acceptedByGivenTokenTypes === true) {
			return true;
		} else if (acceptedByGivenTokenTypes === false) {
			hasRule = true;
		}
		const func = NodeAttributeOperator.ChildAcceptableCheck.get(parent);
		if (func != null) {
			return func(child, this) === true;
		} else {
			// not function specified, then check if there is any rule on token ids or types
			// 1. if exists, means the given child not pass the check, return false
			// 2. no exists, means no rule, return true, accept any token
			return !hasRule;
		}
	}

	/**
	 * for some nodes, they cannot accept other statement node as child.
	 * typically, other statement node not includes multiple-lines comments node.
	 *
	 * e.g. when you have a package declaration statement node to append to ast,
	 * call this to shift nodes from the current ancestors if they cannot be the parent of package declaration.
	 */
	protected resetToAppropriateParentNode(node: GroovyAstNode): GroovyAstNode {
		const ancestors = this.getCurrentAncestors();
		// the last node is compilation unit, can be the parent of anything
		while (ancestors.length > 1) {
			const ancestor = ancestors[0];
			if (this.acceptChild(ancestor, node)) {
				// given node can be accepted by current parent, break the check
				return ancestor;
			} else {
				// given node cannot be accepted by current parent
				// shift current parent
				this.closeCurrentParent();
			}
		}

		return ancestors[0];
	}

	/**
	 * check the given child node matches the configuration in {@link NodeAttributeOperator.EndWithAnyOfTokenIds} or not,
	 * if matched, close current parent and return.
	 * otherwise invoke the {@link NodeAttributeOperator.OnChildAppended} function.
	 */
	protected onChildAppended(parent: GroovyAstNode, child: GroovyAstNode): void {
		const tokenIds = NodeAttributeOperator.EndWithAnyOfTokenIds.get(parent);
		if (tokenIds != null && tokenIds.includes(child.tokenId)) {
			this.closeCurrentParent();
			return;
		}

		NodeAttributeOperator.OnChildAppended.get(parent)?.(child, this);
	}

	/**
	 * check the given child node matches the configuration in {@link NodeAttributeOperator.CloseOnChildWithTokenClosed} or not,
	 * if matched, close current parent and return.
	 * otherwise invoke the {@link NodeAttributeOperator.OnChildClosed} function.
	 */
	protected onChildClosed(parent: GroovyAstNode, child: GroovyAstNode): void {
		const tokenId = NodeAttributeOperator.CloseOnChildWithTokenClosed.get(parent);
		if (tokenId === child.tokenId) {
			this.closeCurrentParent();
			return;
		}

		NodeAttributeOperator.OnChildClosed.get(parent)?.(child, this);
	}

	/**
	 * invoke the {@link NodeAttributeOperator.OnNodeClosed},
	 * and invoke the {@link NodePointcutHandler.moveTrailingDetachableNodesToParentOnNodeClosed} when
	 * {@link NodeAttributeOperator.ElevateTrailingDetachableOnNodeClosed} is not false
	 */
	protected onNodeClosed(node: GroovyAstNode): void {
		NodeAttributeOperator.OnNodeClosed.get(node)?.(node, this);
		if (NodeAttributeOperator.ElevateTrailingDetachableOnNodeClosed.get(node) ?? true) {
			NodePointcutHandler.moveTrailingDetachableNodesToParentOnNodeClosed(node, this);
		}
	}

	/**
	 * Add the given node to the AST.
	 * The given node must be able to exist as a parent node (no check will be performed).
	 * Before adding, check whether the current parent node can accept the given node as a child node.
	 * If not, pop the current parent node and perform the check iteratively
	 * until the current parent node can accept the given node as a child node.
	 * Then add the given node as the new current parent node.
	 */
	appendAsCurrentParent(node: GroovyAstNode): void {
		this.resetToAppropriateParentNode(node);
		const parent = this._currentAncestors[0];
		parent.asParentOf(node);
		this.onChildAppended(parent, node);
		this._currentAncestors.unshift(node);
	}

	/**
	 * Add the given node to AST.
	 * The given node is a leaf node.
	 * Before adding, if {@link checkParent} is true, check whether the current parent node can accept the given node as a child node.
	 * If not, pop the current parent node and perform the check iteratively
	 * until the current parent node can accept the given node as a child node.
	 * Then add the given node as the new current parent node.
	 */
	appendAsLeaf(node: GroovyAstNode, checkParent: boolean): void {
		if (checkParent) {
			this.resetToAppropriateParentNode(node);
		}
		const parent = this._currentAncestors[0];
		parent.asParentOf(node);
		this.onChildAppended(parent, node);
	}

	/**
	 * no parent checking, but will try to merge to last child of current parent.
	 * and will not trigger on child appended function
	 */
	appendAsLeafAndTryToMerge(node: GroovyAstNode): void {
		const parent = this._currentAncestors[0];
		const children = parent.children;
		if (children.length === 0) {
			parent.asParentOf(node);
			return;
		}

		const previousSiblingNode = children[children.length - 1];
		const {tokenId: previousSiblingTokenId} = previousSiblingNode;
		if (previousSiblingTokenId !== node.tokenId) {
			parent.asParentOf(node);
		} else if (previousSiblingTokenId === TokenId.Chars || previousSiblingTokenId === TokenId.UndeterminedChars) {
			previousSiblingNode.appendText(node.text);
		} else {
			parent.asParentOf(node);
		}
	}

	/**
	 * close current parent
	 */
	closeCurrentParent(): void {
		const node = this._currentAncestors.shift();
		this.onNodeClosed(node);
		this.onChildClosed(this._currentAncestors[0], node);
	}

	/**
	 * move given nodes to old parent, and append them as child of current parent.
	 * will not perform the parent-child rationality check
	 */
	chopOffFromOldParentAndMoveToCurrentParent(nodes: Array<GroovyAstNode>): void {
		if (nodes.length === 0) {
			return;
		}
		const oldParent = nodes[0].parent;
		if (oldParent != null) {
			oldParent.chopOffTrailingNodes(nodes);
		}
		const currentParent = this._currentAncestors[0];
		nodes.forEach(node => currentParent.asParentOf(node));
	}

	recognize(ast: GroovyAst): void {
		const complicationUnitNode = ast.compilationUnit as CompilationUnitNode;
		const nodes = complicationUnitNode.clearAndShallowCloneChildren();
		if (nodes.length === 0) {
			return;
		}

		const debugTimeLogs = {
			/* TODO change to true to enable the dev logs */
			enabled: false,
			startOfRound: [0, 0] as [number, number],
			nodeIndexOfRound: 0,
			total: 0,
			/* token id, token id name, node index, spent on this round, spent till now */
			rounds: [] as Array<[TokenId, string, number, number, number]>
		};

		this._currentAncestors.push(complicationUnitNode);
		const nodeCount = nodes.length;
		let nodeIndex = 0;
		while (nodeIndex < nodeCount) {
			if (debugTimeLogs.enabled) {
				debugTimeLogs.startOfRound = process.hrtime();
				debugTimeLogs.nodeIndexOfRound = nodeIndex;
			}

			const node = nodes[nodeIndex];
			const nodeRecognizer = this.nodeRecognizers().find(node);
			if (nodeRecognizer != null) {
				// handle by node recognizer
				nodeIndex = nodeRecognizer.recognize({
					node, nodeIndex,
					nodes,
					compilationUnit: complicationUnitNode, astRecognizer: this
				});
			} else {
				// append to current parent
				this.appendAsLeaf(node, true);
				nodeIndex++;
			}

			if (debugTimeLogs.enabled) {
				const end = process.hrtime(debugTimeLogs.startOfRound);
				const spent = (end[0] * 1e9 + end[1]) / 1_000_000;
				debugTimeLogs.total = debugTimeLogs.total = spent;
				debugTimeLogs.rounds.push([node.tokenId, TokenId[node.tokenId], debugTimeLogs.nodeIndexOfRound, spent, debugTimeLogs.total]);
			}
		}
		if (debugTimeLogs.enabled) {
			console.warn(debugTimeLogs.rounds);
		}
	}

	printDefs(): void {
		this._recognizerRepository.printDefs();
	}
}