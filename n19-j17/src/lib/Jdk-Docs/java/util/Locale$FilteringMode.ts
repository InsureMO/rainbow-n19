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
		[/* table */ 't', ''],
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
