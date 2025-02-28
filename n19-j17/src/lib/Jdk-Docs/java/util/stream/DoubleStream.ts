import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.stream.DoubleStream', [
	[/* class description */
		[/* text */ 't', `A sequence of primitive double-valued elements supporting sequential and parallel
 aggregate operations.  This is the `],
		[/* inline code block */ 'i', `double`],
		[/* text */ 't', ` primitive specialization of
 `],
		[/* reference */ 'r', `java.util.stream.Stream`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The following example illustrates an aggregate operation using
 `],
			[/* reference */ 'r', `java.util.stream.Stream`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `java.util.stream.DoubleStream`],
			[/* text */ 't', `, computing the sum of the weights of the
 red widgets:

 `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `double sum = widgets.stream()
                         .filter(w -> w.getColor() == RED)
                         .mapToDouble(w -> w.getWeight())
                         .sum();`]
		]],
		[/* text */ 't', `

 See the class documentation for `],
		[/* reference */ 'r', `java.util.stream.Stream`],
		[/* text */ 't', ` and the package documentation
 for `],
		[/* external link */ 'a', `package-summary.html`, `java.util.stream`],
		[/* text */ 't', ` for additional
 specification of streams, stream operations, stream pipelines, and
 parallelism.`],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'min()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `OptionalDouble`],
				[/* text */ 't', ` describing the minimum element of this
 stream, or an empty OptionalDouble if this stream is empty.  The minimum
 element will be `],
				[/* inline code block */ 'i', `Double.NaN`],
				[/* text */ 't', ` if any stream element was NaN. Unlike
 the numerical comparison operators, this method considers negative zero
 to be strictly smaller than positive zero. This is a special case of a
 `],
				[/* external link */ 'a', `package-summary.html#Reduction`, `reduction`],
				[/* text */ 't', ` and is
 equivalent to:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `return reduce(Double::min);`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OptionalDouble`],
				[/* text */ 't', ` containing the minimum element of this
 stream, or an empty optional if the stream is empty`]
			]
		]],
		[/* method */ 'max()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `OptionalDouble`],
				[/* text */ 't', ` describing the maximum element of this
 stream, or an empty OptionalDouble if this stream is empty.  The maximum
 element will be `],
				[/* inline code block */ 'i', `Double.NaN`],
				[/* text */ 't', ` if any stream element was NaN. Unlike
 the numerical comparison operators, this method considers negative zero
 to be strictly smaller than positive zero. This is a
 special case of a
 `],
				[/* external link */ 'a', `package-summary.html#Reduction`, `reduction`],
				[/* text */ 't', ` and is
 equivalent to:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `return reduce(Double::max);`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OptionalDouble`],
				[/* text */ 't', ` containing the maximum element of this
 stream, or an empty optional if the stream is empty`]
			]
		]],
		[/* method */ 'toArray()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing the elements of this stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array containing the elements of this stream`]
			]
		]],
		[/* method */ 'iterator()', UDF],
		[/* method */ 'map(java.util.function.DoubleUnaryOperator)', [
			[/* method description */
				[/* text */ 't', `Returns a stream consisting of the results of applying the given
 function to the elements of this stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a `],
					[/* external link */ 'a', `package-summary.html#NonInterference`, `non-interfering`],
					[/* text */ 't', `,
               `],
					[/* external link */ 'a', `package-summary.html#Statelessness`, `stateless`],
					[/* text */ 't', `
               function to apply to each element`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'collect(java.util.function.Supplier,java.util.function.ObjDoubleConsumer,java.util.function.BiConsumer)', [
			[/* method description */
				[/* text */ 't', `Performs a `],
				[/* external link */ 'a', `package-summary.html#MutableReduction`, `mutable reduction`],
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
     for (double element : this stream)
         accumulator.accept(result, element);
     return result;`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Like `],
					[/* reference */ 'r', `reduce(double, DoubleBinaryOperator)`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `collect`],
					[/* text */ 't', `
 operations can be parallelized without requiring additional
 synchronization.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `terminal operation`],
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
					[/* external link */ 'a', `package-summary.html#Associativity`, `associative`],
					[/* text */ 't', `,
                    `],
					[/* external link */ 'a', `package-summary.html#NonInterference`, `non-interfering`],
					[/* text */ 't', `,
                    `],
					[/* external link */ 'a', `package-summary.html#Statelessness`, `stateless`],
					[/* text */ 't', `
                    function that must fold an element into a result
                    container.`]
				]],
				[/* parameter */ 'combiner', [/* parameter description */
					[/* text */ 't', `an `],
					[/* external link */ 'a', `package-summary.html#Associativity`, `associative`],
					[/* text */ 't', `,
                    `],
					[/* external link */ 'a', `package-summary.html#NonInterference`, `non-interfering`],
					[/* text */ 't', `,
                    `],
					[/* external link */ 'a', `package-summary.html#Statelessness`, `stateless`],
					[/* text */ 't', `
                    function that accepts two partial result containers
                    and merges them, which must be compatible with the
                    accumulator function.  The combiner function must fold
                    the elements from the second result container into the
                    first result container.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the result of the reduction`]
			]
		]],
		[/* method */ 'of(double...)', [
			[/* method description */
				[/* text */ 't', `Returns a sequential ordered stream whose elements are the specified values.`]
			],
			[/* parameters */
				[/* parameter */ 'values', [/* parameter description */
					[/* text */ 't', `the elements of the new stream`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'of(double)', [
			[/* method description */
				[/* text */ 't', `Returns a sequential `],
				[/* inline code block */ 'i', `DoubleStream`],
				[/* text */ 't', ` containing a single element.`]
			],
			[/* parameters */
				[/* parameter */ 't', [/* parameter description */
					[/* text */ 't', `the single element`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a singleton sequential stream`]
			]
		]],
		[/* method */ 'count()', [
			[/* method description */
				[/* text */ 't', `Returns the count of elements in this stream.  This is a special case of
 a `],
				[/* external link */ 'a', `package-summary.html#Reduction`, `reduction`],
				[/* text */ 't', ` and is
 equivalent to:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `return mapToLong(e -> 1L).sum();`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the count of elements in this stream`]
			]
		]],
		[/* method */ 'builder()', [
			[/* method description */
				[/* text */ 't', `Returns a builder for a `],
				[/* inline code block */ 'i', `DoubleStream`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a stream builder`]
			]
		]],
		[/* method */ 'concat(java.util.stream.DoubleStream,java.util.stream.DoubleStream)', [
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
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the concatenation of the two input streams`]
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
					[/* external link */ 'a', `package-summary.html#StreamOps`, `short-circuiting stateful intermediate operation`],
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
		[/* method */ 'spliterator()', UDF],
		[/* method */ 'filter(java.util.function.DoublePredicate)', [
			[/* method description */
				[/* text */ 't', `Returns a stream consisting of the elements of this stream that match
 the given predicate.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'predicate', [/* parameter description */
					[/* text */ 't', `a `],
					[/* external link */ 'a', `package-summary.html#NonInterference`, `non-interfering`],
					[/* text */ 't', `,
                  `],
					[/* external link */ 'a', `package-summary.html#Statelessness`, `stateless`],
					[/* text */ 't', `
                  predicate to apply to each element to determine if it
                  should be included`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'empty()', [
			[/* method description */
				[/* text */ 't', `Returns an empty sequential `],
				[/* inline code block */ 'i', `DoubleStream`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an empty sequential stream`]
			]
		]],
		[/* method */ 'anyMatch(java.util.function.DoublePredicate)', [
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
					[/* external link */ 'a', `package-summary.html#StreamOps`, `short-circuiting terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'predicate', [/* parameter description */
					[/* text */ 't', `a `],
					[/* external link */ 'a', `package-summary.html#NonInterference`, `non-interfering`],
					[/* text */ 't', `,
                  `],
					[/* external link */ 'a', `package-summary.html#Statelessness`, `stateless`],
					[/* text */ 't', `
                  predicate to apply to elements of this stream`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if any elements of the stream match the provided
 predicate, otherwise `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'flatMap(java.util.function.DoubleFunction)', [
			[/* method description */
				[/* text */ 't', `Returns a stream consisting of the results of replacing each element of
 this stream with the contents of a mapped stream produced by applying
 the provided mapping function to each element.  Each mapped stream is
 `],
				[/* external link */ 'a', `BaseStream.html#close()`, `closed`],
				[/* text */ 't', ` after its contents
 have been placed into this stream.  (If a mapped stream is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
 an empty stream is used, instead.)

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a `],
					[/* external link */ 'a', `package-summary.html#NonInterference`, `non-interfering`],
					[/* text */ 't', `,
               `],
					[/* external link */ 'a', `package-summary.html#Statelessness`, `stateless`],
					[/* text */ 't', `
               function to apply to each element which produces a
               `],
					[/* inline code block */ 'i', `DoubleStream`],
					[/* text */ 't', ` of new values`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'forEach(java.util.function.DoubleConsumer)', [
			[/* method description */
				[/* text */ 't', `Performs an action for each element of this stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `terminal operation`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `For parallel stream pipelines, this operation does `],
					[/* text */ 't', `not`],
					[/* text */ 't', `
 guarantee to respect the encounter order of the stream, as doing so
 would sacrifice the benefit of parallelism.  For any given element, the
 action may be performed at whatever time and in whatever thread the
 library chooses.  If the action accesses shared state, it is
 responsible for providing the required synchronization.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `a `],
					[/* external link */ 'a', `package-summary.html#NonInterference`, `non-interfering`],
					[/* text */ 't', ` action to perform on the elements`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'findAny()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* reference */ 'r', `java.util.OptionalDouble`],
				[/* text */ 't', ` describing some element of the stream,
 or an empty `],
				[/* inline code block */ 'i', `OptionalDouble`],
				[/* text */ 't', ` if the stream is empty.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `short-circuiting terminal operation`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The behavior of this operation is explicitly nondeterministic; it is
 free to select any element in the stream.  This is to allow for maximal
 performance in parallel operations; the cost is that multiple invocations
 on the same source may not return the same result.  (If a stable result
 is desired, use `],
					[/* reference */ 'r', `findFirst()`],
					[/* text */ 't', ` instead.)`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OptionalDouble`],
				[/* text */ 't', ` describing some element of this stream,
 or an empty `],
				[/* inline code block */ 'i', `OptionalDouble`],
				[/* text */ 't', ` if the stream is empty`]
			]
		]],
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
					[/* external link */ 'a', `package-summary.html#StreamOps`, `stateful intermediate operation`],
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
		[/* method */ 'peek(java.util.function.DoubleConsumer)', [
			[/* method description */
				[/* text */ 't', `Returns a stream consisting of the elements of this stream, additionally
 performing the provided action on each element as elements are consumed
 from the resulting stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `intermediate operation`],
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
					[/* external link */ 'a', `package-summary.html#NonInterference`, `non-interfering`],
					[/* text */ 't', ` action to perform on the elements as
               they are consumed from the stream`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'sum()', [
			[/* method description */
				[/* text */ 't', `Returns the sum of elements in this stream.

 Summation is a special case of a `],
				[/* external link */ 'a', `package-summary.html#Reduction`, `reduction`],
				[/* text */ 't', `. If
 floating-point summation were exact, this method would be
 equivalent to:

 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `return reduce(0, Double::sum);`]
				]],
				[/* text */ 't', `

 However, since floating-point summation is not exact, the above
 code is not necessarily equivalent to the summation computation
 done by this method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The value of a floating-point sum is a function both
 of the input values as well as the order of addition
 operations. The order of addition operations of this method is
 intentionally not defined to allow for implementation
 flexibility to improve the speed and accuracy of the computed
 result.

 In particular, this method may be implemented using compensated
 summation or other technique to reduce the error bound in the
 numerical sum compared to a simple summation of `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', `
 values.

 Because of the unspecified order of operations and the
 possibility of using differing summation schemes, the output of
 this method may vary on the same input elements.

 `]
				]],
				[/* block */ 'b', `Various conditions can result in a non-finite sum being
 computed. This can occur even if the all the elements
 being summed are finite. If any element is non-finite,
 the sum will be non-finite:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If any element is a NaN, then the final sum will be
 NaN.

 `],
					[/* block */ 'b', [
						[/* text */ 't', `If the elements contain one or more infinities, the
 sum will be infinite or NaN.

 `],
						[/* list */ 'l', [
							[/* block */ 'b', `If the elements contain infinities of opposite sign,
 the sum will be NaN.

 `],
							[/* block */ 'b', `If the elements contain infinities of one sign and
 an intermediate sum overflows to an infinity of the opposite
 sign, the sum may be NaN.

 `]
						]]
					]]
				]],
				[/* text */ 't', `

 It is possible for intermediate sums of finite values to
 overflow into opposite-signed infinities; if that occurs, the
 final sum will be NaN even if the elements are all
 finite.

 If all the elements are zero, the sign of zero is
 `],
				[/* text */ 't', `not`],
				[/* text */ 't', ` guaranteed to be preserved in the final sum.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the sum of elements in this stream`]
			]
		]],
		[/* method */ 'reduce(double,java.util.function.DoubleBinaryOperator)', [
			[/* method description */
				[/* text */ 't', `Performs a `],
				[/* external link */ 'a', `package-summary.html#Reduction`, `reduction`],
				[/* text */ 't', ` on the
 elements of this stream, using the provided identity value and an
 `],
				[/* external link */ 'a', `package-summary.html#Associativity`, `associative`],
				[/* text */ 't', `
 accumulation function, and returns the reduced value.  This is equivalent
 to:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `double result = identity;
     for (double element : this stream)
         result = accumulator.applyAsDouble(result, element)
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
					[/* external link */ 'a', `package-summary.html#Associativity`, `associative`],
					[/* text */ 't', ` function.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'identity', [/* parameter description */
					[/* text */ 't', `the identity value for the accumulating function`]
				]],
				[/* parameter */ 'op', [/* parameter description */
					[/* text */ 't', `an `],
					[/* external link */ 'a', `package-summary.html#Associativity`, `associative`],
					[/* text */ 't', `,
           `],
					[/* external link */ 'a', `package-summary.html#NonInterference`, `non-interfering`],
					[/* text */ 't', `,
           `],
					[/* external link */ 'a', `package-summary.html#Statelessness`, `stateless`],
					[/* text */ 't', `
           function for combining two values`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the result of the reduction`]
			]
		]],
		[/* method */ 'reduce(java.util.function.DoubleBinaryOperator)', [
			[/* method description */
				[/* text */ 't', `Performs a `],
				[/* external link */ 'a', `package-summary.html#Reduction`, `reduction`],
				[/* text */ 't', ` on the
 elements of this stream, using an
 `],
				[/* external link */ 'a', `package-summary.html#Associativity`, `associative`],
				[/* text */ 't', ` accumulation
 function, and returns an `],
				[/* inline code block */ 'i', `OptionalDouble`],
				[/* text */ 't', ` describing the reduced
 value, if any. This is equivalent to:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `boolean foundAny = false;
     double result = null;
     for (double element : this stream) {
         if (!foundAny) {
             foundAny = true;
             result = element;
         }
         else
             result = accumulator.applyAsDouble(result, element);
     }
     return foundAny ? OptionalDouble.of(result) : OptionalDouble.empty();`]
				]],
				[/* text */ 't', `

 but is not constrained to execute sequentially.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `accumulator`],
					[/* text */ 't', ` function must be an
 `],
					[/* external link */ 'a', `package-summary.html#Associativity`, `associative`],
					[/* text */ 't', ` function.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'op', [/* parameter description */
					[/* text */ 't', `an `],
					[/* external link */ 'a', `package-summary.html#Associativity`, `associative`],
					[/* text */ 't', `,
           `],
					[/* external link */ 'a', `package-summary.html#NonInterference`, `non-interfering`],
					[/* text */ 't', `,
           `],
					[/* external link */ 'a', `package-summary.html#Statelessness`, `stateless`],
					[/* text */ 't', `
           function for combining two values`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the result of the reduction`]
			]
		]],
		[/* method */ 'distinct()', [
			[/* method description */
				[/* text */ 't', `Returns a stream consisting of the distinct elements of this stream. The
 elements are compared for equality according to
 `],
				[/* external link */ 'a', `../../lang/Double.html#compare(double,double)`, `Double.compare(double, double)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `stateful intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the result stream`]
			]
		]],
		[/* method */ 'findFirst()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* reference */ 'r', `java.util.OptionalDouble`],
				[/* text */ 't', ` describing the first element of this
 stream, or an empty `],
				[/* inline code block */ 'i', `OptionalDouble`],
				[/* text */ 't', ` if the stream is empty.  If
 the stream has no encounter order, then any element may be returned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `short-circuiting terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OptionalDouble`],
				[/* text */ 't', ` describing the first element of this
 stream, or an empty `],
				[/* inline code block */ 'i', `OptionalDouble`],
				[/* text */ 't', ` if the stream is empty`]
			]
		]],
		[/* method */ 'allMatch(java.util.function.DoublePredicate)', [
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
					[/* external link */ 'a', `package-summary.html#StreamOps`, `short-circuiting terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'predicate', [/* parameter description */
					[/* text */ 't', `a `],
					[/* external link */ 'a', `package-summary.html#NonInterference`, `non-interfering`],
					[/* text */ 't', `,
                  `],
					[/* external link */ 'a', `package-summary.html#Statelessness`, `stateless`],
					[/* text */ 't', `
                  predicate to apply to elements of this stream`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if either all elements of the stream match the
 provided predicate or the stream is empty, otherwise `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'parallel()', UDF],
		[/* method */ 'iterate(double,java.util.function.DoubleUnaryOperator)', [
			[/* method description */
				[/* text */ 't', `Returns an infinite sequential ordered `],
				[/* inline code block */ 'i', `DoubleStream`],
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
					[/* inline code block */ 'i', `DoubleStream`],
					[/* text */ 't', `
 will be the provided `],
					[/* inline code block */ 'i', `seed`],
					[/* text */ 't', `.  For `],
					[/* inline code block */ 'i', `n > 0`],
					[/* text */ 't', `, the element at
 position `],
					[/* inline code block */ 'i', `n`],
					[/* text */ 't', `, will be the result of applying the function `],
					[/* inline code block */ 'i', `f`],
					[/* text */ 't', `
  to the element at position `],
					[/* inline code block */ 'i', `n - 1`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The action of applying `],
					[/* inline code block */ 'i', `f`],
					[/* text */ 't', ` for one element
 `],
					[/* external link */ 'a', `../concurrent/package-summary.html#MemoryVisibility`, `happens-before`],
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
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a new sequential `],
				[/* inline code block */ 'i', `DoubleStream`]
			]
		]],
		[/* method */ 'iterate(double,java.util.function.DoublePredicate,java.util.function.DoubleUnaryOperator)', [
			[/* method description */
				[/* text */ 't', `Returns a sequential ordered `],
				[/* inline code block */ 'i', `DoubleStream`],
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
					[/* inline code block */ 'i', `DoubleStream.iterate`],
					[/* text */ 't', ` should produce the same sequence of elements as
 produced by the corresponding for-loop:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `for (double index=seed; hasNext.test(index); index = next.applyAsDouble(index)) {
         ...
     }`]
				]],
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
					[/* external link */ 'a', `../concurrent/package-summary.html#MemoryVisibility`, `happens-before`],
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
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a new sequential `],
				[/* inline code block */ 'i', `DoubleStream`]
			]
		]],
		[/* method */ 'sorted()', [
			[/* method description */
				[/* text */ 't', `Returns a stream consisting of the elements of this stream in sorted
 order. The elements are compared for equality according to
 `],
				[/* external link */ 'a', `../../lang/Double.html#compare(double,double)`, `Double.compare(double, double)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `stateful intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the result stream`]
			]
		]],
		[/* method */ 'generate(java.util.function.DoubleSupplier)', [
			[/* method description */
				[/* text */ 't', `Returns an infinite sequential unordered stream where each element is
 generated by the provided `],
				[/* inline code block */ 'i', `DoubleSupplier`],
				[/* text */ 't', `.  This is suitable for
 generating constant streams, streams of random elements, etc.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `DoubleSupplier`],
					[/* text */ 't', ` for generated elements`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a new infinite sequential unordered `],
				[/* inline code block */ 'i', `DoubleStream`]
			]
		]],
		[/* method */ 'sequential()', UDF],
		[/* method */ 'mapToInt(java.util.function.DoubleToIntFunction)', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `IntStream`],
				[/* text */ 't', ` consisting of the results of applying the
 given function to the elements of this stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a `],
					[/* external link */ 'a', `package-summary.html#NonInterference`, `non-interfering`],
					[/* text */ 't', `,
               `],
					[/* external link */ 'a', `package-summary.html#Statelessness`, `stateless`],
					[/* text */ 't', `
               function to apply to each element`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'mapToLong(java.util.function.DoubleToLongFunction)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `LongStream`],
				[/* text */ 't', ` consisting of the results of applying the
 given function to the elements of this stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a `],
					[/* external link */ 'a', `package-summary.html#NonInterference`, `non-interfering`],
					[/* text */ 't', `,
               `],
					[/* external link */ 'a', `package-summary.html#Statelessness`, `stateless`],
					[/* text */ 't', `
               function to apply to each element`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'mapMulti(java.util.stream.DoubleStream.DoubleMapMultiConsumer)', [
			[/* method description */
				[/* text */ 't', `Returns a stream consisting of the results of replacing each element of
 this stream with multiple elements, specifically zero or more elements.
 Replacement is performed by applying the provided mapping function to each
 element in conjunction with a `],
				[/* reference */ 'r', `java.util.function.DoubleConsumer`],
				[/* text */ 't', ` argument
 that accepts replacement elements. The mapping function calls the consumer
 zero or more times to provide the replacement elements.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `intermediate operation`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the `],
					[/* reference */ 'r', `java.util.function.DoubleConsumer`],
					[/* text */ 't', ` argument is used outside the scope of
 its application to the mapping function, the results are undefined.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a `],
					[/* external link */ 'a', `package-summary.html#NonInterference`, `non-interfering`],
					[/* text */ 't', `,
               `],
					[/* external link */ 'a', `package-summary.html#Statelessness`, `stateless`],
					[/* text */ 't', `
               function that generates replacement elements`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'takeWhile(java.util.function.DoublePredicate)', [
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
					[/* external link */ 'a', `package-summary.html#StreamOps`, `short-circuiting stateful intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'predicate', [/* parameter description */
					[/* text */ 't', `a `],
					[/* external link */ 'a', `package-summary.html#NonInterference`, `non-interfering`],
					[/* text */ 't', `,
                  `],
					[/* external link */ 'a', `package-summary.html#Statelessness`, `stateless`],
					[/* text */ 't', `
                  predicate to apply to elements to determine the longest
                  prefix of elements.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'dropWhile(java.util.function.DoublePredicate)', [
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
					[/* external link */ 'a', `package-summary.html#StreamOps`, `stateful intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'predicate', [/* parameter description */
					[/* text */ 't', `a `],
					[/* external link */ 'a', `package-summary.html#NonInterference`, `non-interfering`],
					[/* text */ 't', `,
                  `],
					[/* external link */ 'a', `package-summary.html#Statelessness`, `stateless`],
					[/* text */ 't', `
                  predicate to apply to elements to determine the longest
                  prefix of elements.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'forEachOrdered(java.util.function.DoubleConsumer)', [
			[/* method description */
				[/* text */ 't', `Performs an action for each element of this stream, guaranteeing that
 each element is processed in encounter order for streams that have a
 defined encounter order.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `a `],
					[/* external link */ 'a', `package-summary.html#NonInterference`, `non-interfering`],
					[/* text */ 't', ` action to perform on the elements`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'noneMatch(java.util.function.DoublePredicate)', [
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
					[/* external link */ 'a', `package-summary.html#StreamOps`, `short-circuiting terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'predicate', [/* parameter description */
					[/* text */ 't', `a `],
					[/* external link */ 'a', `package-summary.html#NonInterference`, `non-interfering`],
					[/* text */ 't', `,
                  `],
					[/* external link */ 'a', `package-summary.html#Statelessness`, `stateless`],
					[/* text */ 't', `
                  predicate to apply to elements of this stream`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if either no elements of the stream match the
 provided predicate or the stream is empty, otherwise `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'mapToObj(java.util.function.DoubleFunction)', [
			[/* method description */
				[/* text */ 't', `Returns an object-valued `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', ` consisting of the results of
 applying the given function to the elements of this stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a `],
					[/* external link */ 'a', `package-summary.html#NonInterference`, `non-interfering`],
					[/* text */ 't', `,
               `],
					[/* external link */ 'a', `package-summary.html#Statelessness`, `stateless`],
					[/* text */ 't', `
               function to apply to each element`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'average()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `OptionalDouble`],
				[/* text */ 't', ` describing the arithmetic
 mean of elements of this stream, or an empty optional if this
 stream is empty.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The computed average can vary numerically and have the
 special case behavior as computing the sum; see `],
					[/* reference */ 'r', `sum()`],
					[/* text */ 't', `
 for details.

  `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The average is a special case of a `],
					[/* external link */ 'a', `package-summary.html#Reduction`, `reduction`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OptionalDouble`],
				[/* text */ 't', ` containing the average element of this
 stream, or an empty optional if the stream is empty`]
			]
		]],
		[/* method */ 'summaryStatistics()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `DoubleSummaryStatistics`],
				[/* text */ 't', ` describing various summary data
 about the elements of this stream.  This is a special
 case of a `],
				[/* external link */ 'a', `package-summary.html#Reduction`, `reduction`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `terminal operation`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `DoubleSummaryStatistics`],
				[/* text */ 't', ` describing various summary data
 about the elements of this stream`]
			]
		]],
		[/* method */ 'boxed()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', ` consisting of the elements of this stream,
 boxed to `],
				[/* inline code block */ 'i', `Double`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', ` consistent of the elements of this stream,
 each boxed to a `],
				[/* inline code block */ 'i', `Double`]
			]
		]]
	],
]);
