import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognition} from '../../types';
import {RecognizeRehydration} from '../shared';
import {AbstractPreservableRecognizer} from './abstract-preservable-recognizer';
import {RehydrateFunc} from './abstract-rehydratable-recognizer';

/**
 * If it is not completed in the two stages of rehydration and preservation,
 * create a new node using the given node and place it into the AST,
 * and then return the index value of the next node.
 */
export abstract class AbstractDeclarationCreateRecognizer extends AbstractPreservableRecognizer {
	protected getRehydrateFunctions(): Array<RehydrateFunc> {
		return [
			RecognizeRehydration.rehydrateToCharsWhenInString,
			RecognizeRehydration.rehydrateToIdentifierWhenAfterDotDirectly
		];
	}

	protected abstract getDeclarationTokenNature(): [TokenId, TokenType];

	protected abstract setDeclarationNodeExtraAttrs(node: GroovyAstNode): void;

	protected createDeclarationNode(node: GroovyAstNode): GroovyAstNode {
		const [tokenId, tokenType] = this.getDeclarationTokenNature();
		const declarationNode = new GroovyAstNode({
			tokenId, tokenType,
			text: '', startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		this.setDeclarationNodeExtraAttrs(declarationNode);
		return declarationNode;
	}

	protected doRecognize(recognition: AstRecognition): number {
		const {node, nodeIndex, astRecognizer} = recognition;
		const statementNode = this.createDeclarationNode(node);
		statementNode.asParentOf(node);
		astRecognizer.appendAsCurrentParent(statementNode);
		return nodeIndex + 1;
	}
}
