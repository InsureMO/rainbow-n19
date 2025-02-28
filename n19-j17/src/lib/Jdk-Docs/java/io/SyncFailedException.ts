import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.SyncFailedException', [
	[/* class description */
		[/* text */ 't', `Signals that a sync operation has failed.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an SyncFailedException with a detail message.
 A detail message is a String that describes this particular exception.`]
			],
			[/* parameters */
				[/* parameter */ 'desc', [/* parameter description */
					[/* text */ 't', `a String describing the exception.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
