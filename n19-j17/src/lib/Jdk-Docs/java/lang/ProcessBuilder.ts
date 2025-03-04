import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.ProcessBuilder', [
	[/* class description */
		[/* text */ 't', `This class is used to create operating system processes.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Each `],
			[/* inline code block */ 'i', `ProcessBuilder`],
			[/* text */ 't', ` instance manages a collection
 of process attributes.  The `],
			[/* reference */ 'r', `#start()`, `start()`],
			[/* text */ 't', ` method creates a new
 `],
			[/* reference */ 'r', `java.lang.Process`],
			[/* text */ 't', ` instance with those attributes.  The `],
			[/* reference */ 'r', `#start()`, `start()`],
			[/* text */ 't', ` method can be invoked repeatedly from the same instance
 to create new subprocesses with identical or related attributes.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The `],
			[/* reference */ 'r', `#startPipeline(java.util.List)`, `startPipeline`],
			[/* text */ 't', ` method can be invoked to create
 a pipeline of new processes that send the output of each process
 directly to the next process.  Each process has the attributes of
 its respective ProcessBuilder.

 `]
		]],
		[/* block */ 'b', `Each process builder manages these process attributes:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `a `],
				[/* text */ 't', `command`],
				[/* text */ 't', `, a list of strings which signifies the
 external program file to be invoked and its arguments, if any.
 Which string lists represent a valid operating system command is
 system-dependent.  For example, it is common for each conceptual
 argument to be an element in this list, but there are operating
 systems where programs are expected to tokenize command line
 strings themselves - on such a system a Java implementation might
 require commands to contain exactly two elements.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `an `],
				[/* text */ 't', `environment`],
				[/* text */ 't', `, which is a system-dependent mapping from
 `],
				[/* text */ 't', `variables`],
				[/* text */ 't', ` to `],
				[/* text */ 't', `values`],
				[/* text */ 't', `.  The initial value is a copy of
 the environment of the current process (see `],
				[/* reference */ 'r', `.System#getenv()`],
				[/* text */ 't', `).

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `a `],
				[/* text */ 't', `working directory`],
				[/* text */ 't', `.  The default value is the current
 working directory of the current process, usually the directory
 named by the system property `],
				[/* inline code block */ 'i', `user.dir`],
				[/* text */ 't', `.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `a source of standard input`],
				[/* text */ 't', `.
 By default, the subprocess reads input from a pipe.  Java code
 can access this pipe via the output stream returned by
 `],
				[/* reference */ 'r', `.Process#getOutputStream()`],
				[/* text */ 't', `.  However, standard input may
 be redirected to another source using
 `],
				[/* reference */ 'r', `#redirectInput(java.lang.ProcessBuilder.Redirect)`, `redirectInput`],
				[/* text */ 't', `.
 In this case, `],
				[/* reference */ 'r', `.Process#getOutputStream()`],
				[/* text */ 't', ` will return a
 `],
				[/* text */ 't', `null output stream`],
				[/* text */ 't', `, for which:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `the `],
						[/* reference */ 'r', `java.OutputStream#write(int)`],
						[/* text */ 't', ` methods always
 throw `],
						[/* inline code block */ 'i', `IOException`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `the `],
						[/* reference */ 'r', `java.OutputStream#close()`],
						[/* text */ 't', ` method does nothing
 `]
					]]
				]]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `a destination for standard output and standard error`],
				[/* text */ 't', `.  By default, the subprocess writes standard
 output and standard error to pipes.  Java code can access these pipes
 via the input streams returned by `],
				[/* reference */ 'r', `.Process#getInputStream()`],
				[/* text */ 't', ` and
 `],
				[/* reference */ 'r', `.Process#getErrorStream()`],
				[/* text */ 't', `.  However, standard output and
 standard error may be redirected to other destinations using
 `],
				[/* reference */ 'r', `#redirectOutput(java.lang.ProcessBuilder.Redirect)`, `redirectOutput`],
				[/* text */ 't', ` and
 `],
				[/* reference */ 'r', `#redirectError(java.lang.ProcessBuilder.Redirect)`, `redirectError`],
				[/* text */ 't', `.
 In this case, `],
				[/* reference */ 'r', `.Process#getInputStream()`],
				[/* text */ 't', ` and/or
 `],
				[/* reference */ 'r', `.Process#getErrorStream()`],
				[/* text */ 't', ` will return a `],
				[/* text */ 't', `null input
 stream`],
				[/* text */ 't', `, for which:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `the `],
						[/* reference */ 'r', `java.InputStream#read()`],
						[/* text */ 't', ` methods always return
 `],
						[/* inline code block */ 'i', `-1`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `the `],
						[/* reference */ 'r', `java.InputStream#available()`],
						[/* text */ 't', ` method always returns
 `],
						[/* inline code block */ 'i', `0`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `the `],
						[/* reference */ 'r', `java.InputStream#close()`],
						[/* text */ 't', ` method does nothing
 `]
					]]
				]]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `a `],
				[/* text */ 't', `redirectErrorStream`],
				[/* text */ 't', ` property.  Initially, this property
 is `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `, meaning that the standard output and error
 output of a subprocess are sent to two separate streams, which can
 be accessed using the `],
				[/* reference */ 'r', `.Process#getInputStream()`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `.Process#getErrorStream()`],
				[/* text */ 't', ` methods.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the value is set to `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, then:

 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', `standard error is merged with the standard output and always sent
 to the same destination (this makes it easier to correlate error
 messages with the corresponding output)
 `],
					[/* block */ 'b', [
						[/* text */ 't', `the common destination of standard error and standard output can be
 redirected using
 `],
						[/* reference */ 'r', `#redirectOutput(java.lang.ProcessBuilder.Redirect)`, `redirectOutput`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `any redirection set by the
 `],
						[/* reference */ 'r', `#redirectError(java.lang.ProcessBuilder.Redirect)`, `redirectError`],
						[/* text */ 't', `
 method is ignored when creating a subprocess
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `the stream returned from `],
						[/* reference */ 'r', `.Process#getErrorStream()`],
						[/* text */ 't', ` will
 always be a `],
						[/* text */ 't', `null input stream`]
					]]
				]],
				[/* block */ 'b', '']
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Modifying a process builder's attributes will affect processes
 subsequently started by that object's `],
			[/* reference */ 'r', `#start()`, `start()`],
			[/* text */ 't', ` method, but
 will never affect previously started processes or the Java process
 itself.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Most error checking is performed by the `],
			[/* reference */ 'r', `#start()`, `start()`],
			[/* text */ 't', ` method.
 It is possible to modify the state of an object so that `],
			[/* reference */ 'r', `#start()`, `start()`],
			[/* text */ 't', ` will fail.  For example, setting the command attribute to
 an empty list will not throw an exception unless `],
			[/* reference */ 'r', `#start()`, `start()`],
			[/* text */ 't', `
 is invoked.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Note that this class is not synchronized.`],
			[/* text */ 't', `
 If multiple threads access a `],
			[/* inline code block */ 'i', `ProcessBuilder`],
			[/* text */ 't', ` instance
 concurrently, and at least one of the threads modifies one of the
 attributes structurally, it `],
			[/* text */ 't', `must`],
			[/* text */ 't', ` be synchronized externally.

 `]
		]],
		[/* block */ 'b', `Starting a new process which uses the default working directory
 and environment is easy:

 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `Process p = new ProcessBuilder("myCommand", "myArg").start();`]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Here is an example that starts a process with a modified working
 directory and environment, and redirects standard output and error
 to be appended to a log file:

 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `ProcessBuilder pb =
   new ProcessBuilder("myCommand", "myArg1", "myArg2");
 Map<String, String> env = pb.environment();
 env.put("VAR1", "myValue");
 env.remove("OTHERVAR");
 env.put("VAR2", env.get("VAR1") + "suffix");
 pb.directory(new File("myDir"));
 File log = new File("log");
 pb.redirectErrorStream(true);
 pb.redirectOutput(Redirect.appendTo(log));
 Process p = pb.start();
 assert pb.redirectInput() == Redirect.PIPE;
 assert pb.redirectOutput().file() == log;
 assert p.getInputStream().read() == -1;`]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `To start a process with an explicit set of environment
 variables, first call `],
			[/* reference */ 'r', `java.Map#clear()`],
			[/* text */ 't', `
 before adding environment variables.

 `]
		]],
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
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String...)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a process builder with the specified operating
 system program and arguments.  This is a convenience
 constructor that sets the process builder's command to a string
 list containing the same strings as the `],
				[/* inline code block */ 'i', `command`],
				[/* text */ 't', `
 array, in the same order.  It is not checked whether
 `],
				[/* inline code block */ 'i', `command`],
				[/* text */ 't', ` corresponds to a valid operating system
 command.`]
			],
			[/* parameters */
				[/* parameter */ 'command', [/* parameter description */
					[/* text */ 't', `a string array containing the program and its arguments`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.util.List)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a process builder with the specified operating
 system program and arguments.  This constructor does `],
				[/* text */ 't', `not`],
				[/* text */ 't', `
 make a copy of the `],
				[/* inline code block */ 'i', `command`],
				[/* text */ 't', ` list.  Subsequent
 updates to the list will be reflected in the state of the
 process builder.  It is not checked whether
 `],
				[/* inline code block */ 'i', `command`],
				[/* text */ 't', ` corresponds to a valid operating system
 command.`]
			],
			[/* parameters */
				[/* parameter */ 'command', [/* parameter description */
					[/* text */ 't', `the list containing the program and its arguments`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'redirectErrorStream()', [
			[/* method description */
				[/* text */ 't', `Tells whether this process builder merges standard error and
 standard output.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If this property is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, then any error output
 generated by subprocesses subsequently started by this object's
 `],
					[/* reference */ 'r', `#start()`, `start()`],
					[/* text */ 't', ` method will be merged with the standard
 output, so that both can be read using the
 `],
					[/* reference */ 'r', `.Process#getInputStream()`],
					[/* text */ 't', ` method.  This makes it easier
 to correlate error messages with the corresponding output.
 The initial value is `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this process builder's `],
				[/* inline code block */ 'i', `redirectErrorStream`],
				[/* text */ 't', ` property`]
			]
		]],
		[/* method */ 'directory()', [
			[/* method description */
				[/* text */ 't', `Returns this process builder's working directory.

 Subprocesses subsequently started by this object's `],
				[/* reference */ 'r', `#start()`, `start()`],
				[/* text */ 't', ` method will use this as their working directory.
 The returned value may be `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` -- this means to use
 the working directory of the current Java process, usually the
 directory named by the system property `],
				[/* inline code block */ 'i', `user.dir`],
				[/* text */ 't', `,
 as the working directory of the child process.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this process builder's working directory`]
			]
		]],
		[/* method */ 'start()', [
			[/* method description */
				[/* text */ 't', `Starts a new process using the attributes of this process builder.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The new process will
 invoke the command and arguments given by `],
					[/* reference */ 'r', `#command()`, `command()`],
					[/* text */ 't', `,
 in a working directory as given by `],
					[/* reference */ 'r', `#directory()`, `directory()`],
					[/* text */ 't', `,
 with a process environment as given by `],
					[/* reference */ 'r', `#environment()`, `environment()`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', `This method checks that the command is a valid operating
 system command.  Which commands are valid is system-dependent,
 but at the very least the command must be a non-empty list of
 non-null strings.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A minimal set of system dependent environment variables may
 be required to start a process on some operating systems.
 As a result, the subprocess may inherit additional environment variable
 settings beyond those in the process builder's `],
					[/* reference */ 'r', `#environment()`, `environment()`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If there is a security manager, its
 `],
					[/* reference */ 'r', `.SecurityManager#checkExec(java.lang.String)`],
					[/* text */ 't', `
 method is called with the first component of this object's
 `],
					[/* inline code block */ 'i', `command`],
					[/* text */ 't', ` array as its argument. This may result in
 a `],
					[/* reference */ 'r', `java.lang.SecurityException`],
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
 `],
					[/* block */ 'b', `Invalid character in command argument, such as NUL.
 `]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `In such cases an exception will be thrown.  The exact nature
 of the exception is system-dependent, but it will always be a
 subclass of `],
					[/* reference */ 'r', `java.io.IOException`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the operating system does not support the creation of
 processes, an `],
					[/* reference */ 'r', `java.lang.UnsupportedOperationException`],
					[/* text */ 't', ` will be thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Subsequent modifications to this process builder will not
 affect the returned `],
					[/* reference */ 'r', `java.lang.Process`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if an element of the command list is null`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the command is an empty list (has size `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and
         `],
					[/* list */ 'l', [
						[/* block */ 'b', [
							[/* text */ 't', `its
         `],
							[/* reference */ 'r', `.SecurityManager#checkExec(java.lang.String)`],
							[/* text */ 't', `
         method doesn't allow creation of the subprocess, or

         `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', `the standard input to the subprocess was
         `],
							[/* reference */ 'r', `#redirectInput(java.lang.ProcessBuilder.Redirect)`, `redirected from a file`],
							[/* text */ 't', `
         and the security manager's
         `],
							[/* reference */ 'r', `.SecurityManager#checkRead(java.lang.String)`],
							[/* text */ 't', ` method
         denies read access to the file, or

         `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', `the standard output or standard error of the
         subprocess was
         `],
							[/* reference */ 'r', `#redirectOutput(java.lang.ProcessBuilder.Redirect)`, `redirected to a file`],
							[/* text */ 't', `
         and the security manager's
         `],
							[/* reference */ 'r', `.SecurityManager#checkWrite(java.lang.String)`],
							[/* text */ 't', ` method
         denies write access to the file

         `]
						]]
					]]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If the operating system does not support the creation of processes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new `],
				[/* reference */ 'r', `java.lang.Process`],
				[/* text */ 't', ` object for managing the subprocess`]
			]
		]],
		[/* method */ 'command(java.lang.String...)', [
			[/* method description */
				[/* text */ 't', `Sets this process builder's operating system program and
 arguments.  This is a convenience method that sets the command
 to a string list containing the same strings as the
 `],
				[/* inline code block */ 'i', `command`],
				[/* text */ 't', ` array, in the same order.  It is not
 checked whether `],
				[/* inline code block */ 'i', `command`],
				[/* text */ 't', ` corresponds to a valid
 operating system command.`]
			],
			[/* parameters */
				[/* parameter */ 'command', [/* parameter description */
					[/* text */ 't', `a string array containing the program and its arguments`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this process builder`]
			]
		]],
		[/* method */ 'command(java.util.List)', [
			[/* method description */
				[/* text */ 't', `Sets this process builder's operating system program and
 arguments.  This method does `],
				[/* text */ 't', `not`],
				[/* text */ 't', ` make a copy of the
 `],
				[/* inline code block */ 'i', `command`],
				[/* text */ 't', ` list.  Subsequent updates to the list will
 be reflected in the state of the process builder.  It is not
 checked whether `],
				[/* inline code block */ 'i', `command`],
				[/* text */ 't', ` corresponds to a valid
 operating system command.`]
			],
			[/* parameters */
				[/* parameter */ 'command', [/* parameter description */
					[/* text */ 't', `the list containing the program and its arguments`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this process builder`]
			]
		]],
		[/* method */ 'directory(java.io.File)', [
			[/* method description */
				[/* text */ 't', `Sets this process builder's working directory.

 Subprocesses subsequently started by this object's `],
				[/* reference */ 'r', `#start()`, `start()`],
				[/* text */ 't', ` method will use this as their working directory.
 The argument may be `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` -- this means to use the
 working directory of the current Java process, usually the
 directory named by the system property `],
				[/* inline code block */ 'i', `user.dir`],
				[/* text */ 't', `,
 as the working directory of the child process.`]
			],
			[/* parameters */
				[/* parameter */ 'directory', [/* parameter description */
					[/* text */ 't', `the new working directory`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this process builder`]
			]
		]],
		[/* method */ 'inheritIO()', [
			[/* method description */
				[/* text */ 't', `Sets the source and destination for subprocess standard I/O
 to be the same as those of the current Java process.

 `],
				[/* block */ 'b', `This is a convenience method.  An invocation of the form
  `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `pb.inheritIO()`]
				]],
				[/* text */ 't', `
 behaves in exactly the same way as the invocation
  `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `pb.redirectInput(Redirect.INHERIT)
   .redirectOutput(Redirect.INHERIT)
   .redirectError(Redirect.INHERIT)`]
				]],
				[/* text */ 't', `

 This gives behavior equivalent to most operating system
 command interpreters, or the standard C library function
 `],
				[/* inline code block */ 'i', `system()`],
				[/* text */ 't', `.`],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this process builder`]
			]
		]],
		[/* method */ 'redirectError(java.io.File)', [
			[/* method description */
				[/* text */ 't', `Sets this process builder's standard error destination to a file.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a convenience method.  An invocation of the form
 `],
					[/* inline code block */ 'i', `redirectError(file)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation
 `],
					[/* reference */ 'r', `#redirectError(java.lang.ProcessBuilder.Redirect)`, `redirectError`],
					[/* inline code block */ 'i', `(Redirect.to(file))`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the new standard error destination`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this process builder`]
			]
		]],
		[/* method */ 'redirectError(java.lang.ProcessBuilder.Redirect)', [
			[/* method description */
				[/* text */ 't', `Sets this process builder's standard error destination.

 Subprocesses subsequently started by this object's `],
				[/* reference */ 'r', `#start()`, `start()`],
				[/* text */ 't', `
 method send their standard error to this destination.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the destination is `],
					[/* reference */ 'r', `.ProcessBuilder.Redirect#PIPE`],
					[/* text */ 't', `
 (the initial value), then the error output of a subprocess
 can be read using the input stream returned by `],
					[/* reference */ 'r', `.Process#getErrorStream()`],
					[/* text */ 't', `.
 If the destination is set to any other value, then
 `],
					[/* reference */ 'r', `.Process#getErrorStream()`],
					[/* text */ 't', ` will return a
 `],
					[/* text */ 't', `null input stream`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the `],
					[/* reference */ 'r', `#redirectErrorStream()`, `redirectErrorStream`],
					[/* text */ 't', `
 attribute has been set `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, then the redirection set
 by this method has no effect.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'destination', [/* parameter description */
					[/* text */ 't', `the new standard error destination`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the redirect does not correspond to a valid
         destination of data, that is, has type
         `],
					[/* reference */ 'r', `.ProcessBuilder.Redirect.Type#READ`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this process builder`]
			]
		]],
		[/* method */ 'redirectErrorStream(boolean)', [
			[/* method description */
				[/* text */ 't', `Sets this process builder's `],
				[/* inline code block */ 'i', `redirectErrorStream`],
				[/* text */ 't', ` property.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If this property is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, then any error output
 generated by subprocesses subsequently started by this object's
 `],
					[/* reference */ 'r', `#start()`, `start()`],
					[/* text */ 't', ` method will be merged with the standard
 output, so that both can be read using the
 `],
					[/* reference */ 'r', `.Process#getInputStream()`],
					[/* text */ 't', ` method.  This makes it easier
 to correlate error messages with the corresponding output.
 The initial value is `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'redirectErrorStream', [/* parameter description */
					[/* text */ 't', `the new property value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this process builder`]
			]
		]],
		[/* method */ 'redirectInput(java.io.File)', [
			[/* method description */
				[/* text */ 't', `Sets this process builder's standard input source to a file.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a convenience method.  An invocation of the form
 `],
					[/* inline code block */ 'i', `redirectInput(file)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation
 `],
					[/* reference */ 'r', `#redirectInput(java.lang.ProcessBuilder.Redirect)`, `redirectInput`],
					[/* inline code block */ 'i', `(Redirect.from(file))`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the new standard input source`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this process builder`]
			]
		]],
		[/* method */ 'redirectInput(java.lang.ProcessBuilder.Redirect)', [
			[/* method description */
				[/* text */ 't', `Sets this process builder's standard input source.

 Subprocesses subsequently started by this object's `],
				[/* reference */ 'r', `#start()`, `start()`],
				[/* text */ 't', `
 method obtain their standard input from this source.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the source is `],
					[/* reference */ 'r', `.ProcessBuilder.Redirect#PIPE`],
					[/* text */ 't', `
 (the initial value), then the standard input of a
 subprocess can be written to using the output stream
 returned by `],
					[/* reference */ 'r', `.Process#getOutputStream()`],
					[/* text */ 't', `.
 If the source is set to any other value, then
 `],
					[/* reference */ 'r', `.Process#getOutputStream()`],
					[/* text */ 't', ` will return a
 `],
					[/* text */ 't', `null output stream`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `the new standard input source`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the redirect does not correspond to a valid source
         of data, that is, has type
         `],
					[/* reference */ 'r', `.ProcessBuilder.Redirect.Type#WRITE`],
					[/* text */ 't', ` or
         `],
					[/* reference */ 'r', `.ProcessBuilder.Redirect.Type#APPEND`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this process builder`]
			]
		]],
		[/* method */ 'redirectOutput(java.io.File)', [
			[/* method description */
				[/* text */ 't', `Sets this process builder's standard output destination to a file.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is a convenience method.  An invocation of the form
 `],
					[/* inline code block */ 'i', `redirectOutput(file)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation
 `],
					[/* reference */ 'r', `#redirectOutput(java.lang.ProcessBuilder.Redirect)`, `redirectOutput`],
					[/* inline code block */ 'i', `(Redirect.to(file))`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the new standard output destination`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this process builder`]
			]
		]],
		[/* method */ 'redirectOutput(java.lang.ProcessBuilder.Redirect)', [
			[/* method description */
				[/* text */ 't', `Sets this process builder's standard output destination.

 Subprocesses subsequently started by this object's `],
				[/* reference */ 'r', `#start()`, `start()`],
				[/* text */ 't', `
 method send their standard output to this destination.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the destination is `],
					[/* reference */ 'r', `.ProcessBuilder.Redirect#PIPE`],
					[/* text */ 't', `
 (the initial value), then the standard output of a subprocess
 can be read using the input stream returned by `],
					[/* reference */ 'r', `.Process#getInputStream()`],
					[/* text */ 't', `.
 If the destination is set to any other value, then
 `],
					[/* reference */ 'r', `.Process#getInputStream()`],
					[/* text */ 't', ` will return a
 `],
					[/* text */ 't', `null input stream`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'destination', [/* parameter description */
					[/* text */ 't', `the new standard output destination`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the redirect does not correspond to a valid
         destination of data, that is, has type
         `],
					[/* reference */ 'r', `.ProcessBuilder.Redirect.Type#READ`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this process builder`]
			]
		]],
		[/* method */ 'redirectError()', [
			[/* method description */
				[/* text */ 't', `Returns this process builder's standard error destination.

 Subprocesses subsequently started by this object's `],
				[/* reference */ 'r', `#start()`, `start()`],
				[/* text */ 't', `
 method redirect their standard error to this destination.
 The initial value is `],
				[/* reference */ 'r', `.ProcessBuilder.Redirect#PIPE`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this process builder's standard error destination`]
			]
		]],
		[/* method */ 'redirectInput()', [
			[/* method description */
				[/* text */ 't', `Returns this process builder's standard input source.

 Subprocesses subsequently started by this object's `],
				[/* reference */ 'r', `#start()`, `start()`],
				[/* text */ 't', `
 method obtain their standard input from this source.
 The initial value is `],
				[/* reference */ 'r', `.ProcessBuilder.Redirect#PIPE`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this process builder's standard input source`]
			]
		]],
		[/* method */ 'redirectOutput()', [
			[/* method description */
				[/* text */ 't', `Returns this process builder's standard output destination.

 Subprocesses subsequently started by this object's `],
				[/* reference */ 'r', `#start()`, `start()`],
				[/* text */ 't', `
 method redirect their standard output to this destination.
 The initial value is `],
				[/* reference */ 'r', `.ProcessBuilder.Redirect#PIPE`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this process builder's standard output destination`]
			]
		]],
		[/* method */ 'command()', [
			[/* method description */
				[/* text */ 't', `Returns this process builder's operating system program and
 arguments.  The returned list is `],
				[/* text */ 't', `not`],
				[/* text */ 't', ` a copy.  Subsequent
 updates to the list will be reflected in the state of this
 process builder.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this process builder's program and its arguments`]
			]
		]],
		[/* method */ 'environment()', [
			[/* method description */
				[/* text */ 't', `Returns a string map view of this process builder's environment.

 Whenever a process builder is created, the environment is
 initialized to a copy of the current process environment (see
 `],
				[/* reference */ 'r', `.System#getenv()`],
				[/* text */ 't', `).  Subprocesses subsequently started by
 this object's `],
				[/* reference */ 'r', `#start()`, `start()`],
				[/* text */ 't', ` method will use this map as
 their environment.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned object may be modified using ordinary `],
					[/* reference */ 'r', `java.util.Map`],
					[/* text */ 't', ` operations.  These modifications will be
 visible to subprocesses started via the `],
					[/* reference */ 'r', `#start()`, `start()`],
					[/* text */ 't', `
 method.  Two `],
					[/* inline code block */ 'i', `ProcessBuilder`],
					[/* text */ 't', ` instances always
 contain independent process environments, so changes to the
 returned map will never be reflected in any other
 `],
					[/* inline code block */ 'i', `ProcessBuilder`],
					[/* text */ 't', ` instance or the values returned by
 `],
					[/* reference */ 'r', `.System#getenv(java.lang.String)`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', `If the system does not support environment variables, an
 empty map is returned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned map does not permit null keys or values.
 Attempting to insert or query the presence of a null key or
 value will throw a `],
					[/* reference */ 'r', `java.lang.NullPointerException`],
					[/* text */ 't', `.
 Attempting to query the presence of a key or value which is not
 of type `],
					[/* reference */ 'r', `java.lang.String`],
					[/* text */ 't', ` will throw a `],
					[/* reference */ 'r', `java.lang.ClassCastException`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The behavior of the returned map is system-dependent.  A
 system may not allow modifications to environment variables or
 may forbid certain variable names or values.  For this reason,
 attempts to modify the map may fail with
 `],
					[/* reference */ 'r', `java.lang.UnsupportedOperationException`],
					[/* text */ 't', ` or
 `],
					[/* reference */ 'r', `java.lang.IllegalArgumentException`],
					[/* text */ 't', `
 if the modification is not permitted by the operating system.

 `]
				]],
				[/* block */ 'b', `Since the external format of environment variable names and
 values is system-dependent, there may not be a one-to-one
 mapping between them and Java's Unicode strings.  Nevertheless,
 the map is implemented in such a way that environment variables
 which are not modified by Java code will have an unmodified
 native representation in the subprocess.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned map and its collection views may not obey the
 general contract of the `],
					[/* reference */ 'r', `.Object#equals(java.lang.Object)`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `.Object#hashCode()`],
					[/* text */ 't', ` methods.

 `]
				]],
				[/* block */ 'b', `The returned map is typically case-sensitive on all platforms.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If a security manager exists, its
 `],
					[/* reference */ 'r', `.SecurityManager#checkPermission(java.security.Permission)`],
					[/* text */ 't', ` method
 is called with a
 `],
					[/* reference */ 'r', `java.lang.RuntimePermission`],
					[/* inline code block */ 'i', `("getenv.*")`],
					[/* text */ 't', ` permission.
 This may result in a `],
					[/* reference */ 'r', `java.lang.SecurityException`],
					[/* text */ 't', ` being thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `When passing information to a Java subprocess,
 `],
					[/* reference */ 'r', `.System#EnvironmentVSSystemProperties`],
					[/* text */ 't', `
 are generally preferred over environment variables.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
         `],
					[/* reference */ 'r', `.SecurityManager#checkPermission(java.security.Permission)`],
					[/* text */ 't', `
         method doesn't allow access to the process environment`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this process builder's environment`]
			]
		]],
		[/* method */ 'startPipeline(java.util.List)', [
			[/* method description */
				[/* text */ 't', `Starts a Process for each ProcessBuilder, creating a pipeline of
 processes linked by their standard output and standard input streams.
 The attributes of each ProcessBuilder are used to start the respective
 process except that as each process is started, its standard output
 is directed to the standard input of the next.  The redirects for standard
 input of the first process and standard output of the last process are
 initialized using the redirect settings of the respective ProcessBuilder.
 All other `],
				[/* inline code block */ 'i', `ProcessBuilder`],
				[/* text */ 't', ` redirects should be
 `],
				[/* reference */ 'r', `.ProcessBuilder.Redirect#PIPE`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 All input and output streams between the intermediate processes are
 not accessible.
 The `],
					[/* reference */ 'r', `.Process#getOutputStream()`],
					[/* text */ 't', ` of all processes
 except the first process are `],
					[/* text */ 't', `null output streams`],
					[/* text */ 't', `
 The `],
					[/* reference */ 'r', `.Process#getInputStream()`],
					[/* text */ 't', ` of all processes
 except the last process are `],
					[/* text */ 't', `null input streams`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* reference */ 'r', `#redirectErrorStream()`, `redirectErrorStream()`],
					[/* text */ 't', ` of each ProcessBuilder applies to the
 respective process.  If set to `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, the error stream is written
 to the same stream as standard output.
 `]
				]],
				[/* block */ 'b', `
 If starting any of the processes throws an Exception, all processes
 are forcibly destroyed.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `startPipeline`],
					[/* text */ 't', ` method performs the same checks on
 each ProcessBuilder as does the `],
					[/* reference */ 'r', `#start()`, `start()`],
					[/* text */ 't', ` method. Each new process
 invokes the command and arguments given by the respective process builder's
 `],
					[/* reference */ 'r', `#command()`, `command()`],
					[/* text */ 't', `, in a working directory as given by its `],
					[/* reference */ 'r', `#directory()`, `directory()`],
					[/* text */ 't', `,
 with a process environment as given by its `],
					[/* reference */ 'r', `#environment()`, `environment()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 Each process builder's command is checked to be a valid operating
 system command.  Which commands are valid is system-dependent,
 but at the very least the command must be a non-empty list of
 non-null strings.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A minimal set of system dependent environment variables may
 be required to start a process on some operating systems.
 As a result, the subprocess may inherit additional environment variable
 settings beyond those in the process builder's `],
					[/* reference */ 'r', `#environment()`, `environment()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If there is a security manager, its
 `],
					[/* reference */ 'r', `.SecurityManager#checkExec(java.lang.String)`],
					[/* text */ 't', `
 method is called with the first component of each process builder's
 `],
					[/* inline code block */ 'i', `command`],
					[/* text */ 't', ` array as its argument. This may result in
 a `],
					[/* reference */ 'r', `java.lang.SecurityException`],
					[/* text */ 't', ` being thrown.
 `]
				]],
				[/* block */ 'b', `
 Starting an operating system process is highly system-dependent.
 Among the many things that can go wrong are:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `The operating system program file was not found.
 `],
					[/* block */ 'b', `Access to the program file was denied.
 `],
					[/* block */ 'b', `The working directory does not exist.
 `],
					[/* block */ 'b', `Invalid character in command argument, such as NUL.
 `]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 In such cases an exception will be thrown.  The exact nature
 of the exception is system-dependent, but it will always be a
 subclass of `],
					[/* reference */ 'r', `java.io.IOException`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the operating system does not support the creation of
 processes, an `],
					[/* reference */ 'r', `java.lang.UnsupportedOperationException`],
					[/* text */ 't', ` will be thrown.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Subsequent modifications to any of the specified builders
 will not affect the returned `],
					[/* reference */ 'r', `java.lang.Process`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'builders', [/* parameter description */
					[/* text */ 't', `a List of ProcessBuilders`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `any of the redirects except the
          standard input of the first builder and the standard output of
          the last builder are not `],
					[/* reference */ 'r', `.ProcessBuilder.Redirect#PIPE`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if an element of the command list is null or
         if an element of the ProcessBuilder list is null or
         the builders argument is null`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the command is an empty list (has size `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and
         `],
					[/* list */ 'l', [
						[/* block */ 'b', [
							[/* text */ 't', `its
         `],
							[/* reference */ 'r', `.SecurityManager#checkExec(java.lang.String)`],
							[/* text */ 't', `
         method doesn't allow creation of the subprocess, or
         `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', `the standard input to the subprocess was
         `],
							[/* reference */ 'r', `#redirectInput(java.lang.ProcessBuilder.Redirect)`, `redirected from a file`],
							[/* text */ 't', `
         and the security manager's
         `],
							[/* reference */ 'r', `.SecurityManager#checkRead(java.lang.String)`],
							[/* text */ 't', ` method
         denies read access to the file, or
         `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', `the standard output or standard error of the
         subprocess was
         `],
							[/* reference */ 'r', `#redirectOutput(java.lang.ProcessBuilder.Redirect)`, `redirected to a file`],
							[/* text */ 't', `
         and the security manager's
         `],
							[/* reference */ 'r', `.SecurityManager#checkWrite(java.lang.String)`],
							[/* text */ 't', ` method
         denies write access to the file
         `]
						]]
					]]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If the operating system does not support the creation of processes`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `List<Process>`],
				[/* text */ 't', `es started from the corresponding
         ProcessBuilder`]
			]
		]]
	],
]);
