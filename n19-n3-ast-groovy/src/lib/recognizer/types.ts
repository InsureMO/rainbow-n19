import {CompilationUnitNode, GroovyAstNode} from '../node';
import {TokenId} from '../tokens';
import {AstRecognizer} from './ast-recognizer';

export enum AstRecognitionCommentKeywordOption {
	DISABLED = 0,
	ENABLE_AND_CASE_INSENSITIVE = 1,
	ENABLE_AND_CASE_SENSITIVE = 2
}

/**
 * key and case-sensitive.
 * a keyword "t odo" is default enabled and case-insensitive.
 * to disable it, pass {@code {t odo: AstBuildCommentKeywordOption#DISABLED}}
 * or pass {@code {T odo: AstBuildCommentKeywordOption.ENABLE_AND_CASE_SENSITIVE}} to change it to case-sensitive
 * when change the keyword tobe "T odo"
 *
 * a blank to avoid IDE highlight detecting, for "t odo", "T odo".
 */
export interface AstRecognitionCommentKeywords {
	[key: string]: AstRecognitionCommentKeywordOption;
}

export interface AstRecognition {
	node: GroovyAstNode;
	nodeIndex: number;
	nodes: Array<GroovyAstNode>;
	compilationUnit: CompilationUnitNode;
	astRecognizer: AstRecognizer;
}

/**
 * must be stateless
 */
export interface NodeRecognizer {
	acceptTokenId(): TokenId;
	recognize(recognition: AstRecognition): number;
}

export interface NodeRecognizersOptions {
	/**
	 * replace or extend node recognizers
	 */
	externalRecognizers?: Array<NodeRecognizer>;
}

export interface AstRecognizerOptions extends Partial<NodeRecognizersOptions> {
	scriptCommandEnabled?: boolean;
	commentKeywords?: AstRecognitionCommentKeywords;
}
