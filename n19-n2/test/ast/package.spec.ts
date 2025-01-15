import {parseAst, warmup} from './debuggerOptions';

describe('Package declaration', () => {
	// warm
	beforeAll(async () => warmup());

	test('package abc', async () => parseAst('package abc'));
	test('package abc.de;', async () => parseAst('package abc.de;'));
	test('@X package abc.de;', async () => parseAst('@X package abc.de;'));
	test('@X(1) package abc.de;', async () => parseAst('@X(1) package abc.de;'));
	test('@X(a = 1) package abc.de;', async () => parseAst('@X(a = 1) package abc.de;'));
	test('@X(a = 1, b = "2") package abc.de;', async () => parseAst('@X(a = 1, b = "2") package abc.de;'));
	test('@X(true) package abc.de;', async () => parseAst('@X(true) package abc.de;'));
	test('@X(a = true) package abc.de;', async () => parseAst('@X(a = true) package abc.de;'));
	test('@X([0,1]) package abc.de;', async () => parseAst('@X([0,1]) package abc.de;'));
	test('@X([0,]) package abc.de;', async () => parseAst('@X([0,]) package abc.de;'));
});
