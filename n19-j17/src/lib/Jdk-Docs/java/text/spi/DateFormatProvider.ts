import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.text.spi.DateFormatProvider', [
	[/* class description */
		[/* text */ 't', `An abstract class for service providers that
 provide concrete implementations of the
 `],
		[/* reference */ 'r', `java.text.DateFormat`, `DateFormat`],
		[/* text */ 't', ` class.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Sole constructor.  (For invocation by subclass constructors, typically
 implicit.)`]
			],
			/* parameters */,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getDateInstance(int,java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `DateFormat`],
				[/* text */ 't', ` instance which formats date
 with the given formatting style for the specified locale.`]
			],
			[/* parameters */
				[/* parameter */ 'style', [/* parameter description */
					[/* text */ 't', `the given formatting style.  Either one of
     `],
					[/* reference */ 'r', `java.text.DateFormat#SHORT`, `DateFormat.SHORT`],
					[/* text */ 't', `,
     `],
					[/* reference */ 'r', `java.text.DateFormat#MEDIUM`, `DateFormat.MEDIUM`],
					[/* text */ 't', `,
     `],
					[/* reference */ 'r', `java.text.DateFormat#LONG`, `DateFormat.LONG`],
					[/* text */ 't', `, or
     `],
					[/* reference */ 'r', `java.text.DateFormat#FULL`, `DateFormat.FULL`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the desired locale.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `style`],
					[/* text */ 't', ` is invalid,
     or if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` isn't
     one of the locales returned from
     `],
					[/* reference */ 'r', `java.util.spi.LocaleServiceProvider#getAvailableLocales()`, `getAvailableLocales()`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a date formatter.`]
			]
		]],
		[/* method */ 'getDateTimeInstance(int,int,java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `DateFormat`],
				[/* text */ 't', ` instance which formats date and time
 with the given formatting style for the specified locale.`]
			],
			[/* parameters */
				[/* parameter */ 'dateStyle', [/* parameter description */
					[/* text */ 't', `the given date formatting style.  Either one of
     `],
					[/* reference */ 'r', `java.text.DateFormat#SHORT`, `DateFormat.SHORT`],
					[/* text */ 't', `,
     `],
					[/* reference */ 'r', `java.text.DateFormat#MEDIUM`, `DateFormat.MEDIUM`],
					[/* text */ 't', `,
     `],
					[/* reference */ 'r', `java.text.DateFormat#LONG`, `DateFormat.LONG`],
					[/* text */ 't', `, or
     `],
					[/* reference */ 'r', `java.text.DateFormat#FULL`, `DateFormat.FULL`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'timeStyle', [/* parameter description */
					[/* text */ 't', `the given time formatting style.  Either one of
     `],
					[/* reference */ 'r', `java.text.DateFormat#SHORT`, `DateFormat.SHORT`],
					[/* text */ 't', `,
     `],
					[/* reference */ 'r', `java.text.DateFormat#MEDIUM`, `DateFormat.MEDIUM`],
					[/* text */ 't', `,
     `],
					[/* reference */ 'r', `java.text.DateFormat#LONG`, `DateFormat.LONG`],
					[/* text */ 't', `, or
     `],
					[/* reference */ 'r', `java.text.DateFormat#FULL`, `DateFormat.FULL`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the desired locale.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `dateStyle`],
					[/* text */ 't', ` or
     `],
					[/* inline code block */ 'i', `timeStyle`],
					[/* text */ 't', ` is invalid,
     or if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` isn't
     one of the locales returned from
     `],
					[/* reference */ 'r', `java.util.spi.LocaleServiceProvider#getAvailableLocales()`, `getAvailableLocales()`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a date/time formatter.`]
			]
		]],
		[/* method */ 'getTimeInstance(int,java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `DateFormat`],
				[/* text */ 't', ` instance which formats time
 with the given formatting style for the specified locale.`]
			],
			[/* parameters */
				[/* parameter */ 'style', [/* parameter description */
					[/* text */ 't', `the given formatting style.  Either one of
     `],
					[/* reference */ 'r', `java.text.DateFormat#SHORT`, `DateFormat.SHORT`],
					[/* text */ 't', `,
     `],
					[/* reference */ 'r', `java.text.DateFormat#MEDIUM`, `DateFormat.MEDIUM`],
					[/* text */ 't', `,
     `],
					[/* reference */ 'r', `java.text.DateFormat#LONG`, `DateFormat.LONG`],
					[/* text */ 't', `, or
     `],
					[/* reference */ 'r', `java.text.DateFormat#FULL`, `DateFormat.FULL`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the desired locale.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `style`],
					[/* text */ 't', ` is invalid,
     or if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` isn't
     one of the locales returned from
     `],
					[/* reference */ 'r', `java.util.spi.LocaleServiceProvider#getAvailableLocales()`, `getAvailableLocales()`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a time formatter.`]
			]
		]]
	],
	/* enum values */ UDF
]);
