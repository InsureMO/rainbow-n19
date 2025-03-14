import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.TreeSet', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* reference */ 'r', `java.util.NavigableSet`, `NavigableSet`],
		[/* text */ 't', ` implementation based on a `],
		[/* reference */ 'r', `java.util.TreeMap`, `TreeMap`],
		[/* text */ 't', `.
 The elements are ordered using their `],
		[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
		[/* text */ 't', `, or by a `],
		[/* reference */ 'r', `java.util.Comparator`, `Comparator`],
		[/* text */ 't', ` provided at set creation
 time, depending on which constructor is used.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This implementation provides guaranteed log(n) time cost for the basic
 operations (`],
			[/* inline code block */ 'i', `add`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `remove`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `contains`],
			[/* text */ 't', `).

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Note that the ordering maintained by a set (whether or not an explicit
 comparator is provided) must be `],
			[/* text */ 't', `consistent with equals`],
			[/* text */ 't', ` if it is to
 correctly implement the `],
			[/* inline code block */ 'i', `Set`],
			[/* text */ 't', ` interface.  (See `],
			[/* inline code block */ 'i', `Comparable`],
			[/* text */ 't', `
 or `],
			[/* inline code block */ 'i', `Comparator`],
			[/* text */ 't', ` for a precise definition of `],
			[/* text */ 't', `consistent with
 equals`],
			[/* text */ 't', `.)  This is so because the `],
			[/* inline code block */ 'i', `Set`],
			[/* text */ 't', ` interface is defined in
 terms of the `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', ` operation, but a `],
			[/* inline code block */ 'i', `TreeSet`],
			[/* text */ 't', ` instance
 performs all element comparisons using its `],
			[/* inline code block */ 'i', `compareTo`],
			[/* text */ 't', ` (or
 `],
			[/* inline code block */ 'i', `compare`],
			[/* text */ 't', `) method, so two elements that are deemed equal by this method
 are, from the standpoint of the set, equal.  The behavior of a set
 `],
			[/* text */ 't', `is`],
			[/* text */ 't', ` well-defined even if its ordering is inconsistent with equals; it
 just fails to obey the general contract of the `],
			[/* inline code block */ 'i', `Set`],
			[/* text */ 't', ` interface.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Note that this implementation is not synchronized.`],
			[/* text */ 't', `
 If multiple threads access a tree set concurrently, and at least one
 of the threads modifies the set, it `],
			[/* text */ 't', `must`],
			[/* text */ 't', ` be synchronized
 externally.  This is typically accomplished by synchronizing on some
 object that naturally encapsulates the set.
 If no such object exists, the set should be "wrapped" using the
 `],
			[/* reference */ 'r', `java.util.Collections#synchronizedSortedSet(java.util.SortedSet)`, `Collections.synchronizedSortedSet`],
			[/* text */ 't', `
 method.  This is best done at creation time, to prevent accidental
 unsynchronized access to the set: `]
		]],
		[/* code block */ 'c', `   SortedSet s = Collections.synchronizedSortedSet(new TreeSet(...));`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `The iterators returned by this class's `],
			[/* inline code block */ 'i', `iterator`],
			[/* text */ 't', ` method are
 `],
			[/* text */ 't', `fail-fast`],
			[/* text */ 't', `: if the set is modified at any time after the iterator is
 created, in any way except through the iterator's own `],
			[/* inline code block */ 'i', `remove`],
			[/* text */ 't', `
 method, the iterator will throw a `],
			[/* reference */ 'r', `java.util.ConcurrentModificationException`, `ConcurrentModificationException`],
			[/* text */ 't', `.
 Thus, in the face of concurrent modification, the iterator fails quickly
 and cleanly, rather than risking arbitrary, non-deterministic behavior at
 an undetermined time in the future.

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
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new, empty tree set, sorted according to the
 natural ordering of its elements.  All elements inserted into
 the set must implement the `],
				[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
				[/* text */ 't', ` interface.
 Furthermore, all such elements must be `],
				[/* text */ 't', `mutually
 comparable`],
				[/* text */ 't', `: `],
				[/* inline code block */ 'i', `e1.compareTo(e2)`],
				[/* text */ 't', ` must not throw a
 `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', ` for any elements `],
				[/* inline code block */ 'i', `e1`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', ` in the set.  If the user attempts to add an element
 to the set that violates this constraint (for example, the user
 attempts to add a string element to a set whose elements are
 integers), the `],
				[/* inline code block */ 'i', `add`],
				[/* text */ 't', ` call will throw a
 `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.util.Collection)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new tree set containing the elements in the specified
 collection, sorted according to the `],
				[/* text */ 't', `natural ordering`],
				[/* text */ 't', ` of its
 elements.  All elements inserted into the set must implement the
 `],
				[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
				[/* text */ 't', ` interface.  Furthermore, all such elements must be
 `],
				[/* text */ 't', `mutually comparable`],
				[/* text */ 't', `: `],
				[/* inline code block */ 'i', `e1.compareTo(e2)`],
				[/* text */ 't', ` must not throw a
 `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', ` for any elements `],
				[/* inline code block */ 'i', `e1`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', ` in the set.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `collection whose elements will comprise the new set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the elements in `],
					[/* inline code block */ 'i', `c`],
					[/* text */ 't', ` are
         not `],
					[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
					[/* text */ 't', `, or are not mutually comparable`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified collection is null`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.util.Comparator)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new, empty tree set, sorted according to the specified
 comparator.  All elements inserted into the set must be `],
				[/* text */ 't', `mutually
 comparable`],
				[/* text */ 't', ` by the specified comparator: `],
				[/* inline code block */ 'i', `comparator.compare(e1, e2)`],
				[/* text */ 't', ` must not throw a `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', ` for any elements
 `],
				[/* inline code block */ 'i', `e1`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', ` in the set.  If the user attempts to add
 an element to the set that violates this constraint, the
 `],
				[/* inline code block */ 'i', `add`],
				[/* text */ 't', ` call will throw a `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'comparator', [/* parameter description */
					[/* text */ 't', `the comparator that will be used to order this set.
        If `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, the `],
					[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
					[/* text */ 't', ` of the elements will be used.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.util.SortedSet)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new tree set containing the same elements and
 using the same ordering as the specified sorted set.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `sorted set whose elements will comprise the new set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified sorted set is null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'add(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Adds the specified element to this set if it is not already present.
 More formally, adds the specified element `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', ` to this set if
 the set contains no element `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `Objects.equals(e, e2)`],
				[/* text */ 't', `.
 If this set already contains the element, the call leaves the set
 unchanged and returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `element to be added to this set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the specified object cannot be compared
         with the elements currently in this set`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null
         and this set uses natural ordering, or its comparator
         does not permit null elements`]
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
				[/* text */ 't', `Adds all of the elements in the specified collection to this set.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `collection containing elements to be added to this set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the elements provided cannot be compared
         with the elements currently in the set`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified collection is null or
         if any element is null and this set uses natural ordering, or
         its comparator does not permit null elements`]
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
					[/* text */ 't', `object to be checked for containment in this set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the specified object cannot be compared
         with the elements currently in the set`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null
         and this set uses natural ordering, or its comparator
         does not permit null elements`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this set contains the specified element`]
			]
		]],
		[/* method */ 'isEmpty()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this set contains no elements.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this set contains no elements`]
			]
		]],
		[/* method */ 'remove(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the specified element from this set if it is present.
 More formally, removes an element `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `Objects.equals(o, e)`],
				[/* text */ 't', `,
 if this set contains such an element.  Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if
 this set contained the element (or equivalently, if this set
 changed as a result of the call).  (This set will not contain the
 element once the call returns.)`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `object to be removed from this set, if present`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the specified object cannot be compared
         with the elements currently in this set`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null
         and this set uses natural ordering, or its comparator
         does not permit null elements`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this set contained the specified element`]
			]
		]],
		[/* method */ 'ceiling(java.lang.Object)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns the least element in this set greater than or equal to
 the given element, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if there is no such element.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the value to match`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the specified element cannot be
         compared with the elements currently in the set`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null
         and this set uses natural ordering, or its comparator
         does not permit null elements`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the least element greater than or equal to `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', `,
         or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no such element`]
			]
		]],
		[/* method */ 'first()', [
			[/* method description */
				[/* block */ 'b', `Returns the first (lowest) element currently in this set.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this set is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the first (lowest) element currently in this set`]
			]
		]],
		[/* method */ 'floor(java.lang.Object)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns the greatest element in this set less than or equal to
 the given element, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if there is no such element.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the value to match`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the specified element cannot be
         compared with the elements currently in the set`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null
         and this set uses natural ordering, or its comparator
         does not permit null elements`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the greatest element less than or equal to `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', `,
         or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no such element`]
			]
		]],
		[/* method */ 'higher(java.lang.Object)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns the least element in this set strictly greater than the
 given element, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if there is no such element.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the value to match`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the specified element cannot be
         compared with the elements currently in the set`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null
         and this set uses natural ordering, or its comparator
         does not permit null elements`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the least element greater than `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', `,
         or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no such element`]
			]
		]],
		[/* method */ 'last()', [
			[/* method description */
				[/* block */ 'b', `Returns the last (highest) element currently in this set.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this set is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the last (highest) element currently in this set`]
			]
		]],
		[/* method */ 'lower(java.lang.Object)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns the greatest element in this set strictly less than the
 given element, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if there is no such element.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the value to match`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the specified element cannot be
         compared with the elements currently in the set`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified element is null
         and this set uses natural ordering, or its comparator
         does not permit null elements`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the greatest element less than `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', `,
         or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no such element`]
			]
		]],
		[/* method */ 'pollFirst()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Retrieves and removes the first (lowest) element,
 or returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if this set is empty.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the first element, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this set is empty`]
			]
		]],
		[/* method */ 'pollLast()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Retrieves and removes the last (highest) element,
 or returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if this set is empty.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the last element, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this set is empty`]
			]
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the number of elements in this set (its cardinality).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of elements in this set (its cardinality)`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Returns a shallow copy of this `],
				[/* inline code block */ 'i', `TreeSet`],
				[/* text */ 't', ` instance. (The elements
 themselves are not cloned.)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a shallow copy of this set`]
			]
		]],
		[/* method */ 'comparator()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns the comparator used to order the elements in this set,
 or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if this set uses the `],
					[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
					[/* text */ 't', ` of its elements.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the comparator used to order the elements in this set,
         or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this set uses the natural ordering
         of its elements`]
			]
		]],
		[/* method */ 'descendingIterator()', [
			[/* method description */
				[/* text */ 't', `Returns an iterator over the elements in this set in descending order.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an iterator over the elements in this set in descending order`]
			]
		]],
		[/* method */ 'iterator()', [
			[/* method description */
				[/* text */ 't', `Returns an iterator over the elements in this set in ascending order.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an iterator over the elements in this set in ascending order`]
			]
		]],
		[/* method */ 'descendingSet()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a reverse order view of the elements contained in this set.
 The descending set is backed by this set, so changes to the set are
 reflected in the descending set, and vice-versa.  If either set is
 modified while an iteration over either set is in progress (except
 through the iterator's own `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', ` operation), the results of
 the iteration are undefined.

 `],
					[/* block */ 'b', [
						[/* text */ 't', `The returned set has an ordering equivalent to
 `],
						[/* reference */ 'r', `java.util.Collections#reverseOrder(java.util.Comparator)`, `Collections.reverseOrder`],
						[/* inline code block */ 'i', `(comparator())`],
						[/* text */ 't', `.
 The expression `],
						[/* inline code block */ 'i', `s.descendingSet().descendingSet()`],
						[/* text */ 't', ` returns a
 view of `],
						[/* inline code block */ 'i', `s`],
						[/* text */ 't', ` essentially equivalent to `],
						[/* inline code block */ 'i', `s`],
						[/* text */ 't', `.`]
					]]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a reverse order view of this set`]
			]
		]],
		[/* method */ 'headSet(java.lang.Object,boolean)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a view of the portion of this set whose elements are less than
 (or equal to, if `],
					[/* inline code block */ 'i', `inclusive`],
					[/* text */ 't', ` is true) `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', `.  The
 returned set is backed by this set, so changes in the returned set are
 reflected in this set, and vice-versa.  The returned set supports all
 optional set operations that this set supports.

 `],
					[/* block */ 'b', [
						[/* text */ 't', `The returned set will throw an `],
						[/* inline code block */ 'i', `IllegalArgumentException`],
						[/* text */ 't', `
 on an attempt to insert an element outside its range.`]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'toElement', [/* parameter description */
					[/* text */ 't', `high endpoint of the returned set`]
				]],
				[/* parameter */ 'inclusive', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if the high endpoint
        is to be included in the returned view`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', ` is not compatible
         with this set's comparator (or, if the set has no comparator,
         if `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', ` does not implement `],
					[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
					[/* text */ 't', `).
         Implementations may, but are not required to, throw this
         exception if `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', ` cannot be compared to elements
         currently in the set.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', ` is null and
         this set uses natural ordering, or its comparator does
         not permit null elements`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if this set itself has a
         restricted range, and `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', ` lies outside the
         bounds of the range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a view of the portion of this set whose elements are less than
         (or equal to, if `],
				[/* inline code block */ 'i', `inclusive`],
				[/* text */ 't', ` is true) `],
				[/* inline code block */ 'i', `toElement`]
			]
		]],
		[/* method */ 'subSet(java.lang.Object,boolean,java.lang.Object,boolean)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a view of the portion of this set whose elements range from
 `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', ` to `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', `.  If `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', ` and
 `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', ` are equal, the returned set is empty unless `],
					[/* inline code block */ 'i', `fromInclusive`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `toInclusive`],
					[/* text */ 't', ` are both true.  The returned set
 is backed by this set, so changes in the returned set are reflected in
 this set, and vice-versa.  The returned set supports all optional set
 operations that this set supports.

 `],
					[/* block */ 'b', [
						[/* text */ 't', `The returned set will throw an `],
						[/* inline code block */ 'i', `IllegalArgumentException`],
						[/* text */ 't', `
 on an attempt to insert an element outside its range.`]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fromElement', [/* parameter description */
					[/* text */ 't', `low endpoint of the returned set`]
				]],
				[/* parameter */ 'fromInclusive', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if the low endpoint
        is to be included in the returned view`]
				]],
				[/* parameter */ 'toElement', [/* parameter description */
					[/* text */ 't', `high endpoint of the returned set`]
				]],
				[/* parameter */ 'toInclusive', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if the high endpoint
        is to be included in the returned view`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', ` and
         `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', ` cannot be compared to one another using this
         set's comparator (or, if the set has no comparator, using
         natural ordering).  Implementations may, but are not required
         to, throw this exception if `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', ` cannot be compared to elements currently in
         the set.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', `
         is null and this set uses natural ordering, or its comparator
         does not permit null elements`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', ` is
         greater than `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', `; or if this set itself
         has a restricted range, and `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', ` lies outside the bounds of the range.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a view of the portion of this set whose elements range from
         `],
				[/* inline code block */ 'i', `fromElement`],
				[/* text */ 't', `, inclusive, to `],
				[/* inline code block */ 'i', `toElement`],
				[/* text */ 't', `, exclusive`]
			]
		]],
		[/* method */ 'tailSet(java.lang.Object,boolean)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a view of the portion of this set whose elements are greater
 than (or equal to, if `],
					[/* inline code block */ 'i', `inclusive`],
					[/* text */ 't', ` is true) `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', `.
 The returned set is backed by this set, so changes in the returned set
 are reflected in this set, and vice-versa.  The returned set supports
 all optional set operations that this set supports.

 `],
					[/* block */ 'b', [
						[/* text */ 't', `The returned set will throw an `],
						[/* inline code block */ 'i', `IllegalArgumentException`],
						[/* text */ 't', `
 on an attempt to insert an element outside its range.`]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fromElement', [/* parameter description */
					[/* text */ 't', `low endpoint of the returned set`]
				]],
				[/* parameter */ 'inclusive', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if the low endpoint
        is to be included in the returned view`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', ` is not compatible
         with this set's comparator (or, if the set has no comparator,
         if `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', ` does not implement `],
					[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
					[/* text */ 't', `).
         Implementations may, but are not required to, throw this
         exception if `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', ` cannot be compared to elements
         currently in the set.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', ` is null and
         this set uses natural ordering, or its comparator does
         not permit null elements`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if this set itself has a
         restricted range, and `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', ` lies outside the
         bounds of the range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a view of the portion of this set whose elements are greater
         than or equal to `],
				[/* inline code block */ 'i', `fromElement`]
			]
		]],
		[/* method */ 'headSet(java.lang.Object)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a view of the portion of this set whose elements are
 strictly less than `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', `.  The returned set is
 backed by this set, so changes in the returned set are
 reflected in this set, and vice-versa.  The returned set
 supports all optional set operations that this set supports.

 `],
					[/* block */ 'b', [
						[/* text */ 't', `The returned set will throw an `],
						[/* inline code block */ 'i', `IllegalArgumentException`],
						[/* text */ 't', `
 on an attempt to insert an element outside its range.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Equivalent to `],
						[/* inline code block */ 'i', `headSet(toElement, false)`],
						[/* text */ 't', `.`]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'toElement', [/* parameter description */
					[/* text */ 't', `high endpoint (exclusive) of the returned set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', ` is not compatible
         with this set's comparator (or, if the set has no comparator,
         if `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', ` does not implement `],
					[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
					[/* text */ 't', `).
         Implementations may, but are not required to, throw this
         exception if `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', ` cannot be compared to elements
         currently in the set.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', ` is null
         and this set uses natural ordering, or its comparator does
         not permit null elements`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if this set itself has a
         restricted range, and `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', ` lies outside the
         bounds of the range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a view of the portion of this set whose elements are strictly
         less than `],
				[/* inline code block */ 'i', `toElement`]
			]
		]],
		[/* method */ 'subSet(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a view of the portion of this set whose elements range
 from `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', `, inclusive, to `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', `,
 exclusive.  (If `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', ` are
 equal, the returned set is empty.)  The returned set is backed
 by this set, so changes in the returned set are reflected in
 this set, and vice-versa.  The returned set supports all
 optional set operations that this set supports.

 `],
					[/* block */ 'b', [
						[/* text */ 't', `The returned set will throw an `],
						[/* inline code block */ 'i', `IllegalArgumentException`],
						[/* text */ 't', `
 on an attempt to insert an element outside its range.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Equivalent to `],
						[/* inline code block */ 'i', `subSet(fromElement, true, toElement, false)`],
						[/* text */ 't', `.`]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fromElement', [/* parameter description */
					[/* text */ 't', `low endpoint (inclusive) of the returned set`]
				]],
				[/* parameter */ 'toElement', [/* parameter description */
					[/* text */ 't', `high endpoint (exclusive) of the returned set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', ` and
         `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', ` cannot be compared to one another using this
         set's comparator (or, if the set has no comparator, using
         natural ordering).  Implementations may, but are not required
         to, throw this exception if `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', ` cannot be compared to elements currently in
         the set.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', ` is null and this set uses natural ordering,
         or its comparator does not permit null elements`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', ` is
         greater than `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', `; or if this set itself
         has a restricted range, and `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', ` lies outside the bounds of the range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a view of the portion of this set whose elements range from
         `],
				[/* inline code block */ 'i', `fromElement`],
				[/* text */ 't', `, inclusive, to `],
				[/* inline code block */ 'i', `toElement`],
				[/* text */ 't', `, exclusive`]
			]
		]],
		[/* method */ 'tailSet(java.lang.Object)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a view of the portion of this set whose elements are
 greater than or equal to `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', `.  The returned
 set is backed by this set, so changes in the returned set are
 reflected in this set, and vice-versa.  The returned set
 supports all optional set operations that this set supports.

 `],
					[/* block */ 'b', [
						[/* text */ 't', `The returned set will throw an `],
						[/* inline code block */ 'i', `IllegalArgumentException`],
						[/* text */ 't', `
 on an attempt to insert an element outside its range.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Equivalent to `],
						[/* inline code block */ 'i', `tailSet(fromElement, true)`],
						[/* text */ 't', `.`]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fromElement', [/* parameter description */
					[/* text */ 't', `low endpoint (inclusive) of the returned set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', ` is not compatible
         with this set's comparator (or, if the set has no comparator,
         if `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', ` does not implement `],
					[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
					[/* text */ 't', `).
         Implementations may, but are not required to, throw this
         exception if `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', ` cannot be compared to elements
         currently in the set.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', ` is null
         and this set uses natural ordering, or its comparator does
         not permit null elements`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if this set itself has a
         restricted range, and `],
					[/* inline code block */ 'i', `fromElement`],
					[/* text */ 't', ` lies outside the
         bounds of the range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a view of the portion of this set whose elements are greater
         than or equal to `],
				[/* inline code block */ 'i', `fromElement`]
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
 set.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `Spliterator`],
					[/* text */ 't', ` reports `],
					[/* reference */ 'r', `java.util.Spliterator#SIZED`, `Spliterator.SIZED`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.util.Spliterator#DISTINCT`, `Spliterator.DISTINCT`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `java.util.Spliterator#SORTED`, `Spliterator.SORTED`],
					[/* text */ 't', `, and
 `],
					[/* reference */ 'r', `java.util.Spliterator#ORDERED`, `Spliterator.ORDERED`],
					[/* text */ 't', `.  Overriding implementations should document
 the reporting of additional characteristic values.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The spliterator's comparator (see
 `],
					[/* reference */ 'r', `java.util.Spliterator#getComparator()`, `Spliterator.getComparator()`],
					[/* text */ 't', `) is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if
 the tree set's comparator (see `],
					[/* reference */ 'r', `#comparator()`, `comparator()`],
					[/* text */ 't', `) is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.
 Otherwise, the spliterator's comparator is the same as or imposes the
 same total ordering as the tree set's comparator.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Spliterator`],
				[/* text */ 't', ` over the elements in this set`]
			]
		]],
		[/* method */ 'clear()', [
			[/* method description */
				[/* text */ 't', `Removes all of the elements from this set.
 The set will be empty after this call returns.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
