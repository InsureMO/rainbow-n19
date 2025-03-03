import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.RuleBasedCollator', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* inline code block */ 'i', `RuleBasedCollator`],
		[/* text */ 't', ` class is a concrete subclass of
 `],
		[/* inline code block */ 'i', `Collator`],
		[/* text */ 't', ` that provides a simple, data-driven, table
 collator.  With this class you can create a customized table-based
 `],
		[/* inline code block */ 'i', `Collator`],
		[/* text */ 't', `.  `],
		[/* inline code block */ 'i', `RuleBasedCollator`],
		[/* text */ 't', ` maps
 characters to sort keys.

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `RuleBasedCollator`],
			[/* text */ 't', ` has the following restrictions
 for efficiency (other subclasses may be used for more complex languages) :
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', `If a special collation rule controlled by a <modifier> is
     specified it applies to the whole collator object.
 `],
			[/* block */ 'b', `All non-mentioned characters are at the end of the
     collation order.
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 The collation table is composed of a list of collation rules, where each
 rule is of one of three forms:
 `],
		[/* code block */ 'c', `    <modifier>
    <relation> <text-argument>
    <reset> <text-argument>
 `],
		[/* text */ 't', `
 The definitions of the rule elements is as follows:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `Text-Argument`],
				[/* text */ 't', `: A text-argument is any sequence of
        characters, excluding special characters (that is, common
        whitespace characters [0009-000D, 0020] and rule syntax characters
        [0021-002F, 003A-0040, 005B-0060, 007B-007E]). If those
        characters are desired, you can put them in single quotes
        (e.g. ampersand => '&'). Note that unquoted white space characters
        are ignored; e.g. `],
				[/* inline code block */ 'i', `b c`],
				[/* text */ 't', ` is treated as `],
				[/* inline code block */ 'i', `bc`],
				[/* text */ 't', `.
    `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Modifier`],
				[/* text */ 't', `: There are currently two modifiers that
        turn on special collation rules.
        `],
				[/* list */ 'l', [
					[/* block */ 'b', `'@' : Turns on backwards sorting of accents (secondary
                      differences), as in French.
            `],
					[/* block */ 'b', `'!' : Turns on Thai/Lao vowel-consonant swapping.  If this
                      rule is in force when a Thai vowel of the range
                      \\U0E40-\\U0E44 precedes a Thai consonant of the range
                      \\U0E01-\\U0E2E OR a Lao vowel of the range \\U0EC0-\\U0EC4
                      precedes a Lao consonant of the range \\U0E81-\\U0EAE then
                      the vowel is placed after the consonant for collation
                      purposes.
        `]
				]],
				[/* block */ 'b', `'@' : Indicates that accents are sorted backwards, as in French.
    `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Relation`],
				[/* text */ 't', `: The relations are the following:
        `],
				[/* list */ 'l', [
					[/* block */ 'b', `'<' : Greater, as a letter difference (primary)
            `],
					[/* block */ 'b', `';' : Greater, as an accent difference (secondary)
            `],
					[/* block */ 'b', `',' : Greater, as a case difference (tertiary)
            `],
					[/* block */ 'b', `'=' : Equal
        `]
				]]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Reset`],
				[/* text */ 't', `: There is a single reset
        which is used primarily for contractions and expansions, but which
        can also be used to add a modification at the end of a set of rules.
        `],
				[/* block */ 'b', `'&' : Indicates that the next rule follows the position to where
            the reset text-argument would be sorted.
 `]
			]],
			[/* block */ 'b', '']
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 This sounds more complicated than it is in practice. For example, the
 following are equivalent ways of expressing the same thing:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', ` a < b < c
 a < b & b < c
 a < c & a < b
 `]
		]],
		[/* text */ 't', `
 Notice that the order is important, as the subsequent item goes immediately
 after the text-argument. The following are not equivalent:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', ` a < b & a < c
 a < c & a < b
 `]
		]],
		[/* text */ 't', `
 Either the text-argument must already be present in the sequence, or some
 initial substring of the text-argument must be present. (e.g. "a < b & ae <
 e" is valid since "a" is present in the sequence before "ae" is reset). In
 this latter case, "ae" is not entered and treated as a single character;
 instead, "e" is sorted as if it were expanded to two characters: "a"
 followed by an "e". This difference appears in natural languages: in
 traditional Spanish "ch" is treated as though it contracts to a single
 character (expressed as "c < ch < d"), while in traditional German
 a-umlaut is treated as though it expanded to two characters
 (expressed as "a,A < b,B ... &ae;\\u00e3&AE;\\u00c3").
 [\\u00e3 and \\u00c3 are, of course, the escape sequences for a-umlaut.]
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Ignorable Characters`],
		[/* block */ 'b', `
 For ignorable characters, the first rule must start with a relation (the
 examples we have used above are really fragments; "a < b" really should be
 "< a < b"). If, however, the first relation is not "<", then all the all
 text-arguments up to the first "<" are ignorable. For example, ", - < a < b"
 makes "-" an ignorable character, as we saw earlier in the word
 "black-birds". In the samples for different languages, you see that most
 accents are ignorable.

 `],
		[/* block */ 'b', `Normalization and Accents`],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `RuleBasedCollator`],
			[/* text */ 't', ` automatically processes its rule table to
 include both pre-composed and combining-character versions of
 accented characters.  Even if the provided rule string contains only
 base characters and separate combining accent characters, the pre-composed
 accented characters matching all canonical combinations of characters from
 the rule string will be entered in the table.
 `]
		]],
		[/* block */ 'b', `
 This allows you to use a RuleBasedCollator to compare accented strings
 even when the collator is set to NO_DECOMPOSITION.  There are two caveats,
 however.  First, if the strings to be collated contain combining
 sequences that may not be in canonical order, you should set the collator to
 CANONICAL_DECOMPOSITION or FULL_DECOMPOSITION to enable sorting of
 combining sequences.  Second, if the strings contain characters with
 compatibility decompositions (such as full-width and half-width forms),
 you must use FULL_DECOMPOSITION, since the rule tables only include
 canonical mappings.

 `],
		[/* block */ 'b', `Errors`],
		[/* block */ 'b', `
 The following are errors:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', `A text-argument contains unquoted punctuation symbols
        (e.g. "a < b-c < d").
     `],
			[/* block */ 'b', `A relation or reset character not followed by a text-argument
        (e.g. "a < ,b").
     `],
			[/* block */ 'b', `A reset where the text-argument (or an initial substring of the
         text-argument) is not already in the sequence.
         (e.g. "a < b & e < f")
 `]
		]],
		[/* text */ 't', `
 If you produce one of these errors, a `],
		[/* inline code block */ 'i', `RuleBasedCollator`],
		[/* text */ 't', ` throws
 a `],
		[/* inline code block */ 'i', `ParseException`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Examples`],
		[/* block */ 'b', `Simple:     "< a < b < c < d"
 `],
		[/* block */ 'b', `Norwegian:  "< a, A < b, B < c, C < d, D < e, E < f, F
                 < g, G < h, H < i, I < j, J < k, K < l, L
                 < m, M < n, N < o, O < p, P < q, Q < r, R
                 < s, S < t, T < u, U < v, V < w, W < x, X
                 < y, Y < z, Z
                 < \\u00E6, \\u00C6
                 < \\u00F8, \\u00D8
                 < \\u00E5 = a\\u030A, \\u00C5 = A\\u030A;
                      aa, AA"

 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 To create a `],
			[/* inline code block */ 'i', `RuleBasedCollator`],
			[/* text */ 't', ` object with specialized
 rules tailored to your needs, you construct the `],
			[/* inline code block */ 'i', `RuleBasedCollator`],
			[/* text */ 't', `
 with the rules contained in a `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` object. For example:
 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', ` String simple = "< a< b< c< d";
 RuleBasedCollator mySimple = new RuleBasedCollator(simple);
 `]
		]],
		[/* text */ 't', `
 Or:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', ` String Norwegian = "< a, A < b, B < c, C < d, D < e, E < f, F < g, G < h, H < i, I" +
                    "< j, J < k, K < l, L < m, M < n, N < o, O < p, P < q, Q < r, R" +
                    "< s, S < t, T < u, U < v, V < w, W < x, X < y, Y < z, Z" +
                    "< \\u00E6, \\u00C6" +     // Latin letter ae & AE
                    "< \\u00F8, \\u00D8" +     // Latin letter o & O with stroke
                    "< \\u00E5 = a\\u030A," +  // Latin letter a with ring above
                    "  \\u00C5 = A\\u030A;" +  // Latin letter A with ring above
                    "  aa, AA";
 RuleBasedCollator myNorwegian = new RuleBasedCollator(Norwegian);
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 A new collation rules string can be created by concatenating rules
 strings. For example, the rules returned by `],
			[/* reference */ 'r', `#getRules()`, `getRules()`],
			[/* text */ 't', ` could
 be concatenated to combine multiple `],
			[/* inline code block */ 'i', `RuleBasedCollator`],
			[/* text */ 't', `s.

 `]
		]],
		[/* block */ 'b', `
 The following example demonstrates how to change the order of
 non-spacing accents,
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', ` // old rule
 String oldRules = "=\\u0301;\\u0300;\\u0302;\\u0308"    // main accents
                 + ";\\u0327;\\u0303;\\u0304;\\u0305"    // main accents
                 + ";\\u0306;\\u0307;\\u0309;\\u030A"    // main accents
                 + ";\\u030B;\\u030C;\\u030D;\\u030E"    // main accents
                 + ";\\u030F;\\u0310;\\u0311;\\u0312"    // main accents
                 + "< a , A ; ae, AE ; \\u00e6 , \\u00c6"
                 + "< b , B < c, C < e, E & C < d, D";
 // change the order of accent characters
 String addOn = "& \\u0300 ; \\u0308 ; \\u0302";
 RuleBasedCollator myCollator = new RuleBasedCollator(oldRules + addOn);
 `]
		]],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `RuleBasedCollator constructor.  This takes the table rules and builds
 a collation table out of them.  Please see RuleBasedCollator class
 description for more details on the collation rule syntax.`]
			],
			[/* parameters */
				[/* parameter */ 'rules', [/* parameter description */
					[/* text */ 't', `the collation rules to build the collation table from.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.text.ParseException', [/* throw description */
					[/* text */ 't', `A format exception
 will be thrown if the build process of the rules fails. For
 example, build rule "a < ? < d" will cause the constructor to
 throw the ParseException because the '?' is not quoted.`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares the equality of two collation objects.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the table-based collation object to be compared with this.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the current table-based collation object is the same
 as the table-based collation object obj; false otherwise.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Generates the hash code for the table-based collation object`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Standard override; no change in semantics.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a clone of this instance.`]
			]
		]],
		[/* method */ 'compare(java.lang.String,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Compares the character data stored in two different strings based on the
 collation rules.  Returns information about whether a string is less
 than, greater than or equal to another string in a language.
 This can be overridden in a subclass.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `the source string.`]
				]],
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the target string.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `source`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `target`],
					[/* text */ 't', ` is null.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `Returns an integer value. Value is less than zero if source is less than
 target, value is zero if source and target are equal, value is greater than zero
 if source is greater than target.`]
			]
		]],
		[/* method */ 'getRules()', [
			[/* method description */
				[/* text */ 't', `Gets the table-based rules for the collation object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `returns the collation rules that the table collation object
 was created from.`]
			]
		]],
		[/* method */ 'getCollationElementIterator(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a CollationElementIterator for the given String.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `the string to be collated`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `CollationElementIterator`],
				[/* text */ 't', ` object`]
			]
		]],
		[/* method */ 'getCollationElementIterator(java.text.CharacterIterator)', [
			[/* method description */
				[/* text */ 't', `Returns a CollationElementIterator for the given CharacterIterator.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `the character iterator to be collated`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `CollationElementIterator`],
				[/* text */ 't', ` object`]
			]
		]],
		[/* method */ 'getCollationKey(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Transforms the string into a series of characters that can be compared
 with CollationKey.compareTo. This overrides java.text.Collator.getCollationKey.
 It can be overridden in a subclass.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `the string to be transformed into a collation key.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the CollationKey for the given String based on this Collator's collation
 rules. If the source String is null, a null CollationKey is returned.`]
			]
		]]
	],
]);
