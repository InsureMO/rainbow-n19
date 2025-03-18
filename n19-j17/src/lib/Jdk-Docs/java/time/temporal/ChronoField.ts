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
	/* fields */,
	/* constructors */,
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
						[/* reference */ 'r', `java.time.temporal.ChronoField`, `ChronoField`],
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
			/* throws */,
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
			/* parameters */,
			/* throws */,
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
						[/* reference */ 'r', `java.time.temporal.ChronoField`, `ChronoField`],
						[/* text */ 't', `.`]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to query, not null`]
				]]
			],
			/* throws */,
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
			/* parameters */,
			/* throws */,
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
			/* throws */,
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
			/* parameters */,
			/* throws */,
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
			/* parameters */,
			/* throws */,
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
			/* parameters */,
			/* throws */,
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
			/* parameters */,
			/* throws */,
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
						[/* reference */ 'r', `java.time.temporal.ChronoField`, `ChronoField`],
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
			/* throws */,
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
			/* throws */,
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
						[/* reference */ 'r', `java.time.temporal.ChronoField`, `ChronoField`],
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
			/* throws */,
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
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an array containing the constants of this enum class, in the order they are declared`]
			]
		]]
	],
	[/* enum values */
		[/* enum value */ 'NANO_OF_SECOND', [
			[/* enum value description */
				[/* text */ 't', `The nano-of-second.
 `],
				[/* block */ 'b', `
 This counts the nanosecond within the second, from 0 to 999,999,999.
 This field has the same meaning for all calendar systems.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This field is used to represent the nano-of-second handling any fraction of the second.
 Implementations of `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` should provide a value for this field if
 they can return a value for `],
					[/* text */ 't', `SECOND_OF_MINUTE`],
					[/* text */ 't', `, `],
					[/* text */ 't', `SECOND_OF_DAY`],
					[/* text */ 't', ` or
 `],
					[/* text */ 't', `INSTANT_SECONDS`],
					[/* text */ 't', ` filling unknown precision with zero.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When this field is used for setting a value, it should set as much precision as the
 object stores, using integer division to remove excess precision.
 For example, if the `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` stores time to millisecond precision,
 then the nano-of-second must be divided by 1,000,000 before replacing the milli-of-second.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When parsing this field it behaves equivalent to the following:
 The value is validated in strict and smart mode but not in lenient mode.
 The field is resolved in combination with `],
					[/* inline code block */ 'i', `MILLI_OF_SECOND`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `MICRO_OF_SECOND`],
					[/* text */ 't', `.`]
				]]
			],
		]],
		[/* enum value */ 'NANO_OF_DAY', [
			[/* enum value description */
				[/* text */ 't', `The nano-of-day.
 `],
				[/* block */ 'b', `
 This counts the nanosecond within the day, from 0 to (24 * 60 * 60 * 1,000,000,000) - 1.
 This field has the same meaning for all calendar systems.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This field is used to represent the nano-of-day handling any fraction of the second.
 Implementations of `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` should provide a value for this field if
 they can return a value for `],
					[/* text */ 't', `SECOND_OF_DAY`],
					[/* text */ 't', ` filling unknown precision with zero.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When parsing this field it behaves equivalent to the following:
 The value is validated in strict and smart mode but not in lenient mode.
 The value is split to form `],
					[/* inline code block */ 'i', `NANO_OF_SECOND`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `SECOND_OF_MINUTE`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `MINUTE_OF_HOUR`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `HOUR_OF_DAY`],
					[/* text */ 't', ` fields.`]
				]]
			],
		]],
		[/* enum value */ 'MICRO_OF_SECOND', [
			[/* enum value description */
				[/* text */ 't', `The micro-of-second.
 `],
				[/* block */ 'b', `
 This counts the microsecond within the second, from 0 to 999,999.
 This field has the same meaning for all calendar systems.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This field is used to represent the micro-of-second handling any fraction of the second.
 Implementations of `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` should provide a value for this field if
 they can return a value for `],
					[/* text */ 't', `SECOND_OF_MINUTE`],
					[/* text */ 't', `, `],
					[/* text */ 't', `SECOND_OF_DAY`],
					[/* text */ 't', ` or
 `],
					[/* text */ 't', `INSTANT_SECONDS`],
					[/* text */ 't', ` filling unknown precision with zero.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When this field is used for setting a value, it should behave in the same way as
 setting `],
					[/* text */ 't', `NANO_OF_SECOND`],
					[/* text */ 't', ` with the value multiplied by 1,000.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When parsing this field it behaves equivalent to the following:
 The value is validated in strict and smart mode but not in lenient mode.
 The field is resolved in combination with `],
					[/* inline code block */ 'i', `MILLI_OF_SECOND`],
					[/* text */ 't', ` to produce
 `],
					[/* inline code block */ 'i', `NANO_OF_SECOND`],
					[/* text */ 't', `.`]
				]]
			],
		]],
		[/* enum value */ 'MICRO_OF_DAY', [
			[/* enum value description */
				[/* text */ 't', `The micro-of-day.
 `],
				[/* block */ 'b', `
 This counts the microsecond within the day, from 0 to (24 * 60 * 60 * 1,000,000) - 1.
 This field has the same meaning for all calendar systems.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This field is used to represent the micro-of-day handling any fraction of the second.
 Implementations of `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` should provide a value for this field if
 they can return a value for `],
					[/* text */ 't', `SECOND_OF_DAY`],
					[/* text */ 't', ` filling unknown precision with zero.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When this field is used for setting a value, it should behave in the same way as
 setting `],
					[/* text */ 't', `NANO_OF_DAY`],
					[/* text */ 't', ` with the value multiplied by 1,000.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When parsing this field it behaves equivalent to the following:
 The value is validated in strict and smart mode but not in lenient mode.
 The value is split to form `],
					[/* inline code block */ 'i', `MICRO_OF_SECOND`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `SECOND_OF_MINUTE`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `MINUTE_OF_HOUR`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `HOUR_OF_DAY`],
					[/* text */ 't', ` fields.`]
				]]
			],
		]],
		[/* enum value */ 'MILLI_OF_SECOND', [
			[/* enum value description */
				[/* text */ 't', `The milli-of-second.
 `],
				[/* block */ 'b', `
 This counts the millisecond within the second, from 0 to 999.
 This field has the same meaning for all calendar systems.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This field is used to represent the milli-of-second handling any fraction of the second.
 Implementations of `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` should provide a value for this field if
 they can return a value for `],
					[/* text */ 't', `SECOND_OF_MINUTE`],
					[/* text */ 't', `, `],
					[/* text */ 't', `SECOND_OF_DAY`],
					[/* text */ 't', ` or
 `],
					[/* text */ 't', `INSTANT_SECONDS`],
					[/* text */ 't', ` filling unknown precision with zero.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When this field is used for setting a value, it should behave in the same way as
 setting `],
					[/* text */ 't', `NANO_OF_SECOND`],
					[/* text */ 't', ` with the value multiplied by 1,000,000.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When parsing this field it behaves equivalent to the following:
 The value is validated in strict and smart mode but not in lenient mode.
 The field is resolved in combination with `],
					[/* inline code block */ 'i', `MICRO_OF_SECOND`],
					[/* text */ 't', ` to produce
 `],
					[/* inline code block */ 'i', `NANO_OF_SECOND`],
					[/* text */ 't', `.`]
				]]
			],
		]],
		[/* enum value */ 'MILLI_OF_DAY', [
			[/* enum value description */
				[/* text */ 't', `The milli-of-day.
 `],
				[/* block */ 'b', `
 This counts the millisecond within the day, from 0 to (24 * 60 * 60 * 1,000) - 1.
 This field has the same meaning for all calendar systems.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This field is used to represent the milli-of-day handling any fraction of the second.
 Implementations of `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` should provide a value for this field if
 they can return a value for `],
					[/* text */ 't', `SECOND_OF_DAY`],
					[/* text */ 't', ` filling unknown precision with zero.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When this field is used for setting a value, it should behave in the same way as
 setting `],
					[/* text */ 't', `NANO_OF_DAY`],
					[/* text */ 't', ` with the value multiplied by 1,000,000.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When parsing this field it behaves equivalent to the following:
 The value is validated in strict and smart mode but not in lenient mode.
 The value is split to form `],
					[/* inline code block */ 'i', `MILLI_OF_SECOND`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `SECOND_OF_MINUTE`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `MINUTE_OF_HOUR`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `HOUR_OF_DAY`],
					[/* text */ 't', ` fields.`]
				]]
			],
		]],
		[/* enum value */ 'SECOND_OF_MINUTE', [
			[/* enum value description */
				[/* text */ 't', `The second-of-minute.
 `],
				[/* block */ 'b', `
 This counts the second within the minute, from 0 to 59.
 This field has the same meaning for all calendar systems.
 `],
				[/* block */ 'b', `
 When parsing this field it behaves equivalent to the following:
 The value is validated in strict and smart mode but not in lenient mode.`]
			],
		]],
		[/* enum value */ 'SECOND_OF_DAY', [
			[/* enum value description */
				[/* text */ 't', `The second-of-day.
 `],
				[/* block */ 'b', `
 This counts the second within the day, from 0 to (24 * 60 * 60) - 1.
 This field has the same meaning for all calendar systems.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 When parsing this field it behaves equivalent to the following:
 The value is validated in strict and smart mode but not in lenient mode.
 The value is split to form `],
					[/* inline code block */ 'i', `SECOND_OF_MINUTE`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `MINUTE_OF_HOUR`],
					[/* text */ 't', `
 and `],
					[/* inline code block */ 'i', `HOUR_OF_DAY`],
					[/* text */ 't', ` fields.`]
				]]
			],
		]],
		[/* enum value */ 'MINUTE_OF_HOUR', [
			[/* enum value description */
				[/* text */ 't', `The minute-of-hour.
 `],
				[/* block */ 'b', `
 This counts the minute within the hour, from 0 to 59.
 This field has the same meaning for all calendar systems.
 `],
				[/* block */ 'b', `
 When parsing this field it behaves equivalent to the following:
 The value is validated in strict and smart mode but not in lenient mode.`]
			],
		]],
		[/* enum value */ 'MINUTE_OF_DAY', [
			[/* enum value description */
				[/* text */ 't', `The minute-of-day.
 `],
				[/* block */ 'b', `
 This counts the minute within the day, from 0 to (24 * 60) - 1.
 This field has the same meaning for all calendar systems.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 When parsing this field it behaves equivalent to the following:
 The value is validated in strict and smart mode but not in lenient mode.
 The value is split to form `],
					[/* inline code block */ 'i', `MINUTE_OF_HOUR`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `HOUR_OF_DAY`],
					[/* text */ 't', ` fields.`]
				]]
			],
		]],
		[/* enum value */ 'HOUR_OF_AMPM', [
			[/* enum value description */
				[/* text */ 't', `The hour-of-am-pm.
 `],
				[/* block */ 'b', `
 This counts the hour within the AM/PM, from 0 to 11.
 This is the hour that would be observed on a standard 12-hour digital clock.
 This field has the same meaning for all calendar systems.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 When parsing this field it behaves equivalent to the following:
 The value is validated from 0 to 11 in strict and smart mode.
 In lenient mode the value is not validated. It is combined with
 `],
					[/* inline code block */ 'i', `AMPM_OF_DAY`],
					[/* text */ 't', ` to form `],
					[/* inline code block */ 'i', `HOUR_OF_DAY`],
					[/* text */ 't', ` by multiplying
 the `],
					[/* inline code block */ 'i', `AMPM_OF_DAY`],
					[/* text */ 't', ` value by 12.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 See `],
					[/* text */ 't', `CLOCK_HOUR_OF_AMPM`],
					[/* text */ 't', ` for the related field that counts hours from 1 to 12.`]
				]]
			],
		]],
		[/* enum value */ 'CLOCK_HOUR_OF_AMPM', [
			[/* enum value description */
				[/* text */ 't', `The clock-hour-of-am-pm.
 `],
				[/* block */ 'b', `
 This counts the hour within the AM/PM, from 1 to 12.
 This is the hour that would be observed on a standard 12-hour analog wall clock.
 This field has the same meaning for all calendar systems.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 When parsing this field it behaves equivalent to the following:
 The value is validated from 1 to 12 in strict mode and from
 0 to 12 in smart mode. In lenient mode the value is not validated.
 The field is converted to an `],
					[/* inline code block */ 'i', `HOUR_OF_AMPM`],
					[/* text */ 't', ` with the same value,
 unless the value is 12, in which case it is converted to 0.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 See `],
					[/* text */ 't', `HOUR_OF_AMPM`],
					[/* text */ 't', ` for the related field that counts hours from 0 to 11.`]
				]]
			],
		]],
		[/* enum value */ 'HOUR_OF_DAY', [
			[/* enum value description */
				[/* text */ 't', `The hour-of-day.
 `],
				[/* block */ 'b', `
 This counts the hour within the day, from 0 to 23.
 This is the hour that would be observed on a standard 24-hour digital clock.
 This field has the same meaning for all calendar systems.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 When parsing this field it behaves equivalent to the following:
 The value is validated in strict and smart mode but not in lenient mode.
 The field is combined with `],
					[/* inline code block */ 'i', `MINUTE_OF_HOUR`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `SECOND_OF_MINUTE`],
					[/* text */ 't', ` and
 `],
					[/* inline code block */ 'i', `NANO_OF_SECOND`],
					[/* text */ 't', ` to produce a `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', `.
 In lenient mode, any excess days are added to the parsed date, or
 made available via `],
					[/* reference */ 'r', `java.time.format.DateTimeFormatter#parsedExcessDays()`, `DateTimeFormatter.parsedExcessDays()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 See `],
					[/* text */ 't', `CLOCK_HOUR_OF_DAY`],
					[/* text */ 't', ` for the related field that counts hours from 1 to 24.`]
				]]
			],
		]],
		[/* enum value */ 'CLOCK_HOUR_OF_DAY', [
			[/* enum value description */
				[/* text */ 't', `The clock-hour-of-day.
 `],
				[/* block */ 'b', `
 This counts the hour within the day, from 1 to 24.
 This is the hour that would be observed on a 24-hour analog wall clock.
 This field has the same meaning for all calendar systems.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 When parsing this field it behaves equivalent to the following:
 The value is validated from 1 to 24 in strict mode and from
 0 to 24 in smart mode. In lenient mode the value is not validated.
 The field is converted to an `],
					[/* inline code block */ 'i', `HOUR_OF_DAY`],
					[/* text */ 't', ` with the same value,
 unless the value is 24, in which case it is converted to 0.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 See `],
					[/* text */ 't', `HOUR_OF_DAY`],
					[/* text */ 't', ` for the related field that counts hours from 0 to 23.`]
				]]
			],
		]],
		[/* enum value */ 'AMPM_OF_DAY', [
			[/* enum value description */
				[/* text */ 't', `The am-pm-of-day.
 `],
				[/* block */ 'b', `
 This counts the AM/PM within the day, from 0 (AM) to 1 (PM).
 This field has the same meaning for all calendar systems.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 When parsing this field it behaves equivalent to the following:
 The value is validated from 0 to 1 in strict and smart mode.
 In lenient mode the value is not validated. It is combined with
 `],
					[/* inline code block */ 'i', `HOUR_OF_AMPM`],
					[/* text */ 't', ` (if not present, it defaults to '6') to form
 `],
					[/* inline code block */ 'i', `HOUR_OF_DAY`],
					[/* text */ 't', ` by multiplying the `],
					[/* inline code block */ 'i', `AMPM_OF_DAY`],
					[/* text */ 't', ` value
 by 12.`]
				]]
			],
		]],
		[/* enum value */ 'DAY_OF_WEEK', [
			[/* enum value description */
				[/* text */ 't', `The day-of-week, such as Tuesday.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This represents the standard concept of the day of the week.
 In the default ISO calendar system, this has values from Monday (1) to Sunday (7).
 The `],
					[/* reference */ 'r', `java.time.DayOfWeek`, `DayOfWeek`],
					[/* text */ 't', ` class can be used to interpret the result.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Most non-ISO calendar systems also define a seven day week that aligns with ISO.
 Those calendar systems must also use the same numbering system, from Monday (1) to
 Sunday (7), which allows `],
					[/* inline code block */ 'i', `DayOfWeek`],
					[/* text */ 't', ` to be used.
 `]
				]],
				[/* block */ 'b', `
 Calendar systems that do not have a standard seven day week should implement this field
 if they have a similar concept of named or numbered days within a period similar
 to a week. It is recommended that the numbering starts from 1.`]
			],
		]],
		[/* enum value */ 'ALIGNED_DAY_OF_WEEK_IN_MONTH', [
			[/* enum value description */
				[/* text */ 't', `The aligned day-of-week within a month.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This represents concept of the count of days within the period of a week
 where the weeks are aligned to the start of the month.
 This field is typically used with `],
					[/* text */ 't', `ALIGNED_WEEK_OF_MONTH`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 For example, in a calendar systems with a seven day week, the first aligned-week-of-month
 starts on day-of-month 1, the second aligned-week starts on day-of-month 8, and so on.
 Within each of these aligned-weeks, the days are numbered from 1 to 7 and returned
 as the value of this field.
 As such, day-of-month 1 to 7 will have aligned-day-of-week values from 1 to 7.
 And day-of-month 8 to 14 will repeat this with aligned-day-of-week values from 1 to 7.
 `],
				[/* block */ 'b', `
 Calendar systems that do not have a seven day week should typically implement this
 field in the same way, but using the alternate week length.`]
			],
		]],
		[/* enum value */ 'ALIGNED_DAY_OF_WEEK_IN_YEAR', [
			[/* enum value description */
				[/* text */ 't', `The aligned day-of-week within a year.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This represents concept of the count of days within the period of a week
 where the weeks are aligned to the start of the year.
 This field is typically used with `],
					[/* text */ 't', `ALIGNED_WEEK_OF_YEAR`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 For example, in a calendar systems with a seven day week, the first aligned-week-of-year
 starts on day-of-year 1, the second aligned-week starts on day-of-year 8, and so on.
 Within each of these aligned-weeks, the days are numbered from 1 to 7 and returned
 as the value of this field.
 As such, day-of-year 1 to 7 will have aligned-day-of-week values from 1 to 7.
 And day-of-year 8 to 14 will repeat this with aligned-day-of-week values from 1 to 7.
 `],
				[/* block */ 'b', `
 Calendar systems that do not have a seven day week should typically implement this
 field in the same way, but using the alternate week length.`]
			],
		]],
		[/* enum value */ 'DAY_OF_MONTH', [
			[/* enum value description */
				[/* text */ 't', `The day-of-month.
 `],
				[/* block */ 'b', `
 This represents the concept of the day within the month.
 In the default ISO calendar system, this has values from 1 to 31 in most months.
 April, June, September, November have days from 1 to 30, while February has days
 from 1 to 28, or 29 in a leap year.
 `],
				[/* block */ 'b', `
 Non-ISO calendar systems should implement this field using the most recognized
 day-of-month values for users of the calendar system.
 Normally, this is a count of days from 1 to the length of the month.`]
			],
		]],
		[/* enum value */ 'DAY_OF_YEAR', [
			[/* enum value description */
				[/* text */ 't', `The day-of-year.
 `],
				[/* block */ 'b', `
 This represents the concept of the day within the year.
 In the default ISO calendar system, this has values from 1 to 365 in standard
 years and 1 to 366 in leap years.
 `],
				[/* block */ 'b', `
 Non-ISO calendar systems should implement this field using the most recognized
 day-of-year values for users of the calendar system.
 Normally, this is a count of days from 1 to the length of the year.
 `],
				[/* block */ 'b', `
 Note that a non-ISO calendar system may have year numbering system that changes
 at a different point to the natural reset in the month numbering. An example
 of this is the Japanese calendar system where a change of era, which resets
 the year number to 1, can happen on any date. The era and year reset also cause
 the day-of-year to be reset to 1, but not the month-of-year or day-of-month.`]
			],
		]],
		[/* enum value */ 'EPOCH_DAY', [
			[/* enum value description */
				[/* text */ 't', `The epoch-day, based on the Java epoch of 1970-01-01 (ISO).
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This field is the sequential count of days where 1970-01-01 (ISO) is zero.
 Note that this uses the `],
					[/* text */ 't', `local`],
					[/* text */ 't', ` time-line, ignoring offset and time-zone.
 `]
				]],
				[/* block */ 'b', `
 This field is strictly defined to have the same meaning in all calendar systems.
 This is necessary to ensure interoperation between calendars.
 `],
				[/* block */ 'b', `
 Range of EpochDay is between (LocalDate.MIN.toEpochDay(), LocalDate.MAX.toEpochDay())
 both inclusive.`]
			],
		]],
		[/* enum value */ 'ALIGNED_WEEK_OF_MONTH', [
			[/* enum value description */
				[/* text */ 't', `The aligned week within a month.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This represents concept of the count of weeks within the period of a month
 where the weeks are aligned to the start of the month.
 This field is typically used with `],
					[/* text */ 't', `ALIGNED_DAY_OF_WEEK_IN_MONTH`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 For example, in a calendar systems with a seven day week, the first aligned-week-of-month
 starts on day-of-month 1, the second aligned-week starts on day-of-month 8, and so on.
 Thus, day-of-month values 1 to 7 are in aligned-week 1, while day-of-month values
 8 to 14 are in aligned-week 2, and so on.
 `],
				[/* block */ 'b', `
 Calendar systems that do not have a seven day week should typically implement this
 field in the same way, but using the alternate week length.`]
			],
		]],
		[/* enum value */ 'ALIGNED_WEEK_OF_YEAR', [
			[/* enum value description */
				[/* text */ 't', `The aligned week within a year.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This represents concept of the count of weeks within the period of a year
 where the weeks are aligned to the start of the year.
 This field is typically used with `],
					[/* text */ 't', `ALIGNED_DAY_OF_WEEK_IN_YEAR`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 For example, in a calendar systems with a seven day week, the first aligned-week-of-year
 starts on day-of-year 1, the second aligned-week starts on day-of-year 8, and so on.
 Thus, day-of-year values 1 to 7 are in aligned-week 1, while day-of-year values
 8 to 14 are in aligned-week 2, and so on.
 `],
				[/* block */ 'b', `
 Calendar systems that do not have a seven day week should typically implement this
 field in the same way, but using the alternate week length.`]
			],
		]],
		[/* enum value */ 'MONTH_OF_YEAR', [
			[/* enum value description */
				[/* text */ 't', `The month-of-year, such as March.
 `],
				[/* block */ 'b', `
 This represents the concept of the month within the year.
 In the default ISO calendar system, this has values from January (1) to December (12).
 `],
				[/* block */ 'b', `
 Non-ISO calendar systems should implement this field using the most recognized
 month-of-year values for users of the calendar system.
 Normally, this is a count of months starting from 1.`]
			],
		]],
		[/* enum value */ 'PROLEPTIC_MONTH', [
			[/* enum value description */
				[/* text */ 't', `The proleptic-month based, counting months sequentially from year 0.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This field is the sequential count of months where the first month
 in proleptic-year zero has the value zero.
 Later months have increasingly larger values.
 Earlier months have increasingly small values.
 There are no gaps or breaks in the sequence of months.
 Note that this uses the `],
					[/* text */ 't', `local`],
					[/* text */ 't', ` time-line, ignoring offset and time-zone.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In the default ISO calendar system, June 2012 would have the value
 `],
					[/* inline code block */ 'i', `(2012 * 12 + 6 - 1)`],
					[/* text */ 't', `. This field is primarily for internal use.
 `]
				]],
				[/* block */ 'b', `
 Non-ISO calendar systems must implement this field as per the definition above.
 It is just a simple zero-based count of elapsed months from the start of proleptic-year 0.
 All calendar systems with a full proleptic-year definition will have a year zero.
 If the calendar system has a minimum year that excludes year zero, then one must
 be extrapolated in order for this method to be defined.`]
			],
		]],
		[/* enum value */ 'YEAR_OF_ERA', [
			[/* enum value description */
				[/* text */ 't', `The year within the era.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This represents the concept of the year within the era.
 This field is typically used with `],
					[/* text */ 't', `ERA`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The standard mental model for a date is based on three concepts - year, month and day.
 These map onto the `],
					[/* inline code block */ 'i', `YEAR`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `MONTH_OF_YEAR`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `DAY_OF_MONTH`],
					[/* text */ 't', ` fields.
 Note that there is no reference to eras.
 The full model for a date requires four concepts - era, year, month and day. These map onto
 the `],
					[/* inline code block */ 'i', `ERA`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `YEAR_OF_ERA`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `MONTH_OF_YEAR`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `DAY_OF_MONTH`],
					[/* text */ 't', ` fields.
 Whether this field or `],
					[/* inline code block */ 'i', `YEAR`],
					[/* text */ 't', ` is used depends on which mental model is being used.
 See `],
					[/* reference */ 'r', `java.time.chrono.ChronoLocalDate`, `ChronoLocalDate`],
					[/* text */ 't', ` for more discussion on this topic.
 `]
				]],
				[/* block */ 'b', `
 In the default ISO calendar system, there are two eras defined, 'BCE' and 'CE'.
 The era 'CE' is the one currently in use and year-of-era runs from 1 to the maximum value.
 The era 'BCE' is the previous era, and the year-of-era runs backwards.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 For example, subtracting a year each time yield the following:`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 - year-proleptic 2  = 'CE' year-of-era 2`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 - year-proleptic 1  = 'CE' year-of-era 1`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 - year-proleptic 0  = 'BCE' year-of-era 1`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 - year-proleptic -1 = 'BCE' year-of-era 2`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 `]
				]],
				[/* block */ 'b', `
 Note that the ISO-8601 standard does not actually define eras.
 Note also that the ISO eras do not align with the well-known AD/BC eras due to the
 change between the Julian and Gregorian calendar systems.
 `],
				[/* block */ 'b', `
 Non-ISO calendar systems should implement this field using the most recognized
 year-of-era value for users of the calendar system.
 Since most calendar systems have only two eras, the year-of-era numbering approach
 will typically be the same as that used by the ISO calendar system.
 The year-of-era value should typically always be positive, however this is not required.`]
			],
		]],
		[/* enum value */ 'YEAR', [
			[/* enum value description */
				[/* text */ 't', `The proleptic year, such as 2012.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This represents the concept of the year, counting sequentially and using negative numbers.
 The proleptic year is not interpreted in terms of the era.
 See `],
					[/* text */ 't', `YEAR_OF_ERA`],
					[/* text */ 't', ` for an example showing the mapping from proleptic year to year-of-era.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The standard mental model for a date is based on three concepts - year, month and day.
 These map onto the `],
					[/* inline code block */ 'i', `YEAR`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `MONTH_OF_YEAR`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `DAY_OF_MONTH`],
					[/* text */ 't', ` fields.
 Note that there is no reference to eras.
 The full model for a date requires four concepts - era, year, month and day. These map onto
 the `],
					[/* inline code block */ 'i', `ERA`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `YEAR_OF_ERA`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `MONTH_OF_YEAR`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `DAY_OF_MONTH`],
					[/* text */ 't', ` fields.
 Whether this field or `],
					[/* inline code block */ 'i', `YEAR_OF_ERA`],
					[/* text */ 't', ` is used depends on which mental model is being used.
 See `],
					[/* reference */ 'r', `java.time.chrono.ChronoLocalDate`, `ChronoLocalDate`],
					[/* text */ 't', ` for more discussion on this topic.
 `]
				]],
				[/* block */ 'b', `
 Non-ISO calendar systems should implement this field as follows.
 If the calendar system has only two eras, before and after a fixed date, then the
 proleptic-year value must be the same as the year-of-era value for the later era,
 and increasingly negative for the earlier era.
 If the calendar system has more than two eras, then the proleptic-year value may be
 defined with any appropriate value, although defining it to be the same as ISO may be
 the best option.`]
			],
		]],
		[/* enum value */ 'ERA', [
			[/* enum value description */
				[/* text */ 't', `The era.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This represents the concept of the era, which is the largest division of the time-line.
 This field is typically used with `],
					[/* text */ 't', `YEAR_OF_ERA`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In the default ISO calendar system, there are two eras defined, 'BCE' and 'CE'.
 The era 'CE' is the one currently in use and year-of-era runs from 1 to the maximum value.
 The era 'BCE' is the previous era, and the year-of-era runs backwards.
 See `],
					[/* text */ 't', `YEAR_OF_ERA`],
					[/* text */ 't', ` for a full example.
 `]
				]],
				[/* block */ 'b', `
 Non-ISO calendar systems should implement this field to define eras.
 The value of the era that was active on 1970-01-01 (ISO) must be assigned the value 1.
 Earlier eras must have sequentially smaller values.
 Later eras must have sequentially larger values,`]
			],
		]],
		[/* enum value */ 'INSTANT_SECONDS', [
			[/* enum value description */
				[/* text */ 't', `The instant epoch-seconds.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This represents the concept of the sequential count of seconds where
 1970-01-01T00:00Z (ISO) is zero.
 This field may be used with `],
					[/* text */ 't', `NANO_OF_SECOND`],
					[/* text */ 't', ` to represent the fraction of the second.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 An `],
					[/* reference */ 'r', `java.time.Instant`, `Instant`],
					[/* text */ 't', ` represents an instantaneous point on the time-line.
 On their own, an instant has insufficient information to allow a local date-time to be obtained.
 Only when paired with an offset or time-zone can the local date or time be calculated.
 `]
				]],
				[/* block */ 'b', `
 This field is strictly defined to have the same meaning in all calendar systems.
 This is necessary to ensure interoperation between calendars.`]
			],
		]],
		[/* enum value */ 'OFFSET_SECONDS', [
			[/* enum value description */
				[/* text */ 't', `The offset from UTC/Greenwich.
 `],
				[/* block */ 'b', `
 This represents the concept of the offset in seconds of local time from UTC/Greenwich.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A `],
					[/* reference */ 'r', `java.time.ZoneOffset`, `ZoneOffset`],
					[/* text */ 't', ` represents the period of time that local time differs from UTC/Greenwich.
 This is usually a fixed number of hours and minutes.
 It is equivalent to the `],
					[/* reference */ 'r', `java.time.ZoneOffset#getTotalSeconds()`, `total amount`],
					[/* text */ 't', ` of the offset in seconds.
 For example, during the winter Paris has an offset of `],
					[/* inline code block */ 'i', `+01:00`],
					[/* text */ 't', `, which is 3600 seconds.
 `]
				]],
				[/* block */ 'b', `
 This field is strictly defined to have the same meaning in all calendar systems.
 This is necessary to ensure interoperation between calendars.`]
			],
		]]
	],
]);
