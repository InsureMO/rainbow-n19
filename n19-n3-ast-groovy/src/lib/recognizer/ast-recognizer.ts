import {GroovyAst} from '../ast';
import {CommentKeyword, CommentKeywords} from '../captor';
import {CompilationUnitNode, GroovyAstNode} from '../node';
import {TokenId} from '../tokens';
import {$Neaf} from './neaf-wrapper';
import {NodePointcuts} from './node-recognizer';
import {NodeRecognizerRepo} from './node-recognizer-repo';
import {AstRecognitionCommentKeywordOption, AstRecognizerOptions} from './types';

/**
 * Stateful, and an instance needs to be created for each use.
 */
export class AstRecognizer {
	private readonly _scriptCommandEnabled: boolean;
	private readonly _buildCommentKeywords: CommentKeywords;
	private readonly _multipleLinesCommentHighlightEnabled: boolean;
	private readonly _jdkVersion: number;
	private readonly _recognizerRepo: NodeRecognizerRepo;

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
		this._recognizerRepo = new NodeRecognizerRepo(restOptions);
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

	nodeRecognizers(): NodeRecognizerRepo {
		return this._recognizerRepo;
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

	protected acceptChild(parent: GroovyAstNode, child: GroovyAstNode): boolean {
		const childAcceptableCheck = $Neaf.ChildAcceptableCheck.get(parent);
		if ($Neaf.EndWithToken.get(parent) === child.tokenId) {
			return true;
		}
		return childAcceptableCheck == null || childAcceptableCheck(child, this);
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
				break;
			} else {
				// given node cannot be accepted by current parent
				// shift current parent
				this.closeCurrentParent();
			}
		}

		return ancestors[0];
	}

	protected onChildAppended(parent: GroovyAstNode, child: GroovyAstNode): void {
		const proceeded = [
			NodePointcuts.Shared.endWithToken
		].some(func => func(child, this));
		if (!proceeded) {
			$Neaf.OnChildAppended.get(parent)?.(child, this);
		}
	}

	protected onChildClosed(parent: GroovyAstNode, child: GroovyAstNode): void {
		const proceeded = [
			NodePointcuts.Shared.closeOnChildWithTokenClosed
		].some(func => func(child, this));
		if (!proceeded) {
			$Neaf.OnChildClosed.get(parent)?.(child, this);
		}
	}

	protected onNodeClosed(node: GroovyAstNode): void {
		$Neaf.OnNodeClosed.get(node)?.(node, this);
		if ($Neaf.ElevateTrailingDetachableOnNodeClosed.get(node) ?? true) {
			NodePointcuts.Shared.moveTrailingDetachableNodesToParentOnNodeClosed(node, this);
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
		this._currentAncestors[0].asParentOf(node);
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

		this._currentAncestors.push(complicationUnitNode);
		const nodeCount = nodes.length;
		let nodeIndex = 0;
		while (nodeIndex < nodeCount) {
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
		}
	}

	printDefs(): void {
		this._recognizerRepo.printDefs();
	}
}