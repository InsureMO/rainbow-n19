import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {NodePointcuts} from '../node-pointcut';

export class IfElseDeclarationPointcuts {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	static readonly onChildAppended = (lastChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
		if (lastChildNode.tokenId !== TokenId.IF) {
			return false;
		}
		// change parent to else-if
		const currentParent = lastChildNode.parent;
		currentParent.replaceTokenNature(TokenId.IfElseIfDeclaration, TokenType.LogicBlockDeclaration);
		NodePointcuts.initialize(currentParent);
		return true;
	};
}
