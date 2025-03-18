import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.format.ResolverStyle', [
	[/* class description */
		[/* text */ 't', `Enumeration of different ways to resolve dates and times.
 `],
		[/* block */ 'b', `
 Parsing a text string occurs in two phases.
 Phase 1 is a basic text parse according to the fields added to the builder.
 Phase 2 resolves the parsed field-value pairs into date and/or time objects.
 This style is used to control how phase 2, resolving, happens.`]
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
		[/* enum value */ 'STRICT', [
			[/* enum value description */
				[/* text */ 't', `Style to resolve dates and times strictly.
 `],
				[/* block */ 'b', `
 Using strict resolution will ensure that all parsed values are within
 the outer range of valid values for the field. Individual fields may
 be further processed for strictness.
 `],
				[/* block */ 'b', `
 For example, resolving year-month and day-of-month in the ISO calendar
 system using strict mode will ensure that the day-of-month is valid
 for the year-month, rejecting invalid values.`]
			],
		]],
		[/* enum value */ 'SMART', [
			[/* enum value description */
				[/* text */ 't', `Style to resolve dates and times in a smart, or intelligent, manner.
 `],
				[/* block */ 'b', `
 Using smart resolution will perform the sensible default for each
 field, which may be the same as strict, the same as lenient, or a third
 behavior. Individual fields will interpret this differently.
 `],
				[/* block */ 'b', `
 For example, resolving year-month and day-of-month in the ISO calendar
 system using smart mode will ensure that the day-of-month is from
 1 to 31, converting any value beyond the last valid day-of-month to be
 the last valid day-of-month.`]
			],
		]],
		[/* enum value */ 'LENIENT', [
			[/* enum value description */
				[/* text */ 't', `Style to resolve dates and times leniently.
 `],
				[/* block */ 'b', `
 Using lenient resolution will resolve the values in an appropriate
 lenient manner. Individual fields will interpret this differently.
 `],
				[/* block */ 'b', `
 For example, lenient mode allows the month in the ISO calendar system
 to be outside the range 1 to 12.
 For example, month 15 is treated as being 3 months after month 12.`]
			],
		]]
	],
]);
