import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.regex.PatternSyntaxException', [
	[/* class description */
		[/* text */ 't', `Unchecked exception thrown to indicate a syntax error in a
 regular-expression pattern.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,java.lang.String,int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new instance of this class.`]
			],
			[/* parameters */
				[/* parameter */ 'desc', [/* parameter description */
					[/* text */ 't', `A description of the error`]
				]],
				[/* parameter */ 'regex', [/* parameter description */
					[/* text */ 't', `The erroneous pattern`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The approximate index in the pattern of the error,
         or `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', ` if the index is not known`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getIndex()', [
			[/* method description */
				[/* text */ 't', `Retrieves the error index.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The approximate index in the pattern of the error,
         or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the index is not known`]
			]
		]],
		[/* method */ 'getDescription()', [
			[/* method description */
				[/* text */ 't', `Retrieves the description of the error.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The description of the error`]
			]
		]],
		[/* method */ 'getMessage()', [
			[/* method description */
				[/* text */ 't', `Returns a multi-line string containing the description of the syntax
 error and its index, the erroneous regular-expression pattern, and a
 visual indication of the error index within the pattern.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The full detail message`]
			]
		]],
		[/* method */ 'getPattern()', [
			[/* method description */
				[/* text */ 't', `Retrieves the erroneous regular-expression pattern.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The erroneous pattern`]
			]
		]]
	],
]);
