import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.function.ToIntBiFunction', [
	[/* class description */
		[/* text */ 't', `Represents a function that accepts two arguments and produces an int-valued
 result.  This is the `],
		[/* inline code block */ 'i', `int`],
		[/* text */ 't', `-producing primitive specialization for
 `],
		[/* reference */ 'r', `java.util.function.BiFunction`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* external link */ 'a', `package-summary.html`, `functional interface`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `applyAsInt(Object, Object)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'applyAsInt(java.lang.Object,java.lang.Object)', [
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
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the function result`]
			]
		]]
	],
]);
