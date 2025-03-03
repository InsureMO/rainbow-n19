import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.SortedSet', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* reference */ 'r', `java.util.Set`],
		[/* text */ 't', ` that further provides a `],
		[/* text */ 't', `total ordering`],
		[/* text */ 't', ` on its elements.
 The elements are ordered using their `],
		[/* reference */ 'r', `java.lang.Comparable`],
		[/* text */ 't', `, or by a `],
		[/* reference */ 'r', `java.util.Comparator`],
		[/* text */ 't', ` typically provided at sorted
 set creation time.  The set's iterator will traverse the set in
 ascending element order. Several additional operations are provided
 to take advantage of the ordering.  (This interface is the set
 analogue of `],
		[/* reference */ 'r', `java.util.SortedMap`],
		[/* text */ 't', `.)

 `],
		[/* block */ 'b', [
			[/* text */ 't', `All elements inserted into a sorted set must implement the `],
			[/* inline code block */ 'i', `Comparable`],
			[/* text */ 't', `
 interface (or be accepted by the specified comparator).  Furthermore, all
 such elements must be `],
			[/* text */ 't', `mutually comparable`],
			[/* text */ 't', `: `],
			[/* inline code block */ 'i', `e1.compareTo(e2)`],
			[/* text */ 't', `
 (or `],
			[/* inline code block */ 'i', `comparator.compare(e1, e2)`],
			[/* text */ 't', `) must not throw a
 `],
			[/* inline code block */ 'i', `ClassCastException`],
			[/* text */ 't', ` for any elements `],
			[/* inline code block */ 'i', `e1`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `e2`],
			[/* text */ 't', ` in
 the sorted set.  Attempts to violate this restriction will cause the
 offending method or constructor invocation to throw a
 `],
			[/* inline code block */ 'i', `ClassCastException`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Note that the ordering maintained by a sorted set (whether or not an
 explicit comparator is provided) must be `],
			[/* text */ 't', `consistent with equals`],
			[/* text */ 't', ` if
 the sorted set is to correctly implement the `],
			[/* inline code block */ 'i', `Set`],
			[/* text */ 't', ` interface.  (See
 the `],
			[/* inline code block */ 'i', `Comparable`],
			[/* text */ 't', ` interface or `],
			[/* inline code block */ 'i', `Comparator`],
			[/* text */ 't', ` interface for a
 precise definition of `],
			[/* text */ 't', `consistent with equals`],
			[/* text */ 't', `.)  This is so because
 the `],
			[/* inline code block */ 'i', `Set`],
			[/* text */ 't', ` interface is defined in terms of the `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', `
 operation, but a sorted set performs all element comparisons using its
 `],
			[/* inline code block */ 'i', `compareTo`],
			[/* text */ 't', ` (or `],
			[/* inline code block */ 'i', `compare`],
			[/* text */ 't', `) method, so two elements that are
 deemed equal by this method are, from the standpoint of the sorted set,
 equal.  The behavior of a sorted set `],
			[/* text */ 't', `is`],
			[/* text */ 't', ` well-defined even if its
 ordering is inconsistent with equals; it just fails to obey the general
 contract of the `],
			[/* inline code block */ 'i', `Set`],
			[/* text */ 't', ` interface.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `All general-purpose sorted set implementation classes should
 provide four "standard" constructors: 1) A void (no arguments)
 constructor, which creates an empty sorted set sorted according to
 the natural ordering of its elements.  2) A constructor with a
 single argument of type `],
			[/* inline code block */ 'i', `Comparator`],
			[/* text */ 't', `, which creates an empty
 sorted set sorted according to the specified comparator.  3) A
 constructor with a single argument of type `],
			[/* inline code block */ 'i', `Collection`],
			[/* text */ 't', `,
 which creates a new sorted set with the same elements as its
 argument, sorted according to the natural ordering of the elements.
 4) A constructor with a single argument of type `],
			[/* inline code block */ 'i', `SortedSet`],
			[/* text */ 't', `,
 which creates a new sorted set with the same elements and the same
 ordering as the input sorted set.  There is no way to enforce this
 recommendation, as interfaces cannot contain constructors.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Note: several methods return subsets with restricted ranges.
 Such ranges are `],
			[/* text */ 't', `half-open`],
			[/* text */ 't', `, that is, they include their low
 endpoint but not their high endpoint (where applicable).
 If you need a `],
			[/* text */ 't', `closed range`],
			[/* text */ 't', ` (which includes both endpoints), and
 the element type allows for calculation of the successor of a given
 value, merely request the subrange from `],
			[/* inline code block */ 'i', `lowEndpoint`],
			[/* text */ 't', ` to
 `],
			[/* inline code block */ 'i', `successor(highEndpoint)`],
			[/* text */ 't', `.  For example, suppose that `],
			[/* inline code block */ 'i', `s`],
			[/* text */ 't', `
 is a sorted set of strings.  The following idiom obtains a view
 containing all of the strings in `],
			[/* inline code block */ 'i', `s`],
			[/* text */ 't', ` from `],
			[/* inline code block */ 'i', `low`],
			[/* text */ 't', ` to
 `],
			[/* inline code block */ 'i', `high`],
			[/* text */ 't', `, inclusive:`]
		]],
		[/* code block */ 'c', `   SortedSet<String> sub = s.subSet(low, high+"\\0");`],
		[/* text */ 't', `

 A similar technique can be used to generate an `],
		[/* text */ 't', `open range`],
		[/* text */ 't', ` (which
 contains neither endpoint).  The following idiom obtains a view
 containing all of the Strings in `],
		[/* inline code block */ 'i', `s`],
		[/* text */ 't', ` from `],
		[/* inline code block */ 'i', `low`],
		[/* text */ 't', ` to
 `],
		[/* inline code block */ 'i', `high`],
		[/* text */ 't', `, exclusive:`],
		[/* code block */ 'c', `   SortedSet<String> sub = s.subSet(low+"\\0", high);`],
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
		[/* method */ 'last()', [
			[/* method description */
				[/* text */ 't', `Returns the last (highest) element currently in this set.`]
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
		[/* method */ 'spliterator()', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `Spliterator`],
				[/* text */ 't', ` over the elements in this sorted set.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `Spliterator`],
					[/* text */ 't', ` reports `],
					[/* reference */ 'r', `.Spliterator#DISTINCT`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `.Spliterator#SORTED`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `.Spliterator#ORDERED`],
					[/* text */ 't', `.
 Implementations should document the reporting of additional
 characteristic values.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The spliterator's comparator (see
 `],
					[/* reference */ 'r', `.Spliterator#getComparator()`],
					[/* text */ 't', `) must be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if
 the sorted set's comparator (see `],
					[/* reference */ 'r', `#comparator()`, `comparator()`],
					[/* text */ 't', `) is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.
 Otherwise, the spliterator's comparator must be the same as or impose the
 same total ordering as the sorted set's comparator.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Spliterator`],
				[/* text */ 't', ` over the elements in this sorted set`]
			]
		]],
		[/* method */ 'first()', [
			[/* method description */
				[/* text */ 't', `Returns the first (lowest) element currently in this set.`]
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
		[/* method */ 'comparator()', [
			[/* method description */
				[/* text */ 't', `Returns the comparator used to order the elements in this set,
 or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this set uses the `],
				[/* reference */ 'r', `java.lang.Comparable`],
				[/* text */ 't', ` of its elements.`]
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
		[/* method */ 'subSet(java.lang.Object,java.lang.Object)', [
			[/* method description */
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
 on an attempt to insert an element outside its range.`]
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
					[/* text */ 't', ` is null and this set does not permit null
         elements`]
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
		[/* method */ 'headSet(java.lang.Object)', [
			[/* method description */
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
 on an attempt to insert an element outside its range.`]
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
					[/* reference */ 'r', `java.lang.Comparable`],
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
         this set does not permit null elements`]
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
		[/* method */ 'tailSet(java.lang.Object)', [
			[/* method description */
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
 on an attempt to insert an element outside its range.`]
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
					[/* reference */ 'r', `java.lang.Comparable`],
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
         and this set does not permit null elements`]
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
		]]
	],
]);
