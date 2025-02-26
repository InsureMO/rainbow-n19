import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.time.DatumDependentDuration', [
	[ /* class description */
		['b', `DatumDependentDuration represents durations whose length in milliseconds 
 cannot be determined without knowing the datum point.`],
		['b', `
 I don't know how many days in a year unless I know if it's a leap year or not.
 `],
		['b', `
 I don't know how many days in a month unless I know the name of the month 
 (and if it's a leap year if the month is February)`],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
