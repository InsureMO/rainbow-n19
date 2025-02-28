import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.zip.ZipInputStream', [
	[/* class description */
		[/* text */ 't', `This class implements an input stream filter for reading files in the
 ZIP file format. Includes support for both compressed and uncompressed
 entries.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.io.InputStream,java.nio.charset.Charset)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new ZIP input stream.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `the actual input stream`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.nio.charset.Charset`],
					[/* text */ 't', ` to be
        used to decode the ZIP entry name (ignored if the
        `],
					[/* external link */ 'a', `package-summary.html#lang_encoding`, `language encoding bit`],
					[/* text */ 't', ` of the ZIP entry's general purpose bit
        flag is set).`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.InputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new ZIP input stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The UTF-8 `],
					[/* reference */ 'r', `java.nio.charset.Charset`],
					[/* text */ 't', ` is used to
 decode the entry names.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `the actual input stream`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'read(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reads from the current ZIP entry into an array of bytes.
 If `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` is not zero, the method
 blocks until some input is available; otherwise, no
 bytes are read and `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the buffer into which the data is read`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset in the destination array `],
					[/* inline code block */ 'i', `b`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the maximum number of bytes read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
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
				[/* throw */ 'java.util.zip.ZipException', [/* throw description */
					[/* text */ 't', `if a ZIP file error has occurred`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of bytes read, or -1 if the end of the
         entry is reached`]
			]
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this input stream and releases any system resources associated
 with the stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'skip(long)', [
			[/* method description */
				[/* text */ 't', `Skips specified number of bytes in the current ZIP entry.`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `the number of bytes to skip`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.zip.ZipException', [/* throw description */
					[/* text */ 't', `if a ZIP file error has occurred`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `n < 0`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of bytes skipped`]
			]
		]],
		[/* method */ 'available()', [
			[/* method description */
				[/* text */ 't', `Returns 0 after EOF has reached for the current entry data,
 otherwise always return 1.
 `],
				[/* block */ 'b', `
 Programs should not count on this method to return the actual number
 of bytes that could be read without blocking.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `1 before EOF and 0 after EOF has reached for current entry.`]
			]
		]],
		[/* method */ 'closeEntry()', [
			[/* method description */
				[/* text */ 't', `Closes the current ZIP entry and positions the stream for reading the
 next entry.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.zip.ZipException', [/* throw description */
					[/* text */ 't', `if a ZIP file error has occurred`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'createZipEntry(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Creates a new `],
				[/* inline code block */ 'i', `ZipEntry`],
				[/* text */ 't', ` object for the specified
 entry name.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the ZIP file entry name`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the ZipEntry just created`]
			]
		]],
		[/* method */ 'getNextEntry()', [
			[/* method description */
				[/* text */ 't', `Reads the next ZIP file entry and positions the stream at the
 beginning of the entry data.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.zip.ZipException', [/* throw description */
					[/* text */ 't', `if a ZIP file error has occurred`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next ZIP file entry, or null if there are no more entries`]
			]
		]]
	],
]);
