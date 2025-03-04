import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Collections', [
	[/* class description */
		[/* text */ 't', `This class consists exclusively of static methods that operate on or return
 collections.  It contains polymorphic algorithms that operate on
 collections, "wrappers", which return a new collection backed by a
 specified collection, and a few other odds and ends.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The methods of this class all throw a `],
			[/* inline code block */ 'i', `NullPointerException`],
			[/* text */ 't', `
 if the collections or class objects provided to them are null.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The documentation for the polymorphic algorithms contained in this class
 generally includes a brief description of the `],
			[/* text */ 't', `implementation`],
			[/* text */ 't', `.  Such
 descriptions should be regarded as `],
			[/* text */ 't', `implementation notes`],
			[/* text */ 't', `, rather than
 parts of the `],
			[/* text */ 't', `specification`],
			[/* text */ 't', `.  Implementors should feel free to
 substitute other algorithms, so long as the specification itself is adhered
 to.  (For example, the algorithm used by `],
			[/* inline code block */ 'i', `sort`],
			[/* text */ 't', ` does not have to be
 a mergesort, but it does have to be `],
			[/* text */ 't', `stable`],
			[/* text */ 't', `.)

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The "destructive" algorithms contained in this class, that is, the
 algorithms that modify the collection on which they operate, are specified
 to throw `],
			[/* inline code block */ 'i', `UnsupportedOperationException`],
			[/* text */ 't', ` if the collection does not
 support the appropriate mutation primitive(s), such as the `],
			[/* inline code block */ 'i', `set`],
			[/* text */ 't', `
 method.  These algorithms may, but are not required to, throw this
 exception if an invocation would have no effect on the collection.  For
 example, invoking the `],
			[/* inline code block */ 'i', `sort`],
			[/* text */ 't', ` method on an unmodifiable list that is
 already sorted may or may not throw `],
			[/* inline code block */ 'i', `UnsupportedOperationException`],
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
	[/* fields */
		[/* field */ 'EMPTY_LIST', [
			[/* field description */
				[/* text */ 't', `The empty list (immutable).  This list is serializable.`]
			],
		]],
		[/* field */ 'EMPTY_MAP', [
			[/* field description */
				[/* text */ 't', `The empty map (immutable).  This map is serializable.`]
			],
		]],
		[/* field */ 'EMPTY_SET', [
			[/* field description */
				[/* text */ 't', `The empty set (immutable).  This set is serializable.`]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'checkedCollection(java.util.Collection,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns a dynamically typesafe view of the specified collection.
 Any attempt to insert an element of the wrong type will result in an
 immediate `],
				[/* reference */ 'r', `java.lang.ClassCastException`],
				[/* text */ 't', `.  Assuming a collection
 contains no incorrectly typed elements prior to the time a
 dynamically typesafe view is generated, and that all subsequent
 access to the collection takes place through the view, it is
 `],
				[/* text */ 't', `guaranteed`],
				[/* text */ 't', ` that the collection cannot contain an incorrectly
 typed element.

 `],
				[/* block */ 'b', `The generics mechanism in the language provides compile-time
 (static) type checking, but it is possible to defeat this mechanism
 with unchecked casts.  Usually this is not a problem, as the compiler
 issues warnings on all such unchecked operations.  There are, however,
 times when static type checking alone is not sufficient.  For example,
 suppose a collection is passed to a third-party library and it is
 imperative that the library code not corrupt the collection by
 inserting an element of the wrong type.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Another use of dynamically typesafe views is debugging.  Suppose a
 program fails with a `],
					[/* inline code block */ 'i', `ClassCastException`],
					[/* text */ 't', `, indicating that an
 incorrectly typed element was put into a parameterized collection.
 Unfortunately, the exception can occur at any time after the erroneous
 element is inserted, so it typically provides little or no information
 as to the real source of the problem.  If the problem is reproducible,
 one can quickly determine its source by temporarily modifying the
 program to wrap the collection with a dynamically typesafe view.
 For example, this declaration:
  `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Collection<String> c = new HashSet<>();`]
				]],
				[/* text */ 't', `
 may be replaced temporarily by this one:
  `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Collection<String> c = Collections.checkedCollection(
         new HashSet<>(), String.class);`]
				]],
				[/* text */ 't', `
 Running the program again will cause it to fail at the point where
 an incorrectly typed element is inserted into the collection, clearly
 identifying the source of the problem.  Once the problem is fixed, the
 modified declaration may be reverted back to the original.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `The returned collection does `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` pass the hashCode and equals
 operations through to the backing collection, but relies on
 `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', `'s `],
					[/* inline code block */ 'i', `equals`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `hashCode`],
					[/* text */ 't', ` methods.  This
 is necessary to preserve the contracts of these operations in the case
 that the backing collection is a set or a list.

 `]
				]],
				[/* block */ 'b', `The returned collection will be serializable if the specified
 collection is serializable.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Since `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` is considered to be a value of any reference
 type, the returned collection permits insertion of null elements
 whenever the backing collection does.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the collection for which a dynamically typesafe view is to be
          returned`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the type of element that `],
					[/* inline code block */ 'i', `c`],
					[/* text */ 't', ` is permitted to hold`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a dynamically typesafe view of the specified collection`]
			]
		]],
		[/* method */ 'checkedList(java.util.List,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns a dynamically typesafe view of the specified list.
 Any attempt to insert an element of the wrong type will result in
 an immediate `],
				[/* reference */ 'r', `java.lang.ClassCastException`],
				[/* text */ 't', `.  Assuming a list contains
 no incorrectly typed elements prior to the time a dynamically typesafe
 view is generated, and that all subsequent access to the list
 takes place through the view, it is `],
				[/* text */ 't', `guaranteed`],
				[/* text */ 't', ` that the
 list cannot contain an incorrectly typed element.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A discussion of the use of dynamically typesafe views may be
 found in the documentation for the `],
					[/* reference */ 'r', `#checkedCollection(java.util.Collection,java.lang.Class)`, `checkedCollection`],
					[/* text */ 't', ` method.

 `]
				]],
				[/* block */ 'b', `The returned list will be serializable if the specified list
 is serializable.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Since `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` is considered to be a value of any reference
 type, the returned list permits insertion of null elements whenever
 the backing list does.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'list', [/* parameter description */
					[/* text */ 't', `the list for which a dynamically typesafe view is to be
             returned`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the type of element that `],
					[/* inline code block */ 'i', `list`],
					[/* text */ 't', ` is permitted to hold`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a dynamically typesafe view of the specified list`]
			]
		]],
		[/* method */ 'checkedNavigableSet(java.util.NavigableSet,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns a dynamically typesafe view of the specified navigable set.
 Any attempt to insert an element of the wrong type will result in an
 immediate `],
				[/* reference */ 'r', `java.lang.ClassCastException`],
				[/* text */ 't', `.  Assuming a navigable set
 contains no incorrectly typed elements prior to the time a
 dynamically typesafe view is generated, and that all subsequent
 access to the navigable set takes place through the view, it is
 `],
				[/* text */ 't', `guaranteed`],
				[/* text */ 't', ` that the navigable set cannot contain an incorrectly
 typed element.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A discussion of the use of dynamically typesafe views may be
 found in the documentation for the `],
					[/* reference */ 'r', `#checkedCollection(java.util.Collection,java.lang.Class)`, `checkedCollection`],
					[/* text */ 't', ` method.

 `]
				]],
				[/* block */ 'b', `The returned navigable set will be serializable if the specified
 navigable set is serializable.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Since `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` is considered to be a value of any reference
 type, the returned navigable set permits insertion of null elements
 whenever the backing sorted set does.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the navigable set for which a dynamically typesafe view is to be
          returned`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the type of element that `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` is permitted to hold`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a dynamically typesafe view of the specified navigable set`]
			]
		]],
		[/* method */ 'emptyNavigableSet()', [
			[/* method description */
				[/* text */ 't', `Returns an empty navigable set (immutable).  This set is serializable.

 `],
				[/* block */ 'b', `This example illustrates the type-safe way to obtain an empty
 navigable set:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `NavigableSet<String> s = Collections.emptyNavigableSet();`]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the empty navigable set`]
			]
		]],
		[/* method */ 'checkedQueue(java.util.Queue,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns a dynamically typesafe view of the specified queue.
 Any attempt to insert an element of the wrong type will result in
 an immediate `],
				[/* reference */ 'r', `java.lang.ClassCastException`],
				[/* text */ 't', `.  Assuming a queue contains
 no incorrectly typed elements prior to the time a dynamically typesafe
 view is generated, and that all subsequent access to the queue
 takes place through the view, it is `],
				[/* text */ 't', `guaranteed`],
				[/* text */ 't', ` that the
 queue cannot contain an incorrectly typed element.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A discussion of the use of dynamically typesafe views may be
 found in the documentation for the `],
					[/* reference */ 'r', `#checkedCollection(java.util.Collection,java.lang.Class)`, `checkedCollection`],
					[/* text */ 't', ` method.

 `]
				]],
				[/* block */ 'b', `The returned queue will be serializable if the specified queue
 is serializable.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Since `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` is considered to be a value of any reference
 type, the returned queue permits insertion of `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` elements
 whenever the backing queue does.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'queue', [/* parameter description */
					[/* text */ 't', `the queue for which a dynamically typesafe view is to be
             returned`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the type of element that `],
					[/* inline code block */ 'i', `queue`],
					[/* text */ 't', ` is permitted to hold`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a dynamically typesafe view of the specified queue`]
			]
		]],
		[/* method */ 'checkedSet(java.util.Set,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns a dynamically typesafe view of the specified set.
 Any attempt to insert an element of the wrong type will result in
 an immediate `],
				[/* reference */ 'r', `java.lang.ClassCastException`],
				[/* text */ 't', `.  Assuming a set contains
 no incorrectly typed elements prior to the time a dynamically typesafe
 view is generated, and that all subsequent access to the set
 takes place through the view, it is `],
				[/* text */ 't', `guaranteed`],
				[/* text */ 't', ` that the
 set cannot contain an incorrectly typed element.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A discussion of the use of dynamically typesafe views may be
 found in the documentation for the `],
					[/* reference */ 'r', `#checkedCollection(java.util.Collection,java.lang.Class)`, `checkedCollection`],
					[/* text */ 't', ` method.

 `]
				]],
				[/* block */ 'b', `The returned set will be serializable if the specified set is
 serializable.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Since `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` is considered to be a value of any reference
 type, the returned set permits insertion of null elements whenever
 the backing set does.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the set for which a dynamically typesafe view is to be
          returned`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the type of element that `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` is permitted to hold`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a dynamically typesafe view of the specified set`]
			]
		]],
		[/* method */ 'newSetFromMap(java.util.Map)', [
			[/* method description */
				[/* text */ 't', `Returns a set backed by the specified map.  The resulting set displays
 the same ordering, concurrency, and performance characteristics as the
 backing map.  In essence, this factory method provides a `],
				[/* reference */ 'r', `java.util.Set`],
				[/* text */ 't', `
 implementation corresponding to any `],
				[/* reference */ 'r', `java.util.Map`],
				[/* text */ 't', ` implementation.  There
 is no need to use this method on a `],
				[/* reference */ 'r', `java.util.Map`],
				[/* text */ 't', ` implementation that
 already has a corresponding `],
				[/* reference */ 'r', `java.util.Set`],
				[/* text */ 't', ` implementation (such as `],
				[/* reference */ 'r', `java.util.HashMap`],
				[/* text */ 't', ` or `],
				[/* reference */ 'r', `java.util.TreeMap`],
				[/* text */ 't', `).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Each method invocation on the set returned by this method results in
 exactly one method invocation on the backing map or its `],
					[/* inline code block */ 'i', `keySet`],
					[/* text */ 't', `
 view, with one exception.  The `],
					[/* inline code block */ 'i', `addAll`],
					[/* text */ 't', ` method is implemented
 as a sequence of `],
					[/* inline code block */ 'i', `put`],
					[/* text */ 't', ` invocations on the backing map.

 `]
				]],
				[/* block */ 'b', `The specified map must be empty at the time this method is invoked,
 and should not be accessed directly after this method returns.  These
 conditions are ensured if the map is created empty, passed directly
 to this method, and no reference to the map is retained, as illustrated
 in the following code fragment:
 `],
				[/* code block */ 'c', `    Set<Object> weakHashSet = Collections.newSetFromMap(
        new WeakHashMap<Object, Boolean>());
 `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'map', [/* parameter description */
					[/* text */ 't', `the backing map`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `map`],
					[/* text */ 't', ` is not empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the set backed by the map`]
			]
		]],
		[/* method */ 'checkedSortedSet(java.util.SortedSet,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns a dynamically typesafe view of the specified sorted set.
 Any attempt to insert an element of the wrong type will result in an
 immediate `],
				[/* reference */ 'r', `java.lang.ClassCastException`],
				[/* text */ 't', `.  Assuming a sorted set
 contains no incorrectly typed elements prior to the time a
 dynamically typesafe view is generated, and that all subsequent
 access to the sorted set takes place through the view, it is
 `],
				[/* text */ 't', `guaranteed`],
				[/* text */ 't', ` that the sorted set cannot contain an incorrectly
 typed element.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A discussion of the use of dynamically typesafe views may be
 found in the documentation for the `],
					[/* reference */ 'r', `#checkedCollection(java.util.Collection,java.lang.Class)`, `checkedCollection`],
					[/* text */ 't', ` method.

 `]
				]],
				[/* block */ 'b', `The returned sorted set will be serializable if the specified sorted
 set is serializable.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Since `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` is considered to be a value of any reference
 type, the returned sorted set permits insertion of null elements
 whenever the backing sorted set does.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the sorted set for which a dynamically typesafe view is to be
          returned`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the type of element that `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` is permitted to hold`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a dynamically typesafe view of the specified sorted set`]
			]
		]],
		[/* method */ 'emptySortedSet()', [
			[/* method description */
				[/* text */ 't', `Returns an empty sorted set (immutable).  This set is serializable.

 `],
				[/* block */ 'b', `This example illustrates the type-safe way to obtain an empty
 sorted set:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `SortedSet<String> s = Collections.emptySortedSet();`]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the empty sorted set`]
			]
		]],
		[/* method */ 'checkedMap(java.util.Map,java.lang.Class,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns a dynamically typesafe view of the specified map.
 Any attempt to insert a mapping whose key or value have the wrong
 type will result in an immediate `],
				[/* reference */ 'r', `java.lang.ClassCastException`],
				[/* text */ 't', `.
 Similarly, any attempt to modify the value currently associated with
 a key will result in an immediate `],
				[/* reference */ 'r', `java.lang.ClassCastException`],
				[/* text */ 't', `,
 whether the modification is attempted directly through the map
 itself, or through a `],
				[/* reference */ 'r', `java.util.Map.Entry`],
				[/* text */ 't', ` instance obtained from the
 map's `],
				[/* reference */ 'r', `.Map#entrySet()`],
				[/* text */ 't', ` view.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Assuming a map contains no incorrectly typed keys or values
 prior to the time a dynamically typesafe view is generated, and
 that all subsequent access to the map takes place through the view
 (or one of its collection views), it is `],
					[/* text */ 't', `guaranteed`],
					[/* text */ 't', ` that the
 map cannot contain an incorrectly typed key or value.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `A discussion of the use of dynamically typesafe views may be
 found in the documentation for the `],
					[/* reference */ 'r', `#checkedCollection(java.util.Collection,java.lang.Class)`, `checkedCollection`],
					[/* text */ 't', ` method.

 `]
				]],
				[/* block */ 'b', `The returned map will be serializable if the specified map is
 serializable.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Since `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` is considered to be a value of any reference
 type, the returned map permits insertion of null keys or values
 whenever the backing map does.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `the map for which a dynamically typesafe view is to be
          returned`]
				]],
				[/* parameter */ 'keyType', [/* parameter description */
					[/* text */ 't', `the type of key that `],
					[/* inline code block */ 'i', `m`],
					[/* text */ 't', ` is permitted to hold`]
				]],
				[/* parameter */ 'valueType', [/* parameter description */
					[/* text */ 't', `the type of value that `],
					[/* inline code block */ 'i', `m`],
					[/* text */ 't', ` is permitted to hold`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a dynamically typesafe view of the specified map`]
			]
		]],
		[/* method */ 'singletonMap(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an immutable map, mapping only the specified key to the
 specified value.  The returned map is serializable.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the sole key to be stored in the returned map.`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to which the returned map maps `],
					[/* inline code block */ 'i', `key`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an immutable map containing only the specified key-value
         mapping.`]
			]
		]],
		[/* method */ 'synchronizedMap(java.util.Map)', [
			[/* method description */
				[/* text */ 't', `Returns a synchronized (thread-safe) map backed by the specified
 map.  In order to guarantee serial access, it is critical that
 `],
				[/* text */ 't', `all`],
				[/* text */ 't', ` access to the backing map is accomplished
 through the returned map.`],
				[/* block */ 'b', [
					[/* text */ 't', `

 It is imperative that the user manually synchronize on the returned
 map when traversing any of its collection views via `],
					[/* reference */ 'r', `java.util.Iterator`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.util.Spliterator`],
					[/* text */ 't', ` or `],
					[/* reference */ 'r', `java.util.stream.Stream`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', `  Map m = Collections.synchronizedMap(new HashMap());
      ...
  Set s = m.keySet();  // Needn't be in synchronized block
      ...
  synchronized (m) {  // Synchronizing on m, not s!
      Iterator i = s.iterator(); // Must be in synchronized block
      while (i.hasNext())
          foo(i.next());
  }
 `],
				[/* text */ 't', `
 Failure to follow this advice may result in non-deterministic behavior.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `The returned map will be serializable if the specified map is
 serializable.`]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `the map to be "wrapped" in a synchronized map.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a synchronized view of the specified map.`]
			]
		]],
		[/* method */ 'unmodifiableMap(java.util.Map)', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* reference */ 'r', `.Collection#unmodview`],
				[/* text */ 't', ` of the
 specified map. Query operations on the returned map "read through"
 to the specified map, and attempts to modify the returned
 map, whether direct or via its collection views, result in an
 `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', `.`],
				[/* block */ 'b', `

 The returned map will be serializable if the specified map
 is serializable.`]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `the map for which an unmodifiable view is to be returned.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an unmodifiable view of the specified map.`]
			]
		]],
		[/* method */ 'checkedNavigableMap(java.util.NavigableMap,java.lang.Class,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns a dynamically typesafe view of the specified navigable map.
 Any attempt to insert a mapping whose key or value have the wrong
 type will result in an immediate `],
				[/* reference */ 'r', `java.lang.ClassCastException`],
				[/* text */ 't', `.
 Similarly, any attempt to modify the value currently associated with
 a key will result in an immediate `],
				[/* reference */ 'r', `java.lang.ClassCastException`],
				[/* text */ 't', `,
 whether the modification is attempted directly through the map
 itself, or through a `],
				[/* reference */ 'r', `java.util.Map.Entry`],
				[/* text */ 't', ` instance obtained from the
 map's `],
				[/* reference */ 'r', `.Map#entrySet()`],
				[/* text */ 't', ` view.

 `],
				[/* block */ 'b', `guaranteed`],
				[/* block */ 'b', [
					[/* text */ 't', `A discussion of the use of dynamically typesafe views may be
 found in the documentation for the `],
					[/* reference */ 'r', `#checkedCollection(java.util.Collection,java.lang.Class)`, `checkedCollection`],
					[/* text */ 't', ` method.

 `]
				]],
				[/* block */ 'b', `The returned map will be serializable if the specified map is
 serializable.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Since `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` is considered to be a value of any reference
 type, the returned map permits insertion of null keys or values
 whenever the backing map does.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `the map for which a dynamically typesafe view is to be
          returned`]
				]],
				[/* parameter */ 'keyType', [/* parameter description */
					[/* text */ 't', `the type of key that `],
					[/* inline code block */ 'i', `m`],
					[/* text */ 't', ` is permitted to hold`]
				]],
				[/* parameter */ 'valueType', [/* parameter description */
					[/* text */ 't', `the type of value that `],
					[/* inline code block */ 'i', `m`],
					[/* text */ 't', ` is permitted to hold`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a dynamically typesafe view of the specified map`]
			]
		]],
		[/* method */ 'synchronizedNavigableMap(java.util.NavigableMap)', [
			[/* method description */
				[/* text */ 't', `Returns a synchronized (thread-safe) navigable map backed by the
 specified navigable map.  In order to guarantee serial access, it is
 critical that `],
				[/* text */ 't', `all`],
				[/* text */ 't', ` access to the backing navigable map is
 accomplished through the returned navigable map (or its views).`],
				[/* block */ 'b', [
					[/* text */ 't', `

 It is imperative that the user manually synchronize on the returned
 navigable map when traversing any of its collection views, or the
 collections views of any of its `],
					[/* inline code block */ 'i', `subMap`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `headMap`],
					[/* text */ 't', ` or
 `],
					[/* inline code block */ 'i', `tailMap`],
					[/* text */ 't', ` views, via `],
					[/* reference */ 'r', `java.util.Iterator`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `java.util.Spliterator`],
					[/* text */ 't', ` or
 `],
					[/* reference */ 'r', `java.util.stream.Stream`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', `  NavigableMap m = Collections.synchronizedNavigableMap(new TreeMap());
      ...
  Set s = m.keySet();  // Needn't be in synchronized block
      ...
  synchronized (m) {  // Synchronizing on m, not s!
      Iterator i = s.iterator(); // Must be in synchronized block
      while (i.hasNext())
          foo(i.next());
  }
 `],
				[/* text */ 't', `
 or:
 `],
				[/* code block */ 'c', `  NavigableMap m = Collections.synchronizedNavigableMap(new TreeMap());
  NavigableMap m2 = m.subMap(foo, true, bar, false);
      ...
  Set s2 = m2.keySet();  // Needn't be in synchronized block
      ...
  synchronized (m) {  // Synchronizing on m, not m2 or s2!
      Iterator i = s.iterator(); // Must be in synchronized block
      while (i.hasNext())
          foo(i.next());
  }
 `],
				[/* text */ 't', `
 Failure to follow this advice may result in non-deterministic behavior.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `The returned navigable map will be serializable if the specified
 navigable map is serializable.`]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `the navigable map to be "wrapped" in a synchronized navigable
              map`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a synchronized view of the specified navigable map.`]
			]
		]],
		[/* method */ 'unmodifiableNavigableMap(java.util.NavigableMap)', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* reference */ 'r', `.Collection#unmodview`],
				[/* text */ 't', ` of the
 specified navigable map. Query operations on the returned navigable map "read
 through" to the specified navigable map.  Attempts to modify the returned
 navigable map, whether direct, via its collection views, or via its
 `],
				[/* inline code block */ 'i', `subMap`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `headMap`],
				[/* text */ 't', `, or `],
				[/* inline code block */ 'i', `tailMap`],
				[/* text */ 't', ` views, result in
 an `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', `.`],
				[/* block */ 'b', `

 The returned navigable map will be serializable if the specified
 navigable map is serializable.`]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `the navigable map for which an unmodifiable view is to be
        returned`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an unmodifiable view of the specified navigable map`]
			]
		]],
		[/* method */ 'checkedSortedMap(java.util.SortedMap,java.lang.Class,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns a dynamically typesafe view of the specified sorted map.
 Any attempt to insert a mapping whose key or value have the wrong
 type will result in an immediate `],
				[/* reference */ 'r', `java.lang.ClassCastException`],
				[/* text */ 't', `.
 Similarly, any attempt to modify the value currently associated with
 a key will result in an immediate `],
				[/* reference */ 'r', `java.lang.ClassCastException`],
				[/* text */ 't', `,
 whether the modification is attempted directly through the map
 itself, or through a `],
				[/* reference */ 'r', `java.util.Map.Entry`],
				[/* text */ 't', ` instance obtained from the
 map's `],
				[/* reference */ 'r', `.Map#entrySet()`],
				[/* text */ 't', ` view.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Assuming a map contains no incorrectly typed keys or values
 prior to the time a dynamically typesafe view is generated, and
 that all subsequent access to the map takes place through the view
 (or one of its collection views), it is `],
					[/* text */ 't', `guaranteed`],
					[/* text */ 't', ` that the
 map cannot contain an incorrectly typed key or value.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `A discussion of the use of dynamically typesafe views may be
 found in the documentation for the `],
					[/* reference */ 'r', `#checkedCollection(java.util.Collection,java.lang.Class)`, `checkedCollection`],
					[/* text */ 't', ` method.

 `]
				]],
				[/* block */ 'b', `The returned map will be serializable if the specified map is
 serializable.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Since `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` is considered to be a value of any reference
 type, the returned map permits insertion of null keys or values
 whenever the backing map does.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `the map for which a dynamically typesafe view is to be
          returned`]
				]],
				[/* parameter */ 'keyType', [/* parameter description */
					[/* text */ 't', `the type of key that `],
					[/* inline code block */ 'i', `m`],
					[/* text */ 't', ` is permitted to hold`]
				]],
				[/* parameter */ 'valueType', [/* parameter description */
					[/* text */ 't', `the type of value that `],
					[/* inline code block */ 'i', `m`],
					[/* text */ 't', ` is permitted to hold`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a dynamically typesafe view of the specified map`]
			]
		]],
		[/* method */ 'synchronizedSortedMap(java.util.SortedMap)', [
			[/* method description */
				[/* text */ 't', `Returns a synchronized (thread-safe) sorted map backed by the specified
 sorted map.  In order to guarantee serial access, it is critical that
 `],
				[/* text */ 't', `all`],
				[/* text */ 't', ` access to the backing sorted map is accomplished
 through the returned sorted map (or its views).`],
				[/* block */ 'b', [
					[/* text */ 't', `

 It is imperative that the user manually synchronize on the returned
 sorted map when traversing any of its collection views, or the
 collections views of any of its `],
					[/* inline code block */ 'i', `subMap`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `headMap`],
					[/* text */ 't', ` or
 `],
					[/* inline code block */ 'i', `tailMap`],
					[/* text */ 't', ` views, via `],
					[/* reference */ 'r', `java.util.Iterator`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `java.util.Spliterator`],
					[/* text */ 't', ` or
 `],
					[/* reference */ 'r', `java.util.stream.Stream`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', `  SortedMap m = Collections.synchronizedSortedMap(new TreeMap());
      ...
  Set s = m.keySet();  // Needn't be in synchronized block
      ...
  synchronized (m) {  // Synchronizing on m, not s!
      Iterator i = s.iterator(); // Must be in synchronized block
      while (i.hasNext())
          foo(i.next());
  }
 `],
				[/* text */ 't', `
 or:
 `],
				[/* code block */ 'c', `  SortedMap m = Collections.synchronizedSortedMap(new TreeMap());
  SortedMap m2 = m.subMap(foo, bar);
      ...
  Set s2 = m2.keySet();  // Needn't be in synchronized block
      ...
  synchronized (m) {  // Synchronizing on m, not m2 or s2!
      Iterator i = s2.iterator(); // Must be in synchronized block
      while (i.hasNext())
          foo(i.next());
  }
 `],
				[/* text */ 't', `
 Failure to follow this advice may result in non-deterministic behavior.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `The returned sorted map will be serializable if the specified
 sorted map is serializable.`]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `the sorted map to be "wrapped" in a synchronized sorted map.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a synchronized view of the specified sorted map.`]
			]
		]],
		[/* method */ 'unmodifiableSortedMap(java.util.SortedMap)', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* reference */ 'r', `.Collection#unmodview`],
				[/* text */ 't', ` of the
 specified sorted map. Query operations on the returned sorted map "read through"
 to the specified sorted map.  Attempts to modify the returned
 sorted map, whether direct, via its collection views, or via its
 `],
				[/* inline code block */ 'i', `subMap`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `headMap`],
				[/* text */ 't', `, or `],
				[/* inline code block */ 'i', `tailMap`],
				[/* text */ 't', ` views, result in
 an `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', `.`],
				[/* block */ 'b', `

 The returned sorted map will be serializable if the specified sorted map
 is serializable.`]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `the sorted map for which an unmodifiable view is to be
        returned.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an unmodifiable view of the specified sorted map.`]
			]
		]],
		[/* method */ 'sort(java.util.List)', [
			[/* method description */
				[/* text */ 't', `Sorts the specified list into ascending order, according to the
 `],
				[/* reference */ 'r', `java.lang.Comparable`],
				[/* text */ 't', ` of its elements.
 All elements in the list must implement the `],
				[/* reference */ 'r', `java.lang.Comparable`],
				[/* text */ 't', `
 interface.  Furthermore, all elements in the list must be
 `],
				[/* text */ 't', `mutually comparable`],
				[/* text */ 't', ` (that is, `],
				[/* inline code block */ 'i', `e1.compareTo(e2)`],
				[/* text */ 't', `
 must not throw a `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', ` for any elements
 `],
				[/* inline code block */ 'i', `e1`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', ` in the list).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This sort is guaranteed to be `],
					[/* text */ 't', `stable`],
					[/* text */ 't', `:  equal elements will
 not be reordered as a result of the sort.

 `]
				]],
				[/* block */ 'b', `The specified list must be modifiable, but need not be resizable.`]
			],
			[/* parameters */
				[/* parameter */ 'list', [/* parameter description */
					[/* text */ 't', `the list to be sorted.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the list contains elements that are not
         `],
					[/* text */ 't', `mutually comparable`],
					[/* text */ 't', ` (for example, strings and integers).`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the specified list's
         list-iterator does not support the `],
					[/* inline code block */ 'i', `set`],
					[/* text */ 't', ` operation.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `(optional) if the implementation
         detects that the natural ordering of the list elements is
         found to violate the `],
					[/* reference */ 'r', `java.lang.Comparable`],
					[/* text */ 't', ` contract`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'max(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Returns the maximum element of the given collection, according to the
 `],
				[/* text */ 't', `natural ordering`],
				[/* text */ 't', ` of its elements.  All elements in the
 collection must implement the `],
				[/* inline code block */ 'i', `Comparable`],
				[/* text */ 't', ` interface.
 Furthermore, all elements in the collection must be `],
				[/* text */ 't', `mutually
 comparable`],
				[/* text */ 't', ` (that is, `],
				[/* inline code block */ 'i', `e1.compareTo(e2)`],
				[/* text */ 't', ` must not throw a
 `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', ` for any elements `],
				[/* inline code block */ 'i', `e1`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', ` in the collection).`],
				[/* block */ 'b', `

 This method iterates over the entire collection, hence it requires
 time proportional to the size of the collection.`]
			],
			[/* parameters */
				[/* parameter */ 'coll', [/* parameter description */
					[/* text */ 't', `the collection whose maximum element is to be determined.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the collection contains elements that are
         not `],
					[/* text */ 't', `mutually comparable`],
					[/* text */ 't', ` (for example, strings and
         integers).`]
				]],
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if the collection is empty.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the maximum element of the given collection, according
         to the `],
				[/* text */ 't', `natural ordering`],
				[/* text */ 't', ` of its elements.`]
			]
		]],
		[/* method */ 'min(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Returns the minimum element of the given collection, according to the
 `],
				[/* text */ 't', `natural ordering`],
				[/* text */ 't', ` of its elements.  All elements in the
 collection must implement the `],
				[/* inline code block */ 'i', `Comparable`],
				[/* text */ 't', ` interface.
 Furthermore, all elements in the collection must be `],
				[/* text */ 't', `mutually
 comparable`],
				[/* text */ 't', ` (that is, `],
				[/* inline code block */ 'i', `e1.compareTo(e2)`],
				[/* text */ 't', ` must not throw a
 `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', ` for any elements `],
				[/* inline code block */ 'i', `e1`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', ` in the collection).`],
				[/* block */ 'b', `

 This method iterates over the entire collection, hence it requires
 time proportional to the size of the collection.`]
			],
			[/* parameters */
				[/* parameter */ 'coll', [/* parameter description */
					[/* text */ 't', `the collection whose minimum element is to be determined.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the collection contains elements that are
         not `],
					[/* text */ 't', `mutually comparable`],
					[/* text */ 't', ` (for example, strings and
         integers).`]
				]],
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if the collection is empty.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the minimum element of the given collection, according
         to the `],
				[/* text */ 't', `natural ordering`],
				[/* text */ 't', ` of its elements.`]
			]
		]],
		[/* method */ 'addAll(java.util.Collection,java.lang.Object...)', UDF],
		[/* method */ 'replaceAll(java.util.List,java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Replaces all occurrences of one specified value in a list with another.
 More formally, replaces with `],
				[/* inline code block */ 'i', `newVal`],
				[/* text */ 't', ` each element `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', `
 in `],
				[/* inline code block */ 'i', `list`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `(oldVal==null ? e==null : oldVal.equals(e))`],
				[/* text */ 't', `.
 (This method has no effect on the size of the list.)`]
			],
			[/* parameters */
				[/* parameter */ 'list', [/* parameter description */
					[/* text */ 't', `the list in which replacement is to occur.`]
				]],
				[/* parameter */ 'oldVal', [/* parameter description */
					[/* text */ 't', `the old value to be replaced.`]
				]],
				[/* parameter */ 'newVal', [/* parameter description */
					[/* text */ 't', `the new value with which `],
					[/* inline code block */ 'i', `oldVal`],
					[/* text */ 't', ` is to be
        replaced.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the specified list or
         its list-iterator does not support the `],
					[/* inline code block */ 'i', `set`],
					[/* text */ 't', ` operation.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `list`],
				[/* text */ 't', ` contained one or more elements
         `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', ` such that
         `],
				[/* inline code block */ 'i', `(oldVal==null ? e==null : oldVal.equals(e))`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'binarySearch(java.util.List,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Searches the specified list for the specified object using the binary
 search algorithm.  The list must be sorted into ascending order
 according to the `],
				[/* reference */ 'r', `java.lang.Comparable`],
				[/* text */ 't', ` of its
 elements (as by the `],
				[/* reference */ 'r', `#sort(java.util.List)`, `sort(List)`],
				[/* text */ 't', ` method) prior to making this
 call.  If it is not sorted, the results are undefined.  If the list
 contains multiple elements equal to the specified object, there is no
 guarantee which one will be found.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method runs in log(n) time for a "random access" list (which
 provides near-constant-time positional access).  If the specified list
 does not implement the `],
					[/* reference */ 'r', `java.util.RandomAccess`],
					[/* text */ 't', ` interface and is large,
 this method will do an iterator-based binary search that performs
 O(n) link traversals and O(log n) element comparisons.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'list', [/* parameter description */
					[/* text */ 't', `the list to be searched.`]
				]],
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key to be searched for.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the list contains elements that are not
         `],
					[/* text */ 't', `mutually comparable`],
					[/* text */ 't', ` (for example, strings and
         integers), or the search key is not mutually comparable
         with the elements of the list.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index of the search key, if it is contained in the list;
         otherwise, `],
				[/* inline code block */ 'i', `(-(insertion point) - 1)`],
				[/* text */ 't', `.  The
         `],
				[/* text */ 't', `insertion point`],
				[/* text */ 't', ` is defined as the point at which the
         key would be inserted into the list: the index of the first
         element greater than the key, or `],
				[/* inline code block */ 'i', `list.size()`],
				[/* text */ 't', ` if all
         elements in the list are less than the specified key.  Note
         that this guarantees that the return value will be >= 0 if
         and only if the key is found.`]
			]
		]],
		[/* method */ 'binarySearch(java.util.List,java.lang.Object,java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Searches the specified list for the specified object using the binary
 search algorithm.  The list must be sorted into ascending order
 according to the specified comparator (as by the
 `],
				[/* reference */ 'r', `#sort(java.util.List,java.util.Comparator)`, `sort(List, Comparator)`],
				[/* text */ 't', `
 method), prior to making this call.  If it is
 not sorted, the results are undefined.  If the list contains multiple
 elements equal to the specified object, there is no guarantee which one
 will be found.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method runs in log(n) time for a "random access" list (which
 provides near-constant-time positional access).  If the specified list
 does not implement the `],
					[/* reference */ 'r', `java.util.RandomAccess`],
					[/* text */ 't', ` interface and is large,
 this method will do an iterator-based binary search that performs
 O(n) link traversals and O(log n) element comparisons.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'list', [/* parameter description */
					[/* text */ 't', `the list to be searched.`]
				]],
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key to be searched for.`]
				]],
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the comparator by which the list is ordered.
         A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value indicates that the elements'
         `],
					[/* reference */ 'r', `java.lang.Comparable`],
					[/* text */ 't', ` should be used.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the list contains elements that are not
         `],
					[/* text */ 't', `mutually comparable`],
					[/* text */ 't', ` using the specified comparator,
         or the search key is not mutually comparable with the
         elements of the list using this comparator.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index of the search key, if it is contained in the list;
         otherwise, `],
				[/* inline code block */ 'i', `(-(insertion point) - 1)`],
				[/* text */ 't', `.  The
         `],
				[/* text */ 't', `insertion point`],
				[/* text */ 't', ` is defined as the point at which the
         key would be inserted into the list: the index of the first
         element greater than the key, or `],
				[/* inline code block */ 'i', `list.size()`],
				[/* text */ 't', ` if all
         elements in the list are less than the specified key.  Note
         that this guarantees that the return value will be >= 0 if
         and only if the key is found.`]
			]
		]],
		[/* method */ 'list(java.util.Enumeration)', [
			[/* method description */
				[/* text */ 't', `Returns an array list containing the elements returned by the
 specified enumeration in the order they are returned by the
 enumeration.  This method provides interoperability between
 legacy APIs that return enumerations and new APIs that require
 collections.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `enumeration providing elements for the returned
          array list`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array list containing the elements returned
         by the specified enumeration.`]
			]
		]],
		[/* method */ 'synchronizedCollection(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Returns a synchronized (thread-safe) collection backed by the specified
 collection.  In order to guarantee serial access, it is critical that
 `],
				[/* text */ 't', `all`],
				[/* text */ 't', ` access to the backing collection is accomplished
 through the returned collection.`],
				[/* block */ 'b', [
					[/* text */ 't', `

 It is imperative that the user manually synchronize on the returned
 collection when traversing it via `],
					[/* reference */ 'r', `java.util.Iterator`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `java.util.Spliterator`],
					[/* text */ 't', `
 or `],
					[/* reference */ 'r', `java.util.stream.Stream`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', `  Collection c = Collections.synchronizedCollection(myCollection);
     ...
  synchronized (c) {
      Iterator i = c.iterator(); // Must be in the synchronized block
      while (i.hasNext())
         foo(i.next());
  }
 `],
				[/* text */ 't', `
 Failure to follow this advice may result in non-deterministic behavior.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `The returned collection does `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` pass the `],
					[/* inline code block */ 'i', `hashCode`],
					[/* text */ 't', `
 and `],
					[/* inline code block */ 'i', `equals`],
					[/* text */ 't', ` operations through to the backing collection, but
 relies on `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', `'s equals and hashCode methods.  This is
 necessary to preserve the contracts of these operations in the case
 that the backing collection is a set or a list.`]
				]],
				[/* block */ 'b', `

 The returned collection will be serializable if the specified collection
 is serializable.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the collection to be "wrapped" in a synchronized collection.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a synchronized view of the specified collection.`]
			]
		]],
		[/* method */ 'unmodifiableCollection(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* reference */ 'r', `.Collection#unmodview`],
				[/* text */ 't', ` of the
 specified collection. Query operations on the returned collection "read through"
 to the specified collection, and attempts to modify the returned
 collection, whether direct or via its iterator, result in an
 `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', `.`],
				[/* block */ 'b', [
					[/* text */ 't', `

 The returned collection does `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` pass the hashCode and equals
 operations through to the backing collection, but relies on
 `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', `'s `],
					[/* inline code block */ 'i', `equals`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `hashCode`],
					[/* text */ 't', ` methods.  This
 is necessary to preserve the contracts of these operations in the case
 that the backing collection is a set or a list.`]
				]],
				[/* block */ 'b', `

 The returned collection will be serializable if the specified collection
 is serializable.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the collection for which an unmodifiable view is to be
         returned.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an unmodifiable view of the specified collection.`]
			]
		]],
		[/* method */ 'reverseOrder()', [
			[/* method description */
				[/* text */ 't', `Returns a comparator that imposes the reverse of the `],
				[/* text */ 't', `natural
 ordering`],
				[/* text */ 't', ` on a collection of objects that implement the
 `],
				[/* inline code block */ 'i', `Comparable`],
				[/* text */ 't', ` interface.  (The natural ordering is the ordering
 imposed by the objects' own `],
				[/* inline code block */ 'i', `compareTo`],
				[/* text */ 't', ` method.)  This enables a
 simple idiom for sorting (or maintaining) collections (or arrays) of
 objects that implement the `],
				[/* inline code block */ 'i', `Comparable`],
				[/* text */ 't', ` interface in
 reverse-natural-order.  For example, suppose `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` is an array of
 strings. Then: `],
				[/* code block */ 'c', `          Arrays.sort(a, Collections.reverseOrder());
 `],
				[/* text */ 't', ` sorts the array in reverse-lexicographic (alphabetical) order.`],
				[/* block */ 'b', `

 The returned comparator is serializable.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A comparator that imposes the reverse of the `],
				[/* text */ 't', `natural
         ordering`],
				[/* text */ 't', ` on a collection of objects that implement
         the `],
				[/* inline code block */ 'i', `Comparable`],
				[/* text */ 't', ` interface.`]
			]
		]],
		[/* method */ 'reverseOrder(java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Returns a comparator that imposes the reverse ordering of the specified
 comparator.  If the specified comparator is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `, this method is
 equivalent to `],
				[/* reference */ 'r', `#reverseOrder()`, `reverseOrder()`],
				[/* text */ 't', ` (in other words, it returns a
 comparator that imposes the reverse of the `],
				[/* text */ 't', `natural ordering`],
				[/* text */ 't', ` on
 a collection of objects that implement the Comparable interface).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned comparator is serializable (assuming the specified
 comparator is also serializable or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `).`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'cmp', [/* parameter description */
					[/* text */ 't', `a comparator who's ordering is to be reversed by the returned
 comparator or `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A comparator that imposes the reverse ordering of the
         specified comparator.`]
			]
		]],
		[/* method */ 'emptyEnumeration()', [
			[/* method description */
				[/* text */ 't', `Returns an enumeration that has no elements.  More precisely,

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* reference */ 'r', `.Enumeration#hasMoreElements()`],
						[/* text */ 't', ` always
 returns `],
						[/* inline code block */ 'i', `false`],
						[/* text */ 't', `.`]
					]],
					[/* block */ 'b', [
						[/* reference */ 'r', `.Enumeration#nextElement()`],
						[/* text */ 't', ` always throws
 `],
						[/* reference */ 'r', `java.util.NoSuchElementException`],
						[/* text */ 't', `.`]
					]]
				]],
				[/* block */ 'b', `Implementations of this method are permitted, but not
 required, to return the same object from multiple invocations.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an empty enumeration`]
			]
		]],
		[/* method */ 'enumeration(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Returns an enumeration over the specified collection.  This provides
 interoperability with legacy APIs that require an enumeration
 as input.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The iterator returned from a call to `],
					[/* reference */ 'r', `.Enumeration#asIterator()`],
					[/* text */ 't', `
 does not support removal of elements from the specified collection.  This
 is necessary to avoid unintentionally increasing the capabilities of the
 returned enumeration.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the collection for which an enumeration is to be returned.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an enumeration over the specified collection.`]
			]
		]],
		[/* method */ 'emptyIterator()', [
			[/* method description */
				[/* text */ 't', `Returns an iterator that has no elements.  More precisely,

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* reference */ 'r', `.Iterator#hasNext()`],
						[/* text */ 't', ` always returns `],
						[/* inline code block */ 'i', `false`],
						[/* text */ 't', `.`]
					]],
					[/* block */ 'b', [
						[/* reference */ 'r', `.Iterator#next()`],
						[/* text */ 't', ` always throws `],
						[/* reference */ 'r', `java.util.NoSuchElementException`],
						[/* text */ 't', `.`]
					]],
					[/* block */ 'b', [
						[/* reference */ 'r', `.Iterator#remove()`],
						[/* text */ 't', ` always throws `],
						[/* reference */ 'r', `java.lang.IllegalStateException`],
						[/* text */ 't', `.`]
					]]
				]],
				[/* block */ 'b', `Implementations of this method are permitted, but not
 required, to return the same object from multiple invocations.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an empty iterator`]
			]
		]],
		[/* method */ 'nCopies(int,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an immutable list consisting of `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` copies of the
 specified object.  The newly allocated data object is tiny (it contains
 a single reference to the data object).  This method is useful in
 combination with the `],
				[/* inline code block */ 'i', `List.addAll`],
				[/* text */ 't', ` method to grow lists.
 The returned list is serializable.`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `the number of elements in the returned list.`]
				]],
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `the element to appear repeatedly in the returned list.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `n < 0`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an immutable list consisting of `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` copies of the
         specified object.`]
			]
		]],
		[/* method */ 'singletonList(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an immutable list containing only the specified object.
 The returned list is serializable.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `the sole object to be stored in the returned list.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an immutable list containing only the specified object.`]
			]
		]],
		[/* method */ 'synchronizedList(java.util.List)', [
			[/* method description */
				[/* text */ 't', `Returns a synchronized (thread-safe) list backed by the specified
 list.  In order to guarantee serial access, it is critical that
 `],
				[/* text */ 't', `all`],
				[/* text */ 't', ` access to the backing list is accomplished
 through the returned list.`],
				[/* block */ 'b', [
					[/* text */ 't', `

 It is imperative that the user manually synchronize on the returned
 list when traversing it via `],
					[/* reference */ 'r', `java.util.Iterator`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `java.util.Spliterator`],
					[/* text */ 't', `
 or `],
					[/* reference */ 'r', `java.util.stream.Stream`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', `  List list = Collections.synchronizedList(new ArrayList());
      ...
  synchronized (list) {
      Iterator i = list.iterator(); // Must be in synchronized block
      while (i.hasNext())
          foo(i.next());
  }
 `],
				[/* text */ 't', `
 Failure to follow this advice may result in non-deterministic behavior.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `The returned list will be serializable if the specified list is
 serializable.`]
			],
			[/* parameters */
				[/* parameter */ 'list', [/* parameter description */
					[/* text */ 't', `the list to be "wrapped" in a synchronized list.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a synchronized view of the specified list.`]
			]
		]],
		[/* method */ 'unmodifiableList(java.util.List)', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* reference */ 'r', `.Collection#unmodview`],
				[/* text */ 't', ` of the
 specified list. Query operations on the returned list "read through" to the
 specified list, and attempts to modify the returned list, whether
 direct or via its iterator, result in an
 `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', `.`],
				[/* block */ 'b', [
					[/* text */ 't', `

 The returned list will be serializable if the specified list
 is serializable. Similarly, the returned list will implement
 `],
					[/* reference */ 'r', `java.util.RandomAccess`],
					[/* text */ 't', ` if the specified list does.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'list', [/* parameter description */
					[/* text */ 't', `the list for which an unmodifiable view is to be returned.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an unmodifiable view of the specified list.`]
			]
		]],
		[/* method */ 'emptyListIterator()', [
			[/* method description */
				[/* text */ 't', `Returns a list iterator that has no elements.  More precisely,

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* reference */ 'r', `.Iterator#hasNext()`],
						[/* text */ 't', ` and `],
						[/* reference */ 'r', `.ListIterator#hasPrevious()`],
						[/* text */ 't', ` always return `],
						[/* inline code block */ 'i', `false`],
						[/* text */ 't', `.`]
					]],
					[/* block */ 'b', [
						[/* reference */ 'r', `.Iterator#next()`],
						[/* text */ 't', ` and `],
						[/* reference */ 'r', `.ListIterator#previous()`],
						[/* text */ 't', ` always throw `],
						[/* reference */ 'r', `java.util.NoSuchElementException`],
						[/* text */ 't', `.`]
					]],
					[/* block */ 'b', [
						[/* reference */ 'r', `.Iterator#remove()`],
						[/* text */ 't', ` and `],
						[/* reference */ 'r', `.ListIterator#set(E)`],
						[/* text */ 't', ` always throw `],
						[/* reference */ 'r', `java.lang.IllegalStateException`],
						[/* text */ 't', `.`]
					]],
					[/* block */ 'b', [
						[/* reference */ 'r', `.ListIterator#add(E)`],
						[/* text */ 't', ` always throws `],
						[/* reference */ 'r', `java.lang.UnsupportedOperationException`],
						[/* text */ 't', `.`]
					]],
					[/* block */ 'b', [
						[/* reference */ 'r', `.ListIterator#nextIndex()`],
						[/* text */ 't', ` always returns
 `],
						[/* inline code block */ 'i', `0`],
						[/* text */ 't', `.`]
					]],
					[/* block */ 'b', [
						[/* reference */ 'r', `.ListIterator#previousIndex()`],
						[/* text */ 't', ` always
 returns `],
						[/* inline code block */ 'i', `-1`],
						[/* text */ 't', `.`]
					]]
				]],
				[/* block */ 'b', `Implementations of this method are permitted, but not
 required, to return the same object from multiple invocations.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an empty list iterator`]
			]
		]],
		[/* method */ 'synchronizedNavigableSet(java.util.NavigableSet)', [
			[/* method description */
				[/* text */ 't', `Returns a synchronized (thread-safe) navigable set backed by the
 specified navigable set.  In order to guarantee serial access, it is
 critical that `],
				[/* text */ 't', `all`],
				[/* text */ 't', ` access to the backing navigable set is
 accomplished through the returned navigable set (or its views).`],
				[/* block */ 'b', [
					[/* text */ 't', `

 It is imperative that the user manually synchronize on the returned
 navigable set when traversing it, or any of its `],
					[/* inline code block */ 'i', `subSet`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `headSet`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `tailSet`],
					[/* text */ 't', ` views, via `],
					[/* reference */ 'r', `java.util.Iterator`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.util.Spliterator`],
					[/* text */ 't', ` or `],
					[/* reference */ 'r', `java.util.stream.Stream`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', `  NavigableSet s = Collections.synchronizedNavigableSet(new TreeSet());
      ...
  synchronized (s) {
      Iterator i = s.iterator(); // Must be in the synchronized block
      while (i.hasNext())
          foo(i.next());
  }
 `],
				[/* text */ 't', `
 or:
 `],
				[/* code block */ 'c', `  NavigableSet s = Collections.synchronizedNavigableSet(new TreeSet());
  NavigableSet s2 = s.headSet(foo, true);
      ...
  synchronized (s) {  // Note: s, not s2!!!
      Iterator i = s2.iterator(); // Must be in the synchronized block
      while (i.hasNext())
          foo(i.next());
  }
 `],
				[/* text */ 't', `
 Failure to follow this advice may result in non-deterministic behavior.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `The returned navigable set will be serializable if the specified
 navigable set is serializable.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the navigable set to be "wrapped" in a synchronized navigable
 set`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a synchronized view of the specified navigable set`]
			]
		]],
		[/* method */ 'unmodifiableNavigableSet(java.util.NavigableSet)', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* reference */ 'r', `.Collection#unmodview`],
				[/* text */ 't', ` of the
 specified navigable set. Query operations on the returned navigable set "read
 through" to the specified navigable set.  Attempts to modify the returned
 navigable set, whether direct, via its iterator, or via its
 `],
				[/* inline code block */ 'i', `subSet`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `headSet`],
				[/* text */ 't', `, or `],
				[/* inline code block */ 'i', `tailSet`],
				[/* text */ 't', ` views, result in
 an `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', `.`],
				[/* block */ 'b', `

 The returned navigable set will be serializable if the specified
 navigable set is serializable.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the navigable set for which an unmodifiable view is to be
        returned`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an unmodifiable view of the specified navigable set`]
			]
		]],
		[/* method */ 'asLifoQueue(java.util.Deque)', [
			[/* method description */
				[/* text */ 't', `Returns a view of a `],
				[/* reference */ 'r', `java.util.Deque`],
				[/* text */ 't', ` as a Last-in-first-out (Lifo)
 `],
				[/* reference */ 'r', `java.util.Queue`],
				[/* text */ 't', `. Method `],
				[/* inline code block */ 'i', `add`],
				[/* text */ 't', ` is mapped to `],
				[/* inline code block */ 'i', `push`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `remove`],
				[/* text */ 't', ` is mapped to `],
				[/* inline code block */ 'i', `pop`],
				[/* text */ 't', ` and so on. This
 view can be useful when you would like to use a method
 requiring a `],
				[/* inline code block */ 'i', `Queue`],
				[/* text */ 't', ` but you need Lifo ordering.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Each method invocation on the queue returned by this method
 results in exactly one method invocation on the backing deque, with
 one exception.  The `],
					[/* reference */ 'r', `.Collection#addAll(java.util.Collection)`],
					[/* text */ 't', ` method is
 implemented as a sequence of `],
					[/* reference */ 'r', `.Deque#addFirst(E)`],
					[/* text */ 't', `
 invocations on the backing deque.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'deque', [/* parameter description */
					[/* text */ 't', `the deque`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the queue`]
			]
		]],
		[/* method */ 'singleton(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an immutable set containing only the specified object.
 The returned set is serializable.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `the sole object to be stored in the returned set.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an immutable set containing only the specified object.`]
			]
		]],
		[/* method */ 'synchronizedSet(java.util.Set)', [
			[/* method description */
				[/* text */ 't', `Returns a synchronized (thread-safe) set backed by the specified
 set.  In order to guarantee serial access, it is critical that
 `],
				[/* text */ 't', `all`],
				[/* text */ 't', ` access to the backing set is accomplished
 through the returned set.`],
				[/* block */ 'b', [
					[/* text */ 't', `

 It is imperative that the user manually synchronize on the returned
 collection when traversing it via `],
					[/* reference */ 'r', `java.util.Iterator`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `java.util.Spliterator`],
					[/* text */ 't', `
 or `],
					[/* reference */ 'r', `java.util.stream.Stream`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', `  Set s = Collections.synchronizedSet(new HashSet());
      ...
  synchronized (s) {
      Iterator i = s.iterator(); // Must be in the synchronized block
      while (i.hasNext())
          foo(i.next());
  }
 `],
				[/* text */ 't', `
 Failure to follow this advice may result in non-deterministic behavior.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `The returned set will be serializable if the specified set is
 serializable.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the set to be "wrapped" in a synchronized set.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a synchronized view of the specified set.`]
			]
		]],
		[/* method */ 'unmodifiableSet(java.util.Set)', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* reference */ 'r', `.Collection#unmodview`],
				[/* text */ 't', ` of the
 specified set. Query operations on the returned set "read through" to the specified
 set, and attempts to modify the returned set, whether direct or via its
 iterator, result in an `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', `.`],
				[/* block */ 'b', `

 The returned set will be serializable if the specified set
 is serializable.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the set for which an unmodifiable view is to be returned.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an unmodifiable view of the specified set.`]
			]
		]],
		[/* method */ 'synchronizedSortedSet(java.util.SortedSet)', [
			[/* method description */
				[/* text */ 't', `Returns a synchronized (thread-safe) sorted set backed by the specified
 sorted set.  In order to guarantee serial access, it is critical that
 `],
				[/* text */ 't', `all`],
				[/* text */ 't', ` access to the backing sorted set is accomplished
 through the returned sorted set (or its views).`],
				[/* block */ 'b', [
					[/* text */ 't', `

 It is imperative that the user manually synchronize on the returned
 sorted set when traversing it or any of its `],
					[/* inline code block */ 'i', `subSet`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `headSet`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `tailSet`],
					[/* text */ 't', ` views via `],
					[/* reference */ 'r', `java.util.Iterator`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.util.Spliterator`],
					[/* text */ 't', ` or `],
					[/* reference */ 'r', `java.util.stream.Stream`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', `  SortedSet s = Collections.synchronizedSortedSet(new TreeSet());
      ...
  synchronized (s) {
      Iterator i = s.iterator(); // Must be in the synchronized block
      while (i.hasNext())
          foo(i.next());
  }
 `],
				[/* text */ 't', `
 or:
 `],
				[/* code block */ 'c', `  SortedSet s = Collections.synchronizedSortedSet(new TreeSet());
  SortedSet s2 = s.headSet(foo);
      ...
  synchronized (s) {  // Note: s, not s2!!!
      Iterator i = s2.iterator(); // Must be in the synchronized block
      while (i.hasNext())
          foo(i.next());
  }
 `],
				[/* text */ 't', `
 Failure to follow this advice may result in non-deterministic behavior.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `The returned sorted set will be serializable if the specified
 sorted set is serializable.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the sorted set to be "wrapped" in a synchronized sorted set.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a synchronized view of the specified sorted set.`]
			]
		]],
		[/* method */ 'unmodifiableSortedSet(java.util.SortedSet)', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* reference */ 'r', `.Collection#unmodview`],
				[/* text */ 't', ` of the
 specified sorted set. Query operations on the returned sorted set "read
 through" to the specified sorted set.  Attempts to modify the returned
 sorted set, whether direct, via its iterator, or via its
 `],
				[/* inline code block */ 'i', `subSet`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `headSet`],
				[/* text */ 't', `, or `],
				[/* inline code block */ 'i', `tailSet`],
				[/* text */ 't', ` views, result in
 an `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', `.`],
				[/* block */ 'b', `

 The returned sorted set will be serializable if the specified sorted set
 is serializable.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the sorted set for which an unmodifiable view is to be
        returned.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an unmodifiable view of the specified sorted set.`]
			]
		]],
		[/* method */ 'max(java.util.Collection,java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Returns the maximum element of the given collection, according to the
 order induced by the specified comparator.  All elements in the
 collection must be `],
				[/* text */ 't', `mutually comparable`],
				[/* text */ 't', ` by the specified
 comparator (that is, `],
				[/* inline code block */ 'i', `comp.compare(e1, e2)`],
				[/* text */ 't', ` must not throw a
 `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', ` for any elements `],
				[/* inline code block */ 'i', `e1`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', ` in the collection).`],
				[/* block */ 'b', `

 This method iterates over the entire collection, hence it requires
 time proportional to the size of the collection.`]
			],
			[/* parameters */
				[/* parameter */ 'coll', [/* parameter description */
					[/* text */ 't', `the collection whose maximum element is to be determined.`]
				]],
				[/* parameter */ 'comp', [/* parameter description */
					[/* text */ 't', `the comparator with which to determine the maximum element.
         A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value indicates that the elements' `],
					[/* text */ 't', `natural
        ordering`],
					[/* text */ 't', ` should be used.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the collection contains elements that are
         not `],
					[/* text */ 't', `mutually comparable`],
					[/* text */ 't', ` using the specified comparator.`]
				]],
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if the collection is empty.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the maximum element of the given collection, according
         to the specified comparator.`]
			]
		]],
		[/* method */ 'min(java.util.Collection,java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Returns the minimum element of the given collection, according to the
 order induced by the specified comparator.  All elements in the
 collection must be `],
				[/* text */ 't', `mutually comparable`],
				[/* text */ 't', ` by the specified
 comparator (that is, `],
				[/* inline code block */ 'i', `comp.compare(e1, e2)`],
				[/* text */ 't', ` must not throw a
 `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', ` for any elements `],
				[/* inline code block */ 'i', `e1`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', ` in the collection).`],
				[/* block */ 'b', `

 This method iterates over the entire collection, hence it requires
 time proportional to the size of the collection.`]
			],
			[/* parameters */
				[/* parameter */ 'coll', [/* parameter description */
					[/* text */ 't', `the collection whose minimum element is to be determined.`]
				]],
				[/* parameter */ 'comp', [/* parameter description */
					[/* text */ 't', `the comparator with which to determine the minimum element.
         A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value indicates that the elements' `],
					[/* text */ 't', `natural
         ordering`],
					[/* text */ 't', ` should be used.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the collection contains elements that are
         not `],
					[/* text */ 't', `mutually comparable`],
					[/* text */ 't', ` using the specified comparator.`]
				]],
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if the collection is empty.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the minimum element of the given collection, according
         to the specified comparator.`]
			]
		]],
		[/* method */ 'copy(java.util.List,java.util.List)', [
			[/* method description */
				[/* text */ 't', `Copies all of the elements from one list into another.  After the
 operation, the index of each copied element in the destination list
 will be identical to its index in the source list.  The destination
 list's size must be greater than or equal to the source list's size.
 If it is greater, the remaining elements in the destination list are
 unaffected. `],
				[/* block */ 'b', `

 This method runs in linear time.`]
			],
			[/* parameters */
				[/* parameter */ 'dest', [/* parameter description */
					[/* text */ 't', `The destination list.`]
				]],
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The source list.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the destination list is too small
         to contain the entire source List.`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the destination list's
         list-iterator does not support the `],
					[/* inline code block */ 'i', `set`],
					[/* text */ 't', ` operation.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'fill(java.util.List,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Replaces all of the elements of the specified list with the specified
 element. `],
				[/* block */ 'b', `

 This method runs in linear time.`]
			],
			[/* parameters */
				[/* parameter */ 'list', [/* parameter description */
					[/* text */ 't', `the list to be filled with the specified element.`]
				]],
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `The element with which to fill the specified list.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the specified list or its
         list-iterator does not support the `],
					[/* inline code block */ 'i', `set`],
					[/* text */ 't', ` operation.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'sort(java.util.List,java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Sorts the specified list according to the order induced by the
 specified comparator.  All elements in the list must be `],
				[/* text */ 't', `mutually
 comparable`],
				[/* text */ 't', ` using the specified comparator (that is,
 `],
				[/* inline code block */ 'i', `c.compare(e1, e2)`],
				[/* text */ 't', ` must not throw a `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', `
 for any elements `],
				[/* inline code block */ 'i', `e1`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', ` in the list).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This sort is guaranteed to be `],
					[/* text */ 't', `stable`],
					[/* text */ 't', `:  equal elements will
 not be reordered as a result of the sort.

 `]
				]],
				[/* block */ 'b', `The specified list must be modifiable, but need not be resizable.`]
			],
			[/* parameters */
				[/* parameter */ 'list', [/* parameter description */
					[/* text */ 't', `the list to be sorted.`]
				]],
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the comparator to determine the order of the list.  A
        `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value indicates that the elements' `],
					[/* text */ 't', `natural
        ordering`],
					[/* text */ 't', ` should be used.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the list contains elements that are not
         `],
					[/* text */ 't', `mutually comparable`],
					[/* text */ 't', ` using the specified comparator.`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the specified list's
         list-iterator does not support the `],
					[/* inline code block */ 'i', `set`],
					[/* text */ 't', ` operation.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `(optional) if the comparator is
         found to violate the `],
					[/* reference */ 'r', `java.util.Comparator`],
					[/* text */ 't', ` contract`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'disjoint(java.util.Collection,java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two specified collections have no
 elements in common.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Care must be exercised if this method is used on collections that
 do not comply with the general contract for `],
					[/* inline code block */ 'i', `Collection`],
					[/* text */ 't', `.
 Implementations may elect to iterate over either collection and test
 for containment in the other collection (or to perform any equivalent
 computation).  If either collection uses a nonstandard equality test
 (as does a `],
					[/* reference */ 'r', `java.util.SortedSet`],
					[/* text */ 't', ` whose ordering is not `],
					[/* text */ 't', `compatible with
 equals`],
					[/* text */ 't', `, or the key set of an `],
					[/* reference */ 'r', `java.util.IdentityHashMap`],
					[/* text */ 't', `), both
 collections must use the same nonstandard equality test, or the
 result of this method is undefined.

 `]
				]],
				[/* block */ 'b', `Care must also be exercised when using collections that have
 restrictions on the elements that they may contain. Collection
 implementations are allowed to throw exceptions for any operation
 involving elements they deem ineligible. For absolute safety the
 specified collections should contain only elements which are
 eligible elements for both collections.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that it is permissible to pass the same collection in both
 parameters, in which case the method will return `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if and
 only if the collection is empty.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'c1', [/* parameter description */
					[/* text */ 't', `a collection`]
				]],
				[/* parameter */ 'c2', [/* parameter description */
					[/* text */ 't', `a collection`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either collection is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if one collection contains a `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `
 element and `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` is not an eligible element for the other collection.
 (`],
					[/* reference */ 'r', `.Collection#optional-restrictions`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if one collection contains an element that is
 of a type which is ineligible for the other collection.
 (`],
					[/* reference */ 'r', `.Collection#optional-restrictions`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two specified collections have no
 elements in common.`]
			]
		]],
		[/* method */ 'emptyMap()', [
			[/* method description */
				[/* text */ 't', `Returns an empty map (immutable).  This map is serializable.

 `],
				[/* block */ 'b', `This example illustrates the type-safe way to obtain an empty map:
 `],
				[/* code block */ 'c', `     Map<String, Date> s = Collections.emptyMap();
 `],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an empty map`]
			]
		]],
		[/* method */ 'emptyNavigableMap()', [
			[/* method description */
				[/* text */ 't', `Returns an empty navigable map (immutable).  This map is serializable.

 `],
				[/* block */ 'b', `This example illustrates the type-safe way to obtain an empty map:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `NavigableMap<String, Date> s = Collections.emptyNavigableMap();`]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an empty navigable map`]
			]
		]],
		[/* method */ 'emptySortedMap()', [
			[/* method description */
				[/* text */ 't', `Returns an empty sorted map (immutable).  This map is serializable.

 `],
				[/* block */ 'b', `This example illustrates the type-safe way to obtain an empty map:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `SortedMap<String, Date> s = Collections.emptySortedMap();`]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an empty sorted map`]
			]
		]],
		[/* method */ 'emptyList()', [
			[/* method description */
				[/* text */ 't', `Returns an empty list (immutable).  This list is serializable.

 `],
				[/* block */ 'b', `This example illustrates the type-safe way to obtain an empty list:
 `],
				[/* code block */ 'c', `     List<String> s = Collections.emptyList();
 `],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an empty immutable list`]
			]
		]],
		[/* method */ 'emptySet()', [
			[/* method description */
				[/* text */ 't', `Returns an empty set (immutable).  This set is serializable.
 Unlike the like-named field, this method is parameterized.

 `],
				[/* block */ 'b', `This example illustrates the type-safe way to obtain an empty set:
 `],
				[/* code block */ 'c', `     Set<String> s = Collections.emptySet();
 `],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the empty set`]
			]
		]],
		[/* method */ 'frequency(java.util.Collection,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the number of elements in the specified collection equal to the
 specified object.  More formally, returns the number of elements
 `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', ` in the collection such that
 `],
				[/* inline code block */ 'i', `Objects.equals(o, e)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the collection in which to determine the frequency
     of `],
					[/* inline code block */ 'i', `o`]
				]],
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `the object whose frequency is to be determined`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `c`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of elements in `],
				[/* inline code block */ 'i', `c`],
				[/* text */ 't', ` equal to `],
				[/* inline code block */ 'i', `o`]
			]
		]],
		[/* method */ 'indexOfSubList(java.util.List,java.util.List)', [
			[/* method description */
				[/* text */ 't', `Returns the starting position of the first occurrence of the specified
 target list within the specified source list, or -1 if there is no
 such occurrence.  More formally, returns the lowest index `],
				[/* inline code block */ 'i', `i`],
				[/* text */ 't', `
 such that `],
				[/* inline code block */ 'i', `source.subList(i, i+target.size()).equals(target)`],
				[/* text */ 't', `,
 or -1 if there is no such index.  (Returns -1 if
 `],
				[/* inline code block */ 'i', `target.size() > source.size()`],
				[/* text */ 't', `)

 `],
				[/* block */ 'b', `This implementation uses the "brute force" technique of scanning
 over the source list, looking for a match with the target at each
 location in turn.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `the list in which to search for the first occurrence
        of `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the list to search for as a subList of `],
					[/* inline code block */ 'i', `source`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the starting position of the first occurrence of the specified
         target list within the specified source list, or -1 if there
         is no such occurrence.`]
			]
		]],
		[/* method */ 'lastIndexOfSubList(java.util.List,java.util.List)', [
			[/* method description */
				[/* text */ 't', `Returns the starting position of the last occurrence of the specified
 target list within the specified source list, or -1 if there is no such
 occurrence.  More formally, returns the highest index `],
				[/* inline code block */ 'i', `i`],
				[/* text */ 't', `
 such that `],
				[/* inline code block */ 'i', `source.subList(i, i+target.size()).equals(target)`],
				[/* text */ 't', `,
 or -1 if there is no such index.  (Returns -1 if
 `],
				[/* inline code block */ 'i', `target.size() > source.size()`],
				[/* text */ 't', `)

 `],
				[/* block */ 'b', `This implementation uses the "brute force" technique of iterating
 over the source list, looking for a match with the target at each
 location in turn.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `the list in which to search for the last occurrence
        of `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the list to search for as a subList of `],
					[/* inline code block */ 'i', `source`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the starting position of the last occurrence of the specified
         target list within the specified source list, or -1 if there
         is no such occurrence.`]
			]
		]],
		[/* method */ 'reverse(java.util.List)', [
			[/* method description */
				[/* text */ 't', `Reverses the order of the elements in the specified list.`],
				[/* block */ 'b', `

 This method runs in linear time.`]
			],
			[/* parameters */
				[/* parameter */ 'list', [/* parameter description */
					[/* text */ 't', `the list whose elements are to be reversed.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the specified list or
         its list-iterator does not support the `],
					[/* inline code block */ 'i', `set`],
					[/* text */ 't', ` operation.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'rotate(java.util.List,int)', [
			[/* method description */
				[/* text */ 't', `Rotates the elements in the specified list by the specified distance.
 After calling this method, the element at index `],
				[/* inline code block */ 'i', `i`],
				[/* text */ 't', ` will be
 the element previously at index `],
				[/* inline code block */ 'i', `(i - distance)`],
				[/* text */ 't', ` mod
 `],
				[/* inline code block */ 'i', `list.size()`],
				[/* text */ 't', `, for all values of `],
				[/* inline code block */ 'i', `i`],
				[/* text */ 't', ` between `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `
 and `],
				[/* inline code block */ 'i', `list.size()-1`],
				[/* text */ 't', `, inclusive.  (This method has no effect on
 the size of the list.)

 `],
				[/* block */ 'b', [
					[/* text */ 't', `For example, suppose `],
					[/* inline code block */ 'i', `list`],
					[/* text */ 't', ` comprises`],
					[/* inline code block */ 'i', `[t, a, n, k, s]`],
					[/* text */ 't', `.
 After invoking `],
					[/* inline code block */ 'i', `Collections.rotate(list, 1)`],
					[/* text */ 't', ` (or
 `],
					[/* inline code block */ 'i', `Collections.rotate(list, -4)`],
					[/* text */ 't', `), `],
					[/* inline code block */ 'i', `list`],
					[/* text */ 't', ` will comprise
 `],
					[/* inline code block */ 'i', `[s, t, a, n, k]`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Note that this method can usefully be applied to sublists to
 move one or more elements within a list while preserving the
 order of the remaining elements.  For example, the following idiom
 moves the element at index `],
					[/* inline code block */ 'i', `j`],
					[/* text */ 't', ` forward to position
 `],
					[/* inline code block */ 'i', `k`],
					[/* text */ 't', ` (which must be greater than or equal to `],
					[/* inline code block */ 'i', `j`],
					[/* text */ 't', `):
 `]
				]],
				[/* code block */ 'c', `     Collections.rotate(list.subList(j, k+1), -1);
 `],
				[/* text */ 't', `
 To make this concrete, suppose `],
				[/* inline code block */ 'i', `list`],
				[/* text */ 't', ` comprises
 `],
				[/* inline code block */ 'i', `[a, b, c, d, e]`],
				[/* text */ 't', `.  To move the element at index `],
				[/* inline code block */ 'i', `1`],
				[/* text */ 't', `
 (`],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `) forward two positions, perform the following invocation:
 `],
				[/* code block */ 'c', `     Collections.rotate(l.subList(1, 4), -1);
 `],
				[/* text */ 't', `
 The resulting list is `],
				[/* inline code block */ 'i', `[a, c, d, b, e]`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `To move more than one element forward, increase the absolute value
 of the rotation distance.  To move elements backward, use a positive
 shift distance.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the specified list is small or implements the `],
					[/* reference */ 'r', `java.util.RandomAccess`],
					[/* text */ 't', ` interface, this implementation exchanges the first
 element into the location it should go, and then repeatedly exchanges
 the displaced element into the location it should go until a displaced
 element is swapped into the first element.  If necessary, the process
 is repeated on the second and successive elements, until the rotation
 is complete.  If the specified list is large and doesn't implement the
 `],
					[/* inline code block */ 'i', `RandomAccess`],
					[/* text */ 't', ` interface, this implementation breaks the
 list into two sublist views around index `],
					[/* inline code block */ 'i', `-distance mod size`],
					[/* text */ 't', `.
 Then the `],
					[/* reference */ 'r', `#reverse(java.util.List)`, `reverse(List)`],
					[/* text */ 't', ` method is invoked on each sublist view,
 and finally it is invoked on the entire list.  For a more complete
 description of both algorithms, see Section 2.3 of Jon Bentley's
 `],
					[/* text */ 't', `Programming Pearls`],
					[/* text */ 't', ` (Addison-Wesley, 1986).`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'list', [/* parameter description */
					[/* text */ 't', `the list to be rotated.`]
				]],
				[/* parameter */ 'distance', [/* parameter description */
					[/* text */ 't', `the distance to rotate the list.  There are no
        constraints on this value; it may be zero, negative, or
        greater than `],
					[/* inline code block */ 'i', `list.size()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the specified list or
         its list-iterator does not support the `],
					[/* inline code block */ 'i', `set`],
					[/* text */ 't', ` operation.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'shuffle(java.util.List)', [
			[/* method description */
				[/* text */ 't', `Randomly permutes the specified list using a default source of
 randomness.  All permutations occur with approximately equal
 likelihood.

 `],
				[/* block */ 'b', `The hedge "approximately" is used in the foregoing description because
 default source of randomness is only approximately an unbiased source
 of independently chosen bits. If it were a perfect source of randomly
 chosen bits, then the algorithm would choose permutations with perfect
 uniformity.

 `],
				[/* block */ 'b', `This implementation traverses the list backwards, from the last
 element up to the second, repeatedly swapping a randomly selected element
 into the "current position".  Elements are randomly selected from the
 portion of the list that runs from the first element to the current
 position, inclusive.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method runs in linear time.  If the specified list does not
 implement the `],
					[/* reference */ 'r', `java.util.RandomAccess`],
					[/* text */ 't', ` interface and is large, this
 implementation dumps the specified list into an array before shuffling
 it, and dumps the shuffled array back into the list.  This avoids the
 quadratic behavior that would result from shuffling a "sequential
 access" list in place.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'list', [/* parameter description */
					[/* text */ 't', `the list to be shuffled.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the specified list or
         its list-iterator does not support the `],
					[/* inline code block */ 'i', `set`],
					[/* text */ 't', ` operation.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'shuffle(java.util.List,java.util.Random)', [
			[/* method description */
				[/* text */ 't', `Randomly permute the specified list using the specified source of
 randomness.  All permutations occur with equal likelihood
 assuming that the source of randomness is fair.`],
				[/* block */ 'b', `

 This implementation traverses the list backwards, from the last element
 up to the second, repeatedly swapping a randomly selected element into
 the "current position".  Elements are randomly selected from the
 portion of the list that runs from the first element to the current
 position, inclusive.`],
				[/* block */ 'b', [
					[/* text */ 't', `

 This method runs in linear time.  If the specified list does not
 implement the `],
					[/* reference */ 'r', `java.util.RandomAccess`],
					[/* text */ 't', ` interface and is large, this
 implementation dumps the specified list into an array before shuffling
 it, and dumps the shuffled array back into the list.  This avoids the
 quadratic behavior that would result from shuffling a "sequential
 access" list in place.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'list', [/* parameter description */
					[/* text */ 't', `the list to be shuffled.`]
				]],
				[/* parameter */ 'rnd', [/* parameter description */
					[/* text */ 't', `the source of randomness to use to shuffle the list.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the specified list or its
         list-iterator does not support the `],
					[/* inline code block */ 'i', `set`],
					[/* text */ 't', ` operation.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'swap(java.util.List,int,int)', [
			[/* method description */
				[/* text */ 't', `Swaps the elements at the specified positions in the specified list.
 (If the specified positions are equal, invoking this method leaves
 the list unchanged.)`]
			],
			[/* parameters */
				[/* parameter */ 'list', [/* parameter description */
					[/* text */ 't', `The list in which to swap elements.`]
				]],
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `the index of one element to be swapped.`]
				]],
				[/* parameter */ 'j', [/* parameter description */
					[/* text */ 't', `the index of the other element to be swapped.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if either `],
					[/* inline code block */ 'i', `i`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `j`],
					[/* text */ 't', `
         is out of range (i < 0 || i >= list.size()
         || j < 0 || j >= list.size()).`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
