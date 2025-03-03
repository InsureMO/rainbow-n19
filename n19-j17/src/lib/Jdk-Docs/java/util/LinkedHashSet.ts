import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.LinkedHashSet', [
	[/* class description */
		[/* block */ 'b', [
			[/* text */ 't', `Hash table and linked list implementation of the `],
			[/* inline code block */ 'i', `Set`],
			[/* text */ 't', ` interface,
 with predictable iteration order.  This implementation differs from
 `],
			[/* inline code block */ 'i', `HashSet`],
			[/* text */ 't', ` in that it maintains a doubly-linked list running through
 all of its entries.  This linked list defines the iteration ordering,
 which is the order in which elements were inserted into the set
 (`],
			[/* text */ 't', `insertion-order`],
			[/* text */ 't', `).  Note that insertion order is `],
			[/* text */ 't', `not`],
			[/* text */ 't', ` affected
 if an element is `],
			[/* text */ 't', `re-inserted`],
			[/* text */ 't', ` into the set.  (An element `],
			[/* inline code block */ 'i', `e`],
			[/* text */ 't', `
 is reinserted into a set `],
			[/* inline code block */ 'i', `s`],
			[/* text */ 't', ` if `],
			[/* inline code block */ 'i', `s.add(e)`],
			[/* text */ 't', ` is invoked when
 `],
			[/* inline code block */ 'i', `s.contains(e)`],
			[/* text */ 't', ` would return `],
			[/* inline code block */ 'i', `true`],
			[/* text */ 't', ` immediately prior to
 the invocation.)

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This implementation spares its clients from the unspecified, generally
 chaotic ordering provided by `],
			[/* reference */ 'r', `java.util.HashSet`],
			[/* text */ 't', `, without incurring the
 increased cost associated with `],
			[/* reference */ 'r', `java.util.TreeSet`],
			[/* text */ 't', `.  It can be used to
 produce a copy of a set that has the same order as the original, regardless
 of the original set's implementation:
 `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `void foo(Set<String> s) {
         Set<String> copy = new LinkedHashSet<>(s);
         ...
     }`]
		]],
		[/* text */ 't', `
 This technique is particularly useful if a module takes a set on input,
 copies it, and later returns results whose order is determined by that of
 the copy.  (Clients generally appreciate having things returned in the same
 order they were presented.)

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `This class provides all of the optional `],
			[/* inline code block */ 'i', `Set`],
			[/* text */ 't', ` operations, and
 permits null elements.  Like `],
			[/* inline code block */ 'i', `HashSet`],
			[/* text */ 't', `, it provides constant-time
 performance for the basic operations (`],
			[/* inline code block */ 'i', `add`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `contains`],
			[/* text */ 't', ` and
 `],
			[/* inline code block */ 'i', `remove`],
			[/* text */ 't', `), assuming the hash function disperses elements
 properly among the buckets.  Performance is likely to be just slightly
 below that of `],
			[/* inline code block */ 'i', `HashSet`],
			[/* text */ 't', `, due to the added expense of maintaining the
 linked list, with one exception: Iteration over a `],
			[/* inline code block */ 'i', `LinkedHashSet`],
			[/* text */ 't', `
 requires time proportional to the `],
			[/* text */ 't', `size`],
			[/* text */ 't', ` of the set, regardless of
 its capacity.  Iteration over a `],
			[/* inline code block */ 'i', `HashSet`],
			[/* text */ 't', ` is likely to be more
 expensive, requiring time proportional to its `],
			[/* text */ 't', `capacity`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A linked hash set has two parameters that affect its performance:
 `],
			[/* text */ 't', `initial capacity`],
			[/* text */ 't', ` and `],
			[/* text */ 't', `load factor`],
			[/* text */ 't', `.  They are defined precisely
 as for `],
			[/* inline code block */ 'i', `HashSet`],
			[/* text */ 't', `.  Note, however, that the penalty for choosing an
 excessively high value for initial capacity is less severe for this class
 than for `],
			[/* inline code block */ 'i', `HashSet`],
			[/* text */ 't', `, as iteration times for this class are unaffected
 by capacity.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Note that this implementation is not synchronized.`],
			[/* text */ 't', `
 If multiple threads access a linked hash set concurrently, and at least
 one of the threads modifies the set, it `],
			[/* text */ 't', `must`],
			[/* text */ 't', ` be synchronized
 externally.  This is typically accomplished by synchronizing on some
 object that naturally encapsulates the set.

 If no such object exists, the set should be "wrapped" using the
 `],
			[/* reference */ 'r', `.Collections#synchronizedSet(java.util.Set)`],
			[/* text */ 't', `
 method.  This is best done at creation time, to prevent accidental
 unsynchronized access to the set: `]
		]],
		[/* code block */ 'c', `   Set s = Collections.synchronizedSet(new LinkedHashSet(...));`],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `The iterators returned by this class's `],
			[/* inline code block */ 'i', `iterator`],
			[/* text */ 't', ` method are
 `],
			[/* text */ 't', `fail-fast`],
			[/* text */ 't', `: if the set is modified at any time after the iterator
 is created, in any way except through the iterator's own `],
			[/* inline code block */ 'i', `remove`],
			[/* text */ 't', `
 method, the iterator will throw a `],
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
 exception for its correctness:   `],
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
		[/* constructor */ '<init>(java.util.Collection)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new linked hash set with the same elements as the
 specified collection.  The linked hash set is created with an initial
 capacity sufficient to hold the elements in the specified collection
 and the default load factor (0.75).`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the collection whose elements are to be placed into
           this set`]
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
				[/* text */ 't', `Constructs a new, empty linked hash set with the default initial
 capacity (16) and load factor (0.75).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new, empty linked hash set with the specified initial
 capacity and the default load factor (0.75).`]
			],
			[/* parameters */
				[/* parameter */ 'initialCapacity', [/* parameter description */
					[/* text */ 't', `the initial capacity of the LinkedHashSet`]
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
				[/* text */ 't', `Constructs a new, empty linked hash set with the specified initial
 capacity and load factor.`]
			],
			[/* parameters */
				[/* parameter */ 'initialCapacity', [/* parameter description */
					[/* text */ 't', `the initial capacity of the linked hash set`]
				]],
				[/* parameter */ 'loadFactor', [/* parameter description */
					[/* text */ 't', `the load factor of the linked hash set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the initial capacity is less
               than zero, or if the load factor is nonpositive`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'spliterator()', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* reference */ 'r', `.Spliterator#binding`],
				[/* text */ 't', `
 and `],
				[/* text */ 't', `fail-fast`],
				[/* inline code block */ 'i', `Spliterator`],
				[/* text */ 't', ` over the elements in this set.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `Spliterator`],
					[/* text */ 't', ` reports `],
					[/* reference */ 'r', `.Spliterator#SIZED`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `.Spliterator#DISTINCT`],
					[/* text */ 't', `, and `],
					[/* inline code block */ 'i', `ORDERED`],
					[/* text */ 't', `.  Implementations
 should document the reporting of additional characteristic values.`]
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
