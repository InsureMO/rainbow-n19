import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.text.spi.NumberFormatProvider', [
	[/* class description */
		[/* text */ 't', `An abstract class for service providers that
 provide concrete implementations of the
 `],
		[/* reference */ 'r', `java.text.NumberFormat`],
		[/* text */ 't', ` class.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Sole constructor.  (For invocation by subclass constructors, typically
 implicit.)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getCurrencyInstance(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `NumberFormat`],
				[/* text */ 't', ` instance which formats
 monetary values for the specified locale.`]
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
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` isn't
     one of the locales returned from
     `],
					[/* external link */ 'a', `../../util/spi/LocaleServiceProvider.html#getAvailableLocales()`, `getAvailableLocales()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a currency formatter`]
			]
		]],
		[/* method */ 'getIntegerInstance(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `NumberFormat`],
				[/* text */ 't', ` instance which formats
 integer values for the specified locale.
 The returned number format is configured to
 round floating point numbers to the nearest integer using
 half-even rounding (see `],
				[/* external link */ 'a', `../../math/RoundingMode.html#HALF_EVEN`, `HALF_EVEN`],
				[/* text */ 't', `)
 for formatting, and to parse only the integer part of
 an input string (see `],
				[/* external link */ 'a', `../NumberFormat.html#isParseIntegerOnly()`, `isParseIntegerOnly`],
				[/* text */ 't', `).`]
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
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` isn't
     one of the locales returned from
     `],
					[/* external link */ 'a', `../../util/spi/LocaleServiceProvider.html#getAvailableLocales()`, `getAvailableLocales()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a number format for integer values`]
			]
		]],
		[/* method */ 'getNumberInstance(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a new general-purpose `],
				[/* inline code block */ 'i', `NumberFormat`],
				[/* text */ 't', ` instance for
 the specified locale.`]
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
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` isn't
     one of the locales returned from
     `],
					[/* external link */ 'a', `../../util/spi/LocaleServiceProvider.html#getAvailableLocales()`, `getAvailableLocales()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a general-purpose number formatter`]
			]
		]],
		[/* method */ 'getPercentInstance(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `NumberFormat`],
				[/* text */ 't', ` instance which formats
 percentage values for the specified locale.`]
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
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` isn't
     one of the locales returned from
     `],
					[/* external link */ 'a', `../../util/spi/LocaleServiceProvider.html#getAvailableLocales()`, `getAvailableLocales()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a percent formatter`]
			]
		]],
		[/* method */ 'getCompactNumberInstance(java.util.Locale,java.text.NumberFormat.Style)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `NumberFormat`],
				[/* text */ 't', ` instance which formats
 a number in its compact form for the specified
 `],
				[/* inline code block */ 'i', `locale`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `formatStyle`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the desired locale`]
				]],
				[/* parameter */ 'formatStyle', [/* parameter description */
					[/* text */ 't', `the style for formatting a number`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `formatStyle`],
					[/* text */ 't', `
     is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` is not
     one of the locales returned from
     `],
					[/* external link */ 'a', `../../util/spi/LocaleServiceProvider.html#getAvailableLocales()`, `getAvailableLocales()`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the implementation does not
      support this method`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a compact number formatter`]
			]
		]]
	],
]);
