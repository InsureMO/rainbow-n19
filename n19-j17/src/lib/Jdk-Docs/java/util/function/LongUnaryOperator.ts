import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.function.LongUnaryOperator', [
	[/* class description */
		[/* text */ 't', `Represents an operation on a single `],
		[/* inline code block */ 'i', `long`],
		[/* text */ 't', `-valued operand that produces
 a `],
		[/* inline code block */ 'i', `long`],
		[/* text */ 't', `-valued result.  This is the primitive type specialization of
 `],
		[/* reference */ 'r', `java.util.function.UnaryOperator`],
		[/* text */ 't', ` for `],
		[/* inline code block */ 'i', `long`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* reference */ 'r', `.package-summary`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `#applyAsLong(long)`, `applyAsLong(long)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'applyAsLong(long)', [
			[/* method description */
				[/* text */ 't', `Applies this operator to the given operand.`]
			],
			[/* parameters */
				[/* parameter */ 'operand', [/* parameter description */
					[/* text */ 't', `the operand`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the operator result`]
			]
		]],
		[/* method */ 'andThen(java.util.function.LongUnaryOperator)', [
			[/* method description */
				[/* text */ 't', `Returns a composed operator that first applies this operator to
 its input, and then applies the `],
				[/* inline code block */ 'i', `after`],
				[/* text */ 't', ` operator to the result.
 If evaluation of either operator throws an exception, it is relayed to
 the caller of the composed operator.`]
			],
			[/* parameters */
				[/* parameter */ 'after', [/* parameter description */
					[/* text */ 't', `the operator to apply after this operator is applied`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if after is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a composed operator that first applies this operator and then
 applies the `],
				[/* inline code block */ 'i', `after`],
				[/* text */ 't', ` operator`]
			]
		]],
		[/* method */ 'compose(java.util.function.LongUnaryOperator)', [
			[/* method description */
				[/* text */ 't', `Returns a composed operator that first applies the `],
				[/* inline code block */ 'i', `before`],
				[/* text */ 't', `
 operator to its input, and then applies this operator to the result.
 If evaluation of either operator throws an exception, it is relayed to
 the caller of the composed operator.`]
			],
			[/* parameters */
				[/* parameter */ 'before', [/* parameter description */
					[/* text */ 't', `the operator to apply before this operator is applied`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if before is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a composed operator that first applies the `],
				[/* inline code block */ 'i', `before`],
				[/* text */ 't', `
 operator and then applies this operator`]
			]
		]],
		[/* method */ 'identity()', [
			[/* method description */
				[/* text */ 't', `Returns a unary operator that always returns its input argument.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a unary operator that always returns its input argument`]
			]
		]]
	],
]);
