import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.PrimitiveIterator$OfDouble', [
	[/* class description */
		[/* text */ 't', `An Iterator specialized for `],
		[/* inline code block */ 'i', `double`],
		[/* text */ 't', ` values.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'forEachRemaining(java.util.function.DoubleConsumer)', [
			[/* method description */
				[/* text */ 't', `Performs the given action for each remaining element until all elements
 have been processed or the action throws an exception.  Actions are
 performed in the order of iteration, if that order is specified.
 Exceptions thrown by the action are relayed to the caller.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The behavior of an iterator is unspecified if the action modifies the
 source of elements in any way (even by calling the `],
					[/* external link */ 'a', `Iterator.html#remove()`, `remove`],
					[/* text */ 't', `
 method or other mutator methods of `],
					[/* inline code block */ 'i', `Iterator`],
					[/* text */ 't', ` subtypes),
 unless an overriding class has specified a concurrent modification policy.
 `]
				]],
				[/* block */ 'b', `
 Subsequent behavior of an iterator is unspecified if the action throws an
 exception.`]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `The action to be performed for each element`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'forEachRemaining(java.util.function.Consumer)', [
			[/* method description */
				[/* text */ 't', `Performs the given action for each remaining element until all elements
 have been processed or the action throws an exception.  Actions are
 performed in the order of iteration, if that order is specified.
 Exceptions thrown by the action are relayed to the caller.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The behavior of an iterator is unspecified if the action modifies the
 collection in any way (even by calling the `],
					[/* external link */ 'a', `Iterator.html#remove()`, `remove`],
					[/* text */ 't', ` method
 or other mutator methods of `],
					[/* inline code block */ 'i', `Iterator`],
					[/* text */ 't', ` subtypes),
 unless an overriding class has specified a concurrent modification policy.
 `]
				]],
				[/* block */ 'b', `
 Subsequent behavior of an iterator is unspecified if the action throws an
 exception.`]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `The action to be performed for each element`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'next()', [
			[/* method description */
				[/* text */ 't', `Returns the next element in the iteration.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the next element in the iteration`]
			]
		]],
		[/* method */ 'nextDouble()', [
			[/* method description */
				[/* text */ 't', `Returns the next `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` element in the iteration.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if the iteration has no more elements`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` element in the iteration`]
			]
		]]
	],
]);
