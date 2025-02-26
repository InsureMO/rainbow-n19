import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.util.Proxy', [
	[ /* class description */
		['b', `Dynamic groovy proxy for another object.  All method
 invocations get forwarded to actual object, unless the proxy overrides it.
 See groovy/util/ProxyTest.groovy for usage details.`],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
