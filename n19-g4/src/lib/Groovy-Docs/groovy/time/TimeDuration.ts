import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.time.TimeDuration', [
	[/* class description */
		[/* text */ 't', `TimeDuration represents time periods expressed in units of hours, minutes,
 seconds and milliseconds.
 `],
		[/* block */ 'b', `
 Whilst we can't say how long a month is without knowing the year and the name of the month,
 we know how long a second is independent of the date.
 `],
		[/* block */ 'b', `
 This is not 100% true for minutes.
 Minutes can be 59, 60 or 61 seconds long (due to leap seconds.)
 `],
		[/* block */ 'b', `
 If you ask Duration to convert itself to milliseconds then it will work on the basis of 60 seconds in a minute.
 If you add or subtract it from a date it will take leap seconds into account.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(int,int,int,int)', [
			/* constructor description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int,int,int,int,int)', [
			/* constructor description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getFrom()', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'plus(groovy.time.DatumDependentDuration)', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'plus(groovy.time.Duration)', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'minus(groovy.time.Duration)', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'minus(groovy.time.DatumDependentDuration)', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'getAgo()', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
