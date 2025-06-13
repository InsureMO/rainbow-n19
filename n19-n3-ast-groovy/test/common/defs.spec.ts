import {GroovyAstBuilder, PointcutBasis, RecognizerBasis, TokenId} from '../../src';

describe('Ast defs test', () => {
	test('Ast defs #1', async () => {
		GroovyAstBuilder.printDefs(true);

		const missDefinedTokens = Object.keys(TokenId)
			.filter(key => '0123456789'.includes(key[0]))
			.map(key => {
				const tokenId = Number(key);
				if (RecognizerBasis[tokenId] == null && PointcutBasis[tokenId] == null) {
					return tokenId;
				} else {
					return null;
				}
			})
			.filter(x => x != null)
			.map(tokenId => TokenId[tokenId]);

		console.log(missDefinedTokens);
	});
});