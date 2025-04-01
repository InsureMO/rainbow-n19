import {AstNodeConstructor} from '../../../ast-node';
import {
	AbstractSymbolNode,
	AsteriskNode,
	CommaNode,
	DotNode,
	LBraceNode,
	LBrackNode,
	LParenNode,
	RBraceNode,
	RBrackNode,
	RParenNode,
	SemicolonNode
} from '../../../node';
import {AstNodeCaptorWithVisitorConstructor} from '../../captor';
import {AstChars} from '../../chars';
import {Char} from '../../types';
import {AbstractSingleCharCaptor} from '../abstract-single-char-captor';

const createSingleCharCaptor = <N extends AbstractSymbolNode>(name: string, char: Char, type: AstNodeConstructor<N>) => {
	const cls = class extends AbstractSingleCharCaptor<N> {
		protected get char(): Char {
			return char;
		}

		protected getAstNodeConstructor(): AstNodeConstructor<N> {
			return type;
		}
	};
	Object.defineProperty(cls, 'name', {value: `${name[0].toUpperCase() + name.slice(1)}Captor`});
	return cls as unknown as AstNodeCaptorWithVisitorConstructor;
};

/** "." */
export const DotCaptor = createSingleCharCaptor('dot', AstChars.Dot, DotNode);
/** "," */
export const CommaCaptor = createSingleCharCaptor('comma', AstChars.Comma, CommaNode);
/** ";" */
export const SemicolonCaptor = createSingleCharCaptor('semicolon', AstChars.Semicolon, SemicolonNode);
/** "*" */
export const AsteriskCaptor = createSingleCharCaptor('Asterisk', AstChars.AsteriskMark, AsteriskNode);
/** "{" */
export const LBraceCaptor = createSingleCharCaptor('LBrace', AstChars.LBrace, LBraceNode);
/** "}" */
export const RBraceCaptor = createSingleCharCaptor('RBrace', AstChars.RBrace, RBraceNode);
/** "[" */
export const LBrackCaptor = createSingleCharCaptor('LBrack', AstChars.LBrack, LBrackNode);
/** "]" */
export const RBrackCaptor = createSingleCharCaptor('RBrack', AstChars.RBrack, RBrackNode);
/** "(" */
export const LParenCaptor = createSingleCharCaptor('LParen', AstChars.LParen, LParenNode);
/** ")" */
export const RParenCaptor = createSingleCharCaptor('RParen', AstChars.RParen, RParenNode);
