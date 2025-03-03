import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Iterator', [
	[/* class description */
		[/* text */ 't', `An iterator over a collection.  `],
		[/* inline code block */ 'i', `Iterator`],
		[/* text */ 't', ` takes the place of
 `],
		[/* reference */ 'r', `java.util.Enumeration`],
		[/* text */ 't', ` in the Java Collections Framework.  Iterators
 differ from enumerations in two ways:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', ` Iterators allow the caller to remove elements from the
           underlying collection during the iteration with well-defined
           semantics.
      `],
			[/* block */ 'b', ` Method names have been improved.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This interface is a member of the
 `],
			[/* text */ 't', `Java Collections Framework`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'remove()', [
			[/* method description */
				[/* text */ 't', `Removes from the underlying collection the last element returned
 by this iterator (optional operation).  This method can be called
 only once per call to `],
				[/* reference */ 'r', `#next()`, `next()`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 The behavior of an iterator is unspecified if the underlying collection
 is modified while the iteration is in progress in any way other than by
 calling this method, unless an overriding class has specified a
 concurrent modification policy.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The behavior of an iterator is unspecified if this method is called
 after a call to the `],
					[/* reference */ 'r', `#forEachRemaining(java.util.function.Consumer)`, `forEachRemaining`],
					[/* text */ 't', ` method.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', `
         operation is not supported by this iterator`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `next`],
					[/* text */ 't', ` method has not
         yet been called, or the `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', ` method has already
         been called after the last call to the `],
					[/* inline code block */ 'i', `next`],
					[/* text */ 't', `
         method`]
				]]
			],
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
					[/* reference */ 'r', `#remove()`, `remove`],
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
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified action is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'hasNext()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the iteration has more elements.
 (In other words, returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if `],
				[/* reference */ 'r', `#next()`, `next()`],
				[/* text */ 't', ` would
 return an element rather than throwing an exception.)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the iteration has more elements`]
			]
		]],
		[/* method */ 'next()', [
			[/* method description */
				[/* text */ 't', `Returns the next element in the iteration.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if the iteration has no more elements`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next element in the iteration`]
			]
		]]
	],
]);
