import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.StreamTokenizer', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* inline code block */ 'i', `StreamTokenizer`],
		[/* text */ 't', ` class takes an input stream and
 parses it into "tokens", allowing the tokens to be
 read one at a time. The parsing process is controlled by a table
 and a number of flags that can be set to various states. The
 stream tokenizer can recognize identifiers, numbers, quoted
 strings, and various comment styles.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Each byte read from the input stream is regarded as a character
 in the range `],
			[/* inline code block */ 'i', `'\\u0000'`],
			[/* text */ 't', ` through `],
			[/* inline code block */ 'i', `'\\u00FF'`],
			[/* text */ 't', `.
 The character value is used to look up five possible attributes of
 the character: `],
			[/* text */ 't', `white space`],
			[/* text */ 't', `, `],
			[/* text */ 't', `alphabetic`],
			[/* text */ 't', `,
 `],
			[/* text */ 't', `numeric`],
			[/* text */ 't', `, `],
			[/* text */ 't', `string quote`],
			[/* text */ 't', `, and `],
			[/* text */ 't', `comment character`],
			[/* text */ 't', `.
 Each character can have zero or more of these attributes.
 `]
		]],
		[/* block */ 'b', `
 In addition, an instance has four flags. These flags indicate:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', `Whether line terminators are to be returned as tokens or treated
     as white space that merely separates tokens.
 `],
			[/* block */ 'b', `Whether C-style comments are to be recognized and skipped.
 `],
			[/* block */ 'b', `Whether C++-style comments are to be recognized and skipped.
 `],
			[/* block */ 'b', `Whether the characters of identifiers are converted to lowercase.
 `]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 A typical application first constructs an instance of this class,
 sets up the syntax tables, and then repeatedly loops calling the
 `],
			[/* inline code block */ 'i', `nextToken`],
			[/* text */ 't', ` method in each iteration of the loop until
 it returns the value `],
			[/* inline code block */ 'i', `TT_EOF`],
			[/* text */ 't', `.`]
		]]
	],
	[/* fields */
		[/* field */ 'nval', [
			[/* field description */
				[/* text */ 't', `If the current token is a number, this field contains the value
 of that number. The current token is a number when the value of
 the `],
				[/* inline code block */ 'i', `ttype`],
				[/* text */ 't', ` field is `],
				[/* inline code block */ 'i', `TT_NUMBER`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 The initial value of this field is 0.0.`]
			],
		]],
		[/* field */ 'sval', [
			[/* field description */
				[/* text */ 't', `If the current token is a word token, this field contains a
 string giving the characters of the word token. When the current
 token is a quoted string token, this field contains the body of
 the string.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The current token is a word when the value of the
 `],
					[/* inline code block */ 'i', `ttype`],
					[/* text */ 't', ` field is `],
					[/* inline code block */ 'i', `TT_WORD`],
					[/* text */ 't', `. The current token is
 a quoted string token when the value of the `],
					[/* inline code block */ 'i', `ttype`],
					[/* text */ 't', ` field is
 a quote character.
 `]
				]],
				[/* block */ 'b', `
 The initial value of this field is null.`]
			],
		]],
		[/* field */ 'TT_EOF', [
			[/* field description */
				[/* text */ 't', `A constant indicating that the end of the stream has been read.`]
			],
		]],
		[/* field */ 'TT_EOL', [
			[/* field description */
				[/* text */ 't', `A constant indicating that the end of the line has been read.`]
			],
		]],
		[/* field */ 'TT_NUMBER', [
			[/* field description */
				[/* text */ 't', `A constant indicating that a number token has been read.`]
			],
		]],
		[/* field */ 'TT_WORD', [
			[/* field description */
				[/* text */ 't', `A constant indicating that a word token has been read.`]
			],
		]],
		[/* field */ 'ttype', [
			[/* field description */
				[/* text */ 't', `After a call to the `],
				[/* inline code block */ 'i', `nextToken`],
				[/* text */ 't', ` method, this field
 contains the type of the token just read. For a single character
 token, its value is the single character, converted to an integer.
 For a quoted string token, its value is the quote character.
 Otherwise, its value is one of the following:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `TT_WORD`],
						[/* text */ 't', ` indicates that the token is a word.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `TT_NUMBER`],
						[/* text */ 't', ` indicates that the token is a number.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `TT_EOL`],
						[/* text */ 't', ` indicates that the end of line has been read.
     The field can only have this value if the
     `],
						[/* inline code block */ 'i', `eolIsSignificant`],
						[/* text */ 't', ` method has been called with the
     argument `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `TT_EOF`],
						[/* text */ 't', ` indicates that the end of the input stream
     has been reached.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', `
 The initial value of this field is -4.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.io.InputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates a stream tokenizer that parses the specified input
 stream. The stream tokenizer is initialized to the following
 default state:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `All byte values `],
						[/* inline code block */ 'i', `'A'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'Z'`],
						[/* text */ 't', `,
     `],
						[/* inline code block */ 'i', `'a'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'z'`],
						[/* text */ 't', `, and
     `],
						[/* inline code block */ 'i', `'\\u00A0'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'\\u00FF'`],
						[/* text */ 't', ` are
     considered to be alphabetic.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `All byte values `],
						[/* inline code block */ 'i', `'\\u0000'`],
						[/* text */ 't', ` through
     `],
						[/* inline code block */ 'i', `'\\u0020'`],
						[/* text */ 't', ` are considered to be white space.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `'/'`],
						[/* text */ 't', ` is a comment character.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Single quote `],
						[/* inline code block */ 'i', `'\\''`],
						[/* text */ 't', ` and double quote `],
						[/* inline code block */ 'i', `'"'`],
						[/* text */ 't', `
     are string quote characters.
 `]
					]],
					[/* block */ 'b', `Numbers are parsed.
 `],
					[/* block */ 'b', `Ends of lines are treated as white space, not as separate tokens.
 `],
					[/* block */ 'b', `C-style and C++-style comments are not recognized.
 `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'is', [/* parameter description */
					[/* text */ 't', `an input stream.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.Reader)', [
			[/* constructor description */
				[/* text */ 't', `Create a tokenizer that parses the given character stream.`]
			],
			[/* parameters */
				[/* parameter */ 'r', [/* parameter description */
					[/* text */ 't', `a Reader object providing the input stream.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'lineno()', [
			[/* method description */
				[/* text */ 't', `Return the current line number.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the current line number of this stream tokenizer.`]
			]
		]],
		[/* method */ 'nextToken()', [
			[/* method description */
				[/* text */ 't', `Parses the next token from the input stream of this tokenizer.
 The type of the next token is returned in the `],
				[/* inline code block */ 'i', `ttype`],
				[/* text */ 't', `
 field. Additional information about the token may be in the
 `],
				[/* inline code block */ 'i', `nval`],
				[/* text */ 't', ` field or the `],
				[/* inline code block */ 'i', `sval`],
				[/* text */ 't', ` field of this
 tokenizer.
 `],
				[/* block */ 'b', `
 Typical clients of this
 class first set up the syntax tables and then sit in a loop
 calling nextToken to parse successive tokens until TT_EOF
 is returned.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the `],
				[/* inline code block */ 'i', `ttype`],
				[/* text */ 't', ` field.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns the string representation of the current stream token and
 the line number it occurs on.

 `],
				[/* block */ 'b', `The precise string returned is unspecified, although the following
 example can be considered typical:

 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', `Token['a'], line 10`]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of the token`]
			]
		]],
		[/* method */ 'commentChar(int)', [
			[/* method description */
				[/* text */ 't', `Specified that the character argument starts a single-line
 comment. All characters from the comment character to the end of
 the line are ignored by this stream tokenizer.

 `],
				[/* block */ 'b', `Any other attribute settings for the specified character are cleared.`]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'eolIsSignificant(boolean)', [
			[/* method description */
				[/* text */ 't', `Determines whether or not ends of line are treated as tokens.
 If the flag argument is true, this tokenizer treats end of lines
 as tokens; the `],
				[/* inline code block */ 'i', `nextToken`],
				[/* text */ 't', ` method returns
 `],
				[/* inline code block */ 'i', `TT_EOL`],
				[/* text */ 't', ` and also sets the `],
				[/* inline code block */ 'i', `ttype`],
				[/* text */ 't', ` field to
 this value when an end of line is read.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A line is a sequence of characters ending with either a
 carriage-return character (`],
					[/* inline code block */ 'i', `'\\r'`],
					[/* text */ 't', `) or a newline
 character (`],
					[/* inline code block */ 'i', `'\\n'`],
					[/* text */ 't', `). In addition, a carriage-return
 character followed immediately by a newline character is treated
 as a single end-of-line token.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the `],
					[/* inline code block */ 'i', `flag`],
					[/* text */ 't', ` is false, end-of-line characters are
 treated as white space and serve only to separate tokens.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'flag', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` indicates that end-of-line characters
                 are separate tokens; `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` indicates that
                 end-of-line characters are white space.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'lowerCaseMode(boolean)', [
			[/* method description */
				[/* text */ 't', `Determines whether or not word token are automatically lowercased.
 If the flag argument is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `, then the value in the
 `],
				[/* inline code block */ 'i', `sval`],
				[/* text */ 't', ` field is lowercased whenever a word token is
 returned (the `],
				[/* inline code block */ 'i', `ttype`],
				[/* text */ 't', ` field has the
 value `],
				[/* inline code block */ 'i', `TT_WORD`],
				[/* text */ 't', ` by the `],
				[/* inline code block */ 'i', `nextToken`],
				[/* text */ 't', ` method
 of this tokenizer.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the flag argument is `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `, then the
 `],
					[/* inline code block */ 'i', `sval`],
					[/* text */ 't', ` field is not modified.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fl', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` indicates that all word tokens should
               be lowercased.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'ordinaryChar(int)', [
			[/* method description */
				[/* text */ 't', `Specifies that the character argument is "ordinary"
 in this tokenizer. It removes any special significance the
 character has as a comment character, word component, string
 delimiter, white space, or number character. When such a character
 is encountered by the parser, the parser treats it as a
 single-character token and sets `],
				[/* inline code block */ 'i', `ttype`],
				[/* text */ 't', ` field to the
 character value.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Making a line terminator character "ordinary" may interfere
 with the ability of a `],
					[/* inline code block */ 'i', `StreamTokenizer`],
					[/* text */ 't', ` to count
 lines. The `],
					[/* inline code block */ 'i', `lineno`],
					[/* text */ 't', ` method may no longer reflect
 the presence of such terminator characters in its line count.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'ordinaryChars(int,int)', [
			[/* method description */
				[/* text */ 't', `Specifies that all characters `],
				[/* text */ 't', `c`],
				[/* text */ 't', ` in the range
 `],
				[/* inline code block */ 'i', `low <= c <= high`],
				[/* text */ 't', `
 are "ordinary" in this tokenizer. See the
 `],
				[/* inline code block */ 'i', `ordinaryChar`],
				[/* text */ 't', ` method for more information on a
 character being ordinary.`]
			],
			[/* parameters */
				[/* parameter */ 'low', [/* parameter description */
					[/* text */ 't', `the low end of the range.`]
				]],
				[/* parameter */ 'hi', [/* parameter description */
					[/* text */ 't', `the high end of the range.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'parseNumbers()', [
			[/* method description */
				[/* text */ 't', `Specifies that numbers should be parsed by this tokenizer. The
 syntax table of this tokenizer is modified so that each of the twelve
 characters:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', `      0 1 2 3 4 5 6 7 8 9 . -
 `]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', `
 has the "numeric" attribute.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 When the parser encounters a word token that has the format of a
 double precision floating-point number, it treats the token as a
 number rather than a word, by setting the `],
					[/* inline code block */ 'i', `ttype`],
					[/* text */ 't', `
 field to the value `],
					[/* inline code block */ 'i', `TT_NUMBER`],
					[/* text */ 't', ` and putting the numeric
 value of the token into the `],
					[/* inline code block */ 'i', `nval`],
					[/* text */ 't', ` field.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'pushBack()', [
			[/* method description */
				[/* text */ 't', `Causes the next call to the `],
				[/* inline code block */ 'i', `nextToken`],
				[/* text */ 't', ` method of this
 tokenizer to return the current value in the `],
				[/* inline code block */ 'i', `ttype`],
				[/* text */ 't', `
 field, and not to modify the value in the `],
				[/* inline code block */ 'i', `nval`],
				[/* text */ 't', ` or
 `],
				[/* inline code block */ 'i', `sval`],
				[/* text */ 't', ` field.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'quoteChar(int)', [
			[/* method description */
				[/* text */ 't', `Specifies that matching pairs of this character delimit string
 constants in this tokenizer.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 When the `],
					[/* inline code block */ 'i', `nextToken`],
					[/* text */ 't', ` method encounters a string
 constant, the `],
					[/* inline code block */ 'i', `ttype`],
					[/* text */ 't', ` field is set to the string
 delimiter and the `],
					[/* inline code block */ 'i', `sval`],
					[/* text */ 't', ` field is set to the body of
 the string.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If a string quote character is encountered, then a string is
 recognized, consisting of all characters after (but not including)
 the string quote character, up to (but not including) the next
 occurrence of that same string quote character, or a line
 terminator, or end of file. The usual escape sequences such as
 `],
					[/* inline code block */ 'i', `"\\n"`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `"\\t"`],
					[/* text */ 't', ` are recognized and
 converted to single characters as the string is parsed.

 `]
				]],
				[/* block */ 'b', `Any other attribute settings for the specified character are cleared.`]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'resetSyntax()', [
			[/* method description */
				[/* text */ 't', `Resets this tokenizer's syntax table so that all characters are
 "ordinary." See the `],
				[/* inline code block */ 'i', `ordinaryChar`],
				[/* text */ 't', ` method
 for more information on a character being ordinary.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'slashSlashComments(boolean)', [
			[/* method description */
				[/* text */ 't', `Determines whether or not the tokenizer recognizes C++-style comments.
 If the flag argument is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `, this stream tokenizer
 recognizes C++-style comments. Any occurrence of two consecutive
 slash characters (`],
				[/* inline code block */ 'i', `'/'`],
				[/* text */ 't', `) is treated as the beginning of
 a comment that extends to the end of the line.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the flag argument is `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `, then C++-style
 comments are not treated specially.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'flag', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` indicates to recognize and ignore
                 C++-style comments.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'slashStarComments(boolean)', [
			[/* method description */
				[/* text */ 't', `Determines whether or not the tokenizer recognizes C-style comments.
 If the flag argument is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `, this stream tokenizer
 recognizes C-style comments. All text between successive
 occurrences of `],
				[/* inline code block */ 'i', `/*`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `*/`],
				[/* text */ 't', ` are discarded.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the flag argument is `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `, then C-style comments
 are not treated specially.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'flag', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` indicates to recognize and ignore
                 C-style comments.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'whitespaceChars(int,int)', [
			[/* method description */
				[/* text */ 't', `Specifies that all characters `],
				[/* text */ 't', `c`],
				[/* text */ 't', ` in the range
 `],
				[/* inline code block */ 'i', `low <= c <= high`],
				[/* text */ 't', `
 are white space characters. White space characters serve only to
 separate tokens in the input stream.

 `],
				[/* block */ 'b', `Any other attribute settings for the characters in the specified
 range are cleared.`]
			],
			[/* parameters */
				[/* parameter */ 'low', [/* parameter description */
					[/* text */ 't', `the low end of the range.`]
				]],
				[/* parameter */ 'hi', [/* parameter description */
					[/* text */ 't', `the high end of the range.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'wordChars(int,int)', [
			[/* method description */
				[/* text */ 't', `Specifies that all characters `],
				[/* text */ 't', `c`],
				[/* text */ 't', ` in the range
 `],
				[/* inline code block */ 'i', `low <= c <= high`],
				[/* text */ 't', `
 are word constituents. A word token consists of a word constituent
 followed by zero or more word constituents or number constituents.`]
			],
			[/* parameters */
				[/* parameter */ 'low', [/* parameter description */
					[/* text */ 't', `the low end of the range.`]
				]],
				[/* parameter */ 'hi', [/* parameter description */
					[/* text */ 't', `the high end of the range.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
