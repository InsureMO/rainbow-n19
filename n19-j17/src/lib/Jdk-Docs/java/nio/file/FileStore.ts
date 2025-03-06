import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.file.FileStore', [
	[/* class description */
		[/* text */ 't', `Storage for files. A `],
		[/* inline code block */ 'i', `FileStore`],
		[/* text */ 't', ` represents a storage pool, device,
 partition, volume, concrete file system or other implementation specific means
 of file storage. The `],
		[/* inline code block */ 'i', `FileStore`],
		[/* text */ 't', ` for where a file is stored is obtained
 by invoking the `],
		[/* reference */ 'r', `java.nio.file.Files#getFileStore(java.nio.file.Path)`, `getFileStore`],
		[/* text */ 't', ` method, or all file
 stores can be enumerated by invoking the `],
		[/* reference */ 'r', `java.nio.file.FileSystem#getFileStores()`, `getFileStores`],
		[/* text */ 't', ` method.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` In addition to the methods defined by this class, a file store may support
 one or more `],
			[/* reference */ 'r', `java.nio.file.attribute.FileStoreAttributeView`, `FileStoreAttributeView`],
			[/* text */ 't', ` classes
 that provide a read-only or updatable view of a set of file store attributes.`]
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
		[/* method */ 'getFileStoreAttributeView(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `FileStoreAttributeView`],
				[/* text */ 't', ` of the given type.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method is intended to be used where the file store attribute
 view defines type-safe methods to read or update the file store attributes.
 The `],
					[/* inline code block */ 'i', `type`],
					[/* text */ 't', ` parameter is the type of the attribute view required and
 the method returns an instance of that type if supported.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object corresponding to the attribute view`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a file store attribute view of the specified type or
          `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the attribute view is not available`]
			]
		]],
		[/* method */ 'isReadOnly()', [
			[/* method description */
				[/* text */ 't', `Tells whether this file store is read-only. A file store is read-only if
 it does not support write operations or other changes to files. Any
 attempt to create a file, open an existing file for writing etc. causes
 an `],
				[/* inline code block */ 'i', `IOException`],
				[/* text */ 't', ` to be thrown.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this file store is read-only`]
			]
		]],
		[/* method */ 'supportsFileAttributeView(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this file store supports the file attributes
 identified by the given file attribute view.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Invoking this method to test if the file store supports `],
					[/* reference */ 'r', `java.nio.file.attribute.BasicFileAttributeView`, `BasicFileAttributeView`],
					[/* text */ 't', ` will always return `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `. In the case of
 the default provider, this method cannot guarantee to give the correct
 result when the file store is not a local storage device. The reasons for
 this are implementation specific and therefore unspecified.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the file attribute view type`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, the file attribute view is
          supported`]
			]
		]],
		[/* method */ 'supportsFileAttributeView(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this file store supports the file attributes
 identified by the given file attribute view.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Invoking this method to test if the file store supports `],
					[/* reference */ 'r', `java.nio.file.attribute.BasicFileAttributeView`, `BasicFileAttributeView`],
					[/* text */ 't', `, identified by the name "`],
					[/* inline code block */ 'i', `basic`],
					[/* text */ 't', `" will
 always return `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `. In the case of the default provider, this
 method cannot guarantee to give the correct result when the file store is
 not a local storage device. The reasons for this are implementation
 specific and therefore unspecified.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the `],
					[/* reference */ 'r', `java.nio.file.attribute.AttributeView#name()`, `name`],
					[/* text */ 't', ` of file attribute view`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, the file attribute view is
          supported`]
			]
		]],
		[/* method */ 'getAttribute(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Reads the value of a file store attribute.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `attribute`],
					[/* text */ 't', ` parameter identifies the attribute to be read
 and takes the form:
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `view-name`],
					[/* text */ 't', `:`],
					[/* text */ 't', `attribute-name`]
				]],
				[/* text */ 't', `
 where the character `],
				[/* inline code block */ 'i', `':'`],
				[/* text */ 't', ` stands for itself.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `view-name`],
					[/* text */ 't', ` is the `],
					[/* reference */ 'r', `java.nio.file.attribute.AttributeView#name()`, `name`],
					[/* text */ 't', ` of
 a `],
					[/* reference */ 'r', `java.nio.file.FileStore`, `AttributeView`],
					[/* text */ 't', ` that identifies a set of file attributes.
 `],
					[/* text */ 't', `attribute-name`],
					[/* text */ 't', ` is the name of the attribute.

 `]
				]],
				[/* block */ 'b', `Usage Example:`],
				[/* code block */ 'c', `    boolean compression = (Boolean)fs.getAttribute("zfs:compression");
 `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'attribute', [/* parameter description */
					[/* text */ 't', `the attribute to read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the attribute view is not available or it does not support
          reading the attribute`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the attribute value; `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` may be valid for some
          attributes`]
			]
		]],
		[/* method */ 'name()', [
			[/* method description */
				[/* text */ 't', `Returns the name of this file store. The format of the name is highly
 implementation specific. It will typically be the name of the storage
 pool or volume.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The string returned by this method may differ from the string
 returned by the `],
					[/* reference */ 'r', `java.lang.Object#toString()`, `toString`],
					[/* text */ 't', ` method.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of this file store`]
			]
		]],
		[/* method */ 'type()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* text */ 't', `type`],
				[/* text */ 't', ` of this file store. The format of the string
 returned by this method is highly implementation specific. It may
 indicate, for example, the format used or if the file store is local
 or remote.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representing the type of this file store`]
			]
		]],
		[/* method */ 'getTotalSpace()', [
			[/* method description */
				[/* text */ 't', `Returns the size, in bytes, of the file store. If the total number of
 bytes in the file store is greater than `],
				[/* reference */ 'r', `java.lang.Long#MAX_VALUE`, `Long.MAX_VALUE`],
				[/* text */ 't', `, then
 `],
				[/* inline code block */ 'i', `Long.MAX_VALUE`],
				[/* text */ 't', ` will be returned.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the size of the file store, in bytes`]
			]
		]],
		[/* method */ 'getUnallocatedSpace()', [
			[/* method description */
				[/* text */ 't', `Returns the number of unallocated bytes in the file store.
 If the number of unallocated bytes is greater than
 `],
				[/* reference */ 'r', `java.lang.Long#MAX_VALUE`, `Long.MAX_VALUE`],
				[/* text */ 't', `, then `],
				[/* inline code block */ 'i', `Long.MAX_VALUE`],
				[/* text */ 't', ` will be returned.

 `],
				[/* block */ 'b', ` The returned number of unallocated bytes is a hint, but not a
 guarantee, that it is possible to use most or any of these bytes.  The
 number of unallocated bytes is most likely to be accurate immediately
 after the space attributes are obtained. It is likely to be
 made inaccurate by any external I/O operations including those made on
 the system outside of this virtual machine.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of unallocated bytes`]
			]
		]],
		[/* method */ 'getUsableSpace()', [
			[/* method description */
				[/* text */ 't', `Returns the number of bytes available to this Java virtual machine on the
 file store.  If the number of bytes available is greater than
 `],
				[/* reference */ 'r', `java.lang.Long#MAX_VALUE`, `Long.MAX_VALUE`],
				[/* text */ 't', `, then `],
				[/* inline code block */ 'i', `Long.MAX_VALUE`],
				[/* text */ 't', ` will be returned.

 `],
				[/* block */ 'b', ` The returned number of available bytes is a hint, but not a
 guarantee, that it is possible to use most or any of these bytes.  The
 number of usable bytes is most likely to be accurate immediately
 after the space attributes are obtained. It is likely to be made inaccurate
 by any external I/O operations including those made on the system outside
 of this Java virtual machine.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of bytes available`]
			]
		]],
		[/* method */ 'getBlockSize()', [
			[/* method description */
				[/* text */ 't', `Returns the number of bytes per block in this file store.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` File storage is typically organized into discrete sequences of bytes
 called `],
					[/* text */ 't', `blocks`],
					[/* text */ 't', `. A block is the smallest storage unit of a file store.
 Every read and write operation is performed on a multiple of blocks.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the operation is not supported`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a positive value representing the block size of this file store,
          in bytes`]
			]
		]]
	],
]);
