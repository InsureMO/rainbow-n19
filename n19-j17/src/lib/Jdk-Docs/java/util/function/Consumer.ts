import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.function.Consumer', [
	[/* class description */
		[/* text */ 't', `Represents an operation that accepts a single input argument and returns no
 result. Unlike most other functional interfaces, `],
		[/* inline code block */ 'i', `Consumer`],
		[/* text */ 't', ` is expected
 to operate via side-effects.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* external link */ 'a', `package-summary.html`, `functional interface`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `accept(Object)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'accept(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Performs this operation on the given argument.`]
			],
			[/* parameters */
				[/* parameter */ 't', [/* parameter description */
					[/* text */ 't', `the input argument`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'andThen(java.util.function.Consumer)', [
			[/* method description */
				[/* text */ 't', `Returns a composed `],
				[/* inline code block */ 'i', `Consumer`],
				[/* text */ 't', ` that performs, in sequence, this
 operation followed by the `],
				[/* inline code block */ 'i', `after`],
				[/* text */ 't', ` operation. If performing either
 operation throws an exception, it is relayed to the caller of the
 composed operation.  If performing this operation throws an exception,
 the `],
				[/* inline code block */ 'i', `after`],
				[/* text */ 't', ` operation will not be performed.`]
			],
			[/* parameters */
				[/* parameter */ 'after', [/* parameter description */
					[/* text */ 't', `the operation to perform after this operation`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `after`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a composed `],
				[/* inline code block */ 'i', `Consumer`],
				[/* text */ 't', ` that performs in sequence this
 operation followed by the `],
				[/* inline code block */ 'i', `after`],
				[/* text */ 't', ` operation`]
			]
		]]
	],
]);
