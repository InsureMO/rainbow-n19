import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.stream.IntStream$IntMapMultiConsumer', [
	[/* class description */
		[/* text */ 't', `Represents an operation that accepts an `],
		[/* inline code block */ 'i', `int`],
		[/* text */ 't', `-valued argument
 and an IntConsumer, and returns no result. This functional interface is
 used by `],
		[/* reference */ 'r', `.IntStream#mapMulti(java.util.stream.IntStream.IntMapMultiConsumer)`],
		[/* text */ 't', `
 to replace an int value with zero or more int values.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* text */ 't', `functional interface`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `#accept(int,java.util.function.IntConsumer)`, `accept(int, IntConsumer)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'accept(int,java.util.function.IntConsumer)', [
			[/* method description */
				[/* text */ 't', `Replaces the given `],
				[/* inline code block */ 'i', `value`],
				[/* text */ 't', ` with zero or more values by feeding the mapped
 values to the `],
				[/* inline code block */ 'i', `ic`],
				[/* text */ 't', ` consumer.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the int value coming from upstream`]
				]],
				[/* parameter */ 'ic', [/* parameter description */
					[/* text */ 't', `an `],
					[/* inline code block */ 'i', `IntConsumer`],
					[/* text */ 't', ` accepting the mapped values`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
