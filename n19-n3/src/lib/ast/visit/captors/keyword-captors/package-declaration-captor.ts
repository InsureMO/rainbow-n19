import {AstNodeConstructor} from '../../../ast-node';
import {KwPackageNode, PackageDeclarationNode} from '../../../node';
import {AstKeywords} from '../../chars';
import {Char} from '../../types';
import {AstVisitor} from '../../visitor';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

/**
 * package declaration.
 * in Groovy, there are multiple scenarios for declaring a package:
 * 1. in same line, ends with ";" or new line.
 * 2. in multiple lines, ends with ";" or new line. and lines must be connected by ML comment.
 */
export class PackageDeclarationCaptor extends AbstractKeywordCaptor<PackageDeclarationNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Package, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<PackageDeclarationNode> {
		return PackageDeclarationNode;
	}

	protected isContainerNode(): boolean {
		return true;
	}

	protected createChildAstNodes(_node: PackageDeclarationNode, _char: Char, offset: number): number {
		this.createAndAppendToAst(KwPackageNode, {text: AstKeywords.Package, startOffset: offset});
		return offset + this.keywordLength;
	}
}
