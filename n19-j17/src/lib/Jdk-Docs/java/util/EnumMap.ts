import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.EnumMap', [
	[/* class description */
		[/* text */ 't', `A specialized `],
		[/* reference */ 'r', `java.util.Map`],
		[/* text */ 't', ` implementation for use with enum type keys.  All
 of the keys in an enum map must come from a single enum type that is
 specified, explicitly or implicitly, when the map is created.  Enum maps
 are represented internally as arrays.  This representation is extremely
 compact and efficient.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Enum maps are maintained in the `],
			[/* text */ 't', `natural order`],
			[/* text */ 't', ` of their keys
 (the order in which the enum constants are declared).  This is reflected
 in the iterators returned by the collections views (`],
			[/* reference */ 'r', `#keySet()`, `keySet()`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#entrySet()`, `entrySet()`],
			[/* text */ 't', `, and `],
			[/* reference */ 'r', `#values()`, `values()`],
			[/* text */ 't', `).

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Iterators returned by the collection views are `],
			[/* text */ 't', `weakly consistent`],
			[/* text */ 't', `:
 they will never throw `],
			[/* reference */ 'r', `java.util.ConcurrentModificationException`],
			[/* text */ 't', ` and they may
 or may not show the effects of any modifications to the map that occur while
 the iteration is in progress.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Null keys are not permitted.  Attempts to insert a null key will
 throw `],
			[/* reference */ 'r', `java.lang.NullPointerException`],
			[/* text */ 't', `.  Attempts to test for the
 presence of a null key or to remove one will, however, function properly.
 Null values are permitted.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Like most collection implementations `],
			[/* inline code block */ 'i', `EnumMap`],
			[/* text */ 't', ` is not
 synchronized. If multiple threads access an enum map concurrently, and at
 least one of the threads modifies the map, it should be synchronized
 externally.  This is typically accomplished by synchronizing on some
 object that naturally encapsulates the enum map.  If no such object exists,
 the map should be "wrapped" using the `],
			[/* reference */ 'r', `.Collections#synchronizedMap(java.util.Map)`],
			[/* text */ 't', `
 method.  This is best done at creation time, to prevent accidental
 unsynchronized access:

 `]
		]],
		[/* code block */ 'c', `     Map<EnumKey, V> m
         = Collections.synchronizedMap(new EnumMap<EnumKey, V>(...));
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Implementation note: All basic operations execute in constant time.
 They are likely (though not guaranteed) to be faster than their
 `],
			[/* reference */ 'r', `java.util.HashMap`],
			[/* text */ 't', ` counterparts.

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
		[/* constructor */ '<init>(java.lang.Class)', [
			[/* constructor description */
				[/* text */ 't', `Creates an empty enum map with the specified key type.`]
			],
			[/* parameters */
				[/* parameter */ 'keyType', [/* parameter description */
					[/* text */ 't', `the class object of the key type for this enum map`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `keyType`],
					[/* text */ 't', ` is null`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.util.EnumMap)', [
			[/* constructor description */
				[/* text */ 't', `Creates an enum map with the same key type as the specified enum
 map, initially containing the same mappings (if any).`]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `the enum map from which to initialize this enum map`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `m`],
					[/* text */ 't', ` is null`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.util.Map)', [
			[/* constructor description */
				[/* text */ 't', `Creates an enum map initialized from the specified map.  If the
 specified map is an `],
				[/* inline code block */ 'i', `EnumMap`],
				[/* text */ 't', ` instance, this constructor behaves
 identically to `],
				[/* reference */ 'r', `#%3Cinit%3E(java.util.EnumMap)`, `EnumMap(EnumMap)`],
				[/* text */ 't', `.  Otherwise, the specified map
 must contain at least one mapping (in order to determine the new
 enum map's key type).`]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `the map from which to initialize this enum map`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `m`],
					[/* text */ 't', ` is not an
     `],
					[/* inline code block */ 'i', `EnumMap`],
					[/* text */ 't', ` instance and contains no mappings`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `m`],
					[/* text */ 't', ` is null`]
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
					[/* text */ 't', `the key whose presence in this map is to be tested`]
				]]
			],
			/* throws */ UDF,
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
 specified value.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value whose presence in this map is to be tested`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this map maps one or more keys to this value`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares the specified object with this map for equality.  Returns
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the given object is also a map and the two maps
 represent the same mappings, as specified in the `],
				[/* reference */ 'r', `.Map#equals(java.lang.Object)`],
				[/* text */ 't', ` contract.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `the object to be compared for equality with this map`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the specified object is equal to this map`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code value for this map.  The hash code of a map is
 defined to be the sum of the hash codes of each entry in the map.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hash code value for this map`]
			]
		]],
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
		[/* method */ 'values()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Collection`],
				[/* text */ 't', ` view of the values contained in this map.
 The returned collection obeys the general contract outlined in
 `],
				[/* reference */ 'r', `.Map#values()`],
				[/* text */ 't', `.  The collection's iterator will return the
 values in the order their corresponding keys appear in map,
 which is their natural order (the order in which the enum constants
 are declared).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a collection view of the values contained in this map`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Returns a shallow copy of this enum map. The values themselves
 are not cloned.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a shallow copy of this enum map`]
			]
		]],
		[/* method */ 'entrySet()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Set`],
				[/* text */ 't', ` view of the mappings contained in this map.
 The returned set obeys the general contract outlined in
 `],
				[/* reference */ 'r', `.Map#keySet()`],
				[/* text */ 't', `.  The set's iterator will return the
 mappings in the order their keys appear in map, which is their
 natural order (the order in which the enum constants are declared).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a set view of the mappings contained in this enum map`]
			]
		]],
		[/* method */ 'keySet()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Set`],
				[/* text */ 't', ` view of the keys contained in this map.
 The returned set obeys the general contract outlined in
 `],
				[/* reference */ 'r', `.Map#keySet()`],
				[/* text */ 't', `.  The set's iterator will return the keys
 in their natural order (the order in which the enum constants
 are declared).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a set view of the keys contained in this enum map`]
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
		[/* method */ 'put(java.lang.Enum,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Associates the specified value with the specified key in this map.
 If the map previously contained a mapping for this key, the old
 value is replaced.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key with which the specified value is to be associated`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to be associated with the specified key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the previous value associated with specified key, or
     `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there was no mapping for key.  (A `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
     return can also indicate that the map previously associated
     `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` with the specified key.)`]
			]
		]],
		[/* method */ 'remove(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the mapping for this key from this map if present.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key whose mapping is to be removed from the map`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the previous value associated with specified key, or
     `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there was no entry for key.  (A `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
     return can also indicate that the map previously associated
     `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` with the specified key.)`]
			]
		]],
		[/* method */ 'clear()', [
			[/* method description */
				[/* text */ 't', `Removes all mappings from this map.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'putAll(java.util.Map)', [
			[/* method description */
				[/* text */ 't', `Copies all of the mappings from the specified map to this map.
 These mappings will replace any mappings that this map had for
 any of the keys currently in the specified map.`]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `the mappings to be stored in this map`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `the specified map is null, or if
     one or more keys in the specified map are null`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
