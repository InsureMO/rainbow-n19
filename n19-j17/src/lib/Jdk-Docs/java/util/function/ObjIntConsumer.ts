import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.function.ObjIntConsumer', [
	[/* class description */
		[/* text */ 't', `Represents an operation that accepts an object-valued and a
 `],
		[/* inline code block */ 'i', `int`],
		[/* text */ 't', `-valued argument, and returns no result.  This is the
 `],
		[/* inline code block */ 'i', `(reference, int)`],
		[/* text */ 't', ` specialization of `],
		[/* reference */ 'r', `java.util.function.BiConsumer`],
		[/* text */ 't', `.
 Unlike most other functional interfaces, `],
		[/* inline code block */ 'i', `ObjIntConsumer`],
		[/* text */ 't', ` is
 expected to operate via side-effects.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* reference */ 'r', `.package-summary`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `#accept(T,int)`, `accept(Object, int)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'accept(java.lang.Object,int)', [
			[/* method description */
				[/* text */ 't', `Performs this operation on the given arguments.`]
			],
			[/* parameters */
				[/* parameter */ 't', [/* parameter description */
					[/* text */ 't', `the first input argument`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the second input argument`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
