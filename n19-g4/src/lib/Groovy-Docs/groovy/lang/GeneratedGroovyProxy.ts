import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.GeneratedGroovyProxy', [
	[ /* class description */
		['b', `An interface implemented by some Groovy proxies which gives access to the proxied object. In particular, dynamically
 generated proxies that implement traits will implement this interface in order to give access to the proxied
 instance.`],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
