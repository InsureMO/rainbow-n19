import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.format.FormatStyle', [
	[/* class description */
		[/* text */ 't', `Enumeration of the style of a localized date, time or date-time formatter.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 These styles are used when obtaining a date-time style from configuration.
 See `],
			[/* reference */ 'r', `java.time.format.DateTimeFormatter`, `DateTimeFormatter`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `java.time.format.DateTimeFormatterBuilder`, `DateTimeFormatterBuilder`],
			[/* text */ 't', ` for usage.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
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
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an array containing the constants of this enum class, in the order they are declared`]
			]
		]]
	],
	[/* enum values */
		[/* enum value */ 'FULL', [
			[/* enum value description */
				[/* text */ 't', `Full text style, with the most detail.
 For example, the format might be 'Tuesday, April 12, 1952 AD' or '3:30:42pm PST'.`]
			],
		]],
		[/* enum value */ 'LONG', [
			[/* enum value description */
				[/* text */ 't', `Long text style, with lots of detail.
 For example, the format might be 'January 12, 1952'.`]
			],
		]],
		[/* enum value */ 'MEDIUM', [
			[/* enum value description */
				[/* text */ 't', `Medium text style, with some detail.
 For example, the format might be 'Jan 12, 1952'.`]
			],
		]],
		[/* enum value */ 'SHORT', [
			[/* enum value description */
				[/* text */ 't', `Short text style, typically numeric.
 For example, the format might be '12.13.52' or '3:30pm'.`]
			],
		]]
	],
]);
