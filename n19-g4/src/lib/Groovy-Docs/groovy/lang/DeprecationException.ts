import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.DeprecationException', [
	[ /* class description */
		['b', `Use this exception to mark a method implementation as being deprecated.

 Use the message to indicate the recommended way of calling the desired functionality.
 Make throwing this exception the only line in the method implementation, i.e. unlike
 the JavaDoc deprecated feature there is no relay to the new implementation but an early
 and deliberate halt of execution ("fail early").

 This exception is supposed to be used in the SNAPSHOT releases only. Before release, all
 references to this exception should be resolved and the according methods removed.`],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
