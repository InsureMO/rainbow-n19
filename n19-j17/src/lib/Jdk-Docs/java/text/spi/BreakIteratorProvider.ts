import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.text.spi.BreakIteratorProvider', [
	[/* class description */
		[/* text */ 't', `An abstract class for service providers that
 provide concrete implementations of the
 `],
		[/* reference */ 'r', `java.text.BreakIterator`],
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
		[/* method */ 'getWordInstance(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `BreakIterator`],
				[/* text */ 't', ` instance
 for `],
				[/* reference */ 'r', `java.BreakIterator#word`],
				[/* text */ 't', `
 for the given locale.`]
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
					[/* reference */ 'r', `java.text.spi.LocaleServiceProvider#getAvailableLocales()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A break iterator for word breaks`]
			]
		]],
		[/* method */ 'getLineInstance(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `BreakIterator`],
				[/* text */ 't', ` instance
 for `],
				[/* reference */ 'r', `java.BreakIterator#line`],
				[/* text */ 't', `
 for the given locale.`]
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
					[/* reference */ 'r', `java.text.spi.LocaleServiceProvider#getAvailableLocales()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A break iterator for line breaks`]
			]
		]],
		[/* method */ 'getCharacterInstance(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `BreakIterator`],
				[/* text */ 't', ` instance
 for `],
				[/* reference */ 'r', `java.BreakIterator#character`],
				[/* text */ 't', `
 for the given locale.`]
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
					[/* reference */ 'r', `java.text.spi.LocaleServiceProvider#getAvailableLocales()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A break iterator for character breaks`]
			]
		]],
		[/* method */ 'getSentenceInstance(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `BreakIterator`],
				[/* text */ 't', ` instance
 for `],
				[/* reference */ 'r', `java.BreakIterator#sentence`],
				[/* text */ 't', `
 for the given locale.`]
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
					[/* reference */ 'r', `java.text.spi.LocaleServiceProvider#getAvailableLocales()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A break iterator for sentence breaks`]
			]
		]]
	],
]);
