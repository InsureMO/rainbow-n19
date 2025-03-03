import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.chrono.IsoEra', [
	[/* class description */
		[/* text */ 't', `An era in the ISO calendar system.
 `],
		[/* block */ 'b', `
 The ISO-8601 standard does not define eras.
 A definition has therefore been created with two eras - 'Current era' (CE) for
 years on or after 0001-01-01 (ISO), and 'Before current era' (BCE) for years before that.

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
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* text */ 't', `2`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `CE`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `2`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `CE`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `1`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `BCE`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `0`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* text */ 't', `2`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `BCE`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `-1`]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Do not use `],
			[/* inline code block */ 'i', `ordinal()`],
			[/* text */ 't', ` to obtain the numeric representation of `],
			[/* inline code block */ 'i', `IsoEra`],
			[/* text */ 't', `.
 Use `],
			[/* inline code block */ 'i', `getValue()`],
			[/* text */ 't', ` instead.`]
		]]
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
		[/* method */ 'getValue()', [
			[/* method description */
				[/* text */ 't', `Gets the numeric era `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value.
 `],
				[/* block */ 'b', `
 The era BCE has the value 0, while the era CE has the value 1.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the era value, from 0 (BCE) to 1 (CE)`]
			]
		]],
		[/* method */ 'of(int)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `IsoEra`],
				[/* text */ 't', ` from an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value.
 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `IsoEra`],
					[/* text */ 't', ` is an enum representing the ISO eras of BCE/CE.
 This factory allows the enum to be obtained from the `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'isoEra', [/* parameter description */
					[/* text */ 't', `the BCE/CE value to represent, from 0 (BCE) to 1 (CE)`]
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
		]]
	],
]);
