import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Map$Entry', [
	[/* class description */
		[/* text */ 't', `A map entry (key-value pair). The Entry may be unmodifiable, or the
 value may be modifiable if the optional `],
		[/* inline code block */ 'i', `setValue`],
		[/* text */ 't', ` method is
 implemented. The Entry may be independent of any map, or it may represent
 an entry of the entry-set view of a map.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Instances of the `],
			[/* inline code block */ 'i', `Map.Entry`],
			[/* text */ 't', ` interface may be obtained by iterating
 the entry-set view of a map. These instances maintain a connection to the
 original, backing map. This connection to the backing map is valid
 `],
			[/* text */ 't', `only`],
			[/* text */ 't', ` for the duration of iteration over the entry-set view.
 During iteration of the entry-set view, if supported by the backing map,
 a change to a `],
			[/* inline code block */ 'i', `Map.Entry`],
			[/* text */ 't', `'s value via the
 `],
			[/* reference */ 'r', `#setValue(V)`, `setValue`],
			[/* text */ 't', ` method will be visible in the backing map.
 The behavior of such a `],
			[/* inline code block */ 'i', `Map.Entry`],
			[/* text */ 't', ` instance is undefined outside of
 iteration of the map's entry-set view. It is also undefined if the backing
 map has been modified after the `],
			[/* inline code block */ 'i', `Map.Entry`],
			[/* text */ 't', ` was returned by the
 iterator, except through the `],
			[/* inline code block */ 'i', `Map.Entry.setValue`],
			[/* text */ 't', ` method. In particular,
 a change to the value of a mapping in the backing map might or might not be
 visible in the corresponding `],
			[/* inline code block */ 'i', `Map.Entry`],
			[/* text */ 't', ` element of the entry-set view.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares the specified object with this entry for equality.
 Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the given object is also a map entry and
 the two entries represent the same mapping.  More formally, two
 entries `],
				[/* inline code block */ 'i', `e1`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', ` represent the same mapping
 if`],
				[/* code block */ 'c', `     (e1.getKey()==null ?
      e2.getKey()==null : e1.getKey().equals(e2.getKey()))  &&
     (e1.getValue()==null ?
      e2.getValue()==null : e1.getValue().equals(e2.getValue()))
 `],
				[/* text */ 't', `
 This ensures that the `],
				[/* inline code block */ 'i', `equals`],
				[/* text */ 't', ` method works properly across
 different implementations of the `],
				[/* inline code block */ 'i', `Map.Entry`],
				[/* text */ 't', ` interface.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `object to be compared for equality with this map entry`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the specified object is equal to this map
         entry`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code value for this map entry.  The hash code
 of a map entry `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', ` is defined to be: `],
				[/* code block */ 'c', `     (e.getKey()==null   ? 0 : e.getKey().hashCode()) ^
     (e.getValue()==null ? 0 : e.getValue().hashCode())
 `],
				[/* text */ 't', `
 This ensures that `],
				[/* inline code block */ 'i', `e1.equals(e2)`],
				[/* text */ 't', ` implies that
 `],
				[/* inline code block */ 'i', `e1.hashCode()==e2.hashCode()`],
				[/* text */ 't', ` for any two Entries
 `],
				[/* inline code block */ 'i', `e1`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', `, as required by the general
 contract of `],
				[/* inline code block */ 'i', `Object.hashCode`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hash code value for this map entry`]
			]
		]],
		[/* method */ 'copyOf(java.util.Map.Entry)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of the given `],
				[/* inline code block */ 'i', `Map.Entry`],
				[/* text */ 't', `. The returned instance is not
 associated with any map. The returned instance has the same characteristics
 as instances returned by the `],
				[/* reference */ 'r', `.Map#entry(K,V)`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the entry to be copied`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if e is null or if either of its key or value is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a map entry equal to the given entry`]
			]
		]],
		[/* method */ 'getValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value corresponding to this entry.  If the mapping
 has been removed from the backing map (by the iterator's
 `],
				[/* inline code block */ 'i', `remove`],
				[/* text */ 't', ` operation), the results of this call are undefined.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `implementations may, but are not
         required to, throw this exception if the entry has been
         removed from the backing map.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value corresponding to this entry`]
			]
		]],
		[/* method */ 'getKey()', [
			[/* method description */
				[/* text */ 't', `Returns the key corresponding to this entry.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `implementations may, but are not
         required to, throw this exception if the entry has been
         removed from the backing map.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the key corresponding to this entry`]
			]
		]],
		[/* method */ 'setValue(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Replaces the value corresponding to this entry with the specified
 value (optional operation).  (Writes through to the map.)  The
 behavior of this call is undefined if the mapping has already been
 removed from the map (by the iterator's `],
				[/* inline code block */ 'i', `remove`],
				[/* text */ 't', ` operation).`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `new value to be stored in this entry`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `put`],
					[/* text */ 't', ` operation
         is not supported by the backing map`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the class of the specified value
         prevents it from being stored in the backing map`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the backing map does not permit
         null values, and the specified value is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if some property of this value
         prevents it from being stored in the backing map`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `implementations may, but are not
         required to, throw this exception if the entry has been
         removed from the backing map.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `old value corresponding to the entry`]
			]
		]],
		[/* method */ 'comparingByKey(java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Returns a comparator that compares `],
				[/* reference */ 'r', `java.util.Map.Entry`],
				[/* text */ 't', ` by key using the given
 `],
				[/* reference */ 'r', `java.util.Comparator`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `The returned comparator is serializable if the specified comparator
 is also serializable.`]
			],
			[/* parameters */
				[/* parameter */ 'cmp', [/* parameter description */
					[/* text */ 't', `the key `],
					[/* reference */ 'r', `java.util.Comparator`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a comparator that compares `],
				[/* reference */ 'r', `java.util.Map.Entry`],
				[/* text */ 't', ` by the key.`]
			]
		]],
		[/* method */ 'comparingByKey()', [
			[/* method description */
				[/* text */ 't', `Returns a comparator that compares `],
				[/* reference */ 'r', `java.util.Map.Entry`],
				[/* text */ 't', ` in natural order on key.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned comparator is serializable and throws `],
					[/* reference */ 'r', `java.lang.NullPointerException`],
					[/* text */ 't', ` when comparing an entry with a null key.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a comparator that compares `],
				[/* reference */ 'r', `java.util.Map.Entry`],
				[/* text */ 't', ` in natural order on key.`]
			]
		]],
		[/* method */ 'comparingByValue()', [
			[/* method description */
				[/* text */ 't', `Returns a comparator that compares `],
				[/* reference */ 'r', `java.util.Map.Entry`],
				[/* text */ 't', ` in natural order on value.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned comparator is serializable and throws `],
					[/* reference */ 'r', `java.lang.NullPointerException`],
					[/* text */ 't', ` when comparing an entry with null values.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a comparator that compares `],
				[/* reference */ 'r', `java.util.Map.Entry`],
				[/* text */ 't', ` in natural order on value.`]
			]
		]],
		[/* method */ 'comparingByValue(java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Returns a comparator that compares `],
				[/* reference */ 'r', `java.util.Map.Entry`],
				[/* text */ 't', ` by value using the given
 `],
				[/* reference */ 'r', `java.util.Comparator`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `The returned comparator is serializable if the specified comparator
 is also serializable.`]
			],
			[/* parameters */
				[/* parameter */ 'cmp', [/* parameter description */
					[/* text */ 't', `the value `],
					[/* reference */ 'r', `java.util.Comparator`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a comparator that compares `],
				[/* reference */ 'r', `java.util.Map.Entry`],
				[/* text */ 't', ` by the value.`]
			]
		]]
	],
]);
