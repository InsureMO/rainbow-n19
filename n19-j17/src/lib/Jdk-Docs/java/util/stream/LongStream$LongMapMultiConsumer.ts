import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.stream.LongStream$LongMapMultiConsumer', [
	[/* class description */
		[/* text */ 't', `Represents an operation that accepts a `],
		[/* inline code block */ 'i', `long`],
		[/* text */ 't', `-valued argument
 and a LongConsumer, and returns no result. This functional interface is
 used by `],
		[/* reference */ 'r', `java.util.stream.LongStream#mapMulti(java.util.stream.LongStream.LongMapMultiConsumer)`, `LongStream.mapMulti`],
		[/* text */ 't', `
 to replace a long value with zero or more long values.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* text */ 't', `functional interface`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `#accept(long,java.util.function.LongConsumer)`, `accept(long, LongConsumer)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'accept(long,java.util.function.LongConsumer)', [
			[/* method description */
				[/* text */ 't', `Replaces the given `],
				[/* inline code block */ 'i', `value`],
				[/* text */ 't', ` with zero or more values by feeding the mapped
 values to the `],
				[/* inline code block */ 'i', `lc`],
				[/* text */ 't', ` consumer.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the long value coming from upstream`]
				]],
				[/* parameter */ 'lc', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `LongConsumer`],
					[/* text */ 't', ` accepting the mapped values`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
