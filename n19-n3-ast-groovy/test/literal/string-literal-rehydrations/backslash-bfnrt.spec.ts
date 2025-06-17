import {GroovyAstBuilder} from '../../../src';

describe('String literal rehydration tests: Backslash + BFNRT', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	// \b\f\n\r\t
});
