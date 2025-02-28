import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.net.SocketAddress', [
	[/* class description */
		[/* text */ 't', `This class represents a Socket Address with no protocol attachment.
 As an abstract class, it is meant to be subclassed with a specific,
 protocol dependent, implementation.
 `],
		[/* block */ 'b', `
 It provides an immutable object used by sockets for binding, connecting, or
 as returned values.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructor for subclasses to call.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
