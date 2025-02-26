import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.BenchmarkInterceptor', [
	[ /* class description */
		['b', `Interceptor that registers the timestamp of each method call
 before and after invocation. The timestamps are stored internally
 and can be retrieved through the with the`],
		['c', `getCalls()`],
		['b', `and`],
		['c', `statistic()`],
		['b', `API.`],
		['b', `
 Example usage:
 `],
		['c', ` def proxy = ProxyMetaClass.getInstance(ArrayList.class)
 proxy.interceptor = new BenchmarkInterceptor()
 proxy.use {
     def list = (0..10000).collect{ it }
     4.times { list.size() }
     4000.times { list.set(it, it+1) }
 }
 proxy.interceptor.statistic()
 `],
		['b', `Which produces the following output:`],
		['c', ` [[size, 4, 0], [set, 4000, 21]]
 `],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
