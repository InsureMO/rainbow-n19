import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Spliterator$OfPrimitive', [
	[/* class description */
		[/* text */ 't', `A Spliterator specialized for primitive values.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'tryAdvance(java.lang.Object)', [
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
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified action is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if no remaining elements existed
 upon entry to this method, else `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'trySplit()', UDF],
		[/* method */ 'forEachRemaining(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Performs the given action for each remaining element, sequentially in
 the current thread, until all elements have been processed or the
 action throws an exception.  If this Spliterator is `],
				[/* reference */ 'r', `.Spliterator#ORDERED`],
				[/* text */ 't', `,
 actions are performed in encounter order.  Exceptions thrown by the
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
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified action is null`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
