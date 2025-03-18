import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.text.spi.DecimalFormatSymbolsProvider', [
	[/* class description */
		[/* text */ 't', `An abstract class for service providers that
 provide instances of the
 `],
		[/* reference */ 'r', `java.text.DecimalFormatSymbols`, `DecimalFormatSymbols`],
		[/* text */ 't', ` class.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The requested `],
			[/* inline code block */ 'i', `Locale`],
			[/* text */ 't', ` may contain an `],
			[/* reference */ 'r', `java.util.Locale#def_locale_extension`, `extension`],
			[/* text */ 't', ` for
 specifying the desired numbering system. For example, `],
			[/* inline code block */ 'i', `"ar-u-nu-arab"`],
			[/* text */ 't', `
 (in the BCP 47 language tag form) specifies Arabic with the Arabic-Indic
 digits and symbols, while `],
			[/* inline code block */ 'i', `"ar-u-nu-latn"`],
			[/* text */ 't', ` specifies Arabic with the
 Latin digits and symbols. Refer to the `],
			[/* text */ 't', `Unicode Locale Data Markup
 Language (LDML)`],
			[/* text */ 't', ` specification for numbering systems.`]
		]]
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
				[/* inline code block */ 'i', `DecimalFormatSymbols`],
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
				[/* inline code block */ 'i', `DecimalFormatSymbols`],
				[/* text */ 't', ` instance.`]
			]
		]]
	],
	/* enum values */ UDF
]);
