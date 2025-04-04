import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.PrimitiveIterator$OfInt', [
	[/* class description */
		[/* text */ 't', `An Iterator specialized for `],
		[/* inline code block */ 'i', `int`],
		[/* text */ 't', ` values.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'nextInt()', [
			[/* method description */
				[/* text */ 't', `Returns the next `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` element in the iteration.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if the iteration has no more elements`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` element in the iteration`]
			]
		]],
		[/* method */ 'next()', [
			[/* method description */
				[/* text */ 't', `Returns the next element in the iteration.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the next element in the iteration`]
			]
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
					[/* reference */ 'r', `java.util.Iterator#remove()`, `remove`],
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
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'forEachRemaining(java.util.function.IntConsumer)', [
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
					[/* reference */ 'r', `java.util.Iterator#remove()`, `remove`],
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
			/* throws */,
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
