import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.channels.ClosedChannelException', [
	[/* class description */
		[/* text */ 't', `Checked exception thrown when an attempt is made to invoke or complete an
 I/O operation upon channel that is closed, or at least closed to that
 operation.  That this exception is thrown does not necessarily imply that
 the channel is completely closed.  A socket channel whose write half has
 been shut down, for example, may still be open for reading.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an instance of this class.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
