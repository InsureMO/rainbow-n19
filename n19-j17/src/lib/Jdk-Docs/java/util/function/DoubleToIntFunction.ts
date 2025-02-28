import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.function.DoubleToIntFunction', [
	[/* class description */
		[/* text */ 't', `Represents a function that accepts a double-valued argument and produces an
 int-valued result.  This is the `],
		[/* inline code block */ 'i', `double`],
		[/* text */ 't', `-to-`],
		[/* inline code block */ 'i', `int`],
		[/* text */ 't', ` primitive
 specialization for `],
		[/* reference */ 'r', `java.util.function.Function`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* external link */ 'a', `package-summary.html`, `functional interface`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `applyAsInt(double)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'applyAsInt(double)', [
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
