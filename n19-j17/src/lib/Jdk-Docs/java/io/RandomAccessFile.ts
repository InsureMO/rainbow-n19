import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.RandomAccessFile', [
	[/* class description */
		[/* text */ 't', `Instances of this class support both reading and writing to a
 random access file. A random access file behaves like a large
 array of bytes stored in the file system. There is a kind of cursor,
 or index into the implied array, called the `],
		[/* text */ 't', `file pointer`],
		[/* text */ 't', `;
 input operations read bytes starting at the file pointer and advance
 the file pointer past the bytes read. If the random access file is
 created in read/write mode, then output operations are also available;
 output operations write bytes starting at the file pointer and advance
 the file pointer past the bytes written. Output operations that write
 past the current end of the implied array cause the array to be
 extended. The file pointer can be read by the
 `],
		[/* inline code block */ 'i', `getFilePointer`],
		[/* text */ 't', ` method and set by the `],
		[/* inline code block */ 'i', `seek`],
		[/* text */ 't', `
 method.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 It is generally true of all the reading routines in this class that
 if end-of-file is reached before the desired number of bytes has been
 read, an `],
			[/* inline code block */ 'i', `EOFException`],
			[/* text */ 't', ` (which is a kind of
 `],
			[/* inline code block */ 'i', `IOException`],
			[/* text */ 't', `) is thrown. If any byte cannot be read for
 any reason other than end-of-file, an `],
			[/* inline code block */ 'i', `IOException`],
			[/* text */ 't', ` other
 than `],
			[/* inline code block */ 'i', `EOFException`],
			[/* text */ 't', ` is thrown. In particular, an
 `],
			[/* inline code block */ 'i', `IOException`],
			[/* text */ 't', ` may be thrown if the stream has been closed.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.io.File,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a random access file stream to read from, and optionally to
 write to, the file specified by the `],
				[/* reference */ 'r', `java.io.File`, `File`],
				[/* text */ 't', ` argument.  A new `],
				[/* reference */ 'r', `java.io.FileDescriptor`, `FileDescriptor`],
				[/* text */ 't', ` object is created to represent this file connection.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* anchor */ 'r', '#-id', `mode`, `mode`],
					[/* text */ 't', ` argument specifies the access mode
 in which the file is to be opened.  The permitted values and their
 meanings are:

 `]
				]],
				[/* table */ 'tbl',
					[/* caption */ 'tc'],
					[/* table header */ 'th', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Value`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Meaning`]
							]]
						]]
					]],
					[/* table body */ 'tb', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `"r"`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', ` Open for reading only. Invoking any of the `],
								[/* inline code block */ 'i', `write`],
								[/* text */ 't', `
     methods of the resulting object will cause an
     `],
								[/* reference */ 'r', `java.io.IOException`, `IOException`],
								[/* text */ 't', ` to be thrown.`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `"rw"`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', ` Open for reading and writing.  If the file does not already
     exist then an attempt will be made to create it.`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `"rws"`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', ` Open for reading and writing, as with `],
								[/* inline code block */ 'i', `"rw"`],
								[/* text */ 't', `, and also
     require that every update to the file's content or metadata be
     written synchronously to the underlying storage device.`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `"rwd"`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', ` Open for reading and writing, as with `],
								[/* inline code block */ 'i', `"rw"`],
								[/* text */ 't', `, and also
     require that every update to the file's content be written
     synchronously to the underlying storage device.`]
							]]
						]]
					]],
				],
				[/* text */ 't', `

 The `],
				[/* inline code block */ 'i', `"rws"`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `"rwd"`],
				[/* text */ 't', ` modes work much like the `],
				[/* reference */ 'r', `java.nio.channels.FileChannel#force(boolean)`, `force(boolean)`],
				[/* text */ 't', ` method of
 the `],
				[/* reference */ 'r', `java.nio.channels.FileChannel`, `FileChannel`],
				[/* text */ 't', ` class, passing arguments of
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `, respectively, except that they always
 apply to every I/O operation and are therefore often more efficient.  If
 the file resides on a local storage device then when an invocation of a
 method of this class returns it is guaranteed that all changes made to
 the file by that invocation will have been written to that device.  This
 is useful for ensuring that critical information is not lost in the
 event of a system crash.  If the file does not reside on a local device
 then no such guarantee is made.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `"rwd"`],
					[/* text */ 't', ` mode can be used to reduce the number of I/O
 operations performed.  Using `],
					[/* inline code block */ 'i', `"rwd"`],
					[/* text */ 't', ` only requires updates to the
 file's content to be written to storage; using `],
					[/* inline code block */ 'i', `"rws"`],
					[/* text */ 't', ` requires
 updates to both the file's content and its metadata to be written, which
 generally requires at least one more low-level I/O operation.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If there is a security manager, its `],
					[/* inline code block */ 'i', `checkRead`],
					[/* text */ 't', ` method is
 called with the pathname of the `],
					[/* inline code block */ 'i', `file`],
					[/* text */ 't', ` argument as its
 argument to see if read access to the file is allowed.  If the mode
 allows writing, the security manager's `],
					[/* inline code block */ 'i', `checkWrite`],
					[/* text */ 't', ` method is
 also called with the path argument to see if write access to the file is
 allowed.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the file object`]
				]],
				[/* parameter */ 'mode', [/* parameter description */
					[/* text */ 't', `the access mode, as described
                    `],
					[/* text */ 't', `above`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the mode argument is not equal
             to one of `],
					[/* inline code block */ 'i', `"r"`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `"rw"`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `"rws"`],
					[/* text */ 't', `, or
             `],
					[/* inline code block */ 'i', `"rwd"`]
				]],
				[/* throw */ 'java.io.FileNotFoundException', [/* throw description */
					[/* text */ 't', `if the mode is `],
					[/* inline code block */ 'i', `"r"`],
					[/* text */ 't', ` but the given file object does
             not denote an existing regular file, or if the mode begins
             with `],
					[/* inline code block */ 'i', `"rw"`],
					[/* text */ 't', ` but the given file object does not denote
             an existing, writable regular file and a new regular file of
             that name cannot be created, or if some other error occurs
             while opening or creating the file`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
             `],
					[/* inline code block */ 'i', `checkRead`],
					[/* text */ 't', ` method denies read access to the file
             or the mode is `],
					[/* inline code block */ 'i', `"rw"`],
					[/* text */ 't', ` and the security manager's
             `],
					[/* inline code block */ 'i', `checkWrite`],
					[/* text */ 't', ` method denies write access to the file`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a random access file stream to read from, and optionally
 to write to, a file with the specified name. A new
 `],
				[/* reference */ 'r', `java.io.FileDescriptor`, `FileDescriptor`],
				[/* text */ 't', ` object is created to represent the
 connection to the file.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `mode`],
					[/* text */ 't', ` argument specifies the access mode with which the
 file is to be opened.  The permitted values and their meanings are as
 specified for the `],
					[/* text */ 't', `RandomAccessFile(File,String)`],
					[/* text */ 't', ` constructor.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If there is a security manager, its `],
					[/* inline code block */ 'i', `checkRead`],
					[/* text */ 't', ` method
 is called with the `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` argument
 as its argument to see if read access to the file is allowed.
 If the mode allows writing, the security manager's
 `],
					[/* inline code block */ 'i', `checkWrite`],
					[/* text */ 't', ` method
 is also called with the `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` argument
 as its argument to see if write access to the file is allowed.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the system-dependent filename`]
				]],
				[/* parameter */ 'mode', [/* parameter description */
					[/* text */ 't', `the access `],
					[/* text */ 't', `mode`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the mode argument is not equal
             to one of `],
					[/* inline code block */ 'i', `"r"`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `"rw"`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `"rws"`],
					[/* text */ 't', `, or
             `],
					[/* inline code block */ 'i', `"rwd"`]
				]],
				[/* throw */ 'java.io.FileNotFoundException', [/* throw description */
					[/* text */ 't', `if the mode is `],
					[/* inline code block */ 'i', `"r"`],
					[/* text */ 't', ` but the given string does not
             denote an existing regular file, or if the mode begins with
             `],
					[/* inline code block */ 'i', `"rw"`],
					[/* text */ 't', ` but the given string does not denote an
             existing, writable regular file and a new regular file of
             that name cannot be created, or if some other error occurs
             while opening or creating the file`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
             `],
					[/* inline code block */ 'i', `checkRead`],
					[/* text */ 't', ` method denies read access to the file
             or the mode is `],
					[/* inline code block */ 'i', `"rw"`],
					[/* text */ 't', ` and the security manager's
             `],
					[/* inline code block */ 'i', `checkWrite`],
					[/* text */ 't', ` method denies write access to the file`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'readBoolean()', [
			[/* method description */
				[/* text */ 't', `Reads a `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` from this file. This method reads a
 single byte from the file, starting at the current file pointer.
 A value of `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` represents
 `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `. Any other value represents `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `.
 This method blocks until the byte is read, the end of the stream
 is detected, or an exception is thrown.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this file has reached the end.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` value read.`]
			]
		]],
		[/* method */ 'readByte()', [
			[/* method description */
				[/* text */ 't', `Reads a signed eight-bit value from this file. This method reads a
 byte from the file, starting from the current file pointer.
 If the byte read is `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `, where
 `],
				[/* inline code block */ 'i', `0 <= b <= 255`],
				[/* text */ 't', `,
 then the result is:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', `     (byte)(b)
 `]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', `
 This method blocks until the byte is read, the end of the stream
 is detected, or an exception is thrown.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this file has reached the end.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next byte of this file as a signed eight-bit
             `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'readChar()', [
			[/* method description */
				[/* text */ 't', `Reads a character from this file. This method reads two
 bytes from the file, starting at the current file pointer.
 If the bytes read, in order, are
 `],
				[/* inline code block */ 'i', `b1`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b2`],
				[/* text */ 't', `, where
 `],
				[/* inline code block */ 'i', `0 <= b1, b2 <= 255`],
				[/* text */ 't', `,
 then the result is equal to:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', `     (char)((b1 << 8) | b2)
 `]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', `
 This method blocks until the two bytes are read, the end of the
 stream is detected, or an exception is thrown.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this file reaches the end before reading
               two bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next two bytes of this file, interpreted as a
                  `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'readDouble()', [
			[/* method description */
				[/* text */ 't', `Reads a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` from this file. This method reads a
 `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value, starting at the current file pointer,
 as if by the `],
				[/* inline code block */ 'i', `readLong`],
				[/* text */ 't', ` method
 and then converts that `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` to a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `
 using the `],
				[/* inline code block */ 'i', `longBitsToDouble`],
				[/* text */ 't', ` method in
 class `],
				[/* inline code block */ 'i', `Double`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This method blocks until the eight bytes are read, the end of the
 stream is detected, or an exception is thrown.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this file reaches the end before reading
             eight bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next eight bytes of this file, interpreted as a
             `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'readFloat()', [
			[/* method description */
				[/* text */ 't', `Reads a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` from this file. This method reads an
 `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value, starting at the current file pointer,
 as if by the `],
				[/* inline code block */ 'i', `readInt`],
				[/* text */ 't', ` method
 and then converts that `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` to a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `
 using the `],
				[/* inline code block */ 'i', `intBitsToFloat`],
				[/* text */ 't', ` method in class
 `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This method blocks until the four bytes are read, the end of the
 stream is detected, or an exception is thrown.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this file reaches the end before reading
             four bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next four bytes of this file, interpreted as a
             `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'readInt()', [
			[/* method description */
				[/* text */ 't', `Reads a signed 32-bit integer from this file. This method reads 4
 bytes from the file, starting at the current file pointer.
 If the bytes read, in order, are `],
				[/* inline code block */ 'i', `b1`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `b2`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `b3`],
				[/* text */ 't', `, and `],
				[/* inline code block */ 'i', `b4`],
				[/* text */ 't', `, where
 `],
				[/* inline code block */ 'i', `0 <= b1, b2, b3, b4 <= 255`],
				[/* text */ 't', `,
 then the result is equal to:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', `     (b1 << 24) | (b2 << 16) + (b3 << 8) + b4
 `]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', `
 This method blocks until the four bytes are read, the end of the
 stream is detected, or an exception is thrown.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this file reaches the end before reading
               four bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next four bytes of this file, interpreted as an
             `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'readUnsignedByte()', [
			[/* method description */
				[/* text */ 't', `Reads an unsigned eight-bit number from this file. This method reads
 a byte from this file, starting at the current file pointer,
 and returns that byte.
 `],
				[/* block */ 'b', `
 This method blocks until the byte is read, the end of the stream
 is detected, or an exception is thrown.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this file has reached the end.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next byte of this file, interpreted as an unsigned
             eight-bit number.`]
			]
		]],
		[/* method */ 'readUnsignedShort()', [
			[/* method description */
				[/* text */ 't', `Reads an unsigned 16-bit number from this file. This method reads
 two bytes from the file, starting at the current file pointer.
 If the bytes read, in order, are
 `],
				[/* inline code block */ 'i', `b1`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b2`],
				[/* text */ 't', `, where
 `],
				[/* inline code block */ 'i', `0 <= b1, b2 <= 255`],
				[/* text */ 't', `,
 then the result is equal to:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', `     (b1 << 8) | b2
 `]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', `
 This method blocks until the two bytes are read, the end of the
 stream is detected, or an exception is thrown.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this file reaches the end before reading
               two bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next two bytes of this file, interpreted as an unsigned
             16-bit integer.`]
			]
		]],
		[/* method */ 'getFD()', [
			[/* method description */
				[/* text */ 't', `Returns the opaque file descriptor object associated with this
 stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the file descriptor object associated with this stream.`]
			]
		]],
		[/* method */ 'readLine()', [
			[/* method description */
				[/* text */ 't', `Reads the next line of text from this file.  This method successively
 reads bytes from the file, starting at the current file pointer,
 until it reaches a line terminator or the end
 of the file.  Each byte is converted into a character by taking the
 byte's value for the lower eight bits of the character and setting the
 high eight bits of the character to zero.  This method does not,
 therefore, support the full Unicode character set.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` A line of text is terminated by a carriage-return character
 (`],
					[/* inline code block */ 'i', `'\\r'`],
					[/* text */ 't', `), a newline character (`],
					[/* inline code block */ 'i', `'\\n'`],
					[/* text */ 't', `), a
 carriage-return character immediately followed by a newline character,
 or the end of the file.  Line-terminating characters are discarded and
 are not included as part of the string returned.

 `]
				]],
				[/* block */ 'b', ` This method blocks until a newline character is read, a carriage
 return and the byte following it are read (to see if it is a newline),
 the end of the file is reached, or an exception is thrown.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next line of text from this file, or null if end
             of file is encountered before even one byte is read.`]
			]
		]],
		[/* method */ 'readUTF()', [
			[/* method description */
				[/* text */ 't', `Reads in a string from this file. The string has been encoded
 using a
 `],
				[/* reference */ 'r', `java.io.DataInput#modified-utf-8`, `modified UTF-8`],
				[/* text */ 't', `
 format.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The first two bytes are read, starting from the current file
 pointer, as if by
 `],
					[/* inline code block */ 'i', `readUnsignedShort`],
					[/* text */ 't', `. This value gives the number of
 following bytes that are in the encoded string, not
 the length of the resulting string. The following bytes are then
 interpreted as bytes encoding characters in the modified UTF-8 format
 and are converted into characters.
 `]
				]],
				[/* block */ 'b', `
 This method blocks until all the bytes are read, the end of the
 stream is detected, or an exception is thrown.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this file reaches the end before
               reading all the bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]],
				[/* throw */ 'java.io.UTFDataFormatException', [/* throw description */
					[/* text */ 't', `if the bytes do not represent
               valid modified UTF-8 encoding of a Unicode string.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a Unicode string.`]
			]
		]],
		[/* method */ 'getChannel()', [
			[/* method description */
				[/* text */ 't', `Returns the unique `],
				[/* reference */ 'r', `java.nio.channels.FileChannel`, `FileChannel`],
				[/* text */ 't', `
 object associated with this file.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `java.nio.channels.FileChannel#position()`, `position`],
					[/* text */ 't', ` of the returned channel will always be equal to
 this object's file-pointer offset as returned by the `],
					[/* reference */ 'r', `#getFilePointer()`, `getFilePointer`],
					[/* text */ 't', ` method.  Changing this object's
 file-pointer offset, whether explicitly or by reading or writing bytes,
 will change the position of the channel, and vice versa.  Changing the
 file's length via this object will change the length seen via the file
 channel, and vice versa.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the file channel associated with this file`]
			]
		]],
		[/* method */ 'readLong()', [
			[/* method description */
				[/* text */ 't', `Reads a signed 64-bit integer from this file. This method reads eight
 bytes from the file, starting at the current file pointer.
 If the bytes read, in order, are
 `],
				[/* inline code block */ 'i', `b1`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `b2`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `b3`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `b4`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `b5`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `b6`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `b7`],
				[/* text */ 't', `, and `],
				[/* inline code block */ 'i', `b8,`],
				[/* text */ 't', ` where:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', `     0 <= b1, b2, b3, b4, b5, b6, b7, b8 <=255,
 `]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', `
 then the result is equal to:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', `     ((long)b1 << 56) + ((long)b2 << 48)
     + ((long)b3 << 40) + ((long)b4 << 32)
     + ((long)b5 << 24) + ((long)b6 << 16)
     + ((long)b7 << 8) + b8
 `]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 This method blocks until the eight bytes are read, the end of the
 stream is detected, or an exception is thrown.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this file reaches the end before reading
               eight bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next eight bytes of this file, interpreted as a
             `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'readShort()', [
			[/* method description */
				[/* text */ 't', `Reads a signed 16-bit number from this file. The method reads two
 bytes from this file, starting at the current file pointer.
 If the two bytes read, in order, are
 `],
				[/* inline code block */ 'i', `b1`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b2`],
				[/* text */ 't', `, where each of the two values is
 between `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `255`],
				[/* text */ 't', `, inclusive, then the
 result is equal to:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', `     (short)((b1 << 8) | b2)
 `]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', `
 This method blocks until the two bytes are read, the end of the
 stream is detected, or an exception is thrown.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this file reaches the end before reading
               two bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next two bytes of this file, interpreted as a signed
             16-bit number.`]
			]
		]],
		[/* method */ 'readFully(byte[])', [
			[/* method description */
				[/* text */ 't', `Reads `],
				[/* inline code block */ 'i', `b.length`],
				[/* text */ 't', ` bytes from this file into the byte
 array, starting at the current file pointer. This method reads
 repeatedly from the file until the requested number of bytes are
 read. This method blocks until the requested number of bytes are
 read, the end of the stream is detected, or an exception is thrown.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the buffer into which the data is read.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this file reaches the end before reading
              all the bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'readFully(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reads exactly `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` bytes from this file into the byte
 array, starting at the current file pointer. This method reads
 repeatedly from the file until the requested number of bytes are
 read. This method blocks until the requested number of bytes are
 read, the end of the stream is detected, or an exception is thrown.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the buffer into which the data is read.`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset into the data array `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the number of bytes to read.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` is negative,
                `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is greater than
                `],
					[/* inline code block */ 'i', `b.length - off`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this file reaches the end before reading
                all the bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeBoolean(boolean)', [
			[/* method description */
				[/* text */ 't', `Writes a `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` to the file as a one-byte value. The
 value `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` is written out as the value
 `],
				[/* inline code block */ 'i', `(byte)1`],
				[/* text */ 't', `; the value `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` is written out
 as the value `],
				[/* inline code block */ 'i', `(byte)0`],
				[/* text */ 't', `. The write starts at
 the current position of the file pointer.`]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `boolean`],
					[/* text */ 't', ` value to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeByte(int)', [
			[/* method description */
				[/* text */ 't', `Writes a `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', ` to the file as a one-byte value. The
 write starts at the current position of the file pointer.`]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `byte`],
					[/* text */ 't', ` value to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeBytes(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Writes the string to the file as a sequence of bytes. Each
 character in the string is written out, in sequence, by discarding
 its high eight bits. The write starts at the current position of
 the file pointer.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `a string of bytes to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeChar(int)', [
			[/* method description */
				[/* text */ 't', `Writes a `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` to the file as a two-byte value, high
 byte first. The write starts at the current position of the
 file pointer.`]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeChars(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Writes a string to the file as a sequence of characters. Each
 character is written to the data output stream as if by the
 `],
				[/* inline code block */ 'i', `writeChar`],
				[/* text */ 't', ` method. The write starts at the current
 position of the file pointer.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` value to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeDouble(double)', [
			[/* method description */
				[/* text */ 't', `Converts the double argument to a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` using the
 `],
				[/* inline code block */ 'i', `doubleToLongBits`],
				[/* text */ 't', ` method in class `],
				[/* inline code block */ 'i', `Double`],
				[/* text */ 't', `,
 and then writes that `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value to the file as an
 eight-byte quantity, high byte first. The write starts at the current
 position of the file pointer.`]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` value to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeFloat(float)', [
			[/* method description */
				[/* text */ 't', `Converts the float argument to an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` using the
 `],
				[/* inline code block */ 'i', `floatToIntBits`],
				[/* text */ 't', ` method in class `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', `,
 and then writes that `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value to the file as a
 four-byte quantity, high byte first. The write starts at the
 current position of the file pointer.`]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` value to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeInt(int)', [
			[/* method description */
				[/* text */ 't', `Writes an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` to the file as four bytes, high byte first.
 The write starts at the current position of the file pointer.`]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeLong(long)', [
			[/* method description */
				[/* text */ 't', `Writes a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` to the file as eight bytes, high byte first.
 The write starts at the current position of the file pointer.`]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeShort(int)', [
			[/* method description */
				[/* text */ 't', `Writes a `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` to the file as two bytes, high byte first.
 The write starts at the current position of the file pointer.`]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', ` to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeUTF(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Writes a string to the file using
 `],
				[/* reference */ 'r', `java.io.DataInput#modified-utf-8`, `modified UTF-8`],
				[/* text */ 't', `
 encoding in a machine-independent manner.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 First, two bytes are written to the file, starting at the
 current file pointer, as if by the
 `],
					[/* inline code block */ 'i', `writeShort`],
					[/* text */ 't', ` method giving the number of bytes to
 follow. This value is the number of bytes actually written out,
 not the length of the string. Following the length, each character
 of the string is output, in sequence, using the modified UTF-8 encoding
 for each character.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `a string to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'read()', [
			[/* method description */
				[/* text */ 't', `Reads a byte of data from this file. The byte is returned as an
 integer in the range 0 to 255 (`],
				[/* inline code block */ 'i', `0x00-0x0ff`],
				[/* text */ 't', `). This
 method blocks if no input is yet available.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Although `],
					[/* inline code block */ 'i', `RandomAccessFile`],
					[/* text */ 't', ` is not a subclass of
 `],
					[/* inline code block */ 'i', `InputStream`],
					[/* text */ 't', `, this method behaves in exactly the same
 way as the `],
					[/* reference */ 'r', `java.io.InputStream#read()`, `InputStream.read()`],
					[/* text */ 't', ` method of
 `],
					[/* inline code block */ 'i', `InputStream`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs. Not thrown if
                          end-of-file has been reached.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next byte of data, or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the end of the
             file has been reached.`]
			]
		]],
		[/* method */ 'read(byte[])', [
			[/* method description */
				[/* text */ 't', `Reads up to `],
				[/* inline code block */ 'i', `b.length`],
				[/* text */ 't', ` bytes of data from this file
 into an array of bytes. This method blocks until at least one byte
 of input is available.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Although `],
					[/* inline code block */ 'i', `RandomAccessFile`],
					[/* text */ 't', ` is not a subclass of
 `],
					[/* inline code block */ 'i', `InputStream`],
					[/* text */ 't', `, this method behaves in exactly the
 same way as the `],
					[/* reference */ 'r', `java.io.InputStream#read(byte[])`, `InputStream.read(byte[])`],
					[/* text */ 't', ` method of
 `],
					[/* inline code block */ 'i', `InputStream`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the buffer into which the data is read.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If the first byte cannot be read for any reason
             other than end of file, or if the random access file has been closed,
             or if some other I/O error occurs.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the total number of bytes read into the buffer, or
             `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if there is no more data because the end of
             this file has been reached.`]
			]
		]],
		[/* method */ 'read(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reads up to `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` bytes of data from this file into an
 array of bytes. This method blocks until at least one byte of input
 is available.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Although `],
					[/* inline code block */ 'i', `RandomAccessFile`],
					[/* text */ 't', ` is not a subclass of
 `],
					[/* inline code block */ 'i', `InputStream`],
					[/* text */ 't', `, this method behaves in exactly the
 same way as the `],
					[/* reference */ 'r', `java.io.InputStream#read(byte[],int,int)`, `InputStream.read(byte[], int, int)`],
					[/* text */ 't', ` method of
 `],
					[/* inline code block */ 'i', `InputStream`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the buffer into which the data is read.`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset in array `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `
                   at which the data is written.`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the maximum number of bytes read.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If the first byte cannot be read for any reason
             other than end of file, or if the random access file has been closed,
             or if some other I/O error occurs.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` is negative,
             `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is greater than
             `],
					[/* inline code block */ 'i', `b.length - off`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the total number of bytes read into the buffer, or
             `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if there is no more data because the end of
             the file has been reached.`]
			]
		]],
		[/* method */ 'skipBytes(int)', [
			[/* method description */
				[/* text */ 't', `Attempts to skip over `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` bytes of input discarding the
 skipped bytes.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `

 This method may skip over some smaller number of bytes, possibly zero.
 This may result from any of a number of conditions; reaching end of
 file before `],
					[/* inline code block */ 'i', `n`],
					[/* text */ 't', ` bytes have been skipped is only one
 possibility. This method never throws an `],
					[/* inline code block */ 'i', `EOFException`],
					[/* text */ 't', `.
 The actual number of bytes skipped is returned.  If `],
					[/* inline code block */ 'i', `n`],
					[/* text */ 't', `
 is negative, no bytes are skipped.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `the number of bytes to be skipped.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of bytes skipped.`]
			]
		]],
		[/* method */ 'getFilePointer()', [
			[/* method description */
				[/* text */ 't', `Returns the current offset in this file.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the offset from the beginning of the file, in bytes,
             at which the next read or write occurs.`]
			]
		]],
		[/* method */ 'length()', [
			[/* method description */
				[/* text */ 't', `Returns the length of this file.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the length of this file, measured in bytes.`]
			]
		]],
		[/* method */ 'setLength(long)', [
			[/* method description */
				[/* text */ 't', `Sets the length of this file.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the present length of the file as returned by the
 `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` method is greater than the `],
					[/* inline code block */ 'i', `newLength`],
					[/* text */ 't', `
 argument then the file will be truncated.  In this case, if the file
 offset as returned by the `],
					[/* inline code block */ 'i', `getFilePointer`],
					[/* text */ 't', ` method is greater
 than `],
					[/* inline code block */ 'i', `newLength`],
					[/* text */ 't', ` then after this method returns the offset
 will be equal to `],
					[/* inline code block */ 'i', `newLength`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If the present length of the file as returned by the
 `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` method is smaller than the `],
					[/* inline code block */ 'i', `newLength`],
					[/* text */ 't', `
 argument then the file will be extended.  In this case, the contents of
 the extended portion of the file are not defined.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'newLength', [/* parameter description */
					[/* text */ 't', `The desired length of the file`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this random access file stream and releases any system
 resources associated with the stream. A closed random access
 file cannot perform input or output operations and cannot be
 reopened.

 `],
				[/* block */ 'b', ` If this file has an associated channel then the channel is closed
 as well.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'seek(long)', [
			[/* method description */
				[/* text */ 't', `Sets the file-pointer offset, measured from the beginning of this
 file, at which the next read or write occurs.  The offset may be
 set beyond the end of the file. Setting the offset beyond the end
 of the file does not change the file length.  The file length will
 change only by writing after the offset has been set beyond the end
 of the file.`]
			],
			[/* parameters */
				[/* parameter */ 'pos', [/* parameter description */
					[/* text */ 't', `the offset position, measured in bytes from the
                   beginning of the file, at which to set the file
                   pointer.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is less than
                          `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', ` or if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(byte[])', [
			[/* method description */
				[/* text */ 't', `Writes `],
				[/* inline code block */ 'i', `b.length`],
				[/* text */ 't', ` bytes from the specified byte array
 to this file, starting at the current file pointer.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the data.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Writes `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` bytes from the specified byte array
 starting at offset `],
				[/* inline code block */ 'i', `off`],
				[/* text */ 't', ` to this file.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the data.`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset in the data.`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the number of bytes to write.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(int)', [
			[/* method description */
				[/* text */ 't', `Writes the specified byte to this file. The write starts at
 the current file pointer.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `byte`],
					[/* text */ 't', ` to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
