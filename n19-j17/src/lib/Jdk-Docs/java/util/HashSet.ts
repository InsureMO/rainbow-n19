import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.HashSet', [
	[/* class description */
		[/* text */ 't', `This class implements the `],
		[/* inline code block */ 'i', `Set`],
		[/* text */ 't', ` interface, backed by a hash table
 (actually a `],
		[/* inline code block */ 'i', `HashMap`],
		[/* text */ 't', ` instance).  It makes no guarantees as to the
 iteration order of the set; in particular, it does not guarantee that the
 order will remain constant over time.  This class permits the `],
		[/* inline code block */ 'i', `null`],
		[/* text */ 't', `
 element.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This class offers constant time performance for the basic operations
 (`],
			[/* inline code block */ 'i', `add`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `remove`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `contains`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `size`],
			[/* text */ 't', `),
 assuming the hash function disperses the elements properly among the
 buckets.  Iterating over this set requires time proportional to the sum of
 the `],
			[/* inline code block */ 'i', `HashSet`],
			[/* text */ 't', ` instance's size (the number of elements) plus the
 "capacity" of the backing `],
			[/* inline code block */ 'i', `HashMap`],
			[/* text */ 't', ` instance (the number of
 buckets).  Thus, it's very important not to set the initial capacity too
 high (or the load factor too low) if iteration performance is important.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Note that this implementation is not synchronized.`],
			[/* text */ 't', `
 If multiple threads access a hash set concurrently, and at least one of
 the threads modifies the set, it `],
			[/* text */ 't', `must`],
			[/* text */ 't', ` be synchronized externally.
 This is typically accomplished by synchronizing on some object that
 naturally encapsulates the set.

 If no such object exists, the set should be "wrapped" using the
 `],
			[/* reference */ 'r', `.Collections#synchronizedSet(java.util.Set)`],
			[/* text */ 't', `
 method.  This is best done at creation time, to prevent accidental
 unsynchronized access to the set:`]
		]],
		[/* code block */ 'c', `   Set s = Collections.synchronizedSet(new HashSet(...));`],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `The iterators returned by this class's `],
			[/* inline code block */ 'i', `iterator`],
			[/* text */ 't', ` method are
 `],
			[/* text */ 't', `fail-fast`],
			[/* text */ 't', `: if the set is modified at any time after the iterator is
 created, in any way except through the iterator's own `],
			[/* inline code block */ 'i', `remove`],
			[/* text */ 't', `
 method, the Iterator throws a `],
			[/* reference */ 'r', `java.util.ConcurrentModificationException`],
			[/* text */ 't', `.
 Thus, in the face of concurrent modification, the iterator fails quickly
 and cleanly, rather than risking arbitrary, non-deterministic behavior at
 an undetermined time in the future.

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
 should be used only to detect bugs.`]
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
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new, empty set; the backing `],
				[/* inline code block */ 'i', `HashMap`],
				[/* text */ 't', ` instance has
 the specified initial capacity and default load factor (0.75).`]
			],
			[/* parameters */
				[/* parameter */ 'initialCapacity', [/* parameter description */
					[/* text */ 't', `the initial capacity of the hash table`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the initial capacity is less
             than zero`]
				]]
			]
		]],
		[/* constructor */ '<init>(int,float)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new, empty set; the backing `],
				[/* inline code block */ 'i', `HashMap`],
				[/* text */ 't', ` instance has
 the specified initial capacity and the specified load factor.`]
			],
			[/* parameters */
				[/* parameter */ 'initialCapacity', [/* parameter description */
					[/* text */ 't', `the initial capacity of the hash map`]
				]],
				[/* parameter */ 'loadFactor', [/* parameter description */
					[/* text */ 't', `the load factor of the hash map`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the initial capacity is less
             than zero, or if the load factor is nonpositive`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.util.Collection)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new set containing the elements in the specified
 collection.  The `],
				[/* inline code block */ 'i', `HashMap`],
				[/* text */ 't', ` is created with default load factor
 (0.75) and an initial capacity sufficient to contain the elements in
 the specified collection.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the collection whose elements are to be placed into this set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified collection is null`]
				]]
			]
		]],
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new, empty set; the backing `],
				[/* inline code block */ 'i', `HashMap`],
				[/* text */ 't', ` instance has
 default initial capacity (16) and load factor (0.75).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'add(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Adds the specified element to this set if it is not already present.
 More formally, adds the specified element `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', ` to this set if
 this set contains no element `],
				[/* inline code block */ 'i', `e2`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `Objects.equals(e, e2)`],
				[/* text */ 't', `.
 If this set already contains the element, the call leaves the set
 unchanged and returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `element to be added to this set`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this set did not already contain the specified
 element`]
			]
		]],
		[/* method */ 'remove(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Removes the specified element from this set if it is present.
 More formally, removes an element `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `Objects.equals(o, e)`],
				[/* text */ 't', `,
 if this set contains such an element.  Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if
 this set contained the element (or equivalently, if this set
 changed as a result of the call).  (This set will not contain the
 element once the call returns.)`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `object to be removed from this set, if present`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the set contained the specified element`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Returns a shallow copy of this `],
				[/* inline code block */ 'i', `HashSet`],
				[/* text */ 't', ` instance: the elements
 themselves are not cloned.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a shallow copy of this set`]
			]
		]],
		[/* method */ 'clear()', [
			[/* method description */
				[/* text */ 't', `Removes all of the elements from this set.
 The set will be empty after this call returns.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'isEmpty()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this set contains no elements.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this set contains no elements`]
			]
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the number of elements in this set (its cardinality).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of elements in this set (its cardinality)`]
			]
		]],
		[/* method */ 'toArray(java.lang.Object[])', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns an array containing all of the elements in this collection;
 the runtime type of the returned array is that of the specified array.
 If the collection fits in the specified array, it is returned therein.
 Otherwise, a new array is allocated with the runtime type of the
 specified array and the size of this collection.

 `],
					[/* block */ 'b', [
						[/* text */ 't', `If this collection fits in the specified array with room to spare
 (i.e., the array has more elements than this collection), the element
 in the array immediately following the end of the collection is set to
 `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `.  (This is useful in determining the length of this
 collection `],
						[/* text */ 't', `only`],
						[/* text */ 't', ` if the caller knows that this collection does
 not contain any `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', ` elements.)

 `]
					]],
					[/* block */ 'b', `If this collection makes any guarantees as to what order its elements
 are returned by its iterator, this method must return the elements in
 the same order.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the array into which the elements of this collection are to be
        stored, if it is big enough; otherwise, a new array of the same
        runtime type is allocated for this purpose.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array containing all of the elements in this collection`]
			]
		]],
		[/* method */ 'toArray()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns an array containing all of the elements in this collection.
 If this collection makes any guarantees as to what order its elements
 are returned by its iterator, this method must return the elements in
 the same order. The returned array's `],
					[/* reference */ 'r', `java.Class#getComponentType()`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', `.

 `],
					[/* block */ 'b', `The returned array will be "safe" in that no references to it are
 maintained by this collection.  (In other words, this method must
 allocate a new array even if this collection is backed by an array).
 The caller is thus free to modify the returned array.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array, whose `],
				[/* reference */ 'r', `java.Class#getComponentType()`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `, containing all of the elements in this collection`]
			]
		]],
		[/* method */ 'iterator()', [
			[/* method description */
				[/* text */ 't', `Returns an iterator over the elements in this set.  The elements
 are returned in no particular order.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an Iterator over the elements in this set`]
			]
		]],
		[/* method */ 'contains(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this set contains the specified element.
 More formally, returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this set
 contains an element `],
				[/* inline code block */ 'i', `e`],
				[/* text */ 't', ` such that
 `],
				[/* inline code block */ 'i', `Objects.equals(o, e)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `element whose presence in this set is to be tested`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this set contains the specified element`]
			]
		]],
		[/* method */ 'spliterator()', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* reference */ 'r', `.Spliterator#binding`],
				[/* text */ 't', `
 and `],
				[/* text */ 't', `fail-fast`],
				[/* reference */ 'r', `java.util.Spliterator`],
				[/* text */ 't', ` over the elements in this
 set.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `Spliterator`],
					[/* text */ 't', ` reports `],
					[/* reference */ 'r', `.Spliterator#SIZED`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `.Spliterator#DISTINCT`],
					[/* text */ 't', `.  Overriding implementations should document
 the reporting of additional characteristic values.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Spliterator`],
				[/* text */ 't', ` over the elements in this set`]
			]
		]]
	],
]);
