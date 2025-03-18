import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.time.Duration', [
	[/* class description */
		[/* text */ 't', `Duration represents time periods which have values independent of the context.
 So, whilst we can't say how long a month is without knowing the year and the name of the month,
 we know how long a day is independent of the date.
 `],
		[/* block */ 'b', `
 This is not 100% true for days.
 Days can actually be 23, 24 or 25 hours long (due to daylight saving adjustments.)
 `],
		[/* block */ 'b', `
 If you ask Duration to convert itself to milliseconds then it will work on the basis of 24 hours
 in a day. If you add or subtract it from a date it will take daylight saving into account.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(int,int,int,int,int)', [
			/* constructor description */,
			/* parameters */,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getFrom()', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'minus(groovy.time.DatumDependentDuration)', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'plus(groovy.time.DatumDependentDuration)', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'minus(groovy.time.Duration)', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'plus(groovy.time.Duration)', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'plus(groovy.time.TimeDuration)', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'minus(groovy.time.TimeDatumDependentDuration)', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'minus(groovy.time.TimeDuration)', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'getAgo()', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'toMilliseconds()', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
