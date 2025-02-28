import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.format.TextStyle', [
	[/* class description */
		[/* text */ 't', `Enumeration of the style of text formatting and parsing.
 `],
		[/* block */ 'b', `
 Text styles define three sizes for the formatted text - 'full', 'short' and 'narrow'.
 Each of these three sizes is available in both 'standard' and 'stand-alone' variations.
 `],
		[/* block */ 'b', `
 The difference between the three sizes is obvious in most languages.
 For example, in English the 'full' month is 'January', the 'short' month is 'Jan'
 and the 'narrow' month is 'J'. Note that the narrow size is often not unique.
 For example, 'January', 'June' and 'July' all have the 'narrow' text 'J'.
 `],
		[/* block */ 'b', `
 The difference between the 'standard' and 'stand-alone' forms is trickier to describe
 as there is no difference in English. However, in other languages there is a difference
 in the word used when the text is used alone, as opposed to in a complete date.
 For example, the word used for a month when used alone in a date picker is different
 to the word used for month in association with a day and year in a date.`]
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
		]],
		[/* method */ 'isStandalone()', [
			[/* method description */
				[/* text */ 't', `Returns true if the Style is a stand-alone style.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the style is a stand-alone style.`]
			]
		]],
		[/* method */ 'asStandalone()', [
			[/* method description */
				[/* text */ 't', `Returns the stand-alone style with the same size.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the stand-alone style with the same size`]
			]
		]],
		[/* method */ 'asNormal()', [
			[/* method description */
				[/* text */ 't', `Returns the normal style with the same size.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the normal style with the same size`]
			]
		]]
	],
]);
