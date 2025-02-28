import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.temporal.TemporalAmount', [
	[/* class description */
		[/* text */ 't', `Framework-level interface defining an amount of time, such as
 "6 hours", "8 days" or "2 years and 3 months".
 `],
		[/* block */ 'b', `
 This is the base interface type for amounts of time.
 An amount is distinct from a date or time-of-day in that it is not tied
 to any specific point on the time-line.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The amount can be thought of as a `],
			[/* inline code block */ 'i', `Map`],
			[/* text */ 't', ` of `],
			[/* reference */ 'r', `java.time.temporal.TemporalUnit`],
			[/* text */ 't', ` to
 `],
			[/* inline code block */ 'i', `long`],
			[/* text */ 't', `, exposed via `],
			[/* reference */ 'r', `getUnits()`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `get(TemporalUnit)`],
			[/* text */ 't', `.
 A simple case might have a single unit-value pair, such as "6 hours".
 A more complex case may have multiple unit-value pairs, such as
 "7 years, 3 months and 5 days".
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 There are two common implementations.
 `],
			[/* reference */ 'r', `java.time.Period`],
			[/* text */ 't', ` is a date-based implementation, storing years, months and days.
 `],
			[/* reference */ 'r', `java.time.Duration`],
			[/* text */ 't', ` is a time-based implementation, storing seconds and nanoseconds,
 but providing some access using other duration based units such as minutes,
 hours and fixed 24-hour days.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 This interface is a framework-level interface that should not be widely
 used in application code. Instead, applications should create and pass
 around instances of concrete types, such as `],
			[/* inline code block */ 'i', `Period`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `Duration`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'get(java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns the value of the requested unit.
 The units returned from `],
				[/* reference */ 'r', `getUnits()`],
				[/* text */ 't', ` uniquely define the
 value of the `],
				[/* inline code block */ 'i', `TemporalAmount`],
				[/* text */ 't', `.  A value must be returned
 for each unit listed in `],
				[/* inline code block */ 'i', `getUnits`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `TemporalUnit`],
					[/* text */ 't', ` for which to return the value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if a value for the unit cannot be obtained`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `unit`],
					[/* text */ 't', ` is not supported`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the long value of the unit`]
			]
		]],
		[/* method */ 'addTo(java.time.temporal.Temporal)', [
			[/* method description */
				[/* text */ 't', `Adds to the specified temporal object.
 `],
				[/* block */ 'b', `
 Adds the amount to the specified temporal object using the logic
 encapsulated in the implementing class.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 There are two equivalent ways of using this method.
 The first is to invoke this method directly.
 The second is to use `],
					[/* external link */ 'a', `Temporal.html#plus(java.time.temporal.TemporalAmount)`, `Temporal.plus(TemporalAmount)`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', `   // These two lines are equivalent, but the second approach is recommended
   dateTime = amount.addTo(dateTime);
   dateTime = dateTime.plus(adder);
 `],
				[/* text */ 't', `
 It is recommended to use the second approach, `],
				[/* inline code block */ 'i', `plus(TemporalAmount)`],
				[/* text */ 't', `,
 as it is a lot clearer to read in code.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to add the amount to, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to add`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an object of the same observable type with the addition made, not null`]
			]
		]],
		[/* method */ 'getUnits()', [
			[/* method description */
				[/* text */ 't', `Returns the list of units uniquely defining the value of this TemporalAmount.
 The list of `],
				[/* inline code block */ 'i', `TemporalUnits`],
				[/* text */ 't', ` is defined by the implementation class.
 The list is a snapshot of the units at the time `],
				[/* inline code block */ 'i', `getUnits`],
				[/* text */ 't', `
 is called and is not mutable.
 The units are ordered from longest duration to the shortest duration
 of the unit.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the List of `],
				[/* inline code block */ 'i', `TemporalUnits`],
				[/* text */ 't', `; not null`]
			]
		]],
		[/* method */ 'subtractFrom(java.time.temporal.Temporal)', [
			[/* method description */
				[/* text */ 't', `Subtracts this object from the specified temporal object.
 `],
				[/* block */ 'b', `
 Subtracts the amount from the specified temporal object using the logic
 encapsulated in the implementing class.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 There are two equivalent ways of using this method.
 The first is to invoke this method directly.
 The second is to use `],
					[/* external link */ 'a', `Temporal.html#minus(java.time.temporal.TemporalAmount)`, `Temporal.minus(TemporalAmount)`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', `   // these two lines are equivalent, but the second approach is recommended
   dateTime = amount.subtractFrom(dateTime);
   dateTime = dateTime.minus(amount);
 `],
				[/* text */ 't', `
 It is recommended to use the second approach, `],
				[/* inline code block */ 'i', `minus(TemporalAmount)`],
				[/* text */ 't', `,
 as it is a lot clearer to read in code.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to subtract the amount from, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to subtract`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an object of the same observable type with the subtraction made, not null`]
			]
		]]
	],
]);
