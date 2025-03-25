describe('Split string', () => {
	test('Split string', async () => {
		const x = new Array(999999).fill(1).map(() => 'a').join('');
		console.time('aaa');
		const y = x.split('');
		console.timeEnd('aaa');
	});
});
