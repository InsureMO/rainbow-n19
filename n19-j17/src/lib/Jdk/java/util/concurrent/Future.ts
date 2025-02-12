import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.concurrent.Future', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1537,
	/* declared annotations */,
	[/* type parameters */
		[/* type variable */
			/* name */ 'V',
			[/* bounds */
				'java.lang.Object'
			],
			/* annotations */ UDF
		]
	],
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract V java.util.concurrent.Future.get(long,java.util.concurrent.TimeUnit) throws java.lang.InterruptedException,java.util.concurrent.ExecutionException,java.util.concurrent.TimeoutException */
			/* name */ 'get',
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
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'V']],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.InterruptedException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.util.concurrent.ExecutionException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.util.concurrent.TimeoutException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract V java.util.concurrent.Future.get() throws java.lang.InterruptedException,java.util.concurrent.ExecutionException */
			/* name */ 'get',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'V']],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.InterruptedException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.util.concurrent.ExecutionException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.util.concurrent.Future.cancel(boolean) */
			/* name */ 'cancel',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.util.concurrent.Future.isCancelled() */
			/* name */ 'isCancelled',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.util.concurrent.Future.isDone() */
			/* name */ 'isDone',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
