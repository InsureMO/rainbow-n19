import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.FileNotFoundException', [
	[/* class description */
		[/* text */ 't', `Signals that an attempt to open the file denoted by a specified pathname
 has failed.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` This exception will be thrown by the `],
			[/* reference */ 'r', `java.io.FileInputStream`, `FileInputStream`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.io.FileOutputStream`, `FileOutputStream`],
			[/* text */ 't', `, and `],
			[/* reference */ 'r', `java.io.RandomAccessFile`, `RandomAccessFile`],
			[/* text */ 't', ` constructors when a file
 with the specified pathname does not exist.  It will also be thrown by these
 constructors if the file does exist but for some reason is inaccessible, for
 example when an attempt is made to open a read-only file for writing.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `FileNotFoundException`],
				[/* text */ 't', ` with
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` as its error detail message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `FileNotFoundException`],
				[/* text */ 't', ` with the
 specified detail message. The string `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', ` can be
 retrieved later by the
 `],
				[/* reference */ 'r', `java.lang.Throwable#getMessage()`, `Throwable.getMessage()`],
				[/* text */ 't', `
 method of class `],
				[/* inline code block */ 'i', `java.lang.Throwable`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detail message.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
