import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.Binding', [
	[ /* class description */
		['b', `Represents the variable bindings of a script which can be altered
 from outside the script object or created outside of a script and passed
 into it.`],
		['b', ` Binding instances are not supposed to be used in a multithreaded context.`],
	],
	UDF,
	/* class sees */ UDF,
	UDF, UDF, UDF
]);
