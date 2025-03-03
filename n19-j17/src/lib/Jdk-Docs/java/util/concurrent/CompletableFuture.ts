import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.concurrent.CompletableFuture', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* reference */ 'r', `java.util.concurrent.Future`],
		[/* text */ 't', ` that may be explicitly completed (setting its
 value and status), and may be used as a `],
		[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
		[/* text */ 't', `,
 supporting dependent functions and actions that trigger upon its
 completion.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `When two or more threads attempt to
 `],
			[/* reference */ 'r', `#complete(T)`, `complete`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#completeExceptionally(java.lang.Throwable)`, `completeExceptionally`],
			[/* text */ 't', `, or
 `],
			[/* reference */ 'r', `#cancel(boolean)`, `cancel`],
			[/* text */ 't', `
 a CompletableFuture, only one of them succeeds.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `In addition to these and related methods for directly
 manipulating status and results, CompletableFuture implements
 interface `],
			[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
			[/* text */ 't', ` with the following policies: `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `Actions supplied for dependent completions of
 `],
				[/* text */ 't', `non-async`],
				[/* text */ 't', ` methods may be performed by the thread that
 completes the current CompletableFuture, or by any other caller of
 a completion method.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `All `],
				[/* text */ 't', `async`],
				[/* text */ 't', ` methods without an explicit Executor
 argument are performed using the `],
				[/* reference */ 'r', `.ForkJoinPool#commonPool()`],
				[/* text */ 't', `
 (unless it does not support a parallelism level of at least two, in
 which case, a new Thread is created to run each task).  This may be
 overridden for non-static methods in subclasses by defining method
 `],
				[/* reference */ 'r', `#defaultExecutor()`, `defaultExecutor()`],
				[/* text */ 't', `. To simplify monitoring, debugging,
 and tracking, all generated asynchronous tasks are instances of the
 marker interface `],
				[/* reference */ 'r', `java.util.concurrent.CompletableFuture.AsynchronousCompletionTask`],
				[/* text */ 't', `.  Operations
 with time-delays can use adapter methods defined in this class, for
 example: `],
				[/* inline code block */ 'i', `supplyAsync(supplier, delayedExecutor(timeout, timeUnit))`],
				[/* text */ 't', `.  To support methods with delays and timeouts, this
 class maintains at most one daemon thread for triggering and
 cancelling actions, not for running them.

 `]
			]],
			[/* block */ 'b', `All CompletionStage methods are implemented independently of
 other public methods, so the behavior of one method is not impacted
 by overrides of others in subclasses.

 `],
			[/* block */ 'b', [
				[/* text */ 't', `All CompletionStage methods return CompletableFutures.  To
 restrict usages to only those methods defined in interface
 CompletionStage, use method `],
				[/* reference */ 'r', `#minimalCompletionStage()`, `minimalCompletionStage()`],
				[/* text */ 't', `. Or to
 ensure only that clients do not themselves modify a future, use
 method `],
				[/* reference */ 'r', `#copy()`, `copy()`],
				[/* text */ 't', `.
 `]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `CompletableFuture also implements `],
			[/* reference */ 'r', `java.util.concurrent.Future`],
			[/* text */ 't', ` with the following
 policies: `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `Since (unlike `],
				[/* reference */ 'r', `java.util.concurrent.FutureTask`],
				[/* text */ 't', `) this class has no direct
 control over the computation that causes it to be completed,
 cancellation is treated as just another form of exceptional
 completion.  Method `],
				[/* reference */ 'r', `#cancel(boolean)`, `cancel`],
				[/* text */ 't', ` has the same effect as
 `],
				[/* inline code block */ 'i', `completeExceptionally(new CancellationException())`],
				[/* text */ 't', `. Method
 `],
				[/* reference */ 'r', `#isCompletedExceptionally()`, `isCompletedExceptionally()`],
				[/* text */ 't', ` can be used to determine if a
 CompletableFuture completed in any exceptional fashion.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `In case of exceptional completion with a CompletionException,
 methods `],
				[/* reference */ 'r', `#get()`, `get()`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `#get(long,java.util.concurrent.TimeUnit)`, `get(long, TimeUnit)`],
				[/* text */ 't', ` throw an
 `],
				[/* reference */ 'r', `java.util.concurrent.ExecutionException`],
				[/* text */ 't', ` with the same cause as held in the
 corresponding CompletionException.  To simplify usage in most
 contexts, this class also defines methods `],
				[/* reference */ 'r', `#join()`, `join()`],
				[/* text */ 't', ` and
 `],
				[/* reference */ 'r', `#getNow(T)`, `getNow(T)`],
				[/* text */ 't', ` that instead throw the CompletionException directly
 in these cases.
 `]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Arguments used to pass a completion result (that is, for
 parameters of type `],
			[/* inline code block */ 'i', `T`],
			[/* text */ 't', `) for methods accepting them may be
 null, but passing a null value for any other parameter will result
 in a `],
			[/* reference */ 'r', `java.lang.NullPointerException`],
			[/* text */ 't', ` being thrown.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Subclasses of this class should normally override the "virtual
 constructor" method `],
			[/* reference */ 'r', `#newIncompleteFuture()`, `newIncompleteFuture()`],
			[/* text */ 't', `, which establishes
 the concrete type returned by CompletionStage methods. For example,
 here is a class that substitutes a different default Executor and
 disables the `],
			[/* inline code block */ 'i', `obtrude`],
			[/* text */ 't', ` methods:

 `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `class MyCompletableFuture<T> extends CompletableFuture<T> {
   static final Executor myExecutor = ...;
   public MyCompletableFuture() { }
   public <U> CompletableFuture<U> newIncompleteFuture() {
     return new MyCompletableFuture<U>(); }
   public Executor defaultExecutor() {
     return myExecutor; }
   public void obtrudeValue(T value) {
     throw new UnsupportedOperationException(); }
   public void obtrudeException(Throwable ex) {
     throw new UnsupportedOperationException(); }
 }`]
		]],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Creates a new incomplete CompletableFuture.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'get()', [
			[/* method description */
				[/* text */ 't', `Waits if necessary for this future to complete, and then
 returns its result.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.concurrent.CancellationException', [/* throw description */
					[/* text */ 't', `if this future was cancelled`]
				]],
				[/* throw */ 'java.util.concurrent.ExecutionException', [/* throw description */
					[/* text */ 't', `if this future completed exceptionally`]
				]],
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `if the current thread was interrupted
 while waiting`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the result value`]
			]
		]],
		[/* method */ 'get(long,java.util.concurrent.TimeUnit)', [
			[/* method description */
				[/* text */ 't', `Waits if necessary for at most the given time for this future
 to complete, and then returns its result, if available.`]
			],
			[/* parameters */
				[/* parameter */ 'timeout', [/* parameter description */
					[/* text */ 't', `the maximum time to wait`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the time unit of the timeout argument`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.concurrent.CancellationException', [/* throw description */
					[/* text */ 't', `if this future was cancelled`]
				]],
				[/* throw */ 'java.util.concurrent.ExecutionException', [/* throw description */
					[/* text */ 't', `if this future completed exceptionally`]
				]],
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `if the current thread was interrupted
 while waiting`]
				]],
				[/* throw */ 'java.util.concurrent.TimeoutException', [/* throw description */
					[/* text */ 't', `if the wait timed out`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the result value`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string identifying this CompletableFuture, as well as
 its completion state.  The state, in brackets, contains the
 String `],
				[/* inline code block */ 'i', `"Completed Normally"`],
				[/* text */ 't', ` or the String `],
				[/* inline code block */ 'i', `"Completed Exceptionally"`],
				[/* text */ 't', `, or the String `],
				[/* inline code block */ 'i', `"Not completed"`],
				[/* text */ 't', ` followed by the number of CompletableFutures
 dependent upon its completion, if any.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string identifying this CompletableFuture, as well as its state`]
			]
		]],
		[/* method */ 'join()', [
			[/* method description */
				[/* text */ 't', `Returns the result value when complete, or throws an
 (unchecked) exception if completed exceptionally. To better
 conform with the use of common functional forms, if a
 computation involved in the completion of this
 CompletableFuture threw an exception, this method throws an
 (unchecked) `],
				[/* reference */ 'r', `java.util.concurrent.CompletionException`],
				[/* text */ 't', ` with the underlying
 exception as its cause.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.concurrent.CancellationException', [/* throw description */
					[/* text */ 't', `if the computation was cancelled`]
				]],
				[/* throw */ 'java.util.concurrent.CompletionException', [/* throw description */
					[/* text */ 't', `if this future completed
 exceptionally or a completion computation threw an exception`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the result value`]
			]
		]],
		[/* method */ 'copy()', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletableFuture that is completed normally with
 the same value as this CompletableFuture when it completes
 normally. If this CompletableFuture completes exceptionally,
 then the returned CompletableFuture completes exceptionally
 with a CompletionException with this exception as cause. The
 behavior is equivalent to `],
				[/* inline code block */ 'i', `thenApply(x -> x)`],
				[/* text */ 't', `. This
 method may be useful as a form of "defensive copying", to
 prevent clients from completing, while still being able to
 arrange dependent actions.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletableFuture`]
			]
		]],
		[/* method */ 'handle(java.util.function.BiFunction)', [
			[/* method description */
				[/* block */ 'b', [
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
		[/* method */ 'complete(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `If not already completed, sets the value returned by `],
				[/* reference */ 'r', `#get()`, `get()`],
				[/* text */ 't', ` and related methods to the given value.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the result value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this invocation caused this CompletableFuture
 to transition to a completed state, else `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'allOf(java.util.concurrent.CompletableFuture...)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletableFuture that is completed when all of
 the given CompletableFutures complete.  If any of the given
 CompletableFutures complete exceptionally, then the returned
 CompletableFuture also does so, with a CompletionException
 holding this exception as its cause.  Otherwise, the results,
 if any, of the given CompletableFutures are not reflected in
 the returned CompletableFuture, but may be obtained by
 inspecting them individually. If no CompletableFutures are
 provided, returns a CompletableFuture completed with the value
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Among the applications of this method is to await completion
 of a set of independent CompletableFutures before continuing a
 program, as in: `],
					[/* inline code block */ 'i', `CompletableFuture.allOf(c1, c2, c3).join();`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'cfs', [/* parameter description */
					[/* text */ 't', `the CompletableFutures`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the array or any of its elements are
 `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new CompletableFuture that is completed when all of the
 given CompletableFutures complete`]
			]
		]],
		[/* method */ 'cancel(boolean)', [
			[/* method description */
				[/* text */ 't', `If not already completed, completes this CompletableFuture with
 a `],
				[/* reference */ 'r', `java.util.concurrent.CancellationException`],
				[/* text */ 't', `. Dependent CompletableFutures
 that have not already completed will also complete
 exceptionally, with a `],
				[/* reference */ 'r', `java.util.concurrent.CompletionException`],
				[/* text */ 't', ` caused by
 this `],
				[/* inline code block */ 'i', `CancellationException`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'mayInterruptIfRunning', [/* parameter description */
					[/* text */ 't', `this value has no effect in this
 implementation because interrupts are not used to control
 processing.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this task is now cancelled`]
			]
		]],
		[/* method */ 'isCancelled()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this CompletableFuture was cancelled
 before it completed normally.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this CompletableFuture was cancelled
 before it completed normally`]
			]
		]],
		[/* method */ 'isDone()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if completed in any fashion: normally,
 exceptionally, or via cancellation.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if completed`]
			]
		]],
		[/* method */ 'completeExceptionally(java.lang.Throwable)', [
			[/* method description */
				[/* text */ 't', `If not already completed, causes invocations of `],
				[/* reference */ 'r', `#get()`, `get()`],
				[/* text */ 't', `
 and related methods to throw the given exception.`]
			],
			[/* parameters */
				[/* parameter */ 'ex', [/* parameter description */
					[/* text */ 't', `the exception`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this invocation caused this CompletableFuture
 to transition to a completed state, else `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'anyOf(java.util.concurrent.CompletableFuture...)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletableFuture that is completed when any of
 the given CompletableFutures complete, with the same result.
 Otherwise, if it completed exceptionally, the returned
 CompletableFuture also does so, with a CompletionException
 holding this exception as its cause.  If no CompletableFutures
 are provided, returns an incomplete CompletableFuture.`]
			],
			[/* parameters */
				[/* parameter */ 'cfs', [/* parameter description */
					[/* text */ 't', `the CompletableFutures`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the array or any of its elements are
 `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new CompletableFuture that is completed with the
 result or exception of any of the given CompletableFutures when
 one completes`]
			]
		]],
		[/* method */ 'isCompletedExceptionally()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this CompletableFuture completed
 exceptionally, in any way. Possible causes include
 cancellation, explicit invocation of `],
				[/* inline code block */ 'i', `completeExceptionally`],
				[/* text */ 't', `, and abrupt termination of a
 CompletionStage action.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this CompletableFuture completed
 exceptionally`]
			]
		]],
		[/* method */ 'obtrudeValue(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Forcibly sets or resets the value subsequently returned by
 method `],
				[/* reference */ 'r', `#get()`, `get()`],
				[/* text */ 't', ` and related methods, whether or not
 already completed. This method is designed for use only in
 error recovery actions, and even in such situations may result
 in ongoing dependent completions using established versus
 overwritten outcomes.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the completion value`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'obtrudeException(java.lang.Throwable)', [
			[/* method description */
				[/* text */ 't', `Forcibly causes subsequent invocations of method `],
				[/* reference */ 'r', `#get()`, `get()`],
				[/* text */ 't', `
 and related methods to throw the given exception, whether or
 not already completed. This method is designed for use only in
 error recovery actions, and even in such situations may result
 in ongoing dependent completions using established versus
 overwritten outcomes.`]
			],
			[/* parameters */
				[/* parameter */ 'ex', [/* parameter description */
					[/* text */ 't', `the exception`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the exception is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'getNumberOfDependents()', [
			[/* method description */
				[/* text */ 't', `Returns the estimated number of CompletableFutures whose
 completions are awaiting completion of this CompletableFuture.
 This method is designed for use in monitoring system state, not
 for synchronization control.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of dependent CompletableFutures`]
			]
		]],
		[/* method */ 'minimalCompletionStage()', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that is completed normally with
 the same value as this CompletableFuture when it completes
 normally, and cannot be independently completed or otherwise
 used in ways not defined by the methods of interface `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', `.  If this CompletableFuture completes
 exceptionally, then the returned CompletionStage completes
 exceptionally with a CompletionException with this exception as
 cause.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Unless overridden by a subclass, a new non-minimal
 CompletableFuture with all methods available can be obtained from
 a minimal CompletionStage via `],
					[/* reference */ 'r', `#toCompletableFuture()`, `toCompletableFuture()`],
					[/* text */ 't', `.
 For example, completion of a minimal stage can be awaited by

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `minimalStage.toCompletableFuture().join();`]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletionStage`]
			]
		]],
		[/* method */ 'orTimeout(long,java.util.concurrent.TimeUnit)', [
			[/* method description */
				[/* text */ 't', `Exceptionally completes this CompletableFuture with
 a `],
				[/* reference */ 'r', `java.util.concurrent.TimeoutException`],
				[/* text */ 't', ` if not otherwise completed
 before the given timeout.`]
			],
			[/* parameters */
				[/* parameter */ 'timeout', [/* parameter description */
					[/* text */ 't', `how long to wait before completing exceptionally
        with a TimeoutException, in units of `],
					[/* inline code block */ 'i', `unit`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `TimeUnit`],
					[/* text */ 't', ` determining how to interpret the
        `],
					[/* inline code block */ 'i', `timeout`],
					[/* text */ 't', ` parameter`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this CompletableFuture`]
			]
		]],
		[/* method */ 'completeOnTimeout(java.lang.Object,long,java.util.concurrent.TimeUnit)', [
			[/* method description */
				[/* text */ 't', `Completes this CompletableFuture with the given value if not
 otherwise completed before the given timeout.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to use upon timeout`]
				]],
				[/* parameter */ 'timeout', [/* parameter description */
					[/* text */ 't', `how long to wait before completing normally
        with the given value, in units of `],
					[/* inline code block */ 'i', `unit`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `TimeUnit`],
					[/* text */ 't', ` determining how to interpret the
        `],
					[/* inline code block */ 'i', `timeout`],
					[/* text */ 't', ` parameter`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this CompletableFuture`]
			]
		]],
		[/* method */ 'delayedExecutor(long,java.util.concurrent.TimeUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a new Executor that submits a task to the default
 executor after the given delay (or no delay if non-positive).
 Each delay commences upon invocation of the returned executor's
 `],
				[/* inline code block */ 'i', `execute`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'delay', [/* parameter description */
					[/* text */ 't', `how long to delay, in units of `],
					[/* inline code block */ 'i', `unit`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `TimeUnit`],
					[/* text */ 't', ` determining how to interpret the
        `],
					[/* inline code block */ 'i', `delay`],
					[/* text */ 't', ` parameter`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new delayed executor`]
			]
		]],
		[/* method */ 'delayedExecutor(long,java.util.concurrent.TimeUnit,java.util.concurrent.Executor)', [
			[/* method description */
				[/* text */ 't', `Returns a new Executor that submits a task to the given base
 executor after the given delay (or no delay if non-positive).
 Each delay commences upon invocation of the returned executor's
 `],
				[/* inline code block */ 'i', `execute`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'delay', [/* parameter description */
					[/* text */ 't', `how long to delay, in units of `],
					[/* inline code block */ 'i', `unit`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `TimeUnit`],
					[/* text */ 't', ` determining how to interpret the
        `],
					[/* inline code block */ 'i', `delay`],
					[/* text */ 't', ` parameter`]
				]],
				[/* parameter */ 'executor', [/* parameter description */
					[/* text */ 't', `the base executor`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new delayed executor`]
			]
		]],
		[/* method */ 'completedStage(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that is already completed with
 the given value and supports only those methods in
 interface `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the completed CompletionStage`]
			]
		]],
		[/* method */ 'failedFuture(java.lang.Throwable)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletableFuture that is already completed
 exceptionally with the given exception.`]
			],
			[/* parameters */
				[/* parameter */ 'ex', [/* parameter description */
					[/* text */ 't', `the exception`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the exceptionally completed CompletableFuture`]
			]
		]],
		[/* method */ 'failedStage(java.lang.Throwable)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletionStage that is already completed
 exceptionally with the given exception and supports only those
 methods in interface `],
				[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'ex', [/* parameter description */
					[/* text */ 't', `the exception`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the exceptionally completed CompletionStage`]
			]
		]],
		[/* method */ 'supplyAsync(java.util.function.Supplier,java.util.concurrent.Executor)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletableFuture that is asynchronously completed
 by a task running in the given executor with the value obtained
 by calling the given Supplier.`]
			],
			[/* parameters */
				[/* parameter */ 'supplier', [/* parameter description */
					[/* text */ 't', `a function returning the value to be used
 to complete the returned CompletableFuture`]
				]],
				[/* parameter */ 'executor', [/* parameter description */
					[/* text */ 't', `the executor to use for asynchronous execution`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletableFuture`]
			]
		]],
		[/* method */ 'supplyAsync(java.util.function.Supplier)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletableFuture that is asynchronously completed
 by a task running in the `],
				[/* reference */ 'r', `.ForkJoinPool#commonPool()`],
				[/* text */ 't', ` with
 the value obtained by calling the given Supplier.`]
			],
			[/* parameters */
				[/* parameter */ 'supplier', [/* parameter description */
					[/* text */ 't', `a function returning the value to be used
 to complete the returned CompletableFuture`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletableFuture`]
			]
		]],
		[/* method */ 'newIncompleteFuture()', [
			[/* method description */
				[/* text */ 't', `Returns a new incomplete CompletableFuture of the type to be
 returned by a CompletionStage method. Subclasses should
 normally override this method to return an instance of the same
 class as this CompletableFuture. The default implementation
 returns an instance of class CompletableFuture.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a new CompletableFuture`]
			]
		]],
		[/* method */ 'toCompletableFuture()', [
			[/* method description */
				[/* text */ 't', `Returns this CompletableFuture.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this CompletableFuture`]
			]
		]],
		[/* method */ 'defaultExecutor()', [
			[/* method description */
				[/* text */ 't', `Returns the default Executor used for async methods that do not
 specify an Executor. This class uses the `],
				[/* reference */ 'r', `.ForkJoinPool#commonPool()`],
				[/* text */ 't', ` if it supports more than one
 parallel thread, or else an Executor using one thread per async
 task.  This method may be overridden in subclasses to return
 an Executor that provides at least one independent thread.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the executor`]
			]
		]],
		[/* method */ 'completeAsync(java.util.function.Supplier)', [
			[/* method description */
				[/* text */ 't', `Completes this CompletableFuture with the result of the given
 Supplier function invoked from an asynchronous task using the
 default executor.`]
			],
			[/* parameters */
				[/* parameter */ 'supplier', [/* parameter description */
					[/* text */ 't', `a function returning the value to be used
 to complete this CompletableFuture`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this CompletableFuture`]
			]
		]],
		[/* method */ 'completeAsync(java.util.function.Supplier,java.util.concurrent.Executor)', [
			[/* method description */
				[/* text */ 't', `Completes this CompletableFuture with the result of
 the given Supplier function invoked from an asynchronous
 task using the given executor.`]
			],
			[/* parameters */
				[/* parameter */ 'supplier', [/* parameter description */
					[/* text */ 't', `a function returning the value to be used
 to complete this CompletableFuture`]
				]],
				[/* parameter */ 'executor', [/* parameter description */
					[/* text */ 't', `the executor to use for asynchronous execution`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this CompletableFuture`]
			]
		]],
		[/* method */ 'whenComplete(java.util.function.BiConsumer)', [
			[/* method description */
				[/* block */ 'b', [
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
						[/* reference */ 'r', `.CompletionStage#handle(java.util.function.BiFunction)`],
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
		[/* method */ 'exceptionallyComposeAsync(java.util.function.Function)', UDF],
		[/* method */ 'exceptionallyComposeAsync(java.util.function.Function,java.util.concurrent.Executor)', UDF],
		[/* method */ 'exceptionallyCompose(java.util.function.Function)', UDF],
		[/* method */ 'exceptionallyAsync(java.util.function.Function,java.util.concurrent.Executor)', UDF],
		[/* method */ 'exceptionallyAsync(java.util.function.Function)', UDF],
		[/* method */ 'exceptionally(java.util.function.Function)', [
			[/* method description */
				[/* block */ 'b', `Returns a new CompletionStage that, when this stage completes
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
		[/* method */ 'whenCompleteAsync(java.util.function.BiConsumer)', [
			[/* method description */
				[/* block */ 'b', [
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
						[/* reference */ 'r', `.CompletionStage#handleAsync(java.util.function.BiFunction)`],
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
				[/* block */ 'b', [
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
						[/* reference */ 'r', `.CompletionStage#handleAsync(java.util.function.BiFunction,java.util.concurrent.Executor)`],
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
		[/* method */ 'handleAsync(java.util.function.BiFunction)', [
			[/* method description */
				[/* block */ 'b', [
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
				[/* block */ 'b', [
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
		[/* method */ 'thenComposeAsync(java.util.function.Function)', [
			[/* method description */
				[/* block */ 'b', [
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
				[/* block */ 'b', [
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
		[/* method */ 'thenCompose(java.util.function.Function)', [
			[/* method description */
				[/* block */ 'b', [
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
		[/* method */ 'runAfterEitherAsync(java.util.concurrent.CompletionStage,java.lang.Runnable,java.util.concurrent.Executor)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when either this or the
 other given stage complete normally, executes the given action
 using the supplied executor.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
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
		[/* method */ 'runAfterEitherAsync(java.util.concurrent.CompletionStage,java.lang.Runnable)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when either this or the
 other given stage complete normally, executes the given action
 using this stage's default asynchronous execution facility.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
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
		[/* method */ 'runAfterEither(java.util.concurrent.CompletionStage,java.lang.Runnable)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when either this or the
 other given stage complete normally, executes the given action.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
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
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when either this or the
 other given stage complete normally, is executed using this
 stage's default asynchronous execution facility, with the
 corresponding result as argument to the supplied action.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
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
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when either this or the
 other given stage complete normally, is executed using the
 supplied executor, with the corresponding result as argument to
 the supplied action.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
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
		[/* method */ 'acceptEither(java.util.concurrent.CompletionStage,java.util.function.Consumer)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when either this or the
 other given stage complete normally, is executed with the
 corresponding result as argument to the supplied action.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
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
		[/* method */ 'applyToEitherAsync(java.util.concurrent.CompletionStage,java.util.function.Function,java.util.concurrent.Executor)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when either this or the
 other given stage complete normally, is executed using the
 supplied executor, with the corresponding result as argument to
 the supplied function.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
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
		[/* method */ 'applyToEitherAsync(java.util.concurrent.CompletionStage,java.util.function.Function)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when either this or the
 other given stage complete normally, is executed using this
 stage's default asynchronous execution facility, with the
 corresponding result as argument to the supplied function.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
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
		[/* method */ 'applyToEither(java.util.concurrent.CompletionStage,java.util.function.Function)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when either this or the
 other given stage complete normally, is executed with the
 corresponding result as argument to the supplied function.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
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
		[/* method */ 'runAfterBothAsync(java.util.concurrent.CompletionStage,java.lang.Runnable,java.util.concurrent.Executor)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when this and the other
 given stage both complete normally, executes the given action
 using the supplied executor.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
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
		[/* method */ 'runAfterBothAsync(java.util.concurrent.CompletionStage,java.lang.Runnable)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when this and the other
 given stage both complete normally, executes the given action
 using this stage's default asynchronous execution facility.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
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
		[/* method */ 'runAfterBoth(java.util.concurrent.CompletionStage,java.lang.Runnable)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when this and the other
 given stage both complete normally, executes the given action.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
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
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when this and the other
 given stage both complete normally, is executed using this
 stage's default asynchronous execution facility, with the two
 results as arguments to the supplied action.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
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
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when this and the other
 given stage both complete normally, is executed using the
 supplied executor, with the two results as arguments to the
 supplied action.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
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
		[/* method */ 'thenAcceptBoth(java.util.concurrent.CompletionStage,java.util.function.BiConsumer)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when this and the other
 given stage both complete normally, is executed with the two
 results as arguments to the supplied action.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
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
		[/* method */ 'thenCombineAsync(java.util.concurrent.CompletionStage,java.util.function.BiFunction,java.util.concurrent.Executor)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when this and the other
 given stage both complete normally, is executed using the
 supplied executor, with the two results as arguments to the
 supplied function.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
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
		[/* method */ 'thenCombineAsync(java.util.concurrent.CompletionStage,java.util.function.BiFunction)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when this and the other
 given stage both complete normally, is executed using this
 stage's default asynchronous execution facility, with the two
 results as arguments to the supplied function.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
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
		[/* method */ 'thenCombine(java.util.concurrent.CompletionStage,java.util.function.BiFunction)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when this and the other
 given stage both complete normally, is executed with the two
 results as arguments to the supplied function.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
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
		[/* method */ 'thenRunAsync(java.lang.Runnable)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 normally, executes the given action using this stage's default
 asynchronous execution facility.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
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
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 normally, executes the given action using the supplied Executor.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
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
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 normally, executes the given action.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
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
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 normally, is executed using this stage's default asynchronous
 execution facility, with this stage's result as the argument to
 the supplied action.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
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
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 normally, is executed using the supplied Executor, with this
 stage's result as the argument to the supplied action.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
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
		[/* method */ 'thenAccept(java.util.function.Consumer)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 normally, is executed with this stage's result as the argument
 to the supplied action.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
				]]
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
		[/* method */ 'thenApplyAsync(java.util.function.Function)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 normally, is executed using this stage's default asynchronous
 execution facility, with this stage's result as the argument to
 the supplied function.

 See the `],
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
		[/* method */ 'thenApplyAsync(java.util.function.Function,java.util.concurrent.Executor)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a new CompletionStage that, when this stage completes
 normally, is executed using the supplied Executor, with this
 stage's result as the argument to the supplied function.

 See the `],
					[/* reference */ 'r', `java.util.concurrent.CompletionStage`],
					[/* text */ 't', ` documentation for rules
 covering exceptional completion.`]
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
				[/* block */ 'b', [
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
		[/* method */ 'runAsync(java.lang.Runnable,java.util.concurrent.Executor)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletableFuture that is asynchronously completed
 by a task running in the given executor after it runs the given
 action.`]
			],
			[/* parameters */
				[/* parameter */ 'runnable', [/* parameter description */
					[/* text */ 't', `the action to run before completing the
 returned CompletableFuture`]
				]],
				[/* parameter */ 'executor', [/* parameter description */
					[/* text */ 't', `the executor to use for asynchronous execution`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletableFuture`]
			]
		]],
		[/* method */ 'runAsync(java.lang.Runnable)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletableFuture that is asynchronously completed
 by a task running in the `],
				[/* reference */ 'r', `.ForkJoinPool#commonPool()`],
				[/* text */ 't', ` after
 it runs the given action.`]
			],
			[/* parameters */
				[/* parameter */ 'runnable', [/* parameter description */
					[/* text */ 't', `the action to run before completing the
 returned CompletableFuture`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the new CompletableFuture`]
			]
		]],
		[/* method */ 'completedFuture(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns a new CompletableFuture that is already completed with
 the given value.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the completed CompletableFuture`]
			]
		]],
		[/* method */ 'getNow(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the result value (or throws any encountered exception)
 if completed, else returns the given valueIfAbsent.`]
			],
			[/* parameters */
				[/* parameter */ 'valueIfAbsent', [/* parameter description */
					[/* text */ 't', `the value to return if not completed`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.concurrent.CancellationException', [/* throw description */
					[/* text */ 't', `if the computation was cancelled`]
				]],
				[/* throw */ 'java.util.concurrent.CompletionException', [/* throw description */
					[/* text */ 't', `if this future completed
 exceptionally or a completion computation threw an exception`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the result value, if completed, else the given valueIfAbsent`]
			]
		]]
	],
]);
