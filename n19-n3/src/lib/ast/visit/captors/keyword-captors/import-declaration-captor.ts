import {AstNodeConstructor} from '../../../ast-node';
import {Char} from '../../../captor';
import {ImportDeclarationNode, ImportNode} from '../../../node';
import {AstKeywords} from '../../chars';
import {AstVisitor} from '../../visitor';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class ImportDeclarationCaptor extends AbstractKeywordCaptor<ImportDeclarationNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Import, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ImportDeclarationNode> {
		return ImportDeclarationNode;
	}

	protected isContainerNode(): boolean {
		return true;
	}

	protected createChildAstNodes(_node: ImportDeclarationNode, _char: Char, offset: number): number {
		this.createAndAppendToAst(ImportNode, {text: AstKeywords.Import, startOffset: offset});
		return offset + this.keywordLength;
	}
}
