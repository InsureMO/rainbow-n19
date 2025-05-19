import {TokenId, TokenType} from '../../tokens';
import {AtomicTokenBasis} from './atomic-token';
import {
	createKeywordCaptorClass,
	createMultiCharsCaptorClass,
	createOperatorCaptorClass,
	createSameCharsCaptorClass,
	createSingleCharCaptorClass,
	createStringLiteralMarkCaptorClass
} from './create-token-classes';
import {AtomicTokenBasisType, AtomicTokenCaptors, Tt} from './internal';
import {capitalize} from './utils';

const createAtomicTokenDef = (tokenId: TokenId, basis: AtomicTokenBasisType): AtomicTokenCaptors => {
	const [type] = basis;
	switch (type) {
		// primitive types
		case Tt.Pt: {
			const [, keyword, name] = basis;
			return createKeywordCaptorClass(name, keyword, tokenId, TokenType.PrimitiveType);
		}
		// groovy keyword
		case Tt.Gk:
		// eslint-disable-next-line no-fallthrough
		case Tt.Jk: { // java keyword
			const [, keyword, name] = basis;
			return createKeywordCaptorClass(name, keyword, tokenId, TokenType.Keyword);
		}
		// boolean literal
		case Tt.Bl: {
			const [, keywords, name] = basis;
			return [
				createKeywordCaptorClass(name + capitalize(keywords[0]), keywords[0], tokenId, TokenType.BooleanLiteral),
				createKeywordCaptorClass(name + capitalize(keywords[1]), keywords[1], tokenId, TokenType.BooleanLiteral)
			];
		}
		case Tt.Nl: {
			const [, keywordOrCaptors, name] = basis;
			if (typeof keywordOrCaptors === 'string') {
				return createKeywordCaptorClass(name, keywordOrCaptors, tokenId, TokenType.Mark);
			} else {
				return keywordOrCaptors;
			}
		}
		case Tt.Sl: {
			const [, keyword, name] = basis;
			return createStringLiteralMarkCaptorClass(name, keyword, tokenId);
		}
		// groovy operator
		case Tt.Go:
		// eslint-disable-next-line no-fallthrough
		case Tt.Jo: { // java operator
			const [, keyword, name] = basis;
			if ([TokenId.IN, TokenId.INSTANCEOF, TokenId.NOT_IN, TokenId.NOT_INSTANCEOF].includes(tokenId)) {
				return createKeywordCaptorClass(name, keyword, tokenId, TokenType.Operator);
			} else {
				return createOperatorCaptorClass(name, keyword, tokenId);
			}
		}
		// separator
		case Tt.Sp: {
			const [, keyword, name] = basis;
			return createSingleCharCaptorClass(name, keyword, tokenId, TokenType.Separator);
		}
		case Tt.Cm: {
			const [, keyword, name] = basis;
			return createMultiCharsCaptorClass(name, keyword, tokenId, TokenType.Mark);
		}
		case Tt.Scm: {
			const [, keyword, name] = basis;
			return createMultiCharsCaptorClass(name, keyword, tokenId, TokenType.Mark);
		}
		case Tt.Sch: {
			const [, char, name, tokenType] = basis;
			return createSameCharsCaptorClass(name, char, tokenId, tokenType);
		}
		case Tt.Snl: {
			const [, CaptorClasses] = basis;
			return CaptorClasses;
		}
		case Tt.Ct: {
			const [, CaptorClasses] = basis;
			return CaptorClasses;
		}
		default:
			throw new Error(`Unknown atomic token type[${type}].`);
	}
};

export const AtomicTokenDef: Readonly<{ [key in keyof typeof AtomicTokenBasis]: AtomicTokenCaptors }> = (() => {
	return Object.keys(AtomicTokenBasis).reduce((defs, tokenId) => {
		defs[tokenId] = createAtomicTokenDef(Number(tokenId) as TokenId, AtomicTokenBasis[tokenId]);
		return defs;
	}, {});
})();
