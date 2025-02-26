import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.GroovyInterceptable', [
	[ /* class description */
		['b', `Marker interface used to notify that all methods should be intercepted through the`],
		['i', 'invokeMethod'],
		['b', `mechanism
 of`],
		['i', 'GroovyObject'],
		['b', `.`],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
