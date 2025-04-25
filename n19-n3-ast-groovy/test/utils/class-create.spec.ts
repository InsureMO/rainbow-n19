describe('Class create test', () => {
	test('Class create #1', async () => {
		const abc = (name: string) => {
			return class {
				get name(): string {
					return name;
				}
			};
		};
		const X = abc('x');
		const x = new X();
		console.log(x);
	});
});