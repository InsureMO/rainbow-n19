import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.GString', [
	[ /* class description */
		['b', `Represents a String which contains embedded values such as "hello there
 \${}user} how are you?" which can be evaluated lazily. Advanced users can
 iterate over the text and values to perform special processing, such as for
 performing SQL operations, the values can be substituted for ? and the
 actual value objects can be bound to a JDBC statement.`],
		['b', `
 James Strachan: The lovely name of this class was suggested by Jules Gosnell
 and was such a good idea, I couldn't resist :)`],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
