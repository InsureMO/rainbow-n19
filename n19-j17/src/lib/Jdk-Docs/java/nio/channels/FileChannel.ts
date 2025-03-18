import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.channels.FileChannel', [
	[/* class description */
		[/* text */ 't', `A channel for reading, writing, mapping, and manipulating a file.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A file channel is a `],
			[/* reference */ 'r', `java.nio.channels.SeekableByteChannel`, `SeekableByteChannel`],
			[/* text */ 't', ` that is connected to
 a file. It has a current `],
			[/* text */ 't', `position`],
			[/* text */ 't', ` within its file which can
 be both `],
			[/* reference */ 'r', `#position()`, `queried`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `#position(long)`, `modified`],
			[/* text */ 't', `.  The file itself contains a variable-length sequence
 of bytes that can be read and written and whose current `],
			[/* reference */ 'r', `#size()`, `size`],
			[/* text */ 't', ` can be queried.  The size of the file increases
 when bytes are written beyond its current size; the size of the file
 decreases when it is `],
			[/* reference */ 'r', `#truncate(long)`, `truncated`],
			[/* text */ 't', `.  The
 file may also have some associated `],
			[/* text */ 't', `metadata`],
			[/* text */ 't', ` such as access
 permissions, content type, and last-modification time; this class does not
 define methods for metadata access.

 `]
		]],
		[/* block */ 'b', ` In addition to the familiar read, write, and close operations of byte
 channels, this class defines the following file-specific operations: `],
		[/* text */ 't', `

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` Bytes may be `],
					[/* reference */ 'r', `#read(java.nio.ByteBuffer,long)`, `read`],
					[/* text */ 't', ` or
   `],
					[/* reference */ 'r', `#write(java.nio.ByteBuffer,long)`, `written`],
					[/* text */ 't', ` at an absolute
   position in a file in a way that does not affect the channel's current
   position.  `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` A region of a file may be `],
					[/* reference */ 'r', `#map(java.nio.channels.FileChannel.MapMode,long,long)`, `mapped`],
					[/* text */ 't', `
   directly into memory; for large files this is often much more efficient
   than invoking the usual `],
					[/* inline code block */ 'i', `read`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `write`],
					[/* text */ 't', ` methods.
   `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` Updates made to a file may be `],
					[/* reference */ 'r', `#force(boolean)`, `forced out`],
					[/* text */ 't', ` to the underlying storage device, ensuring that data are not
   lost in the event of a system crash.  `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` Bytes can be transferred from a file `],
					[/* reference */ 'r', `#transferTo(long,long,java.nio.channels.WritableByteChannel)`, `to some other channel`],
					[/* text */ 't', `, and `],
					[/* reference */ 'r', `#transferFrom(java.nio.channels.ReadableByteChannel,long,long)`, `vice versa`],
					[/* text */ 't', `, in a way that can be optimized by many operating systems
   into a very fast transfer directly to or from the filesystem cache.
   `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` A region of a file may be `],
					[/* reference */ 'r', `java.nio.channels.FileLock`, `locked`],
					[/* text */ 't', `
   against access by other programs.  `]
				]]
			]]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` File channels are safe for use by multiple concurrent threads.  The
 `],
			[/* reference */ 'r', `java.nio.channels.Channel#close()`, `close`],
			[/* text */ 't', ` method may be invoked at any time, as specified
 by the `],
			[/* reference */ 'r', `java.nio.channels.Channel`, `Channel`],
			[/* text */ 't', ` interface.  Only one operation that involves the
 channel's position or can change its file's size may be in progress at any
 given time; attempts to initiate a second such operation while the first is
 still in progress will block until the first operation completes.  Other
 operations, in particular those that take an explicit position, may proceed
 concurrently; whether they in fact do so is dependent upon the underlying
 implementation and is therefore unspecified.

 `]
		]],
		[/* block */ 'b', ` The view of a file provided by an instance of this class is guaranteed
 to be consistent with other views of the same file provided by other
 instances in the same program.  The view provided by an instance of this
 class may or may not, however, be consistent with the views seen by other
 concurrently-running programs due to caching performed by the underlying
 operating system and delays induced by network-filesystem protocols.  This
 is true regardless of the language in which these other programs are
 written, and whether they are running on the same machine or on some other
 machine.  The exact nature of any such inconsistencies are system-dependent
 and are therefore unspecified.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A file channel is created by invoking one of the `],
			[/* reference */ 'r', `#open(java.nio.file.Path,java.util.Set,java.nio.file.attribute.FileAttribute...)`, `open`],
			[/* text */ 't', `
 methods defined by this class. A file channel can also be obtained from an
 existing `],
			[/* reference */ 'r', `java.io.FileInputStream#getChannel()`, `FileInputStream`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.io.FileOutputStream#getChannel()`, `FileOutputStream`],
			[/* text */ 't', `, or `],
			[/* reference */ 'r', `java.io.RandomAccessFile#getChannel()`, `RandomAccessFile`],
			[/* text */ 't', ` object by invoking
 that object's `],
			[/* inline code block */ 'i', `getChannel`],
			[/* text */ 't', ` method, which returns a file channel that
 is connected to the same underlying file. Where the file channel is obtained
 from an existing stream or random access file then the state of the file
 channel is intimately connected to that of the object whose `],
			[/* inline code block */ 'i', `getChannel`],
			[/* text */ 't', `
 method returned the channel.  Changing the channel's position, whether
 explicitly or by reading or writing bytes, will change the file position of
 the originating object, and vice versa. Changing the file's length via the
 file channel will change the length seen via the originating object, and vice
 versa.  Changing the file's content by writing bytes will change the content
 seen by the originating object, and vice versa.

 `],
			[/* anchor */ 'r', '#-id', `open-mode`, ``],
			[/* text */ 't', ` `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` At various points this class specifies that an
 instance that is "open for reading," "open for writing," or "open for
 reading and writing" is required.  A channel obtained via the `],
			[/* reference */ 'r', `java.io.FileInputStream#getChannel()`, `getChannel`],
			[/* text */ 't', ` method of a `],
			[/* reference */ 'r', `java.io.FileInputStream`, `FileInputStream`],
			[/* text */ 't', ` instance will be open for reading.  A channel
 obtained via the `],
			[/* reference */ 'r', `java.io.FileOutputStream#getChannel()`, `getChannel`],
			[/* text */ 't', `
 method of a `],
			[/* reference */ 'r', `java.io.FileOutputStream`, `FileOutputStream`],
			[/* text */ 't', ` instance will be open for
 writing.  Finally, a channel obtained via the `],
			[/* reference */ 'r', `java.io.RandomAccessFile#getChannel()`, `getChannel`],
			[/* text */ 't', ` method of a `],
			[/* reference */ 'r', `java.io.RandomAccessFile`, `RandomAccessFile`],
			[/* text */ 't', ` instance will be open for reading if the instance
 was created with mode `],
			[/* inline code block */ 'i', `"r"`],
			[/* text */ 't', ` and will be open for reading and writing
 if the instance was created with mode `],
			[/* inline code block */ 'i', `"rw"`],
			[/* text */ 't', `.

 `],
			[/* anchor */ 'r', '#-id', `append-mode`, ``]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A file channel that is open for writing may be in
 `],
			[/* text */ 't', `append mode`],
			[/* text */ 't', `, for example if it was obtained from a file-output stream
 that was created by invoking the `],
			[/* reference */ 'r', `java.io.FileOutputStream#<init>(java.io.File,boolean)`, `FileOutputStream(File,boolean)`],
			[/* text */ 't', ` constructor and passing `],
			[/* inline code block */ 'i', `true`],
			[/* text */ 't', ` for
 the second parameter.  In this mode each invocation of a relative write
 operation first advances the position to the end of the file and then writes
 the requested data.  Whether the advancement of the position and the writing
 of the data are done in a single atomic operation is system-dependent and
 therefore unspecified.`]
		]]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Initializes a new instance of this class.`]
			],
			/* parameters */,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'read(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Reads a sequence of bytes from this channel into the given buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Bytes are read starting at this channel's current file position, and
 then the file position is updated with the number of bytes actually
 read.  Otherwise this method behaves exactly as specified in the `],
					[/* reference */ 'r', `java.nio.channels.ReadableByteChannel`, `ReadableByteChannel`],
					[/* text */ 't', ` interface. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'dst', [/* parameter description */
					[/* text */ 't', `The buffer into which bytes are to be transferred`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If this channel is closed`]
				]],
				[/* throw */ 'java.nio.channels.AsynchronousCloseException', [/* throw description */
					[/* text */ 't', `If another thread closes this channel
          while the read operation is in progress`]
				]],
				[/* throw */ 'java.nio.channels.ClosedByInterruptException', [/* throw description */
					[/* text */ 't', `If another thread interrupts the current thread
          while the read operation is in progress, thereby
          closing the channel and setting the current thread's
          interrupt status`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The number of bytes read, possibly zero, or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the
          channel has reached end-of-stream`]
			]
		]],
		[/* method */ 'read(java.nio.ByteBuffer,long)', [
			[/* method description */
				[/* text */ 't', `Reads a sequence of bytes from this channel into the given buffer,
 starting at the given file position.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method works in the same manner as the `],
					[/* reference */ 'r', `#read(java.nio.ByteBuffer)`, `read(ByteBuffer)`],
					[/* text */ 't', ` method, except that bytes are read starting at the
 given file position rather than at the channel's current position.  This
 method does not modify this channel's position.  If the given position
 is greater than the file's current size then no bytes are read.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'dst', [/* parameter description */
					[/* text */ 't', `The buffer into which bytes are to be transferred`]
				]],
				[/* parameter */ 'position', [/* parameter description */
					[/* text */ 't', `The file position at which the transfer is to begin;
         must be non-negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the position is negative or the buffer is read-only`]
				]],
				[/* throw */ 'java.nio.channels.NonReadableChannelException', [/* throw description */
					[/* text */ 't', `If this channel was not opened for reading`]
				]],
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If this channel is closed`]
				]],
				[/* throw */ 'java.nio.channels.AsynchronousCloseException', [/* throw description */
					[/* text */ 't', `If another thread closes this channel
          while the read operation is in progress`]
				]],
				[/* throw */ 'java.nio.channels.ClosedByInterruptException', [/* throw description */
					[/* text */ 't', `If another thread interrupts the current thread
          while the read operation is in progress, thereby
          closing the channel and setting the current thread's
          interrupt status`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The number of bytes read, possibly zero, or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the
          given position is greater than or equal to the file's current
          size`]
			]
		]],
		[/* method */ 'write(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Writes a sequence of bytes to this channel from the given buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Bytes are written starting at this channel's current file position
 unless the channel is in append mode, in which case the position is
 first advanced to the end of the file.  The file is grown, if necessary,
 to accommodate the written bytes, and then the file position is updated
 with the number of bytes actually written.  Otherwise this method
 behaves exactly as specified by the `],
					[/* reference */ 'r', `java.nio.channels.WritableByteChannel`, `WritableByteChannel`],
					[/* text */ 't', `
 interface. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The buffer from which bytes are to be retrieved`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If this channel is closed`]
				]],
				[/* throw */ 'java.nio.channels.AsynchronousCloseException', [/* throw description */
					[/* text */ 't', `If another thread closes this channel
          while the write operation is in progress`]
				]],
				[/* throw */ 'java.nio.channels.ClosedByInterruptException', [/* throw description */
					[/* text */ 't', `If another thread interrupts the current thread
          while the write operation is in progress, thereby
          closing the channel and setting the current thread's
          interrupt status`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The number of bytes written, possibly zero`]
			]
		]],
		[/* method */ 'write(java.nio.ByteBuffer,long)', [
			[/* method description */
				[/* text */ 't', `Writes a sequence of bytes to this channel from the given buffer,
 starting at the given file position.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method works in the same manner as the `],
					[/* reference */ 'r', `#write(java.nio.ByteBuffer)`, `write(ByteBuffer)`],
					[/* text */ 't', ` method, except that bytes are written starting at
 the given file position rather than at the channel's current position.
 This method does not modify this channel's position.  If the given
 position is greater than the file's current size then the file will be
 grown to accommodate the new bytes; the values of any bytes between the
 previous end-of-file and the newly-written bytes are unspecified.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The buffer from which bytes are to be transferred`]
				]],
				[/* parameter */ 'position', [/* parameter description */
					[/* text */ 't', `The file position at which the transfer is to begin;
         must be non-negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the position is negative`]
				]],
				[/* throw */ 'java.nio.channels.NonWritableChannelException', [/* throw description */
					[/* text */ 't', `If this channel was not opened for writing`]
				]],
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If this channel is closed`]
				]],
				[/* throw */ 'java.nio.channels.AsynchronousCloseException', [/* throw description */
					[/* text */ 't', `If another thread closes this channel
          while the write operation is in progress`]
				]],
				[/* throw */ 'java.nio.channels.ClosedByInterruptException', [/* throw description */
					[/* text */ 't', `If another thread interrupts the current thread
          while the write operation is in progress, thereby
          closing the channel and setting the current thread's
          interrupt status`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The number of bytes written, possibly zero`]
			]
		]],
		[/* method */ 'position(long)', [
			[/* method description */
				[/* text */ 't', `Sets this channel's file position.

 `],
				[/* block */ 'b', ` Setting the position to a value that is greater than the file's
 current size is legal but does not change the size of the file.  A later
 attempt to read bytes at such a position will immediately return an
 end-of-file indication.  A later attempt to write bytes at such a
 position will cause the file to be grown to accommodate the new bytes;
 the values of any bytes between the previous end-of-file and the
 newly-written bytes are unspecified.  `]
			],
			[/* parameters */
				[/* parameter */ 'newPosition', [/* parameter description */
					[/* text */ 't', `The new position, a non-negative integer counting
         the number of bytes from the beginning of the file`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If this channel is closed`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the new position is negative`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This file channel`]
			]
		]],
		[/* method */ 'truncate(long)', [
			[/* method description */
				[/* text */ 't', `Truncates this channel's file to the given size.

 `],
				[/* block */ 'b', ` If the given size is less than the file's current size then the file
 is truncated, discarding any bytes beyond the new end of the file.  If
 the given size is greater than or equal to the file's current size then
 the file is not modified.  In either case, if this channel's file
 position is greater than the given size then it is set to that size.
 `]
			],
			[/* parameters */
				[/* parameter */ 'size', [/* parameter description */
					[/* text */ 't', `The new size, a non-negative byte count`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.channels.NonWritableChannelException', [/* throw description */
					[/* text */ 't', `If this channel was not opened for writing`]
				]],
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If this channel is closed`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the new size is negative`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This file channel`]
			]
		]],
		[/* method */ 'lock(long,long,boolean)', [
			[/* method description */
				[/* text */ 't', `Acquires a lock on the given region of this channel's file.

 `],
				[/* block */ 'b', ` An invocation of this method will block until the region can be
 locked, this channel is closed, or the invoking thread is interrupted,
 whichever comes first.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this channel is closed by another thread during an invocation of
 this method then an `],
					[/* reference */ 'r', `java.nio.channels.AsynchronousCloseException`, `AsynchronousCloseException`],
					[/* text */ 't', ` will be thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If the invoking thread is interrupted while waiting to acquire the
 lock then its interrupt status will be set and a `],
					[/* reference */ 'r', `java.nio.channels.FileLockInterruptionException`, `FileLockInterruptionException`],
					[/* text */ 't', ` will be thrown.  If the invoker's
 interrupt status is set when this method is invoked then that exception
 will be thrown immediately; the thread's interrupt status will not be
 changed.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The region specified by the `],
					[/* inline code block */ 'i', `position`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `size`],
					[/* text */ 't', `
 parameters need not be contained within, or even overlap, the actual
 underlying file.  Lock regions are fixed in size; if a locked region
 initially contains the end of the file and the file grows beyond the
 region then the new portion of the file will not be covered by the lock.
 If a file is expected to grow in size and a lock on the entire file is
 required then a region starting at zero, and no smaller than the
 expected maximum size of the file, should be locked.  The zero-argument
 `],
					[/* reference */ 'r', `#lock()`, `lock()`],
					[/* text */ 't', ` method simply locks a region of size `],
					[/* reference */ 'r', `java.lang.Long#MAX_VALUE`, `Long.MAX_VALUE`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Some operating systems do not support shared locks, in which case a
 request for a shared lock is automatically converted into a request for
 an exclusive lock.  Whether the newly-acquired lock is shared or
 exclusive may be tested by invoking the resulting lock object's `],
					[/* reference */ 'r', `java.nio.channels.FileLock#isShared()`, `isShared`],
					[/* text */ 't', ` method.

 `]
				]],
				[/* block */ 'b', ` File locks are held on behalf of the entire Java virtual machine.
 They are not suitable for controlling access to a file by multiple
 threads within the same virtual machine.  `]
			],
			[/* parameters */
				[/* parameter */ 'position', [/* parameter description */
					[/* text */ 't', `The position at which the locked region is to start; must be
         non-negative`]
				]],
				[/* parameter */ 'size', [/* parameter description */
					[/* text */ 't', `The size of the locked region; must be non-negative, and the sum
         `],
					[/* inline code block */ 'i', `position`],
					[/* text */ 't', ` + `],
					[/* inline code block */ 'i', `size`],
					[/* text */ 't', ` must be non-negative`]
				]],
				[/* parameter */ 'shared', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` to request a shared lock, in which case this
         channel must be open for reading (and possibly writing);
         `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` to request an exclusive lock, in which case this
         channel must be open for writing (and possibly reading)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the preconditions on the parameters do not hold`]
				]],
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If this channel is closed`]
				]],
				[/* throw */ 'java.nio.channels.AsynchronousCloseException', [/* throw description */
					[/* text */ 't', `If another thread closes this channel while the invoking
          thread is blocked in this method`]
				]],
				[/* throw */ 'java.nio.channels.FileLockInterruptionException', [/* throw description */
					[/* text */ 't', `If the invoking thread is interrupted while blocked in this
          method`]
				]],
				[/* throw */ 'java.nio.channels.OverlappingFileLockException', [/* throw description */
					[/* text */ 't', `If a lock that overlaps the requested region is already held by
          this Java virtual machine, or if another thread is already
          blocked in this method and is attempting to lock an overlapping
          region`]
				]],
				[/* throw */ 'java.nio.channels.NonReadableChannelException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `shared`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` this channel was not
          opened for reading`]
				]],
				[/* throw */ 'java.nio.channels.NonWritableChannelException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `shared`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` but this channel was not
          opened for writing`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A lock object representing the newly-acquired lock`]
			]
		]],
		[/* method */ 'tryLock(long,long,boolean)', [
			[/* method description */
				[/* text */ 't', `Attempts to acquire a lock on the given region of this channel's file.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method does not block.  An invocation always returns
 immediately, either having acquired a lock on the requested region or
 having failed to do so.  If it fails to acquire a lock because an
 overlapping lock is held by another program then it returns
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.  If it fails to acquire a lock for any other reason then
 an appropriate exception is thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The region specified by the `],
					[/* inline code block */ 'i', `position`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `size`],
					[/* text */ 't', `
 parameters need not be contained within, or even overlap, the actual
 underlying file.  Lock regions are fixed in size; if a locked region
 initially contains the end of the file and the file grows beyond the
 region then the new portion of the file will not be covered by the lock.
 If a file is expected to grow in size and a lock on the entire file is
 required then a region starting at zero, and no smaller than the
 expected maximum size of the file, should be locked.  The zero-argument
 `],
					[/* reference */ 'r', `#tryLock()`, `tryLock()`],
					[/* text */ 't', ` method simply locks a region of size `],
					[/* reference */ 'r', `java.lang.Long#MAX_VALUE`, `Long.MAX_VALUE`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Some operating systems do not support shared locks, in which case a
 request for a shared lock is automatically converted into a request for
 an exclusive lock.  Whether the newly-acquired lock is shared or
 exclusive may be tested by invoking the resulting lock object's `],
					[/* reference */ 'r', `java.nio.channels.FileLock#isShared()`, `isShared`],
					[/* text */ 't', ` method.

 `]
				]],
				[/* block */ 'b', ` File locks are held on behalf of the entire Java virtual machine.
 They are not suitable for controlling access to a file by multiple
 threads within the same virtual machine.  `]
			],
			[/* parameters */
				[/* parameter */ 'position', [/* parameter description */
					[/* text */ 't', `The position at which the locked region is to start; must be
         non-negative`]
				]],
				[/* parameter */ 'size', [/* parameter description */
					[/* text */ 't', `The size of the locked region; must be non-negative, and the sum
         `],
					[/* inline code block */ 'i', `position`],
					[/* text */ 't', ` + `],
					[/* inline code block */ 'i', `size`],
					[/* text */ 't', ` must be non-negative`]
				]],
				[/* parameter */ 'shared', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` to request a shared lock,
         `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` to request an exclusive lock`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the preconditions on the parameters do not hold`]
				]],
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If this channel is closed`]
				]],
				[/* throw */ 'java.nio.channels.OverlappingFileLockException', [/* throw description */
					[/* text */ 't', `If a lock that overlaps the requested region is already held by
          this Java virtual machine, or if another thread is already
          blocked in this method and is attempting to lock an overlapping
          region of the same file`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A lock object representing the newly-acquired lock,
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the lock could not be acquired
          because another program holds an overlapping lock`]
			]
		]],
		[/* method */ 'map(java.nio.channels.FileChannel.MapMode,long,long)', [
			[/* method description */
				[/* text */ 't', `Maps a region of this channel's file directly into memory.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `mode`],
					[/* text */ 't', ` parameter specifies how the region of the file is
 mapped and may be one of the following modes:

 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` `],
							[/* text */ 't', `Read-only:`],
							[/* text */ 't', ` Any attempt to modify the resulting buffer
   will cause a `],
							[/* reference */ 'r', `java.nio.ReadOnlyBufferException`, `ReadOnlyBufferException`],
							[/* text */ 't', ` to be thrown.
   (`],
							[/* reference */ 'r', `java.nio.channels.FileChannel.MapMode#READ_ONLY`, `MapMode.READ_ONLY`],
							[/* text */ 't', `) `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` `],
							[/* text */ 't', `Read/write:`],
							[/* text */ 't', ` Changes made to the resulting buffer will
   eventually be propagated to the file; they may or may not be made
   visible to other programs that have mapped the same file.  (`],
							[/* reference */ 'r', `java.nio.channels.FileChannel.MapMode#READ_WRITE`, `MapMode.READ_WRITE`],
							[/* text */ 't', `) `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` `],
							[/* text */ 't', `Private:`],
							[/* text */ 't', ` Changes made to the resulting buffer will not
   be propagated to the file and will not be visible to other programs
   that have mapped the same file; instead, they will cause private
   copies of the modified portions of the buffer to be created.  (`],
							[/* reference */ 'r', `java.nio.channels.FileChannel.MapMode#PRIVATE`, `MapMode.PRIVATE`],
							[/* text */ 't', `) `]
						]]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', ` An implementation may support additional map modes.

 `],
				[/* block */ 'b', ` For a read-only mapping, this channel must have been opened for
 reading; for a read/write or private mapping, this channel must have
 been opened for both reading and writing.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `java.nio.MappedByteBuffer`, `mapped byte buffer`],
					[/* text */ 't', `
 returned by this method will have a position of zero and a limit and
 capacity of `],
					[/* inline code block */ 'i', `size`],
					[/* text */ 't', `; its mark will be undefined.  The buffer and
 the mapping that it represents will remain valid until the buffer itself
 is garbage-collected.

 `]
				]],
				[/* block */ 'b', ` A mapping, once established, is not dependent upon the file channel
 that was used to create it.  Closing the channel, in particular, has no
 effect upon the validity of the mapping.

 `],
				[/* block */ 'b', ` Many of the details of memory-mapped files are inherently dependent
 upon the underlying operating system and are therefore unspecified.  The
 behavior of this method when the requested region is not completely
 contained within this channel's file is unspecified.  Whether changes
 made to the content or size of the underlying file, by this program or
 another, are propagated to the buffer is unspecified.  The rate at which
 changes to the buffer are propagated to the file is unspecified.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` For most operating systems, mapping a file into memory is more
 expensive than reading or writing a few tens of kilobytes of data via
 the usual `],
					[/* reference */ 'r', `#read(java.nio.ByteBuffer)`, `read`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `#write(java.nio.ByteBuffer)`, `write`],
					[/* text */ 't', ` methods.  From the
 standpoint of performance it is generally only worth mapping relatively
 large files into memory.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mode', [/* parameter description */
					[/* text */ 't', `One of the constants `],
					[/* reference */ 'r', `java.nio.channels.FileChannel.MapMode#READ_ONLY`, `READ_ONLY`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `java.nio.channels.FileChannel.MapMode#READ_WRITE`, `READ_WRITE`],
					[/* text */ 't', `, or `],
					[/* reference */ 'r', `java.nio.channels.FileChannel.MapMode#PRIVATE`, `PRIVATE`],
					[/* text */ 't', ` defined in the `],
					[/* reference */ 'r', `java.nio.channels.FileChannel.MapMode`, `FileChannel.MapMode`],
					[/* text */ 't', ` class, according to
         whether the file is to be mapped read-only, read/write, or
         privately (copy-on-write), respectively, or an implementation
         specific map mode`]
				]],
				[/* parameter */ 'position', [/* parameter description */
					[/* text */ 't', `The position within the file at which the mapped region
         is to start; must be non-negative`]
				]],
				[/* parameter */ 'size', [/* parameter description */
					[/* text */ 't', `The size of the region to be mapped; must be non-negative and
         no greater than `],
					[/* reference */ 'r', `java.lang.Integer#MAX_VALUE`, `Integer.MAX_VALUE`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.channels.NonReadableChannelException', [/* throw description */
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `mode`],
					[/* text */ 't', ` is `],
					[/* reference */ 'r', `java.nio.channels.FileChannel.MapMode#READ_ONLY`, `READ_ONLY`],
					[/* text */ 't', ` or
         an implementation specific map mode requiring read access
         but this channel was not opened for reading`]
				]],
				[/* throw */ 'java.nio.channels.NonWritableChannelException', [/* throw description */
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `mode`],
					[/* text */ 't', ` is `],
					[/* reference */ 'r', `java.nio.channels.FileChannel.MapMode#READ_WRITE`, `READ_WRITE`],
					[/* text */ 't', `.
         `],
					[/* reference */ 'r', `java.nio.channels.FileChannel.MapMode#PRIVATE`, `PRIVATE`],
					[/* text */ 't', ` or an implementation specific
         map mode requiring write access but this channel was not
         opened for both reading and writing`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the preconditions on the parameters do not hold`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If an unsupported map mode is specified`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The mapped byte buffer`]
			]
		]],
		[/* method */ 'position()', [
			[/* method description */
				[/* text */ 't', `Returns this channel's file position.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If this channel is closed`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This channel's file position,
          a non-negative integer counting the number of bytes
          from the beginning of the file to the current position`]
			]
		]],
		[/* method */ 'read(java.nio.ByteBuffer[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reads a sequence of bytes from this channel into a subsequence of the
 given buffers.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Bytes are read starting at this channel's current file position, and
 then the file position is updated with the number of bytes actually
 read.  Otherwise this method behaves exactly as specified in the `],
					[/* reference */ 'r', `java.nio.channels.ScatteringByteChannel`, `ScatteringByteChannel`],
					[/* text */ 't', ` interface.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'dsts', [/* parameter description */
					[/* text */ 't', `The buffers into which bytes are to be transferred`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The offset within the buffer array of the first buffer into
         which bytes are to be transferred; must be non-negative and no
         larger than `],
					[/* inline code block */ 'i', `dsts.length`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The maximum number of buffers to be accessed; must be
         non-negative and no larger than
         `],
					[/* inline code block */ 'i', `dsts.length`],
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `offset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If this channel is closed`]
				]],
				[/* throw */ 'java.nio.channels.AsynchronousCloseException', [/* throw description */
					[/* text */ 't', `If another thread closes this channel
          while the read operation is in progress`]
				]],
				[/* throw */ 'java.nio.channels.ClosedByInterruptException', [/* throw description */
					[/* text */ 't', `If another thread interrupts the current thread
          while the read operation is in progress, thereby
          closing the channel and setting the current thread's
          interrupt status`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The number of bytes read, possibly zero,
         or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the channel has reached end-of-stream`]
			]
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the current size of this channel's file.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If this channel is closed`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The current size of this channel's file,
          measured in bytes`]
			]
		]],
		[/* method */ 'transferFrom(java.nio.channels.ReadableByteChannel,long,long)', [
			[/* method description */
				[/* text */ 't', `Transfers bytes into this channel's file from the given readable byte
 channel.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An attempt is made to read up to `],
					[/* inline code block */ 'i', `count`],
					[/* text */ 't', ` bytes from the
 source channel and write them to this channel's file starting at the
 given `],
					[/* inline code block */ 'i', `position`],
					[/* text */ 't', `.  An invocation of this method may or may not
 transfer all of the requested bytes; whether or not it does so depends
 upon the natures and states of the channels.  Fewer than the requested
 number of bytes will be transferred if the source channel has fewer than
 `],
					[/* inline code block */ 'i', `count`],
					[/* text */ 't', ` bytes remaining, or if the source channel is non-blocking
 and has fewer than `],
					[/* inline code block */ 'i', `count`],
					[/* text */ 't', ` bytes immediately available in its
 input buffer. No bytes are transferred, and zero is returned, if the
 source has reached end-of-stream.

 `]
				]],
				[/* block */ 'b', ` This method does not modify this channel's position.  If the given
 position is greater than the file's current size then no bytes are
 transferred.  If the source channel has a position then bytes are read
 starting at that position and then the position is incremented by the
 number of bytes read.

 `],
				[/* block */ 'b', ` This method is potentially much more efficient than a simple loop
 that reads from the source channel and writes to this channel.  Many
 operating systems can transfer bytes directly from the source channel
 into the filesystem cache without actually copying them.  `]
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The source channel`]
				]],
				[/* parameter */ 'position', [/* parameter description */
					[/* text */ 't', `The position within the file at which the transfer is to begin;
         must be non-negative`]
				]],
				[/* parameter */ 'count', [/* parameter description */
					[/* text */ 't', `The maximum number of bytes to be transferred; must be
         non-negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the preconditions on the parameters do not hold`]
				]],
				[/* throw */ 'java.nio.channels.NonReadableChannelException', [/* throw description */
					[/* text */ 't', `If the source channel was not opened for reading`]
				]],
				[/* throw */ 'java.nio.channels.NonWritableChannelException', [/* throw description */
					[/* text */ 't', `If this channel was not opened for writing`]
				]],
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If either this channel or the source channel is closed`]
				]],
				[/* throw */ 'java.nio.channels.AsynchronousCloseException', [/* throw description */
					[/* text */ 't', `If another thread closes either channel
          while the transfer is in progress`]
				]],
				[/* throw */ 'java.nio.channels.ClosedByInterruptException', [/* throw description */
					[/* text */ 't', `If another thread interrupts the current thread while the
          transfer is in progress, thereby closing both channels and
          setting the current thread's interrupt status`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The number of bytes, possibly zero,
          that were actually transferred`]
			]
		]],
		[/* method */ 'transferTo(long,long,java.nio.channels.WritableByteChannel)', [
			[/* method description */
				[/* text */ 't', `Transfers bytes from this channel's file to the given writable byte
 channel.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An attempt is made to read up to `],
					[/* inline code block */ 'i', `count`],
					[/* text */ 't', ` bytes starting at
 the given `],
					[/* inline code block */ 'i', `position`],
					[/* text */ 't', ` in this channel's file and write them to the
 target channel.  An invocation of this method may or may not transfer
 all of the requested bytes; whether or not it does so depends upon the
 natures and states of the channels.  Fewer than the requested number of
 bytes are transferred if this channel's file contains fewer than
 `],
					[/* inline code block */ 'i', `count`],
					[/* text */ 't', ` bytes starting at the given `],
					[/* inline code block */ 'i', `position`],
					[/* text */ 't', `, or if the
 target channel is non-blocking and it has fewer than `],
					[/* inline code block */ 'i', `count`],
					[/* text */ 't', `
 bytes free in its output buffer.

 `]
				]],
				[/* block */ 'b', ` This method does not modify this channel's position.  If the given
 position is greater than the file's current size then no bytes are
 transferred.  If the target channel has a position then bytes are
 written starting at that position and then the position is incremented
 by the number of bytes written.

 `],
				[/* block */ 'b', ` This method is potentially much more efficient than a simple loop
 that reads from this channel and writes to the target channel.  Many
 operating systems can transfer bytes directly from the filesystem cache
 to the target channel without actually copying them.  `]
			],
			[/* parameters */
				[/* parameter */ 'position', [/* parameter description */
					[/* text */ 't', `The position within the file at which the transfer is to begin;
         must be non-negative`]
				]],
				[/* parameter */ 'count', [/* parameter description */
					[/* text */ 't', `The maximum number of bytes to be transferred; must be
         non-negative`]
				]],
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `The target channel`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the preconditions on the parameters do not hold`]
				]],
				[/* throw */ 'java.nio.channels.NonReadableChannelException', [/* throw description */
					[/* text */ 't', `If this channel was not opened for reading`]
				]],
				[/* throw */ 'java.nio.channels.NonWritableChannelException', [/* throw description */
					[/* text */ 't', `If the target channel was not opened for writing`]
				]],
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If either this channel or the target channel is closed`]
				]],
				[/* throw */ 'java.nio.channels.AsynchronousCloseException', [/* throw description */
					[/* text */ 't', `If another thread closes either channel
          while the transfer is in progress`]
				]],
				[/* throw */ 'java.nio.channels.ClosedByInterruptException', [/* throw description */
					[/* text */ 't', `If another thread interrupts the current thread while the
          transfer is in progress, thereby closing both channels and
          setting the current thread's interrupt status`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The number of bytes, possibly zero,
          that were actually transferred`]
			]
		]],
		[/* method */ 'write(java.nio.ByteBuffer[],int,int)', [
			[/* method description */
				[/* text */ 't', `Writes a sequence of bytes to this channel from a subsequence of the
 given buffers.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Bytes are written starting at this channel's current file position
 unless the channel is in append mode, in which case the position is
 first advanced to the end of the file.  The file is grown, if necessary,
 to accommodate the written bytes, and then the file position is updated
 with the number of bytes actually written.  Otherwise this method
 behaves exactly as specified in the `],
					[/* reference */ 'r', `java.nio.channels.GatheringByteChannel`, `GatheringByteChannel`],
					[/* text */ 't', `
 interface.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'srcs', [/* parameter description */
					[/* text */ 't', `The buffers from which bytes are to be retrieved`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The offset within the buffer array of the first buffer from
         which bytes are to be retrieved; must be non-negative and no
         larger than `],
					[/* inline code block */ 'i', `srcs.length`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The maximum number of buffers to be accessed; must be
         non-negative and no larger than
         `],
					[/* inline code block */ 'i', `srcs.length`],
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `offset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If this channel is closed`]
				]],
				[/* throw */ 'java.nio.channels.AsynchronousCloseException', [/* throw description */
					[/* text */ 't', `If another thread closes this channel
          while the write operation is in progress`]
				]],
				[/* throw */ 'java.nio.channels.ClosedByInterruptException', [/* throw description */
					[/* text */ 't', `If another thread interrupts the current thread
          while the write operation is in progress, thereby
          closing the channel and setting the current thread's
          interrupt status`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The number of bytes written, possibly zero`]
			]
		]],
		[/* method */ 'force(boolean)', [
			[/* method description */
				[/* text */ 't', `Forces any updates to this channel's file to be written to the storage
 device that contains it.

 `],
				[/* block */ 'b', ` If this channel's file resides on a local storage device then when
 this method returns it is guaranteed that all changes made to the file
 since this channel was created, or since this method was last invoked,
 will have been written to that device.  This is useful for ensuring that
 critical information is not lost in the event of a system crash.

 `],
				[/* block */ 'b', ` If the file does not reside on a local device then no such guarantee
 is made.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `metaData`],
					[/* text */ 't', ` parameter can be used to limit the number of
 I/O operations that this method is required to perform.  Passing
 `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` for this parameter indicates that only updates to the
 file's content need be written to storage; passing `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `
 indicates that updates to both the file's content and metadata must be
 written, which generally requires at least one more I/O operation.
 Whether this parameter actually has any effect is dependent upon the
 underlying operating system and is therefore unspecified.

 `]
				]],
				[/* block */ 'b', ` Invoking this method may cause an I/O operation to occur even if the
 channel was only opened for reading.  Some operating systems, for
 example, maintain a last-access time as part of a file's metadata, and
 this time is updated whenever the file is read.  Whether or not this is
 actually done is system-dependent and is therefore unspecified.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method is only guaranteed to force changes that were made to
 this channel's file via the methods defined in this class.  It may or
 may not force changes that were made by modifying the content of a
 `],
					[/* reference */ 'r', `java.nio.MappedByteBuffer`, `mapped byte buffer`],
					[/* text */ 't', ` obtained by
 invoking the `],
					[/* reference */ 'r', `#map(java.nio.channels.FileChannel.MapMode,long,long)`, `map`],
					[/* text */ 't', ` method.  Invoking the `],
					[/* reference */ 'r', `java.nio.MappedByteBuffer#force()`, `force`],
					[/* text */ 't', ` method of the mapped byte buffer will
 force changes made to the buffer's content to be written.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'metaData', [/* parameter description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` then this method is required to force changes
          to both the file's content and metadata to be written to
          storage; otherwise, it need only force content changes to be
          written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If this channel is closed`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'lock()', [
			[/* method description */
				[/* text */ 't', `Acquires an exclusive lock on this channel's file.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form `],
					[/* inline code block */ 'i', `fc.lock()`],
					[/* text */ 't', ` behaves
 in exactly the same way as the invocation

 `]
				]],
				[/* code block */ 'c', [
					[/* text */ 't', `     fc.`],
					[/* text */ 't', `lock`],
					[/* text */ 't', `(0L, Long.MAX_VALUE, false) `]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If this channel is closed`]
				]],
				[/* throw */ 'java.nio.channels.AsynchronousCloseException', [/* throw description */
					[/* text */ 't', `If another thread closes this channel while the invoking
          thread is blocked in this method`]
				]],
				[/* throw */ 'java.nio.channels.FileLockInterruptionException', [/* throw description */
					[/* text */ 't', `If the invoking thread is interrupted while blocked in this
          method`]
				]],
				[/* throw */ 'java.nio.channels.OverlappingFileLockException', [/* throw description */
					[/* text */ 't', `If a lock that overlaps the requested region is already held by
          this Java virtual machine, or if another thread is already
          blocked in this method and is attempting to lock an overlapping
          region of the same file`]
				]],
				[/* throw */ 'java.nio.channels.NonWritableChannelException', [/* throw description */
					[/* text */ 't', `If this channel was not opened for writing`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A lock object representing the newly-acquired lock`]
			]
		]],
		[/* method */ 'tryLock()', [
			[/* method description */
				[/* text */ 't', `Attempts to acquire an exclusive lock on this channel's file.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form `],
					[/* inline code block */ 'i', `fc.tryLock()`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation

 `]
				]],
				[/* code block */ 'c', [
					[/* text */ 't', `     fc.`],
					[/* text */ 't', `tryLock`],
					[/* text */ 't', `(0L, Long.MAX_VALUE, false) `]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If this channel is closed`]
				]],
				[/* throw */ 'java.nio.channels.OverlappingFileLockException', [/* throw description */
					[/* text */ 't', `If a lock that overlaps the requested region is already held by
          this Java virtual machine, or if another thread is already
          blocked in this method and is attempting to lock an overlapping
          region`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A lock object representing the newly-acquired lock,
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the lock could not be acquired
          because another program holds an overlapping lock`]
			]
		]],
		[/* method */ 'read(java.nio.ByteBuffer[])', [
			[/* method description */
				[/* text */ 't', `Reads a sequence of bytes from this channel into the given buffers.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Bytes are read starting at this channel's current file position, and
 then the file position is updated with the number of bytes actually
 read.  Otherwise this method behaves exactly as specified in the `],
					[/* reference */ 'r', `java.nio.channels.ScatteringByteChannel`, `ScatteringByteChannel`],
					[/* text */ 't', ` interface.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'dsts', [/* parameter description */
					[/* text */ 't', `The buffers into which bytes are to be transferred`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If this channel is closed`]
				]],
				[/* throw */ 'java.nio.channels.AsynchronousCloseException', [/* throw description */
					[/* text */ 't', `If another thread closes this channel
          while the read operation is in progress`]
				]],
				[/* throw */ 'java.nio.channels.ClosedByInterruptException', [/* throw description */
					[/* text */ 't', `If another thread interrupts the current thread
          while the read operation is in progress, thereby
          closing the channel and setting the current thread's
          interrupt status`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The number of bytes read, possibly zero,
         or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the channel has reached end-of-stream`]
			]
		]],
		[/* method */ 'write(java.nio.ByteBuffer[])', [
			[/* method description */
				[/* text */ 't', `Writes a sequence of bytes to this channel from the given buffers.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Bytes are written starting at this channel's current file position
 unless the channel is in append mode, in which case the position is
 first advanced to the end of the file.  The file is grown, if necessary,
 to accommodate the written bytes, and then the file position is updated
 with the number of bytes actually written.  Otherwise this method
 behaves exactly as specified in the `],
					[/* reference */ 'r', `java.nio.channels.GatheringByteChannel`, `GatheringByteChannel`],
					[/* text */ 't', `
 interface.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'srcs', [/* parameter description */
					[/* text */ 't', `The buffers from which bytes are to be retrieved`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If this channel is closed`]
				]],
				[/* throw */ 'java.nio.channels.AsynchronousCloseException', [/* throw description */
					[/* text */ 't', `If another thread closes this channel
          while the write operation is in progress`]
				]],
				[/* throw */ 'java.nio.channels.ClosedByInterruptException', [/* throw description */
					[/* text */ 't', `If another thread interrupts the current thread
          while the write operation is in progress, thereby
          closing the channel and setting the current thread's
          interrupt status`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The number of bytes written, possibly zero`]
			]
		]],
		[/* method */ 'open(java.nio.file.Path,java.nio.file.OpenOption...)', [
			[/* method description */
				[/* text */ 't', `Opens or creates a file, returning a file channel to access the file.

 `],
				[/* block */ 'b', ` An invocation of this method behaves in exactly the same way as the
 invocation
 `],
				[/* code block */ 'c', [
					[/* text */ 't', `     fc.`],
					[/* text */ 't', `open`],
					[/* text */ 't', `(file, opts, new FileAttribute<?>[0]);
 `]
				]],
				[/* text */ 't', `
 where `],
				[/* inline code block */ 'i', `opts`],
				[/* text */ 't', ` is a set of the options specified in the `],
				[/* inline code block */ 'i', `options`],
				[/* text */ 't', ` array.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'path', [/* parameter description */
					[/* text */ 't', `The path of the file to open or create`]
				]],
				[/* parameter */ 'options', [/* parameter description */
					[/* text */ 't', `Options specifying how the file is opened`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the set contains an invalid combination of options`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `path`],
					[/* text */ 't', ` is associated with a provider that does not
          support creating file channels, or an unsupported open option is
          specified`]
				]],
				[/* throw */ 'java.nio.file.FileAlreadyExistsException', [/* throw description */
					[/* text */ 't', `If a file of that name already exists and the `],
					[/* reference */ 'r', `java.nio.file.StandardOpenOption#CREATE_NEW`, `CREATE_NEW`],
					[/* text */ 't', ` option is specified
          and the file is being opened for writing
          `],
					[/* text */ 't', `(`],
					[/* text */ 't', `optional specific exception`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is installed and it denies an
          unspecified permission required by the implementation.
          In the case of the default provider, the `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `SecurityManager.checkRead(String)`],
					[/* text */ 't', ` method is invoked to check
          read access if the file is opened for reading. The `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `SecurityManager.checkWrite(String)`],
					[/* text */ 't', ` method is invoked to check
          write access if the file is opened for writing`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A new file channel`]
			]
		]],
		[/* method */ 'open(java.nio.file.Path,java.util.Set,java.nio.file.attribute.FileAttribute...)', [
			[/* method description */
				[/* text */ 't', `Opens or creates a file, returning a file channel to access the file.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `options`],
					[/* text */ 't', ` parameter determines how the file is opened.
 The `],
					[/* reference */ 'r', `java.nio.file.StandardOpenOption#READ`, `READ`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `java.nio.file.StandardOpenOption#WRITE`, `WRITE`],
					[/* text */ 't', ` options determine if the file should be opened for reading and/or
 writing. If neither option (or the `],
					[/* reference */ 'r', `java.nio.file.StandardOpenOption#APPEND`, `APPEND`],
					[/* text */ 't', `
 option) is contained in the array then the file is opened for reading.
 By default reading or writing commences at the beginning of the file.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` In the addition to `],
					[/* inline code block */ 'i', `READ`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `WRITE`],
					[/* text */ 't', `, the following
 options may be present:

 `]
				]],
				[/* table */ 'tbl',
					[/* caption */ 'tc'],
					[/* table header */ 'th', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Option`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Description`]
							]]
						]]
					]],
					[/* table body */ 'tb', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', ` `],
								[/* reference */ 'r', `java.nio.file.StandardOpenOption#APPEND`, `APPEND`],
								[/* text */ 't', ` `]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', ` If this option is present then the file is opened for writing and
     each invocation of the channel's `],
								[/* inline code block */ 'i', `write`],
								[/* text */ 't', ` method first advances
     the position to the end of the file and then writes the requested
     data. Whether the advancement of the position and the writing of the
     data are done in a single atomic operation is system-dependent and
     therefore unspecified. This option may not be used in conjunction
     with the `],
								[/* inline code block */ 'i', `READ`],
								[/* text */ 't', ` or `],
								[/* inline code block */ 'i', `TRUNCATE_EXISTING`],
								[/* text */ 't', ` options. `]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', ` `],
								[/* reference */ 'r', `java.nio.file.StandardOpenOption#TRUNCATE_EXISTING`, `TRUNCATE_EXISTING`],
								[/* text */ 't', ` `]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', ` If this option is present then the existing file is truncated to
   a size of 0 bytes. This option is ignored when the file is opened only
   for reading. `]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', ` `],
								[/* reference */ 'r', `java.nio.file.StandardOpenOption#CREATE_NEW`, `CREATE_NEW`],
								[/* text */ 't', ` `]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', ` If this option is present then a new file is created, failing if
   the file already exists. When creating a file the check for the
   existence of the file and the creation of the file if it does not exist
   is atomic with respect to other file system operations. This option is
   ignored when the file is opened only for reading. `]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', ` `],
								[/* reference */ 'r', `java.nio.file.StandardOpenOption#CREATE`, `CREATE`],
								[/* text */ 't', ` `]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', ` If this option is present then an existing file is opened if it
   exists, otherwise a new file is created. When creating a file the check
   for the existence of the file and the creation of the file if it does
   not exist is atomic with respect to other file system operations. This
   option is ignored if the `],
								[/* inline code block */ 'i', `CREATE_NEW`],
								[/* text */ 't', ` option is also present or
   the file is opened only for reading. `]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', ` `],
								[/* reference */ 'r', `java.nio.file.StandardOpenOption#DELETE_ON_CLOSE`, `DELETE_ON_CLOSE`],
								[/* text */ 't', ` `]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', ` When this option is present then the implementation makes a
   `],
								[/* text */ 't', `best effort`],
								[/* text */ 't', ` attempt to delete the file when closed by
   the `],
								[/* reference */ 'r', `java.nio.channels.spi.AbstractInterruptibleChannel#close()`, `close`],
								[/* text */ 't', ` method. If the `],
								[/* inline code block */ 'i', `close`],
								[/* text */ 't', ` method is not
   invoked then a `],
								[/* text */ 't', `best effort`],
								[/* text */ 't', ` attempt is made to delete the file
   when the Java virtual machine terminates. `]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* reference */ 'r', `java.nio.file.StandardOpenOption#SPARSE`, `SPARSE`],
								[/* text */ 't', ` `]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', ` When creating a new file this option is a `],
								[/* text */ 't', `hint`],
								[/* text */ 't', ` that the
   new file will be sparse. This option is ignored when not creating
   a new file. `]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', ` `],
								[/* reference */ 'r', `java.nio.file.StandardOpenOption#SYNC`, `SYNC`],
								[/* text */ 't', ` `]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', ` Requires that every update to the file's content or metadata be
   written synchronously to the underlying storage device. (see `],
								[/* text */ 't', `Synchronized I/O file integrity`],
								[/* text */ 't', `). `]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', ` `],
								[/* reference */ 'r', `java.nio.file.StandardOpenOption#DSYNC`, `DSYNC`],
								[/* text */ 't', ` `]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', ` Requires that every update to the file's content be written
   synchronously to the underlying storage device. (see `],
								[/* text */ 't', `Synchronized I/O file integrity`],
								[/* text */ 't', `). `]
							]]
						]]
					]],
				],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', ` An implementation may also support additional options.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `attrs`],
					[/* text */ 't', ` parameter is an optional array of file `],
					[/* reference */ 'r', `java.nio.file.attribute.FileAttribute`, `file-attributes`],
					[/* text */ 't', ` to set atomically when creating the file.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The new channel is created by invoking the `],
					[/* reference */ 'r', `java.nio.file.spi.FileSystemProvider#newFileChannel(java.nio.file.Path,java.util.Set,java.nio.file.attribute.FileAttribute...)`, `newFileChannel`],
					[/* text */ 't', ` method on the
 provider that created the `],
					[/* inline code block */ 'i', `Path`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'path', [/* parameter description */
					[/* text */ 't', `The path of the file to open or create`]
				]],
				[/* parameter */ 'options', [/* parameter description */
					[/* text */ 't', `Options specifying how the file is opened`]
				]],
				[/* parameter */ 'attrs', [/* parameter description */
					[/* text */ 't', `An optional list of file attributes to set atomically when
          creating the file`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the set contains an invalid combination of options`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `path`],
					[/* text */ 't', ` is associated with a provider that does not
          support creating file channels, or an unsupported open option is
          specified, or the array contains an attribute that cannot be set
          atomically when creating the file`]
				]],
				[/* throw */ 'java.nio.file.FileAlreadyExistsException', [/* throw description */
					[/* text */ 't', `If a file of that name already exists and the `],
					[/* reference */ 'r', `java.nio.file.StandardOpenOption#CREATE_NEW`, `CREATE_NEW`],
					[/* text */ 't', ` option is specified
          and the file is being opened for writing
          `],
					[/* text */ 't', `(`],
					[/* text */ 't', `optional specific exception`],
					[/* text */ 't', `)`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is installed and it denies an
          unspecified permission required by the implementation.
          In the case of the default provider, the `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkRead(java.lang.String)`, `SecurityManager.checkRead(String)`],
					[/* text */ 't', ` method is invoked to check
          read access if the file is opened for reading. The `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkWrite(java.lang.String)`, `SecurityManager.checkWrite(String)`],
					[/* text */ 't', ` method is invoked to check
          write access if the file is opened for writing`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A new file channel`]
			]
		]]
	],
	/* enum values */ UDF
]);
