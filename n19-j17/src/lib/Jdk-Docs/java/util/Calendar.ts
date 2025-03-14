import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Calendar', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* inline code block */ 'i', `Calendar`],
		[/* text */ 't', ` class is an abstract class that provides methods
 for converting between a specific instant in time and a set of `],
		[/* text */ 't', `calendar fields`],
		[/* text */ 't', ` such as `],
		[/* inline code block */ 'i', `YEAR`],
		[/* text */ 't', `, `],
		[/* inline code block */ 'i', `MONTH`],
		[/* text */ 't', `,
 `],
		[/* inline code block */ 'i', `DAY_OF_MONTH`],
		[/* text */ 't', `, `],
		[/* inline code block */ 'i', `HOUR`],
		[/* text */ 't', `, and so on, and for
 manipulating the calendar fields, such as getting the date of the next
 week. An instant in time can be represented by a millisecond value that is
 an offset from the `],
		[/* anchor */ 'r', '#-id', `Epoch`, `Epoch`],
		[/* text */ 't', `, January 1, 1970
 00:00:00.000 GMT (Gregorian).

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The class also provides additional fields and methods for
 implementing a concrete calendar system outside the package. Those
 fields and methods are defined as `],
			[/* inline code block */ 'i', `protected`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Like other locale-sensitive classes, `],
			[/* inline code block */ 'i', `Calendar`],
			[/* text */ 't', ` provides a
 class method, `],
			[/* inline code block */ 'i', `getInstance`],
			[/* text */ 't', `, for getting a generally useful
 object of this type. `],
			[/* inline code block */ 'i', `Calendar`],
			[/* text */ 't', `'s `],
			[/* inline code block */ 'i', `getInstance`],
			[/* text */ 't', ` method
 returns a `],
			[/* inline code block */ 'i', `Calendar`],
			[/* text */ 't', ` object whose
 calendar fields have been initialized with the current date and time:
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', `     Calendar rightNow = Calendar.getInstance();
 `],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `A `],
			[/* inline code block */ 'i', `Calendar`],
			[/* text */ 't', ` object can produce all the calendar field values
 needed to implement the date-time formatting for a particular language and
 calendar style (for example, Japanese-Gregorian, Japanese-Traditional).
 `],
			[/* inline code block */ 'i', `Calendar`],
			[/* text */ 't', ` defines the range of values returned by
 certain calendar fields, as well as their meaning.  For example,
 the first month of the calendar system has value `],
			[/* inline code block */ 'i', `MONTH == JANUARY`],
			[/* text */ 't', ` for all calendars.  Other values are defined by the
 concrete subclass, such as `],
			[/* inline code block */ 'i', `ERA`],
			[/* text */ 't', `.  See individual field
 documentation and subclass documentation for details.

 `]
		]],
		[/* block */ 'b', `Getting and Setting Calendar Field Values`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The calendar field values can be set by calling the `],
			[/* inline code block */ 'i', `set`],
			[/* text */ 't', `
 methods. Any field values set in a `],
			[/* inline code block */ 'i', `Calendar`],
			[/* text */ 't', ` will not be
 interpreted until it needs to calculate its time value (milliseconds from
 the Epoch) or values of the calendar fields. Calling the
 `],
			[/* inline code block */ 'i', `get`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `getTimeInMillis`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `getTime`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `add`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `roll`],
			[/* text */ 't', ` involves such calculation.

 `]
		]],
		[/* block */ 'b', `Leniency`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `Calendar`],
			[/* text */ 't', ` has two modes for interpreting the calendar
 fields, `],
			[/* text */ 't', `lenient`],
			[/* text */ 't', ` and `],
			[/* text */ 't', `non-lenient`],
			[/* text */ 't', `.  When a
 `],
			[/* inline code block */ 'i', `Calendar`],
			[/* text */ 't', ` is in lenient mode, it accepts a wider range of
 calendar field values than it produces.  When a `],
			[/* inline code block */ 'i', `Calendar`],
			[/* text */ 't', `
 recomputes calendar field values for return by `],
			[/* inline code block */ 'i', `get()`],
			[/* text */ 't', `, all of
 the calendar fields are normalized. For example, a lenient
 `],
			[/* inline code block */ 'i', `GregorianCalendar`],
			[/* text */ 't', ` interprets `],
			[/* inline code block */ 'i', `MONTH == JANUARY`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `DAY_OF_MONTH == 32`],
			[/* text */ 't', ` as February 1.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `When a `],
			[/* inline code block */ 'i', `Calendar`],
			[/* text */ 't', ` is in non-lenient mode, it throws an
 exception if there is any inconsistency in its calendar fields. For
 example, a `],
			[/* inline code block */ 'i', `GregorianCalendar`],
			[/* text */ 't', ` always produces
 `],
			[/* inline code block */ 'i', `DAY_OF_MONTH`],
			[/* text */ 't', ` values between 1 and the length of the month. A
 non-lenient `],
			[/* inline code block */ 'i', `GregorianCalendar`],
			[/* text */ 't', ` throws an exception upon
 calculating its time or calendar field values if any out-of-range field
 value has been set.

 `]
		]],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `first_week`, `First Week`]
		]],
		[/* text */ 't', `

 `],
		[/* inline code block */ 'i', `Calendar`],
		[/* text */ 't', ` defines a locale-specific seven day week using two
 parameters: the first day of the week and the minimal days in first week
 (from 1 to 7).  These numbers are taken from the locale resource data or the
 locale itself when a `],
		[/* inline code block */ 'i', `Calendar`],
		[/* text */ 't', ` is constructed. If the designated
 locale contains "fw" and/or "rg" `],
		[/* reference */ 'r', `java.util.Locale#def_locale_extension`, `Unicode extensions`],
		[/* text */ 't', `, the first day of the week will be obtained according to
 those extensions. If both "fw" and "rg" are specified, the value from the "fw"
 extension supersedes the implicit one from the "rg" extension.
 They may also be specified explicitly through the methods for setting their
 values.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `When setting or getting the `],
			[/* inline code block */ 'i', `WEEK_OF_MONTH`],
			[/* text */ 't', ` or
 `],
			[/* inline code block */ 'i', `WEEK_OF_YEAR`],
			[/* text */ 't', ` fields, `],
			[/* inline code block */ 'i', `Calendar`],
			[/* text */ 't', ` must determine the
 first week of the month or year as a reference point.  The first week of a
 month or year is defined as the earliest seven day period beginning on
 `],
			[/* inline code block */ 'i', `getFirstDayOfWeek()`],
			[/* text */ 't', ` and containing at least
 `],
			[/* inline code block */ 'i', `getMinimalDaysInFirstWeek()`],
			[/* text */ 't', ` days of that month or year.  Weeks
 numbered ..., -1, 0 precede the first week; weeks numbered 2, 3,... follow
 it.  Note that the normalized numbering returned by `],
			[/* inline code block */ 'i', `get()`],
			[/* text */ 't', ` may be
 different.  For example, a specific `],
			[/* inline code block */ 'i', `Calendar`],
			[/* text */ 't', ` subclass may
 designate the week before week 1 of a year as week `],
			[/* inline code block */ 'i', `n`],
			[/* text */ 't', ` of
 the previous year.

 `]
		]],
		[/* block */ 'b', `Calendar Fields Resolution`],
		[/* text */ 't', `

 When computing a date and time from the calendar fields, there
 may be insufficient information for the computation (such as only
 year and month with no day of month), or there may be inconsistent
 information (such as Tuesday, July 15, 1996 (Gregorian) -- July 15,
 1996 is actually a Monday). `],
		[/* inline code block */ 'i', `Calendar`],
		[/* text */ 't', ` will resolve
 calendar field values to determine the date and time in the
 following way.

 `],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `resolution`, `If there is any conflict in calendar field values, Calendar gives priorities to calendar fields that have been set more recently.`],
			[/* text */ 't', ` The following are the default combinations of the
 calendar fields. The most recent combination, as determined by the
 most recently set single field, will be used.

 `]
		]],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `date_resolution`, `For the date fields`],
			[/* text */ 't', `:
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', ` YEAR + MONTH + DAY_OF_MONTH
 YEAR + MONTH + WEEK_OF_MONTH + DAY_OF_WEEK
 YEAR + MONTH + DAY_OF_WEEK_IN_MONTH + DAY_OF_WEEK
 YEAR + DAY_OF_YEAR
 YEAR + DAY_OF_WEEK + WEEK_OF_YEAR
 `]
		]],
		[/* text */ 't', `

 `],
		[/* anchor */ 'r', '#-id', `time_resolution`, `For the time of day fields`],
		[/* text */ 't', `:
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', ` HOUR_OF_DAY
 AM_PM + HOUR
 `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `If there are any calendar fields whose values haven't been set in the selected
 field combination, `],
			[/* inline code block */ 'i', `Calendar`],
			[/* text */ 't', ` uses their default values. The default
 value of each field may vary by concrete calendar systems. For example, in
 `],
			[/* inline code block */ 'i', `GregorianCalendar`],
			[/* text */ 't', `, the default of a field is the same as that
 of the start of the Epoch: i.e., `],
			[/* inline code block */ 'i', `YEAR = 1970`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `MONTH = JANUARY`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `DAY_OF_MONTH = 1`],
			[/* text */ 't', `, etc.

 `]
		]],
		[/* block */ 'b', `Note:`],
		[/* list */ 'l', [
			[/* block */ 'b', ` 23:59 is the last minute of the day and 00:00 is the first
          minute of the next day. Thus, 23:59 on Dec 31, 1999 < 00:00 on
          Jan 1, 2000 < 00:01 on Jan 1, 2000.

     `],
			[/* block */ 'b', ` Although historically not precise, midnight also belongs to "am",
          and noon belongs to "pm", so on the same day,
          12:00 am (midnight) < 12:01 am, and 12:00 pm (noon) < 12:01 pm
 `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 The date or time format strings are not part of the definition of a
 calendar, as those must be modifiable or overridable by the user at
 runtime. Use `],
			[/* reference */ 'r', `java.text.DateFormat`, `DateFormat`],
			[/* text */ 't', `
 to format dates.

 `]
		]],
		[/* block */ 'b', `Field Manipulation`],
		[/* text */ 't', `

 The calendar fields can be changed using three methods:
 `],
		[/* inline code block */ 'i', `set()`],
		[/* text */ 't', `, `],
		[/* inline code block */ 'i', `add()`],
		[/* text */ 't', `, and `],
		[/* inline code block */ 'i', `roll()`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `set(f, value)`],
			[/* text */ 't', ` changes calendar field
 `],
			[/* inline code block */ 'i', `f`],
			[/* text */ 't', ` to `],
			[/* inline code block */ 'i', `value`],
			[/* text */ 't', `.  In addition, it sets an
 internal member variable to indicate that calendar field `],
			[/* inline code block */ 'i', `f`],
			[/* text */ 't', ` has
 been changed. Although calendar field `],
			[/* inline code block */ 'i', `f`],
			[/* text */ 't', ` is changed immediately,
 the calendar's time value in milliseconds is not recomputed until the next call to
 `],
			[/* inline code block */ 'i', `get()`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `getTime()`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `getTimeInMillis()`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `add()`],
			[/* text */ 't', `, or `],
			[/* inline code block */ 'i', `roll()`],
			[/* text */ 't', ` is made. Thus, multiple calls to
 `],
			[/* inline code block */ 'i', `set()`],
			[/* text */ 't', ` do not trigger multiple, unnecessary
 computations. As a result of changing a calendar field using
 `],
			[/* inline code block */ 'i', `set()`],
			[/* text */ 't', `, other calendar fields may also change, depending on the
 calendar field, the calendar field value, and the calendar system. In addition,
 `],
			[/* inline code block */ 'i', `get(f)`],
			[/* text */ 't', ` will not necessarily return `],
			[/* inline code block */ 'i', `value`],
			[/* text */ 't', ` set by
 the call to the `],
			[/* inline code block */ 'i', `set`],
			[/* text */ 't', ` method
 after the calendar fields have been recomputed. The specifics are determined by
 the concrete calendar class.`]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Example`],
			[/* text */ 't', `: Consider a `],
			[/* inline code block */ 'i', `GregorianCalendar`],
			[/* text */ 't', `
 originally set to August 31, 1999. Calling `],
			[/* inline code block */ 'i', `set(Calendar.MONTH, Calendar.SEPTEMBER)`],
			[/* text */ 't', ` sets the date to September 31,
 1999. This is a temporary internal representation that resolves to
 October 1, 1999 if `],
			[/* inline code block */ 'i', `getTime()`],
			[/* text */ 't', ` is then called. However, a
 call to `],
			[/* inline code block */ 'i', `set(Calendar.DAY_OF_MONTH, 30)`],
			[/* text */ 't', ` before the call to
 `],
			[/* inline code block */ 'i', `getTime()`],
			[/* text */ 't', ` sets the date to September 30, 1999, since
 no recomputation occurs after `],
			[/* inline code block */ 'i', `set()`],
			[/* text */ 't', ` itself.`]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `add(f, delta)`],
			[/* text */ 't', ` adds `],
			[/* inline code block */ 'i', `delta`],
			[/* text */ 't', `
 to field `],
			[/* inline code block */ 'i', `f`],
			[/* text */ 't', `.  This is equivalent to calling `],
			[/* inline code block */ 'i', `set(f, get(f) + delta)`],
			[/* text */ 't', ` with two adjustments:`]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `
   `],
			[/* block */ 'b', [
				[/* text */ 't', `Add rule 1`],
				[/* text */ 't', `. The value of field `],
				[/* inline code block */ 'i', `f`],
				[/* text */ 't', `
   after the call minus the value of field `],
				[/* inline code block */ 'i', `f`],
				[/* text */ 't', ` before the
   call is `],
				[/* inline code block */ 'i', `delta`],
				[/* text */ 't', `, modulo any overflow that has occurred in
   field `],
				[/* inline code block */ 'i', `f`],
				[/* text */ 't', `. Overflow occurs when a field value exceeds its
   range and, as a result, the next larger field is incremented or
   decremented and the field value is adjusted back into its range.`]
			]],
			[/* text */ 't', `

   `],
			[/* block */ 'b', [
				[/* text */ 't', `Add rule 2`],
				[/* text */ 't', `. If a smaller field is expected to be
   invariant, but it is impossible for it to be equal to its
   prior value because of changes in its minimum or maximum after field
   `],
				[/* inline code block */ 'i', `f`],
				[/* text */ 't', ` is changed or other constraints, such as time zone
   offset changes, then its value is adjusted to be as close
   as possible to its expected value. A smaller field represents a
   smaller unit of time. `],
				[/* inline code block */ 'i', `HOUR`],
				[/* text */ 't', ` is a smaller field than
   `],
				[/* inline code block */ 'i', `DAY_OF_MONTH`],
				[/* text */ 't', `. No adjustment is made to smaller fields
   that are not expected to be invariant. The calendar system
   determines what fields are expected to be invariant.`]
			]],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `In addition, unlike `],
			[/* inline code block */ 'i', `set()`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `add()`],
			[/* text */ 't', ` forces
 an immediate recomputation of the calendar's milliseconds and all
 fields.`]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Example`],
			[/* text */ 't', `: Consider a `],
			[/* inline code block */ 'i', `GregorianCalendar`],
			[/* text */ 't', `
 originally set to August 31, 1999. Calling `],
			[/* inline code block */ 'i', `add(Calendar.MONTH, 13)`],
			[/* text */ 't', ` sets the calendar to September 30, 2000. `],
			[/* text */ 't', `Add rule
 1`],
			[/* text */ 't', ` sets the `],
			[/* inline code block */ 'i', `MONTH`],
			[/* text */ 't', ` field to September, since
 adding 13 months to August gives September of the next year. Since
 `],
			[/* inline code block */ 'i', `DAY_OF_MONTH`],
			[/* text */ 't', ` cannot be 31 in September in a
 `],
			[/* inline code block */ 'i', `GregorianCalendar`],
			[/* text */ 't', `, `],
			[/* text */ 't', `add rule 2`],
			[/* text */ 't', ` sets the
 `],
			[/* inline code block */ 'i', `DAY_OF_MONTH`],
			[/* text */ 't', ` to 30, the closest possible value. Although
 it is a smaller field, `],
			[/* inline code block */ 'i', `DAY_OF_WEEK`],
			[/* text */ 't', ` is not adjusted by
 rule 2, since it is expected to change when the month changes in a
 `],
			[/* inline code block */ 'i', `GregorianCalendar`],
			[/* text */ 't', `.`]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `roll(f, delta)`],
			[/* text */ 't', ` adds
 `],
			[/* inline code block */ 'i', `delta`],
			[/* text */ 't', ` to field `],
			[/* inline code block */ 'i', `f`],
			[/* text */ 't', ` without changing larger
 fields. This is equivalent to calling `],
			[/* inline code block */ 'i', `add(f, delta)`],
			[/* text */ 't', ` with
 the following adjustment:`]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `
   `],
			[/* block */ 'b', [
				[/* text */ 't', `Roll rule`],
				[/* text */ 't', `. Larger fields are unchanged after the
   call. A larger field represents a larger unit of
   time. `],
				[/* inline code block */ 'i', `DAY_OF_MONTH`],
				[/* text */ 't', ` is a larger field than
   `],
				[/* inline code block */ 'i', `HOUR`],
				[/* text */ 't', `.`]
			]],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Example`],
			[/* text */ 't', `: See `],
			[/* reference */ 'r', `java.util.GregorianCalendar#roll(int,int)`, `GregorianCalendar.roll(int, int)`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Usage model`],
			[/* text */ 't', `. To motivate the behavior of
 `],
			[/* inline code block */ 'i', `add()`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `roll()`],
			[/* text */ 't', `, consider a user interface
 component with increment and decrement buttons for the month, day, and
 year, and an underlying `],
			[/* inline code block */ 'i', `GregorianCalendar`],
			[/* text */ 't', `. If the
 interface reads January 31, 1999 and the user presses the month
 increment button, what should it read? If the underlying
 implementation uses `],
			[/* inline code block */ 'i', `set()`],
			[/* text */ 't', `, it might read March 3, 1999. A
 better result would be February 28, 1999. Furthermore, if the user
 presses the month increment button again, it should read March 31,
 1999, not March 28, 1999. By saving the original date and using either
 `],
			[/* inline code block */ 'i', `add()`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `roll()`],
			[/* text */ 't', `, depending on whether larger
 fields should be affected, the user interface can behave as most users
 will intuitively expect.`]
		]]
	],
	[/* fields */
		[/* field */ 'ALL_STYLES', [
			[/* field description */
				[/* text */ 't', `A style specifier for `],
				[/* reference */ 'r', `#getDisplayNames(int,int,java.util.Locale)`, `getDisplayNames`],
				[/* text */ 't', ` indicating names in all styles, such as
 "January" and "Jan".`]
			],
		]],
		[/* field */ 'AM', [
			[/* field description */
				[/* text */ 't', `Value of the `],
				[/* text */ 't', `AM_PM`],
				[/* text */ 't', ` field indicating the
 period of the day from midnight to just before noon.`]
			],
		]],
		[/* field */ 'AM_PM', [
			[/* field description */
				[/* text */ 't', `Field number for `],
				[/* inline code block */ 'i', `get`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `set`],
				[/* text */ 't', ` indicating
 whether the `],
				[/* inline code block */ 'i', `HOUR`],
				[/* text */ 't', ` is before or after noon.
 E.g., at 10:04:15.250 PM the `],
				[/* inline code block */ 'i', `AM_PM`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `PM`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'APRIL', [
			[/* field description */
				[/* text */ 't', `Value of the `],
				[/* text */ 't', `MONTH`],
				[/* text */ 't', ` field indicating the
 fourth month of the year in the Gregorian and Julian calendars.`]
			],
		]],
		[/* field */ 'areFieldsSet', [
			[/* field description */
				[/* text */ 't', `True if `],
				[/* inline code block */ 'i', `fields[]`],
				[/* text */ 't', ` are in sync with the currently set time.
 If false, then the next attempt to get the value of a field will
 force a recomputation of all fields from the current value of
 `],
				[/* inline code block */ 'i', `time`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'AUGUST', [
			[/* field description */
				[/* text */ 't', `Value of the `],
				[/* text */ 't', `MONTH`],
				[/* text */ 't', ` field indicating the
 eighth month of the year in the Gregorian and Julian calendars.`]
			],
		]],
		[/* field */ 'DATE', [
			[/* field description */
				[/* text */ 't', `Field number for `],
				[/* inline code block */ 'i', `get`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `set`],
				[/* text */ 't', ` indicating the
 day of the month. This is a synonym for `],
				[/* inline code block */ 'i', `DAY_OF_MONTH`],
				[/* text */ 't', `.
 The first day of the month has value 1.`]
			],
		]],
		[/* field */ 'DAY_OF_MONTH', [
			[/* field description */
				[/* text */ 't', `Field number for `],
				[/* inline code block */ 'i', `get`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `set`],
				[/* text */ 't', ` indicating the
 day of the month. This is a synonym for `],
				[/* inline code block */ 'i', `DATE`],
				[/* text */ 't', `.
 The first day of the month has value 1.`]
			],
		]],
		[/* field */ 'DAY_OF_WEEK', [
			[/* field description */
				[/* text */ 't', `Field number for `],
				[/* inline code block */ 'i', `get`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `set`],
				[/* text */ 't', ` indicating the day
 of the week.  This field takes values `],
				[/* inline code block */ 'i', `SUNDAY`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `MONDAY`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `TUESDAY`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `WEDNESDAY`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `THURSDAY`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `FRIDAY`],
				[/* text */ 't', `, and `],
				[/* inline code block */ 'i', `SATURDAY`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'DAY_OF_WEEK_IN_MONTH', [
			[/* field description */
				[/* text */ 't', `Field number for `],
				[/* inline code block */ 'i', `get`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `set`],
				[/* text */ 't', ` indicating the
 ordinal number of the day of the week within the current month. Together
 with the `],
				[/* inline code block */ 'i', `DAY_OF_WEEK`],
				[/* text */ 't', ` field, this uniquely specifies a day
 within a month.  Unlike `],
				[/* inline code block */ 'i', `WEEK_OF_MONTH`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `WEEK_OF_YEAR`],
				[/* text */ 't', `, this field's value does `],
				[/* text */ 't', `not`],
				[/* text */ 't', ` depend on
 `],
				[/* inline code block */ 'i', `getFirstDayOfWeek()`],
				[/* text */ 't', ` or
 `],
				[/* inline code block */ 'i', `getMinimalDaysInFirstWeek()`],
				[/* text */ 't', `.  `],
				[/* inline code block */ 'i', `DAY_OF_MONTH 1`],
				[/* text */ 't', `
 through `],
				[/* inline code block */ 'i', `7`],
				[/* text */ 't', ` always correspond to `],
				[/* inline code block */ 'i', `DAY_OF_WEEK_IN_MONTH 1`],
				[/* text */ 't', `; `],
				[/* inline code block */ 'i', `8`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `14`],
				[/* text */ 't', ` correspond to
 `],
				[/* inline code block */ 'i', `DAY_OF_WEEK_IN_MONTH 2`],
				[/* text */ 't', `, and so on.
 `],
				[/* inline code block */ 'i', `DAY_OF_WEEK_IN_MONTH 0`],
				[/* text */ 't', ` indicates the week before
 `],
				[/* inline code block */ 'i', `DAY_OF_WEEK_IN_MONTH 1`],
				[/* text */ 't', `.  Negative values count back from the
 end of the month, so the last Sunday of a month is specified as
 `],
				[/* inline code block */ 'i', `DAY_OF_WEEK = SUNDAY, DAY_OF_WEEK_IN_MONTH = -1`],
				[/* text */ 't', `.  Because
 negative values count backward they will usually be aligned differently
 within the month than positive values.  For example, if a month has 31
 days, `],
				[/* inline code block */ 'i', `DAY_OF_WEEK_IN_MONTH -1`],
				[/* text */ 't', ` will overlap
 `],
				[/* inline code block */ 'i', `DAY_OF_WEEK_IN_MONTH 5`],
				[/* text */ 't', ` and the end of `],
				[/* inline code block */ 'i', `4`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'DAY_OF_YEAR', [
			[/* field description */
				[/* text */ 't', `Field number for `],
				[/* inline code block */ 'i', `get`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `set`],
				[/* text */ 't', ` indicating the day
 number within the current year.  The first day of the year has value 1.`]
			],
		]],
		[/* field */ 'DECEMBER', [
			[/* field description */
				[/* text */ 't', `Value of the `],
				[/* text */ 't', `MONTH`],
				[/* text */ 't', ` field indicating the
 twelfth month of the year in the Gregorian and Julian calendars.`]
			],
		]],
		[/* field */ 'DST_OFFSET', [
			[/* field description */
				[/* text */ 't', `Field number for `],
				[/* inline code block */ 'i', `get`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `set`],
				[/* text */ 't', ` indicating the
 daylight saving offset in milliseconds.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This field reflects the correct daylight saving offset value of
 the time zone of this `],
					[/* inline code block */ 'i', `Calendar`],
					[/* text */ 't', ` if the
 `],
					[/* inline code block */ 'i', `TimeZone`],
					[/* text */ 't', ` implementation subclass supports
 historical Daylight Saving Time schedule changes.`]
				]]
			],
		]],
		[/* field */ 'ERA', [
			[/* field description */
				[/* text */ 't', `Field number for `],
				[/* inline code block */ 'i', `get`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `set`],
				[/* text */ 't', ` indicating the
 era, e.g., AD or BC in the Julian calendar. This is a calendar-specific
 value; see subclass documentation.`]
			],
		]],
		[/* field */ 'FEBRUARY', [
			[/* field description */
				[/* text */ 't', `Value of the `],
				[/* text */ 't', `MONTH`],
				[/* text */ 't', ` field indicating the
 second month of the year in the Gregorian and Julian calendars.`]
			],
		]],
		[/* field */ 'FIELD_COUNT', [
			[/* field description */
				[/* text */ 't', `The number of distinct fields recognized by `],
				[/* inline code block */ 'i', `get`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `set`],
				[/* text */ 't', `.
 Field numbers range from `],
				[/* inline code block */ 'i', `0..FIELD_COUNT-1`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'fields', [
			[/* field description */
				[/* text */ 't', `The calendar field values for the currently set time for this calendar.
 This is an array of `],
				[/* inline code block */ 'i', `FIELD_COUNT`],
				[/* text */ 't', ` integers, with index values
 `],
				[/* inline code block */ 'i', `ERA`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `DST_OFFSET`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'FRIDAY', [
			[/* field description */
				[/* text */ 't', `Value of the `],
				[/* text */ 't', `DAY_OF_WEEK`],
				[/* text */ 't', ` field indicating
 Friday.`]
			],
		]],
		[/* field */ 'HOUR', [
			[/* field description */
				[/* text */ 't', `Field number for `],
				[/* inline code block */ 'i', `get`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `set`],
				[/* text */ 't', ` indicating the
 hour of the morning or afternoon. `],
				[/* inline code block */ 'i', `HOUR`],
				[/* text */ 't', ` is used for the
 12-hour clock (0 - 11). Noon and midnight are represented by 0, not by 12.
 E.g., at 10:04:15.250 PM the `],
				[/* inline code block */ 'i', `HOUR`],
				[/* text */ 't', ` is 10.`]
			],
		]],
		[/* field */ 'HOUR_OF_DAY', [
			[/* field description */
				[/* text */ 't', `Field number for `],
				[/* inline code block */ 'i', `get`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `set`],
				[/* text */ 't', ` indicating the
 hour of the day. `],
				[/* inline code block */ 'i', `HOUR_OF_DAY`],
				[/* text */ 't', ` is used for the 24-hour clock.
 E.g., at 10:04:15.250 PM the `],
				[/* inline code block */ 'i', `HOUR_OF_DAY`],
				[/* text */ 't', ` is 22.`]
			],
		]],
		[/* field */ 'isSet', [
			[/* field description */
				[/* text */ 't', `The flags which tell if a specified calendar field for the calendar is set.
 A new object has no fields set.  After the first call to a method
 which generates the fields, they all remain set after that.
 This is an array of `],
				[/* inline code block */ 'i', `FIELD_COUNT`],
				[/* text */ 't', ` booleans, with index values
 `],
				[/* inline code block */ 'i', `ERA`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `DST_OFFSET`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'isTimeSet', [
			[/* field description */
				[/* text */ 't', `True if then the value of `],
				[/* inline code block */ 'i', `time`],
				[/* text */ 't', ` is valid.
 The time is made invalid by a change to an item of `],
				[/* inline code block */ 'i', `field[]`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'JANUARY', [
			[/* field description */
				[/* text */ 't', `Value of the `],
				[/* text */ 't', `MONTH`],
				[/* text */ 't', ` field indicating the
 first month of the year in the Gregorian and Julian calendars.`]
			],
		]],
		[/* field */ 'JULY', [
			[/* field description */
				[/* text */ 't', `Value of the `],
				[/* text */ 't', `MONTH`],
				[/* text */ 't', ` field indicating the
 seventh month of the year in the Gregorian and Julian calendars.`]
			],
		]],
		[/* field */ 'JUNE', [
			[/* field description */
				[/* text */ 't', `Value of the `],
				[/* text */ 't', `MONTH`],
				[/* text */ 't', ` field indicating the
 sixth month of the year in the Gregorian and Julian calendars.`]
			],
		]],
		[/* field */ 'LONG', [
			[/* field description */
				[/* text */ 't', `A style specifier for `],
				[/* reference */ 'r', `#getDisplayName(int,int,java.util.Locale)`, `getDisplayName`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `#getDisplayNames(int,int,java.util.Locale)`, `getDisplayNames`],
				[/* text */ 't', ` equivalent to `],
				[/* text */ 't', `LONG_FORMAT`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'LONG_FORMAT', [
			[/* field description */
				[/* text */ 't', `A style specifier for `],
				[/* reference */ 'r', `#getDisplayName(int,int,java.util.Locale)`, `getDisplayName`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `#getDisplayNames(int,int,java.util.Locale)`, `getDisplayNames`],
				[/* text */ 't', ` indicating a long name used for format.`]
			],
		]],
		[/* field */ 'LONG_STANDALONE', [
			[/* field description */
				[/* text */ 't', `A style specifier for `],
				[/* reference */ 'r', `#getDisplayName(int,int,java.util.Locale)`, `getDisplayName`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `#getDisplayNames(int,int,java.util.Locale)`, `getDisplayNames`],
				[/* text */ 't', ` indicating a long name used independently,
 such as a month name as calendar headers.`]
			],
		]],
		[/* field */ 'MARCH', [
			[/* field description */
				[/* text */ 't', `Value of the `],
				[/* text */ 't', `MONTH`],
				[/* text */ 't', ` field indicating the
 third month of the year in the Gregorian and Julian calendars.`]
			],
		]],
		[/* field */ 'MAY', [
			[/* field description */
				[/* text */ 't', `Value of the `],
				[/* text */ 't', `MONTH`],
				[/* text */ 't', ` field indicating the
 fifth month of the year in the Gregorian and Julian calendars.`]
			],
		]],
		[/* field */ 'MILLISECOND', [
			[/* field description */
				[/* text */ 't', `Field number for `],
				[/* inline code block */ 'i', `get`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `set`],
				[/* text */ 't', ` indicating the
 millisecond within the second.
 E.g., at 10:04:15.250 PM the `],
				[/* inline code block */ 'i', `MILLISECOND`],
				[/* text */ 't', ` is 250.`]
			],
		]],
		[/* field */ 'MINUTE', [
			[/* field description */
				[/* text */ 't', `Field number for `],
				[/* inline code block */ 'i', `get`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `set`],
				[/* text */ 't', ` indicating the
 minute within the hour.
 E.g., at 10:04:15.250 PM the `],
				[/* inline code block */ 'i', `MINUTE`],
				[/* text */ 't', ` is 4.`]
			],
		]],
		[/* field */ 'MONDAY', [
			[/* field description */
				[/* text */ 't', `Value of the `],
				[/* text */ 't', `DAY_OF_WEEK`],
				[/* text */ 't', ` field indicating
 Monday.`]
			],
		]],
		[/* field */ 'MONTH', [
			[/* field description */
				[/* text */ 't', `Field number for `],
				[/* inline code block */ 'i', `get`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `set`],
				[/* text */ 't', ` indicating the
 month. This is a calendar-specific value. The first month of
 the year in the Gregorian and Julian calendars is
 `],
				[/* inline code block */ 'i', `JANUARY`],
				[/* text */ 't', ` which is 0; the last depends on the number
 of months in a year.`]
			],
		]],
		[/* field */ 'NARROW_FORMAT', [
			[/* field description */
				[/* text */ 't', `A style specifier for `],
				[/* reference */ 'r', `#getDisplayName(int,int,java.util.Locale)`, `getDisplayName`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `#getDisplayNames(int,int,java.util.Locale)`, `getDisplayNames`],
				[/* text */ 't', ` indicating a narrow name used for format. Narrow names
 are typically single character strings, such as "M" for Monday.`]
			],
		]],
		[/* field */ 'NARROW_STANDALONE', [
			[/* field description */
				[/* text */ 't', `A style specifier for `],
				[/* reference */ 'r', `#getDisplayName(int,int,java.util.Locale)`, `getDisplayName`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `#getDisplayNames(int,int,java.util.Locale)`, `getDisplayNames`],
				[/* text */ 't', ` indicating a narrow name independently. Narrow names
 are typically single character strings, such as "M" for Monday.`]
			],
		]],
		[/* field */ 'NOVEMBER', [
			[/* field description */
				[/* text */ 't', `Value of the `],
				[/* text */ 't', `MONTH`],
				[/* text */ 't', ` field indicating the
 eleventh month of the year in the Gregorian and Julian calendars.`]
			],
		]],
		[/* field */ 'OCTOBER', [
			[/* field description */
				[/* text */ 't', `Value of the `],
				[/* text */ 't', `MONTH`],
				[/* text */ 't', ` field indicating the
 tenth month of the year in the Gregorian and Julian calendars.`]
			],
		]],
		[/* field */ 'PM', [
			[/* field description */
				[/* text */ 't', `Value of the `],
				[/* text */ 't', `AM_PM`],
				[/* text */ 't', ` field indicating the
 period of the day from noon to just before midnight.`]
			],
		]],
		[/* field */ 'SATURDAY', [
			[/* field description */
				[/* text */ 't', `Value of the `],
				[/* text */ 't', `DAY_OF_WEEK`],
				[/* text */ 't', ` field indicating
 Saturday.`]
			],
		]],
		[/* field */ 'SECOND', [
			[/* field description */
				[/* text */ 't', `Field number for `],
				[/* inline code block */ 'i', `get`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `set`],
				[/* text */ 't', ` indicating the
 second within the minute.
 E.g., at 10:04:15.250 PM the `],
				[/* inline code block */ 'i', `SECOND`],
				[/* text */ 't', ` is 15.`]
			],
		]],
		[/* field */ 'SEPTEMBER', [
			[/* field description */
				[/* text */ 't', `Value of the `],
				[/* text */ 't', `MONTH`],
				[/* text */ 't', ` field indicating the
 ninth month of the year in the Gregorian and Julian calendars.`]
			],
		]],
		[/* field */ 'SHORT', [
			[/* field description */
				[/* text */ 't', `A style specifier for `],
				[/* reference */ 'r', `#getDisplayName(int,int,java.util.Locale)`, `getDisplayName`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `#getDisplayNames(int,int,java.util.Locale)`, `getDisplayNames`],
				[/* text */ 't', ` equivalent to `],
				[/* text */ 't', `SHORT_FORMAT`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'SHORT_FORMAT', [
			[/* field description */
				[/* text */ 't', `A style specifier for `],
				[/* reference */ 'r', `#getDisplayName(int,int,java.util.Locale)`, `getDisplayName`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `#getDisplayNames(int,int,java.util.Locale)`, `getDisplayNames`],
				[/* text */ 't', ` indicating a short name used for format.`]
			],
		]],
		[/* field */ 'SHORT_STANDALONE', [
			[/* field description */
				[/* text */ 't', `A style specifier for `],
				[/* reference */ 'r', `#getDisplayName(int,int,java.util.Locale)`, `getDisplayName`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `#getDisplayNames(int,int,java.util.Locale)`, `getDisplayNames`],
				[/* text */ 't', ` indicating a short name used independently,
 such as a month abbreviation as calendar headers.`]
			],
		]],
		[/* field */ 'SUNDAY', [
			[/* field description */
				[/* text */ 't', `Value of the `],
				[/* text */ 't', `DAY_OF_WEEK`],
				[/* text */ 't', ` field indicating
 Sunday.`]
			],
		]],
		[/* field */ 'THURSDAY', [
			[/* field description */
				[/* text */ 't', `Value of the `],
				[/* text */ 't', `DAY_OF_WEEK`],
				[/* text */ 't', ` field indicating
 Thursday.`]
			],
		]],
		[/* field */ 'time', [
			[/* field description */
				[/* text */ 't', `The currently set time for this calendar, expressed in milliseconds after
 January 1, 1970, 0:00:00 GMT.`]
			],
		]],
		[/* field */ 'TUESDAY', [
			[/* field description */
				[/* text */ 't', `Value of the `],
				[/* text */ 't', `DAY_OF_WEEK`],
				[/* text */ 't', ` field indicating
 Tuesday.`]
			],
		]],
		[/* field */ 'UNDECIMBER', [
			[/* field description */
				[/* text */ 't', `Value of the `],
				[/* text */ 't', `MONTH`],
				[/* text */ 't', ` field indicating the
 thirteenth month of the year. Although `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', `
 does not use this value, lunar calendars do.`]
			],
		]],
		[/* field */ 'WEDNESDAY', [
			[/* field description */
				[/* text */ 't', `Value of the `],
				[/* text */ 't', `DAY_OF_WEEK`],
				[/* text */ 't', ` field indicating
 Wednesday.`]
			],
		]],
		[/* field */ 'WEEK_OF_MONTH', [
			[/* field description */
				[/* text */ 't', `Field number for `],
				[/* inline code block */ 'i', `get`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `set`],
				[/* text */ 't', ` indicating the
 week number within the current month.  The first week of the month, as
 defined by `],
				[/* inline code block */ 'i', `getFirstDayOfWeek()`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `getMinimalDaysInFirstWeek()`],
				[/* text */ 't', `, has value 1.  Subclasses define
 the value of `],
				[/* inline code block */ 'i', `WEEK_OF_MONTH`],
				[/* text */ 't', ` for days before the first week of
 the month.`]
			],
		]],
		[/* field */ 'WEEK_OF_YEAR', [
			[/* field description */
				[/* text */ 't', `Field number for `],
				[/* inline code block */ 'i', `get`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `set`],
				[/* text */ 't', ` indicating the
 week number within the current year.  The first week of the year, as
 defined by `],
				[/* inline code block */ 'i', `getFirstDayOfWeek()`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `getMinimalDaysInFirstWeek()`],
				[/* text */ 't', `, has value 1.  Subclasses define
 the value of `],
				[/* inline code block */ 'i', `WEEK_OF_YEAR`],
				[/* text */ 't', ` for days before the first week of
 the year.`]
			],
		]],
		[/* field */ 'YEAR', [
			[/* field description */
				[/* text */ 't', `Field number for `],
				[/* inline code block */ 'i', `get`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `set`],
				[/* text */ 't', ` indicating the
 year. This is a calendar-specific value; see subclass documentation.`]
			],
		]],
		[/* field */ 'ZONE_OFFSET', [
			[/* field description */
				[/* text */ 't', `Field number for `],
				[/* inline code block */ 'i', `get`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `set`],
				[/* text */ 't', `
 indicating the raw offset from GMT in milliseconds.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This field reflects the correct GMT offset value of the time
 zone of this `],
					[/* inline code block */ 'i', `Calendar`],
					[/* text */ 't', ` if the
 `],
					[/* inline code block */ 'i', `TimeZone`],
					[/* text */ 't', ` implementation subclass supports
 historical GMT offset changes.`]
				]]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a Calendar with the default time zone
 and the default `],
				[/* reference */ 'r', `java.util.Locale.Category#FORMAT`, `FORMAT`],
				[/* text */ 't', `
 locale.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.util.TimeZone,java.util.Locale)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a calendar with the specified time zone and locale.`]
			],
			[/* parameters */
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the time zone to use`]
				]],
				[/* parameter */ 'aLocale', [/* parameter description */
					[/* text */ 't', `the locale for the week data`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'computeFields()', [
			[/* method description */
				[/* text */ 't', `Converts the current millisecond time value `],
				[/* text */ 't', `time`],
				[/* text */ 't', `
 to calendar field values in `],
				[/* text */ 't', `fields[]`],
				[/* text */ 't', `.
 This allows you to sync up the calendar field values with
 a new time that is set for the calendar.  The time is `],
				[/* text */ 't', `not`],
				[/* text */ 't', `
 recomputed first; to recompute the time, then the fields, call the
 `],
				[/* reference */ 'r', `#complete()`, `complete()`],
				[/* text */ 't', ` method.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'computeTime()', [
			[/* method description */
				[/* text */ 't', `Converts the current calendar field values in `],
				[/* text */ 't', `fields[]`],
				[/* text */ 't', `
 to the millisecond time value
 `],
				[/* text */ 't', `time`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'internalGet(int)', [
			[/* method description */
				[/* text */ 't', `Returns the value of the given calendar field. This method does
 not involve normalization or validation of the field value.`]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the given calendar field.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value for the given calendar field.`]
			]
		]],
		[/* method */ 'complete()', [
			[/* method description */
				[/* text */ 't', `Fills in any unset fields in the calendar fields. First, the `],
				[/* reference */ 'r', `#computeTime()`, `computeTime()`],
				[/* text */ 't', ` method is called if the time value (millisecond offset
 from the `],
				[/* text */ 't', `Epoch`],
				[/* text */ 't', `) has not been calculated from
 calendar field values. Then, the `],
				[/* reference */ 'r', `#computeFields()`, `computeFields()`],
				[/* text */ 't', ` method is
 called to calculate all calendar field values.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'getGreatestMinimum(int)', [
			[/* method description */
				[/* text */ 't', `Returns the highest minimum value for the given calendar field
 of this `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` instance. The highest minimum
 value is defined as the largest value returned by `],
				[/* reference */ 'r', `#getActualMinimum(int)`, `getActualMinimum(int)`],
				[/* text */ 't', ` for any possible time value. The
 greatest minimum value depends on calendar system specific
 parameters of the instance.`]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the calendar field.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the highest minimum value for the given calendar field.`]
			]
		]],
		[/* method */ 'getLeastMaximum(int)', [
			[/* method description */
				[/* text */ 't', `Returns the lowest maximum value for the given calendar field
 of this `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` instance. The lowest maximum
 value is defined as the smallest value returned by `],
				[/* reference */ 'r', `#getActualMaximum(int)`, `getActualMaximum(int)`],
				[/* text */ 't', ` for any possible time value. The least
 maximum value depends on calendar system specific parameters of
 the instance. For example, a `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` for the
 Gregorian calendar system returns 28 for the
 `],
				[/* inline code block */ 'i', `DAY_OF_MONTH`],
				[/* text */ 't', ` field, because the 28th is the last
 day of the shortest month of this calendar, February in a
 common year.`]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the calendar field.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the lowest maximum value for the given calendar field.`]
			]
		]],
		[/* method */ 'getMaximum(int)', [
			[/* method description */
				[/* text */ 't', `Returns the maximum value for the given calendar field of this
 `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` instance. The maximum value is defined as
 the largest value returned by the `],
				[/* reference */ 'r', `#get(int)`, `get`],
				[/* text */ 't', ` method
 for any possible time value. The maximum value depends on
 calendar system specific parameters of the instance.`]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the calendar field.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the maximum value for the given calendar field.`]
			]
		]],
		[/* method */ 'getMinimum(int)', [
			[/* method description */
				[/* text */ 't', `Returns the minimum value for the given calendar field of this
 `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` instance. The minimum value is defined as
 the smallest value returned by the `],
				[/* reference */ 'r', `#get(int)`, `get`],
				[/* text */ 't', ` method
 for any possible time value.  The minimum value depends on
 calendar system specific parameters of the instance.`]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the calendar field.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the minimum value for the given calendar field.`]
			]
		]],
		[/* method */ 'add(int,int)', [
			[/* method description */
				[/* text */ 't', `Adds or subtracts the specified amount of time to the given calendar field,
 based on the calendar's rules. For example, to subtract 5 days from
 the current time of the calendar, you can achieve it by calling:
 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `add(Calendar.DAY_OF_MONTH, -5)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the calendar field.`]
				]],
				[/* parameter */ 'amount', [/* parameter description */
					[/* text */ 't', `the amount of date or time to be added to the field.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'roll(int,boolean)', [
			[/* method description */
				[/* text */ 't', `Adds or subtracts (up/down) a single unit of time on the given time
 field without changing larger fields. For example, to roll the current
 date up by one day, you can achieve it by calling:
 `],
				[/* block */ 'b', [
					[/* text */ 't', `roll(Calendar.DATE, true).
 When rolling on the year or Calendar.YEAR field, it will roll the year
 value in the range between 1 and the value returned by calling
 `],
					[/* inline code block */ 'i', `getMaximum(Calendar.YEAR)`],
					[/* text */ 't', `.
 When rolling on the month or Calendar.MONTH field, other fields like
 date might conflict and, need to be changed. For instance,
 rolling the month on the date 01/31/96 will result in 02/29/96.
 When rolling on the hour-in-day or Calendar.HOUR_OF_DAY field, it will
 roll the hour value in the range between 0 and 23, which is zero-based.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the time field.`]
				]],
				[/* parameter */ 'up', [/* parameter description */
					[/* text */ 't', `indicates if the value of the specified time field is to be
 rolled up or rolled down. Use true if rolling up, false otherwise.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'after(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns whether this `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` represents a time
 after the time represented by the specified
 `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `. This method is equivalent to:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `compareTo(when) > 0`]
				]],
				[/* text */ 't', `
 if and only if `],
				[/* inline code block */ 'i', `when`],
				[/* text */ 't', ` is a `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', `
 instance. Otherwise, the method returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'when', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', ` to be compared`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the time of this `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` is
 after the time represented by `],
				[/* inline code block */ 'i', `when`],
				[/* text */ 't', `; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `
 otherwise.`]
			]
		]],
		[/* method */ 'before(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns whether this `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` represents a time
 before the time represented by the specified
 `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `. This method is equivalent to:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `compareTo(when) < 0`]
				]],
				[/* text */ 't', `
 if and only if `],
				[/* inline code block */ 'i', `when`],
				[/* text */ 't', ` is a `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', `
 instance. Otherwise, the method returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'when', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', ` to be compared`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the time of this
 `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` is before the time represented by
 `],
				[/* inline code block */ 'i', `when`],
				[/* text */ 't', `; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares this `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` to the specified
 `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.  The result is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if
 the argument is a `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` object of the same calendar
 system that represents the same time value (millisecond offset from the
 `],
				[/* text */ 't', `Epoch`],
				[/* text */ 't', `) under the same
 `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` parameters as this object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `Calendar`],
					[/* text */ 't', ` parameters are the values represented
 by the `],
					[/* inline code block */ 'i', `isLenient`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `getFirstDayOfWeek`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `getMinimalDaysInFirstWeek`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `getTimeZone`],
					[/* text */ 't', `
 methods. If there is any difference in those parameters
 between the two `],
					[/* inline code block */ 'i', `Calendar`],
					[/* text */ 't', `s, this method returns
 `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Use the `],
					[/* reference */ 'r', `#compareTo(java.util.Calendar)`, `compareTo`],
					[/* text */ 't', ` method to
 compare only the time values.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to compare with.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this object is equal to `],
				[/* inline code block */ 'i', `obj`],
				[/* text */ 't', `;
 `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isLenient()', [
			[/* method description */
				[/* text */ 't', `Tells whether date/time interpretation is to be lenient.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the interpretation mode of this calendar is lenient;
 `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isWeekDateSupported()', [
			[/* method description */
				[/* text */ 't', `Returns whether this `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` supports week dates.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The default implementation of this method returns `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` supports week dates;
         `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isSet(int)', [
			[/* method description */
				[/* text */ 't', `Determines if the given calendar field has a value set,
 including cases that the value has been set by internal fields
 calculations triggered by a `],
				[/* inline code block */ 'i', `get`],
				[/* text */ 't', ` method call.`]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the calendar field to test`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the given calendar field has a value set;
 `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'toInstant()', [
			[/* method description */
				[/* text */ 't', `Converts this object to an `],
				[/* reference */ 'r', `java.time.Instant`, `Instant`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The conversion creates an `],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', ` that represents the
 same point on the time-line as this `],
					[/* inline code block */ 'i', `Calendar`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the instant representing the same point on the time-line`]
			]
		]],
		[/* method */ 'getTime()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` object representing this
 `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', `'s time value (millisecond offset from the `],
				[/* text */ 't', `Epoch`],
				[/* text */ 't', `").`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` representing the time value.`]
			]
		]],
		[/* method */ 'clear()', [
			[/* method description */
				[/* text */ 't', `Sets all the calendar field values and the time value
 (millisecond offset from the `],
				[/* text */ 't', `Epoch`],
				[/* text */ 't', `) of
 this `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` undefined. This means that `],
				[/* reference */ 'r', `#isSet(int)`, `isSet()`],
				[/* text */ 't', ` will return `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` for all the
 calendar fields, and the date and time calculations will treat
 the fields as if they had never been set. A
 `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` implementation class may use its specific
 default field values for date/time calculations. For example,
 `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', ` uses 1970 if the
 `],
				[/* inline code block */ 'i', `YEAR`],
				[/* text */ 't', ` field value is undefined.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'clear(int)', [
			[/* method description */
				[/* text */ 't', `Sets the given calendar field value and the time value
 (millisecond offset from the `],
				[/* text */ 't', `Epoch`],
				[/* text */ 't', `) of
 this `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` undefined. This means that `],
				[/* reference */ 'r', `#isSet(int)`, `isSet(field)`],
				[/* text */ 't', ` will return `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `, and
 the date and time calculations will treat the field as if it
 had never been set. A `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` implementation
 class may use the field's specific default value for date and
 time calculations.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* text */ 't', `HOUR_OF_DAY`],
					[/* text */ 't', `, `],
					[/* text */ 't', `HOUR`],
					[/* text */ 't', ` and `],
					[/* text */ 't', `AM_PM`],
					[/* text */ 't', `
 fields are handled independently and the `],
					[/* text */ 't', `the resolution rule for the time of day`],
					[/* text */ 't', ` is applied. Clearing one of the fields doesn't reset
 the hour of day value of this `],
					[/* inline code block */ 'i', `Calendar`],
					[/* text */ 't', `. Use `],
					[/* reference */ 'r', `#set(int,int)`, `set(Calendar.HOUR_OF_DAY, 0)`],
					[/* text */ 't', ` to reset the hour
 value.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the calendar field to be cleared.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'set(int,int,int)', [
			[/* method description */
				[/* text */ 't', `Sets the values for the calendar fields `],
				[/* inline code block */ 'i', `YEAR`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `MONTH`],
				[/* text */ 't', `, and `],
				[/* inline code block */ 'i', `DAY_OF_MONTH`],
				[/* text */ 't', `.
 Previous values of other calendar fields are retained.  If this is not desired,
 call `],
				[/* reference */ 'r', `#clear()`, `clear()`],
				[/* text */ 't', ` first.`]
			],
			[/* parameters */
				[/* parameter */ 'year', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `YEAR`],
					[/* text */ 't', ` calendar field.`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `MONTH`],
					[/* text */ 't', ` calendar field.
 Month value is 0-based. e.g., 0 for January.`]
				]],
				[/* parameter */ 'date', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `DAY_OF_MONTH`],
					[/* text */ 't', ` calendar field.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'set(int,int,int,int,int)', [
			[/* method description */
				[/* text */ 't', `Sets the values for the calendar fields `],
				[/* inline code block */ 'i', `YEAR`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `MONTH`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `DAY_OF_MONTH`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `HOUR_OF_DAY`],
				[/* text */ 't', `, and `],
				[/* inline code block */ 'i', `MINUTE`],
				[/* text */ 't', `.
 Previous values of other fields are retained.  If this is not desired,
 call `],
				[/* reference */ 'r', `#clear()`, `clear()`],
				[/* text */ 't', ` first.`]
			],
			[/* parameters */
				[/* parameter */ 'year', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `YEAR`],
					[/* text */ 't', ` calendar field.`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `MONTH`],
					[/* text */ 't', ` calendar field.
 Month value is 0-based. e.g., 0 for January.`]
				]],
				[/* parameter */ 'date', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `DAY_OF_MONTH`],
					[/* text */ 't', ` calendar field.`]
				]],
				[/* parameter */ 'hourOfDay', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `HOUR_OF_DAY`],
					[/* text */ 't', ` calendar field.`]
				]],
				[/* parameter */ 'minute', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `MINUTE`],
					[/* text */ 't', ` calendar field.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'set(int,int,int,int,int,int)', [
			[/* method description */
				[/* text */ 't', `Sets the values for the fields `],
				[/* inline code block */ 'i', `YEAR`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `MONTH`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `DAY_OF_MONTH`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `HOUR_OF_DAY`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `MINUTE`],
				[/* text */ 't', `, and
 `],
				[/* inline code block */ 'i', `SECOND`],
				[/* text */ 't', `.
 Previous values of other fields are retained.  If this is not desired,
 call `],
				[/* reference */ 'r', `#clear()`, `clear()`],
				[/* text */ 't', ` first.`]
			],
			[/* parameters */
				[/* parameter */ 'year', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `YEAR`],
					[/* text */ 't', ` calendar field.`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `MONTH`],
					[/* text */ 't', ` calendar field.
 Month value is 0-based. e.g., 0 for January.`]
				]],
				[/* parameter */ 'date', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `DAY_OF_MONTH`],
					[/* text */ 't', ` calendar field.`]
				]],
				[/* parameter */ 'hourOfDay', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `HOUR_OF_DAY`],
					[/* text */ 't', ` calendar field.`]
				]],
				[/* parameter */ 'minute', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `MINUTE`],
					[/* text */ 't', ` calendar field.`]
				]],
				[/* parameter */ 'second', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `SECOND`],
					[/* text */ 't', ` calendar field.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setTime(java.util.Date)', [
			[/* method description */
				[/* text */ 't', `Sets this Calendar's time with the given `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note: Calling `],
					[/* inline code block */ 'i', `setTime()`],
					[/* text */ 't', ` with
 `],
					[/* inline code block */ 'i', `Date(Long.MAX_VALUE)`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `Date(Long.MIN_VALUE)`],
					[/* text */ 't', `
 may yield incorrect field values from `],
					[/* inline code block */ 'i', `get()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'date', [/* parameter description */
					[/* text */ 't', `the given Date.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `date`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'compareTo(java.util.Calendar)', [
			[/* method description */
				[/* text */ 't', `Compares the time values (millisecond offsets from the `],
				[/* text */ 't', `Epoch`],
				[/* text */ 't', `) represented by two
 `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` objects.`]
			],
			[/* parameters */
				[/* parameter */ 'anotherCalendar', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Calendar`],
					[/* text */ 't', ` to be compared.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified `],
					[/* inline code block */ 'i', `Calendar`],
					[/* text */ 't', ` is
            `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the time value of the
 specified `],
					[/* inline code block */ 'i', `Calendar`],
					[/* text */ 't', ` object can't be obtained due to
 any invalid calendar values.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the time represented by the argument
 is equal to the time represented by this `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', `; a value
 less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the time of this `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` is
 before the time represented by the argument; and a value greater than
 `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the time of this `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` is after the
 time represented by the argument.`]
			]
		]],
		[/* method */ 'get(int)', [
			[/* method description */
				[/* text */ 't', `Returns the value of the given calendar field. In lenient mode,
 all calendar fields are normalized. In non-lenient mode, all
 calendar fields are validated and this method throws an
 exception if any calendar fields have out-of-range values. The
 normalization and validation are handled by the
 `],
				[/* reference */ 'r', `#complete()`, `complete()`],
				[/* text */ 't', ` method, which process is calendar
 system dependent.`]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the given calendar field.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the specified field is out of range
             (`],
					[/* inline code block */ 'i', `field < 0 || field >= FIELD_COUNT`],
					[/* text */ 't', `).`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value for the given calendar field.`]
			]
		]],
		[/* method */ 'getActualMaximum(int)', [
			[/* method description */
				[/* text */ 't', `Returns the maximum value that the specified calendar field
 could have, given the time value of this
 `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', `. For example, the actual maximum value of
 the `],
				[/* inline code block */ 'i', `MONTH`],
				[/* text */ 't', ` field is 12 in some years, and 13 in
 other years in the Hebrew calendar system.

 `],
				[/* block */ 'b', `The default implementation of this method uses an iterative
 algorithm to determine the actual maximum value for the
 calendar field. Subclasses should, if possible, override this
 with a more efficient implementation.`]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the calendar field`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the maximum of the given calendar field for the time
 value of this `],
				[/* inline code block */ 'i', `Calendar`]
			]
		]],
		[/* method */ 'getActualMinimum(int)', [
			[/* method description */
				[/* text */ 't', `Returns the minimum value that the specified calendar field
 could have, given the time value of this `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The default implementation of this method uses an iterative
 algorithm to determine the actual minimum value for the
 calendar field. Subclasses should, if possible, override this
 with a more efficient implementation - in many cases, they can
 simply return `],
					[/* inline code block */ 'i', `getMinimum()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the calendar field`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the minimum of the given calendar field for the time
 value of this `],
				[/* inline code block */ 'i', `Calendar`]
			]
		]],
		[/* method */ 'getFirstDayOfWeek()', [
			[/* method description */
				[/* text */ 't', `Gets what the first day of the week is; e.g., `],
				[/* inline code block */ 'i', `SUNDAY`],
				[/* text */ 't', ` in the U.S.,
 `],
				[/* inline code block */ 'i', `MONDAY`],
				[/* text */ 't', ` in France.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the first day of the week.`]
			]
		]],
		[/* method */ 'getMinimalDaysInFirstWeek()', [
			[/* method description */
				[/* text */ 't', `Gets what the minimal days required in the first week of the year are;
 e.g., if the first week is defined as one that contains the first day
 of the first month of a year, this method returns 1. If
 the minimal days required must be a full week, this method
 returns 7.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the minimal days required in the first week of the year.`]
			]
		]],
		[/* method */ 'getWeeksInWeekYear()', [
			[/* method description */
				[/* text */ 't', `Returns the number of weeks in the week year represented by this
 `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The default implementation of this method throws an
 `],
					[/* inline code block */ 'i', `UnsupportedOperationException`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if any week year numbering isn't supported in this
            `],
					[/* inline code block */ 'i', `Calendar`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of weeks in the week year.`]
			]
		]],
		[/* method */ 'getWeekYear()', [
			[/* method description */
				[/* text */ 't', `Returns the week year represented by this `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', `. The
 week year is in sync with the week cycle. The `],
				[/* reference */ 'r', `#getFirstDayOfWeek()`, `first day of the first week`],
				[/* text */ 't', ` is the first
 day of the week year.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The default implementation of this method throws an
 `],
					[/* reference */ 'r', `java.lang.UnsupportedOperationException`, `UnsupportedOperationException`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if any week year numbering isn't supported
            in this `],
					[/* inline code block */ 'i', `Calendar`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the week year of this `],
				[/* inline code block */ 'i', `Calendar`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hash code for this calendar.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Creates and returns a copy of this object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a copy of this object.`]
			]
		]],
		[/* method */ 'getCalendarType()', [
			[/* method description */
				[/* text */ 't', `Returns the calendar type of this `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', `. Calendar types are
 defined by the `],
				[/* text */ 't', `Unicode Locale Data Markup Language (LDML)`],
				[/* text */ 't', `
 specification.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The default implementation of this method returns the class name of
 this `],
					[/* inline code block */ 'i', `Calendar`],
					[/* text */ 't', ` instance. Any subclasses that implement
 LDML-defined calendar systems should override this method to return
 appropriate calendar types.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the LDML-defined calendar type or the class name of this
         `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` instance`]
			]
		]],
		[/* method */ 'getDisplayName(int,int,java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns the string representation of the calendar
 `],
				[/* inline code block */ 'i', `field`],
				[/* text */ 't', ` value in the given `],
				[/* inline code block */ 'i', `style`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `locale`],
				[/* text */ 't', `.  If no string representation is
 applicable, `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` is returned. This method calls
 `],
				[/* reference */ 'r', `#get(int)`, `get(field)`],
				[/* text */ 't', ` to get the calendar
 `],
				[/* inline code block */ 'i', `field`],
				[/* text */ 't', ` value if the string representation is
 applicable to the given calendar `],
				[/* inline code block */ 'i', `field`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `For example, if this `],
					[/* inline code block */ 'i', `Calendar`],
					[/* text */ 't', ` is a
 `],
					[/* inline code block */ 'i', `GregorianCalendar`],
					[/* text */ 't', ` and its date is 2005-01-01, then
 the string representation of the `],
					[/* text */ 't', `MONTH`],
					[/* text */ 't', ` field would be
 "January" in the long style in an English locale or "Jan" in
 the short style. However, no string representation would be
 available for the `],
					[/* text */ 't', `DAY_OF_MONTH`],
					[/* text */ 't', ` field, and this method
 would return `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The default implementation supports the calendar fields for
 which a `],
					[/* reference */ 'r', `java.text.DateFormatSymbols`, `DateFormatSymbols`],
					[/* text */ 't', ` has names in the given
 `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the calendar field for which the string representation
        is returned`]
				]],
				[/* parameter */ 'style', [/* parameter description */
					[/* text */ 't', `the style applied to the string representation; one of `],
					[/* text */ 't', `SHORT_FORMAT`],
					[/* text */ 't', ` (`],
					[/* text */ 't', `SHORT`],
					[/* text */ 't', `), `],
					[/* text */ 't', `SHORT_STANDALONE`],
					[/* text */ 't', `,
        `],
					[/* text */ 't', `LONG_FORMAT`],
					[/* text */ 't', ` (`],
					[/* text */ 't', `LONG`],
					[/* text */ 't', `), `],
					[/* text */ 't', `LONG_STANDALONE`],
					[/* text */ 't', `,
        `],
					[/* text */ 't', `NARROW_FORMAT`],
					[/* text */ 't', `, or `],
					[/* text */ 't', `NARROW_STANDALONE`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale for the string representation
        (any calendar types specified by `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` are ignored)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `field`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `style`],
					[/* text */ 't', ` is invalid,
        or if this `],
					[/* inline code block */ 'i', `Calendar`],
					[/* text */ 't', ` is non-lenient and any
        of the calendar fields have invalid values`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the string representation of the given
        `],
				[/* inline code block */ 'i', `field`],
				[/* text */ 't', ` in the given `],
				[/* inline code block */ 'i', `style`],
				[/* text */ 't', `, or
        `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if no string representation is
        applicable.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Return a string representation of this calendar. This method
 is intended to be used only for debugging purposes, and the
 format of the returned string may vary between implementations.
 The returned string may be empty but may not be `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this calendar.`]
			]
		]],
		[/* method */ 'getDisplayNames(int,int,java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', ` containing all names of the calendar
 `],
				[/* inline code block */ 'i', `field`],
				[/* text */ 't', ` in the given `],
				[/* inline code block */ 'i', `style`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `locale`],
				[/* text */ 't', ` and their corresponding field values. For
 example, if this `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` is a `],
				[/* reference */ 'r', `java.util.GregorianCalendar`, `GregorianCalendar`],
				[/* text */ 't', `, the returned map would contain "Jan" to
 `],
				[/* text */ 't', `JANUARY`],
				[/* text */ 't', `, "Feb" to `],
				[/* text */ 't', `FEBRUARY`],
				[/* text */ 't', `, and so on, in the
 `],
				[/* text */ 't', `short`],
				[/* text */ 't', ` style in an English locale.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Narrow names may not be unique due to use of single characters,
 such as "S" for Sunday and Saturday. In that case narrow names are not
 included in the returned `],
					[/* inline code block */ 'i', `Map`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The values of other calendar fields may be taken into
 account to determine a set of display names. For example, if
 this `],
					[/* inline code block */ 'i', `Calendar`],
					[/* text */ 't', ` is a lunisolar calendar system and
 the year value given by the `],
					[/* text */ 't', `YEAR`],
					[/* text */ 't', ` field has a leap
 month, this method would return month names containing the leap
 month name, and month names are mapped to their values specific
 for the year.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The default implementation supports display names contained in
 a `],
					[/* reference */ 'r', `java.text.DateFormatSymbols`, `DateFormatSymbols`],
					[/* text */ 't', `. For example, if `],
					[/* inline code block */ 'i', `field`],
					[/* text */ 't', `
 is `],
					[/* text */ 't', `MONTH`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `style`],
					[/* text */ 't', ` is `],
					[/* text */ 't', `ALL_STYLES`],
					[/* text */ 't', `, this method returns a `],
					[/* inline code block */ 'i', `Map`],
					[/* text */ 't', ` containing
 all strings returned by `],
					[/* reference */ 'r', `java.text.DateFormatSymbols#getShortMonths()`, `DateFormatSymbols.getShortMonths()`],
					[/* text */ 't', `
 and `],
					[/* reference */ 'r', `java.text.DateFormatSymbols#getMonths()`, `DateFormatSymbols.getMonths()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the calendar field for which the display names are returned`]
				]],
				[/* parameter */ 'style', [/* parameter description */
					[/* text */ 't', `the style applied to the string representation; one of `],
					[/* text */ 't', `SHORT_FORMAT`],
					[/* text */ 't', ` (`],
					[/* text */ 't', `SHORT`],
					[/* text */ 't', `), `],
					[/* text */ 't', `SHORT_STANDALONE`],
					[/* text */ 't', `,
        `],
					[/* text */ 't', `LONG_FORMAT`],
					[/* text */ 't', ` (`],
					[/* text */ 't', `LONG`],
					[/* text */ 't', `), `],
					[/* text */ 't', `LONG_STANDALONE`],
					[/* text */ 't', `,
        `],
					[/* text */ 't', `NARROW_FORMAT`],
					[/* text */ 't', `, or `],
					[/* text */ 't', `NARROW_STANDALONE`]
				]],
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale for the display names`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `field`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `style`],
					[/* text */ 't', ` is invalid,
        or if this `],
					[/* inline code block */ 'i', `Calendar`],
					[/* text */ 't', ` is non-lenient and any
        of the calendar fields have invalid values`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Map`],
				[/* text */ 't', ` containing all display names in
        `],
				[/* inline code block */ 'i', `style`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `locale`],
				[/* text */ 't', ` and their
        field values, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if no display names
        are defined for `],
				[/* inline code block */ 'i', `field`]
			]
		]],
		[/* method */ 'getTimeZone()', [
			[/* method description */
				[/* text */ 't', `Gets the time zone.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the time zone object associated with this calendar.`]
			]
		]],
		[/* method */ 'getTimeInMillis()', [
			[/* method description */
				[/* text */ 't', `Returns this Calendar's time value in milliseconds.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the current time as UTC milliseconds from the epoch.`]
			]
		]],
		[/* method */ 'getInstance()', [
			[/* method description */
				[/* text */ 't', `Gets a calendar using the default time zone and locale. The
 `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` returned is based on the current time
 in the default time zone with the default
 `],
				[/* reference */ 'r', `java.util.Locale.Category#FORMAT`, `FORMAT`],
				[/* text */ 't', ` locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the locale contains the time zone with "tz"
 `],
					[/* reference */ 'r', `java.util.Locale#def_locale_extension`, `Unicode extension`],
					[/* text */ 't', `,
 that time zone is used instead.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a Calendar.`]
			]
		]],
		[/* method */ 'getInstance(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Gets a calendar using the default time zone and specified locale.
 The `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` returned is based on the current time
 in the default time zone with the given locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the locale contains the time zone with "tz"
 `],
					[/* reference */ 'r', `java.util.Locale#def_locale_extension`, `Unicode extension`],
					[/* text */ 't', `,
 that time zone is used instead.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'aLocale', [/* parameter description */
					[/* text */ 't', `the locale for the week data`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a Calendar.`]
			]
		]],
		[/* method */ 'getInstance(java.util.TimeZone)', [
			[/* method description */
				[/* text */ 't', `Gets a calendar using the specified time zone and default locale.
 The `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` returned is based on the current time
 in the given time zone with the default
 `],
				[/* reference */ 'r', `java.util.Locale.Category#FORMAT`, `FORMAT`],
				[/* text */ 't', ` locale.`]
			],
			[/* parameters */
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the time zone to use`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a Calendar.`]
			]
		]],
		[/* method */ 'getInstance(java.util.TimeZone,java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Gets a calendar with the specified time zone and locale.
 The `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` returned is based on the current time
 in the given time zone with the given locale.`]
			],
			[/* parameters */
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the time zone to use`]
				]],
				[/* parameter */ 'aLocale', [/* parameter description */
					[/* text */ 't', `the locale for the week data`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a Calendar.`]
			]
		]],
		[/* method */ 'getAvailableCalendarTypes()', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` containing all calendar types
 supported by `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` in the runtime environment. The available
 calendar types can be used for the `],
				[/* reference */ 'r', `java.util.Locale#def_locale_extension`, `Unicode locale extensions`],
				[/* text */ 't', `.
 The `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` returned contains at least `],
				[/* inline code block */ 'i', `"gregory"`],
				[/* text */ 't', `. The
 calendar types don't include aliases, such as `],
				[/* inline code block */ 'i', `"gregorian"`],
				[/* text */ 't', ` for
 `],
				[/* inline code block */ 'i', `"gregory"`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an unmodifiable `],
				[/* inline code block */ 'i', `Set`],
				[/* text */ 't', ` containing all available calendar types`]
			]
		]],
		[/* method */ 'getAvailableLocales()', [
			[/* method description */
				[/* text */ 't', `Returns an array of all locales for which the `],
				[/* inline code block */ 'i', `getInstance`],
				[/* text */ 't', `
 methods of this class can return localized instances.
 The array returned must contain at least a `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', `
 instance equal to `],
				[/* reference */ 'r', `java.util.Locale#US`, `Locale.US`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `An array of locales for which localized
         `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` instances are available.`]
			]
		]],
		[/* method */ 'roll(int,int)', [
			[/* method description */
				[/* text */ 't', `Adds the specified (signed) amount to the specified calendar field
 without changing larger fields.  A negative amount means to roll
 down.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `NOTE:  This default implementation on `],
					[/* inline code block */ 'i', `Calendar`],
					[/* text */ 't', ` just repeatedly calls the
 version of `],
					[/* reference */ 'r', `#roll(int,boolean)`, `roll()`],
					[/* text */ 't', ` that rolls by one unit.  This may not
 always do the right thing.  For example, if the `],
					[/* inline code block */ 'i', `DAY_OF_MONTH`],
					[/* text */ 't', ` field is 31,
 rolling through February will leave it set to 28.  The `],
					[/* inline code block */ 'i', `GregorianCalendar`],
					[/* text */ 't', `
 version of this function takes care of this problem.  Other subclasses
 should also provide overrides of this function that do the right thing.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the calendar field.`]
				]],
				[/* parameter */ 'amount', [/* parameter description */
					[/* text */ 't', `the signed amount to add to the calendar `],
					[/* inline code block */ 'i', `field`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'set(int,int)', [
			[/* method description */
				[/* text */ 't', `Sets the given calendar field to the given value. The value is not
 interpreted by this method regardless of the leniency mode.`]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the given calendar field.`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to be set for the given calendar field.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the specified field is out of range
             (`],
					[/* inline code block */ 'i', `field < 0 || field >= FIELD_COUNT`],
					[/* text */ 't', `).
 in non-lenient mode.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setFirstDayOfWeek(int)', [
			[/* method description */
				[/* text */ 't', `Sets what the first day of the week is; e.g., `],
				[/* inline code block */ 'i', `SUNDAY`],
				[/* text */ 't', ` in the U.S.,
 `],
				[/* inline code block */ 'i', `MONDAY`],
				[/* text */ 't', ` in France.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the given first day of the week.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setLenient(boolean)', [
			[/* method description */
				[/* text */ 't', `Specifies whether or not date/time interpretation is to be lenient.  With
 lenient interpretation, a date such as "February 942, 1996" will be
 treated as being equivalent to the 941st day after February 1, 1996.
 With strict (non-lenient) interpretation, such dates will cause an exception to be
 thrown. The default is lenient.`]
			],
			[/* parameters */
				[/* parameter */ 'lenient', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if the lenient mode is to be turned
 on; `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` if it is to be turned off.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setMinimalDaysInFirstWeek(int)', [
			[/* method description */
				[/* text */ 't', `Sets what the minimal days required in the first week of the year are;
 For example, if the first week is defined as one that contains the first
 day of the first month of a year, call this method with value 1. If it
 must be a full week, use value 7.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the given minimal days required in the first week
 of the year.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setTimeInMillis(long)', [
			[/* method description */
				[/* text */ 't', `Sets this Calendar's current time from the given long value.`]
			],
			[/* parameters */
				[/* parameter */ 'millis', [/* parameter description */
					[/* text */ 't', `the new time in UTC milliseconds from the epoch.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setTimeZone(java.util.TimeZone)', [
			[/* method description */
				[/* text */ 't', `Sets the time zone with the given time zone value.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the given time zone.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setWeekDate(int,int,int)', [
			[/* method description */
				[/* text */ 't', `Sets the date of this `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` with the given date
 specifiers - week year, week of year, and day of week.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Unlike the `],
					[/* inline code block */ 'i', `set`],
					[/* text */ 't', ` method, all of the calendar fields
 and `],
					[/* inline code block */ 'i', `time`],
					[/* text */ 't', ` values are calculated upon return.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `weekOfYear`],
					[/* text */ 't', ` is out of the valid week-of-year range
 in `],
					[/* inline code block */ 'i', `weekYear`],
					[/* text */ 't', `, the `],
					[/* inline code block */ 'i', `weekYear`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `weekOfYear`],
					[/* text */ 't', ` values are adjusted in lenient mode, or an `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', ` is thrown in non-lenient mode.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The default implementation of this method throws an
 `],
					[/* inline code block */ 'i', `UnsupportedOperationException`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'weekYear', [/* parameter description */
					[/* text */ 't', `the week year`]
				]],
				[/* parameter */ 'weekOfYear', [/* parameter description */
					[/* text */ 't', `the week number based on `],
					[/* inline code block */ 'i', `weekYear`]
				]],
				[/* parameter */ 'dayOfWeek', [/* parameter description */
					[/* text */ 't', `the day of week value: one of the constants
                   for the `],
					[/* text */ 't', `DAY_OF_WEEK`],
					[/* text */ 't', ` field: `],
					[/* text */ 't', `SUNDAY`],
					[/* text */ 't', `, ..., `],
					[/* text */ 't', `SATURDAY`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if any of the given date specifiers is invalid
            or any of the calendar fields are inconsistent
            with the given date specifiers in non-lenient mode`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if any week year numbering isn't supported in this
            `],
					[/* inline code block */ 'i', `Calendar`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
