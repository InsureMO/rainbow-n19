import {GroovyAst} from '../ast';
import {CommentKeyword, CommentKeywords} from '../captor';
import {$NAF, CompilationUnitNode, GroovyAstNode} from '../node';
import {NodeRecognizerRepo} from './node-recognizer-repo';
import {AstRecognitionCommentKeywordOption, AstRecognizerOptions} from './types';

/**
 * Stateful, and an instance needs to be created for each use.
 */
export class AstRecognizer {
	private readonly _scriptCommandEnabled: boolean;
	private readonly _buildCommentKeywords: CommentKeywords;
	private readonly _multipleLinesCommentHighlightEnabled: boolean;
	private readonly _recognizerRepo: NodeRecognizerRepo;

	// recognition
	// ancestors, closest is 0, root is the last
	private readonly _currentAncestors: Array<GroovyAstNode> = [];

	constructor(options?: AstRecognizerOptions) {
		const {
			scriptCommandEnabled,
			commentKeywords, multipleLinesCommentHighlightEnabled,
			...restOptions
		} = options ?? {};
		this._scriptCommandEnabled = scriptCommandEnabled ?? true;
		// build comment keywords
		this._buildCommentKeywords = this.initializeCommentKeywords(commentKeywords);
		this._multipleLinesCommentHighlightEnabled = multipleLinesCommentHighlightEnabled ?? true;
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

	// recognition
	getCurrentAncestors(): Array<GroovyAstNode> {
		return this._currentAncestors;
	}

	getCurrentParent(): GroovyAstNode {
		return this._currentAncestors[0];
	}

	/**
	 * return current parent
	 */
	closeParent(): GroovyAstNode {
		this._currentAncestors.shift();
		return this._currentAncestors[0];
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
			const childAcceptableCheck = $NAF.ChildAcceptableCheck.get(ancestor);
			if (childAcceptableCheck != null && !childAcceptableCheck(node)) {
				ancestors.shift();
				break;
			}
		}

		return ancestors[0];
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
		this._currentAncestors[0].asParentOf(node);
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
}