import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.Console', [
	[/* class description */
		[/* text */ 't', `Methods to access the character-based console device, if any, associated
 with the current Java virtual machine.

 `],
		[/* block */ 'b', ` Whether a virtual machine has a console is dependent upon the
 underlying platform and also upon the manner in which the virtual
 machine is invoked.  If the virtual machine is started from an
 interactive command line without redirecting the standard input and
 output streams then its console will exist and will typically be
 connected to the keyboard and display from which the virtual machine
 was launched.  If the virtual machine is started automatically, for
 example by a background job scheduler, then it will typically not
 have a console.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 If this virtual machine has a console then it is represented by a
 unique instance of this class which can be obtained by invoking the
 `],
			[/* reference */ 'r', `java.lang.System#console()`, `System.console()`],
			[/* text */ 't', ` method.  If no console device is
 available then an invocation of that method will return `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Read and write operations are synchronized to guarantee the atomic
 completion of critical operations; therefore invoking methods
 `],
			[/* reference */ 'r', `#readLine()`, `readLine()`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `#readPassword()`, `readPassword()`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `#format(java.lang.String,java.lang.Object...)`, `format()`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#printf(java.lang.String,java.lang.Object...)`, `printf()`],
			[/* text */ 't', ` as well as the read, format and write operations
 on the objects returned by `],
			[/* reference */ 'r', `#reader()`, `reader()`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `#writer()`, `writer()`],
			[/* text */ 't', ` may
 block in multithreaded scenarios.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Invoking `],
			[/* inline code block */ 'i', `close()`],
			[/* text */ 't', ` on the objects returned by the `],
			[/* reference */ 'r', `#reader()`, `reader()`],
			[/* text */ 't', `
 and the `],
			[/* reference */ 'r', `#writer()`, `writer()`],
			[/* text */ 't', ` will not close the underlying stream of those
 objects.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The console-read methods return `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` when the end of the
 console input stream is reached, for example by typing control-D on
 Unix or control-Z on Windows.  Subsequent read operations will succeed
 if additional characters are later entered on the console's input
 device.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Unless otherwise specified, passing a `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` argument to any method
 in this class will cause a `],
			[/* reference */ 'r', `java.lang.NullPointerException`, `NullPointerException`],
			[/* text */ 't', ` to be thrown.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* text */ 't', `Security note:`],
			[/* text */ 't', `
 If an application needs to read a password or other secure data, it should
 use `],
			[/* reference */ 'r', `#readPassword()`, `readPassword()`],
			[/* text */ 't', ` or `],
			[/* reference */ 'r', `#readPassword(java.lang.String,java.lang.Object...)`, `readPassword(String, Object...)`],
			[/* text */ 't', ` and
 manually zero the returned character array after processing to minimize the
 lifetime of sensitive data in memory.

 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `Console cons;
 char[] passwd;
 if ((cons = System.console()) != null &&
     (passwd = cons.readPassword("[%s]", "Password:")) != null) {
     ...
     java.util.Arrays.fill(passwd, ' ');
 }`]
			]]
		]],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'readPassword()', [
			[/* method description */
				[/* text */ 't', `Reads a password or passphrase from the console with echoing disabled`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOError', [/* throw description */
					[/* text */ 't', `If an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A character array containing the password or passphrase read
          from the console, not including any line-termination characters,
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if an end of stream has been reached.`]
			]
		]],
		[/* method */ 'readPassword(java.lang.String,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Provides a formatted prompt, then reads a password or passphrase from
 the console with echoing disabled.`]
			],
			[/* parameters */
				[/* parameter */ 'fmt', [/* parameter description */
					[/* text */ 't', `A format string as described in `],
					[/* reference */ 'r', `java.util.Formatter#syntax`, `Format string syntax`],
					[/* text */ 't', `
         for the prompt text.`]
				]],
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `Arguments referenced by the format specifiers in the format
         string.  If there are more arguments than format specifiers, the
         extra arguments are ignored.  The maximum number of arguments is
         limited by the maximum dimension of a Java array as defined by
         `],
					[/* text */ 't', `The Java Virtual Machine Specification`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.IllegalFormatException', [/* throw description */
					[/* text */ 't', `If a format string contains an illegal syntax, a format
          specifier that is incompatible with the given arguments,
          insufficient arguments given the format string, or other
          illegal conditions.  For specification of all possible
          formatting errors, see the `],
					[/* reference */ 'r', `java.util.Formatter#detail`, `Details`],
					[/* text */ 't', `
          section of the formatter class specification.`]
				]],
				[/* throw */ 'java.io.IOError', [/* throw description */
					[/* text */ 't', `If an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A character array containing the password or passphrase read
          from the console, not including any line-termination characters,
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if an end of stream has been reached.`]
			]
		]],
		[/* method */ 'format(java.lang.String,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Writes a formatted string to this console's output stream using
 the specified format string and arguments.`]
			],
			[/* parameters */
				[/* parameter */ 'fmt', [/* parameter description */
					[/* text */ 't', `A format string as described in `],
					[/* reference */ 'r', `java.util.Formatter#syntax`, `Format string syntax`]
				]],
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `Arguments referenced by the format specifiers in the format
         string.  If there are more arguments than format specifiers, the
         extra arguments are ignored.  The number of arguments is
         variable and may be zero.  The maximum number of arguments is
         limited by the maximum dimension of a Java array as defined by
         `],
					[/* text */ 't', `The Java Virtual Machine Specification`],
					[/* text */ 't', `.
         The behaviour on a
         `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` argument depends on the `],
					[/* reference */ 'r', `java.util.Formatter#syntax`, `conversion`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.IllegalFormatException', [/* throw description */
					[/* text */ 't', `If a format string contains an illegal syntax, a format
          specifier that is incompatible with the given arguments,
          insufficient arguments given the format string, or other
          illegal conditions.  For specification of all possible
          formatting errors, see the `],
					[/* reference */ 'r', `java.util.Formatter#detail`, `Details`],
					[/* text */ 't', ` section
          of the formatter class specification.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This console`]
			]
		]],
		[/* method */ 'printf(java.lang.String,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `A convenience method to write a formatted string to this console's
 output stream using the specified format string and arguments.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* inline code block */ 'i', `con.printf(format, args)`],
					[/* text */ 't', ` behaves in exactly the same way
 as the invocation of
 `]
				]],
				[/* code block */ 'c', `con.format(format, args)`],
				[/* text */ 't', `.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'format', [/* parameter description */
					[/* text */ 't', `A format string as described in `],
					[/* reference */ 'r', `java.util.Formatter#syntax`, `Format string syntax`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `Arguments referenced by the format specifiers in the format
         string.  If there are more arguments than format specifiers, the
         extra arguments are ignored.  The number of arguments is
         variable and may be zero.  The maximum number of arguments is
         limited by the maximum dimension of a Java array as defined by
         `],
					[/* text */ 't', `The Java Virtual Machine Specification`],
					[/* text */ 't', `.
         The behaviour on a
         `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` argument depends on the `],
					[/* reference */ 'r', `java.util.Formatter#syntax`, `conversion`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.IllegalFormatException', [/* throw description */
					[/* text */ 't', `If a format string contains an illegal syntax, a format
          specifier that is incompatible with the given arguments,
          insufficient arguments given the format string, or other
          illegal conditions.  For specification of all possible
          formatting errors, see the `],
					[/* reference */ 'r', `java.util.Formatter#detail`, `Details`],
					[/* text */ 't', ` section of the
          formatter class specification.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This console`]
			]
		]],
		[/* method */ 'writer()', [
			[/* method description */
				[/* text */ 't', `Retrieves the unique `],
				[/* reference */ 'r', `java.io.PrintWriter`, `PrintWriter`],
				[/* text */ 't', ` object
 associated with this console.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The printwriter associated with this console`]
			]
		]],
		[/* method */ 'reader()', [
			[/* method description */
				[/* text */ 't', `Retrieves the unique `],
				[/* reference */ 'r', `java.io.Reader`, `Reader`],
				[/* text */ 't', ` object associated
 with this console.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is intended to be used by sophisticated applications, for
 example, a `],
					[/* reference */ 'r', `java.util.Scanner`, `Scanner`],
					[/* text */ 't', ` object which utilizes the rich
 parsing/scanning functionality provided by the `],
					[/* inline code block */ 'i', `Scanner`],
					[/* text */ 't', `:
 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', ` Console con = System.console();
 if (con != null) {
     Scanner sc = new Scanner(con.reader());
     ...
 }
 `]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 For simple applications requiring only line-oriented reading, use
 `],
					[/* reference */ 'r', `#readLine(java.lang.String,java.lang.Object...)`, `readLine(java.lang.String, java.lang.Object...)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The bulk read operations `],
					[/* reference */ 'r', `java.io.Reader#read(char[])`, `read(char[])`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.io.Reader#read(char[],int,int)`, `read(char[], int, int)`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.io.Reader#read(java.nio.CharBuffer)`, `read(java.nio.CharBuffer)`],
					[/* text */ 't', `
 on the returned object will not read in characters beyond the line
 bound for each invocation, even if the destination buffer has space for
 more characters. The `],
					[/* inline code block */ 'i', `Reader`],
					[/* text */ 't', `'s `],
					[/* inline code block */ 'i', `read`],
					[/* text */ 't', ` methods may block if a
 line bound has not been entered or reached on the console's input device.
 A line bound is considered to be any one of a line feed (`],
					[/* inline code block */ 'i', `'\\n'`],
					[/* text */ 't', `),
 a carriage return (`],
					[/* inline code block */ 'i', `'\\r'`],
					[/* text */ 't', `), a carriage return followed immediately
 by a linefeed, or an end of stream.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The reader associated with this console`]
			]
		]],
		[/* method */ 'readLine()', [
			[/* method description */
				[/* text */ 't', `Reads a single line of text from the console.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOError', [/* throw description */
					[/* text */ 't', `If an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A string containing the line read from the console, not
          including any line-termination characters, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
          if an end of stream has been reached.`]
			]
		]],
		[/* method */ 'readLine(java.lang.String,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Provides a formatted prompt, then reads a single line of text from the
 console.`]
			],
			[/* parameters */
				[/* parameter */ 'fmt', [/* parameter description */
					[/* text */ 't', `A format string as described in `],
					[/* reference */ 'r', `java.util.Formatter#syntax`, `Format string syntax`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `Arguments referenced by the format specifiers in the format
         string.  If there are more arguments than format specifiers, the
         extra arguments are ignored.  The maximum number of arguments is
         limited by the maximum dimension of a Java array as defined by
         `],
					[/* text */ 't', `The Java Virtual Machine Specification`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.IllegalFormatException', [/* throw description */
					[/* text */ 't', `If a format string contains an illegal syntax, a format
          specifier that is incompatible with the given arguments,
          insufficient arguments given the format string, or other
          illegal conditions.  For specification of all possible
          formatting errors, see the `],
					[/* reference */ 'r', `java.util.Formatter#detail`, `Details`],
					[/* text */ 't', ` section
          of the formatter class specification.`]
				]],
				[/* throw */ 'java.io.IOError', [/* throw description */
					[/* text */ 't', `If an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A string containing the line read from the console, not
          including any line-termination characters, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
          if an end of stream has been reached.`]
			]
		]],
		[/* method */ 'charset()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* reference */ 'r', `java.nio.charset.Charset`, `Charset`],
				[/* text */ 't', ` object used for
 the `],
				[/* inline code block */ 'i', `Console`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned charset corresponds to the input and output source
 (e.g., keyboard and/or display) specified by the host environment or user.
 It may not necessarily be the same as the default charset returned from
 `],
					[/* reference */ 'r', `java.nio.charset.Charset#defaultCharset()`, `Charset.defaultCharset()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.nio.charset.Charset`, `Charset`],
				[/* text */ 't', ` object used for the
          `],
				[/* inline code block */ 'i', `Console`]
			]
		]],
		[/* method */ 'flush()', [
			[/* method description */
				[/* text */ 't', `Flushes the console and forces any buffered output to be written
 immediately .`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
