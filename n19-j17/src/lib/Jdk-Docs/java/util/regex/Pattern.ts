import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.regex.Pattern', [
	[/* class description */
		[/* text */ 't', `A compiled representation of a regular expression.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A regular expression, specified as a string, must first be compiled into
 an instance of this class.  The resulting pattern can then be used to create
 a `],
			[/* reference */ 'r', `java.util.regex.Matcher`],
			[/* text */ 't', ` object that can match arbitrary `],
			[/* reference */ 'r', `java.lang.CharSequence`],
			[/* text */ 't', ` against the regular
 expression.  All of the state involved in performing a match resides in the
 matcher, so many matchers can share the same pattern.

 `]
		]],
		[/* block */ 'b', ` A typical invocation sequence is thus

 `],
		[/* block */ 'b', [
			[/* code block */ 'c', [
				[/* text */ 't', ` Pattern p = Pattern.`],
				[/* text */ 't', `compile`],
				[/* text */ 't', `("a*b");
 Matcher m = p.`],
				[/* text */ 't', `matcher`],
				[/* text */ 't', `("aaaaab");
 boolean b = m.`],
				[/* text */ 't', `matches`],
				[/* text */ 't', `();`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* reference */ 'r', `#matches(java.lang.String,java.lang.CharSequence)`, `matches`],
			[/* text */ 't', ` method is defined by this class as a
 convenience for when a regular expression is used just once.  This method
 compiles an expression and matches an input sequence against it in a single
 invocation.  The statement

 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', ` boolean b = Pattern.matches("a*b", "aaaaab");`]
		]],
		[/* text */ 't', `

 is equivalent to the three statements above, though for repeated matches it
 is less efficient since it does not allow the compiled pattern to be reused.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` Instances of this class are immutable and are safe for use by multiple
 concurrent threads.  Instances of the `],
			[/* reference */ 'r', `java.util.regex.Matcher`],
			[/* text */ 't', ` class are not safe for
 such use.


 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Summary of regular-expression constructs`]
		]],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Construct`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Matches`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', 2, 1, [
						[/* text */ 't', `Characters`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `x`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The character `],
						[/* text */ 't', `x`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\\\`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The backslash character`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\0`],
						[/* text */ 't', `n`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The character with octal value `],
						[/* inline code block */ 'i', `0`],
						[/* text */ 't', `n`],
						[/* text */ 't', `
         (0 `],
						[/* inline code block */ 'i', `<=`],
						[/* text */ 't', ` `],
						[/* text */ 't', `n`],
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `<=`],
						[/* text */ 't', ` 7)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\0`],
						[/* text */ 't', `nn`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The character with octal value `],
						[/* inline code block */ 'i', `0`],
						[/* text */ 't', `nn`],
						[/* text */ 't', `
         (0 `],
						[/* inline code block */ 'i', `<=`],
						[/* text */ 't', ` `],
						[/* text */ 't', `n`],
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `<=`],
						[/* text */ 't', ` 7)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\0`],
						[/* text */ 't', `mnn`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The character with octal value `],
						[/* inline code block */ 'i', `0`],
						[/* text */ 't', `mnn`],
						[/* text */ 't', `
         (0 `],
						[/* inline code block */ 'i', `<=`],
						[/* text */ 't', ` `],
						[/* text */ 't', `m`],
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `<=`],
						[/* text */ 't', ` 3,
         0 `],
						[/* inline code block */ 'i', `<=`],
						[/* text */ 't', ` `],
						[/* text */ 't', `n`],
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `<=`],
						[/* text */ 't', ` 7)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\x`],
						[/* text */ 't', `hh`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The character with hexadecimal value `],
						[/* inline code block */ 'i', `0x`],
						[/* text */ 't', `hh`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\u`],
						[/* text */ 't', `hhhh`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The character with hexadecimal value `],
						[/* inline code block */ 'i', `0x`],
						[/* text */ 't', `hhhh`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\x`],
						[/* text */ 't', `{h...h}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The character with hexadecimal value `],
						[/* inline code block */ 'i', `0x`],
						[/* text */ 't', `h...h`],
						[/* text */ 't', `
         (`],
						[/* reference */ 'r', `java.util.Character#MIN_CODE_POINT`],
						[/* text */ 't', `
          <= `],
						[/* inline code block */ 'i', `0x`],
						[/* text */ 't', `h...h`],
						[/* text */ 't', ` <= 
          `],
						[/* reference */ 'r', `java.util.Character#MAX_CODE_POINT`],
						[/* text */ 't', `)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\N{`],
						[/* text */ 't', `name`],
						[/* inline code block */ 'i', `}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The character with Unicode character name `],
						[/* text */ 't', `'name'`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\t`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The tab character (`],
						[/* inline code block */ 'i', `'\\u0009'`],
						[/* text */ 't', `)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\n`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The newline (line feed) character (`],
						[/* inline code block */ 'i', `'\\u000A'`],
						[/* text */ 't', `)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\r`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The carriage-return character (`],
						[/* inline code block */ 'i', `'\\u000D'`],
						[/* text */ 't', `)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\f`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The form-feed character (`],
						[/* inline code block */ 'i', `'\\u000C'`],
						[/* text */ 't', `)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\a`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The alert (bell) character (`],
						[/* inline code block */ 'i', `'\\u0007'`],
						[/* text */ 't', `)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\e`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The escape character (`],
						[/* inline code block */ 'i', `'\\u001B'`],
						[/* text */ 't', `)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\c`],
						[/* text */ 't', `x`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The control character corresponding to `],
						[/* text */ 't', `x`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', 2, 1, [
						[/* text */ 't', `Character classes`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `[abc]`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `a`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `b`],
						[/* text */ 't', `, or `],
						[/* inline code block */ 'i', `c`],
						[/* text */ 't', ` (simple class)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `[^abc]`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Any character except `],
						[/* inline code block */ 'i', `a`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `b`],
						[/* text */ 't', `, or `],
						[/* inline code block */ 'i', `c`],
						[/* text */ 't', ` (negation)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `[a-zA-Z]`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `a`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `z`],
						[/* text */ 't', `
         or `],
						[/* inline code block */ 'i', `A`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `Z`],
						[/* text */ 't', `, inclusive (range)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `[a-d[m-p]]`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `a`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `d`],
						[/* text */ 't', `,
      or `],
						[/* inline code block */ 'i', `m`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `p`],
						[/* text */ 't', `: `],
						[/* inline code block */ 'i', `[a-dm-p]`],
						[/* text */ 't', ` (union)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `[a-z&&[def]]`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `d`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `e`],
						[/* text */ 't', `, or `],
						[/* inline code block */ 'i', `f`],
						[/* text */ 't', ` (intersection)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `[a-z&&[^bc]]`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `a`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `z`],
						[/* text */ 't', `,
         except for `],
						[/* inline code block */ 'i', `b`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `c`],
						[/* text */ 't', `: `],
						[/* inline code block */ 'i', `[ad-z]`],
						[/* text */ 't', ` (subtraction)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `[a-z&&[^m-p]]`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `a`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `z`],
						[/* text */ 't', `,
          and not `],
						[/* inline code block */ 'i', `m`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `p`],
						[/* text */ 't', `: `],
						[/* inline code block */ 'i', `[a-lq-z]`],
						[/* text */ 't', `(subtraction)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', 2, 1, [
						[/* text */ 't', `Predefined character classes`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `.`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Any character (may or may not match `],
						[/* text */ 't', `line terminators`],
						[/* text */ 't', `)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\d`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A digit: `],
						[/* inline code block */ 'i', `[0-9]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\D`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A non-digit: `],
						[/* inline code block */ 'i', `[^0-9]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\h`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A horizontal whitespace character:
     `],
						[/* inline code block */ 'i', `[ \\t\\xA0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\H`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A non-horizontal whitespace character: `],
						[/* inline code block */ 'i', `[^\\h]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\s`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A whitespace character: `],
						[/* inline code block */ 'i', `[ \\t\\n\\x0B\\f\\r]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\S`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A non-whitespace character: `],
						[/* inline code block */ 'i', `[^\\s]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\v`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A vertical whitespace character: `],
						[/* inline code block */ 'i', `[\\n\\x0B\\f\\r\\x85\\u2028\\u2029]`],
						[/* text */ 't', `
     `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\V`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A non-vertical whitespace character: `],
						[/* inline code block */ 'i', `[^\\v]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\w`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A word character: `],
						[/* inline code block */ 'i', `[a-zA-Z_0-9]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\W`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A non-word character: `],
						[/* inline code block */ 'i', `[^\\w]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', 2, 1, [
						[/* text */ 't', `POSIX character classes (US-ASCII only)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{Lower}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A lower-case alphabetic character: `],
						[/* inline code block */ 'i', `[a-z]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{Upper}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `An upper-case alphabetic character:`],
						[/* inline code block */ 'i', `[A-Z]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{ASCII}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `All ASCII:`],
						[/* inline code block */ 'i', `[\\x00-\\x7F]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{Alpha}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `An alphabetic character:`],
						[/* inline code block */ 'i', `[\\p{Lower}\\p{Upper}]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{Digit}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A decimal digit: `],
						[/* inline code block */ 'i', `[0-9]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{Alnum}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `An alphanumeric character:`],
						[/* inline code block */ 'i', `[\\p{Alpha}\\p{Digit}]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{Punct}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Punctuation: One of `],
						[/* inline code block */ 'i', `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{Graph}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A visible character: `],
						[/* inline code block */ 'i', `[\\p{Alnum}\\p{Punct}]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{Print}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A printable character: `],
						[/* inline code block */ 'i', `[\\p{Graph}\\x20]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{Blank}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A space or a tab: `],
						[/* inline code block */ 'i', `[ \\t]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{Cntrl}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A control character: `],
						[/* inline code block */ 'i', `[\\x00-\\x1F\\x7F]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{XDigit}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A hexadecimal digit: `],
						[/* inline code block */ 'i', `[0-9a-fA-F]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{Space}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A whitespace character: `],
						[/* inline code block */ 'i', `[ \\t\\n\\x0B\\f\\r]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', 2, 1, [
						[/* text */ 't', `java.lang.Character classes (simple `],
						[/* text */ 't', `java character type`],
						[/* text */ 't', `)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{javaLowerCase}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Equivalent to java.lang.Character.isLowerCase()`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{javaUpperCase}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Equivalent to java.lang.Character.isUpperCase()`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{javaWhitespace}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Equivalent to java.lang.Character.isWhitespace()`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{javaMirrored}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Equivalent to java.lang.Character.isMirrored()`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', 2, 1, [
						[/* text */ 't', `Classes for Unicode scripts, blocks, categories and binary properties`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{IsLatin}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A Latin script character (`],
						[/* text */ 't', `script`],
						[/* text */ 't', `)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{InGreek}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A character in the Greek block (`],
						[/* text */ 't', `block`],
						[/* text */ 't', `)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{Lu}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `An uppercase letter (`],
						[/* text */ 't', `category`],
						[/* text */ 't', `)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{IsAlphabetic}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `An alphabetic character (`],
						[/* text */ 't', `binary property`],
						[/* text */ 't', `)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{Sc}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A currency symbol`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\P{InGreek}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Any character except one in the Greek block (negation)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `[\\p{L}&&[^\\p{Lu}]]`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Any letter except an uppercase letter (subtraction)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', 2, 1, [
						[/* text */ 't', `Boundary matchers`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `^`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The beginning of a line`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `$`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The end of a line`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\b`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A word boundary`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\b{g}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A Unicode extended grapheme cluster boundary`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\B`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A non-word boundary`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\A`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The beginning of the input`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\G`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The end of the previous match`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\Z`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The end of the input but for the final
         `],
						[/* text */ 't', `terminator`],
						[/* text */ 't', `, if any`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\z`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `The end of the input`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', 2, 1, [
						[/* text */ 't', `Linebreak matcher`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\R`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Any Unicode linebreak sequence, is equivalent to
     `],
						[/* inline code block */ 'i', `\\u000D\\u000A|[\\u000A\\u000B\\u000C\\u000D\\u0085\\u2028\\u2029]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', 2, 1, [
						[/* text */ 't', `Unicode Extended Grapheme matcher`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\X`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Any Unicode extended grapheme cluster`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', 2, 1, [
						[/* text */ 't', `Greedy quantifiers`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `?`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, once or not at all`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `*`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, zero or more times`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `+`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, one or more times`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `{`],
						[/* text */ 't', `n`],
						[/* inline code block */ 'i', `}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, exactly `],
						[/* text */ 't', `n`],
						[/* text */ 't', ` times`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `{`],
						[/* text */ 't', `n`],
						[/* inline code block */ 'i', `,`],
						[/* text */ 't', `}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, at least `],
						[/* text */ 't', `n`],
						[/* text */ 't', ` times`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `{`],
						[/* text */ 't', `n`],
						[/* inline code block */ 'i', `,`],
						[/* text */ 't', `m`],
						[/* inline code block */ 'i', `}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, at least `],
						[/* text */ 't', `n`],
						[/* text */ 't', ` but not more than `],
						[/* text */ 't', `m`],
						[/* text */ 't', ` times`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', 2, 1, [
						[/* text */ 't', `Reluctant quantifiers`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `??`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, once or not at all`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `*?`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, zero or more times`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `+?`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, one or more times`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `{`],
						[/* text */ 't', `n`],
						[/* inline code block */ 'i', `}?`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, exactly `],
						[/* text */ 't', `n`],
						[/* text */ 't', ` times`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `{`],
						[/* text */ 't', `n`],
						[/* inline code block */ 'i', `,}?`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, at least `],
						[/* text */ 't', `n`],
						[/* text */ 't', ` times`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `{`],
						[/* text */ 't', `n`],
						[/* inline code block */ 'i', `,`],
						[/* text */ 't', `m`],
						[/* inline code block */ 'i', `}?`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, at least `],
						[/* text */ 't', `n`],
						[/* text */ 't', ` but not more than `],
						[/* text */ 't', `m`],
						[/* text */ 't', ` times`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', 2, 1, [
						[/* text */ 't', `Possessive quantifiers`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `?+`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, once or not at all`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `*+`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, zero or more times`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `++`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, one or more times`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `{`],
						[/* text */ 't', `n`],
						[/* inline code block */ 'i', `}+`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, exactly `],
						[/* text */ 't', `n`],
						[/* text */ 't', ` times`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `{`],
						[/* text */ 't', `n`],
						[/* inline code block */ 'i', `,}+`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, at least `],
						[/* text */ 't', `n`],
						[/* text */ 't', ` times`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `{`],
						[/* text */ 't', `n`],
						[/* inline code block */ 'i', `,`],
						[/* text */ 't', `m`],
						[/* inline code block */ 'i', `}+`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, at least `],
						[/* text */ 't', `n`],
						[/* text */ 't', ` but not more than `],
						[/* text */ 't', `m`],
						[/* text */ 't', ` times`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', 2, 1, [
						[/* text */ 't', `Logical operators`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `XY`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', ` followed by `],
						[/* text */ 't', `Y`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `|`],
						[/* text */ 't', `Y`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Either `],
						[/* text */ 't', `X`],
						[/* text */ 't', ` or `],
						[/* text */ 't', `Y`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `(`],
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `)`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X, as a `],
						[/* text */ 't', `capturing group`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', 2, 1, [
						[/* text */ 't', `Back references`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\`],
						[/* text */ 't', `n`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Whatever the `],
						[/* text */ 't', `n`],
						[/* text */ 't', `th`, 'sup'],
						[/* text */ 't', `
     `],
						[/* text */ 't', `capturing group`],
						[/* text */ 't', ` matched`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\`],
						[/* text */ 't', `k`],
						[/* text */ 't', `<`],
						[/* text */ 't', `name`],
						[/* text */ 't', `>`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Whatever the
     `],
						[/* text */ 't', `named-capturing group`],
						[/* text */ 't', ` "name" matched`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', 2, 1, [
						[/* text */ 't', `Quotation`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Nothing, but quotes the following character`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\Q`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Nothing, but quotes all characters until `],
						[/* inline code block */ 'i', `\\E`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\E`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Nothing, but ends quoting started by `],
						[/* inline code block */ 'i', `\\Q`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', 2, 1, [
						[/* text */ 't', `Special constructs (named-capturing and non-capturing)`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `(?<name>`],
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `)`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, as a named-capturing group`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `(?:`],
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `)`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, as a non-capturing group`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `(?idmsuxU-idmsuxU)`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Nothing, but turns match flags `],
						[/* text */ 't', `i`],
						[/* text */ 't', `
 `],
						[/* text */ 't', `d`],
						[/* text */ 't', ` `],
						[/* text */ 't', `m`],
						[/* text */ 't', ` `],
						[/* text */ 't', `s`],
						[/* text */ 't', `
 `],
						[/* text */ 't', `u`],
						[/* text */ 't', ` `],
						[/* text */ 't', `x`],
						[/* text */ 't', ` `],
						[/* text */ 't', `U`],
						[/* text */ 't', `
 on - off`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `(?idmsuxU-idmsuxU:`],
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `)`],
						[/* text */ 't', `  `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, as a `],
						[/* text */ 't', `non-capturing group`],
						[/* text */ 't', ` with the
         given flags `],
						[/* text */ 't', `i`],
						[/* text */ 't', ` `],
						[/* text */ 't', `d`],
						[/* text */ 't', `
 `],
						[/* text */ 't', `m`],
						[/* text */ 't', ` `],
						[/* text */ 't', `s`],
						[/* text */ 't', ` `],
						[/* text */ 't', `u`],
						[/* text */ 't', `
 `],
						[/* text */ 't', `x`],
						[/* text */ 't', ` `],
						[/* text */ 't', `U`],
						[/* text */ 't', ` on - off`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `(?=`],
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `)`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, via zero-width positive lookahead`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `(?!`],
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `)`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, via zero-width negative lookahead`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `(?<=`],
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `)`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, via zero-width positive lookbehind`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `(?<!`],
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `)`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, via zero-width negative lookbehind`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `(?>`],
						[/* text */ 't', `X`],
						[/* inline code block */ 'i', `)`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `X`],
						[/* text */ 't', `, as an independent, non-capturing group`]
					]]
				]]
			]],
		],
		[/* new line */ 'n'],
		[/* block */ 'b', [
			[/* text */ 't', `Backslashes, escapes, and quoting`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The backslash character (`],
			[/* inline code block */ 'i', `'\\'`],
			[/* text */ 't', `) serves to introduce escaped
 constructs, as defined in the table above, as well as to quote characters
 that otherwise would be interpreted as unescaped constructs.  Thus the
 expression `],
			[/* inline code block */ 'i', `\\\\`],
			[/* text */ 't', ` matches a single backslash and `],
			[/* inline code block */ 'i', `\\{`],
			[/* text */ 't', ` matches a
 left brace.

 `]
		]],
		[/* block */ 'b', ` It is an error to use a backslash prior to any alphabetic character that
 does not denote an escaped construct; these are reserved for future
 extensions to the regular-expression language.  A backslash may be used
 prior to a non-alphabetic character regardless of whether that character is
 part of an unescaped construct.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Backslashes within string literals in Java source code are interpreted
 as required by
 `],
			[/* text */ 't', `The Java Language Specification`],
			[/* text */ 't', `
 as either Unicode escapes (section `],
			[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-3.html#jls-3.3`, `3.3`],
			[/* text */ 't', `) or other character escapes (section `],
			[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-3.html#jls-3.10.6`, `3.10.6`],
			[/* text */ 't', `)
 It is therefore necessary to double backslashes in string
 literals that represent regular expressions to protect them from
 interpretation by the Java bytecode compiler.  The string literal
 `],
			[/* inline code block */ 'i', `"\\b"`],
			[/* text */ 't', `, for example, matches a single backspace character when
 interpreted as a regular expression, while `],
			[/* inline code block */ 'i', `"\\\\b"`],
			[/* text */ 't', ` matches a
 word boundary.  The string literal `],
			[/* inline code block */ 'i', `"\\(hello\\)"`],
			[/* text */ 't', ` is illegal
 and leads to a compile-time error; in order to match the string
 `],
			[/* inline code block */ 'i', `(hello)`],
			[/* text */ 't', ` the string literal `],
			[/* inline code block */ 'i', `"\\\\(hello\\\\)"`],
			[/* text */ 't', `
 must be used.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Character Classes`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Character classes may appear within other character classes, and
    may be composed by the union operator (implicit) and the intersection
    operator (`],
			[/* inline code block */ 'i', `&&`],
			[/* text */ 't', `).
    The union operator denotes a class that contains every character that is
    in at least one of its operand classes.  The intersection operator
    denotes a class that contains every character that is in both of its
    operand classes.

    `]
		]],
		[/* block */ 'b', ` The precedence of character-class operators is as follows, from
    highest to lowest:

    `],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Precedence`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Name`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Example
      `]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `1`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Literal escape    `]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `\\x`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `2`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Grouping`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `[...]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `3`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Range`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `a-z`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `4`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Union`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `[a-e][i-u]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `5`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Intersection`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `[a-z&&[aeiou]]`]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` Note that a different set of metacharacters are in effect inside
    a character class than outside a character class. For instance, the
    regular expression `],
			[/* inline code block */ 'i', `.`],
			[/* text */ 't', ` loses its special meaning inside a
    character class, while the expression `],
			[/* inline code block */ 'i', `-`],
			[/* text */ 't', ` becomes a range
    forming metacharacter.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Line terminators`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* text */ 't', `line terminator`],
			[/* text */ 't', ` is a one- or two-character sequence that marks
 the end of a line of the input character sequence.  The following are
 recognized as line terminators:

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', ` A newline (line feed) character (`],
				[/* inline code block */ 'i', `'\\n'`],
				[/* text */ 't', `),

   `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` A carriage-return character followed immediately by a newline
   character (`],
				[/* inline code block */ 'i', `"\\r\\n"`],
				[/* text */ 't', `),

   `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` A standalone carriage-return character (`],
				[/* inline code block */ 'i', `'\\r'`],
				[/* text */ 't', `),

   `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` A next-line character (`],
				[/* inline code block */ 'i', `'\\u0085'`],
				[/* text */ 't', `),

   `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` A line-separator character (`],
				[/* inline code block */ 'i', `'\\u2028'`],
				[/* text */ 't', `), or

   `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` A paragraph-separator character (`],
				[/* inline code block */ 'i', `'\\u2029'`],
				[/* text */ 't', `).

 `]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `If `],
			[/* text */ 't', `UNIX_LINES`],
			[/* text */ 't', ` mode is activated, then the only line terminators
 recognized are newline characters.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The regular expression `],
			[/* inline code block */ 'i', `.`],
			[/* text */ 't', ` matches any character except a line
 terminator unless the `],
			[/* text */ 't', `DOTALL`],
			[/* text */ 't', ` flag is specified.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` By default, the regular expressions `],
			[/* inline code block */ 'i', `^`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `$`],
			[/* text */ 't', ` ignore
 line terminators and only match at the beginning and the end, respectively,
 of the entire input sequence. If `],
			[/* text */ 't', `MULTILINE`],
			[/* text */ 't', ` mode is activated then
 `],
			[/* inline code block */ 'i', `^`],
			[/* text */ 't', ` matches at the beginning of input and after any line terminator
 except at the end of input. When in `],
			[/* text */ 't', `MULTILINE`],
			[/* text */ 't', ` mode `],
			[/* inline code block */ 'i', `$`],
			[/* text */ 't', `
 matches just before a line terminator or the end of the input sequence.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Groups and capturing`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Group number`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Capturing groups are numbered by counting their opening parentheses from
 left to right.  In the expression `],
			[/* inline code block */ 'i', `((A)(B(C)))`],
			[/* text */ 't', `, for example, there
 are four such groups: `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* inline code block */ 'i', `((A)(B(C)))`]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `(A)`]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `(B(C))`]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `(C)`]
			]]
		]],
		[/* block */ 'b', ` Group zero always stands for the entire expression.

 `],
		[/* block */ 'b', ` Capturing groups are so named because, during a match, each subsequence
 of the input sequence that matches such a group is saved.  The captured
 subsequence may be used later in the expression, via a back reference, and
 may also be retrieved from the matcher once the match operation is complete.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Group name`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A capturing group can also be assigned a "name", a `],
			[/* inline code block */ 'i', `named-capturing group`],
			[/* text */ 't', `,
 and then be back-referenced later by the "name". Group names are composed of
 the following characters. The first character must be a `],
			[/* inline code block */ 'i', `letter`],
			[/* text */ 't', `.

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', ` The uppercase letters `],
				[/* inline code block */ 'i', `'A'`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `'Z'`],
				[/* text */ 't', `
        (`],
				[/* inline code block */ 'i', `'\\u0041'`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `'\\u005a'`],
				[/* text */ 't', `),
   `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` The lowercase letters `],
				[/* inline code block */ 'i', `'a'`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `'z'`],
				[/* text */ 't', `
        (`],
				[/* inline code block */ 'i', `'\\u0061'`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `'\\u007a'`],
				[/* text */ 't', `),
   `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` The digits `],
				[/* inline code block */ 'i', `'0'`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `'9'`],
				[/* text */ 't', `
        (`],
				[/* inline code block */ 'i', `'\\u0030'`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `'\\u0039'`],
				[/* text */ 't', `),
 `]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* inline code block */ 'i', `named-capturing group`],
			[/* text */ 't', ` is still numbered as described in
 `],
			[/* text */ 't', `Group number`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The captured input associated with a group is always the subsequence
 that the group most recently matched.  If a group is evaluated a second time
 because of quantification then its previously-captured value, if any, will
 be retained if the second evaluation fails.  Matching the string
 `],
			[/* inline code block */ 'i', `"aba"`],
			[/* text */ 't', ` against the expression `],
			[/* inline code block */ 'i', `(a(b)?)+`],
			[/* text */ 't', `, for example, leaves
 group two set to `],
			[/* inline code block */ 'i', `"b"`],
			[/* text */ 't', `.  All captured input is discarded at the
 beginning of each match.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Groups beginning with `],
			[/* inline code block */ 'i', `(?`],
			[/* text */ 't', ` are either pure, `],
			[/* text */ 't', `non-capturing`],
			[/* text */ 't', ` groups
 that do not capture text and do not count towards the group total, or
 `],
			[/* text */ 't', `named-capturing`],
			[/* text */ 't', ` group.

 `]
		]],
		[/* block */ 'b', ` Unicode support `],
		[/* block */ 'b', [
			[/* text */ 't', ` This class is in conformance with Level 1 of `],
			[/* external link */ 'a', `http://www.unicode.org/reports/tr18/`, `Unicode Technical Standard #18: Unicode Regular Expressions`],
			[/* text */ 't', `, plus RL2.1
 Canonical Equivalents and RL2.2 Extended Grapheme Clusters.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Unicode escape sequences`],
			[/* text */ 't', ` such as `],
			[/* inline code block */ 'i', `\\u2014`],
			[/* text */ 't', ` in Java source code
 are processed as described in section `],
			[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-3.html#jls-3.3`, `3.3`],
			[/* text */ 't', ` of
 `],
			[/* text */ 't', `The Java Language Specification`],
			[/* text */ 't', `.
 Such escape sequences are also implemented directly by the regular-expression
 parser so that Unicode escapes can be used in expressions that are read from
 files or from the keyboard.  Thus the strings `],
			[/* inline code block */ 'i', `"\\u2014"`],
			[/* text */ 't', ` and
 `],
			[/* inline code block */ 'i', `"\\\\u2014"`],
			[/* text */ 't', `, while not equal, compile into the same pattern, which
 matches the character with hexadecimal value `],
			[/* inline code block */ 'i', `0x2014`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 A Unicode character can also be represented by using its `],
			[/* text */ 't', `Hex notation`],
			[/* text */ 't', `
 (hexadecimal code point value) directly as described in construct
 `],
			[/* inline code block */ 'i', `\\x{...}`],
			[/* text */ 't', `, for example a supplementary character U+2011F can be
 specified as `],
			[/* inline code block */ 'i', `\\x{2011F}`],
			[/* text */ 't', `, instead of two consecutive Unicode escape
 sequences of the surrogate pair `],
			[/* inline code block */ 'i', `\\uD840`],
			[/* inline code block */ 'i', `\\uDD1F`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Unicode character names`],
			[/* text */ 't', ` are supported by the named character construct
 `],
			[/* inline code block */ 'i', `\\N{`],
			[/* text */ 't', `...`],
			[/* inline code block */ 'i', `}`],
			[/* text */ 't', `, for example, `],
			[/* inline code block */ 'i', `\\N{WHITE SMILING FACE}`],
			[/* text */ 't', `
 specifies character `],
			[/* inline code block */ 'i', `\\u263A`],
			[/* text */ 't', `. The character names supported
 by this class are the valid Unicode character names matched by
 `],
			[/* reference */ 'r', `java.util.Character#codePointOf(java.lang.String)`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* external link */ 'a', `http://www.unicode.org/reports/tr18/#Default_Grapheme_Clusters`, `Unicode extended grapheme clusters`],
			[/* text */ 't', ` are supported by the grapheme
 cluster matcher `],
			[/* inline code block */ 'i', `\\X`],
			[/* text */ 't', ` and the corresponding boundary matcher `],
			[/* inline code block */ 'i', `\\b{g}`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Unicode scripts, blocks, categories and binary properties are written with
 the `],
			[/* inline code block */ 'i', `\\p`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `\\P`],
			[/* text */ 't', ` constructs as in Perl.
 `],
			[/* inline code block */ 'i', `\\p{`],
			[/* text */ 't', `prop`],
			[/* inline code block */ 'i', `}`],
			[/* text */ 't', ` matches if
 the input has the property `],
			[/* text */ 't', `prop`],
			[/* text */ 't', `, while `],
			[/* inline code block */ 'i', `\\P{`],
			[/* text */ 't', `prop`],
			[/* inline code block */ 'i', `}`],
			[/* text */ 't', `
 does not match if the input has that property.
 `]
		]],
		[/* block */ 'b', `
 Scripts, blocks, categories and binary properties can be used both inside
 and outside of a character class.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Scripts`],
			[/* text */ 't', ` are specified either with the prefix `],
			[/* inline code block */ 'i', `Is`],
			[/* text */ 't', `, as in
 `],
			[/* inline code block */ 'i', `IsHiragana`],
			[/* text */ 't', `, or by using  the `],
			[/* inline code block */ 'i', `script`],
			[/* text */ 't', ` keyword (or its short
 form `],
			[/* inline code block */ 'i', `sc`],
			[/* text */ 't', `) as in `],
			[/* inline code block */ 'i', `script=Hiragana`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `sc=Hiragana`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The script names supported by `],
			[/* inline code block */ 'i', `Pattern`],
			[/* text */ 't', ` are the valid script names
 accepted and defined by
 `],
			[/* reference */ 'r', `java.util.Character.UnicodeScript#forName(java.lang.String)`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Blocks`],
			[/* text */ 't', ` are specified with the prefix `],
			[/* inline code block */ 'i', `In`],
			[/* text */ 't', `, as in
 `],
			[/* inline code block */ 'i', `InMongolian`],
			[/* text */ 't', `, or by using the keyword `],
			[/* inline code block */ 'i', `block`],
			[/* text */ 't', ` (or its short
 form `],
			[/* inline code block */ 'i', `blk`],
			[/* text */ 't', `) as in `],
			[/* inline code block */ 'i', `block=Mongolian`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `blk=Mongolian`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The block names supported by `],
			[/* inline code block */ 'i', `Pattern`],
			[/* text */ 't', ` are the valid block names
 accepted and defined by
 `],
			[/* reference */ 'r', `java.util.Character.UnicodeBlock#forName(java.lang.String)`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Categories`],
			[/* text */ 't', ` may be specified with the optional prefix `],
			[/* inline code block */ 'i', `Is`],
			[/* text */ 't', `:
 Both `],
			[/* inline code block */ 'i', `\\p{L}`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `\\p{IsL}`],
			[/* text */ 't', ` denote the category of Unicode
 letters. Same as scripts and blocks, categories can also be specified
 by using the keyword `],
			[/* inline code block */ 'i', `general_category`],
			[/* text */ 't', ` (or its short form
 `],
			[/* inline code block */ 'i', `gc`],
			[/* text */ 't', `) as in `],
			[/* inline code block */ 'i', `general_category=Lu`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `gc=Lu`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The supported categories are those of
 `],
			[/* external link */ 'a', `http://www.unicode.org/standard/standard.html`, `The Unicode Standard`],
			[/* text */ 't', ` in the version specified by the
 `],
			[/* reference */ 'r', `java.lang.Character`],
			[/* text */ 't', ` class. The category names are those
 defined in the Standard, both normative and informative.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Binary properties`],
			[/* text */ 't', ` are specified with the prefix `],
			[/* inline code block */ 'i', `Is`],
			[/* text */ 't', `, as in
 `],
			[/* inline code block */ 'i', `IsAlphabetic`],
			[/* text */ 't', `. The supported binary properties by `],
			[/* inline code block */ 'i', `Pattern`],
			[/* text */ 't', `
 are
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', ` Alphabetic
   `],
			[/* block */ 'b', ` Ideographic
   `],
			[/* block */ 'b', ` Letter
   `],
			[/* block */ 'b', ` Lowercase
   `],
			[/* block */ 'b', ` Uppercase
   `],
			[/* block */ 'b', ` Titlecase
   `],
			[/* block */ 'b', ` Punctuation
   `],
			[/* block */ 'b', ` Control
   `],
			[/* block */ 'b', ` White_Space
   `],
			[/* block */ 'b', ` Digit
   `],
			[/* block */ 'b', ` Hex_Digit
   `],
			[/* block */ 'b', ` Join_Control
   `],
			[/* block */ 'b', ` Noncharacter_Code_Point
   `],
			[/* block */ 'b', ` Assigned
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 The following `],
			[/* text */ 't', `Predefined Character classes`],
			[/* text */ 't', ` and `],
			[/* text */ 't', `POSIX character classes`],
			[/* text */ 't', `
 are in conformance with the recommendation of `],
			[/* text */ 't', `Annex C: Compatibility Properties`],
			[/* text */ 't', `
 of `],
			[/* external link */ 'a', `http://www.unicode.org/reports/tr18/`, `Unicode Technical Standard #18: Unicode Regular Expressions`],
			[/* text */ 't', `, when `],
			[/* text */ 't', `UNICODE_CHARACTER_CLASS`],
			[/* text */ 't', ` flag is specified.

 `]
		]],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Classes`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Matches`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{Lower}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A lowercase character:`],
						[/* inline code block */ 'i', `\\p{IsLowercase}`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{Upper}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `An uppercase character:`],
						[/* inline code block */ 'i', `\\p{IsUppercase}`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{ASCII}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `All ASCII:`],
						[/* inline code block */ 'i', `[\\x00-\\x7F]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{Alpha}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `An alphabetic character:`],
						[/* inline code block */ 'i', `\\p{IsAlphabetic}`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{Digit}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A decimal digit character:`],
						[/* inline code block */ 'i', `\\p{IsDigit}`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{Alnum}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `An alphanumeric character:`],
						[/* inline code block */ 'i', `[\\p{IsAlphabetic}\\p{IsDigit}]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{Punct}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A punctuation character:`],
						[/* inline code block */ 'i', `\\p{IsPunctuation}`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{Graph}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A visible character: `],
						[/* inline code block */ 'i', `[^\\p{IsWhite_Space}\\p{gc=Cc}\\p{gc=Cs}\\p{gc=Cn}]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{Print}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A printable character: `],
						[/* inline code block */ 'i', `[\\p{Graph}\\p{Blank}&&[^\\p{Cntrl}]]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{Blank}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A space or a tab: `],
						[/* inline code block */ 'i', `[\\p{IsWhite_Space}&&[^\\p{gc=Zl}\\p{gc=Zp}\\x0a\\x0b\\x0c\\x0d\\x85]]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{Cntrl}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A control character: `],
						[/* inline code block */ 'i', `\\p{gc=Cc}`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{XDigit}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A hexadecimal digit: `],
						[/* inline code block */ 'i', `[\\p{gc=Nd}\\p{IsHex_Digit}]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\p{Space}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A whitespace character:`],
						[/* inline code block */ 'i', `\\p{IsWhite_Space}`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\d`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A digit: `],
						[/* inline code block */ 'i', `\\p{IsDigit}`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\D`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A non-digit: `],
						[/* inline code block */ 'i', `[^\\d]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\s`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A whitespace character: `],
						[/* inline code block */ 'i', `\\p{IsWhite_Space}`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\S`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A non-whitespace character: `],
						[/* inline code block */ 'i', `[^\\s]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\w`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A word character: `],
						[/* inline code block */ 'i', `[\\p{Alpha}\\p{gc=Mn}\\p{gc=Me}\\p{gc=Mc}\\p{Digit}\\p{gc=Pc}\\p{IsJoin_Control}]`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `\\W`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `A non-word character: `],
						[/* inline code block */ 'i', `[^\\w]`]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Categories that behave like the java.lang.Character boolean ismethodname methods (except for the deprecated ones) are available through the same \\p{prop} syntax where the specified property has the name javamethodname`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', ` Comparison to Perl 5 `],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* inline code block */ 'i', `Pattern`],
			[/* text */ 't', ` engine performs traditional NFA-based matching
 with ordered alternation as occurs in Perl 5.

 `]
		]],
		[/* block */ 'b', ` Perl constructs not supported by this class: `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` The backreference constructs, `],
					[/* inline code block */ 'i', `\\g{`],
					[/* text */ 't', `n`],
					[/* inline code block */ 'i', `}`],
					[/* text */ 't', ` for
    the `],
					[/* text */ 't', `n`],
					[/* text */ 't', `th`, 'sup'],
					[/* text */ 't', `capturing group`],
					[/* text */ 't', ` and
    `],
					[/* inline code block */ 'i', `\\g{`],
					[/* text */ 't', `name`],
					[/* inline code block */ 'i', `}`],
					[/* text */ 't', ` for
    `],
					[/* text */ 't', `named-capturing group`],
					[/* text */ 't', `.
    `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` The conditional constructs
    `],
					[/* inline code block */ 'i', `(?(`],
					[/* text */ 't', `condition`],
					[/* inline code block */ 'i', `)`],
					[/* text */ 't', `X`],
					[/* inline code block */ 'i', `)`],
					[/* text */ 't', ` and
    `],
					[/* inline code block */ 'i', `(?(`],
					[/* text */ 't', `condition`],
					[/* inline code block */ 'i', `)`],
					[/* text */ 't', `X`],
					[/* inline code block */ 'i', `|`],
					[/* text */ 't', `Y`],
					[/* inline code block */ 'i', `)`],
					[/* text */ 't', `,
    `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` The embedded code constructs `],
					[/* inline code block */ 'i', `(?{`],
					[/* text */ 't', `code`],
					[/* inline code block */ 'i', `})`],
					[/* text */ 't', `
    and `],
					[/* inline code block */ 'i', `(??{`],
					[/* text */ 't', `code`],
					[/* inline code block */ 'i', `})`],
					[/* text */ 't', `,`]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` The embedded comment syntax `],
					[/* inline code block */ 'i', `(?#comment)`],
					[/* text */ 't', `, and `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` The preprocessing operations `],
					[/* inline code block */ 'i', `\\l`],
					[/* inline code block */ 'i', `\\u`],
					[/* text */ 't', `,
    `],
					[/* inline code block */ 'i', `\\L`],
					[/* text */ 't', `, and `],
					[/* inline code block */ 'i', `\\U`],
					[/* text */ 't', `.  `]
				]]
			]]
		]],
		[/* block */ 'b', ` Constructs supported by this class but not by Perl: `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` Character-class union and intersection as described
    `],
					[/* text */ 't', `above`],
					[/* text */ 't', `.`]
				]]
			]]
		]],
		[/* block */ 'b', ` Notable differences from Perl: `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` In Perl, `],
					[/* inline code block */ 'i', `\\1`],
					[/* text */ 't', ` through `],
					[/* inline code block */ 'i', `\\9`],
					[/* text */ 't', ` are always interpreted
    as back references; a backslash-escaped number greater than `],
					[/* inline code block */ 'i', `9`],
					[/* text */ 't', ` is
    treated as a back reference if at least that many subexpressions exist,
    otherwise it is interpreted, if possible, as an octal escape.  In this
    class octal escapes must always begin with a zero. In this class,
    `],
					[/* inline code block */ 'i', `\\1`],
					[/* text */ 't', ` through `],
					[/* inline code block */ 'i', `\\9`],
					[/* text */ 't', ` are always interpreted as back
    references, and a larger number is accepted as a back reference if at
    least that many subexpressions exist at that point in the regular
    expression, otherwise the parser will drop digits until the number is
    smaller or equal to the existing number of groups or it is one digit.
    `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` Perl uses the `],
					[/* inline code block */ 'i', `g`],
					[/* text */ 't', ` flag to request a match that resumes
    where the last match left off.  This functionality is provided implicitly
    by the `],
					[/* reference */ 'r', `java.util.regex.Matcher`],
					[/* text */ 't', ` class: Repeated invocations of the `],
					[/* reference */ 'r', `.Matcher#find()`],
					[/* text */ 't', ` method will resume where the last match left off,
    unless the matcher is reset.  `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', ` In Perl, embedded flags at the top level of an expression affect
    the whole expression.  In this class, embedded flags always take effect
    at the point at which they appear, whether they are at the top level or
    within a group; in the latter case, flags are restored at the end of the
    group just as in Perl.  `]
			]]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` For a more precise description of the behavior of regular expression
 constructs, please see `],
			[/* external link */ 'a', `http://www.oreilly.com/catalog/regex3/`, `Mastering Regular Expressions, 3rd Edition, Jeffrey E. F. Friedl, O'Reilly and Associates, 2006.`]
		]]
	],
	[/* fields */
		[/* field */ 'UNIX_LINES', [
			[/* field description */
				[/* text */ 't', `Enables Unix lines mode.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` In this mode, only the `],
					[/* inline code block */ 'i', `'\\n'`],
					[/* text */ 't', ` line terminator is recognized
 in the behavior of `],
					[/* inline code block */ 'i', `.`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `^`],
					[/* text */ 't', `, and `],
					[/* inline code block */ 'i', `$`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Unix lines mode can also be enabled via the embedded flag
 expression `],
					[/* inline code block */ 'i', `(?d)`],
					[/* text */ 't', `.`]
				]]
			],
		]],
		[/* field */ 'CASE_INSENSITIVE', [
			[/* field description */
				[/* text */ 't', `Enables case-insensitive matching.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` By default, case-insensitive matching assumes that only characters
 in the US-ASCII charset are being matched.  Unicode-aware
 case-insensitive matching can be enabled by specifying the `],
					[/* text */ 't', `UNICODE_CASE`],
					[/* text */ 't', ` flag in conjunction with this flag.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Case-insensitive matching can also be enabled via the embedded flag
 expression `],
					[/* inline code block */ 'i', `(?i)`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` Specifying this flag may impose a slight performance penalty.  `]
			],
		]],
		[/* field */ 'COMMENTS', [
			[/* field description */
				[/* text */ 't', `Permits whitespace and comments in pattern.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` In this mode, whitespace is ignored, and embedded comments starting
 with `],
					[/* inline code block */ 'i', `#`],
					[/* text */ 't', ` are ignored until the end of a line.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Comments mode can also be enabled via the embedded flag
 expression `],
					[/* inline code block */ 'i', `(?x)`],
					[/* text */ 't', `.`]
				]]
			],
		]],
		[/* field */ 'MULTILINE', [
			[/* field description */
				[/* text */ 't', `Enables multiline mode.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` In multiline mode the expressions `],
					[/* inline code block */ 'i', `^`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `$`],
					[/* text */ 't', ` match
 just after or just before, respectively, a line terminator or the end of
 the input sequence.  By default these expressions only match at the
 beginning and the end of the entire input sequence.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Multiline mode can also be enabled via the embedded flag
 expression `],
					[/* inline code block */ 'i', `(?m)`],
					[/* text */ 't', `.  `]
				]]
			],
		]],
		[/* field */ 'LITERAL', [
			[/* field description */
				[/* text */ 't', `Enables literal parsing of the pattern.

 `],
				[/* block */ 'b', ` When this flag is specified then the input string that specifies
 the pattern is treated as a sequence of literal characters.
 Metacharacters or escape sequences in the input sequence will be
 given no special meaning.

 `],
				[/* block */ 'b', `The flags CASE_INSENSITIVE and UNICODE_CASE retain their impact on
 matching when used in conjunction with this flag. The other flags
 become superfluous.

 `],
				[/* block */ 'b', ` There is no embedded flag character for enabling literal parsing.`]
			],
		]],
		[/* field */ 'DOTALL', [
			[/* field description */
				[/* text */ 't', `Enables dotall mode.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` In dotall mode, the expression `],
					[/* inline code block */ 'i', `.`],
					[/* text */ 't', ` matches any character,
 including a line terminator.  By default this expression does not match
 line terminators.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Dotall mode can also be enabled via the embedded flag
 expression `],
					[/* inline code block */ 'i', `(?s)`],
					[/* text */ 't', `.  (The `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` is a mnemonic for
 "single-line" mode, which is what this is called in Perl.)  `]
				]]
			],
		]],
		[/* field */ 'UNICODE_CASE', [
			[/* field description */
				[/* text */ 't', `Enables Unicode-aware case folding.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` When this flag is specified then case-insensitive matching, when
 enabled by the `],
					[/* text */ 't', `CASE_INSENSITIVE`],
					[/* text */ 't', ` flag, is done in a manner
 consistent with the Unicode Standard.  By default, case-insensitive
 matching assumes that only characters in the US-ASCII charset are being
 matched.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Unicode-aware case folding can also be enabled via the embedded flag
 expression `],
					[/* inline code block */ 'i', `(?u)`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` Specifying this flag may impose a performance penalty.  `]
			],
		]],
		[/* field */ 'CANON_EQ', [
			[/* field description */
				[/* text */ 't', `Enables canonical equivalence.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` When this flag is specified then two characters will be considered
 to match if, and only if, their full canonical decompositions match.
 The expression `],
					[/* inline code block */ 'i', `"a\\u030A"`],
					[/* text */ 't', `, for example, will match the
 string `],
					[/* inline code block */ 'i', `"\\u00E5"`],
					[/* text */ 't', ` when this flag is specified.  By default,
 matching does not take canonical equivalence into account.

 `]
				]],
				[/* block */ 'b', ` There is no embedded flag character for enabling canonical
 equivalence.

 `],
				[/* block */ 'b', ` Specifying this flag may impose a performance penalty.  `]
			],
		]],
		[/* field */ 'UNICODE_CHARACTER_CLASS', [
			[/* field description */
				[/* text */ 't', `Enables the Unicode version of `],
				[/* text */ 't', `Predefined character classes`],
				[/* text */ 't', ` and
 `],
				[/* text */ 't', `POSIX character classes`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` When this flag is specified then the (US-ASCII only)
 `],
					[/* text */ 't', `Predefined character classes`],
					[/* text */ 't', ` and `],
					[/* text */ 't', `POSIX character classes`],
					[/* text */ 't', `
 are in conformance with
 `],
					[/* external link */ 'a', `http://www.unicode.org/reports/tr18/`, `Unicode Technical Standard #18: Unicode Regular Expressions`],
					[/* text */ 't', `Annex C: Compatibility Properties`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The UNICODE_CHARACTER_CLASS mode can also be enabled via the embedded
 flag expression `],
					[/* inline code block */ 'i', `(?U)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 The flag implies UNICODE_CASE, that is, it enables Unicode-aware case
 folding.
 `],
				[/* block */ 'b', `
 Specifying this flag may impose a performance penalty.  `]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'toString()', [
			[/* method description */
				[/* block */ 'b', `Returns the string representation of this pattern. This
 is the regular expression from which this pattern was
 compiled.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The string representation of this pattern`]
			]
		]],
		[/* method */ 'flags()', [
			[/* method description */
				[/* text */ 't', `Returns this pattern's match flags.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The match flags specified when this pattern was compiled`]
			]
		]],
		[/* method */ 'matches(java.lang.String,java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Compiles the given regular expression and attempts to match the given
 input against it.

 `],
				[/* block */ 'b', ` An invocation of this convenience method of the form

 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` Pattern.matches(regex, input);`]
				]],
				[/* text */ 't', `

 behaves in exactly the same way as the expression

 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` Pattern.compile(regex).matcher(input).matches()`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', ` If a pattern is to be used multiple times, compiling it once and reusing
 it will be more efficient than invoking this method each time.  `]
			],
			[/* parameters */
				[/* parameter */ 'regex', [/* parameter description */
					[/* text */ 't', `The expression to be compiled`]
				]],
				[/* parameter */ 'input', [/* parameter description */
					[/* text */ 't', `The character sequence to be matched`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.regex.PatternSyntaxException', [/* throw description */
					[/* text */ 't', `If the expression's syntax is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `whether or not the regular expression matches on the input`]
			]
		]],
		[/* method */ 'compile(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Compiles the given regular expression into a pattern.`]
			],
			[/* parameters */
				[/* parameter */ 'regex', [/* parameter description */
					[/* text */ 't', `The expression to be compiled`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.regex.PatternSyntaxException', [/* throw description */
					[/* text */ 't', `If the expression's syntax is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the given regular expression compiled into a pattern`]
			]
		]],
		[/* method */ 'compile(java.lang.String,int)', [
			[/* method description */
				[/* text */ 't', `Compiles the given regular expression into a pattern with the given
 flags.`]
			],
			[/* parameters */
				[/* parameter */ 'regex', [/* parameter description */
					[/* text */ 't', `The expression to be compiled`]
				]],
				[/* parameter */ 'flags', [/* parameter description */
					[/* text */ 't', `Match flags, a bit mask that may include
         `],
					[/* text */ 't', `CASE_INSENSITIVE`],
					[/* text */ 't', `, `],
					[/* text */ 't', `MULTILINE`],
					[/* text */ 't', `, `],
					[/* text */ 't', `DOTALL`],
					[/* text */ 't', `,
         `],
					[/* text */ 't', `UNICODE_CASE`],
					[/* text */ 't', `, `],
					[/* text */ 't', `CANON_EQ`],
					[/* text */ 't', `, `],
					[/* text */ 't', `UNIX_LINES`],
					[/* text */ 't', `,
         `],
					[/* text */ 't', `LITERAL`],
					[/* text */ 't', `, `],
					[/* text */ 't', `UNICODE_CHARACTER_CLASS`],
					[/* text */ 't', `
         and `],
					[/* text */ 't', `COMMENTS`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If bit values other than those corresponding to the defined
          match flags are set in `],
					[/* inline code block */ 'i', `flags`]
				]],
				[/* throw */ 'java.util.regex.PatternSyntaxException', [/* throw description */
					[/* text */ 't', `If the expression's syntax is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the given regular expression compiled into a pattern with the given flags`]
			]
		]],
		[/* method */ 'matcher(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Creates a matcher that will match the given input against this pattern.`]
			],
			[/* parameters */
				[/* parameter */ 'input', [/* parameter description */
					[/* text */ 't', `The character sequence to be matched`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A new matcher for this pattern`]
			]
		]],
		[/* method */ 'split(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Splits the given input sequence around matches of this pattern.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method works as if by invoking the two-argument `],
					[/* reference */ 'r', `#split(java.lang.CharSequence,int)`, `split`],
					[/* text */ 't', ` method with the given input
 sequence and a limit argument of zero.  Trailing empty strings are
 therefore not included in the resulting array. `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The input `],
					[/* inline code block */ 'i', `"boo:and:foo"`],
					[/* text */ 't', `, for example, yields the following
 results with these expressions:

 `]
				]],
				[/* table */ 'tbl',
					[/* caption */ 'tc'],
					[/* table header */ 'th', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Regex`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Result`]
							]]
						]]
					]],
					[/* table body */ 'tb', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `:`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `{ "boo", "and", "foo" }`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `o`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `{ "b", "", ":and:f" }`]
							]]
						]]
					]],
				],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'input', [/* parameter description */
					[/* text */ 't', `The character sequence to be split`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The array of strings computed by splitting the input
          around matches of this pattern`]
			]
		]],
		[/* method */ 'split(java.lang.CharSequence,int)', [
			[/* method description */
				[/* text */ 't', `Splits the given input sequence around matches of this pattern.

 `],
				[/* block */ 'b', ` The array returned by this method contains each substring of the
 input sequence that is terminated by another subsequence that matches
 this pattern or is terminated by the end of the input sequence.  The
 substrings in the array are in the order in which they occur in the
 input. If this pattern does not match any subsequence of the input then
 the resulting array has just one element, namely the input sequence in
 string form.

 `],
				[/* block */ 'b', ` When there is a positive-width match at the beginning of the input
 sequence then an empty leading substring is included at the beginning
 of the resulting array. A zero-width match at the beginning however
 never produces such empty leading substring.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `limit`],
					[/* text */ 't', ` parameter controls the number of times the
 pattern is applied and therefore affects the length of the resulting
 array.
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', `
    If the `],
							[/* text */ 't', `limit`],
							[/* text */ 't', ` is positive then the pattern will be applied
    at most `],
							[/* text */ 't', `limit`],
							[/* text */ 't', ` - 1 times, the array's length will be
    no greater than `],
							[/* text */ 't', `limit`],
							[/* text */ 't', `, and the array's last entry will contain
    all input beyond the last matched delimiter.`]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', `
    If the `],
							[/* text */ 't', `limit`],
							[/* text */ 't', ` is zero then the pattern will be applied as
    many times as possible, the array can have any length, and trailing
    empty strings will be discarded.`]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', `
    If the `],
							[/* text */ 't', `limit`],
							[/* text */ 't', ` is negative then the pattern will be applied
    as many times as possible and the array can have any length.`]
						]]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` The input `],
					[/* inline code block */ 'i', `"boo:and:foo"`],
					[/* text */ 't', `, for example, yields the following
 results with these parameters:

 `]
				]],
				[/* table */ 'tbl',
					[/* caption */ 'tc'],
					[/* table header */ 'th', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Regex`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Limit`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Result`]
							]]
						]]
					]],
					[/* table body */ 'tb', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', 1, 3, [
								[/* text */ 't', `:`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `2`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `{ "boo", "and:foo" }`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `5`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `{ "boo", "and", "foo" }`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `-2`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `{ "boo", "and", "foo" }`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', 1, 3, [
								[/* text */ 't', `o`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `5`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `{ "b", "", ":and:f", "", "" }`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `-2`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `{ "b", "", ":and:f", "", "" }`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `0`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `{ "b", "", ":and:f" }`]
							]]
						]]
					]],
				],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'input', [/* parameter description */
					[/* text */ 't', `The character sequence to be split`]
				]],
				[/* parameter */ 'limit', [/* parameter description */
					[/* text */ 't', `The result threshold, as described above`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The array of strings computed by splitting the input
          around matches of this pattern`]
			]
		]],
		[/* method */ 'quote(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a literal pattern `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` for the specified
 `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method produces a `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` that can be used to
 create a `],
					[/* inline code block */ 'i', `Pattern`],
					[/* text */ 't', ` that would match the string
 `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` as if it were a literal pattern.`]
				]],
				[/* text */ 't', ` Metacharacters
 or escape sequences in the input sequence will be given no special
 meaning.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `The string to be literalized`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A literal string replacement`]
			]
		]],
		[/* method */ 'pattern()', [
			[/* method description */
				[/* text */ 't', `Returns the regular expression from which this pattern was compiled.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The source of this pattern`]
			]
		]],
		[/* method */ 'asPredicate()', [
			[/* method description */
				[/* text */ 't', `Creates a predicate that tests if this pattern is found in a given input
 string.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The predicate which can be used for finding a match on a
          subsequence of a string`]
			]
		]],
		[/* method */ 'asMatchPredicate()', [
			[/* method description */
				[/* text */ 't', `Creates a predicate that tests if this pattern matches a given input string.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The predicate which can be used for matching an input string
          against this pattern.`]
			]
		]],
		[/* method */ 'splitAsStream(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Creates a stream from the given input sequence around matches of this
 pattern.

 `],
				[/* block */ 'b', ` The stream returned by this method contains each substring of the
 input sequence that is terminated by another subsequence that matches
 this pattern or is terminated by the end of the input sequence.  The
 substrings in the stream are in the order in which they occur in the
 input. Trailing empty strings will be discarded and not encountered in
 the stream.

 `],
				[/* block */ 'b', ` If this pattern does not match any subsequence of the input then
 the resulting stream has just one element, namely the input sequence in
 string form.

 `],
				[/* block */ 'b', ` When there is a positive-width match at the beginning of the input
 sequence then an empty leading substring is included at the beginning
 of the stream. A zero-width match at the beginning however never produces
 such empty leading substring.

 `],
				[/* block */ 'b', ` If the input sequence is mutable, it must remain constant during the
 execution of the terminal stream operation.  Otherwise, the result of the
 terminal stream operation is undefined.`]
			],
			[/* parameters */
				[/* parameter */ 'input', [/* parameter description */
					[/* text */ 't', `The character sequence to be split`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The stream of strings computed by splitting the input
          around matches of this pattern`]
			]
		]]
	],
]);
