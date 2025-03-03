import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.function.BinaryOperator', [
	[/* class description */
		[/* text */ 't', `Represents an operation upon two operands of the same type, producing a result
 of the same type as the operands.  This is a specialization of
 `],
		[/* reference */ 'r', `java.util.function.BiFunction`],
		[/* text */ 't', ` for the case where the operands and the result are all of
 the same type.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* reference */ 'r', `.package-summary`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `.BiFunction#apply(T,U)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'maxBy(java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.function.BinaryOperator`],
				[/* text */ 't', ` which returns the greater of two elements
 according to the specified `],
				[/* inline code block */ 'i', `Comparator`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'comparator', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `Comparator`],
					[/* text */ 't', ` for comparing the two values`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `BinaryOperator`],
				[/* text */ 't', ` which returns the greater of its operands,
         according to the supplied `],
				[/* inline code block */ 'i', `Comparator`]
			]
		]],
		[/* method */ 'minBy(java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.function.BinaryOperator`],
				[/* text */ 't', ` which returns the lesser of two elements
 according to the specified `],
				[/* inline code block */ 'i', `Comparator`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'comparator', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `Comparator`],
					[/* text */ 't', ` for comparing the two values`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `BinaryOperator`],
				[/* text */ 't', ` which returns the lesser of its operands,
         according to the supplied `],
				[/* inline code block */ 'i', `Comparator`]
			]
		]]
	],
]);
