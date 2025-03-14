import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.List', [
	[/* class description */
		[/* text */ 't', `An ordered collection (also known as a `],
		[/* text */ 't', `sequence`],
		[/* text */ 't', `).  The user of this
 interface has precise control over where in the list each element is
 inserted.  The user can access elements by their integer index (position in
 the list), and search for elements in the list.`],
		[/* block */ 'b', [
			[/* text */ 't', `

 Unlike sets, lists typically allow duplicate elements.  More formally,
 lists typically allow pairs of elements `],
			[/* inline code block */ 'i', `e1`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `e2`],
			[/* text */ 't', `
 such that `],
			[/* inline code block */ 'i', `e1.equals(e2)`],
			[/* text */ 't', `, and they typically allow multiple
 null elements if they allow null elements at all.  It is not inconceivable
 that someone might wish to implement a list that prohibits duplicates, by
 throwing runtime exceptions when the user attempts to insert them, but we
 expect this usage to be rare.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 The `],
			[/* inline code block */ 'i', `List`],
			[/* text */ 't', ` interface places additional stipulations, beyond those
 specified in the `],
			[/* inline code block */ 'i', `Collection`],
			[/* text */ 't', ` interface, on the contracts of the
 `],
			[/* inline code block */ 'i', `iterator`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `add`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `remove`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', `, and
 `],
			[/* inline code block */ 'i', `hashCode`],
			[/* text */ 't', ` methods.  Declarations for other inherited methods are
 also included here for convenience.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 The `],
			[/* inline code block */ 'i', `List`],
			[/* text */ 't', ` interface provides four methods for positional (indexed)
 access to list elements.  Lists (like Java arrays) are zero based.  Note
 that these operations may execute in time proportional to the index value
 for some implementations (the `],
			[/* inline code block */ 'i', `LinkedList`],
			[/* text */ 't', ` class, for
 example). Thus, iterating over the elements in a list is typically
 preferable to indexing through it if the caller does not know the
 implementation.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 The `],
			[/* inline code block */ 'i', `List`],
			[/* text */ 't', ` interface provides a special iterator, called a
 `],
			[/* inline code block */ 'i', `ListIterator`],
			[/* text */ 't', `, that allows element insertion and replacement, and
 bidirectional access in addition to the normal operations that the
 `],
			[/* inline code block */ 'i', `Iterator`],
			[/* text */ 't', ` interface provides.  A method is provided to obtain a
 list iterator that starts at a specified position in the list.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 The `],
			[/* inline code block */ 'i', `List`],
			[/* text */ 't', ` interface provides two methods to search for a specified
 object.  From a performance standpoint, these methods should be used with
 caution.  In many implementations they will perform costly linear
 searches.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 The `],
			[/* inline code block */ 'i', `List`],
			[/* text */ 't', ` interface provides two methods to efficiently insert and
 remove multiple elements at an arbitrary point in the list.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 Note: While it is permissible for lists to contain themselves as elements,
 extreme caution is advised: the `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `hashCode`],
			[/* text */ 't', `
 methods are no longer well defined on such a list.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Some list implementations have restrictions on the elements that
 they may contain.  For example, some implementations prohibit null elements,
 and some have restrictions on the types of their elements.  Attempting to
 add an ineligible element throws an unchecked exception, typically
 `],
			[/* inline code block */ 'i', `NullPointerException`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `ClassCastException`],
			[/* text */ 't', `.  Attempting
 to query the presence of an ineligible element may throw an exception,
 or it may simply return false; some implementations will exhibit the former
 behavior and some will exhibit the latter.  More generally, attempting an
 operation on an ineligible element whose completion would not result in
 the insertion of an ineligible element into the list may throw an
 exception or it may succeed, at the option of the implementation.
 Such exceptions are marked as "optional" in the specification for this
 interface.

 `]
		]],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `unmodifiable`, `Unmodifiable Lists`]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* reference */ 'r', `#of(E...)`, `List.of`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `#copyOf(java.util.Collection)`, `List.copyOf`],
			[/* text */ 't', ` static factory methods
 provide a convenient way to create unmodifiable lists. The `],
			[/* inline code block */ 'i', `List`],
			[/* text */ 't', `
 instances created by these methods have the following characteristics:

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `They are `],
				[/* reference */ 'r', `java.util.Collection#unmodifiable`, `unmodifiable`],
				[/* text */ 't', `. Elements cannot
 be added, removed, or replaced. Calling any mutator method on the List
 will always cause `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', ` to be thrown.
 However, if the contained elements are themselves mutable,
 this may cause the List's contents to appear to change.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `They disallow `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` elements. Attempts to create them with
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` elements result in `],
				[/* inline code block */ 'i', `NullPointerException`],
				[/* text */ 't', `.
 `]
			]],
			[/* block */ 'b', `They are serializable if all elements are serializable.
 `],
			[/* block */ 'b', `The order of elements in the list is the same as the order of the
 provided arguments, or of the elements in the provided array.
 `],
			[/* block */ 'b', [
				[/* text */ 't', `The lists and their `],
				[/* reference */ 'r', `#subList(int,int)`, `subList`],
				[/* text */ 't', ` views implement the
 `],
				[/* reference */ 'r', `java.util.RandomAccess`, `RandomAccess`],
				[/* text */ 't', ` interface.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `They are `],
				[/* text */ 't', `value-based`],
				[/* text */ 't', `.
 Programmers should treat instances that are `],
				[/* reference */ 'r', `#equals(java.lang.Object)`, `equal`],
				[/* text */ 't', `
 as interchangeable and should not use them for synchronization, or
 unpredictable behavior may occur. For example, in a future release,
 synchronization may fail. Callers should make no assumptions about the
 identity of the returned instances. Factories are free to
 create new instances or reuse existing ones.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `They are serialized as specified on the
 `],
				[/* text */ 't', `Serialized Form`],
				[/* text */ 't', `
 page.
 `]
			]]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
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
					[/* text */ 't', `the array into which the elements of this list are to
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
				[/* text */ 't', `an array containing the elements of this list`]
			]
		]],
		[/* method */ 'add(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Appends the specified element to the end of this list (optional
 operation).

 `],
				[/* block */ 'b', `Lists that support this operation may place limitations on what
 elements may be added to this list.  In particular, some
 lists will refuse to add null elements, and others will impose
 restrictions on the type of elements that may be added.  List
 classes should clearly specify in their documentation any restrictions
 on what elements may be added.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `element to be appended to this list`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `add`],
					[/* text */ 't', ` operation
         is not supported by this list`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified element
         prevents it from being added to this list`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         list does not permit null elements`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of this element
         prevents it from being added to this list`]
				]]
			],
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
 list at the specified position (optional operation).  Shifts the
 element currently at that position (if any) and any subsequent
 elements to the right (increases their indices).  The new elements
 will appear in this list in the order that they are returned by the
 specified collection's iterator.  The behavior of this operation is
 undefined if the specified collection is modified while the
 operation is in progress.  (Note that this will occur if the specified
 collection is this list, and it's nonempty.)`]
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
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `addAll`],
					[/* text */ 't', ` operation
         is not supported by this list`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of an element of the specified
         collection prevents it from being added to this list`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified collection contains one
         or more null elements and this list does not permit null
         elements, or if the specified collection is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of an element of the
         specified collection prevents it from being added to this list`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the index is out of range
         (`],
					[/* inline code block */ 'i', `index < 0 || index > size()`],
					[/* text */ 't', `)`]
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
 collection's iterator (optional operation).  The behavior of this
 operation is undefined if the specified collection is modified while
 the operation is in progress.  (Note that this will occur if the
 specified collection is this list, and it's nonempty.)`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `collection containing elements to be added to this list`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `addAll`],
					[/* text */ 't', ` operation
         is not supported by this list`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of an element of the specified
         collection prevents it from being added to this list`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified collection contains one
         or more null elements and this list does not permit null
         elements, or if the specified collection is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of an element of the
         specified collection prevents it from being added to this list`]
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
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the type of the specified element
         is incompatible with this list
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         list does not permit null elements
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this list contains the specified element`]
			]
		]],
		[/* method */ 'containsAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this list contains all of the elements of the
 specified collection.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `collection to be checked for containment in this list`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the types of one or more elements
         in the specified collection are incompatible with this
         list
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified collection contains one
         or more null elements and this list does not permit null
         elements
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `),
         or if the specified collection is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this list contains all of the elements of the
         specified collection`]
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
				[/* inline code block */ 'i', `Objects.equals(e1, e2)`],
				[/* text */ 't', `.)
 In other words, two lists are defined to be
 equal if they contain the same elements in the same order.  This
 definition ensures that the equals method works properly across
 different implementations of the `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` interface.`]
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
		[/* method */ 'remove(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the first occurrence of the specified element from this list,
 if it is present (optional operation).  If this list does not contain
 the element, it is unchanged.  More formally, removes the element with
 the lowest index `],
				[/* inline code block */ 'i', `i`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `Objects.equals(o, get(i))`],
				[/* text */ 't', `
 (if such an element exists).  Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this list
 contained the specified element (or equivalently, if this list changed
 as a result of the call).`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `element to be removed from this list, if present`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the type of the specified element
         is incompatible with this list
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         list does not permit null elements
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', ` operation
         is not supported by this list`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this list contained the specified element`]
			]
		]],
		[/* method */ 'removeAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Removes from this list all of its elements that are contained in the
 specified collection (optional operation).`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `collection containing elements to be removed from this list`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `removeAll`],
					[/* text */ 't', ` operation
         is not supported by this list`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of an element of this list
         is incompatible with the specified collection
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if this list contains a null element and the
         specified collection does not permit null elements
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
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
 specified collection (optional operation).  In other words, removes
 from this list all of its elements that are not contained in the
 specified collection.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `collection containing elements to be retained in this list`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `retainAll`],
					[/* text */ 't', ` operation
         is not supported by this list`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of an element of this list
         is incompatible with the specified collection
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if this list contains a null element and the
         specified collection does not permit null elements
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `),
         or if the specified collection is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this list changed as a result of the call`]
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
		[/* method */ 'remove(int)', [
			[/* method description */
				[/* text */ 't', `Removes the element at the specified position in this list (optional
 operation).  Shifts any subsequent elements to the left (subtracts one
 from their indices).  Returns the element that was removed from the
 list.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index of the element to be removed`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', ` operation
         is not supported by this list`]
				]],
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
		[/* method */ 'set(int,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Replaces the element at the specified position in this list with the
 specified element (optional operation).`]
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
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `set`],
					[/* text */ 't', ` operation
         is not supported by this list`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified element
         prevents it from being added to this list`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and
         this list does not permit null elements`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of the specified
         element prevents it from being added to this list`]
				]],
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
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code value for this list.  The hash code of a list
 is defined to be the result of the following calculation:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `int hashCode = 1;
     for (E e : list)
         hashCode = 31*hashCode + (e==null ? 0 : e.hashCode());`]
				]],
				[/* text */ 't', `
 This ensures that `],
				[/* inline code block */ 'i', `list1.equals(list2)`],
				[/* text */ 't', ` implies that
 `],
				[/* inline code block */ 'i', `list1.hashCode()==list2.hashCode()`],
				[/* text */ 't', ` for any two lists,
 `],
				[/* inline code block */ 'i', `list1`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `list2`],
				[/* text */ 't', `, as required by the general
 contract of `],
				[/* reference */ 'r', `java.lang.Object#hashCode()`, `Object.hashCode()`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hash code value for this list`]
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
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the type of the specified element
         is incompatible with this list
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         list does not permit null elements
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]]
			],
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
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the type of the specified element
         is incompatible with this list
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         list does not permit null elements
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index of the last occurrence of the specified element in
         this list, or -1 if this list does not contain the element`]
			]
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the number of elements in this list.  If this list contains
 more than `],
				[/* inline code block */ 'i', `Integer.MAX_VALUE`],
				[/* text */ 't', ` elements, returns
 `],
				[/* inline code block */ 'i', `Integer.MAX_VALUE`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of elements in this list`]
			]
		]],
		[/* method */ 'toArray()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing all of the elements in this list in proper
 sequence (from first to last element).

 `],
				[/* block */ 'b', `The returned array will be "safe" in that no references to it are
 maintained by this list.  (In other words, this method must
 allocate a new array even if this list is backed by an array).
 The caller is thus free to modify the returned array.

 `],
				[/* block */ 'b', `This method acts as bridge between array-based and collection-based
 APIs.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array containing all of the elements in this list in proper
         sequence`]
			]
		]],
		[/* method */ 'iterator()', [
			[/* method description */
				[/* text */ 't', `Returns an iterator over the elements in this list in proper sequence.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an iterator over the elements in this list in proper sequence`]
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
 The returned list supports all of the optional list operations supported
 by this list.`],
				[/* block */ 'b', `

 This method eliminates the need for explicit range operations (of
 the sort that commonly exist for arrays).  Any operation that expects
 a list can be used as a range operation by passing a subList view
 instead of a whole list.  For example, the following idiom
 removes a range of elements from a list:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `list.subList(from, to).clear();`]
				]],
				[/* text */ 't', `
 Similar idioms may be constructed for `],
				[/* inline code block */ 'i', `indexOf`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `lastIndexOf`],
				[/* text */ 't', `, and all of the algorithms in the
 `],
				[/* inline code block */ 'i', `Collections`],
				[/* text */ 't', ` class can be applied to a subList.`],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `

 The semantics of the list returned by this method become undefined if
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
					[/* text */ 't', `for an illegal endpoint index value
         (`],
					[/* inline code block */ 'i', `fromIndex < 0 || toIndex > size || fromIndex > toIndex`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a view of the specified range within this list`]
			]
		]],
		[/* method */ 'listIterator()', [
			[/* method description */
				[/* text */ 't', `Returns a list iterator over the elements in this list (in proper
 sequence).`]
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
 return the element with the specified index minus one.`]
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
		[/* method */ 'add(int,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified element at the specified position in this list
 (optional operation).  Shifts the element currently at that position
 (if any) and any subsequent elements to the right (adds one to their
 indices).`]
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
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `add`],
					[/* text */ 't', ` operation
         is not supported by this list`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified element
         prevents it from being added to this list`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and
         this list does not permit null elements`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of the specified
         element prevents it from being added to this list`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
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
				[/* text */ 't', `Removes all of the elements from this list (optional operation).
 The list will be empty after this call returns.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `clear`],
					[/* text */ 't', ` operation
         is not supported by this list`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'spliterator()', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* reference */ 'r', `java.util.Spliterator`, `Spliterator`],
				[/* text */ 't', ` over the elements in this list.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `Spliterator`],
					[/* text */ 't', ` reports `],
					[/* reference */ 'r', `java.util.Spliterator#SIZED`, `Spliterator.SIZED`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.util.Spliterator#ORDERED`, `Spliterator.ORDERED`],
					[/* text */ 't', `.  Implementations should document the
 reporting of additional characteristic values.`]
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
		[/* method */ 'replaceAll(java.util.function.UnaryOperator)', [
			[/* method description */
				[/* text */ 't', `Replaces each element of this list with the result of applying the
 operator to that element.  Errors or runtime exceptions thrown by
 the operator are relayed to the caller.`]
			],
			[/* parameters */
				[/* parameter */ 'operator', [/* parameter description */
					[/* text */ 't', `the operator to apply to each element`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if this list is unmodifiable.
         Implementations may throw this exception if an element
         cannot be replaced or if, in general, modification is not
         supported`]
				]],
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
		[/* method */ 'sort(java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Sorts this list according to the order induced by the specified
 `],
				[/* reference */ 'r', `java.util.Comparator`, `Comparator`],
				[/* text */ 't', `.  The sort is `],
				[/* text */ 't', `stable`],
				[/* text */ 't', `: this method must not
 reorder equal elements.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `All elements in this list must be `],
					[/* text */ 't', `mutually comparable`],
					[/* text */ 't', ` using the
 specified comparator (that is, `],
					[/* inline code block */ 'i', `c.compare(e1, e2)`],
					[/* text */ 't', ` must not throw
 a `],
					[/* inline code block */ 'i', `ClassCastException`],
					[/* text */ 't', ` for any elements `],
					[/* inline code block */ 'i', `e1`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `e2`],
					[/* text */ 't', `
 in the list).

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the specified comparator is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` then all elements in this
 list must implement the `],
					[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
					[/* text */ 't', ` interface and the elements'
 `],
					[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
					[/* text */ 't', ` should be used.

 `]
				]],
				[/* block */ 'b', `This list must be modifiable, but need not be resizable.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Comparator`],
					[/* text */ 't', ` used to compare list elements.
          A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value indicates that the elements'
          `],
					[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
					[/* text */ 't', ` should be used`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the list contains elements that are not
         `],
					[/* text */ 't', `mutually comparable`],
					[/* text */ 't', ` using the specified comparator`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the list's list-iterator does
         not support the `],
					[/* inline code block */ 'i', `set`],
					[/* text */ 't', ` operation`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `(`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)
         if the comparator is found to violate the `],
					[/* reference */ 'r', `java.util.Comparator`, `Comparator`],
					[/* text */ 't', `
         contract`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'copyOf(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* text */ 't', `unmodifiable List`],
				[/* text */ 't', ` containing the elements of
 the given Collection, in its iteration order. The given Collection must not be null,
 and it must not contain any null elements. If the given Collection is subsequently
 modified, the returned List will not reflect such modifications.`]
			],
			[/* parameters */
				[/* parameter */ 'coll', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `Collection`],
					[/* text */ 't', ` from which elements are drawn, must be non-null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if coll is null, or if it contains any nulls`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` containing the elements of the given `],
				[/* inline code block */ 'i', `Collection`]
			]
		]],
		[/* method */ 'of()', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable list containing zero elements.

 See `],
				[/* text */ 't', `Unmodifiable Lists`],
				[/* text */ 't', ` for details.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an empty `],
				[/* inline code block */ 'i', `List`]
			]
		]],
		[/* method */ 'of(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable list containing one element.

 See `],
				[/* text */ 't', `Unmodifiable Lists`],
				[/* text */ 't', ` for details.`]
			],
			[/* parameters */
				[/* parameter */ 'e1', [/* parameter description */
					[/* text */ 't', `the single element`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the element is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` containing the specified element`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable list containing two elements.

 See `],
				[/* text */ 't', `Unmodifiable Lists`],
				[/* text */ 't', ` for details.`]
			],
			[/* parameters */
				[/* parameter */ 'e1', [/* parameter description */
					[/* text */ 't', `the first element`]
				]],
				[/* parameter */ 'e2', [/* parameter description */
					[/* text */ 't', `the second element`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if an element is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` containing the specified elements`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable list containing three elements.

 See `],
				[/* text */ 't', `Unmodifiable Lists`],
				[/* text */ 't', ` for details.`]
			],
			[/* parameters */
				[/* parameter */ 'e1', [/* parameter description */
					[/* text */ 't', `the first element`]
				]],
				[/* parameter */ 'e2', [/* parameter description */
					[/* text */ 't', `the second element`]
				]],
				[/* parameter */ 'e3', [/* parameter description */
					[/* text */ 't', `the third element`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if an element is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` containing the specified elements`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable list containing four elements.

 See `],
				[/* text */ 't', `Unmodifiable Lists`],
				[/* text */ 't', ` for details.`]
			],
			[/* parameters */
				[/* parameter */ 'e1', [/* parameter description */
					[/* text */ 't', `the first element`]
				]],
				[/* parameter */ 'e2', [/* parameter description */
					[/* text */ 't', `the second element`]
				]],
				[/* parameter */ 'e3', [/* parameter description */
					[/* text */ 't', `the third element`]
				]],
				[/* parameter */ 'e4', [/* parameter description */
					[/* text */ 't', `the fourth element`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if an element is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` containing the specified elements`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable list containing five elements.

 See `],
				[/* text */ 't', `Unmodifiable Lists`],
				[/* text */ 't', ` for details.`]
			],
			[/* parameters */
				[/* parameter */ 'e1', [/* parameter description */
					[/* text */ 't', `the first element`]
				]],
				[/* parameter */ 'e2', [/* parameter description */
					[/* text */ 't', `the second element`]
				]],
				[/* parameter */ 'e3', [/* parameter description */
					[/* text */ 't', `the third element`]
				]],
				[/* parameter */ 'e4', [/* parameter description */
					[/* text */ 't', `the fourth element`]
				]],
				[/* parameter */ 'e5', [/* parameter description */
					[/* text */ 't', `the fifth element`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if an element is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` containing the specified elements`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable list containing six elements.

 See `],
				[/* text */ 't', `Unmodifiable Lists`],
				[/* text */ 't', ` for details.`]
			],
			[/* parameters */
				[/* parameter */ 'e1', [/* parameter description */
					[/* text */ 't', `the first element`]
				]],
				[/* parameter */ 'e2', [/* parameter description */
					[/* text */ 't', `the second element`]
				]],
				[/* parameter */ 'e3', [/* parameter description */
					[/* text */ 't', `the third element`]
				]],
				[/* parameter */ 'e4', [/* parameter description */
					[/* text */ 't', `the fourth element`]
				]],
				[/* parameter */ 'e5', [/* parameter description */
					[/* text */ 't', `the fifth element`]
				]],
				[/* parameter */ 'e6', [/* parameter description */
					[/* text */ 't', `the sixth element`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if an element is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` containing the specified elements`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable list containing seven elements.

 See `],
				[/* text */ 't', `Unmodifiable Lists`],
				[/* text */ 't', ` for details.`]
			],
			[/* parameters */
				[/* parameter */ 'e1', [/* parameter description */
					[/* text */ 't', `the first element`]
				]],
				[/* parameter */ 'e2', [/* parameter description */
					[/* text */ 't', `the second element`]
				]],
				[/* parameter */ 'e3', [/* parameter description */
					[/* text */ 't', `the third element`]
				]],
				[/* parameter */ 'e4', [/* parameter description */
					[/* text */ 't', `the fourth element`]
				]],
				[/* parameter */ 'e5', [/* parameter description */
					[/* text */ 't', `the fifth element`]
				]],
				[/* parameter */ 'e6', [/* parameter description */
					[/* text */ 't', `the sixth element`]
				]],
				[/* parameter */ 'e7', [/* parameter description */
					[/* text */ 't', `the seventh element`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if an element is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` containing the specified elements`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable list containing eight elements.

 See `],
				[/* text */ 't', `Unmodifiable Lists`],
				[/* text */ 't', ` for details.`]
			],
			[/* parameters */
				[/* parameter */ 'e1', [/* parameter description */
					[/* text */ 't', `the first element`]
				]],
				[/* parameter */ 'e2', [/* parameter description */
					[/* text */ 't', `the second element`]
				]],
				[/* parameter */ 'e3', [/* parameter description */
					[/* text */ 't', `the third element`]
				]],
				[/* parameter */ 'e4', [/* parameter description */
					[/* text */ 't', `the fourth element`]
				]],
				[/* parameter */ 'e5', [/* parameter description */
					[/* text */ 't', `the fifth element`]
				]],
				[/* parameter */ 'e6', [/* parameter description */
					[/* text */ 't', `the sixth element`]
				]],
				[/* parameter */ 'e7', [/* parameter description */
					[/* text */ 't', `the seventh element`]
				]],
				[/* parameter */ 'e8', [/* parameter description */
					[/* text */ 't', `the eighth element`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if an element is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` containing the specified elements`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable list containing nine elements.

 See `],
				[/* text */ 't', `Unmodifiable Lists`],
				[/* text */ 't', ` for details.`]
			],
			[/* parameters */
				[/* parameter */ 'e1', [/* parameter description */
					[/* text */ 't', `the first element`]
				]],
				[/* parameter */ 'e2', [/* parameter description */
					[/* text */ 't', `the second element`]
				]],
				[/* parameter */ 'e3', [/* parameter description */
					[/* text */ 't', `the third element`]
				]],
				[/* parameter */ 'e4', [/* parameter description */
					[/* text */ 't', `the fourth element`]
				]],
				[/* parameter */ 'e5', [/* parameter description */
					[/* text */ 't', `the fifth element`]
				]],
				[/* parameter */ 'e6', [/* parameter description */
					[/* text */ 't', `the sixth element`]
				]],
				[/* parameter */ 'e7', [/* parameter description */
					[/* text */ 't', `the seventh element`]
				]],
				[/* parameter */ 'e8', [/* parameter description */
					[/* text */ 't', `the eighth element`]
				]],
				[/* parameter */ 'e9', [/* parameter description */
					[/* text */ 't', `the ninth element`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if an element is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` containing the specified elements`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable list containing ten elements.

 See `],
				[/* text */ 't', `Unmodifiable Lists`],
				[/* text */ 't', ` for details.`]
			],
			[/* parameters */
				[/* parameter */ 'e1', [/* parameter description */
					[/* text */ 't', `the first element`]
				]],
				[/* parameter */ 'e2', [/* parameter description */
					[/* text */ 't', `the second element`]
				]],
				[/* parameter */ 'e3', [/* parameter description */
					[/* text */ 't', `the third element`]
				]],
				[/* parameter */ 'e4', [/* parameter description */
					[/* text */ 't', `the fourth element`]
				]],
				[/* parameter */ 'e5', [/* parameter description */
					[/* text */ 't', `the fifth element`]
				]],
				[/* parameter */ 'e6', [/* parameter description */
					[/* text */ 't', `the sixth element`]
				]],
				[/* parameter */ 'e7', [/* parameter description */
					[/* text */ 't', `the seventh element`]
				]],
				[/* parameter */ 'e8', [/* parameter description */
					[/* text */ 't', `the eighth element`]
				]],
				[/* parameter */ 'e9', [/* parameter description */
					[/* text */ 't', `the ninth element`]
				]],
				[/* parameter */ 'e10', [/* parameter description */
					[/* text */ 't', `the tenth element`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if an element is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` containing the specified elements`]
			]
		]],
		[/* method */ 'of(java.lang.Object...)', UDF]
	],
]);
