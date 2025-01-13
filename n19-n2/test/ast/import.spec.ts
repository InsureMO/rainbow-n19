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
});
