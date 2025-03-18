import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.HashMap', [
	[/* class description */
		[/* text */ 't', `Hash table based implementation of the `],
		[/* inline code block */ 'i', `Map`],
		[/* text */ 't', ` interface.  This
 implementation provides all of the optional map operations, and permits
 `],
		[/* inline code block */ 'i', `null`],
		[/* text */ 't', ` values and the `],
		[/* inline code block */ 'i', `null`],
		[/* text */ 't', ` key.  (The `],
		[/* inline code block */ 'i', `HashMap`],
		[/* text */ 't', `
 class is roughly equivalent to `],
		[/* inline code block */ 'i', `Hashtable`],
		[/* text */ 't', `, except that it is
 unsynchronized and permits nulls.)  This class makes no guarantees as to
 the order of the map; in particular, it does not guarantee that the order
 will remain constant over time.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This implementation provides constant-time performance for the basic
 operations (`],
			[/* inline code block */ 'i', `get`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `put`],
			[/* text */ 't', `), assuming the hash function
 disperses the elements properly among the buckets.  Iteration over
 collection views requires time proportional to the "capacity" of the
 `],
			[/* inline code block */ 'i', `HashMap`],
			[/* text */ 't', ` instance (the number of buckets) plus its size (the number
 of key-value mappings).  Thus, it's very important not to set the initial
 capacity too high (or the load factor too low) if iteration performance is
 important.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `An instance of `],
			[/* inline code block */ 'i', `HashMap`],
			[/* text */ 't', ` has two parameters that affect its
 performance: `],
			[/* text */ 't', `initial capacity`],
			[/* text */ 't', ` and `],
			[/* text */ 't', `load factor`],
			[/* text */ 't', `.  The
 `],
			[/* text */ 't', `capacity`],
			[/* text */ 't', ` is the number of buckets in the hash table, and the initial
 capacity is simply the capacity at the time the hash table is created.  The
 `],
			[/* text */ 't', `load factor`],
			[/* text */ 't', ` is a measure of how full the hash table is allowed to
 get before its capacity is automatically increased.  When the number of
 entries in the hash table exceeds the product of the load factor and the
 current capacity, the hash table is `],
			[/* text */ 't', `rehashed`],
			[/* text */ 't', ` (that is, internal data
 structures are rebuilt) so that the hash table has approximately twice the
 number of buckets.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `As a general rule, the default load factor (.75) offers a good
 tradeoff between time and space costs.  Higher values decrease the
 space overhead but increase the lookup cost (reflected in most of
 the operations of the `],
			[/* inline code block */ 'i', `HashMap`],
			[/* text */ 't', ` class, including
 `],
			[/* inline code block */ 'i', `get`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `put`],
			[/* text */ 't', `).  The expected number of entries in
 the map and its load factor should be taken into account when
 setting its initial capacity, so as to minimize the number of
 rehash operations.  If the initial capacity is greater than the
 maximum number of entries divided by the load factor, no rehash
 operations will ever occur.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `If many mappings are to be stored in a `],
			[/* inline code block */ 'i', `HashMap`],
			[/* text */ 't', `
 instance, creating it with a sufficiently large capacity will allow
 the mappings to be stored more efficiently than letting it perform
 automatic rehashing as needed to grow the table.  Note that using
 many keys with the same `],
			[/* inline code block */ 'i', `hashCode()`],
			[/* text */ 't', ` is a sure way to slow
 down performance of any hash table. To ameliorate impact, when keys
 are `],
			[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
			[/* text */ 't', `, this class may use comparison order among
 keys to help break ties.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Note that this implementation is not synchronized.`],
			[/* text */ 't', `
 If multiple threads access a hash map concurrently, and at least one of
 the threads modifies the map structurally, it `],
			[/* text */ 't', `must`],
			[/* text */ 't', ` be
 synchronized externally.  (A structural modification is any operation
 that adds or deletes one or more mappings; merely changing the value
 associated with a key that an instance already contains is not a
 structural modification.)  This is typically accomplished by
 synchronizing on some object that naturally encapsulates the map.

 If no such object exists, the map should be "wrapped" using the
 `],
			[/* reference */ 'r', `java.util.Collections#synchronizedMap(java.util.Map)`, `Collections.synchronizedMap`],
			[/* text */ 't', `
 method.  This is best done at creation time, to prevent accidental
 unsynchronized access to the map:`]
		]],
		[/* code block */ 'c', `   Map m = Collections.synchronizedMap(new HashMap(...));`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `The iterators returned by all of this class's "collection view methods"
 are `],
			[/* text */ 't', `fail-fast`],
			[/* text */ 't', `: if the map is structurally modified at any time after
 the iterator is created, in any way except through the iterator's own
 `],
			[/* inline code block */ 'i', `remove`],
			[/* text */ 't', ` method, the iterator will throw a
 `],
			[/* reference */ 'r', `java.util.ConcurrentModificationException`, `ConcurrentModificationException`],
			[/* text */ 't', `.  Thus, in the face of concurrent
 modification, the iterator fails quickly and cleanly, rather than risking
 arbitrary, non-deterministic behavior at an undetermined time in the
 future.

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
 exception for its correctness: `],
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
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an empty `],
				[/* inline code block */ 'i', `HashMap`],
				[/* text */ 't', ` with the default initial capacity
 (16) and the default load factor (0.75).`]
			],
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an empty `],
				[/* inline code block */ 'i', `HashMap`],
				[/* text */ 't', ` with the specified initial
 capacity and the default load factor (0.75).`]
			],
			[/* parameters */
				[/* parameter */ 'initialCapacity', [/* parameter description */
					[/* text */ 't', `the initial capacity.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the initial capacity is negative.`]
				]]
			]
		]],
		[/* constructor */ '<init>(int,float)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an empty `],
				[/* inline code block */ 'i', `HashMap`],
				[/* text */ 't', ` with the specified initial
 capacity and load factor.`]
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
		[/* constructor */ '<init>(java.util.Map)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `HashMap`],
				[/* text */ 't', ` with the same mappings as the
 specified `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', `.  The `],
				[/* inline code block */ 'i', `HashMap`],
				[/* text */ 't', ` is created with
 default load factor (0.75) and an initial capacity sufficient to
 hold the mappings in the specified `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', `.`]
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
		[/* method */ 'containsKey(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this map contains a mapping for the
 specified key.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `The key whose presence in this map is to be tested`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this map contains a mapping for the specified
 key.`]
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
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this map maps one or more keys to the
         specified value`]
			]
		]],
		[/* method */ 'isEmpty()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this map contains no key-value mappings.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this map contains no key-value mappings`]
			]
		]],
		[/* method */ 'remove(java.lang.Object,java.lang.Object)', UDF],
		[/* method */ 'replace(java.lang.Object,java.lang.Object,java.lang.Object)', UDF],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the number of key-value mappings in this map.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the number of key-value mappings in this map`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Returns a shallow copy of this `],
				[/* inline code block */ 'i', `HashMap`],
				[/* text */ 't', ` instance: the keys and
 values themselves are not cloned.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a shallow copy of this map`]
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
				[/* text */ 't', ` operations.`]
			],
			/* parameters */,
			/* throws */,
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
				[/* text */ 't', ` operations.`]
			],
			/* parameters */,
			/* throws */,
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
 operations.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a set view of the keys contained in this map`]
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
			/* throws */,
			[/* return description */
				[/* text */ 't', `the value to which the specified key is mapped, or
         `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this map contains no mapping for the key`]
			]
		]],
		[/* method */ 'getOrDefault(java.lang.Object,java.lang.Object)', UDF],
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
			/* throws */,
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
				[/* text */ 't', `Removes the mapping for the specified key from this map if present.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `key whose mapping is to be removed from the map`]
				]]
			],
			/* throws */,
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
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'forEach(java.util.function.BiConsumer)', UDF],
		[/* method */ 'putAll(java.util.Map)', [
			[/* method description */
				[/* text */ 't', `Copies all of the mappings from the specified map to this map.
 These mappings will replace any mappings that this map had for
 any of the keys currently in the specified map.`]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `mappings to be stored in this map`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified map is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'replaceAll(java.util.function.BiFunction)', UDF]
	],
	/* enum values */ UDF
]);
