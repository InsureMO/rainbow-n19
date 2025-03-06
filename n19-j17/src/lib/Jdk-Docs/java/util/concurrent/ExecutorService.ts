import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.concurrent.ExecutorService', [
	[/* class description */
		[/* text */ 't', `An `],
		[/* reference */ 'r', `java.util.concurrent.Executor`, `Executor`],
		[/* text */ 't', ` that provides methods to manage termination and
 methods that can produce a `],
		[/* reference */ 'r', `java.util.concurrent.Future`, `Future`],
		[/* text */ 't', ` for tracking progress of
 one or more asynchronous tasks.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `An `],
			[/* inline code block */ 'i', `ExecutorService`],
			[/* text */ 't', ` can be shut down, which will cause
 it to reject new tasks.  Two different methods are provided for
 shutting down an `],
			[/* inline code block */ 'i', `ExecutorService`],
			[/* text */ 't', `. The `],
			[/* reference */ 'r', `#shutdown()`, `shutdown()`],
			[/* text */ 't', `
 method will allow previously submitted tasks to execute before
 terminating, while the `],
			[/* reference */ 'r', `#shutdownNow()`, `shutdownNow()`],
			[/* text */ 't', ` method prevents waiting
 tasks from starting and attempts to stop currently executing tasks.
 Upon termination, an executor has no tasks actively executing, no
 tasks awaiting execution, and no new tasks can be submitted.  An
 unused `],
			[/* inline code block */ 'i', `ExecutorService`],
			[/* text */ 't', ` should be shut down to allow
 reclamation of its resources.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Method `],
			[/* inline code block */ 'i', `submit`],
			[/* text */ 't', ` extends base method `],
			[/* reference */ 'r', `java.util.concurrent.Executor#execute(java.lang.Runnable)`, `Executor.execute(Runnable)`],
			[/* text */ 't', ` by creating and returning a `],
			[/* reference */ 'r', `java.util.concurrent.Future`, `Future`],
			[/* text */ 't', `
 that can be used to cancel execution and/or wait for completion.
 Methods `],
			[/* inline code block */ 'i', `invokeAny`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `invokeAll`],
			[/* text */ 't', ` perform the most
 commonly useful forms of bulk execution, executing a collection of
 tasks and then waiting for at least one, or all, to
 complete. (Class `],
			[/* reference */ 'r', `java.util.concurrent.ExecutorCompletionService`, `ExecutorCompletionService`],
			[/* text */ 't', ` can be used to
 write customized variants of these methods.)

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* reference */ 'r', `java.util.concurrent.Executors`, `Executors`],
			[/* text */ 't', ` class provides factory methods for the
 executor services provided in this package.

 `]
		]],
		[/* block */ 'b', `Usage Examples`],
		[/* text */ 't', `

 Here is a sketch of a network service in which threads in a thread
 pool service incoming requests. It uses the preconfigured `],
		[/* reference */ 'r', `java.util.concurrent.Executors#newFixedThreadPool(int)`, `Executors.newFixedThreadPool(int)`],
		[/* text */ 't', ` factory method:

 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `class NetworkService implements Runnable {
   private final ServerSocket serverSocket;
   private final ExecutorService pool;

   public NetworkService(int port, int poolSize)
       throws IOException {
     serverSocket = new ServerSocket(port);
     pool = Executors.newFixedThreadPool(poolSize);
   }

   public void run() { // run the service
     try {
       for (;;) {
         pool.execute(new Handler(serverSocket.accept()));
       }
     } catch (IOException ex) {
       pool.shutdown();
     }
   }
 }

 class Handler implements Runnable {
   private final Socket socket;
   Handler(Socket socket) { this.socket = socket; }
   public void run() {
     // read and service request on socket
   }
 }`]
		]],
		[/* text */ 't', `

 The following method shuts down an `],
		[/* inline code block */ 'i', `ExecutorService`],
		[/* text */ 't', ` in two phases,
 first by calling `],
		[/* inline code block */ 'i', `shutdown`],
		[/* text */ 't', ` to reject incoming tasks, and then
 calling `],
		[/* inline code block */ 'i', `shutdownNow`],
		[/* text */ 't', `, if necessary, to cancel any lingering tasks:

 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `void shutdownAndAwaitTermination(ExecutorService pool) {
   pool.shutdown(); // Disable new tasks from being submitted
   try {
     // Wait a while for existing tasks to terminate
     if (!pool.awaitTermination(60, TimeUnit.SECONDS)) {
       pool.shutdownNow(); // Cancel currently executing tasks
       // Wait a while for tasks to respond to being cancelled
       if (!pool.awaitTermination(60, TimeUnit.SECONDS))
           System.err.println("Pool did not terminate");
     }
   } catch (InterruptedException ex) {
     // (Re-)Cancel if current thread also interrupted
     pool.shutdownNow();
     // Preserve interrupt status
     Thread.currentThread().interrupt();
   }
 }`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Memory consistency effects: Actions in a thread prior to the
 submission of a `],
			[/* inline code block */ 'i', `Runnable`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `Callable`],
			[/* text */ 't', ` task to an
 `],
			[/* inline code block */ 'i', `ExecutorService`],
			[/* text */ 't', `happen-before`],
			[/* text */ 't', `
 any actions taken by that task, which in turn `],
			[/* text */ 't', `happen-before`],
			[/* text */ 't', ` the
 result is retrieved via `],
			[/* inline code block */ 'i', `Future.get()`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'submit(java.lang.Runnable,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Submits a Runnable task for execution and returns a Future
 representing that task. The Future's `],
				[/* inline code block */ 'i', `get`],
				[/* text */ 't', ` method will
 return the given result upon successful completion.`]
			],
			[/* parameters */
				[/* parameter */ 'task', [/* parameter description */
					[/* text */ 't', `the task to submit`]
				]],
				[/* parameter */ 'result', [/* parameter description */
					[/* text */ 't', `the result to return`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.concurrent.RejectedExecutionException', [/* throw description */
					[/* text */ 't', `if the task cannot be
         scheduled for execution`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the task is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a Future representing pending completion of the task`]
			]
		]],
		[/* method */ 'submit(java.util.concurrent.Callable)', [
			[/* method description */
				[/* text */ 't', `Submits a value-returning task for execution and returns a
 Future representing the pending results of the task. The
 Future's `],
				[/* inline code block */ 'i', `get`],
				[/* text */ 't', ` method will return the task's result upon
 successful completion.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If you would like to immediately block waiting
 for a task, you can use constructions of the form
 `],
					[/* inline code block */ 'i', `result = exec.submit(aCallable).get();`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Note: The `],
					[/* reference */ 'r', `java.util.concurrent.Executors`, `Executors`],
					[/* text */ 't', ` class includes a set of methods
 that can convert some other common closure-like objects,
 for example, `],
					[/* reference */ 'r', `java.security.PrivilegedAction`, `PrivilegedAction`],
					[/* text */ 't', ` to
 `],
					[/* reference */ 'r', `java.util.concurrent.Callable`, `Callable`],
					[/* text */ 't', ` form so they can be submitted.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'task', [/* parameter description */
					[/* text */ 't', `the task to submit`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.concurrent.RejectedExecutionException', [/* throw description */
					[/* text */ 't', `if the task cannot be
         scheduled for execution`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the task is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a Future representing pending completion of the task`]
			]
		]],
		[/* method */ 'invokeAll(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Executes the given tasks, returning a list of Futures holding
 their status and results when all complete.
 `],
				[/* reference */ 'r', `java.util.concurrent.Future#isDone()`, `Future.isDone()`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` for each
 element of the returned list.
 Note that a `],
				[/* text */ 't', `completed`],
				[/* text */ 't', ` task could have
 terminated either normally or by throwing an exception.
 The results of this method are undefined if the given
 collection is modified while this operation is in progress.`]
			],
			[/* parameters */
				[/* parameter */ 'tasks', [/* parameter description */
					[/* text */ 't', `the collection of tasks`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `if interrupted while waiting, in
         which case unfinished tasks are cancelled`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if tasks or any of its elements are `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.util.concurrent.RejectedExecutionException', [/* throw description */
					[/* text */ 't', `if any task cannot be
         scheduled for execution`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a list of Futures representing the tasks, in the same
         sequential order as produced by the iterator for the
         given task list, each of which has completed`]
			]
		]],
		[/* method */ 'invokeAll(java.util.Collection,long,java.util.concurrent.TimeUnit)', [
			[/* method description */
				[/* text */ 't', `Executes the given tasks, returning a list of Futures holding
 their status and results
 when all complete or the timeout expires, whichever happens first.
 `],
				[/* reference */ 'r', `java.util.concurrent.Future#isDone()`, `Future.isDone()`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` for each
 element of the returned list.
 Upon return, tasks that have not completed are cancelled.
 Note that a `],
				[/* text */ 't', `completed`],
				[/* text */ 't', ` task could have
 terminated either normally or by throwing an exception.
 The results of this method are undefined if the given
 collection is modified while this operation is in progress.`]
			],
			[/* parameters */
				[/* parameter */ 'tasks', [/* parameter description */
					[/* text */ 't', `the collection of tasks`]
				]],
				[/* parameter */ 'timeout', [/* parameter description */
					[/* text */ 't', `the maximum time to wait`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the time unit of the timeout argument`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `if interrupted while waiting, in
         which case unfinished tasks are cancelled`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if tasks, any of its elements, or
         unit are `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.util.concurrent.RejectedExecutionException', [/* throw description */
					[/* text */ 't', `if any task cannot be scheduled
         for execution`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a list of Futures representing the tasks, in the same
         sequential order as produced by the iterator for the
         given task list. If the operation did not time out,
         each task will have completed. If it did time out, some
         of these tasks will not have completed.`]
			]
		]],
		[/* method */ 'invokeAny(java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Executes the given tasks, returning the result
 of one that has completed successfully (i.e., without throwing
 an exception), if any do. Upon normal or exceptional return,
 tasks that have not completed are cancelled.
 The results of this method are undefined if the given
 collection is modified while this operation is in progress.`]
			],
			[/* parameters */
				[/* parameter */ 'tasks', [/* parameter description */
					[/* text */ 't', `the collection of tasks`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `if interrupted while waiting`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if tasks or any element task
         subject to execution is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if tasks is empty`]
				]],
				[/* throw */ 'java.util.concurrent.ExecutionException', [/* throw description */
					[/* text */ 't', `if no task successfully completes`]
				]],
				[/* throw */ 'java.util.concurrent.RejectedExecutionException', [/* throw description */
					[/* text */ 't', `if tasks cannot be scheduled
         for execution`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the result returned by one of the tasks`]
			]
		]],
		[/* method */ 'invokeAny(java.util.Collection,long,java.util.concurrent.TimeUnit)', [
			[/* method description */
				[/* text */ 't', `Executes the given tasks, returning the result
 of one that has completed successfully (i.e., without throwing
 an exception), if any do before the given timeout elapses.
 Upon normal or exceptional return, tasks that have not
 completed are cancelled.
 The results of this method are undefined if the given
 collection is modified while this operation is in progress.`]
			],
			[/* parameters */
				[/* parameter */ 'tasks', [/* parameter description */
					[/* text */ 't', `the collection of tasks`]
				]],
				[/* parameter */ 'timeout', [/* parameter description */
					[/* text */ 't', `the maximum time to wait`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the time unit of the timeout argument`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `if interrupted while waiting`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if tasks, or unit, or any element
         task subject to execution is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.util.concurrent.TimeoutException', [/* throw description */
					[/* text */ 't', `if the given timeout elapses before
         any task successfully completes`]
				]],
				[/* throw */ 'java.util.concurrent.ExecutionException', [/* throw description */
					[/* text */ 't', `if no task successfully completes`]
				]],
				[/* throw */ 'java.util.concurrent.RejectedExecutionException', [/* throw description */
					[/* text */ 't', `if tasks cannot be scheduled
         for execution`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the result returned by one of the tasks`]
			]
		]],
		[/* method */ 'awaitTermination(long,java.util.concurrent.TimeUnit)', [
			[/* method description */
				[/* text */ 't', `Blocks until all tasks have completed execution after a shutdown
 request, or the timeout occurs, or the current thread is
 interrupted, whichever happens first.`]
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
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `if interrupted while waiting`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this executor terminated and
         `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if the timeout elapsed before termination`]
			]
		]],
		[/* method */ 'isShutdown()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this executor has been shut down.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this executor has been shut down`]
			]
		]],
		[/* method */ 'isTerminated()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if all tasks have completed following shut down.
 Note that `],
				[/* inline code block */ 'i', `isTerminated`],
				[/* text */ 't', ` is never `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` unless
 either `],
				[/* inline code block */ 'i', `shutdown`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `shutdownNow`],
				[/* text */ 't', ` was called first.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if all tasks have completed following shut down`]
			]
		]],
		[/* method */ 'submit(java.lang.Runnable)', [
			[/* method description */
				[/* text */ 't', `Submits a Runnable task for execution and returns a Future
 representing that task. The Future's `],
				[/* inline code block */ 'i', `get`],
				[/* text */ 't', ` method will
 return `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` upon `],
				[/* text */ 't', `successful`],
				[/* text */ 't', ` completion.`]
			],
			[/* parameters */
				[/* parameter */ 'task', [/* parameter description */
					[/* text */ 't', `the task to submit`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.concurrent.RejectedExecutionException', [/* throw description */
					[/* text */ 't', `if the task cannot be
         scheduled for execution`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the task is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a Future representing pending completion of the task`]
			]
		]],
		[/* method */ 'shutdownNow()', [
			[/* method description */
				[/* text */ 't', `Attempts to stop all actively executing tasks, halts the
 processing of waiting tasks, and returns a list of the tasks
 that were awaiting execution.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method does not wait for actively executing tasks to
 terminate.  Use `],
					[/* reference */ 'r', `#awaitTermination(long,java.util.concurrent.TimeUnit)`, `awaitTermination`],
					[/* text */ 't', ` to
 do that.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `There are no guarantees beyond best-effort attempts to stop
 processing actively executing tasks.  For example, typical
 implementations will cancel via `],
					[/* reference */ 'r', `java.lang.Thread#interrupt()`, `Thread.interrupt()`],
					[/* text */ 't', `, so any
 task that fails to respond to interrupts may never terminate.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and
         shutting down this ExecutorService may manipulate
         threads that the caller is not permitted to modify
         because it does not hold `],
					[/* reference */ 'r', `java.lang.RuntimePermission`, `RuntimePermission`],
					[/* inline code block */ 'i', `("modifyThread")`],
					[/* text */ 't', `,
         or the security manager's `],
					[/* inline code block */ 'i', `checkAccess`],
					[/* text */ 't', ` method
         denies access.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `list of tasks that never commenced execution`]
			]
		]],
		[/* method */ 'shutdown()', [
			[/* method description */
				[/* text */ 't', `Initiates an orderly shutdown in which previously submitted
 tasks are executed, but no new tasks will be accepted.
 Invocation has no additional effect if already shut down.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method does not wait for previously submitted tasks to
 complete execution.  Use `],
					[/* reference */ 'r', `#awaitTermination(long,java.util.concurrent.TimeUnit)`, `awaitTermination`],
					[/* text */ 't', `
 to do that.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and
         shutting down this ExecutorService may manipulate
         threads that the caller is not permitted to modify
         because it does not hold `],
					[/* reference */ 'r', `java.lang.RuntimePermission`, `RuntimePermission`],
					[/* inline code block */ 'i', `("modifyThread")`],
					[/* text */ 't', `,
         or the security manager's `],
					[/* inline code block */ 'i', `checkAccess`],
					[/* text */ 't', ` method
         denies access.`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
