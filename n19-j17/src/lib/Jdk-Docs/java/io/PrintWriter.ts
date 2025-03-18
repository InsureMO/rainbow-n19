import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.PrintWriter', [
	[/* class description */
		[/* text */ 't', `Prints formatted representations of objects to a text-output stream.  This
 class implements all of the `],
		[/* inline code block */ 'i', `print`],
		[/* text */ 't', ` methods found in `],
		[/* reference */ 'r', `java.io.PrintStream`, `PrintStream`],
		[/* text */ 't', `.  It does not contain methods for writing raw bytes, for which
 a program should use unencoded byte streams.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Unlike the `],
			[/* reference */ 'r', `java.io.PrintStream`, `PrintStream`],
			[/* text */ 't', ` class, if automatic flushing is enabled
 it will be done only when one of the `],
			[/* inline code block */ 'i', `println`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `printf`],
			[/* text */ 't', `, or
 `],
			[/* inline code block */ 'i', `format`],
			[/* text */ 't', ` methods is invoked, rather than whenever a newline character
 happens to be output.  These methods use the platform's own notion of line
 separator rather than the newline character.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Methods in this class never throw I/O exceptions, although some of its
 constructors may.  The client may inquire as to whether any errors have
 occurred by invoking `],
			[/* reference */ 'r', `#checkError()`, `checkError()`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` This class always replaces malformed and unmappable character sequences with
 the charset's default replacement string.
 The `],
			[/* reference */ 'r', `java.nio.charset.CharsetEncoder`, `CharsetEncoder`],
			[/* text */ 't', ` class should be used when more
 control over the encoding process is required.`]
		]]
	],
	[/* fields */
		[/* field */ 'out', [
			[/* field description */
				[/* text */ 't', `The underlying character-output stream of this
 `],
				[/* inline code block */ 'i', `PrintWriter`],
				[/* text */ 't', `.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.io.File)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new PrintWriter, without automatic line flushing, with the
 specified file.  This convenience constructor creates the necessary
 intermediate `],
				[/* reference */ 'r', `java.io.OutputStreamWriter`, `OutputStreamWriter`],
				[/* text */ 't', `,
 which will encode characters using the `],
				[/* reference */ 'r', `java.nio.charset.Charset#defaultCharset()`, `default charset`],
				[/* text */ 't', ` for this
 instance of the Java virtual machine.`]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `The file to use as the destination of this writer.  If the file
         exists then it will be truncated to zero size; otherwise, a new
         file will be created.  The output will be written to the file
         and is buffered.`]
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
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.io.FileDescriptor)`, `checkWrite(file.getPath())`],
					[/* text */ 't', `
          denies write access to the file`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.File,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new PrintWriter, without automatic line flushing, with the
 specified file and charset.  This convenience constructor creates the
 necessary intermediate `],
				[/* reference */ 'r', `java.io.OutputStreamWriter`, `OutputStreamWriter`],
				[/* text */ 't', `, which will encode characters using the provided
 charset.`]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `The file to use as the destination of this writer.  If the file
         exists then it will be truncated to zero size; otherwise, a new
         file will be created.  The output will be written to the file
         and is buffered.`]
				]],
				[/* parameter */ 'csn', [/* parameter description */
					[/* text */ 't', `The name of a supported `],
					[/* reference */ 'r', `java.nio.charset.Charset`, `charset`]
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
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.io.FileDescriptor)`, `checkWrite(file.getPath())`],
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
				[/* text */ 't', `Creates a new PrintWriter, without automatic line flushing, with the
 specified file and charset.  This convenience constructor creates the
 necessary intermediate `],
				[/* reference */ 'r', `java.io.OutputStreamWriter`, `OutputStreamWriter`],
				[/* text */ 't', `, which will encode characters using the provided
 charset.`]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `The file to use as the destination of this writer.  If the file
         exists then it will be truncated to zero size; otherwise, a new
         file will be created.  The output will be written to the file
         and is buffered.`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `A `],
					[/* reference */ 'r', `java.nio.charset.Charset`, `charset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs while opening or creating the file`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present and `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.io.FileDescriptor)`, `checkWrite(file.getPath())`],
					[/* text */ 't', `
          denies write access to the file`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.OutputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new PrintWriter, without automatic line flushing, from an
 existing OutputStream.  This convenience constructor creates the
 necessary intermediate OutputStreamWriter, which will convert characters
 into bytes using the default character encoding.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `An output stream`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.OutputStream,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new PrintWriter from an existing OutputStream.  This
 convenience constructor creates the necessary intermediate
 OutputStreamWriter, which will convert characters into bytes using the
 default character encoding.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `An output stream`]
				]],
				[/* parameter */ 'autoFlush', [/* parameter description */
					[/* text */ 't', `A boolean; if true, the `],
					[/* inline code block */ 'i', `println`],
					[/* text */ 't', `,
                    `],
					[/* inline code block */ 'i', `printf`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `format`],
					[/* text */ 't', ` methods will
                    flush the output buffer`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.OutputStream,boolean,java.nio.charset.Charset)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new PrintWriter from an existing OutputStream.  This
 convenience constructor creates the necessary intermediate
 OutputStreamWriter, which will convert characters into bytes using the
 specified charset.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `An output stream`]
				]],
				[/* parameter */ 'autoFlush', [/* parameter description */
					[/* text */ 't', `A boolean; if true, the `],
					[/* inline code block */ 'i', `println`],
					[/* text */ 't', `,
                    `],
					[/* inline code block */ 'i', `printf`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `format`],
					[/* text */ 't', ` methods will
                    flush the output buffer`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `A `],
					[/* reference */ 'r', `java.nio.charset.Charset`, `charset`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.Writer)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new PrintWriter, without automatic line flushing.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `A character-output stream`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.Writer,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new PrintWriter.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `A character-output stream`]
				]],
				[/* parameter */ 'autoFlush', [/* parameter description */
					[/* text */ 't', `A boolean; if true, the `],
					[/* inline code block */ 'i', `println`],
					[/* text */ 't', `,
                    `],
					[/* inline code block */ 'i', `printf`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `format`],
					[/* text */ 't', ` methods will
                    flush the output buffer`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new PrintWriter, without automatic line flushing, with the
 specified file name.  This convenience constructor creates the necessary
 intermediate `],
				[/* reference */ 'r', `java.io.OutputStreamWriter`, `OutputStreamWriter`],
				[/* text */ 't', `,
 which will encode characters using the `],
				[/* reference */ 'r', `java.nio.charset.Charset#defaultCharset()`, `default charset`],
				[/* text */ 't', ` for this
 instance of the Java virtual machine.`]
			],
			[/* parameters */
				[/* parameter */ 'fileName', [/* parameter description */
					[/* text */ 't', `The name of the file to use as the destination of this writer.
         If the file exists then it will be truncated to zero size;
         otherwise, a new file will be created.  The output will be
         written to the file and is buffered.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.FileNotFoundException', [/* throw description */
					[/* text */ 't', `If the given string does not denote an existing, writable
          regular file and a new regular file of that name cannot be
          created, or if some other error occurs while opening or
          creating the file`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present and `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.io.FileDescriptor)`, `checkWrite(fileName)`],
					[/* text */ 't', ` denies write
          access to the file`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new PrintWriter, without automatic line flushing, with the
 specified file name and charset.  This convenience constructor creates
 the necessary intermediate `],
				[/* reference */ 'r', `java.io.OutputStreamWriter`, `OutputStreamWriter`],
				[/* text */ 't', `, which will encode characters using the provided
 charset.`]
			],
			[/* parameters */
				[/* parameter */ 'fileName', [/* parameter description */
					[/* text */ 't', `The name of the file to use as the destination of this writer.
         If the file exists then it will be truncated to zero size;
         otherwise, a new file will be created.  The output will be
         written to the file and is buffered.`]
				]],
				[/* parameter */ 'csn', [/* parameter description */
					[/* text */ 't', `The name of a supported `],
					[/* reference */ 'r', `java.nio.charset.Charset`, `charset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.FileNotFoundException', [/* throw description */
					[/* text */ 't', `If the given string does not denote an existing, writable
          regular file and a new regular file of that name cannot be
          created, or if some other error occurs while opening or
          creating the file`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present and `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.io.FileDescriptor)`, `checkWrite(fileName)`],
					[/* text */ 't', ` denies write
          access to the file`]
				]],
				[/* throw */ 'java.io.UnsupportedEncodingException', [/* throw description */
					[/* text */ 't', `If the named charset is not supported`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.nio.charset.Charset)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new PrintWriter, without automatic line flushing, with the
 specified file name and charset.  This convenience constructor creates
 the necessary intermediate `],
				[/* reference */ 'r', `java.io.OutputStreamWriter`, `OutputStreamWriter`],
				[/* text */ 't', `, which will encode characters using the provided
 charset.`]
			],
			[/* parameters */
				[/* parameter */ 'fileName', [/* parameter description */
					[/* text */ 't', `The name of the file to use as the destination of this writer.
         If the file exists then it will be truncated to zero size;
         otherwise, a new file will be created.  The output will be
         written to the file and is buffered.`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `A `],
					[/* reference */ 'r', `java.nio.charset.Charset`, `charset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs while opening or creating the file`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present and `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.io.FileDescriptor)`, `checkWrite(fileName)`],
					[/* text */ 't', ` denies write
          access to the file`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'clearError()', [
			[/* method description */
				[/* text */ 't', `Clears the error state of this stream.

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
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'setError()', [
			[/* method description */
				[/* text */ 't', `Indicates that an error has occurred.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method will cause subsequent invocations of `],
					[/* reference */ 'r', `#checkError()`, `checkError()`],
					[/* text */ 't', ` to return `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` until `],
					[/* reference */ 'r', `#clearError()`, `clearError()`],
					[/* text */ 't', ` is invoked.`]
				]]
			],
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'checkError()', [
			[/* method description */
				[/* text */ 't', `Flushes the stream if it's not closed and checks its error state.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the print stream has encountered an error,
          either on the underlying output stream or during a format
          conversion.`]
			]
		]],
		[/* method */ 'append(char)', [
			[/* method description */
				[/* text */ 't', `Appends the specified character to this writer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form `],
					[/* inline code block */ 'i', `out.append(c)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `out.write(c)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `The 16-bit character to append`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `This writer`]
			]
		]],
		[/* method */ 'append(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Appends the specified character sequence to this writer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form `],
					[/* inline code block */ 'i', `out.append(csq)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `out.write(csq.toString())`]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` Depending on the specification of `],
					[/* inline code block */ 'i', `toString`],
					[/* text */ 't', ` for the
 character sequence `],
					[/* inline code block */ 'i', `csq`],
					[/* text */ 't', `, the entire sequence may not be
 appended. For instance, invoking the `],
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
         appended to this writer.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `This writer`]
			]
		]],
		[/* method */ 'append(java.lang.CharSequence,int,int)', [
			[/* method description */
				[/* text */ 't', `Appends a subsequence of the specified character sequence to this writer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* inline code block */ 'i', `out.append(csq, start, end)`],
					[/* text */ 't', `
 when `],
					[/* inline code block */ 'i', `csq`],
					[/* text */ 't', ` is not `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, behaves in
 exactly the same way as the invocation

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `out.write(csq.subSequence(start, end).toString())`]
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
				[/* text */ 't', `This writer`]
			]
		]],
		[/* method */ 'format(java.lang.String,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Writes a formatted string to this writer using the specified format
 string and arguments.  If automatic flushing is enabled, calls to this
 method will flush the output buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The locale always used is the one returned by `],
					[/* reference */ 'r', `java.util.Locale#getDefault()`, `Locale.getDefault()`],
					[/* text */ 't', `, regardless of any
 previous invocations of other formatting methods on this object.`]
				]]
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
          Formatter class specification.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `format`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This writer`]
			]
		]],
		[/* method */ 'format(java.util.Locale,java.lang.String,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Writes a formatted string to this writer using the specified format
 string and arguments.  If automatic flushing is enabled, calls to this
 method will flush the output buffer.`]
			],
			[/* parameters */
				[/* parameter */ 'l', [/* parameter description */
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.util.Locale`, `locale`],
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
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `format`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This writer`]
			]
		]],
		[/* method */ 'printf(java.lang.String,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `A convenience method to write a formatted string to this writer using
 the specified format string and arguments.  If automatic flushing is
 enabled, calls to this method will flush the output buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* inline code block */ 'i', `out.printf(format, args)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation

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
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `format`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This writer`]
			]
		]],
		[/* method */ 'printf(java.util.Locale,java.lang.String,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `A convenience method to write a formatted string to this writer using
 the specified format string and arguments.  If automatic flushing is
 enabled, calls to this method will flush the output buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* inline code block */ 'i', `out.printf(l, format, args)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation

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
					[/* reference */ 'r', `java.util.Locale`, `locale`],
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
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `format`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This writer`]
			]
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes the stream and releases any system resources associated
 with it. Closing a previously closed stream has no effect.`]
			],
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'flush()', [
			[/* method description */
				[/* text */ 't', `Flushes the stream.`]
			],
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'print(boolean)', [
			[/* method description */
				[/* text */ 't', `Prints a boolean value.  The string produced by `],
				[/* reference */ 'r', `java.lang.String#valueOf(boolean)`, `String.valueOf(boolean)`],
				[/* text */ 't', ` is translated into bytes
 according to the platform's default character encoding, and these bytes
 are written in exactly the manner of the `],
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
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'print(char)', [
			[/* method description */
				[/* text */ 't', `Prints a character.  The character is translated into one or more bytes
 according to the platform's default character encoding, and these bytes
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
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'print(char[])', [
			[/* method description */
				[/* text */ 't', `Prints an array of characters.  The characters are converted into bytes
 according to the platform's default character encoding, and these bytes
 are written in exactly the manner of the `],
				[/* reference */ 'r', `#write(int)`, `write(int)`],
				[/* text */ 't', `
 method.`]
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
		[/* method */ 'print(double)', [
			[/* method description */
				[/* text */ 't', `Prints a double-precision floating-point number.  The string produced by
 `],
				[/* reference */ 'r', `java.lang.String#valueOf(double)`, `String.valueOf(double)`],
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
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'print(float)', [
			[/* method description */
				[/* text */ 't', `Prints a floating-point number.  The string produced by `],
				[/* reference */ 'r', `java.lang.String#valueOf(double)`, `String.valueOf(float)`],
				[/* text */ 't', ` is translated into bytes
 according to the platform's default character encoding, and these bytes
 are written in exactly the manner of the `],
				[/* reference */ 'r', `#write(int)`, `write(int)`],
				[/* text */ 't', `
 method.`]
			],
			[/* parameters */
				[/* parameter */ 'f', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` to be printed`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'print(int)', [
			[/* method description */
				[/* text */ 't', `Prints an integer.  The string produced by `],
				[/* reference */ 'r', `java.lang.String#valueOf(double)`, `String.valueOf(int)`],
				[/* text */ 't', ` is translated into bytes according
 to the platform's default character encoding, and these bytes are
 written in exactly the manner of the `],
				[/* reference */ 'r', `#write(int)`, `write(int)`],
				[/* text */ 't', `
 method.`]
			],
			[/* parameters */
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` to be printed`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'print(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Prints an object.  The string produced by the `],
				[/* reference */ 'r', `java.lang.String#valueOf(java.lang.Object)`, `String.valueOf(Object)`],
				[/* text */ 't', ` method is translated into bytes
 according to the platform's default character encoding, and these bytes
 are written in exactly the manner of the `],
				[/* reference */ 'r', `#write(int)`, `write(int)`],
				[/* text */ 't', `
 method.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', ` to be printed`]
				]]
			],
			/* throws */,
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
 converted into bytes according to the platform's default character
 encoding, and these bytes are written in exactly the manner of the
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
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'print(long)', [
			[/* method description */
				[/* text */ 't', `Prints a long integer.  The string produced by `],
				[/* reference */ 'r', `java.lang.String#valueOf(double)`, `String.valueOf(long)`],
				[/* text */ 't', ` is translated into bytes
 according to the platform's default character encoding, and these bytes
 are written in exactly the manner of the `],
				[/* reference */ 'r', `#write(int)`, `write(int)`],
				[/* text */ 't', `
 method.`]
			],
			[/* parameters */
				[/* parameter */ 'l', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` to be printed`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'println()', [
			[/* method description */
				[/* text */ 't', `Terminates the current line by writing the line separator string.  The
 line separator is `],
				[/* reference */ 'r', `java.lang.System#lineSeparator()`, `System.lineSeparator()`],
				[/* text */ 't', ` and is not necessarily
 a single newline character (`],
				[/* inline code block */ 'i', `'\\n'`],
				[/* text */ 't', `).`]
			],
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'println(boolean)', [
			[/* method description */
				[/* text */ 't', `Prints a boolean value and then terminates the line.  This method behaves
 as though it invokes `],
				[/* reference */ 'r', `#print(boolean)`, `print(boolean)`],
				[/* text */ 't', ` and then
 `],
				[/* reference */ 'r', `#println()`, `println()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `boolean`],
					[/* text */ 't', ` value to be printed`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'println(char)', [
			[/* method description */
				[/* text */ 't', `Prints a character and then terminates the line.  This method behaves as
 though it invokes `],
				[/* reference */ 'r', `#print(double)`, `print(char)`],
				[/* text */ 't', ` and then `],
				[/* reference */ 'r', `#println()`, `println()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value to be printed`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'println(char[])', [
			[/* method description */
				[/* text */ 't', `Prints an array of characters and then terminates the line.  This method
 behaves as though it invokes `],
				[/* reference */ 'r', `#print(java.lang.Object)`, `print(char[])`],
				[/* text */ 't', ` and then
 `],
				[/* reference */ 'r', `#println()`, `println()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the array of `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` values to be printed`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'println(double)', [
			[/* method description */
				[/* text */ 't', `Prints a double-precision floating-point number and then terminates the
 line.  This method behaves as though it invokes `],
				[/* reference */ 'r', `#print(double)`, `print(double)`],
				[/* text */ 't', ` and then `],
				[/* reference */ 'r', `#println()`, `println()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` value to be printed`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'println(float)', [
			[/* method description */
				[/* text */ 't', `Prints a floating-point number and then terminates the line.  This method
 behaves as though it invokes `],
				[/* reference */ 'r', `#print(double)`, `print(float)`],
				[/* text */ 't', ` and then
 `],
				[/* reference */ 'r', `#println()`, `println()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` value to be printed`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'println(int)', [
			[/* method description */
				[/* text */ 't', `Prints an integer and then terminates the line.  This method behaves as
 though it invokes `],
				[/* reference */ 'r', `#print(double)`, `print(int)`],
				[/* text */ 't', ` and then `],
				[/* reference */ 'r', `#println()`, `println()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value to be printed`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'println(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Prints an Object and then terminates the line.  This method calls
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
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'println(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Prints a String and then terminates the line.  This method behaves as
 though it invokes `],
				[/* reference */ 'r', `#print(java.lang.Object)`, `print(String)`],
				[/* text */ 't', ` and then
 `],
				[/* reference */ 'r', `#println()`, `println()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` value to be printed`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'println(long)', [
			[/* method description */
				[/* text */ 't', `Prints a long integer and then terminates the line.  This method behaves
 as though it invokes `],
				[/* reference */ 'r', `#print(double)`, `print(long)`],
				[/* text */ 't', ` and then
 `],
				[/* reference */ 'r', `#println()`, `println()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` value to be printed`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'write(char[])', [
			[/* method description */
				[/* text */ 't', `Writes an array of characters.  This method cannot be inherited from the
 Writer class because it must suppress I/O exceptions.`]
			],
			[/* parameters */
				[/* parameter */ 'buf', [/* parameter description */
					[/* text */ 't', `Array of characters to be written`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'write(char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Writes A Portion of an array of characters.`]
			],
			[/* parameters */
				[/* parameter */ 'buf', [/* parameter description */
					[/* text */ 't', `Array of characters`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `Offset from which to start writing characters`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `Number of characters to write`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the values of the `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` parameters
          cause the corresponding method of the underlying `],
					[/* inline code block */ 'i', `Writer`],
					[/* text */ 't', `
          to throw an `],
					[/* inline code block */ 'i', `IndexOutOfBoundsException`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(int)', [
			[/* method description */
				[/* text */ 't', `Writes a single character.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `int specifying a character to be written.`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'write(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Writes a string.  This method cannot be inherited from the Writer class
 because it must suppress I/O exceptions.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `String to be written`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'write(java.lang.String,int,int)', [
			[/* method description */
				[/* text */ 't', `Writes a portion of a string.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `A String`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `Offset from which to start writing characters`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `Number of characters to write`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the values of the `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` parameters
          cause the corresponding method of the underlying `],
					[/* inline code block */ 'i', `Writer`],
					[/* text */ 't', `
          to throw an `],
					[/* inline code block */ 'i', `IndexOutOfBoundsException`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
