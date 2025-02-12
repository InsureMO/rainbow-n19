import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.nio.channels.ReadableByteChannel', [
	/* super class */,
	[/* interfaces, implements java.nio.channels.Channel */
		'java.nio.channels.Channel'
	],
	/* modifiers */ 1537,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract int java.nio.channels.ReadableByteChannel.read(java.nio.ByteBuffer) throws java.io.IOException */
			/* name */ 'read',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.ByteBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
