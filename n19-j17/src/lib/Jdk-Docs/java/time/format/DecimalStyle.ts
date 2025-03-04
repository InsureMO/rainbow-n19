import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.format.DecimalStyle', [
	[/* class description */
		[/* text */ 't', `Localized decimal style used in date and time formatting.
 `],
		[/* block */ 'b', `
 A significant part of dealing with dates and times is the localization.
 This class acts as a central point for accessing the information.`]
	],
	[/* fields */
		[/* field */ 'STANDARD', [
			[/* field description */
				[/* text */ 't', `The standard set of non-localized decimal style symbols.
 `],
				[/* block */ 'b', `
 This uses standard ASCII characters for zero, positive, negative and a dot for the decimal point.`]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks if this DecimalStyle is equal to another DecimalStyle.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to check, null returns false`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this is equal to the other date`]
			]
		]],
		[/* method */ 'getDecimalSeparator()', [
			[/* method description */
				[/* text */ 't', `Gets the character that represents the decimal point.
 `],
				[/* block */ 'b', `
 The character used to represent a decimal point may vary by culture.
 This method specifies the character to use.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the character for the decimal point`]
			]
		]],
		[/* method */ 'getNegativeSign()', [
			[/* method description */
				[/* text */ 't', `Gets the character that represents the negative sign.
 `],
				[/* block */ 'b', `
 The character used to represent a negative number may vary by culture.
 This method specifies the character to use.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the character for the negative sign`]
			]
		]],
		[/* method */ 'getPositiveSign()', [
			[/* method description */
				[/* text */ 't', `Gets the character that represents the positive sign.
 `],
				[/* block */ 'b', `
 The character used to represent a positive number may vary by culture.
 This method specifies the character to use.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the character for the positive sign`]
			]
		]],
		[/* method */ 'getZeroDigit()', [
			[/* method description */
				[/* text */ 't', `Gets the character that represents zero.
 `],
				[/* block */ 'b', `
 The character used to represent digits may vary by culture.
 This method specifies the zero character to use, which implies the characters for one to nine.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the character for zero`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `A hash code for this DecimalStyle.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a suitable hash code`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this DecimalStyle.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string description, not null`]
			]
		]],
		[/* method */ 'withDecimalSeparator(char)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of the info with a new character that represents the decimal point.
 `],
				[/* block */ 'b', `
 The character used to represent a decimal point may vary by culture.
 This method specifies the character to use.`]
			],
			[/* parameters */
				[/* parameter */ 'decimalSeparator', [/* parameter description */
					[/* text */ 't', `the character for the decimal point`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a copy with a new character that represents the decimal point, not null`]
			]
		]],
		[/* method */ 'withNegativeSign(char)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of the info with a new character that represents the negative sign.
 `],
				[/* block */ 'b', `
 The character used to represent a negative number may vary by culture.
 This method specifies the character to use.`]
			],
			[/* parameters */
				[/* parameter */ 'negativeSign', [/* parameter description */
					[/* text */ 't', `the character for the negative sign`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a copy with a new character that represents the negative sign, not null`]
			]
		]],
		[/* method */ 'withPositiveSign(char)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of the info with a new character that represents the positive sign.
 `],
				[/* block */ 'b', `
 The character used to represent a positive number may vary by culture.
 This method specifies the character to use.`]
			],
			[/* parameters */
				[/* parameter */ 'positiveSign', [/* parameter description */
					[/* text */ 't', `the character for the positive sign`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a copy with a new character that represents the positive sign, not null`]
			]
		]],
		[/* method */ 'withZeroDigit(char)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of the info with a new character that represents zero.
 `],
				[/* block */ 'b', `
 The character used to represent digits may vary by culture.
 This method specifies the zero character to use, which implies the characters for one to nine.`]
			],
			[/* parameters */
				[/* parameter */ 'zeroDigit', [/* parameter description */
					[/* text */ 't', `the character for zero`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a copy with a new character that represents zero, not null`]
			]
		]],
		[/* method */ 'of(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Obtains the DecimalStyle for the specified locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method provides access to locale sensitive decimal style symbols.
 If the locale contains "nu" (Numbering System) and/or "rg"
 (Region Override) `],
					[/* reference */ 'r', `java.time.Locale#def_locale_extension`],
					[/* text */ 't', `, returned instance will reflect the values specified with
 those extensions. If both "nu" and "rg" are specified, the value from
 the "nu" extension supersedes the implicit one from the "rg" extension.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the decimal style, not null`]
			]
		]],
		[/* method */ 'ofDefaultLocale()', [
			[/* method description */
				[/* text */ 't', `Obtains the DecimalStyle for the default
 `],
				[/* reference */ 'r', `java.time.Locale.Category#FORMAT`],
				[/* text */ 't', ` locale.
 `],
				[/* block */ 'b', `
 This method provides access to locale sensitive decimal style symbols.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This is equivalent to calling
 `],
					[/* reference */ 'r', `#of(java.util.Locale)`, `of(Locale.getDefault(Locale.Category.FORMAT))`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the decimal style, not null`]
			]
		]],
		[/* method */ 'getAvailableLocales()', [
			[/* method description */
				[/* text */ 't', `Lists all the locales that are supported.
 `],
				[/* block */ 'b', `
 The locale 'en_US' will always be present.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a Set of Locales for which localization is supported`]
			]
		]]
	],
]);
