import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.TimerTask', [
	[/* class description */
		[/* text */ 't', `A task that can be scheduled for one-time or repeated execution by a
 `],
		[/* reference */ 'r', `java.util.Timer`, `Timer`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `A timer task is `],
			[/* text */ 't', `not`],
			[/* text */ 't', ` reusable.  Once a task has been scheduled
 for execution on a `],
			[/* inline code block */ 'i', `Timer`],
			[/* text */ 't', ` or cancelled, subsequent attempts to
 schedule it for execution will throw `],
			[/* inline code block */ 'i', `IllegalStateException`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Creates a new timer task.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'run()', [
			[/* method description */
				[/* text */ 't', `The action to be performed by this timer task.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'cancel()', [
			[/* method description */
				[/* text */ 't', `Cancels this timer task.  If the task has been scheduled for one-time
 execution and has not yet run, or has not yet been scheduled, it will
 never run.  If the task has been scheduled for repeated execution, it
 will never run again.  (If the task is running when this call occurs,
 the task will run to completion, but will never run again.)

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that calling this method from within the `],
					[/* inline code block */ 'i', `run`],
					[/* text */ 't', ` method of
 a repeating timer task absolutely guarantees that the timer task will
 not run again.

 `]
				]],
				[/* block */ 'b', `This method may be called repeatedly; the second and subsequent
 calls have no effect.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this task is scheduled for one-time execution and has
         not yet run, or this task is scheduled for repeated execution.
         Returns false if the task was scheduled for one-time execution
         and has already run, or if the task was never scheduled, or if
         the task was already cancelled.  (Loosely speaking, this method
         returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if it prevents one or more scheduled
         executions from taking place.)`]
			]
		]],
		[/* method */ 'scheduledExecutionTime()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* text */ 't', `scheduled`],
				[/* text */ 't', ` execution time of the most recent
 `],
				[/* text */ 't', `actual`],
				[/* text */ 't', ` execution of this task.  (If this method is invoked
 while task execution is in progress, the return value is the scheduled
 execution time of the ongoing task execution.)

 `],
				[/* block */ 'b', `This method is typically invoked from within a task's run method, to
 determine whether the current execution of the task is sufficiently
 timely to warrant performing the scheduled activity:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `public void run() {
       if (System.currentTimeMillis() - scheduledExecutionTime() >=
           MAX_TARDINESS)
               return;  // Too late; skip this execution.
       // Perform the task
   }`]
				]],
				[/* text */ 't', `
 This method is typically `],
				[/* text */ 't', `not`],
				[/* text */ 't', ` used in conjunction with
 `],
				[/* text */ 't', `fixed-delay execution`],
				[/* text */ 't', ` repeating tasks, as their scheduled
 execution times are allowed to drift over time, and so are not terribly
 significant.`],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the time at which the most recent execution of this task was
         scheduled to occur, in the format returned by Date.getTime().
         The return value is undefined if the task has yet to commence
         its first execution.`]
			]
		]]
	],
]);
