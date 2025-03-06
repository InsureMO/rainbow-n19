import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.function.IntBinaryOperator', [
	[/* class description */
		[/* text */ 't', `Represents an operation upon two `],
		[/* inline code block */ 'i', `int`],
		[/* text */ 't', `-valued operands and producing an
 `],
		[/* inline code block */ 'i', `int`],
		[/* text */ 't', `-valued result.   This is the primitive type specialization of
 `],
		[/* reference */ 'r', `java.util.function.BinaryOperator`, `BinaryOperator`],
		[/* text */ 't', ` for `],
		[/* inline code block */ 'i', `int`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* text */ 't', `functional interface`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `#applyAsInt(int,int)`, `applyAsInt(int, int)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'applyAsInt(int,int)', [
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
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the operator result`]
			]
		]]
	],
]);
