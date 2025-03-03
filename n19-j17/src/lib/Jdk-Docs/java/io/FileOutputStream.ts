import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.FileOutputStream', [
	[/* class description */
		[/* text */ 't', `A file output stream is an output stream for writing data to a
 `],
		[/* inline code block */ 'i', `File`],
		[/* text */ 't', ` or to a `],
		[/* inline code block */ 'i', `FileDescriptor`],
		[/* text */ 't', `. Whether or not
 a file is available or may be created depends upon the underlying
 platform.  Some platforms, in particular, allow a file to be opened
 for writing by only one `],
		[/* inline code block */ 'i', `FileOutputStream`],
		[/* text */ 't', ` (or other
 file-writing object) at a time.  In such situations the constructors in
 this class will fail if the file involved is already open.

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `FileOutputStream`],
			[/* text */ 't', ` is meant for writing streams of raw bytes
 such as image data. For writing streams of characters, consider using
 `],
			[/* inline code block */ 'i', `FileWriter`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.io.FileDescriptor)', [
			[/* constructor description */
				[/* text */ 't', `Creates a file output stream to write to the specified file
 descriptor, which represents an existing connection to an actual
 file in the file system.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 First, if there is a security manager, its `],
					[/* inline code block */ 'i', `checkWrite`],
					[/* text */ 't', `
 method is called with the file descriptor `],
					[/* inline code block */ 'i', `fdObj`],
					[/* text */ 't', `
 argument as its argument.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* inline code block */ 'i', `fdObj`],
					[/* text */ 't', ` is null then a `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', `
 is thrown.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This constructor does not throw an exception if `],
					[/* inline code block */ 'i', `fdObj`],
					[/* text */ 't', `
 is `],
					[/* reference */ 'r', `.FileDescriptor#valid()`],
					[/* text */ 't', `.
 However, if the methods are invoked on the resulting stream to attempt
 I/O on the stream, an `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', ` is thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fdObj', [/* parameter description */
					[/* text */ 't', `the file descriptor to be opened for writing`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
               `],
					[/* inline code block */ 'i', `checkWrite`],
					[/* text */ 't', ` method denies
               write access to the file descriptor`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.File,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a file output stream to write to the file represented by
 the specified `],
				[/* inline code block */ 'i', `File`],
				[/* text */ 't', ` object. If the second argument is
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `, then bytes will be written to the end of the file
 rather than the beginning. A new `],
				[/* inline code block */ 'i', `FileDescriptor`],
				[/* text */ 't', ` object is
 created to represent this file connection.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 First, if there is a security manager, its `],
					[/* inline code block */ 'i', `checkWrite`],
					[/* text */ 't', `
 method is called with the path represented by the `],
					[/* inline code block */ 'i', `file`],
					[/* text */ 't', `
 argument as its argument.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the file exists but is a directory rather than a regular file, does
 not exist but cannot be created, or cannot be opened for any other
 reason then a `],
					[/* inline code block */ 'i', `FileNotFoundException`],
					[/* text */ 't', ` is thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the file to be opened for writing.`]
				]],
				[/* parameter */ 'append', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, then bytes will be written
                   to the end of the file rather than the beginning`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.FileNotFoundException', [/* throw description */
					[/* text */ 't', `if the file exists but is a directory
                   rather than a regular file, does not exist but cannot
                   be created, or cannot be opened for any other reason`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
               `],
					[/* inline code block */ 'i', `checkWrite`],
					[/* text */ 't', ` method denies write access
               to the file.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.File)', [
			[/* constructor description */
				[/* text */ 't', `Creates a file output stream to write to the file represented by
 the specified `],
				[/* inline code block */ 'i', `File`],
				[/* text */ 't', ` object. A new
 `],
				[/* inline code block */ 'i', `FileDescriptor`],
				[/* text */ 't', ` object is created to represent this
 file connection.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 First, if there is a security manager, its `],
					[/* inline code block */ 'i', `checkWrite`],
					[/* text */ 't', `
 method is called with the path represented by the `],
					[/* inline code block */ 'i', `file`],
					[/* text */ 't', `
 argument as its argument.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the file exists but is a directory rather than a regular file, does
 not exist but cannot be created, or cannot be opened for any other
 reason then a `],
					[/* inline code block */ 'i', `FileNotFoundException`],
					[/* text */ 't', ` is thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the file to be opened for writing.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.FileNotFoundException', [/* throw description */
					[/* text */ 't', `if the file exists but is a directory
                   rather than a regular file, does not exist but cannot
                   be created, or cannot be opened for any other reason`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
               `],
					[/* inline code block */ 'i', `checkWrite`],
					[/* text */ 't', ` method denies write access
               to the file.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a file output stream to write to the file with the specified
 name.  If the second argument is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `, then
 bytes will be written to the end of the file rather than the beginning.
 A new `],
				[/* inline code block */ 'i', `FileDescriptor`],
				[/* text */ 't', ` object is created to represent this
 file connection.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 First, if there is a security manager, its `],
					[/* inline code block */ 'i', `checkWrite`],
					[/* text */ 't', `
 method is called with `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` as its argument.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the file exists but is a directory rather than a regular file, does
 not exist but cannot be created, or cannot be opened for any other
 reason then a `],
					[/* inline code block */ 'i', `FileNotFoundException`],
					[/* text */ 't', ` is thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the system-dependent file name`]
				]],
				[/* parameter */ 'append', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, then bytes will be written
                   to the end of the file rather than the beginning`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.FileNotFoundException', [/* throw description */
					[/* text */ 't', `if the file exists but is a directory
                   rather than a regular file, does not exist but cannot
                   be created, or cannot be opened for any other reason.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
               `],
					[/* inline code block */ 'i', `checkWrite`],
					[/* text */ 't', ` method denies write access
               to the file.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a file output stream to write to the file with the
 specified name. A new `],
				[/* inline code block */ 'i', `FileDescriptor`],
				[/* text */ 't', ` object is
 created to represent this file connection.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 First, if there is a security manager, its `],
					[/* inline code block */ 'i', `checkWrite`],
					[/* text */ 't', `
 method is called with `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` as its argument.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the file exists but is a directory rather than a regular file, does
 not exist but cannot be created, or cannot be opened for any other
 reason then a `],
					[/* inline code block */ 'i', `FileNotFoundException`],
					[/* text */ 't', ` is thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the system-dependent filename`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.FileNotFoundException', [/* throw description */
					[/* text */ 't', `if the file exists but is a directory
                   rather than a regular file, does not exist but cannot
                   be created, or cannot be opened for any other reason`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
               `],
					[/* inline code block */ 'i', `checkWrite`],
					[/* text */ 't', ` method denies write access
               to the file.`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'write(int)', [
			[/* method description */
				[/* text */ 't', `Writes the specified byte to this file output stream. Implements
 the `],
				[/* inline code block */ 'i', `write`],
				[/* text */ 't', ` method of `],
				[/* inline code block */ 'i', `OutputStream`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the byte to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(byte[])', [
			[/* method description */
				[/* text */ 't', `Writes `],
				[/* inline code block */ 'i', `b.length`],
				[/* text */ 't', ` bytes from the specified byte array
 to this file output stream.`]
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
				[/* text */ 't', ` to this file output stream.`]
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
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this file output stream and releases any system resources
 associated with this stream. This file output stream may no longer
 be used for writing bytes.

 `],
				[/* block */ 'b', ` If this stream has an associated channel then the channel is closed
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
		[/* method */ 'getFD()', [
			[/* method description */
				[/* text */ 't', `Returns the file descriptor associated with this stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `FileDescriptor`],
				[/* text */ 't', ` object that represents
          the connection to the file in the file system being used
          by this `],
				[/* inline code block */ 'i', `FileOutputStream`],
				[/* text */ 't', ` object.`]
			]
		]],
		[/* method */ 'getChannel()', [
			[/* method description */
				[/* text */ 't', `Returns the unique `],
				[/* reference */ 'r', `java.nio.channels.FileChannel`],
				[/* text */ 't', `
 object associated with this file output stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The initial `],
					[/* reference */ 'r', `java.FileChannel#position()`],
					[/* text */ 't', ` of the returned channel will be equal to the
 number of bytes written to the file so far unless this stream is in
 append mode, in which case it will be equal to the size of the file.
 Writing bytes to this stream will increment the channel's position
 accordingly.  Changing the channel's position, either explicitly or by
 writing, will change this stream's file position.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the file channel associated with this file output stream`]
			]
		]]
	],
]);
