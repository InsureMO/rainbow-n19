import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.function.BiFunction', [
	[/* class description */
		[/* text */ 't', `Represents a function that accepts two arguments and produces a result.
 This is the two-arity specialization of `],
		[/* reference */ 'r', `java.util.function.Function`, `Function`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* text */ 't', `functional interface`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `#apply(T,U)`, `apply(Object, Object)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'apply(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Applies this function to the given arguments.`]
			],
			[/* parameters */
				[/* parameter */ 't', [/* parameter description */
					[/* text */ 't', `the first function argument`]
				]],
				[/* parameter */ 'u', [/* parameter description */
					[/* text */ 't', `the second function argument`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the function result`]
			]
		]],
		[/* method */ 'andThen(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Returns a composed function that first applies this function to
 its input, and then applies the `],
				[/* inline code block */ 'i', `after`],
				[/* text */ 't', ` function to the result.
 If evaluation of either function throws an exception, it is relayed to
 the caller of the composed function.`]
			],
			[/* parameters */
				[/* parameter */ 'after', [/* parameter description */
					[/* text */ 't', `the function to apply after this function is applied`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if after is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a composed function that first applies this function and then
 applies the `],
				[/* inline code block */ 'i', `after`],
				[/* text */ 't', ` function`]
			]
		]]
	],
	/* enum values */ UDF
]);
