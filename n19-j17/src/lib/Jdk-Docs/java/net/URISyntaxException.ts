import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.net.URISyntaxException', [
	[/* class description */
		[/* text */ 't', `Checked exception thrown to indicate that a string could not be parsed as a
 URI reference.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,java.lang.String,int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an instance from the given input string, reason, and error
 index.`]
			],
			[/* parameters */
				[/* parameter */ 'input', [/* parameter description */
					[/* text */ 't', `The input string`]
				]],
				[/* parameter */ 'reason', [/* parameter description */
					[/* text */ 't', `A string explaining why the input could not be parsed`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index at which the parse error occurred,
                 or `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', ` if the index is not known`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If either the input or reason strings are `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the error index is less than `],
					[/* inline code block */ 'i', `-1`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an instance from the given input string and reason.  The
 resulting object will have an error index of `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'input', [/* parameter description */
					[/* text */ 't', `The input string`]
				]],
				[/* parameter */ 'reason', [/* parameter description */
					[/* text */ 't', `A string explaining why the input could not be parsed`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If either the input or reason strings are `],
					[/* inline code block */ 'i', `null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'getMessage()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing the parse error.  The resulting string
 consists of the reason string followed by a colon character
 (`],
				[/* inline code block */ 'i', `':'`],
				[/* text */ 't', `), a space, and the input string.  If the error index is
 defined then the string `],
				[/* inline code block */ 'i', `" at index "`],
				[/* text */ 't', ` followed by the index, in
 decimal, is inserted after the reason string and before the colon
 character.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A string describing the parse error`]
			]
		]],
		[/* method */ 'getIndex()', [
			[/* method description */
				[/* text */ 't', `Returns an index into the input string of the position at which the
 parse error occurred, or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if this position is not known.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The error index`]
			]
		]],
		[/* method */ 'getReason()', [
			[/* method description */
				[/* text */ 't', `Returns a string explaining why the input string could not be parsed.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The reason string`]
			]
		]],
		[/* method */ 'getInput()', [
			[/* method description */
				[/* text */ 't', `Returns the input string.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The input string`]
			]
		]]
	],
]);
