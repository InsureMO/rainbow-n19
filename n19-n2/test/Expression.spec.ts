import {GroovyParser, IdentifierContext} from '../src/lib/OrgApacheGroovyParserAntlr4';
import {gprc} from '../src/lib/ParsedGroovyAst';

describe('Expression Test', () => {
	class X extends IdentifierContext {
		a: number = 1;
	}

	class Y extends X {
	}

	class Z extends X {
	}

	const testIsSth = <T extends typeof X>(instance: X, sth: T): boolean => {
		return instance instanceof sth;
	};

	test('Test 1', async () => {
		const y = new Y();
		console.time('use instanceof');
		for (let i = 0; i < 1000000; i++) {
			const x = y instanceof X;
		}
		console.timeEnd('use instanceof');
		console.time('use gprc');
		for (let i = 0; i < 1000000; i++) {
			const x = gprc(y).ruleIndex === GroovyParser.RULE_identifier;
		}
		console.timeEnd('use gprc');
		// expect(testIsSth(y, X)).toBe(true);
		// expect(testIsSth(y, Y)).toBe(true);
		// expect(testIsSth(y, Z)).toBe(false);
	});
});
