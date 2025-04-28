import {TokenId} from '../../tokens';
import {AtomicTokenBasis} from './atomic-token';
import {
	createCommentsMarkDefClasses,
	createDualKeywordsDefClasses,
	createKeywordDefClasses,
	createMultiCharPatternsDefClasses,
	createOperatorDefClasses,
	createPrimitiveTypeDefClasses,
	createSameCharsDefClasses,
	createScriptCommentMarkDefClasses,
	createSeparatorDefClasses
} from './create-token-classes';
import {AtomicTokenBasisType, AtomicTokenDefType, Tt} from './internal';

const createAtomicTokenDef = (tokenId: TokenId, basis: AtomicTokenBasisType): AtomicTokenDefType => {
	const [type] = basis;
	switch (type) {
		// primitive types
		case Tt.Pt: {
			const [, keyword, name] = basis;
			return createPrimitiveTypeDefClasses(name, tokenId, keyword);
		}
		// groovy keyword
		case Tt.Gk:
		// eslint-disable-next-line no-fallthrough
		case Tt.Jk: { // java keyword
			const [, keyword, name] = basis;
			return createKeywordDefClasses(name, tokenId, keyword);
		}
		// boolean literal
		case Tt.Bl: {
			const [, keywords, name] = basis;
			return createDualKeywordsDefClasses(name, tokenId, keywords);
		}
		case Tt.Nl: {
			const [, keywordOrNodeClass, nameOrCaptorClass] = basis;
			if (typeof keywordOrNodeClass === 'string') {
				return createKeywordDefClasses(nameOrCaptorClass, tokenId, keywordOrNodeClass);
			} else {
				return [keywordOrNodeClass, nameOrCaptorClass];
			}
		}
		case Tt.Sl: {
			const [, keyword, name] = basis;
			return createKeywordDefClasses(name, tokenId, keyword);
		}
		// groovy operator
		case Tt.Go:
		// eslint-disable-next-line no-fallthrough
		case Tt.Jo: { // java operator
			const [, keyword, name] = basis;
			return createOperatorDefClasses(name, tokenId, keyword);
		}
		// separator
		case Tt.Sp: {
			const [, keyword, name] = basis;
			return createSeparatorDefClasses(name, tokenId, keyword);
		}
		case Tt.Cm: {
			const [, keyword, name] = basis;
			return createCommentsMarkDefClasses(name, tokenId, keyword);
		}
		case Tt.Scm: {
			const [, keyword, name] = basis;
			return createScriptCommentMarkDefClasses(name, tokenId, keyword);
		}
		case Tt.Sch: {
			const [, char, name] = basis;
			return createSameCharsDefClasses(name, tokenId, char);
		}
		case Tt.Mcp: {
			const [, matches, name] = basis;
			return createMultiCharPatternsDefClasses(name, tokenId, matches);
		}
		case Tt.Ct: {
			const [, NodeClass, CaptorClasses] = basis;
			return [NodeClass, CaptorClasses];
		}
		default:
			throw new Error(`Unknown atomic token type[${type}].`);
	}
};

export const AtomicTokenDef: Readonly<{ [key in keyof typeof AtomicTokenBasis]: AtomicTokenDefType }> = (() => {
	return Object.keys(AtomicTokenBasis).reduce((defs, tokenId) => {
		defs[tokenId] = createAtomicTokenDef(Number(tokenId) as TokenId, AtomicTokenBasis[tokenId]);
		return defs;
	}, {});
})();
