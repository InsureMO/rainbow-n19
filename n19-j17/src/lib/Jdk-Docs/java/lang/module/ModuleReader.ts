import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.module.ModuleReader', [
	[/* class description */
		[/* text */ 't', `Provides access to the content of a module.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A module reader is intended for cases where access to the resources in a
 module is required, regardless of whether the module has been loaded.
 A framework that scans a collection of packaged modules on the file system,
 for example, may use a module reader to access a specific resource in each
 module. A module reader is also intended to be used by `],
			[/* inline code block */ 'i', `ClassLoader`],
			[/* text */ 't', `
 implementations that load classes and resources from modules. `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A resource in a module is identified by an abstract name that is a
 '`],
			[/* inline code block */ 'i', `/`],
			[/* text */ 't', `'-separated path string. For example, module `],
			[/* inline code block */ 'i', `java.base`],
			[/* text */ 't', ` may
 have a resource "`],
			[/* inline code block */ 'i', `java/lang/Object.class`],
			[/* text */ 't', `" that, by convention, is the
 class file for `],
			[/* inline code block */ 'i', `java.lang.Object`],
			[/* text */ 't', `. A module reader may treat
 directories in the module content as resources (whether it does or not is
 module reader specific). Where the module content contains a directory
 that can be located as a resource then its name ends with a slash ('/'). The
 directory can also be located with a name that drops the trailing slash. `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* inline code block */ 'i', `ModuleReader`],
			[/* text */ 't', ` is `],
			[/* reference */ 'r', `java.lang.module.ModuleReference#open()`, `open`],
			[/* text */ 't', ` upon
 creation and is closed by invoking the `],
			[/* reference */ 'r', `#close()`, `close`],
			[/* text */ 't', ` method.  Failure
 to close a module reader may result in a resource leak.  The `],
			[/* inline code block */ 'i', `try-with-resources`],
			[/* text */ 't', ` statement provides a useful construct to ensure that
 module readers are closed. `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* inline code block */ 'i', `ModuleReader`],
			[/* text */ 't', ` implementation may require permissions to access
 resources in the module. Consequently the `],
			[/* reference */ 'r', `#find(java.lang.String)`, `find`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `#open(java.lang.String)`, `open`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `#read(java.lang.String)`, `read`],
			[/* text */ 't', `, and `],
			[/* reference */ 'r', `#list()`, `list`],
			[/* text */ 't', ` methods may throw `],
			[/* inline code block */ 'i', `SecurityException`],
			[/* text */ 't', ` if access is denied by the security manager. `]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'find(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Finds a resource, returning a URI to the resource in the module.

 `],
				[/* block */ 'b', ` If the module reader can determine that the name locates a directory
 then the resulting URI will end with a slash ('/'). `]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The name of the resource to open for reading`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs or the module reader is closed`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If denied by the security manager`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A URI to the resource; an empty `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` if the resource
         is not found or a URI cannot be constructed to locate the
         resource`]
			]
		]],
		[/* method */ 'list()', [
			[/* method description */
				[/* text */ 't', `Lists the contents of the module, returning a stream of elements that
 are the names of all resources in the module. Whether the stream of
 elements includes names corresponding to directories in the module is
 module reader specific.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` In lazy implementations then an `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', ` may be thrown
 when using the stream to list the module contents. If this occurs then
 the `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', ` will be wrapped in an `],
					[/* reference */ 'r', `java.io.UncheckedIOException`, `UncheckedIOException`],
					[/* text */ 't', ` and thrown from the method that caused the
 access to be attempted. `],
					[/* inline code block */ 'i', `SecurityException`],
					[/* text */ 't', ` may also be thrown
 when using the stream to list the module contents and access is denied
 by the security manager. `]
				]],
				[/* block */ 'b', ` The behavior of the stream when used after the module reader is
 closed is implementation specific and therefore not specified. `]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs or the module reader is closed`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If denied by the security manager`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A stream of elements that are the names of all resources
         in the module`]
			]
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes the module reader. Once closed then subsequent calls to locate or
 read a resource will fail by throwing `],
				[/* inline code block */ 'i', `IOException`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` A module reader is not required to be asynchronously closeable. If a
 thread is reading a resource and another thread invokes the close method,
 then the second thread may block until the read operation is complete. `]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'open(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Opens a resource, returning an input stream to read the resource in
 the module.

 `],
				[/* block */ 'b', ` The behavior of the input stream when used after the module reader
 is closed is implementation specific and therefore not specified. `]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The name of the resource to open for reading`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs or the module reader is closed`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If denied by the security manager`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An input stream to read the resource or an empty
         `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` if not found`]
			]
		]],
		[/* method */ 'read(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Reads a resource, returning a byte buffer with the contents of the
 resource.

 The element at the returned buffer's position is the first byte of the
 resource, the element at the buffer's limit is the last byte of the
 resource. Once consumed, the `],
				[/* reference */ 'r', `#release(java.nio.ByteBuffer)`, `release`],
				[/* text */ 't', ` method
 must be invoked. Failure to invoke the `],
				[/* inline code block */ 'i', `release`],
				[/* text */ 't', ` method may result
 in a resource leak.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The name of the resource to read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs or the module reader is closed`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If denied by the security manager`]
				]],
				[/* throw */ 'java.lang.OutOfMemoryError', [/* throw description */
					[/* text */ 't', `If the resource is larger than `],
					[/* inline code block */ 'i', `Integer.MAX_VALUE`],
					[/* text */ 't', `,
         the maximum capacity of a byte buffer`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A byte buffer containing the contents of the resource or an
         empty `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` if not found`]
			]
		]],
		[/* method */ 'release(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Releases a byte buffer. This method should be invoked after consuming
 the contents of the buffer returned by the `],
				[/* inline code block */ 'i', `read`],
				[/* text */ 't', ` method.
 The behavior of this method when invoked to release a buffer that has
 already been released, or the behavior when invoked to release a buffer
 after a `],
				[/* inline code block */ 'i', `ModuleReader`],
				[/* text */ 't', ` is closed is implementation specific and
 therefore not specified.`]
			],
			[/* parameters */
				[/* parameter */ 'bb', [/* parameter description */
					[/* text */ 't', `The byte buffer to release`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
