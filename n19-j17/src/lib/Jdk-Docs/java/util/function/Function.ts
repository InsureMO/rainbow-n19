import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.function.Function', [
	[/* class description */
		[/* text */ 't', `Represents a function that accepts one argument and produces a result.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* text */ 't', `functional interface`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `#apply(T)`, `apply(Object)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'apply(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Applies this function to the given argument.`]
			],
			[/* parameters */
				[/* parameter */ 't', [/* parameter description */
					[/* text */ 't', `the function argument`]
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
		]],
		[/* method */ 'compose(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Returns a composed function that first applies the `],
				[/* inline code block */ 'i', `before`],
				[/* text */ 't', `
 function to its input, and then applies this function to the result.
 If evaluation of either function throws an exception, it is relayed to
 the caller of the composed function.`]
			],
			[/* parameters */
				[/* parameter */ 'before', [/* parameter description */
					[/* text */ 't', `the function to apply before this function is applied`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if before is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a composed function that first applies the `],
				[/* inline code block */ 'i', `before`],
				[/* text */ 't', `
 function and then applies this function`]
			]
		]],
		[/* method */ 'identity()', [
			[/* method description */
				[/* text */ 't', `Returns a function that always returns its input argument.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a function that always returns its input argument`]
			]
		]]
	],
	/* enum values */ UDF
]);
