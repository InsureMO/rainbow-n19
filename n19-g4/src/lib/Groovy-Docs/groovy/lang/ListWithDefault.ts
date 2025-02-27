import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.ListWithDefault', [
	[/* class description */
		[/* text */ 't', `A wrapper for `],
		[/* reference */ 'r', 'java.util.List'],
		[/* text */ 't', ` which automatically grows the list when either `],
		[/* reference */ 'r', `get(int)`],
		[/* text */ 't', ` or
 `],
		[/* reference */ 'r', `getAt(int)`],
		[/* text */ 't', ` is called with an index greater than or equal to `],
		[/* inline code block */ 'i', 'size()'],
		[/* text */ 't', `.`]
	],
	/* class sees */ UDF,
	/* fields */ UDF,
	UDF, UDF
]);
