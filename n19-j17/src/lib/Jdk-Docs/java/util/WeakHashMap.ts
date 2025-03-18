import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.WeakHashMap', [
	[/* class description */
		[/* text */ 't', `Hash table based implementation of the `],
		[/* inline code block */ 'i', `Map`],
		[/* text */ 't', ` interface, with
 `],
		[/* text */ 't', `weak keys`],
		[/* text */ 't', `.
 An entry in a `],
		[/* inline code block */ 'i', `WeakHashMap`],
		[/* text */ 't', ` will automatically be removed when
 its key is no longer in ordinary use.  More precisely, the presence of a
 mapping for a given key will not prevent the key from being discarded by the
 garbage collector, that is, made finalizable, finalized, and then reclaimed.
 When a key has been discarded its entry is effectively removed from the map,
 so this class behaves somewhat differently from other `],
		[/* inline code block */ 'i', `Map`],
		[/* text */ 't', `
 implementations.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Both null values and the null key are supported. This class has
 performance characteristics similar to those of the `],
			[/* inline code block */ 'i', `HashMap`],
			[/* text */ 't', `
 class, and has the same efficiency parameters of `],
			[/* text */ 't', `initial capacity`],
			[/* text */ 't', `
 and `],
			[/* text */ 't', `load factor`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Like most collection classes, this class is not synchronized.
 A synchronized `],
			[/* inline code block */ 'i', `WeakHashMap`],
			[/* text */ 't', ` may be constructed using the
 `],
			[/* reference */ 'r', `java.util.Collections#synchronizedMap(java.util.Map)`, `Collections.synchronizedMap`],
			[/* text */ 't', `
 method.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` This class is intended primarily for use with key objects whose
 `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', ` methods test for object identity using the
 `],
			[/* inline code block */ 'i', `==`],
			[/* text */ 't', ` operator.  Once such a key is discarded it can never be
 recreated, so it is impossible to do a lookup of that key in a
 `],
			[/* inline code block */ 'i', `WeakHashMap`],
			[/* text */ 't', ` at some later time and be surprised that its entry
 has been removed.  This class will work perfectly well with key objects
 whose `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', ` methods are not based upon object identity, such
 as `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` instances.  With such recreatable key objects,
 however, the automatic removal of `],
			[/* inline code block */ 'i', `WeakHashMap`],
			[/* text */ 't', ` entries whose
 keys have been discarded may prove to be confusing.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The behavior of the `],
			[/* inline code block */ 'i', `WeakHashMap`],
			[/* text */ 't', ` class depends in part upon
 the actions of the garbage collector, so several familiar (though not
 required) `],
			[/* inline code block */ 'i', `Map`],
			[/* text */ 't', ` invariants do not hold for this class.  Because
 the garbage collector may discard keys at any time, a
 `],
			[/* inline code block */ 'i', `WeakHashMap`],
			[/* text */ 't', ` may behave as though an unknown thread is silently
 removing entries.  In particular, even if you synchronize on a
 `],
			[/* inline code block */ 'i', `WeakHashMap`],
			[/* text */ 't', ` instance and invoke none of its mutator methods, it
 is possible for the `],
			[/* inline code block */ 'i', `size`],
			[/* text */ 't', ` method to return smaller values over
 time, for the `],
			[/* inline code block */ 'i', `isEmpty`],
			[/* text */ 't', ` method to return `],
			[/* inline code block */ 'i', `false`],
			[/* text */ 't', ` and
 then `],
			[/* inline code block */ 'i', `true`],
			[/* text */ 't', `, for the `],
			[/* inline code block */ 'i', `containsKey`],
			[/* text */ 't', ` method to return
 `],
			[/* inline code block */ 'i', `true`],
			[/* text */ 't', ` and later `],
			[/* inline code block */ 'i', `false`],
			[/* text */ 't', ` for a given key, for the
 `],
			[/* inline code block */ 'i', `get`],
			[/* text */ 't', ` method to return a value for a given key but later return
 `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', `, for the `],
			[/* inline code block */ 'i', `put`],
			[/* text */ 't', ` method to return
 `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` and the `],
			[/* inline code block */ 'i', `remove`],
			[/* text */ 't', ` method to return
 `],
			[/* inline code block */ 'i', `false`],
			[/* text */ 't', ` for a key that previously appeared to be in the map, and
 for successive examinations of the key set, the value collection, and
 the entry set to yield successively smaller numbers of elements.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Each key object in a `],
			[/* inline code block */ 'i', `WeakHashMap`],
			[/* text */ 't', ` is stored indirectly as
 the referent of a weak reference.  Therefore a key will automatically be
 removed only after the weak references to it, both inside and outside of the
 map, have been cleared by the garbage collector.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` `],
			[/* text */ 't', `Implementation note:`],
			[/* text */ 't', ` The value objects in a
 `],
			[/* inline code block */ 'i', `WeakHashMap`],
			[/* text */ 't', ` are held by ordinary strong references.  Thus care
 should be taken to ensure that value objects do not strongly refer to their
 own keys, either directly or indirectly, since that will prevent the keys
 from being discarded.  Note that a value object may refer indirectly to its
 key via the `],
			[/* inline code block */ 'i', `WeakHashMap`],
			[/* text */ 't', ` itself; that is, a value object may
 strongly refer to some other key object whose associated value object, in
 turn, strongly refers to the key of the first value object.  If the values
 in the map do not rely on the map holding strong references to them, one way
 to deal with this is to wrap values themselves within
 `],
			[/* inline code block */ 'i', `WeakReferences`],
			[/* text */ 't', ` before
 inserting, as in: `],
			[/* inline code block */ 'i', `m.put(key, new WeakReference(value))`],
			[/* text */ 't', `,
 and then unwrapping upon each `],
			[/* inline code block */ 'i', `get`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The iterators returned by the `],
			[/* inline code block */ 'i', `iterator`],
			[/* text */ 't', ` method of the collections
 returned by all of this class's "collection view methods" are
 `],
			[/* text */ 't', `fail-fast`],
			[/* text */ 't', `: if the map is structurally modified at any time after the
 iterator is created, in any way except through the iterator's own
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
 exception for its correctness:  `],
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
				[/* text */ 't', `Constructs a new, empty `],
				[/* inline code block */ 'i', `WeakHashMap`],
				[/* text */ 't', ` with the default initial
 capacity (16) and load factor (0.75).`]
			],
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new, empty `],
				[/* inline code block */ 'i', `WeakHashMap`],
				[/* text */ 't', ` with the given initial
 capacity and the default load factor (0.75).`]
			],
			[/* parameters */
				[/* parameter */ 'initialCapacity', [/* parameter description */
					[/* text */ 't', `The initial capacity of the `],
					[/* inline code block */ 'i', `WeakHashMap`]
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
				[/* text */ 't', `Constructs a new, empty `],
				[/* inline code block */ 'i', `WeakHashMap`],
				[/* text */ 't', ` with the given initial
 capacity and the given load factor.`]
			],
			[/* parameters */
				[/* parameter */ 'initialCapacity', [/* parameter description */
					[/* text */ 't', `The initial capacity of the `],
					[/* inline code block */ 'i', `WeakHashMap`]
				]],
				[/* parameter */ 'loadFactor', [/* parameter description */
					[/* text */ 't', `The load factor of the `],
					[/* inline code block */ 'i', `WeakHashMap`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the initial capacity is negative,
         or if the load factor is nonpositive.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.util.Map)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `WeakHashMap`],
				[/* text */ 't', ` with the same mappings as the
 specified map.  The `],
				[/* inline code block */ 'i', `WeakHashMap`],
				[/* text */ 't', ` is created with the default
 load factor (0.75) and an initial capacity sufficient to hold the
 mappings in the specified map.`]
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
				[/* text */ 't', ` if there is a mapping for `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', `;
         `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
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
				[/* text */ 't', ` if this map contains no key-value mappings.
 This result is a snapshot, and may not reflect unprocessed
 entries that will be removed before next attempted access
 because they are no longer referenced.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this map contains no key-value mappings`]
			]
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the number of key-value mappings in this map.
 This result is a snapshot, and may not reflect unprocessed
 entries that will be removed before next attempted access
 because they are no longer referenced.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the number of key-value mappings in this map`]
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
				[/* text */ 't', `a collection view of the values contained in this map`]
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
					[/* text */ 't', ` such that
 `],
					[/* inline code block */ 'i', `Objects.equals(key, k)`],
					[/* text */ 't', `,
 then this method returns `],
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
		[/* method */ 'put(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Associates the specified value with the specified key in this map.
 If the map previously contained a mapping for this key, the old
 value is replaced.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `key with which the specified value is to be associated.`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `value to be associated with the specified key.`]
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
		[/* method */ 'remove(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the mapping for a key from this weak hash map if it is present.
 More formally, if this map contains a mapping from key `],
				[/* inline code block */ 'i', `k`],
				[/* text */ 't', ` to
 value `],
				[/* inline code block */ 'i', `v`],
				[/* text */ 't', ` such that `],
				[/* inline code block */ 'i', `(key==null ? k==null : key.equals(k))`],
				[/* text */ 't', `, that mapping is removed.  (The map can contain
 at most one such mapping.)

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Returns the value to which this map previously associated the key,
 or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if the map contained no mapping for the key.  A
 return value of `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` does not `],
					[/* text */ 't', `necessarily`],
					[/* text */ 't', ` indicate
 that the map contained no mapping for the key; it's also possible
 that the map explicitly mapped the key to `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', `The map will not contain a mapping for the specified key once the
 call returns.`]
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
				[/* inline code block */ 'i', `key`]
			]
		]],
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
 These mappings will replace any mappings that this map had for any
 of the keys currently in the specified map.`]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `mappings to be stored in this map.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified map is null.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'replaceAll(java.util.function.BiFunction)', UDF]
	],
	/* enum values */ UDF
]);
