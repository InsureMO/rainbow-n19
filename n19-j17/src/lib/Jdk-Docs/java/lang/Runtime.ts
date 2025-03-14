import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Runtime', [
	[/* class description */
		[/* text */ 't', `Every Java application has a single instance of class
 `],
		[/* inline code block */ 'i', `Runtime`],
		[/* text */ 't', ` that allows the application to interface with
 the environment in which the application is running. The current
 runtime can be obtained from the `],
		[/* inline code block */ 'i', `getRuntime`],
		[/* text */ 't', ` method.
 `],
		[/* block */ 'b', `
 An application cannot create its own instance of this class.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'removeShutdownHook(java.lang.Thread)', [
			[/* method description */
				[/* text */ 't', `De-registers a previously-registered virtual-machine shutdown hook.`]
			],
			[/* parameters */
				[/* parameter */ 'hook', [/* parameter description */
					[/* text */ 't', `the hook to remove`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If the virtual machine is already in the process of shutting
          down`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present and it denies
          `],
					[/* reference */ 'r', `java.lang.RuntimePermission`, `RuntimePermission`],
					[/* inline code block */ 'i', `("shutdownHooks")`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the specified hook had previously been
 registered and was successfully de-registered, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `
 otherwise.`]
			]
		]],
		[/* method */ 'exec(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Executes the specified string command in a separate process.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a convenience method.  An invocation of the form
 `],
					[/* inline code block */ 'i', `exec(command)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation
 `],
					[/* reference */ 'r', `#exec(java.lang.String,java.lang.String%5B%5D,java.io.File)`, `exec`],
					[/* inline code block */ 'i', `(command, null, null)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'command', [/* parameter description */
					[/* text */ 't', `a specified system command.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its
          `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkExec(java.lang.String)`, `checkExec`],
					[/* text */ 't', `
          method doesn't allow creation of the subprocess`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `command`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `command`],
					[/* text */ 't', ` is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A new `],
				[/* reference */ 'r', `java.lang.Process`, `Process`],
				[/* text */ 't', ` object for managing the subprocess`]
			]
		]],
		[/* method */ 'exec(java.lang.String,java.lang.String[])', [
			[/* method description */
				[/* text */ 't', `Executes the specified string command in a separate process with the
 specified environment.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a convenience method.  An invocation of the form
 `],
					[/* inline code block */ 'i', `exec(command, envp)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation
 `],
					[/* reference */ 'r', `#exec(java.lang.String,java.lang.String%5B%5D,java.io.File)`, `exec`],
					[/* inline code block */ 'i', `(command, envp, null)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'command', [/* parameter description */
					[/* text */ 't', `a specified system command.`]
				]],
				[/* parameter */ 'envp', [/* parameter description */
					[/* text */ 't', `array of strings, each element of which
                    has environment variable settings in the format
                    `],
					[/* text */ 't', `name`],
					[/* text */ 't', `=`],
					[/* text */ 't', `value`],
					[/* text */ 't', `, or
                    `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if the subprocess should inherit
                    the environment of the current process.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its
          `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkExec(java.lang.String)`, `checkExec`],
					[/* text */ 't', `
          method doesn't allow creation of the subprocess`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `command`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `,
          or one of the elements of `],
					[/* inline code block */ 'i', `envp`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `command`],
					[/* text */ 't', ` is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A new `],
				[/* reference */ 'r', `java.lang.Process`, `Process`],
				[/* text */ 't', ` object for managing the subprocess`]
			]
		]],
		[/* method */ 'exec(java.lang.String,java.lang.String[],java.io.File)', [
			[/* method description */
				[/* text */ 't', `Executes the specified string command in a separate process with the
 specified environment and working directory.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a convenience method.  An invocation of the form
 `],
					[/* inline code block */ 'i', `exec(command, envp, dir)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation
 `],
					[/* reference */ 'r', `#exec(java.lang.String%5B%5D,java.lang.String%5B%5D,java.io.File)`, `exec`],
					[/* inline code block */ 'i', `(cmdarray, envp, dir)`],
					[/* text */ 't', `,
 where `],
					[/* inline code block */ 'i', `cmdarray`],
					[/* text */ 't', ` is an array of all the tokens in
 `],
					[/* inline code block */ 'i', `command`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `More precisely, the `],
					[/* inline code block */ 'i', `command`],
					[/* text */ 't', ` string is broken
 into tokens using a `],
					[/* reference */ 'r', `java.util.StringTokenizer`, `StringTokenizer`],
					[/* text */ 't', ` created by the call
 `],
					[/* inline code block */ 'i', `new StringTokenizer(command)`],
					[/* text */ 't', ` with no
 further modification of the character categories.  The tokens
 produced by the tokenizer are then placed in the new string
 array `],
					[/* inline code block */ 'i', `cmdarray`],
					[/* text */ 't', `, in the same order.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'command', [/* parameter description */
					[/* text */ 't', `a specified system command.`]
				]],
				[/* parameter */ 'envp', [/* parameter description */
					[/* text */ 't', `array of strings, each element of which
                    has environment variable settings in the format
                    `],
					[/* text */ 't', `name`],
					[/* text */ 't', `=`],
					[/* text */ 't', `value`],
					[/* text */ 't', `, or
                    `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if the subprocess should inherit
                    the environment of the current process.`]
				]],
				[/* parameter */ 'dir', [/* parameter description */
					[/* text */ 't', `the working directory of the subprocess, or
                    `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if the subprocess should inherit
                    the working directory of the current process.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its
          `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkExec(java.lang.String)`, `checkExec`],
					[/* text */ 't', `
          method doesn't allow creation of the subprocess`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `command`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `,
          or one of the elements of `],
					[/* inline code block */ 'i', `envp`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `command`],
					[/* text */ 't', ` is empty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A new `],
				[/* reference */ 'r', `java.lang.Process`, `Process`],
				[/* text */ 't', ` object for managing the subprocess`]
			]
		]],
		[/* method */ 'exec(java.lang.String[])', [
			[/* method description */
				[/* text */ 't', `Executes the specified command and arguments in a separate process.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a convenience method.  An invocation of the form
 `],
					[/* inline code block */ 'i', `exec(cmdarray)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation
 `],
					[/* reference */ 'r', `#exec(java.lang.String%5B%5D,java.lang.String%5B%5D,java.io.File)`, `exec`],
					[/* inline code block */ 'i', `(cmdarray, null, null)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'cmdarray', [/* parameter description */
					[/* text */ 't', `array containing the command to call and
                    its arguments.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its
          `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkExec(java.lang.String)`, `checkExec`],
					[/* text */ 't', `
          method doesn't allow creation of the subprocess`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `cmdarray`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `,
          or one of the elements of `],
					[/* inline code block */ 'i', `cmdarray`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `cmdarray`],
					[/* text */ 't', ` is an empty array
          (has length `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A new `],
				[/* reference */ 'r', `java.lang.Process`, `Process`],
				[/* text */ 't', ` object for managing the subprocess`]
			]
		]],
		[/* method */ 'exec(java.lang.String[],java.lang.String[])', [
			[/* method description */
				[/* text */ 't', `Executes the specified command and arguments in a separate process
 with the specified environment.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a convenience method.  An invocation of the form
 `],
					[/* inline code block */ 'i', `exec(cmdarray, envp)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation
 `],
					[/* reference */ 'r', `#exec(java.lang.String%5B%5D,java.lang.String%5B%5D,java.io.File)`, `exec`],
					[/* inline code block */ 'i', `(cmdarray, envp, null)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'cmdarray', [/* parameter description */
					[/* text */ 't', `array containing the command to call and
                    its arguments.`]
				]],
				[/* parameter */ 'envp', [/* parameter description */
					[/* text */ 't', `array of strings, each element of which
                    has environment variable settings in the format
                    `],
					[/* text */ 't', `name`],
					[/* text */ 't', `=`],
					[/* text */ 't', `value`],
					[/* text */ 't', `, or
                    `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if the subprocess should inherit
                    the environment of the current process.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its
          `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkExec(java.lang.String)`, `checkExec`],
					[/* text */ 't', `
          method doesn't allow creation of the subprocess`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `cmdarray`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `,
          or one of the elements of `],
					[/* inline code block */ 'i', `cmdarray`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `,
          or one of the elements of `],
					[/* inline code block */ 'i', `envp`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `cmdarray`],
					[/* text */ 't', ` is an empty array
          (has length `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A new `],
				[/* reference */ 'r', `java.lang.Process`, `Process`],
				[/* text */ 't', ` object for managing the subprocess`]
			]
		]],
		[/* method */ 'exec(java.lang.String[],java.lang.String[],java.io.File)', [
			[/* method description */
				[/* text */ 't', `Executes the specified command and arguments in a separate process with
 the specified environment and working directory.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Given an array of strings `],
					[/* inline code block */ 'i', `cmdarray`],
					[/* text */ 't', `, representing the
 tokens of a command line, and an array of strings `],
					[/* inline code block */ 'i', `envp`],
					[/* text */ 't', `,
 representing "environment" variable settings, this method creates
 a new process in which to execute the specified command.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This method checks that `],
					[/* inline code block */ 'i', `cmdarray`],
					[/* text */ 't', ` is a valid operating
 system command.  Which commands are valid is system-dependent,
 but at the very least the command must be a non-empty list of
 non-null strings.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `envp`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, the subprocess inherits the
 environment settings of the current process.

 `]
				]],
				[/* block */ 'b', `A minimal set of system dependent environment variables may
 be required to start a process on some operating systems.
 As a result, the subprocess may inherit additional environment variable
 settings beyond those in the specified environment.

 `],
				[/* block */ 'b', [
					[/* reference */ 'r', `java.lang.ProcessBuilder#start()`, `ProcessBuilder.start()`],
					[/* text */ 't', ` is now the preferred way to
 start a process with a modified environment.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The working directory of the new subprocess is specified by `],
					[/* inline code block */ 'i', `dir`],
					[/* text */ 't', `.
 If `],
					[/* inline code block */ 'i', `dir`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, the subprocess inherits the
 current working directory of the current process.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If a security manager exists, its
 `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkExec(java.lang.String)`, `checkExec`],
					[/* text */ 't', `
 method is invoked with the first component of the array
 `],
					[/* inline code block */ 'i', `cmdarray`],
					[/* text */ 't', ` as its argument. This may result in a
 `],
					[/* reference */ 'r', `java.lang.SecurityException`, `SecurityException`],
					[/* text */ 't', ` being thrown.

 `]
				]],
				[/* block */ 'b', `Starting an operating system process is highly system-dependent.
 Among the many things that can go wrong are:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `The operating system program file was not found.
 `],
					[/* block */ 'b', `Access to the program file was denied.
 `],
					[/* block */ 'b', `The working directory does not exist.
 `]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `In such cases an exception will be thrown.  The exact nature
 of the exception is system-dependent, but it will always be a
 subclass of `],
					[/* reference */ 'r', `java.io.IOException`, `IOException`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the operating system does not support the creation of
 processes, an `],
					[/* reference */ 'r', `java.lang.UnsupportedOperationException`, `UnsupportedOperationException`],
					[/* text */ 't', ` will be thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'cmdarray', [/* parameter description */
					[/* text */ 't', `array containing the command to call and
                    its arguments.`]
				]],
				[/* parameter */ 'envp', [/* parameter description */
					[/* text */ 't', `array of strings, each element of which
                    has environment variable settings in the format
                    `],
					[/* text */ 't', `name`],
					[/* text */ 't', `=`],
					[/* text */ 't', `value`],
					[/* text */ 't', `, or
                    `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if the subprocess should inherit
                    the environment of the current process.`]
				]],
				[/* parameter */ 'dir', [/* parameter description */
					[/* text */ 't', `the working directory of the subprocess, or
                    `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if the subprocess should inherit
                    the working directory of the current process.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its
          `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkExec(java.lang.String)`, `checkExec`],
					[/* text */ 't', `
          method doesn't allow creation of the subprocess`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If the operating system does not support the creation of processes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `cmdarray`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `,
          or one of the elements of `],
					[/* inline code block */ 'i', `cmdarray`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `,
          or one of the elements of `],
					[/* inline code block */ 'i', `envp`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `cmdarray`],
					[/* text */ 't', ` is an empty array
          (has length `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A new `],
				[/* reference */ 'r', `java.lang.Process`, `Process`],
				[/* text */ 't', ` object for managing the subprocess`]
			]
		]],
		[/* method */ 'availableProcessors()', [
			[/* method description */
				[/* text */ 't', `Returns the number of processors available to the Java virtual machine.

 `],
				[/* block */ 'b', ` This value may change during a particular invocation of the virtual
 machine.  Applications that are sensitive to the number of available
 processors should therefore occasionally poll this property and adjust
 their resource usage appropriately. `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the maximum number of processors available to the virtual
          machine; never smaller than one`]
			]
		]],
		[/* method */ 'freeMemory()', [
			[/* method description */
				[/* text */ 't', `Returns the amount of free memory in the Java Virtual Machine.
 Calling the
 `],
				[/* inline code block */ 'i', `gc`],
				[/* text */ 't', ` method may result in increasing the value returned
 by `],
				[/* inline code block */ 'i', `freeMemory.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an approximation to the total amount of memory currently
          available for future allocated objects, measured in bytes.`]
			]
		]],
		[/* method */ 'maxMemory()', [
			[/* method description */
				[/* text */ 't', `Returns the maximum amount of memory that the Java virtual machine
 will attempt to use.  If there is no inherent limit then the value
 `],
				[/* reference */ 'r', `java.lang.Long#MAX_VALUE`, `Long.MAX_VALUE`],
				[/* text */ 't', ` will be returned.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the maximum amount of memory that the virtual machine will
          attempt to use, measured in bytes`]
			]
		]],
		[/* method */ 'totalMemory()', [
			[/* method description */
				[/* text */ 't', `Returns the total amount of memory in the Java virtual machine.
 The value returned by this method may vary over time, depending on
 the host environment.
 `],
				[/* block */ 'b', `
 Note that the amount of memory required to hold an object of any
 given type may be implementation-dependent.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the total amount of memory currently available for current
          and future objects, measured in bytes.`]
			]
		]],
		[/* method */ 'gc()', [
			[/* method description */
				[/* text */ 't', `Runs the garbage collector in the Java Virtual Machine.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Calling this method suggests that the Java Virtual Machine
 expend effort toward recycling unused objects in order to
 make the memory they currently occupy available for reuse
 by the Java Virtual Machine.
 When control returns from the method call, the Java Virtual Machine
 has made a best effort to reclaim space from all unused objects.
 There is no guarantee that this effort will recycle any particular
 number of unused objects, reclaim any particular amount of space, or
 complete at any particular time, if at all, before the method returns or ever.
 There is also no guarantee that this effort will determine
 the change of reachability in any particular number of objects,
 or that any particular number of `],
					[/* reference */ 'r', `java.lang.ref.Reference`, `Reference`],
					[/* text */ 't', `
 objects will be cleared and enqueued.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The name `],
					[/* inline code block */ 'i', `gc`],
					[/* text */ 't', ` stands for "garbage
 collector". The Java Virtual Machine performs this recycling
 process automatically as needed, in a separate thread, even if the
 `],
					[/* inline code block */ 'i', `gc`],
					[/* text */ 't', ` method is not invoked explicitly.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The method `],
					[/* reference */ 'r', `java.lang.System#gc()`, `System.gc()`],
					[/* text */ 't', ` is the conventional and convenient
 means of invoking this method.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'getRuntime()', [
			[/* method description */
				[/* text */ 't', `Returns the runtime object associated with the current Java application.
 Most of the methods of class `],
				[/* inline code block */ 'i', `Runtime`],
				[/* text */ 't', ` are instance
 methods and must be invoked with respect to the current runtime object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Runtime`],
				[/* text */ 't', ` object associated with the current
          Java application.`]
			]
		]],
		[/* method */ 'version()', [
			[/* method description */
				[/* text */ 't', `Returns the version of the Java Runtime Environment as a `],
				[/* reference */ 'r', `java.lang.Runtime.Version`, `Runtime.Version`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* reference */ 'r', `java.lang.Runtime.Version`, `Runtime.Version`],
				[/* text */ 't', ` of the Java Runtime Environment`]
			]
		]],
		[/* method */ 'addShutdownHook(java.lang.Thread)', [
			[/* method description */
				[/* text */ 't', `Registers a new virtual-machine shutdown hook.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The Java virtual machine `],
					[/* text */ 't', `shuts down`],
					[/* text */ 't', ` in response to two kinds
 of events:

   `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` The program `],
						[/* text */ 't', `exits`],
						[/* text */ 't', ` normally, when the last non-daemon
   thread exits or when the `],
						[/* reference */ 'r', `#exit(int)`, `exit`],
						[/* text */ 't', ` (equivalently,
   `],
						[/* reference */ 'r', `java.lang.System#exit(int)`, `System.exit`],
						[/* text */ 't', `) method is invoked, or

   `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` The virtual machine is `],
						[/* text */ 't', `terminated`],
						[/* text */ 't', ` in response to a
   user interrupt, such as typing `],
						[/* inline code block */ 'i', `^C`],
						[/* text */ 't', `, or a system-wide event,
   such as user logoff or system shutdown.

   `]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` A `],
					[/* text */ 't', `shutdown hook`],
					[/* text */ 't', ` is simply an initialized but unstarted
 thread.  When the virtual machine begins its shutdown sequence it will
 start all registered shutdown hooks in some unspecified order and let
 them run concurrently.  When all the hooks have finished it will then
 halt. Note that daemon threads will continue to run during the shutdown
 sequence, as will non-daemon threads if shutdown was initiated by
 invoking the `],
					[/* reference */ 'r', `#exit(int)`, `exit`],
					[/* text */ 't', ` method.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Once the shutdown sequence has begun it can be stopped only by
 invoking the `],
					[/* reference */ 'r', `#halt(int)`, `halt`],
					[/* text */ 't', ` method, which forcibly
 terminates the virtual machine.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Once the shutdown sequence has begun it is impossible to register a
 new shutdown hook or de-register a previously-registered hook.
 Attempting either of these operations will cause an
 `],
					[/* reference */ 'r', `java.lang.IllegalStateException`, `IllegalStateException`],
					[/* text */ 't', ` to be thrown.

 `]
				]],
				[/* block */ 'b', ` Shutdown hooks run at a delicate time in the life cycle of a virtual
 machine and should therefore be coded defensively.  They should, in
 particular, be written to be thread-safe and to avoid deadlocks insofar
 as possible.  They should also not rely blindly upon services that may
 have registered their own shutdown hooks and therefore may themselves in
 the process of shutting down.  Attempts to use other thread-based
 services such as the AWT event-dispatch thread, for example, may lead to
 deadlocks.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Shutdown hooks should also finish their work quickly.  When a
 program invokes `],
					[/* reference */ 'r', `#exit(int)`, `exit`],
					[/* text */ 't', ` the expectation is
 that the virtual machine will promptly shut down and exit.  When the
 virtual machine is terminated due to user logoff or system shutdown the
 underlying operating system may only allow a fixed amount of time in
 which to shut down and exit.  It is therefore inadvisable to attempt any
 user interaction or to perform a long-running computation in a shutdown
 hook.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Uncaught exceptions are handled in shutdown hooks just as in any
 other thread, by invoking the
 `],
					[/* reference */ 'r', `java.lang.ThreadGroup#uncaughtException(java.lang.Thread,java.lang.Throwable)`, `uncaughtException`],
					[/* text */ 't', ` method of the
 thread's `],
					[/* reference */ 'r', `java.lang.ThreadGroup`, `ThreadGroup`],
					[/* text */ 't', ` object. The default implementation of this
 method prints the exception's stack trace to `],
					[/* reference */ 'r', `java.lang.System#err`, `System.err`],
					[/* text */ 't', ` and
 terminates the thread; it does not cause the virtual machine to exit or
 halt.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` In rare circumstances the virtual machine may `],
					[/* text */ 't', `abort`],
					[/* text */ 't', `, that is,
 stop running without shutting down cleanly.  This occurs when the
 virtual machine is terminated externally, for example with the
 `],
					[/* inline code block */ 'i', `SIGKILL`],
					[/* text */ 't', ` signal on Unix or the `],
					[/* inline code block */ 'i', `TerminateProcess`],
					[/* text */ 't', ` call on
 Microsoft Windows.  The virtual machine may also abort if a native
 method goes awry by, for example, corrupting internal data structures or
 attempting to access nonexistent memory.  If the virtual machine aborts
 then no guarantee can be made about whether or not any shutdown hooks
 will be run.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'hook', [/* parameter description */
					[/* text */ 't', `An initialized but unstarted `],
					[/* reference */ 'r', `java.lang.Thread`, `Thread`],
					[/* text */ 't', ` object`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the specified hook has already been registered,
          or if it can be determined that the hook is already running or
          has already been run`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If the virtual machine is already in the process
          of shutting down`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present and it denies
          `],
					[/* reference */ 'r', `java.lang.RuntimePermission`, `RuntimePermission`],
					[/* inline code block */ 'i', `("shutdownHooks")`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'exit(int)', [
			[/* method description */
				[/* text */ 't', `Terminates the currently running Java virtual machine by initiating its
 shutdown sequence.  This method never returns normally.  The argument
 serves as a status code; by convention, a nonzero status code indicates
 abnormal termination.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` All registered `],
					[/* reference */ 'r', `#addShutdownHook(java.lang.Thread)`, `shutdown hooks`],
					[/* text */ 't', `, if any,
 are started in some unspecified order and allowed to run concurrently
 until they finish.  Once this is done the virtual machine
 `],
					[/* reference */ 'r', `#halt(int)`, `halts`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` If this method is invoked after all shutdown hooks have already
 been run and the status is nonzero then this method halts the
 virtual machine with the given status code. Otherwise, this method
 blocks indefinitely.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `java.lang.System#exit(int)`, `System.exit`],
					[/* text */ 't', ` method is the
 conventional and convenient means of invoking this method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'status', [/* parameter description */
					[/* text */ 't', `Termination status.  By convention, a nonzero status code
         indicates abnormal termination.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present and its
         `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkExit(int)`, `checkExit`],
					[/* text */ 't', ` method does not permit
         exiting with the specified status`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'halt(int)', [
			[/* method description */
				[/* text */ 't', `Forcibly terminates the currently running Java virtual machine.  This
 method never returns normally.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method should be used with extreme caution.  Unlike the
 `],
					[/* reference */ 'r', `#exit(int)`, `exit`],
					[/* text */ 't', ` method, this method does not cause shutdown
 hooks to be started.  If the shutdown sequence has already been
 initiated then this method does not wait for any running
 shutdown hooks to finish their work.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'status', [/* parameter description */
					[/* text */ 't', `Termination status. By convention, a nonzero status code
         indicates abnormal termination. If the `],
					[/* reference */ 'r', `#exit(int)`, `exit`],
					[/* text */ 't', `
         (equivalently, `],
					[/* reference */ 'r', `java.lang.System#exit(int)`, `System.exit`],
					[/* text */ 't', `) method
         has already been invoked then this status code
         will override the status code passed to that method.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present and its
         `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkExit(int)`, `checkExit`],
					[/* text */ 't', ` method
         does not permit an exit with the specified status`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'load(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Loads the native library specified by the filename argument.  The filename
 argument must be an absolute path name.
 (for example
 `],
				[/* inline code block */ 'i', `Runtime.getRuntime().load("/home/avh/lib/libX11.so");`],
				[/* text */ 't', `).

 If the filename argument, when stripped of any platform-specific library
 prefix, path, and file extension, indicates a library whose name is,
 for example, L, and a native library called L is statically linked
 with the VM, then the JNI_OnLoad_L function exported by the library
 is invoked rather than attempting to load a dynamic library.
 A filename matching the argument does not have to exist in the file
 system.
 See the `],
				[/* text */ 't', `JNI Specification`],
				[/* text */ 't', `
 for more details.

 Otherwise, the filename argument is mapped to a native library image in
 an implementation-dependent manner.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 First, if there is a security manager, its `],
					[/* inline code block */ 'i', `checkLink`],
					[/* text */ 't', `
 method is called with the `],
					[/* inline code block */ 'i', `filename`],
					[/* text */ 't', ` as its argument.
 This may result in a security exception.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This is similar to the method `],
					[/* reference */ 'r', `#loadLibrary(java.lang.String)`, `loadLibrary(String)`],
					[/* text */ 't', `, but it
 accepts a general file name as an argument rather than just a library
 name, allowing any file of native code to be loaded.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The method `],
					[/* reference */ 'r', `java.lang.System#load(java.lang.String)`, `System.load(String)`],
					[/* text */ 't', ` is the conventional and
 convenient means of invoking this method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'filename', [/* parameter description */
					[/* text */ 't', `the file to load.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
             `],
					[/* inline code block */ 'i', `checkLink`],
					[/* text */ 't', ` method doesn't allow
             loading of the specified dynamic library`]
				]],
				[/* throw */ 'java.lang.UnsatisfiedLinkError', [/* throw description */
					[/* text */ 't', `if either the filename is not an
             absolute path name, the native library is not statically
             linked with the VM, or the library cannot be mapped to
             a native library image by the host system.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `filename`],
					[/* text */ 't', ` is
             `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'loadLibrary(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Loads the native library specified by the `],
				[/* inline code block */ 'i', `libname`],
				[/* text */ 't', `
 argument.  The `],
				[/* inline code block */ 'i', `libname`],
				[/* text */ 't', ` argument must not contain any platform
 specific prefix, file extension or path. If a native library
 called `],
				[/* inline code block */ 'i', `libname`],
				[/* text */ 't', ` is statically linked with the VM, then the
 JNI_OnLoad_`],
				[/* inline code block */ 'i', `libname`],
				[/* text */ 't', ` function exported by the library is invoked.
 See the `],
				[/* text */ 't', `JNI Specification`],
				[/* text */ 't', `
 for more details.

 Otherwise, the libname argument is loaded from a system library
 location and mapped to a native library image in an
 implementation-dependent manner.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 First, if there is a security manager, its `],
					[/* inline code block */ 'i', `checkLink`],
					[/* text */ 't', `
 method is called with the `],
					[/* inline code block */ 'i', `libname`],
					[/* text */ 't', ` as its argument.
 This may result in a security exception.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The method `],
					[/* reference */ 'r', `java.lang.System#loadLibrary(java.lang.String)`, `System.loadLibrary(String)`],
					[/* text */ 't', ` is the conventional
 and convenient means of invoking this method. If native
 methods are to be used in the implementation of a class, a standard
 strategy is to put the native code in a library file (call it
 `],
					[/* inline code block */ 'i', `LibFile`],
					[/* text */ 't', `) and then to put a static initializer:
 `]
				]],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', ` static { System.loadLibrary("LibFile"); }
 `]
				]],
				[/* text */ 't', `
 within the class declaration. When the class is loaded and
 initialized, the necessary native code implementation for the native
 methods will then be loaded as well.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 If this method is called more than once with the same library
 name, the second and subsequent calls are ignored.`]
			],
			[/* parameters */
				[/* parameter */ 'libname', [/* parameter description */
					[/* text */ 't', `the name of the library.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
             `],
					[/* inline code block */ 'i', `checkLink`],
					[/* text */ 't', ` method doesn't allow
             loading of the specified dynamic library`]
				]],
				[/* throw */ 'java.lang.UnsatisfiedLinkError', [/* throw description */
					[/* text */ 't', `if either the libname argument
             contains a file path, the native library is not statically
             linked with the VM,  or the library cannot be mapped to a
             native library image by the host system.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `libname`],
					[/* text */ 't', ` is
             `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'runFinalization()', [
			[/* method description */
				[/* text */ 't', `Runs the finalization methods of any objects pending finalization.
 Calling this method suggests that the Java virtual machine expend
 effort toward running the `],
				[/* inline code block */ 'i', `finalize`],
				[/* text */ 't', ` methods of objects
 that have been found to be discarded but whose `],
				[/* inline code block */ 'i', `finalize`],
				[/* text */ 't', `
 methods have not yet been run. When control returns from the
 method call, the virtual machine has made a best effort to
 complete all outstanding finalizations.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The virtual machine performs the finalization process
 automatically as needed, in a separate thread, if the
 `],
					[/* inline code block */ 'i', `runFinalization`],
					[/* text */ 't', ` method is not invoked explicitly.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The method `],
					[/* reference */ 'r', `java.lang.System#runFinalization()`, `System.runFinalization()`],
					[/* text */ 't', ` is the conventional
 and convenient means of invoking this method.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
