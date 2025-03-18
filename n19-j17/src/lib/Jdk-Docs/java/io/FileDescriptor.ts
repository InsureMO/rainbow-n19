import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.FileDescriptor', [
	[/* class description */
		[/* text */ 't', `Instances of the file descriptor class serve as an opaque handle
 to the underlying machine-specific structure representing an open
 file, an open socket, or another source or sink of bytes.
 The main practical use for a file descriptor is to create a
 `],
		[/* reference */ 'r', `java.io.FileInputStream`, `FileInputStream`],
		[/* text */ 't', ` or `],
		[/* reference */ 'r', `java.io.FileOutputStream`, `FileOutputStream`],
		[/* text */ 't', ` to contain it.
 `],
		[/* block */ 'b', `
 Applications should not create their own file descriptors.`]
	],
	[/* fields */
		[/* field */ 'err', [
			[/* field description */
				[/* text */ 't', `A handle to the standard error stream. Usually, this file
 descriptor is not used directly, but rather via the output stream
 known as `],
				[/* inline code block */ 'i', `System.err`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'in', [
			[/* field description */
				[/* text */ 't', `A handle to the standard input stream. Usually, this file
 descriptor is not used directly, but rather via the input stream
 known as `],
				[/* inline code block */ 'i', `System.in`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'out', [
			[/* field description */
				[/* text */ 't', `A handle to the standard output stream. Usually, this file
 descriptor is not used directly, but rather via the output stream
 known as `],
				[/* inline code block */ 'i', `System.out`],
				[/* text */ 't', `.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an (invalid) FileDescriptor object.
 The fd or handle is set later.`]
			],
			/* parameters */,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'valid()', [
			[/* method description */
				[/* text */ 't', `Tests if this file descriptor object is valid.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the file descriptor object represents a
          valid, open file, socket, or other active I/O connection;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'sync()', [
			[/* method description */
				[/* text */ 't', `Force all system buffers to synchronize with the underlying
 device.  This method returns after all modified data and
 attributes of this FileDescriptor have been written to the
 relevant device(s).  In particular, if this FileDescriptor
 refers to a physical storage medium, such as a file in a file
 system, sync will not return until all in-memory modified copies
 of buffers associated with this FileDescriptor have been
 written to the physical medium.

 sync is meant to be used by code that requires physical
 storage (such as a file) to be in a known state  For
 example, a class that provided a simple transaction facility
 might use sync to ensure that all changes to a file caused
 by a given transaction were recorded on a storage medium.

 sync only affects buffers downstream of this FileDescriptor.  If
 any in-memory buffering is being done by the application (for
 example, by a BufferedOutputStream object), those buffers must
 be flushed into the FileDescriptor (for example, by invoking
 OutputStream.flush) before that data will be affected by sync.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.SyncFailedException', [/* throw description */
					[/* text */ 't', `Thrown when the buffers cannot be flushed,
        or because the system cannot guarantee that all the
        buffers have been synchronized with physical media.`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
