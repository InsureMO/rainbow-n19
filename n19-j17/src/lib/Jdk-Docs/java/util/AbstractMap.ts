import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.AbstractMap', [
	[/* class description */
		[/* text */ 't', `This class provides a skeletal implementation of the `],
		[/* inline code block */ 'i', `Map`],
		[/* text */ 't', `
 interface, to minimize the effort required to implement this interface.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `To implement an unmodifiable map, the programmer needs only to extend this
 class and provide an implementation for the `],
			[/* inline code block */ 'i', `entrySet`],
			[/* text */ 't', ` method, which
 returns a set-view of the map's mappings.  Typically, the returned set
 will, in turn, be implemented atop `],
			[/* inline code block */ 'i', `AbstractSet`],
			[/* text */ 't', `.  This set should
 not support the `],
			[/* inline code block */ 'i', `add`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `remove`],
			[/* text */ 't', ` methods, and its iterator
 should not support the `],
			[/* inline code block */ 'i', `remove`],
			[/* text */ 't', ` method.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `To implement a modifiable map, the programmer must additionally override
 this class's `],
			[/* inline code block */ 'i', `put`],
			[/* text */ 't', ` method (which otherwise throws an
 `],
			[/* inline code block */ 'i', `UnsupportedOperationException`],
			[/* text */ 't', `), and the iterator returned by
 `],
			[/* inline code block */ 'i', `entrySet().iterator()`],
			[/* text */ 't', ` must additionally implement its
 `],
			[/* inline code block */ 'i', `remove`],
			[/* text */ 't', ` method.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The programmer should generally provide a void (no argument) and map
 constructor, as per the recommendation in the `],
			[/* inline code block */ 'i', `Map`],
			[/* text */ 't', ` interface
 specification.

 `]
		]],
		[/* block */ 'b', `The documentation for each non-abstract method in this class describes its
 implementation in detail.  Each of these methods may be overridden if the
 map being implemented admits a more efficient implementation.

 `],
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
				[/* text */ 't', `Sole constructor.  (For invocation by subclass constructors, typically
 implicit.)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Returns a shallow copy of this `],
				[/* inline code block */ 'i', `AbstractMap`],
				[/* text */ 't', ` instance: the keys
 and values themselves are not cloned.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.CloneNotSupportedException', [/* throw description */
					[/* text */ 't', `if the object's class does not
               support the `],
					[/* inline code block */ 'i', `Cloneable`],
					[/* text */ 't', ` interface. Subclasses
               that override the `],
					[/* inline code block */ 'i', `clone`],
					[/* text */ 't', ` method can also
               throw this exception to indicate that an instance cannot
               be cloned.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a shallow copy of this map`]
			]
		]],
		[/* method */ 'entrySet()', UDF],
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
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null and this map
         does not permit null keys
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this map contains a mapping for the specified
         key`]
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
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified value is null and this
         map does not permit null values
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this map maps one or more keys to the
         specified value`]
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
				[/* reference */ 'r', `java.lang.Object#hashCode()`, `Object.hashCode()`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hash code value for this map`]
			]
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
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of this map.  The string representation
 consists of a list of key-value mappings in the order returned by the
 map's `],
				[/* inline code block */ 'i', `entrySet`],
				[/* text */ 't', ` view's iterator, enclosed in braces
 (`],
				[/* inline code block */ 'i', `"{}"`],
				[/* text */ 't', `).  Adjacent mappings are separated by the characters
 `],
				[/* inline code block */ 'i', `", "`],
				[/* text */ 't', ` (comma and space).  Each key-value mapping is rendered as
 the key followed by an equals sign (`],
				[/* inline code block */ 'i', `"="`],
				[/* text */ 't', `) followed by the
 associated value.  Keys and values are converted to strings as by
 `],
				[/* reference */ 'r', `java.lang.String#valueOf(java.lang.Object)`, `String.valueOf(Object)`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this map`]
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
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a collection view of the values contained in this map`]
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
					[/* reference */ 'r', `java.util.Map#containsKey(java.lang.Object)`, `containsKey`],
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
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null and this map
         does not permit null keys
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
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
				[/* reference */ 'r', `java.util.Map#containsKey(java.lang.Object)`, `m.containsKey(k)`],
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
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null and this
         map does not permit null keys
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
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
		[/* method */ 'putAll(java.util.Map)', [
			[/* method description */
				[/* text */ 't', `Copies all of the mappings from the specified map to this map
 (optional operation).  The effect of this call is equivalent to that
 of calling `],
				[/* reference */ 'r', `java.util.Map#put(K,V)`, `put(k, v)`],
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
		]]
	],
]);
