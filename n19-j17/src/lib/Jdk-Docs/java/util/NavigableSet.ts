import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.NavigableSet', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* reference */ 'r', `java.util.SortedSet`, `SortedSet`],
		[/* text */ 't', ` extended with navigation methods reporting
 closest matches for given search targets. Methods `],
		[/* reference */ 'r', `#lower(E)`, `lower(E)`],
		[/* text */ 't', `,
 `],
		[/* reference */ 'r', `#floor(E)`, `floor(E)`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `#ceiling(E)`, `ceiling(E)`],
		[/* text */ 't', `, and `],
		[/* reference */ 'r', `#higher(E)`, `higher(E)`],
		[/* text */ 't', ` return elements
 respectively less than, less than or equal, greater than or equal,
 and greater than a given element, returning `],
		[/* inline code block */ 'i', `null`],
		[/* text */ 't', ` if there
 is no such element.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `A `],
			[/* inline code block */ 'i', `NavigableSet`],
			[/* text */ 't', ` may be accessed and traversed in either
 ascending or descending order.  The `],
			[/* reference */ 'r', `#descendingSet()`, `descendingSet()`],
			[/* text */ 't', ` method
 returns a view of the set with the senses of all relational and
 directional methods inverted. The performance of ascending
 operations and views is likely to be faster than that of descending
 ones.  This interface additionally defines methods `],
			[/* reference */ 'r', `#pollFirst()`, `pollFirst()`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `#pollLast()`, `pollLast()`],
			[/* text */ 't', ` that return and remove the lowest
 and highest element, if one exists, else returning `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', `.
 Methods
 `],
			[/* reference */ 'r', `#subSet(E,boolean,E,boolean)`, `subSet(E, boolean, E, boolean)`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#headSet(E,boolean)`, `headSet(E, boolean)`],
			[/* text */ 't', `, and
 `],
			[/* reference */ 'r', `#tailSet(E,boolean)`, `tailSet(E, boolean)`],
			[/* text */ 't', `
 differ from the like-named `],
			[/* inline code block */ 'i', `SortedSet`],
			[/* text */ 't', ` methods in accepting
 additional arguments describing whether lower and upper bounds are
 inclusive versus exclusive.  Subsets of any `],
			[/* inline code block */ 'i', `NavigableSet`],
			[/* text */ 't', `
 must implement the `],
			[/* inline code block */ 'i', `NavigableSet`],
			[/* text */ 't', ` interface.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The return values of navigation methods may be ambiguous in
 implementations that permit `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` elements. However, even
 in this case the result can be disambiguated by checking
 `],
			[/* inline code block */ 'i', `contains(null)`],
			[/* text */ 't', `. To avoid such issues, implementations of
 this interface are encouraged to `],
			[/* text */ 't', `not`],
			[/* text */ 't', ` permit insertion of
 `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` elements. (Note that sorted sets of `],
			[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
			[/* text */ 't', ` elements intrinsically do not permit `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', `.)

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Methods
 `],
			[/* reference */ 'r', `#subSet(E,E)`, `subSet(E, E)`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#headSet(E)`, `headSet(E)`],
			[/* text */ 't', `, and
 `],
			[/* reference */ 'r', `#tailSet(E)`, `tailSet(E)`],
			[/* text */ 't', `
 are specified to return `],
			[/* inline code block */ 'i', `SortedSet`],
			[/* text */ 't', ` to allow existing
 implementations of `],
			[/* inline code block */ 'i', `SortedSet`],
			[/* text */ 't', ` to be compatibly retrofitted to
 implement `],
			[/* inline code block */ 'i', `NavigableSet`],
			[/* text */ 't', `, but extensions and implementations
 of this interface are encouraged to override these methods to return
 `],
			[/* inline code block */ 'i', `NavigableSet`],
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
		[/* method */ 'ceiling(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the least element in this set greater than or equal to
 the given element, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no such element.`]
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
         and this set does not permit null elements`]
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
		[/* method */ 'floor(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the greatest element in this set less than or equal to
 the given element, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no such element.`]
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
         and this set does not permit null elements`]
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
				[/* text */ 't', `Returns the least element in this set strictly greater than the
 given element, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no such element.`]
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
         and this set does not permit null elements`]
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
		[/* method */ 'lower(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the greatest element in this set strictly less than the
 given element, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no such element.`]
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
         and this set does not permit null elements`]
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
				[/* text */ 't', `Retrieves and removes the first (lowest) element,
 or returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this set is empty.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the first element, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this set is empty`]
			]
		]],
		[/* method */ 'pollLast()', [
			[/* method description */
				[/* text */ 't', `Retrieves and removes the last (highest) element,
 or returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this set is empty.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the last element, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this set is empty`]
			]
		]],
		[/* method */ 'descendingIterator()', [
			[/* method description */
				[/* text */ 't', `Returns an iterator over the elements in this set, in descending order.
 Equivalent in effect to `],
				[/* inline code block */ 'i', `descendingSet().iterator()`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an iterator over the elements in this set, in descending order`]
			]
		]],
		[/* method */ 'iterator()', [
			[/* method description */
				[/* text */ 't', `Returns an iterator over the elements in this set, in ascending order.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an iterator over the elements in this set, in ascending order`]
			]
		]],
		[/* method */ 'descendingSet()', [
			[/* method description */
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
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a reverse order view of this set`]
			]
		]],
		[/* method */ 'headSet(java.lang.Object,boolean)', [
			[/* method description */
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
				[/* text */ 't', `a view of the portion of this set whose elements are less than
         (or equal to, if `],
				[/* inline code block */ 'i', `inclusive`],
				[/* text */ 't', ` is true) `],
				[/* inline code block */ 'i', `toElement`]
			]
		]],
		[/* method */ 'subSet(java.lang.Object,boolean,java.lang.Object,boolean)', [
			[/* method description */
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
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `toElement`],
					[/* text */ 't', ` is null and this set does
         not permit null elements`]
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
 on an attempt to insert an element outside its range.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Equivalent to `],
					[/* inline code block */ 'i', `headSet(toElement, false)`],
					[/* text */ 't', `.`]
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
 on an attempt to insert an element outside its range.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Equivalent to `],
					[/* inline code block */ 'i', `subSet(fromElement, true, toElement, false)`],
					[/* text */ 't', `.`]
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
 on an attempt to insert an element outside its range.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Equivalent to `],
					[/* inline code block */ 'i', `tailSet(fromElement, true)`],
					[/* text */ 't', `.`]
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
	/* enum values */ UDF
]);
