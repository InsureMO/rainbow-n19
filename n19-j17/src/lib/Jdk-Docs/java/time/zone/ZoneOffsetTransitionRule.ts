import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.zone.ZoneOffsetTransitionRule', [
	[/* class description */
		[/* text */ 't', `A rule expressing how to create a transition.
 `],
		[/* block */ 'b', `
 This class allows rules for identifying future transitions to be expressed.
 A rule might be written in many forms:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', `the 16th March
 `],
			[/* block */ 'b', `the Sunday on or after the 16th March
 `],
			[/* block */ 'b', `the Sunday on or before the 16th March
 `],
			[/* block */ 'b', `the last Sunday in February
 `]
		]],
		[/* text */ 't', `
 These different rule types can be expressed and queried.`],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks if this object equals another.
 `],
				[/* block */ 'b', `
 The entire state of the object is compared.`]
			],
			[/* parameters */
				[/* parameter */ 'otherRule', [/* parameter description */
					[/* text */ 't', `the other object to compare to, null returns false`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if equal`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string for debugging, not null`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a suitable hash code.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hash code`]
			]
		]],
		[/* method */ 'of(java.time.Month,int,java.time.DayOfWeek,java.time.LocalTime,boolean,java.time.zone.ZoneOffsetTransitionRule.TimeDefinition,java.time.ZoneOffset,java.time.ZoneOffset,java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance defining the yearly rule to create transitions between two offsets.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Applications should normally obtain an instance from `],
					[/* reference */ 'r', `java.time.zone.ZoneRules`],
					[/* text */ 't', `.
 This factory is only intended for use when creating `],
					[/* reference */ 'r', `java.time.zone.ZoneRules`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the month of the month-day of the first day of the cutover week, not null`]
				]],
				[/* parameter */ 'dayOfMonthIndicator', [/* parameter description */
					[/* text */ 't', `the day of the month-day of the cutover week, positive if the week is that
  day or later, negative if the week is that day or earlier, counting from the last day of the month,
  from -28 to 31 excluding 0`]
				]],
				[/* parameter */ 'dayOfWeek', [/* parameter description */
					[/* text */ 't', `the required day-of-week, null if the month-day should not be changed`]
				]],
				[/* parameter */ 'time', [/* parameter description */
					[/* text */ 't', `the cutover time in the 'before' offset, not null`]
				]],
				[/* parameter */ 'timeEndOfDay', [/* parameter description */
					[/* text */ 't', `whether the time is midnight at the end of day`]
				]],
				[/* parameter */ 'timeDefinition', [/* parameter description */
					[/* text */ 't', `how to interpret the cutover`]
				]],
				[/* parameter */ 'standardOffset', [/* parameter description */
					[/* text */ 't', `the standard offset in force at the cutover, not null`]
				]],
				[/* parameter */ 'offsetBefore', [/* parameter description */
					[/* text */ 't', `the offset before the cutover, not null`]
				]],
				[/* parameter */ 'offsetAfter', [/* parameter description */
					[/* text */ 't', `the offset after the cutover, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the day of month indicator is invalid`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the end of day flag is true when the time is not midnight`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `time.getNano()`],
					[/* text */ 't', ` returns non-zero value`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the rule, not null`]
			]
		]],
		[/* method */ 'getDayOfWeek()', [
			[/* method description */
				[/* text */ 't', `Gets the day-of-week of the transition.
 `],
				[/* block */ 'b', `
 If the rule defines an exact date then this returns null.
 `],
				[/* block */ 'b', `
 If the rule defines a week where the cutover might occur, then this method
 returns the day-of-week that the month-day will be adjusted to.
 If the day is positive then the adjustment is later.
 If the day is negative then the adjustment is earlier.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the day-of-week that the transition occurs, null if the rule defines an exact date`]
			]
		]],
		[/* method */ 'getOffsetAfter()', [
			[/* method description */
				[/* text */ 't', `Gets the offset after the transition.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the offset after, not null`]
			]
		]],
		[/* method */ 'getOffsetBefore()', [
			[/* method description */
				[/* text */ 't', `Gets the offset before the transition.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the offset before, not null`]
			]
		]],
		[/* method */ 'createTransition(int)', [
			[/* method description */
				[/* text */ 't', `Creates a transition instance for the specified year.
 `],
				[/* block */ 'b', `
 Calculations are performed using the ISO-8601 chronology.`]
			],
			[/* parameters */
				[/* parameter */ 'year', [/* parameter description */
					[/* text */ 't', `the year to create a transition for, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the transition instance, not null`]
			]
		]],
		[/* method */ 'getStandardOffset()', [
			[/* method description */
				[/* text */ 't', `Gets the standard offset in force at the transition.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the standard offset, not null`]
			]
		]],
		[/* method */ 'getMonth()', [
			[/* method description */
				[/* text */ 't', `Gets the month of the transition.
 `],
				[/* block */ 'b', `
 If the rule defines an exact date then the month is the month of that date.
 `],
				[/* block */ 'b', `
 If the rule defines a week where the transition might occur, then the month
 if the month of either the earliest or latest possible date of the cutover.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the month of the transition, not null`]
			]
		]],
		[/* method */ 'getDayOfMonthIndicator()', [
			[/* method description */
				[/* text */ 't', `Gets the indicator of the day-of-month of the transition.
 `],
				[/* block */ 'b', `
 If the rule defines an exact date then the day is the month of that date.
 `],
				[/* block */ 'b', `
 If the rule defines a week where the transition might occur, then the day
 defines either the start of the end of the transition week.
 `],
				[/* block */ 'b', `
 If the value is positive, then it represents a normal day-of-month, and is the
 earliest possible date that the transition can be.
 The date may refer to 29th February which should be treated as 1st March in non-leap years.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the value is negative, then it represents the number of days back from the
 end of the month where `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', ` is the last day of the month.
 In this case, the day identified is the latest possible date that the transition can be.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the day-of-month indicator, from -28 to 31 excluding 0`]
			]
		]],
		[/* method */ 'getLocalTime()', [
			[/* method description */
				[/* text */ 't', `Gets the local time of day of the transition which must be checked with
 `],
				[/* reference */ 'r', `isMidnightEndOfDay()`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 The time is converted into an instant using the time definition.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the local time of day of the transition, not null`]
			]
		]],
		[/* method */ 'isMidnightEndOfDay()', [
			[/* method description */
				[/* text */ 't', `Is the transition local time midnight at the end of day.
 `],
				[/* block */ 'b', `
 The transition may be represented as occurring at 24:00.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `whether a local time of midnight is at the start or end of the day`]
			]
		]],
		[/* method */ 'getTimeDefinition()', [
			[/* method description */
				[/* text */ 't', `Gets the time definition, specifying how to convert the time to an instant.
 `],
				[/* block */ 'b', `
 The local time can be converted to an instant using the standard offset,
 the wall offset or UTC.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the time definition, not null`]
			]
		]]
	],
]);
