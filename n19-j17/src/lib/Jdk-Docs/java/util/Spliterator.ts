import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Spliterator', [
	[/* class description */
		[/* text */ 't', `An object for traversing and partitioning elements of a source.  The source
 of elements covered by a Spliterator could be, for example, an array, a
 `],
		[/* reference */ 'r', `java.util.Collection`, `Collection`],
		[/* text */ 't', `, an IO channel, or a generator function.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `A Spliterator may traverse elements individually (`],
			[/* reference */ 'r', `#tryAdvance(java.util.function.Consumer)`, `tryAdvance()`],
			[/* text */ 't', `) or sequentially in bulk
 (`],
			[/* reference */ 'r', `#forEachRemaining(java.util.function.Consumer)`, `forEachRemaining()`],
			[/* text */ 't', `).

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A Spliterator may also partition off some of its elements (using
 `],
			[/* reference */ 'r', `#trySplit()`, `trySplit()`],
			[/* text */ 't', `) as another Spliterator, to be used in
 possibly-parallel operations.  Operations using a Spliterator that
 cannot split, or does so in a highly imbalanced or inefficient
 manner, are unlikely to benefit from parallelism.  Traversal
 and splitting exhaust elements; each Spliterator is useful for only a single
 bulk computation.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A Spliterator also reports a set of `],
			[/* reference */ 'r', `#characteristics()`, `characteristics()`],
			[/* text */ 't', ` of its
 structure, source, and elements from among `],
			[/* text */ 't', `ORDERED`],
			[/* text */ 't', `,
 `],
			[/* text */ 't', `DISTINCT`],
			[/* text */ 't', `, `],
			[/* text */ 't', `SORTED`],
			[/* text */ 't', `, `],
			[/* text */ 't', `SIZED`],
			[/* text */ 't', `, `],
			[/* text */ 't', `NONNULL`],
			[/* text */ 't', `,
 `],
			[/* text */ 't', `IMMUTABLE`],
			[/* text */ 't', `, `],
			[/* text */ 't', `CONCURRENT`],
			[/* text */ 't', `, and `],
			[/* text */ 't', `SUBSIZED`],
			[/* text */ 't', `. These may
 be employed by Spliterator clients to control, specialize or simplify
 computation.  For example, a Spliterator for a `],
			[/* reference */ 'r', `java.util.Collection`, `Collection`],
			[/* text */ 't', ` would
 report `],
			[/* inline code block */ 'i', `SIZED`],
			[/* text */ 't', `, a Spliterator for a `],
			[/* reference */ 'r', `java.util.Set`, `Set`],
			[/* text */ 't', ` would report
 `],
			[/* inline code block */ 'i', `DISTINCT`],
			[/* text */ 't', `, and a Spliterator for a `],
			[/* reference */ 'r', `java.util.SortedSet`, `SortedSet`],
			[/* text */ 't', ` would also
 report `],
			[/* inline code block */ 'i', `SORTED`],
			[/* text */ 't', `.  Characteristics are reported as a simple unioned bit
 set.

 Some characteristics additionally constrain method behavior; for example if
 `],
			[/* inline code block */ 'i', `ORDERED`],
			[/* text */ 't', `, traversal methods must conform to their documented ordering.
 New characteristics may be defined in the future, so implementors should not
 assign meanings to unlisted values.

 `]
		]],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `binding`, `A Spliterator that does not report IMMUTABLE or CONCURRENT is expected to have a documented policy concerning: when the spliterator binds to the element source; and detection of structural interference of the element source detected after binding.`],
			[/* text */ 't', `  A
 `],
			[/* text */ 't', `late-binding`],
			[/* text */ 't', ` Spliterator binds to the source of elements at the
 point of first traversal, first split, or first query for estimated size,
 rather than at the time the Spliterator is created.  A Spliterator that is
 not `],
			[/* text */ 't', `late-binding`],
			[/* text */ 't', ` binds to the source of elements at the point of
 construction or first invocation of any method.  Modifications made to the
 source prior to binding are reflected when the Spliterator is traversed.
 After binding a Spliterator should, on a best-effort basis, throw
 `],
			[/* reference */ 'r', `java.util.ConcurrentModificationException`, `ConcurrentModificationException`],
			[/* text */ 't', ` if structural interference is
 detected.  Spliterators that do this are called `],
			[/* text */ 't', `fail-fast`],
			[/* text */ 't', `.  The
 bulk traversal method (`],
			[/* reference */ 'r', `#forEachRemaining(java.util.function.Consumer)`, `forEachRemaining()`],
			[/* text */ 't', `) of a
 Spliterator may optimize traversal and check for structural interference
 after all elements have been traversed, rather than checking per-element and
 failing immediately.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Spliterators can provide an estimate of the number of remaining elements
 via the `],
			[/* reference */ 'r', `#estimateSize()`, `estimateSize()`],
			[/* text */ 't', ` method.  Ideally, as reflected in characteristic
 `],
			[/* text */ 't', `SIZED`],
			[/* text */ 't', `, this value corresponds exactly to the number of elements
 that would be encountered in a successful traversal.  However, even when not
 exactly known, an estimated value may still be useful to operations
 being performed on the source, such as helping to determine whether it is
 preferable to split further or traverse the remaining elements sequentially.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Despite their obvious utility in parallel algorithms, spliterators are not
 expected to be thread-safe; instead, implementations of parallel algorithms
 using spliterators should ensure that the spliterator is only used by one
 thread at a time.  This is generally easy to attain via `],
			[/* text */ 't', `serial
 thread-confinement`],
			[/* text */ 't', `, which often is a natural consequence of typical
 parallel algorithms that work by recursive decomposition.  A thread calling
 `],
			[/* reference */ 'r', `#trySplit()`, `trySplit()`],
			[/* text */ 't', ` may hand over the returned Spliterator to another thread,
 which in turn may traverse or further split that Spliterator.  The behaviour
 of splitting and traversal is undefined if two or more threads operate
 concurrently on the same spliterator.  If the original thread hands a
 spliterator off to another thread for processing, it is best if that handoff
 occurs before any elements are consumed with `],
			[/* reference */ 'r', `#tryAdvance(java.util.function.Consumer)`, `tryAdvance()`],
			[/* text */ 't', `, as certain guarantees (such as the accuracy of
 `],
			[/* reference */ 'r', `#estimateSize()`, `estimateSize()`],
			[/* text */ 't', ` for `],
			[/* inline code block */ 'i', `SIZED`],
			[/* text */ 't', ` spliterators) are only valid before
 traversal has begun.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Primitive subtype specializations of `],
			[/* inline code block */ 'i', `Spliterator`],
			[/* text */ 't', ` are provided for
 `],
			[/* reference */ 'r', `java.util.Spliterator.OfInt`, `int`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.util.Spliterator.OfLong`, `long`],
			[/* text */ 't', `, and `],
			[/* reference */ 'r', `java.util.Spliterator.OfDouble`, `double`],
			[/* text */ 't', ` values.
 The subtype default implementations of
 `],
			[/* reference */ 'r', `#tryAdvance(java.util.function.Consumer)`, `tryAdvance(java.util.function.Consumer)`],
			[/* text */ 't', `
 and `],
			[/* reference */ 'r', `#forEachRemaining(java.util.function.Consumer)`, `forEachRemaining(java.util.function.Consumer)`],
			[/* text */ 't', ` box
 primitive values to instances of their corresponding wrapper class.  Such
 boxing may undermine any performance advantages gained by using the primitive
 specializations.  To avoid boxing, the corresponding primitive-based methods
 should be used.  For example,
 `],
			[/* reference */ 'r', `java.util.Spliterator.OfPrimitive#tryAdvance(T_CONS)`, `Spliterator.OfPrimitive.tryAdvance(java.util.function.IntConsumer)`],
			[/* text */ 't', `
 and `],
			[/* reference */ 'r', `java.util.Spliterator.OfPrimitive#forEachRemaining(T_CONS)`, `Spliterator.OfPrimitive.forEachRemaining(java.util.function.IntConsumer)`],
			[/* text */ 't', `
 should be used in preference to
 `],
			[/* reference */ 'r', `java.util.Spliterator.OfInt#tryAdvance(java.util.function.Consumer)`, `Spliterator.OfInt.tryAdvance(java.util.function.Consumer)`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `java.util.Spliterator.OfInt#forEachRemaining(java.util.function.Consumer)`, `Spliterator.OfInt.forEachRemaining(java.util.function.Consumer)`],
			[/* text */ 't', `.
 Traversal of primitive values using boxing-based methods
 `],
			[/* reference */ 'r', `#tryAdvance(java.util.function.Consumer)`, `tryAdvance()`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `#forEachRemaining(java.util.function.Consumer)`, `forEachRemaining()`],
			[/* text */ 't', `
 does not affect the order in which the values, transformed to boxed values,
 are encountered.`]
		]]
	],
	[/* fields */
		[/* field */ 'CONCURRENT', [
			[/* field description */
				[/* text */ 't', `Characteristic value signifying that the element source may be safely
 concurrently modified (allowing additions, replacements, and/or removals)
 by multiple threads without external synchronization. If so, the
 Spliterator is expected to have a documented policy concerning the impact
 of modifications during traversal.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A top-level Spliterator should not report both `],
					[/* inline code block */ 'i', `CONCURRENT`],
					[/* text */ 't', ` and
 `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', `, since the finite size, if known, may change if the source
 is concurrently modified during traversal. Such a Spliterator is
 inconsistent and no guarantees can be made about any computation using
 that Spliterator. Sub-spliterators may report `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` if the
 sub-split size is known and additions or removals to the source are not
 reflected when traversing.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `A top-level Spliterator should not report both `],
					[/* inline code block */ 'i', `CONCURRENT`],
					[/* text */ 't', ` and
 `],
					[/* inline code block */ 'i', `IMMUTABLE`],
					[/* text */ 't', `, since they are mutually exclusive. Such a Spliterator
 is inconsistent and no guarantees can be made about any computation using
 that Spliterator. Sub-spliterators may report `],
					[/* inline code block */ 'i', `IMMUTABLE`],
					[/* text */ 't', ` if
 additions or removals to the source are not reflected when traversing.`]
				]]
			],
		]],
		[/* field */ 'DISTINCT', [
			[/* field description */
				[/* text */ 't', `Characteristic value signifying that, for each pair of
 encountered elements `],
				[/* inline code block */ 'i', `x, y`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `!x.equals(y)`],
				[/* text */ 't', `. This
 applies for example, to a Spliterator based on a `],
				[/* reference */ 'r', `java.util.Set`, `Set`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'IMMUTABLE', [
			[/* field description */
				[/* text */ 't', `Characteristic value signifying that the element source cannot be
 structurally modified; that is, elements cannot be added, replaced, or
 removed, so such changes cannot occur during traversal. A Spliterator
 that does not report `],
				[/* inline code block */ 'i', `IMMUTABLE`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `CONCURRENT`],
				[/* text */ 't', ` is expected
 to have a documented policy (for example throwing
 `],
				[/* reference */ 'r', `java.util.ConcurrentModificationException`, `ConcurrentModificationException`],
				[/* text */ 't', `) concerning structural
 interference detected during traversal.`]
			],
		]],
		[/* field */ 'NONNULL', [
			[/* field description */
				[/* text */ 't', `Characteristic value signifying that the source guarantees that
 encountered elements will not be `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `. (This applies,
 for example, to most concurrent collections, queues, and maps.)`]
			],
		]],
		[/* field */ 'ORDERED', [
			[/* field description */
				[/* text */ 't', `Characteristic value signifying that an encounter order is defined for
 elements. If so, this Spliterator guarantees that method
 `],
				[/* reference */ 'r', `#trySplit()`, `trySplit()`],
				[/* text */ 't', ` splits a strict prefix of elements, that method
 `],
				[/* reference */ 'r', `#tryAdvance(java.util.function.Consumer)`, `tryAdvance(java.util.function.Consumer<? super T>)`],
				[/* text */ 't', ` steps by one element in prefix order, and that
 `],
				[/* reference */ 'r', `#forEachRemaining(java.util.function.Consumer)`, `forEachRemaining(java.util.function.Consumer<? super T>)`],
				[/* text */ 't', ` performs actions in encounter order.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A `],
					[/* reference */ 'r', `java.util.Collection`, `Collection`],
					[/* text */ 't', ` has an encounter order if the corresponding
 `],
					[/* reference */ 'r', `java.util.Collection#iterator()`, `Collection.iterator()`],
					[/* text */ 't', ` documents an order. If so, the encounter
 order is the same as the documented order. Otherwise, a collection does
 not have an encounter order.`]
				]]
			],
		]],
		[/* field */ 'SIZED', [
			[/* field description */
				[/* text */ 't', `Characteristic value signifying that the value returned from
 `],
				[/* inline code block */ 'i', `estimateSize()`],
				[/* text */ 't', ` prior to traversal or splitting represents a
 finite size that, in the absence of structural source modification,
 represents an exact count of the number of elements that would be
 encountered by a complete traversal.`]
			],
		]],
		[/* field */ 'SORTED', [
			[/* field description */
				[/* text */ 't', `Characteristic value signifying that encounter order follows a defined
 sort order. If so, method `],
				[/* reference */ 'r', `#getComparator()`, `getComparator()`],
				[/* text */ 't', ` returns the associated
 Comparator, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if all elements are `],
				[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
				[/* text */ 't', ` and
 are sorted by their natural ordering.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A Spliterator that reports `],
					[/* inline code block */ 'i', `SORTED`],
					[/* text */ 't', ` must also report
 `],
					[/* inline code block */ 'i', `ORDERED`],
					[/* text */ 't', `.`]
				]]
			],
		]],
		[/* field */ 'SUBSIZED', [
			[/* field description */
				[/* text */ 't', `Characteristic value signifying that all Spliterators resulting from
 `],
				[/* inline code block */ 'i', `trySplit()`],
				[/* text */ 't', ` will be both `],
				[/* text */ 't', `SIZED`],
				[/* text */ 't', ` and `],
				[/* text */ 't', `SUBSIZED`],
				[/* text */ 't', `.
 (This means that all child Spliterators, whether direct or indirect, will
 be `],
				[/* inline code block */ 'i', `SIZED`],
				[/* text */ 't', `.)

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A Spliterator that does not report `],
					[/* inline code block */ 'i', `SIZED`],
					[/* text */ 't', ` as required by
 `],
					[/* inline code block */ 'i', `SUBSIZED`],
					[/* text */ 't', ` is inconsistent and no guarantees can be made about any
 computation using that Spliterator.`]
				]]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'tryAdvance(java.util.function.Consumer)', [
			[/* method description */
				[/* text */ 't', `If a remaining element exists, performs the given action on it,
 returning `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `; else returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.  If this
 Spliterator is `],
				[/* text */ 't', `ORDERED`],
				[/* text */ 't', ` the action is performed on the
 next element in encounter order.  Exceptions thrown by the
 action are relayed to the caller.
 `],
				[/* block */ 'b', `
 Subsequent behavior of a spliterator is unspecified if the action throws
 an exception.`]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `The action`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified action is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if no remaining elements existed
 upon entry to this method, else `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'characteristics()', [
			[/* method description */
				[/* text */ 't', `Returns a set of characteristics of this Spliterator and its
 elements. The result is represented as ORed values from `],
				[/* text */ 't', `ORDERED`],
				[/* text */ 't', `, `],
				[/* text */ 't', `DISTINCT`],
				[/* text */ 't', `, `],
				[/* text */ 't', `SORTED`],
				[/* text */ 't', `, `],
				[/* text */ 't', `SIZED`],
				[/* text */ 't', `,
 `],
				[/* text */ 't', `NONNULL`],
				[/* text */ 't', `, `],
				[/* text */ 't', `IMMUTABLE`],
				[/* text */ 't', `, `],
				[/* text */ 't', `CONCURRENT`],
				[/* text */ 't', `,
 `],
				[/* text */ 't', `SUBSIZED`],
				[/* text */ 't', `.  Repeated calls to `],
				[/* inline code block */ 'i', `characteristics()`],
				[/* text */ 't', ` on
 a given spliterator, prior to or in-between calls to `],
				[/* inline code block */ 'i', `trySplit`],
				[/* text */ 't', `,
 should always return the same result.

 `],
				[/* block */ 'b', `If a Spliterator reports an inconsistent set of
 characteristics (either those returned from a single invocation
 or across multiple invocations), no guarantees can be made
 about any computation using this Spliterator.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a representation of characteristics`]
			]
		]],
		[/* method */ 'trySplit()', [
			[/* method description */
				[/* text */ 't', `If this spliterator can be partitioned, returns a Spliterator
 covering elements, that will, upon return from this method, not
 be covered by this Spliterator.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If this Spliterator is `],
					[/* text */ 't', `ORDERED`],
					[/* text */ 't', `, the returned Spliterator
 must cover a strict prefix of the elements.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Unless this Spliterator covers an infinite number of elements,
 repeated calls to `],
					[/* inline code block */ 'i', `trySplit()`],
					[/* text */ 't', ` must eventually return `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.
 Upon non-null return:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `the value reported for `],
						[/* inline code block */ 'i', `estimateSize()`],
						[/* text */ 't', ` before splitting,
 must, after splitting, be greater than or equal to `],
						[/* inline code block */ 'i', `estimateSize()`],
						[/* text */ 't', `
 for this and the returned Spliterator; and`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `if this Spliterator is `],
						[/* inline code block */ 'i', `SUBSIZED`],
						[/* text */ 't', `, then `],
						[/* inline code block */ 'i', `estimateSize()`],
						[/* text */ 't', `
 for this spliterator before splitting must be equal to the sum of
 `],
						[/* inline code block */ 'i', `estimateSize()`],
						[/* text */ 't', ` for this and the returned Spliterator after
 splitting.`]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `This method may return `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` for any reason,
 including emptiness, inability to split after traversal has
 commenced, data structure constraints, and efficiency
 considerations.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Spliterator`],
				[/* text */ 't', ` covering some portion of the
 elements, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this spliterator cannot be split`]
			]
		]],
		[/* method */ 'estimateSize()', [
			[/* method description */
				[/* text */ 't', `Returns an estimate of the number of elements that would be
 encountered by a `],
				[/* reference */ 'r', `#forEachRemaining(java.util.function.Consumer)`, `forEachRemaining(java.util.function.Consumer<? super T>)`],
				[/* text */ 't', ` traversal, or returns `],
				[/* reference */ 'r', `java.lang.Long#MAX_VALUE`, `Long.MAX_VALUE`],
				[/* text */ 't', ` if infinite, unknown, or too expensive to compute.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If this Spliterator is `],
					[/* text */ 't', `SIZED`],
					[/* text */ 't', ` and has not yet been partially
 traversed or split, or this Spliterator is `],
					[/* text */ 't', `SUBSIZED`],
					[/* text */ 't', ` and has
 not yet been partially traversed, this estimate must be an accurate
 count of elements that would be encountered by a complete traversal.
 Otherwise, this estimate may be arbitrarily inaccurate, but must decrease
 as specified across invocations of `],
					[/* reference */ 'r', `#trySplit()`, `trySplit()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the estimated size, or `],
				[/* inline code block */ 'i', `Long.MAX_VALUE`],
				[/* text */ 't', ` if infinite,
         unknown, or too expensive to compute.`]
			]
		]],
		[/* method */ 'hasCharacteristics(int)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this Spliterator's `],
				[/* reference */ 'r', `#characteristics()`, `characteristics()`],
				[/* text */ 't', ` contain all of the given characteristics.`]
			],
			[/* parameters */
				[/* parameter */ 'characteristics', [/* parameter description */
					[/* text */ 't', `the characteristics to check for`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if all the specified characteristics are present,
 else `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'getComparator()', [
			[/* method description */
				[/* text */ 't', `If this Spliterator's source is `],
				[/* text */ 't', `SORTED`],
				[/* text */ 't', ` by a `],
				[/* reference */ 'r', `java.util.Comparator`, `Comparator`],
				[/* text */ 't', `,
 returns that `],
				[/* inline code block */ 'i', `Comparator`],
				[/* text */ 't', `. If the source is `],
				[/* inline code block */ 'i', `SORTED`],
				[/* text */ 't', ` in
 `],
				[/* reference */ 'r', `java.lang.Comparable`, `natural order`],
				[/* text */ 't', `, returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.  Otherwise,
 if the source is not `],
				[/* inline code block */ 'i', `SORTED`],
				[/* text */ 't', `, throws `],
				[/* reference */ 'r', `java.lang.IllegalStateException`, `IllegalStateException`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if the spliterator does not report
         a characteristic of `],
					[/* inline code block */ 'i', `SORTED`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a Comparator, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the elements are sorted in the
 natural order.`]
			]
		]],
		[/* method */ 'getExactSizeIfKnown()', [
			[/* method description */
				[/* text */ 't', `Convenience method that returns `],
				[/* reference */ 'r', `#estimateSize()`, `estimateSize()`],
				[/* text */ 't', ` if this
 Spliterator is `],
				[/* text */ 't', `SIZED`],
				[/* text */ 't', `, else `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the exact size, if known, else `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'forEachRemaining(java.util.function.Consumer)', [
			[/* method description */
				[/* text */ 't', `Performs the given action for each remaining element, sequentially in
 the current thread, until all elements have been processed or the action
 throws an exception.  If this Spliterator is `],
				[/* text */ 't', `ORDERED`],
				[/* text */ 't', `, actions
 are performed in encounter order.  Exceptions thrown by the action
 are relayed to the caller.
 `],
				[/* block */ 'b', `
 Subsequent behavior of a spliterator is unspecified if the action throws
 an exception.`]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `The action`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified action is null`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
