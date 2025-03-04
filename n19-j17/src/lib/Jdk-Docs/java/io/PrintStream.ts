import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.PrintStream', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `PrintStream`],
		[/* text */ 't', ` adds functionality to another output stream,
 namely the ability to print representations of various data values
 conveniently.  Two other features are provided as well.  Unlike other output
 streams, a `],
		[/* inline code block */ 'i', `PrintStream`],
		[/* text */ 't', ` never throws an
 `],
		[/* inline code block */ 'i', `IOException`],
		[/* text */ 't', `; instead, exceptional situations merely set an
 internal flag that can be tested via the `],
		[/* inline code block */ 'i', `checkError`],
		[/* text */ 't', ` method.
 Optionally, a `],
		[/* inline code block */ 'i', `PrintStream`],
		[/* text */ 't', ` can be created so as to flush
 automatically; this means that the `],
		[/* inline code block */ 'i', `flush`],
		[/* text */ 't', ` method of the underlying
 output stream is automatically invoked after a byte array is written, one
 of the `],
		[/* inline code block */ 'i', `println`],
		[/* text */ 't', ` methods is invoked, or a newline character or byte
 (`],
		[/* inline code block */ 'i', `'\\n'`],
		[/* text */ 't', `) is written.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` All characters printed by a `],
			[/* inline code block */ 'i', `PrintStream`],
			[/* text */ 't', ` are converted into
 bytes using the given encoding or charset, or the platform's default
 character encoding if not specified.
 The `],
			[/* reference */ 'r', `java.io.PrintWriter`],
			[/* text */ 't', ` class should be used in situations that require
 writing characters rather than bytes.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` This class always replaces malformed and unmappable character sequences
 with the charset's default replacement string.
 The `],
			[/* reference */ 'r', `java.nio.charset.CharsetEncoder`],
			[/* text */ 't', ` class should be used when more
 control over the encoding process is required.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new print stream, without automatic line flushing, with the
 specified file name and charset.  This convenience constructor creates
 the necessary intermediate `],
				[/* reference */ 'r', `java.io.OutputStreamWriter`],
				[/* text */ 't', `, which will encode characters using the provided
 charset.`]
			],
			[/* parameters */
				[/* parameter */ 'fileName', [/* parameter description */
					[/* text */ 't', `The name of the file to use as the destination of this print
         stream.  If the file exists, then it will be truncated to
         zero size; otherwise, a new file will be created.  The output
         will be written to the file and is buffered.`]
				]],
				[/* parameter */ 'csn', [/* parameter description */
					[/* text */ 't', `The name of a supported `],
					[/* reference */ 'r', `java.nio.charset.Charset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.FileNotFoundException', [/* throw description */
					[/* text */ 't', `If the given file object does not denote an existing, writable
          regular file and a new regular file of that name cannot be
          created, or if some other error occurs while opening or
          creating the file`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present and `],
					[/* reference */ 'r', `java.SecurityManager#checkWrite(java.io.FileDescriptor)`],
					[/* text */ 't', ` denies write
          access to the file`]
				]],
				[/* throw */ 'java.io.UnsupportedEncodingException', [/* throw description */
					[/* text */ 't', `If the named charset is not supported`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new print stream, without automatic line flushing, with the
 specified file name.  This convenience constructor creates
 the necessary intermediate `],
				[/* reference */ 'r', `java.io.OutputStreamWriter`],
				[/* text */ 't', `, which will encode characters using the
 `],
				[/* reference */ 'r', `java.charset.Charset#defaultCharset()`],
				[/* text */ 't', `
 for this instance of the Java virtual machine.`]
			],
			[/* parameters */
				[/* parameter */ 'fileName', [/* parameter description */
					[/* text */ 't', `The name of the file to use as the destination of this print
         stream.  If the file exists, then it will be truncated to
         zero size; otherwise, a new file will be created.  The output
         will be written to the file and is buffered.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.FileNotFoundException', [/* throw description */
					[/* text */ 't', `If the given file object does not denote an existing, writable
          regular file and a new regular file of that name cannot be
          created, or if some other error occurs while opening or
          creating the file`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present and `],
					[/* reference */ 'r', `java.SecurityManager#checkWrite(java.io.FileDescriptor)`],
					[/* text */ 't', ` denies write
          access to the file`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.OutputStream,boolean,java.nio.charset.Charset)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new print stream, with the specified OutputStream, line
 flushing and charset.  This convenience constructor creates the necessary
 intermediate `],
				[/* reference */ 'r', `java.io.OutputStreamWriter`],
				[/* text */ 't', `,
 which will encode characters using the provided charset.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `The output stream to which values and objects will be
                    printed`]
				]],
				[/* parameter */ 'autoFlush', [/* parameter description */
					[/* text */ 't', `Whether the output buffer will be flushed
                    whenever a byte array is written, one of the
                    `],
					[/* inline code block */ 'i', `println`],
					[/* text */ 't', ` methods is invoked, or a newline
                    character or byte (`],
					[/* inline code block */ 'i', `'\\n'`],
					[/* text */ 't', `) is written`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `A `],
					[/* reference */ 'r', `java.nio.charset.Charset`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.OutputStream,boolean,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new print stream, with the specified OutputStream, line
 flushing, and character encoding.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `The output stream to which values and objects will be
                    printed`]
				]],
				[/* parameter */ 'autoFlush', [/* parameter description */
					[/* text */ 't', `Whether the output buffer will be flushed
                    whenever a byte array is written, one of the
                    `],
					[/* inline code block */ 'i', `println`],
					[/* text */ 't', ` methods is invoked, or a newline
                    character or byte (`],
					[/* inline code block */ 'i', `'\\n'`],
					[/* text */ 't', `) is written`]
				]],
				[/* parameter */ 'encoding', [/* parameter description */
					[/* text */ 't', `The name of a supported
                    `],
					[/* text */ 't', `character encoding`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.UnsupportedEncodingException', [/* throw description */
					[/* text */ 't', `If the named encoding is not supported`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.nio.charset.Charset)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new print stream, without automatic line flushing, with the
 specified file name and charset.  This convenience constructor creates
 the necessary intermediate `],
				[/* reference */ 'r', `java.io.OutputStreamWriter`],
				[/* text */ 't', `, which will encode characters using the provided
 charset.`]
			],
			[/* parameters */
				[/* parameter */ 'fileName', [/* parameter description */
					[/* text */ 't', `The name of the file to use as the destination of this print
         stream.  If the file exists, then it will be truncated to
         zero size; otherwise, a new file will be created.  The output
         will be written to the file and is buffered.`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `A `],
					[/* reference */ 'r', `java.nio.charset.Charset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs while opening or creating the file`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present and `],
					[/* reference */ 'r', `java.SecurityManager#checkWrite(java.io.FileDescriptor)`],
					[/* text */ 't', ` denies write
          access to the file`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.File,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new print stream, without automatic line flushing, with the
 specified file and charset.  This convenience constructor creates
 the necessary intermediate `],
				[/* reference */ 'r', `java.io.OutputStreamWriter`],
				[/* text */ 't', `, which will encode characters using the provided
 charset.`]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `The file to use as the destination of this print stream.  If the
         file exists, then it will be truncated to zero size; otherwise,
         a new file will be created.  The output will be written to the
         file and is buffered.`]
				]],
				[/* parameter */ 'csn', [/* parameter description */
					[/* text */ 't', `The name of a supported `],
					[/* reference */ 'r', `java.nio.charset.Charset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.FileNotFoundException', [/* throw description */
					[/* text */ 't', `If the given file object does not denote an existing, writable
          regular file and a new regular file of that name cannot be
          created, or if some other error occurs while opening or
          creating the file`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present and `],
					[/* reference */ 'r', `java.SecurityManager#checkWrite(java.io.FileDescriptor)`],
					[/* text */ 't', `
          denies write access to the file`]
				]],
				[/* throw */ 'java.io.UnsupportedEncodingException', [/* throw description */
					[/* text */ 't', `If the named charset is not supported`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.File,java.nio.charset.Charset)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new print stream, without automatic line flushing, with the
 specified file and charset.  This convenience constructor creates
 the necessary intermediate `],
				[/* reference */ 'r', `java.io.OutputStreamWriter`],
				[/* text */ 't', `, which will encode characters using the provided
 charset.`]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `The file to use as the destination of this print stream.  If the
         file exists, then it will be truncated to zero size; otherwise,
         a new file will be created.  The output will be written to the
         file and is buffered.`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `A `],
					[/* reference */ 'r', `java.nio.charset.Charset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs while opening or creating the file`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present and `],
					[/* reference */ 'r', `java.SecurityManager#checkWrite(java.io.FileDescriptor)`],
					[/* text */ 't', `
          denies write access to the file`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.File)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new print stream, without automatic line flushing, with the
 specified file.  This convenience constructor creates the necessary
 intermediate `],
				[/* reference */ 'r', `java.io.OutputStreamWriter`],
				[/* text */ 't', `,
 which will encode characters using the `],
				[/* reference */ 'r', `java.charset.Charset#defaultCharset()`],
				[/* text */ 't', ` for this
 instance of the Java virtual machine.`]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `The file to use as the destination of this print stream.  If the
         file exists, then it will be truncated to zero size; otherwise,
         a new file will be created.  The output will be written to the
         file and is buffered.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.FileNotFoundException', [/* throw description */
					[/* text */ 't', `If the given file object does not denote an existing, writable
          regular file and a new regular file of that name cannot be
          created, or if some other error occurs while opening or
          creating the file`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present and `],
					[/* reference */ 'r', `java.SecurityManager#checkWrite(java.io.FileDescriptor)`],
					[/* text */ 't', `
          denies write access to the file`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.OutputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new print stream, without automatic line flushing, with the
 specified OutputStream. Characters written to the stream are converted
 to bytes using the platform's default character encoding.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `The output stream to which values and objects will be
                    printed`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.OutputStream,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new print stream, with the specified OutputStream and line
 flushing. Characters written to the stream are converted to bytes using
 the platform's default character encoding.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `The output stream to which values and objects will be
                    printed`]
				]],
				[/* parameter */ 'autoFlush', [/* parameter description */
					[/* text */ 't', `Whether the output buffer will be flushed
                    whenever a byte array is written, one of the
                    `],
					[/* inline code block */ 'i', `println`],
					[/* text */ 't', ` methods is invoked, or a newline
                    character or byte (`],
					[/* inline code block */ 'i', `'\\n'`],
					[/* text */ 't', `) is written`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'println(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Prints a String and then terminate the line.  This method behaves as
 though it invokes `],
				[/* reference */ 'r', `#print(java.lang.Object)`, `print(String)`],
				[/* text */ 't', ` and then
 `],
				[/* reference */ 'r', `#println()`, `println()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` to be printed.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'println(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Prints an Object and then terminate the line.  This method calls
 at first String.valueOf(x) to get the printed object's string value,
 then behaves as
 though it invokes `],
				[/* reference */ 'r', `#print(java.lang.Object)`, `print(String)`],
				[/* text */ 't', ` and then
 `],
				[/* reference */ 'r', `#println()`, `println()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', ` to be printed.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'println(float)', [
			[/* method description */
				[/* text */ 't', `Prints a float and then terminate the line.  This method behaves as
 though it invokes `],
				[/* reference */ 'r', `#print(double)`, `print(float)`],
				[/* text */ 't', ` and then
 `],
				[/* reference */ 'r', `#println()`, `println()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` to be printed.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'println(double)', [
			[/* method description */
				[/* text */ 't', `Prints a double and then terminate the line.  This method behaves as
 though it invokes `],
				[/* reference */ 'r', `#print(double)`, `print(double)`],
				[/* text */ 't', ` and then
 `],
				[/* reference */ 'r', `#println()`, `println()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` to be printed.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'println(char[])', [
			[/* method description */
				[/* text */ 't', `Prints an array of characters and then terminate the line.  This method
 behaves as though it invokes `],
				[/* reference */ 'r', `#print(java.lang.Object)`, `print(char[])`],
				[/* text */ 't', ` and
 then `],
				[/* reference */ 'r', `#println()`, `println()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `an array of chars to print.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'println(boolean)', [
			[/* method description */
				[/* text */ 't', `Prints a boolean and then terminate the line.  This method behaves as
 though it invokes `],
				[/* reference */ 'r', `#print(boolean)`, `print(boolean)`],
				[/* text */ 't', ` and then
 `],
				[/* reference */ 'r', `#println()`, `println()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `boolean`],
					[/* text */ 't', ` to be printed`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'println()', [
			[/* method description */
				[/* text */ 't', `Terminates the current line by writing the line separator string.  The
 line separator string is defined by the system property
 `],
				[/* inline code block */ 'i', `line.separator`],
				[/* text */ 't', `, and is not necessarily a single newline
 character (`],
				[/* inline code block */ 'i', `'\\n'`],
				[/* text */ 't', `).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'println(char)', [
			[/* method description */
				[/* text */ 't', `Prints a character and then terminate the line.  This method behaves as
 though it invokes `],
				[/* reference */ 'r', `#print(double)`, `print(char)`],
				[/* text */ 't', ` and then
 `],
				[/* reference */ 'r', `#println()`, `println()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` to be printed.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'println(int)', [
			[/* method description */
				[/* text */ 't', `Prints an integer and then terminate the line.  This method behaves as
 though it invokes `],
				[/* reference */ 'r', `#print(double)`, `print(int)`],
				[/* text */ 't', ` and then
 `],
				[/* reference */ 'r', `#println()`, `println()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` to be printed.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'println(long)', [
			[/* method description */
				[/* text */ 't', `Prints a long and then terminate the line.  This method behaves as
 though it invokes `],
				[/* reference */ 'r', `#print(double)`, `print(long)`],
				[/* text */ 't', ` and then
 `],
				[/* reference */ 'r', `#println()`, `println()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `a The `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` to be printed.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'append(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Appends the specified character sequence to this output stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form `],
					[/* inline code block */ 'i', `out.append(csq)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `out.print(csq.toString())`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` Depending on the specification of `],
					[/* inline code block */ 'i', `toString`],
					[/* text */ 't', ` for the
 character sequence `],
					[/* inline code block */ 'i', `csq`],
					[/* text */ 't', `, the entire sequence may not be
 appended.  For instance, invoking then `],
					[/* inline code block */ 'i', `toString`],
					[/* text */ 't', ` method of a
 character buffer will return a subsequence whose content depends upon
 the buffer's position and limit.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'csq', [/* parameter description */
					[/* text */ 't', `The character sequence to append.  If `],
					[/* inline code block */ 'i', `csq`],
					[/* text */ 't', ` is
         `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, then the four characters `],
					[/* inline code block */ 'i', `"null"`],
					[/* text */ 't', ` are
         appended to this output stream.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This output stream`]
			]
		]],
		[/* method */ 'append(java.lang.CharSequence,int,int)', [
			[/* method description */
				[/* text */ 't', `Appends a subsequence of the specified character sequence to this output
 stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* inline code block */ 'i', `out.append(csq, start, end)`],
					[/* text */ 't', ` when
 `],
					[/* inline code block */ 'i', `csq`],
					[/* text */ 't', ` is not `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, behaves in
 exactly the same way as the invocation

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `out.print(csq.subSequence(start, end).toString())`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'csq', [/* parameter description */
					[/* text */ 't', `The character sequence from which a subsequence will be
         appended.  If `],
					[/* inline code block */ 'i', `csq`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, then characters
         will be appended as if `],
					[/* inline code block */ 'i', `csq`],
					[/* text */ 't', ` contained the four
         characters `],
					[/* inline code block */ 'i', `"null"`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `The index of the first character in the subsequence`]
				]],
				[/* parameter */ 'end', [/* parameter description */
					[/* text */ 't', `The index of the character following the last character in the
         subsequence`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', ` are negative, `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', `
          is greater than `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', ` is greater than
          `],
					[/* inline code block */ 'i', `csq.length()`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This output stream`]
			]
		]],
		[/* method */ 'append(char)', [
			[/* method description */
				[/* text */ 't', `Appends the specified character to this output stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form `],
					[/* inline code block */ 'i', `out.append(c)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `out.print(c)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `The 16-bit character to append`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This output stream`]
			]
		]],
		[/* method */ 'flush()', [
			[/* method description */
				[/* text */ 't', `Flushes the stream.  This is done by writing any buffered output bytes to
 the underlying output stream and then flushing that stream.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'format(java.lang.String,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Writes a formatted string to this output stream using the specified
 format string and arguments.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The locale always used is the one returned by `],
					[/* reference */ 'r', `java.Locale#getDefault(java.util.Locale.Category)`],
					[/* text */ 't', ` with
 `],
					[/* reference */ 'r', `java.Locale.Category#FORMAT`],
					[/* text */ 't', ` category specified,
 regardless of any previous invocations of other formatting methods on
 this object.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'format', [/* parameter description */
					[/* text */ 't', `A format string as described in `],
					[/* reference */ 'r', `java.Formatter#syntax`]
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
					[/* reference */ 'r', `java.Formatter#syntax`],
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
					[/* reference */ 'r', `java.Formatter#detail`],
					[/* text */ 't', ` section of the
          formatter class specification.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `format`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This output stream`]
			]
		]],
		[/* method */ 'format(java.util.Locale,java.lang.String,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Writes a formatted string to this output stream using the specified
 format string and arguments.`]
			],
			[/* parameters */
				[/* parameter */ 'l', [/* parameter description */
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.util.Locale`],
					[/* text */ 't', ` to apply during
         formatting.  If `],
					[/* inline code block */ 'i', `l`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` then no localization
         is applied.`]
				]],
				[/* parameter */ 'format', [/* parameter description */
					[/* text */ 't', `A format string as described in `],
					[/* reference */ 'r', `java.Formatter#syntax`]
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
					[/* reference */ 'r', `java.Formatter#syntax`],
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
					[/* reference */ 'r', `java.Formatter#detail`],
					[/* text */ 't', ` section of the
          formatter class specification.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `format`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This output stream`]
			]
		]],
		[/* method */ 'printf(java.util.Locale,java.lang.String,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `A convenience method to write a formatted string to this output stream
 using the specified format string and arguments.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* inline code block */ 'i', `out.printf(l, format, args)`],
					[/* text */ 't', ` behaves
 in exactly the same way as the invocation

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `out.format(l, format, args)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'l', [/* parameter description */
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.util.Locale`],
					[/* text */ 't', ` to apply during
         formatting.  If `],
					[/* inline code block */ 'i', `l`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` then no localization
         is applied.`]
				]],
				[/* parameter */ 'format', [/* parameter description */
					[/* text */ 't', `A format string as described in `],
					[/* reference */ 'r', `java.Formatter#syntax`]
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
					[/* reference */ 'r', `java.Formatter#syntax`],
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
					[/* reference */ 'r', `java.Formatter#detail`],
					[/* text */ 't', ` section of the
          formatter class specification.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `format`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This output stream`]
			]
		]],
		[/* method */ 'printf(java.lang.String,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `A convenience method to write a formatted string to this output stream
 using the specified format string and arguments.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* inline code block */ 'i', `out.printf(format, args)`],
					[/* text */ 't', ` behaves
 in exactly the same way as the invocation

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `out.format(format, args)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'format', [/* parameter description */
					[/* text */ 't', `A format string as described in `],
					[/* reference */ 'r', `java.Formatter#syntax`]
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
					[/* reference */ 'r', `java.Formatter#syntax`],
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
					[/* reference */ 'r', `java.Formatter#detail`],
					[/* text */ 't', ` section of the
          formatter class specification.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `format`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This output stream`]
			]
		]],
		[/* method */ 'write(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Writes `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` bytes from the specified byte array starting at
 offset `],
				[/* inline code block */ 'i', `off`],
				[/* text */ 't', ` to this stream.  If automatic flushing is
 enabled then the `],
				[/* inline code block */ 'i', `flush`],
				[/* text */ 't', ` method will be invoked on the underlying
 output stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Note that the bytes will be written as given; to write characters
 that will be translated according to the platform's default character
 encoding, use the `],
					[/* inline code block */ 'i', `print(char)`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `println(char)`],
					[/* text */ 't', `
 methods.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'buf', [/* parameter description */
					[/* text */ 't', `A byte array`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `Offset from which to start taking bytes`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `Number of bytes to write`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'write(int)', [
			[/* method description */
				[/* text */ 't', `Writes the specified byte to this stream.  If the byte is a newline and
 automatic flushing is enabled then the `],
				[/* inline code block */ 'i', `flush`],
				[/* text */ 't', ` method will be
 invoked on the underlying output stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Note that the byte is written as given; to write a character that
 will be translated according to the platform's default character
 encoding, use the `],
					[/* inline code block */ 'i', `print(char)`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `println(char)`],
					[/* text */ 't', `
 methods.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `The byte to be written`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'write(byte[])', [
			[/* method description */
				[/* text */ 't', `Writes all bytes from the specified byte array to this stream. If
 automatic flushing is enabled then the `],
				[/* inline code block */ 'i', `flush`],
				[/* text */ 't', ` method will be
 invoked on the underlying output stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Note that the bytes will be written as given; to write characters
 that will be translated according to the platform's default character
 encoding, use the `],
					[/* inline code block */ 'i', `print(char[])`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `println(char[])`],
					[/* text */ 't', `
 methods.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'buf', [/* parameter description */
					[/* text */ 't', `A byte array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'print(boolean)', [
			[/* method description */
				[/* text */ 't', `Prints a boolean value.  The string produced by `],
				[/* reference */ 'r', `java.String#valueOf(boolean)`],
				[/* text */ 't', ` is translated into bytes
 according to the platform's default character encoding, and these bytes
 are written in exactly the manner of the
 `],
				[/* reference */ 'r', `#write(int)`, `write(int)`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `boolean`],
					[/* text */ 't', ` to be printed`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'print(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Prints a string.  If the argument is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` then the string
 `],
				[/* inline code block */ 'i', `"null"`],
				[/* text */ 't', ` is printed.  Otherwise, the string's characters are
 converted into bytes according to the character encoding given to the
 constructor, or the platform's default character encoding if none
 specified. These bytes are written in exactly the manner of the
 `],
				[/* reference */ 'r', `#write(int)`, `write(int)`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` to be printed`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'print(char[])', [
			[/* method description */
				[/* text */ 't', `Prints an array of characters.  The characters are converted into bytes
 according to the character encoding given to the constructor, or the
 platform's default character encoding if none specified. These bytes
 are written in exactly the manner of the `],
				[/* reference */ 'r', `#write(int)`, `write(int)`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `The array of chars to be printed`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'print(long)', [
			[/* method description */
				[/* text */ 't', `Prints a long integer.  The string produced by `],
				[/* reference */ 'r', `java.String#valueOf(double)`],
				[/* text */ 't', ` is translated into bytes
 according to the platform's default character encoding, and these bytes
 are written in exactly the manner of the
 `],
				[/* reference */ 'r', `#write(int)`, `write(int)`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'l', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` to be printed`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'print(double)', [
			[/* method description */
				[/* text */ 't', `Prints a double-precision floating-point number.  The string produced by
 `],
				[/* reference */ 'r', `java.String#valueOf(double)`],
				[/* text */ 't', ` is translated into
 bytes according to the platform's default character encoding, and these
 bytes are written in exactly the manner of the `],
				[/* reference */ 'r', `#write(int)`, `write(int)`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'd', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` to be printed`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'print(float)', [
			[/* method description */
				[/* text */ 't', `Prints a floating-point number.  The string produced by `],
				[/* reference */ 'r', `java.String#valueOf(double)`],
				[/* text */ 't', ` is translated into bytes
 according to the platform's default character encoding, and these bytes
 are written in exactly the manner of the
 `],
				[/* reference */ 'r', `#write(int)`, `write(int)`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'f', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` to be printed`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'print(char)', [
			[/* method description */
				[/* text */ 't', `Prints a character.  The character is translated into one or more bytes
 according to the character encoding given to the constructor, or the
 platform's default character encoding if none specified. These bytes
 are written in exactly the manner of the `],
				[/* reference */ 'r', `#write(int)`, `write(int)`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` to be printed`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'print(int)', [
			[/* method description */
				[/* text */ 't', `Prints an integer.  The string produced by `],
				[/* reference */ 'r', `java.String#valueOf(double)`],
				[/* text */ 't', ` is translated into bytes
 according to the platform's default character encoding, and these bytes
 are written in exactly the manner of the
 `],
				[/* reference */ 'r', `#write(int)`, `write(int)`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` to be printed`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'print(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Prints an object.  The string produced by the `],
				[/* reference */ 'r', `java.String#valueOf(java.lang.Object)`],
				[/* text */ 't', ` method is translated into bytes
 according to the platform's default character encoding, and these bytes
 are written in exactly the manner of the
 `],
				[/* reference */ 'r', `#write(int)`, `write(int)`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', ` to be printed`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes the stream.  This is done by flushing the stream and then closing
 the underlying output stream.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'writeBytes(byte[])', [
			[/* method description */
				[/* text */ 't', `Writes all bytes from the specified byte array to this stream.
 If automatic flushing is enabled then the `],
				[/* inline code block */ 'i', `flush`],
				[/* text */ 't', ` method
 will be invoked.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Note that the bytes will be written as given; to write characters
 that will be translated according to the platform's default character
 encoding, use the `],
					[/* inline code block */ 'i', `print(char[])`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `println(char[])`],
					[/* text */ 't', `
 methods.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'buf', [/* parameter description */
					[/* text */ 't', `A byte array`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'checkError()', [
			[/* method description */
				[/* text */ 't', `Flushes the stream and checks its error state. The internal error state
 is set to `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` when the underlying output stream throws an
 `],
				[/* inline code block */ 'i', `IOException`],
				[/* text */ 't', ` other than `],
				[/* inline code block */ 'i', `InterruptedIOException`],
				[/* text */ 't', `,
 and when the `],
				[/* inline code block */ 'i', `setError`],
				[/* text */ 't', ` method is invoked.  If an operation
 on the underlying output stream throws an
 `],
				[/* inline code block */ 'i', `InterruptedIOException`],
				[/* text */ 't', `, then the `],
				[/* inline code block */ 'i', `PrintStream`],
				[/* text */ 't', `
 converts the exception back into an interrupt by doing:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Thread.currentThread().interrupt();`]
				]],
				[/* text */ 't', `
 or the equivalent.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this stream has encountered an
         `],
				[/* inline code block */ 'i', `IOException`],
				[/* text */ 't', ` other than
         `],
				[/* inline code block */ 'i', `InterruptedIOException`],
				[/* text */ 't', `, or the
         `],
				[/* inline code block */ 'i', `setError`],
				[/* text */ 't', ` method has been invoked`]
			]
		]],
		[/* method */ 'setError()', [
			[/* method description */
				[/* text */ 't', `Sets the error state of the stream to `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method will cause subsequent invocations of `],
					[/* reference */ 'r', `#checkError()`, `checkError()`],
					[/* text */ 't', ` to return `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` until
 `],
					[/* reference */ 'r', `#clearError()`, `clearError()`],
					[/* text */ 't', ` is invoked.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'clearError()', [
			[/* method description */
				[/* text */ 't', `Clears the internal error state of this stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method will cause subsequent invocations of `],
					[/* reference */ 'r', `#checkError()`, `checkError()`],
					[/* text */ 't', ` to return `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` until another write
 operation fails and invokes `],
					[/* reference */ 'r', `#setError()`, `setError()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
