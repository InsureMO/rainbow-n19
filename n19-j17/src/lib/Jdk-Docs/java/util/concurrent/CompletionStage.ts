import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.concurrent.CompletionStage', [
	[/* class description */
		[/* text */ 't', `A stage of a possibly asynchronous computation, that performs an
 action or computes a value when another CompletionStage completes.
 A stage completes upon termination of its computation, but this may
 in turn trigger other dependent stages.  The functionality defined
 in this interface takes only a few basic forms, which expand out to
 a larger set of methods to capture a range of usage styles:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `The computation performed by a stage may be expressed as a
 Function, Consumer, or Runnable (using methods with names including
 `],
				[/* text */ 't', `apply`],
				[/* text */ 't', `, `],
				[/* text */ 't', `accept`],
				[/* text */ 't', `, or `],
				[/* text */ 't', `run`],
				[/* text */ 't', `, respectively)
 depending on whether it requires arguments and/or produces results.
 For example:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `stage.thenApply(x -> square(x))
      .thenAccept(x -> System.out.print(x))
      .thenRun(() -> System.out.println());`]
				]],
				[/* text */ 't', `

 An additional form (`],
				[/* text */ 't', `compose`],
				[/* text */ 't', `) allows the construction of
 computation pipelines from functions returning completion stages.

 `],
				[/* block */ 'b', `Any argument to a stage's computation is the outcome of a
 triggering stage's computation.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `One stage's execution may be triggered by completion of a
 single stage, or both of two stages, or either of two stages.
 Dependencies on a single stage are arranged using methods with
 prefix `],
				[/* text */ 't', `then`],
				[/* text */ 't', `. Those triggered by completion of
 `],
				[/* text */ 't', `both`],
				[/* text */ 't', ` of two stages may `],
				[/* text */ 't', `combine`],
				[/* text */ 't', ` their results or
 effects, using correspondingly named methods. Those triggered by
 `],
				[/* text */ 't', `either`],
				[/* text */ 't', ` of two stages make no guarantees about which of the
 results or effects are used for the dependent stage's computation.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Dependencies among stages control the triggering of
 computations, but do not otherwise guarantee any particular
 ordering. Additionally, execution of a new stage's computations may
 be arranged in any of three ways: default execution, default
 asynchronous execution (using methods with suffix `],
				[/* text */ 't', `async`],
				[/* text */ 't', `
 that employ the stage's default asynchronous execution facility),
 or custom (via a supplied `],
				[/* reference */ 'r', `java.util.concurrent.Executor`],
				[/* text */ 't', `).  The execution
 properties of default and async modes are specified by
 CompletionStage implementations, not this interface. Methods with
 explicit Executor arguments may have arbitrary execution
 properties, and might not even support concurrent execution, but
 are arranged for processing in a way that accommodates asynchrony.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Two method forms (`],
				[/* reference */ 'r', `#handle(java.util.function.BiFunction)`, `handle`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `#whenComplete(java.util.function.BiConsumer)`, `whenComplete`],
				[/* text */ 't', `) support unconditional computation
 whether the triggering stage completed normally or exceptionally.
 Method `],
				[/* reference */ 'r', `#exceptionally(java.util.function.Function)`, `exceptionally`],
				[/* text */ 't', ` supports computation
 only when the triggering stage completes exceptionally, computing a
 replacement result, similarly to the java `],
				[/* inline code block */ 'i', `catch`],
				[/* text */ 't', ` keyword.
 In all other cases, if a stage's computation terminates abruptly
 with an (unchecked) exception or error, then all dependent stages
 requiring its completion complete exceptionally as well, with a
 `],
				[/* reference */ 'r', `java.util.concurrent.CompletionException`],
				[/* text */ 't', ` holding the exception as its cause.  If
 a stage is dependent on `],
				[/* text */ 't', `both`],
				[/* text */ 't', ` of two stages, and both
 complete exceptionally, then the CompletionException may correspond
 to either one of these exceptions.  If a stage is dependent on
 `],
				[/* text */ 't', `either`],
				[/* text */ 't', ` of two others, and only one of them completes
 exceptionally, no guarantees are made about whether the dependent
 stage completes normally or exceptionally. In the case of method
 `],
				[/* inline code block */ 'i', `whenComplete`],
				[/* text */ 't', `, when the supplied action itself encounters an
 exception, then the stage completes exceptionally with this
 exception unless the source stage also completed exceptionally, in
 which case the exceptional completion from the source stage is
 given preference and propagated to the dependent stage.

 `]
			]],
			[/* block */ 'b', '']
		]],
		[/* block */ 'b', [
			[/* text */ 't', `All methods adhere to the above triggering, execution, and
 exceptional completion specifications (which are not repeated in
 individual method specifications). Additionally, while arguments
 used to pass a completion result (that is, for parameters of type
 `],
			[/* inline code block */ 'i', `T`],
			[/* text */ 't', `) for methods accepting them may be null, passing a null
 value for any other parameter will result in a `],
			[/* reference */ 'r', `java.lang.NullPointerException`],
			[/* text */ 't', ` being thrown.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Method form `],
			[/* reference */ 'r', `#handle(java.util.function.BiFunction)`, `handle`],
			[/* text */ 't', ` is the most general way of
 creating a continuation stage, unconditionally performing a
 computation that is given both the result and exception (if any) of
 the triggering CompletionStage, and computing an arbitrary result.
 Method `],
			[/* reference */ 'r', `#whenComplete(java.util.function.BiConsumer)`, `whenComplete`],
			[/* text */ 't', ` is similar, but preserves
 the result of the triggering stage instead of computing a new one.
 Because a stage's normal result may be `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', `, both methods
 should have a computation structured thus:

 `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `(result, exception) -> {
   if (exception == null) {
     // triggering stage completed normally
   } else {
     // triggering stage completed exceptionally
   }
 }`]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `This interface does not define methods for initially creating,
 forcibly completing normally or exceptionally, probing completion
 status or results, or awaiting completion of a stage.
 Implementations of CompletionStage may provide means of achieving
 such effects, as appropriate.  Method `],
			[/* reference */ 'r', `#toCompletableFuture()`, `toCompletableFuture()`],
			[/* text */ 't', `
 enables interoperability among different implementations of this
 interface by providing a common conversion type.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'thenCombine(java.util.concurrent.CompletionStage,java.util.function.BiFunction)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this and the other
 given stage both complete normally, is executed with the two
 results as arguments to the supplied function.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other CompletionStage`]
				]],
				[/* parameter */ 'fn', [/* parameter description */
					[/* text */ 't', `the function to use to compute the value of the
 returned CompletionStage`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'thenCombineAsync(java.util.concurrent.CompletionStage,java.util.function.BiFunction)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this and the other
 given stage both complete normally, is executed using this
 stage's default asynchronous execution facility, with the two
 results as arguments to the supplied function.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other CompletionStage`]
				]],
				[/* parameter */ 'fn', [/* parameter description */
					[/* text */ 't', `the function to use to compute the value of the
 returned CompletionStage`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'thenCombineAsync(java.util.concurrent.CompletionStage,java.util.function.BiFunction,java.util.concurrent.Executor)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this and the other
 given stage both complete normally, is executed using the
 supplied executor, with the two results as arguments to the
 supplied function.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other CompletionStage`]
				]],
				[/* parameter */ 'fn', [/* parameter description */
					[/* text */ 't', `the function to use to compute the value of the
 returned CompletionStage`]
				]],
				[/* parameter */ 'executor', [/* parameter description */
					[/* text */ 't', `the executor to use for asynchronous execution`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'thenAcceptBoth(java.util.concurrent.CompletionStage,java.util.function.BiConsumer)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this and the other
 given stage both complete normally, is executed with the two
 results as arguments to the supplied action.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other CompletionStage`]
				]],
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the action to perform before completing the
 returned CompletionStage`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'thenAcceptBothAsync(java.util.concurrent.CompletionStage,java.util.function.BiConsumer)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this and the other
 given stage both complete normally, is executed using this
 stage's default asynchronous execution facility, with the two
 results as arguments to the supplied action.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other CompletionStage`]
				]],
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the action to perform before completing the
 returned CompletionStage`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'thenAcceptBothAsync(java.util.concurrent.CompletionStage,java.util.function.BiConsumer,java.util.concurrent.Executor)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this and the other
 given stage both complete normally, is executed using the
 supplied executor, with the two results as arguments to the
 supplied action.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other CompletionStage`]
				]],
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the action to perform before completing the
 returned CompletionStage`]
				]],
				[/* parameter */ 'executor', [/* parameter description */
					[/* text */ 't', `the executor to use for asynchronous execution`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'applyToEither(java.util.concurrent.CompletionStage,java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when either this or the
 other given stage complete normally, is executed with the
 corresponding result as argument to the supplied function.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other CompletionStage`]
				]],
				[/* parameter */ 'fn', [/* parameter description */
					[/* text */ 't', `the function to use to compute the value of the
 returned CompletionStage`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'applyToEitherAsync(java.util.concurrent.CompletionStage,java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when either this or the
 other given stage complete normally, is executed using this
 stage's default asynchronous execution facility, with the
 corresponding result as argument to the supplied function.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other CompletionStage`]
				]],
				[/* parameter */ 'fn', [/* parameter description */
					[/* text */ 't', `the function to use to compute the value of the
 returned CompletionStage`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'applyToEitherAsync(java.util.concurrent.CompletionStage,java.util.function.Function,java.util.concurrent.Executor)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when either this or the
 other given stage complete normally, is executed using the
 supplied executor, with the corresponding result as argument to
 the supplied function.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other CompletionStage`]
				]],
				[/* parameter */ 'fn', [/* parameter description */
					[/* text */ 't', `the function to use to compute the value of the
 returned CompletionStage`]
				]],
				[/* parameter */ 'executor', [/* parameter description */
					[/* text */ 't', `the executor to use for asynchronous execution`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'handle(java.util.function.BiFunction)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 either normally or exceptionally, is executed with this stage's
 result and exception as arguments to the supplied function.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `When this stage is complete, the given function is invoked
 with the result (or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if none) and the exception (or
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if none) of this stage as arguments, and the
 function's result is used to complete the returned stage.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fn', [/* parameter description */
					[/* text */ 't', `the function to use to compute the value of the
 returned CompletionStage`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'handleAsync(java.util.function.BiFunction)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 either normally or exceptionally, is executed using this stage's
 default asynchronous execution facility, with this stage's
 result and exception as arguments to the supplied function.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `When this stage is complete, the given function is invoked
 with the result (or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if none) and the exception (or
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if none) of this stage as arguments, and the
 function's result is used to complete the returned stage.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fn', [/* parameter description */
					[/* text */ 't', `the function to use to compute the value of the
 returned CompletionStage`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'handleAsync(java.util.function.BiFunction,java.util.concurrent.Executor)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 either normally or exceptionally, is executed using the
 supplied executor, with this stage's result and exception as
 arguments to the supplied function.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `When this stage is complete, the given function is invoked
 with the result (or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if none) and the exception (or
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if none) of this stage as arguments, and the
 function's result is used to complete the returned stage.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fn', [/* parameter description */
					[/* text */ 't', `the function to use to compute the value of the
 returned CompletionStage`]
				]],
				[/* parameter */ 'executor', [/* parameter description */
					[/* text */ 't', `the executor to use for asynchronous execution`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'thenApply(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 normally, is executed with this stage's result as the argument
 to the supplied function.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is analogous to
 `],
					[/* reference */ 'r', `java.Optional#map(java.util.function.Function)`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.Stream#map(java.util.function.Function)`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fn', [/* parameter description */
					[/* text */ 't', `the function to use to compute the value of the
 returned CompletionStage`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'thenApplyAsync(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 normally, is executed using this stage's default asynchronous
 execution facility, with this stage's result as the argument to
 the supplied function.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'fn', [/* parameter description */
					[/* text */ 't', `the function to use to compute the value of the
 returned CompletionStage`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'thenApplyAsync(java.util.function.Function,java.util.concurrent.Executor)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 normally, is executed using the supplied Executor, with this
 stage's result as the argument to the supplied function.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'fn', [/* parameter description */
					[/* text */ 't', `the function to use to compute the value of the
 returned CompletionStage`]
				]],
				[/* parameter */ 'executor', [/* parameter description */
					[/* text */ 't', `the executor to use for asynchronous execution`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'thenCompose(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that is completed with the same
 value as the CompletionStage returned by the given function.

 `],
				[/* block */ 'b', `When this stage completes normally, the given function is
 invoked with this stage's result as the argument, returning
 another CompletionStage.  When that stage completes normally,
 the CompletionStage returned by this method is completed with
 the same value.

 `],
				[/* block */ 'b', `To ensure progress, the supplied function must arrange
 eventual completion of its result.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is analogous to
 `],
					[/* reference */ 'r', `java.Optional#flatMap(java.util.function.Function)`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.Stream#flatMap(java.util.function.Function)`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fn', [/* parameter description */
					[/* text */ 't', `the function to use to compute another CompletionStage`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'thenComposeAsync(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that is completed with the same
 value as the CompletionStage returned by the given function,
 executed using this stage's default asynchronous execution
 facility.

 `],
				[/* block */ 'b', `When this stage completes normally, the given function is
 invoked with this stage's result as the argument, returning
 another CompletionStage.  When that stage completes normally,
 the CompletionStage returned by this method is completed with
 the same value.

 `],
				[/* block */ 'b', `To ensure progress, the supplied function must arrange
 eventual completion of its result.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fn', [/* parameter description */
					[/* text */ 't', `the function to use to compute another CompletionStage`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'thenComposeAsync(java.util.function.Function,java.util.concurrent.Executor)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that is completed with the same
 value as the CompletionStage returned by the given function,
 executed using the supplied Executor.

 `],
				[/* block */ 'b', `When this stage completes normally, the given function is
 invoked with this stage's result as the argument, returning
 another CompletionStage.  When that stage completes normally,
 the CompletionStage returned by this method is completed with
 the same value.

 `],
				[/* block */ 'b', `To ensure progress, the supplied function must arrange
 eventual completion of its result.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fn', [/* parameter description */
					[/* text */ 't', `the function to use to compute another CompletionStage`]
				]],
				[/* parameter */ 'executor', [/* parameter description */
					[/* text */ 't', `the executor to use for asynchronous execution`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'toCompletableFuture()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.concurrent.CompletableFuture`],
				[/* text */ 't', ` maintaining the same
 completion properties as this stage. If this stage is already a
 CompletableFuture, this method may return this stage itself.
 Otherwise, invocation of this method may be equivalent in
 effect to `],
				[/* inline code block */ 'i', `thenApply(x -> x)`],
				[/* text */ 't', `, but returning an instance
 of type `],
				[/* inline code block */ 'i', `CompletableFuture`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the CompletableFuture`]
			]
		]],
		[/* method */ 'acceptEither(java.util.concurrent.CompletionStage,java.util.function.Consumer)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when either this or the
 other given stage complete normally, is executed with the
 corresponding result as argument to the supplied action.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other CompletionStage`]
				]],
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the action to perform before completing the
 returned CompletionStage`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'acceptEitherAsync(java.util.concurrent.CompletionStage,java.util.function.Consumer)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when either this or the
 other given stage complete normally, is executed using this
 stage's default asynchronous execution facility, with the
 corresponding result as argument to the supplied action.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other CompletionStage`]
				]],
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the action to perform before completing the
 returned CompletionStage`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'acceptEitherAsync(java.util.concurrent.CompletionStage,java.util.function.Consumer,java.util.concurrent.Executor)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when either this or the
 other given stage complete normally, is executed using the
 supplied executor, with the corresponding result as argument to
 the supplied action.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other CompletionStage`]
				]],
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the action to perform before completing the
 returned CompletionStage`]
				]],
				[/* parameter */ 'executor', [/* parameter description */
					[/* text */ 't', `the executor to use for asynchronous execution`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'runAfterBoth(java.util.concurrent.CompletionStage,java.lang.Runnable)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this and the other
 given stage both complete normally, executes the given action.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other CompletionStage`]
				]],
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the action to perform before completing the
 returned CompletionStage`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'runAfterBothAsync(java.util.concurrent.CompletionStage,java.lang.Runnable)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this and the other
 given stage both complete normally, executes the given action
 using this stage's default asynchronous execution facility.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other CompletionStage`]
				]],
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the action to perform before completing the
 returned CompletionStage`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'runAfterBothAsync(java.util.concurrent.CompletionStage,java.lang.Runnable,java.util.concurrent.Executor)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this and the other
 given stage both complete normally, executes the given action
 using the supplied executor.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other CompletionStage`]
				]],
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the action to perform before completing the
 returned CompletionStage`]
				]],
				[/* parameter */ 'executor', [/* parameter description */
					[/* text */ 't', `the executor to use for asynchronous execution`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'runAfterEither(java.util.concurrent.CompletionStage,java.lang.Runnable)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when either this or the
 other given stage complete normally, executes the given action.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other CompletionStage`]
				]],
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the action to perform before completing the
 returned CompletionStage`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'runAfterEitherAsync(java.util.concurrent.CompletionStage,java.lang.Runnable)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when either this or the
 other given stage complete normally, executes the given action
 using this stage's default asynchronous execution facility.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other CompletionStage`]
				]],
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the action to perform before completing the
 returned CompletionStage`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'runAfterEitherAsync(java.util.concurrent.CompletionStage,java.lang.Runnable,java.util.concurrent.Executor)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when either this or the
 other given stage complete normally, executes the given action
 using the supplied executor.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other CompletionStage`]
				]],
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the action to perform before completing the
 returned CompletionStage`]
				]],
				[/* parameter */ 'executor', [/* parameter description */
					[/* text */ 't', `the executor to use for asynchronous execution`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'thenAccept(java.util.function.Consumer)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 normally, is executed with this stage's result as the argument
 to the supplied action.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the action to perform before completing the
 returned CompletionStage`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'thenAcceptAsync(java.util.function.Consumer)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 normally, is executed using this stage's default asynchronous
 execution facility, with this stage's result as the argument to
 the supplied action.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the action to perform before completing the
 returned CompletionStage`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'thenAcceptAsync(java.util.function.Consumer,java.util.concurrent.Executor)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 normally, is executed using the supplied Executor, with this
 stage's result as the argument to the supplied action.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the action to perform before completing the
 returned CompletionStage`]
				]],
				[/* parameter */ 'executor', [/* parameter description */
					[/* text */ 't', `the executor to use for asynchronous execution`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'thenRun(java.lang.Runnable)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 normally, executes the given action.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the action to perform before completing the
 returned CompletionStage`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'thenRunAsync(java.lang.Runnable)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 normally, executes the given action using this stage's default
 asynchronous execution facility.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the action to perform before completing the
 returned CompletionStage`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'thenRunAsync(java.lang.Runnable,java.util.concurrent.Executor)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 normally, executes the given action using the supplied Executor.

 See the `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the action to perform before completing the
 returned CompletionStage`]
				]],
				[/* parameter */ 'executor', [/* parameter description */
					[/* text */ 't', `the executor to use for asynchronous execution`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'exceptionally(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 exceptionally, is executed with this stage's exception as the
 argument to the supplied function.  Otherwise, if this stage
 completes normally, then the returned stage also completes
 normally with the same value.`]
			],
			[/* parameters */
				[/* parameter */ 'fn', [/* parameter description */
					[/* text */ 't', `the function to use to compute the value of the
 returned CompletionStage if this CompletionStage completed
 exceptionally`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'whenComplete(java.util.function.BiConsumer)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage with the same result or exception as
 this stage, that executes the given action when this stage completes.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `When this stage is complete, the given action is invoked
 with the result (or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if none) and the exception (or
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if none) of this stage as arguments.  The returned
 stage is completed when the action returns.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Unlike method `],
					[/* reference */ 'r', `#handle(java.util.function.BiFunction)`, `handle`],
					[/* text */ 't', `,
 this method is not designed to translate completion outcomes,
 so the supplied action should not throw an exception. However,
 if it does, the following rules apply: if this stage completed
 normally but the supplied action throws an exception, then the
 returned stage completes exceptionally with the supplied
 action's exception. Or, if this stage completed exceptionally
 and the supplied action throws an exception, then the returned
 stage completes exceptionally with this stage's exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the action to perform`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'whenCompleteAsync(java.util.function.BiConsumer)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage with the same result or exception as
 this stage, that executes the given action using this stage's
 default asynchronous execution facility when this stage completes.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `When this stage is complete, the given action is invoked with the
 result (or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if none) and the exception (or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `
 if none) of this stage as arguments.  The returned stage is completed
 when the action returns.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Unlike method `],
					[/* reference */ 'r', `#handleAsync(java.util.function.BiFunction)`, `handleAsync`],
					[/* text */ 't', `,
 this method is not designed to translate completion outcomes,
 so the supplied action should not throw an exception. However,
 if it does, the following rules apply: If this stage completed
 normally but the supplied action throws an exception, then the
 returned stage completes exceptionally with the supplied
 action's exception. Or, if this stage completed exceptionally
 and the supplied action throws an exception, then the returned
 stage completes exceptionally with this stage's exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the action to perform`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'whenCompleteAsync(java.util.function.BiConsumer,java.util.concurrent.Executor)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage with the same result or exception as
 this stage, that executes the given action using the supplied
 Executor when this stage completes.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `When this stage is complete, the given action is invoked with the
 result (or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if none) and the exception (or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `
 if none) of this stage as arguments.  The returned stage is completed
 when the action returns.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Unlike method `],
					[/* reference */ 'r', `#handleAsync(java.util.function.BiFunction,java.util.concurrent.Executor)`, `handleAsync`],
					[/* text */ 't', `,
 this method is not designed to translate completion outcomes,
 so the supplied action should not throw an exception. However,
 if it does, the following rules apply: If this stage completed
 normally but the supplied action throws an exception, then the
 returned stage completes exceptionally with the supplied
 action's exception. Or, if this stage completed exceptionally
 and the supplied action throws an exception, then the returned
 stage completes exceptionally with this stage's exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the action to perform`]
				]],
				[/* parameter */ 'executor', [/* parameter description */
					[/* text */ 't', `the executor to use for asynchronous execution`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'exceptionallyAsync(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 exceptionally, is executed with this stage's exception as the
 argument to the supplied function, using this stage's default
 asynchronous execution facility.  Otherwise, if this stage
 completes normally, then the returned stage also completes
 normally with the same value.`]
			],
			[/* parameters */
				[/* parameter */ 'fn', [/* parameter description */
					[/* text */ 't', `the function to use to compute the value of the
 returned CompletionStage if this CompletionStage completed
 exceptionally`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'exceptionallyAsync(java.util.function.Function,java.util.concurrent.Executor)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 exceptionally, is executed with this stage's exception as the
 argument to the supplied function, using the supplied Executor.
 Otherwise, if this stage completes normally, then the returned
 stage also completes normally with the same value.`]
			],
			[/* parameters */
				[/* parameter */ 'fn', [/* parameter description */
					[/* text */ 't', `the function to use to compute the value of the
 returned CompletionStage if this CompletionStage completed
 exceptionally`]
				]],
				[/* parameter */ 'executor', [/* parameter description */
					[/* text */ 't', `the executor to use for asynchronous execution`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'exceptionallyCompose(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 exceptionally, is composed using the results of the supplied
 function applied to this stage's exception.`]
			],
			[/* parameters */
				[/* parameter */ 'fn', [/* parameter description */
					[/* text */ 't', `the function to use to compute the returned
 CompletionStage if this CompletionStage completed exceptionally`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'exceptionallyComposeAsync(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 exceptionally, is composed using the results of the supplied
 function applied to this stage's exception, using this stage's
 default asynchronous execution facility.`]
			],
			[/* parameters */
				[/* parameter */ 'fn', [/* parameter description */
					[/* text */ 't', `the function to use to compute the returned
 CompletionStage if this CompletionStage completed exceptionally`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'exceptionallyComposeAsync(java.util.function.Function,java.util.concurrent.Executor)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 exceptionally, is composed using the results of the supplied
 function applied to this stage's exception, using the
 supplied Executor.`]
			],
			[/* parameters */
				[/* parameter */ 'fn', [/* parameter description */
					[/* text */ 't', `the function to use to compute the returned
 CompletionStage if this CompletionStage completed exceptionally`]
				]],
				[/* parameter */ 'executor', [/* parameter description */
					[/* text */ 't', `the executor to use for asynchronous execution`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]]
	],
]);
