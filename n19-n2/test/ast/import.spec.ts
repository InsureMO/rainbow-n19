import {parseAst, warmup} from './debuggerOptions';

describe('Import declaration', () => {
	// warm
	beforeAll(async () => warmup());

	test('import abc', async () => parseAst('import abc'));
	test('import abc.de', async () => parseAst('import abc.de'));

	test('import static abc.x', async () => parseAst('import static abc.x'));
});
