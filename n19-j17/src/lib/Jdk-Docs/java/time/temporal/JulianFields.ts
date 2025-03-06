import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.temporal.JulianFields', [
	[/* class description */
		[/* text */ 't', `A set of date fields that provide access to Julian Days.
 `],
		[/* block */ 'b', `
 The Julian Day is a standard way of expressing date and time commonly used in the scientific community.
 It is expressed as a decimal number of whole days where days start at midday.
 This class represents variations on Julian Days that count whole days from midnight.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The fields are implemented relative to `],
			[/* reference */ 'r', `java.time.temporal.ChronoField#EPOCH_DAY`, `EPOCH_DAY`],
			[/* text */ 't', `.
 The fields are supported, and can be queried and set if `],
			[/* inline code block */ 'i', `EPOCH_DAY`],
			[/* text */ 't', ` is available.
 The fields work with all chronologies.`]
		]]
	],
	[/* fields */
		[/* field */ 'JULIAN_DAY', [
			[/* field description */
				[/* text */ 't', `Julian Day field.
 `],
				[/* block */ 'b', `
 This is an integer-based version of the Julian Day Number.
 Julian Day is a well-known system that represents the count of whole days since day 0,
 which is defined to be January 1, 4713 BCE in the Julian calendar, and -4713-11-24 Gregorian.
 The field  has "JulianDay" as 'name', and 'DAYS' as 'baseUnit'.
 The field always refers to the local date-time, ignoring the offset or zone.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 For date-times, 'JULIAN_DAY.getFrom()' assumes the same value from
 midnight until just before the next midnight.
 When 'JULIAN_DAY.adjustInto()' is applied to a date-time, the time of day portion remains unaltered.
 'JULIAN_DAY.adjustInto()' and 'JULIAN_DAY.getFrom()' only apply to `],
					[/* inline code block */ 'i', `Temporal`],
					[/* text */ 't', ` objects that
 can be converted into `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#EPOCH_DAY`, `ChronoField.EPOCH_DAY`],
					[/* text */ 't', `.
 An `],
					[/* reference */ 'r', `java.time.temporal.UnsupportedTemporalTypeException`, `UnsupportedTemporalTypeException`],
					[/* text */ 't', ` is thrown for any other type of object.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In the resolving phase of parsing, a date can be created from a Julian Day field.
 In `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#STRICT`, `strict mode`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#SMART`, `smart mode`],
					[/* text */ 't', `
 the Julian Day value is validated against the range of valid values.
 In `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#LENIENT`, `lenient mode`],
					[/* text */ 't', ` no validation occurs.

 `]
				]],
				[/* block */ 'b', `Astronomical and Scientific Notes`],
				[/* text */ 't', `
 The standard astronomical definition uses a fraction to indicate the time-of-day,
 where each day is counted from midday to midday. For example,
 a fraction of 0 represents midday, a fraction of 0.25
 represents 18:00, a fraction of 0.5 represents midnight and a fraction
 of 0.75 represents 06:00.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 By contrast, this implementation has no fractional part, and counts
 days from midnight to midnight.
 This implementation uses an integer and days starting at midnight.
 The integer value for the Julian Day Number is the astronomical Julian Day value at midday
 of the date in question.
 This amounts to the astronomical Julian Day, rounded to an integer `],
					[/* inline code block */ 'i', `JDN = floor(JD + 0.5)`],
					[/* text */ 't', `.

 `]
				]],
				[/* code block */ 'c', `  | ISO date          |  Julian Day Number | Astronomical Julian Day |
  | 1970-01-01T00:00  |         2,440,588  |         2,440,587.5     |
  | 1970-01-01T06:00  |         2,440,588  |         2,440,587.75    |
  | 1970-01-01T12:00  |         2,440,588  |         2,440,588.0     |
  | 1970-01-01T18:00  |         2,440,588  |         2,440,588.25    |
  | 1970-01-02T00:00  |         2,440,589  |         2,440,588.5     |
  | 1970-01-02T06:00  |         2,440,589  |         2,440,588.75    |
  | 1970-01-02T12:00  |         2,440,589  |         2,440,589.0     |
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 Julian Days are sometimes taken to imply Universal Time or UTC, but this
 implementation always uses the Julian Day number for the local date,
 regardless of the offset or time-zone.`]
			],
		]],
		[/* field */ 'MODIFIED_JULIAN_DAY', [
			[/* field description */
				[/* text */ 't', `Modified Julian Day field.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This is an integer-based version of the Modified Julian Day Number.
 Modified Julian Day (MJD) is a well-known system that counts days continuously.
 It is defined relative to astronomical Julian Day as  `],
					[/* inline code block */ 'i', `MJD = JD - 2400000.5`],
					[/* text */ 't', `.
 Each Modified Julian Day runs from midnight to midnight.
 The field always refers to the local date-time, ignoring the offset or zone.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 For date-times, 'MODIFIED_JULIAN_DAY.getFrom()' assumes the same value from
 midnight until just before the next midnight.
 When 'MODIFIED_JULIAN_DAY.adjustInto()' is applied to a date-time, the time of day portion remains unaltered.
 'MODIFIED_JULIAN_DAY.adjustInto()' and 'MODIFIED_JULIAN_DAY.getFrom()' only apply to `],
					[/* inline code block */ 'i', `Temporal`],
					[/* text */ 't', ` objects
 that can be converted into `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#EPOCH_DAY`, `ChronoField.EPOCH_DAY`],
					[/* text */ 't', `.
 An `],
					[/* reference */ 'r', `java.time.temporal.UnsupportedTemporalTypeException`, `UnsupportedTemporalTypeException`],
					[/* text */ 't', ` is thrown for any other type of object.
 `]
				]],
				[/* block */ 'b', `
 This implementation is an integer version of MJD with the decimal part rounded to floor.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 In the resolving phase of parsing, a date can be created from a Modified Julian Day field.
 In `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#STRICT`, `strict mode`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#SMART`, `smart mode`],
					[/* text */ 't', `
 the Modified Julian Day value is validated against the range of valid values.
 In `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#LENIENT`, `lenient mode`],
					[/* text */ 't', ` no validation occurs.

 `]
				]],
				[/* block */ 'b', `Astronomical and Scientific Notes`],
				[/* code block */ 'c', `  | ISO date          | Modified Julian Day |      Decimal MJD |
  | 1970-01-01T00:00  |             40,587  |       40,587.0   |
  | 1970-01-01T06:00  |             40,587  |       40,587.25  |
  | 1970-01-01T12:00  |             40,587  |       40,587.5   |
  | 1970-01-01T18:00  |             40,587  |       40,587.75  |
  | 1970-01-02T00:00  |             40,588  |       40,588.0   |
  | 1970-01-02T06:00  |             40,588  |       40,588.25  |
  | 1970-01-02T12:00  |             40,588  |       40,588.5   |
 `],
				[/* text */ 't', `

 Modified Julian Days are sometimes taken to imply Universal Time or UTC, but this
 implementation always uses the Modified Julian Day for the local date,
 regardless of the offset or time-zone.`]
			],
		]],
		[/* field */ 'RATA_DIE', [
			[/* field description */
				[/* text */ 't', `Rata Die field.
 `],
				[/* block */ 'b', `
 Rata Die counts whole days continuously starting day 1 at midnight at the beginning of 0001-01-01 (ISO).
 The field always refers to the local date-time, ignoring the offset or zone.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 For date-times, 'RATA_DIE.getFrom()' assumes the same value from
 midnight until just before the next midnight.
 When 'RATA_DIE.adjustInto()' is applied to a date-time, the time of day portion remains unaltered.
 'RATA_DIE.adjustInto()' and 'RATA_DIE.getFrom()' only apply to `],
					[/* inline code block */ 'i', `Temporal`],
					[/* text */ 't', ` objects
 that can be converted into `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#EPOCH_DAY`, `ChronoField.EPOCH_DAY`],
					[/* text */ 't', `.
 An `],
					[/* reference */ 'r', `java.time.temporal.UnsupportedTemporalTypeException`, `UnsupportedTemporalTypeException`],
					[/* text */ 't', ` is thrown for any other type of object.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In the resolving phase of parsing, a date can be created from a Rata Die field.
 In `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#STRICT`, `strict mode`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#SMART`, `smart mode`],
					[/* text */ 't', `
 the Rata Die value is validated against the range of valid values.
 In `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#LENIENT`, `lenient mode`],
					[/* text */ 't', ` no validation occurs.`]
				]]
			],
		]]
	],
	/* constructors */ UDF,
	/* methods */ UDF,
]);
