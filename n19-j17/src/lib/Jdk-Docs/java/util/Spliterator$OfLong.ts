import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Spliterator$OfLong', [
	[/* class description */
		[/* text */ 't', `A Spliterator specialized for `],
		[/* inline code block */ 'i', `long`],
		[/* text */ 't', ` values.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'tryAdvance(java.util.function.LongConsumer)', UDF],
		[/* method */ 'trySplit()', UDF],
		[/* method */ 'tryAdvance(java.util.function.Consumer)', [
			[/* method description */
				[/* text */ 't', `If a remaining element exists, performs the given action on it,
 returning `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `; else returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.  If this
 Spliterator is `],
				[/* reference */ 'r', `.Spliterator#ORDERED`],
				[/* text */ 't', ` the action is performed on the
 next element in encounter order.  Exceptions thrown by the
 action are relayed to the caller.
 `],
				[/* block */ 'b', `
 Subsequent behavior of a spliterator is unspecified if the action throws
 an exception.`]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `The action`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if no remaining elements existed
 upon entry to this method, else `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'forEachRemaining(java.util.function.Consumer)', [
			[/* method description */
				[/* text */ 't', `Performs the given action for each remaining element, sequentially in
 the current thread, until all elements have been processed or the action
 throws an exception.  If this Spliterator is `],
				[/* reference */ 'r', `.Spliterator#ORDERED`],
				[/* text */ 't', `, actions
 are performed in encounter order.  Exceptions thrown by the action
 are relayed to the caller.
 `],
				[/* block */ 'b', `
 Subsequent behavior of a spliterator is unspecified if the action throws
 an exception.`]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `The action`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'forEachRemaining(java.util.function.LongConsumer)', UDF]
	],
]);
