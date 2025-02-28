import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.stream.Collector', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* external link */ 'a', `package-summary.html#Reduction`, `mutable reduction operation`],
		[/* text */ 't', ` that
 accumulates input elements into a mutable result container, optionally transforming
 the accumulated result into a final representation after all input elements
 have been processed.  Reduction operations can be performed either sequentially
 or in parallel.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Examples of mutable reduction operations include:
 accumulating elements into a `],
			[/* inline code block */ 'i', `Collection`],
			[/* text */ 't', `; concatenating
 strings using a `],
			[/* inline code block */ 'i', `StringBuilder`],
			[/* text */ 't', `; computing summary information about
 elements such as sum, min, max, or average; computing "pivot table" summaries
 such as "maximum valued transaction by seller", etc.  The class `],
			[/* reference */ 'r', `java.util.stream.Collectors`],
			[/* text */ 't', `
 provides implementations of many common mutable reductions.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A `],
			[/* inline code block */ 'i', `Collector`],
			[/* text */ 't', ` is specified by four functions that work together to
 accumulate entries into a mutable result container, and optionally perform
 a final transform on the result.  They are: `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `creation of a new result container (`],
				[/* reference */ 'r', `supplier()`],
				[/* text */ 't', `)`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `incorporating a new data element into a result container (`],
				[/* reference */ 'r', `accumulator()`],
				[/* text */ 't', `)`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `combining two result containers into one (`],
				[/* reference */ 'r', `combiner()`],
				[/* text */ 't', `)`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `performing an optional final transform on the container (`],
				[/* reference */ 'r', `finisher()`],
				[/* text */ 't', `)`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Collectors also have a set of characteristics, such as
 `],
			[/* external link */ 'a', `Collector.Characteristics.html#CONCURRENT`, `Collector.Characteristics.CONCURRENT`],
			[/* text */ 't', `, that provide hints that can be used by a
 reduction implementation to provide better performance.

 `]
		]],
		[/* block */ 'b', `A sequential implementation of a reduction using a collector would
 create a single result container using the supplier function, and invoke the
 accumulator function once for each input element.  A parallel implementation
 would partition the input, create a result container for each partition,
 accumulate the contents of each partition into a subresult for that partition,
 and then use the combiner function to merge the subresults into a combined
 result.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `To ensure that sequential and parallel executions produce equivalent
 results, the collector functions must satisfy an `],
			[/* text */ 't', `identity`],
			[/* text */ 't', ` and an
 `],
			[/* external link */ 'a', `package-summary.html#Associativity`, `associativity`],
			[/* text */ 't', ` constraints.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The identity constraint says that for any partially accumulated result,
 combining it with an empty result container must produce an equivalent
 result.  That is, for a partially accumulated result `],
			[/* inline code block */ 'i', `a`],
			[/* text */ 't', ` that is the
 result of any series of accumulator and combiner invocations, `],
			[/* inline code block */ 'i', `a`],
			[/* text */ 't', ` must
 be equivalent to `],
			[/* inline code block */ 'i', `combiner.apply(a, supplier.get())`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The associativity constraint says that splitting the computation must
 produce an equivalent result.  That is, for any input elements `],
			[/* inline code block */ 'i', `t1`],
			[/* text */ 't', `
 and `],
			[/* inline code block */ 'i', `t2`],
			[/* text */ 't', `, the results `],
			[/* inline code block */ 'i', `r1`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `r2`],
			[/* text */ 't', ` in the computation
 below must be equivalent:
 `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `A a1 = supplier.get();
     accumulator.accept(a1, t1);
     accumulator.accept(a1, t2);
     R r1 = finisher.apply(a1);  // result without splitting

     A a2 = supplier.get();
     accumulator.accept(a2, t1);
     A a3 = supplier.get();
     accumulator.accept(a3, t2);
     R r2 = finisher.apply(combiner.apply(a2, a3));  // result with splitting`]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `For collectors that do not have the `],
			[/* inline code block */ 'i', `UNORDERED`],
			[/* text */ 't', ` characteristic,
 two accumulated results `],
			[/* inline code block */ 'i', `a1`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `a2`],
			[/* text */ 't', ` are equivalent if
 `],
			[/* inline code block */ 'i', `finisher.apply(a1).equals(finisher.apply(a2))`],
			[/* text */ 't', `.  For unordered
 collectors, equivalence is relaxed to allow for non-equality related to
 differences in order.  (For example, an unordered collector that accumulated
 elements to a `],
			[/* inline code block */ 'i', `List`],
			[/* text */ 't', ` would consider two lists equivalent if they
 contained the same elements, ignoring order.)

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Libraries that implement reduction based on `],
			[/* inline code block */ 'i', `Collector`],
			[/* text */ 't', `, such as
 `],
			[/* external link */ 'a', `Stream.html#collect(java.util.stream.Collector)`, `Stream.collect(Collector)`],
			[/* text */ 't', `, must adhere to the following constraints:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', `The first argument passed to the accumulator function, both
     arguments passed to the combiner function, and the argument passed to the
     finisher function must be the result of a previous invocation of the
     result supplier, accumulator, or combiner functions.`],
			[/* block */ 'b', `The implementation should not do anything with the result of any of
     the result supplier, accumulator, or combiner functions other than to
     pass them again to the accumulator, combiner, or finisher functions,
     or return them to the caller of the reduction operation.`],
			[/* block */ 'b', `If a result is passed to the combiner or finisher
     function, and the same object is not returned from that function, it is
     never used again.`],
			[/* block */ 'b', `Once a result is passed to the combiner or finisher function, it
     is never passed to the accumulator function again.`],
			[/* block */ 'b', [
				[/* text */ 't', `For non-concurrent collectors, any result returned from the result
     supplier, accumulator, or combiner functions must be serially
     thread-confined.  This enables collection to occur in parallel without
     the `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` needing to implement any additional synchronization.
     The reduction implementation must manage that the input is properly
     partitioned, that partitions are processed in isolation, and combining
     happens only after accumulation is complete.`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `For concurrent collectors, an implementation is free to (but not
     required to) implement reduction concurrently.  A concurrent reduction
     is one where the accumulator function is called concurrently from
     multiple threads, using the same concurrently-modifiable result container,
     rather than keeping the result isolated during accumulation.
     A concurrent reduction should only be applied if the collector has the
     `],
				[/* external link */ 'a', `Collector.Characteristics.html#UNORDERED`, `Collector.Characteristics.UNORDERED`],
				[/* text */ 't', ` characteristics or if the
     originating data is unordered.`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `In addition to the predefined implementations in `],
			[/* reference */ 'r', `java.util.stream.Collectors`],
			[/* text */ 't', `, the
 static factory methods `],
			[/* reference */ 'r', `of(Supplier, BiConsumer, BinaryOperator, Characteristics...)`],
			[/* text */ 't', `
 can be used to construct collectors.  For example, you could create a collector
 that accumulates widgets into a `],
			[/* inline code block */ 'i', `TreeSet`],
			[/* text */ 't', ` with:

 `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `Collector<Widget, ?, TreeSet<Widget>> intoSet =
         Collector.of(TreeSet::new, TreeSet::add,
                      (left, right) -> { left.addAll(right); return left; });`]
		]],
		[/* text */ 't', `

 (This behavior is also implemented by the predefined collector
 `],
		[/* external link */ 'a', `Collectors.html#toCollection(java.util.function.Supplier)`, `Collectors.toCollection(Supplier)`],
		[/* text */ 't', `).`],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'of(java.util.function.Supplier,java.util.function.BiConsumer,java.util.function.BinaryOperator,java.util.function.Function,java.util.stream.Collector.Characteristics...)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` described by the given `],
				[/* inline code block */ 'i', `supplier`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `accumulator`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `combiner`],
				[/* text */ 't', `, and `],
				[/* inline code block */ 'i', `finisher`],
				[/* text */ 't', ` functions.`]
			],
			[/* parameters */
				[/* parameter */ 'supplier', [/* parameter description */
					[/* text */ 't', `The supplier function for the new collector`]
				]],
				[/* parameter */ 'accumulator', [/* parameter description */
					[/* text */ 't', `The accumulator function for the new collector`]
				]],
				[/* parameter */ 'combiner', [/* parameter description */
					[/* text */ 't', `The combiner function for the new collector`]
				]],
				[/* parameter */ 'finisher', [/* parameter description */
					[/* text */ 't', `The finisher function for the new collector`]
				]],
				[/* parameter */ 'characteristics', [/* parameter description */
					[/* text */ 't', `The collector characteristics for the new
                        collector`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the new `],
				[/* inline code block */ 'i', `Collector`]
			]
		]],
		[/* method */ 'of(java.util.function.Supplier,java.util.function.BiConsumer,java.util.function.BinaryOperator,java.util.stream.Collector.Characteristics...)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` described by the given `],
				[/* inline code block */ 'i', `supplier`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `accumulator`],
				[/* text */ 't', `, and `],
				[/* inline code block */ 'i', `combiner`],
				[/* text */ 't', ` functions.  The resulting
 `],
				[/* inline code block */ 'i', `Collector`],
				[/* text */ 't', ` has the `],
				[/* inline code block */ 'i', `Collector.Characteristics.IDENTITY_FINISH`],
				[/* text */ 't', `
 characteristic.`]
			],
			[/* parameters */
				[/* parameter */ 'supplier', [/* parameter description */
					[/* text */ 't', `The supplier function for the new collector`]
				]],
				[/* parameter */ 'accumulator', [/* parameter description */
					[/* text */ 't', `The accumulator function for the new collector`]
				]],
				[/* parameter */ 'combiner', [/* parameter description */
					[/* text */ 't', `The combiner function for the new collector`]
				]],
				[/* parameter */ 'characteristics', [/* parameter description */
					[/* text */ 't', `The collector characteristics for the new
                        collector`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the new `],
				[/* inline code block */ 'i', `Collector`]
			]
		]],
		[/* method */ 'characteristics()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` of `],
				[/* inline code block */ 'i', `Collector.Characteristics`],
				[/* text */ 't', ` indicating
 the characteristics of this Collector.  This set should be immutable.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an immutable set of collector characteristics`]
			]
		]],
		[/* method */ 'combiner()', [
			[/* method description */
				[/* text */ 't', `A function that accepts two partial results and merges them.  The
 combiner function may fold state from one argument into the other and
 return that, or may return a new result container.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a function which combines two partial results into a combined
 result`]
			]
		]],
		[/* method */ 'supplier()', [
			[/* method description */
				[/* text */ 't', `A function that creates and returns a new mutable result container.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a function which returns a new, mutable result container`]
			]
		]],
		[/* method */ 'accumulator()', [
			[/* method description */
				[/* text */ 't', `A function that folds a value into a mutable result container.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a function which folds a value into a mutable result container`]
			]
		]],
		[/* method */ 'finisher()', [
			[/* method description */
				[/* text */ 't', `Perform the final transformation from the intermediate accumulation type
 `],
				[/* inline code block */ 'i', `A`],
				[/* text */ 't', ` to the final result type `],
				[/* inline code block */ 'i', `R`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the characteristic `],
					[/* inline code block */ 'i', `IDENTITY_FINISH`],
					[/* text */ 't', ` is
 set, this function may be presumed to be an identity transform with an
 unchecked cast from `],
					[/* inline code block */ 'i', `A`],
					[/* text */ 't', ` to `],
					[/* inline code block */ 'i', `R`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a function which transforms the intermediate result to the final
 result`]
			]
		]]
	],
]);
