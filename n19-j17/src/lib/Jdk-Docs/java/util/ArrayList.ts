import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.ArrayList', [
	[/* class description */
		[/* text */ 't', `Resizable-array implementation of the `],
		[/* inline code block */ 'i', `List`],
		[/* text */ 't', ` interface.  Implements
 all optional list operations, and permits all elements, including
 `],
		[/* inline code block */ 'i', `null`],
		[/* text */ 't', `.  In addition to implementing the `],
		[/* inline code block */ 'i', `List`],
		[/* text */ 't', ` interface,
 this class provides methods to manipulate the size of the array that is
 used internally to store the list.  (This class is roughly equivalent to
 `],
		[/* inline code block */ 'i', `Vector`],
		[/* text */ 't', `, except that it is unsynchronized.)

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* inline code block */ 'i', `size`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `isEmpty`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `get`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `set`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `iterator`],
			[/* text */ 't', `, and `],
			[/* inline code block */ 'i', `listIterator`],
			[/* text */ 't', ` operations run in constant
 time.  The `],
			[/* inline code block */ 'i', `add`],
			[/* text */ 't', ` operation runs in `],
			[/* text */ 't', `amortized constant time`],
			[/* text */ 't', `,
 that is, adding n elements requires O(n) time.  All of the other operations
 run in linear time (roughly speaking).  The constant factor is low compared
 to that for the `],
			[/* inline code block */ 'i', `LinkedList`],
			[/* text */ 't', ` implementation.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Each `],
			[/* inline code block */ 'i', `ArrayList`],
			[/* text */ 't', ` instance has a `],
			[/* text */ 't', `capacity`],
			[/* text */ 't', `.  The capacity is
 the size of the array used to store the elements in the list.  It is always
 at least as large as the list size.  As elements are added to an ArrayList,
 its capacity grows automatically.  The details of the growth policy are not
 specified beyond the fact that adding an element has constant amortized
 time cost.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `An application can increase the capacity of an `],
			[/* inline code block */ 'i', `ArrayList`],
			[/* text */ 't', ` instance
 before adding a large number of elements using the `],
			[/* inline code block */ 'i', `ensureCapacity`],
			[/* text */ 't', `
 operation.  This may reduce the amount of incremental reallocation.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Note that this implementation is not synchronized.`],
			[/* text */ 't', `
 If multiple threads access an `],
			[/* inline code block */ 'i', `ArrayList`],
			[/* text */ 't', ` instance concurrently,
 and at least one of the threads modifies the list structurally, it
 `],
			[/* text */ 't', `must`],
			[/* text */ 't', ` be synchronized externally.  (A structural modification is
 any operation that adds or deletes one or more elements, or explicitly
 resizes the backing array; merely setting the value of an element is not
 a structural modification.)  This is typically accomplished by
 synchronizing on some object that naturally encapsulates the list.

 If no such object exists, the list should be "wrapped" using the
 `],
			[/* external link */ 'a', `Collections.html#synchronizedList(java.util.List)`, `Collections.synchronizedList`],
			[/* text */ 't', `
 method.  This is best done at creation time, to prevent accidental
 unsynchronized access to the list:`]
		]],
		[/* code block */ 'c', `   List list = Collections.synchronizedList(new ArrayList(...));`],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 The iterators returned by this class's `],
			[/* reference */ 'r', `iterator`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `listIterator`],
			[/* text */ 't', ` methods are `],
			[/* text */ 't', `fail-fast`],
			[/* text */ 't', `:
 if the list is structurally modified at any time after the iterator is
 created, in any way except through the iterator's own
 `],
			[/* external link */ 'a', `ListIterator.html#remove()`, `remove`],
			[/* text */ 't', ` or
 `],
			[/* external link */ 'a', `ListIterator.html#add(E)`, `add`],
			[/* text */ 't', ` methods, the iterator will throw a
 `],
			[/* reference */ 'r', `java.util.ConcurrentModificationException`],
			[/* text */ 't', `.  Thus, in the face of
 concurrent modification, the iterator fails quickly and cleanly, rather
 than risking arbitrary, non-deterministic behavior at an undetermined
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
 exception for its correctness:  `],
			[/* text */ 't', `the fail-fast behavior of iterators
 should be used only to detect bugs.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This class is a member of the
 `],
			[/* external link */ 'a', `../../../java.base/java/util/package-summary.html#CollectionsFramework`, `Java Collections Framework`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
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
		]],
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an empty list with an initial capacity of ten.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an empty list with the specified initial capacity.`]
			],
			[/* parameters */
				[/* parameter */ 'initialCapacity', [/* parameter description */
					[/* text */ 't', `the initial capacity of the list`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified initial capacity
         is negative`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'add(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Appends the specified element to the end of this list.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `element to be appended to this list`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` (as specified by `],
				[/* external link */ 'a', `Collection.html#add(E)`, `Collection.add(E)`],
				[/* text */ 't', `)`]
			]
		]],
		[/* method */ 'add(int,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element at the specified position in this
 list. Shifts the element currently at that position (if any) and
 any subsequent elements to the right (adds one to their indices).`]
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
		[/* method */ 'remove(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the first occurrence of the specified element from this list,
 if it is present.  If the list does not contain the element, it is
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
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this list contained the specified element`]
			]
		]],
		[/* method */ 'remove(int)', [
			[/* method description */
				[/* text */ 't', `Removes the element at the specified position in this list.
 Shifts any subsequent elements to the left (subtracts one from their
 indices).`]
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
				[/* text */ 't', `the element that was removed from the list`]
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
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares the specified object with this list for equality.  Returns
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the specified object is also a list, both
 lists have the same size, and all corresponding pairs of elements in
 the two lists are `],
				[/* text */ 't', `equal`],
				[/* text */ 't', `.  (Two elements `],
				[/* inline code block */ 'i', `e1`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', ` are `],
				[/* text */ 't', `equal`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `(e1==null ? e2==null : e1.equals(e2))`],
				[/* text */ 't', `.)  In other words, two lists are defined to be
 equal if they contain the same elements in the same order.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `the object to be compared for equality with this list`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the specified object is equal to this list`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code value for this list.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hash code value for this list`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Returns a shallow copy of this `],
				[/* inline code block */ 'i', `ArrayList`],
				[/* text */ 't', ` instance.  (The
 elements themselves are not copied.)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a clone of this `],
				[/* inline code block */ 'i', `ArrayList`],
				[/* text */ 't', ` instance`]
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
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index of the first occurrence of the specified element in
         this list, or -1 if this list does not contain the element`]
			]
		]],
		[/* method */ 'clear()', [
			[/* method description */
				[/* text */ 't', `Removes all of the elements from this list.  The list will
 be empty after this call returns.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
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
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index of the last occurrence of the specified element in
         this list, or -1 if this list does not contain the element`]
			]
		]],
		[/* method */ 'isEmpty()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this list contains no elements.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this list contains no elements`]
			]
		]],
		[/* method */ 'replaceAll(java.util.function.UnaryOperator)', UDF],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the number of elements in this list.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of elements in this list`]
			]
		]],
		[/* method */ 'subList(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a view of the portion of this list between the specified
 `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, inclusive, and `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive.  (If
 `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', ` are equal, the returned list is
 empty.)  The returned list is backed by this list, so non-structural
 changes in the returned list are reflected in this list, and vice-versa.
 The returned list supports all of the optional list operations.

 `],
				[/* block */ 'b', `This method eliminates the need for explicit range operations (of
 the sort that commonly exist for arrays).  Any operation that expects
 a list can be used as a range operation by passing a subList view
 instead of a whole list.  For example, the following idiom
 removes a range of elements from a list:
 `],
				[/* code block */ 'c', `      list.subList(from, to).clear();
 `],
				[/* text */ 't', `
 Similar idioms may be constructed for `],
				[/* reference */ 'r', `indexOf(Object)`],
				[/* text */ 't', ` and
 `],
				[/* reference */ 'r', `lastIndexOf(Object)`],
				[/* text */ 't', `, and all of the algorithms in the
 `],
				[/* reference */ 'r', `java.util.Collections`],
				[/* text */ 't', ` class can be applied to a subList.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `The semantics of the list returned by this method become undefined if
 the backing list (i.e., this list) is `],
					[/* text */ 't', `structurally modified`],
					[/* text */ 't', ` in
 any way other than via the returned list.  (Structural modifications are
 those that change the size of this list, or otherwise perturb it in such
 a fashion that iterations in progress may yield incorrect results.)`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `low endpoint (inclusive) of the subList`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `high endpoint (exclusive) of the subList`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if an endpoint index value is out of range
         `],
					[/* inline code block */ 'i', `(fromIndex < 0 || toIndex > size)`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the endpoint indices are out of order
         `],
					[/* inline code block */ 'i', `(fromIndex > toIndex)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a view of the specified range within this list`]
			]
		]],
		[/* method */ 'toArray(java.lang.Object[])', [
			[/* method description */
				[/* text */ 't', `Returns an array containing all of the elements in this list in proper
 sequence (from first to last element); the runtime type of the returned
 array is that of the specified array.  If the list fits in the
 specified array, it is returned therein.  Otherwise, a new array is
 allocated with the runtime type of the specified array and the size of
 this list.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the list fits in the specified array with room to spare
 (i.e., the array has more elements than the list), the element in
 the array immediately following the end of the collection is set to
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.  (This is useful in determining the length of the
 list `],
					[/* text */ 't', `only`],
					[/* text */ 't', ` if the caller knows that the list does not contain
 any null elements.)`]
				]]
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
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array containing all of the elements in this list in
         proper sequence`]
			]
		]],
		[/* method */ 'iterator()', [
			[/* method description */
				[/* text */ 't', `Returns an iterator over the elements in this list in proper sequence.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned iterator is `],
					[/* text */ 't', `fail-fast`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an iterator over the elements in this list in proper sequence`]
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
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this list contains the specified element`]
			]
		]],
		[/* method */ 'spliterator()', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* external link */ 'a', `Spliterator.html#binding`, `late-binding`],
				[/* text */ 't', `
 and `],
				[/* text */ 't', `fail-fast`],
				[/* reference */ 'r', `java.util.Spliterator`],
				[/* text */ 't', ` over the elements in this
 list.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `Spliterator`],
					[/* text */ 't', ` reports `],
					[/* external link */ 'a', `Spliterator.html#SIZED`, `Spliterator.SIZED`],
					[/* text */ 't', `,
 `],
					[/* external link */ 'a', `Spliterator.html#SUBSIZED`, `Spliterator.SUBSIZED`],
					[/* text */ 't', `, and `],
					[/* external link */ 'a', `Spliterator.html#ORDERED`, `Spliterator.ORDERED`],
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
				[/* text */ 't', ` over the elements in this list`]
			]
		]],
		[/* method */ 'addAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Appends all of the elements in the specified collection to the end of
 this list, in the order that they are returned by the
 specified collection's Iterator.  The behavior of this operation is
 undefined if the specified collection is modified while the operation
 is in progress.  (This implies that the behavior of this call is
 undefined if the specified collection is this list, and this
 list is nonempty.)`]
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
					[/* text */ 't', `index at which to insert the first element from the
              specified collection`]
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
		[/* method */ 'set(int,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Replaces the element at the specified position in this list with
 the specified element.`]
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
		[/* method */ 'ensureCapacity(int)', [
			[/* method description */
				[/* text */ 't', `Increases the capacity of this `],
				[/* inline code block */ 'i', `ArrayList`],
				[/* text */ 't', ` instance, if
 necessary, to ensure that it can hold at least the number of elements
 specified by the minimum capacity argument.`]
			],
			[/* parameters */
				[/* parameter */ 'minCapacity', [/* parameter description */
					[/* text */ 't', `the desired minimum capacity`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'trimToSize()', [
			[/* method description */
				[/* text */ 't', `Trims the capacity of this `],
				[/* inline code block */ 'i', `ArrayList`],
				[/* text */ 't', ` instance to be the
 list's current size.  An application can use this operation to minimize
 the storage of an `],
				[/* inline code block */ 'i', `ArrayList`],
				[/* text */ 't', ` instance.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
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
		[/* method */ 'sort(java.util.Comparator)', UDF],
		[/* method */ 'removeRange(int,int)', [
			[/* method description */
				[/* text */ 't', `Removes from this list all of the elements whose index is between
 `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, inclusive, and `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive.
 Shifts any succeeding elements to the left (reduces their index).
 This call shortens the list by `],
				[/* inline code block */ 'i', `(toIndex - fromIndex)`],
				[/* text */ 't', ` elements.
 (If `],
				[/* inline code block */ 'i', `toIndex==fromIndex`],
				[/* text */ 't', `, this operation has no effect.)`]
			],
			[/* parameters */
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `index of first element to be removed`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `index after last element to be removed`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromIndex`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `toIndex`],
					[/* text */ 't', ` is out of range
         (`],
					[/* inline code block */ 'i', `fromIndex < 0 || toIndex > size() || toIndex < fromIndex`],
					[/* text */ 't', `)`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'removeAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Removes from this list all of its elements that are contained in the
 specified collection.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `collection containing elements to be removed from this list`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of an element of this list
         is incompatible with the specified collection
 (`],
					[/* external link */ 'a', `Collection.html#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if this list contains a null element and the
         specified collection does not permit null elements
 (`],
					[/* external link */ 'a', `Collection.html#optional-restrictions`, `optional`],
					[/* text */ 't', `),
         or if the specified collection is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this list changed as a result of the call`]
			]
		]],
		[/* method */ 'retainAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Retains only the elements in this list that are contained in the
 specified collection.  In other words, removes from this list all
 of its elements that are not contained in the specified collection.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `collection containing elements to be retained in this list`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of an element of this list
         is incompatible with the specified collection
 (`],
					[/* external link */ 'a', `Collection.html#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if this list contains a null element and the
         specified collection does not permit null elements
 (`],
					[/* external link */ 'a', `Collection.html#optional-restrictions`, `optional`],
					[/* text */ 't', `),
         or if the specified collection is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this list changed as a result of the call`]
			]
		]],
		[/* method */ 'listIterator()', [
			[/* method description */
				[/* text */ 't', `Returns a list iterator over the elements in this list (in proper
 sequence).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned list iterator is `],
					[/* text */ 't', `fail-fast`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a list iterator over the elements in this list (in proper
         sequence)`]
			]
		]],
		[/* method */ 'listIterator(int)', [
			[/* method description */
				[/* text */ 't', `Returns a list iterator over the elements in this list (in proper
 sequence), starting at the specified position in the list.
 The specified index indicates the first element that would be
 returned by an initial call to `],
				[/* external link */ 'a', `ListIterator.html#next()`, `next`],
				[/* text */ 't', `.
 An initial call to `],
				[/* external link */ 'a', `ListIterator.html#previous()`, `previous`],
				[/* text */ 't', ` would
 return the element with the specified index minus one.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned list iterator is `],
					[/* text */ 't', `fail-fast`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `index of the first element to be returned from the
        list iterator (by a call to `],
					[/* external link */ 'a', `ListIterator.html#next()`, `next`],
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
				[/* text */ 't', `a list iterator over the elements in this list (in proper
         sequence), starting at the specified position in the list`]
			]
		]]
	],
]);
