import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.concurrent.Executor', [
	[/* class description */
		[/* text */ 't', `An object that executes submitted `],
		[/* reference */ 'r', `java.lang.Runnable`, `Runnable`],
		[/* text */ 't', ` tasks. This
 interface provides a way of decoupling task submission from the
 mechanics of how each task will be run, including details of thread
 use, scheduling, etc.  An `],
		[/* inline code block */ 'i', `Executor`],
		[/* text */ 't', ` is normally used
 instead of explicitly creating threads. For example, rather than
 invoking `],
		[/* inline code block */ 'i', `new Thread(new RunnableTask()).start()`],
		[/* text */ 't', ` for each
 of a set of tasks, you might use:

 `],
		[/* code block */ 'c', [
			[/* text */ 't', ` `],
			[/* inline code block */ 'i', `Executor executor = anExecutor();
 executor.execute(new RunnableTask1());
 executor.execute(new RunnableTask2());
 ...`]
		]],
		[/* text */ 't', `

 However, the `],
		[/* inline code block */ 'i', `Executor`],
		[/* text */ 't', ` interface does not strictly require
 that execution be asynchronous. In the simplest case, an executor
 can run the submitted task immediately in the caller's thread:

 `],
		[/* code block */ 'c', [
			[/* text */ 't', ` `],
			[/* inline code block */ 'i', `class DirectExecutor implements Executor {
   public void execute(Runnable r) {
     r.run();
   }
 }`]
		]],
		[/* text */ 't', `

 More typically, tasks are executed in some thread other than the
 caller's thread.  The executor below spawns a new thread for each
 task.

 `],
		[/* code block */ 'c', [
			[/* text */ 't', ` `],
			[/* inline code block */ 'i', `class ThreadPerTaskExecutor implements Executor {
   public void execute(Runnable r) {
     new Thread(r).start();
   }
 }`]
		]],
		[/* text */ 't', `

 Many `],
		[/* inline code block */ 'i', `Executor`],
		[/* text */ 't', ` implementations impose some sort of
 limitation on how and when tasks are scheduled.  The executor below
 serializes the submission of tasks to a second executor,
 illustrating a composite executor.

 `],
		[/* code block */ 'c', [
			[/* text */ 't', ` `],
			[/* inline code block */ 'i', `class SerialExecutor implements Executor {
   final Queue<Runnable> tasks = new ArrayDeque<>();
   final Executor executor;
   Runnable active;

   SerialExecutor(Executor executor) {
     this.executor = executor;
   }

   public synchronized void execute(Runnable r) {
     tasks.add(() -> {
       try {
         r.run();
       } finally {
         scheduleNext();
       }
     });
     if (active == null) {
       scheduleNext();
     }
   }

   protected synchronized void scheduleNext() {
     if ((active = tasks.poll()) != null) {
       executor.execute(active);
     }
   }
 }`]
		]],
		[/* text */ 't', `

 The `],
		[/* inline code block */ 'i', `Executor`],
		[/* text */ 't', ` implementations provided in this package
 implement `],
		[/* reference */ 'r', `java.util.concurrent.ExecutorService`, `ExecutorService`],
		[/* text */ 't', `, which is a more extensive
 interface.  The `],
		[/* reference */ 'r', `java.util.concurrent.ThreadPoolExecutor`, `ThreadPoolExecutor`],
		[/* text */ 't', ` class provides an
 extensible thread pool implementation. The `],
		[/* reference */ 'r', `java.util.concurrent.Executors`, `Executors`],
		[/* text */ 't', ` class
 provides convenient factory methods for these Executors.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Memory consistency effects: Actions in a thread prior to
 submitting a `],
			[/* inline code block */ 'i', `Runnable`],
			[/* text */ 't', ` object to an `],
			[/* inline code block */ 'i', `Executor`],
			[/* text */ 't', `
 `],
			[/* text */ 't', `happen-before`],
			[/* text */ 't', `
 its execution begins, perhaps in another thread.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'execute(java.lang.Runnable)', [
			[/* method description */
				[/* text */ 't', `Executes the given command at some time in the future.  The command
 may execute in a new thread, in a pooled thread, or in the calling
 thread, at the discretion of the `],
				[/* inline code block */ 'i', `Executor`],
				[/* text */ 't', ` implementation.`]
			],
			[/* parameters */
				[/* parameter */ 'command', [/* parameter description */
					[/* text */ 't', `the runnable task`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.concurrent.RejectedExecutionException', [/* throw description */
					[/* text */ 't', `if this task cannot be
 accepted for execution`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if command is null`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
