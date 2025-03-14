import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.Collator', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* inline code block */ 'i', `Collator`],
		[/* text */ 't', ` class performs locale-sensitive
 `],
		[/* inline code block */ 'i', `String`],
		[/* text */ 't', ` comparison. You use this class to build
 searching and sorting routines for natural language text.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* inline code block */ 'i', `Collator`],
			[/* text */ 't', ` is an abstract base class. Subclasses
 implement specific collation strategies. One subclass,
 `],
			[/* inline code block */ 'i', `RuleBasedCollator`],
			[/* text */ 't', `, is currently provided with
 the Java Platform and is applicable to a wide set of languages. Other
 subclasses may be created to handle more specialized needs.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Like other locale-sensitive classes, you can use the static
 factory method, `],
			[/* inline code block */ 'i', `getInstance`],
			[/* text */ 't', `, to obtain the appropriate
 `],
			[/* inline code block */ 'i', `Collator`],
			[/* text */ 't', ` object for a given locale. You will only need
 to look at the subclasses of `],
			[/* inline code block */ 'i', `Collator`],
			[/* text */ 't', ` if you need
 to understand the details of a particular collation strategy or
 if you need to modify that strategy.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The following example shows how to compare two strings using
 the `],
			[/* inline code block */ 'i', `Collator`],
			[/* text */ 't', ` for the default locale.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `// Compare two strings in the default locale
 Collator myCollator = Collator.getInstance();
 if( myCollator.compare("abc", "ABC") < 0 )
     System.out.println("abc is less than ABC");
 else
     System.out.println("abc is greater than or equal to ABC");`]
			]],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 You can set a `],
			[/* inline code block */ 'i', `Collator`],
			[/* text */ 't', `'s `],
			[/* text */ 't', `strength`],
			[/* text */ 't', ` property
 to determine the level of difference considered significant in
 comparisons. Four strengths are provided: `],
			[/* inline code block */ 'i', `PRIMARY`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `SECONDARY`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `TERTIARY`],
			[/* text */ 't', `, and `],
			[/* inline code block */ 'i', `IDENTICAL`],
			[/* text */ 't', `.
 The exact assignment of strengths to language features is
 locale dependent.  For example, in Czech, "e" and "f" are considered
 primary differences, while "e" and "ě" are secondary differences,
 "e" and "E" are tertiary differences and "e" and "e" are identical.
 The following shows how both case and accents could be ignored for
 US English.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', ` //Get the Collator for US English and set its strength to PRIMARY
 Collator usCollator = Collator.getInstance(Locale.US);
 usCollator.setStrength(Collator.PRIMARY);
 if( usCollator.compare("abc", "ABC") == 0 ) {
     System.out.println("Strings are equivalent");
 }
 `],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 For comparing `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', `s exactly once, the `],
			[/* inline code block */ 'i', `compare`],
			[/* text */ 't', `
 method provides the best performance. When sorting a list of
 `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', `s however, it is generally necessary to compare each
 `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` multiple times. In this case, `],
			[/* inline code block */ 'i', `CollationKey`],
			[/* text */ 't', `s
 provide better performance. The `],
			[/* inline code block */ 'i', `CollationKey`],
			[/* text */ 't', ` class converts
 a `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` to a series of bits that can be compared bitwise
 against other `],
			[/* inline code block */ 'i', `CollationKey`],
			[/* text */ 't', `s. A `],
			[/* inline code block */ 'i', `CollationKey`],
			[/* text */ 't', ` is
 created by a `],
			[/* inline code block */ 'i', `Collator`],
			[/* text */ 't', ` object for a given `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', `.
 `],
			[/* new line */ 'n'],
			[/* text */ 't', `
 `],
			[/* text */ 't', `Note:`],
			[/* text */ 't', ` `],
			[/* inline code block */ 'i', `CollationKey`],
			[/* text */ 't', `s from different
 `],
			[/* inline code block */ 'i', `Collator`],
			[/* text */ 't', `s can not be compared. See the class description
 for `],
			[/* reference */ 'r', `java.text.CollationKey`, `CollationKey`],
			[/* text */ 't', `
 for an example using `],
			[/* inline code block */ 'i', `CollationKey`],
			[/* text */ 't', `s.`]
		]]
	],
	[/* fields */
		[/* field */ 'CANONICAL_DECOMPOSITION', [
			[/* field description */
				[/* text */ 't', `Decomposition mode value. With CANONICAL_DECOMPOSITION
 set, characters that are canonical variants according to Unicode
 standard will be decomposed for collation. This should be used to get
 correct collation of accented characters.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 CANONICAL_DECOMPOSITION corresponds to Normalization Form D as
 described in
 `],
					[/* external link */ 'a', `http://www.unicode.org/reports/tr15/`, `Unicode Standard Annex #15: Unicode Normalization Forms`],
					[/* text */ 't', `.`]
				]]
			],
		]],
		[/* field */ 'FULL_DECOMPOSITION', [
			[/* field description */
				[/* text */ 't', `Decomposition mode value. With FULL_DECOMPOSITION
 set, both Unicode canonical variants and Unicode compatibility variants
 will be decomposed for collation.  This causes not only accented
 characters to be collated, but also characters that have special formats
 to be collated with their norminal form. For example, the half-width and
 full-width ASCII and Katakana characters are then collated together.
 FULL_DECOMPOSITION is the most complete and therefore the slowest
 decomposition mode.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 FULL_DECOMPOSITION corresponds to Normalization Form KD as
 described in
 `],
					[/* external link */ 'a', `http://www.unicode.org/reports/tr15/`, `Unicode Standard Annex #15: Unicode Normalization Forms`],
					[/* text */ 't', `.`]
				]]
			],
		]],
		[/* field */ 'IDENTICAL', [
			[/* field description */
				[/* text */ 't', `Collator strength value.  When set, all differences are
 considered significant during comparison. The assignment of strengths
 to language features is locale dependent. A common example is for control
 characters ("\\u0001" vs "\\u0002") to be considered equal at the
 PRIMARY, SECONDARY, and TERTIARY levels but different at the IDENTICAL
 level.  Additionally, differences between pre-composed accents such as
 "\\u00C0" (A-grave) and combining accents such as "A\\u0300"
 (A, combining-grave) will be considered significant at the IDENTICAL
 level if decomposition is set to NO_DECOMPOSITION.`]
			],
		]],
		[/* field */ 'NO_DECOMPOSITION', [
			[/* field description */
				[/* text */ 't', `Decomposition mode value. With NO_DECOMPOSITION
 set, accented characters will not be decomposed for collation. This
 is the default setting and provides the fastest collation but
 will only produce correct results for languages that do not use accents.`]
			],
		]],
		[/* field */ 'PRIMARY', [
			[/* field description */
				[/* text */ 't', `Collator strength value.  When set, only PRIMARY differences are
 considered significant during comparison. The assignment of strengths
 to language features is locale dependent. A common example is for
 different base letters ("a" vs "b") to be considered a PRIMARY difference.`]
			],
		]],
		[/* field */ 'SECONDARY', [
			[/* field description */
				[/* text */ 't', `Collator strength value.  When set, only SECONDARY and above differences are
 considered significant during comparison. The assignment of strengths
 to language features is locale dependent. A common example is for
 different accented forms of the same base letter ("a" vs "ä") to be
 considered a SECONDARY difference.`]
			],
		]],
		[/* field */ 'TERTIARY', [
			[/* field description */
				[/* text */ 't', `Collator strength value.  When set, only TERTIARY and above differences are
 considered significant during comparison. The assignment of strengths
 to language features is locale dependent. A common example is for
 case differences ("a" vs "A") to be considered a TERTIARY difference.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Default constructor.  This constructor is
 protected so subclasses can get access to it. Users typically create
 a Collator sub-class by calling the factory method getInstance.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'compare(java.lang.String,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Compares the source string to the target string according to the
 collation rules for this Collator.  Returns an integer less than,
 equal to or greater than zero depending on whether the source String is
 less than, equal to or greater than the target string.  See the Collator
 class description for an example of use.
 `],
				[/* block */ 'b', `
 For a one time comparison, this method has the best performance. If a
 given String will be involved in multiple comparisons, CollationKey.compareTo
 has the best performance. See the Collator class description for an example
 using CollationKeys.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `the source string.`]
				]],
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the target string.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `Returns an integer value. Value is less than zero if source is less than
 target, value is zero if source and target are equal, value is greater than zero
 if source is greater than target.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Generates the hash code for this Collator.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'getCollationKey(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Transforms the String into a series of bits that can be compared bitwise
 to other CollationKeys. CollationKeys provide better performance than
 Collator.compare when Strings are involved in multiple comparisons.
 See the Collator class description for an example using CollationKeys.`]
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
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares the equality of two Collators.`]
			],
			[/* parameters */
				[/* parameter */ 'that', [/* parameter description */
					[/* text */ 't', `the Collator to be compared with this.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this Collator is the same as that Collator;
 false otherwise.`]
			]
		]],
		[/* method */ 'equals(java.lang.String,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Convenience method for comparing the equality of two strings based on
 this Collator's collation rules.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `the source string to be compared with.`]
				]],
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the target string to be compared with.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the strings are equal according to the collation
 rules.  false, otherwise.`]
			]
		]],
		[/* method */ 'compare(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares its two arguments for order.  Returns a negative integer,
 zero, or a positive integer as the first argument is less than, equal
 to, or greater than the second.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This implementation merely returns
  `],
					[/* inline code block */ 'i', `compare((String)o1, (String)o2)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'o1', [/* parameter description */
					[/* text */ 't', `the first object to be compared.`]
				]],
				[/* parameter */ 'o2', [/* parameter description */
					[/* text */ 't', `the second object to be compared.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `the arguments cannot be cast to Strings.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a negative integer, zero, or a positive integer as the
         first argument is less than, equal to, or greater than the
         second.`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Overrides Cloneable`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a clone of this instance.`]
			]
		]],
		[/* method */ 'getInstance(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Gets the Collator for the desired locale.`]
			],
			[/* parameters */
				[/* parameter */ 'desiredLocale', [/* parameter description */
					[/* text */ 't', `the desired locale.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the Collator for the desired locale.`]
			]
		]],
		[/* method */ 'getInstance()', [
			[/* method description */
				[/* text */ 't', `Gets the Collator for the current default locale.
 The default locale is determined by java.util.Locale.getDefault.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the Collator for the default locale.(for example, en_US)`]
			]
		]],
		[/* method */ 'getAvailableLocales()', [
			[/* method description */
				[/* text */ 't', `Returns an array of all locales for which the
 `],
				[/* inline code block */ 'i', `getInstance`],
				[/* text */ 't', ` methods of this class can return
 localized instances.
 The returned array represents the union of locales supported
 by the Java runtime and by installed
 `],
				[/* reference */ 'r', `java.text.spi.CollatorProvider`, `CollatorProvider`],
				[/* text */ 't', ` implementations.
 It must contain at least a Locale instance equal to
 `],
				[/* reference */ 'r', `java.util.Locale#US`, `Locale.US`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `An array of locales for which localized
         `],
				[/* inline code block */ 'i', `Collator`],
				[/* text */ 't', ` instances are available.`]
			]
		]],
		[/* method */ 'getDecomposition()', [
			[/* method description */
				[/* text */ 't', `Get the decomposition mode of this Collator. Decomposition mode
 determines how Unicode composed characters are handled. Adjusting
 decomposition mode allows the user to select between faster and more
 complete collation behavior.
 `],
				[/* block */ 'b', `The three values for decomposition mode are:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `NO_DECOMPOSITION,
 `],
					[/* block */ 'b', `CANONICAL_DECOMPOSITION
 `],
					[/* block */ 'b', `FULL_DECOMPOSITION.
 `]
				]],
				[/* text */ 't', `
 See the documentation for these three constants for a description
 of their meaning.`],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the decomposition mode`]
			]
		]],
		[/* method */ 'getStrength()', [
			[/* method description */
				[/* text */ 't', `Returns this Collator's strength property.  The strength property determines
 the minimum level of difference considered significant during comparison.
 See the Collator class description for an example of use.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this Collator's current strength property.`]
			]
		]],
		[/* method */ 'setDecomposition(int)', [
			[/* method description */
				[/* text */ 't', `Set the decomposition mode of this Collator. See getDecomposition
 for a description of decomposition mode.`]
			],
			[/* parameters */
				[/* parameter */ 'decompositionMode', [/* parameter description */
					[/* text */ 't', `the new decomposition mode.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the given value is not a valid decomposition
 mode.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setStrength(int)', [
			[/* method description */
				[/* text */ 't', `Sets this Collator's strength property.  The strength property determines
 the minimum level of difference considered significant during comparison.
 See the Collator class description for an example of use.`]
			],
			[/* parameters */
				[/* parameter */ 'newStrength', [/* parameter description */
					[/* text */ 't', `the new strength value.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the new strength value is not one of
 PRIMARY, SECONDARY, TERTIARY or IDENTICAL.`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
