import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.stream.Stream', [
	[/* class description */
		[/* text */ 't', `A sequence of elements supporting sequential and parallel aggregate
 operations.  The following example illustrates an aggregate operation using
 `],
		[/* reference */ 'r', `java.util.stream.Stream`],
		[/* text */ 't', ` and `],
		[/* reference */ 'r', `java.util.stream.IntStream`],
		[/* text */ 't', `:

 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `int sum = widgets.stream()
                      .filter(w -> w.getColor() == RED)
                      .mapToInt(w -> w.getWeight())
                      .sum();`]
		]],
		[/* text */ 't', `

 In this example, `],
		[/* inline code block */ 'i', `widgets`],
		[/* text */ 't', ` is a `],
		[/* inline code block */ 'i', `Collection<Widget>`],
		[/* text */ 't', `.  We create
 a stream of `],
		[/* inline code block */ 'i', `Widget`],
		[/* text */ 't', ` objects via `],
		[/* reference */ 'r', `java.Collection#stream()`],
		[/* text */ 't', `,
 filter it to produce a stream containing only the red widgets, and then
 transform it into a stream of `],
		[/* inline code block */ 'i', `int`],
		[/* text */ 't', ` values representing the weight of
 each red widget. Then this stream is summed to produce a total weight.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `In addition to `],
			[/* inline code block */ 'i', `Stream`],
			[/* text */ 't', `, which is a stream of object references,
 there are primitive specializations for `],
			[/* reference */ 'r', `java.util.stream.IntStream`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.util.stream.LongStream`],
			[/* text */ 't', `,
 and `],
			[/* reference */ 'r', `java.util.stream.DoubleStream`],
			[/* text */ 't', `, all of which are referred to as "streams" and
 conform to the characteristics and restrictions described here.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `To perform a computation, stream
 `],
			[/* reference */ 'r', `.package-summary#StreamOps`],
			[/* text */ 't', ` are composed into a
 `],
			[/* text */ 't', `stream pipeline`],
			[/* text */ 't', `.  A stream pipeline consists of a source (which
 might be an array, a collection, a generator function, an I/O channel,
 etc), zero or more `],
			[/* text */ 't', `intermediate operations`],
			[/* text */ 't', ` (which transform a
 stream into another stream, such as `],
			[/* reference */ 'r', `#filter(java.util.function.Predicate)`, `filter(Predicate)`],
			[/* text */ 't', `), and a
 `],
			[/* text */ 't', `terminal operation`],
			[/* text */ 't', ` (which produces a result or side-effect, such
 as `],
			[/* reference */ 'r', `#count()`, `count()`],
			[/* text */ 't', ` or `],
			[/* reference */ 'r', `#forEach(java.util.function.Consumer)`, `forEach(Consumer)`],
			[/* text */ 't', `).
 Streams are lazy; computation on the source data is only performed when the
 terminal operation is initiated, and source elements are consumed only
 as needed.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A stream implementation is permitted significant latitude in optimizing
 the computation of the result.  For example, a stream implementation is free
 to elide operations (or entire stages) from a stream pipeline -- and
 therefore elide invocation of behavioral parameters -- if it can prove that
 it would not affect the result of the computation.  This means that
 side-effects of behavioral parameters may not always be executed and should
 not be relied upon, unless otherwise specified (such as by the terminal
 operations `],
			[/* inline code block */ 'i', `forEach`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `forEachOrdered`],
			[/* text */ 't', `). (For a specific
 example of such an optimization, see the API note documented on the
 `],
			[/* reference */ 'r', `#count()`, `count()`],
			[/* text */ 't', ` operation.  For more detail, see the
 `],
			[/* reference */ 'r', `.package-summary#SideEffects`],
			[/* text */ 't', ` section of the
 stream package documentation.)

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Collections and streams, while bearing some superficial similarities,
 have different goals.  Collections are primarily concerned with the efficient
 management of, and access to, their elements.  By contrast, streams do not
 provide a means to directly access or manipulate their elements, and are
 instead concerned with declaratively describing their source and the
 computational operations which will be performed in aggregate on that source.
 However, if the provided stream operations do not offer the desired
 functionality, the `],
			[/* reference */ 'r', `.BaseStream#iterator()`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `.BaseStream#spliterator()`],
			[/* text */ 't', ` operations
 can be used to perform a controlled traversal.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A stream pipeline, like the "widgets" example above, can be viewed as
 a `],
			[/* text */ 't', `query`],
			[/* text */ 't', ` on the stream source.  Unless the source was explicitly
 designed for concurrent modification (such as a `],
			[/* reference */ 'r', `java.util.concurrent.ConcurrentHashMap`],
			[/* text */ 't', `),
 unpredictable or erroneous behavior may result from modifying the stream
 source while it is being queried.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Most stream operations accept parameters that describe user-specified
 behavior, such as the lambda expression `],
			[/* inline code block */ 'i', `w -> w.getWeight()`],
			[/* text */ 't', ` passed to
 `],
			[/* inline code block */ 'i', `mapToInt`],
			[/* text */ 't', ` in the example above.  To preserve correct behavior,
 these `],
			[/* text */ 't', `behavioral parameters`],
			[/* text */ 't', `:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `must be `],
				[/* reference */ 'r', `.package-summary#NonInterference`],
				[/* text */ 't', `
 (they do not modify the stream source); and`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `in most cases must be `],
				[/* reference */ 'r', `.package-summary#Statelessness`],
				[/* text */ 't', `
 (their result should not depend on any state that might change during execution
 of the stream pipeline).`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Such parameters are always instances of a
 `],
			[/* text */ 't', `functional interface`],
			[/* text */ 't', ` such
 as `],
			[/* reference */ 'r', `java.util.function.Function`],
			[/* text */ 't', `, and are often lambda expressions or
 method references.  Unless otherwise specified these parameters must be
 `],
			[/* text */ 't', `non-null`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A stream should be operated on (invoking an intermediate or terminal stream
 operation) only once.  This rules out, for example, "forked" streams, where
 the same source feeds two or more pipelines, or multiple traversals of the
 same stream.  A stream implementation may throw `],
			[/* reference */ 'r', `java.lang.IllegalStateException`],
			[/* text */ 't', `
 if it detects that the stream is being reused. However, since some stream
 operations may return their receiver rather than a new stream object, it may
 not be possible to detect reuse in all cases.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Streams have a `],
			[/* reference */ 'r', `.BaseStream#close()`],
			[/* text */ 't', ` method and implement `],
			[/* reference */ 'r', `java.lang.AutoCloseable`],
			[/* text */ 't', `.
 Operating on a stream after it has been closed will throw `],
			[/* reference */ 'r', `java.lang.IllegalStateException`],
			[/* text */ 't', `.
 Most stream instances do not actually need to be closed after use, as they
 are backed by collections, arrays, or generating functions, which require no
 special resource management. Generally, only streams whose source is an IO channel,
 such as those returned by `],
			[/* reference */ 'r', `java.util.file.Files#lines(java.nio.file.Path)`],
			[/* text */ 't', `, will require closing. If a
 stream does require closing, it must be opened as a resource within a try-with-resources
 statement or similar control structure to ensure that it is closed promptly after its
 operations have completed.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Stream pipelines may execute either sequentially or in
 `],
			[/* reference */ 'r', `.package-summary#Parallelism`],
			[/* text */ 't', `.  This
 execution mode is a property of the stream.  Streams are created
 with an initial choice of sequential or parallel execution.  (For example,
 `],
			[/* reference */ 'r', `java.Collection#stream()`],
			[/* text */ 't', ` creates a sequential stream,
 and `],
			[/* reference */ 'r', `java.Collection#parallelStream()`],
			[/* text */ 't', ` creates
 a parallel one.)  This choice of execution mode may be modified by the
 `],
			[/* reference */ 'r', `.BaseStream#sequential()`],
			[/* text */ 't', ` or `],
			[/* reference */ 'r', `.BaseStream#parallel()`],
			[/* text */ 't', ` methods, and may be queried with
 the `],
			[/* reference */ 'r', `.BaseStream#isParallel()`],
			[/* text */ 't', ` method.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'min(java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Returns the minimum element of this stream according to the provided
 `],
				[/* inline code block */ 'i', `Comparator`],
				[/* text */ 't', `.  This is a special case of a
 `],
				[/* reference */ 'r', `.package-summary#Reduction`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'comparator', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
                   `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
					[/* inline code block */ 'i', `Comparator`],
					[/* text */ 't', ` to compare elements of this stream`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the minimum element is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` describing the minimum element of this stream,
 or an empty `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` if the stream is empty`]
			]
		]],
		[/* method */ 'max(java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Returns the maximum element of this stream according to the provided
 `],
				[/* inline code block */ 'i', `Comparator`],
				[/* text */ 't', `.  This is a special case of a
 `],
				[/* reference */ 'r', `.package-summary#Reduction`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'comparator', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
                   `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
					[/* inline code block */ 'i', `Comparator`],
					[/* text */ 't', ` to compare elements of this stream`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the maximum element is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` describing the maximum element of this stream,
 or an empty `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` if the stream is empty`]
			]
		]],
		[/* method */ 'toArray()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing the elements of this stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array, whose `],
				[/* reference */ 'r', `java.util.Class#getComponentType()`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `, containing the elements of this stream`]
			]
		]],
		[/* method */ 'toArray(java.util.function.IntFunction)', [
			[/* method description */
				[/* text */ 't', `Returns an array containing the elements of this stream, using the
 provided `],
				[/* inline code block */ 'i', `generator`],
				[/* text */ 't', ` function to allocate the returned array, as
 well as any additional arrays that might be required for a partitioned
 execution or for resizing.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'generator', [/* parameter description */
					[/* text */ 't', `a function which produces a new array of the desired
                  type and the provided length`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayStoreException', [/* throw description */
					[/* text */ 't', `if the runtime type of any element of this
         stream is not assignable to the `],
					[/* reference */ 'r', `java.util.Class#getComponentType()`],
					[/* text */ 't', ` of the generated array`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an array containing the elements in this stream`]
			]
		]],
		[/* method */ 'map(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Returns a stream consisting of the results of applying the given
 function to the elements of this stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
               `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
					[/* text */ 't', `
               function to apply to each element`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'collect(java.util.function.Supplier,java.util.function.BiConsumer,java.util.function.BiConsumer)', [
			[/* method description */
				[/* text */ 't', `Performs a `],
				[/* reference */ 'r', `.package-summary#MutableReduction`],
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
     for (T element : this stream)
         accumulator.accept(result, element);
     return result;`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Like `],
					[/* reference */ 'r', `#reduce(T,java.util.function.BinaryOperator)`, `reduce(Object, BinaryOperator)`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `collect`],
					[/* text */ 't', ` operations
 can be parallelized without requiring additional synchronization.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
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
					[/* reference */ 'r', `.package-summary#Associativity`],
					[/* text */ 't', `,
                    `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
                    `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
					[/* text */ 't', `
                    function that must fold an element into a result
                    container.`]
				]],
				[/* parameter */ 'combiner', [/* parameter description */
					[/* text */ 't', `an `],
					[/* reference */ 'r', `.package-summary#Associativity`],
					[/* text */ 't', `,
                    `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
                    `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
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
		[/* method */ 'collect(java.util.stream.Collector)', [
			[/* method description */
				[/* text */ 't', `Performs a `],
				[/* reference */ 'r', `.package-summary#MutableReduction`],
				[/* text */ 't', ` operation on the elements of this stream using a
 `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', `.  A `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', `
 encapsulates the functions used as arguments to
 `],
				[/* reference */ 'r', `#collect(java.util.function.Supplier,java.util.function.BiConsumer,java.util.function.BiConsumer)`, `collect(Supplier, BiConsumer, BiConsumer)`],
				[/* text */ 't', `, allowing for reuse of
 collection strategies and composition of collect operations such as
 multiple-level grouping or partitioning.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the stream is parallel, and the `],
					[/* inline code block */ 'i', `Collector`],
					[/* text */ 't', `
 is `],
					[/* reference */ 'r', `.Collector.Characteristics#CONCURRENT`],
					[/* text */ 't', `, and
 either the stream is unordered or the collector is
 `],
					[/* reference */ 'r', `.Collector.Characteristics#UNORDERED`],
					[/* text */ 't', `,
 then a concurrent reduction will be performed (see `],
					[/* reference */ 'r', `java.util.stream.Collector`],
					[/* text */ 't', ` for
 details on concurrent reduction.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `When executed in parallel, multiple intermediate results may be
 instantiated, populated, and merged so as to maintain isolation of
 mutable data structures.  Therefore, even when executed in parallel
 with non-thread-safe data structures (such as `],
					[/* inline code block */ 'i', `ArrayList`],
					[/* text */ 't', `), no
 additional synchronization is needed for a parallel reduction.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'collector', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Collector`],
					[/* text */ 't', ` describing the reduction`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the result of the reduction`]
			]
		]],
		[/* method */ 'toList()', [
			[/* method description */
				[/* text */ 't', `Accumulates the elements of this stream into a `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', `. The elements in
 the list will be in this stream's encounter order, if one exists. The returned List
 is unmodifiable; calls to any mutator method will always cause
 `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', ` to be thrown. There are no
 guarantees on the implementation type or serializability of the returned List.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned instance may be `],
					[/* text */ 't', `value-based`],
					[/* text */ 't', `.
 Callers should make no assumptions about the identity of the returned instances.
 Identity-sensitive operations on these instances (reference equality (`],
					[/* inline code block */ 'i', `==`],
					[/* text */ 't', `),
 identity hash code, and synchronization) are unreliable and should be avoided.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a List containing the stream elements`]
			]
		]],
		[/* method */ 'of(java.lang.Object...)', UDF],
		[/* method */ 'of(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns a sequential `],
				[/* inline code block */ 'i', `Stream`],
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
				[/* reference */ 'r', `.package-summary#Reduction`],
				[/* text */ 't', ` and is
 equivalent to:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `return mapToLong(e -> 1L).sum();`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
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
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a stream builder`]
			]
		]],
		[/* method */ 'concat(java.util.stream.Stream,java.util.stream.Stream)', [
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
					[/* reference */ 'r', `.package-summary#StreamOps`],
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
		[/* method */ 'filter(java.util.function.Predicate)', [
			[/* method description */
				[/* text */ 't', `Returns a stream consisting of the elements of this stream that match
 the given predicate.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'predicate', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
                  `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
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
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an empty sequential stream`]
			]
		]],
		[/* method */ 'anyMatch(java.util.function.Predicate)', [
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
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'predicate', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
                  `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
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
		[/* method */ 'flatMap(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Returns a stream consisting of the results of replacing each element of
 this stream with the contents of a mapped stream produced by applying
 the provided mapping function to each element.  Each mapped stream is
 `],
				[/* reference */ 'r', `.BaseStream#close()`],
				[/* text */ 't', ` after its contents
 have been placed into this stream.  (If a mapped stream is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
 an empty stream is used, instead.)

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
               `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
					[/* text */ 't', `
               function to apply to each element which produces a stream
               of new values`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'forEach(java.util.function.Consumer)', [
			[/* method description */
				[/* text */ 't', `Performs an action for each element of this stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', `not`]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', ` action to perform on the elements`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'findAny()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* reference */ 'r', `java.util.Optional`],
				[/* text */ 't', ` describing some element of the stream, or an
 empty `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` if the stream is empty.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
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
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the element selected is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` describing some element of this stream, or an
 empty `],
				[/* inline code block */ 'i', `Optional`],
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
					[/* reference */ 'r', `.package-summary#StreamOps`],
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
		[/* method */ 'peek(java.util.function.Consumer)', [
			[/* method description */
				[/* text */ 't', `Returns a stream consisting of the elements of this stream, additionally
 performing the provided action on each element as elements are consumed
 from the resulting stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
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
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', ` action to perform on the elements as
                 they are consumed from the stream`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'reduce(java.lang.Object,java.util.function.BiFunction,java.util.function.BinaryOperator)', [
			[/* method description */
				[/* text */ 't', `Performs a `],
				[/* reference */ 'r', `.package-summary#Reduction`],
				[/* text */ 't', ` on the
 elements of this stream, using the provided identity, accumulation and
 combining functions.  This is equivalent to:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `U result = identity;
     for (T element : this stream)
         result = accumulator.apply(result, element)
     return result;`]
				]],
				[/* text */ 't', `

 but is not constrained to execute sequentially.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `identity`],
					[/* text */ 't', ` value must be an identity for the combiner
 function.  This means that for all `],
					[/* inline code block */ 'i', `u`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `combiner(identity, u)`],
					[/* text */ 't', `
 is equal to `],
					[/* inline code block */ 'i', `u`],
					[/* text */ 't', `.  Additionally, the `],
					[/* inline code block */ 'i', `combiner`],
					[/* text */ 't', ` function
 must be compatible with the `],
					[/* inline code block */ 'i', `accumulator`],
					[/* text */ 't', ` function; for all
 `],
					[/* inline code block */ 'i', `u`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `t`],
					[/* text */ 't', `, the following must hold:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `combiner.apply(u, accumulator.apply(identity, t)) == accumulator.apply(u, t)`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'identity', [/* parameter description */
					[/* text */ 't', `the identity value for the combiner function`]
				]],
				[/* parameter */ 'accumulator', [/* parameter description */
					[/* text */ 't', `an `],
					[/* reference */ 'r', `.package-summary#Associativity`],
					[/* text */ 't', `,
                    `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
                    `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
					[/* text */ 't', `
                    function for incorporating an additional element into a result`]
				]],
				[/* parameter */ 'combiner', [/* parameter description */
					[/* text */ 't', `an `],
					[/* reference */ 'r', `.package-summary#Associativity`],
					[/* text */ 't', `,
                    `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
                    `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
					[/* text */ 't', `
                    function for combining two values, which must be
                    compatible with the accumulator function`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the result of the reduction`]
			]
		]],
		[/* method */ 'reduce(java.lang.Object,java.util.function.BinaryOperator)', [
			[/* method description */
				[/* text */ 't', `Performs a `],
				[/* reference */ 'r', `.package-summary#Reduction`],
				[/* text */ 't', ` on the
 elements of this stream, using the provided identity value and an
 `],
				[/* reference */ 'r', `.package-summary#Associativity`],
				[/* text */ 't', `
 accumulation function, and returns the reduced value.  This is equivalent
 to:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `T result = identity;
     for (T element : this stream)
         result = accumulator.apply(result, element)
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
					[/* inline code block */ 'i', `t`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `accumulator.apply(identity, t)`],
					[/* text */ 't', ` is equal to `],
					[/* inline code block */ 'i', `t`],
					[/* text */ 't', `.
 The `],
					[/* inline code block */ 'i', `accumulator`],
					[/* text */ 't', ` function must be an
 `],
					[/* reference */ 'r', `.package-summary#Associativity`],
					[/* text */ 't', ` function.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'identity', [/* parameter description */
					[/* text */ 't', `the identity value for the accumulating function`]
				]],
				[/* parameter */ 'accumulator', [/* parameter description */
					[/* text */ 't', `an `],
					[/* reference */ 'r', `.package-summary#Associativity`],
					[/* text */ 't', `,
                    `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
                    `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
					[/* text */ 't', `
                    function for combining two values`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the result of the reduction`]
			]
		]],
		[/* method */ 'reduce(java.util.function.BinaryOperator)', [
			[/* method description */
				[/* text */ 't', `Performs a `],
				[/* reference */ 'r', `.package-summary#Reduction`],
				[/* text */ 't', ` on the
 elements of this stream, using an
 `],
				[/* reference */ 'r', `.package-summary#Associativity`],
				[/* text */ 't', ` accumulation
 function, and returns an `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` describing the reduced value,
 if any. This is equivalent to:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `boolean foundAny = false;
     T result = null;
     for (T element : this stream) {
         if (!foundAny) {
             foundAny = true;
             result = element;
         }
         else
             result = accumulator.apply(result, element);
     }
     return foundAny ? Optional.of(result) : Optional.empty();`]
				]],
				[/* text */ 't', `

 but is not constrained to execute sequentially.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `accumulator`],
					[/* text */ 't', ` function must be an
 `],
					[/* reference */ 'r', `.package-summary#Associativity`],
					[/* text */ 't', ` function.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'accumulator', [/* parameter description */
					[/* text */ 't', `an `],
					[/* reference */ 'r', `.package-summary#Associativity`],
					[/* text */ 't', `,
                    `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
                    `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
					[/* text */ 't', `
                    function for combining two values`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the result of the reduction is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* reference */ 'r', `java.util.Optional`],
				[/* text */ 't', ` describing the result of the reduction`]
			]
		]],
		[/* method */ 'distinct()', [
			[/* method description */
				[/* text */ 't', `Returns a stream consisting of the distinct elements (according to
 `],
				[/* reference */ 'r', `java.util.Object#equals(java.lang.Object)`],
				[/* text */ 't', `) of this stream.

 `],
				[/* block */ 'b', `For ordered streams, the selection of distinct elements is stable
 (for duplicated elements, the element appearing first in the encounter
 order is preserved.)  For unordered streams, no stability guarantees
 are made.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'findFirst()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* reference */ 'r', `java.util.Optional`],
				[/* text */ 't', ` describing the first element of this stream,
 or an empty `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` if the stream is empty.  If the stream has
 no encounter order, then any element may be returned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the element selected is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` describing the first element of this stream,
 or an empty `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` if the stream is empty`]
			]
		]],
		[/* method */ 'allMatch(java.util.function.Predicate)', [
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
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'predicate', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
                  `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
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
		[/* method */ 'iterate(java.lang.Object,java.util.function.Predicate,java.util.function.UnaryOperator)', [
			[/* method description */
				[/* text */ 't', `Returns a sequential ordered `],
				[/* inline code block */ 'i', `Stream`],
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
					[/* inline code block */ 'i', `Stream.iterate`],
					[/* text */ 't', ` should produce the same sequence of elements as
 produced by the corresponding for-loop:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `for (T index=seed; hasNext.test(index); index = next.apply(index)) {
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
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a new sequential `],
				[/* inline code block */ 'i', `Stream`]
			]
		]],
		[/* method */ 'iterate(java.lang.Object,java.util.function.UnaryOperator)', [
			[/* method description */
				[/* text */ 't', `Returns an infinite sequential ordered `],
				[/* inline code block */ 'i', `Stream`],
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
					[/* inline code block */ 'i', `Stream`],
					[/* text */ 't', ` will be
 the provided `],
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
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a new sequential `],
				[/* inline code block */ 'i', `Stream`]
			]
		]],
		[/* method */ 'ofNullable(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns a sequential `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', ` containing a single element, if
 non-null, otherwise returns an empty `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 't', [/* parameter description */
					[/* text */ 't', `the single element`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a stream with a single element if the specified element
         is non-null, otherwise an empty stream`]
			]
		]],
		[/* method */ 'sorted(java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Returns a stream consisting of the elements of this stream, sorted
 according to the provided `],
				[/* inline code block */ 'i', `Comparator`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `For ordered streams, the sort is stable.  For unordered streams, no
 stability guarantees are made.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'comparator', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
                   `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
					[/* inline code block */ 'i', `Comparator`],
					[/* text */ 't', ` to be used to compare stream elements`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'sorted()', [
			[/* method description */
				[/* text */ 't', `Returns a stream consisting of the elements of this stream, sorted
 according to natural order.  If the elements of this stream are not
 `],
				[/* inline code block */ 'i', `Comparable`],
				[/* text */ 't', `, a `],
				[/* inline code block */ 'i', `java.lang.ClassCastException`],
				[/* text */ 't', ` may be thrown
 when the terminal operation is executed.

 `],
				[/* block */ 'b', `For ordered streams, the sort is stable.  For unordered streams, no
 stability guarantees are made.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'generate(java.util.function.Supplier)', [
			[/* method description */
				[/* text */ 't', `Returns an infinite sequential unordered stream where each element is
 generated by the provided `],
				[/* inline code block */ 'i', `Supplier`],
				[/* text */ 't', `.  This is suitable for
 generating constant streams, streams of random elements, etc.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Supplier`],
					[/* text */ 't', ` of generated elements`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a new infinite sequential unordered `],
				[/* inline code block */ 'i', `Stream`]
			]
		]],
		[/* method */ 'flatMapToInt(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `IntStream`],
				[/* text */ 't', ` consisting of the results of replacing each
 element of this stream with the contents of a mapped stream produced by
 applying the provided mapping function to each element.  Each mapped
 stream is `],
				[/* reference */ 'r', `.BaseStream#close()`],
				[/* text */ 't', ` after its
 contents have been placed into this stream.  (If a mapped stream is
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` an empty stream is used, instead.)

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
               `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
					[/* text */ 't', `
               function to apply to each element which produces a stream
               of new values`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'flatMapToLong(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `LongStream`],
				[/* text */ 't', ` consisting of the results of replacing each
 element of this stream with the contents of a mapped stream produced by
 applying the provided mapping function to each element.  Each mapped
 stream is `],
				[/* reference */ 'r', `.BaseStream#close()`],
				[/* text */ 't', ` after its
 contents have been placed into this stream.  (If a mapped stream is
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` an empty stream is used, instead.)

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
               `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
					[/* text */ 't', `
               function to apply to each element which produces a stream
               of new values`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'flatMapToDouble(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `DoubleStream`],
				[/* text */ 't', ` consisting of the results of replacing
 each element of this stream with the contents of a mapped stream produced
 by applying the provided mapping function to each element.  Each mapped
 stream is `],
				[/* reference */ 'r', `.BaseStream#close()`],
				[/* text */ 't', ` after its
 contents have placed been into this stream.  (If a mapped stream is
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` an empty stream is used, instead.)

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
               `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
					[/* text */ 't', `
               function to apply to each element which produces a stream
               of new values`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'mapToInt(java.util.function.ToIntFunction)', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `IntStream`],
				[/* text */ 't', ` consisting of the results of applying the
 given function to the elements of this stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
               `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
					[/* text */ 't', `
               function to apply to each element`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'mapToLong(java.util.function.ToLongFunction)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `LongStream`],
				[/* text */ 't', ` consisting of the results of applying the
 given function to the elements of this stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
               `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
					[/* text */ 't', `
               function to apply to each element`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'mapToDouble(java.util.function.ToDoubleFunction)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `DoubleStream`],
				[/* text */ 't', ` consisting of the results of applying the
 given function to the elements of this stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
               `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
					[/* text */ 't', `
               function to apply to each element`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'mapMulti(java.util.function.BiConsumer)', [
			[/* method description */
				[/* text */ 't', `Returns a stream consisting of the results of replacing each element of
 this stream with multiple elements, specifically zero or more elements.
 Replacement is performed by applying the provided mapping function to each
 element in conjunction with a `],
				[/* reference */ 'r', `java.util.function.Consumer`],
				[/* text */ 't', ` argument
 that accepts replacement elements. The mapping function calls the consumer
 zero or more times to provide the replacement elements.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the `],
					[/* reference */ 'r', `java.util.function.Consumer`],
					[/* text */ 't', ` argument is used outside the scope of
 its application to the mapping function, the results are undefined.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
               `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
					[/* text */ 't', `
               function that generates replacement elements`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'mapMultiToInt(java.util.function.BiConsumer)', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `IntStream`],
				[/* text */ 't', ` consisting of the results of replacing each
 element of this stream with multiple elements, specifically zero or more
 elements.
 Replacement is performed by applying the provided mapping function to each
 element in conjunction with a `],
				[/* reference */ 'r', `java.util.function.IntConsumer`],
				[/* text */ 't', ` argument
 that accepts replacement elements. The mapping function calls the consumer
 zero or more times to provide the replacement elements.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the `],
					[/* reference */ 'r', `java.util.function.IntConsumer`],
					[/* text */ 't', ` argument is used outside the scope of
 its application to the mapping function, the results are undefined.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
               `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
					[/* text */ 't', `
               function that generates replacement elements`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'mapMultiToLong(java.util.function.BiConsumer)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `LongStream`],
				[/* text */ 't', ` consisting of the results of replacing each
 element of this stream with multiple elements, specifically zero or more
 elements.
 Replacement is performed by applying the provided mapping function to each
 element in conjunction with a `],
				[/* reference */ 'r', `java.util.function.LongConsumer`],
				[/* text */ 't', ` argument
 that accepts replacement elements. The mapping function calls the consumer
 zero or more times to provide the replacement elements.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the `],
					[/* reference */ 'r', `java.util.function.LongConsumer`],
					[/* text */ 't', ` argument is used outside the scope of
 its application to the mapping function, the results are undefined.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
               `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
					[/* text */ 't', `
               function that generates replacement elements`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'mapMultiToDouble(java.util.function.BiConsumer)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `DoubleStream`],
				[/* text */ 't', ` consisting of the results of replacing each
 element of this stream with multiple elements, specifically zero or more
 elements.
 Replacement is performed by applying the provided mapping function to each
 element in conjunction with a `],
				[/* reference */ 'r', `java.util.function.DoubleConsumer`],
				[/* text */ 't', ` argument
 that accepts replacement elements. The mapping function calls the consumer
 zero or more times to provide the replacement elements.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
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
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
               `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
					[/* text */ 't', `
               function that generates replacement elements`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new stream`]
			]
		]],
		[/* method */ 'takeWhile(java.util.function.Predicate)', [
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
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'predicate', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
                  `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
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
		[/* method */ 'dropWhile(java.util.function.Predicate)', [
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
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'predicate', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
                  `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
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
		[/* method */ 'forEachOrdered(java.util.function.Consumer)', [
			[/* method description */
				[/* text */ 't', `Performs an action for each element of this stream, in the encounter
 order of the stream if the stream has a defined encounter order.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This operation processes the elements one at a time, in encounter
 order if one exists.  Performing the action for one element
 `],
					[/* text */ 't', `happens-before`],
					[/* text */ 't', `
 performing the action for subsequent elements, but for any given element,
 the action may be performed in whatever thread the library chooses.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', ` action to perform on the elements`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'noneMatch(java.util.function.Predicate)', [
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
					[/* reference */ 'r', `.package-summary#StreamOps`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'predicate', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', `,
                  `],
					[/* reference */ 'r', `.package-summary#Statelessness`],
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
		]]
	],
]);
