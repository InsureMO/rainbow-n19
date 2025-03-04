import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Currency', [
	[/* class description */
		[/* text */ 't', `Represents a currency. Currencies are identified by their ISO 4217 currency
 codes. Visit the `],
		[/* external link */ 'a', `http://www.iso.org/iso/home/standards/currency_codes.htm`, `ISO web site`],
		[/* text */ 't', ` for more information.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The class is designed so that there's never more than one
 `],
			[/* inline code block */ 'i', `Currency`],
			[/* text */ 't', ` instance for any given currency. Therefore, there's
 no public constructor. You obtain a `],
			[/* inline code block */ 'i', `Currency`],
			[/* text */ 't', ` instance using
 the `],
			[/* inline code block */ 'i', `getInstance`],
			[/* text */ 't', ` methods.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Users can supersede the Java runtime currency data by means of the system
 property `],
			[/* inline code block */ 'i', `java.util.currency.data`],
			[/* text */ 't', `. If this system property is
 defined then its value is the location of a properties file, the contents of
 which are key/value pairs of the ISO 3166 country codes and the ISO 4217
 currency data respectively.  The value part consists of three ISO 4217 values
 of a currency, i.e., an alphabetic code, a numeric code, and a minor unit.
 Those three ISO 4217 values are separated by commas.
 The lines which start with '#'s are considered comment lines. An optional UTC
 timestamp may be specified per currency entry if users need to specify a
 cutover date indicating when the new data comes into effect. The timestamp is
 appended to the end of the currency properties and uses a comma as a separator.
 If a UTC datestamp is present and valid, the JRE will only use the new currency
 properties if the current UTC date is later than the date specified at class
 loading time. The format of the timestamp must be of ISO 8601 format :
 `],
			[/* inline code block */ 'i', `'yyyy-MM-dd'T'HH:mm:ss'`],
			[/* text */ 't', `. For example,
 `]
		]],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `#Sample currency properties JP=JPZ,999,0`]
		]],
		[/* block */ 'b', `
 will supersede the currency data for Japan. If JPZ is one of the existing
 ISO 4217 currency code referred by other countries, the existing
 JPZ currency data is updated with the given numeric code and minor
 unit value.

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `#Sample currency properties with cutover date JP=JPZ,999,0,2014-01-01T00:00:00`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 will supersede the currency data for Japan if `],
			[/* inline code block */ 'i', `Currency`],
			[/* text */ 't', ` class is loaded after
 1st January 2014 00:00:00 GMT.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Where syntactically malformed entries are encountered, the entry is ignored
 and the remainder of entries in file are processed. For instances where duplicate
 country code entries exist, the behavior of the Currency information for that
 `],
			[/* inline code block */ 'i', `Currency`],
			[/* text */ 't', ` is undefined and the remainder of entries in file are processed.
 `]
		]],
		[/* block */ 'b', `
 If multiple property entries with same currency code but different numeric code
 and/or minor unit are encountered, those entries are ignored and the remainder
 of entries in file are processed.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 It is recommended to use `],
			[/* reference */ 'r', `java.math.BigDecimal`],
			[/* text */ 't', ` class while dealing
 with `],
			[/* inline code block */ 'i', `Currency`],
			[/* text */ 't', ` or monetary values as it provides better handling of floating
 point numbers and their operations.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getDefaultFractionDigits()', [
			[/* method description */
				[/* text */ 't', `Gets the default number of fraction digits used with this currency.
 Note that the number of fraction digits is the same as ISO 4217's
 minor unit for the currency.
 For example, the default number of fraction digits for the Euro is 2,
 while for the Japanese Yen it's 0.
 In the case of pseudo-currencies, such as IMF Special Drawing Rights,
 -1 is returned.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the default number of fraction digits used with this currency`]
			]
		]],
		[/* method */ 'getNumericCode()', [
			[/* method description */
				[/* text */ 't', `Returns the ISO 4217 numeric code of this currency.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the ISO 4217 numeric code of this currency`]
			]
		]],
		[/* method */ 'getCurrencyCode()', [
			[/* method description */
				[/* text */ 't', `Gets the ISO 4217 currency code of this currency.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the ISO 4217 currency code of this currency.`]
			]
		]],
		[/* method */ 'getDisplayName()', [
			[/* method description */
				[/* text */ 't', `Gets the name that is suitable for displaying this currency for
 the default `],
				[/* reference */ 'r', `.Locale.Category#DISPLAY`],
				[/* text */ 't', ` locale.
 If there is no suitable display name found
 for the default locale, the ISO 4217 currency code is returned.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This is equivalent to calling
 `],
					[/* reference */ 'r', `#getDisplayName(java.util.Locale)`, `getDisplayName(Locale.getDefault(Locale.Category.DISPLAY))`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the display name of this currency for the default
     `],
				[/* reference */ 'r', `.Locale.Category#DISPLAY`],
				[/* text */ 't', ` locale`]
			]
		]],
		[/* method */ 'getDisplayName(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Gets the name that is suitable for displaying this currency for
 the specified locale.  If there is no suitable display name found
 for the specified locale, the ISO 4217 currency code is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale for which a display name for this currency is
 needed`]
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
				[/* text */ 't', `the display name of this currency for the specified locale`]
			]
		]],
		[/* method */ 'getNumericCodeAsString()', [
			[/* method description */
				[/* text */ 't', `Returns the 3 digit ISO 4217 numeric code of this currency as a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `.
 Unlike `],
				[/* reference */ 'r', `#getNumericCode()`, `getNumericCode()`],
				[/* text */ 't', `, which returns the numeric code as `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `,
 this method always returns the numeric code as a 3 digit string.
 e.g. a numeric value of 32 would be returned as "032",
 and a numeric value of 6 would be returned as "006".`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the 3 digit ISO 4217 numeric code of this currency as a `],
				[/* inline code block */ 'i', `String`]
			]
		]],
		[/* method */ 'getSymbol()', [
			[/* method description */
				[/* text */ 't', `Gets the symbol of this currency for the default
 `],
				[/* reference */ 'r', `.Locale.Category#DISPLAY`],
				[/* text */ 't', ` locale.
 For example, for the US Dollar, the symbol is "$" if the default
 locale is the US, while for other locales it may be "US$". If no
 symbol can be determined, the ISO 4217 currency code is returned.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the default `],
					[/* reference */ 'r', `.Locale.Category#DISPLAY`],
					[/* text */ 't', ` locale
 contains "rg" (region override)
 `],
					[/* reference */ 'r', `.Locale#def_locale_extension`],
					[/* text */ 't', `,
 the symbol returned from this method reflects
 the value specified with that extension.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This is equivalent to calling
 `],
					[/* reference */ 'r', `#getSymbol(java.util.Locale)`, `getSymbol(Locale.getDefault(Locale.Category.DISPLAY))`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the symbol of this currency for the default
     `],
				[/* reference */ 'r', `.Locale.Category#DISPLAY`],
				[/* text */ 't', ` locale`]
			]
		]],
		[/* method */ 'getSymbol(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Gets the symbol of this currency for the specified locale.
 For example, for the US Dollar, the symbol is "$" if the specified
 locale is the US, while for other locales it may be "US$". If no
 symbol can be determined, the ISO 4217 currency code is returned.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the specified `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` contains "rg" (region override)
 `],
					[/* reference */ 'r', `.Locale#def_locale_extension`],
					[/* text */ 't', `,
 the symbol returned from this method reflects
 the value specified with that extension.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale for which a display name for this currency is
 needed`]
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
				[/* text */ 't', `the symbol of this currency for the specified locale`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns the ISO 4217 currency code of this currency.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the ISO 4217 currency code of this currency`]
			]
		]],
		[/* method */ 'getInstance(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `Currency`],
				[/* text */ 't', ` instance for the given currency code.`]
			],
			[/* parameters */
				[/* parameter */ 'currencyCode', [/* parameter description */
					[/* text */ 't', `the ISO 4217 code of the currency`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `currencyCode`],
					[/* text */ 't', ` is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `currencyCode`],
					[/* text */ 't', ` is not
 a supported ISO 4217 code.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Currency`],
				[/* text */ 't', ` instance for the given currency code`]
			]
		]],
		[/* method */ 'getInstance(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `Currency`],
				[/* text */ 't', ` instance for the country of the
 given locale. The language and variant components of the locale
 are ignored. The result may vary over time, as countries change their
 currencies. For example, for the original member countries of the
 European Monetary Union, the method returns the old national currencies
 until December 31, 2001, and the Euro from January 1, 2002, local time
 of the respective countries.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the specified `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` contains "cu" and/or "rg"
 `],
					[/* reference */ 'r', `.Locale#def_locale_extension`],
					[/* text */ 't', `,
 the instance returned from this method reflects
 the values specified with those extensions. If both "cu" and "rg" are
 specified, the currency from the "cu" extension supersedes the implicit one
 from the "rg" extension.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The method returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` for territories that don't
 have a currency, such as Antarctica.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale for whose country a `],
					[/* inline code block */ 'i', `Currency`],
					[/* text */ 't', `
 instance is needed`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', `
 is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the country of the given `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', `
 is not a supported ISO 3166 country code.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Currency`],
				[/* text */ 't', ` instance for the country of the given
 locale, or `],
				[/* inline code block */ 'i', `null`]
			]
		]],
		[/* method */ 'getAvailableCurrencies()', [
			[/* method description */
				[/* text */ 't', `Gets the set of available currencies.  The returned set of currencies
 contains all of the available currencies, which may include currencies
 that represent obsolete ISO 4217 codes.  The set can be modified
 without affecting the available currencies in the runtime.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the set of available currencies.  If there is no currency
    available in the runtime, the returned set is empty.`]
			]
		]]
	],
]);
