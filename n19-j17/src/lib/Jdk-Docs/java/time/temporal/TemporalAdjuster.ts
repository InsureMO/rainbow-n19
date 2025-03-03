import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.temporal.TemporalAdjuster', [
	[/* class description */
		[/* text */ 't', `Strategy for adjusting a temporal object.
 `],
		[/* block */ 'b', `
 Adjusters are a key tool for modifying temporal objects.
 They exist to externalize the process of adjustment, permitting different
 approaches, as per the strategy design pattern.
 Examples might be an adjuster that sets the date avoiding weekends, or one that
 sets the date to the last day of the month.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 There are two equivalent ways of using a `],
			[/* inline code block */ 'i', `TemporalAdjuster`],
			[/* text */ 't', `.
 The first is to invoke the method on this interface directly.
 The second is to use `],
			[/* reference */ 'r', `.Temporal#with(java.time.temporal.TemporalAdjuster)`],
			[/* text */ 't', `:
 `]
		]],
		[/* code block */ 'c', `   // these two lines are equivalent, but the second approach is recommended
   temporal = thisAdjuster.adjustInto(temporal);
   temporal = temporal.with(thisAdjuster);
 `],
		[/* text */ 't', `
 It is recommended to use the second approach, `],
		[/* inline code block */ 'i', `with(TemporalAdjuster)`],
		[/* text */ 't', `,
 as it is a lot clearer to read in code.
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 The `],
			[/* reference */ 'r', `java.time.temporal.TemporalAdjusters`],
			[/* text */ 't', ` class contains a standard set of adjusters,
 available as static methods.
 These include:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', `finding the first or last day of the month
 `],
			[/* block */ 'b', `finding the first day of next month
 `],
			[/* block */ 'b', `finding the first or last day of the year
 `],
			[/* block */ 'b', `finding the first day of next year
 `],
			[/* block */ 'b', `finding the first or last day-of-week within a month, such as "first Wednesday in June"
 `],
			[/* block */ 'b', `finding the next or previous day-of-week, such as "next Thursday"
 `]
		]],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'adjustInto(java.time.temporal.Temporal)', [
			[/* method description */
				[/* text */ 't', `Adjusts the specified temporal object.
 `],
				[/* block */ 'b', `
 This adjusts the specified temporal object using the logic
 encapsulated in the implementing class.
 Examples might be an adjuster that sets the date avoiding weekends, or one that
 sets the date to the last day of the month.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 There are two equivalent ways of using this method.
 The first is to invoke this method directly.
 The second is to use `],
					[/* reference */ 'r', `.Temporal#with(java.time.temporal.TemporalAdjuster)`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', `   // these two lines are equivalent, but the second approach is recommended
   temporal = thisAdjuster.adjustInto(temporal);
   temporal = temporal.with(thisAdjuster);
 `],
				[/* text */ 't', `
 It is recommended to use the second approach, `],
				[/* inline code block */ 'i', `with(TemporalAdjuster)`],
				[/* text */ 't', `,
 as it is a lot clearer to read in code.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to adjust, not null`]
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
				[/* text */ 't', `an object of the same observable type with the adjustment made, not null`]
			]
		]]
	],
]);
