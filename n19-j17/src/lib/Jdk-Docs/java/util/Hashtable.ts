import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Hashtable', [
	[/* class description */
		[/* text */ 't', `This class implements a hash table, which maps keys to values. Any
 non-`],
		[/* inline code block */ 'i', `null`],
		[/* text */ 't', ` object can be used as a key or as a value. `],
		[/* block */ 'b', [
			[/* text */ 't', `

 To successfully store and retrieve objects from a hashtable, the
 objects used as keys must implement the `],
			[/* inline code block */ 'i', `hashCode`],
			[/* text */ 't', `
 method and the `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', ` method. `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 An instance of `],
			[/* inline code block */ 'i', `Hashtable`],
			[/* text */ 't', ` has two parameters that affect its
 performance: `],
			[/* text */ 't', `initial capacity`],
			[/* text */ 't', ` and `],
			[/* text */ 't', `load factor`],
			[/* text */ 't', `.  The
 `],
			[/* text */ 't', `capacity`],
			[/* text */ 't', ` is the number of `],
			[/* text */ 't', `buckets`],
			[/* text */ 't', ` in the hash table, and the
 `],
			[/* text */ 't', `initial capacity`],
			[/* text */ 't', ` is simply the capacity at the time the hash table
 is created.  Note that the hash table is `],
			[/* text */ 't', `open`],
			[/* text */ 't', `: in the case of a "hash
 collision", a single bucket stores multiple entries, which must be searched
 sequentially.  The `],
			[/* text */ 't', `load factor`],
			[/* text */ 't', ` is a measure of how full the hash
 table is allowed to get before its capacity is automatically increased.
 The initial capacity and load factor parameters are merely hints to
 the implementation.  The exact details as to when and whether the rehash
 method is invoked are implementation-dependent.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 Generally, the default load factor (.75) offers a good tradeoff between
 time and space costs.  Higher values decrease the space overhead but
 increase the time cost to look up an entry (which is reflected in most
 `],
			[/* inline code block */ 'i', `Hashtable`],
			[/* text */ 't', ` operations, including `],
			[/* inline code block */ 'i', `get`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `put`],
			[/* text */ 't', `).`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 The initial capacity controls a tradeoff between wasted space and the
 need for `],
			[/* inline code block */ 'i', `rehash`],
			[/* text */ 't', ` operations, which are time-consuming.
 No `],
			[/* inline code block */ 'i', `rehash`],
			[/* text */ 't', ` operations will `],
			[/* text */ 't', `ever`],
			[/* text */ 't', ` occur if the initial
 capacity is greater than the maximum number of entries the
 `],
			[/* inline code block */ 'i', `Hashtable`],
			[/* text */ 't', ` will contain divided by its load factor.  However,
 setting the initial capacity too high can waste space.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `

 If many entries are to be made into a `],
			[/* inline code block */ 'i', `Hashtable`],
			[/* text */ 't', `,
 creating it with a sufficiently large capacity may allow the
 entries to be inserted more efficiently than letting it perform
 automatic rehashing as needed to grow the table. `]
		]],
		[/* block */ 'b', `

 This example creates a hashtable of numbers. It uses the names of
 the numbers as keys:
 `],
		[/* code block */ 'c', [
			[/* text */ 't', `   `],
			[/* inline code block */ 'i', `Hashtable<String, Integer> numbers
     = new Hashtable<String, Integer>();
   numbers.put("one", 1);
   numbers.put("two", 2);
   numbers.put("three", 3);`]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `To retrieve a number, use the following code:
 `],
		[/* code block */ 'c', [
			[/* text */ 't', `   `],
			[/* inline code block */ 'i', `Integer n = numbers.get("two");
   if (n != null) {
     System.out.println("two = " + n);
   }`]
		]],
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
			[/* text */ 't', `: if the Hashtable is structurally modified at any time
 after the iterator is created, in any way except through the iterator's own
 `],
			[/* inline code block */ 'i', `remove`],
			[/* text */ 't', ` method, the iterator will throw a `],
			[/* reference */ 'r', `java.util.ConcurrentModificationException`, `ConcurrentModificationException`],
			[/* text */ 't', `.  Thus, in the face of concurrent
 modification, the iterator fails quickly and cleanly, rather than risking
 arbitrary, non-deterministic behavior at an undetermined time in the future.
 The Enumerations returned by Hashtable's `],
			[/* reference */ 'r', `#keys()`, `keys`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `#elements()`, `elements`],
			[/* text */ 't', ` methods are `],
			[/* text */ 't', `not`],
			[/* text */ 't', ` fail-fast; if the
 Hashtable is structurally modified at any time after the enumeration is
 created then the results of enumerating are undefined.

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
			[/* text */ 't', `As of the Java 2 platform v1.2, this class was retrofitted to
 implement the `],
			[/* reference */ 'r', `java.util.Map`, `Map`],
			[/* text */ 't', ` interface, making it a member of the
 `],
			[/* text */ 't', `Java Collections Framework`],
			[/* text */ 't', `.  Unlike the new collection
 implementations, `],
			[/* inline code block */ 'i', `Hashtable`],
			[/* text */ 't', ` is synchronized.  If a
 thread-safe implementation is not needed, it is recommended to use
 `],
			[/* reference */ 'r', `java.util.HashMap`, `HashMap`],
			[/* text */ 't', ` in place of `],
			[/* inline code block */ 'i', `Hashtable`],
			[/* text */ 't', `.  If a thread-safe
 highly-concurrent implementation is desired, then it is recommended
 to use `],
			[/* reference */ 'r', `java.util.concurrent.ConcurrentHashMap`, `ConcurrentHashMap`],
			[/* text */ 't', ` in place of
 `],
			[/* inline code block */ 'i', `Hashtable`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new, empty hashtable with a default initial capacity (11)
 and load factor (0.75).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new, empty hashtable with the specified initial capacity
 and default load factor (0.75).`]
			],
			[/* parameters */
				[/* parameter */ 'initialCapacity', [/* parameter description */
					[/* text */ 't', `the initial capacity of the hashtable.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the initial capacity is less
              than zero.`]
				]]
			]
		]],
		[/* constructor */ '<init>(int,float)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new, empty hashtable with the specified initial
 capacity and the specified load factor.`]
			],
			[/* parameters */
				[/* parameter */ 'initialCapacity', [/* parameter description */
					[/* text */ 't', `the initial capacity of the hashtable.`]
				]],
				[/* parameter */ 'loadFactor', [/* parameter description */
					[/* text */ 't', `the load factor of the hashtable.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the initial capacity is less
             than zero, or if the load factor is nonpositive.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.util.Map)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new hashtable with the same mappings as the given
 Map.  The hashtable is created with an initial capacity sufficient to
 hold the mappings in the given Map and a default load factor (0.75).`]
			],
			[/* parameters */
				[/* parameter */ 't', [/* parameter description */
					[/* text */ 't', `the map whose mappings are to be placed in this map.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified map is null.`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'rehash()', [
			[/* method description */
				[/* text */ 't', `Increases the capacity of and internally reorganizes this
 hashtable, in order to accommodate and access its entries more
 efficiently.  This method is called automatically when the
 number of keys in the hashtable exceeds this hashtable's capacity
 and load factor.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'containsValue(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns true if this hashtable maps one or more keys to this value.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that this method is identical in functionality to `],
					[/* reference */ 'r', `#contains(java.lang.Object)`, `contains`],
					[/* text */ 't', ` (which predates the `],
					[/* reference */ 'r', `java.util.Map`, `Map`],
					[/* text */ 't', ` interface).`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `value whose presence in this hashtable is to be tested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the value is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
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
				[/* text */ 't', ` operations.`]
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
		[/* method */ 'contains(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Tests if some key maps into the specified value in this hashtable.
 This operation is more expensive than the `],
				[/* reference */ 'r', `#containsKey(java.lang.Object)`, `containsKey`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that this method is identical in functionality to
 `],
					[/* reference */ 'r', `#containsValue(java.lang.Object)`, `containsValue`],
					[/* text */ 't', `, (which is part of the
 `],
					[/* reference */ 'r', `java.util.Map`, `Map`],
					[/* text */ 't', ` interface in the collections framework).`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `a value to search for`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the value is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if some key maps to the
             `],
				[/* inline code block */ 'i', `value`],
				[/* text */ 't', ` argument in this hashtable as
             determined by the `],
				[/* inline code block */ 'i', `equals`],
				[/* text */ 't', ` method;
             `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'containsKey(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Tests if the specified object is a key in this hashtable.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `possible key`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the key is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the specified object
          is a key in this hashtable, as determined by the
          `],
				[/* inline code block */ 'i', `equals`],
				[/* text */ 't', ` method; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares the specified Object with this Map for equality,
 as per the definition in the Map interface.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `object to be compared for equality with this hashtable`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the specified Object is equal to this Map`]
			]
		]],
		[/* method */ 'isEmpty()', [
			[/* method description */
				[/* text */ 't', `Tests if this hashtable maps no keys to values.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this hashtable maps no keys to values;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'remove(java.lang.Object,java.lang.Object)', UDF],
		[/* method */ 'replace(java.lang.Object,java.lang.Object,java.lang.Object)', UDF],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code value for this Map as per the definition in the
 Map interface.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the number of keys in this hashtable.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of keys in this hashtable.`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Creates a shallow copy of this hashtable. All the structure of the
 hashtable itself is copied, but the keys and values are not cloned.
 This is a relatively expensive operation.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a clone of the hashtable`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of this `],
				[/* inline code block */ 'i', `Hashtable`],
				[/* text */ 't', ` object
 in the form of a set of entries, enclosed in braces and separated
 by the ASCII characters "`],
				[/* inline code block */ 'i', `,`],
				[/* text */ 't', `" (comma and space). Each
 entry is rendered as the key, an equals sign `],
				[/* inline code block */ 'i', `=`],
				[/* text */ 't', `, and the
 associated element, where the `],
				[/* inline code block */ 'i', `toString`],
				[/* text */ 't', ` method is used to
 convert the key and element to strings.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this hashtable`]
			]
		]],
		[/* method */ 'keys()', [
			[/* method description */
				[/* text */ 't', `Returns an enumeration of the keys in this hashtable.
 Use the Enumeration methods on the returned object to fetch the keys
 sequentially. If the hashtable is structurally modified while enumerating
 over the keys then the results of enumerating are undefined.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an enumeration of the keys in this hashtable.`]
			]
		]],
		[/* method */ 'elements()', [
			[/* method description */
				[/* text */ 't', `Returns an enumeration of the values in this hashtable.
 Use the Enumeration methods on the returned object to fetch the elements
 sequentially. If the hashtable is structurally modified while enumerating
 over the values then the results of enumerating are undefined.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an enumeration of the values in this hashtable.`]
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
					[/* text */ 't', ` if the remapping
 function modified this map during computation.`]
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
					[/* text */ 't', ` if the mapping
 function modified this map during computation.`]
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
					[/* text */ 't', ` if the remapping
 function modified this map during computation.`]
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
					[/* inline code block */ 'i', `(key.equals(k))`],
					[/* text */ 't', `,
 then this method returns `],
					[/* inline code block */ 'i', `v`],
					[/* text */ 't', `; otherwise it returns
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.  (There can be at most one such mapping.)`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key whose associated value is to be returned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified key is null`]
				]]
			],
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
					[/* text */ 't', ` if the remapping
 function modified this map during computation.`]
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
				[/* text */ 't', `Maps the specified `],
				[/* inline code block */ 'i', `key`],
				[/* text */ 't', ` to the specified
 `],
				[/* inline code block */ 'i', `value`],
				[/* text */ 't', ` in this hashtable. Neither the key nor the
 value can be `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `. `],
				[/* block */ 'b', [
					[/* text */ 't', `

 The value can be retrieved by calling the `],
					[/* inline code block */ 'i', `get`],
					[/* text */ 't', ` method
 with a key that is equal to the original key.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the hashtable key`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the key or value is
               `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the previous value of the specified key in this hashtable,
             or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if it did not have one`]
			]
		]],
		[/* method */ 'putIfAbsent(java.lang.Object,java.lang.Object)', UDF],
		[/* method */ 'remove(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the key (and its corresponding value) from this
 hashtable. This method does nothing if the key is not in the hashtable.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key that needs to be removed`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the key is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value to which the key had been mapped in this hashtable,
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the key did not have a mapping`]
			]
		]],
		[/* method */ 'replace(java.lang.Object,java.lang.Object)', UDF],
		[/* method */ 'clear()', [
			[/* method description */
				[/* text */ 't', `Clears this hashtable so that it contains no keys.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'forEach(java.util.function.BiConsumer)', UDF],
		[/* method */ 'putAll(java.util.Map)', [
			[/* method description */
				[/* text */ 't', `Copies all of the mappings from the specified map to this hashtable.
 These mappings will replace any mappings that this hashtable had for any
 of the keys currently in the specified map.`]
			],
			[/* parameters */
				[/* parameter */ 't', [/* parameter description */
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
