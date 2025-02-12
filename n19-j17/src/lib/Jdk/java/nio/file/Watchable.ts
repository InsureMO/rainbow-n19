import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.nio.file.Watchable', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1537,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract java.nio.file.WatchKey java.nio.file.Watchable.register(java.nio.file.WatchService,java.nio.file.WatchEvent$Kind<?>[],java.nio.file.WatchEvent$Modifier...) throws java.io.IOException */
			/* name */ 'register',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.file.WatchService',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* generic array type */ 'ga', [[/* parameterized type */ 'pt', [
	[/* actual argument types */
		[/* wildcard type */ 'wt', [
			[/* upper bounds */
				'java.lang.Object'
			],
			/* lower bounds */ UDF
		]]
	],
	/* raw type */ 'java.nio.file.WatchEvent$Kind',
	/* owner type */ 'java.nio.file.WatchEvent'
]]]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ '[Ljava.nio.file.WatchEvent$Modifier;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.file.WatchKey',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1153,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.file.WatchKey java.nio.file.Watchable.register(java.nio.file.WatchService,java.nio.file.WatchEvent$Kind<?>...) throws java.io.IOException */
			/* name */ 'register',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.file.WatchService',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* generic array type */ 'ga', [[/* parameterized type */ 'pt', [
	[/* actual argument types */
		[/* wildcard type */ 'wt', [
			[/* upper bounds */
				'java.lang.Object'
			],
			/* lower bounds */ UDF
		]]
	],
	/* raw type */ 'java.nio.file.WatchEvent$Kind',
	/* owner type */ 'java.nio.file.WatchEvent'
]]]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.file.WatchKey',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1153,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
