import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Timer', [
	[/* class description */
		[/* text */ 't', `A facility for threads to schedule tasks for future execution in a
 background thread.  Tasks may be scheduled for one-time execution, or for
 repeated execution at regular intervals.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Corresponding to each `],
			[/* inline code block */ 'i', `Timer`],
			[/* text */ 't', ` object is a single background
 thread that is used to execute all of the timer's tasks, sequentially.
 Timer tasks should complete quickly.  If a timer task takes excessive time
 to complete, it "hogs" the timer's task execution thread.  This can, in
 turn, delay the execution of subsequent tasks, which may "bunch up" and
 execute in rapid succession when (and if) the offending task finally
 completes.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `After the last live reference to a `],
			[/* inline code block */ 'i', `Timer`],
			[/* text */ 't', ` object goes away
 `],
			[/* text */ 't', `and`],
			[/* text */ 't', ` all outstanding tasks have completed execution, the timer's task
 execution thread terminates gracefully (and becomes subject to garbage
 collection).  However, this can take arbitrarily long to occur.  By
 default, the task execution thread does not run as a `],
			[/* text */ 't', `daemon thread`],
			[/* text */ 't', `,
 so it is capable of keeping an application from terminating.  If a caller
 wants to terminate a timer's task execution thread rapidly, the caller
 should invoke the timer's `],
			[/* inline code block */ 'i', `cancel`],
			[/* text */ 't', ` method.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `If the timer's task execution thread terminates unexpectedly, for
 example, because its `],
			[/* inline code block */ 'i', `stop`],
			[/* text */ 't', ` method is invoked, any further
 attempt to schedule a task on the timer will result in an
 `],
			[/* inline code block */ 'i', `IllegalStateException`],
			[/* text */ 't', `, as if the timer's `],
			[/* inline code block */ 'i', `cancel`],
			[/* text */ 't', `
 method had been invoked.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This class is thread-safe: multiple threads can share a single
 `],
			[/* inline code block */ 'i', `Timer`],
			[/* text */ 't', ` object without the need for external synchronization.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This class does `],
			[/* text */ 't', `not`],
			[/* text */ 't', ` offer real-time guarantees: it schedules
 tasks using the `],
			[/* inline code block */ 'i', `Object.wait(long)`],
			[/* text */ 't', ` method.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Java 5.0 introduced the `],
			[/* inline code block */ 'i', `java.util.concurrent`],
			[/* text */ 't', ` package and
 one of the concurrency utilities therein is the `],
			[/* reference */ 'r', `java.util.concurrent.ScheduledThreadPoolExecutor`, `ScheduledThreadPoolExecutor`],
			[/* text */ 't', ` which is a thread pool for repeatedly
 executing tasks at a given rate or delay.  It is effectively a more
 versatile replacement for the `],
			[/* inline code block */ 'i', `Timer`],
			[/* text */ 't', `/`],
			[/* inline code block */ 'i', `TimerTask`],
			[/* text */ 't', `
 combination, as it allows multiple service threads, accepts various
 time units, and doesn't require subclassing `],
			[/* inline code block */ 'i', `TimerTask`],
			[/* text */ 't', ` (just
 implement `],
			[/* inline code block */ 'i', `Runnable`],
			[/* text */ 't', `).  Configuring `],
			[/* inline code block */ 'i', `ScheduledThreadPoolExecutor`],
			[/* text */ 't', ` with one thread makes it equivalent to
 `],
			[/* inline code block */ 'i', `Timer`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', `Implementation note: This class scales to large numbers of concurrently
 scheduled tasks (thousands should present no problem).  Internally,
 it uses a binary heap to represent its task queue, so the cost to schedule
 a task is O(log n), where n is the number of concurrently scheduled tasks.

 `],
		[/* block */ 'b', `Implementation note: All constructors start a timer thread.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Creates a new timer.  The associated thread does `],
				[/* text */ 't', `not`],
				[/* text */ 't', `
 `],
				[/* reference */ 'r', `java.lang.Thread#setDaemon(boolean)`, `run as a daemon`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new timer whose associated thread may be specified to
 `],
				[/* reference */ 'r', `java.lang.Thread#setDaemon(boolean)`, `run as a daemon`],
				[/* text */ 't', `.
 A daemon thread is called for if the timer will be used to
 schedule repeating "maintenance activities", which must be
 performed as long as the application is running, but should not
 prolong the lifetime of the application.`]
			],
			[/* parameters */
				[/* parameter */ 'isDaemon', [/* parameter description */
					[/* text */ 't', `true if the associated thread should run as a daemon.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new timer whose associated thread has the specified name.
 The associated thread does `],
				[/* text */ 't', `not`],
				[/* text */ 't', `
 `],
				[/* reference */ 'r', `java.lang.Thread#setDaemon(boolean)`, `run as a daemon`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the associated thread`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is null`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new timer whose associated thread has the specified name,
 and may be specified to
 `],
				[/* reference */ 'r', `java.lang.Thread#setDaemon(boolean)`, `run as a daemon`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the associated thread`]
				]],
				[/* parameter */ 'isDaemon', [/* parameter description */
					[/* text */ 't', `true if the associated thread should run as a daemon`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'purge()', [
			[/* method description */
				[/* text */ 't', `Removes all cancelled tasks from this timer's task queue.  `],
				[/* text */ 't', `Calling
 this method has no effect on the behavior of the timer`],
				[/* text */ 't', `, but
 eliminates the references to the cancelled tasks from the queue.
 If there are no external references to these tasks, they become
 eligible for garbage collection.

 `],
				[/* block */ 'b', `Most programs will have no need to call this method.
 It is designed for use by the rare application that cancels a large
 number of tasks.  Calling this method trades time for space: the
 runtime of the method may be proportional to n + c log n, where n
 is the number of tasks in the queue and c is the number of cancelled
 tasks.

 `],
				[/* block */ 'b', `Note that it is permissible to call this method from within
 a task scheduled on this timer.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of tasks removed from the queue.`]
			]
		]],
		[/* method */ 'cancel()', [
			[/* method description */
				[/* text */ 't', `Terminates this timer, discarding any currently scheduled tasks.
 Does not interfere with a currently executing task (if it exists).
 Once a timer has been terminated, its execution thread terminates
 gracefully, and no more tasks may be scheduled on it.

 `],
				[/* block */ 'b', `Note that calling this method from within the run method of a
 timer task that was invoked by this timer absolutely guarantees that
 the ongoing task execution is the last task execution that will ever
 be performed by this timer.

 `],
				[/* block */ 'b', `This method may be called repeatedly; the second and subsequent
 calls have no effect.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'schedule(java.util.TimerTask,java.util.Date)', [
			[/* method description */
				[/* text */ 't', `Schedules the specified task for execution at the specified time.  If
 the time is in the past, the task is scheduled for immediate execution.`]
			],
			[/* parameters */
				[/* parameter */ 'task', [/* parameter description */
					[/* text */ 't', `task to be scheduled.`]
				]],
				[/* parameter */ 'time', [/* parameter description */
					[/* text */ 't', `time at which task is to be executed.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `time.getTime()`],
					[/* text */ 't', ` is negative.`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if task was already scheduled or
         cancelled, timer was cancelled, or timer thread terminated.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `task`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `time`],
					[/* text */ 't', ` is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'schedule(java.util.TimerTask,java.util.Date,long)', [
			[/* method description */
				[/* text */ 't', `Schedules the specified task for repeated `],
				[/* text */ 't', `fixed-delay execution`],
				[/* text */ 't', `,
 beginning at the specified time. Subsequent executions take place at
 approximately regular intervals, separated by the specified period.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `In fixed-delay execution, each execution is scheduled relative to
 the actual execution time of the previous execution.  If an execution
 is delayed for any reason (such as garbage collection or other
 background activity), subsequent executions will be delayed as well.
 In the long run, the frequency of execution will generally be slightly
 lower than the reciprocal of the specified period (assuming the system
 clock underlying `],
					[/* inline code block */ 'i', `Object.wait(long)`],
					[/* text */ 't', ` is accurate).  As a
 consequence of the above, if the scheduled first time is in the past,
 it is scheduled for immediate execution.

 `]
				]],
				[/* block */ 'b', `Fixed-delay execution is appropriate for recurring activities
 that require "smoothness."  In other words, it is appropriate for
 activities where it is more important to keep the frequency accurate
 in the short run than in the long run.  This includes most animation
 tasks, such as blinking a cursor at regular intervals.  It also includes
 tasks wherein regular activity is performed in response to human
 input, such as automatically repeating a character as long as a key
 is held down.`]
			],
			[/* parameters */
				[/* parameter */ 'task', [/* parameter description */
					[/* text */ 't', `task to be scheduled.`]
				]],
				[/* parameter */ 'firstTime', [/* parameter description */
					[/* text */ 't', `First time at which task is to be executed.`]
				]],
				[/* parameter */ 'period', [/* parameter description */
					[/* text */ 't', `time in milliseconds between successive task executions.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `firstTime.getTime() < 0`],
					[/* text */ 't', `, or
         `],
					[/* inline code block */ 'i', `period <= 0`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if task was already scheduled or
         cancelled, timer was cancelled, or timer thread terminated.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `task`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `firstTime`],
					[/* text */ 't', ` is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'schedule(java.util.TimerTask,long)', [
			[/* method description */
				[/* text */ 't', `Schedules the specified task for execution after the specified delay.`]
			],
			[/* parameters */
				[/* parameter */ 'task', [/* parameter description */
					[/* text */ 't', `task to be scheduled.`]
				]],
				[/* parameter */ 'delay', [/* parameter description */
					[/* text */ 't', `delay in milliseconds before task is to be executed.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `delay`],
					[/* text */ 't', ` is negative, or
         `],
					[/* inline code block */ 'i', `delay + System.currentTimeMillis()`],
					[/* text */ 't', ` is negative.`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if task was already scheduled or
         cancelled, timer was cancelled, or timer thread terminated.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `task`],
					[/* text */ 't', ` is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'schedule(java.util.TimerTask,long,long)', [
			[/* method description */
				[/* text */ 't', `Schedules the specified task for repeated `],
				[/* text */ 't', `fixed-delay execution`],
				[/* text */ 't', `,
 beginning after the specified delay.  Subsequent executions take place
 at approximately regular intervals separated by the specified period.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `In fixed-delay execution, each execution is scheduled relative to
 the actual execution time of the previous execution.  If an execution
 is delayed for any reason (such as garbage collection or other
 background activity), subsequent executions will be delayed as well.
 In the long run, the frequency of execution will generally be slightly
 lower than the reciprocal of the specified period (assuming the system
 clock underlying `],
					[/* inline code block */ 'i', `Object.wait(long)`],
					[/* text */ 't', ` is accurate).

 `]
				]],
				[/* block */ 'b', `Fixed-delay execution is appropriate for recurring activities
 that require "smoothness."  In other words, it is appropriate for
 activities where it is more important to keep the frequency accurate
 in the short run than in the long run.  This includes most animation
 tasks, such as blinking a cursor at regular intervals.  It also includes
 tasks wherein regular activity is performed in response to human
 input, such as automatically repeating a character as long as a key
 is held down.`]
			],
			[/* parameters */
				[/* parameter */ 'task', [/* parameter description */
					[/* text */ 't', `task to be scheduled.`]
				]],
				[/* parameter */ 'delay', [/* parameter description */
					[/* text */ 't', `delay in milliseconds before task is to be executed.`]
				]],
				[/* parameter */ 'period', [/* parameter description */
					[/* text */ 't', `time in milliseconds between successive task executions.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `delay < 0`],
					[/* text */ 't', `, or
         `],
					[/* inline code block */ 'i', `delay + System.currentTimeMillis() < 0`],
					[/* text */ 't', `, or
         `],
					[/* inline code block */ 'i', `period <= 0`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if task was already scheduled or
         cancelled, timer was cancelled, or timer thread terminated.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `task`],
					[/* text */ 't', ` is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'scheduleAtFixedRate(java.util.TimerTask,java.util.Date,long)', [
			[/* method description */
				[/* text */ 't', `Schedules the specified task for repeated `],
				[/* text */ 't', `fixed-rate execution`],
				[/* text */ 't', `,
 beginning at the specified time. Subsequent executions take place at
 approximately regular intervals, separated by the specified period.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `In fixed-rate execution, each execution is scheduled relative to the
 scheduled execution time of the initial execution.  If an execution is
 delayed for any reason (such as garbage collection or other background
 activity), two or more executions will occur in rapid succession to
 "catch up."  In the long run, the frequency of execution will be
 exactly the reciprocal of the specified period (assuming the system
 clock underlying `],
					[/* inline code block */ 'i', `Object.wait(long)`],
					[/* text */ 't', ` is accurate).  As a
 consequence of the above, if the scheduled first time is in the past,
 then any "missed" executions will be scheduled for immediate "catch up"
 execution.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Fixed-rate execution is appropriate for recurring activities that
 are sensitive to `],
					[/* text */ 't', `absolute`],
					[/* text */ 't', ` time, such as ringing a chime every
 hour on the hour, or running scheduled maintenance every day at a
 particular time.  It is also appropriate for recurring activities
 where the total time to perform a fixed number of executions is
 important, such as a countdown timer that ticks once every second for
 ten seconds.  Finally, fixed-rate execution is appropriate for
 scheduling multiple repeating timer tasks that must remain synchronized
 with respect to one another.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'task', [/* parameter description */
					[/* text */ 't', `task to be scheduled.`]
				]],
				[/* parameter */ 'firstTime', [/* parameter description */
					[/* text */ 't', `First time at which task is to be executed.`]
				]],
				[/* parameter */ 'period', [/* parameter description */
					[/* text */ 't', `time in milliseconds between successive task executions.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `firstTime.getTime() < 0`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `period <= 0`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if task was already scheduled or
         cancelled, timer was cancelled, or timer thread terminated.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `task`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `firstTime`],
					[/* text */ 't', ` is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'scheduleAtFixedRate(java.util.TimerTask,long,long)', [
			[/* method description */
				[/* text */ 't', `Schedules the specified task for repeated `],
				[/* text */ 't', `fixed-rate execution`],
				[/* text */ 't', `,
 beginning after the specified delay.  Subsequent executions take place
 at approximately regular intervals, separated by the specified period.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `In fixed-rate execution, each execution is scheduled relative to the
 scheduled execution time of the initial execution.  If an execution is
 delayed for any reason (such as garbage collection or other background
 activity), two or more executions will occur in rapid succession to
 "catch up."  In the long run, the frequency of execution will be
 exactly the reciprocal of the specified period (assuming the system
 clock underlying `],
					[/* inline code block */ 'i', `Object.wait(long)`],
					[/* text */ 't', ` is accurate).

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Fixed-rate execution is appropriate for recurring activities that
 are sensitive to `],
					[/* text */ 't', `absolute`],
					[/* text */ 't', ` time, such as ringing a chime every
 hour on the hour, or running scheduled maintenance every day at a
 particular time.  It is also appropriate for recurring activities
 where the total time to perform a fixed number of executions is
 important, such as a countdown timer that ticks once every second for
 ten seconds.  Finally, fixed-rate execution is appropriate for
 scheduling multiple repeating timer tasks that must remain synchronized
 with respect to one another.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'task', [/* parameter description */
					[/* text */ 't', `task to be scheduled.`]
				]],
				[/* parameter */ 'delay', [/* parameter description */
					[/* text */ 't', `delay in milliseconds before task is to be executed.`]
				]],
				[/* parameter */ 'period', [/* parameter description */
					[/* text */ 't', `time in milliseconds between successive task executions.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `delay < 0`],
					[/* text */ 't', `, or
         `],
					[/* inline code block */ 'i', `delay + System.currentTimeMillis() < 0`],
					[/* text */ 't', `, or
         `],
					[/* inline code block */ 'i', `period <= 0`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if task was already scheduled or
         cancelled, timer was cancelled, or timer thread terminated.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `task`],
					[/* text */ 't', ` is null`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
