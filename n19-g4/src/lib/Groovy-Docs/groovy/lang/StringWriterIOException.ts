import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.StringWriterIOException', [
	[ /* class description */
		['b', `An IO exception occurred trying to append to a StringWriter which should never happen.`],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
