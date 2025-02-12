import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.ref.Cleaner', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public java.lang.ref.Cleaner$Cleanable java.lang.ref.Cleaner.register(java.lang.Object,java.lang.Runnable) */
			/* name */ 'register',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'action',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ref.Cleaner$Cleanable',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.ref.Cleaner java.lang.ref.Cleaner.create() */
			/* name */ 'create',
			/* parameters */,
			/* return */ 'java.lang.ref.Cleaner',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.ref.Cleaner java.lang.ref.Cleaner.create(java.util.concurrent.ThreadFactory) */
			/* name */ 'create',
			[/* parameters */
				[/* parameter */
					/* name */ 'threadFactory',
					/* type */ 'java.util.concurrent.ThreadFactory',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ref.Cleaner',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
