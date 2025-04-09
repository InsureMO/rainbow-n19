import {AstNode} from '../../../ast-node';
import {LBraceNode, StaticBlockBodyNode, StaticBlockDeclarationNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {AbstractPreviousNodesWalker, PreviousNodesWalkerAndVisitor} from '../../abstract';
import {Char} from '../../types';

export class StaticBlockNodeWalker extends AbstractPreviousNodesWalker implements PreviousNodesWalkerAndVisitor {
	isModifier(node: AstNode): boolean {
		return TokenId.STATIC === node.tokenId;
	}

	visit(char: Char, offset: number): boolean {
		const modifierNodes = this.grabModifiersAndConcatenators();
		if (modifierNodes.length !== 0 && modifierNodes.some(node => this.isModifier(node))) {
			const captor = this.captor;
			this.detachPreviousNodes(modifierNodes);
			captor.createAndAppendToAst(StaticBlockDeclarationNode, {
				startOffset: modifierNodes[0].startOffset
			});
			this.attachPreviousNodes(modifierNodes);
			// append a block body node
			captor.createAndAppendToAst(StaticBlockBodyNode, {startOffset: offset});
			// append a lbrace node
			captor.createAndAppendToAst(LBraceNode, {text: char, startOffset: offset});
			captor.moveCursorTo(offset + 1);
			return true;
		}

		return false;
	}
}
