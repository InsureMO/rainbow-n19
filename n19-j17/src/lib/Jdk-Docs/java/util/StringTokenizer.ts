import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.StringTokenizer', [
	[/* class description */
		[/* text */ 't', `The string tokenizer class allows an application to break a
 string into tokens. The tokenization method is much simpler than
 the one used by the `],
		[/* inline code block */ 'i', `StreamTokenizer`],
		[/* text */ 't', ` class. The
 `],
		[/* inline code block */ 'i', `StringTokenizer`],
		[/* text */ 't', ` methods do not distinguish among
 identifiers, numbers, and quoted strings, nor do they recognize
 and skip comments.
 `],
		[/* block */ 'b', `
 The set of delimiters (the characters that separate tokens) may
 be specified either at creation time or on a per-token basis.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 An instance of `],
			[/* inline code block */ 'i', `StringTokenizer`],
			[/* text */ 't', ` behaves in one of two
 ways, depending on whether it was created with the
 `],
			[/* inline code block */ 'i', `returnDelims`],
			[/* text */ 't', ` flag having the value `],
			[/* inline code block */ 'i', `true`],
			[/* text */ 't', `
 or `],
			[/* inline code block */ 'i', `false`],
			[/* text */ 't', `:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `If the flag is `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `, delimiter characters serve to
     separate tokens. A token is a maximal sequence of consecutive
     characters that are not delimiters.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `If the flag is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `, delimiter characters are themselves
     considered to be tokens. A token is thus either one delimiter
     character, or a maximal sequence of consecutive characters that are
     not delimiters.
 `]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 A `],
			[/* inline code block */ 'i', `StringTokenizer`],
			[/* text */ 't', ` object internally maintains a current
 position within the string to be tokenized. Some operations advance this
 current position past the characters processed.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 A token is returned by taking a substring of the string that was used to
 create the `],
			[/* inline code block */ 'i', `StringTokenizer`],
			[/* text */ 't', ` object.
 `]
		]],
		[/* block */ 'b', `
 The following is one example of the use of the tokenizer. The code:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', `     StringTokenizer st = new StringTokenizer("this is a test");
     while (st.hasMoreTokens()) {
         System.out.println(st.nextToken());
     }
 `]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 prints the following output:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', `     this
     is
     a
     test
 `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* inline code block */ 'i', `StringTokenizer`],
			[/* text */ 't', ` is a legacy class that is retained for
 compatibility reasons although its use is discouraged in new code. It is
 recommended that anyone seeking this functionality use the `],
			[/* inline code block */ 'i', `split`],
			[/* text */ 't', `
 method of `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` or the java.util.regex package instead.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The following example illustrates how the `],
			[/* inline code block */ 'i', `String.split`],
			[/* text */ 't', `
 method can be used to break up a string into its basic tokens:
 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', `     String[] result = "this is a test".split("\\\\s");
     for (int x=0; x<result.length; x++)
         System.out.println(result[x]);
 `]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 prints the following output:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', `     this
     is
     a
     test
 `]
		]],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a string tokenizer for the specified string. The
 tokenizer uses the default delimiter set, which is
 `],
				[/* inline code block */ 'i', `" \\t\\n\\r\\f"`],
				[/* text */ 't', `: the space character,
 the tab character, the newline character, the carriage-return character,
 and the form-feed character. Delimiter characters themselves will
 not be treated as tokens.`]
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `a string to be parsed.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if str is `],
					[/* inline code block */ 'i', `null`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a string tokenizer for the specified string. The
 characters in the `],
				[/* inline code block */ 'i', `delim`],
				[/* text */ 't', ` argument are the delimiters
 for separating tokens. Delimiter characters themselves will not
 be treated as tokens.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that if `],
					[/* inline code block */ 'i', `delim`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, this constructor does
 not throw an exception. However, trying to invoke other methods on the
 resulting `],
					[/* inline code block */ 'i', `StringTokenizer`],
					[/* text */ 't', ` may result in a
 `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `a string to be parsed.`]
				]],
				[/* parameter */ 'delim', [/* parameter description */
					[/* text */ 't', `the delimiters.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if str is `],
					[/* inline code block */ 'i', `null`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.String,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a string tokenizer for the specified string. All
 characters in the `],
				[/* inline code block */ 'i', `delim`],
				[/* text */ 't', ` argument are the delimiters
 for separating tokens.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the `],
					[/* inline code block */ 'i', `returnDelims`],
					[/* text */ 't', ` flag is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, then
 the delimiter characters are also returned as tokens. Each
 delimiter is returned as a string of length one. If the flag is
 `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `, the delimiter characters are skipped and only
 serve as separators between tokens.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that if `],
					[/* inline code block */ 'i', `delim`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, this constructor does
 not throw an exception. However, trying to invoke other methods on the
 resulting `],
					[/* inline code block */ 'i', `StringTokenizer`],
					[/* text */ 't', ` may result in a
 `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `a string to be parsed.`]
				]],
				[/* parameter */ 'delim', [/* parameter description */
					[/* text */ 't', `the delimiters.`]
				]],
				[/* parameter */ 'returnDelims', [/* parameter description */
					[/* text */ 't', `flag indicating whether to return the delimiters
                         as tokens.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if str is `],
					[/* inline code block */ 'i', `null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'hasMoreElements()', [
			[/* method description */
				[/* text */ 't', `Returns the same value as the `],
				[/* inline code block */ 'i', `hasMoreTokens`],
				[/* text */ 't', `
 method. It exists so that this class can implement the
 `],
				[/* inline code block */ 'i', `Enumeration`],
				[/* text */ 't', ` interface.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if there are more tokens;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'hasMoreTokens()', [
			[/* method description */
				[/* text */ 't', `Tests if there are more tokens available from this tokenizer's string.
 If this method returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `, then a subsequent call to
 `],
				[/* inline code block */ 'i', `nextToken`],
				[/* text */ 't', ` with no argument will successfully return a token.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if there is at least one token
          in the string after the current position; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `
          otherwise.`]
			]
		]],
		[/* method */ 'countTokens()', [
			[/* method description */
				[/* text */ 't', `Calculates the number of times that this tokenizer's
 `],
				[/* inline code block */ 'i', `nextToken`],
				[/* text */ 't', ` method can be called before it generates an
 exception. The current position is not advanced.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of tokens remaining in the string using the current
          delimiter set.`]
			]
		]],
		[/* method */ 'nextElement()', [
			[/* method description */
				[/* text */ 't', `Returns the same value as the `],
				[/* inline code block */ 'i', `nextToken`],
				[/* text */ 't', ` method,
 except that its declared return value is `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` rather than
 `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `. It exists so that this class can implement the
 `],
				[/* inline code block */ 'i', `Enumeration`],
				[/* text */ 't', ` interface.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if there are no more tokens in this
               tokenizer's string.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next token in the string.`]
			]
		]],
		[/* method */ 'nextToken()', [
			[/* method description */
				[/* text */ 't', `Returns the next token from this string tokenizer.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if there are no more tokens in this
               tokenizer's string.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next token from this string tokenizer.`]
			]
		]],
		[/* method */ 'nextToken(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the next token in this string tokenizer's string. First,
 the set of characters considered to be delimiters by this
 `],
				[/* inline code block */ 'i', `StringTokenizer`],
				[/* text */ 't', ` object is changed to be the characters in
 the string `],
				[/* inline code block */ 'i', `delim`],
				[/* text */ 't', `. Then the next token in the string
 after the current position is returned. The current position is
 advanced beyond the recognized token.  The new delimiter set
 remains the default after this call.`]
			],
			[/* parameters */
				[/* parameter */ 'delim', [/* parameter description */
					[/* text */ 't', `the new delimiters.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if there are no more tokens in this
               tokenizer's string.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if delim is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next token, after switching to the new delimiter set.`]
			]
		]]
	],
]);
