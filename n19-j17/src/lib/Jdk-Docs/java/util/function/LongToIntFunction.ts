import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.function.LongToIntFunction', [
	[/* class description */
		[/* text */ 't', `Represents a function that accepts a long-valued argument and produces an
 int-valued result.  This is the `],
		[/* inline code block */ 'i', `long`],
		[/* text */ 't', `-to-`],
		[/* inline code block */ 'i', `int`],
		[/* text */ 't', ` primitive
 specialization for `],
		[/* reference */ 'r', `java.util.function.Function`, `Function`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* text */ 't', `functional interface`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `#applyAsInt(long)`, `applyAsInt(long)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'applyAsInt(long)', [
			[/* method description */
				[/* text */ 't', `Applies this function to the given argument.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the function argument`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the function result`]
			]
		]]
	],
]);
