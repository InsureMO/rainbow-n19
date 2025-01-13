import {parseAst, warmup} from './debuggerOptions';

describe('Package declaration', () => {
	// warm
	beforeAll(async () => warmup());

	test('def x = 1', async () => parseAst('def x = 1'));
});
