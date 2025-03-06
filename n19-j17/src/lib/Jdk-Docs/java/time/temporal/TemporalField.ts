import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.temporal.TemporalField', [
	[/* class description */
		[/* text */ 't', `A field of date-time, such as month-of-year or minute-of-hour.
 `],
		[/* block */ 'b', `
 Date and time is expressed using fields which partition the time-line into something
 meaningful for humans. Implementations of this interface represent those fields.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The most commonly used units are defined in `],
			[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
			[/* text */ 't', `.
 Further fields are supplied in `],
			[/* reference */ 'r', `java.time.temporal.IsoFields`, `IsoFields`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.time.temporal.WeekFields`, `WeekFields`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `java.time.temporal.JulianFields`, `JulianFields`],
			[/* text */ 't', `.
 Fields can also be written by application code by implementing this interface.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The field works using double dispatch. Client code calls methods on a date-time like
 `],
			[/* inline code block */ 'i', `LocalDateTime`],
			[/* text */ 't', ` which check if the field is a `],
			[/* inline code block */ 'i', `ChronoField`],
			[/* text */ 't', `.
 If it is, then the date-time must handle it.
 Otherwise, the method call is re-dispatched to the matching method in this interface.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'adjustInto(java.time.temporal.Temporal,long)', [
			[/* method description */
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
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to adjust, not null`]
				]],
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `the new value of the field`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the field cannot be set`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the field is not supported by the temporal`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the adjusted temporal object, not null`]
			]
		]],
		[/* method */ 'isDateBased()', [
			[/* method description */
				[/* text */ 't', `Checks if this field represents a component of a date.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A field is date-based if it can be derived from
 `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#EPOCH_DAY`, `EPOCH_DAY`],
					[/* text */ 't', `.
 Note that it is valid for both `],
					[/* inline code block */ 'i', `isDateBased()`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `isTimeBased()`],
					[/* text */ 't', `
 to return false, such as when representing a field like minute-of-week.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this field is a component of a date`]
			]
		]],
		[/* method */ 'isSupportedBy(java.time.temporal.TemporalAccessor)', [
			[/* method description */
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
				[/* block */ 'b', [
					[/* text */ 't', `
 A field is time-based if it can be derived from
 `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#NANO_OF_DAY`, `NANO_OF_DAY`],
					[/* text */ 't', `.
 Note that it is valid for both `],
					[/* inline code block */ 'i', `isDateBased()`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `isTimeBased()`],
					[/* text */ 't', `
 to return false, such as when representing a field like minute-of-week.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this field is a component of a time`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Gets a descriptive name for the field.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The should be of the format 'BaseOfRange', such as 'MonthOfYear',
 unless the field has a range of `],
					[/* inline code block */ 'i', `FOREVER`],
					[/* text */ 't', `, when only
 the base unit is mentioned, such as 'Year' or 'Era'.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of the field, not null`]
			]
		]],
		[/* method */ 'getBaseUnit()', [
			[/* method description */
				[/* text */ 't', `Gets the unit that the field is measured in.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The unit of the field is the period that varies within the range.
 For example, in the field 'MonthOfYear', the unit is 'Months'.
 See also `],
					[/* reference */ 'r', `#getRangeUnit()`, `getRangeUnit()`],
					[/* text */ 't', `.`]
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
				[/* text */ 't', `Gets the range that the field is bound by.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The range of the field is the period that the field varies within.
 For example, in the field 'MonthOfYear', the range is 'Years'.
 See also `],
					[/* reference */ 'r', `#getBaseUnit()`, `getBaseUnit()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 The range is never null. For example, the 'Year' field is shorthand for
 'YearOfForever'. It therefore has a unit of 'Years' and a range of 'Forever'.`]
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
 This method is generally only applicable to the ISO-8601 calendar system.
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
				[/* text */ 't', `Get the range of valid values for this field using the temporal object to
 refine the result.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This uses the temporal object to find the range of valid values for the field.
 This is similar to `],
					[/* reference */ 'r', `#range()`, `range()`],
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
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object used to refine the result, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the range for the field cannot be obtained`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the field is not supported by the temporal`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the range of valid values for this field, not null`]
			]
		]],
		[/* method */ 'getFrom(java.time.temporal.TemporalAccessor)', [
			[/* method description */
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
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to query, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if a value for the field cannot be obtained`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the field is not supported by the temporal`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of this field, not null`]
			]
		]],
		[/* method */ 'getDisplayName(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Gets the display name for the field in the requested locale.
 `],
				[/* block */ 'b', `
 If there is no display name for the locale then a suitable default must be returned.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The default implementation must check the locale is not null
 and return `],
					[/* inline code block */ 'i', `toString()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale to use, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the display name for the locale or a suitable default, not null`]
			]
		]],
		[/* method */ 'resolve(java.util.Map,java.time.temporal.TemporalAccessor,java.time.format.ResolverStyle)', [
			[/* method description */
				[/* text */ 't', `Resolves this field to provide a simpler alternative or a date.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is invoked during the resolve phase of parsing.
 It is designed to allow application defined fields to be simplified into
 more standard fields, such as those on `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', `, or into a date.
 `]
				]],
				[/* block */ 'b', `
 Applications should not normally invoke this method directly.`]
			],
			[/* parameters */
				[/* parameter */ 'fieldValues', [/* parameter description */
					[/* text */ 't', `the map of fields to values, which can be updated, not null`]
				]],
				[/* parameter */ 'partialTemporal', [/* parameter description */
					[/* text */ 't', `the partially complete temporal to query for zone and
  chronology; querying for other things is undefined and not recommended, not null`]
				]],
				[/* parameter */ 'resolverStyle', [/* parameter description */
					[/* text */ 't', `the requested type of resolve, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]],
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if resolving results in an error. This must not be thrown
  by querying a field on the temporal without first checking if it is supported`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the resolved temporal object; null if resolving only
  changed the map, or no resolve occurred`]
			]
		]]
	],
]);
