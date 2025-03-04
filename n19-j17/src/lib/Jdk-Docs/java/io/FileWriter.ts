import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.FileWriter', [
	[/* class description */
		[/* text */ 't', `Writes text to character files using a default buffer size. Encoding from characters
 to bytes uses either a specified `],
		[/* reference */ 'r', `java.nio.charset.Charset`],
		[/* text */ 't', `
 or the platform's
 `],
		[/* reference */ 'r', `java.charset.Charset#defaultCharset()`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Whether or not a file is available or may be created depends upon the
 underlying platform.  Some platforms, in particular, allow a file to be
 opened for writing by only one `],
			[/* inline code block */ 'i', `FileWriter`],
			[/* text */ 't', ` (or other file-writing
 object) at a time.  In such situations the constructors in this class
 will fail if the file involved is already open.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The `],
			[/* inline code block */ 'i', `FileWriter`],
			[/* text */ 't', ` is meant for writing streams of characters. For writing
 streams of raw bytes, consider using a `],
			[/* inline code block */ 'i', `FileOutputStream`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.io.File)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `FileWriter`],
				[/* text */ 't', ` given the `],
				[/* inline code block */ 'i', `File`],
				[/* text */ 't', ` to write,
 using the platform's
 `],
				[/* reference */ 'r', `java.charset.Charset#defaultCharset()`]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `File`],
					[/* text */ 't', ` to write.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if the file exists but is a directory rather than
                  a regular file, does not exist but cannot be created,
                  or cannot be opened for any other reason`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.File,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `FileWriter`],
				[/* text */ 't', ` given the `],
				[/* inline code block */ 'i', `File`],
				[/* text */ 't', ` to write and
 a boolean indicating whether to append the data written, using the platform's
 `],
				[/* reference */ 'r', `java.charset.Charset#defaultCharset()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `File`],
					[/* text */ 't', ` to write`]
				]],
				[/* parameter */ 'append', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, then bytes will be written
                      to the end of the file rather than the beginning`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if the file exists but is a directory rather than
                  a regular file, does not exist but cannot be created,
                  or cannot be opened for any other reason`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.File,java.nio.charset.Charset)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `FileWriter`],
				[/* text */ 't', ` given the `],
				[/* inline code block */ 'i', `File`],
				[/* text */ 't', ` to write and
 `],
				[/* reference */ 'r', `java.nio.charset.Charset`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `File`],
					[/* text */ 't', ` to write`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `the `],
					[/* reference */ 'r', `java.nio.charset.Charset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if the file exists but is a directory rather than
                  a regular file, does not exist but cannot be created,
                  or cannot be opened for any other reason`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.File,java.nio.charset.Charset,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `FileWriter`],
				[/* text */ 't', ` given the `],
				[/* inline code block */ 'i', `File`],
				[/* text */ 't', ` to write,
 `],
				[/* reference */ 'r', `java.nio.charset.Charset`],
				[/* text */ 't', ` and a boolean indicating
 whether to append the data written.`]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `File`],
					[/* text */ 't', ` to write`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `the `],
					[/* reference */ 'r', `java.nio.charset.Charset`]
				]],
				[/* parameter */ 'append', [/* parameter description */
					[/* text */ 't', `a boolean. If `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, the writer will write the data
                  to the end of the file rather than the beginning.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if the file exists but is a directory rather than
                  a regular file, does not exist but cannot be created,
                  or cannot be opened for any other reason`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.FileDescriptor)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `FileWriter`],
				[/* text */ 't', ` given a file descriptor,
 using the platform's
 `],
				[/* reference */ 'r', `java.charset.Charset#defaultCharset()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'fd', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `FileDescriptor`],
					[/* text */ 't', ` to write.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `FileWriter`],
				[/* text */ 't', ` given a file name, using the platform's
 `],
				[/* reference */ 'r', `java.charset.Charset#defaultCharset()`]
			],
			[/* parameters */
				[/* parameter */ 'fileName', [/* parameter description */
					[/* text */ 't', `String The system-dependent filename.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if the named file exists but is a directory rather
                  than a regular file, does not exist but cannot be
                  created, or cannot be opened for any other reason`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `FileWriter`],
				[/* text */ 't', ` given a file name and a boolean indicating
 whether to append the data written, using the platform's
 `],
				[/* reference */ 'r', `java.charset.Charset#defaultCharset()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'fileName', [/* parameter description */
					[/* text */ 't', `String The system-dependent filename.`]
				]],
				[/* parameter */ 'append', [/* parameter description */
					[/* text */ 't', `boolean if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, then data will be written
                  to the end of the file rather than the beginning.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if the named file exists but is a directory rather
                  than a regular file, does not exist but cannot be
                  created, or cannot be opened for any other reason`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.nio.charset.Charset)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `FileWriter`],
				[/* text */ 't', ` given a file name and
 `],
				[/* reference */ 'r', `java.nio.charset.Charset`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'fileName', [/* parameter description */
					[/* text */ 't', `the name of the file to write`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `the `],
					[/* reference */ 'r', `java.nio.charset.Charset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if the named file exists but is a directory rather
                  than a regular file, does not exist but cannot be
                  created, or cannot be opened for any other reason`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.nio.charset.Charset,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `FileWriter`],
				[/* text */ 't', ` given a file name,
 `],
				[/* reference */ 'r', `java.nio.charset.Charset`],
				[/* text */ 't', ` and a boolean indicating
 whether to append the data written.`]
			],
			[/* parameters */
				[/* parameter */ 'fileName', [/* parameter description */
					[/* text */ 't', `the name of the file to write`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `the `],
					[/* reference */ 'r', `java.nio.charset.Charset`]
				]],
				[/* parameter */ 'append', [/* parameter description */
					[/* text */ 't', `a boolean. If `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, the writer will write the data
                  to the end of the file rather than the beginning.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if the named file exists but is a directory rather
                  than a regular file, does not exist but cannot be
                  created, or cannot be opened for any other reason`]
				]]
			]
		]]
	],
	/* methods */ UDF,
]);
