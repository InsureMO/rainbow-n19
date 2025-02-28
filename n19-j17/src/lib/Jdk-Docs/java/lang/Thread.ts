import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Thread', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* text */ 't', `thread`],
		[/* text */ 't', ` is a thread of execution in a program. The Java
 Virtual Machine allows an application to have multiple threads of
 execution running concurrently.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Every thread has a priority. Threads with higher priority are
 executed in preference to threads with lower priority. Each thread
 may or may not also be marked as a daemon. When code running in
 some thread creates a new `],
			[/* inline code block */ 'i', `Thread`],
			[/* text */ 't', ` object, the new
 thread has its priority initially set equal to the priority of the
 creating thread, and is a daemon thread if and only if the
 creating thread is a daemon.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 When a Java Virtual Machine starts up, there is usually a single
 non-daemon thread (which typically calls the method named
 `],
			[/* inline code block */ 'i', `main`],
			[/* text */ 't', ` of some designated class). The Java Virtual
 Machine continues to execute threads until either of the following
 occurs:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `exit`],
				[/* text */ 't', ` method of class `],
				[/* inline code block */ 'i', `Runtime`],
				[/* text */ 't', ` has been
     called and the security manager has permitted the exit operation
     to take place.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `All threads that are not daemon threads have died, either by
     returning from the call to the `],
				[/* inline code block */ 'i', `run`],
				[/* text */ 't', ` method or by
     throwing an exception that propagates beyond the `],
				[/* inline code block */ 'i', `run`],
				[/* text */ 't', `
     method.
 `]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 There are two ways to create a new thread of execution. One is to
 declare a class to be a subclass of `],
			[/* inline code block */ 'i', `Thread`],
			[/* text */ 't', `. This
 subclass should override the `],
			[/* inline code block */ 'i', `run`],
			[/* text */ 't', ` method of class
 `],
			[/* inline code block */ 'i', `Thread`],
			[/* text */ 't', `. An instance of the subclass can then be
 allocated and started. For example, a thread that computes primes
 larger than a stated value could be written as follows:
 `]
		]],
		[/* block */ 'b', `<hr>`],
		[/* block */ 'b', [
			[/* code block */ 'c', `     class PrimeThread extends Thread {
         long minPrime;
         PrimeThread(long minPrime) {
             this.minPrime = minPrime;
         }

         public void run() {
             // compute primes larger than minPrime
             &nbsp;.&nbsp;.&nbsp;.
         }
     }
 `]
		]],
		[/* block */ 'b', `<hr>`],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 The following code would then create a thread and start it running:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', `     PrimeThread p = new PrimeThread(143);
     p.start();
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 The other way to create a thread is to declare a class that
 implements the `],
			[/* inline code block */ 'i', `Runnable`],
			[/* text */ 't', ` interface. That class then
 implements the `],
			[/* inline code block */ 'i', `run`],
			[/* text */ 't', ` method. An instance of the class can
 then be allocated, passed as an argument when creating
 `],
			[/* inline code block */ 'i', `Thread`],
			[/* text */ 't', `, and started. The same example in this other
 style looks like the following:
 `]
		]],
		[/* block */ 'b', `<hr>`],
		[/* block */ 'b', [
			[/* code block */ 'c', `     class PrimeRun implements Runnable {
         long minPrime;
         PrimeRun(long minPrime) {
             this.minPrime = minPrime;
         }

         public void run() {
             // compute primes larger than minPrime
             &nbsp;.&nbsp;.&nbsp;.
         }
     }
 `]
		]],
		[/* block */ 'b', `<hr>`],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 The following code would then create a thread and start it running:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', `     PrimeRun p = new PrimeRun(143);
     new Thread(p).start();
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 Every thread has a name for identification purposes. More than
 one thread may have the same name. If a name is not specified when
 a thread is created, a new name is generated for it.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Unless otherwise noted, passing a `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` argument to a constructor
 or method in this class will cause a `],
			[/* reference */ 'r', `java.lang.NullPointerException`],
			[/* text */ 't', ` to be
 thrown.`]
		]]
	],
	[/* fields */
		[/* field */ 'MIN_PRIORITY', [
			[/* field description */
				[/* text */ 't', `The minimum priority that a thread can have.`]
			],
		]],
		[/* field */ 'NORM_PRIORITY', [
			[/* field description */
				[/* text */ 't', `The default priority that is assigned to a thread.`]
			],
		]],
		[/* field */ 'MAX_PRIORITY', [
			[/* field description */
				[/* text */ 't', `The maximum priority that a thread can have.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.lang.ThreadGroup,java.lang.Runnable)', [
			[/* constructor description */
				[/* text */ 't', `Allocates a new `],
				[/* inline code block */ 'i', `Thread`],
				[/* text */ 't', ` object. This constructor has the same
 effect as `],
				[/* reference */ 'r', `Thread`],
				[/* inline code block */ 'i', `(group, target, gname)`],
				[/* text */ 't', ` ,where `],
				[/* inline code block */ 'i', `gname`],
				[/* text */ 't', ` is a newly generated
 name. Automatically generated names are of the form
 `],
				[/* inline code block */ 'i', `"Thread-"+`],
				[/* text */ 't', `n`],
				[/* text */ 't', `, where `],
				[/* text */ 't', `n`],
				[/* text */ 't', ` is an integer.`]
			],
			[/* parameters */
				[/* parameter */ 'group', [/* parameter description */
					[/* text */ 't', `the thread group. If `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` and there is a security
         manager, the group is determined by `],
					[/* external link */ 'a', `SecurityManager.html#getThreadGroup()`, `SecurityManager.getThreadGroup()`],
					[/* text */ 't', `.
         If there is not a security manager or `],
					[/* inline code block */ 'i', `SecurityManager.getThreadGroup()`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, the group
         is set to the current thread's thread group.`]
				]],
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the object whose `],
					[/* inline code block */ 'i', `run`],
					[/* text */ 't', ` method is invoked when this thread
         is started. If `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, this thread's run method is invoked.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread cannot create a thread in the specified
          thread group`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Allocates a new `],
				[/* inline code block */ 'i', `Thread`],
				[/* text */ 't', ` object. This constructor has the same
 effect as `],
				[/* reference */ 'r', `Thread`],
				[/* inline code block */ 'i', `(null, null, name)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the new thread`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.ThreadGroup,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Allocates a new `],
				[/* inline code block */ 'i', `Thread`],
				[/* text */ 't', ` object. This constructor has the same
 effect as `],
				[/* reference */ 'r', `Thread`],
				[/* inline code block */ 'i', `(group, null, name)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'group', [/* parameter description */
					[/* text */ 't', `the thread group. If `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` and there is a security
         manager, the group is determined by `],
					[/* external link */ 'a', `SecurityManager.html#getThreadGroup()`, `SecurityManager.getThreadGroup()`],
					[/* text */ 't', `.
         If there is not a security manager or `],
					[/* inline code block */ 'i', `SecurityManager.getThreadGroup()`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, the group
         is set to the current thread's thread group.`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the new thread`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread cannot create a thread in the specified
          thread group`]
				]]
			]
		]],
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Allocates a new `],
				[/* inline code block */ 'i', `Thread`],
				[/* text */ 't', ` object. This constructor has the same
 effect as `],
				[/* reference */ 'r', `Thread`],
				[/* inline code block */ 'i', `(null, null, gname)`],
				[/* text */ 't', `, where `],
				[/* inline code block */ 'i', `gname`],
				[/* text */ 't', ` is a newly generated
 name. Automatically generated names are of the form
 `],
				[/* inline code block */ 'i', `"Thread-"+`],
				[/* text */ 't', `n`],
				[/* text */ 't', `, where `],
				[/* text */ 't', `n`],
				[/* text */ 't', ` is an integer.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Runnable)', [
			[/* constructor description */
				[/* text */ 't', `Allocates a new `],
				[/* inline code block */ 'i', `Thread`],
				[/* text */ 't', ` object. This constructor has the same
 effect as `],
				[/* reference */ 'r', `Thread`],
				[/* inline code block */ 'i', `(null, target, gname)`],
				[/* text */ 't', `, where `],
				[/* inline code block */ 'i', `gname`],
				[/* text */ 't', ` is a newly generated
 name. Automatically generated names are of the form
 `],
				[/* inline code block */ 'i', `"Thread-"+`],
				[/* text */ 't', `n`],
				[/* text */ 't', `, where `],
				[/* text */ 't', `n`],
				[/* text */ 't', ` is an integer.`]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the object whose `],
					[/* inline code block */ 'i', `run`],
					[/* text */ 't', ` method is invoked when this thread
         is started. If `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, this classes `],
					[/* inline code block */ 'i', `run`],
					[/* text */ 't', ` method does
         nothing.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.ThreadGroup,java.lang.Runnable,java.lang.String,long,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Allocates a new `],
				[/* inline code block */ 'i', `Thread`],
				[/* text */ 't', ` object so that it has `],
				[/* inline code block */ 'i', `target`],
				[/* text */ 't', `
 as its run object, has the specified `],
				[/* inline code block */ 'i', `name`],
				[/* text */ 't', ` as its name,
 belongs to the thread group referred to by `],
				[/* inline code block */ 'i', `group`],
				[/* text */ 't', `, has
 the specified `],
				[/* inline code block */ 'i', `stackSize`],
				[/* text */ 't', `, and inherits initial values for
 `],
				[/* reference */ 'r', `java.lang.InheritableThreadLocal`],
				[/* text */ 't', ` variables
 if `],
				[/* inline code block */ 'i', `inheritThreadLocals`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This constructor is identical to `],
					[/* reference */ 'r', `Thread(ThreadGroup,Runnable,String,long)`],
					[/* text */ 't', ` with the added ability to
 suppress, or not, the inheriting of initial values for inheritable
 thread-local variables from the constructing thread. This allows for
 finer grain control over inheritable thread-locals. Care must be taken
 when passing a value of `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` for `],
					[/* inline code block */ 'i', `inheritThreadLocals`],
					[/* text */ 't', `,
 as it may lead to unexpected behavior if the new thread executes code
 that expects a specific thread-local value to be inherited.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Specifying a value of `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` for the `],
					[/* inline code block */ 'i', `inheritThreadLocals`],
					[/* text */ 't', `
 parameter will cause this constructor to behave exactly like the
 `],
					[/* inline code block */ 'i', `Thread(ThreadGroup, Runnable, String, long)`],
					[/* text */ 't', ` constructor.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'group', [/* parameter description */
					[/* text */ 't', `the thread group. If `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` and there is a security
         manager, the group is determined by `],
					[/* external link */ 'a', `SecurityManager.html#getThreadGroup()`, `SecurityManager.getThreadGroup()`],
					[/* text */ 't', `.
         If there is not a security manager or `],
					[/* inline code block */ 'i', `SecurityManager.getThreadGroup()`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, the group
         is set to the current thread's thread group.`]
				]],
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the object whose `],
					[/* inline code block */ 'i', `run`],
					[/* text */ 't', ` method is invoked when this thread
         is started. If `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, this thread's run method is invoked.`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the new thread`]
				]],
				[/* parameter */ 'stackSize', [/* parameter description */
					[/* text */ 't', `the desired stack size for the new thread, or zero to indicate
         that this parameter is to be ignored`]
				]],
				[/* parameter */ 'inheritThreadLocals', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, inherit initial values for inheritable
         thread-locals from the constructing thread, otherwise no initial
         values are inherited`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread cannot create a thread in the specified
          thread group`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.ThreadGroup,java.lang.Runnable,java.lang.String,long)', [
			[/* constructor description */
				[/* text */ 't', `Allocates a new `],
				[/* inline code block */ 'i', `Thread`],
				[/* text */ 't', ` object so that it has `],
				[/* inline code block */ 'i', `target`],
				[/* text */ 't', `
 as its run object, has the specified `],
				[/* inline code block */ 'i', `name`],
				[/* text */ 't', ` as its name,
 and belongs to the thread group referred to by `],
				[/* inline code block */ 'i', `group`],
				[/* text */ 't', `, and has
 the specified `],
				[/* text */ 't', `stack size`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This constructor is identical to `],
					[/* reference */ 'r', `Thread(ThreadGroup,Runnable,String)`],
					[/* text */ 't', ` with the exception of the fact
 that it allows the thread stack size to be specified.  The stack size
 is the approximate number of bytes of address space that the virtual
 machine is to allocate for this thread's stack.  `],
					[/* inline code block */ 'i', `stackSize`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `On some platforms, specifying a higher value for the
 `],
					[/* inline code block */ 'i', `stackSize`],
					[/* text */ 't', ` parameter may allow a thread to achieve greater
 recursion depth before throwing a `],
					[/* reference */ 'r', `java.lang.StackOverflowError`],
					[/* text */ 't', `.
 Similarly, specifying a lower value may allow a greater number of
 threads to exist concurrently without throwing an `],
					[/* reference */ 'r', `java.lang.OutOfMemoryError`],
					[/* text */ 't', ` (or other internal error).  The details of
 the relationship between the value of the `],
					[/* inline code block */ 'i', `stackSize`],
					[/* text */ 't', ` parameter
 and the maximum recursion depth and concurrency level are
 platform-dependent.  `],
					[/* inline code block */ 'i', `stackSize`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The virtual machine is free to treat the `],
					[/* inline code block */ 'i', `stackSize`],
					[/* text */ 't', `
 parameter as a suggestion.  If the specified value is unreasonably low
 for the platform, the virtual machine may instead use some
 platform-specific minimum value; if the specified value is unreasonably
 high, the virtual machine may instead use some platform-specific
 maximum.  Likewise, the virtual machine is free to round the specified
 value up or down as it sees fit (or to ignore it completely).

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Specifying a value of zero for the `],
					[/* inline code block */ 'i', `stackSize`],
					[/* text */ 't', ` parameter will
 cause this constructor to behave exactly like the
 `],
					[/* inline code block */ 'i', `Thread(ThreadGroup, Runnable, String)`],
					[/* text */ 't', ` constructor.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Due to the platform-dependent nature of the behavior of this
 constructor, extreme care should be exercised in its use.
 The thread stack size necessary to perform a given computation will
 likely vary from one JRE implementation to another.  In light of this
 variation, careful tuning of the stack size parameter may be required,
 and the tuning may need to be repeated for each JRE implementation on
 which an application is to run.`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Implementation note: Java platform implementers are encouraged to
 document their implementation's behavior with respect to the
 `],
					[/* inline code block */ 'i', `stackSize`],
					[/* text */ 't', ` parameter.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'group', [/* parameter description */
					[/* text */ 't', `the thread group. If `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` and there is a security
         manager, the group is determined by `],
					[/* external link */ 'a', `SecurityManager.html#getThreadGroup()`, `SecurityManager.getThreadGroup()`],
					[/* text */ 't', `.
         If there is not a security manager or `],
					[/* inline code block */ 'i', `SecurityManager.getThreadGroup()`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, the group
         is set to the current thread's thread group.`]
				]],
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the object whose `],
					[/* inline code block */ 'i', `run`],
					[/* text */ 't', ` method is invoked when this thread
         is started. If `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, this thread's run method is invoked.`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the new thread`]
				]],
				[/* parameter */ 'stackSize', [/* parameter description */
					[/* text */ 't', `the desired stack size for the new thread, or zero to indicate
         that this parameter is to be ignored.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread cannot create a thread in the specified
          thread group`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.ThreadGroup,java.lang.Runnable,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Allocates a new `],
				[/* inline code block */ 'i', `Thread`],
				[/* text */ 't', ` object so that it has `],
				[/* inline code block */ 'i', `target`],
				[/* text */ 't', `
 as its run object, has the specified `],
				[/* inline code block */ 'i', `name`],
				[/* text */ 't', ` as its name,
 and belongs to the thread group referred to by `],
				[/* inline code block */ 'i', `group`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If there is a security manager, its
 `],
					[/* external link */ 'a', `SecurityManager.html#checkAccess(java.lang.ThreadGroup)`, `checkAccess`],
					[/* text */ 't', `
 method is invoked with the ThreadGroup as its argument.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `In addition, its `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method is invoked with
 the `],
					[/* inline code block */ 'i', `RuntimePermission("enableContextClassLoaderOverride")`],
					[/* text */ 't', `
 permission when invoked directly or indirectly by the constructor
 of a subclass which overrides the `],
					[/* inline code block */ 'i', `getContextClassLoader`],
					[/* text */ 't', `
 or `],
					[/* inline code block */ 'i', `setContextClassLoader`],
					[/* text */ 't', ` methods.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The priority of the newly created thread is set equal to the
 priority of the thread creating it, that is, the currently running
 thread. The method `],
					[/* reference */ 'r', `setPriority`],
					[/* text */ 't', ` may be
 used to change the priority to a new value.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The newly created thread is initially marked as being a daemon
 thread if and only if the thread creating it is currently marked
 as a daemon thread. The method `],
					[/* reference */ 'r', `setDaemon`],
					[/* text */ 't', `
 may be used to change whether or not a thread is a daemon.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'group', [/* parameter description */
					[/* text */ 't', `the thread group. If `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` and there is a security
         manager, the group is determined by `],
					[/* external link */ 'a', `SecurityManager.html#getThreadGroup()`, `SecurityManager.getThreadGroup()`],
					[/* text */ 't', `.
         If there is not a security manager or `],
					[/* inline code block */ 'i', `SecurityManager.getThreadGroup()`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, the group
         is set to the current thread's thread group.`]
				]],
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the object whose `],
					[/* inline code block */ 'i', `run`],
					[/* text */ 't', ` method is invoked when this thread
         is started. If `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, this thread's run method is invoked.`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the new thread`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread cannot create a thread in the specified
          thread group or cannot override the context class loader methods.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.Runnable,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Allocates a new `],
				[/* inline code block */ 'i', `Thread`],
				[/* text */ 't', ` object. This constructor has the same
 effect as `],
				[/* reference */ 'r', `Thread`],
				[/* inline code block */ 'i', `(null, target, name)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the object whose `],
					[/* inline code block */ 'i', `run`],
					[/* text */ 't', ` method is invoked when this thread
         is started. If `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, this thread's run method is invoked.`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the new thread`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Returns this thread's name.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this thread's name.`]
			]
		]],
		[/* method */ 'run()', [
			[/* method description */
				[/* text */ 't', `If this thread was constructed using a separate
 `],
				[/* inline code block */ 'i', `Runnable`],
				[/* text */ 't', ` run object, then that
 `],
				[/* inline code block */ 'i', `Runnable`],
				[/* text */ 't', ` object's `],
				[/* inline code block */ 'i', `run`],
				[/* text */ 't', ` method is called;
 otherwise, this method does nothing and returns.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Subclasses of `],
					[/* inline code block */ 'i', `Thread`],
					[/* text */ 't', ` should override this method.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of this thread, including the
 thread's name, priority, and thread group.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this thread.`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Throws CloneNotSupportedException as a Thread can not be meaningfully
 cloned. Construct a new Thread instead.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.CloneNotSupportedException', [/* throw description */
					[/* text */ 't', `always`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a clone of this instance.`]
			]
		]],
		[/* method */ 'currentThread()', [
			[/* method description */
				[/* text */ 't', `Returns a reference to the currently executing thread object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the currently executing thread.`]
			]
		]],
		[/* method */ 'onSpinWait()', [
			[/* method description */
				[/* text */ 't', `Indicates that the caller is momentarily unable to progress, until the
 occurrence of one or more actions on the part of other activities. By
 invoking this method within each iteration of a spin-wait loop construct,
 the calling thread indicates to the runtime that it is busy-waiting.
 The runtime may take action to improve the performance of invoking
 spin-wait loop constructions.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'join()', [
			[/* method description */
				[/* text */ 't', `Waits for this thread to die.

 `],
				[/* block */ 'b', ` An invocation of this method behaves in exactly the same
 way as the invocation

 `],
				[/* block */ 'b', [
					[/* reference */ 'r', `join`],
					[/* inline code block */ 'i', `(0)`]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `if any thread has interrupted the current thread. The
          `],
					[/* text */ 't', `interrupted status`],
					[/* text */ 't', ` of the current thread is
          cleared when this exception is thrown.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'join(long,int)', [
			[/* method description */
				[/* text */ 't', `Waits at most `],
				[/* inline code block */ 'i', `millis`],
				[/* text */ 't', ` milliseconds plus
 `],
				[/* inline code block */ 'i', `nanos`],
				[/* text */ 't', ` nanoseconds for this thread to die.
 If both arguments are `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `, it means to wait forever.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This implementation uses a loop of `],
					[/* inline code block */ 'i', `this.wait`],
					[/* text */ 't', ` calls
 conditioned on `],
					[/* inline code block */ 'i', `this.isAlive`],
					[/* text */ 't', `. As a thread terminates the
 `],
					[/* inline code block */ 'i', `this.notifyAll`],
					[/* text */ 't', ` method is invoked. It is recommended that
 applications not use `],
					[/* inline code block */ 'i', `wait`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `notify`],
					[/* text */ 't', `, or
 `],
					[/* inline code block */ 'i', `notifyAll`],
					[/* text */ 't', ` on `],
					[/* inline code block */ 'i', `Thread`],
					[/* text */ 't', ` instances.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'millis', [/* parameter description */
					[/* text */ 't', `the time to wait in milliseconds`]
				]],
				[/* parameter */ 'nanos', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `0-999999`],
					[/* text */ 't', ` additional nanoseconds to wait`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the value of `],
					[/* inline code block */ 'i', `millis`],
					[/* text */ 't', ` is negative, or the value
          of `],
					[/* inline code block */ 'i', `nanos`],
					[/* text */ 't', ` is not in the range `],
					[/* inline code block */ 'i', `0-999999`]
				]],
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `if any thread has interrupted the current thread. The
          `],
					[/* text */ 't', `interrupted status`],
					[/* text */ 't', ` of the current thread is
          cleared when this exception is thrown.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'join(long)', [
			[/* method description */
				[/* text */ 't', `Waits at most `],
				[/* inline code block */ 'i', `millis`],
				[/* text */ 't', ` milliseconds for this thread to
 die. A timeout of `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` means to wait forever.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This implementation uses a loop of `],
					[/* inline code block */ 'i', `this.wait`],
					[/* text */ 't', ` calls
 conditioned on `],
					[/* inline code block */ 'i', `this.isAlive`],
					[/* text */ 't', `. As a thread terminates the
 `],
					[/* inline code block */ 'i', `this.notifyAll`],
					[/* text */ 't', ` method is invoked. It is recommended that
 applications not use `],
					[/* inline code block */ 'i', `wait`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `notify`],
					[/* text */ 't', `, or
 `],
					[/* inline code block */ 'i', `notifyAll`],
					[/* text */ 't', ` on `],
					[/* inline code block */ 'i', `Thread`],
					[/* text */ 't', ` instances.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'millis', [/* parameter description */
					[/* text */ 't', `the time to wait in milliseconds`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the value of `],
					[/* inline code block */ 'i', `millis`],
					[/* text */ 't', ` is negative`]
				]],
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `if any thread has interrupted the current thread. The
          `],
					[/* text */ 't', `interrupted status`],
					[/* text */ 't', ` of the current thread is
          cleared when this exception is thrown.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'start()', [
			[/* method description */
				[/* text */ 't', `Causes this thread to begin execution; the Java Virtual Machine
 calls the `],
				[/* inline code block */ 'i', `run`],
				[/* text */ 't', ` method of this thread.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The result is that two threads are running concurrently: the
 current thread (which returns from the call to the
 `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` method) and the other thread (which executes its
 `],
					[/* inline code block */ 'i', `run`],
					[/* text */ 't', ` method).
 `]
				]],
				[/* block */ 'b', `
 It is never legal to start a thread more than once.
 In particular, a thread may not be restarted once it has completed
 execution.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalThreadStateException', [/* throw description */
					[/* text */ 't', `if the thread was already started.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'getThreadGroup()', [
			[/* method description */
				[/* text */ 't', `Returns the thread group to which this thread belongs.
 This method returns null if this thread has died
 (been stopped).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this thread's thread group.`]
			]
		]],
		[/* method */ 'setContextClassLoader(java.lang.ClassLoader)', [
			[/* method description */
				[/* text */ 't', `Sets the context ClassLoader for this Thread. The context
 ClassLoader can be set when a thread is created, and allows
 the creator of the thread to provide the appropriate class loader,
 through `],
				[/* inline code block */ 'i', `getContextClassLoader`],
				[/* text */ 't', `, to code running in the thread
 when loading classes and resources.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If a security manager is present, its `],
					[/* external link */ 'a', `SecurityManager.html#checkPermission(java.security.Permission)`, `checkPermission`],
					[/* text */ 't', `
 method is invoked with a `],
					[/* reference */ 'r', `java.lang.RuntimePermission`],
					[/* inline code block */ 'i', `("setContextClassLoader")`],
					[/* text */ 't', ` permission to see if setting the context
 ClassLoader is permitted.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'cl', [/* parameter description */
					[/* text */ 't', `the context ClassLoader for this Thread, or null  indicating the
         system class loader (or, failing that, the bootstrap class loader)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread cannot set the context ClassLoader`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'holdsLock(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the current thread holds the
 monitor lock on the specified object.

 `],
				[/* block */ 'b', `This method is designed to allow a program to assert that
 the current thread already holds a specified lock:
 `],
				[/* code block */ 'c', `     assert Thread.holdsLock(obj);
 `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object on which to test lock ownership`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if obj is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the current thread holds the monitor lock on
         the specified object.`]
			]
		]],
		[/* method */ 'getStackTrace()', [
			[/* method description */
				[/* text */ 't', `Returns an array of stack trace elements representing the stack dump
 of this thread.  This method will return a zero-length array if
 this thread has not started, has started but has not yet been
 scheduled to run by the system, or has terminated.
 If the returned array is of non-zero length then the first element of
 the array represents the top of the stack, which is the most recent
 method invocation in the sequence.  The last element of the array
 represents the bottom of the stack, which is the least recent method
 invocation in the sequence.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If there is a security manager, and this thread is not
 the current thread, then the security manager's
 `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method is called with a
 `],
					[/* inline code block */ 'i', `RuntimePermission("getStackTrace")`],
					[/* text */ 't', ` permission
 to see if it's ok to get the stack trace.

 `]
				]],
				[/* block */ 'b', `Some virtual machines may, under some circumstances, omit one
 or more stack frames from the stack trace.  In the extreme case,
 a virtual machine that has no stack trace information concerning
 this thread is permitted to return a zero-length array from this
 method.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
        `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method doesn't allow
        getting the stack trace of thread.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an array of `],
				[/* inline code block */ 'i', `StackTraceElement`],
				[/* text */ 't', `,
 each represents one stack frame.`]
			]
		]],
		[/* method */ 'checkAccess()', [
			[/* method description */
				[/* text */ 't', `Determines if the currently running thread has permission to
 modify this thread.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If there is a security manager, its `],
					[/* inline code block */ 'i', `checkAccess`],
					[/* text */ 't', ` method
 is called with this thread as its argument. This may result in
 throwing a `],
					[/* inline code block */ 'i', `SecurityException`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread is not allowed to
          access this thread.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'dumpStack()', [
			[/* method description */
				[/* text */ 't', `Prints a stack trace of the current thread to the standard error stream.
 This method is used only for debugging.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setPriority(int)', [
			[/* method description */
				[/* text */ 't', `Changes the priority of this thread.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 First the `],
					[/* inline code block */ 'i', `checkAccess`],
					[/* text */ 't', ` method of this thread is called
 with no arguments. This may result in throwing a `],
					[/* inline code block */ 'i', `SecurityException`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Otherwise, the priority of this thread is set to the smaller of
 the specified `],
					[/* inline code block */ 'i', `newPriority`],
					[/* text */ 't', ` and the maximum permitted
 priority of the thread's thread group.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'newPriority', [/* parameter description */
					[/* text */ 't', `priority to set this thread to`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the priority is not in the
               range `],
					[/* inline code block */ 'i', `MIN_PRIORITY`],
					[/* text */ 't', ` to
               `],
					[/* inline code block */ 'i', `MAX_PRIORITY`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread cannot modify
               this thread.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setDaemon(boolean)', [
			[/* method description */
				[/* text */ 't', `Marks this thread as either a `],
				[/* reference */ 'r', `daemon`],
				[/* text */ 't', ` thread
 or a user thread. The Java Virtual Machine exits when the only
 threads running are all daemon threads.

 `],
				[/* block */ 'b', ` This method must be invoked before the thread is started.`]
			],
			[/* parameters */
				[/* parameter */ 'on', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, marks this thread as a daemon thread`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalThreadStateException', [/* throw description */
					[/* text */ 't', `if this thread is `],
					[/* reference */ 'r', `alive`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if `],
					[/* reference */ 'r', `checkAccess()`],
					[/* text */ 't', ` determines that the current
          thread cannot modify this thread`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'sleep(long)', [
			[/* method description */
				[/* text */ 't', `Causes the currently executing thread to sleep (temporarily cease
 execution) for the specified number of milliseconds, subject to
 the precision and accuracy of system timers and schedulers. The thread
 does not lose ownership of any monitors.`]
			],
			[/* parameters */
				[/* parameter */ 'millis', [/* parameter description */
					[/* text */ 't', `the length of time to sleep in milliseconds`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the value of `],
					[/* inline code block */ 'i', `millis`],
					[/* text */ 't', ` is negative`]
				]],
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `if any thread has interrupted the current thread. The
          `],
					[/* text */ 't', `interrupted status`],
					[/* text */ 't', ` of the current thread is
          cleared when this exception is thrown.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'sleep(long,int)', [
			[/* method description */
				[/* text */ 't', `Causes the currently executing thread to sleep (temporarily cease
 execution) for the specified number of milliseconds plus the specified
 number of nanoseconds, subject to the precision and accuracy of system
 timers and schedulers. The thread does not lose ownership of any
 monitors.`]
			],
			[/* parameters */
				[/* parameter */ 'millis', [/* parameter description */
					[/* text */ 't', `the length of time to sleep in milliseconds`]
				]],
				[/* parameter */ 'nanos', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `0-999999`],
					[/* text */ 't', ` additional nanoseconds to sleep`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the value of `],
					[/* inline code block */ 'i', `millis`],
					[/* text */ 't', ` is negative, or the value of
          `],
					[/* inline code block */ 'i', `nanos`],
					[/* text */ 't', ` is not in the range `],
					[/* inline code block */ 'i', `0-999999`]
				]],
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `if any thread has interrupted the current thread. The
          `],
					[/* text */ 't', `interrupted status`],
					[/* text */ 't', ` of the current thread is
          cleared when this exception is thrown.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'isDaemon()', [
			[/* method description */
				[/* text */ 't', `Tests if this thread is a daemon thread.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this thread is a daemon thread;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'getPriority()', [
			[/* method description */
				[/* text */ 't', `Returns this thread's priority.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this thread's priority.`]
			]
		]],
		[/* method */ 'getContextClassLoader()', [
			[/* method description */
				[/* text */ 't', `Returns the context `],
				[/* inline code block */ 'i', `ClassLoader`],
				[/* text */ 't', ` for this thread. The context
 `],
				[/* inline code block */ 'i', `ClassLoader`],
				[/* text */ 't', ` is provided by the creator of the thread for use
 by code running in this thread when loading classes and resources.
 If not `],
				[/* reference */ 'r', `set`],
				[/* text */ 't', `, the default is the
 `],
				[/* inline code block */ 'i', `ClassLoader`],
				[/* text */ 't', ` context of the parent thread. The context
 `],
				[/* inline code block */ 'i', `ClassLoader`],
				[/* text */ 't', ` of the
 primordial thread is typically set to the class loader used to load the
 application.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is present, and the caller's class loader
          is not `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` and is not the same as or an ancestor of the
          context class loader, and the caller does not have the
          `],
					[/* reference */ 'r', `java.lang.RuntimePermission`],
					[/* inline code block */ 'i', `("getClassLoader")`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the context `],
				[/* inline code block */ 'i', `ClassLoader`],
				[/* text */ 't', ` for this thread, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
          indicating the system class loader (or, failing that, the
          bootstrap class loader)`]
			]
		]],
		[/* method */ 'resume()', [
			[/* method description */
				[/* text */ 't', `Resumes a suspended thread.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 First, the `],
					[/* inline code block */ 'i', `checkAccess`],
					[/* text */ 't', ` method of this thread is called
 with no arguments. This may result in throwing a
 `],
					[/* inline code block */ 'i', `SecurityException`],
					[/* text */ 't', ` (in the current thread).
 `]
				]],
				[/* block */ 'b', `
 If the thread is alive but suspended, it is resumed and is
 permitted to make progress in its execution.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread cannot modify this
             thread.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'interrupted()', [
			[/* method description */
				[/* text */ 't', `Tests whether the current thread has been interrupted.  The
 `],
				[/* text */ 't', `interrupted status`],
				[/* text */ 't', ` of the thread is cleared by this method.  In
 other words, if this method were to be called twice in succession, the
 second call would return false (unless the current thread were
 interrupted again, after the first call had cleared its interrupted
 status and before the second call had examined it).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the current thread has been interrupted;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'interrupt()', [
			[/* method description */
				[/* text */ 't', `Interrupts this thread.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Unless the current thread is interrupting itself, which is
 always permitted, the `],
					[/* reference */ 'r', `checkAccess`],
					[/* text */ 't', ` method
 of this thread is invoked, which may cause a `],
					[/* reference */ 'r', `java.lang.SecurityException`],
					[/* text */ 't', ` to be thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If this thread is blocked in an invocation of the `],
					[/* external link */ 'a', `Object.html#wait()`, `wait()`],
					[/* text */ 't', `, `],
					[/* external link */ 'a', `Object.html#wait(long)`, `wait(long)`],
					[/* text */ 't', `, or `],
					[/* external link */ 'a', `Object.html#wait(long,int)`, `wait(long, int)`],
					[/* text */ 't', ` methods of the `],
					[/* reference */ 'r', `java.lang.Object`],
					[/* text */ 't', `
 class, or of the `],
					[/* reference */ 'r', `join()`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `join(long)`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `join(long, int)`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `sleep(long)`],
					[/* text */ 't', `, or `],
					[/* reference */ 'r', `sleep(long, int)`],
					[/* text */ 't', `
 methods of this class, then its interrupt status will be cleared and it
 will receive an `],
					[/* reference */ 'r', `java.lang.InterruptedException`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If this thread is blocked in an I/O operation upon an `],
					[/* reference */ 'r', `java.nio.channels.InterruptibleChannel`],
					[/* text */ 't', `
 then the channel will be closed, the thread's interrupt
 status will be set, and the thread will receive a `],
					[/* reference */ 'r', `java.nio.channels.ClosedByInterruptException`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If this thread is blocked in a `],
					[/* reference */ 'r', `java.nio.channels.Selector`],
					[/* text */ 't', `
 then the thread's interrupt status will be set and it will return
 immediately from the selection operation, possibly with a non-zero
 value, just as if the selector's `],
					[/* external link */ 'a', `../nio/channels/Selector.html#wakeup()`, `wakeup`],
					[/* text */ 't', ` method were invoked.

 `]
				]],
				[/* block */ 'b', ` If none of the previous conditions hold then this thread's interrupt
 status will be set. `],
				[/* block */ 'b', ` Interrupting a thread that is not alive need not have any effect.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread cannot modify this thread`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'activeCount()', [
			[/* method description */
				[/* text */ 't', `Returns an estimate of the number of active threads in the current
 thread's `],
				[/* reference */ 'r', `java.lang.ThreadGroup`],
				[/* text */ 't', ` and its
 subgroups. Recursively iterates over all subgroups in the current
 thread's thread group.

 `],
				[/* block */ 'b', ` The value returned is only an estimate because the number of
 threads may change dynamically while this method traverses internal
 data structures, and might be affected by the presence of certain
 system threads. This method is intended primarily for debugging
 and monitoring purposes.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an estimate of the number of active threads in the current
          thread's thread group and in any other thread group that
          has the current thread's thread group as an ancestor`]
			]
		]],
		[/* method */ 'enumerate(java.lang.Thread[])', [
			[/* method description */
				[/* text */ 't', `Copies into the specified array every active thread in the current
 thread's thread group and its subgroups. This method simply
 invokes the `],
				[/* external link */ 'a', `ThreadGroup.html#enumerate(java.lang.Thread%5B%5D)`, `ThreadGroup.enumerate(Thread[])`],
				[/* text */ 't', `
 method of the current thread's thread group.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An application might use the `],
					[/* reference */ 'r', `activeCount`],
					[/* text */ 't', `
 method to get an estimate of how big the array should be, however
 `],
					[/* text */ 't', `if the array is too short to hold all the threads, the extra threads
 are silently ignored.`],
					[/* text */ 't', `  If it is critical to obtain every active
 thread in the current thread's thread group and its subgroups, the
 invoker should verify that the returned int value is strictly less
 than the length of `],
					[/* inline code block */ 'i', `tarray`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` Due to the inherent race condition in this method, it is recommended
 that the method only be used for debugging and monitoring purposes.`]
			],
			[/* parameters */
				[/* parameter */ 'tarray', [/* parameter description */
					[/* text */ 't', `an array into which to put the list of threads`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if `],
					[/* external link */ 'a', `ThreadGroup.html#checkAccess()`, `ThreadGroup.checkAccess()`],
					[/* text */ 't', ` determines that
          the current thread cannot access its thread group`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of threads put into the array`]
			]
		]],
		[/* method */ 'isAlive()', [
			[/* method description */
				[/* text */ 't', `Tests if this thread is alive. A thread is alive if it has
 been started and has not yet died.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this thread is alive;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'setDefaultUncaughtExceptionHandler(java.lang.Thread.UncaughtExceptionHandler)', [
			[/* method description */
				[/* text */ 't', `Set the default handler invoked when a thread abruptly terminates
 due to an uncaught exception, and no other handler has been defined
 for that thread.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Uncaught exception handling is controlled first by the thread, then
 by the thread's `],
					[/* reference */ 'r', `java.lang.ThreadGroup`],
					[/* text */ 't', ` object and finally by the default
 uncaught exception handler. If the thread does not have an explicit
 uncaught exception handler set, and the thread's thread group
 (including parent thread groups)  does not specialize its
 `],
					[/* inline code block */ 'i', `uncaughtException`],
					[/* text */ 't', ` method, then the default handler's
 `],
					[/* inline code block */ 'i', `uncaughtException`],
					[/* text */ 't', ` method will be invoked.
 `]
				]],
				[/* block */ 'b', `By setting the default uncaught exception handler, an application
 can change the way in which uncaught exceptions are handled (such as
 logging to a specific device, or file) for those threads that would
 already accept whatever "default" behavior the system
 provided.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that the default uncaught exception handler should not usually
 defer to the thread's `],
					[/* inline code block */ 'i', `ThreadGroup`],
					[/* text */ 't', ` object, as that could cause
 infinite recursion.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'eh', [/* parameter description */
					[/* text */ 't', `the object to use as the default uncaught exception handler.
 If `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` then there is no default handler.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is present and it denies
         `],
					[/* reference */ 'r', `java.lang.RuntimePermission`],
					[/* inline code block */ 'i', `("setDefaultUncaughtExceptionHandler")`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'getUncaughtExceptionHandler()', [
			[/* method description */
				[/* text */ 't', `Returns the handler invoked when this thread abruptly terminates
 due to an uncaught exception. If this thread has not had an
 uncaught exception handler explicitly set then this thread's
 `],
				[/* inline code block */ 'i', `ThreadGroup`],
				[/* text */ 't', ` object is returned, unless this thread
 has terminated, in which case `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` is returned.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the uncaught exception handler for this thread`]
			]
		]],
		[/* method */ 'yield()', [
			[/* method description */
				[/* text */ 't', `A hint to the scheduler that the current thread is willing to yield
 its current use of a processor. The scheduler is free to ignore this
 hint.

 `],
				[/* block */ 'b', ` Yield is a heuristic attempt to improve relative progression
 between threads that would otherwise over-utilise a CPU. Its use
 should be combined with detailed profiling and benchmarking to
 ensure that it actually has the desired effect.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` It is rarely appropriate to use this method. It may be useful
 for debugging or testing purposes, where it may help to reproduce
 bugs due to race conditions. It may also be useful when designing
 concurrency control constructs such as the ones in the
 `],
					[/* external link */ 'a', `../util/concurrent/locks/package-summary.html`, `java.util.concurrent.locks`],
					[/* text */ 't', ` package.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'stop()', [
			[/* method description */
				[/* text */ 't', `Forces the thread to stop executing.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If there is a security manager installed, its `],
					[/* inline code block */ 'i', `checkAccess`],
					[/* text */ 't', `
 method is called with `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', `
 as its argument. This may result in a
 `],
					[/* inline code block */ 'i', `SecurityException`],
					[/* text */ 't', ` being raised (in the current thread).
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If this thread is different from the current thread (that is, the current
 thread is trying to stop a thread other than itself), the
 security manager's `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method (with a
 `],
					[/* inline code block */ 'i', `RuntimePermission("stopThread")`],
					[/* text */ 't', ` argument) is called in
 addition.
 Again, this may result in throwing a
 `],
					[/* inline code block */ 'i', `SecurityException`],
					[/* text */ 't', ` (in the current thread).
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The thread represented by this thread is forced to stop whatever
 it is doing abnormally and to throw a newly created
 `],
					[/* inline code block */ 'i', `ThreadDeath`],
					[/* text */ 't', ` object as an exception.
 `]
				]],
				[/* block */ 'b', `
 It is permitted to stop a thread that has not yet been started.
 If the thread is eventually started, it immediately terminates.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 An application should not normally try to catch
 `],
					[/* inline code block */ 'i', `ThreadDeath`],
					[/* text */ 't', ` unless it must do some extraordinary
 cleanup operation (note that the throwing of
 `],
					[/* inline code block */ 'i', `ThreadDeath`],
					[/* text */ 't', ` causes `],
					[/* inline code block */ 'i', `finally`],
					[/* text */ 't', ` clauses of
 `],
					[/* inline code block */ 'i', `try`],
					[/* text */ 't', ` statements to be executed before the thread
 officially dies).  If a `],
					[/* inline code block */ 'i', `catch`],
					[/* text */ 't', ` clause catches a
 `],
					[/* inline code block */ 'i', `ThreadDeath`],
					[/* text */ 't', ` object, it is important to rethrow the
 object so that the thread actually dies.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The top-level error handler that reacts to otherwise uncaught
 exceptions does not print out a message or otherwise notify the
 application if the uncaught exception is an instance of
 `],
					[/* inline code block */ 'i', `ThreadDeath`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread cannot
             modify this thread.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'isInterrupted()', [
			[/* method description */
				[/* text */ 't', `Tests whether this thread has been interrupted.  The `],
				[/* text */ 't', `interrupted
 status`],
				[/* text */ 't', ` of the thread is unaffected by this method.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this thread has been interrupted;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'suspend()', [
			[/* method description */
				[/* text */ 't', `Suspends this thread.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 First, the `],
					[/* inline code block */ 'i', `checkAccess`],
					[/* text */ 't', ` method of this thread is called
 with no arguments. This may result in throwing a
 `],
					[/* inline code block */ 'i', `SecurityException`],
					[/* text */ 't', `(in the current thread).
 `]
				]],
				[/* block */ 'b', `
 If the thread is alive, it is suspended and makes no further
 progress unless and until it is resumed.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread cannot modify
             this thread.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setName(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Changes the name of this thread to be equal to the argument `],
				[/* inline code block */ 'i', `name`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 First the `],
					[/* inline code block */ 'i', `checkAccess`],
					[/* text */ 't', ` method of this thread is called
 with no arguments. This may result in throwing a
 `],
					[/* inline code block */ 'i', `SecurityException`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the new name for this thread.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread cannot modify this
             thread.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'countStackFrames()', [
			[/* method description */
				[/* text */ 't', `Throws `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `nothing`]
			]
		]],
		[/* method */ 'getAllStackTraces()', [
			[/* method description */
				[/* text */ 't', `Returns a map of stack traces for all live threads.
 The map keys are threads and each map value is an array of
 `],
				[/* inline code block */ 'i', `StackTraceElement`],
				[/* text */ 't', ` that represents the stack dump
 of the corresponding `],
				[/* inline code block */ 'i', `Thread`],
				[/* text */ 't', `.
 The returned stack traces are in the format specified for
 the `],
				[/* reference */ 'r', `getStackTrace`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', `The threads may be executing while this method is called.
 The stack trace of each thread only represents a snapshot and
 each stack trace may be obtained at different time.  A zero-length
 array will be returned in the map value if the virtual machine has
 no stack trace information about a thread.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If there is a security manager, then the security manager's
 `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method is called with a
 `],
					[/* inline code block */ 'i', `RuntimePermission("getStackTrace")`],
					[/* text */ 't', ` permission as well as
 `],
					[/* inline code block */ 'i', `RuntimePermission("modifyThreadGroup")`],
					[/* text */ 't', ` permission
 to see if it is ok to get the stack trace of all threads.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
        `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method doesn't allow
        getting the stack trace of thread.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', ` from `],
				[/* inline code block */ 'i', `Thread`],
				[/* text */ 't', ` to an array of
 `],
				[/* inline code block */ 'i', `StackTraceElement`],
				[/* text */ 't', ` that represents the stack trace of
 the corresponding thread.`]
			]
		]],
		[/* method */ 'getId()', [
			[/* method description */
				[/* text */ 't', `Returns the identifier of this Thread.  The thread ID is a positive
 `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` number generated when this thread was created.
 The thread ID is unique and remains unchanged during its lifetime.
 When a thread is terminated, this thread ID may be reused.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this thread's ID.`]
			]
		]],
		[/* method */ 'getState()', [
			[/* method description */
				[/* text */ 't', `Returns the state of this thread.
 This method is designed for use in monitoring of the system state,
 not for synchronization control.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this thread's state.`]
			]
		]],
		[/* method */ 'getDefaultUncaughtExceptionHandler()', [
			[/* method description */
				[/* text */ 't', `Returns the default handler invoked when a thread abruptly terminates
 due to an uncaught exception. If the returned value is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `,
 there is no default.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the default uncaught exception handler for all threads`]
			]
		]],
		[/* method */ 'setUncaughtExceptionHandler(java.lang.Thread.UncaughtExceptionHandler)', [
			[/* method description */
				[/* text */ 't', `Set the handler invoked when this thread abruptly terminates
 due to an uncaught exception.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `A thread can take full control of how it responds to uncaught
 exceptions by having its uncaught exception handler explicitly set.
 If no such handler is set then the thread's `],
					[/* inline code block */ 'i', `ThreadGroup`],
					[/* text */ 't', `
 object acts as its handler.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'eh', [/* parameter description */
					[/* text */ 't', `the object to use as this thread's uncaught exception
 handler. If `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` then this thread has no explicit handler.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the current thread is not allowed to
          modify this thread.`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
