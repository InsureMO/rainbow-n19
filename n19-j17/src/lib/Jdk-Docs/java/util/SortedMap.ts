import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.SortedMap', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* reference */ 'r', `java.util.Map`, `Map`],
		[/* text */ 't', ` that further provides a `],
		[/* text */ 't', `total ordering`],
		[/* text */ 't', ` on its keys.
 The map is ordered according to the `],
		[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
		[/* text */ 't', ` of its keys, or by a `],
		[/* reference */ 'r', `java.util.Comparator`, `Comparator`],
		[/* text */ 't', ` typically
 provided at sorted map creation time.  This order is reflected when
 iterating over the sorted map's collection views (returned by the
 `],
		[/* inline code block */ 'i', `entrySet`],
		[/* text */ 't', `, `],
		[/* inline code block */ 'i', `keySet`],
		[/* text */ 't', ` and `],
		[/* inline code block */ 'i', `values`],
		[/* text */ 't', ` methods).
 Several additional operations are provided to take advantage of the
 ordering.  (This interface is the map analogue of `],
		[/* reference */ 'r', `java.util.SortedSet`, `SortedSet`],
		[/* text */ 't', `.)

 `],
		[/* block */ 'b', [
			[/* text */ 't', `All keys inserted into a sorted map must implement the `],
			[/* inline code block */ 'i', `Comparable`],
			[/* text */ 't', `
 interface (or be accepted by the specified comparator).  Furthermore, all
 such keys must be `],
			[/* text */ 't', `mutually comparable`],
			[/* text */ 't', `: `],
			[/* inline code block */ 'i', `k1.compareTo(k2)`],
			[/* text */ 't', ` (or
 `],
			[/* inline code block */ 'i', `comparator.compare(k1, k2)`],
			[/* text */ 't', `) must not throw a
 `],
			[/* inline code block */ 'i', `ClassCastException`],
			[/* text */ 't', ` for any keys `],
			[/* inline code block */ 'i', `k1`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `k2`],
			[/* text */ 't', ` in
 the sorted map.  Attempts to violate this restriction will cause the
 offending method or constructor invocation to throw a
 `],
			[/* inline code block */ 'i', `ClassCastException`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Note that the ordering maintained by a sorted map (whether or not an
 explicit comparator is provided) must be `],
			[/* text */ 't', `consistent with equals`],
			[/* text */ 't', ` if
 the sorted map is to correctly implement the `],
			[/* inline code block */ 'i', `Map`],
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
			[/* inline code block */ 'i', `Map`],
			[/* text */ 't', ` interface is defined in terms of the `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', `
 operation, but a sorted map performs all key comparisons using its
 `],
			[/* inline code block */ 'i', `compareTo`],
			[/* text */ 't', ` (or `],
			[/* inline code block */ 'i', `compare`],
			[/* text */ 't', `) method, so two keys that are
 deemed equal by this method are, from the standpoint of the sorted map,
 equal.  The behavior of a tree map `],
			[/* text */ 't', `is`],
			[/* text */ 't', ` well-defined even if its
 ordering is inconsistent with equals; it just fails to obey the general
 contract of the `],
			[/* inline code block */ 'i', `Map`],
			[/* text */ 't', ` interface.

 `]
		]],
		[/* block */ 'b', `All general-purpose sorted map implementation classes should provide four
 "standard" constructors. It is not possible to enforce this recommendation
 though as required constructors cannot be specified by interfaces. The
 expected "standard" constructors for all sorted map implementations are:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', `A void (no arguments) constructor, which creates an empty sorted map
   sorted according to the natural ordering of its keys.`],
			[/* block */ 'b', [
				[/* text */ 't', `A constructor with a single argument of type `],
				[/* inline code block */ 'i', `Comparator`],
				[/* text */ 't', `, which
   creates an empty sorted map sorted according to the specified comparator.`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `A constructor with a single argument of type `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', `, which creates
   a new map with the same key-value mappings as its argument, sorted
   according to the keys' natural ordering.`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `A constructor with a single argument of type `],
				[/* inline code block */ 'i', `SortedMap`],
				[/* text */ 't', `, which
   creates a new sorted map with the same key-value mappings and the same
   ordering as the input sorted map.`]
			]]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Note`],
			[/* text */ 't', `: several methods return submaps with restricted key
 ranges. Such ranges are `],
			[/* text */ 't', `half-open`],
			[/* text */ 't', `, that is, they include their low
 endpoint but not their high endpoint (where applicable).  If you need a
 `],
			[/* text */ 't', `closed range`],
			[/* text */ 't', ` (which includes both endpoints), and the key type
 allows for calculation of the successor of a given key, merely request
 the subrange from `],
			[/* inline code block */ 'i', `lowEndpoint`],
			[/* text */ 't', ` to
 `],
			[/* inline code block */ 'i', `successor(highEndpoint)`],
			[/* text */ 't', `.  For example, suppose that `],
			[/* inline code block */ 'i', `m`],
			[/* text */ 't', `
 is a map whose keys are strings.  The following idiom obtains a view
 containing all of the key-value mappings in `],
			[/* inline code block */ 'i', `m`],
			[/* text */ 't', ` whose keys are
 between `],
			[/* inline code block */ 'i', `low`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `high`],
			[/* text */ 't', `, inclusive:`]
		]],
		[/* code block */ 'c', `   SortedMap<String, V> sub = m.subMap(low, high+"\\0");`],
		[/* text */ 't', `

 A similar technique can be used to generate an `],
		[/* text */ 't', `open range`],
		[/* text */ 't', `
 (which contains neither endpoint).  The following idiom obtains a
 view containing all of the key-value mappings in `],
		[/* inline code block */ 'i', `m`],
		[/* text */ 't', ` whose keys
 are between `],
		[/* inline code block */ 'i', `low`],
		[/* text */ 't', ` and `],
		[/* inline code block */ 'i', `high`],
		[/* text */ 't', `, exclusive:`],
		[/* code block */ 'c', `   SortedMap<String, V> sub = m.subMap(low+"\\0", high);`],
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
		[/* method */ 'values()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Collection`, `Collection`],
				[/* text */ 't', ` view of the values contained in this map.
 The collection's iterator returns the values in ascending order
 of the corresponding keys.
 The collection is backed by the map, so changes to the map are
 reflected in the collection, and vice-versa.  If the map is
 modified while an iteration over the collection is in progress
 (except through the iterator's own `],
				[/* inline code block */ 'i', `remove`],
				[/* text */ 't', ` operation),
 the results of the iteration are undefined.  The collection
 supports element removal, which removes the corresponding
 mapping from the map, via the `],
				[/* inline code block */ 'i', `Iterator.remove`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `Collection.remove`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `removeAll`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `retainAll`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `clear`],
				[/* text */ 't', ` operations.  It does not
 support the `],
				[/* inline code block */ 'i', `add`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `addAll`],
				[/* text */ 't', ` operations.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a collection view of the values contained in this map,
         sorted in ascending key order`]
			]
		]],
		[/* method */ 'comparator()', [
			[/* method description */
				[/* text */ 't', `Returns the comparator used to order the keys in this map, or
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this map uses the `],
				[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
				[/* text */ 't', ` of its keys.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the comparator used to order the keys in this map,
         or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this map uses the natural ordering
         of its keys`]
			]
		]],
		[/* method */ 'entrySet()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Set`, `Set`],
				[/* text */ 't', ` view of the mappings contained in this map.
 The set's iterator returns the entries in ascending key order.
 The set is backed by the map, so changes to the map are
 reflected in the set, and vice-versa.  If the map is modified
 while an iteration over the set is in progress (except through
 the iterator's own `],
				[/* inline code block */ 'i', `remove`],
				[/* text */ 't', ` operation, or through the
 `],
				[/* inline code block */ 'i', `setValue`],
				[/* text */ 't', ` operation on a map entry returned by the
 iterator) the results of the iteration are undefined.  The set
 supports element removal, which removes the corresponding
 mapping from the map, via the `],
				[/* inline code block */ 'i', `Iterator.remove`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `Set.remove`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `removeAll`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `retainAll`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `clear`],
				[/* text */ 't', ` operations.  It does not support the
 `],
				[/* inline code block */ 'i', `add`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `addAll`],
				[/* text */ 't', ` operations.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a set view of the mappings contained in this map,
         sorted in ascending key order`]
			]
		]],
		[/* method */ 'keySet()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Set`, `Set`],
				[/* text */ 't', ` view of the keys contained in this map.
 The set's iterator returns the keys in ascending order.
 The set is backed by the map, so changes to the map are
 reflected in the set, and vice-versa.  If the map is modified
 while an iteration over the set is in progress (except through
 the iterator's own `],
				[/* inline code block */ 'i', `remove`],
				[/* text */ 't', ` operation), the results of
 the iteration are undefined.  The set supports element removal,
 which removes the corresponding mapping from the map, via the
 `],
				[/* inline code block */ 'i', `Iterator.remove`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `Set.remove`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `removeAll`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `retainAll`],
				[/* text */ 't', `, and `],
				[/* inline code block */ 'i', `clear`],
				[/* text */ 't', `
 operations.  It does not support the `],
				[/* inline code block */ 'i', `add`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `addAll`],
				[/* text */ 't', `
 operations.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a set view of the keys contained in this map, sorted in
         ascending order`]
			]
		]],
		[/* method */ 'headMap(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns a view of the portion of this map whose keys are
 strictly less than `],
				[/* inline code block */ 'i', `toKey`],
				[/* text */ 't', `.  The returned map is backed
 by this map, so changes in the returned map are reflected in
 this map, and vice-versa.  The returned map supports all
 optional map operations that this map supports.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned map will throw an `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', `
 on an attempt to insert a key outside its range.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'toKey', [/* parameter description */
					[/* text */ 't', `high endpoint (exclusive) of the keys in the returned map`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `toKey`],
					[/* text */ 't', ` is not compatible
         with this map's comparator (or, if the map has no comparator,
         if `],
					[/* inline code block */ 'i', `toKey`],
					[/* text */ 't', ` does not implement `],
					[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
					[/* text */ 't', `).
         Implementations may, but are not required to, throw this
         exception if `],
					[/* inline code block */ 'i', `toKey`],
					[/* text */ 't', ` cannot be compared to keys
         currently in the map.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `toKey`],
					[/* text */ 't', ` is null and
         this map does not permit null keys`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if this map itself has a
         restricted range, and `],
					[/* inline code block */ 'i', `toKey`],
					[/* text */ 't', ` lies outside the
         bounds of the range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a view of the portion of this map whose keys are strictly
         less than `],
				[/* inline code block */ 'i', `toKey`]
			]
		]],
		[/* method */ 'subMap(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns a view of the portion of this map whose keys range from
 `],
				[/* inline code block */ 'i', `fromKey`],
				[/* text */ 't', `, inclusive, to `],
				[/* inline code block */ 'i', `toKey`],
				[/* text */ 't', `, exclusive.  (If
 `],
				[/* inline code block */ 'i', `fromKey`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `toKey`],
				[/* text */ 't', ` are equal, the returned map
 is empty.)  The returned map is backed by this map, so changes
 in the returned map are reflected in this map, and vice-versa.
 The returned map supports all optional map operations that this
 map supports.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned map will throw an `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', `
 on an attempt to insert a key outside its range.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fromKey', [/* parameter description */
					[/* text */ 't', `low endpoint (inclusive) of the keys in the returned map`]
				]],
				[/* parameter */ 'toKey', [/* parameter description */
					[/* text */ 't', `high endpoint (exclusive) of the keys in the returned map`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromKey`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `toKey`],
					[/* text */ 't', `
         cannot be compared to one another using this map's comparator
         (or, if the map has no comparator, using natural ordering).
         Implementations may, but are not required to, throw this
         exception if `],
					[/* inline code block */ 'i', `fromKey`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `toKey`],
					[/* text */ 't', `
         cannot be compared to keys currently in the map.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromKey`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `toKey`],
					[/* text */ 't', `
         is null and this map does not permit null keys`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromKey`],
					[/* text */ 't', ` is greater than
         `],
					[/* inline code block */ 'i', `toKey`],
					[/* text */ 't', `; or if this map itself has a restricted
         range, and `],
					[/* inline code block */ 'i', `fromKey`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `toKey`],
					[/* text */ 't', ` lies
         outside the bounds of the range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a view of the portion of this map whose keys range from
         `],
				[/* inline code block */ 'i', `fromKey`],
				[/* text */ 't', `, inclusive, to `],
				[/* inline code block */ 'i', `toKey`],
				[/* text */ 't', `, exclusive`]
			]
		]],
		[/* method */ 'tailMap(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns a view of the portion of this map whose keys are
 greater than or equal to `],
				[/* inline code block */ 'i', `fromKey`],
				[/* text */ 't', `.  The returned map is
 backed by this map, so changes in the returned map are
 reflected in this map, and vice-versa.  The returned map
 supports all optional map operations that this map supports.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned map will throw an `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', `
 on an attempt to insert a key outside its range.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fromKey', [/* parameter description */
					[/* text */ 't', `low endpoint (inclusive) of the keys in the returned map`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromKey`],
					[/* text */ 't', ` is not compatible
         with this map's comparator (or, if the map has no comparator,
         if `],
					[/* inline code block */ 'i', `fromKey`],
					[/* text */ 't', ` does not implement `],
					[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
					[/* text */ 't', `).
         Implementations may, but are not required to, throw this
         exception if `],
					[/* inline code block */ 'i', `fromKey`],
					[/* text */ 't', ` cannot be compared to keys
         currently in the map.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fromKey`],
					[/* text */ 't', ` is null and
         this map does not permit null keys`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if this map itself has a
         restricted range, and `],
					[/* inline code block */ 'i', `fromKey`],
					[/* text */ 't', ` lies outside the
         bounds of the range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a view of the portion of this map whose keys are greater
         than or equal to `],
				[/* inline code block */ 'i', `fromKey`]
			]
		]],
		[/* method */ 'firstKey()', [
			[/* method description */
				[/* text */ 't', `Returns the first (lowest) key currently in this map.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this map is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the first (lowest) key currently in this map`]
			]
		]],
		[/* method */ 'lastKey()', [
			[/* method description */
				[/* text */ 't', `Returns the last (highest) key currently in this map.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this map is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the last (highest) key currently in this map`]
			]
		]]
	],
	/* enum values */ UDF
]);
