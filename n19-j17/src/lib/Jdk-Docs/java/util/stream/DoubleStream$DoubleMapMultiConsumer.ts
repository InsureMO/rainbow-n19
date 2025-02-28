import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.stream.DoubleStream$DoubleMapMultiConsumer', [
	[/* class description */
		[/* text */ 't', `Represents an operation that accepts a `],
		[/* inline code block */ 'i', `double`],
		[/* text */ 't', `-valued argument
 and a DoubleConsumer, and returns no result. This functional interface is
 used by `],
		[/* external link */ 'a', `DoubleStream.html#mapMulti(java.util.stream.DoubleStream.DoubleMapMultiConsumer)`, `DoubleStream.mapMulti`],
		[/* text */ 't', `
 to replace a double value with zero or more double values.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* external link */ 'a', `../function/package-summary.html`, `functional interface`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `accept(double, DoubleConsumer)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
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
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
