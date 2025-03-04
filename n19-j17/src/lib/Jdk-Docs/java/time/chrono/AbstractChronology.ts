import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.chrono.AbstractChronology', [
	[/* class description */
		[/* text */ 't', `An abstract implementation of a calendar system, used to organize and identify dates.
 `],
		[/* block */ 'b', `
 The main date and time API is built on the ISO calendar system.
 The chronology operates behind the scenes to represent the general concept of a calendar system.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 See `],
			[/* reference */ 'r', `java.time.chrono.Chronology`],
			[/* text */ 't', ` for more details.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Creates an instance.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks if this chronology is equal to another chronology.
 `],
				[/* block */ 'b', `
 The comparison is based on the entire state of the object.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to check, null returns false`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this is equal to the other chronology`]
			]
		]],
		[/* method */ 'compareTo(java.time.chrono.Chronology)', [
			[/* method description */
				[/* text */ 't', `Compares this chronology to another chronology.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The comparison order first by the chronology ID string, then by any
 additional information specific to the subclass.
 It is "consistent with equals", as defined by `],
					[/* reference */ 'r', `java.lang.Comparable`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other chronology to compare to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the comparator value, negative if less, positive if greater`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `A hash code for this chronology.
 `],
				[/* block */ 'b', `
 The hash code should be based on the entire state of the object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a suitable hash code`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Outputs this chronology as a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `, using the chronology ID.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this chronology, not null`]
			]
		]],
		[/* method */ 'resolveDate(java.util.Map,java.time.format.ResolverStyle)', [
			[/* method description */
				[/* text */ 't', `Resolves parsed `],
				[/* inline code block */ 'i', `ChronoField`],
				[/* text */ 't', ` values into a date during parsing.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Most `],
					[/* inline code block */ 'i', `TemporalField`],
					[/* text */ 't', ` implementations are resolved using the
 resolve method on the field. By contrast, the `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', ` class
 defines fields that only have meaning relative to the chronology.
 As such, `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', ` date fields are resolved here in the
 context of a specific chronology.
 `]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', ` instances are resolved by this method, which may
 be overridden in subclasses.
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `EPOCH_DAY`],
						[/* text */ 't', ` - If present, this is converted to a date and
  all other date fields are then cross-checked against the date.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `PROLEPTIC_MONTH`],
						[/* text */ 't', ` - If present, then it is split into the
  `],
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `MONTH_OF_YEAR`],
						[/* text */ 't', `. If the mode is strict or smart
  then the field is validated.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEAR_OF_ERA`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `ERA`],
						[/* text */ 't', ` - If both are present, then they
  are combined to form a `],
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', `. In lenient mode, the `],
						[/* inline code block */ 'i', `YEAR_OF_ERA`],
						[/* text */ 't', `
  range is not validated, in smart and strict mode it is. The `],
						[/* inline code block */ 'i', `ERA`],
						[/* text */ 't', ` is
  validated for range in all three modes. If only the `],
						[/* inline code block */ 'i', `YEAR_OF_ERA`],
						[/* text */ 't', ` is
  present, and the mode is smart or lenient, then the last available era
  is assumed. In strict mode, no era is assumed and the `],
						[/* inline code block */ 'i', `YEAR_OF_ERA`],
						[/* text */ 't', ` is
  left untouched. If only the `],
						[/* inline code block */ 'i', `ERA`],
						[/* text */ 't', ` is present, then it is left untouched.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `MONTH_OF_YEAR`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `DAY_OF_MONTH`],
						[/* text */ 't', ` -
  If all three are present, then they are combined to form a date.
  In all three modes, the `],
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', ` is validated.
  If the mode is smart or strict, then the month and day are validated.
  If the mode is lenient, then the date is combined in a manner equivalent to
  creating a date on the first day of the first month in the requested year,
  then adding the difference in months, then the difference in days.
  If the mode is smart, and the day-of-month is greater than the maximum for
  the year-month, then the day-of-month is adjusted to the last day-of-month.
  If the mode is strict, then the three fields must form a valid date.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `DAY_OF_YEAR`],
						[/* text */ 't', ` -
  If both are present, then they are combined to form a date.
  In all three modes, the `],
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', ` is validated.
  If the mode is lenient, then the date is combined in a manner equivalent to
  creating a date on the first day of the requested year, then adding
  the difference in days.
  If the mode is smart or strict, then the two fields must form a valid date.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `MONTH_OF_YEAR`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `ALIGNED_WEEK_OF_MONTH`],
						[/* text */ 't', ` and
  `],
						[/* inline code block */ 'i', `ALIGNED_DAY_OF_WEEK_IN_MONTH`],
						[/* text */ 't', ` -
  If all four are present, then they are combined to form a date.
  In all three modes, the `],
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', ` is validated.
  If the mode is lenient, then the date is combined in a manner equivalent to
  creating a date on the first day of the first month in the requested year, then adding
  the difference in months, then the difference in weeks, then in days.
  If the mode is smart or strict, then the all four fields are validated to
  their outer ranges. The date is then combined in a manner equivalent to
  creating a date on the first day of the requested year and month, then adding
  the amount in weeks and days to reach their values. If the mode is strict,
  the date is additionally validated to check that the day and week adjustment
  did not change the month.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `MONTH_OF_YEAR`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `ALIGNED_WEEK_OF_MONTH`],
						[/* text */ 't', ` and
  `],
						[/* inline code block */ 'i', `DAY_OF_WEEK`],
						[/* text */ 't', ` - If all four are present, then they are combined to
  form a date. The approach is the same as described above for
  years, months and weeks in `],
						[/* inline code block */ 'i', `ALIGNED_DAY_OF_WEEK_IN_MONTH`],
						[/* text */ 't', `.
  The day-of-week is adjusted as the next or same matching day-of-week once
  the years, months and weeks have been handled.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `ALIGNED_WEEK_OF_YEAR`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `ALIGNED_DAY_OF_WEEK_IN_YEAR`],
						[/* text */ 't', ` -
  If all three are present, then they are combined to form a date.
  In all three modes, the `],
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', ` is validated.
  If the mode is lenient, then the date is combined in a manner equivalent to
  creating a date on the first day of the requested year, then adding
  the difference in weeks, then in days.
  If the mode is smart or strict, then the all three fields are validated to
  their outer ranges. The date is then combined in a manner equivalent to
  creating a date on the first day of the requested year, then adding
  the amount in weeks and days to reach their values. If the mode is strict,
  the date is additionally validated to check that the day and week adjustment
  did not change the year.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `ALIGNED_WEEK_OF_YEAR`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `DAY_OF_WEEK`],
						[/* text */ 't', ` -
  If all three are present, then they are combined to form a date.
  The approach is the same as described above for years and weeks in
  `],
						[/* inline code block */ 'i', `ALIGNED_DAY_OF_WEEK_IN_YEAR`],
						[/* text */ 't', `. The day-of-week is adjusted as the
  next or same matching day-of-week once the years and weeks have been handled.
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The default implementation is suitable for most calendar systems.
 If `],
					[/* reference */ 'r', `java.ChronoField#YEAR_OF_ERA`],
					[/* text */ 't', ` is found without an `],
					[/* reference */ 'r', `java.ChronoField#ERA`],
					[/* text */ 't', `
 then the last era in `],
					[/* reference */ 'r', `.Chronology#eras()`],
					[/* text */ 't', ` is used.
 The implementation assumes a 7 day week, that the first day-of-month
 has the value 1, that first day-of-year has the value 1, and that the
 first of the month and year always exists.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fieldValues', [/* parameter description */
					[/* text */ 't', `the map of fields to values, which can be updated, not null`]
				]],
				[/* parameter */ 'resolverStyle', [/* parameter description */
					[/* text */ 't', `the requested type of resolve, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the date cannot be resolved, typically
  because of a conflict in the input data`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the resolved date, null if insufficient information to create a date`]
			]
		]]
	],
]);
