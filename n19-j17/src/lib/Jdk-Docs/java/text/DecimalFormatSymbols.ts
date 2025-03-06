import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.DecimalFormatSymbols', [
	[/* class description */
		[/* text */ 't', `This class represents the set of symbols (such as the decimal separator,
 the grouping separator, and so on) needed by `],
		[/* inline code block */ 'i', `DecimalFormat`],
		[/* text */ 't', `
 to format numbers. `],
		[/* inline code block */ 'i', `DecimalFormat`],
		[/* text */ 't', ` creates for itself an instance of
 `],
		[/* inline code block */ 'i', `DecimalFormatSymbols`],
		[/* text */ 't', ` from its locale data.  If you need to change any
 of these symbols, you can get the `],
		[/* inline code block */ 'i', `DecimalFormatSymbols`],
		[/* text */ 't', ` object from
 your `],
		[/* inline code block */ 'i', `DecimalFormat`],
		[/* text */ 't', ` and modify it.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `If the locale contains "rg" (region override)
 `],
			[/* reference */ 'r', `java.util.Locale#def_locale_extension`, `Unicode extension`],
			[/* text */ 't', `,
 the symbols are overridden for the designated region.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Create a DecimalFormatSymbols object for the default
 `],
				[/* reference */ 'r', `java.util.Locale.Category#FORMAT`, `FORMAT`],
				[/* text */ 't', ` locale.
 This constructor can only construct instances for the locales
 supported by the Java runtime environment, not for those
 supported by installed
 `],
				[/* reference */ 'r', `java.text.spi.DecimalFormatSymbolsProvider`, `DecimalFormatSymbolsProvider`],
				[/* text */ 't', `
 implementations. For full locale coverage, use the
 `],
				[/* reference */ 'r', `#getInstance(java.util.Locale)`, `getInstance`],
				[/* text */ 't', ` method.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is equivalent to calling
 `],
					[/* reference */ 'r', `#%3Cinit%3E(java.util.Locale)`, `DecimalFormatSymbols(Locale.getDefault(Locale.Category.FORMAT))`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.util.Locale)', [
			[/* constructor description */
				[/* text */ 't', `Create a DecimalFormatSymbols object for the given locale.
 This constructor can only construct instances for the locales
 supported by the Java runtime environment, not for those
 supported by installed
 `],
				[/* reference */ 'r', `java.text.spi.DecimalFormatSymbolsProvider`, `DecimalFormatSymbolsProvider`],
				[/* text */ 't', `
 implementations. For full locale coverage, use the
 `],
				[/* reference */ 'r', `#getInstance(java.util.Locale)`, `getInstance`],
				[/* text */ 't', ` method.
 If the specified locale contains the `],
				[/* reference */ 'r', `java.util.Locale#UNICODE_LOCALE_EXTENSION`, `Locale.UNICODE_LOCALE_EXTENSION`],
				[/* text */ 't', `
 for the numbering system, the instance is initialized with the specified numbering
 system if the JRE implementation supports it. For example,
 `],
				[/* code block */ 'c', ` NumberFormat.getNumberInstance(Locale.forLanguageTag("th-TH-u-nu-thai"))
 `],
				[/* text */ 't', `
 This may return a `],
				[/* inline code block */ 'i', `NumberFormat`],
				[/* text */ 't', ` instance with the Thai numbering system,
 instead of the Latin numbering system.`]
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the desired locale`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` is null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Override equals.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the reference object with which to compare.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this object is the same as the obj
          argument; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'getDecimalSeparator()', [
			[/* method description */
				[/* text */ 't', `Gets the character used for decimal sign. Different for French, etc.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the character used for decimal sign`]
			]
		]],
		[/* method */ 'getDigit()', [
			[/* method description */
				[/* text */ 't', `Gets the character used for a digit in a pattern.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the character used for a digit in a pattern`]
			]
		]],
		[/* method */ 'getGroupingSeparator()', [
			[/* method description */
				[/* text */ 't', `Gets the character used for grouping separator. Different for French, etc.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the grouping separator`]
			]
		]],
		[/* method */ 'getMinusSign()', [
			[/* method description */
				[/* text */ 't', `Gets the character used to represent minus sign. If no explicit
 negative format is specified, one is formed by prefixing
 minusSign to the positive format.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the character representing minus sign`]
			]
		]],
		[/* method */ 'getMonetaryDecimalSeparator()', [
			[/* method description */
				[/* text */ 't', `Returns the monetary decimal separator.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the monetary decimal separator`]
			]
		]],
		[/* method */ 'getMonetaryGroupingSeparator()', [
			[/* method description */
				[/* text */ 't', `Gets the character used for grouping separator for currencies.
 May be different from `],
				[/* inline code block */ 'i', `grouping separator`],
				[/* text */ 't', ` in some locales,
 e.g, German in Austria.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the monetary grouping separator`]
			]
		]],
		[/* method */ 'getPatternSeparator()', [
			[/* method description */
				[/* text */ 't', `Gets the character used to separate positive and negative subpatterns
 in a pattern.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the pattern separator`]
			]
		]],
		[/* method */ 'getPercent()', [
			[/* method description */
				[/* text */ 't', `Gets the character used for percent sign. Different for Arabic, etc.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the character used for percent sign`]
			]
		]],
		[/* method */ 'getPerMill()', [
			[/* method description */
				[/* text */ 't', `Gets the character used for per mille sign. Different for Arabic, etc.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the character used for per mille sign`]
			]
		]],
		[/* method */ 'getZeroDigit()', [
			[/* method description */
				[/* text */ 't', `Gets the character used for zero. Different for Arabic, etc.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the character used for zero`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Override hashCode.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Standard override.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a clone of this instance.`]
			]
		]],
		[/* method */ 'getCurrencySymbol()', [
			[/* method description */
				[/* text */ 't', `Returns the currency symbol for the currency of these
 DecimalFormatSymbols in their locale.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the currency symbol`]
			]
		]],
		[/* method */ 'getExponentSeparator()', [
			[/* method description */
				[/* text */ 't', `Returns the string used to separate the mantissa from the exponent.
 Examples: "x10^" for 1.23x10^4, "E" for 1.23E4.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the exponent separator string`]
			]
		]],
		[/* method */ 'getInfinity()', [
			[/* method description */
				[/* text */ 't', `Gets the string used to represent infinity. Almost always left
 unchanged.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the string representing infinity`]
			]
		]],
		[/* method */ 'getInternationalCurrencySymbol()', [
			[/* method description */
				[/* text */ 't', `Returns the ISO 4217 currency code of the currency of these
 DecimalFormatSymbols.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the currency code`]
			]
		]],
		[/* method */ 'getNaN()', [
			[/* method description */
				[/* text */ 't', `Gets the string used to represent "not a number". Almost always left
 unchanged.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the string representing "not a number"`]
			]
		]],
		[/* method */ 'getCurrency()', [
			[/* method description */
				[/* text */ 't', `Gets the currency of these DecimalFormatSymbols. May be null if the
 currency symbol attribute was previously set to a value that's not
 a valid ISO 4217 currency code.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the currency used, or null`]
			]
		]],
		[/* method */ 'getInstance()', [
			[/* method description */
				[/* text */ 't', `Gets the `],
				[/* inline code block */ 'i', `DecimalFormatSymbols`],
				[/* text */ 't', ` instance for the default
 locale.  This method provides access to `],
				[/* inline code block */ 'i', `DecimalFormatSymbols`],
				[/* text */ 't', `
 instances for locales supported by the Java runtime itself as well
 as for those supported by installed
 `],
				[/* reference */ 'r', `java.text.spi.DecimalFormatSymbolsProvider`, `DecimalFormatSymbolsProvider`],
				[/* text */ 't', ` implementations.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is equivalent to calling
 `],
					[/* reference */ 'r', `#getInstance(java.util.Locale)`, `getInstance(Locale.getDefault(Locale.Category.FORMAT))`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `DecimalFormatSymbols`],
				[/* text */ 't', ` instance.`]
			]
		]],
		[/* method */ 'getInstance(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Gets the `],
				[/* inline code block */ 'i', `DecimalFormatSymbols`],
				[/* text */ 't', ` instance for the specified
 locale.  This method provides access to `],
				[/* inline code block */ 'i', `DecimalFormatSymbols`],
				[/* text */ 't', `
 instances for locales supported by the Java runtime itself as well
 as for those supported by installed
 `],
				[/* reference */ 'r', `java.text.spi.DecimalFormatSymbolsProvider`, `DecimalFormatSymbolsProvider`],
				[/* text */ 't', ` implementations.
 If the specified locale contains the `],
				[/* reference */ 'r', `java.util.Locale#UNICODE_LOCALE_EXTENSION`, `Locale.UNICODE_LOCALE_EXTENSION`],
				[/* text */ 't', `
 for the numbering system, the instance is initialized with the specified numbering
 system if the JRE implementation supports it. For example,
 `],
				[/* code block */ 'c', ` NumberFormat.getNumberInstance(Locale.forLanguageTag("th-TH-u-nu-thai"))
 `],
				[/* text */ 't', `
 This may return a `],
				[/* inline code block */ 'i', `NumberFormat`],
				[/* text */ 't', ` instance with the Thai numbering system,
 instead of the Latin numbering system.`]
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the desired locale.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `DecimalFormatSymbols`],
				[/* text */ 't', ` instance.`]
			]
		]],
		[/* method */ 'getAvailableLocales()', [
			[/* method description */
				[/* text */ 't', `Returns an array of all locales for which the
 `],
				[/* inline code block */ 'i', `getInstance`],
				[/* text */ 't', ` methods of this class can return
 localized instances.
 The returned array represents the union of locales supported by the Java
 runtime and by installed
 `],
				[/* reference */ 'r', `java.text.spi.DecimalFormatSymbolsProvider`, `DecimalFormatSymbolsProvider`],
				[/* text */ 't', `
 implementations.  It must contain at least a `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', `
 instance equal to `],
				[/* reference */ 'r', `java.util.Locale#US`, `Locale.US`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array of locales for which localized
         `],
				[/* inline code block */ 'i', `DecimalFormatSymbols`],
				[/* text */ 't', ` instances are available.`]
			]
		]],
		[/* method */ 'setCurrency(java.util.Currency)', [
			[/* method description */
				[/* text */ 't', `Sets the currency of these DecimalFormatSymbols.
 This also sets the currency symbol attribute to the currency's symbol
 in the DecimalFormatSymbols' locale, and the international currency
 symbol attribute to the currency's ISO 4217 currency code.`]
			],
			[/* parameters */
				[/* parameter */ 'currency', [/* parameter description */
					[/* text */ 't', `the new currency to be used`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `currency`],
					[/* text */ 't', ` is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setCurrencySymbol(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Sets the currency symbol for the currency of these
 DecimalFormatSymbols in their locale.`]
			],
			[/* parameters */
				[/* parameter */ 'currency', [/* parameter description */
					[/* text */ 't', `the currency symbol`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setDecimalSeparator(char)', [
			[/* method description */
				[/* text */ 't', `Sets the character used for decimal sign. Different for French, etc.`]
			],
			[/* parameters */
				[/* parameter */ 'decimalSeparator', [/* parameter description */
					[/* text */ 't', `the character used for decimal sign`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setDigit(char)', [
			[/* method description */
				[/* text */ 't', `Sets the character used for a digit in a pattern.`]
			],
			[/* parameters */
				[/* parameter */ 'digit', [/* parameter description */
					[/* text */ 't', `the character used for a digit in a pattern`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setExponentSeparator(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Sets the string used to separate the mantissa from the exponent.
 Examples: "x10^" for 1.23x10^4, "E" for 1.23E4.`]
			],
			[/* parameters */
				[/* parameter */ 'exp', [/* parameter description */
					[/* text */ 't', `the exponent separator string`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `exp`],
					[/* text */ 't', ` is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setGroupingSeparator(char)', [
			[/* method description */
				[/* text */ 't', `Sets the character used for grouping separator. Different for French, etc.`]
			],
			[/* parameters */
				[/* parameter */ 'groupingSeparator', [/* parameter description */
					[/* text */ 't', `the grouping separator`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setInfinity(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Sets the string used to represent infinity. Almost always left
 unchanged.`]
			],
			[/* parameters */
				[/* parameter */ 'infinity', [/* parameter description */
					[/* text */ 't', `the string representing infinity`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setInternationalCurrencySymbol(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Sets the ISO 4217 currency code of the currency of these
 DecimalFormatSymbols.
 If the currency code is valid (as defined by
 `],
				[/* reference */ 'r', `java.util.Currency#getInstance(java.lang.String)`, `Currency.getInstance`],
				[/* text */ 't', `),
 this also sets the currency attribute to the corresponding Currency
 instance and the currency symbol attribute to the currency's symbol
 in the DecimalFormatSymbols' locale. If the currency code is not valid,
 then the currency attribute is set to null and the currency symbol
 attribute is not modified.`]
			],
			[/* parameters */
				[/* parameter */ 'currencyCode', [/* parameter description */
					[/* text */ 't', `the currency code`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setMinusSign(char)', [
			[/* method description */
				[/* text */ 't', `Sets the character used to represent minus sign. If no explicit
 negative format is specified, one is formed by prefixing
 minusSign to the positive format.`]
			],
			[/* parameters */
				[/* parameter */ 'minusSign', [/* parameter description */
					[/* text */ 't', `the character representing minus sign`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setMonetaryDecimalSeparator(char)', [
			[/* method description */
				[/* text */ 't', `Sets the monetary decimal separator.`]
			],
			[/* parameters */
				[/* parameter */ 'sep', [/* parameter description */
					[/* text */ 't', `the monetary decimal separator`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setMonetaryGroupingSeparator(char)', [
			[/* method description */
				[/* text */ 't', `Sets the character used for grouping separator for currencies.
 Invocation of this method will not affect the normal
 `],
				[/* inline code block */ 'i', `grouping separator`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'monetaryGroupingSeparator', [/* parameter description */
					[/* text */ 't', `the monetary grouping separator`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setNaN(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Sets the string used to represent "not a number". Almost always left
 unchanged.`]
			],
			[/* parameters */
				[/* parameter */ 'NaN', [/* parameter description */
					[/* text */ 't', `the string representing "not a number"`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setPatternSeparator(char)', [
			[/* method description */
				[/* text */ 't', `Sets the character used to separate positive and negative subpatterns
 in a pattern.`]
			],
			[/* parameters */
				[/* parameter */ 'patternSeparator', [/* parameter description */
					[/* text */ 't', `the pattern separator`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setPercent(char)', [
			[/* method description */
				[/* text */ 't', `Sets the character used for percent sign. Different for Arabic, etc.`]
			],
			[/* parameters */
				[/* parameter */ 'percent', [/* parameter description */
					[/* text */ 't', `the character used for percent sign`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setPerMill(char)', [
			[/* method description */
				[/* text */ 't', `Sets the character used for per mille sign. Different for Arabic, etc.`]
			],
			[/* parameters */
				[/* parameter */ 'perMill', [/* parameter description */
					[/* text */ 't', `the character used for per mille sign`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setZeroDigit(char)', [
			[/* method description */
				[/* text */ 't', `Sets the character used for zero. Different for Arabic, etc.`]
			],
			[/* parameters */
				[/* parameter */ 'zeroDigit', [/* parameter description */
					[/* text */ 't', `the character used for zero`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
