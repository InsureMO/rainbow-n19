import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.FileReader', [
	[/* class description */
		[/* text */ 't', `Reads text from character files using a default buffer size. Decoding from bytes
 to characters uses either a specified `],
		[/* reference */ 'r', `java.nio.charset.Charset`],
		[/* text */ 't', `
 or the platform's
 `],
		[/* reference */ 'r', `java.charset.Charset#defaultCharset()`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The `],
			[/* inline code block */ 'i', `FileReader`],
			[/* text */ 't', ` is meant for reading streams of characters. For reading
 streams of raw bytes, consider using a `],
			[/* inline code block */ 'i', `FileInputStream`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.io.File)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new `],
				[/* inline code block */ 'i', `FileReader`],
				[/* text */ 't', `, given the `],
				[/* inline code block */ 'i', `File`],
				[/* text */ 't', ` to read,
 using the platform's
 `],
				[/* reference */ 'r', `java.charset.Charset#defaultCharset()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `File`],
					[/* text */ 't', ` to read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.FileNotFoundException', [/* throw description */
					[/* text */ 't', `if the file does not exist,
             is a directory rather than a regular file,
             or for some other reason cannot be opened for
             reading.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.File,java.nio.charset.Charset)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new `],
				[/* inline code block */ 'i', `FileReader`],
				[/* text */ 't', `, given the `],
				[/* inline code block */ 'i', `File`],
				[/* text */ 't', ` to read and
 the `],
				[/* reference */ 'r', `java.nio.charset.Charset`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `File`],
					[/* text */ 't', ` to read`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `the `],
					[/* reference */ 'r', `java.nio.charset.Charset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if the file does not exist,
             is a directory rather than a regular file,
             or for some other reason cannot be opened for
             reading.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.FileDescriptor)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new `],
				[/* inline code block */ 'i', `FileReader`],
				[/* text */ 't', `, given the `],
				[/* inline code block */ 'i', `FileDescriptor`],
				[/* text */ 't', ` to read,
 using the platform's
 `],
				[/* reference */ 'r', `java.charset.Charset#defaultCharset()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'fd', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `FileDescriptor`],
					[/* text */ 't', ` to read`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new `],
				[/* inline code block */ 'i', `FileReader`],
				[/* text */ 't', `, given the name of the file to read,
 using the platform's
 `],
				[/* reference */ 'r', `java.charset.Charset#defaultCharset()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'fileName', [/* parameter description */
					[/* text */ 't', `the name of the file to read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.FileNotFoundException', [/* throw description */
					[/* text */ 't', `if the named file does not exist,
             is a directory rather than a regular file,
             or for some other reason cannot be opened for
             reading.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.nio.charset.Charset)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new `],
				[/* inline code block */ 'i', `FileReader`],
				[/* text */ 't', `, given the name of the file to read
 and the `],
				[/* reference */ 'r', `java.nio.charset.Charset`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'fileName', [/* parameter description */
					[/* text */ 't', `the name of the file to read`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `the `],
					[/* reference */ 'r', `java.nio.charset.Charset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if the named file does not exist,
             is a directory rather than a regular file,
             or for some other reason cannot be opened for
             reading.`]
				]]
			]
		]]
	],
	/* methods */ UDF,
]);
