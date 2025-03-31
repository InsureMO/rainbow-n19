import {AstNodeWithOptionsConstructor} from '../ast-node';
import {TokenId} from '../tokens';
import {AbstractAstNode} from './abstract-node';

export abstract class AbstractSymbolNode extends AbstractAstNode {
}

const createSymbolNode = (name: string, tokeId: TokenId) => {
	const cls = class extends AbstractSymbolNode {
		get tokenId(): TokenId {
			return tokeId;
		}
	};
	Object.defineProperty(cls, 'name', {value: `${name}Node`});
	return cls as unknown as AstNodeWithOptionsConstructor;
};

/** ";" */
export const SemicolonNode = createSymbolNode('Semicolon', TokenId.Semi);
/** "," */
export const CommaNode = createSymbolNode('Comma', TokenId.Comma);
/** "." */
export const DotNode = createSymbolNode('Dot', TokenId.Dot);
/** "*" */
export const AsteriskNode = createSymbolNode('Asterisk', TokenId.Asterisk);
/** "{" */
export const LBraceNode = createSymbolNode('LBrace', TokenId.LBrace);
/** "}" */
export const RBraceNode = createSymbolNode('RBrace', TokenId.RBrace);
/** "[" */
export const LBrackNode = createSymbolNode('LBrack', TokenId.LBrack);
/** "]" */
export const RBrackNode = createSymbolNode('RBrack', TokenId.RBrack);
/** "(" */
export const LParenNode = createSymbolNode('LParen', TokenId.LParen);
/** ")" */
export const RParenNode = createSymbolNode('RParen', TokenId.RParen);
