import {parseAst, warmup} from './debuggerOptions';

describe('Interface declaration', () => {
	// warm
	beforeAll(async () => warmup());

	test('interface Abc {}', async () => parseAst('interface Abc {}'));
	test('@interface Abc {}', async () => parseAst('@interface Abc {}'));
	test('interface Abc<X> {}', async () => parseAst('interface Abc<X> {}'));
	test('interface Abc<X, Y> {}', async () => parseAst('interface Abc<X, Y> {}'));
	test('interface Abc<X extends Number> {}', async () => parseAst('interface Abc<X extends Number> {}'));
	test('interface Abc<X extends Number, Y> {}', async () => parseAst('interface Abc<X extends Number, Y> {}'));
	test('interface Abc<X, Y extends Number> {}', async () => parseAst('interface Abc<X, Y extends Number> {}'));
	test('interface Abc<X extends Number & Clonable> {}', async () => parseAst('interface Abc<X extends Number & Clonable> {}'));
});
