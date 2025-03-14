import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.TreeMap', [
	[/* class description */
		[/* text */ 't', `A Red-Black tree based `],
		[/* reference */ 'r', `java.util.NavigableMap`, `NavigableMap`],
		[/* text */ 't', ` implementation.
 The map is sorted according to the `],
		[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
		[/* text */ 't', ` of its keys, or by a `],
		[/* reference */ 'r', `java.util.Comparator`, `Comparator`],
		[/* text */ 't', ` provided at map
 creation time, depending on which constructor is used.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This implementation provides guaranteed log(n) time cost for the
 `],
			[/* inline code block */ 'i', `containsKey`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `get`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `put`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `remove`],
			[/* text */ 't', `
 operations.  Algorithms are adaptations of those in Cormen, Leiserson, and
 Rivest's `],
			[/* text */ 't', `Introduction to Algorithms`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Note that the ordering maintained by a tree map, like any sorted map, and
 whether or not an explicit comparator is provided, must be `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', ` if this sorted map is to correctly implement the
 `],
			[/* inline code block */ 'i', `Map`],
			[/* text */ 't', ` interface.  (See `],
			[/* inline code block */ 'i', `Comparable`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `Comparator`],
			[/* text */ 't', ` for a
 precise definition of `],
			[/* text */ 't', `consistent with equals`],
			[/* text */ 't', `.)  This is so because
 the `],
			[/* inline code block */ 'i', `Map`],
			[/* text */ 't', ` interface is defined in terms of the `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', `
 operation, but a sorted map performs all key comparisons using its `],
			[/* inline code block */ 'i', `compareTo`],
			[/* text */ 't', ` (or `],
			[/* inline code block */ 'i', `compare`],
			[/* text */ 't', `) method, so two keys that are deemed equal by
 this method are, from the standpoint of the sorted map, equal.  The behavior
 of a sorted map `],
			[/* text */ 't', `is`],
			[/* text */ 't', ` well-defined even if its ordering is
 inconsistent with `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', `; it just fails to obey the general contract
 of the `],
			[/* inline code block */ 'i', `Map`],
			[/* text */ 't', ` interface.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Note that this implementation is not synchronized.`],
			[/* text */ 't', `
 If multiple threads access a map concurrently, and at least one of the
 threads modifies the map structurally, it `],
			[/* text */ 't', `must`],
			[/* text */ 't', ` be synchronized
 externally.  (A structural modification is any operation that adds or
 deletes one or more mappings; merely changing the value associated
 with an existing key is not a structural modification.)  This is
 typically accomplished by synchronizing on some object that naturally
 encapsulates the map.
 If no such object exists, the map should be "wrapped" using the
 `],
			[/* reference */ 'r', `java.util.Collections#synchronizedSortedMap(java.util.SortedMap)`, `Collections.synchronizedSortedMap`],
			[/* text */ 't', `
 method.  This is best done at creation time, to prevent accidental
 unsynchronized access to the map: `]
		]],
		[/* code block */ 'c', `   SortedMap m = Collections.synchronizedSortedMap(new TreeMap(...));`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `The iterators returned by the `],
			[/* inline code block */ 'i', `iterator`],
			[/* text */ 't', ` method of the collections
 returned by all of this class's "collection view methods" are
 `],
			[/* text */ 't', `fail-fast`],
			[/* text */ 't', `: if the map is structurally modified at any time after
 the iterator is created, in any way except through the iterator's own
 `],
			[/* inline code block */ 'i', `remove`],
			[/* text */ 't', ` method, the iterator will throw a `],
			[/* reference */ 'r', `java.util.ConcurrentModificationException`, `ConcurrentModificationException`],
			[/* text */ 't', `.  Thus, in the face of concurrent
 modification, the iterator fails quickly and cleanly, rather than risking
 arbitrary, non-deterministic behavior at an undetermined time in the future.

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
			[/* text */ 't', `All `],
			[/* inline code block */ 'i', `Map.Entry`],
			[/* text */ 't', ` pairs returned by methods in this class
 and its views represent snapshots of mappings at the time they were
 produced. They do `],
			[/* text */ 't', `not`],
			[/* text */ 't', ` support the `],
			[/* inline code block */ 'i', `Entry.setValue`],
			[/* text */ 't', `
 method. (Note however that it is possible to change mappings in the
 associated map using `],
			[/* inline code block */ 'i', `put`],
			[/* text */ 't', `.)

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
				[/* text */ 't', `Constructs a new, empty tree map, using the natural ordering of its
 keys.  All keys inserted into the map must implement the `],
				[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
				[/* text */ 't', ` interface.  Furthermore, all such keys must be
 `],
				[/* text */ 't', `mutually comparable`],
				[/* text */ 't', `: `],
				[/* inline code block */ 'i', `k1.compareTo(k2)`],
				[/* text */ 't', ` must not throw
 a `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', ` for any keys `],
				[/* inline code block */ 'i', `k1`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `k2`],
				[/* text */ 't', ` in the map.  If the user attempts to put a key into the
 map that violates this constraint (for example, the user attempts to
 put a string key into a map whose keys are integers), the
 `],
				[/* inline code block */ 'i', `put(Object key, Object value)`],
				[/* text */ 't', ` call will throw a
 `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.util.Comparator)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new, empty tree map, ordered according to the given
 comparator.  All keys inserted into the map must be `],
				[/* text */ 't', `mutually
 comparable`],
				[/* text */ 't', ` by the given comparator: `],
				[/* inline code block */ 'i', `comparator.compare(k1, k2)`],
				[/* text */ 't', ` must not throw a `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', ` for any keys
 `],
				[/* inline code block */ 'i', `k1`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `k2`],
				[/* text */ 't', ` in the map.  If the user attempts to put
 a key into the map that violates this constraint, the `],
				[/* inline code block */ 'i', `put(Object key, Object value)`],
				[/* text */ 't', ` call will throw a
 `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'comparator', [/* parameter description */
					[/* text */ 't', `the comparator that will be used to order this map.
        If `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, the `],
					[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
					[/* text */ 't', ` of the keys will be used.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.util.Map)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new tree map containing the same mappings as the given
 map, ordered according to the `],
				[/* text */ 't', `natural ordering`],
				[/* text */ 't', ` of its keys.
 All keys inserted into the new map must implement the `],
				[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
				[/* text */ 't', ` interface.  Furthermore, all such keys must be
 `],
				[/* text */ 't', `mutually comparable`],
				[/* text */ 't', `: `],
				[/* inline code block */ 'i', `k1.compareTo(k2)`],
				[/* text */ 't', ` must not throw
 a `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', ` for any keys `],
				[/* inline code block */ 'i', `k1`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `k2`],
				[/* text */ 't', ` in the map.  This method runs in n*log(n) time.`]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `the map whose mappings are to be placed in this map`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the keys in m are not `],
					[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
					[/* text */ 't', `,
         or are not mutually comparable`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified map is null`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.util.SortedMap)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new tree map containing the same mappings and
 using the same ordering as the specified sorted map.  This
 method runs in linear time.`]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `the sorted map whose mappings are to be placed in this map,
         and whose comparator is to be used to sort this map`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified map is null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'containsKey(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this map contains a mapping for the specified
 key.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `key whose presence in this map is to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the specified key cannot be compared
         with the keys currently in the map`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null
         and this map uses natural ordering, or its comparator
         does not permit null keys`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this map contains a mapping for the
         specified key`]
			]
		]],
		[/* method */ 'containsValue(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this map maps one or more keys to the
 specified value.  More formally, returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if
 this map contains at least one mapping to a value `],
				[/* inline code block */ 'i', `v`],
				[/* text */ 't', ` such
 that `],
				[/* inline code block */ 'i', `(value==null ? v==null : value.equals(v))`],
				[/* text */ 't', `.  This
 operation will probably require time linear in the map size for
 most implementations.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `value whose presence in this map is to be tested`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if a mapping to `],
				[/* inline code block */ 'i', `value`],
				[/* text */ 't', ` exists;
         `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'replace(java.lang.Object,java.lang.Object,java.lang.Object)', UDF],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the number of key-value mappings in this map.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of key-value mappings in this map`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Returns a shallow copy of this `],
				[/* inline code block */ 'i', `TreeMap`],
				[/* text */ 't', ` instance. (The keys and
 values themselves are not cloned.)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a shallow copy of this map`]
			]
		]],
		[/* method */ 'values()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Collection`, `Collection`],
				[/* text */ 't', ` view of the values contained in this map.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The collection's iterator returns the values in ascending order
 of the corresponding keys. The collection's spliterator is
 `],
					[/* reference */ 'r', `java.util.Spliterator#binding`, `late-binding`],
					[/* text */ 't', `,
 `],
					[/* text */ 't', `fail-fast`],
					[/* text */ 't', `, and additionally reports `],
					[/* reference */ 'r', `java.util.Spliterator#ORDERED`, `Spliterator.ORDERED`],
					[/* text */ 't', `
 with an encounter order that is ascending order of the corresponding
 keys.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The collection is backed by the map, so changes to the map are
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
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a collection view of the values contained in this map`]
			]
		]],
		[/* method */ 'comparator()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns the comparator used to order the keys in this map, or
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if this map uses the `],
					[/* reference */ 'r', `java.lang.Comparable`, `natural ordering`],
					[/* text */ 't', ` of its keys.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the comparator used to order the keys in this map,
         or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this map uses the natural ordering
         of its keys`]
			]
		]],
		[/* method */ 'ceilingEntry(java.lang.Object)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a key-value mapping associated with the least key
 greater than or equal to the given key, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if
 there is no such key.`]
				]]
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
         and this map uses natural ordering, or its comparator
         does not permit null keys`]
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
		[/* method */ 'firstEntry()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a key-value mapping associated with the least
 key in this map, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if the map is empty.`]
				]]
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
		[/* method */ 'floorEntry(java.lang.Object)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a key-value mapping associated with the greatest key
 less than or equal to the given key, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if there
 is no such key.`]
				]]
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
         and this map uses natural ordering, or its comparator
         does not permit null keys`]
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
		[/* method */ 'higherEntry(java.lang.Object)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a key-value mapping associated with the least key
 strictly greater than the given key, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if there
 is no such key.`]
				]]
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
         and this map uses natural ordering, or its comparator
         does not permit null keys`]
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
		[/* method */ 'lastEntry()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a key-value mapping associated with the greatest
 key in this map, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if the map is empty.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an entry with the greatest key,
         or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this map is empty`]
			]
		]],
		[/* method */ 'lowerEntry(java.lang.Object)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a key-value mapping associated with the greatest key
 strictly less than the given key, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if there is
 no such key.`]
				]]
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
         and this map uses natural ordering, or its comparator
         does not permit null keys`]
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
		[/* method */ 'pollFirstEntry()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Removes and returns a key-value mapping associated with
 the least key in this map, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if the map is empty.`]
				]]
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
				[/* block */ 'b', [
					[/* text */ 't', `Removes and returns a key-value mapping associated with
 the greatest key in this map, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if the map is empty.`]
				]]
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
		[/* method */ 'descendingMap()', [
			[/* method description */
				[/* block */ 'b', [
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
						[/* reference */ 'r', `java.util.Collections#reverseOrder(java.util.Comparator)`, `Collections.reverseOrder`],
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
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a reverse order view of this map`]
			]
		]],
		[/* method */ 'headMap(java.lang.Object,boolean)', [
			[/* method description */
				[/* block */ 'b', [
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
					[/* text */ 't', ` is null
         and this map uses natural ordering, or its comparator
         does not permit null keys`]
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
		[/* method */ 'subMap(java.lang.Object,boolean,java.lang.Object,boolean)', [
			[/* method description */
				[/* block */ 'b', [
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
					[/* text */ 't', ` is
         null and this map uses natural ordering, or its comparator
         does not permit null keys`]
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
		[/* method */ 'tailMap(java.lang.Object,boolean)', [
			[/* method description */
				[/* block */ 'b', [
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
					[/* text */ 't', ` is null
         and this map uses natural ordering, or its comparator
         does not permit null keys`]
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
		[/* method */ 'descendingKeySet()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a reverse order `],
					[/* reference */ 'r', `java.util.NavigableSet`, `NavigableSet`],
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
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a reverse order navigable set view of the keys in this map`]
			]
		]],
		[/* method */ 'navigableKeySet()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a `],
					[/* reference */ 'r', `java.util.NavigableSet`, `NavigableSet`],
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
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a navigable set view of the keys in this map`]
			]
		]],
		[/* method */ 'entrySet()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Set`, `Set`],
				[/* text */ 't', ` view of the mappings contained in this map.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The set's iterator returns the entries in ascending key order. The
 set's spliterator is
 `],
					[/* reference */ 'r', `java.util.Spliterator#binding`, `late-binding`],
					[/* text */ 't', `,
 `],
					[/* text */ 't', `fail-fast`],
					[/* text */ 't', `, and additionally reports `],
					[/* reference */ 'r', `java.util.Spliterator#SORTED`, `Spliterator.SORTED`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.util.Spliterator#ORDERED`, `Spliterator.ORDERED`],
					[/* text */ 't', ` with an encounter order that is ascending key
 order.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The set is backed by the map, so changes to the map are
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
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
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

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The set's iterator returns the keys in ascending order.
 The set's spliterator is
 `],
					[/* reference */ 'r', `java.util.Spliterator#binding`, `late-binding`],
					[/* text */ 't', `,
 `],
					[/* text */ 't', `fail-fast`],
					[/* text */ 't', `, and additionally reports `],
					[/* reference */ 'r', `java.util.Spliterator#SORTED`, `Spliterator.SORTED`],
					[/* text */ 't', `
 and `],
					[/* reference */ 'r', `java.util.Spliterator#ORDERED`, `Spliterator.ORDERED`],
					[/* text */ 't', ` with an encounter order that is ascending
 key order.  The spliterator's comparator (see
 `],
					[/* reference */ 'r', `java.util.Spliterator#getComparator()`, `Spliterator.getComparator()`],
					[/* text */ 't', `) is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if
 the tree map's comparator (see `],
					[/* reference */ 'r', `#comparator()`, `comparator()`],
					[/* text */ 't', `) is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.
 Otherwise, the spliterator's comparator is the same as or imposes the
 same total ordering as the tree map's comparator.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The set is backed by the map, so changes to the map are
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
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a set view of the keys contained in this map`]
			]
		]],
		[/* method */ 'headMap(java.lang.Object)', [
			[/* method description */
				[/* block */ 'b', [
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
					[/* text */ 't', ` is null
         and this map uses natural ordering, or its comparator
         does not permit null keys`]
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
				[/* block */ 'b', [
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
					[/* text */ 't', ` is
         null and this map uses natural ordering, or its comparator
         does not permit null keys`]
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
				[/* block */ 'b', [
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
					[/* text */ 't', ` is null
         and this map uses natural ordering, or its comparator
         does not permit null keys`]
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
		[/* method */ 'ceilingKey(java.lang.Object)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns the least key greater than or equal to the given key,
 or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if there is no such key.`]
				]]
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
         and this map uses natural ordering, or its comparator
         does not permit null keys`]
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
		[/* method */ 'firstKey()', [
			[/* method description */
				[/* block */ 'b', `Returns the first (lowest) key currently in this map.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this map is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the first (lowest) key currently in this map`]
			]
		]],
		[/* method */ 'floorKey(java.lang.Object)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns the greatest key less than or equal to the given key,
 or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if there is no such key.`]
				]]
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
         and this map uses natural ordering, or its comparator
         does not permit null keys`]
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
		[/* method */ 'higherKey(java.lang.Object)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns the least key strictly greater than the given key, or
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if there is no such key.`]
				]]
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
         and this map uses natural ordering, or its comparator
         does not permit null keys`]
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
		[/* method */ 'lastKey()', [
			[/* method description */
				[/* block */ 'b', `Returns the last (highest) key currently in this map.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if this map is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the last (highest) key currently in this map`]
			]
		]],
		[/* method */ 'lowerKey(java.lang.Object)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns the greatest key strictly less than the given key, or
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if there is no such key.`]
				]]
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
         and this map uses natural ordering, or its comparator
         does not permit null keys`]
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
		[/* method */ 'compute(java.lang.Object,java.util.function.BiFunction)', [
			[/* method description */
				[/* text */ 't', `Attempts to compute a mapping for the specified key and its current
 mapped value (or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no current mapping). For
 example, to either create or append a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` msg to a value
 mapping:

 `],
				[/* code block */ 'c', [
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `map.compute(key, (k, v) -> (v == null) ? msg : v.concat(msg))`]
				]],
				[/* text */ 't', `
 (Method `],
				[/* reference */ 'r', `java.util.Map#merge(K,V,java.util.function.BiFunction)`, `merge()`],
				[/* text */ 't', ` is often simpler to use for such purposes.)

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the remapping function returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, the mapping is removed
 (or remains absent if initially absent).  If the remapping function
 itself throws an (unchecked) exception, the exception is rethrown, and
 the current mapping is left unchanged.

 `]
				]],
				[/* block */ 'b', `The remapping function should not modify this map during computation.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method will, on a best-effort basis, throw a
 `],
					[/* reference */ 'r', `java.util.ConcurrentModificationException`, `ConcurrentModificationException`],
					[/* text */ 't', ` if it is detected that the
 remapping function modifies this map during computation.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `key with which the specified value is to be associated`]
				]],
				[/* parameter */ 'remappingFunction', [/* parameter description */
					[/* text */ 't', `the remapping function to compute a value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.ConcurrentModificationException', [/* throw description */
					[/* text */ 't', `if it is detected that the
 remapping function modified this map`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the new value associated with the specified key, or null if none`]
			]
		]],
		[/* method */ 'computeIfAbsent(java.lang.Object,java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `If the specified key is not already associated with a value (or is mapped
 to `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `), attempts to compute its value using the given mapping
 function and enters it into this map unless `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the mapping function returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, no mapping is recorded.
 If the mapping function itself throws an (unchecked) exception, the
 exception is rethrown, and no mapping is recorded.  The most
 common usage is to construct a new object serving as an initial
 mapped value or memoized result, as in:

 `]
				]],
				[/* code block */ 'c', [
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `map.computeIfAbsent(key, k -> new Value(f(k)));`]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Or to implement a multi-value map, `],
					[/* inline code block */ 'i', `Map<K,Collection<V>>`],
					[/* text */ 't', `,
 supporting multiple values per key:

 `]
				]],
				[/* code block */ 'c', [
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `map.computeIfAbsent(key, k -> new HashSet<V>()).add(v);`]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `The mapping function should not modify this map during computation.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method will, on a best-effort basis, throw a
 `],
					[/* reference */ 'r', `java.util.ConcurrentModificationException`, `ConcurrentModificationException`],
					[/* text */ 't', ` if it is detected that the
 mapping function modifies this map during computation.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `key with which the specified value is to be associated`]
				]],
				[/* parameter */ 'mappingFunction', [/* parameter description */
					[/* text */ 't', `the mapping function to compute a value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.ConcurrentModificationException', [/* throw description */
					[/* text */ 't', `if it is detected that the
 mapping function modified this map`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the current (existing or computed) value associated with
         the specified key, or null if the computed value is null`]
			]
		]],
		[/* method */ 'computeIfPresent(java.lang.Object,java.util.function.BiFunction)', [
			[/* method description */
				[/* text */ 't', `If the value for the specified key is present and non-null, attempts to
 compute a new mapping given the key and its current mapped value.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the remapping function returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, the mapping is removed.
 If the remapping function itself throws an (unchecked) exception, the
 exception is rethrown, and the current mapping is left unchanged.

 `]
				]],
				[/* block */ 'b', `The remapping function should not modify this map during computation.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method will, on a best-effort basis, throw a
 `],
					[/* reference */ 'r', `java.util.ConcurrentModificationException`, `ConcurrentModificationException`],
					[/* text */ 't', ` if it is detected that the
 remapping function modifies this map during computation.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `key with which the specified value is to be associated`]
				]],
				[/* parameter */ 'remappingFunction', [/* parameter description */
					[/* text */ 't', `the remapping function to compute a value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.ConcurrentModificationException', [/* throw description */
					[/* text */ 't', `if it is detected that the
 remapping function modified this map`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the new value associated with the specified key, or null if none`]
			]
		]],
		[/* method */ 'get(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the value to which the specified key is mapped,
 or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this map contains no mapping for the key.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `More formally, if this map contains a mapping from a key
 `],
					[/* inline code block */ 'i', `k`],
					[/* text */ 't', ` to a value `],
					[/* inline code block */ 'i', `v`],
					[/* text */ 't', ` such that `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', ` compares
 equal to `],
					[/* inline code block */ 'i', `k`],
					[/* text */ 't', ` according to the map's ordering, then this
 method returns `],
					[/* inline code block */ 'i', `v`],
					[/* text */ 't', `; otherwise it returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.
 (There can be at most one such mapping.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `A return value of `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` does not `],
					[/* text */ 't', `necessarily`],
					[/* text */ 't', `
 indicate that the map contains no mapping for the key; it's also
 possible that the map explicitly maps the key to `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.
 The `],
					[/* reference */ 'r', `#containsKey(java.lang.Object)`, `containsKey`],
					[/* text */ 't', ` operation may be used to
 distinguish these two cases.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key whose associated value is to be returned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the specified key cannot be compared
         with the keys currently in the map`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null
         and this map uses natural ordering, or its comparator
         does not permit null keys`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value to which the specified key is mapped, or
         `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this map contains no mapping for the key`]
			]
		]],
		[/* method */ 'merge(java.lang.Object,java.lang.Object,java.util.function.BiFunction)', [
			[/* method description */
				[/* text */ 't', `If the specified key is not already associated with a value or is
 associated with null, associates it with the given non-null value.
 Otherwise, replaces the associated value with the results of the given
 remapping function, or removes if the result is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `. This
 method may be of use when combining multiple mapped values for a key.
 For example, to either create or append a `],
				[/* inline code block */ 'i', `String msg`],
				[/* text */ 't', ` to a
 value mapping:

 `],
				[/* code block */ 'c', [
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `map.merge(key, msg, String::concat)`]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the remapping function returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, the mapping is removed.
 If the remapping function itself throws an (unchecked) exception, the
 exception is rethrown, and the current mapping is left unchanged.

 `]
				]],
				[/* block */ 'b', `The remapping function should not modify this map during computation.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method will, on a best-effort basis, throw a
 `],
					[/* reference */ 'r', `java.util.ConcurrentModificationException`, `ConcurrentModificationException`],
					[/* text */ 't', ` if it is detected that the
 remapping function modifies this map during computation.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `key with which the resulting value is to be associated`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the non-null value to be merged with the existing value
        associated with the key or, if no existing value or a null value
        is associated with the key, to be associated with the key`]
				]],
				[/* parameter */ 'remappingFunction', [/* parameter description */
					[/* text */ 't', `the remapping function to recompute a value if
        present`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.ConcurrentModificationException', [/* throw description */
					[/* text */ 't', `if it is detected that the
 remapping function modified this map`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the new value associated with the specified key, or null if no
         value is associated with the key`]
			]
		]],
		[/* method */ 'put(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Associates the specified value with the specified key in this map.
 If the map previously contained a mapping for the key, the old
 value is replaced.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `key with which the specified value is to be associated`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `value to be associated with the specified key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the specified key cannot be compared
         with the keys currently in the map`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null
         and this map uses natural ordering, or its comparator
         does not permit null keys`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the previous value associated with `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', `, or
         `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there was no mapping for `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', `.
         (A `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` return can also indicate that the map
         previously associated `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` with `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', `.)`]
			]
		]],
		[/* method */ 'putIfAbsent(java.lang.Object,java.lang.Object)', UDF],
		[/* method */ 'remove(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the mapping for this key from this TreeMap if present.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `key for which mapping should be removed`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the specified key cannot be compared
         with the keys currently in the map`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null
         and this map uses natural ordering, or its comparator
         does not permit null keys`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the previous value associated with `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', `, or
         `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there was no mapping for `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', `.
         (A `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` return can also indicate that the map
         previously associated `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` with `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', `.)`]
			]
		]],
		[/* method */ 'replace(java.lang.Object,java.lang.Object)', UDF],
		[/* method */ 'clear()', [
			[/* method description */
				[/* text */ 't', `Removes all of the mappings from this map.
 The map will be empty after this call returns.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'forEach(java.util.function.BiConsumer)', UDF],
		[/* method */ 'putAll(java.util.Map)', [
			[/* method description */
				[/* text */ 't', `Copies all of the mappings from the specified map to this map.
 These mappings replace any mappings that this map had for any
 of the keys currently in the specified map.`]
			],
			[/* parameters */
				[/* parameter */ 'map', [/* parameter description */
					[/* text */ 't', `mappings to be stored in this map`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of a key or value in
         the specified map prevents it from being stored in this map`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified map is null or
         the specified map contains a null key and this map does not
         permit null keys`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'replaceAll(java.util.function.BiFunction)', UDF]
	],
]);
