import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.chrono.ChronoLocalDate', [
	[/* class description */
		[/* text */ 't', `A date without time-of-day or time-zone in an arbitrary chronology, intended
 for advanced globalization use cases.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `Most applications should declare method signatures, fields and variables
 as `],
			[/* reference */ 'r', `java.time.LocalDate`, `LocalDate`],
			[/* text */ 't', `, not this interface.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 A `],
			[/* inline code block */ 'i', `ChronoLocalDate`],
			[/* text */ 't', ` is the abstract representation of a date where the
 `],
			[/* inline code block */ 'i', `Chronology chronology`],
			[/* text */ 't', `, or calendar system, is pluggable.
 The date is defined in terms of fields expressed by `],
			[/* reference */ 'r', `java.time.temporal.TemporalField`, `TemporalField`],
			[/* text */ 't', `,
 where most common implementations are defined in `],
			[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
			[/* text */ 't', `.
 The chronology defines how the calendar system operates and the meaning of
 the standard fields.

 `]
		]],
		[/* block */ 'b', `When to use this interface`],
		[/* text */ 't', `
 The design of the API encourages the use of `],
		[/* inline code block */ 'i', `LocalDate`],
		[/* text */ 't', ` rather than this
 interface, even in the case where the application needs to deal with multiple
 calendar systems.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 This concept can seem surprising at first, as the natural way to globalize an
 application might initially appear to be to abstract the calendar system.
 However, as explored below, abstracting the calendar system is usually the wrong
 approach, resulting in logic errors and hard to find bugs.
 As such, it should be considered an application-wide architectural decision to choose
 to use this interface as opposed to `],
			[/* inline code block */ 'i', `LocalDate`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', `Architectural issues to consider`],
		[/* text */ 't', `
 These are some of the points that must be considered before using this interface
 throughout an application.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 1) Applications using this interface, as opposed to using just `],
			[/* inline code block */ 'i', `LocalDate`],
			[/* text */ 't', `,
 face a significantly higher probability of bugs. This is because the calendar system
 in use is not known at development time. A key cause of bugs is where the developer
 applies assumptions from their day-to-day knowledge of the ISO calendar system
 to code that is intended to deal with any arbitrary calendar system.
 The section below outlines how those assumptions can cause problems
 The primary mechanism for reducing this increased risk of bugs is a strong code review process.
 This should also be considered a extra cost in maintenance for the lifetime of the code.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 2) This interface does not enforce immutability of implementations.
 While the implementation notes indicate that all implementations must be immutable
 there is nothing in the code or type system to enforce this. Any method declared
 to accept a `],
			[/* inline code block */ 'i', `ChronoLocalDate`],
			[/* text */ 't', ` could therefore be passed a poorly or
 maliciously written mutable implementation.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 3) Applications using this interface  must consider the impact of eras.
 `],
			[/* inline code block */ 'i', `LocalDate`],
			[/* text */ 't', ` shields users from the concept of eras, by ensuring that `],
			[/* inline code block */ 'i', `getYear()`],
			[/* text */ 't', `
 returns the proleptic year. That decision ensures that developers can think of
 `],
			[/* inline code block */ 'i', `LocalDate`],
			[/* text */ 't', ` instances as consisting of three fields - year, month-of-year and day-of-month.
 By contrast, users of this interface must think of dates as consisting of four fields -
 era, year-of-era, month-of-year and day-of-month. The extra era field is frequently
 forgotten, yet it is of vital importance to dates in an arbitrary calendar system.
 For example, in the Japanese calendar system, the era represents the reign of an Emperor.
 Whenever one reign ends and another starts, the year-of-era is reset to one.
 `]
		]],
		[/* block */ 'b', `
 4) The only agreed international standard for passing a date between two systems
 is the ISO-8601 standard which requires the ISO calendar system. Using this interface
 throughout the application will inevitably lead to the requirement to pass the date
 across a network or component boundary, requiring an application specific protocol or format.
 `],
		[/* block */ 'b', `
 5) Long term persistence, such as a database, will almost always only accept dates in the
 ISO-8601 calendar system (or the related Julian-Gregorian). Passing around dates in other
 calendar systems increases the complications of interacting with persistence.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 6) Most of the time, passing a `],
			[/* inline code block */ 'i', `ChronoLocalDate`],
			[/* text */ 't', ` throughout an application
 is unnecessary, as discussed in the last section below.

 `]
		]],
		[/* block */ 'b', `False assumptions causing bugs in multi-calendar system code`],
		[/* text */ 't', `
 As indicated above, there are many issues to consider when try to use and manipulate a
 date in an arbitrary calendar system. These are some of the key issues.
 `],
		[/* block */ 'b', `
 Code that queries the day-of-month and assumes that the value will never be more than
 31 is invalid. Some calendar systems have more than 31 days in some months.
 `],
		[/* block */ 'b', `
 Code that adds 12 months to a date and assumes that a year has been added is invalid.
 Some calendar systems have a different number of months, such as 13 in the Coptic or Ethiopic.
 `],
		[/* block */ 'b', `
 Code that adds one month to a date and assumes that the month-of-year value will increase
 by one or wrap to the next year is invalid. Some calendar systems have a variable number
 of months in a year, such as the Hebrew.
 `],
		[/* block */ 'b', `
 Code that adds one month, then adds a second one month and assumes that the day-of-month
 will remain close to its original value is invalid. Some calendar systems have a large difference
 between the length of the longest month and the length of the shortest month.
 For example, the Coptic or Ethiopic have 12 months of 30 days and 1 month of 5 days.
 `],
		[/* block */ 'b', `
 Code that adds seven days and assumes that a week has been added is invalid.
 Some calendar systems have weeks of other than seven days, such as the French Revolutionary.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Code that assumes that because the year of `],
			[/* inline code block */ 'i', `date1`],
			[/* text */ 't', ` is greater than the year of `],
			[/* inline code block */ 'i', `date2`],
			[/* text */ 't', `
 then `],
			[/* inline code block */ 'i', `date1`],
			[/* text */ 't', ` is after `],
			[/* inline code block */ 'i', `date2`],
			[/* text */ 't', ` is invalid. This is invalid for all calendar systems
 when referring to the year-of-era, and especially untrue of the Japanese calendar system
 where the year-of-era restarts with the reign of every new Emperor.
 `]
		]],
		[/* block */ 'b', `
 Code that treats month-of-year one and day-of-month one as the start of the year is invalid.
 Not all calendar systems start the year when the month value is one.
 `],
		[/* block */ 'b', `
 In general, manipulating a date, and even querying a date, is wide open to bugs when the
 calendar system is unknown at development time. This is why it is essential that code using
 this interface is subjected to additional code reviews. It is also why an architectural
 decision to avoid this interface type is usually the correct one.

 `],
		[/* block */ 'b', `Using LocalDate instead`],
		[/* text */ 't', `
 The primary alternative to using this interface throughout your application is as follows.
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `Declare all method signatures referring to dates in terms of `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', `.
 `]
			]],
			[/* block */ 'b', `Either store the chronology (calendar system) in the user profile or lookup
  the chronology from the user locale
 `],
			[/* block */ 'b', [
				[/* text */ 't', `Convert the ISO `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` to and from the user's preferred calendar system during
  printing and parsing
 `]
			]]
		]],
		[/* text */ 't', `
 This approach treats the problem of globalized calendar systems as a localization issue
 and confines it to the UI layer. This approach is in keeping with other localization
 issues in the java platform.
 `],
		[/* block */ 'b', `
 As discussed above, performing calculations on a date where the rules of the calendar system
 are pluggable requires skill and is not recommended.
 Fortunately, the need to perform calculations on a date in an arbitrary calendar system
 is extremely rare. For example, it is highly unlikely that the business rules of a library
 book rental scheme will allow rentals to be for one month, where meaning of the month
 is dependent on the user's preferred calendar system.
 `],
		[/* block */ 'b', `
 A key use case for calculations on a date in an arbitrary calendar system is producing
 a month-by-month calendar for display and user interaction. Again, this is a UI issue,
 and use of this interface solely within a few methods of the UI layer may be justified.
 `],
		[/* block */ 'b', `
 In any other part of the system, where a date must be manipulated in a calendar system
 other than ISO, the use case will generally specify the calendar system to use.
 For example, an application may need to calculate the next Islamic or Hebrew holiday
 which may require manipulating the date.
 This kind of use case can be handled as follows:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `start from the ISO `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` being passed to the method
 `]
			]],
			[/* block */ 'b', `convert the date to the alternate calendar system, which for this use case is known
  rather than arbitrary
 `],
			[/* block */ 'b', `perform the calculation
 `],
			[/* block */ 'b', [
				[/* text */ 't', `convert back to `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', `
 `]
			]]
		]],
		[/* text */ 't', `
 Developers writing low-level frameworks or libraries should also avoid this interface.
 Instead, one of the two general purpose access interfaces should be used.
 Use `],
		[/* reference */ 'r', `java.time.temporal.TemporalAccessor`, `TemporalAccessor`],
		[/* text */ 't', ` if read-only access is required, or use `],
		[/* reference */ 'r', `java.time.temporal.Temporal`, `Temporal`],
		[/* text */ 't', `
 if read-write access is required.`],
		[/* block */ 'b', '']
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks if this date is equal to another date, including the chronology.
 `],
				[/* block */ 'b', `
 Compares this date with another ensuring that the date and chronology are the same.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 To compare the dates of two `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` instances, including dates
 in two different chronologies, use `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#EPOCH_DAY`, `ChronoField.EPOCH_DAY`],
					[/* text */ 't', ` as a comparator.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to check, null returns false`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if this is equal to the other date`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `A hash code for this date.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a suitable hash code`]
			]
		]],
		[/* method */ 'lengthOfMonth()', [
			[/* method description */
				[/* text */ 't', `Returns the length of the month represented by this date, as defined by the calendar system.
 `],
				[/* block */ 'b', `
 This returns the length of the month in days.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the length of the month in days`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Outputs this date as a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 The output will include the full local date.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the formatted date, not null`]
			]
		]],
		[/* method */ 'getChronology()', [
			[/* method description */
				[/* text */ 't', `Gets the chronology of this date.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `Chronology`],
					[/* text */ 't', ` represents the calendar system in use.
 The era and other fields in `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
					[/* text */ 't', ` are defined by the chronology.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the chronology, not null`]
			]
		]],
		[/* method */ 'until(java.time.chrono.ChronoLocalDate)', [
			[/* method description */
				[/* text */ 't', `Calculates the period between this date and another date as a `],
				[/* inline code block */ 'i', `ChronoPeriod`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This calculates the period between two dates. All supplied chronologies
 calculate the period using years, months and days, however the
 `],
					[/* inline code block */ 'i', `ChronoPeriod`],
					[/* text */ 't', ` API allows the period to be represented using other units.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The start and end points are `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` and the specified date.
 The result will be negative if the end is before the start.
 The negative sign will be the same in each of year, month and day.
 `]
				]],
				[/* block */ 'b', `
 The calculation is performed using the chronology of this date.
 If necessary, the input date will be converted to match.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'endDateExclusive', [/* parameter description */
					[/* text */ 't', `the end date, exclusive, which may be in any chronology, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the period cannot be calculated`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the period between this date and the end date, not null`]
			]
		]],
		[/* method */ 'until(java.time.temporal.Temporal,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Calculates the amount of time until another date in terms of the specified unit.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This calculates the amount of time between two `],
					[/* inline code block */ 'i', `ChronoLocalDate`],
					[/* text */ 't', `
 objects in terms of a single `],
					[/* inline code block */ 'i', `TemporalUnit`],
					[/* text */ 't', `.
 The start and end points are `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` and the specified date.
 The result will be negative if the end is before the start.
 The `],
					[/* inline code block */ 'i', `Temporal`],
					[/* text */ 't', ` passed to this method is converted to a
 `],
					[/* inline code block */ 'i', `ChronoLocalDate`],
					[/* text */ 't', ` using `],
					[/* reference */ 'r', `java.time.chrono.Chronology#date(java.time.temporal.TemporalAccessor)`, `Chronology.date(TemporalAccessor)`],
					[/* text */ 't', `.
 The calculation returns a whole number, representing the number of
 complete units between the two dates.
 For example, the amount in days between two dates can be calculated
 using `],
					[/* inline code block */ 'i', `startDate.until(endDate, DAYS)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 There are two equivalent ways of using this method.
 The first is to invoke this method.
 The second is to use `],
					[/* reference */ 'r', `java.time.temporal.TemporalUnit#between(java.time.temporal.Temporal,java.time.temporal.Temporal)`, `TemporalUnit.between(Temporal, Temporal)`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', `   // these two lines are equivalent
   amount = start.until(end, MONTHS);
   amount = MONTHS.between(start, end);
 `],
				[/* text */ 't', `
 The choice should be made based on which makes the code more readable.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The calculation is implemented in this method for `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoUnit`, `ChronoUnit`],
					[/* text */ 't', `.
 The units `],
					[/* inline code block */ 'i', `DAYS`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `WEEKS`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `MONTHS`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `YEARS`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `DECADES`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `CENTURIES`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `MILLENNIA`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `ERAS`],
					[/* text */ 't', `
 should be supported by all implementations.
 Other `],
					[/* inline code block */ 'i', `ChronoUnit`],
					[/* text */ 't', ` values will throw an exception.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the unit is not a `],
					[/* inline code block */ 'i', `ChronoUnit`],
					[/* text */ 't', `, then the result of this method
 is obtained by invoking `],
					[/* inline code block */ 'i', `TemporalUnit.between(Temporal, Temporal)`],
					[/* text */ 't', `
 passing `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` as the first argument and the converted input temporal as
 the second argument.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'endExclusive', [/* parameter description */
					[/* text */ 't', `the end date, exclusive, which is converted to a
  `],
					[/* inline code block */ 'i', `ChronoLocalDate`],
					[/* text */ 't', ` in the same chronology, not null`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the unit to measure the amount in, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the amount cannot be calculated, or the end
  temporal cannot be converted to a `],
					[/* inline code block */ 'i', `ChronoLocalDate`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the unit is not supported`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the amount of time between this date and the end date`]
			]
		]],
		[/* method */ 'query(java.time.temporal.TemporalQuery)', [
			[/* method description */
				[/* text */ 't', `Queries this date using the specified query.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This queries this date using the specified query strategy object.
 The `],
					[/* inline code block */ 'i', `TemporalQuery`],
					[/* text */ 't', ` object defines the logic to be used to
 obtain the result. Read the documentation of the query to understand
 what the result of this method will be.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The result of this method is obtained by invoking the
 `],
					[/* reference */ 'r', `java.time.temporal.TemporalQuery#queryFrom(java.time.temporal.TemporalAccessor)`, `TemporalQuery.queryFrom(TemporalAccessor)`],
					[/* text */ 't', ` method on the
 specified query passing `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` as the argument.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'query', [/* parameter description */
					[/* text */ 't', `the query to invoke, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to query (defined by the query)`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs (defined by the query)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the query result, null may be returned (defined by the query)`]
			]
		]],
		[/* method */ 'isAfter(java.time.chrono.ChronoLocalDate)', [
			[/* method description */
				[/* text */ 't', `Checks if this date is after the specified date ignoring the chronology.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method differs from the comparison in `],
					[/* reference */ 'r', `#compareTo(java.time.chrono.ChronoLocalDate)`, `compareTo(java.time.chrono.ChronoLocalDate)`],
					[/* text */ 't', ` in that it
 only compares the underlying date and not the chronology.
 This allows dates in different calendar systems to be compared based
 on the time-line position.
 This is equivalent to using `],
					[/* inline code block */ 'i', `date1.toEpochDay() > date2.toEpochDay()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 This default implementation performs the comparison based on the epoch-day.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other date to compare to, not null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if this is after the specified date`]
			]
		]],
		[/* method */ 'isBefore(java.time.chrono.ChronoLocalDate)', [
			[/* method description */
				[/* text */ 't', `Checks if this date is before the specified date ignoring the chronology.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method differs from the comparison in `],
					[/* reference */ 'r', `#compareTo(java.time.chrono.ChronoLocalDate)`, `compareTo(java.time.chrono.ChronoLocalDate)`],
					[/* text */ 't', ` in that it
 only compares the underlying date and not the chronology.
 This allows dates in different calendar systems to be compared based
 on the time-line position.
 This is equivalent to using `],
					[/* inline code block */ 'i', `date1.toEpochDay() < date2.toEpochDay()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 This default implementation performs the comparison based on the epoch-day.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other date to compare to, not null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if this is before the specified date`]
			]
		]],
		[/* method */ 'isEqual(java.time.chrono.ChronoLocalDate)', [
			[/* method description */
				[/* text */ 't', `Checks if this date is equal to the specified date ignoring the chronology.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method differs from the comparison in `],
					[/* reference */ 'r', `#compareTo(java.time.chrono.ChronoLocalDate)`, `compareTo(java.time.chrono.ChronoLocalDate)`],
					[/* text */ 't', ` in that it
 only compares the underlying date and not the chronology.
 This allows dates in different calendar systems to be compared based
 on the time-line position.
 This is equivalent to using `],
					[/* inline code block */ 'i', `date1.toEpochDay() == date2.toEpochDay()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 This default implementation performs the comparison based on the epoch-day.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other date to compare to, not null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if the underlying date is equal to the specified date`]
			]
		]],
		[/* method */ 'isLeapYear()', [
			[/* method description */
				[/* text */ 't', `Checks if the year is a leap year, as defined by the calendar system.
 `],
				[/* block */ 'b', `
 A leap-year is a year of a longer length than normal.
 The exact meaning is determined by the chronology with the constraint that
 a leap-year must imply a year-length longer than a non leap-year.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This default implementation uses `],
					[/* reference */ 'r', `java.time.chrono.Chronology#isLeapYear(long)`, `Chronology.isLeapYear(long)`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if this date is in a leap year, false otherwise`]
			]
		]],
		[/* method */ 'isSupported(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Checks if the specified field is supported.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This checks if the specified field can be queried on this date.
 If false, then calling the `],
					[/* reference */ 'r', `java.time.temporal.TemporalAccessor#range(java.time.temporal.TemporalField)`, `range`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.time.temporal.TemporalAccessor#get(java.time.temporal.TemporalField)`, `get`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `#with(java.time.temporal.TemporalField,long)`, `with(TemporalField, long)`],
					[/* text */ 't', `
 methods will throw an exception.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The set of supported fields is defined by the chronology and normally includes
 all `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', ` date fields.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is not a `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', `, then the result of this method
 is obtained by invoking `],
					[/* inline code block */ 'i', `TemporalField.isSupportedBy(TemporalAccessor)`],
					[/* text */ 't', `
 passing `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` as the argument.
 Whether the field is supported is determined by the field.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to check, null returns false`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if the field can be queried, false if not`]
			]
		]],
		[/* method */ 'isSupported(java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Checks if the specified unit is supported.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This checks if the specified unit can be added to or subtracted from this date.
 If false, then calling the `],
					[/* reference */ 'r', `#plus(long,java.time.temporal.TemporalUnit)`, `plus(long, TemporalUnit)`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `#minus(long,java.time.temporal.TemporalUnit)`, `minus`],
					[/* text */ 't', ` methods will throw an exception.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The set of supported units is defined by the chronology and normally includes
 all `],
					[/* inline code block */ 'i', `ChronoUnit`],
					[/* text */ 't', ` date units except `],
					[/* inline code block */ 'i', `FOREVER`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the unit is not a `],
					[/* inline code block */ 'i', `ChronoUnit`],
					[/* text */ 't', `, then the result of this method
 is obtained by invoking `],
					[/* inline code block */ 'i', `TemporalUnit.isSupportedBy(Temporal)`],
					[/* text */ 't', `
 passing `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` as the argument.
 Whether the unit is supported is determined by the unit.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the unit to check, null returns false`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if the unit can be added/subtracted, false if not`]
			]
		]],
		[/* method */ 'compareTo(java.time.chrono.ChronoLocalDate)', [
			[/* method description */
				[/* text */ 't', `Compares this date to another date, including the chronology.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The comparison is based first on the underlying time-line date, then
 on the chronology.
 It is "consistent with equals", as defined by `],
					[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 For example, the following is the comparator order:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `2012-12-03 (ISO)`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `2012-12-04 (ISO)`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `2555-12-04 (ThaiBuddhist)`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `2012-12-05 (ISO)`]
					]]
				]],
				[/* text */ 't', `
 Values #2 and #3 represent the same date on the time-line.
 When two values represent the same date, the chronology ID is compared to distinguish them.
 This step is needed to make the ordering "consistent with equals".
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 If all the date objects being compared are in the same chronology, then the
 additional chronology stage is not required and only the local date is used.
 To compare the dates of two `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` instances, including dates
 in two different chronologies, use `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#EPOCH_DAY`, `ChronoField.EPOCH_DAY`],
					[/* text */ 't', ` as a comparator.
 `]
				]],
				[/* block */ 'b', `
 This default implementation performs the comparison defined above.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other date to compare to, not null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the comparator value, negative if less, positive if greater`]
			]
		]],
		[/* method */ 'lengthOfYear()', [
			[/* method description */
				[/* text */ 't', `Returns the length of the year represented by this date, as defined by the calendar system.
 `],
				[/* block */ 'b', `
 This returns the length of the year in days.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The default implementation uses `],
					[/* reference */ 'r', `#isLeapYear()`, `isLeapYear()`],
					[/* text */ 't', ` and returns 365 or 366.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the length of the year in days`]
			]
		]],
		[/* method */ 'format(java.time.format.DateTimeFormatter)', [
			[/* method description */
				[/* text */ 't', `Formats this date using the specified formatter.
 `],
				[/* block */ 'b', `
 This date will be passed to the formatter to produce a string.
 `],
				[/* block */ 'b', `
 The default implementation must behave as follows:
 `],
				[/* code block */ 'c', `  return formatter.format(this);
 `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'formatter', [/* parameter description */
					[/* text */ 't', `the formatter to use, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if an error occurs during printing`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the formatted date string, not null`]
			]
		]],
		[/* method */ 'minus(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Returns an object of the same type as this object with an amount subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This adjusts this temporal, subtracting according to the rules of the specified amount.
 The amount is typically a `],
					[/* reference */ 'r', `java.time.Period`, `Period`],
					[/* text */ 't', ` but may be any other type implementing
 the `],
					[/* reference */ 'r', `java.time.temporal.TemporalAmount`, `TemporalAmount`],
					[/* text */ 't', ` interface, such as `],
					[/* reference */ 'r', `java.time.Duration`, `Duration`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 Some example code indicating how and why this method is used:
 `],
				[/* code block */ 'c', `  date = date.minus(period);               // subtract a Period instance
  date = date.minus(duration);             // subtract a Duration instance
  date = date.minus(workingDays(6));       // example user-written workingDays method
 `],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that calling `],
					[/* inline code block */ 'i', `plus`],
					[/* text */ 't', ` followed by `],
					[/* inline code block */ 'i', `minus`],
					[/* text */ 't', ` is not guaranteed to
 return the same date-time.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'amount', [/* parameter description */
					[/* text */ 't', `the amount to subtract, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the subtraction cannot be made`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an object of the same type with the specified adjustment made, not null`]
			]
		]],
		[/* method */ 'minus(long,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns an object of the same type as this object with the specified period subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method returns a new object based on this one with the specified period subtracted.
 For example, on a `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', `, this could be used to subtract a number of years, months or days.
 The returned object will have the same observable type as this object.
 `]
				]],
				[/* block */ 'b', `
 In some cases, changing a field is not fully defined. For example, if the target object is
 a date representing the 31st March, then subtracting one month would be unclear.
 In cases like this, the field is responsible for resolving the result. Typically it will choose
 the previous valid date, which would be the last valid day of February in this example.`]
			],
			[/* parameters */
				[/* parameter */ 'amountToSubtract', [/* parameter description */
					[/* text */ 't', `the amount of the specified unit to subtract, may be negative`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the unit of the amount to subtract, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the unit cannot be subtracted`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the unit is not supported`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an object of the same type with the specified period subtracted, not null`]
			]
		]],
		[/* method */ 'plus(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Returns an object of the same type as this object with an amount added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This adjusts this temporal, adding according to the rules of the specified amount.
 The amount is typically a `],
					[/* reference */ 'r', `java.time.Period`, `Period`],
					[/* text */ 't', ` but may be any other type implementing
 the `],
					[/* reference */ 'r', `java.time.temporal.TemporalAmount`, `TemporalAmount`],
					[/* text */ 't', ` interface, such as `],
					[/* reference */ 'r', `java.time.Duration`, `Duration`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 Some example code indicating how and why this method is used:
 `],
				[/* code block */ 'c', `  date = date.plus(period);                // add a Period instance
  date = date.plus(duration);              // add a Duration instance
  date = date.plus(workingDays(6));        // example user-written workingDays method
 `],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that calling `],
					[/* inline code block */ 'i', `plus`],
					[/* text */ 't', ` followed by `],
					[/* inline code block */ 'i', `minus`],
					[/* text */ 't', ` is not guaranteed to
 return the same date-time.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'amount', [/* parameter description */
					[/* text */ 't', `the amount to add, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the addition cannot be made`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an object of the same type with the specified adjustment made, not null`]
			]
		]],
		[/* method */ 'plus(long,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns an object of the same type as this object with the specified period added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method returns a new object based on this one with the specified period added.
 For example, on a `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', `, this could be used to add a number of years, months or days.
 The returned object will have the same observable type as this object.
 `]
				]],
				[/* block */ 'b', `
 In some cases, changing a field is not fully defined. For example, if the target object is
 a date representing the 31st January, then adding one month would be unclear.
 In cases like this, the field is responsible for resolving the result. Typically it will choose
 the previous valid date, which would be the last valid day of February in this example.`]
			],
			[/* parameters */
				[/* parameter */ 'amountToAdd', [/* parameter description */
					[/* text */ 't', `the amount of the specified unit to add, may be negative`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the unit of the amount to add, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the unit cannot be added`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an object of the same type with the specified period added, not null`]
			]
		]],
		[/* method */ 'with(java.time.temporal.TemporalAdjuster)', [
			[/* method description */
				[/* text */ 't', `Returns an adjusted object of the same type as this object with the adjustment made.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This adjusts this date-time according to the rules of the specified adjuster.
 A simple adjuster might simply set the one of the fields, such as the year field.
 A more complex adjuster might set the date to the last day of the month.
 A selection of common adjustments is provided in
 `],
					[/* reference */ 'r', `java.time.temporal.TemporalAdjusters`, `TemporalAdjusters`],
					[/* text */ 't', `.
 These include finding the "last day of the month" and "next Wednesday".
 The adjuster is responsible for handling special cases, such as the varying
 lengths of month and leap years.
 `]
				]],
				[/* block */ 'b', `
 Some example code indicating how and why this method is used:
 `],
				[/* code block */ 'c', `  date = date.with(Month.JULY);        // most key classes implement TemporalAdjuster
  date = date.with(lastDayOfMonth());  // static import from Adjusters
  date = date.with(next(WEDNESDAY));   // static import from Adjusters and DayOfWeek
 `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'adjuster', [/* parameter description */
					[/* text */ 't', `the adjuster to use, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to make the adjustment`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an object of the same type with the specified adjustment made, not null`]
			]
		]],
		[/* method */ 'with(java.time.temporal.TemporalField,long)', [
			[/* method description */
				[/* text */ 't', `Returns an object of the same type as this object with the specified field altered.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a new object based on this one with the value for the specified field changed.
 For example, on a `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', `, this could be used to set the year, month or day-of-month.
 The returned object will have the same observable type as this object.
 `]
				]],
				[/* block */ 'b', `
 In some cases, changing a field is not fully defined. For example, if the target object is
 a date representing the 31st January, then changing the month to February would be unclear.
 In cases like this, the field is responsible for resolving the result. Typically it will choose
 the previous valid date, which would be the last valid day of February in this example.`]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to set in the result, not null`]
				]],
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `the new value of the field in the result`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the field cannot be set`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the field is not supported`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an object of the same type with the specified field set, not null`]
			]
		]],
		[/* method */ 'atTime(java.time.LocalTime)', [
			[/* method description */
				[/* text */ 't', `Combines this date with a time to create a `],
				[/* inline code block */ 'i', `ChronoLocalDateTime`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `ChronoLocalDateTime`],
					[/* text */ 't', ` formed from this date at the specified time.
 All possible combinations of date and time are valid.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'localTime', [/* parameter description */
					[/* text */ 't', `the local time to use, not null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the local date-time formed from this date and the specified time, not null`]
			]
		]],
		[/* method */ 'getEra()', [
			[/* method description */
				[/* text */ 't', `Gets the era, as defined by the chronology.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The era is, conceptually, the largest division of the time-line.
 Most calendar systems have a single epoch dividing the time-line into two eras.
 However, some have multiple eras, such as one for the reign of each leader.
 The exact meaning is determined by the `],
					[/* inline code block */ 'i', `Chronology`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 All correctly implemented `],
					[/* inline code block */ 'i', `Era`],
					[/* text */ 't', ` classes are singletons, thus it
 is valid code to write `],
					[/* inline code block */ 'i', `date.getEra() == SomeChrono.ERA_NAME)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This default implementation uses `],
					[/* reference */ 'r', `java.time.chrono.Chronology#eraOf(int)`, `Chronology.eraOf(int)`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the chronology specific era constant applicable at this date, not null`]
			]
		]],
		[/* method */ 'adjustInto(java.time.temporal.Temporal)', [
			[/* method description */
				[/* text */ 't', `Adjusts the specified temporal object to have the same date as this object.
 `],
				[/* block */ 'b', `
 This returns a temporal object of the same observable type as the input
 with the date changed to be the same as this.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The adjustment is equivalent to using `],
					[/* reference */ 'r', `java.time.temporal.Temporal#with(java.time.temporal.TemporalField,long)`, `Temporal.with(TemporalField, long)`],
					[/* text */ 't', `
 passing `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#EPOCH_DAY`, `ChronoField.EPOCH_DAY`],
					[/* text */ 't', ` as the field.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In most cases, it is clearer to reverse the calling pattern by using
 `],
					[/* reference */ 'r', `java.time.temporal.Temporal#with(java.time.temporal.TemporalAdjuster)`, `Temporal.with(TemporalAdjuster)`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', `   // these two lines are equivalent, but the second approach is recommended
   temporal = thisLocalDate.adjustInto(temporal);
   temporal = temporal.with(thisLocalDate);
 `],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the target object to be adjusted, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to make the adjustment`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the adjusted object, not null`]
			]
		]],
		[/* method */ 'toEpochDay()', [
			[/* method description */
				[/* text */ 't', `Converts this date to the Epoch Day.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#EPOCH_DAY`, `Epoch Day count`],
					[/* text */ 't', ` is a simple
 incrementing count of days where day 0 is 1970-01-01 (ISO).
 This definition is the same for all chronologies, enabling conversion.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This default implementation queries the `],
					[/* inline code block */ 'i', `EPOCH_DAY`],
					[/* text */ 't', ` field.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the Epoch Day equivalent to this date`]
			]
		]],
		[/* method */ 'from(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `ChronoLocalDate`],
				[/* text */ 't', ` from a temporal object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This obtains a local date based on the specified temporal.
 A `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `],
					[/* inline code block */ 'i', `ChronoLocalDate`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The conversion extracts and combines the chronology and the date
 from the temporal object. The behavior is equivalent to using
 `],
					[/* reference */ 'r', `java.time.chrono.Chronology#date(java.time.temporal.TemporalAccessor)`, `Chronology.date(TemporalAccessor)`],
					[/* text */ 't', ` with the extracted chronology.
 Implementations are permitted to perform optimizations such as accessing
 those fields that are equivalent to the relevant objects.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method matches the signature of the functional interface `],
					[/* reference */ 'r', `java.time.temporal.TemporalQuery`, `TemporalQuery`],
					[/* text */ 't', `
 allowing it to be used as a query via method reference, `],
					[/* inline code block */ 'i', `ChronoLocalDate::from`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to convert, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to convert to a `],
					[/* inline code block */ 'i', `ChronoLocalDate`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the date, not null`]
			]
		]],
		[/* method */ 'timeLineOrder()', [
			[/* method description */
				[/* text */ 't', `Gets a comparator that compares `],
				[/* inline code block */ 'i', `ChronoLocalDate`],
				[/* text */ 't', ` in
 time-line order ignoring the chronology.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This comparator differs from the comparison in `],
					[/* reference */ 'r', `#compareTo(java.time.chrono.ChronoLocalDate)`, `compareTo(java.time.chrono.ChronoLocalDate)`],
					[/* text */ 't', ` in that it
 only compares the underlying date and not the chronology.
 This allows dates in different calendar systems to be compared based
 on the position of the date on the local time-line.
 The underlying comparison is equivalent to comparing the epoch-day.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a comparator that compares in time-line order ignoring the chronology`]
			]
		]]
	],
	/* enum values */ UDF
]);
