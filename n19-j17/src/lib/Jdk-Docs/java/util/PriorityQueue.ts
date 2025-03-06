import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.PriorityQueue', [
	[/* class description */
		[/* text */ 't', `An unbounded priority `],
		[/* reference */ 'r', `java.util.Queue`, `queue`],
		[/* text */ 't', ` based on a priority heap.
 The elements of the priority queue are ordered according to their
 `],
		[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
		[/* text */ 't', `, or by a `],
		[/* reference */ 'r', `java.util.Comparator`, `Comparator`],
		[/* text */ 't', `
 provided at queue construction time, depending on which constructor is
 used.  A priority queue does not permit `],
		[/* inline code block */ 'i', `null`],
		[/* text */ 't', ` elements.
 A priority queue relying on natural ordering also does not permit
 insertion of non-comparable objects (doing so may result in
 `],
		[/* inline code block */ 'i', `ClassCastException`],
		[/* text */ 't', `).

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* text */ 't', `head`],
			[/* text */ 't', ` of this queue is the `],
			[/* text */ 't', `least`],
			[/* text */ 't', ` element
 with respect to the specified ordering.  If multiple elements are
 tied for least value, the head is one of those elements -- ties are
 broken arbitrarily.  The queue retrieval operations `],
			[/* inline code block */ 'i', `poll`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `remove`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `peek`],
			[/* text */ 't', `, and `],
			[/* inline code block */ 'i', `element`],
			[/* text */ 't', ` access the
 element at the head of the queue.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A priority queue is unbounded, but has an internal
 `],
			[/* text */ 't', `capacity`],
			[/* text */ 't', ` governing the size of an array used to store the
 elements on the queue.  It is always at least as large as the queue
 size.  As elements are added to a priority queue, its capacity
 grows automatically.  The details of the growth policy are not
 specified.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This class and its iterator implement all of the
 `],
			[/* text */ 't', `optional`],
			[/* text */ 't', ` methods of the `],
			[/* reference */ 'r', `java.util.Collection`, `Collection`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `java.util.Iterator`, `Iterator`],
			[/* text */ 't', ` interfaces.  The Iterator provided in method `],
			[/* reference */ 'r', `#iterator()`, `iterator()`],
			[/* text */ 't', ` and the Spliterator provided in method `],
			[/* reference */ 'r', `#spliterator()`, `spliterator()`],
			[/* text */ 't', `
 are `],
			[/* text */ 't', `not`],
			[/* text */ 't', ` guaranteed to traverse the elements of
 the priority queue in any particular order. If you need ordered
 traversal, consider using `],
			[/* inline code block */ 'i', `Arrays.sort(pq.toArray())`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Note that this implementation is not synchronized.`],
			[/* text */ 't', `
 Multiple threads should not access a `],
			[/* inline code block */ 'i', `PriorityQueue`],
			[/* text */ 't', `
 instance concurrently if any of the threads modifies the queue.
 Instead, use the thread-safe `],
			[/* reference */ 'r', `java.util.concurrent.PriorityBlockingQueue`, `PriorityBlockingQueue`],
			[/* text */ 't', ` class.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Implementation note: this implementation provides
 O(log(n)) time for the enqueuing and dequeuing methods
 (`],
			[/* inline code block */ 'i', `offer`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `poll`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `remove()`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `add`],
			[/* text */ 't', `);
 linear time for the `],
			[/* inline code block */ 'i', `remove(Object)`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `contains(Object)`],
			[/* text */ 't', `
 methods; and constant time for the retrieval methods
 (`],
			[/* inline code block */ 'i', `peek`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `element`],
			[/* text */ 't', `, and `],
			[/* inline code block */ 'i', `size`],
			[/* text */ 't', `).

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
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `PriorityQueue`],
				[/* text */ 't', ` with the default initial
 capacity (11) that orders its elements according to their
 `],
				[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `PriorityQueue`],
				[/* text */ 't', ` with the specified initial
 capacity that orders its elements according to their
 `],
				[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'initialCapacity', [/* parameter description */
					[/* text */ 't', `the initial capacity for this priority queue`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `initialCapacity`],
					[/* text */ 't', ` is less
         than 1`]
				]]
			]
		]],
		[/* constructor */ '<init>(int,java.util.Comparator)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `PriorityQueue`],
				[/* text */ 't', ` with the specified initial capacity
 that orders its elements according to the specified comparator.`]
			],
			[/* parameters */
				[/* parameter */ 'initialCapacity', [/* parameter description */
					[/* text */ 't', `the initial capacity for this priority queue`]
				]],
				[/* parameter */ 'comparator', [/* parameter description */
					[/* text */ 't', `the comparator that will be used to order this
         priority queue.  If `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, the `],
					[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
					[/* text */ 't', ` of the elements will be used.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `initialCapacity`],
					[/* text */ 't', ` is
         less than 1`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.util.Collection)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `PriorityQueue`],
				[/* text */ 't', ` containing the elements in the
 specified collection.  If the specified collection is an instance of
 a `],
				[/* reference */ 'r', `java.util.SortedSet`, `SortedSet`],
				[/* text */ 't', ` or is another `],
				[/* inline code block */ 'i', `PriorityQueue`],
				[/* text */ 't', `, this
 priority queue will be ordered according to the same ordering.
 Otherwise, this priority queue will be ordered according to the
 `],
				[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
				[/* text */ 't', ` of its elements.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the collection whose elements are to be placed
         into this priority queue`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if elements of the specified collection
         cannot be compared to one another according to the priority
         queue's ordering`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified collection or any
         of its elements are null`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.util.Comparator)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `PriorityQueue`],
				[/* text */ 't', ` with the default initial capacity and
 whose elements are ordered according to the specified comparator.`]
			],
			[/* parameters */
				[/* parameter */ 'comparator', [/* parameter description */
					[/* text */ 't', `the comparator that will be used to order this
         priority queue.  If `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, the `],
					[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
					[/* text */ 't', ` of the elements will be used.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.util.PriorityQueue)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `PriorityQueue`],
				[/* text */ 't', ` containing the elements in the
 specified priority queue.  This priority queue will be
 ordered according to the same ordering as the given priority
 queue.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the priority queue whose elements are to be placed
         into this priority queue`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if elements of `],
					[/* inline code block */ 'i', `c`],
					[/* text */ 't', ` cannot be
         compared to one another according to `],
					[/* inline code block */ 'i', `c`],
					[/* text */ 't', `'s
         ordering`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified priority queue or any
         of its elements are null`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.util.SortedSet)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `PriorityQueue`],
				[/* text */ 't', ` containing the elements in the
 specified sorted set.   This priority queue will be ordered
 according to the same ordering as the given sorted set.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the sorted set whose elements are to be placed
         into this priority queue`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if elements of the specified sorted
         set cannot be compared to one another according to the
         sorted set's ordering`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified sorted set or any
         of its elements are null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'toArray(java.lang.Object[])', [
			[/* method description */
				[/* text */ 't', `Returns an array containing all of the elements in this queue; the
 runtime type of the returned array is that of the specified array.
 The returned array elements are in no particular order.
 If the queue fits in the specified array, it is returned therein.
 Otherwise, a new array is allocated with the runtime type of the
 specified array and the size of this queue.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the queue fits in the specified array with room to spare
 (i.e., the array has more elements than the queue), the element in
 the array immediately following the end of the collection is set to
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
					[/* text */ 't', ` is a queue known to contain only strings.
 The following code can be used to dump the queue into a newly
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
					[/* text */ 't', `the array into which the elements of the queue are to
          be stored, if it is big enough; otherwise, a new array of the
          same runtime type is allocated for this purpose.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayStoreException', [/* throw description */
					[/* text */ 't', `if the runtime type of the specified array
         is not a supertype of the runtime type of every element in
         this queue`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified array is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an array containing all of the elements in this queue`]
			]
		]],
		[/* method */ 'add(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element into this priority queue.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the element to add`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the specified element cannot be
         compared with elements currently in this priority queue
         according to the priority queue's ordering`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` (as specified by `],
				[/* reference */ 'r', `java.util.Collection#add(E)`, `Collection.add(E)`],
				[/* text */ 't', `)`]
			]
		]],
		[/* method */ 'contains(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this queue contains the specified element.
 More formally, returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this queue contains
 at least one element `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', ` such that `],
				[/* inline code block */ 'i', `o.equals(e)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `object to be checked for containment in this queue`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this queue contains the specified element`]
			]
		]],
		[/* method */ 'offer(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element into this priority queue.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the element to add`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the specified element cannot be
         compared with elements currently in this priority queue
         according to the priority queue's ordering`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` (as specified by `],
				[/* reference */ 'r', `java.util.Queue#offer(E)`, `Queue.offer(E)`],
				[/* text */ 't', `)`]
			]
		]],
		[/* method */ 'remove(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes a single instance of the specified element from this queue,
 if it is present.  More formally, removes an element `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', ` such
 that `],
				[/* inline code block */ 'i', `o.equals(e)`],
				[/* text */ 't', `, if this queue contains one or more such
 elements.  Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this queue contained
 the specified element (or equivalently, if this queue changed as a
 result of the call).`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `element to be removed from this queue, if present`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this queue changed as a result of the call`]
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
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
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
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `),
         or if the specified collection is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this collection changed as a result of the call`]
			]
		]],
		[/* method */ 'peek()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Retrieves, but does not remove, the head of this queue,
 or returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if this queue is empty.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the head of this queue, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this queue is empty`]
			]
		]],
		[/* method */ 'poll()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Retrieves and removes the head of this queue,
 or returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if this queue is empty.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the head of this queue, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this queue is empty`]
			]
		]],
		[/* method */ 'spliterator()', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* reference */ 'r', `java.util.Spliterator#binding`, `late-binding`],
				[/* text */ 't', `
 and `],
				[/* text */ 't', `fail-fast`],
				[/* reference */ 'r', `java.util.Spliterator`, `Spliterator`],
				[/* text */ 't', ` over the elements in this
 queue. The spliterator does not traverse elements in any particular order
 (the `],
				[/* reference */ 'r', `java.util.Spliterator#ORDERED`, `ORDERED`],
				[/* text */ 't', ` characteristic is not reported).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `Spliterator`],
					[/* text */ 't', ` reports `],
					[/* reference */ 'r', `java.util.Spliterator#SIZED`, `Spliterator.SIZED`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.util.Spliterator#SUBSIZED`, `Spliterator.SUBSIZED`],
					[/* text */ 't', `, and `],
					[/* reference */ 'r', `java.util.Spliterator#NONNULL`, `Spliterator.NONNULL`],
					[/* text */ 't', `.
 Overriding implementations should document the reporting of additional
 characteristic values.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Spliterator`],
				[/* text */ 't', ` over the elements in this queue`]
			]
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns the number of elements in this collection.  If this collection
 contains more than `],
					[/* inline code block */ 'i', `Integer.MAX_VALUE`],
					[/* text */ 't', ` elements, returns
 `],
					[/* inline code block */ 'i', `Integer.MAX_VALUE`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of elements in this collection`]
			]
		]],
		[/* method */ 'toArray()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing all of the elements in this queue.
 The elements are in no particular order.

 `],
				[/* block */ 'b', `The returned array will be "safe" in that no references to it are
 maintained by this queue.  (In other words, this method must allocate
 a new array).  The caller is thus free to modify the returned array.

 `],
				[/* block */ 'b', `This method acts as bridge between array-based and collection-based
 APIs.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array containing all of the elements in this queue`]
			]
		]],
		[/* method */ 'comparator()', [
			[/* method description */
				[/* text */ 't', `Returns the comparator used to order the elements in this
 queue, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this queue is sorted according to
 the `],
				[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
				[/* text */ 't', ` of its elements.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the comparator used to order this queue, or
         `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this queue is sorted according to the
         natural ordering of its elements`]
			]
		]],
		[/* method */ 'iterator()', [
			[/* method description */
				[/* text */ 't', `Returns an iterator over the elements in this queue. The iterator
 does not return the elements in any particular order.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an iterator over the elements in this queue`]
			]
		]],
		[/* method */ 'clear()', [
			[/* method description */
				[/* text */ 't', `Removes all of the elements from this priority queue.
 The queue will be empty after this call returns.`]
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
		]]
	],
]);
