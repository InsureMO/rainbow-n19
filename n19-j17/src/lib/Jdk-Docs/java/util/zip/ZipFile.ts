import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.zip.ZipFile', [
	[/* class description */
		[/* text */ 't', `This class is used to read entries from a zip file.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Unless otherwise noted, passing a `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` argument to a constructor
 or method in this class will cause a `],
			[/* reference */ 'r', `java.lang.NullPointerException`],
			[/* text */ 't', ` to be
 thrown.`]
		]]
	],
	[/* fields */
		[/* field */ 'OPEN_READ', [
			[/* field description */
				[/* text */ 't', `Mode flag to open a zip file for reading.`]
			],
		]],
		[/* field */ 'OPEN_DELETE', [
			[/* field description */
				[/* text */ 't', `Mode flag to open a zip file and mark it for deletion.  The file will be
 deleted some time between the moment that it is opened and the moment
 that it is closed, but its contents will remain accessible via the
 `],
				[/* inline code block */ 'i', `ZipFile`],
				[/* text */ 't', ` object until either the close method is invoked or the
 virtual machine exits.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,java.nio.charset.Charset)', [
			[/* constructor description */
				[/* text */ 't', `Opens a zip file for reading.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `First, if there is a security manager, its `],
					[/* inline code block */ 'i', `checkRead`],
					[/* text */ 't', `
 method is called with the `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` argument as its argument
 to ensure the read is allowed.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the zip file`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `the `],
					[/* reference */ 'r', `java.nio.charset.Charset`],
					[/* text */ 't', ` to
        be used to decode the ZIP entry name and comment that are not
        encoded by using UTF-8 encoding (indicated by entry's general
        purpose flag).`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.zip.ZipException', [/* throw description */
					[/* text */ 't', `if a ZIP format error has occurred`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its `],
					[/* inline code block */ 'i', `checkRead`],
					[/* text */ 't', `
         method doesn't allow read access to the file`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.File,java.nio.charset.Charset)', [
			[/* constructor description */
				[/* text */ 't', `Opens a ZIP file for reading given the specified File object.`]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the ZIP file to be opened for reading`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.nio.charset.Charset`],
					[/* text */ 't', ` to be
        used to decode the ZIP entry name and comment (ignored if
        the `],
					[/* reference */ 'r', `.package-summary#lang_encoding`],
					[/* text */ 't', ` of the ZIP entry's general purpose bit
        flag is set).`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.zip.ZipException', [/* throw description */
					[/* text */ 't', `if a ZIP format error has occurred`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Opens a zip file for reading.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `First, if there is a security manager, its `],
					[/* inline code block */ 'i', `checkRead`],
					[/* text */ 't', `
 method is called with the `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` argument as its argument
 to ensure the read is allowed.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The UTF-8 `],
					[/* reference */ 'r', `java.nio.charset.Charset`],
					[/* text */ 't', ` is used to
 decode the entry names and comments.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the zip file`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.zip.ZipException', [/* throw description */
					[/* text */ 't', `if a ZIP format error has occurred`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
         `],
					[/* inline code block */ 'i', `checkRead`],
					[/* text */ 't', ` method doesn't allow read access to the file.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.File,int)', [
			[/* constructor description */
				[/* text */ 't', `Opens a new `],
				[/* inline code block */ 'i', `ZipFile`],
				[/* text */ 't', ` to read from the specified
 `],
				[/* inline code block */ 'i', `File`],
				[/* text */ 't', ` object in the specified mode.  The mode argument
 must be either `],
				[/* inline code block */ 'i', `OPEN_READ`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `OPEN_READ | OPEN_DELETE`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `First, if there is a security manager, its `],
					[/* inline code block */ 'i', `checkRead`],
					[/* text */ 't', `
 method is called with the `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` argument as its argument to
 ensure the read is allowed.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The UTF-8 `],
					[/* reference */ 'r', `java.nio.charset.Charset`],
					[/* text */ 't', ` is used to
 decode the entry names and comments`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the ZIP file to be opened for reading`]
				]],
				[/* parameter */ 'mode', [/* parameter description */
					[/* text */ 't', `the mode in which the file is to be opened`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.zip.ZipException', [/* throw description */
					[/* text */ 't', `if a ZIP format error has occurred`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and
         its `],
					[/* inline code block */ 'i', `checkRead`],
					[/* text */ 't', ` method
         doesn't allow read access to the file,
         or its `],
					[/* inline code block */ 'i', `checkDelete`],
					[/* text */ 't', ` method doesn't allow deleting
         the file when the `],
					[/* inline code block */ 'i', `OPEN_DELETE`],
					[/* text */ 't', ` flag is set.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `mode`],
					[/* text */ 't', ` argument is invalid`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.File)', [
			[/* constructor description */
				[/* text */ 't', `Opens a ZIP file for reading given the specified File object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The UTF-8 `],
					[/* reference */ 'r', `java.nio.charset.Charset`],
					[/* text */ 't', ` is used to
 decode the entry names and comments.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the ZIP file to be opened for reading`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.zip.ZipException', [/* throw description */
					[/* text */ 't', `if a ZIP format error has occurred`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.File,int,java.nio.charset.Charset)', [
			[/* constructor description */
				[/* text */ 't', `Opens a new `],
				[/* inline code block */ 'i', `ZipFile`],
				[/* text */ 't', ` to read from the specified
 `],
				[/* inline code block */ 'i', `File`],
				[/* text */ 't', ` object in the specified mode.  The mode argument
 must be either `],
				[/* inline code block */ 'i', `OPEN_READ`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `OPEN_READ | OPEN_DELETE`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `First, if there is a security manager, its `],
					[/* inline code block */ 'i', `checkRead`],
					[/* text */ 't', `
 method is called with the `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` argument as its argument to
 ensure the read is allowed.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the ZIP file to be opened for reading`]
				]],
				[/* parameter */ 'mode', [/* parameter description */
					[/* text */ 't', `the mode in which the file is to be opened`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `the `],
					[/* reference */ 'r', `java.nio.charset.Charset`],
					[/* text */ 't', ` to
        be used to decode the ZIP entry name and comment that are not
        encoded by using UTF-8 encoding (indicated by entry's general
        purpose flag).`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.zip.ZipException', [/* throw description */
					[/* text */ 't', `if a ZIP format error has occurred`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its `],
					[/* inline code block */ 'i', `checkRead`],
					[/* text */ 't', `
         method doesn't allow read access to the file,or its
         `],
					[/* inline code block */ 'i', `checkDelete`],
					[/* text */ 't', ` method doesn't allow deleting the
         file when the `],
					[/* inline code block */ 'i', `OPEN_DELETE`],
					[/* text */ 't', ` flag is set`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `mode`],
					[/* text */ 't', ` argument is invalid`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Returns the path name of the ZIP file.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the path name of the ZIP file`]
			]
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the number of entries in the ZIP file.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if the zip file has been closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of entries in the ZIP file`]
			]
		]],
		[/* method */ 'stream()', [
			[/* method description */
				[/* text */ 't', `Returns an ordered `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', ` over the ZIP file entries.

 Entries appear in the `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', ` in the order they appear in
 the central directory of the ZIP file.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if the zip file has been closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an ordered `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', ` of entries in this ZIP file`]
			]
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes the ZIP file.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Closing this ZIP file will close all of the input streams
 previously returned by invocations of the `],
					[/* reference */ 'r', `#getInputStream(java.util.zip.ZipEntry)`, `getInputStream`],
					[/* text */ 't', ` method.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'entries()', [
			[/* method description */
				[/* text */ 't', `Returns an enumeration of the ZIP file entries.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if the zip file has been closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an enumeration of the ZIP file entries`]
			]
		]],
		[/* method */ 'getInputStream(java.util.zip.ZipEntry)', [
			[/* method description */
				[/* text */ 't', `Returns an input stream for reading the contents of the specified
 zip file entry.
 `],
				[/* block */ 'b', `
 Closing this ZIP file will, in turn, close all input streams that
 have been returned by invocations of this method.`]
			],
			[/* parameters */
				[/* parameter */ 'entry', [/* parameter description */
					[/* text */ 't', `the zip file entry`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.zip.ZipException', [/* throw description */
					[/* text */ 't', `if a ZIP format error has occurred`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if the zip file has been closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the input stream for reading the contents of the specified
 zip file entry.`]
			]
		]],
		[/* method */ 'getEntry(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the zip file entry for the specified name, or null
 if not found.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the entry`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if the zip file has been closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the zip file entry, or null if not found`]
			]
		]],
		[/* method */ 'getComment()', [
			[/* method description */
				[/* text */ 't', `Returns the zip file comment, or null if none.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if the zip file has been closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the comment string for the zip file, or null if none`]
			]
		]]
	],
]);
