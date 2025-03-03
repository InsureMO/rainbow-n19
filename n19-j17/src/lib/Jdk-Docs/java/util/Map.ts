import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Map', [
	[/* class description */
		[/* text */ 't', `An object that maps keys to values.  A map cannot contain duplicate keys;
 each key can map to at most one value.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This interface takes the place of the `],
			[/* inline code block */ 'i', `Dictionary`],
			[/* text */ 't', ` class, which
 was a totally abstract class rather than an interface.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* inline code block */ 'i', `Map`],
			[/* text */ 't', ` interface provides three `],
			[/* text */ 't', `collection views`],
			[/* text */ 't', `, which
 allow a map's contents to be viewed as a set of keys, collection of values,
 or set of key-value mappings.  The `],
			[/* text */ 't', `order`],
			[/* text */ 't', ` of a map is defined as
 the order in which the iterators on the map's collection views return their
 elements.  Some map implementations, like the `],
			[/* inline code block */ 'i', `TreeMap`],
			[/* text */ 't', ` class, make
 specific guarantees as to their order; others, like the `],
			[/* inline code block */ 'i', `HashMap`],
			[/* text */ 't', `
 class, do not.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Note: great care must be exercised if mutable objects are used as map
 keys.  The behavior of a map is not specified if the value of an object is
 changed in a manner that affects `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', ` comparisons while the
 object is a key in the map.  A special case of this prohibition is that it
 is not permissible for a map to contain itself as a key.  While it is
 permissible for a map to contain itself as a value, extreme caution is
 advised: the `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `hashCode`],
			[/* text */ 't', ` methods are no longer
 well defined on such a map.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `All general-purpose map implementation classes should provide two
 "standard" constructors: a void (no arguments) constructor which creates an
 empty map, and a constructor with a single argument of type `],
			[/* inline code block */ 'i', `Map`],
			[/* text */ 't', `,
 which creates a new map with the same key-value mappings as its argument.
 In effect, the latter constructor allows the user to copy any map,
 producing an equivalent map of the desired class.  There is no way to
 enforce this recommendation (as interfaces cannot contain constructors) but
 all of the general-purpose map implementations in the JDK comply.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The "destructive" methods contained in this interface, that is, the
 methods that modify the map on which they operate, are specified to throw
 `],
			[/* inline code block */ 'i', `UnsupportedOperationException`],
			[/* text */ 't', ` if this map does not support the
 operation.  If this is the case, these methods may, but are not required
 to, throw an `],
			[/* inline code block */ 'i', `UnsupportedOperationException`],
			[/* text */ 't', ` if the invocation would
 have no effect on the map.  For example, invoking the `],
			[/* reference */ 'r', `#putAll(java.util.Map)`, `putAll(Map)`],
			[/* text */ 't', `
 method on an unmodifiable map may, but is not required to, throw the
 exception if the map whose mappings are to be "superimposed" is empty.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Some map implementations have restrictions on the keys and values they
 may contain.  For example, some implementations prohibit null keys and
 values, and some have restrictions on the types of their keys.  Attempting
 to insert an ineligible key or value throws an unchecked exception,
 typically `],
			[/* inline code block */ 'i', `NullPointerException`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `ClassCastException`],
			[/* text */ 't', `.
 Attempting to query the presence of an ineligible key or value may throw an
 exception, or it may simply return false; some implementations will exhibit
 the former behavior and some will exhibit the latter.  More generally,
 attempting an operation on an ineligible key or value whose completion
 would not result in the insertion of an ineligible element into the map may
 throw an exception or it may succeed, at the option of the implementation.
 Such exceptions are marked as "optional" in the specification for this
 interface.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Many methods in Collections Framework interfaces are defined
 in terms of the `],
			[/* reference */ 'r', `java.Object#equals(java.lang.Object)`],
			[/* text */ 't', ` method.  For
 example, the specification for the `],
			[/* reference */ 'r', `#containsKey(java.lang.Object)`, `containsKey(Object key)`],
			[/* text */ 't', ` method says: "returns `],
			[/* inline code block */ 'i', `true`],
			[/* text */ 't', ` if and
 only if this map contains a mapping for a key `],
			[/* inline code block */ 'i', `k`],
			[/* text */ 't', ` such that
 `],
			[/* inline code block */ 'i', `(key==null ? k==null : key.equals(k))`],
			[/* text */ 't', `." This specification should
 `],
			[/* text */ 't', `not`],
			[/* text */ 't', ` be construed to imply that invoking `],
			[/* inline code block */ 'i', `Map.containsKey`],
			[/* text */ 't', `
 with a non-null argument `],
			[/* inline code block */ 'i', `key`],
			[/* text */ 't', ` will cause `],
			[/* inline code block */ 'i', `key.equals(k)`],
			[/* text */ 't', ` to
 be invoked for any key `],
			[/* inline code block */ 'i', `k`],
			[/* text */ 't', `.  Implementations are free to
 implement optimizations whereby the `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', ` invocation is avoided,
 for example, by first comparing the hash codes of the two keys.  (The
 `],
			[/* reference */ 'r', `java.Object#hashCode()`],
			[/* text */ 't', ` specification guarantees that two objects with
 unequal hash codes cannot be equal.)  More generally, implementations of
 the various Collections Framework interfaces are free to take advantage of
 the specified behavior of underlying `],
			[/* reference */ 'r', `java.lang.Object`],
			[/* text */ 't', ` methods wherever the
 implementor deems it appropriate.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Some map operations which perform recursive traversal of the map may fail
 with an exception for self-referential instances where the map directly or
 indirectly contains itself. This includes the `],
			[/* inline code block */ 'i', `clone()`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `equals()`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `hashCode()`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `toString()`],
			[/* text */ 't', ` methods.
 Implementations may optionally handle the self-referential scenario, however
 most current implementations do not do so.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Unmodifiable Maps`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* reference */ 'r', `#of()`, `Map.of`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#ofEntries(java.util.Map.Entry...)`, `Map.ofEntries`],
			[/* text */ 't', `, and
 `],
			[/* reference */ 'r', `#copyOf(java.util.Map)`, `Map.copyOf`],
			[/* text */ 't', `
 static factory methods provide a convenient way to create unmodifiable maps.
 The `],
			[/* inline code block */ 'i', `Map`],
			[/* text */ 't', `
 instances created by these methods have the following characteristics:

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `They are `],
				[/* reference */ 'r', `.Collection#unmodifiable`],
				[/* text */ 't', `. Keys and values
 cannot be added, removed, or updated. Calling any mutator method on the Map
 will always cause `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', ` to be thrown.
 However, if the contained keys or values are themselves mutable, this may cause the
 Map to behave inconsistently or its contents to appear to change.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `They disallow `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` keys and values. Attempts to create them with
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` keys or values result in `],
				[/* inline code block */ 'i', `NullPointerException`],
				[/* text */ 't', `.
 `]
			]],
			[/* block */ 'b', `They are serializable if all keys and values are serializable.
 `],
			[/* block */ 'b', [
				[/* text */ 't', `They reject duplicate keys at creation time. Duplicate keys
 passed to a static factory method result in `],
				[/* inline code block */ 'i', `IllegalArgumentException`],
				[/* text */ 't', `.
 `]
			]],
			[/* block */ 'b', `The iteration order of mappings is unspecified and is subject to change.
 `],
			[/* block */ 'b', [
				[/* text */ 't', `They are `],
				[/* text */ 't', `value-based`],
				[/* text */ 't', `.
 Programmers should treat instances that are `],
				[/* reference */ 'r', `#equals(java.lang.Object)`, `equal`],
				[/* text */ 't', `
 as interchangeable and should not use them for synchronization, or
 unpredictable behavior may occur. For example, in a future release,
 synchronization may fail. Callers should make no assumptions
 about the identity of the returned instances. Factories are free to
 create new instances or reuse existing ones.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `They are serialized as specified on the
 `],
				[/* text */ 't', `Serialized Form`],
				[/* text */ 't', `
 page.
 `]
			]]
		]],
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
		[/* method */ 'remove(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the mapping for a key from this map if it is present
 (optional operation).   More formally, if this map contains a mapping
 from key `],
				[/* inline code block */ 'i', `k`],
				[/* text */ 't', ` to value `],
				[/* inline code block */ 'i', `v`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `Objects.equals(key, k)`],
				[/* text */ 't', `, that mapping
 is removed.  (The map can contain at most one such mapping.)

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Returns the value to which this map previously associated the key,
 or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if the map contained no mapping for the key.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If this map permits null values, then a return value of
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` does not `],
					[/* text */ 't', `necessarily`],
					[/* text */ 't', ` indicate that the map
 contained no mapping for the key; it's also possible that the map
 explicitly mapped the key to `],
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
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', ` operation
         is not supported by this map`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the key is of an inappropriate type for
         this map
 (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null and this
         map does not permit null keys
 (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
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
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'remove(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the entry for the specified key only if it is currently
 mapped to the specified value.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `key with which the specified value is associated`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `value expected to be associated with the specified key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `remove`],
					[/* text */ 't', ` operation
         is not supported by this map
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the key or value is of an inappropriate
         type for this map
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key or value is null,
         and this map does not permit null keys or values
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the value was removed`]
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
					[/* text */ 't', `If this map permits null values, then a return value of
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` does not `],
					[/* text */ 't', `necessarily`],
					[/* text */ 't', ` indicate that the map
 contains no mapping for the key; it's also possible that the map
 explicitly maps the key to `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.  The `],
					[/* reference */ 'r', `#containsKey(java.lang.Object)`, `containsKey`],
					[/* text */ 't', ` operation may be used to distinguish these two cases.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key whose associated value is to be returned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the key is of an inappropriate type for
         this map
 (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null and this map
         does not permit null keys
 (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value to which the specified key is mapped, or
         `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this map contains no mapping for the key`]
			]
		]],
		[/* method */ 'put(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Associates the specified value with the specified key in this map
 (optional operation).  If the map previously contained a mapping for
 the key, the old value is replaced by the specified value.  (A map
 `],
				[/* inline code block */ 'i', `m`],
				[/* text */ 't', ` is said to contain a mapping for a key `],
				[/* inline code block */ 'i', `k`],
				[/* text */ 't', ` if and only
 if `],
				[/* reference */ 'r', `#containsKey(java.lang.Object)`, `m.containsKey(k)`],
				[/* text */ 't', ` would return
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `.)`]
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
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `put`],
					[/* text */ 't', ` operation
         is not supported by this map`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified key or value
         prevents it from being stored in this map`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key or value is null
         and this map does not permit null keys or values`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of the specified key
         or value prevents it from being stored in this map`]
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
				[/* text */ 't', `,
         if the implementation supports `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` values.)`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares the specified object with this map for equality.  Returns
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the given object is also a map and the two maps
 represent the same mappings.  More formally, two maps `],
				[/* inline code block */ 'i', `m1`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `m2`],
				[/* text */ 't', ` represent the same mappings if
 `],
				[/* inline code block */ 'i', `m1.entrySet().equals(m2.entrySet())`],
				[/* text */ 't', `.  This ensures that the
 `],
				[/* inline code block */ 'i', `equals`],
				[/* text */ 't', ` method works properly across different implementations
 of the `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', ` interface.`]
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
		[/* method */ 'values()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Collection`],
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
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a collection view of the values contained in this map`]
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
				[/* text */ 't', ` for any two maps
 `],
				[/* inline code block */ 'i', `m1`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `m2`],
				[/* text */ 't', `, as required by the general contract of
 `],
				[/* reference */ 'r', `java.Object#hashCode()`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hash code value for this map`]
			]
		]],
		[/* method */ 'copyOf(java.util.Map)', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* text */ 't', `unmodifiable Map`],
				[/* text */ 't', ` containing the entries
 of the given Map. The given Map must not be null, and it must not contain any
 null keys or values. If the given Map is subsequently modified, the returned
 Map will not reflect such modifications.`]
			],
			[/* parameters */
				[/* parameter */ 'map', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `Map`],
					[/* text */ 't', ` from which entries are drawn, must be non-null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if map is null, or if it contains any null keys or values`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', ` containing the entries of the given `],
				[/* inline code block */ 'i', `Map`]
			]
		]],
		[/* method */ 'clear()', [
			[/* method description */
				[/* text */ 't', `Removes all of the mappings from this map (optional operation).
 The map will be empty after this call returns.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `clear`],
					[/* text */ 't', ` operation
         is not supported by this map`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'isEmpty()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this map contains no key-value mappings.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this map contains no key-value mappings`]
			]
		]],
		[/* method */ 'replace(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Replaces the entry for the specified key only if it is
 currently mapped to some value.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `key with which the specified value is associated`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `value to be associated with the specified key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `put`],
					[/* text */ 't', ` operation
         is not supported by this map
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified key or value
         prevents it from being stored in this map
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key or value is null,
         and this map does not permit null keys or values`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of the specified key
         or value prevents it from being stored in this map`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the previous value associated with the specified key, or
         `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there was no mapping for the key.
         (A `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` return can also indicate that the map
         previously associated `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` with the key,
         if the implementation supports null values.)`]
			]
		]],
		[/* method */ 'replace(java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Replaces the entry for the specified key only if currently
 mapped to the specified value.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `key with which the specified value is associated`]
				]],
				[/* parameter */ 'oldValue', [/* parameter description */
					[/* text */ 't', `value expected to be associated with the specified key`]
				]],
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `value to be associated with the specified key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `put`],
					[/* text */ 't', ` operation
         is not supported by this map
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of a specified key or value
         prevents it from being stored in this map`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if a specified key or newValue is null,
         and this map does not permit null keys or values`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if oldValue is null and this map does not
         permit null values
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of a specified key
         or value prevents it from being stored in this map`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the value was replaced`]
			]
		]],
		[/* method */ 'replaceAll(java.util.function.BiFunction)', [
			[/* method description */
				[/* text */ 't', `Replaces each entry's value with the result of invoking the given
 function on that entry until all entries have been processed or the
 function throws an exception.  Exceptions thrown by the function are
 relayed to the caller.`]
			],
			[/* parameters */
				[/* parameter */ 'function', [/* parameter description */
					[/* text */ 't', `the function to apply to each entry`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `set`],
					[/* text */ 't', ` operation
 is not supported by this map's entry set iterator.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of a replacement value
 prevents it from being stored in this map`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified function is null, or the
 specified replacement value is null, and this map does not permit null
 values`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if a replacement value is of an inappropriate
         type for this map
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if function or a replacement value is null,
         and this map does not permit null keys or values
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of a replacement value
         prevents it from being stored in this map
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.util.ConcurrentModificationException', [/* throw description */
					[/* text */ 't', `if an entry is found to be
 removed during iteration`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the number of key-value mappings in this map.  If the
 map contains more than `],
				[/* inline code block */ 'i', `Integer.MAX_VALUE`],
				[/* text */ 't', ` elements, returns
 `],
				[/* inline code block */ 'i', `Integer.MAX_VALUE`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of key-value mappings in this map`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable map containing five mappings.
 See `],
				[/* text */ 't', `Unmodifiable Maps`],
				[/* text */ 't', ` for details.`]
			],
			[/* parameters */
				[/* parameter */ 'k1', [/* parameter description */
					[/* text */ 't', `the first mapping's key`]
				]],
				[/* parameter */ 'v1', [/* parameter description */
					[/* text */ 't', `the first mapping's value`]
				]],
				[/* parameter */ 'k2', [/* parameter description */
					[/* text */ 't', `the second mapping's key`]
				]],
				[/* parameter */ 'v2', [/* parameter description */
					[/* text */ 't', `the second mapping's value`]
				]],
				[/* parameter */ 'k3', [/* parameter description */
					[/* text */ 't', `the third mapping's key`]
				]],
				[/* parameter */ 'v3', [/* parameter description */
					[/* text */ 't', `the third mapping's value`]
				]],
				[/* parameter */ 'k4', [/* parameter description */
					[/* text */ 't', `the fourth mapping's key`]
				]],
				[/* parameter */ 'v4', [/* parameter description */
					[/* text */ 't', `the fourth mapping's value`]
				]],
				[/* parameter */ 'k5', [/* parameter description */
					[/* text */ 't', `the fifth mapping's key`]
				]],
				[/* parameter */ 'v5', [/* parameter description */
					[/* text */ 't', `the fifth mapping's value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if there are any duplicate keys`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any key or value is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', ` containing the specified mappings`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable map containing four mappings.
 See `],
				[/* text */ 't', `Unmodifiable Maps`],
				[/* text */ 't', ` for details.`]
			],
			[/* parameters */
				[/* parameter */ 'k1', [/* parameter description */
					[/* text */ 't', `the first mapping's key`]
				]],
				[/* parameter */ 'v1', [/* parameter description */
					[/* text */ 't', `the first mapping's value`]
				]],
				[/* parameter */ 'k2', [/* parameter description */
					[/* text */ 't', `the second mapping's key`]
				]],
				[/* parameter */ 'v2', [/* parameter description */
					[/* text */ 't', `the second mapping's value`]
				]],
				[/* parameter */ 'k3', [/* parameter description */
					[/* text */ 't', `the third mapping's key`]
				]],
				[/* parameter */ 'v3', [/* parameter description */
					[/* text */ 't', `the third mapping's value`]
				]],
				[/* parameter */ 'k4', [/* parameter description */
					[/* text */ 't', `the fourth mapping's key`]
				]],
				[/* parameter */ 'v4', [/* parameter description */
					[/* text */ 't', `the fourth mapping's value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if there are any duplicate keys`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any key or value is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', ` containing the specified mappings`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable map containing three mappings.
 See `],
				[/* text */ 't', `Unmodifiable Maps`],
				[/* text */ 't', ` for details.`]
			],
			[/* parameters */
				[/* parameter */ 'k1', [/* parameter description */
					[/* text */ 't', `the first mapping's key`]
				]],
				[/* parameter */ 'v1', [/* parameter description */
					[/* text */ 't', `the first mapping's value`]
				]],
				[/* parameter */ 'k2', [/* parameter description */
					[/* text */ 't', `the second mapping's key`]
				]],
				[/* parameter */ 'v2', [/* parameter description */
					[/* text */ 't', `the second mapping's value`]
				]],
				[/* parameter */ 'k3', [/* parameter description */
					[/* text */ 't', `the third mapping's key`]
				]],
				[/* parameter */ 'v3', [/* parameter description */
					[/* text */ 't', `the third mapping's value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if there are any duplicate keys`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any key or value is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', ` containing the specified mappings`]
			]
		]],
		[/* method */ 'of()', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable map containing zero mappings.
 See `],
				[/* text */ 't', `Unmodifiable Maps`],
				[/* text */ 't', ` for details.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an empty `],
				[/* inline code block */ 'i', `Map`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable map containing two mappings.
 See `],
				[/* text */ 't', `Unmodifiable Maps`],
				[/* text */ 't', ` for details.`]
			],
			[/* parameters */
				[/* parameter */ 'k1', [/* parameter description */
					[/* text */ 't', `the first mapping's key`]
				]],
				[/* parameter */ 'v1', [/* parameter description */
					[/* text */ 't', `the first mapping's value`]
				]],
				[/* parameter */ 'k2', [/* parameter description */
					[/* text */ 't', `the second mapping's key`]
				]],
				[/* parameter */ 'v2', [/* parameter description */
					[/* text */ 't', `the second mapping's value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the keys are duplicates`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any key or value is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', ` containing the specified mappings`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable map containing a single mapping.
 See `],
				[/* text */ 't', `Unmodifiable Maps`],
				[/* text */ 't', ` for details.`]
			],
			[/* parameters */
				[/* parameter */ 'k1', [/* parameter description */
					[/* text */ 't', `the mapping's key`]
				]],
				[/* parameter */ 'v1', [/* parameter description */
					[/* text */ 't', `the mapping's value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the key or the value is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', ` containing the specified mapping`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable map containing ten mappings.
 See `],
				[/* text */ 't', `Unmodifiable Maps`],
				[/* text */ 't', ` for details.`]
			],
			[/* parameters */
				[/* parameter */ 'k1', [/* parameter description */
					[/* text */ 't', `the first mapping's key`]
				]],
				[/* parameter */ 'v1', [/* parameter description */
					[/* text */ 't', `the first mapping's value`]
				]],
				[/* parameter */ 'k2', [/* parameter description */
					[/* text */ 't', `the second mapping's key`]
				]],
				[/* parameter */ 'v2', [/* parameter description */
					[/* text */ 't', `the second mapping's value`]
				]],
				[/* parameter */ 'k3', [/* parameter description */
					[/* text */ 't', `the third mapping's key`]
				]],
				[/* parameter */ 'v3', [/* parameter description */
					[/* text */ 't', `the third mapping's value`]
				]],
				[/* parameter */ 'k4', [/* parameter description */
					[/* text */ 't', `the fourth mapping's key`]
				]],
				[/* parameter */ 'v4', [/* parameter description */
					[/* text */ 't', `the fourth mapping's value`]
				]],
				[/* parameter */ 'k5', [/* parameter description */
					[/* text */ 't', `the fifth mapping's key`]
				]],
				[/* parameter */ 'v5', [/* parameter description */
					[/* text */ 't', `the fifth mapping's value`]
				]],
				[/* parameter */ 'k6', [/* parameter description */
					[/* text */ 't', `the sixth mapping's key`]
				]],
				[/* parameter */ 'v6', [/* parameter description */
					[/* text */ 't', `the sixth mapping's value`]
				]],
				[/* parameter */ 'k7', [/* parameter description */
					[/* text */ 't', `the seventh mapping's key`]
				]],
				[/* parameter */ 'v7', [/* parameter description */
					[/* text */ 't', `the seventh mapping's value`]
				]],
				[/* parameter */ 'k8', [/* parameter description */
					[/* text */ 't', `the eighth mapping's key`]
				]],
				[/* parameter */ 'v8', [/* parameter description */
					[/* text */ 't', `the eighth mapping's value`]
				]],
				[/* parameter */ 'k9', [/* parameter description */
					[/* text */ 't', `the ninth mapping's key`]
				]],
				[/* parameter */ 'v9', [/* parameter description */
					[/* text */ 't', `the ninth mapping's value`]
				]],
				[/* parameter */ 'k10', [/* parameter description */
					[/* text */ 't', `the tenth mapping's key`]
				]],
				[/* parameter */ 'v10', [/* parameter description */
					[/* text */ 't', `the tenth mapping's value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if there are any duplicate keys`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any key or value is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', ` containing the specified mappings`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable map containing nine mappings.
 See `],
				[/* text */ 't', `Unmodifiable Maps`],
				[/* text */ 't', ` for details.`]
			],
			[/* parameters */
				[/* parameter */ 'k1', [/* parameter description */
					[/* text */ 't', `the first mapping's key`]
				]],
				[/* parameter */ 'v1', [/* parameter description */
					[/* text */ 't', `the first mapping's value`]
				]],
				[/* parameter */ 'k2', [/* parameter description */
					[/* text */ 't', `the second mapping's key`]
				]],
				[/* parameter */ 'v2', [/* parameter description */
					[/* text */ 't', `the second mapping's value`]
				]],
				[/* parameter */ 'k3', [/* parameter description */
					[/* text */ 't', `the third mapping's key`]
				]],
				[/* parameter */ 'v3', [/* parameter description */
					[/* text */ 't', `the third mapping's value`]
				]],
				[/* parameter */ 'k4', [/* parameter description */
					[/* text */ 't', `the fourth mapping's key`]
				]],
				[/* parameter */ 'v4', [/* parameter description */
					[/* text */ 't', `the fourth mapping's value`]
				]],
				[/* parameter */ 'k5', [/* parameter description */
					[/* text */ 't', `the fifth mapping's key`]
				]],
				[/* parameter */ 'v5', [/* parameter description */
					[/* text */ 't', `the fifth mapping's value`]
				]],
				[/* parameter */ 'k6', [/* parameter description */
					[/* text */ 't', `the sixth mapping's key`]
				]],
				[/* parameter */ 'v6', [/* parameter description */
					[/* text */ 't', `the sixth mapping's value`]
				]],
				[/* parameter */ 'k7', [/* parameter description */
					[/* text */ 't', `the seventh mapping's key`]
				]],
				[/* parameter */ 'v7', [/* parameter description */
					[/* text */ 't', `the seventh mapping's value`]
				]],
				[/* parameter */ 'k8', [/* parameter description */
					[/* text */ 't', `the eighth mapping's key`]
				]],
				[/* parameter */ 'v8', [/* parameter description */
					[/* text */ 't', `the eighth mapping's value`]
				]],
				[/* parameter */ 'k9', [/* parameter description */
					[/* text */ 't', `the ninth mapping's key`]
				]],
				[/* parameter */ 'v9', [/* parameter description */
					[/* text */ 't', `the ninth mapping's value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if there are any duplicate keys`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any key or value is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', ` containing the specified mappings`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable map containing eight mappings.
 See `],
				[/* text */ 't', `Unmodifiable Maps`],
				[/* text */ 't', ` for details.`]
			],
			[/* parameters */
				[/* parameter */ 'k1', [/* parameter description */
					[/* text */ 't', `the first mapping's key`]
				]],
				[/* parameter */ 'v1', [/* parameter description */
					[/* text */ 't', `the first mapping's value`]
				]],
				[/* parameter */ 'k2', [/* parameter description */
					[/* text */ 't', `the second mapping's key`]
				]],
				[/* parameter */ 'v2', [/* parameter description */
					[/* text */ 't', `the second mapping's value`]
				]],
				[/* parameter */ 'k3', [/* parameter description */
					[/* text */ 't', `the third mapping's key`]
				]],
				[/* parameter */ 'v3', [/* parameter description */
					[/* text */ 't', `the third mapping's value`]
				]],
				[/* parameter */ 'k4', [/* parameter description */
					[/* text */ 't', `the fourth mapping's key`]
				]],
				[/* parameter */ 'v4', [/* parameter description */
					[/* text */ 't', `the fourth mapping's value`]
				]],
				[/* parameter */ 'k5', [/* parameter description */
					[/* text */ 't', `the fifth mapping's key`]
				]],
				[/* parameter */ 'v5', [/* parameter description */
					[/* text */ 't', `the fifth mapping's value`]
				]],
				[/* parameter */ 'k6', [/* parameter description */
					[/* text */ 't', `the sixth mapping's key`]
				]],
				[/* parameter */ 'v6', [/* parameter description */
					[/* text */ 't', `the sixth mapping's value`]
				]],
				[/* parameter */ 'k7', [/* parameter description */
					[/* text */ 't', `the seventh mapping's key`]
				]],
				[/* parameter */ 'v7', [/* parameter description */
					[/* text */ 't', `the seventh mapping's value`]
				]],
				[/* parameter */ 'k8', [/* parameter description */
					[/* text */ 't', `the eighth mapping's key`]
				]],
				[/* parameter */ 'v8', [/* parameter description */
					[/* text */ 't', `the eighth mapping's value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if there are any duplicate keys`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any key or value is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', ` containing the specified mappings`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable map containing seven mappings.
 See `],
				[/* text */ 't', `Unmodifiable Maps`],
				[/* text */ 't', ` for details.`]
			],
			[/* parameters */
				[/* parameter */ 'k1', [/* parameter description */
					[/* text */ 't', `the first mapping's key`]
				]],
				[/* parameter */ 'v1', [/* parameter description */
					[/* text */ 't', `the first mapping's value`]
				]],
				[/* parameter */ 'k2', [/* parameter description */
					[/* text */ 't', `the second mapping's key`]
				]],
				[/* parameter */ 'v2', [/* parameter description */
					[/* text */ 't', `the second mapping's value`]
				]],
				[/* parameter */ 'k3', [/* parameter description */
					[/* text */ 't', `the third mapping's key`]
				]],
				[/* parameter */ 'v3', [/* parameter description */
					[/* text */ 't', `the third mapping's value`]
				]],
				[/* parameter */ 'k4', [/* parameter description */
					[/* text */ 't', `the fourth mapping's key`]
				]],
				[/* parameter */ 'v4', [/* parameter description */
					[/* text */ 't', `the fourth mapping's value`]
				]],
				[/* parameter */ 'k5', [/* parameter description */
					[/* text */ 't', `the fifth mapping's key`]
				]],
				[/* parameter */ 'v5', [/* parameter description */
					[/* text */ 't', `the fifth mapping's value`]
				]],
				[/* parameter */ 'k6', [/* parameter description */
					[/* text */ 't', `the sixth mapping's key`]
				]],
				[/* parameter */ 'v6', [/* parameter description */
					[/* text */ 't', `the sixth mapping's value`]
				]],
				[/* parameter */ 'k7', [/* parameter description */
					[/* text */ 't', `the seventh mapping's key`]
				]],
				[/* parameter */ 'v7', [/* parameter description */
					[/* text */ 't', `the seventh mapping's value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if there are any duplicate keys`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any key or value is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', ` containing the specified mappings`]
			]
		]],
		[/* method */ 'of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable map containing six mappings.
 See `],
				[/* text */ 't', `Unmodifiable Maps`],
				[/* text */ 't', ` for details.`]
			],
			[/* parameters */
				[/* parameter */ 'k1', [/* parameter description */
					[/* text */ 't', `the first mapping's key`]
				]],
				[/* parameter */ 'v1', [/* parameter description */
					[/* text */ 't', `the first mapping's value`]
				]],
				[/* parameter */ 'k2', [/* parameter description */
					[/* text */ 't', `the second mapping's key`]
				]],
				[/* parameter */ 'v2', [/* parameter description */
					[/* text */ 't', `the second mapping's value`]
				]],
				[/* parameter */ 'k3', [/* parameter description */
					[/* text */ 't', `the third mapping's key`]
				]],
				[/* parameter */ 'v3', [/* parameter description */
					[/* text */ 't', `the third mapping's value`]
				]],
				[/* parameter */ 'k4', [/* parameter description */
					[/* text */ 't', `the fourth mapping's key`]
				]],
				[/* parameter */ 'v4', [/* parameter description */
					[/* text */ 't', `the fourth mapping's value`]
				]],
				[/* parameter */ 'k5', [/* parameter description */
					[/* text */ 't', `the fifth mapping's key`]
				]],
				[/* parameter */ 'v5', [/* parameter description */
					[/* text */ 't', `the fifth mapping's value`]
				]],
				[/* parameter */ 'k6', [/* parameter description */
					[/* text */ 't', `the sixth mapping's key`]
				]],
				[/* parameter */ 'v6', [/* parameter description */
					[/* text */ 't', `the sixth mapping's value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if there are any duplicate keys`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any key or value is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', ` containing the specified mappings`]
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
					[/* inline code block */ 'i', `map.merge(key, msg, String::concat)`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the remapping function returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, the mapping is removed.
 If the remapping function itself throws an (unchecked) exception, the
 exception is rethrown, and the current mapping is left unchanged.

 `]
				]],
				[/* block */ 'b', `The remapping function should not modify this map during computation.`]
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
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `put`],
					[/* text */ 't', ` operation
         is not supported by this map
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified key or value
         prevents it from being stored in this map
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of the specified key
         or value prevents it from being stored in this map
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null and this map
         does not support null keys or the value or remappingFunction is
         null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the new value associated with the specified key, or null if no
         value is associated with the key`]
			]
		]],
		[/* method */ 'entrySet()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Set`],
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
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a set view of the mappings contained in this map`]
			]
		]],
		[/* method */ 'putAll(java.util.Map)', [
			[/* method description */
				[/* text */ 't', `Copies all of the mappings from the specified map to this map
 (optional operation).  The effect of this call is equivalent to that
 of calling `],
				[/* reference */ 'r', `#put(K,V)`, `put(k, v)`],
				[/* text */ 't', ` on this map once
 for each mapping from key `],
				[/* inline code block */ 'i', `k`],
				[/* text */ 't', ` to value `],
				[/* inline code block */ 'i', `v`],
				[/* text */ 't', ` in the
 specified map.  The behavior of this operation is undefined if the
 specified map is modified while the operation is in progress.`]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `mappings to be stored in this map`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `putAll`],
					[/* text */ 't', ` operation
         is not supported by this map`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of a key or value in the
         specified map prevents it from being stored in this map`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified map is null, or if
         this map does not permit null keys or values, and the
         specified map contains null keys or values`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of a key or value in
         the specified map prevents it from being stored in this map`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'putIfAbsent(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `If the specified key is not already associated with a value (or is mapped
 to `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `) associates it with the given value and returns
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `, else returns the current value.`]
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
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `put`],
					[/* text */ 't', ` operation
         is not supported by this map
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the key or value is of an inappropriate
         type for this map
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key or value is null,
         and this map does not permit null keys or values
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of the specified key
         or value prevents it from being stored in this map
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the previous value associated with the specified key, or
         `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there was no mapping for the key.
         (A `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` return can also indicate that the map
         previously associated `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` with the key,
         if the implementation supports null values.)`]
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
					[/* inline code block */ 'i', `map.compute(key, (k, v) -> (v == null) ? msg : v.concat(msg))`]
				]],
				[/* text */ 't', `
 (Method `],
				[/* reference */ 'r', `#merge(K,V,java.util.function.BiFunction)`, `merge()`],
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
				[/* block */ 'b', `The remapping function should not modify this map during computation.`]
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
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null and
         this map does not support null keys, or the
         remappingFunction is null`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `put`],
					[/* text */ 't', ` operation
         is not supported by this map
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified key or value
         prevents it from being stored in this map
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of the specified key
         or value prevents it from being stored in this map
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the new value associated with the specified key, or null if none`]
			]
		]],
		[/* method */ 'entry(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable `],
				[/* reference */ 'r', `java.util.Map.Entry`],
				[/* text */ 't', ` containing the given key and value.
 These entries are suitable for populating `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', ` instances using the
 `],
				[/* reference */ 'r', `#ofEntries(java.util.Map.Entry...)`, `Map.ofEntries()`],
				[/* text */ 't', ` method.
 The `],
				[/* inline code block */ 'i', `Entry`],
				[/* text */ 't', ` instances created by this method have the following characteristics:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `They disallow `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', ` keys and values. Attempts to create them using a `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `
 key or value result in `],
						[/* inline code block */ 'i', `NullPointerException`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `They are unmodifiable. Calls to `],
						[/* reference */ 'r', `.Map.Entry#setValue(V)`],
						[/* text */ 't', `
 on a returned `],
						[/* inline code block */ 'i', `Entry`],
						[/* text */ 't', ` result in `],
						[/* inline code block */ 'i', `UnsupportedOperationException`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', `They are not serializable.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `They are `],
						[/* text */ 't', `value-based`],
						[/* text */ 't', `.
 Programmers should treat instances that are `],
						[/* reference */ 'r', `#equals(java.lang.Object)`, `equal`],
						[/* text */ 't', `
 as interchangeable and should not use them for synchronization, or
 unpredictable behavior may occur. For example, in a future release,
 synchronization may fail. Callers should make no assumptions
 about the identity of the returned instances. This method is free to
 create new instances or reuse existing ones.
 `]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'k', [/* parameter description */
					[/* text */ 't', `the key`]
				]],
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `the value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the key or value is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Entry`],
				[/* text */ 't', ` containing the specified key and value`]
			]
		]],
		[/* method */ 'forEach(java.util.function.BiConsumer)', [
			[/* method description */
				[/* text */ 't', `Performs the given action for each entry in this map until all entries
 have been processed or the action throws an exception.   Unless
 otherwise specified by the implementing class, actions are performed in
 the order of entry set iteration (if an iteration order is specified.)
 Exceptions thrown by the action are relayed to the caller.`]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `The action to be performed for each entry`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified action is null`]
				]],
				[/* throw */ 'java.util.ConcurrentModificationException', [/* throw description */
					[/* text */ 't', `if an entry is found to be
 removed during iteration`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'containsKey(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this map contains a mapping for the specified
 key.  More formally, returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if
 this map contains a mapping for a key `],
				[/* inline code block */ 'i', `k`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `Objects.equals(key, k)`],
				[/* text */ 't', `.  (There can be
 at most one such mapping.)`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `key whose presence in this map is to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the key is of an inappropriate type for
         this map
 (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null and this map
         does not permit null keys
 (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this map contains a mapping for the specified
         key`]
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
					[/* inline code block */ 'i', `map.computeIfAbsent(key, k -> new Value(f(k)));`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Or to implement a multi-value map, `],
					[/* inline code block */ 'i', `Map<K,Collection<V>>`],
					[/* text */ 't', `,
 supporting multiple values per key:

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `map.computeIfAbsent(key, k -> new HashSet<V>()).add(v);`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `The mapping function should not modify this map during computation.`]
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
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null and
         this map does not support null keys, or the mappingFunction
         is null`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `put`],
					[/* text */ 't', ` operation
         is not supported by this map
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified key or value
         prevents it from being stored in this map
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of the specified key
         or value prevents it from being stored in this map
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the current (existing or computed) value associated with
         the specified key, or null if the computed value is null`]
			]
		]],
		[/* method */ 'keySet()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Set`],
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
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a set view of the keys contained in this map`]
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
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `Objects.equals(value, v)`],
				[/* text */ 't', `.  This operation
 will probably require time linear in the map size for most
 implementations of the `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', ` interface.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `value whose presence in this map is to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the value is of an inappropriate type for
         this map
 (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified value is null and this
         map does not permit null values
 (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this map maps one or more keys to the
         specified value`]
			]
		]],
		[/* method */ 'getOrDefault(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the value to which the specified key is mapped, or
 `],
				[/* inline code block */ 'i', `defaultValue`],
				[/* text */ 't', ` if this map contains no mapping for the key.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key whose associated value is to be returned`]
				]],
				[/* parameter */ 'defaultValue', [/* parameter description */
					[/* text */ 't', `the default mapping of the key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the key is of an inappropriate type for
 this map
 (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null and this map
 does not permit null keys
 (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value to which the specified key is mapped, or
 `],
				[/* inline code block */ 'i', `defaultValue`],
				[/* text */ 't', ` if this map contains no mapping for the key`]
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
				[/* block */ 'b', `The remapping function should not modify this map during computation.`]
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
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null and
         this map does not support null keys, or the
         remappingFunction is null`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `put`],
					[/* text */ 't', ` operation
         is not supported by this map
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified key or value
         prevents it from being stored in this map
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of the specified key
         or value prevents it from being stored in this map
         (`],
					[/* text */ 't', `optional`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the new value associated with the specified key, or null if none`]
			]
		]],
		[/* method */ 'ofEntries(java.util.Map.Entry...)', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable map containing keys and values extracted from the given entries.
 The entries themselves are not stored in the map.
 See `],
				[/* text */ 't', `Unmodifiable Maps`],
				[/* text */ 't', ` for details.`]
			],
			[/* parameters */
				[/* parameter */ 'entries', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `Map.Entry`],
					[/* text */ 't', `s containing the keys and values from which the map is populated`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if there are any duplicate keys`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any entry, key, or value is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, or if
         the `],
					[/* inline code block */ 'i', `entries`],
					[/* text */ 't', ` array is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', ` containing the specified mappings`]
			]
		]]
	],
]);
