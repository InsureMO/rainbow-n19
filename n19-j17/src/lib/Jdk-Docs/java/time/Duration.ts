import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.time.Duration', [
	[/* class description */
		[/* text */ 't', `A time-based amount of time, such as '34.5 seconds'.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 This class models a quantity or amount of time in terms of seconds and nanoseconds.
 It can be accessed using other duration-based units, such as minutes and hours.
 In addition, the `],
			[/* reference */ 'r', `.ChronoUnit#DAYS`],
			[/* text */ 't', ` unit can be used and is treated as
 exactly equal to 24 hours, thus ignoring daylight savings effects.
 See `],
			[/* reference */ 'r', `java.time.Period`],
			[/* text */ 't', ` for the date-based equivalent to this class.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 A physical duration could be of infinite length.
 For practicality, the duration is stored with constraints similar to `],
			[/* reference */ 'r', `java.time.Instant`],
			[/* text */ 't', `.
 The duration uses nanosecond resolution with a maximum value of the seconds that can
 be held in a `],
			[/* inline code block */ 'i', `long`],
			[/* text */ 't', `. This is greater than the current estimated age of the universe.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The range of a duration requires the storage of a number larger than a `],
			[/* inline code block */ 'i', `long`],
			[/* text */ 't', `.
 To achieve this, the class stores a `],
			[/* inline code block */ 'i', `long`],
			[/* text */ 't', ` representing seconds and an `],
			[/* inline code block */ 'i', `int`],
			[/* text */ 't', `
 representing nanosecond-of-second, which will always be between 0 and 999,999,999.
 The model is of a directed duration, meaning that the duration may be negative.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The duration is measured in "seconds", but these are not necessarily identical to
 the scientific "SI second" definition based on atomic clocks.
 This difference only impacts durations measured near a leap-second and should not affect
 most applications.
 See `],
			[/* reference */ 'r', `java.time.Instant`],
			[/* text */ 't', ` for a discussion as to the meaning of the second and time-scales.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 This is a `],
			[/* text */ 't', `value-based`],
			[/* text */ 't', `
 class; programmers should treat instances that are
 `],
			[/* reference */ 'r', `#equals(java.lang.Object)`, `equal`],
			[/* text */ 't', ` as interchangeable and should not
 use instances for synchronization, or unpredictable behavior may
 occur. For example, in a future release, synchronization may fail.
 The `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', ` method should be used for comparisons.`]
		]]
	],
	[/* fields */
		[/* field */ 'ZERO', [
			[/* field description */
				[/* text */ 't', `Constant for a duration of zero.`]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks if this duration is equal to the specified `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 The comparison is based on the total length of the durations.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other duration, null returns false`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the other duration is equal to this one`]
			]
		]],
		[/* method */ 'isNegative()', [
			[/* method description */
				[/* text */ 't', `Checks if this duration is negative, excluding zero.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A `],
					[/* inline code block */ 'i', `Duration`],
					[/* text */ 't', ` represents a directed distance between two points on
 the time-line and can therefore be positive, zero or negative.
 This method checks whether the length is less than zero.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this duration has a total length less than zero`]
			]
		]],
		[/* method */ 'isZero()', [
			[/* method description */
				[/* text */ 't', `Checks if this duration is zero length.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A `],
					[/* inline code block */ 'i', `Duration`],
					[/* text */ 't', ` represents a directed distance between two points on
 the time-line and can therefore be positive, zero or negative.
 This method checks whether the length is zero.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this duration has a total length equal to zero`]
			]
		]],
		[/* method */ 'compareTo(java.time.Duration)', [
			[/* method description */
				[/* text */ 't', `Compares this duration to the specified `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The comparison is based on the total length of the durations.
 It is "consistent with equals", as defined by `],
					[/* reference */ 'r', `java.lang.Comparable`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'otherDuration', [/* parameter description */
					[/* text */ 't', `the other duration to compare to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the comparator value, negative if less, positive if greater`]
			]
		]],
		[/* method */ 'getNano()', [
			[/* method description */
				[/* text */ 't', `Gets the number of nanoseconds within the second in this duration.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The length of the duration is stored using two fields - seconds and nanoseconds.
 The nanoseconds part is a value from 0 to 999,999,999 that is an adjustment to
 the length in seconds.
 The total duration is defined by calling this method and `],
					[/* reference */ 'r', `#getSeconds()`, `getSeconds()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 A `],
					[/* inline code block */ 'i', `Duration`],
					[/* text */ 't', ` represents a directed distance between two points on the time-line.
 A negative duration is expressed by the negative sign of the seconds part.
 A duration of -1 nanosecond is stored as -1 seconds plus 999,999,999 nanoseconds.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the nanoseconds within the second part of the length of the duration, from 0 to 999,999,999`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `A hash code for this duration.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a suitable hash code`]
			]
		]],
		[/* method */ 'toHoursPart()', [
			[/* method description */
				[/* text */ 't', `Extracts the number of hours part in the duration.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns the number of remaining hours when dividing `],
					[/* reference */ 'r', `#toHours()`, `toHours()`],
					[/* text */ 't', `
 by hours in a day.
 This is based on the standard definition of a day as 24 hours.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of hours part in the duration, may be negative`]
			]
		]],
		[/* method */ 'toMillisPart()', [
			[/* method description */
				[/* text */ 't', `Extracts the number of milliseconds part of the duration.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns the milliseconds part by dividing the number of nanoseconds by 1,000,000.
 The length of the duration is stored using two fields - seconds and nanoseconds.
 The nanoseconds part is a value from 0 to 999,999,999 that is an adjustment to
 the length in seconds.
 The total duration is defined by calling `],
					[/* reference */ 'r', `#getNano()`, `getNano()`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `#getSeconds()`, `getSeconds()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of milliseconds part of the duration.`]
			]
		]],
		[/* method */ 'toMinutesPart()', [
			[/* method description */
				[/* text */ 't', `Extracts the number of minutes part in the duration.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns the number of remaining minutes when dividing `],
					[/* reference */ 'r', `#toMinutes()`, `toMinutes()`],
					[/* text */ 't', `
 by minutes in an hour.
 This is based on the standard definition of an hour as 60 minutes.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of minutes parts in the duration, may be negative`]
			]
		]],
		[/* method */ 'toNanosPart()', [
			[/* method description */
				[/* text */ 't', `Get the nanoseconds part within seconds of the duration.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The length of the duration is stored using two fields - seconds and nanoseconds.
 The nanoseconds part is a value from 0 to 999,999,999 that is an adjustment to
 the length in seconds.
 The total duration is defined by calling `],
					[/* reference */ 'r', `#getNano()`, `getNano()`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `#getSeconds()`, `getSeconds()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the nanoseconds within the second part of the length of the duration, from 0 to 999,999,999`]
			]
		]],
		[/* method */ 'toSecondsPart()', [
			[/* method description */
				[/* text */ 't', `Extracts the number of seconds part in the duration.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns the remaining seconds when dividing `],
					[/* reference */ 'r', `#toSeconds()`, `toSeconds()`],
					[/* text */ 't', `
 by seconds in a minute.
 This is based on the standard definition of a minute as 60 seconds.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of seconds parts in the duration, may be negative`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `A string representation of this duration using ISO-8601 seconds
 based representation, such as `],
				[/* inline code block */ 'i', `PT8H6M12.345S`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The format of the returned string will be `],
					[/* inline code block */ 'i', `PTnHnMnS`],
					[/* text */ 't', `, where n is
 the relevant hours, minutes or seconds part of the duration.
 Any fractional seconds are placed after a decimal point in the seconds section.
 If a section has a zero value, it is omitted.
 The hours, minutes and seconds will all have the same sign.
 `]
				]],
				[/* block */ 'b', `
 Examples:
 `],
				[/* code block */ 'c', `    "20.345 seconds"                 -- "PT20.345S
    "15 minutes" (15 * 60 seconds)   -- "PT15M"
    "10 hours" (10 * 3600 seconds)   -- "PT10H"
    "2 days" (2 * 86400 seconds)     -- "PT48H"
 `],
				[/* text */ 't', `
 Note that multiples of 24 hours are not output as days to avoid confusion
 with `],
				[/* inline code block */ 'i', `Period`],
				[/* text */ 't', `.`],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an ISO-8601 representation of this duration, not null`]
			]
		]],
		[/* method */ 'abs()', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this duration with a positive length.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method returns a positive duration by effectively removing the sign from any negative total length.
 For example, `],
					[/* inline code block */ 'i', `PT-1.3S`],
					[/* text */ 't', ` will be returned as `],
					[/* inline code block */ 'i', `PT1.3S`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` based on this duration with an absolute length, not null`]
			]
		]],
		[/* method */ 'dividedBy(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this duration divided by the specified value.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'divisor', [/* parameter description */
					[/* text */ 't', `the value to divide the duration by, positive or negative, not zero`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the divisor is zero or if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` based on this duration divided by the specified divisor, not null`]
			]
		]],
		[/* method */ 'minus(java.time.Duration)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this duration with the specified duration subtracted.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'duration', [/* parameter description */
					[/* text */ 't', `the duration to subtract, positive or negative, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` based on this duration with the specified duration subtracted, not null`]
			]
		]],
		[/* method */ 'minus(long,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this duration with the specified duration subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The duration amount is measured in terms of the specified unit.
 Only a subset of units are accepted by this method.
 The unit must either have an `],
					[/* reference */ 'r', `.TemporalUnit#isDurationEstimated()`],
					[/* text */ 't', ` or
 be `],
					[/* reference */ 'r', `.ChronoUnit#DAYS`],
					[/* text */ 't', ` which is treated as 24 hours. Other units throw an exception.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'amountToSubtract', [/* parameter description */
					[/* text */ 't', `the amount to subtract, measured in terms of the unit, positive or negative`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the unit that the amount is measured in, must have an exact duration, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` based on this duration with the specified duration subtracted, not null`]
			]
		]],
		[/* method */ 'minusDays(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this duration with the specified duration in standard 24 hour days subtracted.
 `],
				[/* block */ 'b', `
 The number of days is multiplied by 86400 to obtain the number of seconds to subtract.
 This is based on the standard definition of a day as 24 hours.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'daysToSubtract', [/* parameter description */
					[/* text */ 't', `the days to subtract, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` based on this duration with the specified days subtracted, not null`]
			]
		]],
		[/* method */ 'minusHours(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this duration with the specified duration in hours subtracted.
 `],
				[/* block */ 'b', `
 The number of hours is multiplied by 3600 to obtain the number of seconds to subtract.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'hoursToSubtract', [/* parameter description */
					[/* text */ 't', `the hours to subtract, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` based on this duration with the specified hours subtracted, not null`]
			]
		]],
		[/* method */ 'minusMillis(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this duration with the specified duration in milliseconds subtracted.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'millisToSubtract', [/* parameter description */
					[/* text */ 't', `the milliseconds to subtract, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` based on this duration with the specified milliseconds subtracted, not null`]
			]
		]],
		[/* method */ 'minusMinutes(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this duration with the specified duration in minutes subtracted.
 `],
				[/* block */ 'b', `
 The number of hours is multiplied by 60 to obtain the number of seconds to subtract.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'minutesToSubtract', [/* parameter description */
					[/* text */ 't', `the minutes to subtract, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` based on this duration with the specified minutes subtracted, not null`]
			]
		]],
		[/* method */ 'minusNanos(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this duration with the specified duration in nanoseconds subtracted.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'nanosToSubtract', [/* parameter description */
					[/* text */ 't', `the nanoseconds to subtract, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` based on this duration with the specified nanoseconds subtracted, not null`]
			]
		]],
		[/* method */ 'minusSeconds(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this duration with the specified duration in seconds subtracted.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'secondsToSubtract', [/* parameter description */
					[/* text */ 't', `the seconds to subtract, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` based on this duration with the specified seconds subtracted, not null`]
			]
		]],
		[/* method */ 'multipliedBy(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this duration multiplied by the scalar.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'multiplicand', [/* parameter description */
					[/* text */ 't', `the value to multiply the duration by, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` based on this duration multiplied by the specified scalar, not null`]
			]
		]],
		[/* method */ 'negated()', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this duration with the length negated.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method swaps the sign of the total length of this duration.
 For example, `],
					[/* inline code block */ 'i', `PT1.3S`],
					[/* text */ 't', ` will be returned as `],
					[/* inline code block */ 'i', `PT-1.3S`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` based on this duration with the amount negated, not null`]
			]
		]],
		[/* method */ 'plus(java.time.Duration)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this duration with the specified duration added.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'duration', [/* parameter description */
					[/* text */ 't', `the duration to add, positive or negative, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` based on this duration with the specified duration added, not null`]
			]
		]],
		[/* method */ 'plus(long,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this duration with the specified duration added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The duration amount is measured in terms of the specified unit.
 Only a subset of units are accepted by this method.
 The unit must either have an `],
					[/* reference */ 'r', `.TemporalUnit#isDurationEstimated()`],
					[/* text */ 't', ` or
 be `],
					[/* reference */ 'r', `.ChronoUnit#DAYS`],
					[/* text */ 't', ` which is treated as 24 hours. Other units throw an exception.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'amountToAdd', [/* parameter description */
					[/* text */ 't', `the amount to add, measured in terms of the unit, positive or negative`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the unit that the amount is measured in, must have an exact duration, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the unit is not supported`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` based on this duration with the specified duration added, not null`]
			]
		]],
		[/* method */ 'plusDays(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this duration with the specified duration in standard 24 hour days added.
 `],
				[/* block */ 'b', `
 The number of days is multiplied by 86400 to obtain the number of seconds to add.
 This is based on the standard definition of a day as 24 hours.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'daysToAdd', [/* parameter description */
					[/* text */ 't', `the days to add, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` based on this duration with the specified days added, not null`]
			]
		]],
		[/* method */ 'plusHours(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this duration with the specified duration in hours added.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'hoursToAdd', [/* parameter description */
					[/* text */ 't', `the hours to add, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` based on this duration with the specified hours added, not null`]
			]
		]],
		[/* method */ 'plusMillis(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this duration with the specified duration in milliseconds added.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'millisToAdd', [/* parameter description */
					[/* text */ 't', `the milliseconds to add, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` based on this duration with the specified milliseconds added, not null`]
			]
		]],
		[/* method */ 'plusMinutes(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this duration with the specified duration in minutes added.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'minutesToAdd', [/* parameter description */
					[/* text */ 't', `the minutes to add, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` based on this duration with the specified minutes added, not null`]
			]
		]],
		[/* method */ 'plusNanos(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this duration with the specified duration in nanoseconds added.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'nanosToAdd', [/* parameter description */
					[/* text */ 't', `the nanoseconds to add, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` based on this duration with the specified nanoseconds added, not null`]
			]
		]],
		[/* method */ 'plusSeconds(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this duration with the specified duration in seconds added.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'secondsToAdd', [/* parameter description */
					[/* text */ 't', `the seconds to add, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` based on this duration with the specified seconds added, not null`]
			]
		]],
		[/* method */ 'truncatedTo(java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` truncated to the specified unit.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Truncating the duration returns a copy of the original with conceptual fields
 smaller than the specified unit set to zero.
 For example, truncating with the `],
					[/* reference */ 'r', `.ChronoUnit#MINUTES`],
					[/* text */ 't', ` unit will
 round down towards zero to the nearest minute, setting the seconds and
 nanoseconds to zero.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The unit must have a `],
					[/* reference */ 'r', `.TemporalUnit#getDuration()`],
					[/* text */ 't', `
 that divides into the length of a standard day without remainder.
 This includes all
 `],
					[/* reference */ 'r', `.ChronoUnit#isTimeBased()`],
					[/* text */ 't', `
 and `],
					[/* reference */ 'r', `.ChronoUnit#DAYS`],
					[/* text */ 't', `. Other ChronoUnits throw an exception.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the unit to truncate to, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the unit is invalid for truncation`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the unit is not supported`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` based on this duration with the time truncated, not null`]
			]
		]],
		[/* method */ 'withNanos(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this duration with the specified nano-of-second.
 `],
				[/* block */ 'b', `
 This returns a duration with the specified nano-of-second, retaining the
 seconds part of this duration.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'nanoOfSecond', [/* parameter description */
					[/* text */ 't', `the nano-of-second to represent, from 0 to 999,999,999`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the nano-of-second is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` based on this period with the requested nano-of-second, not null`]
			]
		]],
		[/* method */ 'withSeconds(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this duration with the specified amount of seconds.
 `],
				[/* block */ 'b', `
 This returns a duration with the specified seconds, retaining the
 nano-of-second part of this duration.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'seconds', [/* parameter description */
					[/* text */ 't', `the seconds to represent, may be negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` based on this period with the requested seconds, not null`]
			]
		]],
		[/* method */ 'addTo(java.time.temporal.Temporal)', [
			[/* method description */
				[/* text */ 't', `Adds this duration to the specified temporal object.
 `],
				[/* block */ 'b', `
 This returns a temporal object of the same observable type as the input
 with this duration added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 In most cases, it is clearer to reverse the calling pattern by using
 `],
					[/* reference */ 'r', `.Temporal#plus(java.time.temporal.TemporalAmount)`],
					[/* text */ 't', `.
 `]
				]],
				[/* code block */ 'c', `   // these two lines are equivalent, but the second approach is recommended
   dateTime = thisDuration.addTo(dateTime);
   dateTime = dateTime.plus(thisDuration);
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 The calculation will add the seconds, then nanos.
 Only non-zero amounts will be added.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to adjust, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to add`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an object of the same type with the adjustment made, not null`]
			]
		]],
		[/* method */ 'subtractFrom(java.time.temporal.Temporal)', [
			[/* method description */
				[/* text */ 't', `Subtracts this duration from the specified temporal object.
 `],
				[/* block */ 'b', `
 This returns a temporal object of the same observable type as the input
 with this duration subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 In most cases, it is clearer to reverse the calling pattern by using
 `],
					[/* reference */ 'r', `.Temporal#minus(java.time.temporal.TemporalAmount)`],
					[/* text */ 't', `.
 `]
				]],
				[/* code block */ 'c', `   // these two lines are equivalent, but the second approach is recommended
   dateTime = thisDuration.subtractFrom(dateTime);
   dateTime = dateTime.minus(thisDuration);
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 The calculation will subtract the seconds, then nanos.
 Only non-zero amounts will be added.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to adjust, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to subtract`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an object of the same type with the adjustment made, not null`]
			]
		]],
		[/* method */ 'getUnits()', [
			[/* method description */
				[/* text */ 't', `Gets the set of units supported by this duration.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The supported units are `],
					[/* reference */ 'r', `.ChronoUnit#SECONDS`],
					[/* text */ 't', `,
 and `],
					[/* reference */ 'r', `.ChronoUnit#NANOS`],
					[/* text */ 't', `.
 They are returned in the order seconds, nanos.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This set can be used in conjunction with `],
					[/* reference */ 'r', `#get(java.time.temporal.TemporalUnit)`, `get(TemporalUnit)`],
					[/* text */ 't', `
 to access the entire state of the duration.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a list containing the seconds and nanos units, not null`]
			]
		]],
		[/* method */ 'dividedBy(java.time.Duration)', [
			[/* method description */
				[/* text */ 't', `Returns number of whole times a specified Duration occurs within this Duration.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'divisor', [/* parameter description */
					[/* text */ 't', `the value to divide the duration by, positive or negative, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the divisor is zero, or if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `number of whole times, rounded toward zero, a specified
         `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` occurs within this Duration, may be negative`]
			]
		]],
		[/* method */ 'get(java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Gets the value of the requested unit.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a value for each of the two supported units,
 `],
					[/* reference */ 'r', `.ChronoUnit#SECONDS`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `.ChronoUnit#NANOS`],
					[/* text */ 't', `.
 All other units throw an exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `TemporalUnit`],
					[/* text */ 't', ` for which to return the value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the unit is not supported`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the unit is not supported`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the long value of the unit`]
			]
		]],
		[/* method */ 'getSeconds()', [
			[/* method description */
				[/* text */ 't', `Gets the number of seconds in this duration.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The length of the duration is stored using two fields - seconds and nanoseconds.
 The nanoseconds part is a value from 0 to 999,999,999 that is an adjustment to
 the length in seconds.
 The total duration is defined by calling this method and `],
					[/* reference */ 'r', `#getNano()`, `getNano()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 A `],
					[/* inline code block */ 'i', `Duration`],
					[/* text */ 't', ` represents a directed distance between two points on the time-line.
 A negative duration is expressed by the negative sign of the seconds part.
 A duration of -1 nanosecond is stored as -1 seconds plus 999,999,999 nanoseconds.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the whole seconds part of the length of the duration, positive or negative`]
			]
		]],
		[/* method */ 'toDays()', [
			[/* method description */
				[/* text */ 't', `Gets the number of days in this duration.
 `],
				[/* block */ 'b', `
 This returns the total number of days in the duration by dividing the
 number of seconds by 86400.
 This is based on the standard definition of a day as 24 hours.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of days in the duration, may be negative`]
			]
		]],
		[/* method */ 'toDaysPart()', [
			[/* method description */
				[/* text */ 't', `Extracts the number of days in the duration.
 `],
				[/* block */ 'b', `
 This returns the total number of days in the duration by dividing the
 number of seconds by 86400.
 This is based on the standard definition of a day as 24 hours.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of days in the duration, may be negative`]
			]
		]],
		[/* method */ 'toHours()', [
			[/* method description */
				[/* text */ 't', `Gets the number of hours in this duration.
 `],
				[/* block */ 'b', `
 This returns the total number of hours in the duration by dividing the
 number of seconds by 3600.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of hours in the duration, may be negative`]
			]
		]],
		[/* method */ 'toMillis()', [
			[/* method description */
				[/* text */ 't', `Converts this duration to the total length in milliseconds.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If this duration is too large to fit in a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` milliseconds, then an
 exception is thrown.
 `]
				]],
				[/* block */ 'b', `
 If this duration has greater than millisecond precision, then the conversion
 will drop any excess precision information as though the amount in nanoseconds
 was subject to integer division by one million.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the total length of the duration in milliseconds`]
			]
		]],
		[/* method */ 'toMinutes()', [
			[/* method description */
				[/* text */ 't', `Gets the number of minutes in this duration.
 `],
				[/* block */ 'b', `
 This returns the total number of minutes in the duration by dividing the
 number of seconds by 60.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of minutes in the duration, may be negative`]
			]
		]],
		[/* method */ 'toNanos()', [
			[/* method description */
				[/* text */ 't', `Converts this duration to the total length in nanoseconds expressed as a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If this duration is too large to fit in a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` nanoseconds, then an
 exception is thrown.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the total length of the duration in nanoseconds`]
			]
		]],
		[/* method */ 'toSeconds()', [
			[/* method description */
				[/* text */ 't', `Gets the number of seconds in this duration.
 `],
				[/* block */ 'b', `
 This returns the total number of whole seconds in the duration.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the whole seconds part of the length of the duration, positive or negative`]
			]
		]],
		[/* method */ 'between(java.time.temporal.Temporal,java.time.temporal.Temporal)', [
			[/* method description */
				[/* text */ 't', `Obtains a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` representing the duration between two temporal objects.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This calculates the duration between two temporal objects. If the objects
 are of different types, then the duration is calculated based on the type
 of the first object. For example, if the first argument is a `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', `
 then the second argument is converted to a `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The specified temporal objects must support the `],
					[/* reference */ 'r', `.ChronoUnit#SECONDS`],
					[/* text */ 't', ` unit.
 For full accuracy, either the `],
					[/* reference */ 'r', `.ChronoUnit#NANOS`],
					[/* text */ 't', ` unit or the
 `],
					[/* reference */ 'r', `.ChronoField#NANO_OF_SECOND`],
					[/* text */ 't', ` field should be supported.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The result of this method can be a negative period if the end is before the start.
 To guarantee to obtain a positive duration call `],
					[/* reference */ 'r', `#abs()`, `abs()`],
					[/* text */ 't', ` on the result.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'startInclusive', [/* parameter description */
					[/* text */ 't', `the start instant, inclusive, not null`]
				]],
				[/* parameter */ 'endExclusive', [/* parameter description */
					[/* text */ 't', `the end instant, exclusive, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the seconds between the temporals cannot be obtained`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the calculation exceeds the capacity of `],
					[/* inline code block */ 'i', `Duration`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', `, not null`]
			]
		]],
		[/* method */ 'from(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` from a temporal amount.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This obtains a duration based on the specified amount.
 A `],
					[/* inline code block */ 'i', `TemporalAmount`],
					[/* text */ 't', ` represents an  amount of time, which may be
 date-based or time-based, which this factory extracts to a duration.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The conversion loops around the set of units from the amount and uses
 the `],
					[/* reference */ 'r', `.TemporalUnit#getDuration()`],
					[/* text */ 't', ` of the unit to
 calculate the total `],
					[/* inline code block */ 'i', `Duration`],
					[/* text */ 't', `.
 Only a subset of units are accepted by this method. The unit must either
 have an `],
					[/* reference */ 'r', `.TemporalUnit#isDurationEstimated()`],
					[/* text */ 't', `
 or be `],
					[/* reference */ 'r', `.ChronoUnit#DAYS`],
					[/* text */ 't', ` which is treated as 24 hours.
 If any other units are found then an exception is thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'amount', [/* parameter description */
					[/* text */ 't', `the temporal amount to convert, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to convert to a `],
					[/* inline code block */ 'i', `Duration`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the equivalent duration, not null`]
			]
		]],
		[/* method */ 'of(long,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Obtains a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` representing an amount in the specified unit.
 `],
				[/* block */ 'b', `
 The parameters represent the two parts of a phrase like '6 Hours'. For example:
 `],
				[/* code block */ 'c', `  Duration.of(3, SECONDS);
  Duration.of(465, HOURS);
 `],
				[/* text */ 't', `
 Only a subset of units are accepted by this method.
 The unit must either have an `],
				[/* reference */ 'r', `.TemporalUnit#isDurationEstimated()`],
				[/* text */ 't', ` or
 be `],
				[/* reference */ 'r', `.ChronoUnit#DAYS`],
				[/* text */ 't', ` which is treated as 24 hours. Other units throw an exception.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'amount', [/* parameter description */
					[/* text */ 't', `the amount of the duration, measured in terms of the unit, positive or negative`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the unit that the duration is measured in, must have an exact duration, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the period unit has an estimated duration`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if a numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', `, not null`]
			]
		]],
		[/* method */ 'ofDays(long)', [
			[/* method description */
				[/* text */ 't', `Obtains a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` representing a number of standard 24 hour days.
 `],
				[/* block */ 'b', `
 The seconds are calculated based on the standard definition of a day,
 where each day is 86400 seconds which implies a 24 hour day.
 The nanosecond in second field is set to zero.`]
			],
			[/* parameters */
				[/* parameter */ 'days', [/* parameter description */
					[/* text */ 't', `the number of days, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the input days exceeds the capacity of `],
					[/* inline code block */ 'i', `Duration`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', `, not null`]
			]
		]],
		[/* method */ 'ofHours(long)', [
			[/* method description */
				[/* text */ 't', `Obtains a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` representing a number of standard hours.
 `],
				[/* block */ 'b', `
 The seconds are calculated based on the standard definition of an hour,
 where each hour is 3600 seconds.
 The nanosecond in second field is set to zero.`]
			],
			[/* parameters */
				[/* parameter */ 'hours', [/* parameter description */
					[/* text */ 't', `the number of hours, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the input hours exceeds the capacity of `],
					[/* inline code block */ 'i', `Duration`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', `, not null`]
			]
		]],
		[/* method */ 'ofMillis(long)', [
			[/* method description */
				[/* text */ 't', `Obtains a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` representing a number of milliseconds.
 `],
				[/* block */ 'b', `
 The seconds and nanoseconds are extracted from the specified milliseconds.`]
			],
			[/* parameters */
				[/* parameter */ 'millis', [/* parameter description */
					[/* text */ 't', `the number of milliseconds, positive or negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', `, not null`]
			]
		]],
		[/* method */ 'ofMinutes(long)', [
			[/* method description */
				[/* text */ 't', `Obtains a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` representing a number of standard minutes.
 `],
				[/* block */ 'b', `
 The seconds are calculated based on the standard definition of a minute,
 where each minute is 60 seconds.
 The nanosecond in second field is set to zero.`]
			],
			[/* parameters */
				[/* parameter */ 'minutes', [/* parameter description */
					[/* text */ 't', `the number of minutes, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the input minutes exceeds the capacity of `],
					[/* inline code block */ 'i', `Duration`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', `, not null`]
			]
		]],
		[/* method */ 'ofNanos(long)', [
			[/* method description */
				[/* text */ 't', `Obtains a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` representing a number of nanoseconds.
 `],
				[/* block */ 'b', `
 The seconds and nanoseconds are extracted from the specified nanoseconds.`]
			],
			[/* parameters */
				[/* parameter */ 'nanos', [/* parameter description */
					[/* text */ 't', `the number of nanoseconds, positive or negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', `, not null`]
			]
		]],
		[/* method */ 'ofSeconds(long)', [
			[/* method description */
				[/* text */ 't', `Obtains a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` representing a number of seconds.
 `],
				[/* block */ 'b', `
 The nanosecond in second field is set to zero.`]
			],
			[/* parameters */
				[/* parameter */ 'seconds', [/* parameter description */
					[/* text */ 't', `the number of seconds, positive or negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', `, not null`]
			]
		]],
		[/* method */ 'ofSeconds(long,long)', [
			[/* method description */
				[/* text */ 't', `Obtains a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` representing a number of seconds and an
 adjustment in nanoseconds.
 `],
				[/* block */ 'b', `
 This method allows an arbitrary number of nanoseconds to be passed in.
 The factory will alter the values of the second and nanosecond in order
 to ensure that the stored nanosecond is in the range 0 to 999,999,999.
 For example, the following will result in exactly the same duration:
 `],
				[/* code block */ 'c', `  Duration.ofSeconds(3, 1);
  Duration.ofSeconds(4, -999_999_999);
  Duration.ofSeconds(2, 1000_000_001);
 `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'seconds', [/* parameter description */
					[/* text */ 't', `the number of seconds, positive or negative`]
				]],
				[/* parameter */ 'nanoAdjustment', [/* parameter description */
					[/* text */ 't', `the nanosecond adjustment to the number of seconds, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the adjustment causes the seconds to exceed the capacity of `],
					[/* inline code block */ 'i', `Duration`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', `, not null`]
			]
		]],
		[/* method */ 'parse(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Obtains a `],
				[/* inline code block */ 'i', `Duration`],
				[/* text */ 't', ` from a text string such as `],
				[/* inline code block */ 'i', `PnDTnHnMn.nS`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will parse a textual representation of a duration, including the
 string produced by `],
					[/* inline code block */ 'i', `toString()`],
					[/* text */ 't', `. The formats accepted are based
 on the ISO-8601 duration format `],
					[/* inline code block */ 'i', `PnDTnHnMn.nS`],
					[/* text */ 't', ` with days
 considered to be exactly 24 hours.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The string starts with an optional sign, denoted by the ASCII negative
 or positive symbol. If negative, the whole period is negated.
 The ASCII letter "P" is next in upper or lower case.
 There are then four sections, each consisting of a number and a suffix.
 The sections have suffixes in ASCII of "D", "H", "M" and "S" for
 days, hours, minutes and seconds, accepted in upper or lower case.
 The suffixes must occur in order. The ASCII letter "T" must occur before
 the first occurrence, if any, of an hour, minute or second section.
 At least one of the four sections must be present, and if "T" is present
 there must be at least one section after the "T".
 The number part of each section must consist of one or more ASCII digits.
 The number may be prefixed by the ASCII negative or positive symbol.
 The number of days, hours and minutes must parse to a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `.
 The number of seconds must parse to a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` with optional fraction.
 The decimal point may be either a dot or a comma.
 The fractional part may have from zero to 9 digits.
 `]
				]],
				[/* block */ 'b', `
 The leading plus/minus sign, and negative values for other units are
 not part of the ISO-8601 standard.
 `],
				[/* block */ 'b', `
 Examples:
 `],
				[/* code block */ 'c', `    "PT20.345S" -- parses as "20.345 seconds"
    "PT15M"     -- parses as "15 minutes" (where a minute is 60 seconds)
    "PT10H"     -- parses as "10 hours" (where an hour is 3600 seconds)
    "P2D"       -- parses as "2 days" (where a day is 24 hours or 86400 seconds)
    "P2DT3H4M"  -- parses as "2 days, 3 hours and 4 minutes"
    "PT-6H3M"    -- parses as "-6 hours and +3 minutes"
    "-PT6H3M"    -- parses as "-6 hours and -3 minutes"
    "-PT-6H+3M"  -- parses as "+6 hours and -3 minutes"
 `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `the text to parse, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.format.DateTimeParseException', [/* throw description */
					[/* text */ 't', `if the text cannot be parsed to a duration`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the parsed duration, not null`]
			]
		]]
	],
]);
