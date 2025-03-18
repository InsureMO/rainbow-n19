import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.GroovyCallable', [
	[/* class description */
		[/* text */ 't', `A special "marker" style interface allowing Groovy classes to implement both
 Runnable and Callable yet give preference to Runnable (for backwards compatibility)
 for APIs having both Runnable and Callable methods. You should generally NOT use this
 method in your own code.`]
	],
	/* fields */,
	/* constructors */,
	/* methods */,
	/* enum values */ UDF
]);
