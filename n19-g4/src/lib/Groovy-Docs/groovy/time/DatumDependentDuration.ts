import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.time.DatumDependentDuration', [
	[/* class description */
		[/* text */ 't', `DatumDependentDuration represents durations whose length in milliseconds 
 cannot be determined without knowing the datum point.
 `],
		[/* block */ 'b', `
 I don't know how many days in a year unless I know if it's a leap year or not.
 `],
		[/* block */ 'b', `
 I don't know how many days in a month unless I know the name of the month 
 (and if it's a leap year if the month is February)`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(int,int,int,int,int,int,int)', [
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
		[/* method */ 'plus(groovy.time.Duration)', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'plus(groovy.time.TimeDatumDependentDuration)', [
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
		[/* method */ 'plus(groovy.time.TimeDuration)', [
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
		[/* method */ 'minus(groovy.time.Duration)', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'getYears()', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'getMonths()', [
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
		]],
		[/* method */ 'toMilliseconds()', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
