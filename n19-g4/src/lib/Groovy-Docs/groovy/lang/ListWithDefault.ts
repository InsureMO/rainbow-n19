import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.ListWithDefault', [
	[ /* class description */
		['b', `A wrapper for`],
		['r', 'java.util.List'],
		['b', `which automatically grows the list when either`],
		['r', `get(int)`],
		['b', `or`],
		['r', `getAt(int)`],
		['b', `is called with an index greater than or equal to`],
		['i', 'size()'],
		['b', `.`],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
