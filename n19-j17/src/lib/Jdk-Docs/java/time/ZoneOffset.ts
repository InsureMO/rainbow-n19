import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.time.ZoneOffset', [
	[/* class description */
		[/* text */ 't', `A time-zone offset from Greenwich/UTC, such as `],
		[/* inline code block */ 'i', `+02:00`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', `
 A time-zone offset is the amount of time that a time-zone differs from Greenwich/UTC.
 This is usually a fixed number of hours and minutes.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Different parts of the world have different time-zone offsets.
 The rules for how offsets vary by place and time of year are captured in the
 `],
			[/* reference */ 'r', `java.time.ZoneId`, `ZoneId`],
			[/* text */ 't', ` class.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 For example, Paris is one hour ahead of Greenwich/UTC in winter and two hours
 ahead in summer. The `],
			[/* inline code block */ 'i', `ZoneId`],
			[/* text */ 't', ` instance for Paris will reference two
 `],
			[/* inline code block */ 'i', `ZoneOffset`],
			[/* text */ 't', ` instances - a `],
			[/* inline code block */ 'i', `+01:00`],
			[/* text */ 't', ` instance for winter,
 and a `],
			[/* inline code block */ 'i', `+02:00`],
			[/* text */ 't', ` instance for summer.
 `]
		]],
		[/* block */ 'b', `
 In 2008, time-zone offsets around the world extended from -12:00 to +14:00.
 To prevent any problems with that range being extended, yet still provide
 validation, the range of offsets is restricted to -18:00 to 18:00 inclusive.
 `],
		[/* block */ 'b', `
 This class is designed for use with the ISO calendar system.
 The fields of hours, minutes and seconds make assumptions that are valid for the
 standard ISO definitions of those fields. This class may be used with other
 calendar systems providing the definition of the time fields matches those
 of the ISO calendar system.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Instances of `],
			[/* inline code block */ 'i', `ZoneOffset`],
			[/* text */ 't', ` must be compared using `],
			[/* reference */ 'r', `#equals(java.lang.Object)`, `equals(java.lang.Object)`],
			[/* text */ 't', `.
 Implementations may choose to cache certain common offsets, however
 applications must not rely on such caching.
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
		[/* field */ 'MAX', [
			[/* field description */
				[/* text */ 't', `Constant for the maximum supported offset.`]
			],
		]],
		[/* field */ 'MIN', [
			[/* field description */
				[/* text */ 't', `Constant for the minimum supported offset.`]
			],
		]],
		[/* field */ 'UTC', [
			[/* field description */
				[/* text */ 't', `The time-zone offset for UTC, with an ID of 'Z'.`]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'query(java.time.temporal.TemporalQuery)', [
			[/* method description */
				[/* text */ 't', `Queries this offset using the specified query.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This queries this offset using the specified query strategy object.
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
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks if this offset is equal to another offset.
 `],
				[/* block */ 'b', `
 The comparison is based on the amount of the offset in seconds.
 This is equivalent to a comparison by ID.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to check, null returns false`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this is equal to the other offset`]
			]
		]],
		[/* method */ 'isSupported(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Checks if the specified field is supported.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This checks if this offset can be queried for the specified field.
 If false, then calling the `],
					[/* reference */ 'r', `#range(java.time.temporal.TemporalField)`, `range`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `#get(java.time.temporal.TemporalField)`, `get`],
					[/* text */ 't', ` methods will throw an exception.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is a `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
					[/* text */ 't', ` then the query is implemented here.
 The `],
					[/* inline code block */ 'i', `OFFSET_SECONDS`],
					[/* text */ 't', ` field returns true.
 All other `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', ` instances will return false.
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
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the field is supported on this offset, false if not`]
			]
		]],
		[/* method */ 'compareTo(java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Compares this offset to another offset in descending order.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The offsets are compared in the order that they occur for the same time
 of day around the world. Thus, an offset of `],
					[/* inline code block */ 'i', `+10:00`],
					[/* text */ 't', ` comes before an
 offset of `],
					[/* inline code block */ 'i', `+09:00`],
					[/* text */ 't', ` and so on down to `],
					[/* inline code block */ 'i', `-18:00`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The comparison is "consistent with equals", as defined by `],
					[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other date to compare to, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `other`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the comparator value, negative if less, positive if greater`]
			]
		]],
		[/* method */ 'get(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the value of the specified field from this offset as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This queries this offset for the value of the specified field.
 The returned value will always be within the valid range of values for the field.
 If it is not possible to return the value, because the field is not supported
 or for some other reason, an exception is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is a `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
					[/* text */ 't', ` then the query is implemented here.
 The `],
					[/* inline code block */ 'i', `OFFSET_SECONDS`],
					[/* text */ 't', ` field returns the value of the offset.
 All other `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', ` instances will throw an `],
					[/* inline code block */ 'i', `UnsupportedTemporalTypeException`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is not a `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', `, then the result of this method
 is obtained by invoking `],
					[/* inline code block */ 'i', `TemporalField.getFrom(TemporalAccessor)`],
					[/* text */ 't', `
 passing `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` as the argument. Whether the value can be obtained,
 and what the value represents, is determined by the field.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to get, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if a value for the field cannot be obtained or
         the value is outside the range of valid values for the field`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the field is not supported or
         the range of values exceeds an `],
					[/* inline code block */ 'i', `int`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value for the field`]
			]
		]],
		[/* method */ 'getTotalSeconds()', [
			[/* method description */
				[/* text */ 't', `Gets the total zone offset in seconds.
 `],
				[/* block */ 'b', `
 This is the primary way to access the offset amount.
 It returns the total of the hours, minutes and seconds fields as a
 single offset that can be added to a time.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the total zone offset amount in seconds`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `A hash code for this offset.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a suitable hash code`]
			]
		]],
		[/* method */ 'getId()', [
			[/* method description */
				[/* text */ 't', `Gets the normalized zone offset ID.
 `],
				[/* block */ 'b', `
 The ID is minor variation to the standard ISO-8601 formatted string
 for the offset. There are three formats:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `Z`],
						[/* text */ 't', ` - for UTC (ISO-8601)
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+hh:mm`],
						[/* text */ 't', ` or `],
						[/* inline code block */ 'i', `-hh:mm`],
						[/* text */ 't', ` - if the seconds are zero (ISO-8601)
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+hh:mm:ss`],
						[/* text */ 't', ` or `],
						[/* inline code block */ 'i', `-hh:mm:ss`],
						[/* text */ 't', ` - if the seconds are non-zero (not ISO-8601)
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the zone offset ID, not null`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Outputs this offset as a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `, using the normalized ID.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this offset, not null`]
			]
		]],
		[/* method */ 'adjustInto(java.time.temporal.Temporal)', [
			[/* method description */
				[/* text */ 't', `Adjusts the specified temporal object to have the same offset as this object.
 `],
				[/* block */ 'b', `
 This returns a temporal object of the same observable type as the input
 with the offset changed to be the same as this.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The adjustment is equivalent to using `],
					[/* reference */ 'r', `java.time.temporal.Temporal#with(java.time.temporal.TemporalField,long)`, `Temporal.with(TemporalField, long)`],
					[/* text */ 't', `
 passing `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#OFFSET_SECONDS`, `ChronoField.OFFSET_SECONDS`],
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
   temporal = thisOffset.adjustInto(temporal);
   temporal = temporal.with(thisOffset);
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
		[/* method */ 'range(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the range of valid values for the specified field.
 `],
				[/* block */ 'b', `
 The range object expresses the minimum and maximum valid values for a field.
 This offset is used to enhance the accuracy of the returned range.
 If it is not possible to return the range, because the field is not supported
 or for some other reason, an exception is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is a `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
					[/* text */ 't', ` then the query is implemented here.
 The `],
					[/* reference */ 'r', `#isSupported(java.time.temporal.TemporalField)`, `supported fields`],
					[/* text */ 't', ` will return
 appropriate range instances.
 All other `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', ` instances will throw an `],
					[/* inline code block */ 'i', `UnsupportedTemporalTypeException`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is not a `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', `, then the result of this method
 is obtained by invoking `],
					[/* inline code block */ 'i', `TemporalField.rangeRefinedBy(TemporalAccessor)`],
					[/* text */ 't', `
 passing `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` as the argument.
 Whether the range can be obtained is determined by the field.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to query the range for, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the range for the field cannot be obtained`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the field is not supported`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the range of valid values for the field, not null`]
			]
		]],
		[/* method */ 'getRules()', [
			[/* method description */
				[/* text */ 't', `Gets the associated time-zone rules.
 `],
				[/* block */ 'b', `
 The rules will always return this offset when queried.
 The implementation class is immutable, thread-safe and serializable.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the rules, not null`]
			]
		]],
		[/* method */ 'getLong(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the value of the specified field from this offset as a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This queries this offset for the value of the specified field.
 If it is not possible to return the value, because the field is not supported
 or for some other reason, an exception is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is a `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
					[/* text */ 't', ` then the query is implemented here.
 The `],
					[/* inline code block */ 'i', `OFFSET_SECONDS`],
					[/* text */ 't', ` field returns the value of the offset.
 All other `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', ` instances will throw an `],
					[/* inline code block */ 'i', `UnsupportedTemporalTypeException`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is not a `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', `, then the result of this method
 is obtained by invoking `],
					[/* inline code block */ 'i', `TemporalField.getFrom(TemporalAccessor)`],
					[/* text */ 't', `
 passing `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` as the argument. Whether the value can be obtained,
 and what the value represents, is determined by the field.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to get, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if a value for the field cannot be obtained`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the field is not supported`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value for the field`]
			]
		]],
		[/* method */ 'from(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `ZoneOffset`],
				[/* text */ 't', ` from a temporal object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This obtains an offset based on the specified temporal.
 A `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 A `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` represents some form of date and time information.
 This factory converts the arbitrary temporal object to an instance of `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The conversion uses the `],
					[/* reference */ 'r', `java.time.temporal.TemporalQueries#offset()`, `TemporalQueries.offset()`],
					[/* text */ 't', ` query, which relies
 on extracting the `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#OFFSET_SECONDS`, `OFFSET_SECONDS`],
					[/* text */ 't', ` field.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method matches the signature of the functional interface `],
					[/* reference */ 'r', `java.time.temporal.TemporalQuery`, `TemporalQuery`],
					[/* text */ 't', `
 allowing it to be used as a query via method reference, `],
					[/* inline code block */ 'i', `ZoneOffset::from`],
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
					[/* text */ 't', `if unable to convert to an `],
					[/* inline code block */ 'i', `ZoneOffset`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the zone-offset, not null`]
			]
		]],
		[/* method */ 'of(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `ZoneOffset`],
				[/* text */ 't', ` using the ID.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method parses the string ID of a `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', ` to
 return an instance. The parsing accepts all the formats generated by
 `],
					[/* reference */ 'r', `#getId()`, `getId()`],
					[/* text */ 't', `, plus some additional formats:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `Z`],
						[/* text */ 't', ` - for UTC
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+h`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+hh`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+hh:mm`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `-hh:mm`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+hhmm`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `-hhmm`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+hh:mm:ss`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `-hh:mm:ss`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+hhmmss`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `-hhmmss`]
					]]
				]],
				[/* text */ 't', `
 Note that ± means either the plus or minus symbol.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The ID of the returned offset will be normalized to one of the formats
 described by `],
					[/* reference */ 'r', `#getId()`, `getId()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 The maximum supported range is from +18:00 to -18:00 inclusive.`]
			],
			[/* parameters */
				[/* parameter */ 'offsetId', [/* parameter description */
					[/* text */ 't', `the offset ID, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the offset ID is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the zone-offset, not null`]
			]
		]],
		[/* method */ 'ofHours(int)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `ZoneOffset`],
				[/* text */ 't', ` using an offset in hours.`]
			],
			[/* parameters */
				[/* parameter */ 'hours', [/* parameter description */
					[/* text */ 't', `the time-zone offset in hours, from -18 to +18`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the offset is not in the required range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the zone-offset, not null`]
			]
		]],
		[/* method */ 'ofHoursMinutes(int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `ZoneOffset`],
				[/* text */ 't', ` using an offset in
 hours and minutes.
 `],
				[/* block */ 'b', `
 The sign of the hours and minutes components must match.
 Thus, if the hours is negative, the minutes must be negative or zero.
 If the hours is zero, the minutes may be positive, negative or zero.`]
			],
			[/* parameters */
				[/* parameter */ 'hours', [/* parameter description */
					[/* text */ 't', `the time-zone offset in hours, from -18 to +18`]
				]],
				[/* parameter */ 'minutes', [/* parameter description */
					[/* text */ 't', `the time-zone offset in minutes, from 0 to ±59, sign matches hours`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the offset is not in the required range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the zone-offset, not null`]
			]
		]],
		[/* method */ 'ofHoursMinutesSeconds(int,int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `ZoneOffset`],
				[/* text */ 't', ` using an offset in
 hours, minutes and seconds.
 `],
				[/* block */ 'b', `
 The sign of the hours, minutes and seconds components must match.
 Thus, if the hours is negative, the minutes and seconds must be negative or zero.`]
			],
			[/* parameters */
				[/* parameter */ 'hours', [/* parameter description */
					[/* text */ 't', `the time-zone offset in hours, from -18 to +18`]
				]],
				[/* parameter */ 'minutes', [/* parameter description */
					[/* text */ 't', `the time-zone offset in minutes, from 0 to ±59, sign matches hours and seconds`]
				]],
				[/* parameter */ 'seconds', [/* parameter description */
					[/* text */ 't', `the time-zone offset in seconds, from 0 to ±59, sign matches hours and minutes`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the offset is not in the required range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the zone-offset, not null`]
			]
		]],
		[/* method */ 'ofTotalSeconds(int)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `ZoneOffset`],
				[/* text */ 't', ` specifying the total offset in seconds
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The offset must be in the range `],
					[/* inline code block */ 'i', `-18:00`],
					[/* text */ 't', ` to `],
					[/* inline code block */ 'i', `+18:00`],
					[/* text */ 't', `, which corresponds to -64800 to +64800.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'totalSeconds', [/* parameter description */
					[/* text */ 't', `the total time-zone offset in seconds, from -64800 to +64800`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the offset is not in the required range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the ZoneOffset, not null`]
			]
		]]
	],
]);
