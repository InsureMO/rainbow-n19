import {TokenId, TokenType} from '../../tokens';
import {AtomicTokenBasis} from './atomic-token';
import {
	createKeywordCaptorClass,
	createMultiCharPatternsCaptorClasses,
	createMultiCharsCaptorClass,
	createOperatorCaptorClass,
	createSameCharsCaptorClass,
	createSingleCharCaptorClass
} from './create-token-classes';
import {AtomicTokenBasisType, AtomicTokenCaptors, Tt} from './internal';

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
				createKeywordCaptorClass(name, keywords[0], tokenId, TokenType.BooleanLiteral),
				createKeywordCaptorClass(name, keywords[1], tokenId, TokenType.BooleanLiteral)
			];
		}
		case Tt.Nl: {
			const [, keywordOrCaptors, name] = basis;
			if (typeof keywordOrCaptors === 'string') {
				return createKeywordCaptorClass(name, keywordOrCaptors, tokenId, TokenType.NumberLiteral);
			} else {
				return keywordOrCaptors;
			}
		}
		case Tt.Sl: {
			const [, keyword, name] = basis;
			return createKeywordCaptorClass(name, keyword, tokenId, TokenType.StringLiteral);
		}
		// groovy operator
		case Tt.Go:
		// eslint-disable-next-line no-fallthrough
		case Tt.Jo: { // java operator
			const [, keyword, name] = basis;
			return createOperatorCaptorClass(name, keyword, tokenId);
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
		case Tt.Mcp: {
			const [, matches, name, tokenType] = basis;
			return createMultiCharPatternsCaptorClasses(name, matches, tokenId, tokenType);
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
