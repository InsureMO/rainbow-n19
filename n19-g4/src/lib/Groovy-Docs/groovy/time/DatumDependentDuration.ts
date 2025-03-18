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
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(int,int,int,int,int,int,int)', [
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
		[/* method */ 'minus(groovy.time.Duration)', [
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
		[/* method */ 'plus(groovy.time.Duration)', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'plus(groovy.time.TimeDatumDependentDuration)', [
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
		[/* method */ 'getMonths()', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'getYears()', [
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
