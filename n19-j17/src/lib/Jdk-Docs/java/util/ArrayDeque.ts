import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.ArrayDeque', [
	[/* class description */
		[/* text */ 't', `Resizable-array implementation of the `],
		[/* reference */ 'r', `java.util.Deque`],
		[/* text */ 't', ` interface.  Array
 deques have no capacity restrictions; they grow as necessary to support
 usage.  They are not thread-safe; in the absence of external
 synchronization, they do not support concurrent access by multiple threads.
 Null elements are prohibited.  This class is likely to be faster than
 `],
		[/* reference */ 'r', `java.util.Stack`],
		[/* text */ 't', ` when used as a stack, and faster than `],
		[/* reference */ 'r', `java.util.LinkedList`],
		[/* text */ 't', `
 when used as a queue.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Most `],
			[/* inline code block */ 'i', `ArrayDeque`],
			[/* text */ 't', ` operations run in amortized constant time.
 Exceptions include
 `],
			[/* reference */ 'r', `#remove(java.lang.Object)`, `remove`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#removeFirstOccurrence(java.lang.Object)`, `removeFirstOccurrence`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#removeLastOccurrence(java.lang.Object)`, `removeLastOccurrence`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#contains(java.lang.Object)`, `contains`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#iterator()`, `iterator.remove()`],
			[/* text */ 't', `,
 and the bulk operations, all of which run in linear time.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The iterators returned by this class's `],
			[/* reference */ 'r', `#iterator()`, `iterator`],
			[/* text */ 't', `
 method are `],
			[/* text */ 't', `fail-fast`],
			[/* text */ 't', `: If the deque is modified at any time after
 the iterator is created, in any way except through the iterator's own
 `],
			[/* inline code block */ 'i', `remove`],
			[/* text */ 't', ` method, the iterator will generally throw a `],
			[/* reference */ 'r', `java.util.ConcurrentModificationException`],
			[/* text */ 't', `.  Thus, in the face of concurrent
 modification, the iterator fails quickly and cleanly, rather than risking
 arbitrary, non-deterministic behavior at an undetermined time in the
 future.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Note that the fail-fast behavior of an iterator cannot be guaranteed
 as it is, generally speaking, impossible to make any hard guarantees in the
 presence of unsynchronized concurrent modification.  Fail-fast iterators
 throw `],
			[/* inline code block */ 'i', `ConcurrentModificationException`],
			[/* text */ 't', ` on a best-effort basis.
 Therefore, it would be wrong to write a program that depended on this
 exception for its correctness: `],
			[/* text */ 't', `the fail-fast behavior of iterators
 should be used only to detect bugs.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This class and its iterator implement all of the
 `],
			[/* text */ 't', `optional`],
			[/* text */ 't', ` methods of the `],
			[/* reference */ 'r', `java.util.Collection`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `java.util.Iterator`],
			[/* text */ 't', ` interfaces.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This class is a member of the
 `],
			[/* text */ 't', `Java Collections Framework`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an empty array deque with an initial capacity
 sufficient to hold 16 elements.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an empty array deque with an initial capacity
 sufficient to hold the specified number of elements.`]
			],
			[/* parameters */
				[/* parameter */ 'numElements', [/* parameter description */
					[/* text */ 't', `lower bound on initial capacity of the deque`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.util.Collection)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a deque containing the elements of the specified
 collection, in the order they are returned by the collection's
 iterator.  (The first element returned by the collection's
 iterator becomes the first element, or `],
				[/* text */ 't', `front`],
				[/* text */ 't', ` of the
 deque.)`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the collection whose elements are to be placed into the deque`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified collection is null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'toArray(java.lang.Object[])', [
			[/* method description */
				[/* text */ 't', `Returns an array containing all of the elements in this deque in
 proper sequence (from first to last element); the runtime type of the
 returned array is that of the specified array.  If the deque fits in
 the specified array, it is returned therein.  Otherwise, a new array
 is allocated with the runtime type of the specified array and the
 size of this deque.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If this deque fits in the specified array with room to spare
 (i.e., the array has more elements than this deque), the element in
 the array immediately following the end of the deque is set to
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Like the `],
					[/* reference */ 'r', `#toArray()`, `toArray()`],
					[/* text */ 't', ` method, this method acts as bridge between
 array-based and collection-based APIs.  Further, this method allows
 precise control over the runtime type of the output array, and may,
 under certain circumstances, be used to save allocation costs.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Suppose `],
					[/* inline code block */ 'i', `x`],
					[/* text */ 't', ` is a deque known to contain only strings.
 The following code can be used to dump the deque into a newly
 allocated array of `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', `:

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `String[] y = x.toArray(new String[0]);`]
				]],
				[/* text */ 't', `

 Note that `],
				[/* inline code block */ 'i', `toArray(new Object[0])`],
				[/* text */ 't', ` is identical in function to
 `],
				[/* inline code block */ 'i', `toArray()`],
				[/* text */ 't', `.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array into which the elements of the deque are to
          be stored, if it is big enough; otherwise, a new array of the
          same runtime type is allocated for this purpose`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayStoreException', [/* throw description */
					[/* text */ 't', `if the runtime type of the specified array
         is not a supertype of the runtime type of every element in
         this deque`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified array is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an array containing all of the elements in this deque`]
			]
		]],
		[/* method */ 'add(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element at the end of this deque.

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
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` (as specified by `],
				[/* reference */ 'r', `.Collection#add(E)`],
				[/* text */ 't', `)`]
			]
		]],
		[/* method */ 'addAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Adds all of the elements in the specified collection at the end
 of this deque, as if by calling `],
				[/* reference */ 'r', `#addLast(E)`, `addLast(E)`],
				[/* text */ 't', ` on each one,
 in the order that they are returned by the collection's iterator.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the elements to be inserted into this deque`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified collection or any
         of its elements are null`]
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
				[/* inline code block */ 'i', `o.equals(e)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `object to be checked for containment in this deque`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this deque contains the specified element`]
			]
		]],
		[/* method */ 'isEmpty()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this deque contains no elements.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this deque contains no elements`]
			]
		]],
		[/* method */ 'offer(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element at the end of this deque.

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
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` (as specified by `],
				[/* reference */ 'r', `.Queue#offer(E)`],
				[/* text */ 't', `)`]
			]
		]],
		[/* method */ 'offerFirst(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element at the front of this deque.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the element to add`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` (as specified by `],
				[/* reference */ 'r', `.Deque#offerFirst(E)`],
				[/* text */ 't', `)`]
			]
		]],
		[/* method */ 'offerLast(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element at the end of this deque.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the element to add`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` (as specified by `],
				[/* reference */ 'r', `.Deque#offerLast(E)`],
				[/* text */ 't', `)`]
			]
		]],
		[/* method */ 'remove(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes a single instance of the specified element from this deque.
 If the deque does not contain the element, it is unchanged.
 More formally, removes the first element `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `o.equals(e)`],
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
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this deque contained the specified element`]
			]
		]],
		[/* method */ 'removeAll(java.util.Collection)', [
			[/* method description */
				[/* block */ 'b', `Removes all of this collection's elements that are also contained in the
 specified collection (optional operation).  After this call returns,
 this collection will contain no elements in common with the specified
 collection.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `collection containing elements to be removed from this collection`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if this collection contains one or more
         null elements and the specified collection does not support
         null elements
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `),
         or if the specified collection is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this collection changed as a result of the
         call`]
			]
		]],
		[/* method */ 'removeFirstOccurrence(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the first occurrence of the specified element in this
 deque (when traversing the deque from head to tail).
 If the deque does not contain the element, it is unchanged.
 More formally, removes the first element `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `o.equals(e)`],
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
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the deque contained the specified element`]
			]
		]],
		[/* method */ 'removeIf(java.util.function.Predicate)', [
			[/* method description */
				[/* block */ 'b', `Removes all of the elements of this collection that satisfy the given
 predicate.  Errors or runtime exceptions thrown during iteration or by
 the predicate are relayed to the caller.`]
			],
			[/* parameters */
				[/* parameter */ 'filter', [/* parameter description */
					[/* text */ 't', `a predicate which returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` for elements to be
        removed`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified filter is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if any elements were removed`]
			]
		]],
		[/* method */ 'removeLastOccurrence(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the last occurrence of the specified element in this
 deque (when traversing the deque from head to tail).
 If the deque does not contain the element, it is unchanged.
 More formally, removes the last element `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `o.equals(e)`],
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
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the deque contained the specified element`]
			]
		]],
		[/* method */ 'retainAll(java.util.Collection)', [
			[/* method description */
				[/* block */ 'b', `Retains only the elements in this collection that are contained in the
 specified collection (optional operation).  In other words, removes from
 this collection all of its elements that are not contained in the
 specified collection.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `collection containing elements to be retained in this collection`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if this collection contains one or more
         null elements and the specified collection does not permit null
         elements
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `),
         or if the specified collection is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this collection changed as a result of the call`]
			]
		]],
		[/* method */ 'element()', [
			[/* method description */
				[/* text */ 't', `Retrieves, but does not remove, the head of the queue represented by
 this deque.  This method differs from `],
				[/* reference */ 'r', `#peek()`, `peek`],
				[/* text */ 't', ` only in
 that it throws an exception if this deque is empty.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is equivalent to `],
					[/* reference */ 'r', `#getFirst()`, `getFirst()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
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
				[/* block */ 'b', [
					[/* text */ 't', `Retrieves, but does not remove, the first element of this deque.

 This method differs from `],
					[/* reference */ 'r', `.Deque#peekFirst()`],
					[/* text */ 't', ` only in that it
 throws an exception if this deque is empty.`]
				]]
			],
			/* parameters */ UDF,
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
				[/* block */ 'b', [
					[/* text */ 't', `Retrieves, but does not remove, the last element of this deque.
 This method differs from `],
					[/* reference */ 'r', `.Deque#peekLast()`],
					[/* text */ 't', ` only in that it
 throws an exception if this deque is empty.`]
				]]
			],
			/* parameters */ UDF,
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
 this deque, or returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this deque is empty.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is equivalent to `],
					[/* reference */ 'r', `#peekFirst()`, `peekFirst()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the head of the queue represented by this deque, or
         `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this deque is empty`]
			]
		]],
		[/* method */ 'peekFirst()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Retrieves, but does not remove, the first element of this deque,
 or returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if this deque is empty.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the head of this deque, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this deque is empty`]
			]
		]],
		[/* method */ 'peekLast()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Retrieves, but does not remove, the last element of this deque,
 or returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if this deque is empty.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
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
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the head of the queue represented by this deque, or
         `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this deque is empty`]
			]
		]],
		[/* method */ 'pollFirst()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Retrieves and removes the first element of this deque,
 or returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if this deque is empty.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the head of this deque, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this deque is empty`]
			]
		]],
		[/* method */ 'pollLast()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Retrieves and removes the last element of this deque,
 or returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if this deque is empty.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
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
			/* parameters */ UDF,
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
				[/* text */ 't', `Retrieves and removes the head of the queue represented by this deque.

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
			/* parameters */ UDF,
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
				[/* block */ 'b', [
					[/* text */ 't', `Retrieves and removes the first element of this deque.  This method
 differs from `],
					[/* reference */ 'r', `.Deque#pollFirst()`],
					[/* text */ 't', ` only in that it throws an
 exception if this deque is empty.`]
				]]
			],
			/* parameters */ UDF,
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
				[/* block */ 'b', [
					[/* text */ 't', `Retrieves and removes the last element of this deque.  This method
 differs from `],
					[/* reference */ 'r', `.Deque#pollLast()`],
					[/* text */ 't', ` only in that it throws an
 exception if this deque is empty.`]
				]]
			],
			/* parameters */ UDF,
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
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of elements in this deque`]
			]
		]],
		[/* method */ 'toArray()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing all of the elements in this deque
 in proper sequence (from first to last element).

 `],
				[/* block */ 'b', `The returned array will be "safe" in that no references to it are
 maintained by this deque.  (In other words, this method must allocate
 a new array).  The caller is thus free to modify the returned array.

 `],
				[/* block */ 'b', `This method acts as bridge between array-based and collection-based
 APIs.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array containing all of the elements in this deque`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this deque.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a copy of this deque`]
			]
		]],
		[/* method */ 'descendingIterator()', [
			[/* method description */
				[/* block */ 'b', `Returns an iterator over the elements in this deque in reverse
 sequential order.  The elements will be returned in order from
 last (tail) to first (head).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an iterator over the elements in this deque in reverse
 sequence`]
			]
		]],
		[/* method */ 'iterator()', [
			[/* method description */
				[/* text */ 't', `Returns an iterator over the elements in this deque.  The elements
 will be ordered from first (head) to last (tail).  This is the same
 order that elements would be dequeued (via successive calls to
 `],
				[/* reference */ 'r', `#remove()`, `remove()`],
				[/* text */ 't', ` or popped (via successive calls to `],
				[/* reference */ 'r', `#pop()`, `pop()`],
				[/* text */ 't', `).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an iterator over the elements in this deque`]
			]
		]],
		[/* method */ 'spliterator()', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* reference */ 'r', `.Spliterator#binding`],
				[/* text */ 't', `
 and `],
				[/* text */ 't', `fail-fast`],
				[/* reference */ 'r', `java.util.Spliterator`],
				[/* text */ 't', ` over the elements in this
 deque.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `Spliterator`],
					[/* text */ 't', ` reports `],
					[/* reference */ 'r', `.Spliterator#SIZED`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `.Spliterator#SUBSIZED`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `.Spliterator#ORDERED`],
					[/* text */ 't', `, and
 `],
					[/* reference */ 'r', `.Spliterator#NONNULL`],
					[/* text */ 't', `.  Overriding implementations should document
 the reporting of additional characteristic values.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Spliterator`],
				[/* text */ 't', ` over the elements in this deque`]
			]
		]],
		[/* method */ 'addFirst(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element at the front of this deque.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the element to add`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'addLast(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element at the end of this deque.

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
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'clear()', [
			[/* method description */
				[/* text */ 't', `Removes all of the elements from this deque.
 The deque will be empty after this call returns.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'forEach(java.util.function.Consumer)', [
			[/* method description */
				[/* block */ 'b', [
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
				]]
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
		[/* method */ 'push(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Pushes an element onto the stack represented by this deque.  In other
 words, inserts the element at the front of this deque.

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
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
