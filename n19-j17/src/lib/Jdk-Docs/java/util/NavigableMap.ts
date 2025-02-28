import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.NavigableMap', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* reference */ 'r', `java.util.SortedMap`],
		[/* text */ 't', ` extended with navigation methods returning the
 closest matches for given search targets. Methods
 `],
		[/* reference */ 'r', `lowerEntry(K)`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `floorEntry(K)`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `ceilingEntry(K)`],
		[/* text */ 't', `,
 and `],
		[/* reference */ 'r', `higherEntry(K)`],
		[/* text */ 't', ` return `],
		[/* inline code block */ 'i', `Map.Entry`],
		[/* text */ 't', ` objects
 associated with keys respectively less than, less than or equal,
 greater than or equal, and greater than a given key, returning
 `],
		[/* inline code block */ 'i', `null`],
		[/* text */ 't', ` if there is no such key.  Similarly, methods
 `],
		[/* reference */ 'r', `lowerKey(K)`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `floorKey(K)`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `ceilingKey(K)`],
		[/* text */ 't', `, and
 `],
		[/* reference */ 'r', `higherKey(K)`],
		[/* text */ 't', ` return only the associated keys. All of these
 methods are designed for locating, not traversing entries.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `A `],
			[/* inline code block */ 'i', `NavigableMap`],
			[/* text */ 't', ` may be accessed and traversed in either
 ascending or descending key order.  The `],
			[/* reference */ 'r', `descendingMap()`],
			[/* text */ 't', `
 method returns a view of the map with the senses of all relational
 and directional methods inverted. The performance of ascending
 operations and views is likely to be faster than that of descending
 ones.  Methods
 `],
			[/* reference */ 'r', `subMap(K, boolean, K, boolean)`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `headMap(K, boolean)`],
			[/* text */ 't', `, and
 `],
			[/* reference */ 'r', `tailMap(K, boolean)`],
			[/* text */ 't', `
 differ from the like-named `],
			[/* inline code block */ 'i', `SortedMap`],
			[/* text */ 't', ` methods in accepting
 additional arguments describing whether lower and upper bounds are
 inclusive versus exclusive.  Submaps of any `],
			[/* inline code block */ 'i', `NavigableMap`],
			[/* text */ 't', `
 must implement the `],
			[/* inline code block */ 'i', `NavigableMap`],
			[/* text */ 't', ` interface.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This interface additionally defines methods `],
			[/* reference */ 'r', `firstEntry()`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `pollFirstEntry()`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `lastEntry()`],
			[/* text */ 't', `, and
 `],
			[/* reference */ 'r', `pollLastEntry()`],
			[/* text */ 't', ` that return and/or remove the least and
 greatest mappings, if any exist, else returning `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Implementations of entry-returning methods are expected to
 return `],
			[/* inline code block */ 'i', `Map.Entry`],
			[/* text */ 't', ` pairs representing snapshots of mappings
 at the time they were produced, and thus generally do `],
			[/* text */ 't', `not`],
			[/* text */ 't', `
 support the optional `],
			[/* inline code block */ 'i', `Entry.setValue`],
			[/* text */ 't', ` method. Note however
 that it is possible to change mappings in the associated map using
 method `],
			[/* inline code block */ 'i', `put`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Methods
 `],
			[/* reference */ 'r', `subMap(K, K)`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `headMap(K)`],
			[/* text */ 't', `, and
 `],
			[/* reference */ 'r', `tailMap(K)`],
			[/* text */ 't', `
 are specified to return `],
			[/* inline code block */ 'i', `SortedMap`],
			[/* text */ 't', ` to allow existing
 implementations of `],
			[/* inline code block */ 'i', `SortedMap`],
			[/* text */ 't', ` to be compatibly retrofitted to
 implement `],
			[/* inline code block */ 'i', `NavigableMap`],
			[/* text */ 't', `, but extensions and implementations
 of this interface are encouraged to override these methods to return
 `],
			[/* inline code block */ 'i', `NavigableMap`],
			[/* text */ 't', `.  Similarly,
 `],
			[/* external link */ 'a', `SortedMap.html#keySet()`, `SortedMap.keySet()`],
			[/* text */ 't', ` can be overridden to return `],
			[/* reference */ 'r', `java.util.NavigableSet`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This interface is a member of the
 `],
			[/* external link */ 'a', `../../../java.base/java/util/package-summary.html#CollectionsFramework`, `Java Collections Framework`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'navigableKeySet()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.NavigableSet`],
				[/* text */ 't', ` view of the keys contained in this map.
 The set's iterator returns the keys in ascending order.
 The set is backed by the map, so changes to the map are reflected in
 the set, and vice-versa.  If the map is modified while an iteration
 over the set is in progress (except through the iterator's own `],
				[/* inline code block */ 'i', `remove`],
				[/* text */ 't', ` operation), the results of the iteration are undefined.  The
 set supports element removal, which removes the corresponding mapping
 from the map, via the `],
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
				[/* text */ 't', ` operations.
 It does not support the `],
				[/* inline code block */ 'i', `add`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `addAll`],
				[/* text */ 't', ` operations.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a navigable set view of the keys in this map`]
			]
		]],
		[/* method */ 'descendingKeySet()', [
			[/* method description */
				[/* text */ 't', `Returns a reverse order `],
				[/* reference */ 'r', `java.util.NavigableSet`],
				[/* text */ 't', ` view of the keys contained in this map.
 The set's iterator returns the keys in descending order.
 The set is backed by the map, so changes to the map are reflected in
 the set, and vice-versa.  If the map is modified while an iteration
 over the set is in progress (except through the iterator's own `],
				[/* inline code block */ 'i', `remove`],
				[/* text */ 't', ` operation), the results of the iteration are undefined.  The
 set supports element removal, which removes the corresponding mapping
 from the map, via the `],
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
				[/* text */ 't', ` operations.
 It does not support the `],
				[/* inline code block */ 'i', `add`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `addAll`],
				[/* text */ 't', ` operations.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a reverse order navigable set view of the keys in this map`]
			]
		]],
		[/* method */ 'lowerKey(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the greatest key strictly less than the given key, or
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no such key.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the specified key cannot be compared
         with the keys currently in the map`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null
         and this map does not permit null keys`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the greatest key less than `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', `,
         or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no such key`]
			]
		]],
		[/* method */ 'floorKey(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the greatest key less than or equal to the given key,
 or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no such key.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the specified key cannot be compared
         with the keys currently in the map`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null
         and this map does not permit null keys`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the greatest key less than or equal to `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', `,
         or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no such key`]
			]
		]],
		[/* method */ 'ceilingKey(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the least key greater than or equal to the given key,
 or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no such key.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the specified key cannot be compared
         with the keys currently in the map`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null
         and this map does not permit null keys`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the least key greater than or equal to `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', `,
         or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no such key`]
			]
		]],
		[/* method */ 'higherKey(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the least key strictly greater than the given key, or
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no such key.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the specified key cannot be compared
         with the keys currently in the map`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null
         and this map does not permit null keys`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the least key greater than `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', `,
         or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no such key`]
			]
		]],
		[/* method */ 'pollFirstEntry()', [
			[/* method description */
				[/* text */ 't', `Removes and returns a key-value mapping associated with
 the least key in this map, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the map is empty.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the removed first entry of this map,
         or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this map is empty`]
			]
		]],
		[/* method */ 'pollLastEntry()', [
			[/* method description */
				[/* text */ 't', `Removes and returns a key-value mapping associated with
 the greatest key in this map, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the map is empty.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the removed last entry of this map,
         or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this map is empty`]
			]
		]],
		[/* method */ 'subMap(java.lang.Object,boolean,java.lang.Object,boolean)', [
			[/* method description */
				[/* text */ 't', `Returns a view of the portion of this map whose keys range from
 `],
				[/* inline code block */ 'i', `fromKey`],
				[/* text */ 't', ` to `],
				[/* inline code block */ 'i', `toKey`],
				[/* text */ 't', `.  If `],
				[/* inline code block */ 'i', `fromKey`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `toKey`],
				[/* text */ 't', ` are equal, the returned map is empty unless
 `],
				[/* inline code block */ 'i', `fromInclusive`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `toInclusive`],
				[/* text */ 't', ` are both true.  The
 returned map is backed by this map, so changes in the returned map are
 reflected in this map, and vice-versa.  The returned map supports all
 optional map operations that this map supports.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned map will throw an `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', `
 on an attempt to insert a key outside of its range, or to construct a
 submap either of whose endpoints lie outside its range.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fromKey', [/* parameter description */
					[/* text */ 't', `low endpoint of the keys in the returned map`]
				]],
				[/* parameter */ 'fromInclusive', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if the low endpoint
        is to be included in the returned view`]
				]],
				[/* parameter */ 'toKey', [/* parameter description */
					[/* text */ 't', `high endpoint of the keys in the returned map`]
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
				[/* text */ 't', ` to `],
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
 on an attempt to insert a key outside its range.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Equivalent to `],
					[/* inline code block */ 'i', `subMap(fromKey, true, toKey, false)`],
					[/* text */ 't', `.`]
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
 on an attempt to insert a key outside its range.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Equivalent to `],
					[/* inline code block */ 'i', `headMap(toKey, false)`],
					[/* text */ 't', `.`]
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
					[/* reference */ 'r', `java.lang.Comparable`],
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
		[/* method */ 'headMap(java.lang.Object,boolean)', [
			[/* method description */
				[/* text */ 't', `Returns a view of the portion of this map whose keys are less than (or
 equal to, if `],
				[/* inline code block */ 'i', `inclusive`],
				[/* text */ 't', ` is true) `],
				[/* inline code block */ 'i', `toKey`],
				[/* text */ 't', `.  The returned
 map is backed by this map, so changes in the returned map are reflected
 in this map, and vice-versa.  The returned map supports all optional
 map operations that this map supports.

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
					[/* text */ 't', `high endpoint of the keys in the returned map`]
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
					[/* inline code block */ 'i', `toKey`],
					[/* text */ 't', ` is not compatible
         with this map's comparator (or, if the map has no comparator,
         if `],
					[/* inline code block */ 'i', `toKey`],
					[/* text */ 't', ` does not implement `],
					[/* reference */ 'r', `java.lang.Comparable`],
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
					[/* text */ 't', ` is null
         and this map does not permit null keys`]
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
				[/* text */ 't', `a view of the portion of this map whose keys are less than
         (or equal to, if `],
				[/* inline code block */ 'i', `inclusive`],
				[/* text */ 't', ` is true) `],
				[/* inline code block */ 'i', `toKey`]
			]
		]],
		[/* method */ 'tailMap(java.lang.Object,boolean)', [
			[/* method description */
				[/* text */ 't', `Returns a view of the portion of this map whose keys are greater than (or
 equal to, if `],
				[/* inline code block */ 'i', `inclusive`],
				[/* text */ 't', ` is true) `],
				[/* inline code block */ 'i', `fromKey`],
				[/* text */ 't', `.  The returned
 map is backed by this map, so changes in the returned map are reflected
 in this map, and vice-versa.  The returned map supports all optional
 map operations that this map supports.

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
					[/* text */ 't', `low endpoint of the keys in the returned map`]
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
					[/* inline code block */ 'i', `fromKey`],
					[/* text */ 't', ` is not compatible
         with this map's comparator (or, if the map has no comparator,
         if `],
					[/* inline code block */ 'i', `fromKey`],
					[/* text */ 't', ` does not implement `],
					[/* reference */ 'r', `java.lang.Comparable`],
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
					[/* text */ 't', ` is null
         and this map does not permit null keys`]
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
				[/* text */ 't', `a view of the portion of this map whose keys are greater than
         (or equal to, if `],
				[/* inline code block */ 'i', `inclusive`],
				[/* text */ 't', ` is true) `],
				[/* inline code block */ 'i', `fromKey`]
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
 on an attempt to insert a key outside its range.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Equivalent to `],
					[/* inline code block */ 'i', `tailMap(fromKey, true)`],
					[/* text */ 't', `.`]
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
					[/* reference */ 'r', `java.lang.Comparable`],
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
		[/* method */ 'descendingMap()', [
			[/* method description */
				[/* text */ 't', `Returns a reverse order view of the mappings contained in this map.
 The descending map is backed by this map, so changes to the map are
 reflected in the descending map, and vice-versa.  If either map is
 modified while an iteration over a collection view of either map
 is in progress (except through the iterator's own `],
				[/* inline code block */ 'i', `remove`],
				[/* text */ 't', `
 operation), the results of the iteration are undefined.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned map has an ordering equivalent to
 `],
					[/* external link */ 'a', `Collections.html#reverseOrder(java.util.Comparator)`, `Collections.reverseOrder`],
					[/* inline code block */ 'i', `(comparator())`],
					[/* text */ 't', `.
 The expression `],
					[/* inline code block */ 'i', `m.descendingMap().descendingMap()`],
					[/* text */ 't', ` returns a
 view of `],
					[/* inline code block */ 'i', `m`],
					[/* text */ 't', ` essentially equivalent to `],
					[/* inline code block */ 'i', `m`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a reverse order view of this map`]
			]
		]],
		[/* method */ 'lowerEntry(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns a key-value mapping associated with the greatest key
 strictly less than the given key, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is
 no such key.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the specified key cannot be compared
         with the keys currently in the map`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null
         and this map does not permit null keys`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an entry with the greatest key less than `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', `,
         or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no such key`]
			]
		]],
		[/* method */ 'floorEntry(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns a key-value mapping associated with the greatest key
 less than or equal to the given key, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there
 is no such key.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the specified key cannot be compared
         with the keys currently in the map`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null
         and this map does not permit null keys`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an entry with the greatest key less than or equal to
         `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', `, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no such key`]
			]
		]],
		[/* method */ 'ceilingEntry(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns a key-value mapping associated with the least key
 greater than or equal to the given key, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if
 there is no such key.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the specified key cannot be compared
         with the keys currently in the map`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null
         and this map does not permit null keys`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an entry with the least key greater than or equal to
         `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', `, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no such key`]
			]
		]],
		[/* method */ 'higherEntry(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns a key-value mapping associated with the least key
 strictly greater than the given key, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there
 is no such key.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the specified key cannot be compared
         with the keys currently in the map`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null
         and this map does not permit null keys`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an entry with the least key greater than `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', `,
         or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no such key`]
			]
		]],
		[/* method */ 'firstEntry()', [
			[/* method description */
				[/* text */ 't', `Returns a key-value mapping associated with the least
 key in this map, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the map is empty.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an entry with the least key,
         or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this map is empty`]
			]
		]],
		[/* method */ 'lastEntry()', [
			[/* method description */
				[/* text */ 't', `Returns a key-value mapping associated with the greatest
 key in this map, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the map is empty.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an entry with the greatest key,
         or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this map is empty`]
			]
		]]
	],
]);
