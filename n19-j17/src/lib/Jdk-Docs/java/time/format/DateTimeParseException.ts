import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.format.DateTimeParseException', [
	[/* class description */
		[/* text */ 't', `An exception thrown when an error occurs during parsing.
 `],
		[/* block */ 'b', `
 This exception includes the text being parsed and the error index.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,java.lang.CharSequence,int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new exception with the specified message.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the message to use for this exception, may be null`]
				]],
				[/* parameter */ 'parsedData', [/* parameter description */
					[/* text */ 't', `the parsed text, should not be null`]
				]],
				[/* parameter */ 'errorIndex', [/* parameter description */
					[/* text */ 't', `the index in the parsed string that was invalid, should be a valid index`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.CharSequence,int,java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new exception with the specified message and cause.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the message to use for this exception, may be null`]
				]],
				[/* parameter */ 'parsedData', [/* parameter description */
					[/* text */ 't', `the parsed text, should not be null`]
				]],
				[/* parameter */ 'errorIndex', [/* parameter description */
					[/* text */ 't', `the index in the parsed string that was invalid, should be a valid index`]
				]],
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause exception, may be null`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getErrorIndex()', [
			[/* method description */
				[/* text */ 't', `Returns the index where the error was found.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index in the parsed string that was invalid, should be a valid index`]
			]
		]],
		[/* method */ 'getParsedString()', [
			[/* method description */
				[/* text */ 't', `Returns the string that was being parsed.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the string that was being parsed, should not be null.`]
			]
		]]
	],
]);
