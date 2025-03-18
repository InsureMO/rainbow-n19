import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Thread$State', [
	[/* class description */
		[/* text */ 't', `A thread state.  A thread can be in one of the following states:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `NEW`],
				[/* new line */ 'n'],
				[/* text */ 't', `
     A thread that has not yet started is in this state.
     `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `RUNNABLE`],
				[/* new line */ 'n'],
				[/* text */ 't', `
     A thread executing in the Java virtual machine is in this state.
     `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `BLOCKED`],
				[/* new line */ 'n'],
				[/* text */ 't', `
     A thread that is blocked waiting for a monitor lock
     is in this state.
     `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `WAITING`],
				[/* new line */ 'n'],
				[/* text */ 't', `
     A thread that is waiting indefinitely for another thread to
     perform a particular action is in this state.
     `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `TIMED_WAITING`],
				[/* new line */ 'n'],
				[/* text */ 't', `
     A thread that is waiting for another thread to perform an action
     for up to a specified waiting time is in this state.
     `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `TERMINATED`],
				[/* new line */ 'n'],
				[/* text */ 't', `
     A thread that has exited is in this state.
     `]
			]]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', `
 A thread can be in only one state at a given point in time.
 These states are virtual machine states which do not reflect
 any operating system thread states.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'valueOf(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the enum constant of this class with the specified name.
The string must match `],
				[/* text */ 't', `exactly`],
				[/* text */ 't', ` an identifier used to declare an
enum constant in this class.  (Extraneous whitespace characters are 
not permitted.)`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the enum constant to be returned.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if this enum class has no constant with the specified name`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the enum constant with the specified name`]
			]
		]],
		[/* method */ 'values()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing the constants of this enum class, in
the order they are declared.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an array containing the constants of this enum class, in the order they are declared`]
			]
		]]
	],
	[/* enum values */
		[/* enum value */ 'NEW', [
			[/* enum value description */
				[/* text */ 't', `Thread state for a thread which has not yet started.`]
			],
		]],
		[/* enum value */ 'RUNNABLE', [
			[/* enum value description */
				[/* text */ 't', `Thread state for a runnable thread.  A thread in the runnable
 state is executing in the Java virtual machine but it may
 be waiting for other resources from the operating system
 such as processor.`]
			],
		]],
		[/* enum value */ 'BLOCKED', [
			[/* enum value description */
				[/* text */ 't', `Thread state for a thread blocked waiting for a monitor lock.
 A thread in the blocked state is waiting for a monitor lock
 to enter a synchronized block/method or
 reenter a synchronized block/method after calling
 `],
				[/* reference */ 'r', `java.lang.Object#wait()`, `Object.wait`],
				[/* text */ 't', `.`]
			],
		]],
		[/* enum value */ 'WAITING', [
			[/* enum value description */
				[/* text */ 't', `Thread state for a waiting thread.
 A thread is in the waiting state due to calling one of the
 following methods:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* reference */ 'r', `java.lang.Object#wait()`, `Object.wait`],
						[/* text */ 't', ` with no timeout`]
					]],
					[/* block */ 'b', [
						[/* reference */ 'r', `java.lang.Thread#join()`, `Thread.join`],
						[/* text */ 't', ` with no timeout`]
					]],
					[/* block */ 'b', [
						[/* reference */ 'r', `java.util.concurrent.locks.LockSupport#park()`, `LockSupport.park`]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A thread in the waiting state is waiting for another thread to
 perform a particular action.

 For example, a thread that has called `],
					[/* inline code block */ 'i', `Object.wait()`],
					[/* text */ 't', `
 on an object is waiting for another thread to call
 `],
					[/* inline code block */ 'i', `Object.notify()`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `Object.notifyAll()`],
					[/* text */ 't', ` on
 that object. A thread that has called `],
					[/* inline code block */ 'i', `Thread.join()`],
					[/* text */ 't', `
 is waiting for a specified thread to terminate.`]
				]]
			],
		]],
		[/* enum value */ 'TIMED_WAITING', [
			[/* enum value description */
				[/* text */ 't', `Thread state for a waiting thread with a specified waiting time.
 A thread is in the timed waiting state due to calling one of
 the following methods with a specified positive waiting time:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* reference */ 'r', `java.lang.Thread#sleep(long)`, `Thread.sleep`]
					]],
					[/* block */ 'b', [
						[/* reference */ 'r', `java.lang.Object#wait(long)`, `Object.wait`],
						[/* text */ 't', ` with timeout`]
					]],
					[/* block */ 'b', [
						[/* reference */ 'r', `java.lang.Thread#join(long)`, `Thread.join`],
						[/* text */ 't', ` with timeout`]
					]],
					[/* block */ 'b', [
						[/* reference */ 'r', `java.util.concurrent.locks.LockSupport#parkNanos(java.lang.Object,long)`, `LockSupport.parkNanos`]
					]],
					[/* block */ 'b', [
						[/* reference */ 'r', `java.util.concurrent.locks.LockSupport#parkUntil(java.lang.Object,long)`, `LockSupport.parkUntil`]
					]]
				]]
			],
		]],
		[/* enum value */ 'TERMINATED', [
			[/* enum value description */
				[/* text */ 't', `Thread state for a terminated thread.
 The thread has completed execution.`]
			],
		]]
	],
]);
