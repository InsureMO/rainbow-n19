import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Vector', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* inline code block */ 'i', `Vector`],
		[/* text */ 't', ` class implements a growable array of
 objects. Like an array, it contains components that can be
 accessed using an integer index. However, the size of a
 `],
		[/* inline code block */ 'i', `Vector`],
		[/* text */ 't', ` can grow or shrink as needed to accommodate
 adding and removing items after the `],
		[/* inline code block */ 'i', `Vector`],
		[/* text */ 't', ` has been created.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Each vector tries to optimize storage management by maintaining a
 `],
			[/* inline code block */ 'i', `capacity`],
			[/* text */ 't', ` and a `],
			[/* inline code block */ 'i', `capacityIncrement`],
			[/* text */ 't', `. The
 `],
			[/* inline code block */ 'i', `capacity`],
			[/* text */ 't', ` is always at least as large as the vector
 size; it is usually larger because as components are added to the
 vector, the vector's storage increases in chunks the size of
 `],
			[/* inline code block */ 'i', `capacityIncrement`],
			[/* text */ 't', `. An application can increase the
 capacity of a vector before inserting a large number of
 components; this reduces the amount of incremental reallocation.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The iterators returned by this class's `],
			[/* reference */ 'r', `#iterator()`, `iterator`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `#listIterator(int)`, `listIterator`],
			[/* text */ 't', ` methods are `],
			[/* text */ 't', `fail-fast`],
			[/* text */ 't', `:
 if the vector is structurally modified at any time after the iterator is
 created, in any way except through the iterator's own
 `],
			[/* reference */ 'r', `java.util.ListIterator#remove()`, `remove`],
			[/* text */ 't', ` or
 `],
			[/* reference */ 'r', `java.util.ListIterator#add(E)`, `add`],
			[/* text */ 't', ` methods, the iterator will throw a
 `],
			[/* reference */ 'r', `java.util.ConcurrentModificationException`, `ConcurrentModificationException`],
			[/* text */ 't', `.  Thus, in the face of
 concurrent modification, the iterator fails quickly and cleanly, rather
 than risking arbitrary, non-deterministic behavior at an undetermined
 time in the future.  The `],
			[/* reference */ 'r', `java.util.Enumeration`, `Enumerations`],
			[/* text */ 't', ` returned by
 the `],
			[/* reference */ 'r', `#elements()`, `elements`],
			[/* text */ 't', ` method are `],
			[/* text */ 't', `not`],
			[/* text */ 't', ` fail-fast; if the
 Vector is structurally modified at any time after the enumeration is
 created then the results of enumerating are undefined.

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
 should be used only to detect bugs.`],
			[/* text */ 't', `

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `As of the Java 2 platform v1.2, this class was retrofitted to
 implement the `],
			[/* reference */ 'r', `java.util.List`, `List`],
			[/* text */ 't', ` interface, making it a member of the
 `],
			[/* text */ 't', `Java Collections Framework`],
			[/* text */ 't', `.  Unlike the new collection
 implementations, `],
			[/* inline code block */ 'i', `Vector`],
			[/* text */ 't', ` is synchronized.  If a thread-safe
 implementation is not needed, it is recommended to use `],
			[/* reference */ 'r', `java.util.ArrayList`, `ArrayList`],
			[/* text */ 't', ` in place of `],
			[/* inline code block */ 'i', `Vector`],
			[/* text */ 't', `.`]
		]]
	],
	[/* fields */
		[/* field */ 'capacityIncrement', [
			[/* field description */
				[/* text */ 't', `The amount by which the capacity of the vector is automatically
 incremented when its size becomes greater than its capacity.  If
 the capacity increment is less than or equal to zero, the capacity
 of the vector is doubled each time it needs to grow.`]
			],
		]],
		[/* field */ 'elementCount', [
			[/* field description */
				[/* text */ 't', `The number of valid components in this `],
				[/* inline code block */ 'i', `Vector`],
				[/* text */ 't', ` object.
 Components `],
				[/* inline code block */ 'i', `elementData[0]`],
				[/* text */ 't', ` through
 `],
				[/* inline code block */ 'i', `elementData[elementCount-1]`],
				[/* text */ 't', ` are the actual items.`]
			],
		]],
		[/* field */ 'elementData', [
			[/* field description */
				[/* text */ 't', `The array buffer into which the components of the vector are
 stored. The capacity of the vector is the length of this array buffer,
 and is at least large enough to contain all the vector's elements.

 `],
				[/* block */ 'b', `Any array elements following the last element in the Vector are null.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an empty vector so that its internal data array
 has size `],
				[/* inline code block */ 'i', `10`],
				[/* text */ 't', ` and its standard capacity increment is
 zero.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an empty vector with the specified initial capacity and
 with its capacity increment equal to zero.`]
			],
			[/* parameters */
				[/* parameter */ 'initialCapacity', [/* parameter description */
					[/* text */ 't', `the initial capacity of the vector`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified initial capacity
         is negative`]
				]]
			]
		]],
		[/* constructor */ '<init>(int,int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an empty vector with the specified initial capacity and
 capacity increment.`]
			],
			[/* parameters */
				[/* parameter */ 'initialCapacity', [/* parameter description */
					[/* text */ 't', `the initial capacity of the vector`]
				]],
				[/* parameter */ 'capacityIncrement', [/* parameter description */
					[/* text */ 't', `the amount by which the capacity is
                              increased when the vector overflows`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified initial capacity
         is negative`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.util.Collection)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a vector containing the elements of the specified
 collection, in the order they are returned by the collection's
 iterator.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the collection whose elements are to be placed into this
       vector`]
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
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'addAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Appends all of the elements in the specified Collection to the end of
 this Vector, in the order that they are returned by the specified
 Collection's Iterator.  The behavior of this operation is undefined if
 the specified Collection is modified while the operation is in progress.
 (This implies that the behavior of this call is undefined if the
 specified Collection is this Vector, and this Vector is nonempty.)`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `elements to be inserted into this Vector`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified collection is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this Vector changed as a result of the call`]
			]
		]],
		[/* method */ 'contains(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this vector contains the specified element.
 More formally, returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this vector
 contains at least one element `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `Objects.equals(o, e)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `element whose presence in this vector is to be tested`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this vector contains the specified element`]
			]
		]],
		[/* method */ 'remove(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the first occurrence of the specified element in this Vector
 If the Vector does not contain the element, it is unchanged.  More
 formally, removes the element with the lowest index i such that
 `],
				[/* inline code block */ 'i', `Objects.equals(o, get(i))`],
				[/* text */ 't', ` (if such
 an element exists).`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `element to be removed from this Vector, if present`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the Vector contained the specified element`]
			]
		]],
		[/* method */ 'removeAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Removes from this Vector all of its elements that are contained in the
 specified Collection.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `a collection of elements to be removed from the Vector`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the types of one or more elements
         in this vector are incompatible with the specified
         collection
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if this vector contains one or more null
         elements and the specified collection does not support null
         elements
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `),
         or if the specified collection is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if this Vector changed as a result of the call`]
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
				[/* text */ 't', `Retains only the elements in this Vector that are contained in the
 specified Collection.  In other words, removes from this Vector all
 of its elements that are not contained in the specified Collection.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `a collection of elements to be retained in this Vector
          (all other elements are removed)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the types of one or more elements
         in this vector are incompatible with the specified
         collection
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if this vector contains one or more null
         elements and the specified collection does not support null
         elements
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `),
         or if the specified collection is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if this Vector changed as a result of the call`]
			]
		]],
		[/* method */ 'indexOf(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the index of the first occurrence of the specified element
 in this vector, or -1 if this vector does not contain the element.
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
         this vector, or -1 if this vector does not contain the element`]
			]
		]],
		[/* method */ 'elements()', [
			[/* method description */
				[/* text */ 't', `Returns an enumeration of the components of this vector. The
 returned `],
				[/* inline code block */ 'i', `Enumeration`],
				[/* text */ 't', ` object will generate all items in
 this vector. The first item generated is the item at index `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `,
 then the item at index `],
				[/* inline code block */ 'i', `1`],
				[/* text */ 't', `, and so on. If the vector is
 structurally modified while enumerating over the elements then the
 results of enumerating are undefined.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an enumeration of the components of this vector`]
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
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.util.Spliterator#SUBSIZED`, `Spliterator.SUBSIZED`],
					[/* text */ 't', `, and `],
					[/* reference */ 'r', `java.util.Spliterator#ORDERED`, `Spliterator.ORDERED`],
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
		[/* method */ 'toArray(java.lang.Object[])', [
			[/* method description */
				[/* text */ 't', `Returns an array containing all of the elements in this Vector in the
 correct order; the runtime type of the returned array is that of the
 specified array.  If the Vector fits in the specified array, it is
 returned therein.  Otherwise, a new array is allocated with the runtime
 type of the specified array and the size of this Vector.

 `],
				[/* block */ 'b', `only`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array into which the elements of the Vector are to
          be stored, if it is big enough; otherwise, a new array of the
          same runtime type is allocated for this purpose.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayStoreException', [/* throw description */
					[/* text */ 't', `if the runtime type of a, `],
					[/* inline code block */ 'i', `<T>`],
					[/* text */ 't', `, is not
 a supertype of the runtime type, `],
					[/* inline code block */ 'i', `<E>`],
					[/* text */ 't', `, of every element in this
 Vector`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given array is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an array containing the elements of the Vector`]
			]
		]],
		[/* method */ 'add(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Appends the specified element to the end of this Vector.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `element to be appended to this Vector`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` (as specified by `],
				[/* reference */ 'r', `java.util.Collection#add(E)`, `Collection.add(E)`],
				[/* text */ 't', `)`]
			]
		]],
		[/* method */ 'addAll(int,java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Inserts all of the elements in the specified Collection into this
 Vector at the specified position.  Shifts the element currently at
 that position (if any) and any subsequent elements to the right
 (increases their indices).  The new elements will appear in the Vector
 in the order that they are returned by the specified Collection's
 iterator.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `index at which to insert the first element from the
              specified collection`]
				]],
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `elements to be inserted into this Vector`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
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
				[/* text */ 't', ` if this Vector changed as a result of the call`]
			]
		]],
		[/* method */ 'containsAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Returns true if this Vector contains all of the elements in the
 specified Collection.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `a collection whose elements will be tested for containment
          in this Vector`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified collection is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if this Vector contains all of the elements in the
         specified collection`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares the specified Object with this Vector for equality.  Returns
 true if and only if the specified Object is also a List, both Lists
 have the same size, and all corresponding pairs of elements in the two
 Lists are `],
				[/* text */ 't', `equal`],
				[/* text */ 't', `.  (Two elements `],
				[/* inline code block */ 'i', `e1`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', ` are `],
				[/* text */ 't', `equal`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `Objects.equals(e1, e2)`],
				[/* text */ 't', `.)
 In other words, two Lists are defined to be
 equal if they contain the same elements in the same order.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `the Object to be compared for equality with this Vector`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the specified Object is equal to this Vector`]
			]
		]],
		[/* method */ 'isEmpty()', [
			[/* method description */
				[/* text */ 't', `Tests if this vector has no components.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this vector has
          no components, that is, its size is zero;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'removeElement(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the first (lowest-indexed) occurrence of the argument
 from this vector. If the object is found in this vector, each
 component in the vector with an index greater or equal to the
 object's index is shifted downward to have an index one smaller
 than the value it had previously.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is identical in functionality to the
 `],
					[/* reference */ 'r', `#remove(java.lang.Object)`, `remove(Object)`],
					[/* text */ 't', ` method (which is part of the
 `],
					[/* reference */ 'r', `java.util.List`, `List`],
					[/* text */ 't', ` interface).`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the component to be removed`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the argument was a component of this
          vector; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'elementAt(int)', [
			[/* method description */
				[/* text */ 't', `Returns the component at the specified index.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is identical in functionality to the `],
					[/* reference */ 'r', `#get(int)`, `get(int)`],
					[/* text */ 't', `
 method (which is part of the `],
					[/* reference */ 'r', `java.util.List`, `List`],
					[/* text */ 't', ` interface).`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `an index into this vector`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the index is out of range
         (`],
					[/* inline code block */ 'i', `index < 0 || index >= size()`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the component at the specified index`]
			]
		]],
		[/* method */ 'firstElement()', [
			[/* method description */
				[/* text */ 't', `Returns the first component (the item at index `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `) of
 this vector.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this vector has no components`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the first component of this vector`]
			]
		]],
		[/* method */ 'get(int)', [
			[/* method description */
				[/* text */ 't', `Returns the element at the specified position in this Vector.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `index of the element to return`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the index is out of range
            (`],
					[/* inline code block */ 'i', `index < 0 || index >= size()`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `object at the specified index`]
			]
		]],
		[/* method */ 'lastElement()', [
			[/* method description */
				[/* text */ 't', `Returns the last component of the vector.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this vector is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the last component of the vector, i.e., the component at index
          `],
				[/* inline code block */ 'i', `size() - 1`]
			]
		]],
		[/* method */ 'remove(int)', [
			[/* method description */
				[/* text */ 't', `Removes the element at the specified position in this Vector.
 Shifts any subsequent elements to the left (subtracts one from their
 indices).  Returns the element that was removed from the Vector.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index of the element to be removed`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the index is out of range
         (`],
					[/* inline code block */ 'i', `index < 0 || index >= size()`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `element that was removed`]
			]
		]],
		[/* method */ 'set(int,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Replaces the element at the specified position in this Vector with the
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
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
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
		[/* method */ 'capacity()', [
			[/* method description */
				[/* text */ 't', `Returns the current capacity of this vector.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the current capacity (the length of its internal
          data array, kept in the field `],
				[/* inline code block */ 'i', `elementData`],
				[/* text */ 't', `
          of this vector)`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code value for this Vector.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hash code value for this list`]
			]
		]],
		[/* method */ 'indexOf(java.lang.Object,int)', [
			[/* method description */
				[/* text */ 't', `Returns the index of the first occurrence of the specified element in
 this vector, searching forwards from `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', `, or returns -1 if
 the element is not found.
 More formally, returns the lowest index `],
				[/* inline code block */ 'i', `i`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `(i >= index && Objects.equals(o, get(i)))`],
				[/* text */ 't', `,
 or -1 if there is no such index.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `element to search for`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `index to start searching from`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the specified index is negative`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index of the first occurrence of the element in
         this vector at position `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', ` or later in the vector;
         `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the element is not found.`]
			]
		]],
		[/* method */ 'lastIndexOf(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the index of the last occurrence of the specified element
 in this vector, or -1 if this vector does not contain the element.
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
         this vector, or -1 if this vector does not contain the element`]
			]
		]],
		[/* method */ 'lastIndexOf(java.lang.Object,int)', [
			[/* method description */
				[/* text */ 't', `Returns the index of the last occurrence of the specified element in
 this vector, searching backwards from `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', `, or returns -1 if
 the element is not found.
 More formally, returns the highest index `],
				[/* inline code block */ 'i', `i`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `(i <= index && Objects.equals(o, get(i)))`],
				[/* text */ 't', `,
 or -1 if there is no such index.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `element to search for`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `index to start searching backwards from`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the specified index is greater
         than or equal to the current size of this vector`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index of the last occurrence of the element at position
         less than or equal to `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', ` in this vector;
         -1 if the element is not found.`]
			]
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the number of components in this vector.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of components in this vector`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Returns a clone of this vector. The copy will contain a
 reference to a clone of the internal data array, not a reference
 to the original internal data array of this `],
				[/* inline code block */ 'i', `Vector`],
				[/* text */ 't', ` object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a clone of this vector`]
			]
		]],
		[/* method */ 'toArray()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing all of the elements in this Vector
 in the correct order.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array, whose `],
				[/* reference */ 'r', `java.lang.Class#getComponentType()`, `runtime component type`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `, containing all of the elements in this collection`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of this Vector, containing
 the String representation of each element.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this collection`]
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
		[/* method */ 'subList(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a view of the portion of this List between fromIndex,
 inclusive, and toIndex, exclusive.  (If fromIndex and toIndex are
 equal, the returned List is empty.)  The returned List is backed by this
 List, so changes in the returned List are reflected in this List, and
 vice-versa.  The returned List supports all of the optional List
 operations supported by this List.

 `],
				[/* block */ 'b', `This method eliminates the need for explicit range operations (of
 the sort that commonly exist for arrays).  Any operation that expects
 a List can be used as a range operation by operating on a subList view
 instead of a whole List.  For example, the following idiom
 removes a range of elements from a List:
 `],
				[/* code block */ 'c', `      list.subList(from, to).clear();
 `],
				[/* text */ 't', `
 Similar idioms may be constructed for indexOf and lastIndexOf,
 and all of the algorithms in the Collections class can be applied to
 a subList.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `The semantics of the List returned by this method become undefined if
 the backing list (i.e., this List) is `],
					[/* text */ 't', `structurally modified`],
					[/* text */ 't', ` in
 any way other than via the returned List.  (Structural modifications are
 those that change the size of the List, or otherwise perturb it in such
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
				[/* text */ 't', `a view of the specified range within this List`]
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
				[/* reference */ 'r', `java.util.ListIterator#next()`, `next`],
				[/* text */ 't', `.
 An initial call to `],
				[/* reference */ 'r', `java.util.ListIterator#previous()`, `previous`],
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
					[/* reference */ 'r', `java.util.ListIterator#next()`, `next`],
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
		]],
		[/* method */ 'addElement(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Adds the specified component to the end of this vector,
 increasing its size by one. The capacity of this vector is
 increased if its size becomes greater than its capacity.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is identical in functionality to the
 `],
					[/* reference */ 'r', `#add(E)`, `add(E)`],
					[/* text */ 't', `
 method (which is part of the `],
					[/* reference */ 'r', `java.util.List`, `List`],
					[/* text */ 't', ` interface).`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the component to be added`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'copyInto(java.lang.Object[])', [
			[/* method description */
				[/* text */ 't', `Copies the components of this vector into the specified array.
 The item at index `],
				[/* inline code block */ 'i', `k`],
				[/* text */ 't', ` in this vector is copied into
 component `],
				[/* inline code block */ 'i', `k`],
				[/* text */ 't', ` of `],
				[/* inline code block */ 'i', `anArray`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'anArray', [/* parameter description */
					[/* text */ 't', `the array into which the components get copied`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given array is null`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the specified array is not
         large enough to hold all the components of this vector`]
				]],
				[/* throw */ 'java.lang.ArrayStoreException', [/* throw description */
					[/* text */ 't', `if a component of this vector is not of
         a runtime type that can be stored in the specified array`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'ensureCapacity(int)', [
			[/* method description */
				[/* text */ 't', `Increases the capacity of this vector, if necessary, to ensure
 that it can hold at least the number of components specified by
 the minimum capacity argument.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the current capacity of this vector is less than
 `],
					[/* inline code block */ 'i', `minCapacity`],
					[/* text */ 't', `, then its capacity is increased by replacing its
 internal data array, kept in the field `],
					[/* inline code block */ 'i', `elementData`],
					[/* text */ 't', `, with a
 larger one.  The size of the new data array will be the old size plus
 `],
					[/* inline code block */ 'i', `capacityIncrement`],
					[/* text */ 't', `, unless the value of
 `],
					[/* inline code block */ 'i', `capacityIncrement`],
					[/* text */ 't', ` is less than or equal to zero, in which case
 the new capacity will be twice the old capacity; but if this new size
 is still smaller than `],
					[/* inline code block */ 'i', `minCapacity`],
					[/* text */ 't', `, then the new capacity will
 be `],
					[/* inline code block */ 'i', `minCapacity`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'minCapacity', [/* parameter description */
					[/* text */ 't', `the desired minimum capacity`]
				]]
			],
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
		[/* method */ 'insertElementAt(java.lang.Object,int)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified object as a component in this vector at the
 specified `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', `. Each component in this vector with
 an index greater or equal to the specified `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', ` is
 shifted upward to have an index one greater than the value it had
 previously.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The index must be a value greater than or equal to `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `
 and less than or equal to the current size of the vector. (If the
 index is equal to the current size of the vector, the new element
 is appended to the Vector.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This method is identical in functionality to the
 `],
					[/* reference */ 'r', `#add(int,E)`, `add(int, E)`],
					[/* text */ 't', `
 method (which is part of the `],
					[/* reference */ 'r', `java.util.List`, `List`],
					[/* text */ 't', ` interface).  Note that the
 `],
					[/* inline code block */ 'i', `add`],
					[/* text */ 't', ` method reverses the order of the parameters, to more closely
 match array usage.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the component to insert`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `where to insert the new component`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the index is out of range
         (`],
					[/* inline code block */ 'i', `index < 0 || index > size()`],
					[/* text */ 't', `)`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'removeAllElements()', [
			[/* method description */
				[/* text */ 't', `Removes all components from this vector and sets its size to zero.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is identical in functionality to the `],
					[/* reference */ 'r', `#clear()`, `clear()`],
					[/* text */ 't', `
 method (which is part of the `],
					[/* reference */ 'r', `java.util.List`, `List`],
					[/* text */ 't', ` interface).`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'removeElementAt(int)', [
			[/* method description */
				[/* text */ 't', `Deletes the component at the specified index. Each component in
 this vector with an index greater or equal to the specified
 `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', ` is shifted downward to have an index one
 smaller than the value it had previously. The size of this vector
 is decreased by `],
				[/* inline code block */ 'i', `1`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The index must be a value greater than or equal to `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `
 and less than the current size of the vector.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This method is identical in functionality to the `],
					[/* reference */ 'r', `#remove(int)`, `remove(int)`],
					[/* text */ 't', `
 method (which is part of the `],
					[/* reference */ 'r', `java.util.List`, `List`],
					[/* text */ 't', ` interface).  Note that the
 `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', ` method returns the old value that was stored at the
 specified position.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index of the object to remove`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the index is out of range
         (`],
					[/* inline code block */ 'i', `index < 0 || index >= size()`],
					[/* text */ 't', `)`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'replaceAll(java.util.function.UnaryOperator)', [
			[/* method description */
				[/* block */ 'b', `Replaces each element of this list with the result of applying the
 operator to that element.  Errors or runtime exceptions thrown by
 the operator are relayed to the caller.`]
			],
			[/* parameters */
				[/* parameter */ 'operator', [/* parameter description */
					[/* text */ 't', `the operator to apply to each element`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified operator is null or
         if the operator result is a null value and this list does
         not permit null elements
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setElementAt(java.lang.Object,int)', [
			[/* method description */
				[/* text */ 't', `Sets the component at the specified `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', ` of this
 vector to be the specified object. The previous component at that
 position is discarded.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The index must be a value greater than or equal to `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `
 and less than the current size of the vector.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This method is identical in functionality to the
 `],
					[/* reference */ 'r', `#set(int,E)`, `set(int, E)`],
					[/* text */ 't', `
 method (which is part of the `],
					[/* reference */ 'r', `java.util.List`, `List`],
					[/* text */ 't', ` interface). Note that the
 `],
					[/* inline code block */ 'i', `set`],
					[/* text */ 't', ` method reverses the order of the parameters, to more closely
 match array usage.  Note also that the `],
					[/* inline code block */ 'i', `set`],
					[/* text */ 't', ` method returns the
 old value that was stored at the specified position.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `what the component is to be set to`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the specified index`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the index is out of range
         (`],
					[/* inline code block */ 'i', `index < 0 || index >= size()`],
					[/* text */ 't', `)`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setSize(int)', [
			[/* method description */
				[/* text */ 't', `Sets the size of this vector. If the new size is greater than the
 current size, new `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` items are added to the end of
 the vector. If the new size is less than the current size, all
 components at index `],
				[/* inline code block */ 'i', `newSize`],
				[/* text */ 't', ` and greater are discarded.`]
			],
			[/* parameters */
				[/* parameter */ 'newSize', [/* parameter description */
					[/* text */ 't', `the new size of this vector`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the new size is negative`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'sort(java.util.Comparator)', UDF],
		[/* method */ 'trimToSize()', [
			[/* method description */
				[/* text */ 't', `Trims the capacity of this vector to be the vector's current
 size. If the capacity of this vector is larger than its current
 size, then the capacity is changed to equal the size by replacing
 its internal data array, kept in the field `],
				[/* inline code block */ 'i', `elementData`],
				[/* text */ 't', `,
 with a smaller one. An application can use this operation to
 minimize the storage of a vector.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'add(int,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element at the specified position in this Vector.
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
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the index is out of range
         (`],
					[/* inline code block */ 'i', `index < 0 || index > size()`],
					[/* text */ 't', `)`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'clear()', [
			[/* method description */
				[/* text */ 't', `Removes all of the elements from this Vector.  The Vector will
 be empty after this call returns (unless it throws an exception).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
