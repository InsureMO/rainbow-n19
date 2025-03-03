import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.function.IntFunction', [
	[/* class description */
		[/* text */ 't', `Represents a function that accepts an int-valued argument and produces a
 result.  This is the `],
		[/* inline code block */ 'i', `int`],
		[/* text */ 't', `-consuming primitive specialization for
 `],
		[/* reference */ 'r', `java.util.function.Function`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* reference */ 'r', `.package-summary`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `#apply(int)`, `apply(int)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'apply(int)', [
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
