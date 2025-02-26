import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.Interceptor', [
	[ /* class description */
		['b', `Implementers of this interface can be registered in the ProxyMetaClass for
 notifications about method calls for objects managed by the ProxyMetaClass.
 See groovy/lang/InterceptorTest.groovy for details.`],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
