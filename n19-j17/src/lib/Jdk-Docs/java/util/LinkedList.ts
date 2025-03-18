import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.LinkedList', [
	[/* class description */
		[/* text */ 't', `Doubly-linked list implementation of the `],
		[/* inline code block */ 'i', `List`],
		[/* text */ 't', ` and `],
		[/* inline code block */ 'i', `Deque`],
		[/* text */ 't', `
 interfaces.  Implements all optional list operations, and permits all
 elements (including `],
		[/* inline code block */ 'i', `null`],
		[/* text */ 't', `).

 `],
		[/* block */ 'b', `All of the operations perform as could be expected for a doubly-linked
 list.  Operations that index into the list will traverse the list from
 the beginning or the end, whichever is closer to the specified index.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Note that this implementation is not synchronized.`],
			[/* text */ 't', `
 If multiple threads access a linked list concurrently, and at least
 one of the threads modifies the list structurally, it `],
			[/* text */ 't', `must`],
			[/* text */ 't', ` be
 synchronized externally.  (A structural modification is any operation
 that adds or deletes one or more elements; merely setting the value of
 an element is not a structural modification.)  This is typically
 accomplished by synchronizing on some object that naturally
 encapsulates the list.

 If no such object exists, the list should be "wrapped" using the
 `],
			[/* reference */ 'r', `java.util.Collections#synchronizedList(java.util.List)`, `Collections.synchronizedList`],
			[/* text */ 't', `
 method.  This is best done at creation time, to prevent accidental
 unsynchronized access to the list:`]
		]],
		[/* code block */ 'c', `   List list = Collections.synchronizedList(new LinkedList(...));`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `The iterators returned by this class's `],
			[/* inline code block */ 'i', `iterator`],
			[/* text */ 't', ` and
 `],
			[/* inline code block */ 'i', `listIterator`],
			[/* text */ 't', ` methods are `],
			[/* text */ 't', `fail-fast`],
			[/* text */ 't', `: if the list is
 structurally modified at any time after the iterator is created, in
 any way except through the Iterator's own `],
			[/* inline code block */ 'i', `remove`],
			[/* text */ 't', ` or
 `],
			[/* inline code block */ 'i', `add`],
			[/* text */ 't', ` methods, the iterator will throw a `],
			[/* reference */ 'r', `java.util.ConcurrentModificationException`, `ConcurrentModificationException`],
			[/* text */ 't', `.  Thus, in the face of concurrent
 modification, the iterator fails quickly and cleanly, rather than
 risking arbitrary, non-deterministic behavior at an undetermined
 time in the future.

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
 exception for its correctness:   `],
			[/* text */ 't', `the fail-fast behavior of iterators
 should be used only to detect bugs.`],
			[/* text */ 't', `

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
				[/* text */ 't', `Constructs an empty list.`]
			],
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.util.Collection)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a list containing the elements of the specified
 collection, in the order they are returned by the collection's
 iterator.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the collection whose elements are to be placed into this list`]
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
				[/* text */ 't', `Returns an array containing all of the elements in this list in
 proper sequence (from first to last element); the runtime type of
 the returned array is that of the specified array.  If the list fits
 in the specified array, it is returned therein.  Otherwise, a new
 array is allocated with the runtime type of the specified array and
 the size of this list.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the list fits in the specified array with room to spare (i.e.,
 the array has more elements than the list), the element in the array
 immediately following the end of the list is set to `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.
 (This is useful in determining the length of the list `],
					[/* text */ 't', `only`],
					[/* text */ 't', ` if
 the caller knows that the list does not contain any null elements.)

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
					[/* text */ 't', ` is a list known to contain only strings.
 The following code can be used to dump the list into a newly
 allocated array of `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', `:

 `]
				]],
				[/* code block */ 'c', `     String[] y = x.toArray(new String[0]);`],
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
					[/* text */ 't', `the array into which the elements of the list are to
          be stored, if it is big enough; otherwise, a new array of the
          same runtime type is allocated for this purpose.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayStoreException', [/* throw description */
					[/* text */ 't', `if the runtime type of the specified array
         is not a supertype of the runtime type of every element in
         this list`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified array is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an array containing the elements of the list`]
			]
		]],
		[/* method */ 'add(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Appends the specified element to the end of this list.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is equivalent to `],
					[/* reference */ 'r', `#addLast(E)`, `addLast(E)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `element to be appended to this list`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` (as specified by `],
				[/* reference */ 'r', `java.util.Collection#add(E)`, `Collection.add(E)`],
				[/* text */ 't', `)`]
			]
		]],
		[/* method */ 'addAll(int,java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Inserts all of the elements in the specified collection into this
 list, starting at the specified position.  Shifts the element
 currently at that position (if any) and any subsequent elements to
 the right (increases their indices).  The new elements will appear
 in the list in the order that they are returned by the
 specified collection's iterator.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `index at which to insert the first element
              from the specified collection`]
				]],
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `collection containing elements to be added to this list`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the index is out of range
         (`],
					[/* inline code block */ 'i', `index < 0 || index > size()`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified collection is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this list changed as a result of the call`]
			]
		]],
		[/* method */ 'addAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Appends all of the elements in the specified collection to the end of
 this list, in the order that they are returned by the specified
 collection's iterator.  The behavior of this operation is undefined if
 the specified collection is modified while the operation is in
 progress.  (Note that this will occur if the specified collection is
 this list, and it's nonempty.)`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `collection containing elements to be added to this list`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified collection is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this list changed as a result of the call`]
			]
		]],
		[/* method */ 'contains(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this list contains the specified element.
 More formally, returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this list contains
 at least one element `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `Objects.equals(o, e)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `element whose presence in this list is to be tested`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this list contains the specified element`]
			]
		]],
		[/* method */ 'offer(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Adds the specified element as the tail (last element) of this list.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the element to add`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` (as specified by `],
				[/* reference */ 'r', `java.util.Queue#offer(E)`, `Queue.offer(E)`],
				[/* text */ 't', `)`]
			]
		]],
		[/* method */ 'offerFirst(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element at the front of this list.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the element to insert`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` (as specified by `],
				[/* reference */ 'r', `java.util.Deque#offerFirst(E)`, `Deque.offerFirst(E)`],
				[/* text */ 't', `)`]
			]
		]],
		[/* method */ 'offerLast(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element at the end of this list.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the element to insert`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` (as specified by `],
				[/* reference */ 'r', `java.util.Deque#offerLast(E)`, `Deque.offerLast(E)`],
				[/* text */ 't', `)`]
			]
		]],
		[/* method */ 'remove(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the first occurrence of the specified element from this list,
 if it is present.  If this list does not contain the element, it is
 unchanged.  More formally, removes the element with the lowest index
 `],
				[/* inline code block */ 'i', `i`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `Objects.equals(o, get(i))`],
				[/* text */ 't', `
 (if such an element exists).  Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this list
 contained the specified element (or equivalently, if this list
 changed as a result of the call).`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `element to be removed from this list, if present`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this list contained the specified element`]
			]
		]],
		[/* method */ 'removeFirstOccurrence(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the first occurrence of the specified element in this
 list (when traversing the list from head to tail).  If the list
 does not contain the element, it is unchanged.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `element to be removed from this list, if present`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the list contained the specified element`]
			]
		]],
		[/* method */ 'removeLastOccurrence(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the last occurrence of the specified element in this
 list (when traversing the list from head to tail).  If the list
 does not contain the element, it is unchanged.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `element to be removed from this list, if present`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the list contained the specified element`]
			]
		]],
		[/* method */ 'element()', [
			[/* method description */
				[/* text */ 't', `Retrieves, but does not remove, the head (first element) of this list.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this list is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the head of this list`]
			]
		]],
		[/* method */ 'get(int)', [
			[/* method description */
				[/* text */ 't', `Returns the element at the specified position in this list.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `index of the element to return`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the index is out of range
         (`],
					[/* inline code block */ 'i', `index < 0 || index >= size()`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the element at the specified position in this list`]
			]
		]],
		[/* method */ 'getFirst()', [
			[/* method description */
				[/* text */ 't', `Returns the first element in this list.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this list is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the first element in this list`]
			]
		]],
		[/* method */ 'getLast()', [
			[/* method description */
				[/* text */ 't', `Returns the last element in this list.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this list is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the last element in this list`]
			]
		]],
		[/* method */ 'peek()', [
			[/* method description */
				[/* text */ 't', `Retrieves, but does not remove, the head (first element) of this list.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the head of this list, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this list is empty`]
			]
		]],
		[/* method */ 'peekFirst()', [
			[/* method description */
				[/* text */ 't', `Retrieves, but does not remove, the first element of this list,
 or returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this list is empty.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the first element of this list, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
         if this list is empty`]
			]
		]],
		[/* method */ 'peekLast()', [
			[/* method description */
				[/* text */ 't', `Retrieves, but does not remove, the last element of this list,
 or returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this list is empty.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the last element of this list, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
         if this list is empty`]
			]
		]],
		[/* method */ 'poll()', [
			[/* method description */
				[/* text */ 't', `Retrieves and removes the head (first element) of this list.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the head of this list, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this list is empty`]
			]
		]],
		[/* method */ 'pollFirst()', [
			[/* method description */
				[/* text */ 't', `Retrieves and removes the first element of this list,
 or returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this list is empty.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the first element of this list, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if
     this list is empty`]
			]
		]],
		[/* method */ 'pollLast()', [
			[/* method description */
				[/* text */ 't', `Retrieves and removes the last element of this list,
 or returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this list is empty.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the last element of this list, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if
     this list is empty`]
			]
		]],
		[/* method */ 'pop()', [
			[/* method description */
				[/* text */ 't', `Pops an element from the stack represented by this list.  In other
 words, removes and returns the first element of this list.

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
					[/* text */ 't', `if this list is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the element at the front of this list (which is the top
         of the stack represented by this list)`]
			]
		]],
		[/* method */ 'remove()', [
			[/* method description */
				[/* text */ 't', `Retrieves and removes the head (first element) of this list.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this list is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the head of this list`]
			]
		]],
		[/* method */ 'remove(int)', [
			[/* method description */
				[/* text */ 't', `Removes the element at the specified position in this list.  Shifts any
 subsequent elements to the left (subtracts one from their indices).
 Returns the element that was removed from the list.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index of the element to be removed`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the index is out of range
         (`],
					[/* inline code block */ 'i', `index < 0 || index >= size()`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the element previously at the specified position`]
			]
		]],
		[/* method */ 'removeFirst()', [
			[/* method description */
				[/* text */ 't', `Removes and returns the first element from this list.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this list is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the first element from this list`]
			]
		]],
		[/* method */ 'removeLast()', [
			[/* method description */
				[/* text */ 't', `Removes and returns the last element from this list.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this list is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the last element from this list`]
			]
		]],
		[/* method */ 'set(int,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Replaces the element at the specified position in this list with the
 specified element.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `index of the element to replace`]
				]],
				[/* parameter */ 'element', [/* parameter description */
					[/* text */ 't', `element to be stored at the specified position`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the index is out of range
         (`],
					[/* inline code block */ 'i', `index < 0 || index >= size()`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the element previously at the specified position`]
			]
		]],
		[/* method */ 'indexOf(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the index of the first occurrence of the specified element
 in this list, or -1 if this list does not contain the element.
 More formally, returns the lowest index `],
				[/* inline code block */ 'i', `i`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `Objects.equals(o, get(i))`],
				[/* text */ 't', `,
 or -1 if there is no such index.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `element to search for`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the index of the first occurrence of the specified element in
         this list, or -1 if this list does not contain the element`]
			]
		]],
		[/* method */ 'lastIndexOf(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the index of the last occurrence of the specified element
 in this list, or -1 if this list does not contain the element.
 More formally, returns the highest index `],
				[/* inline code block */ 'i', `i`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `Objects.equals(o, get(i))`],
				[/* text */ 't', `,
 or -1 if there is no such index.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `element to search for`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the index of the last occurrence of the specified element in
         this list, or -1 if this list does not contain the element`]
			]
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the number of elements in this list.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the number of elements in this list`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Returns a shallow copy of this `],
				[/* inline code block */ 'i', `LinkedList`],
				[/* text */ 't', `. (The elements
 themselves are not cloned.)`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a shallow copy of this `],
				[/* inline code block */ 'i', `LinkedList`],
				[/* text */ 't', ` instance`]
			]
		]],
		[/* method */ 'toArray()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing all of the elements in this list
 in proper sequence (from first to last element).

 `],
				[/* block */ 'b', `The returned array will be "safe" in that no references to it are
 maintained by this list.  (In other words, this method must allocate
 a new array).  The caller is thus free to modify the returned array.

 `],
				[/* block */ 'b', `This method acts as bridge between array-based and collection-based
 APIs.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an array containing all of the elements in this list
         in proper sequence`]
			]
		]],
		[/* method */ 'descendingIterator()', [
			[/* method description */
				[/* block */ 'b', `Returns an iterator over the elements in this deque in reverse
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
		[/* method */ 'listIterator(int)', [
			[/* method description */
				[/* text */ 't', `Returns a list-iterator of the elements in this list (in proper
 sequence), starting at the specified position in the list.
 Obeys the general contract of `],
				[/* inline code block */ 'i', `List.listIterator(int)`],
				[/* text */ 't', `.`],
				[/* block */ 'b', [
					[/* text */ 't', `

 The list-iterator is `],
					[/* text */ 't', `fail-fast`],
					[/* text */ 't', `: if the list is structurally
 modified at any time after the Iterator is created, in any way except
 through the list-iterator's own `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `add`],
					[/* text */ 't', `
 methods, the list-iterator will throw a
 `],
					[/* inline code block */ 'i', `ConcurrentModificationException`],
					[/* text */ 't', `.  Thus, in the face of
 concurrent modification, the iterator fails quickly and cleanly, rather
 than risking arbitrary, non-deterministic behavior at an undetermined
 time in the future.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `index of the first element to be returned from the
              list-iterator (by a call to `],
					[/* inline code block */ 'i', `next`],
					[/* text */ 't', `)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the index is out of range
         (`],
					[/* inline code block */ 'i', `index < 0 || index > size()`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a ListIterator of the elements in this list (in proper
         sequence), starting at the specified position in the list`]
			]
		]],
		[/* method */ 'spliterator()', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* reference */ 'r', `java.util.Spliterator#binding`, `late-binding`],
				[/* text */ 't', `
 and `],
				[/* text */ 't', `fail-fast`],
				[/* text */ 't', ` `],
				[/* reference */ 'r', `java.util.Spliterator`, `Spliterator`],
				[/* text */ 't', ` over the elements in this
 list.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `Spliterator`],
					[/* text */ 't', ` reports `],
					[/* reference */ 'r', `java.util.Spliterator#SIZED`, `Spliterator.SIZED`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.util.Spliterator#ORDERED`, `Spliterator.ORDERED`],
					[/* text */ 't', `.  Overriding implementations should document
 the reporting of additional characteristic values.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Spliterator`],
				[/* text */ 't', ` over the elements in this list`]
			]
		]],
		[/* method */ 'add(int,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element at the specified position in this list.
 Shifts the element currently at that position (if any) and any
 subsequent elements to the right (adds one to their indices).`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `index at which the specified element is to be inserted`]
				]],
				[/* parameter */ 'element', [/* parameter description */
					[/* text */ 't', `element to be inserted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the index is out of range
         (`],
					[/* inline code block */ 'i', `index < 0 || index > size()`],
					[/* text */ 't', `)`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'addFirst(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element at the beginning of this list.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the element to add`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'addLast(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Appends the specified element to the end of this list.

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
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'clear()', [
			[/* method description */
				[/* text */ 't', `Removes all of the elements from this list.
 The list will be empty after this call returns.`]
			],
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'push(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Pushes an element onto the stack represented by this list.  In other
 words, inserts the element at the front of this list.

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
			/* throws */,
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
