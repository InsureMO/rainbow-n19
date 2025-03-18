import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Iterable', [
	[/* class description */
		[/* text */ 't', `Implementing this interface allows an object to be the target of the enhanced
 `],
		[/* inline code block */ 'i', `for`],
		[/* text */ 't', ` statement (sometimes called the "for-each loop" statement).`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'iterator()', [
			[/* method description */
				[/* text */ 't', `Returns an iterator over elements of type `],
				[/* inline code block */ 'i', `T`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an Iterator.`]
			]
		]],
		[/* method */ 'spliterator()', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* reference */ 'r', `java.util.Spliterator`, `Spliterator`],
				[/* text */ 't', ` over the elements described by this
 `],
				[/* inline code block */ 'i', `Iterable`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Spliterator`],
				[/* text */ 't', ` over the elements described by this
 `],
				[/* inline code block */ 'i', `Iterable`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'forEach(java.util.function.Consumer)', [
			[/* method description */
				[/* text */ 't', `Performs the given action for each element of the `],
				[/* inline code block */ 'i', `Iterable`],
				[/* text */ 't', `
 until all elements have been processed or the action throws an
 exception.  Actions are performed in the order of iteration, if that
 order is specified.  Exceptions thrown by the action are relayed to the
 caller.
 `],
				[/* block */ 'b', `
 The behavior of this method is unspecified if the action performs
 side-effects that modify the underlying source of elements, unless an
 overriding class has specified a concurrent modification policy.`]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `The action to be performed for each element`]
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
	/* enum values */ UDF
]);
