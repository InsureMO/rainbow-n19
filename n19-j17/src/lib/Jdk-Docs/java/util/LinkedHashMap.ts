import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.LinkedHashMap', [
	[/* class description */
		[/* block */ 'b', [
			[/* text */ 't', `Hash table and linked list implementation of the `],
			[/* inline code block */ 'i', `Map`],
			[/* text */ 't', ` interface,
 with predictable iteration order.  This implementation differs from
 `],
			[/* inline code block */ 'i', `HashMap`],
			[/* text */ 't', ` in that it maintains a doubly-linked list running through
 all of its entries.  This linked list defines the iteration ordering,
 which is normally the order in which keys were inserted into the map
 (`],
			[/* text */ 't', `insertion-order`],
			[/* text */ 't', `).  Note that insertion order is not affected
 if a key is `],
			[/* text */ 't', `re-inserted`],
			[/* text */ 't', ` into the map.  (A key `],
			[/* inline code block */ 'i', `k`],
			[/* text */ 't', ` is
 reinserted into a map `],
			[/* inline code block */ 'i', `m`],
			[/* text */ 't', ` if `],
			[/* inline code block */ 'i', `m.put(k, v)`],
			[/* text */ 't', ` is invoked when
 `],
			[/* inline code block */ 'i', `m.containsKey(k)`],
			[/* text */ 't', ` would return `],
			[/* inline code block */ 'i', `true`],
			[/* text */ 't', ` immediately prior to
 the invocation.)

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This implementation spares its clients from the unspecified, generally
 chaotic ordering provided by `],
			[/* reference */ 'r', `java.util.HashMap`, `HashMap`],
			[/* text */ 't', ` (and `],
			[/* reference */ 'r', `java.util.Hashtable`, `Hashtable`],
			[/* text */ 't', `),
 without incurring the increased cost associated with `],
			[/* reference */ 'r', `java.util.TreeMap`, `TreeMap`],
			[/* text */ 't', `.  It
 can be used to produce a copy of a map that has the same order as the
 original, regardless of the original map's implementation:
 `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `void foo(Map<String, Integer> m) {
         Map<String, Integer> copy = new LinkedHashMap<>(m);
         ...
     }`]
		]],
		[/* text */ 't', `
 This technique is particularly useful if a module takes a map on input,
 copies it, and later returns results whose order is determined by that of
 the copy.  (Clients generally appreciate having things returned in the same
 order they were presented.)

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `A special `],
			[/* reference */ 'r', `#%3Cinit%3E(int,float,boolean)`, `constructor`],
			[/* text */ 't', ` is
 provided to create a linked hash map whose order of iteration is the order
 in which its entries were last accessed, from least-recently accessed to
 most-recently (`],
			[/* text */ 't', `access-order`],
			[/* text */ 't', `).  This kind of map is well-suited to
 building LRU caches.  Invoking the `],
			[/* inline code block */ 'i', `put`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `putIfAbsent`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `get`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `getOrDefault`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `compute`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `computeIfAbsent`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `computeIfPresent`],
			[/* text */ 't', `, or `],
			[/* inline code block */ 'i', `merge`],
			[/* text */ 't', ` methods results
 in an access to the corresponding entry (assuming it exists after the
 invocation completes). The `],
			[/* inline code block */ 'i', `replace`],
			[/* text */ 't', ` methods only result in an access
 of the entry if the value is replaced.  The `],
			[/* inline code block */ 'i', `putAll`],
			[/* text */ 't', ` method generates one
 entry access for each mapping in the specified map, in the order that
 key-value mappings are provided by the specified map's entry set iterator.
 `],
			[/* text */ 't', `No other methods generate entry accesses.`],
			[/* text */ 't', `  In particular, operations
 on collection-views do `],
			[/* text */ 't', `not`],
			[/* text */ 't', ` affect the order of iteration of the
 backing map.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* reference */ 'r', `#removeEldestEntry(java.util.Map.Entry)`, `removeEldestEntry(Map.Entry)`],
			[/* text */ 't', ` method may be overridden to
 impose a policy for removing stale mappings automatically when new mappings
 are added to the map.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This class provides all of the optional `],
			[/* inline code block */ 'i', `Map`],
			[/* text */ 't', ` operations, and
 permits null elements.  Like `],
			[/* inline code block */ 'i', `HashMap`],
			[/* text */ 't', `, it provides constant-time
 performance for the basic operations (`],
			[/* inline code block */ 'i', `add`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `contains`],
			[/* text */ 't', ` and
 `],
			[/* inline code block */ 'i', `remove`],
			[/* text */ 't', `), assuming the hash function disperses elements
 properly among the buckets.  Performance is likely to be just slightly
 below that of `],
			[/* inline code block */ 'i', `HashMap`],
			[/* text */ 't', `, due to the added expense of maintaining the
 linked list, with one exception: Iteration over the collection-views
 of a `],
			[/* inline code block */ 'i', `LinkedHashMap`],
			[/* text */ 't', ` requires time proportional to the `],
			[/* text */ 't', `size`],
			[/* text */ 't', `
 of the map, regardless of its capacity.  Iteration over a `],
			[/* inline code block */ 'i', `HashMap`],
			[/* text */ 't', `
 is likely to be more expensive, requiring time proportional to its
 `],
			[/* text */ 't', `capacity`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A linked hash map has two parameters that affect its performance:
 `],
			[/* text */ 't', `initial capacity`],
			[/* text */ 't', ` and `],
			[/* text */ 't', `load factor`],
			[/* text */ 't', `.  They are defined precisely
 as for `],
			[/* inline code block */ 'i', `HashMap`],
			[/* text */ 't', `.  Note, however, that the penalty for choosing an
 excessively high value for initial capacity is less severe for this class
 than for `],
			[/* inline code block */ 'i', `HashMap`],
			[/* text */ 't', `, as iteration times for this class are unaffected
 by capacity.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Note that this implementation is not synchronized.`],
			[/* text */ 't', `
 If multiple threads access a linked hash map concurrently, and at least
 one of the threads modifies the map structurally, it `],
			[/* text */ 't', `must`],
			[/* text */ 't', ` be
 synchronized externally.  This is typically accomplished by
 synchronizing on some object that naturally encapsulates the map.

 If no such object exists, the map should be "wrapped" using the
 `],
			[/* reference */ 'r', `java.util.Collections#synchronizedMap(java.util.Map)`, `Collections.synchronizedMap`],
			[/* text */ 't', `
 method.  This is best done at creation time, to prevent accidental
 unsynchronized access to the map:`]
		]],
		[/* code block */ 'c', `   Map m = Collections.synchronizedMap(new LinkedHashMap(...));`],
		[/* text */ 't', `

 A structural modification is any operation that adds or deletes one or more
 mappings or, in the case of access-ordered linked hash maps, affects
 iteration order.  In insertion-ordered linked hash maps, merely changing
 the value associated with a key that is already contained in the map is not
 a structural modification.  `],
		[/* inline code block */ 'i', `get`],
		[/* text */ 't', `)

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `The iterators returned by the `],
			[/* inline code block */ 'i', `iterator`],
			[/* text */ 't', ` method of the collections
 returned by all of this class's collection view methods are
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
 should be used only to detect bugs.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The spliterators returned by the spliterator method of the collections
 returned by all of this class's collection view methods are
 `],
			[/* reference */ 'r', `java.util.Spliterator#binding`, `late-binding`],
			[/* text */ 't', `,
 `],
			[/* text */ 't', `fail-fast`],
			[/* text */ 't', `, and additionally report `],
			[/* reference */ 'r', `java.util.Spliterator#ORDERED`, `Spliterator.ORDERED`],
			[/* text */ 't', `.

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
				[/* text */ 't', `Constructs an empty insertion-ordered `],
				[/* inline code block */ 'i', `LinkedHashMap`],
				[/* text */ 't', ` instance
 with the default initial capacity (16) and load factor (0.75).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an empty insertion-ordered `],
				[/* inline code block */ 'i', `LinkedHashMap`],
				[/* text */ 't', ` instance
 with the specified initial capacity and a default load factor (0.75).`]
			],
			[/* parameters */
				[/* parameter */ 'initialCapacity', [/* parameter description */
					[/* text */ 't', `the initial capacity`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the initial capacity is negative`]
				]]
			]
		]],
		[/* constructor */ '<init>(int,float)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an empty insertion-ordered `],
				[/* inline code block */ 'i', `LinkedHashMap`],
				[/* text */ 't', ` instance
 with the specified initial capacity and load factor.`]
			],
			[/* parameters */
				[/* parameter */ 'initialCapacity', [/* parameter description */
					[/* text */ 't', `the initial capacity`]
				]],
				[/* parameter */ 'loadFactor', [/* parameter description */
					[/* text */ 't', `the load factor`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the initial capacity is negative
         or the load factor is nonpositive`]
				]]
			]
		]],
		[/* constructor */ '<init>(int,float,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an empty `],
				[/* inline code block */ 'i', `LinkedHashMap`],
				[/* text */ 't', ` instance with the
 specified initial capacity, load factor and ordering mode.`]
			],
			[/* parameters */
				[/* parameter */ 'initialCapacity', [/* parameter description */
					[/* text */ 't', `the initial capacity`]
				]],
				[/* parameter */ 'loadFactor', [/* parameter description */
					[/* text */ 't', `the load factor`]
				]],
				[/* parameter */ 'accessOrder', [/* parameter description */
					[/* text */ 't', `the ordering mode - `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` for
         access-order, `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` for insertion-order`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the initial capacity is negative
         or the load factor is nonpositive`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.util.Map)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an insertion-ordered `],
				[/* inline code block */ 'i', `LinkedHashMap`],
				[/* text */ 't', ` instance with
 the same mappings as the specified map.  The `],
				[/* inline code block */ 'i', `LinkedHashMap`],
				[/* text */ 't', `
 instance is created with a default load factor (0.75) and an initial
 capacity sufficient to hold the mappings in the specified map.`]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `the map whose mappings are to be placed in this map`]
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
		[/* method */ 'removeEldestEntry(java.util.Map.Entry)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this map should remove its eldest entry.
 This method is invoked by `],
				[/* inline code block */ 'i', `put`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `putAll`],
				[/* text */ 't', ` after
 inserting a new entry into the map.  It provides the implementor
 with the opportunity to remove the eldest entry each time a new one
 is added.  This is useful if the map represents a cache: it allows
 the map to reduce memory consumption by deleting stale entries.

 `],
				[/* block */ 'b', `Sample use: this override will allow the map to grow up to 100
 entries and then delete the eldest entry each time a new entry is
 added, maintaining a steady state of 100 entries.
 `],
				[/* code block */ 'c', `     private static final int MAX_ENTRIES = 100;

     protected boolean removeEldestEntry(Map.Entry eldest) {
        return size() > MAX_ENTRIES;
     }
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `This method typically does not modify the map in any way,
 instead allowing the map to modify itself as directed by its
 return value.  It `],
					[/* text */ 't', `is`],
					[/* text */ 't', ` permitted for this method to modify
 the map directly, but if it does so, it `],
					[/* text */ 't', `must`],
					[/* text */ 't', ` return
 `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` (indicating that the map should not attempt any
 further modification).  The effects of returning `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `
 after modifying the map from within this method are unspecified.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This implementation merely returns `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` (so that this
 map acts like a normal map - the eldest element is never removed).`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'eldest', [/* parameter description */
					[/* text */ 't', `The least recently inserted entry in the map, or if
           this is an access-ordered map, the least recently accessed
           entry.  This is the entry that will be removed it this
           method returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `.  If the map was empty prior
           to the `],
					[/* inline code block */ 'i', `put`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `putAll`],
					[/* text */ 't', ` invocation resulting
           in this invocation, this will be the entry that was just
           inserted; in other words, if the map contains a single
           entry, the eldest entry is also the newest.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the eldest entry should be removed
           from the map; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if it should be retained.`]
			]
		]],
		[/* method */ 'containsValue(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this map maps one or more keys to the
 specified value.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `value whose presence in this map is to be tested`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this map maps one or more keys to the
         specified value`]
			]
		]],
		[/* method */ 'values()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Collection`, `Collection`],
				[/* text */ 't', ` view of the values contained in this map.
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
				[/* text */ 't', ` operations.
 Its `],
				[/* reference */ 'r', `java.util.Spliterator`, `Spliterator`],
				[/* text */ 't', ` typically provides faster sequential
 performance but much poorer parallel performance than that of
 `],
				[/* inline code block */ 'i', `HashMap`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a view of the values contained in this map`]
			]
		]],
		[/* method */ 'entrySet()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Set`, `Set`],
				[/* text */ 't', ` view of the mappings contained in this map.
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
				[/* text */ 't', ` operations.
 Its `],
				[/* reference */ 'r', `java.util.Spliterator`, `Spliterator`],
				[/* text */ 't', ` typically provides faster sequential
 performance but much poorer parallel performance than that of
 `],
				[/* inline code block */ 'i', `HashMap`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a set view of the mappings contained in this map`]
			]
		]],
		[/* method */ 'keySet()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Set`, `Set`],
				[/* text */ 't', ` view of the keys contained in this map.
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
 operations.
 Its `],
				[/* reference */ 'r', `java.util.Spliterator`, `Spliterator`],
				[/* text */ 't', ` typically provides faster sequential
 performance but much poorer parallel performance than that of
 `],
				[/* inline code block */ 'i', `HashMap`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a set view of the keys contained in this map`]
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
					[/* inline code block */ 'i', `(key==null ? k==null : key.equals(k))`],
					[/* text */ 't', `, then this method returns `],
					[/* inline code block */ 'i', `v`],
					[/* text */ 't', `; otherwise
 it returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.  (There can be at most one such mapping.)

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
					[/* reference */ 'r', `java.util.HashMap#containsKey(java.lang.Object)`, `containsKey`],
					[/* text */ 't', ` operation may be used to
 distinguish these two cases.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key whose associated value is to be returned`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value to which the specified key is mapped, or
         `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this map contains no mapping for the key`]
			]
		]],
		[/* method */ 'getOrDefault(java.lang.Object,java.lang.Object)', UDF],
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
		[/* method */ 'replaceAll(java.util.function.BiFunction)', UDF]
	],
]);
