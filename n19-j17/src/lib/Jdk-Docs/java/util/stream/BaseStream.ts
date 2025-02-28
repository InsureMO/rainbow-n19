import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.stream.BaseStream', [
	[/* class description */
		[/* text */ 't', `Base interface for streams, which are sequences of elements supporting
 sequential and parallel aggregate operations.  The following example
 illustrates an aggregate operation using the stream types `],
		[/* reference */ 'r', `java.util.stream.Stream`],
		[/* text */ 't', `
 and `],
		[/* reference */ 'r', `java.util.stream.IntStream`],
		[/* text */ 't', `, computing the sum of the weights of the red widgets:

 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `int sum = widgets.stream()
                      .filter(w -> w.getColor() == RED)
                      .mapToInt(w -> w.getWeight())
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
 parallelism, which governs the behavior of all stream types.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'iterator()', [
			[/* method description */
				[/* text */ 't', `Returns an iterator for the elements of this stream.

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
				[/* text */ 't', `the element iterator for this stream`]
			]
		]],
		[/* method */ 'spliterator()', [
			[/* method description */
				[/* text */ 't', `Returns a spliterator for the elements of this stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `terminal operation`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', `
 The returned spliterator should report the set of characteristics derived
 from the stream pipeline (namely the characteristics derived from the
 stream source spliterator and the intermediate operations).
 Implementations may report a sub-set of those characteristics.  For
 example, it may be too expensive to compute the entire set for some or
 all possible stream pipelines.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the element spliterator for this stream`]
			]
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this stream, causing all close handlers for this stream pipeline
 to be called.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'parallel()', [
			[/* method description */
				[/* text */ 't', `Returns an equivalent stream that is parallel.  May return
 itself, either because the stream was already parallel, or because
 the underlying stream state was modified to be parallel.

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
				[/* text */ 't', `a parallel stream`]
			]
		]],
		[/* method */ 'isParallel()', [
			[/* method description */
				[/* text */ 't', `Returns whether this stream, if a terminal operation were to be executed,
 would execute in parallel.  Calling this method after invoking an
 terminal stream operation method may yield unpredictable results.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this stream would execute in parallel if executed`]
			]
		]],
		[/* method */ 'sequential()', [
			[/* method description */
				[/* text */ 't', `Returns an equivalent stream that is sequential.  May return
 itself, either because the stream was already sequential, or because
 the underlying stream state was modified to be sequential.

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
				[/* text */ 't', `a sequential stream`]
			]
		]],
		[/* method */ 'unordered()', [
			[/* method description */
				[/* text */ 't', `Returns an equivalent stream that is
 `],
				[/* external link */ 'a', `package-summary.html#Ordering`, `unordered`],
				[/* text */ 't', `.  May return
 itself, either because the stream was already unordered, or because
 the underlying stream state was modified to be unordered.

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
				[/* text */ 't', `an unordered stream`]
			]
		]],
		[/* method */ 'onClose(java.lang.Runnable)', [
			[/* method description */
				[/* text */ 't', `Returns an equivalent stream with an additional close handler.  Close
 handlers are run when the `],
				[/* reference */ 'r', `close()`],
				[/* text */ 't', ` method
 is called on the stream, and are executed in the order they were
 added.  All close handlers are run, even if earlier close handlers throw
 exceptions.  If any close handler throws an exception, the first
 exception thrown will be relayed to the caller of `],
				[/* inline code block */ 'i', `close()`],
				[/* text */ 't', `, with
 any remaining exceptions added to that exception as suppressed exceptions
 (unless one of the remaining exceptions is the same exception as the
 first exception, since an exception cannot suppress itself.)  May
 return itself.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an `],
					[/* external link */ 'a', `package-summary.html#StreamOps`, `intermediate operation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'closeHandler', [/* parameter description */
					[/* text */ 't', `A task to execute when the stream is closed`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a stream with a handler that is run if the stream is closed`]
			]
		]]
	],
]);
