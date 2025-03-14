import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.chrono.MinguoEra', [
	[/* class description */
		[/* text */ 't', `An era in the Minguo calendar system.
 `],
		[/* block */ 'b', `
 The Minguo calendar system has two eras.
 The current era, for years from 1 onwards, is known as the 'Republic of China' era.
 All previous years, zero or earlier in the proleptic count or one and greater
 in the year-of-era count, are part of the 'Before Republic of China' era.

 `],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `year-of-era`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `era`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `proleptic-year`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `ISO proleptic-year`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* text */ 't', `2`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `ROC`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `2`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1913`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `ROC`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `1`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1912`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `BEFORE_ROC`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `0`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1911`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* text */ 't', `2`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `BEFORE_ROC`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `-1`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1910`]
					]]
				]]
			]],
		],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Do not use `],
			[/* inline code block */ 'i', `ordinal()`],
			[/* text */ 't', ` to obtain the numeric representation of `],
			[/* inline code block */ 'i', `MinguoEra`],
			[/* text */ 't', `.
 Use `],
			[/* inline code block */ 'i', `getValue()`],
			[/* text */ 't', ` instead.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getValue()', [
			[/* method description */
				[/* text */ 't', `Gets the numeric era `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value.
 `],
				[/* block */ 'b', `
 The era BEFORE_ROC has the value 0, while the era ROC has the value 1.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the era value, from 0 (BEFORE_ROC) to 1 (ROC)`]
			]
		]],
		[/* method */ 'getDisplayName(java.time.format.TextStyle,java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Gets the textual representation of this era.
 `],
				[/* block */ 'b', `
 This returns the textual name used to identify the era,
 suitable for presentation to the user.
 The parameters control the style of the returned text and the locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If no textual mapping is found then the `],
					[/* reference */ 'r', `java.time.chrono.Era#getValue()`, `numeric value`],
					[/* text */ 't', ` is returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'style', [/* parameter description */
					[/* text */ 't', `the style of the text required, not null`]
				]],
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale to use, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the text value of the era, not null`]
			]
		]],
		[/* method */ 'of(int)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `MinguoEra`],
				[/* text */ 't', ` from an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* inline code block */ 'i', `MinguoEra`],
					[/* text */ 't', ` is an enum representing the Minguo eras of BEFORE_ROC/ROC.
 This factory allows the enum to be obtained from the `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'minguoEra', [/* parameter description */
					[/* text */ 't', `the BEFORE_ROC/ROC value to represent, from 0 (BEFORE_ROC) to 1 (ROC)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the value is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the era singleton, not null`]
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
		]]
	],
]);
