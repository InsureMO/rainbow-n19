import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.FileInputStream', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `FileInputStream`],
		[/* text */ 't', ` obtains input bytes
 from a file in a file system. What files
 are  available depends on the host environment.

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `FileInputStream`],
			[/* text */ 't', ` is meant for reading streams of raw bytes
 such as image data. For reading streams of characters, consider using
 `],
			[/* inline code block */ 'i', `FileReader`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.io.FileDescriptor)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `FileInputStream`],
				[/* text */ 't', ` by using the file descriptor
 `],
				[/* inline code block */ 'i', `fdObj`],
				[/* text */ 't', `, which represents an existing connection to an
 actual file in the file system.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If there is a security manager, its `],
					[/* inline code block */ 'i', `checkRead`],
					[/* text */ 't', ` method is
 called with the file descriptor `],
					[/* inline code block */ 'i', `fdObj`],
					[/* text */ 't', ` as its argument to
 see if it's ok to read the file descriptor. If read access is denied
 to the file descriptor a `],
					[/* inline code block */ 'i', `SecurityException`],
					[/* text */ 't', ` is thrown.
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
					[/* text */ 't', `the file descriptor to be opened for reading.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
             `],
					[/* inline code block */ 'i', `checkRead`],
					[/* text */ 't', ` method denies read access to the
             file descriptor.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.File)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `FileInputStream`],
				[/* text */ 't', ` by
 opening a connection to an actual file,
 the file named by the `],
				[/* inline code block */ 'i', `File`],
				[/* text */ 't', `
 object `],
				[/* inline code block */ 'i', `file`],
				[/* text */ 't', ` in the file system.
 A new `],
				[/* inline code block */ 'i', `FileDescriptor`],
				[/* text */ 't', ` object
 is created to represent this file connection.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 First, if there is a security manager,
 its `],
					[/* inline code block */ 'i', `checkRead`],
					[/* text */ 't', ` method  is called
 with the path represented by the `],
					[/* inline code block */ 'i', `file`],
					[/* text */ 't', `
 argument as its argument.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the named file does not exist, is a directory rather than a regular
 file, or for some other reason cannot be opened for reading then a
 `],
					[/* inline code block */ 'i', `FileNotFoundException`],
					[/* text */ 't', ` is thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the file to be opened for reading.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.FileNotFoundException', [/* throw description */
					[/* text */ 't', `if the file does not exist,
             is a directory rather than a regular file,
             or for some other reason cannot be opened for
             reading.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
             `],
					[/* inline code block */ 'i', `checkRead`],
					[/* text */ 't', ` method denies read access to the file.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `FileInputStream`],
				[/* text */ 't', ` by
 opening a connection to an actual file,
 the file named by the path name `],
				[/* inline code block */ 'i', `name`],
				[/* text */ 't', `
 in the file system.  A new `],
				[/* inline code block */ 'i', `FileDescriptor`],
				[/* text */ 't', `
 object is created to represent this file
 connection.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 First, if there is a security
 manager, its `],
					[/* inline code block */ 'i', `checkRead`],
					[/* text */ 't', ` method
 is called with the `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` argument
 as its argument.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the named file does not exist, is a directory rather than a regular
 file, or for some other reason cannot be opened for reading then a
 `],
					[/* inline code block */ 'i', `FileNotFoundException`],
					[/* text */ 't', ` is thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the system-dependent file name.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.FileNotFoundException', [/* throw description */
					[/* text */ 't', `if the file does not exist,
             is a directory rather than a regular file,
             or for some other reason cannot be opened for
             reading.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
             `],
					[/* inline code block */ 'i', `checkRead`],
					[/* text */ 't', ` method denies read access
             to the file.`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'read()', [
			[/* method description */
				[/* text */ 't', `Reads a byte of data from this input stream. This method blocks
 if no input is yet available.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next byte of data, or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the end of the
             file is reached.`]
			]
		]],
		[/* method */ 'read(byte[])', [
			[/* method description */
				[/* text */ 't', `Reads up to `],
				[/* inline code block */ 'i', `b.length`],
				[/* text */ 't', ` bytes of data from this input
 stream into an array of bytes. This method blocks until some input
 is available.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the buffer into which the data is read.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
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
		[/* method */ 'read(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reads up to `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` bytes of data from this input stream
 into an array of bytes. If `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` is not zero, the method
 blocks until some input is available; otherwise, no
 bytes are read and `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the buffer into which the data is read.`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset in the destination array `],
					[/* inline code block */ 'i', `b`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the maximum number of bytes read.`]
				]]
			],
			[/* throws */
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
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
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
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this file input stream and releases any system resources
 associated with the stream.

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
		[/* method */ 'readAllBytes()', UDF],
		[/* method */ 'readNBytes(int)', UDF],
		[/* method */ 'skip(long)', [
			[/* method description */
				[/* text */ 't', `Skips over and discards `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` bytes of data from the
 input stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `skip`],
					[/* text */ 't', ` method may, for a variety of
 reasons, end up skipping over some smaller number of bytes,
 possibly `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `. If `],
					[/* inline code block */ 'i', `n`],
					[/* text */ 't', ` is negative, the method
 will try to skip backwards. In case the backing file does not support
 backward skip at its current position, an `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', ` is
 thrown. The actual number of bytes skipped is returned. If it skips
 forwards, it returns a positive value. If it skips backwards, it
 returns a negative value.

 `]
				]],
				[/* block */ 'b', `This method may skip more bytes than what are remaining in the
 backing file. This produces no exception and the number of bytes skipped
 may include some number of bytes that were beyond the EOF of the
 backing file. Attempting to read from the stream after skipping past
 the end will result in -1 indicating the end of the file.`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `the number of bytes to be skipped.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if n is negative, if the stream does not
             support seek, or if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of bytes skipped.`]
			]
		]],
		[/* method */ 'available()', [
			[/* method description */
				[/* text */ 't', `Returns an estimate of the number of remaining bytes that can be read (or
 skipped over) from this input stream without blocking by the next
 invocation of a method for this input stream. Returns 0 when the file
 position is beyond EOF. The next invocation might be the same thread
 or another thread. A single read or skip of this many bytes will not
 block, but may read or skip fewer bytes.

 `],
				[/* block */ 'b', ` In some cases, a non-blocking read (or skip) may appear to be
 blocked when it is merely slow, for example when reading large
 files over slow networks.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if this file input stream has been closed by calling
             `],
					[/* inline code block */ 'i', `close`],
					[/* text */ 't', ` or an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an estimate of the number of remaining bytes that can be read
             (or skipped over) from this input stream without blocking.`]
			]
		]],
		[/* method */ 'getFD()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `FileDescriptor`],
				[/* text */ 't', `
 object  that represents the connection to
 the actual file in the file system being
 used by this `],
				[/* inline code block */ 'i', `FileInputStream`],
				[/* text */ 't', `.`]
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
		[/* method */ 'getChannel()', [
			[/* method description */
				[/* text */ 't', `Returns the unique `],
				[/* reference */ 'r', `java.nio.channels.FileChannel`],
				[/* text */ 't', `
 object associated with this file input stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The initial `],
					[/* reference */ 'r', `java.FileChannel#position()`],
					[/* text */ 't', ` of the returned channel will be equal to the
 number of bytes read from the file so far.  Reading bytes from this
 stream will increment the channel's position.  Changing the channel's
 position, either explicitly or by reading, will change this stream's
 file position.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the file channel associated with this file input stream`]
			]
		]]
	],
]);
