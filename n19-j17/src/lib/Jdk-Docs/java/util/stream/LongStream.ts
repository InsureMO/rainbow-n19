import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.stream.LongStream', [
	[/* class description */
		[/* text */ 't', `A sequence of primitive long-valued elements supporting sequential and parallel
 aggregate operations.  This is the `],
		[/* inline code block */ 'i', `long`],
		[/* text */ 't', ` primitive specialization of
 `],
		[/* reference */ 'r', `java.util.stream.Stream`, `Stream`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The following example illustrates an aggregate operation using
 `],
			[/* reference */ 'r', `java.util.stream.Stream`, `Stream`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `java.util.stream.LongStream`, `LongStream`],
			[/* text */ 't', `, computing the sum of the weights of the
 red widgets:

 `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `long sum = widgets.stream()
                       .filter(w -> w.getColor() == RED)
                       .mapToLong(w -> w.getWeight())
                       .sum();`]
		]],
		[/* text */ 't', `

 See the class documentation for `],
		[/* reference */ 'r', `java.util.stream.Stream`, `Stream`],
		[/* text */ 't', ` and the package documentation
 for `],
		[/* text */ 't', `java.util.stream`],
		[/* text */ 't', ` for additional
 specification of streams, stream operations, stream pipelines, and
 parallelism.`],
		[/* block */ 'b', '']
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'collect(java.util.function.Supplier,java.util.function.ObjLongConsumer,java.util.function.BiConsumer)', [
			[/* method description */
				[/* text */ 't', `Performs a `],
				[/* text */ 't', `mutable reduction`],
				[/* text */ 't', ` operation on the elements of this stream.  A mutable
 reduction is one in which the reduced value is a mutable result container,
 such as an `],
				[/* inline code block */ 'i', `ArrayList`],
				[/* text */ 't', `, and elements are incorporated by updating
 the state of the result rather than by replacing the result.  This
 produces a result equivalent to:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `R result = supplier.get();
     for (long element : this stream)
         accumulator.accept(result, element);
     return result;`]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Like `],
					[/* reference */ 'r', `#reduce(long,java.util.function.LongBinaryOperator)`, `reduce(long, LongBinaryOperator)`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `collect`],
					[/* text */ 't', ` operations
 can be parallelized without requiring additional synchronization.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* text */ 't', `terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'supplier', [/* parameter description */
					[/* text */ 't', `a function that creates a new mutable result container.
                 For a parallel execution, this function may be called
                 multiple times and must return a fresh value each time.`]
				]],
				[/* parameter */ 'accumulator', [/* parameter description */
					[/* text */ 't', `an `],
					[/* text */ 't', `associative`],
					[/* text */ 't', `,
                    `],
					[/* text */ 't', `non-interfering`],
					[/* text */ 't', `,
                    `],
					[/* text */ 't', `stateless`],
					[/* text */ 't', `
                    function that must fold an element into a result
                    container.`]
				]],
				[/* parameter */ 'combiner', [/* parameter description */
					[/* text */ 't', `an `],
					[/* text */ 't', `associative`],
					[/* text */ 't', `,
                    `],
					[/* text */ 't', `non-interfering`],
					[/* text */ 't', `,
                    `],
					[/* text */ 't', `stateless`],
					[/* text */ 't', `
                    function that accepts two partial result containers
                    and merges them, which must be compatible with the
                    accumulator function.  The combiner function must fold
                    the elements from the second result container into the
                    first result container.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the result of the reduction`]
			]
		]],
		[/* method */ 'mapToObj(java.util.function.LongFunction)', [
			[/* method description */
				[/* text */ 't', `Returns an object-valued `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', ` consisting of the results of
 applying the given function to the elements of this stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* text */ 't', `intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a `],
					[/* text */ 't', `non-interfering`],
					[/* text */ 't', `,
               `],
					[/* text */ 't', `stateless`],
					[/* text */ 't', `
               function to apply to each element`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'allMatch(java.util.function.LongPredicate)', [
			[/* method description */
				[/* text */ 't', `Returns whether all elements of this stream match the provided predicate.
 May not evaluate the predicate on all elements if not necessary for
 determining the result.  If the stream is empty then `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` is
 returned and the predicate is not evaluated.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* text */ 't', `short-circuiting terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'predicate', [/* parameter description */
					[/* text */ 't', `a `],
					[/* text */ 't', `non-interfering`],
					[/* text */ 't', `,
                  `],
					[/* text */ 't', `stateless`],
					[/* text */ 't', `
                  predicate to apply to elements of this stream`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if either all elements of the stream match the
 provided predicate or the stream is empty, otherwise `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'anyMatch(java.util.function.LongPredicate)', [
			[/* method description */
				[/* text */ 't', `Returns whether any elements of this stream match the provided
 predicate.  May not evaluate the predicate on all elements if not
 necessary for determining the result.  If the stream is empty then
 `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` is returned and the predicate is not evaluated.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* text */ 't', `short-circuiting terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'predicate', [/* parameter description */
					[/* text */ 't', `a `],
					[/* text */ 't', `non-interfering`],
					[/* text */ 't', `,
                  `],
					[/* text */ 't', `stateless`],
					[/* text */ 't', `
                  predicate to apply to elements of this stream`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if any elements of the stream match the provided
 predicate, otherwise `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'noneMatch(java.util.function.LongPredicate)', [
			[/* method description */
				[/* text */ 't', `Returns whether no elements of this stream match the provided predicate.
 May not evaluate the predicate on all elements if not necessary for
 determining the result.  If the stream is empty then `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` is
 returned and the predicate is not evaluated.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* text */ 't', `short-circuiting terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'predicate', [/* parameter description */
					[/* text */ 't', `a `],
					[/* text */ 't', `non-interfering`],
					[/* text */ 't', `,
                  `],
					[/* text */ 't', `stateless`],
					[/* text */ 't', `
                  predicate to apply to elements of this stream`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if either no elements of the stream match the
 provided predicate or the stream is empty, otherwise `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'summaryStatistics()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `LongSummaryStatistics`],
				[/* text */ 't', ` describing various summary data
 about the elements of this stream.  This is a special case of a
 `],
				[/* text */ 't', `reduction`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* text */ 't', `terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LongSummaryStatistics`],
				[/* text */ 't', ` describing various summary data
 about the elements of this stream`]
			]
		]],
		[/* method */ 'average()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `OptionalDouble`],
				[/* text */ 't', ` describing the arithmetic mean of elements of
 this stream, or an empty optional if this stream is empty.  This is a
 special case of a
 `],
				[/* text */ 't', `reduction`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* text */ 't', `terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OptionalDouble`],
				[/* text */ 't', ` containing the average element of this
 stream, or an empty optional if the stream is empty`]
			]
		]],
		[/* method */ 'findAny()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* reference */ 'r', `java.util.OptionalLong`, `OptionalLong`],
				[/* text */ 't', ` describing some element of the stream, or
 an empty `],
				[/* inline code block */ 'i', `OptionalLong`],
				[/* text */ 't', ` if the stream is empty.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* text */ 't', `short-circuiting terminal operation`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The behavior of this operation is explicitly nondeterministic; it is
 free to select any element in the stream.  This is to allow for maximal
 performance in parallel operations; the cost is that multiple invocations
 on the same source may not return the same result.  (If a stable result
 is desired, use `],
					[/* reference */ 'r', `#findFirst()`, `findFirst()`],
					[/* text */ 't', ` instead.)`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OptionalLong`],
				[/* text */ 't', ` describing some element of this stream,
 or an empty `],
				[/* inline code block */ 'i', `OptionalLong`],
				[/* text */ 't', ` if the stream is empty`]
			]
		]],
		[/* method */ 'findFirst()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* reference */ 'r', `java.util.OptionalLong`, `OptionalLong`],
				[/* text */ 't', ` describing the first element of this
 stream, or an empty `],
				[/* inline code block */ 'i', `OptionalLong`],
				[/* text */ 't', ` if the stream is empty.  If the
 stream has no encounter order, then any element may be returned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* text */ 't', `short-circuiting terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OptionalLong`],
				[/* text */ 't', ` describing the first element of this
 stream, or an empty `],
				[/* inline code block */ 'i', `OptionalLong`],
				[/* text */ 't', ` if the stream is empty`]
			]
		]],
		[/* method */ 'max()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `OptionalLong`],
				[/* text */ 't', ` describing the maximum element of this
 stream, or an empty optional if this stream is empty.  This is a special
 case of a `],
				[/* text */ 't', `reduction`],
				[/* text */ 't', `
 and is equivalent to:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `return reduce(Long::max);`]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* text */ 't', `terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OptionalLong`],
				[/* text */ 't', ` containing the maximum element of this
 stream, or an empty `],
				[/* inline code block */ 'i', `OptionalLong`],
				[/* text */ 't', ` if the stream is empty`]
			]
		]],
		[/* method */ 'min()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `OptionalLong`],
				[/* text */ 't', ` describing the minimum element of this
 stream, or an empty optional if this stream is empty.  This is a special
 case of a `],
				[/* text */ 't', `reduction`],
				[/* text */ 't', `
 and is equivalent to:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `return reduce(Long::min);`]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* text */ 't', `terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OptionalLong`],
				[/* text */ 't', ` containing the minimum element of this
 stream, or an empty `],
				[/* inline code block */ 'i', `OptionalLong`],
				[/* text */ 't', ` if the stream is empty`]
			]
		]],
		[/* method */ 'reduce(java.util.function.LongBinaryOperator)', [
			[/* method description */
				[/* text */ 't', `Performs a `],
				[/* text */ 't', `reduction`],
				[/* text */ 't', ` on the
 elements of this stream, using an
 `],
				[/* text */ 't', `associative`],
				[/* text */ 't', ` accumulation
 function, and returns an `],
				[/* inline code block */ 'i', `OptionalLong`],
				[/* text */ 't', ` describing the reduced value,
 if any. This is equivalent to:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `boolean foundAny = false;
     long result = null;
     for (long element : this stream) {
         if (!foundAny) {
             foundAny = true;
             result = element;
         }
         else
             result = accumulator.applyAsLong(result, element);
     }
     return foundAny ? OptionalLong.of(result) : OptionalLong.empty();`]
				]],
				[/* text */ 't', `

 but is not constrained to execute sequentially.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `accumulator`],
					[/* text */ 't', ` function must be an
 `],
					[/* text */ 't', `associative`],
					[/* text */ 't', ` function.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* text */ 't', `terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'op', [/* parameter description */
					[/* text */ 't', `an `],
					[/* text */ 't', `associative`],
					[/* text */ 't', `,
           `],
					[/* text */ 't', `non-interfering`],
					[/* text */ 't', `,
           `],
					[/* text */ 't', `stateless`],
					[/* text */ 't', `
           function for combining two values`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the result of the reduction`]
			]
		]],
		[/* method */ 'iterator()', UDF],
		[/* method */ 'spliterator()', UDF],
		[/* method */ 'asDoubleStream()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `DoubleStream`],
				[/* text */ 't', ` consisting of the elements of this stream,
 converted to `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* text */ 't', `intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `DoubleStream`],
				[/* text */ 't', ` consisting of the elements of this stream,
 converted to `],
				[/* inline code block */ 'i', `double`]
			]
		]],
		[/* method */ 'mapToDouble(java.util.function.LongToDoubleFunction)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `DoubleStream`],
				[/* text */ 't', ` consisting of the results of applying the
 given function to the elements of this stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* text */ 't', `intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a `],
					[/* text */ 't', `non-interfering`],
					[/* text */ 't', `,
               `],
					[/* text */ 't', `stateless`],
					[/* text */ 't', `
               function to apply to each element`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'mapToInt(java.util.function.LongToIntFunction)', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `IntStream`],
				[/* text */ 't', ` consisting of the results of applying the
 given function to the elements of this stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* text */ 't', `intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a `],
					[/* text */ 't', `non-interfering`],
					[/* text */ 't', `,
               `],
					[/* text */ 't', `stateless`],
					[/* text */ 't', `
               function to apply to each element`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'distinct()', [
			[/* method description */
				[/* text */ 't', `Returns a stream consisting of the distinct elements of this stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* text */ 't', `stateful intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'filter(java.util.function.LongPredicate)', [
			[/* method description */
				[/* text */ 't', `Returns a stream consisting of the elements of this stream that match
 the given predicate.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* text */ 't', `intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'predicate', [/* parameter description */
					[/* text */ 't', `a `],
					[/* text */ 't', `non-interfering`],
					[/* text */ 't', `,
                  `],
					[/* text */ 't', `stateless`],
					[/* text */ 't', `
                  predicate to apply to each element to determine if it
                  should be included`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'flatMap(java.util.function.LongFunction)', [
			[/* method description */
				[/* text */ 't', `Returns a stream consisting of the results of replacing each element of
 this stream with the contents of a mapped stream produced by applying
 the provided mapping function to each element.  Each mapped stream is
 `],
				[/* reference */ 'r', `java.util.stream.BaseStream#close()`, `closed`],
				[/* text */ 't', ` after its contents
 have been placed into this stream.  (If a mapped stream is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
 an empty stream is used, instead.)

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* text */ 't', `intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a `],
					[/* text */ 't', `non-interfering`],
					[/* text */ 't', `,
               `],
					[/* text */ 't', `stateless`],
					[/* text */ 't', `
               function to apply to each element which produces a
               `],
					[/* inline code block */ 'i', `LongStream`],
					[/* text */ 't', ` of new values`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'limit(long)', [
			[/* method description */
				[/* text */ 't', `Returns a stream consisting of the elements of this stream, truncated
 to be no longer than `],
				[/* inline code block */ 'i', `maxSize`],
				[/* text */ 't', ` in length.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* text */ 't', `short-circuiting stateful intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'maxSize', [/* parameter description */
					[/* text */ 't', `the number of elements the stream should be limited to`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `maxSize`],
					[/* text */ 't', ` is negative`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'map(java.util.function.LongUnaryOperator)', [
			[/* method description */
				[/* text */ 't', `Returns a stream consisting of the results of applying the given
 function to the elements of this stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* text */ 't', `intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a `],
					[/* text */ 't', `non-interfering`],
					[/* text */ 't', `,
               `],
					[/* text */ 't', `stateless`],
					[/* text */ 't', `
               function to apply to each element`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'parallel()', UDF],
		[/* method */ 'peek(java.util.function.LongConsumer)', [
			[/* method description */
				[/* text */ 't', `Returns a stream consisting of the elements of this stream, additionally
 performing the provided action on each element as elements are consumed
 from the resulting stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* text */ 't', `intermediate operation`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', `For parallel stream pipelines, the action may be called at
 whatever time and in whatever thread the element is made available by the
 upstream operation.  If the action modifies shared state,
 it is responsible for providing the required synchronization.`]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `a `],
					[/* text */ 't', `non-interfering`],
					[/* text */ 't', ` action to perform on the elements as
               they are consumed from the stream`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'sequential()', UDF],
		[/* method */ 'skip(long)', [
			[/* method description */
				[/* text */ 't', `Returns a stream consisting of the remaining elements of this stream
 after discarding the first `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` elements of the stream.
 If this stream contains fewer than `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` elements then an
 empty stream will be returned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* text */ 't', `stateful intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `the number of leading elements to skip`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `n`],
					[/* text */ 't', ` is negative`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'sorted()', [
			[/* method description */
				[/* text */ 't', `Returns a stream consisting of the elements of this stream in sorted
 order.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* text */ 't', `stateful intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'boxed()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', ` consisting of the elements of this stream,
 each boxed to a `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* text */ 't', `intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', ` consistent of the elements of this stream,
 each boxed to `],
				[/* inline code block */ 'i', `Long`]
			]
		]],
		[/* method */ 'count()', [
			[/* method description */
				[/* text */ 't', `Returns the count of elements in this stream.  This is a special case of
 a `],
				[/* text */ 't', `reduction`],
				[/* text */ 't', ` and is
 equivalent to:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `return map(e -> 1L).sum();`]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* text */ 't', `terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the count of elements in this stream`]
			]
		]],
		[/* method */ 'reduce(long,java.util.function.LongBinaryOperator)', [
			[/* method description */
				[/* text */ 't', `Performs a `],
				[/* text */ 't', `reduction`],
				[/* text */ 't', ` on the
 elements of this stream, using the provided identity value and an
 `],
				[/* text */ 't', `associative`],
				[/* text */ 't', `
 accumulation function, and returns the reduced value.  This is equivalent
 to:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `long result = identity;
     for (long element : this stream)
         result = accumulator.applyAsLong(result, element)
     return result;`]
				]],
				[/* text */ 't', `

 but is not constrained to execute sequentially.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `identity`],
					[/* text */ 't', ` value must be an identity for the accumulator
 function. This means that for all `],
					[/* inline code block */ 'i', `x`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `accumulator.apply(identity, x)`],
					[/* text */ 't', ` is equal to `],
					[/* inline code block */ 'i', `x`],
					[/* text */ 't', `.
 The `],
					[/* inline code block */ 'i', `accumulator`],
					[/* text */ 't', ` function must be an
 `],
					[/* text */ 't', `associative`],
					[/* text */ 't', ` function.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* text */ 't', `terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'identity', [/* parameter description */
					[/* text */ 't', `the identity value for the accumulating function`]
				]],
				[/* parameter */ 'op', [/* parameter description */
					[/* text */ 't', `an `],
					[/* text */ 't', `associative`],
					[/* text */ 't', `,
           `],
					[/* text */ 't', `non-interfering`],
					[/* text */ 't', `,
           `],
					[/* text */ 't', `stateless`],
					[/* text */ 't', `
           function for combining two values`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the result of the reduction`]
			]
		]],
		[/* method */ 'sum()', [
			[/* method description */
				[/* text */ 't', `Returns the sum of elements in this stream.  This is a special case
 of a `],
				[/* text */ 't', `reduction`],
				[/* text */ 't', `
 and is equivalent to:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `return reduce(0, Long::sum);`]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* text */ 't', `terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the sum of elements in this stream`]
			]
		]],
		[/* method */ 'toArray()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing the elements of this stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* text */ 't', `terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an array containing the elements of this stream`]
			]
		]],
		[/* method */ 'forEach(java.util.function.LongConsumer)', [
			[/* method description */
				[/* text */ 't', `Performs an action for each element of this stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* text */ 't', `terminal operation`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', `not`]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `a `],
					[/* text */ 't', `non-interfering`],
					[/* text */ 't', ` action to perform on the elements`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'forEachOrdered(java.util.function.LongConsumer)', [
			[/* method description */
				[/* text */ 't', `Performs an action for each element of this stream, guaranteeing that
 each element is processed in encounter order for streams that have a
 defined encounter order.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* text */ 't', `terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `a `],
					[/* text */ 't', `non-interfering`],
					[/* text */ 't', ` action to perform on the elements`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'dropWhile(java.util.function.LongPredicate)', [
			[/* method description */
				[/* text */ 't', `Returns, if this stream is ordered, a stream consisting of the remaining
 elements of this stream after dropping the longest prefix of elements
 that match the given predicate.  Otherwise returns, if this stream is
 unordered, a stream consisting of the remaining elements of this stream
 after dropping a subset of elements that match the given predicate.

 `],
				[/* block */ 'b', `If this stream is ordered then the longest prefix is a contiguous
 sequence of elements of this stream that match the given predicate.  The
 first element of the sequence is the first element of this stream, and
 the element immediately following the last element of the sequence does
 not match the given predicate.

 `],
				[/* block */ 'b', `If this stream is unordered, and some (but not all) elements of this
 stream match the given predicate, then the behavior of this operation is
 nondeterministic; it is free to drop any subset of matching elements
 (which includes the empty set).

 `],
				[/* block */ 'b', `Independent of whether this stream is ordered or unordered if all
 elements of this stream match the given predicate then this operation
 drops all elements (the result is an empty stream), or if no elements of
 the stream match the given predicate then no elements are dropped (the
 result is the same as the input).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* text */ 't', `stateful intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'predicate', [/* parameter description */
					[/* text */ 't', `a `],
					[/* text */ 't', `non-interfering`],
					[/* text */ 't', `,
                  `],
					[/* text */ 't', `stateless`],
					[/* text */ 't', `
                  predicate to apply to elements to determine the longest
                  prefix of elements.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'mapMulti(java.util.stream.LongStream.LongMapMultiConsumer)', [
			[/* method description */
				[/* text */ 't', `Returns a stream consisting of the results of replacing each element of
 this stream with multiple elements, specifically zero or more elements.
 Replacement is performed by applying the provided mapping function to each
 element in conjunction with a `],
				[/* reference */ 'r', `java.util.function.LongConsumer`, `consumer`],
				[/* text */ 't', ` argument
 that accepts replacement elements. The mapping function calls the consumer
 zero or more times to provide the replacement elements.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* text */ 't', `intermediate operation`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the `],
					[/* reference */ 'r', `java.util.function.LongConsumer`, `consumer`],
					[/* text */ 't', ` argument is used outside the scope of
 its application to the mapping function, the results are undefined.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a `],
					[/* text */ 't', `non-interfering`],
					[/* text */ 't', `,
               `],
					[/* text */ 't', `stateless`],
					[/* text */ 't', `
               function that generates replacement elements`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'takeWhile(java.util.function.LongPredicate)', [
			[/* method description */
				[/* text */ 't', `Returns, if this stream is ordered, a stream consisting of the longest
 prefix of elements taken from this stream that match the given predicate.
 Otherwise returns, if this stream is unordered, a stream consisting of a
 subset of elements taken from this stream that match the given predicate.

 `],
				[/* block */ 'b', `If this stream is ordered then the longest prefix is a contiguous
 sequence of elements of this stream that match the given predicate.  The
 first element of the sequence is the first element of this stream, and
 the element immediately following the last element of the sequence does
 not match the given predicate.

 `],
				[/* block */ 'b', `If this stream is unordered, and some (but not all) elements of this
 stream match the given predicate, then the behavior of this operation is
 nondeterministic; it is free to take any subset of matching elements
 (which includes the empty set).

 `],
				[/* block */ 'b', `Independent of whether this stream is ordered or unordered if all
 elements of this stream match the given predicate then this operation
 takes all elements (the result is the same as the input), or if no
 elements of the stream match the given predicate then no elements are
 taken (the result is an empty stream).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* text */ 't', `short-circuiting stateful intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'predicate', [/* parameter description */
					[/* text */ 't', `a `],
					[/* text */ 't', `non-interfering`],
					[/* text */ 't', `,
                  `],
					[/* text */ 't', `stateless`],
					[/* text */ 't', `
                  predicate to apply to elements to determine the longest
                  prefix of elements.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'concat(java.util.stream.LongStream,java.util.stream.LongStream)', [
			[/* method description */
				[/* text */ 't', `Creates a lazily concatenated stream whose elements are all the
 elements of the first stream followed by all the elements of the
 second stream.  The resulting stream is ordered if both
 of the input streams are ordered, and parallel if either of the input
 streams is parallel.  When the resulting stream is closed, the close
 handlers for both input streams are invoked.

 `],
				[/* block */ 'b', `This method operates on the two input streams and binds each stream
 to its source.  As a result subsequent modifications to an input stream
 source may not be reflected in the concatenated stream result.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first stream`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second stream`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the concatenation of the two input streams`]
			]
		]],
		[/* method */ 'empty()', [
			[/* method description */
				[/* text */ 't', `Returns an empty sequential `],
				[/* inline code block */ 'i', `LongStream`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an empty sequential stream`]
			]
		]],
		[/* method */ 'generate(java.util.function.LongSupplier)', [
			[/* method description */
				[/* text */ 't', `Returns an infinite sequential unordered stream where each element is
 generated by the provided `],
				[/* inline code block */ 'i', `LongSupplier`],
				[/* text */ 't', `.  This is suitable for
 generating constant streams, streams of random elements, etc.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `LongSupplier`],
					[/* text */ 't', ` for generated elements`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a new infinite sequential unordered `],
				[/* inline code block */ 'i', `LongStream`]
			]
		]],
		[/* method */ 'iterate(long,java.util.function.LongPredicate,java.util.function.LongUnaryOperator)', [
			[/* method description */
				[/* text */ 't', `Returns a sequential ordered `],
				[/* inline code block */ 'i', `LongStream`],
				[/* text */ 't', ` produced by iterative
 application of the given `],
				[/* inline code block */ 'i', `next`],
				[/* text */ 't', ` function to an initial element,
 conditioned on satisfying the given `],
				[/* inline code block */ 'i', `hasNext`],
				[/* text */ 't', ` predicate.  The
 stream terminates as soon as the `],
				[/* inline code block */ 'i', `hasNext`],
				[/* text */ 't', ` predicate returns false.

 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `LongStream.iterate`],
					[/* text */ 't', ` should produce the same sequence of elements as
 produced by the corresponding for-loop:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `for (long index=seed; hasNext.test(index); index = next.applyAsLong(index)) {
         ...
     }`]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `The resulting sequence may be empty if the `],
					[/* inline code block */ 'i', `hasNext`],
					[/* text */ 't', ` predicate
 does not hold on the seed value.  Otherwise the first element will be the
 supplied `],
					[/* inline code block */ 'i', `seed`],
					[/* text */ 't', ` value, the next element (if present) will be the
 result of applying the `],
					[/* inline code block */ 'i', `next`],
					[/* text */ 't', ` function to the `],
					[/* inline code block */ 'i', `seed`],
					[/* text */ 't', ` value,
 and so on iteratively until the `],
					[/* inline code block */ 'i', `hasNext`],
					[/* text */ 't', ` predicate indicates that
 the stream should terminate.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The action of applying the `],
					[/* inline code block */ 'i', `hasNext`],
					[/* text */ 't', ` predicate to an element
 `],
					[/* text */ 't', `happens-before`],
					[/* text */ 't', `
 the action of applying the `],
					[/* inline code block */ 'i', `next`],
					[/* text */ 't', ` function to that element.  The
 action of applying the `],
					[/* inline code block */ 'i', `next`],
					[/* text */ 't', ` function for one element
 `],
					[/* text */ 't', `happens-before`],
					[/* text */ 't', ` the action of applying the `],
					[/* inline code block */ 'i', `hasNext`],
					[/* text */ 't', `
 predicate for subsequent elements.  For any given element an action may
 be performed in whatever thread the library chooses.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'seed', [/* parameter description */
					[/* text */ 't', `the initial element`]
				]],
				[/* parameter */ 'hasNext', [/* parameter description */
					[/* text */ 't', `a predicate to apply to elements to determine when the
                stream must terminate.`]
				]],
				[/* parameter */ 'next', [/* parameter description */
					[/* text */ 't', `a function to be applied to the previous element to produce
             a new element`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a new sequential `],
				[/* inline code block */ 'i', `LongStream`]
			]
		]],
		[/* method */ 'iterate(long,java.util.function.LongUnaryOperator)', [
			[/* method description */
				[/* text */ 't', `Returns an infinite sequential ordered `],
				[/* inline code block */ 'i', `LongStream`],
				[/* text */ 't', ` produced by iterative
 application of a function `],
				[/* inline code block */ 'i', `f`],
				[/* text */ 't', ` to an initial element `],
				[/* inline code block */ 'i', `seed`],
				[/* text */ 't', `,
 producing a `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', ` consisting of `],
				[/* inline code block */ 'i', `seed`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `f(seed)`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `f(f(seed))`],
				[/* text */ 't', `, etc.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The first element (position `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `) in the `],
					[/* inline code block */ 'i', `LongStream`],
					[/* text */ 't', ` will
 be the provided `],
					[/* inline code block */ 'i', `seed`],
					[/* text */ 't', `.  For `],
					[/* inline code block */ 'i', `n > 0`],
					[/* text */ 't', `, the element at position
 `],
					[/* inline code block */ 'i', `n`],
					[/* text */ 't', `, will be the result of applying the function `],
					[/* inline code block */ 'i', `f`],
					[/* text */ 't', ` to the
 element at position `],
					[/* inline code block */ 'i', `n - 1`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The action of applying `],
					[/* inline code block */ 'i', `f`],
					[/* text */ 't', ` for one element
 `],
					[/* text */ 't', `happens-before`],
					[/* text */ 't', `
 the action of applying `],
					[/* inline code block */ 'i', `f`],
					[/* text */ 't', ` for subsequent elements.  For any given
 element the action may be performed in whatever thread the library
 chooses.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'seed', [/* parameter description */
					[/* text */ 't', `the initial element`]
				]],
				[/* parameter */ 'f', [/* parameter description */
					[/* text */ 't', `a function to be applied to the previous element to produce
          a new element`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a new sequential `],
				[/* inline code block */ 'i', `LongStream`]
			]
		]],
		[/* method */ 'of(long)', [
			[/* method description */
				[/* text */ 't', `Returns a sequential `],
				[/* inline code block */ 'i', `LongStream`],
				[/* text */ 't', ` containing a single element.`]
			],
			[/* parameters */
				[/* parameter */ 't', [/* parameter description */
					[/* text */ 't', `the single element`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a singleton sequential stream`]
			]
		]],
		[/* method */ 'of(long...)', [
			[/* method description */
				[/* text */ 't', `Returns a sequential ordered stream whose elements are the specified values.`]
			],
			[/* parameters */
				[/* parameter */ 'values', [/* parameter description */
					[/* text */ 't', `the elements of the new stream`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'range(long,long)', [
			[/* method description */
				[/* text */ 't', `Returns a sequential ordered `],
				[/* inline code block */ 'i', `LongStream`],
				[/* text */ 't', ` from `],
				[/* inline code block */ 'i', `startInclusive`],
				[/* text */ 't', `
 (inclusive) to `],
				[/* inline code block */ 'i', `endExclusive`],
				[/* text */ 't', ` (exclusive) by an incremental step of
 `],
				[/* inline code block */ 'i', `1`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'startInclusive', [/* parameter description */
					[/* text */ 't', `the (inclusive) initial value`]
				]],
				[/* parameter */ 'endExclusive', [/* parameter description */
					[/* text */ 't', `the exclusive upper bound`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a sequential `],
				[/* inline code block */ 'i', `LongStream`],
				[/* text */ 't', ` for the range of `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `
         elements`]
			]
		]],
		[/* method */ 'rangeClosed(long,long)', [
			[/* method description */
				[/* text */ 't', `Returns a sequential ordered `],
				[/* inline code block */ 'i', `LongStream`],
				[/* text */ 't', ` from `],
				[/* inline code block */ 'i', `startInclusive`],
				[/* text */ 't', `
 (inclusive) to `],
				[/* inline code block */ 'i', `endInclusive`],
				[/* text */ 't', ` (inclusive) by an incremental step of
 `],
				[/* inline code block */ 'i', `1`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'startInclusive', [/* parameter description */
					[/* text */ 't', `the (inclusive) initial value`]
				]],
				[/* parameter */ 'endInclusive', [/* parameter description */
					[/* text */ 't', `the inclusive upper bound`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a sequential `],
				[/* inline code block */ 'i', `LongStream`],
				[/* text */ 't', ` for the range of `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `
         elements`]
			]
		]],
		[/* method */ 'builder()', [
			[/* method description */
				[/* text */ 't', `Returns a builder for a `],
				[/* inline code block */ 'i', `LongStream`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a stream builder`]
			]
		]]
	],
	/* enum values */ UDF
]);
