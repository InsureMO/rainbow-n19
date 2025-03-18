import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Deque', [
	[/* class description */
		[/* text */ 't', `A linear collection that supports element insertion and removal at
 both ends.  The name `],
		[/* text */ 't', `deque`],
		[/* text */ 't', ` is short for "double ended queue"
 and is usually pronounced "deck".  Most `],
		[/* inline code block */ 'i', `Deque`],
		[/* text */ 't', `
 implementations place no fixed limits on the number of elements
 they may contain, but this interface supports capacity-restricted
 deques as well as those with no fixed size limit.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This interface defines methods to access the elements at both
 ends of the deque.  Methods are provided to insert, remove, and
 examine the element.  Each of these methods exists in two forms:
 one throws an exception if the operation fails, the other returns a
 special value (either `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `false`],
			[/* text */ 't', `, depending on
 the operation).  The latter form of the insert operation is
 designed specifically for use with capacity-restricted
 `],
			[/* inline code block */ 'i', `Deque`],
			[/* text */ 't', ` implementations; in most implementations, insert
 operations cannot fail.

 `]
		]],
		[/* block */ 'b', `The twelve methods described above are summarized in the
 following table:

 `],
		[/* table */ 'tbl',
			[/* caption */ 'tc', [
				[/* text */ 't', `Summary of Deque methods`]
			]],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', 1, 2],
					[/* table header cell */ 'thc', 2, 1, [
						[/* text */ 't', ` First Element (Head)`]
					]],
					[/* table header cell */ 'thc', 2, 1, [
						[/* text */ 't', ` Last Element (Tail)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Throws exception`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Special value`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Throws exception`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Special value`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Insert`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#addFirst(E)`, `addFirst(e)`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#offerFirst(E)`, `offerFirst(e)`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#addLast(E)`, `addLast(e)`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#offerLast(E)`, `offerLast(e)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Remove`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#removeFirst()`, `removeFirst()`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#pollFirst()`, `pollFirst()`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#removeLast()`, `removeLast()`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#pollLast()`, `pollLast()`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Examine`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#getFirst()`, `getFirst()`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#peekFirst()`, `peekFirst()`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#getLast()`, `getLast()`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#peekLast()`, `peekLast()`]
					]]
				]]
			]],
		],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `This interface extends the `],
			[/* reference */ 'r', `java.util.Queue`, `Queue`],
			[/* text */ 't', ` interface.  When a deque is
 used as a queue, FIFO (First-In-First-Out) behavior results.  Elements are
 added at the end of the deque and removed from the beginning.  The methods
 inherited from the `],
			[/* inline code block */ 'i', `Queue`],
			[/* text */ 't', ` interface are precisely equivalent to
 `],
			[/* inline code block */ 'i', `Deque`],
			[/* text */ 't', ` methods as indicated in the following table:

 `]
		]],
		[/* table */ 'tbl',
			[/* caption */ 'tc', [
				[/* text */ 't', `Comparison of Queue and Deque methods`]
			]],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `Queue`],
						[/* text */ 't', ` Method`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` Equivalent `],
						[/* inline code block */ 'i', `Deque`],
						[/* text */ 't', ` Method`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* reference */ 'r', `#add(E)`, `add(e)`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#addLast(E)`, `addLast(e)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* reference */ 'r', `#offer(E)`, `offer(e)`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#offerLast(E)`, `offerLast(e)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* reference */ 'r', `#remove()`, `remove()`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#removeFirst()`, `removeFirst()`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* reference */ 'r', `#poll()`, `poll()`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#pollFirst()`, `pollFirst()`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* reference */ 'r', `#element()`, `element()`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#getFirst()`, `getFirst()`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* reference */ 'r', `#peek()`, `peek()`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#peekFirst()`, `peekFirst()`]
					]]
				]]
			]],
		],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Deques can also be used as LIFO (Last-In-First-Out) stacks.  This
 interface should be used in preference to the legacy `],
			[/* reference */ 'r', `java.util.Stack`, `Stack`],
			[/* text */ 't', ` class.
 When a deque is used as a stack, elements are pushed and popped from the
 beginning of the deque.  Stack methods are equivalent to `],
			[/* inline code block */ 'i', `Deque`],
			[/* text */ 't', `
 methods as indicated in the table below:

 `]
		]],
		[/* table */ 'tbl',
			[/* caption */ 'tc', [
				[/* text */ 't', `Comparison of Stack and Deque methods`]
			]],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` Stack Method`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` Equivalent `],
						[/* inline code block */ 'i', `Deque`],
						[/* text */ 't', ` Method`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* reference */ 'r', `#push(E)`, `push(e)`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#addFirst(E)`, `addFirst(e)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* reference */ 'r', `#pop()`, `pop()`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#removeFirst()`, `removeFirst()`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* reference */ 'r', `#peek()`, `peek()`]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `#getFirst()`, `getFirst()`]
					]]
				]]
			]],
		],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Note that the `],
			[/* reference */ 'r', `#peek()`, `peek`],
			[/* text */ 't', ` method works equally well when
 a deque is used as a queue or a stack; in either case, elements are
 drawn from the beginning of the deque.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This interface provides two methods to remove interior
 elements, `],
			[/* reference */ 'r', `#removeFirstOccurrence(java.lang.Object)`, `removeFirstOccurrence`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `#removeLastOccurrence(java.lang.Object)`, `removeLastOccurrence`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Unlike the `],
			[/* reference */ 'r', `java.util.List`, `List`],
			[/* text */ 't', ` interface, this interface does not
 provide support for indexed access to elements.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `While `],
			[/* inline code block */ 'i', `Deque`],
			[/* text */ 't', ` implementations are not strictly required
 to prohibit the insertion of null elements, they are strongly
 encouraged to do so.  Users of any `],
			[/* inline code block */ 'i', `Deque`],
			[/* text */ 't', ` implementations
 that do allow null elements are strongly encouraged `],
			[/* text */ 't', `not`],
			[/* text */ 't', ` to
 take advantage of the ability to insert nulls.  This is so because
 `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` is used as a special return value by various methods
 to indicate that the deque is empty.

 `]
		]],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `Deque`],
			[/* text */ 't', ` implementations generally do not define
 element-based versions of the `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `hashCode`],
			[/* text */ 't', `
 methods, but instead inherit the identity-based versions from class
 `],
			[/* inline code block */ 'i', `Object`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This interface is a member of the
 `],
			[/* text */ 't', `Java Collections Framework`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'add(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element into the queue represented by this deque
 (in other words, at the tail of this deque) if it is possible to do so
 immediately without violating capacity restrictions, returning
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` upon success and throwing an
 `],
				[/* inline code block */ 'i', `IllegalStateException`],
				[/* text */ 't', ` if no space is currently available.
 When using a capacity-restricted deque, it is generally preferable to
 use `],
				[/* reference */ 'r', `#offer(E)`, `offer`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is equivalent to `],
					[/* reference */ 'r', `#addLast(E)`, `addLast(E)`],
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
         prevents it from being added to this deque`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         deque does not permit null elements`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of the specified
         element prevents it from being added to this deque`]
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
				[/* text */ 't', `Adds all of the elements in the specified collection at the end
 of this deque, as if by calling `],
				[/* reference */ 'r', `#addLast(E)`, `addLast(E)`],
				[/* text */ 't', ` on each one,
 in the order that they are returned by the collection's iterator.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `When using a capacity-restricted deque, it is generally preferable
 to call `],
					[/* reference */ 'r', `#offer(E)`, `offer`],
					[/* text */ 't', ` separately on each element.

 `]
				]],
				[/* block */ 'b', `An exception encountered while trying to add an element may result
 in only some of the elements having been successfully added when
 the associated exception is thrown.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the elements to be inserted into this deque`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if not all the elements can be added at
         this time due to insertion restrictions`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of an element of the specified
         collection prevents it from being added to this deque`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified collection contains a
         null element and this deque does not permit null elements,
         or if the specified collection is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of an element of the
         specified collection prevents it from being added to this deque`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this deque changed as a result of the call`]
			]
		]],
		[/* method */ 'contains(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this deque contains the specified element.
 More formally, returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this deque contains
 at least one element `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', ` such that `],
				[/* inline code block */ 'i', `Objects.equals(o, e)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `element whose presence in this deque is to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified element
         is incompatible with this deque
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         deque does not permit null elements
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this deque contains the specified element`]
			]
		]],
		[/* method */ 'offer(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element into the queue represented by this deque
 (in other words, at the tail of this deque) if it is possible to do so
 immediately without violating capacity restrictions, returning
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` upon success and `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if no space is currently
 available.  When using a capacity-restricted deque, this method is
 generally preferable to the `],
				[/* reference */ 'r', `#add(E)`, `add(E)`],
				[/* text */ 't', ` method, which can fail to
 insert an element only by throwing an exception.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is equivalent to `],
					[/* reference */ 'r', `#offerLast(E)`, `offerLast(E)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the element to add`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified element
         prevents it from being added to this deque`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         deque does not permit null elements`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of the specified
         element prevents it from being added to this deque`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the element was added to this deque, else
         `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'offerFirst(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element at the front of this deque unless it would
 violate capacity restrictions.  When using a capacity-restricted deque,
 this method is generally preferable to the `],
				[/* reference */ 'r', `#addFirst(E)`, `addFirst(E)`],
				[/* text */ 't', ` method,
 which can fail to insert an element only by throwing an exception.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the element to add`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified element
         prevents it from being added to this deque`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         deque does not permit null elements`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of the specified
         element prevents it from being added to this deque`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the element was added to this deque, else
         `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'offerLast(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element at the end of this deque unless it would
 violate capacity restrictions.  When using a capacity-restricted deque,
 this method is generally preferable to the `],
				[/* reference */ 'r', `#addLast(E)`, `addLast(E)`],
				[/* text */ 't', ` method,
 which can fail to insert an element only by throwing an exception.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the element to add`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified element
         prevents it from being added to this deque`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         deque does not permit null elements`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of the specified
         element prevents it from being added to this deque`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the element was added to this deque, else
         `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'remove(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the first occurrence of the specified element from this deque.
 If the deque does not contain the element, it is unchanged.
 More formally, removes the first element `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `Objects.equals(o, e)`],
				[/* text */ 't', ` (if such an element exists).
 Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this deque contained the specified element
 (or equivalently, if this deque changed as a result of the call).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is equivalent to `],
					[/* reference */ 'r', `#removeFirstOccurrence(java.lang.Object)`, `removeFirstOccurrence(Object)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `element to be removed from this deque, if present`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified element
         is incompatible with this deque
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         deque does not permit null elements
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if an element was removed as a result of this call`]
			]
		]],
		[/* method */ 'removeFirstOccurrence(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the first occurrence of the specified element from this deque.
 If the deque does not contain the element, it is unchanged.
 More formally, removes the first element `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `Objects.equals(o, e)`],
				[/* text */ 't', ` (if such an element exists).
 Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this deque contained the specified element
 (or equivalently, if this deque changed as a result of the call).`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `element to be removed from this deque, if present`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified element
         is incompatible with this deque
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         deque does not permit null elements
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if an element was removed as a result of this call`]
			]
		]],
		[/* method */ 'removeLastOccurrence(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the last occurrence of the specified element from this deque.
 If the deque does not contain the element, it is unchanged.
 More formally, removes the last element `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `Objects.equals(o, e)`],
				[/* text */ 't', ` (if such an element exists).
 Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this deque contained the specified element
 (or equivalently, if this deque changed as a result of the call).`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `element to be removed from this deque, if present`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified element
         is incompatible with this deque
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         deque does not permit null elements
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if an element was removed as a result of this call`]
			]
		]],
		[/* method */ 'element()', [
			[/* method description */
				[/* text */ 't', `Retrieves, but does not remove, the head of the queue represented by
 this deque (in other words, the first element of this deque).
 This method differs from `],
				[/* reference */ 'r', `#peek()`, `peek`],
				[/* text */ 't', ` only in that it throws an
 exception if this deque is empty.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is equivalent to `],
					[/* reference */ 'r', `#getFirst()`, `getFirst()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this deque is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the head of the queue represented by this deque`]
			]
		]],
		[/* method */ 'getFirst()', [
			[/* method description */
				[/* text */ 't', `Retrieves, but does not remove, the first element of this deque.

 This method differs from `],
				[/* reference */ 'r', `#peekFirst()`, `peekFirst`],
				[/* text */ 't', ` only in that it
 throws an exception if this deque is empty.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this deque is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the head of this deque`]
			]
		]],
		[/* method */ 'getLast()', [
			[/* method description */
				[/* text */ 't', `Retrieves, but does not remove, the last element of this deque.
 This method differs from `],
				[/* reference */ 'r', `#peekLast()`, `peekLast`],
				[/* text */ 't', ` only in that it
 throws an exception if this deque is empty.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this deque is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the tail of this deque`]
			]
		]],
		[/* method */ 'peek()', [
			[/* method description */
				[/* text */ 't', `Retrieves, but does not remove, the head of the queue represented by
 this deque (in other words, the first element of this deque), or
 returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this deque is empty.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is equivalent to `],
					[/* reference */ 'r', `#peekFirst()`, `peekFirst()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the head of the queue represented by this deque, or
         `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this deque is empty`]
			]
		]],
		[/* method */ 'peekFirst()', [
			[/* method description */
				[/* text */ 't', `Retrieves, but does not remove, the first element of this deque,
 or returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this deque is empty.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the head of this deque, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this deque is empty`]
			]
		]],
		[/* method */ 'peekLast()', [
			[/* method description */
				[/* text */ 't', `Retrieves, but does not remove, the last element of this deque,
 or returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this deque is empty.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the tail of this deque, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this deque is empty`]
			]
		]],
		[/* method */ 'poll()', [
			[/* method description */
				[/* text */ 't', `Retrieves and removes the head of the queue represented by this deque
 (in other words, the first element of this deque), or returns
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this deque is empty.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is equivalent to `],
					[/* reference */ 'r', `#pollFirst()`, `pollFirst()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the first element of this deque, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if
         this deque is empty`]
			]
		]],
		[/* method */ 'pollFirst()', [
			[/* method description */
				[/* text */ 't', `Retrieves and removes the first element of this deque,
 or returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this deque is empty.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the head of this deque, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this deque is empty`]
			]
		]],
		[/* method */ 'pollLast()', [
			[/* method description */
				[/* text */ 't', `Retrieves and removes the last element of this deque,
 or returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this deque is empty.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the tail of this deque, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this deque is empty`]
			]
		]],
		[/* method */ 'pop()', [
			[/* method description */
				[/* text */ 't', `Pops an element from the stack represented by this deque.  In other
 words, removes and returns the first element of this deque.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is equivalent to `],
					[/* reference */ 'r', `#removeFirst()`, `removeFirst()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this deque is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the element at the front of this deque (which is the top
         of the stack represented by this deque)`]
			]
		]],
		[/* method */ 'remove()', [
			[/* method description */
				[/* text */ 't', `Retrieves and removes the head of the queue represented by this deque
 (in other words, the first element of this deque).
 This method differs from `],
				[/* reference */ 'r', `#poll()`, `poll()`],
				[/* text */ 't', ` only in that it
 throws an exception if this deque is empty.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is equivalent to `],
					[/* reference */ 'r', `#removeFirst()`, `removeFirst()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this deque is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the head of the queue represented by this deque`]
			]
		]],
		[/* method */ 'removeFirst()', [
			[/* method description */
				[/* text */ 't', `Retrieves and removes the first element of this deque.  This method
 differs from `],
				[/* reference */ 'r', `#pollFirst()`, `pollFirst`],
				[/* text */ 't', ` only in that it throws an
 exception if this deque is empty.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this deque is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the head of this deque`]
			]
		]],
		[/* method */ 'removeLast()', [
			[/* method description */
				[/* text */ 't', `Retrieves and removes the last element of this deque.  This method
 differs from `],
				[/* reference */ 'r', `#pollLast()`, `pollLast`],
				[/* text */ 't', ` only in that it throws an
 exception if this deque is empty.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this deque is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the tail of this deque`]
			]
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the number of elements in this deque.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the number of elements in this deque`]
			]
		]],
		[/* method */ 'descendingIterator()', [
			[/* method description */
				[/* text */ 't', `Returns an iterator over the elements in this deque in reverse
 sequential order.  The elements will be returned in order from
 last (tail) to first (head).`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an iterator over the elements in this deque in reverse
 sequence`]
			]
		]],
		[/* method */ 'iterator()', [
			[/* method description */
				[/* text */ 't', `Returns an iterator over the elements in this deque in proper sequence.
 The elements will be returned in order from first (head) to last (tail).`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an iterator over the elements in this deque in proper sequence`]
			]
		]],
		[/* method */ 'addFirst(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element at the front of this deque if it is
 possible to do so immediately without violating capacity restrictions,
 throwing an `],
				[/* inline code block */ 'i', `IllegalStateException`],
				[/* text */ 't', ` if no space is currently
 available.  When using a capacity-restricted deque, it is generally
 preferable to use method `],
				[/* reference */ 'r', `#offerFirst(E)`, `offerFirst(E)`],
				[/* text */ 't', `.`]
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
         prevents it from being added to this deque`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         deque does not permit null elements`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of the specified
         element prevents it from being added to this deque`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'addLast(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element at the end of this deque if it is
 possible to do so immediately without violating capacity restrictions,
 throwing an `],
				[/* inline code block */ 'i', `IllegalStateException`],
				[/* text */ 't', ` if no space is currently
 available.  When using a capacity-restricted deque, it is generally
 preferable to use method `],
				[/* reference */ 'r', `#offerLast(E)`, `offerLast(E)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is equivalent to `],
					[/* reference */ 'r', `#add(E)`, `add(E)`],
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
         prevents it from being added to this deque`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         deque does not permit null elements`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of the specified
         element prevents it from being added to this deque`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'push(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Pushes an element onto the stack represented by this deque (in other
 words, at the head of this deque) if it is possible to do so
 immediately without violating capacity restrictions, throwing an
 `],
				[/* inline code block */ 'i', `IllegalStateException`],
				[/* text */ 't', ` if no space is currently available.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is equivalent to `],
					[/* reference */ 'r', `#addFirst(E)`, `addFirst(E)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the element to push`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if the element cannot be added at this
         time due to capacity restrictions`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified element
         prevents it from being added to this deque`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         deque does not permit null elements`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of the specified
         element prevents it from being added to this deque`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
