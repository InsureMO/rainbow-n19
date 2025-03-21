import {AstNode} from './ast-node';

export interface AstBuildVisitor {
	onDetermined(node: AstNode): void;
}

export interface AstBuildOptions {
	visitor?: AstBuildVisitor;
}
