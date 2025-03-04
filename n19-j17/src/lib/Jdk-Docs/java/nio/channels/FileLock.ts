import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.channels.FileLock', [
	[/* class description */
		[/* text */ 't', `A token representing a lock on a region of a file.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A file-lock object is created each time a lock is acquired on a file via
 one of the `],
			[/* reference */ 'r', `.FileChannel#lock(long,long,boolean)`],
			[/* text */ 't', ` or `],
			[/* reference */ 'r', `.FileChannel#tryLock(long,long,boolean)`],
			[/* text */ 't', ` methods of the
 `],
			[/* reference */ 'r', `java.nio.channels.FileChannel`],
			[/* text */ 't', ` class, or the `],
			[/* reference */ 'r', `.AsynchronousFileChannel#lock(long,long,boolean,A,java.nio.channels.CompletionHandler)`],
			[/* text */ 't', `
 or `],
			[/* reference */ 'r', `.AsynchronousFileChannel#tryLock(long,long,boolean)`],
			[/* text */ 't', `
 methods of the `],
			[/* reference */ 'r', `java.nio.channels.AsynchronousFileChannel`],
			[/* text */ 't', ` class.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A file-lock object is initially valid.  It remains valid until the lock
 is released by invoking the `],
			[/* reference */ 'r', `#release()`, `release`],
			[/* text */ 't', ` method, by closing the
 channel that was used to acquire it, or by the termination of the Java
 virtual machine, whichever comes first.  The validity of a lock may be
 tested by invoking its `],
			[/* reference */ 'r', `#isValid()`, `isValid`],
			[/* text */ 't', ` method.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A file lock is either `],
			[/* text */ 't', `exclusive`],
			[/* text */ 't', ` or `],
			[/* text */ 't', `shared`],
			[/* text */ 't', `.  A shared lock
 prevents other concurrently-running programs from acquiring an overlapping
 exclusive lock, but does allow them to acquire overlapping shared locks.  An
 exclusive lock prevents other programs from acquiring an overlapping lock of
 either type.  Once it is released, a lock has no further effect on the locks
 that may be acquired by other programs.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Whether a lock is exclusive or shared may be determined by invoking its
 `],
			[/* reference */ 'r', `#isShared()`, `isShared`],
			[/* text */ 't', ` method.  Some platforms do not support shared
 locks, in which case a request for a shared lock is automatically converted
 into a request for an exclusive lock.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The locks held on a particular file by a single Java virtual machine do
 not overlap.  The `],
			[/* reference */ 'r', `#overlaps(long,long)`, `overlaps`],
			[/* text */ 't', ` method may be used to test
 whether a candidate lock range overlaps an existing lock.

 `]
		]],
		[/* block */ 'b', ` A file-lock object records the file channel upon whose file the lock is
 held, the type and validity of the lock, and the position and size of the
 locked region.  Only the validity of a lock is subject to change over time;
 all other aspects of a lock's state are immutable.

 `],
		[/* block */ 'b', ` File locks are held on behalf of the entire Java virtual machine.
 They are not suitable for controlling access to a file by multiple
 threads within the same virtual machine.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` File-lock objects are safe for use by multiple concurrent threads.


 `],
			[/* text */ 't', ``]
		]],
		[/* block */ 'b', ` Platform dependencies `],
		[/* block */ 'b', ` This file-locking API is intended to map directly to the native locking
 facility of the underlying operating system.  Thus the locks held on a file
 should be visible to all programs that have access to the file, regardless
 of the language in which those programs are written.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Whether or not a lock actually prevents another program from accessing
 the content of the locked region is system-dependent and therefore
 unspecified.  The native file-locking facilities of some systems are merely
 `],
			[/* text */ 't', `advisory`],
			[/* text */ 't', `, meaning that programs must cooperatively observe a known
 locking protocol in order to guarantee data integrity.  On other systems
 native file locks are `],
			[/* text */ 't', `mandatory`],
			[/* text */ 't', `, meaning that if one program locks a
 region of a file then other programs are actually prevented from accessing
 that region in a way that would violate the lock.  On yet other systems,
 whether native file locks are advisory or mandatory is configurable on a
 per-file basis.  To ensure consistent and correct behavior across platforms,
 it is strongly recommended that the locks provided by this API be used as if
 they were advisory locks.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` On some systems, acquiring a mandatory lock on a region of a file
 prevents that region from being `],
			[/* reference */ 'r', `.FileChannel#map(java.nio.channels.FileChannel.MapMode,long,long)`],
			[/* text */ 't', `, and vice versa.  Programs that combine
 locking and mapping should be prepared for this combination to fail.

 `]
		]],
		[/* block */ 'b', ` On some systems, closing a channel releases all locks held by the Java
 virtual machine on the underlying file regardless of whether the locks were
 acquired via that channel or via another channel open on the same file.  It
 is strongly recommended that, within a program, a unique channel be used to
 acquire all locks on any given file.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Some network filesystems permit file locking to be used with
 memory-mapped files only when the locked regions are page-aligned and a
 whole multiple of the underlying hardware's page size.  Some network
 filesystems do not implement file locks on regions that extend past a
 certain position, often 2`],
			[/* text */ 't', `30`, 'sup'],
			[/* text */ 't', ` or 2`],
			[/* text */ 't', `31`, 'sup'],
			[/* text */ 't', `.  In general, great
 care should be taken when locking files that reside on network filesystems.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.nio.channels.AsynchronousFileChannel,long,long,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Initializes a new instance of this class.`]
			],
			[/* parameters */
				[/* parameter */ 'channel', [/* parameter description */
					[/* text */ 't', `The channel upon whose file this lock is held`]
				]],
				[/* parameter */ 'position', [/* parameter description */
					[/* text */ 't', `The position within the file at which the locked region starts;
         must be non-negative`]
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
					[/* text */ 't', ` if this lock is shared,
         `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` if it is exclusive`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the preconditions on the parameters do not hold`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.nio.channels.FileChannel,long,long,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Initializes a new instance of this class.`]
			],
			[/* parameters */
				[/* parameter */ 'channel', [/* parameter description */
					[/* text */ 't', `The file channel upon whose file this lock is held`]
				]],
				[/* parameter */ 'position', [/* parameter description */
					[/* text */ 't', `The position within the file at which the locked region starts;
         must be non-negative`]
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
					[/* text */ 't', ` if this lock is shared,
         `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` if it is exclusive`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the preconditions on the parameters do not hold`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'isValid()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this lock is valid.

 `],
				[/* block */ 'b', ` A lock object remains valid until it is released or the associated
 file channel is closed, whichever comes first.  `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this lock is valid`]
			]
		]],
		[/* method */ 'release()', [
			[/* method description */
				[/* text */ 't', `Releases this lock.

 `],
				[/* block */ 'b', ` If this lock object is valid then invoking this method releases the
 lock and renders the object invalid.  If this lock object is invalid
 then invoking this method has no effect.  `]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If the channel that was used to acquire this lock
          is no longer open`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'isShared()', [
			[/* method description */
				[/* text */ 't', `Tells whether this lock is shared.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if lock is shared,
         `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if it is exclusive`]
			]
		]],
		[/* method */ 'overlaps(long,long)', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this lock overlaps the given lock range.`]
			],
			[/* parameters */
				[/* parameter */ 'position', [/* parameter description */
					[/* text */ 't', `The starting position of the lock range`]
				]],
				[/* parameter */ 'size', [/* parameter description */
					[/* text */ 't', `The size of the lock range`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this lock and the given lock
          range overlap by at least one byte`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing the range, type, and validity of this lock.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A descriptive string`]
			]
		]],
		[/* method */ 'channel()', [
			[/* method description */
				[/* text */ 't', `Returns the file channel upon whose file this lock was acquired.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method has been superseded by the `],
					[/* reference */ 'r', `#acquiredBy()`, `acquiredBy`],
					[/* text */ 't', `
 method.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The file channel, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the file lock was not
          acquired by a file channel.`]
			]
		]],
		[/* method */ 'position()', [
			[/* method description */
				[/* text */ 't', `Returns the position within the file of the first byte of the locked
 region.

 `],
				[/* block */ 'b', ` A locked region need not be contained within, or even overlap, the
 actual underlying file, so the value returned by this method may exceed
 the file's current size.  `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The position`]
			]
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the size of the locked region in bytes.

 `],
				[/* block */ 'b', ` A locked region need not be contained within, or even overlap, the
 actual underlying file, so the value returned by this method may exceed
 the file's current size.  `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The size of the locked region`]
			]
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `This method invokes the `],
				[/* reference */ 'r', `#release()`, `release()`],
				[/* text */ 't', ` method. It was added
 to the class so that it could be used in conjunction with the
 automatic resource management block construct.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', UDF]
			],
			/* return */ UDF
		]],
		[/* method */ 'acquiredBy()', [
			[/* method description */
				[/* text */ 't', `Returns the channel upon whose file this lock was acquired.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The channel upon whose file this lock was acquired.`]
			]
		]]
	],
]);
