import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.time.TimeCategory', [
	[ /* class description */
		['b', `Apply a number of methods to allow convenient Date/Time manipulation,such as:`],
		['c', ` use (groovy.time.TimeCategory) {
     // application on numbers:
     println 1.minute.from.now
     println 10.hours.ago

     // application on dates
     def someDate = new Date()
     println someDate - 3.months
 }
 `],
	],
	UDF,
	[ /* class sees */ 'groovy.time.BaseDuration'],
	UDF, UDF, UDF
]);
