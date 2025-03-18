import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.AbstractQueue', [
	[/* class description */
		[/* text */ 't', `This class provides skeletal implementations of some `],
		[/* reference */ 'r', `java.util.Queue`, `Queue`],
		[/* text */ 't', `
 operations. The implementations in this class are appropriate when
 the base implementation does `],
		[/* text */ 't', `not`],
		[/* text */ 't', ` allow `],
		[/* inline code block */ 'i', `null`],
		[/* text */ 't', `
 elements.  Methods `],
		[/* reference */ 'r', `#add(E)`, `add`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `#remove()`, `remove`],
		[/* text */ 't', `, and
 `],
		[/* reference */ 'r', `#element()`, `element`],
		[/* text */ 't', ` are based on `],
		[/* reference */ 'r', `java.util.Queue#offer(E)`, `offer`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `java.util.Queue#poll()`, `poll`],
		[/* text */ 't', `, and `],
		[/* reference */ 'r', `java.util.Queue#peek()`, `peek`],
		[/* text */ 't', `, respectively, but throw
 exceptions instead of indicating failure via `],
		[/* inline code block */ 'i', `false`],
		[/* text */ 't', ` or
 `],
		[/* inline code block */ 'i', `null`],
		[/* text */ 't', ` returns.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `A `],
			[/* inline code block */ 'i', `Queue`],
			[/* text */ 't', ` implementation that extends this class must
 minimally define a method `],
			[/* reference */ 'r', `java.util.Queue#offer(E)`, `Queue.offer(E)`],
			[/* text */ 't', ` which does not permit
 insertion of `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` elements, along with methods `],
			[/* reference */ 'r', `java.util.Queue#peek()`, `Queue.peek()`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.util.Queue#poll()`, `Queue.poll()`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.util.Collection#size()`, `Collection.size()`],
			[/* text */ 't', `, and
 `],
			[/* reference */ 'r', `java.util.Collection#iterator()`, `Collection.iterator()`],
			[/* text */ 't', `.  Typically, additional methods will be
 overridden as well.  If these requirements cannot be met, consider
 instead subclassing `],
			[/* reference */ 'r', `java.util.AbstractCollection`, `AbstractCollection`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This class is a member of the
 `],
			[/* text */ 't', `Java Collections Framework`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructor for use by subclasses.`]
			],
			/* parameters */,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'add(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element into this queue if it is possible to do so
 immediately without violating capacity restrictions, returning
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` upon success and throwing an `],
				[/* inline code block */ 'i', `IllegalStateException`],
				[/* text */ 't', `
 if no space is currently available.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This implementation returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if `],
					[/* inline code block */ 'i', `offer`],
					[/* text */ 't', ` succeeds,
 else throws an `],
					[/* inline code block */ 'i', `IllegalStateException`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the element to add`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if the element cannot be added at this
         time due to capacity restrictions`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified element
         prevents it from being added to this queue`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and
         this queue does not permit null elements`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of this element
         prevents it from being added to this queue`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` (as specified by `],
				[/* reference */ 'r', `java.util.Collection#add(E)`, `Collection.add(E)`],
				[/* text */ 't', `)`]
			]
		]],
		[/* method */ 'addAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Adds all of the elements in the specified collection to this
 queue.  Attempts to addAll of a queue to itself result in
 `],
				[/* inline code block */ 'i', `IllegalArgumentException`],
				[/* text */ 't', `. Further, the behavior of
 this operation is undefined if the specified collection is
 modified while the operation is in progress.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This implementation iterates over the specified collection,
 and adds each element returned by the iterator to this
 queue, in turn.  A runtime exception encountered while
 trying to add an element (including, in particular, a
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` element) may result in only some of the elements
 having been successfully added when the associated exception is
 thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `collection containing elements to be added to this queue`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of an element of the specified
         collection prevents it from being added to this queue`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified collection contains a
         null element and this queue does not permit null elements,
         or if the specified collection is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of an element of the
         specified collection prevents it from being added to this
         queue, or if the specified collection is this queue`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if not all the elements can be added at
         this time due to insertion restrictions`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this queue changed as a result of the call`]
			]
		]],
		[/* method */ 'element()', [
			[/* method description */
				[/* text */ 't', `Retrieves, but does not remove, the head of this queue.  This method
 differs from `],
				[/* reference */ 'r', `java.util.Queue#peek()`, `peek`],
				[/* text */ 't', ` only in that it throws an exception if
 this queue is empty.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This implementation returns the result of `],
					[/* inline code block */ 'i', `peek`],
					[/* text */ 't', `
 unless the queue is empty.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this queue is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the head of this queue`]
			]
		]],
		[/* method */ 'remove()', [
			[/* method description */
				[/* text */ 't', `Retrieves and removes the head of this queue.  This method differs
 from `],
				[/* reference */ 'r', `java.util.Queue#poll()`, `poll`],
				[/* text */ 't', ` only in that it throws an exception if this
 queue is empty.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This implementation returns the result of `],
					[/* inline code block */ 'i', `poll`],
					[/* text */ 't', `
 unless the queue is empty.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this queue is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the head of this queue`]
			]
		]],
		[/* method */ 'clear()', [
			[/* method description */
				[/* text */ 't', `Removes all of the elements from this queue.
 The queue will be empty after this call returns.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This implementation repeatedly invokes `],
					[/* reference */ 'r', `java.util.Queue#poll()`, `poll`],
					[/* text */ 't', ` until it
 returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
