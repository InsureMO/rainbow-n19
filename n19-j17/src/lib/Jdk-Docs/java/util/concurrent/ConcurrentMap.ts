import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.concurrent.ConcurrentMap', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* reference */ 'r', `java.util.Map`, `Map`],
		[/* text */ 't', ` providing thread safety and atomicity guarantees.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `To maintain the specified guarantees, default implementations of
 methods including `],
			[/* reference */ 'r', `#putIfAbsent(K,V)`, `putIfAbsent(K, V)`],
			[/* text */ 't', ` inherited from `],
			[/* reference */ 'r', `java.util.Map`, `Map`],
			[/* text */ 't', `
 must be overridden by implementations of this interface. Similarly,
 implementations of the collections returned by methods `],
			[/* reference */ 'r', `java.util.Map#keySet()`, `Map.keySet()`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.util.Map#values()`, `Map.values()`],
			[/* text */ 't', `, and `],
			[/* reference */ 'r', `java.util.Map#entrySet()`, `Map.entrySet()`],
			[/* text */ 't', ` must override
 methods such as `],
			[/* inline code block */ 'i', `removeIf`],
			[/* text */ 't', ` when necessary to
 preserve atomicity guarantees.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Memory consistency effects: As with other concurrent
 collections, actions in a thread prior to placing an object into a
 `],
			[/* inline code block */ 'i', `ConcurrentMap`],
			[/* text */ 't', ` as a key or value
 `],
			[/* text */ 't', `happen-before`],
			[/* text */ 't', `
 actions subsequent to the access or removal of that object from
 the `],
			[/* inline code block */ 'i', `ConcurrentMap`],
			[/* text */ 't', ` in another thread.

 `]
		]],
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
		[/* method */ 'remove(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the entry for a key only if currently mapped to a given value.
 This is equivalent to, for this `],
				[/* inline code block */ 'i', `map`],
				[/* text */ 't', `:
 `],
				[/* code block */ 'c', [
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `if (map.containsKey(key)
     && Objects.equals(map.get(key), value)) {
   map.remove(key);
   return true;
 } else {
   return false;
 }`]
				]],
				[/* text */ 't', `

 except that the action is performed atomically.`]
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
         is not supported by this map`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the key or value is of an inappropriate
         type for this map
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key or value is null,
         and this map does not permit null keys or values
 (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the value was removed`]
			]
		]],
		[/* method */ 'replace(java.lang.Object,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Replaces the entry for a key only if currently mapped to a given value.
 This is equivalent to, for this `],
				[/* inline code block */ 'i', `map`],
				[/* text */ 't', `:
 `],
				[/* code block */ 'c', [
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `if (map.containsKey(key)
     && Objects.equals(map.get(key), oldValue)) {
   map.put(key, newValue);
   return true;
 } else {
   return false;
 }`]
				]],
				[/* text */ 't', `

 except that the action is performed atomically.`]
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
         is not supported by this map`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of a specified key or value
         prevents it from being stored in this map`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if a specified key or value is null,
         and this map does not permit null keys or values`]
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
		[/* method */ 'putIfAbsent(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `If the specified key is not already associated
 with a value, associates it with the given value.
 This is equivalent to, for this `],
				[/* inline code block */ 'i', `map`],
				[/* text */ 't', `:
 `],
				[/* code block */ 'c', [
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `if (!map.containsKey(key))
   return map.put(key, value);
 else
   return map.get(key);`]
				]],
				[/* text */ 't', `

 except that the action is performed atomically.`]
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
		[/* method */ 'replace(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Replaces the entry for a key only if currently mapped to some value.
 This is equivalent to, for this `],
				[/* inline code block */ 'i', `map`],
				[/* text */ 't', `:
 `],
				[/* code block */ 'c', [
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `if (map.containsKey(key))
   return map.put(key, value);
 else
   return null;`]
				]],
				[/* text */ 't', `

 except that the action is performed atomically.`]
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
         is not supported by this map`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified key or value
         prevents it from being stored in this map`]
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
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `put`],
					[/* text */ 't', ` operation
         is not supported by this map
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified key or value
         prevents it from being stored in this map
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null and
         this map does not support null keys, or the
         remappingFunction is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of the specified key
         or value prevents it from being stored in this map
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
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
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `put`],
					[/* text */ 't', ` operation
         is not supported by this map
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified key or value
         prevents it from being stored in this map
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null and
         this map does not support null keys, or the mappingFunction
         is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of the specified key
         or value prevents it from being stored in this map
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
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
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `put`],
					[/* text */ 't', ` operation
         is not supported by this map
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified key or value
         prevents it from being stored in this map
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null and
         this map does not support null keys, or the
         remappingFunction is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of the specified key
         or value prevents it from being stored in this map
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the new value associated with the specified key, or null if none`]
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
				[/* inline code block */ 'i', `defaultValue`],
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
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified key or value
         prevents it from being stored in this map
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null and this map
         does not support null keys or the value or remappingFunction is
         null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of the specified key
         or value prevents it from being stored in this map
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the new value associated with the specified key, or null if no
         value is associated with the key`]
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
				]]
			],
			/* return */ UDF
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
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if function or a replacement value is null,
         and this map does not permit null keys or values
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if a replacement value is of an inappropriate
         type for this map
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of a replacement value
         prevents it from being stored in this map
         (`],
					[/* reference */ 'r', `java.util.Collection#optional-restrictions`, `optional`],
					[/* text */ 't', `)`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
