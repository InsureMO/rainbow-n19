import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.text.spi.DateFormatSymbolsProvider', [
	[/* class description */
		[/* text */ 't', `An abstract class for service providers that
 provide instances of the
 `],
		[/* reference */ 'r', `java.text.DateFormatSymbols`, `DateFormatSymbols`],
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
		[/* method */ 'getInstance(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `DateFormatSymbols`],
				[/* text */ 't', ` instance for the
 specified locale.`]
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
					[/* reference */ 'r', `java.util.spi.LocaleServiceProvider#getAvailableLocales()`, `getAvailableLocales()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `DateFormatSymbols`],
				[/* text */ 't', ` instance.`]
			]
		]]
	],
	/* enum values */ UDF
]);
