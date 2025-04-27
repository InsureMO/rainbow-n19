import {AstBuildOptions, AstNode} from '@rainbow-n19/n3-ast';
import {AstRecognizerOptions} from './recognizer';

export interface AstBuildVisitor {
	onDetermined?: (node: AstNode) => void;
	onNodeAppended?: (node: AstNode) => void;
	onNodeDetached?: (node: AstNode) => void;
}

export interface AstVisitOptions extends AstRecognizerOptions {
	visitor?: AstBuildVisitor;
}

export interface GroovyAstBuildOptions extends AstVisitOptions, AstBuildOptions {
}
