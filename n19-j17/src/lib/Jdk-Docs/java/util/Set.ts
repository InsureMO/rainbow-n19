import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Set', [
	[/* class description */
		[/* text */ 't', `A collection that contains no duplicate elements.  More formally, sets
 contain no pair of elements `],
		[/* inline code block */ 'i', `e1`],
		[/* text */ 't', ` and `],
		[/* inline code block */ 'i', `e2`],
		[/* text */ 't', ` such that
 `],
		[/* inline code block */ 'i', `e1.equals(e2)`],
		[/* text */ 't', `, and at most one null element.  As implied by
 its name, this interface models the mathematical `],
		[/* text */ 't', `set`],
		[/* text */ 't', ` abstraction.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* inline code block */ 'i', `Set`],
			[/* text */ 't', ` interface places additional stipulations, beyond those
 inherited from the `],
			[/* inline code block */ 'i', `Collection`],
			[/* text */ 't', ` interface, on the contracts of all
 constructors and on the contracts of the `],
			[/* inline code block */ 'i', `add`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', ` and
 `],
			[/* inline code block */ 'i', `hashCode`],
			[/* text */ 't', ` methods.  Declarations for other inherited methods are
 also included here for convenience.  (The specifications accompanying these
 declarations have been tailored to the `],
			[/* inline code block */ 'i', `Set`],
			[/* text */ 't', ` interface, but they do
 not contain any additional stipulations.)

 `]
		]],
		[/* block */ 'b', `The additional stipulation on constructors is, not surprisingly,
 that all constructors must create a set that contains no duplicate elements
 (as defined above).

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Note: Great care must be exercised if mutable objects are used as set
 elements.  The behavior of a set is not specified if the value of an object
 is changed in a manner that affects `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', ` comparisons while the
 object is an element in the set.  A special case of this prohibition is
 that it is not permissible for a set to contain itself as an element.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Some set implementations have restrictions on the elements that
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
 the insertion of an ineligible element into the set may throw an
 exception or it may succeed, at the option of the implementation.
 Such exceptions are marked as "optional" in the specification for this
 interface.

 `]
		]],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `unmodifiable`, `Unmodifiable Sets`]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* reference */ 'r', `#of(E...)`, `Set.of`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `#copyOf(java.util.Collection)`, `Set.copyOf`],
			[/* text */ 't', ` static factory methods
 provide a convenient way to create unmodifiable sets. The `],
			[/* inline code block */ 'i', `Set`],
			[/* text */ 't', `
 instances created by these methods have the following characteristics:

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `They are `],
				[/* reference */ 'r', `java.util.Collection#unmodifiable`, `unmodifiable`],
				[/* text */ 't', `. Elements cannot
 be added or removed. Calling any mutator method on the Set
 will always cause `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', ` to be thrown.
 However, if the contained elements are themselves mutable, this may cause the
 Set to behave inconsistently or its contents to appear to change.
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
			[/* block */ 'b', [
				[/* text */ 't', `They reject duplicate elements at creation time. Duplicate elements
 passed to a static factory method result in `],
				[/* inline code block */ 'i', `IllegalArgumentException`],
				[/* text */ 't', `.
 `]
			]],
			[/* block */ 'b', `The iteration order of set elements is unspecified and is subject to change.
 `],
			[/* block */ 'b', [
				[/* text */ 't', `They are `],
				[/* text */ 't', `value-based`],
				[/* text */ 't', `.
 Programmers should treat instances that are `],
				[/* reference */ 'r', `#equals(java.lang.Object)`, `equal`],
				[/* text */ 't', `
 as interchangeable and should not use them for synchronization, or
 unpredictable behavior may occur. For example, in a future release,
 synchronization may fail. Callers should make no assumptions
 about the identity of the returned instances. Factories are free to
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
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'toArray(java.lang.Object[])', [
			[/* method description */
				[/* text */ 't', `Returns an array containing all of the elements in this set; the
 runtime type of the returned array is that of the specified array.
 If the set fits in the specified array, it is returned therein.
 Otherwise, a new array is allocated with the runtime type of the
 specified array and the size of this set.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If this set fits in the specified array with room to spare
 (i.e., the array has more elements than this set), the element in
 the array immediately following the end of the set is set to
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.  (This is useful in determining the length of this
 set `],
					[/* text */ 't', `only`],
					[/* text */ 't', ` if the caller knows that this set does not contain
 any null elements.)

 `]
				]],
				[/* block */ 'b', `If this set makes any guarantees as to what order its elements
 are returned by its iterator, this method must return the elements
 in the same order.

 `],
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
					[/* text */ 't', ` is a set known to contain only strings.
 The following code can be used to dump the set into a newly allocated
 array of `],
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
					[/* text */ 't', `the array into which the elements of this set are to be
        stored, if it is big enough; otherwise, a new array of the same
        runtime type is allocated for this purpose.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayStoreException', [/* throw description */
					[/* text */ 't', `if the runtime type of the specified array
         is not a supertype of the runtime type of every element in this
         set`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified array is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an array containing all the elements in this set`]
			]
		]],
		[/* method */ 'add(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Adds the specified element to this set if it is not already present
 (optional operation).  More formally, adds the specified element
 `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', ` to this set if the set contains no element `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', `
 such that
 `],
				[/* inline code block */ 'i', `Objects.equals(e, e2)`],
				[/* text */ 't', `.
 If this set already contains the element, the call leaves the set
 unchanged and returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.  In combination with the
 restriction on constructors, this ensures that sets never contain
 duplicate elements.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The stipulation above does not imply that sets must accept all
 elements; sets may refuse to add any particular element, including
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, and throw an exception, as described in the
 specification for `],
					[/* reference */ 'r', `java.util.Collection#add(E)`, `Collection.add`],
					[/* text */ 't', `.
 Individual set implementations should clearly document any
 restrictions on the elements that they may contain.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `element to be added to this set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `add`],
					[/* text */ 't', ` operation
         is not supported by this set`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified element
         prevents it from being added to this set`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         set does not permit null elements`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of the specified element
         prevents it from being added to this set`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this set did not already contain the specified
         element`]
			]
		]],
		[/* method */ 'addAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Adds all of the elements in the specified collection to this set if
 they're not already present (optional operation).  If the specified
 collection is also a set, the `],
				[/* inline code block */ 'i', `addAll`],
				[/* text */ 't', ` operation effectively
 modifies this set so that its value is the `],
				[/* text */ 't', `union`],
				[/* text */ 't', ` of the two
 sets.  The behavior of this operation is undefined if the specified
 collection is modified while the operation is in progress.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `collection containing elements to be added to this set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `addAll`],
					[/* text */ 't', ` operation
         is not supported by this set`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of an element of the
         specified collection prevents it from being added to this set`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified collection contains one
         or more null elements and this set does not permit null
         elements, or if the specified collection is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of an element of the
         specified collection prevents it from being added to this set`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this set changed as a result of the call`]
			]
		]],
		[/* method */ 'contains(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this set contains the specified element.
 More formally, returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this set
 contains an element `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `Objects.equals(o, e)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `element whose presence in this set is to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the type of the specified element
         is incompatible with this set
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         set does not permit null elements
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this set contains the specified element`]
			]
		]],
		[/* method */ 'containsAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this set contains all of the elements of the
 specified collection.  If the specified collection is also a set, this
 method returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if it is a `],
				[/* text */ 't', `subset`],
				[/* text */ 't', ` of this set.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `collection to be checked for containment in this set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the types of one or more elements
         in the specified collection are incompatible with this
         set
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified collection contains one
         or more null elements and this set does not permit null
         elements
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `),
         or if the specified collection is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this set contains all of the elements of the
         specified collection`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares the specified object with this set for equality.  Returns
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the specified object is also a set, the two sets
 have the same size, and every member of the specified set is
 contained in this set (or equivalently, every member of this set is
 contained in the specified set).  This definition ensures that the
 equals method works properly across different implementations of the
 set interface.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `object to be compared for equality with this set`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the specified object is equal to this set`]
			]
		]],
		[/* method */ 'isEmpty()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this set contains no elements.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this set contains no elements`]
			]
		]],
		[/* method */ 'remove(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the specified element from this set if it is present
 (optional operation).  More formally, removes an element `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', `
 such that
 `],
				[/* inline code block */ 'i', `Objects.equals(o, e)`],
				[/* text */ 't', `, if
 this set contains such an element.  Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this set
 contained the element (or equivalently, if this set changed as a
 result of the call).  (This set will not contain the element once the
 call returns.)`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `object to be removed from this set, if present`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the type of the specified element
         is incompatible with this set
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null and this
         set does not permit null elements
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', ` operation
         is not supported by this set`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this set contained the specified element`]
			]
		]],
		[/* method */ 'removeAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Removes from this set all of its elements that are contained in the
 specified collection (optional operation).  If the specified
 collection is also a set, this operation effectively modifies this
 set so that its value is the `],
				[/* text */ 't', `asymmetric set difference`],
				[/* text */ 't', ` of
 the two sets.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `collection containing elements to be removed from this set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `removeAll`],
					[/* text */ 't', ` operation
         is not supported by this set`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of an element of this set
         is incompatible with the specified collection
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if this set contains a null element and the
         specified collection does not permit null elements
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `),
         or if the specified collection is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this set changed as a result of the call`]
			]
		]],
		[/* method */ 'retainAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Retains only the elements in this set that are contained in the
 specified collection (optional operation).  In other words, removes
 from this set all of its elements that are not contained in the
 specified collection.  If the specified collection is also a set, this
 operation effectively modifies this set so that its value is the
 `],
				[/* text */ 't', `intersection`],
				[/* text */ 't', ` of the two sets.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `collection containing elements to be retained in this set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `retainAll`],
					[/* text */ 't', ` operation
         is not supported by this set`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of an element of this set
         is incompatible with the specified collection
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if this set contains a null element and the
         specified collection does not permit null elements
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `),
         or if the specified collection is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this set changed as a result of the call`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code value for this set.  The hash code of a set is
 defined to be the sum of the hash codes of the elements in the set,
 where the hash code of a `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` element is defined to be zero.
 This ensures that `],
				[/* inline code block */ 'i', `s1.equals(s2)`],
				[/* text */ 't', ` implies that
 `],
				[/* inline code block */ 'i', `s1.hashCode()==s2.hashCode()`],
				[/* text */ 't', ` for any two sets `],
				[/* inline code block */ 'i', `s1`],
				[/* text */ 't', `
 and `],
				[/* inline code block */ 'i', `s2`],
				[/* text */ 't', `, as required by the general contract of
 `],
				[/* reference */ 'r', `java.lang.Object#hashCode()`, `Object.hashCode()`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the hash code value for this set`]
			]
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the number of elements in this set (its cardinality).  If this
 set contains more than `],
				[/* inline code block */ 'i', `Integer.MAX_VALUE`],
				[/* text */ 't', ` elements, returns
 `],
				[/* inline code block */ 'i', `Integer.MAX_VALUE`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the number of elements in this set (its cardinality)`]
			]
		]],
		[/* method */ 'toArray()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing all of the elements in this set.
 If this set makes any guarantees as to what order its elements
 are returned by its iterator, this method must return the
 elements in the same order.

 `],
				[/* block */ 'b', `The returned array will be "safe" in that no references to it
 are maintained by this set.  (In other words, this method must
 allocate a new array even if this set is backed by an array).
 The caller is thus free to modify the returned array.

 `],
				[/* block */ 'b', `This method acts as bridge between array-based and collection-based
 APIs.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an array containing all the elements in this set`]
			]
		]],
		[/* method */ 'iterator()', [
			[/* method description */
				[/* text */ 't', `Returns an iterator over the elements in this set.  The elements are
 returned in no particular order (unless this set is an instance of some
 class that provides a guarantee).`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an iterator over the elements in this set`]
			]
		]],
		[/* method */ 'clear()', [
			[/* method description */
				[/* text */ 't', `Removes all of the elements from this set (optional operation).
 The set will be empty after this call returns.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `clear`],
					[/* text */ 't', ` method
         is not supported by this set`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'spliterator()', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `Spliterator`],
				[/* text */ 't', ` over the elements in this set.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `Spliterator`],
					[/* text */ 't', ` reports `],
					[/* reference */ 'r', `java.util.Spliterator#DISTINCT`, `Spliterator.DISTINCT`],
					[/* text */ 't', `.
 Implementations should document the reporting of additional
 characteristic values.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Spliterator`],
				[/* text */ 't', ` over the elements in this set`]
			]
		]],
		[/* method */ 'copyOf(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* text */ 't', `unmodifiable Set`],
				[/* text */ 't', ` containing the elements
 of the given Collection. The given Collection must not be null, and it must not
 contain any null elements. If the given Collection contains duplicate elements,
 an arbitrary element of the duplicates is preserved. If the given Collection is
 subsequently modified, the returned Set will not reflect such modifications.`]
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
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` containing the elements of the given `],
				[/* inline code block */ 'i', `Collection`]
			]
		]],
		[/* method */ 'of()', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable set containing zero elements.
 See `],
				[/* text */ 't', `Unmodifiable Sets`],
				[/* text */ 't', ` for details.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an empty `],
				[/* inline code block */ 'i', `Set`]
			]
		]],
		[/* method */ 'of(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable set containing one element.
 See `],
				[/* text */ 't', `Unmodifiable Sets`],
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
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` containing the specified element`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable set containing two elements.
 See `],
				[/* text */ 't', `Unmodifiable Sets`],
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
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the elements are duplicates`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if an element is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` containing the specified elements`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable set containing three elements.
 See `],
				[/* text */ 't', `Unmodifiable Sets`],
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
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if there are any duplicate elements`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if an element is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` containing the specified elements`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable set containing four elements.
 See `],
				[/* text */ 't', `Unmodifiable Sets`],
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
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if there are any duplicate elements`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if an element is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` containing the specified elements`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable set containing five elements.
 See `],
				[/* text */ 't', `Unmodifiable Sets`],
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
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if there are any duplicate elements`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if an element is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` containing the specified elements`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable set containing six elements.
 See `],
				[/* text */ 't', `Unmodifiable Sets`],
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
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if there are any duplicate elements`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if an element is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` containing the specified elements`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable set containing seven elements.
 See `],
				[/* text */ 't', `Unmodifiable Sets`],
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
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if there are any duplicate elements`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if an element is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` containing the specified elements`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable set containing eight elements.
 See `],
				[/* text */ 't', `Unmodifiable Sets`],
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
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if there are any duplicate elements`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if an element is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` containing the specified elements`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable set containing nine elements.
 See `],
				[/* text */ 't', `Unmodifiable Sets`],
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
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if there are any duplicate elements`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if an element is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` containing the specified elements`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable set containing ten elements.
 See `],
				[/* text */ 't', `Unmodifiable Sets`],
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
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if there are any duplicate elements`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if an element is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` containing the specified elements`]
			]
		]],
		[/* method */ 'of(java.lang.Object...)', UDF]
	],
	/* enum values */ UDF
]);
