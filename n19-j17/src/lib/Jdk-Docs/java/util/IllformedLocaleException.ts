import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.IllformedLocaleException', [
	[/* class description */
		[/* text */ 't', `Thrown by methods in `],
		[/* reference */ 'r', `java.util.Locale`, `Locale`],
		[/* text */ 't', ` and `],
		[/* reference */ 'r', `java.util.Locale.Builder`, `Locale.Builder`],
		[/* text */ 't', ` to
 indicate that an argument is not a well-formed BCP 47 tag.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `IllformedLocaleException`],
				[/* text */ 't', ` with no
 detail message and -1 as the error index.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `IllformedLocaleException`],
				[/* text */ 't', ` with the
 given message and -1 as the error index.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the message`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `IllformedLocaleException`],
				[/* text */ 't', ` with the
 given message and the error index.  The error index is the approximate
 offset from the start of the ill-formed value to the point where the
 parse first detected an error.  A negative error index value indicates
 either the error index is not applicable or unknown.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the message`]
				]],
				[/* parameter */ 'errorIndex', [/* parameter description */
					[/* text */ 't', `the index`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getErrorIndex()', [
			[/* method description */
				[/* text */ 't', `Returns the index where the error was found. A negative value indicates
 either the error index is not applicable or unknown.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the error index`]
			]
		]]
	],
]);
