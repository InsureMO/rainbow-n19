import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {PackageDeclarationNode, PackageNode} from '../../node';
import {Char} from '../types';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

/**
 * in Groovy, there are multiple scenarios for declaring a package:
 * 1. in same line, ends with ";" or new line.
 * 2. in multiple lines, ends with ";" or new line. and lines must be connected by ML comment.
 */
export class KwPackageCaptor extends AbstractKeywordCaptor<PackageDeclarationNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Package, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<PackageDeclarationNode> {
		return PackageDeclarationNode;
	}

	protected isContainerNode(): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected createChildAstNodes(_node: PackageDeclarationNode, _char: Char, offset: number): number {
		this.createAndAppendToAst(PackageNode, {text: AstKeywords.Package, startOffset: offset});
		return offset + this.charsLength;
	}
}