import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.zip.ZipOutputStream', [
	[/* class description */
		[/* text */ 't', `This class implements an output stream filter for writing files in the
 ZIP file format. Includes support for both compressed and uncompressed
 entries.`]
	],
	[/* fields */
		[/* field */ 'STORED', [
			[/* field description */
				[/* text */ 't', `Compression method for uncompressed (STORED) entries.`]
			],
		]],
		[/* field */ 'DEFLATED', [
			[/* field description */
				[/* text */ 't', `Compression method for compressed (DEFLATED) entries.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.io.OutputStream,java.nio.charset.Charset)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new ZIP output stream.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `the actual output stream`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `the `],
					[/* reference */ 'r', `java.nio.charset.Charset`],
					[/* text */ 't', `
                to be used to encode the entry names and comments`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.OutputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new ZIP output stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The UTF-8 `],
					[/* reference */ 'r', `java.nio.charset.Charset`],
					[/* text */ 't', ` is used
 to encode the entry names and comments.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `the actual output stream`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'write(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Writes an array of bytes to the current ZIP entry data. This method
 will block until all the bytes are written.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the data to be written`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset in the data`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the number of bytes that are written`]
				]]
			],
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
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes the ZIP output stream as well as the stream being filtered.`]
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
		[/* method */ 'finish()', [
			[/* method description */
				[/* text */ 't', `Finishes writing the contents of the ZIP output stream without closing
 the underlying stream. Use this method when applying multiple filters
 in succession to the same output stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.zip.ZipException', [/* throw description */
					[/* text */ 't', `if a ZIP file error has occurred`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O exception has occurred`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setMethod(int)', [
			[/* method description */
				[/* text */ 't', `Sets the default compression method for subsequent entries. This
 default will be used whenever the compression method is not specified
 for an individual ZIP file entry, and is initially set to DEFLATED.`]
			],
			[/* parameters */
				[/* parameter */ 'method', [/* parameter description */
					[/* text */ 't', `the default compression method`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified compression method
            is invalid`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setComment(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Sets the ZIP file comment.`]
			],
			[/* parameters */
				[/* parameter */ 'comment', [/* parameter description */
					[/* text */ 't', `the comment string`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the length of the specified
            ZIP file comment is greater than 0xFFFF bytes`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setLevel(int)', [
			[/* method description */
				[/* text */ 't', `Sets the compression level for subsequent entries which are DEFLATED.
 The default setting is DEFAULT_COMPRESSION.`]
			],
			[/* parameters */
				[/* parameter */ 'level', [/* parameter description */
					[/* text */ 't', `the compression level (0-9)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the compression level is invalid`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'putNextEntry(java.util.zip.ZipEntry)', [
			[/* method description */
				[/* text */ 't', `Begins writing a new ZIP file entry and positions the stream to the
 start of the entry data. Closes the current entry if still active.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The default compression method will be used if no compression method
 was specified for the entry. When writing a compressed (DEFLATED)
 entry, and the compressed size has not been explicitly set with the
 `],
					[/* external link */ 'a', `ZipEntry.html#setCompressedSize(long)`, `ZipEntry.setCompressedSize(long)`],
					[/* text */ 't', ` method, then the compressed
 size will be set to the actual compressed size after deflation.
 `]
				]],
				[/* block */ 'b', `
 The current time will be used if the entry has no set modification time.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the ZIP entry to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.zip.ZipException', [/* throw description */
					[/* text */ 't', `if a ZIP format error has occurred`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'closeEntry()', [
			[/* method description */
				[/* text */ 't', `Closes the current ZIP entry and positions the stream for writing
 the next entry.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.zip.ZipException', [/* throw description */
					[/* text */ 't', `if a ZIP format error has occurred`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
