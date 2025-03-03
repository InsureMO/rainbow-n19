import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.temporal.TemporalAccessor', [
	[/* class description */
		[/* text */ 't', `Framework-level interface defining read-only access to a temporal object,
 such as a date, time, offset or some combination of these.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 This is the base interface type for date, time and offset objects.
 It is implemented by those classes that can provide information
 as `],
			[/* reference */ 'r', `java.time.temporal.TemporalField`],
			[/* text */ 't', ` or `],
			[/* reference */ 'r', `java.time.temporal.TemporalQuery`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Most date and time information can be represented as a number.
 These are modeled using `],
			[/* inline code block */ 'i', `TemporalField`],
			[/* text */ 't', ` with the number held using
 a `],
			[/* inline code block */ 'i', `long`],
			[/* text */ 't', ` to handle large values. Year, month and day-of-month are
 simple examples of fields, but they also include instant and offsets.
 See `],
			[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`],
			[/* text */ 't', ` for the standard set of fields.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Two pieces of date/time information cannot be represented by numbers,
 the `],
			[/* reference */ 'r', `java.time.chrono.Chronology`],
			[/* text */ 't', ` and the
 `],
			[/* reference */ 'r', `java.time.ZoneId`],
			[/* text */ 't', `.
 These can be accessed via `],
			[/* reference */ 'r', `#query(java.time.temporal.TemporalQuery)`, `queries`],
			[/* text */ 't', ` using
 the static methods defined on `],
			[/* reference */ 'r', `java.time.temporal.TemporalQuery`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 A sub-interface, `],
			[/* reference */ 'r', `java.time.temporal.Temporal`],
			[/* text */ 't', `, extends this definition to one that also
 supports adjustment and manipulation on more complete temporal objects.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 This interface is a framework-level interface that should not be widely
 used in application code. Instead, applications should create and pass
 around instances of concrete types, such as `],
			[/* inline code block */ 'i', `LocalDate`],
			[/* text */ 't', `.
 There are many reasons for this, part of which is that implementations
 of this interface may be in calendar systems other than ISO.
 See `],
			[/* reference */ 'r', `java.time.chrono.ChronoLocalDate`],
			[/* text */ 't', ` for a fuller discussion of the issues.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'get(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the value of the specified field as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This queries the date-time for the value of the specified field.
 The returned value will always be within the valid range of values for the field.
 If the date-time cannot return the value, because the field is unsupported or for
 some other reason, an exception will be thrown.`]
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
				[/* text */ 't', `the value for the field, within the valid range of values`]
			]
		]],
		[/* method */ 'getLong(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the value of the specified field as a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This queries the date-time for the value of the specified field.
 The returned value may be outside the valid range of values for the field.
 If the date-time cannot return the value, because the field is unsupported or for
 some other reason, an exception will be thrown.`]
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
		[/* method */ 'query(java.time.temporal.TemporalQuery)', [
			[/* method description */
				[/* text */ 't', `Queries this date-time.
 `],
				[/* block */ 'b', `
 This queries this date-time using the specified query strategy object.
 `],
				[/* block */ 'b', `
 Queries are a key tool for extracting information from date-times.
 They exists to externalize the process of querying, permitting different
 approaches, as per the strategy design pattern.
 Examples might be a query that checks if the date is the day before February 29th
 in a leap year, or calculates the number of days to your next birthday.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The most common query implementations are method references, such as
 `],
					[/* inline code block */ 'i', `LocalDate::from`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `ZoneId::from`],
					[/* text */ 't', `.
 Additional implementations are provided as static methods on `],
					[/* reference */ 'r', `java.time.temporal.TemporalQuery`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'query', [/* parameter description */
					[/* text */ 't', `the query to invoke, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to query`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the query result, null may be returned (defined by the query)`]
			]
		]],
		[/* method */ 'range(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the range of valid values for the specified field.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 All fields can be expressed as a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` integer.
 This method returns an object that describes the valid range for that value.
 The value of this temporal object is used to enhance the accuracy of the returned range.
 If the date-time cannot return the range, because the field is unsupported or for
 some other reason, an exception will be thrown.
 `]
				]],
				[/* block */ 'b', `
 Note that the result only describes the minimum and maximum valid values
 and it is important not to read too much into them. For example, there
 could be values within the range that are invalid for the field.`]
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
		[/* method */ 'isSupported(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Checks if the specified field is supported.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This checks if the date-time can be queried for the specified field.
 If false, then calling the `],
					[/* reference */ 'r', `#range(java.time.temporal.TemporalField)`, `range`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `#get(java.time.temporal.TemporalField)`, `get`],
					[/* text */ 't', `
 methods will throw an exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to check, null returns false`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this date-time can be queried for the field, false if not`]
			]
		]]
	],
]);
