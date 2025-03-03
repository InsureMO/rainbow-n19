import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Queue', [
	[/* class description */
		[/* text */ 't', `A collection designed for holding elements prior to processing.
 Besides basic `],
		[/* reference */ 'r', `java.util.Collection`],
		[/* text */ 't', ` operations, queues provide
 additional insertion, extraction, and inspection operations.
 Each of these methods exists in two forms: one throws an exception
 if the operation fails, the other returns a special value (either
 `],
		[/* inline code block */ 'i', `null`],
		[/* text */ 't', ` or `],
		[/* inline code block */ 'i', `false`],
		[/* text */ 't', `, depending on the operation).  The
 latter form of the insert operation is designed specifically for
 use with capacity-restricted `],
		[/* inline code block */ 'i', `Queue`],
		[/* text */ 't', ` implementations; in most
 implementations, insert operations cannot fail.

 `],
		[/* table */ 'tbl',
			[/* caption */ 'tc', [
				[/* text */ 't', `Summary of Queue methods`]
			]],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc'],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Throws exception`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Returns special value`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Insert`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#add(E)`, `add(e)`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#offer(E)`, `offer(e)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Remove`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#remove()`, `remove()`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#poll()`, `poll()`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Examine`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#element()`, `element()`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#peek()`, `peek()`]
					]]
				]]
			]],
		],
		[/* block */ 'b', [
			[/* text */ 't', `Queues typically, but do not necessarily, order elements in a
 FIFO (first-in-first-out) manner.  Among the exceptions are
 priority queues, which order elements according to a supplied
 comparator, or the elements' natural ordering, and LIFO queues (or
 stacks) which order the elements LIFO (last-in-first-out).
 Whatever the ordering used, the `],
			[/* text */ 't', `head`],
			[/* text */ 't', ` of the queue is that
 element which would be removed by a call to `],
			[/* reference */ 'r', `#remove()`, `remove()`],
			[/* text */ 't', ` or
 `],
			[/* reference */ 'r', `#poll()`, `poll()`],
			[/* text */ 't', `.  In a FIFO queue, all new elements are inserted at
 the `],
			[/* text */ 't', `tail`],
			[/* text */ 't', ` of the queue. Other kinds of queues may use
 different placement rules.  Every `],
			[/* inline code block */ 'i', `Queue`],
			[/* text */ 't', ` implementation
 must specify its ordering properties.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* reference */ 'r', `#offer(E)`, `offer`],
			[/* text */ 't', ` method inserts an element if possible,
 otherwise returning `],
			[/* inline code block */ 'i', `false`],
			[/* text */ 't', `.  This differs from the `],
			[/* reference */ 'r', `.Collection#add(E)`],
			[/* text */ 't', ` method, which can fail to
 add an element only by throwing an unchecked exception.  The
 `],
			[/* inline code block */ 'i', `offer`],
			[/* text */ 't', ` method is designed for use when failure is a normal,
 rather than exceptional occurrence, for example, in fixed-capacity
 (or "bounded") queues.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* reference */ 'r', `#remove()`, `remove()`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `#poll()`, `poll()`],
			[/* text */ 't', ` methods remove and
 return the head of the queue.
 Exactly which element is removed from the queue is a
 function of the queue's ordering policy, which differs from
 implementation to implementation. The `],
			[/* inline code block */ 'i', `remove()`],
			[/* text */ 't', ` and
 `],
			[/* inline code block */ 'i', `poll()`],
			[/* text */ 't', ` methods differ only in their behavior when the
 queue is empty: the `],
			[/* inline code block */ 'i', `remove()`],
			[/* text */ 't', ` method throws an exception,
 while the `],
			[/* inline code block */ 'i', `poll()`],
			[/* text */ 't', ` method returns `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* reference */ 'r', `#element()`, `element()`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `#peek()`, `peek()`],
			[/* text */ 't', ` methods return, but do
 not remove, the head of the queue.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* inline code block */ 'i', `Queue`],
			[/* text */ 't', ` interface does not define the `],
			[/* text */ 't', `blocking queue
 methods`],
			[/* text */ 't', `, which are common in concurrent programming.  These methods,
 which wait for elements to appear or for space to become available, are
 defined in the `],
			[/* reference */ 'r', `java.util.concurrent.BlockingQueue`],
			[/* text */ 't', ` interface, which
 extends this interface.

 `]
		]],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `Queue`],
			[/* text */ 't', ` implementations generally do not allow insertion
 of `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` elements, although some implementations, such as
 `],
			[/* reference */ 'r', `java.util.LinkedList`],
			[/* text */ 't', `, do not prohibit insertion of `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', `.
 Even in the implementations that permit it, `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` should
 not be inserted into a `],
			[/* inline code block */ 'i', `Queue`],
			[/* text */ 't', `, as `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` is also
 used as a special return value by the `],
			[/* inline code block */ 'i', `poll`],
			[/* text */ 't', ` method to
 indicate that the queue contains no elements.

 `]
		]],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `Queue`],
			[/* text */ 't', ` implementations generally do not define
 element-based versions of methods `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', ` and
 `],
			[/* inline code block */ 'i', `hashCode`],
			[/* text */ 't', ` but instead inherit the identity based versions
 from class `],
			[/* inline code block */ 'i', `Object`],
			[/* text */ 't', `, because element-based equality is not
 always well-defined for queues with the same elements but different
 ordering properties.

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
		[/* method */ 'add(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element into this queue if it is possible to do so
 immediately without violating capacity restrictions, returning
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` upon success and throwing an `],
				[/* inline code block */ 'i', `IllegalStateException`],
				[/* text */ 't', `
 if no space is currently available.`]
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
				[/* reference */ 'r', `.Collection#add(E)`],
				[/* text */ 't', `)`]
			]
		]],
		[/* method */ 'remove()', [
			[/* method description */
				[/* text */ 't', `Retrieves and removes the head of this queue.  This method differs
 from `],
				[/* reference */ 'r', `#poll()`, `poll()`],
				[/* text */ 't', ` only in that it throws an exception if
 this queue is empty.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this queue is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the head of this queue`]
			]
		]],
		[/* method */ 'poll()', [
			[/* method description */
				[/* text */ 't', `Retrieves and removes the head of this queue,
 or returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this queue is empty.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the head of this queue, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this queue is empty`]
			]
		]],
		[/* method */ 'peek()', [
			[/* method description */
				[/* text */ 't', `Retrieves, but does not remove, the head of this queue,
 or returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this queue is empty.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the head of this queue, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this queue is empty`]
			]
		]],
		[/* method */ 'element()', [
			[/* method description */
				[/* text */ 't', `Retrieves, but does not remove, the head of this queue.  This method
 differs from `],
				[/* reference */ 'r', `#peek()`, `peek`],
				[/* text */ 't', ` only in that it throws an exception
 if this queue is empty.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this queue is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the head of this queue`]
			]
		]],
		[/* method */ 'offer(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element into this queue if it is possible to do
 so immediately without violating capacity restrictions.
 When using a capacity-restricted queue, this method is generally
 preferable to `],
				[/* reference */ 'r', `#add(E)`, `add(E)`],
				[/* text */ 't', `, which can fail to insert an element only
 by throwing an exception.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the element to add`]
				]]
			],
			[/* throws */
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
				[/* text */ 't', ` if the element was added to this queue, else
         `],
				[/* inline code block */ 'i', `false`]
			]
		]]
	],
]);
