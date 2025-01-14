import {parseAst, warmup} from './debuggerOptions';

describe('Interface declaration', () => {
	// warm
	beforeAll(async () => warmup());

	test('interface Abc {}', async () => parseAst('interface Abc {}'));
	test('@interface Abc {}', async () => parseAst('@interface Abc {}'));
	test('interface Abc<X> {}', async () => parseAst('interface Abc<X> {}'));
});
