import {parseAst, warmup} from './debuggerOptions';

describe('Package declaration', () => {
	// warm
	beforeAll(async () => warmup());

	test('package abc', async () => parseAst('package abc'));
	test('package abc.de', async () => parseAst('package abc.de;'));
});
