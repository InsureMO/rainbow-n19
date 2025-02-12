import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.nio.file.WatchService', [
	/* super class */,
	[/* interfaces, implements java.io.Closeable */
		'java.io.Closeable'
	],
	/* modifiers */ 1537,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract java.nio.file.WatchKey java.nio.file.WatchService.poll(long,java.util.concurrent.TimeUnit) throws java.lang.InterruptedException */
			/* name */ 'poll',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.concurrent.TimeUnit',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.file.WatchKey',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.InterruptedException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.file.WatchKey java.nio.file.WatchService.poll() */
			/* name */ 'poll',
			/* parameters */,
			/* return */ 'java.nio.file.WatchKey',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract void java.nio.file.WatchService.close() throws java.io.IOException */
			/* name */ 'close',
			/* parameters */,
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.file.WatchKey java.nio.file.WatchService.take() throws java.lang.InterruptedException */
			/* name */ 'take',
			/* parameters */,
			/* return */ 'java.nio.file.WatchKey',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.InterruptedException',
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
