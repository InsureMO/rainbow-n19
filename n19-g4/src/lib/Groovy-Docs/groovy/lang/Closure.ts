import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.Closure', [
	[ /* class description */
		['b', `Represents any closure object in Groovy.`],
		['b', `
 Groovy allows instances of Closures to be called in a
 short form. For example:
 `],
		['c', ` def a = 1
 def c = { a }
 assert c() == 1
 `],
		['b', `To be able to use a Closure in this way with your own
 subclass, you need to provide a doCall method with any
 signature you want to. This ensures that`],
		['r', `getMaximumNumberOfParameters()`],
		['b', `and`],
		['r', `getParameterTypes()`],
		['b', `will work too without any
 additional code. If no doCall method is provided a
 closure must be used in its long form like`],
		['c', ` def a = 1
 def c = {a}
 assert c.call() == 1
 `],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
