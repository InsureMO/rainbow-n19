import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.concurrent.Future', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `Future`],
		[/* text */ 't', ` represents the result of an asynchronous
 computation.  Methods are provided to check if the computation is
 complete, to wait for its completion, and to retrieve the result of
 the computation.  The result can only be retrieved using method
 `],
		[/* inline code block */ 'i', `get`],
		[/* text */ 't', ` when the computation has completed, blocking if
 necessary until it is ready.  Cancellation is performed by the
 `],
		[/* inline code block */ 'i', `cancel`],
		[/* text */ 't', ` method.  Additional methods are provided to
 determine if the task completed normally or was cancelled. Once a
 computation has completed, the computation cannot be cancelled.
 If you would like to use a `],
		[/* inline code block */ 'i', `Future`],
		[/* text */ 't', ` for the sake
 of cancellability but not provide a usable result, you can
 declare types of the form `],
		[/* inline code block */ 'i', `Future<?>`],
		[/* text */ 't', ` and
 return `],
		[/* inline code block */ 'i', `null`],
		[/* text */ 't', ` as a result of the underlying task.

 `],
		[/* block */ 'b', `Sample Usage`],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `interface ArchiveSearcher { String search(String target); }
 class App {
   ExecutorService executor = ...;
   ArchiveSearcher searcher = ...;
   void showSearch(String target) throws InterruptedException {
     Callable<String> task = () -> searcher.search(target);
     Future<String> future = executor.submit(task);
     displayOtherThings(); // do other things while searching
     try {
       displayText(future.get()); // use future
     } catch (ExecutionException ex) { cleanup(); return; }
   }
 }`]
		]],
		[/* text */ 't', `

 The `],
		[/* reference */ 'r', `java.util.concurrent.FutureTask`, `FutureTask`],
		[/* text */ 't', ` class is an implementation of `],
		[/* inline code block */ 'i', `Future`],
		[/* text */ 't', ` that
 implements `],
		[/* inline code block */ 'i', `Runnable`],
		[/* text */ 't', `, and so may be executed by an `],
		[/* inline code block */ 'i', `Executor`],
		[/* text */ 't', `.
 For example, the above construction with `],
		[/* inline code block */ 'i', `submit`],
		[/* text */ 't', ` could be replaced by:
 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `FutureTask<String> future = new FutureTask<>(task);
 executor.execute(future);`]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Memory consistency effects: Actions taken by the asynchronous computation
 `],
			[/* text */ 't', `happen-before`],
			[/* text */ 't', `
 actions following the corresponding `],
			[/* inline code block */ 'i', `Future.get()`],
			[/* text */ 't', ` in another thread.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'cancel(boolean)', [
			[/* method description */
				[/* text */ 't', `Attempts to cancel execution of this task.  This method has no
 effect if the task is already completed or cancelled, or could
 not be cancelled for some other reason.  Otherwise, if this
 task has not started when `],
				[/* inline code block */ 'i', `cancel`],
				[/* text */ 't', ` is called, this task
 should never run.  If the task has already started, then the
 `],
				[/* inline code block */ 'i', `mayInterruptIfRunning`],
				[/* text */ 't', ` parameter determines whether the
 thread executing this task (when known by the implementation)
 is interrupted in an attempt to stop the task.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The return value from this method does not necessarily
 indicate whether the task is now cancelled; use `],
					[/* reference */ 'r', `#isCancelled()`, `isCancelled()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mayInterruptIfRunning', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if the thread
 executing this task should be interrupted (if the thread is
 known to the implementation); otherwise, in-progress tasks are
 allowed to complete`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if the task could not be cancelled,
 typically because it has already completed; `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `
 otherwise. If two or more threads cause a task to be cancelled,
 then at least one of them returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `. Implementations
 may provide stronger guarantees.`]
			]
		]],
		[/* method */ 'isCancelled()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this task was cancelled before it completed
 normally.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this task was cancelled before it completed`]
			]
		]],
		[/* method */ 'isDone()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this task completed.

 Completion may be due to normal termination, an exception, or
 cancellation -- in all of these cases, this method will return
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this task completed`]
			]
		]],
		[/* method */ 'get()', [
			[/* method description */
				[/* text */ 't', `Waits if necessary for the computation to complete, and then
 retrieves its result.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.concurrent.CancellationException', [/* throw description */
					[/* text */ 't', `if the computation was cancelled`]
				]],
				[/* throw */ 'java.util.concurrent.ExecutionException', [/* throw description */
					[/* text */ 't', `if the computation threw an
 exception`]
				]],
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `if the current thread was interrupted
 while waiting`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the computed result`]
			]
		]],
		[/* method */ 'get(long,java.util.concurrent.TimeUnit)', [
			[/* method description */
				[/* text */ 't', `Waits if necessary for at most the given time for the computation
 to complete, and then retrieves its result, if available.`]
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
					[/* text */ 't', `if the computation was cancelled`]
				]],
				[/* throw */ 'java.util.concurrent.ExecutionException', [/* throw description */
					[/* text */ 't', `if the computation threw an
 exception`]
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
				[/* text */ 't', `the computed result`]
			]
		]]
	],
]);
