import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Date', [
	[/* class description */
		[/* text */ 't', `The class `],
		[/* inline code block */ 'i', `Date`],
		[/* text */ 't', ` represents a specific instant
 in time, with millisecond precision.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Prior to JDK 1.1, the class `],
			[/* inline code block */ 'i', `Date`],
			[/* text */ 't', ` had two additional
 functions.  It allowed the interpretation of dates as year, month, day, hour,
 minute, and second values.  It also allowed the formatting and parsing
 of date strings.  Unfortunately, the API for these functions was not
 amenable to internationalization.  As of JDK 1.1, the
 `],
			[/* inline code block */ 'i', `Calendar`],
			[/* text */ 't', ` class should be used to convert between dates and time
 fields and the `],
			[/* inline code block */ 'i', `DateFormat`],
			[/* text */ 't', ` class should be used to format and
 parse date strings.
 The corresponding methods in `],
			[/* inline code block */ 'i', `Date`],
			[/* text */ 't', ` are deprecated.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Although the `],
			[/* inline code block */ 'i', `Date`],
			[/* text */ 't', ` class is intended to reflect
 coordinated universal time (UTC), it may not do so exactly,
 depending on the host environment of the Java Virtual Machine.
 Nearly all modern operating systems assume that 1 day =
 24 × 60 × 60 = 86400 seconds
 in all cases. In UTC, however, about once every year or two there
 is an extra second, called a "leap second." The leap
 second is always added as the last second of the day, and always
 on December 31 or June 30. For example, the last minute of the
 year 1995 was 61 seconds long, thanks to an added leap second.
 Most computer clocks are not accurate enough to be able to reflect
 the leap-second distinction.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Some computer standards are defined in terms of Greenwich mean
 time (GMT), which is equivalent to universal time (UT).  GMT is
 the "civil" name for the standard; UT is the
 "scientific" name for the same standard. The
 distinction between UTC and UT is that UTC is based on an atomic
 clock and UT is based on astronomical observations, which for all
 practical purposes is an invisibly fine hair to split. Because the
 earth's rotation is not uniform (it slows down and speeds up
 in complicated ways), UT does not always flow uniformly. Leap
 seconds are introduced as needed into UTC so as to keep UTC within
 0.9 seconds of UT1, which is a version of UT with certain
 corrections applied. There are other time and date systems as
 well; for example, the time scale used by the satellite-based
 global positioning system (GPS) is synchronized to UTC but is
 `],
			[/* text */ 't', `not`],
			[/* text */ 't', ` adjusted for leap seconds. An interesting source of
 further information is the United States Naval Observatory (USNO):
 `]
		]],
		[/* blockquote */ 'q', [
			[/* code block */ 'c', [
				[/* text */ 't', `     `],
				[/* text */ 't', `https://www.usno.navy.mil/USNO`],
				[/* text */ 't', `
 `]
			]]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 and the material regarding "Systems of Time" at:
 `],
		[/* blockquote */ 'q', [
			[/* code block */ 'c', [
				[/* text */ 't', `     `],
				[/* text */ 't', `https://www.usno.navy.mil/USNO/time/master-clock/systems-of-time`],
				[/* text */ 't', `
 `]
			]]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 which has descriptions of various different time systems including
 UT, UT1, and UTC.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 In all methods of class `],
			[/* inline code block */ 'i', `Date`],
			[/* text */ 't', ` that accept or return
 year, month, date, hours, minutes, and seconds values, the
 following representations are used:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `A year `],
				[/* text */ 't', `y`],
				[/* text */ 't', ` is represented by the integer
     `],
				[/* text */ 't', `y`],
				[/* text */ 't', ` `],
				[/* inline code block */ 'i', `- 1900`],
				[/* text */ 't', `.
 `]
			]],
			[/* block */ 'b', `A month is represented by an integer from 0 to 11; 0 is January,
     1 is February, and so forth; thus 11 is December.
 `],
			[/* block */ 'b', `A date (day of month) is represented by an integer from 1 to 31
     in the usual manner.
 `],
			[/* block */ 'b', `An hour is represented by an integer from 0 to 23. Thus, the hour
     from midnight to 1 a.m. is hour 0, and the hour from noon to 1
     p.m. is hour 12.
 `],
			[/* block */ 'b', `A minute is represented by an integer from 0 to 59 in the usual manner.
 `],
			[/* block */ 'b', `A second is represented by an integer from 0 to 61; the values 60 and
     61 occur only for leap seconds and even then only in Java
     implementations that actually track leap seconds correctly. Because
     of the manner in which leap seconds are currently introduced, it is
     extremely unlikely that two leap seconds will occur in the same
     minute, but this specification follows the date and time conventions
     for ISO C.
 `]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 In all cases, arguments given to methods for these purposes need
 not fall within the indicated ranges; for example, a date may be
 specified as January 32 and is interpreted as meaning February 1.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Allocates a `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object and initializes it so that
 it represents the time at which it was allocated, measured to the
 nearest millisecond.`]
			],
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int,int,int)', [
			[/* constructor description */
				[/* text */ 't', `Allocates a `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object and initializes it so that
 it represents midnight, local time, at the beginning of the day
 specified by the `],
				[/* inline code block */ 'i', `year`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `month`],
				[/* text */ 't', `, and
 `],
				[/* inline code block */ 'i', `date`],
				[/* text */ 't', ` arguments.`]
			],
			[/* parameters */
				[/* parameter */ 'year', [/* parameter description */
					[/* text */ 't', `the year minus 1900.`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the month between 0-11.`]
				]],
				[/* parameter */ 'date', [/* parameter description */
					[/* text */ 't', `the day of the month between 1-31.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int,int,int,int,int)', [
			[/* constructor description */
				[/* text */ 't', `Allocates a `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object and initializes it so that
 it represents the instant at the start of the minute specified by
 the `],
				[/* inline code block */ 'i', `year`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `month`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `date`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `hrs`],
				[/* text */ 't', `, and `],
				[/* inline code block */ 'i', `min`],
				[/* text */ 't', ` arguments, in the local
 time zone.`]
			],
			[/* parameters */
				[/* parameter */ 'year', [/* parameter description */
					[/* text */ 't', `the year minus 1900.`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the month between 0-11.`]
				]],
				[/* parameter */ 'date', [/* parameter description */
					[/* text */ 't', `the day of the month between 1-31.`]
				]],
				[/* parameter */ 'hrs', [/* parameter description */
					[/* text */ 't', `the hours between 0-23.`]
				]],
				[/* parameter */ 'min', [/* parameter description */
					[/* text */ 't', `the minutes between 0-59.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int,int,int,int,int,int)', [
			[/* constructor description */
				[/* text */ 't', `Allocates a `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object and initializes it so that
 it represents the instant at the start of the second specified
 by the `],
				[/* inline code block */ 'i', `year`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `month`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `date`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `hrs`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `min`],
				[/* text */ 't', `, and `],
				[/* inline code block */ 'i', `sec`],
				[/* text */ 't', ` arguments,
 in the local time zone.`]
			],
			[/* parameters */
				[/* parameter */ 'year', [/* parameter description */
					[/* text */ 't', `the year minus 1900.`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the month between 0-11.`]
				]],
				[/* parameter */ 'date', [/* parameter description */
					[/* text */ 't', `the day of the month between 1-31.`]
				]],
				[/* parameter */ 'hrs', [/* parameter description */
					[/* text */ 't', `the hours between 0-23.`]
				]],
				[/* parameter */ 'min', [/* parameter description */
					[/* text */ 't', `the minutes between 0-59.`]
				]],
				[/* parameter */ 'sec', [/* parameter description */
					[/* text */ 't', `the seconds between 0-59.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Allocates a `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object and initializes it so that
 it represents the date and time indicated by the string
 `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', `, which is interpreted as if by the
 `],
				[/* reference */ 'r', `#parse(java.lang.String)`, `parse(java.lang.String)`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `a string representation of the date.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(long)', [
			[/* constructor description */
				[/* text */ 't', `Allocates a `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object and initializes it to
 represent the specified number of milliseconds since the
 standard base time known as "the epoch", namely January 1,
 1970, 00:00:00 GMT.`]
			],
			[/* parameters */
				[/* parameter */ 'date', [/* parameter description */
					[/* text */ 't', `the milliseconds since January 1, 1970, 00:00:00 GMT.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'after(java.util.Date)', [
			[/* method description */
				[/* text */ 't', `Tests if this date is after the specified date.`]
			],
			[/* parameters */
				[/* parameter */ 'when', [/* parameter description */
					[/* text */ 't', `a date.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `when`],
					[/* text */ 't', ` is null.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the instant represented
          by this `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object is strictly later than the
          instant represented by `],
				[/* inline code block */ 'i', `when`],
				[/* text */ 't', `;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'before(java.util.Date)', [
			[/* method description */
				[/* text */ 't', `Tests if this date is before the specified date.`]
			],
			[/* parameters */
				[/* parameter */ 'when', [/* parameter description */
					[/* text */ 't', `a date.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `when`],
					[/* text */ 't', ` is null.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the instant of time
            represented by this `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object is strictly
            earlier than the instant represented by `],
				[/* inline code block */ 'i', `when`],
				[/* text */ 't', `;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares two dates for equality.
 The result is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the argument is
 not `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and is a `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object that
 represents the same point in time, to the millisecond, as this object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Thus, two `],
					[/* inline code block */ 'i', `Date`],
					[/* text */ 't', ` objects are equal if and only if the
 `],
					[/* inline code block */ 'i', `getTime`],
					[/* text */ 't', ` method returns the same `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `
 value for both.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to compare with.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the objects are the same;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'compareTo(java.util.Date)', [
			[/* method description */
				[/* text */ 't', `Compares two Dates for ordering.`]
			],
			[/* parameters */
				[/* parameter */ 'anotherDate', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Date`],
					[/* text */ 't', ` to be compared.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `anotherDate`],
					[/* text */ 't', ` is null.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the argument Date is equal to
          this Date; a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if this Date
          is before the Date argument; and a value greater than
      `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if this Date is after the Date argument.`]
			]
		]],
		[/* method */ 'getDate()', [
			[/* method description */
				[/* text */ 't', `Returns the day of the month represented by this `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object.
 The value returned is between `],
				[/* inline code block */ 'i', `1`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `31`],
				[/* text */ 't', `
 representing the day of the month that contains or begins with the
 instant in time represented by this `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object, as
 interpreted in the local time zone.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the day of the month represented by this date.`]
			]
		]],
		[/* method */ 'getDay()', [
			[/* method description */
				[/* text */ 't', `Returns the day of the week represented by this date. The
 returned value (`],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` = Sunday, `],
				[/* inline code block */ 'i', `1`],
				[/* text */ 't', ` = Monday,
 `],
				[/* inline code block */ 'i', `2`],
				[/* text */ 't', ` = Tuesday, `],
				[/* inline code block */ 'i', `3`],
				[/* text */ 't', ` = Wednesday, `],
				[/* inline code block */ 'i', `4`],
				[/* text */ 't', ` =
 Thursday, `],
				[/* inline code block */ 'i', `5`],
				[/* text */ 't', ` = Friday, `],
				[/* inline code block */ 'i', `6`],
				[/* text */ 't', ` = Saturday)
 represents the day of the week that contains or begins with
 the instant in time represented by this `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object,
 as interpreted in the local time zone.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the day of the week represented by this date.`]
			]
		]],
		[/* method */ 'getHours()', [
			[/* method description */
				[/* text */ 't', `Returns the hour represented by this `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object. The
 returned value is a number (`],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `23`],
				[/* text */ 't', `)
 representing the hour within the day that contains or begins
 with the instant in time represented by this `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', `
 object, as interpreted in the local time zone.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the hour represented by this date.`]
			]
		]],
		[/* method */ 'getMinutes()', [
			[/* method description */
				[/* text */ 't', `Returns the number of minutes past the hour represented by this date,
 as interpreted in the local time zone.
 The value returned is between `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `59`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the number of minutes past the hour represented by this date.`]
			]
		]],
		[/* method */ 'getMonth()', [
			[/* method description */
				[/* text */ 't', `Returns a number representing the month that contains or begins
 with the instant in time represented by this `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object.
 The value returned is between `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `11`],
				[/* text */ 't', `,
 with the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` representing January.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the month represented by this date.`]
			]
		]],
		[/* method */ 'getSeconds()', [
			[/* method description */
				[/* text */ 't', `Returns the number of seconds past the minute represented by this date.
 The value returned is between `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `61`],
				[/* text */ 't', `. The
 values `],
				[/* inline code block */ 'i', `60`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `61`],
				[/* text */ 't', ` can only occur on those
 Java Virtual Machines that take leap seconds into account.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the number of seconds past the minute represented by this date.`]
			]
		]],
		[/* method */ 'getTimezoneOffset()', [
			[/* method description */
				[/* text */ 't', `Returns the offset, measured in minutes, for the local time zone
 relative to UTC that is appropriate for the time represented by
 this `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object.
 `],
				[/* block */ 'b', `
 For example, in Massachusetts, five time zones west of Greenwich:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', ` new Date(96, 1, 14).getTimezoneOffset() returns 300`]
				]],
				[/* text */ 't', `
 because on February 14, 1996, standard time (Eastern Standard Time)
 is in use, which is offset five hours from UTC; but:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', ` new Date(96, 5, 1).getTimezoneOffset() returns 240`]
				]],
				[/* text */ 't', `
 because on June 1, 1996, daylight saving time (Eastern Daylight Time)
 is in use, which is offset only four hours from UTC.`],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 This method produces the same result as if it computed:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', ` (this.getTime() - UTC(this.getYear(),
                       this.getMonth(),
                       this.getDate(),
                       this.getHours(),
                       this.getMinutes(),
                       this.getSeconds())) / (60 * 1000)
 `]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the time-zone offset, in minutes, for the current time zone.`]
			]
		]],
		[/* method */ 'getYear()', [
			[/* method description */
				[/* text */ 't', `Returns a value that is the result of subtracting 1900 from the
 year that contains or begins with the instant in time represented
 by this `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object, as interpreted in the local
 time zone.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the year represented by this date, minus 1900.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hash code value for this object. The result is the
 exclusive OR of the two halves of the primitive `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `
 value returned by the `],
				[/* reference */ 'r', `#getTime()`, `getTime()`],
				[/* text */ 't', `
 method. That is, the hash code is the value of the expression:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `(int)(this.getTime()^(this.getTime() >>> 32))`]
					]]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Return a copy of this object.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a clone of this instance.`]
			]
		]],
		[/* method */ 'toGMTString()', [
			[/* method description */
				[/* text */ 't', `Creates a string representation of this `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object of
 the form:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', ` d mon yyyy hh:mm:ss GMT`]
				]],
				[/* text */ 't', `
 where:`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `d`],
						[/* text */ 't', ` is the day of the month (`],
						[/* inline code block */ 'i', `1`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `31`],
						[/* text */ 't', `),
     as one or two decimal digits.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `mon`],
						[/* text */ 't', ` is the month (`],
						[/* inline code block */ 'i', `Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec`],
						[/* text */ 't', `).
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `yyyy`],
						[/* text */ 't', ` is the year, as four decimal digits.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `hh`],
						[/* text */ 't', ` is the hour of the day (`],
						[/* inline code block */ 'i', `00`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `23`],
						[/* text */ 't', `),
     as two decimal digits.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `mm`],
						[/* text */ 't', ` is the minute within the hour (`],
						[/* inline code block */ 'i', `00`],
						[/* text */ 't', ` through
     `],
						[/* inline code block */ 'i', `59`],
						[/* text */ 't', `), as two decimal digits.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `ss`],
						[/* text */ 't', ` is the second within the minute (`],
						[/* inline code block */ 'i', `00`],
						[/* text */ 't', ` through
     `],
						[/* inline code block */ 'i', `61`],
						[/* text */ 't', `), as two decimal digits.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `GMT`],
						[/* text */ 't', ` is exactly the ASCII letters "`],
						[/* inline code block */ 'i', `GMT`],
						[/* text */ 't', `" to indicate
     Greenwich Mean Time.
 `]
					]]
				]],
				[/* block */ 'b', `
 The result does not depend on the local time zone.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a string representation of this date, using the Internet GMT
          conventions.`]
			]
		]],
		[/* method */ 'toLocaleString()', [
			[/* method description */
				[/* text */ 't', `Creates a string representation of this `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object in an
 implementation-dependent form. The intent is that the form should
 be familiar to the user of the Java application, wherever it may
 happen to be running. The intent is comparable to that of the
 "`],
				[/* inline code block */ 'i', `%c`],
				[/* text */ 't', `" format supported by the `],
				[/* inline code block */ 'i', `strftime()`],
				[/* text */ 't', `
 function of ISO C.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a string representation of this date, using the locale
          conventions.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Converts this `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object to a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `
 of the form:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', ` dow mon dd hh:mm:ss zzz yyyy`]
				]],
				[/* text */ 't', `
 where:`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `dow`],
						[/* text */ 't', ` is the day of the week (`],
						[/* inline code block */ 'i', `Sun, Mon, Tue, Wed, Thu, Fri, Sat`],
						[/* text */ 't', `).
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `mon`],
						[/* text */ 't', ` is the month (`],
						[/* inline code block */ 'i', `Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec`],
						[/* text */ 't', `).
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `dd`],
						[/* text */ 't', ` is the day of the month (`],
						[/* inline code block */ 'i', `01`],
						[/* text */ 't', ` through
     `],
						[/* inline code block */ 'i', `31`],
						[/* text */ 't', `), as two decimal digits.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `hh`],
						[/* text */ 't', ` is the hour of the day (`],
						[/* inline code block */ 'i', `00`],
						[/* text */ 't', ` through
     `],
						[/* inline code block */ 'i', `23`],
						[/* text */ 't', `), as two decimal digits.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `mm`],
						[/* text */ 't', ` is the minute within the hour (`],
						[/* inline code block */ 'i', `00`],
						[/* text */ 't', ` through
     `],
						[/* inline code block */ 'i', `59`],
						[/* text */ 't', `), as two decimal digits.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ss`],
						[/* text */ 't', ` is the second within the minute (`],
						[/* inline code block */ 'i', `00`],
						[/* text */ 't', ` through
     `],
						[/* inline code block */ 'i', `61`],
						[/* text */ 't', `, as two decimal digits.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `zzz`],
						[/* text */ 't', ` is the time zone (and may reflect daylight saving
     time). Standard time zone abbreviations include those
     recognized by the method `],
						[/* inline code block */ 'i', `parse`],
						[/* text */ 't', `. If time zone
     information is not available, then `],
						[/* inline code block */ 'i', `zzz`],
						[/* text */ 't', ` is empty -
     that is, it consists of no characters at all.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `yyyy`],
						[/* text */ 't', ` is the year, as four decimal digits.
 `]
					]]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a string representation of this date.`]
			]
		]],
		[/* method */ 'toInstant()', [
			[/* method description */
				[/* text */ 't', `Converts this `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object to an `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The conversion creates an `],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', ` that represents the same
 point on the time-line as this `],
					[/* inline code block */ 'i', `Date`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an instant representing the same point on the time-line as
  this `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object`]
			]
		]],
		[/* method */ 'getTime()', [
			[/* method description */
				[/* text */ 't', `Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT
 represented by this `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the number of milliseconds since January 1, 1970, 00:00:00 GMT
          represented by this date.`]
			]
		]],
		[/* method */ 'from(java.time.Instant)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` from an `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', ` uses a precision of nanoseconds, whereas `],
					[/* inline code block */ 'i', `Date`],
					[/* text */ 't', `
 uses a precision of milliseconds.  The conversion will truncate any
 excess precision information as though the amount in nanoseconds was
 subject to integer division by one million.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', ` can store points on the time-line further in the future
 and further in the past than `],
					[/* inline code block */ 'i', `Date`],
					[/* text */ 't', `. In this scenario, this method
 will throw an exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'instant', [/* parameter description */
					[/* text */ 't', `the instant to convert`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `instant`],
					[/* text */ 't', ` is null.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the instant is too large to
  represent as a `],
					[/* inline code block */ 'i', `Date`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` representing the same point on the time-line as
  the provided instant`]
			]
		]],
		[/* method */ 'parse(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Attempts to interpret the string `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', ` as a representation
 of a date and time. If the attempt is successful, the time
 indicated is returned represented as the distance, measured in
 milliseconds, of that time from the epoch (00:00:00 GMT on
 January 1, 1970). If the attempt fails, an
 `],
				[/* inline code block */ 'i', `IllegalArgumentException`],
				[/* text */ 't', ` is thrown.
 `],
				[/* block */ 'b', `
 It accepts many syntaxes; in particular, it recognizes the IETF
 standard date syntax: "Sat, 12 Aug 1995 13:30:00 GMT". It also
 understands the continental U.S. time-zone abbreviations, but for
 general use, a time-zone offset should be used: "Sat, 12 Aug 1995
 13:30:00 GMT+0430" (4 hours, 30 minutes west of the Greenwich
 meridian). If no time zone is specified, the local time zone is
 assumed. GMT and UTC are considered equivalent.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The string `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` is processed from left to right, looking for
 data of interest. Any material in `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` that is within the
 ASCII parenthesis characters `],
					[/* inline code block */ 'i', `(`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `)`],
					[/* text */ 't', ` is ignored.
 Parentheses may be nested. Otherwise, the only characters permitted
 within `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` are these ASCII characters:
 `]
				]],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', ` abcdefghijklmnopqrstuvwxyz
 ABCDEFGHIJKLMNOPQRSTUVWXYZ
 0123456789,+-:/`]
				]],
				[/* text */ 't', `
 and whitespace characters.`],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 A consecutive sequence of decimal digits is treated as a decimal
 number:`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If a number is preceded by `],
						[/* inline code block */ 'i', `+`],
						[/* text */ 't', ` or `],
						[/* inline code block */ 'i', `-`],
						[/* text */ 't', ` and a year
     has already been recognized, then the number is a time-zone
     offset. If the number is less than 24, it is an offset measured
     in hours. Otherwise, it is regarded as an offset in minutes,
     expressed in 24-hour time format without punctuation. A
     preceding `],
						[/* inline code block */ 'i', `-`],
						[/* text */ 't', ` means a westward offset. Time zone offsets
     are always relative to UTC (Greenwich). Thus, for example,
     `],
						[/* inline code block */ 'i', `-5`],
						[/* text */ 't', ` occurring in the string would mean "five hours west
     of Greenwich" and `],
						[/* inline code block */ 'i', `+0430`],
						[/* text */ 't', ` would mean "four hours and
     thirty minutes east of Greenwich." It is permitted for the
     string to specify `],
						[/* inline code block */ 'i', `GMT`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `UT`],
						[/* text */ 't', `, or `],
						[/* inline code block */ 'i', `UTC`],
						[/* text */ 't', `
     redundantly-for example, `],
						[/* inline code block */ 'i', `GMT-5`],
						[/* text */ 't', ` or `],
						[/* inline code block */ 'i', `utc+0430`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The number is regarded as a year number if one of the
     following conditions is true:
 `],
						[/* list */ 'l', [
							[/* block */ 'b', `The number is equal to or greater than 70 and followed by a
         space, comma, slash, or end of string
     `],
							[/* block */ 'b', `The number is less than 70, and both a month and a day of
         the month have already been recognized`]
						]],
						[/* text */ 't', `
     If the recognized year number is less than 100, it is
     interpreted as an abbreviated year relative to a century of
     which dates are within 80 years before and 19 years after
     the time when the Date class is initialized.
     After adjusting the year number, 1900 is subtracted from
     it. For example, if the current year is 1999 then years in
     the range 19 to 99 are assumed to mean 1919 to 1999, while
     years from 0 to 18 are assumed to mean 2000 to 2018.  Note
     that this is slightly different from the interpretation of
     years less than 100 that is used in `],
						[/* reference */ 'r', `java.text.SimpleDateFormat`, `SimpleDateFormat`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', `If the number is followed by a colon, it is regarded as an hour,
     unless an hour has already been recognized, in which case it is
     regarded as a minute.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `If the number is followed by a slash, it is regarded as a month
     (it is decreased by 1 to produce a number in the range `],
						[/* inline code block */ 'i', `0`],
						[/* text */ 't', `
     to `],
						[/* inline code block */ 'i', `11`],
						[/* text */ 't', `), unless a month has already been recognized, in
     which case it is regarded as a day of the month.
 `]
					]],
					[/* block */ 'b', `If the number is followed by whitespace, a comma, a hyphen, or
     end of string, then if an hour has been recognized but not a
     minute, it is regarded as a minute; otherwise, if a minute has
     been recognized but not a second, it is regarded as a second;
     otherwise, it is regarded as a day of the month. `]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 A consecutive sequence of letters is regarded as a word and treated
 as follows:`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `A word that matches `],
						[/* inline code block */ 'i', `AM`],
						[/* text */ 't', `, ignoring case, is ignored (but
     the parse fails if an hour has not been recognized or is less
     than `],
						[/* inline code block */ 'i', `1`],
						[/* text */ 't', ` or greater than `],
						[/* inline code block */ 'i', `12`],
						[/* text */ 't', `).
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `A word that matches `],
						[/* inline code block */ 'i', `PM`],
						[/* text */ 't', `, ignoring case, adds `],
						[/* inline code block */ 'i', `12`],
						[/* text */ 't', `
     to the hour (but the parse fails if an hour has not been
     recognized or is less than `],
						[/* inline code block */ 'i', `1`],
						[/* text */ 't', ` or greater than `],
						[/* inline code block */ 'i', `12`],
						[/* text */ 't', `).
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Any word that matches any prefix of `],
						[/* inline code block */ 'i', `SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY`],
						[/* text */ 't', `, or `],
						[/* inline code block */ 'i', `SATURDAY`],
						[/* text */ 't', `, ignoring
     case, is ignored. For example, `],
						[/* inline code block */ 'i', `sat, Friday, TUE`],
						[/* text */ 't', `, and
     `],
						[/* inline code block */ 'i', `Thurs`],
						[/* text */ 't', ` are ignored.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Otherwise, any word that matches any prefix of `],
						[/* inline code block */ 'i', `JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER`],
						[/* text */ 't', `, or `],
						[/* inline code block */ 'i', `DECEMBER`],
						[/* text */ 't', `, ignoring case, and
     considering them in the order given here, is recognized as
     specifying a month and is converted to a number (`],
						[/* inline code block */ 'i', `0`],
						[/* text */ 't', ` to
     `],
						[/* inline code block */ 'i', `11`],
						[/* text */ 't', `). For example, `],
						[/* inline code block */ 'i', `aug, Sept, april`],
						[/* text */ 't', `, and
     `],
						[/* inline code block */ 'i', `NOV`],
						[/* text */ 't', ` are recognized as months. So is `],
						[/* inline code block */ 'i', `Ma`],
						[/* text */ 't', `, which
     is recognized as `],
						[/* inline code block */ 'i', `MARCH`],
						[/* text */ 't', `, not `],
						[/* inline code block */ 'i', `MAY`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Any word that matches `],
						[/* inline code block */ 'i', `GMT, UT`],
						[/* text */ 't', `, or `],
						[/* inline code block */ 'i', `UTC`],
						[/* text */ 't', `, ignoring
     case, is treated as referring to UTC.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Any word that matches `],
						[/* inline code block */ 'i', `EST, CST, MST`],
						[/* text */ 't', `, or `],
						[/* inline code block */ 'i', `PST`],
						[/* text */ 't', `,
     ignoring case, is recognized as referring to the time zone in
     North America that is five, six, seven, or eight hours west of
     Greenwich, respectively. Any word that matches `],
						[/* inline code block */ 'i', `EDT, CDT, MDT`],
						[/* text */ 't', `, or `],
						[/* inline code block */ 'i', `PDT`],
						[/* text */ 't', `, ignoring case, is recognized as
     referring to the same time zone, respectively, during daylight
     saving time.`]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 Once the entire string s has been scanned, it is converted to a time
 result in one of two ways. If a time zone or time-zone offset has been
 recognized, then the year, month, day of month, hour, minute, and
 second are interpreted in UTC and then the time-zone offset is
 applied. Otherwise, the year, month, day of month, hour, minute, and
 second are interpreted in the local time zone.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `a string to be parsed as a date.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the number of milliseconds since January 1, 1970, 00:00:00 GMT
          represented by the string argument.`]
			]
		]],
		[/* method */ 'UTC(int,int,int,int,int,int)', [
			[/* method description */
				[/* text */ 't', `Determines the date and time based on the arguments. The
 arguments are interpreted as a year, month, day of the month,
 hour of the day, minute within the hour, and second within the
 minute, exactly as for the `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` constructor with six
 arguments, except that the arguments are interpreted relative
 to UTC rather than to the local time zone. The time indicated is
 returned represented as the distance, measured in milliseconds,
 of that time from the epoch (00:00:00 GMT on January 1, 1970).`]
			],
			[/* parameters */
				[/* parameter */ 'year', [/* parameter description */
					[/* text */ 't', `the year minus 1900.`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the month between 0-11.`]
				]],
				[/* parameter */ 'date', [/* parameter description */
					[/* text */ 't', `the day of the month between 1-31.`]
				]],
				[/* parameter */ 'hrs', [/* parameter description */
					[/* text */ 't', `the hours between 0-23.`]
				]],
				[/* parameter */ 'min', [/* parameter description */
					[/* text */ 't', `the minutes between 0-59.`]
				]],
				[/* parameter */ 'sec', [/* parameter description */
					[/* text */ 't', `the seconds between 0-59.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the number of milliseconds since January 1, 1970, 00:00:00 GMT for
          the date and time specified by the arguments.`]
			]
		]],
		[/* method */ 'setDate(int)', [
			[/* method description */
				[/* text */ 't', `Sets the day of the month of this `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object to the
 specified value. This `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object is modified so that
 it represents a point in time within the specified day of the
 month, with the year, month, hour, minute, and second the same
 as before, as interpreted in the local time zone. If the date
 was April 30, for example, and the date is set to 31, then it
 will be treated as if it were on May 1, because April has only
 30 days.`]
			],
			[/* parameters */
				[/* parameter */ 'date', [/* parameter description */
					[/* text */ 't', `the day of the month value between 1-31.`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'setHours(int)', [
			[/* method description */
				[/* text */ 't', `Sets the hour of this `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object to the specified value.
 This `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object is modified so that it represents a point
 in time within the specified hour of the day, with the year, month,
 date, minute, and second the same as before, as interpreted in the
 local time zone.`]
			],
			[/* parameters */
				[/* parameter */ 'hours', [/* parameter description */
					[/* text */ 't', `the hour value.`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'setMinutes(int)', [
			[/* method description */
				[/* text */ 't', `Sets the minutes of this `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object to the specified value.
 This `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object is modified so that it represents a point
 in time within the specified minute of the hour, with the year, month,
 date, hour, and second the same as before, as interpreted in the
 local time zone.`]
			],
			[/* parameters */
				[/* parameter */ 'minutes', [/* parameter description */
					[/* text */ 't', `the value of the minutes.`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'setMonth(int)', [
			[/* method description */
				[/* text */ 't', `Sets the month of this date to the specified value. This
 `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object is modified so that it represents a point
 in time within the specified month, with the year, date, hour,
 minute, and second the same as before, as interpreted in the
 local time zone. If the date was October 31, for example, and
 the month is set to June, then the new date will be treated as
 if it were on July 1, because June has only 30 days.`]
			],
			[/* parameters */
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the month value between 0-11.`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'setSeconds(int)', [
			[/* method description */
				[/* text */ 't', `Sets the seconds of this `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` to the specified value.
 This `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object is modified so that it represents a
 point in time within the specified second of the minute, with
 the year, month, date, hour, and minute the same as before, as
 interpreted in the local time zone.`]
			],
			[/* parameters */
				[/* parameter */ 'seconds', [/* parameter description */
					[/* text */ 't', `the seconds value.`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'setTime(long)', [
			[/* method description */
				[/* text */ 't', `Sets this `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object to represent a point in time that is
 `],
				[/* inline code block */ 'i', `time`],
				[/* text */ 't', ` milliseconds after January 1, 1970 00:00:00 GMT.`]
			],
			[/* parameters */
				[/* parameter */ 'time', [/* parameter description */
					[/* text */ 't', `the number of milliseconds.`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'setYear(int)', [
			[/* method description */
				[/* text */ 't', `Sets the year of this `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object to be the specified
 value plus 1900. This `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object is modified so
 that it represents a point in time within the specified year,
 with the month, date, hour, minute, and second the same as
 before, as interpreted in the local time zone. (Of course, if
 the date was February 29, for example, and the year is set to a
 non-leap year, then the new date will be treated as if it were
 on March 1.)`]
			],
			[/* parameters */
				[/* parameter */ 'year', [/* parameter description */
					[/* text */ 't', `the year value.`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
