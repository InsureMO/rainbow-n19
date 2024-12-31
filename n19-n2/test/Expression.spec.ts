describe('Expression Test', () => {
	class X {
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
		expect(testIsSth(y, X)).toBe(true);
		expect(testIsSth(y, Y)).toBe(true);
		expect(testIsSth(y, Z)).toBe(false);
	});
});
