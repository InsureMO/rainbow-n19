import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.function.DoubleBinaryOperator', [
	[/* class description */
		[/* text */ 't', `Represents an operation upon two `],
		[/* inline code block */ 'i', `double`],
		[/* text */ 't', `-valued operands and producing a
 `],
		[/* inline code block */ 'i', `double`],
		[/* text */ 't', `-valued result.   This is the primitive type specialization of
 `],
		[/* reference */ 'r', `java.util.function.BinaryOperator`, `BinaryOperator`],
		[/* text */ 't', ` for `],
		[/* inline code block */ 'i', `double`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* text */ 't', `functional interface`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `#applyAsDouble(double,double)`, `applyAsDouble(double, double)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'applyAsDouble(double,double)', [
			[/* method description */
				[/* text */ 't', `Applies this operator to the given operands.`]
			],
			[/* parameters */
				[/* parameter */ 'left', [/* parameter description */
					[/* text */ 't', `the first operand`]
				]],
				[/* parameter */ 'right', [/* parameter description */
					[/* text */ 't', `the second operand`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the operator result`]
			]
		]]
	],
	/* enum values */ UDF
]);
