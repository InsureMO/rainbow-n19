import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Process', [
	[/* class description */
		[/* inline code block */ 'i', `Process`],
		[/* text */ 't', ` provides control of native processes started by
 ProcessBuilder.start and Runtime.exec.
 The class provides methods for performing input from the process, performing
 output to the process, waiting for the process to complete,
 checking the exit status of the process, and destroying (killing)
 the process.
 The `],
		[/* reference */ 'r', `java.lang.ProcessBuilder#start()`, `ProcessBuilder.start()`],
		[/* text */ 't', ` and
 `],
		[/* reference */ 'r', `java.lang.Runtime#exec(java.lang.String[],java.lang.String[],java.io.File)`, `Runtime.exec`],
		[/* text */ 't', `
 methods create a native process and return an instance of a
 subclass of `],
		[/* inline code block */ 'i', `Process`],
		[/* text */ 't', ` that can be used to control the process
 and obtain information about it.

 `],
		[/* block */ 'b', `The methods that create processes may not work well for special
 processes on certain native platforms, such as native windowing
 processes, daemon processes, Win16/DOS processes on Microsoft
 Windows, or shell scripts.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `By default, the created process does not have its own terminal
 or console.  All its standard I/O (i.e. stdin, stdout, stderr)
 operations will be redirected to the parent process, where they can
 be accessed via the streams obtained using the methods
 `],
			[/* reference */ 'r', `#getOutputStream()`, `getOutputStream()`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#getInputStream()`, `getInputStream()`],
			[/* text */ 't', `, and
 `],
			[/* reference */ 'r', `#getErrorStream()`, `getErrorStream()`],
			[/* text */ 't', `.
 The I/O streams of characters and lines can be written and read using the methods
 `],
			[/* reference */ 'r', `#outputWriter()`, `outputWriter()`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `#outputWriter(java.nio.charset.Charset)`, `outputWriter(Charset)`],
			[/* text */ 't', `},
 `],
			[/* reference */ 'r', `#inputReader()`, `inputReader()`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `#inputReader(java.nio.charset.Charset)`, `inputReader(Charset)`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#errorReader()`, `errorReader()`],
			[/* text */ 't', `, and `],
			[/* reference */ 'r', `#errorReader(java.nio.charset.Charset)`, `errorReader(Charset)`],
			[/* text */ 't', `.
 The parent process uses these streams to feed input to and get output
 from the process.  Because some native platforms only provide
 limited buffer size for standard input and output streams, failure
 to promptly write the input stream or read the output stream of
 the process may cause the process to block, or even deadlock.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Where desired, `],
			[/* reference */ 'r', `java.lang.ProcessBuilder#redirect-input`, `process I/O can also be redirected`],
			[/* text */ 't', `
 using methods of the `],
			[/* reference */ 'r', `java.lang.ProcessBuilder`, `ProcessBuilder`],
			[/* text */ 't', ` class.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The process is not killed when there are no more references to
 the `],
			[/* inline code block */ 'i', `Process`],
			[/* text */ 't', ` object, but rather the process
 continues executing asynchronously.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `There is no requirement that the process represented by a `],
			[/* inline code block */ 'i', `Process`],
			[/* text */ 't', ` object execute asynchronously or concurrently with respect
 to the Java process that owns the `],
			[/* inline code block */ 'i', `Process`],
			[/* text */ 't', ` object.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `As of 1.5, `],
			[/* reference */ 'r', `java.lang.ProcessBuilder#start()`, `ProcessBuilder.start()`],
			[/* text */ 't', ` is the preferred way
 to create a `],
			[/* inline code block */ 'i', `Process`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Subclasses of Process should override the `],
			[/* reference */ 'r', `#onExit()`, `onExit()`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `#toHandle()`, `toHandle()`],
			[/* text */ 't', ` methods to provide a fully functional Process including the
 `],
			[/* reference */ 'r', `#pid()`, `process id`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#info()`, `information about the process`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#children()`, `direct children`],
			[/* text */ 't', `, and
 `],
			[/* reference */ 'r', `#descendants()`, `direct children plus descendants of those children`],
			[/* text */ 't', ` of the process.
 Delegating to the underlying Process or ProcessHandle is typically
 easiest and most efficient.`]
		]]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Default constructor for Process.`]
			],
			/* parameters */,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'exitValue()', [
			[/* method description */
				[/* text */ 't', `Returns the exit value for the process.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.IllegalThreadStateException', [/* throw description */
					[/* text */ 't', `if the process represented
         by this `],
					[/* inline code block */ 'i', `Process`],
					[/* text */ 't', ` object has not yet terminated`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the exit value of the process represented by this
         `],
				[/* inline code block */ 'i', `Process`],
				[/* text */ 't', ` object.  By convention, the value
         `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` indicates normal termination.`]
			]
		]],
		[/* method */ 'waitFor()', [
			[/* method description */
				[/* text */ 't', `Causes the current thread to wait, if necessary, until the
 process represented by this `],
				[/* inline code block */ 'i', `Process`],
				[/* text */ 't', ` object has
 terminated.  This method returns immediately if the process
 has already terminated.  If the process has not yet
 terminated, the calling thread will be blocked until the
 process exits.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `if the current thread is
         `],
					[/* reference */ 'r', `java.lang.Thread#interrupt()`, `interrupted`],
					[/* text */ 't', ` by another
         thread while it is waiting, then the wait is ended and
         an `],
					[/* reference */ 'r', `java.lang.InterruptedException`, `InterruptedException`],
					[/* text */ 't', ` is thrown.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the exit value of the process represented by this
         `],
				[/* inline code block */ 'i', `Process`],
				[/* text */ 't', ` object.  By convention, the value
         `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` indicates normal termination.`]
			]
		]],
		[/* method */ 'getErrorStream()', [
			[/* method description */
				[/* text */ 't', `Returns the input stream connected to the error output of the
 process.  The stream obtains data piped from the error output
 of the process represented by this `],
				[/* inline code block */ 'i', `Process`],
				[/* text */ 't', ` object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the standard error of the process has been redirected using
 `],
					[/* reference */ 'r', `java.lang.ProcessBuilder#redirectError(java.lang.ProcessBuilder.Redirect)`, `ProcessBuilder.redirectError`],
					[/* text */ 't', ` or
 `],
					[/* reference */ 'r', `java.lang.ProcessBuilder#redirectErrorStream(boolean)`, `ProcessBuilder.redirectErrorStream`],
					[/* text */ 't', `
 then this method will return a
 `],
					[/* reference */ 'r', `java.lang.ProcessBuilder#redirect-output`, `null input stream`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the input stream connected to the error output of
         the process`]
			]
		]],
		[/* method */ 'getInputStream()', [
			[/* method description */
				[/* text */ 't', `Returns the input stream connected to the normal output of the
 process.  The stream obtains data piped from the standard
 output of the process represented by this `],
				[/* inline code block */ 'i', `Process`],
				[/* text */ 't', ` object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the standard output of the process has been redirected using
 `],
					[/* reference */ 'r', `java.lang.ProcessBuilder#redirectOutput(java.lang.ProcessBuilder.Redirect)`, `ProcessBuilder.redirectOutput`],
					[/* text */ 't', `
 then this method will return a
 `],
					[/* reference */ 'r', `java.lang.ProcessBuilder#redirect-output`, `null input stream`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Otherwise, if the standard error of the process has been
 redirected using
 `],
					[/* reference */ 'r', `java.lang.ProcessBuilder#redirectErrorStream(boolean)`, `ProcessBuilder.redirectErrorStream`],
					[/* text */ 't', `
 then the input stream returned by this method will receive the
 merged standard output and the standard error of the process.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the input stream connected to the normal output of the
         process`]
			]
		]],
		[/* method */ 'getOutputStream()', [
			[/* method description */
				[/* text */ 't', `Returns the output stream connected to the normal input of the
 process.  Output to the stream is piped into the standard
 input of the process represented by this `],
				[/* inline code block */ 'i', `Process`],
				[/* text */ 't', ` object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the standard input of the process has been redirected using
 `],
					[/* reference */ 'r', `java.lang.ProcessBuilder#redirectInput(java.lang.ProcessBuilder.Redirect)`, `ProcessBuilder.redirectInput`],
					[/* text */ 't', `
 then this method will return a
 `],
					[/* reference */ 'r', `java.lang.ProcessBuilder#redirect-input`, `null output stream`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the output stream connected to the normal input of the
         process`]
			]
		]],
		[/* method */ 'destroy()', [
			[/* method description */
				[/* text */ 't', `Kills the process.
 Whether the process represented by this `],
				[/* inline code block */ 'i', `Process`],
				[/* text */ 't', ` object is
 `],
				[/* reference */ 'r', `#supportsNormalTermination()`, `normally terminated`],
				[/* text */ 't', ` or not is
 implementation dependent.
 Forcible process destruction is defined as the immediate termination of a
 process, whereas normal termination allows the process to shut down cleanly.
 If the process is not alive, no action is taken.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* reference */ 'r', `java.util.concurrent.CompletableFuture`, `CompletableFuture`],
					[/* text */ 't', ` from `],
					[/* reference */ 'r', `#onExit()`, `onExit()`],
					[/* text */ 't', ` is
 `],
					[/* reference */ 'r', `java.util.concurrent.CompletableFuture#complete(T)`, `completed`],
					[/* text */ 't', `
 when the process has terminated.`]
				]]
			],
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'isAlive()', [
			[/* method description */
				[/* text */ 't', `Tests whether the process represented by this `],
				[/* inline code block */ 'i', `Process`],
				[/* text */ 't', ` is
 alive.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the process represented by this
         `],
				[/* inline code block */ 'i', `Process`],
				[/* text */ 't', ` object has not yet terminated.`]
			]
		]],
		[/* method */ 'supportsNormalTermination()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the implementation of `],
				[/* reference */ 'r', `#destroy()`, `destroy()`],
				[/* text */ 't', ` is to
 normally terminate the process,
 Returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if the implementation of `],
				[/* inline code block */ 'i', `destroy`],
				[/* text */ 't', `
 forcibly and immediately terminates the process.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Invoking this method on `],
					[/* inline code block */ 'i', `Process`],
					[/* text */ 't', ` objects returned by
 `],
					[/* reference */ 'r', `java.lang.ProcessBuilder#start()`, `ProcessBuilder.start()`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `java.lang.Runtime#exec(java.lang.String)`, `Runtime.exec(java.lang.String)`],
					[/* text */ 't', ` return
 `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` depending on the platform implementation.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the Process implementation
         does not support this operation`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the implementation of `],
				[/* reference */ 'r', `#destroy()`, `destroy()`],
				[/* text */ 't', ` is to
         normally terminate the process;
         otherwise, `],
				[/* reference */ 'r', `#destroy()`, `destroy()`],
				[/* text */ 't', ` forcibly terminates the process`]
			]
		]],
		[/* method */ 'waitFor(long,java.util.concurrent.TimeUnit)', [
			[/* method description */
				[/* text */ 't', `Causes the current thread to wait, if necessary, until the
 process represented by this `],
				[/* inline code block */ 'i', `Process`],
				[/* text */ 't', ` object has
 terminated, or the specified waiting time elapses.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the process has already terminated then this method returns
 immediately with the value `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `.  If the process has not
 terminated and the timeout value is less than, or equal to, zero, then
 this method returns immediately with the value `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The default implementation of this methods polls the `],
					[/* inline code block */ 'i', `exitValue`],
					[/* text */ 't', `
 to check if the process has terminated. Concrete implementations of this
 class are strongly encouraged to override this method with a more
 efficient implementation.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'timeout', [/* parameter description */
					[/* text */ 't', `the maximum time to wait`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the time unit of the `],
					[/* inline code block */ 'i', `timeout`],
					[/* text */ 't', ` argument`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `if the current thread is interrupted
         while waiting.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if unit is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the process has exited and `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if
         the waiting time elapsed before the process has exited.`]
			]
		]],
		[/* method */ 'errorReader()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.io.BufferedReader`, `BufferedReader`],
				[/* text */ 't', ` connected to the standard
 error of the process. The `],
				[/* reference */ 'r', `java.nio.charset.Charset`, `Charset`],
				[/* text */ 't', ` for the native encoding is used
 to read characters, lines, or stream lines from standard error.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method delegates to `],
					[/* reference */ 'r', `#errorReader(java.nio.charset.Charset)`, `errorReader(Charset)`],
					[/* text */ 't', ` using the
 `],
					[/* reference */ 'r', `java.nio.charset.Charset`, `Charset`],
					[/* text */ 't', ` named by the `],
					[/* inline code block */ 'i', `native.encoding`],
					[/* text */ 't', ` system property.
 If the `],
					[/* inline code block */ 'i', `native.encoding`],
					[/* text */ 't', ` is not a valid charset name or not supported
 the `],
					[/* reference */ 'r', `java.nio.charset.Charset#defaultCharset()`, `Charset.defaultCharset()`],
					[/* text */ 't', ` is used.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.io.BufferedReader`, `BufferedReader`],
				[/* text */ 't', ` using the
          `],
				[/* inline code block */ 'i', `native.encoding`],
				[/* text */ 't', ` if supported, otherwise, the
          `],
				[/* reference */ 'r', `java.nio.charset.Charset#defaultCharset()`, `Charset.defaultCharset()`]
			]
		]],
		[/* method */ 'errorReader(java.nio.charset.Charset)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.io.BufferedReader`, `BufferedReader`],
				[/* text */ 't', ` connected to the
 standard error of this process using a Charset.
 The `],
				[/* inline code block */ 'i', `BufferedReader`],
				[/* text */ 't', ` can be used to read characters, lines,
 or stream lines of the standard error.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Characters are read by an InputStreamReader that reads and decodes bytes
 from this process `],
					[/* reference */ 'r', `#getErrorStream()`, `getErrorStream()`],
					[/* text */ 't', `. Bytes are decoded to characters
 using the `],
					[/* inline code block */ 'i', `charset`],
					[/* text */ 't', `; malformed-input and unmappable-character
 sequences are replaced with the charset's default replacement.
 The `],
					[/* inline code block */ 'i', `BufferedReader`],
					[/* text */ 't', ` reads and buffers characters from the InputStreamReader.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The first call to this method creates the `],
					[/* reference */ 'r', `java.io.BufferedReader`, `BufferedReader`],
					[/* text */ 't', `,
 if called again with the same `],
					[/* inline code block */ 'i', `charset`],
					[/* text */ 't', ` the same `],
					[/* inline code block */ 'i', `BufferedReader`],
					[/* text */ 't', ` is returned.
 It is an error to call this method again with a different `],
					[/* inline code block */ 'i', `charset`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the standard error of the process has been redirected using
 `],
					[/* reference */ 'r', `java.lang.ProcessBuilder#redirectError(java.lang.ProcessBuilder.Redirect)`, `ProcessBuilder.redirectError`],
					[/* text */ 't', ` or
 `],
					[/* reference */ 'r', `java.lang.ProcessBuilder#redirectErrorStream(boolean)`, `ProcessBuilder.redirectErrorStream`],
					[/* text */ 't', `
 then the `],
					[/* inline code block */ 'i', `InputStreamReader`],
					[/* text */ 't', ` will be reading from a
 `],
					[/* reference */ 'r', `java.lang.ProcessBuilder#redirect-output`, `null input stream`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Charset`],
					[/* text */ 't', ` used to decode bytes to characters`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `charset`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if called more than once with different charset arguments`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `BufferedReader`],
				[/* text */ 't', ` for the standard error of the process using the `],
				[/* inline code block */ 'i', `charset`]
			]
		]],
		[/* method */ 'inputReader()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.io.BufferedReader`, `BufferedReader`],
				[/* text */ 't', ` connected to the standard
 output of the process. The `],
				[/* reference */ 'r', `java.nio.charset.Charset`, `Charset`],
				[/* text */ 't', ` for the native encoding is used
 to read characters, lines, or stream lines from standard output.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method delegates to `],
					[/* reference */ 'r', `#inputReader(java.nio.charset.Charset)`, `inputReader(Charset)`],
					[/* text */ 't', ` using the
 `],
					[/* reference */ 'r', `java.nio.charset.Charset`, `Charset`],
					[/* text */ 't', ` named by the `],
					[/* inline code block */ 'i', `native.encoding`],
					[/* text */ 't', ` system property.
 If the `],
					[/* inline code block */ 'i', `native.encoding`],
					[/* text */ 't', ` is not a valid charset name or not supported
 the `],
					[/* reference */ 'r', `java.nio.charset.Charset#defaultCharset()`, `Charset.defaultCharset()`],
					[/* text */ 't', ` is used.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.io.BufferedReader`, `BufferedReader`],
				[/* text */ 't', ` using the
          `],
				[/* inline code block */ 'i', `native.encoding`],
				[/* text */ 't', ` if supported, otherwise, the
          `],
				[/* reference */ 'r', `java.nio.charset.Charset#defaultCharset()`, `Charset.defaultCharset()`]
			]
		]],
		[/* method */ 'inputReader(java.nio.charset.Charset)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.io.BufferedReader`, `BufferedReader`],
				[/* text */ 't', ` connected to the
 standard output of this process using a Charset.
 The `],
				[/* inline code block */ 'i', `BufferedReader`],
				[/* text */ 't', ` can be used to read characters, lines,
 or stream lines of the standard output.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Characters are read by an InputStreamReader that reads and decodes bytes
 from this process `],
					[/* reference */ 'r', `#getInputStream()`, `getInputStream()`],
					[/* text */ 't', `. Bytes are decoded to characters
 using the `],
					[/* inline code block */ 'i', `charset`],
					[/* text */ 't', `; malformed-input and unmappable-character
 sequences are replaced with the charset's default replacement.
 The `],
					[/* inline code block */ 'i', `BufferedReader`],
					[/* text */ 't', ` reads and buffers characters from the InputStreamReader.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The first call to this method creates the `],
					[/* reference */ 'r', `java.io.BufferedReader`, `BufferedReader`],
					[/* text */ 't', `,
 if called again with the same `],
					[/* inline code block */ 'i', `charset`],
					[/* text */ 't', ` the same `],
					[/* inline code block */ 'i', `BufferedReader`],
					[/* text */ 't', ` is returned.
 It is an error to call this method again with a different `],
					[/* inline code block */ 'i', `charset`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the standard output of the process has been redirected using
 `],
					[/* reference */ 'r', `java.lang.ProcessBuilder#redirectOutput(java.lang.ProcessBuilder.Redirect)`, `ProcessBuilder.redirectOutput`],
					[/* text */ 't', `
 then the `],
					[/* inline code block */ 'i', `InputStreamReader`],
					[/* text */ 't', ` will be reading from a
 `],
					[/* reference */ 'r', `java.lang.ProcessBuilder#redirect-output`, `null input stream`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Otherwise, if the standard error of the process has been redirected using
 `],
					[/* reference */ 'r', `java.lang.ProcessBuilder#redirectErrorStream(boolean)`, `ProcessBuilder.redirectErrorStream`],
					[/* text */ 't', ` then the input reader returned by
 this method will receive the merged standard output and the standard error
 of the process.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Charset`],
					[/* text */ 't', ` used to decode bytes to characters`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `charset`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if called more than once with different charset arguments`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `BufferedReader`],
				[/* text */ 't', ` for the standard output of the process using the `],
				[/* inline code block */ 'i', `charset`]
			]
		]],
		[/* method */ 'outputWriter()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BufferedWriter`],
				[/* text */ 't', ` connected to the normal input of the process
 using the native encoding.
 Writes text to a character-output stream, buffering characters so as to provide
 for the efficient writing of single characters, arrays, and strings.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method delegates to `],
					[/* reference */ 'r', `#outputWriter(java.nio.charset.Charset)`, `outputWriter(Charset)`],
					[/* text */ 't', ` using the
 `],
					[/* reference */ 'r', `java.nio.charset.Charset`, `Charset`],
					[/* text */ 't', ` named by the `],
					[/* inline code block */ 'i', `native.encoding`],
					[/* text */ 't', ` system property.
 If the `],
					[/* inline code block */ 'i', `native.encoding`],
					[/* text */ 't', ` is not a valid charset name or not supported
 the `],
					[/* reference */ 'r', `java.nio.charset.Charset#defaultCharset()`, `Charset.defaultCharset()`],
					[/* text */ 't', ` is used.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `BufferedWriter`],
				[/* text */ 't', ` to the standard input of the process using the charset
          for the `],
				[/* inline code block */ 'i', `native.encoding`],
				[/* text */ 't', ` system property`]
			]
		]],
		[/* method */ 'outputWriter(java.nio.charset.Charset)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BufferedWriter`],
				[/* text */ 't', ` connected to the normal input of the process
 using a Charset.
 Writes text to a character-output stream, buffering characters so as to provide
 for the efficient writing of single characters, arrays, and strings.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Characters written by the writer are encoded to bytes using `],
					[/* reference */ 'r', `java.io.OutputStreamWriter`, `OutputStreamWriter`],
					[/* text */ 't', `
 and the `],
					[/* reference */ 'r', `java.nio.charset.Charset`, `Charset`],
					[/* text */ 't', ` are written to the standard input of the process represented
 by this `],
					[/* inline code block */ 'i', `Process`],
					[/* text */ 't', `.
 Malformed-input and unmappable-character sequences are replaced with the charset's
 default replacement.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The first call to this method creates the `],
					[/* reference */ 'r', `java.io.BufferedWriter`, `BufferedWriter`],
					[/* text */ 't', `,
 if called again with the same `],
					[/* inline code block */ 'i', `charset`],
					[/* text */ 't', ` the same `],
					[/* inline code block */ 'i', `BufferedWriter`],
					[/* text */ 't', ` is returned.
 It is an error to call this method again with a different `],
					[/* inline code block */ 'i', `charset`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the standard input of the process has been redirected using
 `],
					[/* reference */ 'r', `java.lang.ProcessBuilder#redirectInput(java.lang.ProcessBuilder.Redirect)`, `ProcessBuilder.redirectInput`],
					[/* text */ 't', ` then the `],
					[/* inline code block */ 'i', `OutputStreamWriter`],
					[/* text */ 't', ` writes to a
 `],
					[/* reference */ 'r', `java.lang.ProcessBuilder#redirect-input`, `null output stream`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Charset`],
					[/* text */ 't', ` to encode characters to bytes`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `charset`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if called more than once with different charset arguments`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `BufferedWriter`],
				[/* text */ 't', ` to the standard input of the process using the `],
				[/* inline code block */ 'i', `charset`]
			]
		]],
		[/* method */ 'destroyForcibly()', [
			[/* method description */
				[/* text */ 't', `Kills the process forcibly. The process represented by this
 `],
				[/* inline code block */ 'i', `Process`],
				[/* text */ 't', ` object is forcibly terminated.
 Forcible process destruction is defined as the immediate termination of a
 process, whereas normal termination allows the process to shut down cleanly.
 If the process is not alive, no action is taken.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* reference */ 'r', `java.util.concurrent.CompletableFuture`, `CompletableFuture`],
					[/* text */ 't', ` from `],
					[/* reference */ 'r', `#onExit()`, `onExit()`],
					[/* text */ 't', ` is
 `],
					[/* reference */ 'r', `java.util.concurrent.CompletableFuture#complete(T)`, `completed`],
					[/* text */ 't', `
 when the process has terminated.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Invoking this method on `],
					[/* inline code block */ 'i', `Process`],
					[/* text */ 't', ` objects returned by
 `],
					[/* reference */ 'r', `java.lang.ProcessBuilder#start()`, `ProcessBuilder.start()`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `java.lang.Runtime#exec(java.lang.String)`, `Runtime.exec(java.lang.String)`],
					[/* text */ 't', ` forcibly terminate
 the process.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Process`],
				[/* text */ 't', ` object representing the
         process forcibly destroyed`]
			]
		]],
		[/* method */ 'toHandle()', [
			[/* method description */
				[/* text */ 't', `Returns a ProcessHandle for the Process.

 `],
				[/* inline code block */ 'i', `Process`],
				[/* text */ 't', ` objects returned by `],
				[/* reference */ 'r', `java.lang.ProcessBuilder#start()`, `ProcessBuilder.start()`],
				[/* text */ 't', ` and
 `],
				[/* reference */ 'r', `java.lang.Runtime#exec(java.lang.String)`, `Runtime.exec(java.lang.String)`],
				[/* text */ 't', ` implement `],
				[/* inline code block */ 'i', `toHandle`],
				[/* text */ 't', ` as the equivalent of
 `],
				[/* reference */ 'r', `java.lang.ProcessHandle#of(long)`, `ProcessHandle.of(pid)`],
				[/* text */ 't', ` including the
 check for a SecurityManager and `],
				[/* inline code block */ 'i', `RuntimePermission("manageProcess")`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the Process implementation
         does not support this operation`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager has been installed and
         it denies RuntimePermission("manageProcess")`]
				]]
			],
			[/* return description */
				[/* text */ 't', `Returns a ProcessHandle for the Process`]
			]
		]],
		[/* method */ 'info()', [
			[/* method description */
				[/* text */ 't', `Returns a snapshot of information about the process.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` A `],
					[/* reference */ 'r', `java.lang.ProcessHandle.Info`, `ProcessHandle.Info`],
					[/* text */ 't', ` instance has accessor methods
 that return information about the process if it is available.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the Process implementation
         does not support this operation`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a snapshot of information about the process, always non-null`]
			]
		]],
		[/* method */ 'onExit()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `CompletableFuture<Process>`],
				[/* text */ 't', ` for the termination of the Process.
 The `],
				[/* reference */ 'r', `java.util.concurrent.CompletableFuture`, `CompletableFuture`],
				[/* text */ 't', ` provides the ability
 to trigger dependent functions or actions that may be run synchronously
 or asynchronously upon process termination.
 When the process has terminated the CompletableFuture is
 `],
				[/* reference */ 'r', `java.util.concurrent.CompletableFuture#complete(T)`, `completed`],
				[/* text */ 't', ` regardless
 of the exit status of the process.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Calling `],
					[/* inline code block */ 'i', `onExit().get()`],
					[/* text */ 't', ` waits for the process to terminate and returns
 the Process. The future can be used to check if the process is
 `],
					[/* reference */ 'r', `java.util.concurrent.CompletableFuture#isDone()`, `done`],
					[/* text */ 't', ` or to
 `],
					[/* reference */ 'r', `java.util.concurrent.CompletableFuture#get()`, `wait`],
					[/* text */ 't', ` for it to terminate.
 `],
					[/* reference */ 'r', `java.util.concurrent.CompletableFuture#cancel(boolean)`, `Cancelling`],
					[/* text */ 't', `
 the CompletableFuture does not affect the Process.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Processes returned from `],
					[/* reference */ 'r', `java.lang.ProcessBuilder#start()`, `ProcessBuilder.start()`],
					[/* text */ 't', ` override the
 default implementation to provide an efficient mechanism to wait
 for process exit.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a new `],
				[/* inline code block */ 'i', `CompletableFuture<Process>`],
				[/* text */ 't', ` for the Process`]
			]
		]],
		[/* method */ 'children()', [
			[/* method description */
				[/* text */ 't', `Returns a snapshot of the direct children of the process.
 The parent of a direct child process is the process.
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
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the Process implementation
         does not support this operation`]
				]],
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
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the Process implementation
         does not support this operation`]
				]],
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
		[/* method */ 'pid()', [
			[/* method description */
				[/* text */ 't', `Returns the native process ID of the process.
 The native process ID is an identification number that the operating
 system assigns to the process.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the Process implementation
         does not support this operation`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the native process id of the process`]
			]
		]]
	],
	/* enum values */ UDF
]);
