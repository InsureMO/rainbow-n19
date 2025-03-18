import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.stream.DoubleStream$DoubleMapMultiConsumer', [
	[/* class description */
		[/* text */ 't', `Represents an operation that accepts a `],
		[/* inline code block */ 'i', `double`],
		[/* text */ 't', `-valued argument
 and a DoubleConsumer, and returns no result. This functional interface is
 used by `],
		[/* reference */ 'r', `java.util.stream.DoubleStream#mapMulti(java.util.stream.DoubleStream.DoubleMapMultiConsumer)`, `DoubleStream.mapMulti`],
		[/* text */ 't', `
 to replace a double value with zero or more double values.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* text */ 't', `functional interface`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `#accept(double,java.util.function.DoubleConsumer)`, `accept(double, DoubleConsumer)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'accept(double,java.util.function.DoubleConsumer)', [
			[/* method description */
				[/* text */ 't', `Replaces the given `],
				[/* inline code block */ 'i', `value`],
				[/* text */ 't', ` with zero or more values by feeding the mapped
 values to the `],
				[/* inline code block */ 'i', `dc`],
				[/* text */ 't', ` consumer.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the double value coming from upstream`]
				]],
				[/* parameter */ 'dc', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `DoubleConsumer`],
					[/* text */ 't', ` accepting the mapped values`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
