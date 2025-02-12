import {UDF} from '../../../../../utils';
import {JdkClassCreateHelper} from '../../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.nio.channels.spi.AbstractInterruptibleChannel', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.nio.channels.Channel, java.nio.channels.InterruptibleChannel */
		'java.nio.channels.Channel',
		'java.nio.channels.InterruptibleChannel'
	],
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* protected java.nio.channels.spi.AbstractInterruptibleChannel() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* protected abstract void java.nio.channels.spi.AbstractInterruptibleChannel.implCloseChannel() throws java.io.IOException */
			/* name */ 'implCloseChannel',
			/* parameters */,
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1028,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected final void java.nio.channels.spi.AbstractInterruptibleChannel.begin() */
			/* name */ 'begin',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 20,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected final void java.nio.channels.spi.AbstractInterruptibleChannel.end(boolean) throws java.nio.channels.AsynchronousCloseException */
			/* name */ 'end',
			[/* parameters */
				[/* parameter */
					/* name */ 'completed',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.nio.channels.AsynchronousCloseException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 20,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final boolean java.nio.channels.spi.AbstractInterruptibleChannel.isOpen() */
			/* name */ 'isOpen',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final void java.nio.channels.spi.AbstractInterruptibleChannel.close() throws java.io.IOException */
			/* name */ 'close',
			/* parameters */,
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
