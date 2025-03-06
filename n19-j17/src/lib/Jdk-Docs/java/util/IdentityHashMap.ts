import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.IdentityHashMap', [
	[/* class description */
		[/* text */ 't', `This class implements the `],
		[/* inline code block */ 'i', `Map`],
		[/* text */ 't', ` interface with a hash table, using
 reference-equality in place of object-equality when comparing keys (and
 values).  In other words, in an `],
		[/* inline code block */ 'i', `IdentityHashMap`],
		[/* text */ 't', `, two keys
 `],
		[/* inline code block */ 'i', `k1`],
		[/* text */ 't', ` and `],
		[/* inline code block */ 'i', `k2`],
		[/* text */ 't', ` are considered equal if and only if
 `],
		[/* inline code block */ 'i', `(k1==k2)`],
		[/* text */ 't', `.  (In normal `],
		[/* inline code block */ 'i', `Map`],
		[/* text */ 't', ` implementations (like
 `],
		[/* inline code block */ 'i', `HashMap`],
		[/* text */ 't', `) two keys `],
		[/* inline code block */ 'i', `k1`],
		[/* text */ 't', ` and `],
		[/* inline code block */ 'i', `k2`],
		[/* text */ 't', ` are considered equal
 if and only if `],
		[/* inline code block */ 'i', `(k1==null ? k2==null : k1.equals(k2))`],
		[/* text */ 't', `.)

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This class is `],
			[/* text */ 't', `not`],
			[/* text */ 't', ` a general-purpose `],
			[/* inline code block */ 'i', `Map`],
			[/* text */ 't', `
 implementation!  While this class implements the `],
			[/* inline code block */ 'i', `Map`],
			[/* text */ 't', ` interface, it
 intentionally violates `],
			[/* inline code block */ 'i', `Map's`],
			[/* text */ 't', ` general contract, which mandates the
 use of the `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', ` method when comparing objects.  This class is
 designed for use only in the rare cases wherein reference-equality
 semantics are required.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A typical use of this class is `],
			[/* text */ 't', `topology-preserving object graph
 transformations`],
			[/* text */ 't', `, such as serialization or deep-copying.  To perform such
 a transformation, a program must maintain a "node table" that keeps track
 of all the object references that have already been processed.  The node
 table must not equate distinct objects even if they happen to be equal.
 Another typical use of this class is to maintain `],
			[/* text */ 't', `proxy objects`],
			[/* text */ 't', `.  For
 example, a debugging facility might wish to maintain a proxy object for
 each object in the program being debugged.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This class provides all of the optional map operations, and permits
 `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` values and the `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` key.  This class makes no
 guarantees as to the order of the map; in particular, it does not guarantee
 that the order will remain constant over time.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This class provides constant-time performance for the basic
 operations (`],
			[/* inline code block */ 'i', `get`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `put`],
			[/* text */ 't', `), assuming the system
 identity hash function (`],
			[/* reference */ 'r', `java.lang.System#identityHashCode(java.lang.Object)`, `System.identityHashCode(Object)`],
			[/* text */ 't', `)
 disperses elements properly among the buckets.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This class has one tuning parameter (which affects performance but not
 semantics): `],
			[/* text */ 't', `expected maximum size`],
			[/* text */ 't', `.  This parameter is the maximum
 number of key-value mappings that the map is expected to hold.  Internally,
 this parameter is used to determine the number of buckets initially
 comprising the hash table.  The precise relationship between the expected
 maximum size and the number of buckets is unspecified.

 `]
		]],
		[/* block */ 'b', `If the size of the map (the number of key-value mappings) sufficiently
 exceeds the expected maximum size, the number of buckets is increased.
 Increasing the number of buckets ("rehashing") may be fairly expensive, so
 it pays to create identity hash maps with a sufficiently large expected
 maximum size.  On the other hand, iteration over collection views requires
 time proportional to the number of buckets in the hash table, so it
 pays not to set the expected maximum size too high if you are especially
 concerned with iteration performance or memory usage.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Note that this implementation is not synchronized.`],
			[/* text */ 't', `
 If multiple threads access an identity hash map concurrently, and at
 least one of the threads modifies the map structurally, it `],
			[/* text */ 't', `must`],
			[/* text */ 't', `
 be synchronized externally.  (A structural modification is any operation
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
		[/* code block */ 'c', `   Map m = Collections.synchronizedMap(new IdentityHashMap(...));`],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `The iterators returned by the `],
			[/* inline code block */ 'i', `iterator`],
			[/* text */ 't', ` method of the
 collections returned by all of this class's "collection view
 methods" are `],
			[/* text */ 't', `fail-fast`],
			[/* text */ 't', `: if the map is structurally modified
 at any time after the iterator is created, in any way except
 through the iterator's own `],
			[/* inline code block */ 'i', `remove`],
			[/* text */ 't', ` method, the iterator
 will throw a `],
			[/* reference */ 'r', `java.util.ConcurrentModificationException`, `ConcurrentModificationException`],
			[/* text */ 't', `.  Thus, in the
 face of concurrent modification, the iterator fails quickly and
 cleanly, rather than risking arbitrary, non-deterministic behavior
 at an undetermined time in the future.

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
			[/* text */ 't', `fail-fast iterators should be used only
 to detect bugs.`]
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
				[/* text */ 't', `Constructs a new, empty identity hash map with a default expected
 maximum size (21).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new, empty map with the specified expected maximum size.
 Putting more than the expected number of key-value mappings into
 the map may cause the internal data structure to grow, which may be
 somewhat time-consuming.`]
			],
			[/* parameters */
				[/* parameter */ 'expectedMaxSize', [/* parameter description */
					[/* text */ 't', `the expected maximum size of the map`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `expectedMaxSize`],
					[/* text */ 't', ` is negative`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.util.Map)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new identity hash map containing the keys-value mappings
 in the specified map.`]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `the map whose mappings are to be placed into this map`]
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
				[/* text */ 't', `Tests whether the specified object reference is a key in this identity
 hash map.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `possible key`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the specified object reference is a key
          in this map`]
			]
		]],
		[/* method */ 'containsValue(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Tests whether the specified object reference is a value in this identity
 hash map.`]
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
         specified object reference`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares the specified object with this map for equality.  Returns
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the given object is also a map and the two maps
 represent identical object-reference mappings.  More formally, this
 map is equal to another map `],
				[/* inline code block */ 'i', `m`],
				[/* text */ 't', ` if and only if
 `],
				[/* inline code block */ 'i', `this.entrySet().equals(m.entrySet())`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Owing to the reference-equality-based semantics of this map it is
 possible that the symmetry and transitivity requirements of the
 `],
					[/* inline code block */ 'i', `Object.equals`],
					[/* text */ 't', ` contract may be violated if this map is compared
 to a normal map.  However, the `],
					[/* inline code block */ 'i', `Object.equals`],
					[/* text */ 't', ` contract is
 guaranteed to hold among `],
					[/* inline code block */ 'i', `IdentityHashMap`],
					[/* text */ 't', ` instances.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `object to be compared for equality with this map`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the specified object is equal to this map`]
			]
		]],
		[/* method */ 'isEmpty()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this identity hash map contains no key-value
 mappings.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this identity hash map contains no key-value
         mappings`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code value for this map.  The hash code of a map is
 defined to be the sum of the hash codes of each entry in the map's
 `],
				[/* inline code block */ 'i', `entrySet()`],
				[/* text */ 't', ` view.  This ensures that `],
				[/* inline code block */ 'i', `m1.equals(m2)`],
				[/* text */ 't', `
 implies that `],
				[/* inline code block */ 'i', `m1.hashCode()==m2.hashCode()`],
				[/* text */ 't', ` for any two
 `],
				[/* inline code block */ 'i', `IdentityHashMap`],
				[/* text */ 't', ` instances `],
				[/* inline code block */ 'i', `m1`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `m2`],
				[/* text */ 't', `, as
 required by the general contract of `],
				[/* reference */ 'r', `java.lang.Object#hashCode()`, `Object.hashCode()`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Owing to the reference-equality-based semantics of the
 `],
					[/* inline code block */ 'i', `Map.Entry`],
					[/* text */ 't', ` instances in the set returned by this map's
 `],
					[/* inline code block */ 'i', `entrySet`],
					[/* text */ 't', ` method, it is possible that the contractual
 requirement of `],
					[/* inline code block */ 'i', `Object.hashCode`],
					[/* text */ 't', ` mentioned in the previous
 paragraph will be violated if one of the two objects being compared is
 an `],
					[/* inline code block */ 'i', `IdentityHashMap`],
					[/* text */ 't', ` instance and the other is a normal map.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hash code value for this map`]
			]
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the number of key-value mappings in this identity hash map.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of key-value mappings in this map`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Returns a shallow copy of this identity hash map: the keys and values
 themselves are not cloned.`]
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
 The collection is backed by the map, so changes to the map are
 reflected in the collection, and vice-versa.  If the map is
 modified while an iteration over the collection is in progress,
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
				[/* text */ 't', ` methods.  It does not
 support the `],
				[/* inline code block */ 'i', `add`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `addAll`],
				[/* text */ 't', ` methods.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `While the object returned by this method implements the
 `],
					[/* inline code block */ 'i', `Collection`],
					[/* text */ 't', ` interface, it does `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` obey
 `],
					[/* inline code block */ 'i', `Collection's`],
					[/* text */ 't', ` general contract.  Like its backing map,
 the collection returned by this method defines element equality as
 reference-equality rather than object-equality.  This affects the
 behavior of its `],
					[/* inline code block */ 'i', `contains`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', ` and
 `],
					[/* inline code block */ 'i', `containsAll`],
					[/* text */ 't', ` methods.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a collection view of the values contained in this map`]
			]
		]],
		[/* method */ 'entrySet()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Set`, `Set`],
				[/* text */ 't', ` view of the mappings contained in this map.
 Each element in the returned set is a reference-equality-based
 `],
				[/* inline code block */ 'i', `Map.Entry`],
				[/* text */ 't', `.  The set is backed by the map, so changes
 to the map are reflected in the set, and vice-versa.  If the
 map is modified while an iteration over the set is in progress,
 the results of the iteration are undefined.  The set supports
 element removal, which removes the corresponding mapping from
 the map, via the `],
				[/* inline code block */ 'i', `Iterator.remove`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `Set.remove`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `removeAll`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `retainAll`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `clear`],
				[/* text */ 't', `
 methods.  It does not support the `],
				[/* inline code block */ 'i', `add`],
				[/* text */ 't', ` or
 `],
				[/* inline code block */ 'i', `addAll`],
				[/* text */ 't', ` methods.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Like the backing map, the `],
					[/* inline code block */ 'i', `Map.Entry`],
					[/* text */ 't', ` objects in the set
 returned by this method define key and value equality as
 reference-equality rather than object-equality.  This affects the
 behavior of the `],
					[/* inline code block */ 'i', `equals`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `hashCode`],
					[/* text */ 't', ` methods of these
 `],
					[/* inline code block */ 'i', `Map.Entry`],
					[/* text */ 't', ` objects.  A reference-equality based `],
					[/* inline code block */ 'i', `Map.Entry e`],
					[/* text */ 't', ` is equal to an object `],
					[/* inline code block */ 'i', `o`],
					[/* text */ 't', ` if and only if `],
					[/* inline code block */ 'i', `o`],
					[/* text */ 't', ` is a
 `],
					[/* inline code block */ 'i', `Map.Entry`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `e.getKey()==o.getKey() && e.getValue()==o.getValue()`],
					[/* text */ 't', `.  To accommodate these equals
 semantics, the `],
					[/* inline code block */ 'i', `hashCode`],
					[/* text */ 't', ` method returns
 `],
					[/* inline code block */ 'i', `System.identityHashCode(e.getKey()) ^ System.identityHashCode(e.getValue())`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Owing to the reference-equality-based semantics of the
 `],
					[/* inline code block */ 'i', `Map.Entry`],
					[/* text */ 't', ` instances in the set returned by this method,
 it is possible that the symmetry and transitivity requirements of
 the `],
					[/* reference */ 'r', `java.lang.Object#equals(java.lang.Object)`, `Object.equals(Object)`],
					[/* text */ 't', ` contract may be violated if any of
 the entries in the set is compared to a normal map entry, or if
 the set returned by this method is compared to a set of normal map
 entries (such as would be returned by a call to this method on a normal
 map).  However, the `],
					[/* inline code block */ 'i', `Object.equals`],
					[/* text */ 't', ` contract is guaranteed to
 hold among identity-based map entries, and among sets of such entries.
 `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a set view of the identity-mappings contained in this map`]
			]
		]],
		[/* method */ 'keySet()', [
			[/* method description */
				[/* text */ 't', `Returns an identity-based set view of the keys contained in this map.
 The set is backed by the map, so changes to the map are reflected in
 the set, and vice-versa.  If the map is modified while an iteration
 over the set is in progress, the results of the iteration are
 undefined.  The set supports element removal, which removes the
 corresponding mapping from the map, via the `],
				[/* inline code block */ 'i', `Iterator.remove`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `Set.remove`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `removeAll`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `retainAll`],
				[/* text */ 't', `, and
 `],
				[/* inline code block */ 'i', `clear`],
				[/* text */ 't', ` methods.  It does not support the `],
				[/* inline code block */ 'i', `add`],
				[/* text */ 't', ` or
 `],
				[/* inline code block */ 'i', `addAll`],
				[/* text */ 't', ` methods.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `While the object returned by this method implements the
 `],
					[/* inline code block */ 'i', `Set`],
					[/* text */ 't', ` interface, it does `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` obey `],
					[/* inline code block */ 'i', `Set's`],
					[/* text */ 't', ` general
 contract.  Like its backing map, the set returned by this method
 defines element equality as reference-equality rather than
 object-equality.  This affects the behavior of its `],
					[/* inline code block */ 'i', `contains`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `containsAll`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `equals`],
					[/* text */ 't', `, and
 `],
					[/* inline code block */ 'i', `hashCode`],
					[/* text */ 't', ` methods.`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `equals`],
					[/* text */ 't', ` method of the returned set returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `
 only if the specified object is a set containing exactly the same
 object references as the returned set.  The symmetry and transitivity
 requirements of the `],
					[/* inline code block */ 'i', `Object.equals`],
					[/* text */ 't', ` contract may be violated if
 the set returned by this method is compared to a normal set.  However,
 the `],
					[/* inline code block */ 'i', `Object.equals`],
					[/* text */ 't', ` contract is guaranteed to hold among sets
 returned by this method.`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `hashCode`],
					[/* text */ 't', ` method of the returned set returns the sum of
 the `],
					[/* text */ 't', `identity hashcodes`],
					[/* text */ 't', ` of the elements in the set, rather than
 the sum of their hashcodes.  This is mandated by the change in the
 semantics of the `],
					[/* inline code block */ 'i', `equals`],
					[/* text */ 't', ` method, in order to enforce the
 general contract of the `],
					[/* inline code block */ 'i', `Object.hashCode`],
					[/* text */ 't', ` method among sets
 returned by this method.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an identity-based set view of the keys contained in this map`]
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
					[/* inline code block */ 'i', `(key == k)`],
					[/* text */ 't', `,
 then this method returns `],
					[/* inline code block */ 'i', `v`],
					[/* text */ 't', `; otherwise it returns
 `],
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
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value to which the specified key is mapped, or
         `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this map contains no mapping for the key`]
			]
		]],
		[/* method */ 'put(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Associates the specified value with the specified key in this identity
 hash map.  If the map previously contained a mapping for the key, the
 old value is replaced.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key with which the specified value is to be associated`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to be associated with the specified key`]
				]]
			],
			/* throws */ UDF,
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
				[/* text */ 't', `Removes the mapping for this key from this map if present.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `key whose mapping is to be removed from the map`]
				]]
			],
			/* throws */ UDF,
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
]);
