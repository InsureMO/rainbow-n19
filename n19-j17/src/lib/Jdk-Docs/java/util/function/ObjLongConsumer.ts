import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.function.ObjLongConsumer', [
	[/* class description */
		[/* text */ 't', `Represents an operation that accepts an object-valued and a
 `],
		[/* inline code block */ 'i', `long`],
		[/* text */ 't', `-valued argument, and returns no result.  This is the
 `],
		[/* inline code block */ 'i', `(reference, long)`],
		[/* text */ 't', ` specialization of `],
		[/* reference */ 'r', `java.util.function.BiConsumer`],
		[/* text */ 't', `.
 Unlike most other functional interfaces, `],
		[/* inline code block */ 'i', `ObjLongConsumer`],
		[/* text */ 't', ` is
 expected to operate via side-effects.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* reference */ 'r', `.package-summary`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `#accept(T,long)`, `accept(Object, long)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'accept(java.lang.Object,long)', [
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
