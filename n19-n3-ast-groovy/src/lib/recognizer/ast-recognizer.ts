import {GroovyAst} from '../ast';
import {CommentKeyword, CommentKeywords} from '../captor';
import {CompilationUnitNode, GroovyAstNode} from '../node';
import {NodeRecognizerRepo} from './node-recognizer-repo';
import {AstRecognitionCommentKeywordOption, AstRecognizerOptions} from './types';

/**
 * Stateful, and an instance needs to be created for each use.
 */
export class AstRecognizer {
	private readonly _scriptCommandEnabled: boolean;
	private readonly _buildCommentKeywords: CommentKeywords;
	private readonly _recognizerRepo: NodeRecognizerRepo;

	// recognition
	// ancestors, closest is 0, root is the last
	private readonly _currentAncestors: Array<GroovyAstNode> = [];

	constructor(options?: AstRecognizerOptions) {
		const {scriptCommandEnabled, commentKeywords, ...restOptions} = options ?? {};
		this._scriptCommandEnabled = scriptCommandEnabled ?? true;
		// build comment keywords
		this._buildCommentKeywords = this.initializeCommentKeywords(commentKeywords);
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

	// recognition
	getCurrentAncestors(): Array<GroovyAstNode> {
		return this._currentAncestors;
	}

	getCurrentParent(): GroovyAstNode {
		return this._currentAncestors[0];
	}

	closeParent(): void {
		this._currentAncestors.shift();
	}

	createParent(node: GroovyAstNode): void {
		this._currentAncestors[0].asParentOf(node);
		this._currentAncestors.unshift(node);
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
				nodeIndex = nodeRecognizer.recognize({
					node, nodeIndex,
					nodes,
					compilationUnit: complicationUnitNode, astRecognizer: this
				});
			} else {
				complicationUnitNode.append(node);
				nodeIndex++;
			}
		}
	}
}