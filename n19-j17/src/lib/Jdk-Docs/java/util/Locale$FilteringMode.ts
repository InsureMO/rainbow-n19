import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Locale$FilteringMode', [
	[/* class description */
		[/* text */ 't', `This enum provides constants to select a filtering mode for locale
 matching. Refer to `],
		[/* external link */ 'a', `http://tools.ietf.org/html/rfc4647`, `RFC 4647 Matching of Language Tags`],
		[/* text */ 't', ` for details.

 `],
		[/* block */ 'b', `As an example, think of two Language Priority Lists each of which
 includes only one language range and a set of following language tags:

 `],
		[/* code block */ 'c', `    de (German)
    de-DE (German, Germany)
    de-Deva (German, in Devanagari script)
    de-Deva-DE (German, in Devanagari script, Germany)
    de-DE-1996 (German, Germany, orthography of 1996)
    de-Latn-DE (German, in Latin script, Germany)
    de-Latn-DE-1996 (German, in Latin script, Germany, orthography of 1996)
 `],
		[/* text */ 't', `

 The filtering method will behave as follows:

 `],
		[/* table */ 'tbl',
			[/* caption */ 'tc', [
				[/* text */ 't', `Filtering method behavior`]
			]],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Filtering Mode`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Language Priority List: `],
						[/* inline code block */ 'i', `"de-DE"`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Language Priority List: `],
						[/* inline code block */ 'i', `"de-*-DE"`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `
 `],
						[/* text */ 't', `AUTOSELECT_FILTERING`],
						[/* text */ 't', `
 `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `
 Performs `],
						[/* text */ 't', `basic`],
						[/* text */ 't', ` filtering and returns `],
						[/* inline code block */ 'i', `"de-DE"`],
						[/* text */ 't', ` and
 `],
						[/* inline code block */ 'i', `"de-DE-1996"`],
						[/* text */ 't', `.
 `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `
 Performs `],
						[/* text */ 't', `extended`],
						[/* text */ 't', ` filtering and returns `],
						[/* inline code block */ 'i', `"de-DE"`],
						[/* text */ 't', `,
 `],
						[/* inline code block */ 'i', `"de-Deva-DE"`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `"de-DE-1996"`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `"de-Latn-DE"`],
						[/* text */ 't', `, and
 `],
						[/* inline code block */ 'i', `"de-Latn-DE-1996"`],
						[/* text */ 't', `.
 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `
 `],
						[/* text */ 't', `EXTENDED_FILTERING`],
						[/* text */ 't', `
 `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `
 Performs `],
						[/* text */ 't', `extended`],
						[/* text */ 't', ` filtering and returns `],
						[/* inline code block */ 'i', `"de-DE"`],
						[/* text */ 't', `,
 `],
						[/* inline code block */ 'i', `"de-Deva-DE"`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `"de-DE-1996"`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `"de-Latn-DE"`],
						[/* text */ 't', `, and
 `],
						[/* inline code block */ 'i', `"de-Latn-DE-1996"`],
						[/* text */ 't', `.
 `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Same as above.`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `
 `],
						[/* text */ 't', `IGNORE_EXTENDED_RANGES`],
						[/* text */ 't', `
 `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `
 Performs `],
						[/* text */ 't', `basic`],
						[/* text */ 't', ` filtering and returns `],
						[/* inline code block */ 'i', `"de-DE"`],
						[/* text */ 't', ` and
 `],
						[/* inline code block */ 'i', `"de-DE-1996"`],
						[/* text */ 't', `.
 `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `
 Performs `],
						[/* text */ 't', `basic`],
						[/* text */ 't', ` filtering and returns `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', ` because
 nothing matches.
 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `
 `],
						[/* text */ 't', `MAP_EXTENDED_RANGES`],
						[/* text */ 't', `
 `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Same as above.`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `
 Performs `],
						[/* text */ 't', `basic`],
						[/* text */ 't', ` filtering and returns `],
						[/* inline code block */ 'i', `"de-DE"`],
						[/* text */ 't', ` and
 `],
						[/* inline code block */ 'i', `"de-DE-1996"`],
						[/* text */ 't', ` because `],
						[/* inline code block */ 'i', `"de-*-DE"`],
						[/* text */ 't', ` is mapped to
 `],
						[/* inline code block */ 'i', `"de-DE"`],
						[/* text */ 't', `.
 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `
 `],
						[/* text */ 't', `REJECT_EXTENDED_RANGES`],
						[/* text */ 't', `
 `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Same as above.`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `
 Throws `],
						[/* reference */ 'r', `java.lang.IllegalArgumentException`],
						[/* text */ 't', ` because `],
						[/* inline code block */ 'i', `"de-*-DE"`],
						[/* text */ 't', ` is
 not a valid basic language range.
 `]
					]]
				]]
			]],
		],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'values()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing the constants of this enum class, in
the order they are declared.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array containing the constants of this enum class, in the order they are declared`]
			]
		]],
		[/* method */ 'valueOf(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the enum constant of this class with the specified name.
The string must match `],
				[/* text */ 't', `exactly`],
				[/* text */ 't', ` an identifier used to declare an
enum constant in this class.  (Extraneous whitespace characters are 
not permitted.)`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the enum constant to be returned.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if this enum class has no constant with the specified name`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the enum constant with the specified name`]
			]
		]]
	],
]);
