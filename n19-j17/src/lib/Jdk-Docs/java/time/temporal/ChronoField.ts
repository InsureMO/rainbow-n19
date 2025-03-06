import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.temporal.ChronoField', [
	[/* class description */
		[/* text */ 't', `A standard set of fields.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 This set of fields provide field-based access to manipulate a date, time or date-time.
 The standard set of fields can be extended by implementing `],
			[/* reference */ 'r', `java.time.temporal.TemporalField`, `TemporalField`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', `
 These fields are intended to be applicable in multiple calendar systems.
 For example, most non-ISO calendar systems define dates as a year, month and day,
 just with slightly different rules.
 The documentation of each field explains how it operates.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'adjustInto(java.time.temporal.Temporal,long)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a copy of the specified temporal object with the value of this field set.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `
 This returns a new temporal object based on the specified one with the value for
 this field changed. For example, on a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', `, this could be used to
 set the year, month or day-of-month.
 The returned object has the same observable type as the specified object.
 `]
					]],
					[/* block */ 'b', `
 In some cases, changing a field is not fully defined. For example, if the target object is
 a date representing the 31st January, then changing the month to February would be unclear.
 In cases like this, the implementation is responsible for resolving the result.
 Typically it will choose the previous valid date, which would be the last valid
 day of February in this example.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `
 There are two equivalent ways of using this method.
 The first is to invoke this method directly.
 The second is to use `],
						[/* reference */ 'r', `java.time.temporal.Temporal#with(java.time.temporal.TemporalField,long)`, `Temporal.with(TemporalField, long)`],
						[/* text */ 't', `:
 `]
					]],
					[/* code block */ 'c', `   // these two lines are equivalent, but the second approach is recommended
   temporal = thisField.adjustInto(temporal);
   temporal = temporal.with(thisField);
 `],
					[/* text */ 't', `
 It is recommended to use the second approach, `],
					[/* inline code block */ 'i', `with(TemporalField)`],
					[/* text */ 't', `,
 as it is a lot clearer to read in code.
 `],
					[/* block */ 'b', ''],
					[/* block */ 'b', [
						[/* text */ 't', `
 Implementations should perform any queries or calculations using the fields
 available in `],
						[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
						[/* text */ 't', `.
 If the field is not supported an `],
						[/* inline code block */ 'i', `UnsupportedTemporalTypeException`],
						[/* text */ 't', ` must be thrown.
 `]
					]],
					[/* block */ 'b', `
 Implementations must not alter the specified temporal object.
 Instead, an adjusted copy of the original must be returned.
 This provides equivalent, safe behavior for immutable and mutable implementations.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to adjust, not null`]
				]],
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `the new value of the field`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the adjusted temporal object, not null`]
			]
		]],
		[/* method */ 'isDateBased()', [
			[/* method description */
				[/* text */ 't', `Checks if this field represents a component of a date.
 `],
				[/* block */ 'b', `
 Fields from day-of-week to era are date-based.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if it is a component of a date`]
			]
		]],
		[/* method */ 'isSupportedBy(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Checks if this field is supported by the temporal object.
 `],
					[/* block */ 'b', `
 This determines whether the temporal accessor supports this field.
 If this returns false, then the temporal cannot be queried for this field.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `
 There are two equivalent ways of using this method.
 The first is to invoke this method directly.
 The second is to use `],
						[/* reference */ 'r', `java.time.temporal.TemporalAccessor#isSupported(java.time.temporal.TemporalField)`, `TemporalAccessor.isSupported(TemporalField)`],
						[/* text */ 't', `:
 `]
					]],
					[/* code block */ 'c', `   // these two lines are equivalent, but the second approach is recommended
   temporal = thisField.isSupportedBy(temporal);
   temporal = temporal.isSupported(thisField);
 `],
					[/* text */ 't', `
 It is recommended to use the second approach, `],
					[/* inline code block */ 'i', `isSupported(TemporalField)`],
					[/* text */ 't', `,
 as it is a lot clearer to read in code.
 `],
					[/* block */ 'b', ''],
					[/* block */ 'b', [
						[/* text */ 't', `
 Implementations should determine whether they are supported using the fields
 available in `],
						[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
						[/* text */ 't', `.`]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to query, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the date-time can be queried for this field, false if not`]
			]
		]],
		[/* method */ 'isTimeBased()', [
			[/* method description */
				[/* text */ 't', `Checks if this field represents a component of a time.
 `],
				[/* block */ 'b', `
 Fields from nano-of-second to am-pm-of-day are time-based.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if it is a component of a time`]
			]
		]],
		[/* method */ 'checkValidIntValue(long)', [
			[/* method description */
				[/* text */ 't', `Checks that the specified value is valid and fits in an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This validates that the value is within the outer range of valid values
 returned by `],
					[/* reference */ 'r', `#range()`, `range()`],
					[/* text */ 't', `.
 It also checks that all valid values are within the bounds of an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method checks against the range of the field in the ISO-8601 calendar system.
 This range may be incorrect for other calendar systems.
 Use `],
					[/* reference */ 'r', `java.time.chrono.Chronology#range(java.time.temporal.ChronoField)`, `Chronology.range(ChronoField)`],
					[/* text */ 't', ` to access the correct range
 for a different calendar system.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to check`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value that was passed in`]
			]
		]],
		[/* method */ 'getDisplayName(java.util.Locale)', UDF],
		[/* method */ 'toString()', [
			[/* method description */
				[/* block */ 'b', `Returns the name of this enum constant, as contained in the
 declaration.  This method may be overridden, though it typically
 isn't necessary or desirable.  An enum class should override this
 method when a more "programmer-friendly" string form exists.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of this enum constant`]
			]
		]],
		[/* method */ 'getBaseUnit()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Gets the unit that the field is measured in.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `
 The unit of the field is the period that varies within the range.
 For example, in the field 'MonthOfYear', the unit is 'Months'.
 See also `],
						[/* reference */ 'r', `java.time.temporal.TemporalField#getRangeUnit()`, `TemporalField.getRangeUnit()`],
						[/* text */ 't', `.`]
					]]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the unit defining the base unit of the field, not null`]
			]
		]],
		[/* method */ 'getRangeUnit()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Gets the range that the field is bound by.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `
 The range of the field is the period that the field varies within.
 For example, in the field 'MonthOfYear', the range is 'Years'.
 See also `],
						[/* reference */ 'r', `java.time.temporal.TemporalField#getBaseUnit()`, `TemporalField.getBaseUnit()`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', `
 The range is never null. For example, the 'Year' field is shorthand for
 'YearOfForever'. It therefore has a unit of 'Years' and a range of 'Forever'.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the unit defining the range of the field, not null`]
			]
		]],
		[/* method */ 'range()', [
			[/* method description */
				[/* text */ 't', `Gets the range of valid values for the field.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 All fields can be expressed as a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` integer.
 This method returns an object that describes the valid range for that value.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method returns the range of the field in the ISO-8601 calendar system.
 This range may be incorrect for other calendar systems.
 Use `],
					[/* reference */ 'r', `java.time.chrono.Chronology#range(java.time.temporal.ChronoField)`, `Chronology.range(ChronoField)`],
					[/* text */ 't', ` to access the correct range
 for a different calendar system.
 `]
				]],
				[/* block */ 'b', `
 Note that the result only describes the minimum and maximum valid values
 and it is important not to read too much into them. For example, there
 could be values within the range that are invalid for the field.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the range of valid values for the field, not null`]
			]
		]],
		[/* method */ 'rangeRefinedBy(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Get the range of valid values for this field using the temporal object to
 refine the result.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `
 This uses the temporal object to find the range of valid values for the field.
 This is similar to `],
						[/* reference */ 'r', `java.time.temporal.TemporalField#range()`, `TemporalField.range()`],
						[/* text */ 't', `, however this method refines the result
 using the temporal. For example, if the field is `],
						[/* inline code block */ 'i', `DAY_OF_MONTH`],
						[/* text */ 't', ` the
 `],
						[/* inline code block */ 'i', `range`],
						[/* text */ 't', ` method is not accurate as there are four possible month lengths,
 28, 29, 30 and 31 days. Using this method with a date allows the range to be
 accurate, returning just one of those four options.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `
 There are two equivalent ways of using this method.
 The first is to invoke this method directly.
 The second is to use `],
						[/* reference */ 'r', `java.time.temporal.TemporalAccessor#range(java.time.temporal.TemporalField)`, `TemporalAccessor.range(TemporalField)`],
						[/* text */ 't', `:
 `]
					]],
					[/* code block */ 'c', `   // these two lines are equivalent, but the second approach is recommended
   temporal = thisField.rangeRefinedBy(temporal);
   temporal = temporal.range(thisField);
 `],
					[/* text */ 't', `
 It is recommended to use the second approach, `],
					[/* inline code block */ 'i', `range(TemporalField)`],
					[/* text */ 't', `,
 as it is a lot clearer to read in code.
 `],
					[/* block */ 'b', ''],
					[/* block */ 'b', [
						[/* text */ 't', `
 Implementations should perform any queries or calculations using the fields
 available in `],
						[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
						[/* text */ 't', `.
 If the field is not supported an `],
						[/* inline code block */ 'i', `UnsupportedTemporalTypeException`],
						[/* text */ 't', ` must be thrown.`]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object used to refine the result, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the range of valid values for this field, not null`]
			]
		]],
		[/* method */ 'checkValidValue(long)', [
			[/* method description */
				[/* text */ 't', `Checks that the specified value is valid for this field.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This validates that the value is within the outer range of valid values
 returned by `],
					[/* reference */ 'r', `#range()`, `range()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method checks against the range of the field in the ISO-8601 calendar system.
 This range may be incorrect for other calendar systems.
 Use `],
					[/* reference */ 'r', `java.time.chrono.Chronology#range(java.time.temporal.ChronoField)`, `Chronology.range(ChronoField)`],
					[/* text */ 't', ` to access the correct range
 for a different calendar system.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to check`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value that was passed in`]
			]
		]],
		[/* method */ 'getFrom(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Gets the value of this field from the specified temporal object.
 `],
					[/* block */ 'b', `
 This queries the temporal object for the value of this field.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `
 There are two equivalent ways of using this method.
 The first is to invoke this method directly.
 The second is to use `],
						[/* reference */ 'r', `java.time.temporal.TemporalAccessor#getLong(java.time.temporal.TemporalField)`, `TemporalAccessor.getLong(TemporalField)`],
						[/* text */ 't', `
 (or `],
						[/* reference */ 'r', `java.time.temporal.TemporalAccessor#get(java.time.temporal.TemporalField)`, `TemporalAccessor.get(TemporalField)`],
						[/* text */ 't', `):
 `]
					]],
					[/* code block */ 'c', `   // these two lines are equivalent, but the second approach is recommended
   temporal = thisField.getFrom(temporal);
   temporal = temporal.getLong(thisField);
 `],
					[/* text */ 't', `
 It is recommended to use the second approach, `],
					[/* inline code block */ 'i', `getLong(TemporalField)`],
					[/* text */ 't', `,
 as it is a lot clearer to read in code.
 `],
					[/* block */ 'b', ''],
					[/* block */ 'b', [
						[/* text */ 't', `
 Implementations should perform any queries or calculations using the fields
 available in `],
						[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
						[/* text */ 't', `.
 If the field is not supported an `],
						[/* inline code block */ 'i', `UnsupportedTemporalTypeException`],
						[/* text */ 't', ` must be thrown.`]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to query, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value of this field, not null`]
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
		]]
	],
]);
