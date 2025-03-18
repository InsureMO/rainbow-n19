import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.function.ObjDoubleConsumer', [
	[/* class description */
		[/* text */ 't', `Represents an operation that accepts an object-valued and a
 `],
		[/* inline code block */ 'i', `double`],
		[/* text */ 't', `-valued argument, and returns no result.  This is the
 `],
		[/* inline code block */ 'i', `(reference, double)`],
		[/* text */ 't', ` specialization of `],
		[/* reference */ 'r', `java.util.function.BiConsumer`, `BiConsumer`],
		[/* text */ 't', `.
 Unlike most other functional interfaces, `],
		[/* inline code block */ 'i', `ObjDoubleConsumer`],
		[/* text */ 't', ` is
 expected to operate via side-effects.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* text */ 't', `functional interface`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `#accept(T,double)`, `accept(Object, double)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'accept(java.lang.Object,double)', [
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
			/* throws */,
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
