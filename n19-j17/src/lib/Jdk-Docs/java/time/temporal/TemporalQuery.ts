import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.temporal.TemporalQuery', [
	[/* class description */
		[/* text */ 't', `Strategy for querying a temporal object.
 `],
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
			[/* reference */ 'r', `java.time.temporal.TemporalField`, `TemporalField`],
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
			[/* reference */ 'r', `java.time.temporal.TemporalAccessor#query(java.time.temporal.TemporalQuery)`, `TemporalAccessor.query(TemporalQuery)`],
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
 Additional common queries are provided as static methods in `],
			[/* reference */ 'r', `java.time.temporal.TemporalQueries`, `TemporalQueries`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'queryFrom(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* text */ 't', `Queries the specified temporal object.
 `],
				[/* block */ 'b', `
 This queries the specified temporal object to return an object using the logic
 encapsulated in the implementing class.
 Examples might be a query that checks if the date is the day before February 29th
 in a leap year, or calculates the number of days to your next birthday.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 There are two equivalent ways of using this method.
 The first is to invoke this method directly.
 The second is to use `],
					[/* reference */ 'r', `java.time.temporal.TemporalAccessor#query(java.time.temporal.TemporalQuery)`, `TemporalAccessor.query(TemporalQuery)`],
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
 as it is a lot clearer to read in code.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to query, not null`]
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
				[/* text */ 't', `the queried value, may return null to indicate not found`]
			]
		]]
	],
]);
