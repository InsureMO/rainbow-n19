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
				[/* reference */ 'r', `compile`],
				[/* text */ 't', `("a*b");
 Matcher m = p.`],
				[/* reference */ 'r', `matcher`],
				[/* text */ 't', `("aaaaab");
 boolean b = m.`],
				[/* external link */ 'a', `Matcher.html#matches()`, `matches`],
				[/* text */ 't', `();`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* reference */ 'r', `matches`],
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
		[/* table */ 't', ''],
		[/* block */ 'b', `<hr>`],
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
		[/* table */ 't', ''],
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
				[/* text */ 't', `&nbsp;through&nbsp;`],
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
				[/* text */ 't', `&nbsp;through&nbsp;`],
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
				[/* text */ 't', `&nbsp;through&nbsp;`],
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
			[/* external link */ 'a', `../../lang/Character.html#codePointOf(java.lang.String)`, `Character.codePointOf(name)`],
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
			[/* external link */ 'a', `../../lang/Character.UnicodeScript.html#forName(java.lang.String)`, `UnicodeScript.forName`],
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
			[/* external link */ 'a', `../../lang/Character.UnicodeBlock.html#forName(java.lang.String)`, `UnicodeBlock.forName`],
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
		[/* table */ 't', ''],
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
					[/* external link */ 'a', `Matcher.html#find()`, `find`],
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
 expression&nbsp;`],
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
 expression&nbsp;`],
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
 expression&nbsp;`],
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
 expression&nbsp;`],
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
 expression&nbsp;`],
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
 expression&nbsp;`],
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
 flag expression&nbsp;`],
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
					[/* reference */ 'r', `split`],
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
				[/* table */ 't', ''],
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
							[/* text */ 't', `&nbsp;-&nbsp;1 times, the array's length will be
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
				[/* table */ 't', ''],
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
