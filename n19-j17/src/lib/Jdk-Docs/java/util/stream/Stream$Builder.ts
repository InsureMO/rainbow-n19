import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.stream.Stream$Builder', [
	[/* class description */
		[/* text */ 't', `A mutable builder for a `],
		[/* inline code block */ 'i', `Stream`],
		[/* text */ 't', `.  This allows the creation of a
 `],
		[/* inline code block */ 'i', `Stream`],
		[/* text */ 't', ` by generating elements individually and adding them to the
 `],
		[/* inline code block */ 'i', `Builder`],
		[/* text */ 't', ` (without the copying overhead that comes from using
 an `],
		[/* inline code block */ 'i', `ArrayList`],
		[/* text */ 't', ` as a temporary buffer.)

 `],
		[/* block */ 'b', [
			[/* text */ 't', `A stream builder has a lifecycle, which starts in a building
 phase, during which elements can be added, and then transitions to a built
 phase, after which elements may not be added.  The built phase begins
 when the `],
			[/* reference */ 'r', `build()`],
			[/* text */ 't', ` method is called, which creates an ordered
 `],
			[/* inline code block */ 'i', `Stream`],
			[/* text */ 't', ` whose elements are the elements that were added to the stream
 builder, in the order they were added.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'add(java.lang.Object)', [
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
					[/* text */ 't', `if the builder has already transitioned to
 the built state`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` builder`]
			]
		]],
		[/* method */ 'accept(java.lang.Object)', [
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
					[/* text */ 't', `if the builder has already transitioned to
 the built state`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'build()', [
			[/* method description */
				[/* text */ 't', `Builds the stream, transitioning this builder to the built state.
 An `],
				[/* inline code block */ 'i', `IllegalStateException`],
				[/* text */ 't', ` is thrown if there are further attempts
 to operate on the builder after it has entered the built state.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if the builder has already transitioned to
 the built state`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the built stream`]
			]
		]]
	],
]);
