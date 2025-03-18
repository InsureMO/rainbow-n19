import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.ThreadGroup', [
	[/* class description */
		[/* text */ 't', `A thread group represents a set of threads. In addition, a thread
 group can also include other thread groups. The thread groups form
 a tree in which every thread group except the initial thread group
 has a parent.
 `],
		[/* block */ 'b', `
 A thread is allowed to access information about its own thread
 group, but not to access information about its thread group's
 parent thread group or any other thread groups.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new thread group. The parent of this new group is
 the thread group of the currently running thread.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `checkAccess`],
					[/* text */ 't', ` method of the parent thread group is
 called with no arguments; this may result in a security exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the new thread group.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread cannot create a
               thread in the specified thread group.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.ThreadGroup,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new thread group. The parent of this new group is the
 specified thread group.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `checkAccess`],
					[/* text */ 't', ` method of the parent thread group is
 called with no arguments; this may result in a security exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'parent', [/* parameter description */
					[/* text */ 't', `the parent thread group.`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the new thread group.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the thread group argument is
               `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread cannot create a
               thread in the specified thread group.`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'allowThreadSuspension(boolean)', [
			[/* method description */
				[/* text */ 't', `Used by VM to control lowmem implicit suspension.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `boolean to allow or disallow suspension`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true on success`]
			]
		]],
		[/* method */ 'isDaemon()', [
			[/* method description */
				[/* text */ 't', `Tests if this thread group is a daemon thread group. A
 daemon thread group is automatically destroyed when its last
 thread is stopped or its last thread group is destroyed.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this thread group is a daemon thread group;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'parentOf(java.lang.ThreadGroup)', [
			[/* method description */
				[/* text */ 't', `Tests if this thread group is either the thread group
 argument or one of its ancestor thread groups.`]
			],
			[/* parameters */
				[/* parameter */ 'g', [/* parameter description */
					[/* text */ 't', `a thread group.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this thread group is the thread group
          argument or one of its ancestor thread groups;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'getMaxPriority()', [
			[/* method description */
				[/* text */ 't', `Returns the maximum priority of this thread group. Threads that are
 part of this group cannot have a higher priority than the maximum
 priority.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the maximum priority that a thread in this thread group
          can have.`]
			]
		]],
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of this thread group.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the name of this thread group.`]
			]
		]],
		[/* method */ 'getParent()', [
			[/* method description */
				[/* text */ 't', `Returns the parent of this thread group.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 First, if the parent is not `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, the
 `],
					[/* inline code block */ 'i', `checkAccess`],
					[/* text */ 't', ` method of the parent thread group is
 called with no arguments; this may result in a security exception.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread cannot modify
               this thread group.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the parent of this thread group. The top-level thread group
          is the only thread group whose parent is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'checkAccess()', [
			[/* method description */
				[/* text */ 't', `Determines if the currently running thread has permission to
 modify this thread group.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If there is a security manager, its `],
					[/* inline code block */ 'i', `checkAccess`],
					[/* text */ 't', ` method
 is called with this thread group as its argument. This may result
 in throwing a `],
					[/* inline code block */ 'i', `SecurityException`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread is not allowed to
               access this thread group.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'destroy()', [
			[/* method description */
				[/* text */ 't', `Destroys this thread group and all of its subgroups. This thread
 group must be empty, indicating that all threads that had been in
 this thread group have since stopped.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 First, the `],
					[/* inline code block */ 'i', `checkAccess`],
					[/* text */ 't', ` method of this thread group is
 called with no arguments; this may result in a security exception.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.IllegalThreadStateException', [/* throw description */
					[/* text */ 't', `if the thread group is not
               empty or if the thread group has already been destroyed.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread cannot modify this
               thread group.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'interrupt()', [
			[/* method description */
				[/* text */ 't', `Interrupts all threads in this thread group.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 First, the `],
					[/* inline code block */ 'i', `checkAccess`],
					[/* text */ 't', ` method of this thread group is
 called with no arguments; this may result in a security exception.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method then calls the `],
					[/* inline code block */ 'i', `interrupt`],
					[/* text */ 't', ` method on all the
 threads in this thread group and in all of its subgroups.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread is not allowed
               to access this thread group or any of the threads in
               the thread group.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'resume()', [
			[/* method description */
				[/* text */ 't', `Resumes all threads in this thread group.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 First, the `],
					[/* inline code block */ 'i', `checkAccess`],
					[/* text */ 't', ` method of this thread group is
 called with no arguments; this may result in a security exception.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method then calls the `],
					[/* inline code block */ 'i', `resume`],
					[/* text */ 't', ` method on all the
 threads in this thread group and in all of its sub groups.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread is not allowed to
               access this thread group or any of the threads in the
               thread group.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setDaemon(boolean)', [
			[/* method description */
				[/* text */ 't', `Changes the daemon status of this thread group.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 First, the `],
					[/* inline code block */ 'i', `checkAccess`],
					[/* text */ 't', ` method of this thread group is
 called with no arguments; this may result in a security exception.
 `]
				]],
				[/* block */ 'b', `
 A daemon thread group is automatically destroyed when its last
 thread is stopped or its last thread group is destroyed.`]
			],
			[/* parameters */
				[/* parameter */ 'daemon', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, marks this thread group as
                      a daemon thread group; otherwise, marks this
                      thread group as normal.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread cannot modify
               this thread group.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setMaxPriority(int)', [
			[/* method description */
				[/* text */ 't', `Sets the maximum priority of the group. Threads in the thread
 group that already have a higher priority are not affected.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 First, the `],
					[/* inline code block */ 'i', `checkAccess`],
					[/* text */ 't', ` method of this thread group is
 called with no arguments; this may result in a security exception.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the `],
					[/* inline code block */ 'i', `pri`],
					[/* text */ 't', ` argument is less than
 `],
					[/* reference */ 'r', `java.lang.Thread#MIN_PRIORITY`, `Thread.MIN_PRIORITY`],
					[/* text */ 't', ` or greater than
 `],
					[/* reference */ 'r', `java.lang.Thread#MAX_PRIORITY`, `Thread.MAX_PRIORITY`],
					[/* text */ 't', `, the maximum priority of the group
 remains unchanged.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Otherwise, the priority of this ThreadGroup object is set to the
 smaller of the specified `],
					[/* inline code block */ 'i', `pri`],
					[/* text */ 't', ` and the maximum permitted
 priority of the parent of this thread group. (If this thread group
 is the system thread group, which has no parent, then its maximum
 priority is simply set to `],
					[/* inline code block */ 'i', `pri`],
					[/* text */ 't', `.) Then this method is
 called recursively, with `],
					[/* inline code block */ 'i', `pri`],
					[/* text */ 't', ` as its argument, for
 every thread group that belongs to this thread group.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'pri', [/* parameter description */
					[/* text */ 't', `the new priority of the thread group.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread cannot modify
               this thread group.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'stop()', [
			[/* method description */
				[/* text */ 't', `Stops all threads in this thread group.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 First, the `],
					[/* inline code block */ 'i', `checkAccess`],
					[/* text */ 't', ` method of this thread group is
 called with no arguments; this may result in a security exception.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method then calls the `],
					[/* inline code block */ 'i', `stop`],
					[/* text */ 't', ` method on all the
 threads in this thread group and in all of its subgroups.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread is not allowed
               to access this thread group or any of the threads in
               the thread group.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'suspend()', [
			[/* method description */
				[/* text */ 't', `Suspends all threads in this thread group.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 First, the `],
					[/* inline code block */ 'i', `checkAccess`],
					[/* text */ 't', ` method of this thread group is
 called with no arguments; this may result in a security exception.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method then calls the `],
					[/* inline code block */ 'i', `suspend`],
					[/* text */ 't', ` method on all the
 threads in this thread group and in all of its subgroups.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread is not allowed
               to access this thread group or any of the threads in
               the thread group.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'activeCount()', [
			[/* method description */
				[/* text */ 't', `Returns an estimate of the number of active threads in this thread
 group and its subgroups. Recursively iterates over all subgroups in
 this thread group.

 `],
				[/* block */ 'b', ` The value returned is only an estimate because the number of
 threads may change dynamically while this method traverses internal
 data structures, and might be affected by the presence of certain
 system threads. This method is intended primarily for debugging
 and monitoring purposes.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an estimate of the number of active threads in this thread
          group and in any other thread group that has this thread
          group as an ancestor`]
			]
		]],
		[/* method */ 'activeGroupCount()', [
			[/* method description */
				[/* text */ 't', `Returns an estimate of the number of active groups in this
 thread group and its subgroups. Recursively iterates over
 all subgroups in this thread group.

 `],
				[/* block */ 'b', ` The value returned is only an estimate because the number of
 thread groups may change dynamically while this method traverses
 internal data structures. This method is intended primarily for
 debugging and monitoring purposes.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the number of active thread groups with this thread group as
          an ancestor`]
			]
		]],
		[/* method */ 'enumerate(java.lang.Thread[])', [
			[/* method description */
				[/* text */ 't', `Copies into the specified array every active thread in this
 thread group and its subgroups.

 `],
				[/* block */ 'b', ` An invocation of this method behaves in exactly the same
 way as the invocation

 `],
				[/* blockquote */ 'q', [
					[/* text */ 't', `
 `],
					[/* reference */ 'r', `#enumerate(java.lang.Thread%5B%5D,boolean)`, `enumerate`],
					[/* inline code block */ 'i', `(list, true)`],
					[/* text */ 't', `
 `]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'list', [/* parameter description */
					[/* text */ 't', `an array into which to put the list of threads`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if `],
					[/* reference */ 'r', `#checkAccess()`, `checkAccess`],
					[/* text */ 't', ` determines that
          the current thread cannot access this thread group`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of threads put into the array`]
			]
		]],
		[/* method */ 'enumerate(java.lang.Thread[],boolean)', [
			[/* method description */
				[/* text */ 't', `Copies into the specified array every active thread in this
 thread group. If `],
				[/* inline code block */ 'i', `recurse`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `,
 this method recursively enumerates all subgroups of this
 thread group and references to every active thread in these
 subgroups are also included. If the array is too short to
 hold all the threads, the extra threads are silently ignored.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An application might use the `],
					[/* reference */ 'r', `#activeCount()`, `activeCount`],
					[/* text */ 't', `
 method to get an estimate of how big the array should be, however
 `],
					[/* text */ 't', `if the array is too short to hold all the threads, the extra threads
 are silently ignored.`],
					[/* text */ 't', `  If it is critical to obtain every active
 thread in this thread group, the caller should verify that the returned
 int value is strictly less than the length of `],
					[/* inline code block */ 'i', `list`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` Due to the inherent race condition in this method, it is recommended
 that the method only be used for debugging and monitoring purposes.`]
			],
			[/* parameters */
				[/* parameter */ 'list', [/* parameter description */
					[/* text */ 't', `an array into which to put the list of threads`]
				]],
				[/* parameter */ 'recurse', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, recursively enumerate all subgroups of this
         thread group`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if `],
					[/* reference */ 'r', `#checkAccess()`, `checkAccess`],
					[/* text */ 't', ` determines that
          the current thread cannot access this thread group`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of threads put into the array`]
			]
		]],
		[/* method */ 'enumerate(java.lang.ThreadGroup[])', [
			[/* method description */
				[/* text */ 't', `Copies into the specified array references to every active
 subgroup in this thread group and its subgroups.

 `],
				[/* block */ 'b', ` An invocation of this method behaves in exactly the same
 way as the invocation

 `],
				[/* blockquote */ 'q', [
					[/* text */ 't', `
 `],
					[/* reference */ 'r', `#enumerate(java.lang.ThreadGroup%5B%5D,boolean)`, `enumerate`],
					[/* inline code block */ 'i', `(list, true)`],
					[/* text */ 't', `
 `]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'list', [/* parameter description */
					[/* text */ 't', `an array into which to put the list of thread groups`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if `],
					[/* reference */ 'r', `#checkAccess()`, `checkAccess`],
					[/* text */ 't', ` determines that
          the current thread cannot access this thread group`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of thread groups put into the array`]
			]
		]],
		[/* method */ 'enumerate(java.lang.ThreadGroup[],boolean)', [
			[/* method description */
				[/* text */ 't', `Copies into the specified array references to every active
 subgroup in this thread group. If `],
				[/* inline code block */ 'i', `recurse`],
				[/* text */ 't', ` is
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `, this method recursively enumerates all subgroups of this
 thread group and references to every active thread group in these
 subgroups are also included.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An application might use the
 `],
					[/* reference */ 'r', `#activeGroupCount()`, `activeGroupCount`],
					[/* text */ 't', ` method to
 get an estimate of how big the array should be, however `],
					[/* text */ 't', `if the
 array is too short to hold all the thread groups, the extra thread
 groups are silently ignored.`],
					[/* text */ 't', `  If it is critical to obtain every
 active subgroup in this thread group, the caller should verify that
 the returned int value is strictly less than the length of
 `],
					[/* inline code block */ 'i', `list`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` Due to the inherent race condition in this method, it is recommended
 that the method only be used for debugging and monitoring purposes.`]
			],
			[/* parameters */
				[/* parameter */ 'list', [/* parameter description */
					[/* text */ 't', `an array into which to put the list of thread groups`]
				]],
				[/* parameter */ 'recurse', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, recursively enumerate all subgroups`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if `],
					[/* reference */ 'r', `#checkAccess()`, `checkAccess`],
					[/* text */ 't', ` determines that
          the current thread cannot access this thread group`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of thread groups put into the array`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of this Thread group.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a string representation of this thread group.`]
			]
		]],
		[/* method */ 'isDestroyed()', [
			[/* method description */
				[/* text */ 't', `Tests if this thread group has been destroyed.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if this object is destroyed`]
			]
		]],
		[/* method */ 'list()', [
			[/* method description */
				[/* text */ 't', `Prints information about this thread group to the standard
 output. This method is useful only for debugging.`]
			],
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'uncaughtException(java.lang.Thread,java.lang.Throwable)', [
			[/* method description */
				[/* text */ 't', `Called by the Java Virtual Machine when a thread in this
 thread group stops because of an uncaught exception, and the thread
 does not have a specific `],
				[/* reference */ 'r', `java.lang.Thread.UncaughtExceptionHandler`, `Thread.UncaughtExceptionHandler`],
				[/* text */ 't', `
 installed.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `uncaughtException`],
					[/* text */ 't', ` method of
 `],
					[/* inline code block */ 'i', `ThreadGroup`],
					[/* text */ 't', ` does the following:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If this thread group has a parent thread group, the
     `],
						[/* inline code block */ 'i', `uncaughtException`],
						[/* text */ 't', ` method of that parent is called
     with the same two arguments.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Otherwise, this method checks to see if there is a
     `],
						[/* reference */ 'r', `java.lang.Thread#getDefaultUncaughtExceptionHandler()`, `default uncaught exception handler`],
						[/* text */ 't', ` installed, and if so, its
     `],
						[/* inline code block */ 'i', `uncaughtException`],
						[/* text */ 't', ` method is called with the same
     two arguments.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Otherwise, this method determines if the `],
						[/* inline code block */ 'i', `Throwable`],
						[/* text */ 't', `
     argument is an instance of `],
						[/* reference */ 'r', `java.lang.ThreadDeath`, `ThreadDeath`],
						[/* text */ 't', `. If so, nothing
     special is done. Otherwise, a message containing the
     thread's name, as returned from the thread's `],
						[/* reference */ 'r', `java.lang.Thread#getName()`, `getName`],
						[/* text */ 't', ` method, and a stack backtrace,
     using the `],
						[/* inline code block */ 'i', `Throwable`],
						[/* text */ 't', `'s `],
						[/* reference */ 'r', `java.lang.Throwable#printStackTrace()`, `printStackTrace`],
						[/* text */ 't', ` method, is
     printed to the `],
						[/* reference */ 'r', `java.lang.System#err`, `standard error stream`],
						[/* text */ 't', `.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Applications can override this method in subclasses of
 `],
					[/* inline code block */ 'i', `ThreadGroup`],
					[/* text */ 't', ` to provide alternative handling of
 uncaught exceptions.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 't', [/* parameter description */
					[/* text */ 't', `the thread that is about to exit.`]
				]],
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the uncaught exception.`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
