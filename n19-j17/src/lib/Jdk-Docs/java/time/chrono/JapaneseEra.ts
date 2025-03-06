import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.chrono.JapaneseEra', [
	[/* class description */
		[/* text */ 't', `An era in the Japanese Imperial calendar system.
 `],
		[/* block */ 'b', `
 The Japanese government defines the official name and start date of
 each era. Eras are consecutive and their date ranges do not overlap,
 so the end date of one era is always the day before the start date
 of the next era.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The Java SE Platform supports all eras defined by the Japanese government,
 beginning with the Meiji era. Each era is identified in the Platform by an
 integer value and a name. The `],
			[/* reference */ 'r', `#of(int)`, `of(int)`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `#valueOf(java.lang.String)`, `valueOf(String)`],
			[/* text */ 't', `
 methods may be used to obtain a singleton instance of `],
			[/* inline code block */ 'i', `JapaneseEra`],
			[/* text */ 't', `
 for each era. The `],
			[/* reference */ 'r', `#values()`, `values()`],
			[/* text */ 't', ` method returns the singleton instances
 of all supported eras.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 For convenience, this class declares a number of public static final fields
 that refer to singleton instances returned by the `],
			[/* reference */ 'r', `#values()`, `values()`],
			[/* text */ 't', ` method.`]
		]]
	],
	[/* fields */
		[/* field */ 'HEISEI', [
			[/* field description */
				[/* text */ 't', `The singleton instance for the 'Heisei' era (1989-01-08 - 2019-04-30)
 which has the value 2.`]
			],
		]],
		[/* field */ 'MEIJI', [
			[/* field description */
				[/* text */ 't', `The singleton instance for the 'Meiji' era (1868-01-01 - 1912-07-29)
 which has the value -1.`]
			],
		]],
		[/* field */ 'REIWA', [
			[/* field description */
				[/* text */ 't', `The singleton instance for the 'Reiwa' era (2019-05-01 - )
 which has the value 3. The end date of this era is not specified, unless
 the Japanese Government defines it.`]
			],
		]],
		[/* field */ 'SHOWA', [
			[/* field description */
				[/* text */ 't', `The singleton instance for the 'Showa' era (1926-12-25 - 1989-01-07)
 which has the value 1.`]
			],
		]],
		[/* field */ 'TAISHO', [
			[/* field description */
				[/* text */ 't', `The singleton instance for the 'Taisho' era (1912-07-30 - 1926-12-24)
 which has the value 0.`]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getValue()', [
			[/* method description */
				[/* text */ 't', `Gets the numeric era `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* text */ 't', `SHOWA`],
					[/* text */ 't', ` era that contains 1970-01-01 (ISO calendar system) has the value 1.
 Later eras are numbered from 2 (`],
					[/* text */ 't', `HEISEI`],
					[/* text */ 't', `).
 Earlier eras are numbered 0 (`],
					[/* text */ 't', `TAISHO`],
					[/* text */ 't', `), -1 (`],
					[/* text */ 't', `MEIJI`],
					[/* text */ 't', `)).`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the era value`]
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
		[/* method */ 'toString()', UDF],
		[/* method */ 'range(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the range of valid values for the specified field.
 `],
				[/* block */ 'b', `
 The range object expresses the minimum and maximum valid values for a field.
 This era is used to enhance the accuracy of the returned range.
 If it is not possible to return the range, because the field is not supported
 or for some other reason, an exception is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is a `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
					[/* text */ 't', ` then the query is implemented here.
 The `],
					[/* inline code block */ 'i', `ERA`],
					[/* text */ 't', ` field returns the range.
 All other `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', ` instances will throw an `],
					[/* inline code block */ 'i', `UnsupportedTemporalTypeException`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is not a `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', `, then the result of this method
 is obtained by invoking `],
					[/* inline code block */ 'i', `TemporalField.rangeRefinedBy(TemporalAccessor)`],
					[/* text */ 't', `
 passing `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` as the argument.
 Whether the range can be obtained is determined by the field.
 `]
				]],
				[/* block */ 'b', `
 The range of valid Japanese eras can change over time due to the nature
 of the Japanese calendar system.`]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to query the range for, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the range for the field cannot be obtained`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the unit is not supported`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the range of valid values for the field, not null`]
			]
		]],
		[/* method */ 'of(int)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `JapaneseEra`],
				[/* text */ 't', ` from an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value.
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The value `],
						[/* inline code block */ 'i', `1`],
						[/* text */ 't', ` is associated with the 'Showa' era, because
 it contains 1970-01-01 (ISO calendar system).`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The values `],
						[/* inline code block */ 'i', `-1`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `0`],
						[/* text */ 't', ` are associated with two earlier
 eras, Meiji and Taisho, respectively.`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `A value greater than `],
						[/* inline code block */ 'i', `1`],
						[/* text */ 't', ` is associated with a later era,
 beginning with Heisei (`],
						[/* inline code block */ 'i', `2`],
						[/* text */ 't', `).`]
					]]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Every instance of `],
					[/* inline code block */ 'i', `JapaneseEra`],
					[/* text */ 't', ` that is returned from the `],
					[/* reference */ 'r', `#values()`, `values()`],
					[/* text */ 't', `
 method has an int value (available via `],
					[/* reference */ 'r', `java.time.chrono.Era#getValue()`, `Era.getValue()`],
					[/* text */ 't', ` which is
 accepted by this method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'japaneseEra', [/* parameter description */
					[/* text */ 't', `the era to represent`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the value is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `JapaneseEra`],
				[/* text */ 't', ` singleton, not null`]
			]
		]],
		[/* method */ 'valueOf(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `JapaneseEra`],
				[/* text */ 't', ` with the name.
 `],
				[/* block */ 'b', `
 The string must match exactly the name of the era.
 (Extraneous whitespace characters are not permitted.)
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Valid era names are the names of eras returned from `],
					[/* reference */ 'r', `#values()`, `values()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'japaneseEra', [/* parameter description */
					[/* text */ 't', `the japaneseEra name; non-null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if there is not JapaneseEra with the specified name`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `JapaneseEra`],
				[/* text */ 't', ` singleton, never null`]
			]
		]],
		[/* method */ 'values()', [
			[/* method description */
				[/* text */ 't', `Returns an array of JapaneseEras. The array may contain eras defined
 by the Japanese government beyond the known era singletons.

 `],
				[/* block */ 'b', `
 This method may be used to iterate over the JapaneseEras as follows:
 `],
				[/* code block */ 'c', ` for (JapaneseEra c : JapaneseEra.values())
     System.out.println(c);
 `],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array of JapaneseEras`]
			]
		]]
	],
]);
