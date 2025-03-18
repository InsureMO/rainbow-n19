import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.channels.AsynchronousCloseException', [
	[/* class description */
		[/* text */ 't', `Checked exception received by a thread when another thread closes the
 channel or the part of the channel upon which it is blocked in an I/O
 operation.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an instance of this class.`]
			],
			/* parameters */,
			/* throws */ UDF
		]]
	],
	/* methods */,
	/* enum values */ UDF
]);
