import {parseAst, warmup} from './debuggerOptions';

describe('Import declaration', () => {
	// warm
	beforeAll(async () => warmup());

	test('import abc', async () => parseAst('import abc'));
	test('import abc.de', async () => parseAst('import abc.de'));
	test('import abc.de.*', async () => parseAst('import abc.de.*'));
	test('import abc.de.x as y', async () => parseAst('import abc.de.x as y'));

	test('import static abc.x', async () => parseAst('import static abc.x'));
	test('import static abc.x.*', async () => parseAst('import static abc.x.*'));
	test('import static abc.x as y', async () => parseAst('import static abc.x as y'));

	test('@X import abc.de;', async () => parseAst('@X import abc.de;'));
	test('@X(1) import abc.de;', async () => parseAst('@X(1) import abc.de;'));
	test('@X(a = 1) import abc.de;', async () => parseAst('@X(a = 1) import abc.de;'));
	test('@X(a = 1, b = "2") import abc.de;', async () => parseAst('@X(a = 1, b = "2") import abc.de;'));
	test('@X(true) import abc.de;', async () => parseAst('@X(true) import abc.de;'));
	test('@X(a = true) import abc.de;', async () => parseAst('@X(a = true) import abc.de;'));
	test('@X([0,1]) import abc.de;', async () => parseAst('@X([0,1]) import abc.de;'));
	test('@X([0,]) import abc.de;', async () => parseAst('@X([0,]) import abc.de;'));
});
