import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {ImportDeclarationNode, ImportNode} from '../../node';
import {Char} from '../types';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwImportCaptor extends AbstractKeywordCaptor<ImportDeclarationNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Import, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ImportDeclarationNode> {
		return ImportDeclarationNode;
	}

	protected isContainerNode(): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected createChildAstNodes(_node: ImportDeclarationNode, _char: Char, offset: number): number {
		this.createAndAppendToAst(ImportNode, {text: AstKeywords.Import, startOffset: offset});
		return offset + this.charsLength;
	}
}
