import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.time.BaseDuration', [
	[/* class description */
		[/* text */ 't', `Base class for date and time durations.`]
	],
	[/* class sees */ 'groovy.time.Duration'],
	[/* fields */
		[/* field */ 'years', [
			/* field description */ UDF,
		/* sees */ UDF
		]],
		[/* field */ 'months', [
			/* field description */ UDF,
		/* sees */ UDF
		]],
		[/* field */ 'days', [
			/* field description */ UDF,
		/* sees */ UDF
		]],
		[/* field */ 'hours', [
			/* field description */ UDF,
		/* sees */ UDF
		]],
		[/* field */ 'minutes', [
			/* field description */ UDF,
		/* sees */ UDF
		]],
		[/* field */ 'seconds', [
			/* field description */ UDF,
		/* sees */ UDF
		]],
		[/* field */ 'millis', [
			/* field description */ UDF,
		/* sees */ UDF
		]]
	],
	UDF, UDF
]);
