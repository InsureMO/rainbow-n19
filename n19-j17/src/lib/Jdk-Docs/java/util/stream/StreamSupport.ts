import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.stream.StreamSupport', [
	[/* class description */
		[/* text */ 't', `Low-level utility methods for creating and manipulating streams.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This class is mostly for library writers presenting stream views
 of data structures; most static stream methods intended for end users are in
 the various `],
			[/* inline code block */ 'i', `Stream`],
			[/* text */ 't', ` classes.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'stream(java.util.function.Supplier,int,boolean)', [
			[/* method description */
				[/* text */ 't', `Creates a new sequential or parallel `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', ` from a
 `],
				[/* inline code block */ 'i', `Supplier`],
				[/* text */ 't', ` of `],
				[/* inline code block */ 'i', `Spliterator`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.Supplier#get()`],
					[/* text */ 't', ` method will be invoked on the supplier no
 more than once, and only after the terminal operation of the stream pipeline
 commences.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `For spliterators that report a characteristic of `],
					[/* inline code block */ 'i', `IMMUTABLE`],
					[/* text */ 't', `
 or `],
					[/* inline code block */ 'i', `CONCURRENT`],
					[/* text */ 't', `, or that are
 `],
					[/* reference */ 'r', `java.Spliterator#binding`],
					[/* text */ 't', `, it is likely
 more efficient to use `],
					[/* reference */ 'r', `#stream(java.util.Spliterator,boolean)`, `stream(java.util.Spliterator, boolean)`],
					[/* text */ 't', `
 instead.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The use of a `],
					[/* inline code block */ 'i', `Supplier`],
					[/* text */ 't', ` in this form provides a level of
 indirection that reduces the scope of potential interference with the
 source.  Since the supplier is only invoked after the terminal operation
 commences, any modifications to the source up to the start of the
 terminal operation are reflected in the stream result.  See
 `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', ` for
 more details.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'supplier', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `Supplier`],
					[/* text */ 't', ` of a `],
					[/* inline code block */ 'i', `Spliterator`]
				]],
				[/* parameter */ 'characteristics', [/* parameter description */
					[/* text */ 't', `Spliterator characteristics of the supplied
        `],
					[/* inline code block */ 'i', `Spliterator`],
					[/* text */ 't', `.  The characteristics must be equal to
        `],
					[/* inline code block */ 'i', `supplier.get().characteristics()`],
					[/* text */ 't', `, otherwise undefined
        behavior may occur when terminal operation commences.`]
				]],
				[/* parameter */ 'parallel', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` then the returned stream is a parallel
        stream; if `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` the returned stream is a sequential
        stream.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a new sequential or parallel `],
				[/* inline code block */ 'i', `Stream`]
			]
		]],
		[/* method */ 'stream(java.util.Spliterator,boolean)', [
			[/* method description */
				[/* text */ 't', `Creates a new sequential or parallel `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', ` from a
 `],
				[/* inline code block */ 'i', `Spliterator`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `The spliterator is only traversed, split, or queried for estimated
 size after the terminal operation of the stream pipeline commences.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `It is strongly recommended the spliterator report a characteristic of
 `],
					[/* inline code block */ 'i', `IMMUTABLE`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `CONCURRENT`],
					[/* text */ 't', `, or be
 `],
					[/* reference */ 'r', `java.Spliterator#binding`],
					[/* text */ 't', `.  Otherwise,
 `],
					[/* reference */ 'r', `#stream(java.util.function.Supplier,int,boolean)`, `stream(java.util.function.Supplier, int, boolean)`],
					[/* text */ 't', ` should be used
 to reduce the scope of potential interference with the source.  See
 `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', ` for
 more details.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'spliterator', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `Spliterator`],
					[/* text */ 't', ` describing the stream elements`]
				]],
				[/* parameter */ 'parallel', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` then the returned stream is a parallel
        stream; if `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` the returned stream is a sequential
        stream.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a new sequential or parallel `],
				[/* inline code block */ 'i', `Stream`]
			]
		]],
		[/* method */ 'intStream(java.util.function.Supplier,int,boolean)', [
			[/* method description */
				[/* text */ 't', `Creates a new sequential or parallel `],
				[/* inline code block */ 'i', `IntStream`],
				[/* text */ 't', ` from a
 `],
				[/* inline code block */ 'i', `Supplier`],
				[/* text */ 't', ` of `],
				[/* inline code block */ 'i', `Spliterator.OfInt`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.Supplier#get()`],
					[/* text */ 't', ` method will be invoked on the supplier no
 more than once, and only after the terminal operation of the stream pipeline
 commences.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `For spliterators that report a characteristic of `],
					[/* inline code block */ 'i', `IMMUTABLE`],
					[/* text */ 't', `
 or `],
					[/* inline code block */ 'i', `CONCURRENT`],
					[/* text */ 't', `, or that are
 `],
					[/* reference */ 'r', `java.Spliterator#binding`],
					[/* text */ 't', `, it is likely
 more efficient to use `],
					[/* reference */ 'r', `#intStream(java.util.Spliterator.OfInt,boolean)`, `intStream(java.util.Spliterator.OfInt, boolean)`],
					[/* text */ 't', `
 instead.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The use of a `],
					[/* inline code block */ 'i', `Supplier`],
					[/* text */ 't', ` in this form provides a level of
 indirection that reduces the scope of potential interference with the
 source.  Since the supplier is only invoked after the terminal operation
 commences, any modifications to the source up to the start of the
 terminal operation are reflected in the stream result.  See
 `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', ` for
 more details.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'supplier', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `Supplier`],
					[/* text */ 't', ` of a `],
					[/* inline code block */ 'i', `Spliterator.OfInt`]
				]],
				[/* parameter */ 'characteristics', [/* parameter description */
					[/* text */ 't', `Spliterator characteristics of the supplied
        `],
					[/* inline code block */ 'i', `Spliterator.OfInt`],
					[/* text */ 't', `.  The characteristics must be equal to
        `],
					[/* inline code block */ 'i', `supplier.get().characteristics()`],
					[/* text */ 't', `, otherwise undefined
        behavior may occur when terminal operation commences.`]
				]],
				[/* parameter */ 'parallel', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` then the returned stream is a parallel
        stream; if `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` the returned stream is a sequential
        stream.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a new sequential or parallel `],
				[/* inline code block */ 'i', `IntStream`]
			]
		]],
		[/* method */ 'intStream(java.util.Spliterator.OfInt,boolean)', [
			[/* method description */
				[/* text */ 't', `Creates a new sequential or parallel `],
				[/* inline code block */ 'i', `IntStream`],
				[/* text */ 't', ` from a
 `],
				[/* inline code block */ 'i', `Spliterator.OfInt`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `The spliterator is only traversed, split, or queried for estimated size
 after the terminal operation of the stream pipeline commences.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `It is strongly recommended the spliterator report a characteristic of
 `],
					[/* inline code block */ 'i', `IMMUTABLE`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `CONCURRENT`],
					[/* text */ 't', `, or be
 `],
					[/* reference */ 'r', `java.Spliterator#binding`],
					[/* text */ 't', `.  Otherwise,
 `],
					[/* reference */ 'r', `#intStream(java.util.function.Supplier,int,boolean)`, `intStream(java.util.function.Supplier, int, boolean)`],
					[/* text */ 't', ` should be
 used to reduce the scope of potential interference with the source.  See
 `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', ` for
 more details.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'spliterator', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `Spliterator.OfInt`],
					[/* text */ 't', ` describing the stream elements`]
				]],
				[/* parameter */ 'parallel', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` then the returned stream is a parallel
        stream; if `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` the returned stream is a sequential
        stream.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a new sequential or parallel `],
				[/* inline code block */ 'i', `IntStream`]
			]
		]],
		[/* method */ 'longStream(java.util.function.Supplier,int,boolean)', [
			[/* method description */
				[/* text */ 't', `Creates a new sequential or parallel `],
				[/* inline code block */ 'i', `LongStream`],
				[/* text */ 't', ` from a
 `],
				[/* inline code block */ 'i', `Supplier`],
				[/* text */ 't', ` of `],
				[/* inline code block */ 'i', `Spliterator.OfLong`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.Supplier#get()`],
					[/* text */ 't', ` method will be invoked on the supplier no
 more than once, and only after the terminal operation of the stream pipeline
 commences.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `For spliterators that report a characteristic of `],
					[/* inline code block */ 'i', `IMMUTABLE`],
					[/* text */ 't', `
 or `],
					[/* inline code block */ 'i', `CONCURRENT`],
					[/* text */ 't', `, or that are
 `],
					[/* reference */ 'r', `java.Spliterator#binding`],
					[/* text */ 't', `, it is likely
 more efficient to use `],
					[/* reference */ 'r', `#longStream(java.util.Spliterator.OfLong,boolean)`, `longStream(java.util.Spliterator.OfLong, boolean)`],
					[/* text */ 't', `
 instead.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The use of a `],
					[/* inline code block */ 'i', `Supplier`],
					[/* text */ 't', ` in this form provides a level of
 indirection that reduces the scope of potential interference with the
 source.  Since the supplier is only invoked after the terminal operation
 commences, any modifications to the source up to the start of the
 terminal operation are reflected in the stream result.  See
 `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', ` for
 more details.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'supplier', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `Supplier`],
					[/* text */ 't', ` of a `],
					[/* inline code block */ 'i', `Spliterator.OfLong`]
				]],
				[/* parameter */ 'characteristics', [/* parameter description */
					[/* text */ 't', `Spliterator characteristics of the supplied
        `],
					[/* inline code block */ 'i', `Spliterator.OfLong`],
					[/* text */ 't', `.  The characteristics must be equal to
        `],
					[/* inline code block */ 'i', `supplier.get().characteristics()`],
					[/* text */ 't', `, otherwise undefined
        behavior may occur when terminal operation commences.`]
				]],
				[/* parameter */ 'parallel', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` then the returned stream is a parallel
        stream; if `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` the returned stream is a sequential
        stream.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a new sequential or parallel `],
				[/* inline code block */ 'i', `LongStream`]
			]
		]],
		[/* method */ 'longStream(java.util.Spliterator.OfLong,boolean)', [
			[/* method description */
				[/* text */ 't', `Creates a new sequential or parallel `],
				[/* inline code block */ 'i', `LongStream`],
				[/* text */ 't', ` from a
 `],
				[/* inline code block */ 'i', `Spliterator.OfLong`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `The spliterator is only traversed, split, or queried for estimated
 size after the terminal operation of the stream pipeline commences.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `It is strongly recommended the spliterator report a characteristic of
 `],
					[/* inline code block */ 'i', `IMMUTABLE`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `CONCURRENT`],
					[/* text */ 't', `, or be
 `],
					[/* reference */ 'r', `java.Spliterator#binding`],
					[/* text */ 't', `.  Otherwise,
 `],
					[/* reference */ 'r', `#longStream(java.util.function.Supplier,int,boolean)`, `longStream(java.util.function.Supplier, int, boolean)`],
					[/* text */ 't', ` should be
 used to reduce the scope of potential interference with the source.  See
 `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', ` for
 more details.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'spliterator', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `Spliterator.OfLong`],
					[/* text */ 't', ` describing the stream elements`]
				]],
				[/* parameter */ 'parallel', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` then the returned stream is a parallel
        stream; if `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` the returned stream is a sequential
        stream.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a new sequential or parallel `],
				[/* inline code block */ 'i', `LongStream`]
			]
		]],
		[/* method */ 'doubleStream(java.util.Spliterator.OfDouble,boolean)', [
			[/* method description */
				[/* text */ 't', `Creates a new sequential or parallel `],
				[/* inline code block */ 'i', `DoubleStream`],
				[/* text */ 't', ` from a
 `],
				[/* inline code block */ 'i', `Spliterator.OfDouble`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `The spliterator is only traversed, split, or queried for estimated size
 after the terminal operation of the stream pipeline commences.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `It is strongly recommended the spliterator report a characteristic of
 `],
					[/* inline code block */ 'i', `IMMUTABLE`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `CONCURRENT`],
					[/* text */ 't', `, or be
 `],
					[/* reference */ 'r', `java.Spliterator#binding`],
					[/* text */ 't', `.  Otherwise,
 `],
					[/* reference */ 'r', `#doubleStream(java.util.function.Supplier,int,boolean)`, `doubleStream(java.util.function.Supplier, int, boolean)`],
					[/* text */ 't', ` should
 be used to reduce the scope of potential interference with the source.  See
 `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', ` for
 more details.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'spliterator', [/* parameter description */
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `Spliterator.OfDouble`],
					[/* text */ 't', ` describing the stream elements`]
				]],
				[/* parameter */ 'parallel', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` then the returned stream is a parallel
        stream; if `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` the returned stream is a sequential
        stream.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a new sequential or parallel `],
				[/* inline code block */ 'i', `DoubleStream`]
			]
		]],
		[/* method */ 'doubleStream(java.util.function.Supplier,int,boolean)', [
			[/* method description */
				[/* text */ 't', `Creates a new sequential or parallel `],
				[/* inline code block */ 'i', `DoubleStream`],
				[/* text */ 't', ` from a
 `],
				[/* inline code block */ 'i', `Supplier`],
				[/* text */ 't', ` of `],
				[/* inline code block */ 'i', `Spliterator.OfDouble`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.Supplier#get()`],
					[/* text */ 't', ` method will be invoked on the supplier no
 more than once, and only after the terminal operation of the stream pipeline
 commences.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `For spliterators that report a characteristic of `],
					[/* inline code block */ 'i', `IMMUTABLE`],
					[/* text */ 't', `
 or `],
					[/* inline code block */ 'i', `CONCURRENT`],
					[/* text */ 't', `, or that are
 `],
					[/* reference */ 'r', `java.Spliterator#binding`],
					[/* text */ 't', `, it is likely
 more efficient to use `],
					[/* reference */ 'r', `#doubleStream(java.util.Spliterator.OfDouble,boolean)`, `doubleStream(java.util.Spliterator.OfDouble, boolean)`],
					[/* text */ 't', `
 instead.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The use of a `],
					[/* inline code block */ 'i', `Supplier`],
					[/* text */ 't', ` in this form provides a level of
 indirection that reduces the scope of potential interference with the
 source.  Since the supplier is only invoked after the terminal operation
 commences, any modifications to the source up to the start of the
 terminal operation are reflected in the stream result.  See
 `],
					[/* reference */ 'r', `.package-summary#NonInterference`],
					[/* text */ 't', ` for
 more details.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'supplier', [/* parameter description */
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `Supplier`],
					[/* text */ 't', ` of a `],
					[/* inline code block */ 'i', `Spliterator.OfDouble`]
				]],
				[/* parameter */ 'characteristics', [/* parameter description */
					[/* text */ 't', `Spliterator characteristics of the supplied
        `],
					[/* inline code block */ 'i', `Spliterator.OfDouble`],
					[/* text */ 't', `.  The characteristics must be equal to
        `],
					[/* inline code block */ 'i', `supplier.get().characteristics()`],
					[/* text */ 't', `, otherwise undefined
        behavior may occur when terminal operation commences.`]
				]],
				[/* parameter */ 'parallel', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` then the returned stream is a parallel
        stream; if `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` the returned stream is a sequential
        stream.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a new sequential or parallel `],
				[/* inline code block */ 'i', `DoubleStream`]
			]
		]]
	],
]);
