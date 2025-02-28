import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.stream.LongStream$Builder', [
	[/* class description */
		[/* text */ 't', `A mutable builder for a `],
		[/* inline code block */ 'i', `LongStream`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `A stream builder has a lifecycle, which starts in a building
 phase, during which elements can be added, and then transitions to a built
 phase, after which elements may not be added.  The built phase begins
 begins when the `],
			[/* reference */ 'r', `build()`],
			[/* text */ 't', ` method is called, which creates an
 ordered stream whose elements are the elements that were added to the
 stream builder, in the order they were added.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'add(long)', [
			[/* method description */
				[/* text */ 't', `Adds an element to the stream being built.`]
			],
			[/* parameters */
				[/* parameter */ 't', [/* parameter description */
					[/* text */ 't', `the element to add`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if the builder has already transitioned
 to the built state`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` builder`]
			]
		]],
		[/* method */ 'accept(long)', [
			[/* method description */
				[/* text */ 't', `Adds an element to the stream being built.`]
			],
			[/* parameters */
				[/* parameter */ 't', [/* parameter description */
					[/* text */ 't', `the input argument`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if the builder has already transitioned
 to the built state`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'build()', [
			[/* method description */
				[/* text */ 't', `Builds the stream, transitioning this builder to the built state.
 An `],
				[/* inline code block */ 'i', `IllegalStateException`],
				[/* text */ 't', ` is thrown if there are further
 attempts to operate on the builder after it has entered the built
 state.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if the builder has already transitioned
 to the built state`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the built stream`]
			]
		]]
	],
]);
