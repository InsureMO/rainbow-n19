import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.UTFDataFormatException', [
	[/* class description */
		[/* text */ 't', `Signals that a malformed string in
 `],
		[/* reference */ 'r', `java.io.DataInput#modified-utf-8`, `modified UTF-8`],
		[/* text */ 't', `
 format has been read in a data
 input stream or by any class that implements the data input
 interface.
 See the
 `],
		[/* reference */ 'r', `java.io.DataInput#modified-utf-8`, `DataInput`],
		[/* text */ 't', `
 class description for the format in
 which modified UTF-8 strings are read and written.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `UTFDataFormatException`],
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
				[/* inline code block */ 'i', `UTFDataFormatException`],
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
