import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.ProcessHandle', [
	[/* class description */
		[/* text */ 't', `ProcessHandle identifies and provides control of native processes. Each
 individual process can be monitored for liveness, list its children,
 get information about the process or destroy it.
 By comparison, `],
		[/* reference */ 'r', `java.lang.Process`],
		[/* text */ 't', ` instances were started
 by the current process and additionally provide access to the process
 input, output, and error streams.
 `],
		[/* block */ 'b', `
 The native process ID is an identification number that the
 operating system assigns to the process.
 The range for process id values is dependent on the operating system.
 For example, an embedded system might use a 16-bit value.
 Status information about a process is retrieved from the native system
 and may change asynchronously; processes may be created or terminate
 spontaneously.
 The time between when a process terminates and the process id
 is reused for a new process is unpredictable.
 Race conditions can exist between checking the status of a process and
 acting upon it. When using ProcessHandles avoid assumptions
 about the liveness or identity of the underlying process.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Each ProcessHandle identifies and allows control of a process in the native
 system. ProcessHandles are returned from the factory methods `],
			[/* reference */ 'r', `#current()`, `current()`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#of(long)`, `of(long)`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#children()`, `children()`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `#descendants()`, `descendants()`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `#parent()`, `parent()`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `#allProcesses()`, `allProcesses()`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The `],
			[/* reference */ 'r', `java.lang.Process`],
			[/* text */ 't', ` instances created by `],
			[/* reference */ 'r', `java.lang.ProcessBuilder`],
			[/* text */ 't', ` can be queried
 for a ProcessHandle that provides information about the Process.
 ProcessHandle references should not be freely distributed.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 A `],
			[/* reference */ 'r', `java.util.concurrent.CompletableFuture`],
			[/* text */ 't', ` available from `],
			[/* reference */ 'r', `#onExit()`, `onExit()`],
			[/* text */ 't', `
 can be used to wait for process termination, and possibly trigger dependent
 actions.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The factory methods limit access to ProcessHandles using the
 SecurityManager checking the `],
			[/* reference */ 'r', `java.lang.RuntimePermission`],
			[/* text */ 't', `.
 The ability to control processes is also restricted by the native system,
 ProcessHandle provides no more access to, or control over, the native process
 than would be allowed by a native application.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'parent()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `Optional<ProcessHandle>`],
				[/* text */ 't', ` for the parent process.
 Note that Processes in a zombie state usually don't have a parent.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager has been installed and
         it denies RuntimePermission("manageProcess")`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Optional<ProcessHandle>`],
				[/* text */ 't', ` of the parent process;
         the `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` is empty if the child process does not have a parent
         or if the parent is not available, possibly due to operating system limitations`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `other`],
				[/* text */ 't', ` object is non-null, is of the
 same implementation, and represents the same system process;
 otherwise it returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `another object`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the `],
				[/* inline code block */ 'i', `other`],
				[/* text */ 't', ` object is non-null,
         is of the same implementation class and represents
         the same system process; otherwise returns `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hash code value for this ProcessHandle.
 The hashcode value follows the general contract for `],
				[/* reference */ 'r', `.Object#hashCode()`],
				[/* text */ 't', `.
 The value is a function of the `],
				[/* reference */ 'r', `#pid()`, `pid()`],
				[/* text */ 't', ` value and
 may be a function of additional information to uniquely identify the process.
 If two ProcessHandles are equal according to the `],
				[/* reference */ 'r', `#equals(java.lang.Object)`, `equals`],
				[/* text */ 't', `
 method, then calling the hashCode method on each of the two objects
 must produce the same integer result.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object`]
			]
		]],
		[/* method */ 'compareTo(java.lang.ProcessHandle)', [
			[/* method description */
				[/* text */ 't', `Compares this ProcessHandle with the specified ProcessHandle for order.
 The order is not specified, but is consistent with `],
				[/* reference */ 'r', `.Object#equals(java.lang.Object)`],
				[/* text */ 't', `,
 which returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if two instances of ProcessHandle
 are of the same implementation and represent the same system process.
 Comparison is only supported among objects of same implementation.
 If attempt is made to mutually compare two different implementations
 of `],
				[/* reference */ 'r', `java.lang.ProcessHandle`],
				[/* text */ 't', `s, `],
				[/* reference */ 'r', `java.lang.ClassCastException`],
				[/* text */ 't', ` is thrown.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the ProcessHandle to be compared`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified object is null`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the specified object is not of same class
         as this object`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a negative integer, zero, or a positive integer as this object
 is less than, equal to, or greater than the specified object.`]
			]
		]],
		[/* method */ 'of(long)', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `Optional<ProcessHandle>`],
				[/* text */ 't', ` for an existing native process.`]
			],
			[/* parameters */
				[/* parameter */ 'pid', [/* parameter description */
					[/* text */ 't', `a native process ID`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager has been installed and
         it denies RuntimePermission("manageProcess")`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the implementation
         does not support this operation`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Optional<ProcessHandle>`],
				[/* text */ 't', ` of the PID for the process;
         the `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` is empty if the process does not exist`]
			]
		]],
		[/* method */ 'info()', [
			[/* method description */
				[/* text */ 't', `Returns a snapshot of information about the process.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` A `],
					[/* reference */ 'r', `java.lang.ProcessHandle.Info`],
					[/* text */ 't', ` instance has accessor methods that return
 information about the process if it is available.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a snapshot of information about the process, always non-null`]
			]
		]],
		[/* method */ 'current()', [
			[/* method description */
				[/* text */ 't', `Returns a ProcessHandle for the current process. The ProcessHandle cannot be
 used to destroy the current process, use `],
				[/* reference */ 'r', `.System#exit(int)`],
				[/* text */ 't', ` instead.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager has been installed and
         it denies RuntimePermission("manageProcess")`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the implementation
         does not support this operation`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a ProcessHandle for the current process`]
			]
		]],
		[/* method */ 'isAlive()', [
			[/* method description */
				[/* text */ 't', `Tests whether the process represented by this `],
				[/* inline code block */ 'i', `ProcessHandle`],
				[/* text */ 't', ` is alive.
 Process termination is implementation and operating system specific.
 The process is considered alive as long as the PID is valid.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the process represented by this
         `],
				[/* inline code block */ 'i', `ProcessHandle`],
				[/* text */ 't', ` object has not yet terminated`]
			]
		]],
		[/* method */ 'destroy()', [
			[/* method description */
				[/* text */ 't', `Requests the process to be killed.
 Whether the process represented by this `],
				[/* inline code block */ 'i', `ProcessHandle`],
				[/* text */ 't', ` object is
 `],
				[/* reference */ 'r', `#supportsNormalTermination()`, `normally terminated`],
				[/* text */ 't', ` or not is
 implementation dependent.
 Forcible process destruction is defined as the immediate termination of the
 process, whereas normal termination allows the process to shut down cleanly.
 If the process is not alive, no action is taken.
 The operating system access controls may prevent the process
 from being killed.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* reference */ 'r', `java.util.concurrent.CompletableFuture`],
					[/* text */ 't', ` from `],
					[/* reference */ 'r', `#onExit()`, `onExit()`],
					[/* text */ 't', ` is
 `],
					[/* reference */ 'r', `java.CompletableFuture#complete(T)`],
					[/* text */ 't', `
 when the process has terminated.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note: The process may not terminate immediately.
 For example, `],
					[/* inline code block */ 'i', `isAlive()`],
					[/* text */ 't', ` may return true for a brief period
 after `],
					[/* inline code block */ 'i', `destroy()`],
					[/* text */ 't', ` is called.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if the process is the current process`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if termination was successfully requested,
         otherwise `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'pid()', [
			[/* method description */
				[/* text */ 't', `Returns the native process ID of the process. The native process ID is an
 identification number that the operating system assigns to the process.
 The operating system may reuse the process ID after a process terminates.
 Use `],
				[/* reference */ 'r', `#equals(java.lang.Object)`, `equals`],
				[/* text */ 't', ` or
 `],
				[/* reference */ 'r', `#compareTo(java.lang.ProcessHandle)`, `compareTo`],
				[/* text */ 't', ` to compare ProcessHandles.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the implementation
         does not support this operation`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the native process ID of the process`]
			]
		]],
		[/* method */ 'children()', [
			[/* method description */
				[/* text */ 't', `Returns a snapshot of the current direct children of the process.
 The `],
				[/* reference */ 'r', `#parent()`, `parent()`],
				[/* text */ 't', ` of a direct child process is the process.
 Typically, a process that is `],
				[/* reference */ 'r', `#isAlive()`, `not alive`],
				[/* text */ 't', ` has no children.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that processes are created and terminate asynchronously.
 There is no guarantee that a process is `],
					[/* reference */ 'r', `#isAlive()`, `alive`],
					[/* text */ 't', `.
 `]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager has been installed and
         it denies RuntimePermission("manageProcess")`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a sequential Stream of ProcessHandles for processes that are
         direct children of the process`]
			]
		]],
		[/* method */ 'descendants()', [
			[/* method description */
				[/* text */ 't', `Returns a snapshot of the descendants of the process.
 The descendants of a process are the children of the process
 plus the descendants of those children, recursively.
 Typically, a process that is `],
				[/* reference */ 'r', `#isAlive()`, `not alive`],
				[/* text */ 't', ` has no children.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that processes are created and terminate asynchronously.
 There is no guarantee that a process is `],
					[/* reference */ 'r', `#isAlive()`, `alive`],
					[/* text */ 't', `.
 `]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager has been installed and
         it denies RuntimePermission("manageProcess")`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a sequential Stream of ProcessHandles for processes that
         are descendants of the process`]
			]
		]],
		[/* method */ 'destroyForcibly()', [
			[/* method description */
				[/* text */ 't', `Requests the process to be killed forcibly.
 The process represented by this `],
				[/* inline code block */ 'i', `ProcessHandle`],
				[/* text */ 't', ` object is
 forcibly terminated.
 Forcible process destruction is defined as the immediate termination of the
 process, whereas normal termination allows the process to shut down cleanly.
 If the process is not alive, no action is taken.
 The operating system access controls may prevent the process
 from being killed.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* reference */ 'r', `java.util.concurrent.CompletableFuture`],
					[/* text */ 't', ` from `],
					[/* reference */ 'r', `#onExit()`, `onExit()`],
					[/* text */ 't', ` is
 `],
					[/* reference */ 'r', `java.CompletableFuture#complete(T)`],
					[/* text */ 't', `
 when the process has terminated.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note: The process may not terminate immediately.
 For example, `],
					[/* inline code block */ 'i', `isAlive()`],
					[/* text */ 't', ` may return true for a brief period
 after `],
					[/* inline code block */ 'i', `destroyForcibly()`],
					[/* text */ 't', ` is called.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if the process is the current process`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if termination was successfully requested,
         otherwise `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'supportsNormalTermination()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the implementation of `],
				[/* reference */ 'r', `#destroy()`, `destroy()`],
				[/* text */ 't', `
 normally terminates the process.
 Returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if the implementation of `],
				[/* inline code block */ 'i', `destroy`],
				[/* text */ 't', `
 forcibly and immediately terminates the process.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the implementation of `],
				[/* reference */ 'r', `#destroy()`, `destroy()`],
				[/* text */ 't', `
         normally terminates the process;
         otherwise, `],
				[/* reference */ 'r', `#destroy()`, `destroy()`],
				[/* text */ 't', ` forcibly terminates the process`]
			]
		]],
		[/* method */ 'onExit()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `CompletableFuture<ProcessHandle>`],
				[/* text */ 't', ` for the termination
 of the process.
 The `],
				[/* reference */ 'r', `java.util.concurrent.CompletableFuture`],
				[/* text */ 't', ` provides the ability
 to trigger dependent functions or actions that may be run synchronously
 or asynchronously upon process termination.
 When the process has terminated the CompletableFuture is
 `],
				[/* reference */ 'r', `java.CompletableFuture#complete(T)`],
				[/* text */ 't', ` regardless
 of the exit status of the process.
 The `],
				[/* inline code block */ 'i', `onExit`],
				[/* text */ 't', ` method can be called multiple times to invoke
 independent actions when the process exits.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Calling `],
					[/* inline code block */ 'i', `onExit().get()`],
					[/* text */ 't', ` waits for the process to terminate and returns
 the ProcessHandle. The future can be used to check if the process is
 `],
					[/* reference */ 'r', `java.CompletableFuture#isDone()`],
					[/* text */ 't', ` or to
 `],
					[/* reference */ 'r', `java.Future#get()`],
					[/* text */ 't', ` for it to terminate.
 `],
					[/* reference */ 'r', `java.Future#cancel(boolean)`],
					[/* text */ 't', `
 the CompleteableFuture does not affect the Process.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if the process is the current process`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new `],
				[/* inline code block */ 'i', `CompletableFuture<ProcessHandle>`],
				[/* text */ 't', ` for the ProcessHandle`]
			]
		]],
		[/* method */ 'allProcesses()', [
			[/* method description */
				[/* text */ 't', `Returns a snapshot of all processes visible to the current process.
 `],
				[/* block */ 'b', `Note that processes are created and terminate asynchronously. There
 is no guarantee that a process in the stream is alive or that no other
 processes may have been created since the inception of the snapshot.
 `]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager has been installed and
         it denies RuntimePermission("manageProcess")`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the implementation
         does not support this operation`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a Stream of ProcessHandles for all processes`]
			]
		]]
	],
]);
