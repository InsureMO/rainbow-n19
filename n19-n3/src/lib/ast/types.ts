import {GroovyAstNode} from './ast-node';

export interface GroovyAstBuildVisitor {
	enterNode(node: GroovyAstNode): void;
	exitNode(node: GroovyAstNode): void;
}

export interface GroovyAstBuildOptions {
	visitor?: GroovyAstBuildVisitor;
}
