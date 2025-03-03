import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.temporal.TemporalQueries', [
	[/* class description */
		[/* text */ 't', `Common implementations of `],
		[/* inline code block */ 'i', `TemporalQuery`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 This class provides common implementations of `],
			[/* reference */ 'r', `java.time.temporal.TemporalQuery`],
			[/* text */ 't', `.
 These are defined here as they must be constants, and the definition
 of lambdas does not guarantee that. By assigning them once here,
 they become 'normal' Java constants.
 `]
		]],
		[/* block */ 'b', `
 Queries are a key tool for extracting information from temporal objects.
 They exist to externalize the process of querying, permitting different
 approaches, as per the strategy design pattern.
 Examples might be a query that checks if the date is the day before February 29th
 in a leap year, or calculates the number of days to your next birthday.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The `],
			[/* reference */ 'r', `java.time.temporal.TemporalField`],
			[/* text */ 't', ` interface provides another mechanism for querying
 temporal objects. That interface is limited to returning a `],
			[/* inline code block */ 'i', `long`],
			[/* text */ 't', `.
 By contrast, queries can return any type.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 There are two equivalent ways of using a `],
			[/* inline code block */ 'i', `TemporalQuery`],
			[/* text */ 't', `.
 The first is to invoke the method on this interface directly.
 The second is to use `],
			[/* reference */ 'r', `.TemporalAccessor#query(java.time.temporal.TemporalQuery)`],
			[/* text */ 't', `:
 `]
		]],
		[/* code block */ 'c', `   // these two lines are equivalent, but the second approach is recommended
   temporal = thisQuery.queryFrom(temporal);
   temporal = temporal.query(thisQuery);
 `],
		[/* text */ 't', `
 It is recommended to use the second approach, `],
		[/* inline code block */ 'i', `query(TemporalQuery)`],
		[/* text */ 't', `,
 as it is a lot clearer to read in code.
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 The most common implementations are method references, such as
 `],
			[/* inline code block */ 'i', `LocalDate::from`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `ZoneId::from`],
			[/* text */ 't', `.
 Additional common queries are provided to return:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', ` a Chronology,
 `],
			[/* block */ 'b', ` a LocalDate,
 `],
			[/* block */ 'b', ` a LocalTime,
 `],
			[/* block */ 'b', ` a ZoneOffset,
 `],
			[/* block */ 'b', ` a precision,
 `],
			[/* block */ 'b', ` a zone, or
 `],
			[/* block */ 'b', ` a zoneId.
 `]
		]],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'offset()', [
			[/* method description */
				[/* text */ 't', `A query for `],
				[/* inline code block */ 'i', `ZoneOffset`],
				[/* text */ 't', ` returning null if not found.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `TemporalQuery`],
					[/* text */ 't', ` that can be used to query a temporal
 object for the offset. The query will return null if the temporal
 object cannot supply an offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The query implementation examines the `],
					[/* reference */ 'r', `.ChronoField#OFFSET_SECONDS`],
					[/* text */ 't', `
 field and uses it to create a `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The method `],
					[/* reference */ 'r', `java.ZoneOffset#from(java.time.temporal.TemporalAccessor)`],
					[/* text */ 't', ` can be used as a
 `],
					[/* inline code block */ 'i', `TemporalQuery`],
					[/* text */ 't', ` via a method reference, `],
					[/* inline code block */ 'i', `ZoneOffset::from`],
					[/* text */ 't', `.
 This query and `],
					[/* inline code block */ 'i', `ZoneOffset::from`],
					[/* text */ 't', ` will return the same result if the
 temporal object contains an offset. If the temporal object does not contain
 an offset, then the method reference will throw an exception, whereas this
 query will return null.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a query that can obtain the offset of a temporal, not null`]
			]
		]],
		[/* method */ 'zoneId()', [
			[/* method description */
				[/* text */ 't', `A strict query for the `],
				[/* inline code block */ 'i', `ZoneId`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This queries a `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` for the zone.
 The zone is only returned if the date-time conceptually contains a `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', `.
 It will not be returned if the date-time only conceptually has an `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', `.
 Thus a `],
					[/* reference */ 'r', `java.time.ZonedDateTime`],
					[/* text */ 't', ` will return the result of `],
					[/* inline code block */ 'i', `getZone()`],
					[/* text */ 't', `,
 but an `],
					[/* reference */ 'r', `java.time.OffsetDateTime`],
					[/* text */ 't', ` will return null.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In most cases, applications should use `],
					[/* reference */ 'r', `#zone()`, `zone()`],
					[/* text */ 't', ` as this query is too strict.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The result from JDK classes implementing `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` is as follows:`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', ` returns null`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', ` returns null`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', ` returns null`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', ` returns the associated zone`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `OffsetTime`],
					[/* text */ 't', ` returns null`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `OffsetDateTime`],
					[/* text */ 't', ` returns null`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `ChronoLocalDate`],
					[/* text */ 't', ` returns null`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `ChronoLocalDateTime`],
					[/* text */ 't', ` returns null`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `ChronoZonedDateTime`],
					[/* text */ 't', ` returns the associated zone`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `Era`],
					[/* text */ 't', ` returns null`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `DayOfWeek`],
					[/* text */ 't', ` returns null`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `Month`],
					[/* text */ 't', ` returns null`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `Year`],
					[/* text */ 't', ` returns null`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `YearMonth`],
					[/* text */ 't', ` returns null`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `MonthDay`],
					[/* text */ 't', ` returns null`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', ` returns null`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', ` returns null`],
					[/* new line */ 'n']
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a query that can obtain the zone ID of a temporal, not null`]
			]
		]],
		[/* method */ 'chronology()', [
			[/* method description */
				[/* text */ 't', `A query for the `],
				[/* inline code block */ 'i', `Chronology`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This queries a `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` for the chronology.
 If the target `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` represents a date, or part of a date,
 then it should return the chronology that the date is expressed in.
 As a result of this definition, objects only representing time, such as
 `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', `, will return null.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The result from JDK classes implementing `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` is as follows:`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `IsoChronology.INSTANCE`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', ` returns null (does not represent a date)`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `IsoChronology.INSTANCE`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `IsoChronology.INSTANCE`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `OffsetTime`],
					[/* text */ 't', ` returns null (does not represent a date)`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `OffsetDateTime`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `IsoChronology.INSTANCE`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `ChronoLocalDate`],
					[/* text */ 't', ` returns the associated chronology`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `ChronoLocalDateTime`],
					[/* text */ 't', ` returns the associated chronology`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `ChronoZonedDateTime`],
					[/* text */ 't', ` returns the associated chronology`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `Era`],
					[/* text */ 't', ` returns the associated chronology`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `DayOfWeek`],
					[/* text */ 't', ` returns null (shared across chronologies)`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `Month`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `IsoChronology.INSTANCE`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `Year`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `IsoChronology.INSTANCE`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `YearMonth`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `IsoChronology.INSTANCE`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `MonthDay`],
					[/* text */ 't', ` returns null `],
					[/* inline code block */ 'i', `IsoChronology.INSTANCE`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', ` returns null (does not represent a date)`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', ` returns null (does not represent a date)`],
					[/* new line */ 'n']
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The method `],
					[/* reference */ 'r', `java.Chronology#from(java.time.temporal.TemporalAccessor)`],
					[/* text */ 't', ` can be used as a
 `],
					[/* inline code block */ 'i', `TemporalQuery`],
					[/* text */ 't', ` via a method reference, `],
					[/* inline code block */ 'i', `Chronology::from`],
					[/* text */ 't', `.
 That method is equivalent to this query, except that it throws an
 exception if a chronology cannot be obtained.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a query that can obtain the chronology of a temporal, not null`]
			]
		]],
		[/* method */ 'precision()', [
			[/* method description */
				[/* text */ 't', `A query for the smallest supported unit.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This queries a `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` for the time precision.
 If the target `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` represents a consistent or complete date-time,
 date or time then this must return the smallest precision actually supported.
 Note that fields such as `],
					[/* inline code block */ 'i', `NANO_OF_DAY`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `NANO_OF_SECOND`],
					[/* text */ 't', `
 are defined to always return ignoring the precision, thus this is the only
 way to find the actual smallest supported unit.
 For example, were `],
					[/* inline code block */ 'i', `GregorianCalendar`],
					[/* text */ 't', ` to implement `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', `
 it would return a precision of `],
					[/* inline code block */ 'i', `MILLIS`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The result from JDK classes implementing `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` is as follows:`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `DAYS`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `NANOS`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `NANOS`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `NANOS`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `OffsetTime`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `NANOS`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `OffsetDateTime`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `NANOS`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `ChronoLocalDate`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `DAYS`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `ChronoLocalDateTime`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `NANOS`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `ChronoZonedDateTime`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `NANOS`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `Era`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `ERAS`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `DayOfWeek`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `DAYS`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `Month`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `MONTHS`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `Year`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `YEARS`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `YearMonth`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `MONTHS`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `MonthDay`],
					[/* text */ 't', ` returns null (does not represent a complete date or time)`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', ` returns null (does not represent a date or time)`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `NANOS`],
					[/* new line */ 'n']
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a query that can obtain the precision of a temporal, not null`]
			]
		]],
		[/* method */ 'zone()', [
			[/* method description */
				[/* text */ 't', `A lenient query for the `],
				[/* inline code block */ 'i', `ZoneId`],
				[/* text */ 't', `, falling back to the `],
				[/* inline code block */ 'i', `ZoneOffset`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This queries a `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` for the zone.
 It first tries to obtain the zone, using `],
					[/* reference */ 'r', `#zoneId()`, `zoneId()`],
					[/* text */ 't', `.
 If that is not found it tries to obtain the `],
					[/* reference */ 'r', `#offset()`, `offset()`],
					[/* text */ 't', `.
 Thus a `],
					[/* reference */ 'r', `java.time.ZonedDateTime`],
					[/* text */ 't', ` will return the result of `],
					[/* inline code block */ 'i', `getZone()`],
					[/* text */ 't', `,
 while an `],
					[/* reference */ 'r', `java.time.OffsetDateTime`],
					[/* text */ 't', ` will return the result of `],
					[/* inline code block */ 'i', `getOffset()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In most cases, applications should use this query rather than `],
					[/* inline code block */ 'i', `#zoneId()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The method `],
					[/* reference */ 'r', `java.ZoneId#from(java.time.temporal.TemporalAccessor)`],
					[/* text */ 't', ` can be used as a
 `],
					[/* inline code block */ 'i', `TemporalQuery`],
					[/* text */ 't', ` via a method reference, `],
					[/* inline code block */ 'i', `ZoneId::from`],
					[/* text */ 't', `.
 That method is equivalent to this query, except that it throws an
 exception if a zone cannot be obtained.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a query that can obtain the zone ID or offset of a temporal, not null`]
			]
		]],
		[/* method */ 'localTime()', [
			[/* method description */
				[/* text */ 't', `A query for `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` returning null if not found.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `TemporalQuery`],
					[/* text */ 't', ` that can be used to query a temporal
 object for the local time. The query will return null if the temporal
 object cannot supply a local time.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The query implementation examines the `],
					[/* reference */ 'r', `.ChronoField#NANO_OF_DAY`],
					[/* text */ 't', `
 field and uses it to create a `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The method `],
					[/* reference */ 'r', `java.ZoneOffset#from(java.time.temporal.TemporalAccessor)`],
					[/* text */ 't', ` can be used as a
 `],
					[/* inline code block */ 'i', `TemporalQuery`],
					[/* text */ 't', ` via a method reference, `],
					[/* inline code block */ 'i', `LocalTime::from`],
					[/* text */ 't', `.
 This query and `],
					[/* inline code block */ 'i', `LocalTime::from`],
					[/* text */ 't', ` will return the same result if the
 temporal object contains a time. If the temporal object does not contain
 a time, then the method reference will throw an exception, whereas this
 query will return null.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a query that can obtain the time of a temporal, not null`]
			]
		]],
		[/* method */ 'localDate()', [
			[/* method description */
				[/* text */ 't', `A query for `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` returning null if not found.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `TemporalQuery`],
					[/* text */ 't', ` that can be used to query a temporal
 object for the local date. The query will return null if the temporal
 object cannot supply a local date.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The query implementation examines the `],
					[/* reference */ 'r', `.ChronoField#EPOCH_DAY`],
					[/* text */ 't', `
 field and uses it to create a `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The method `],
					[/* reference */ 'r', `java.ZoneOffset#from(java.time.temporal.TemporalAccessor)`],
					[/* text */ 't', ` can be used as a
 `],
					[/* inline code block */ 'i', `TemporalQuery`],
					[/* text */ 't', ` via a method reference, `],
					[/* inline code block */ 'i', `LocalDate::from`],
					[/* text */ 't', `.
 This query and `],
					[/* inline code block */ 'i', `LocalDate::from`],
					[/* text */ 't', ` will return the same result if the
 temporal object contains a date. If the temporal object does not contain
 a date, then the method reference will throw an exception, whereas this
 query will return null.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a query that can obtain the date of a temporal, not null`]
			]
		]]
	],
]);
