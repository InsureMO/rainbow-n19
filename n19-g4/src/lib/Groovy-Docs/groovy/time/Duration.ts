import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.time.Duration', [
	[ /* class description */
		['b', `Duration represents time periods which have values independent of the context.
 So, whilst we can't say how long a month is without knowing the year and the name of the month,
 we know how long a day is independent of the date.`],
		['b', `
 This is not 100% true for days.
 Days can actually be 23, 24 or 25 hours long (due to daylight saving adjustments.)
 `],
		['b', `
 If you ask Duration to convert itself to milliseconds then it will work on the basis of 24 hours
 in a day. If you add or subtract it from a date it will take daylight saving into account.`],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
