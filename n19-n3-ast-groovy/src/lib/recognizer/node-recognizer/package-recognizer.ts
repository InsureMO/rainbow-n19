import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition} from '../types';
import {AbstractInStringRecognizer} from './abstract-in-string-recognizer';

/**
 * multiple cases:
 * - not next to dot, start of package declaration
 * - next to dot, property name, object is before dot
 */
export class KwPackageRecognizer extends AbstractInStringRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.PACKAGE;
	}

	protected doRecognize(recognition: AstRecognition): number {
		const {node, nodeIndex, astRecognizer} = recognition;
		const [, dotNodeIndex] = this.isAfterDotDirectly(recognition);
		if (dotNodeIndex === -1) {
			// not after dot node, starts a package declaration statement
			const statementNode = new GroovyAstNode({
				tokenId: TokenId.PackageDeclaration, tokenType: TokenType.PackageDeclaration,
				text: '', startOffset: node.startOffset,
				startLine: node.startLine, startColumn: node.startColumn
			});
			statementNode.asParentOf(node);
			this.appendAsCurrentParent(astRecognizer, statementNode);
			return nodeIndex + 1;
		} else {
			// kind of property name, it is an identifier
			node.replaceTokenNature(TokenId.Identifier, TokenType.Identifier);
			// TODO append identifier node, need check parent acceptable or not?
			this.appendAsLeaf(astRecognizer, node, false);
			return nodeIndex + 1;
		}
	}
}
