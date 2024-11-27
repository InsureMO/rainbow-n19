// noinspection ES6PreferShortImport

import Decimal from 'decimal.js';
import '../src/lib/decimaljs-init';
import {ValueOperator as VO} from '../src/lib/value-operator';
import {FormatType, Rounding} from '../src/lib/value-operators';

Decimal.set({precision: 200, rounding: Decimal.ROUND_HALF_UP});
describe('Value test chain', () => {
	test('Test 1', async () => {
		expect(VO.from('abc').isNotBlank().orUseDefault('default').value()).toEqual('abc');
		expect(VO.from('').isNotBlank.withDefault('default').value()).toEqual('default');
		expect(VO.from('123').isNumber().toFixed(2).value()).toEqual('123.00');
		expect(VO.from(void 0).isNumber.useDefault(100).value()).toEqual(100);
		expect(VO.with(123).isInt.toFixed2.value()).toEqual('123.00');
		expect(VO.of('123.45').within({min: 100, max: 200}).toFixed3().orElse(150).value()).toEqual('123.450');
		console.log({
			'decimal: number, 5.0000000000000001': new Decimal(5.0000000000000001).isInteger(),
			'decimal: string, 5.0000000000000001': new Decimal('5.0000000000000001').isInteger(),
			'decimal: 0.1 + 0.2': new Decimal(0.1).add(0.2).toNumber()
		});

		VO.of(123).isPositive
			.success((value: number) => console.log('isPositive', value))
			.failure((value: number) => console.log('isNotPositive', value));
		VO.of(-123).isPositive
			.success((value: number) => console.log('isPositive', value))
			.failure((value: number) => console.log('isNotPositive', value));
		expect(VO.of(123).isPositive.ok()).toEqual(true);
		expect(VO.of(-123).isPositive.ok()).toEqual(false);
		try {
			const v = await VO.of(123).isPositive.toNumber.promise();
			expect(v).toEqual(123);
			await VO.of(-123).isPositive.promise();
		} catch (v) {
			expect(v).toEqual(-123);
		}

		const formatted = VO.of('1234567890987654321.0123456')
			.format({
				type: FormatType.NUMBER,
				fractionDigits: 5,
				round: Rounding.ROUND_DOWN,
				percent: 'myriad'
			}).value();
		console.log(formatted);

		const x = 'abc';
		expect(VO.of(x).isNotBlank.ok()).toBe(true);
		VO.of(x).isNotBlank.success((v) => console.log(v)); // abc
		const y = -1;
		expect(VO.from(y).isPositive().orUseDefault(0).value()).toBe(0);
		expect(VO.from(y).isNegative.isInteger.replaceWith((n: number) => {
			return n * 10
		}).toNumber.value()).toBe(-10);

		// VO.of(null).x.isNumber.toNumber.orUseDefault(0).value();

		// console.log(new Decimal({} as any).isInteger());
		interface AskImportConfigRequest {
			type?: string;
			pageSize?: number;
			pageNumber?: number;
		}

		const {type, pageSize, pageNumber} = {} as AskImportConfigRequest;
		const criteria: AskImportConfigRequest = {type};
		criteria.pageSize = VO.of(pageSize).isPositive.toFixed0.toNumber.orUseDefault(20).value();
		criteria.pageNumber = VO.of(pageNumber).isPositive.toFixed0.toNumber.orUseDefault(1).value();
	});

	afterAll((done) => done());
});
