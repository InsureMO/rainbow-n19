import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.zone.ZoneOffsetTransitionRule$TimeDefinition', [
	[/* class description */
		[/* text */ 't', `A definition of the way a local time can be converted to the actual
 transition date-time.
 `],
		[/* block */ 'b', `
 Time zone rules are expressed in one of three ways:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', `Relative to UTC`],
			[/* block */ 'b', `Relative to the standard offset in force`],
			[/* block */ 'b', `Relative to the wall offset (what you would see on a clock on the wall)`]
		]],
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
		]],
		[/* method */ 'createDateTime(java.time.LocalDateTime,java.time.ZoneOffset,java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Converts the specified local date-time to the local date-time actually
 seen on a wall clock.
 `],
				[/* block */ 'b', `
 This method converts using the type of this enum.
 The output is defined relative to the 'before' offset of the transition.
 `],
				[/* block */ 'b', `
 The UTC type uses the UTC offset.
 The STANDARD type uses the standard offset.
 The WALL type returns the input date-time.
 The result is intended for use with the wall-offset.`]
			],
			[/* parameters */
				[/* parameter */ 'dateTime', [/* parameter description */
					[/* text */ 't', `the local date-time, not null`]
				]],
				[/* parameter */ 'standardOffset', [/* parameter description */
					[/* text */ 't', `the standard offset, not null`]
				]],
				[/* parameter */ 'wallOffset', [/* parameter description */
					[/* text */ 't', `the wall offset, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the date-time relative to the wall/before offset, not null`]
			]
		]]
	],
]);
