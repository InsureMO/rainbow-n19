import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.function.ToLongFunction', [
	[/* class description */
		[/* text */ 't', `Represents a function that produces a long-valued result.  This is the
 `],
		[/* inline code block */ 'i', `long`],
		[/* text */ 't', `-producing primitive specialization for `],
		[/* reference */ 'r', `java.util.function.Function`, `Function`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* text */ 't', `functional interface`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `#applyAsLong(T)`, `applyAsLong(Object)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'applyAsLong(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Applies this function to the given argument.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the function argument`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the function result`]
			]
		]]
	],
	/* enum values */ UDF
]);
