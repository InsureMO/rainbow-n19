import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.channels.Channel', [
	[/* class description */
		[/* text */ 't', `A nexus for I/O operations.

 `],
		[/* block */ 'b', ` A channel represents an open connection to an entity such as a hardware
 device, a file, a network socket, or a program component that is capable of
 performing one or more distinct I/O operations, for example reading or
 writing.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A channel is either open or closed.  A channel is open upon creation,
 and once closed it remains closed.  Once a channel is closed, any attempt to
 invoke an I/O operation upon it will cause a `],
			[/* reference */ 'r', `java.nio.channels.ClosedChannelException`, `ClosedChannelException`],
			[/* text */ 't', `
 to be thrown.  Whether or not a channel is open may be tested by invoking
 its `],
			[/* reference */ 'r', `#isOpen()`, `isOpen`],
			[/* text */ 't', ` method.

 `]
		]],
		[/* block */ 'b', ` Channels are, in general, intended to be safe for multithreaded access
 as described in the specifications of the interfaces and classes that extend
 and implement this interface.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'isOpen()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this channel is open.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this channel is open`]
			]
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this channel.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` After a channel is closed, any further attempt to invoke I/O
 operations upon it will cause a `],
					[/* reference */ 'r', `java.nio.channels.ClosedChannelException`, `ClosedChannelException`],
					[/* text */ 't', ` to be
 thrown.

 `]
				]],
				[/* block */ 'b', ` If this channel is already closed then invoking this method has no
 effect.

 `],
				[/* block */ 'b', ` This method may be invoked at any time.  If some other thread has
 already invoked it, however, then another invocation will block until
 the first invocation is complete, after which it will return without
 effect. `]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
