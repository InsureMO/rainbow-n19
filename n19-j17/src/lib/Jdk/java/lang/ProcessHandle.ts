import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.ProcessHandle', [
	/* super class */,
	[/* interfaces, implements java.lang.Comparable<java.lang.ProcessHandle> */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.lang.ProcessHandle'
			],
			/* raw type */ 'java.lang.Comparable',
			/* owner type */ UDF
		]]
	],
	/* modifiers */ 1537,
	[/* declared annotations */
		['jdk.internal.ValueBased']
	],
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract java.util.Optional<java.lang.ProcessHandle> java.lang.ProcessHandle.parent() */
			/* name */ 'parent',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.ProcessHandle'
				],
				/* raw type */ 'java.util.Optional',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.lang.ProcessHandle.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Object',
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
		[/* public abstract int java.lang.ProcessHandle.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.lang.ProcessHandle.compareTo(java.lang.ProcessHandle) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.ProcessHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default int java.lang.ProcessHandle.compareTo(java.lang.Object) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Optional<java.lang.ProcessHandle> java.lang.ProcessHandle.of(long) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.ProcessHandle'
				],
				/* raw type */ 'java.util.Optional',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.ProcessHandle$Info java.lang.ProcessHandle.info() */
			/* name */ 'info',
			/* parameters */,
			/* return */ 'java.lang.ProcessHandle$Info',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.ProcessHandle java.lang.ProcessHandle.current() */
			/* name */ 'current',
			/* parameters */,
			/* return */ 'java.lang.ProcessHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.lang.ProcessHandle.isAlive() */
			/* name */ 'isAlive',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.lang.ProcessHandle.destroy() */
			/* name */ 'destroy',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract long java.lang.ProcessHandle.pid() */
			/* name */ 'pid',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.Stream<java.lang.ProcessHandle> java.lang.ProcessHandle.children() */
			/* name */ 'children',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.ProcessHandle'
				],
				/* raw type */ 'java.util.stream.Stream',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.Stream<java.lang.ProcessHandle> java.lang.ProcessHandle.descendants() */
			/* name */ 'descendants',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.ProcessHandle'
				],
				/* raw type */ 'java.util.stream.Stream',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.lang.ProcessHandle.destroyForcibly() */
			/* name */ 'destroyForcibly',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.lang.ProcessHandle.supportsNormalTermination() */
			/* name */ 'supportsNormalTermination',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.concurrent.CompletableFuture<java.lang.ProcessHandle> java.lang.ProcessHandle.onExit() */
			/* name */ 'onExit',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.ProcessHandle'
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.Stream<java.lang.ProcessHandle> java.lang.ProcessHandle.allProcesses() */
			/* name */ 'allProcesses',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.ProcessHandle'
				],
				/* raw type */ 'java.util.stream.Stream',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
