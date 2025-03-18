import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.format.SignStyle', [
	[/* class description */
		[/* text */ 't', `Enumeration of ways to handle the positive/negative sign.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The formatting engine allows the positive and negative signs of numbers
 to be controlled using this enum.
 See `],
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
		[/* enum value */ 'NORMAL', [
			[/* enum value description */
				[/* text */ 't', `Style to output the sign only if the value is negative.
 `],
				[/* block */ 'b', `
 In strict parsing, the negative sign will be accepted and the positive sign rejected.
 In lenient parsing, any sign will be accepted.`]
			],
		]],
		[/* enum value */ 'ALWAYS', [
			[/* enum value description */
				[/* text */ 't', `Style to always output the sign, where zero will output '+'.
 `],
				[/* block */ 'b', `
 In strict parsing, the absence of a sign will be rejected.
 In lenient parsing, any sign will be accepted, with the absence
 of a sign treated as a positive number.`]
			],
		]],
		[/* enum value */ 'NEVER', [
			[/* enum value description */
				[/* text */ 't', `Style to never output sign, only outputting the absolute value.
 `],
				[/* block */ 'b', `
 In strict parsing, any sign will be rejected.
 In lenient parsing, any sign will be accepted unless the width is fixed.`]
			],
		]],
		[/* enum value */ 'NOT_NEGATIVE', [
			[/* enum value description */
				[/* text */ 't', `Style to block negative values, throwing an exception on printing.
 `],
				[/* block */ 'b', `
 In strict parsing, any sign will be rejected.
 In lenient parsing, any sign will be accepted unless the width is fixed.`]
			],
		]],
		[/* enum value */ 'EXCEEDS_PAD', [
			[/* enum value description */
				[/* text */ 't', `Style to always output the sign if the value exceeds the pad width.
 A negative value will always output the '-' sign.
 `],
				[/* block */ 'b', `
 In strict parsing, the sign will be rejected unless the pad width is exceeded.
 In lenient parsing, any sign will be accepted, with the absence
 of a sign treated as a positive number.`]
			],
		]]
	],
]);
