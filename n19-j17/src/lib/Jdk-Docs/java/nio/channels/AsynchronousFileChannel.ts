import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.channels.AsynchronousFileChannel', [
	[/* class description */
		[/* text */ 't', `An asynchronous channel for reading, writing, and manipulating a file.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` An asynchronous file channel is created when a file is opened by invoking
 one of the `],
			[/* reference */ 'r', `#open(java.nio.file.Path,java.util.Set,java.util.concurrent.ExecutorService,java.nio.file.attribute.FileAttribute...)`, `open`],
			[/* text */ 't', ` methods defined by this class. The file contains
 a variable-length sequence of bytes that can be read and written and whose
 current size can be `],
			[/* reference */ 'r', `#size()`, `queried`],
			[/* text */ 't', `. The size of the file increases
 when bytes are written beyond its  current size; the size of the file decreases
 when it is `],
			[/* reference */ 'r', `#truncate(long)`, `truncated`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` An asynchronous file channel does not have a `],
			[/* text */ 't', `current position`],
			[/* text */ 't', `
 within the file. Instead, the file position is specified to each read and
 write method that initiates asynchronous operations. A `],
			[/* reference */ 'r', `java.nio.channels.CompletionHandler`, `CompletionHandler`],
			[/* text */ 't', `
 is specified as a parameter and is invoked to consume the result of the I/O
 operation. This class also defines read and write methods that initiate
 asynchronous operations, returning a `],
			[/* reference */ 'r', `java.util.concurrent.Future`, `Future`],
			[/* text */ 't', ` to represent the pending
 result of the operation. The `],
			[/* inline code block */ 'i', `Future`],
			[/* text */ 't', ` may be used to check if the
 operation has completed, wait for its completion, and retrieve the result.

 `]
		]],
		[/* block */ 'b', ` In addition to read and write operations, this class defines the
 following operations: `],
		[/* list */ 'l', [
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
					[/* text */ 't', ` A region of a file may be `],
					[/* reference */ 'r', `#lock(long,long,boolean,A,java.nio.channels.CompletionHandler)`, `locked`],
					[/* text */ 't', ` against
   access by other programs.  `]
				]]
			]]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` An `],
			[/* inline code block */ 'i', `AsynchronousFileChannel`],
			[/* text */ 't', ` is associated with a thread pool to
 which tasks are submitted to handle I/O events and dispatch to completion
 handlers that consume the results of I/O operations on the channel. The
 completion handler for an I/O operation initiated on a channel is guaranteed
 to be invoked by one of the threads in the thread pool (This ensures that the
 completion handler is run by a thread with the expected `],
			[/* text */ 't', `identity`],
			[/* text */ 't', `).
 Where an I/O operation completes immediately, and the initiating thread is
 itself a thread in the thread pool, then the completion handler may be invoked
 directly by the initiating thread. When an `],
			[/* inline code block */ 'i', `AsynchronousFileChannel`],
			[/* text */ 't', ` is
 created without specifying a thread pool then the channel is associated with
 a system-dependent default thread pool that may be shared with other
 channels. The default thread pool is configured by the system properties
 defined by the `],
			[/* reference */ 'r', `java.nio.channels.AsynchronousChannelGroup`, `AsynchronousChannelGroup`],
			[/* text */ 't', ` class.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Channels of this type are safe for use by multiple concurrent threads. The
 `],
			[/* reference */ 'r', `java.nio.channels.Channel#close()`, `close`],
			[/* text */ 't', ` method may be invoked at any time, as specified
 by the `],
			[/* reference */ 'r', `java.nio.channels.Channel`, `Channel`],
			[/* text */ 't', ` interface. This causes all outstanding asynchronous
 operations on the channel to complete with the exception `],
			[/* reference */ 'r', `java.nio.channels.AsynchronousCloseException`, `AsynchronousCloseException`],
			[/* text */ 't', `. Multiple read and write operations may be
 outstanding at the same time. When multiple read and write operations are
 outstanding then the ordering of the I/O operations, and the order that the
 completion handlers are invoked, is not specified; they are not, in particular,
 guaranteed to execute in the order that the operations were initiated. The
 `],
			[/* reference */ 'r', `java.nio.ByteBuffer`, `ByteBuffers`],
			[/* text */ 't', ` used when reading or writing are not
 safe for use by multiple concurrent I/O operations. Furthermore, after an I/O
 operation is initiated then care should be taken to ensure that the buffer is
 not accessed until after the operation has completed.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` As with `],
			[/* reference */ 'r', `java.nio.channels.FileChannel`, `FileChannel`],
			[/* text */ 't', `, the view of a file provided by an instance of
 this class is guaranteed to be consistent with other views of the same file
 provided by other instances in the same program.  The view provided by an
 instance of this class may or may not, however, be consistent with the views
 seen by other concurrently-running programs due to caching performed by the
 underlying operating system and delays induced by network-filesystem protocols.
 This is true regardless of the language in which these other programs are
 written, and whether they are running on the same machine or on some other
 machine.  The exact nature of any such inconsistencies are system-dependent
 and are therefore unspecified.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Initializes a new instance of this class.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'lock(long,long,boolean,java.lang.Object,java.nio.channels.CompletionHandler)', [
			[/* method description */
				[/* text */ 't', `Acquires a lock on the given region of this channel's file.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method initiates an operation to acquire a lock on the given
 region of this channel's file. The `],
					[/* inline code block */ 'i', `handler`],
					[/* text */ 't', ` parameter is a
 completion handler that is invoked when the lock is acquired (or the
 operation fails). The result passed to the completion handler is the
 resulting `],
					[/* inline code block */ 'i', `FileLock`],
					[/* text */ 't', `.

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
 expected maximum size of the file, should be locked.  The two-argument
 `],
					[/* reference */ 'r', `#lock(A,java.nio.channels.CompletionHandler)`, `lock(Object,CompletionHandler)`],
					[/* text */ 't', ` method simply locks a region
 of size `],
					[/* reference */ 'r', `java.lang.Long#MAX_VALUE`, `Long.MAX_VALUE`],
					[/* text */ 't', `. If a lock that overlaps the requested
 region is already held by this Java virtual machine, or this method has
 been invoked to lock an overlapping region and that operation has not
 completed, then this method throws `],
					[/* reference */ 'r', `java.nio.channels.OverlappingFileLockException`, `OverlappingFileLockException`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` Some operating systems do not support a mechanism to acquire a file
 lock in an asynchronous manner. Consequently an implementation may
 acquire the file lock in a background thread or from a task executed by
 a thread in the associated thread pool. If there are many lock operations
 outstanding then it may consume threads in the Java virtual machine for
 indefinite periods.

 `],
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
 threads within the same virtual machine.`]
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
				]],
				[/* parameter */ 'attachment', [/* parameter description */
					[/* text */ 't', `The object to attach to the I/O operation; can be `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* parameter */ 'handler', [/* parameter description */
					[/* text */ 't', `The handler for consuming the result`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.channels.OverlappingFileLockException', [/* throw description */
					[/* text */ 't', `If a lock that overlaps the requested region is already held by
          this Java virtual machine, or there is already a pending attempt
          to lock an overlapping region`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the preconditions on the parameters do not hold`]
				]],
				[/* throw */ 'java.nio.channels.NonReadableChannelException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `shared`],
					[/* text */ 't', ` is true but this channel was not opened for reading`]
				]],
				[/* throw */ 'java.nio.channels.NonWritableChannelException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `shared`],
					[/* text */ 't', ` is false but this channel was not opened for writing`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'read(java.nio.ByteBuffer,long,java.lang.Object,java.nio.channels.CompletionHandler)', [
			[/* method description */
				[/* text */ 't', `Reads a sequence of bytes from this channel into the given buffer,
 starting at the given file position.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method initiates the reading of a sequence of bytes from this
 channel into the given buffer, starting at the given file position. The
 result of the read is the number of bytes read or `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', ` if the given
 position is greater than or equal to the file's size at the time that the
 read is attempted.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method works in the same manner as the `],
					[/* reference */ 'r', `java.nio.channels.AsynchronousByteChannel#read(java.nio.ByteBuffer,A,java.nio.channels.CompletionHandler)`, `AsynchronousByteChannel.read(ByteBuffer,Object,CompletionHandler)`],
					[/* text */ 't', `
 method, except that bytes are read starting at the given file position.
 If the given file position is greater than the file's size at the time
 that the read is attempted then no bytes are read.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'dst', [/* parameter description */
					[/* text */ 't', `The buffer into which bytes are to be transferred`]
				]],
				[/* parameter */ 'position', [/* parameter description */
					[/* text */ 't', `The file position at which the transfer is to begin;
          must be non-negative`]
				]],
				[/* parameter */ 'attachment', [/* parameter description */
					[/* text */ 't', `The object to attach to the I/O operation; can be `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* parameter */ 'handler', [/* parameter description */
					[/* text */ 't', `The handler for consuming the result`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the position is negative or the buffer is read-only`]
				]],
				[/* throw */ 'java.nio.channels.NonReadableChannelException', [/* throw description */
					[/* text */ 't', `If this channel was not opened for reading`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(java.nio.ByteBuffer,long,java.lang.Object,java.nio.channels.CompletionHandler)', [
			[/* method description */
				[/* text */ 't', `Writes a sequence of bytes to this channel from the given buffer, starting
 at the given file position.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method works in the same manner as the `],
					[/* reference */ 'r', `java.nio.channels.AsynchronousByteChannel#write(java.nio.ByteBuffer,A,java.nio.channels.CompletionHandler)`, `AsynchronousByteChannel.write(ByteBuffer,Object,CompletionHandler)`],
					[/* text */ 't', `
 method, except that bytes are written starting at the given file position.
 If the given position is greater than the file's size, at the time that
 the write is attempted, then the file will be grown to accommodate the new
 bytes; the values of any bytes between the previous end-of-file and the
 newly-written bytes are unspecified.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The buffer from which bytes are to be transferred`]
				]],
				[/* parameter */ 'position', [/* parameter description */
					[/* text */ 't', `The file position at which the transfer is to begin;
          must be non-negative`]
				]],
				[/* parameter */ 'attachment', [/* parameter description */
					[/* text */ 't', `The object to attach to the I/O operation; can be `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* parameter */ 'handler', [/* parameter description */
					[/* text */ 't', `The handler for consuming the result`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the position is negative`]
				]],
				[/* throw */ 'java.nio.channels.NonWritableChannelException', [/* throw description */
					[/* text */ 't', `If this channel was not opened for writing`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'truncate(long)', [
			[/* method description */
				[/* text */ 't', `Truncates this channel's file to the given size.

 `],
				[/* block */ 'b', ` If the given size is less than the file's current size then the file
 is truncated, discarding any bytes beyond the new end of the file.  If
 the given size is greater than or equal to the file's current size then
 the file is not modified. `]
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
		[/* method */ 'tryLock(long,long,boolean)', [
			[/* method description */
				[/* text */ 't', `Attempts to acquire a lock on the given region of this channel's file.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method does not block. An invocation always returns immediately,
 either having acquired a lock on the requested region or having failed to
 do so.  If it fails to acquire a lock because an overlapping lock is held
 by another program then it returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.  If it fails to acquire
 a lock for any other reason then an appropriate exception is thrown.`]
				]]
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
				[/* throw */ 'java.nio.channels.NonReadableChannelException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `shared`],
					[/* text */ 't', ` is true but this channel was not opened for reading`]
				]],
				[/* throw */ 'java.nio.channels.NonWritableChannelException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `shared`],
					[/* text */ 't', ` is false but this channel was not opened for writing`]
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
		[/* method */ 'read(java.nio.ByteBuffer,long)', [
			[/* method description */
				[/* text */ 't', `Reads a sequence of bytes from this channel into the given buffer,
 starting at the given file position.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method initiates the reading of a sequence of bytes from this
 channel into the given buffer, starting at the given file position. This
 method returns a `],
					[/* inline code block */ 'i', `Future`],
					[/* text */ 't', ` representing the pending result of the
 operation. The `],
					[/* inline code block */ 'i', `Future`],
					[/* text */ 't', `'s `],
					[/* reference */ 'r', `java.util.concurrent.Future#get()`, `get`],
					[/* text */ 't', ` method returns
 the number of bytes read or `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', ` if the given position is greater
 than or equal to the file's size at the time that the read is attempted.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method works in the same manner as the `],
					[/* reference */ 'r', `java.nio.channels.AsynchronousByteChannel#read(java.nio.ByteBuffer)`, `AsynchronousByteChannel.read(ByteBuffer)`],
					[/* text */ 't', ` method, except that bytes are
 read starting at the given file position. If the given file position is
 greater than the file's size at the time that the read is attempted then
 no bytes are read.`]
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
				]]
			],
			[/* return description */
				[/* text */ 't', `A `],
				[/* inline code block */ 'i', `Future`],
				[/* text */ 't', ` object representing the pending result`]
			]
		]],
		[/* method */ 'write(java.nio.ByteBuffer,long)', [
			[/* method description */
				[/* text */ 't', `Writes a sequence of bytes to this channel from the given buffer, starting
 at the given file position.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method initiates the writing of a sequence of bytes to this
 channel from the given buffer, starting at the given file position. The
 method returns a `],
					[/* inline code block */ 'i', `Future`],
					[/* text */ 't', ` representing the pending result of the
 write operation. The `],
					[/* inline code block */ 'i', `Future`],
					[/* text */ 't', `'s `],
					[/* reference */ 'r', `java.util.concurrent.Future#get()`, `get`],
					[/* text */ 't', ` method
 returns the number of bytes written.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method works in the same manner as the `],
					[/* reference */ 'r', `java.nio.channels.AsynchronousByteChannel#write(java.nio.ByteBuffer)`, `AsynchronousByteChannel.write(ByteBuffer)`],
					[/* text */ 't', ` method, except that bytes are
 written starting at the given file position. If the given position is
 greater than the file's size, at the time that the write is attempted,
 then the file will be grown to accommodate the new bytes; the values of
 any bytes between the previous end-of-file and the newly-written bytes
 are unspecified.`]
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
				]]
			],
			[/* return description */
				[/* text */ 't', `A `],
				[/* inline code block */ 'i', `Future`],
				[/* text */ 't', ` object representing the pending result`]
			]
		]],
		[/* method */ 'lock(long,long,boolean)', [
			[/* method description */
				[/* text */ 't', `Acquires a lock on the given region of this channel's file.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method initiates an operation to acquire a lock on the given
 region of this channel's file.  The method behaves in exactly the same
 manner as the `],
					[/* reference */ 'r', `#lock(long,long,boolean,A,java.nio.channels.CompletionHandler)`, `lock(long, long, boolean, Object, CompletionHandler)`],
					[/* text */ 't', `
 method except that instead of specifying a completion handler, this
 method returns a `],
					[/* inline code block */ 'i', `Future`],
					[/* text */ 't', ` representing the pending result. The
 `],
					[/* inline code block */ 'i', `Future`],
					[/* text */ 't', `'s `],
					[/* reference */ 'r', `java.util.concurrent.Future#get()`, `get`],
					[/* text */ 't', ` method returns the `],
					[/* reference */ 'r', `java.nio.channels.FileLock`, `FileLock`],
					[/* text */ 't', ` on successful completion.`]
				]]
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
				[/* throw */ 'java.nio.channels.OverlappingFileLockException', [/* throw description */
					[/* text */ 't', `If a lock is already held by this Java virtual machine, or there
          is already a pending attempt to lock a region`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the preconditions on the parameters do not hold`]
				]],
				[/* throw */ 'java.nio.channels.NonReadableChannelException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `shared`],
					[/* text */ 't', ` is true but this channel was not opened for reading`]
				]],
				[/* throw */ 'java.nio.channels.NonWritableChannelException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `shared`],
					[/* text */ 't', ` is false but this channel was not opened for writing`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Future`],
				[/* text */ 't', ` object representing the pending result`]
			]
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the current size of this channel's file.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If this channel is closed`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The current size of this channel's file, measured in bytes`]
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
				[/* block */ 'b', ` This method is only guaranteed to force changes that were made to
 this channel's file via the methods defined in this class.`]
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
		[/* method */ 'lock(java.lang.Object,java.nio.channels.CompletionHandler)', [
			[/* method description */
				[/* text */ 't', `Acquires an exclusive lock on this channel's file.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method initiates an operation to acquire a lock on the given
 region of this channel's file. The `],
					[/* inline code block */ 'i', `handler`],
					[/* text */ 't', ` parameter is a
 completion handler that is invoked when the lock is acquired (or the
 operation fails). The result passed to the completion handler is the
 resulting `],
					[/* inline code block */ 'i', `FileLock`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form `],
					[/* inline code block */ 'i', `ch.lock(att,handler)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation
 `]
				]],
				[/* code block */ 'c', [
					[/* text */ 't', `     ch.`],
					[/* text */ 't', `lock`],
					[/* text */ 't', `(0L, Long.MAX_VALUE, false, att, handler)
 `]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'attachment', [/* parameter description */
					[/* text */ 't', `The object to attach to the I/O operation; can be `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* parameter */ 'handler', [/* parameter description */
					[/* text */ 't', `The handler for consuming the result`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.channels.OverlappingFileLockException', [/* throw description */
					[/* text */ 't', `If a lock is already held by this Java virtual machine, or there
          is already a pending attempt to lock a region`]
				]],
				[/* throw */ 'java.nio.channels.NonWritableChannelException', [/* throw description */
					[/* text */ 't', `If this channel was not opened for writing`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'tryLock()', [
			[/* method description */
				[/* text */ 't', `Attempts to acquire an exclusive lock on this channel's file.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form `],
					[/* inline code block */ 'i', `ch.tryLock()`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation

 `]
				]],
				[/* code block */ 'c', [
					[/* text */ 't', `     ch.`],
					[/* text */ 't', `tryLock`],
					[/* text */ 't', `(0L, Long.MAX_VALUE, false) `]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
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
				[/* throw */ 'java.nio.channels.NonWritableChannelException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `shared`],
					[/* text */ 't', ` is false but this channel was not opened for writing`]
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
		[/* method */ 'lock()', [
			[/* method description */
				[/* text */ 't', `Acquires an exclusive lock on this channel's file.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method initiates an operation to acquire an exclusive lock on this
 channel's file. The method returns a `],
					[/* inline code block */ 'i', `Future`],
					[/* text */ 't', ` representing the
 pending result of the operation. The `],
					[/* inline code block */ 'i', `Future`],
					[/* text */ 't', `'s `],
					[/* reference */ 'r', `java.util.concurrent.Future#get()`, `get`],
					[/* text */ 't', ` method returns the `],
					[/* reference */ 'r', `java.nio.channels.FileLock`, `FileLock`],
					[/* text */ 't', ` on successful completion.

 `]
				]],
				[/* block */ 'b', ` An invocation of this method behaves in exactly the same way as the
 invocation
 `],
				[/* code block */ 'c', [
					[/* text */ 't', `     ch.`],
					[/* text */ 't', `lock`],
					[/* text */ 't', `(0L, Long.MAX_VALUE, false)
 `]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.nio.channels.OverlappingFileLockException', [/* throw description */
					[/* text */ 't', `If a lock is already held by this Java virtual machine, or there
          is already a pending attempt to lock a region`]
				]],
				[/* throw */ 'java.nio.channels.NonWritableChannelException', [/* throw description */
					[/* text */ 't', `If this channel was not opened for writing`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Future`],
				[/* text */ 't', ` object representing the pending result`]
			]
		]],
		[/* method */ 'open(java.nio.file.Path,java.nio.file.OpenOption...)', [
			[/* method description */
				[/* text */ 't', `Opens or creates a file for reading and/or writing, returning an
 asynchronous file channel to access the file.

 `],
				[/* block */ 'b', ` An invocation of this method behaves in exactly the same way as the
 invocation
 `],
				[/* code block */ 'c', [
					[/* text */ 't', `     ch.`],
					[/* text */ 't', `open`],
					[/* text */ 't', `(file, opts, null, new FileAttribute<?>[0]);
 `]
				]],
				[/* text */ 't', `
 where `],
				[/* inline code block */ 'i', `opts`],
				[/* text */ 't', ` is a `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` containing the options specified to
 this method.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', ` The resulting channel is associated with default thread pool to which
 tasks are submitted to handle I/O events and dispatch to completion
 handlers that consume the result of asynchronous operations performed on
 the resulting channel.`]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
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
					[/* inline code block */ 'i', `file`],
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
					[/* text */ 't', `optional specific exception`]
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
				[/* text */ 't', `A new asynchronous file channel`]
			]
		]],
		[/* method */ 'open(java.nio.file.Path,java.util.Set,java.util.concurrent.ExecutorService,java.nio.file.attribute.FileAttribute...)', [
			[/* method description */
				[/* text */ 't', `Opens or creates a file for reading and/or writing, returning an
 asynchronous file channel to access the file.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `options`],
					[/* text */ 't', ` parameter determines how the file is opened.
 The `],
					[/* reference */ 'r', `java.nio.file.StandardOpenOption#READ`, `READ`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `java.nio.file.StandardOpenOption#WRITE`, `WRITE`],
					[/* text */ 't', ` options determines if the file should be opened for reading and/or
 writing. If neither option is contained in the array then an existing file
 is opened for  reading.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` In addition to `],
					[/* inline code block */ 'i', `READ`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `WRITE`],
					[/* text */ 't', `, the following options
 may be present:

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
								[/* reference */ 'r', `java.nio.file.StandardOpenOption#TRUNCATE_EXISTING`, `TRUNCATE_EXISTING`],
								[/* text */ 't', ` `]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', ` When opening an existing file, the file is first truncated to a
   size of 0 bytes. This option is ignored when the file is opened only
   for reading.`]
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
								[/* reference */ 'r', `java.nio.channels.AsynchronousChannel#close()`, `close`],
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
				[/* block */ 'b', ''],
				[/* block */ 'b', ` An implementation may also support additional options.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `executor`],
					[/* text */ 't', ` parameter is the `],
					[/* reference */ 'r', `java.util.concurrent.ExecutorService`, `ExecutorService`],
					[/* text */ 't', ` to
 which tasks are submitted to handle I/O events and dispatch completion
 results for operations initiated on resulting channel.
 The nature of these tasks is highly implementation specific and so care
 should be taken when configuring the `],
					[/* inline code block */ 'i', `Executor`],
					[/* text */ 't', `. Minimally it
 should support an unbounded work queue and should not run tasks on the
 caller thread of the `],
					[/* reference */ 'r', `java.util.concurrent.Executor#execute(java.lang.Runnable)`, `execute`],
					[/* text */ 't', ` method.
 Shutting down the executor service while the channel is open results in
 unspecified behavior.

 `]
				]],
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
					[/* reference */ 'r', `java.nio.file.spi.FileSystemProvider#newAsynchronousFileChannel(java.nio.file.Path,java.util.Set,java.util.concurrent.ExecutorService,java.nio.file.attribute.FileAttribute...)`, `newAsynchronousFileChannel`],
					[/* text */ 't', `
 method on the provider that created the `],
					[/* inline code block */ 'i', `Path`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `The path of the file to open or create`]
				]],
				[/* parameter */ 'options', [/* parameter description */
					[/* text */ 't', `Options specifying how the file is opened`]
				]],
				[/* parameter */ 'executor', [/* parameter description */
					[/* text */ 't', `The thread pool or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` to associate the channel with
          the default thread pool`]
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
					[/* inline code block */ 'i', `file`],
					[/* text */ 't', ` is associated with a provider that does not
          support creating asynchronous file channels, or an unsupported
          open option is specified, or the array contains an attribute that
          cannot be set atomically when creating the file`]
				]],
				[/* throw */ 'java.nio.file.FileAlreadyExistsException', [/* throw description */
					[/* text */ 't', `If a file of that name already exists and the `],
					[/* reference */ 'r', `java.nio.file.StandardOpenOption#CREATE_NEW`, `CREATE_NEW`],
					[/* text */ 't', ` option is specified
          and the file is being opened for writing
          `],
					[/* text */ 't', `optional specific exception`]
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
				[/* text */ 't', `A new asynchronous file channel`]
			]
		]]
	],
]);
