import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.ref.Cleaner', [
	[/* class description */
		[/* inline code block */ 'i', `Cleaner`],
		[/* text */ 't', ` manages a set of object references and corresponding cleaning actions.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Cleaning actions are `],
			[/* reference */ 'r', `#register(java.lang.Object,java.lang.Runnable)`, `registered`],
			[/* text */ 't', `
 to run after the cleaner is notified that the object has become
 phantom reachable.
 The cleaner uses `],
			[/* reference */ 'r', `java.lang.ref.PhantomReference`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `java.lang.ref.ReferenceQueue`],
			[/* text */ 't', ` to be
 notified when the `],
			[/* reference */ 'r', `.package-summary#reachability`],
			[/* text */ 't', `
 changes.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Each cleaner operates independently, managing the pending cleaning actions
 and handling threading and termination when the cleaner is no longer in use.
 Registering an object reference and corresponding cleaning action returns
 a `],
			[/* reference */ 'r', `java.lang.ref.Cleaner.Cleanable`],
			[/* text */ 't', `. The most efficient use is to explicitly invoke
 the `],
			[/* reference */ 'r', `.Cleaner.Cleanable#clean()`],
			[/* text */ 't', ` method when the object is closed or
 no longer needed.
 The cleaning action is a `],
			[/* reference */ 'r', `java.lang.Runnable`],
			[/* text */ 't', ` to be invoked at most once when
 the object has become phantom reachable unless it has already been explicitly cleaned.
 Note that the cleaning action must not refer to the object being registered.
 If so, the object will not become phantom reachable and the cleaning action
 will not be invoked automatically.
 `]
		]],
		[/* block */ 'b', `
 The execution of the cleaning action is performed
 by a thread associated with the cleaner.
 All exceptions thrown by the cleaning action are ignored.
 The cleaner and other cleaning actions are not affected by
 exceptions in a cleaning action.
 The thread runs until all registered cleaning actions have
 completed and the cleaner itself is reclaimed by the garbage collector.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The behavior of cleaners during `],
			[/* reference */ 'r', `java.System#exit(int)`],
			[/* text */ 't', `
 is implementation specific. No guarantees are made relating
 to whether cleaning actions are invoked or not.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Unless otherwise noted, passing a `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` argument to a constructor or
 method in this class will cause a
 `],
			[/* reference */ 'r', `java.lang.NullPointerException`],
			[/* text */ 't', ` to be thrown.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'register(java.lang.Object,java.lang.Runnable)', [
			[/* method description */
				[/* text */ 't', `Registers an object and a cleaning action to run when the object
 becomes phantom reachable.
 Refer to the `],
				[/* text */ 't', `API Note`],
				[/* text */ 't', ` above for
 cautions about the behavior of cleaning actions.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to monitor`]
				]],
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `Runnable`],
					[/* text */ 't', ` to invoke when the object becomes phantom reachable`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Cleanable`],
				[/* text */ 't', ` instance`]
			]
		]],
		[/* method */ 'create()', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `Cleaner`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The cleaner creates a `],
					[/* reference */ 'r', `java.Thread#setDaemon(boolean)`],
					[/* text */ 't', `
 to process the phantom reachable objects and to invoke cleaning actions.
 The `],
					[/* reference */ 'r', `java.Thread#getContextClassLoader()`],
					[/* text */ 't', `
 of the thread is set to the
 `],
					[/* reference */ 'r', `java.ClassLoader#getSystemClassLoader()`],
					[/* text */ 't', `.
 The thread has no permissions, enforced only if a
 `],
					[/* reference */ 'r', `java.System#setSecurityManager(java.lang.SecurityManager)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 The cleaner terminates when it is phantom reachable and all of the
 registered cleaning actions are complete.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread is not allowed to
               create or start the thread.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new `],
				[/* inline code block */ 'i', `Cleaner`]
			]
		]],
		[/* method */ 'create(java.util.concurrent.ThreadFactory)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `Cleaner`],
				[/* text */ 't', ` using a `],
				[/* inline code block */ 'i', `Thread`],
				[/* text */ 't', ` from the `],
				[/* inline code block */ 'i', `ThreadFactory`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A thread from the thread factory's `],
					[/* reference */ 'r', `java.lang.concurrent.ThreadFactory#newThread(java.lang.Runnable)`],
					[/* text */ 't', `
 method is set to be a `],
					[/* reference */ 'r', `java.Thread#setDaemon(boolean)`],
					[/* text */ 't', `
 and started to process phantom reachable objects and invoke cleaning actions.
 On each call the `],
					[/* reference */ 'r', `java.lang.concurrent.ThreadFactory#newThread(java.lang.Runnable)`],
					[/* text */ 't', `
 must provide a Thread that is suitable for performing the cleaning actions.
 `]
				]],
				[/* block */ 'b', `
 The cleaner terminates when it is phantom reachable and all of the
 registered cleaning actions are complete.`]
			],
			[/* parameters */
				[/* parameter */ 'threadFactory', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `ThreadFactory`],
					[/* text */ 't', ` to return a new `],
					[/* inline code block */ 'i', `Thread`],
					[/* text */ 't', `
                      to process cleaning actions`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalThreadStateException', [/* throw description */
					[/* text */ 't', `if the thread from the thread
               factory was `],
					[/* reference */ 'r', `java.Thread.State#NEW`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread is not allowed to
               create or start the thread.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new `],
				[/* inline code block */ 'i', `Cleaner`]
			]
		]]
	],
]);
