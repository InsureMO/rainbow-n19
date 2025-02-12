import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.ProcessHandle$Info', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1545,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract java.util.Optional<java.lang.String[]> java.lang.ProcessHandle$Info.arguments() */
			/* name */ 'arguments',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'[Ljava.lang.String;'
				],
				/* raw type */ 'java.util.Optional',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Optional<java.lang.String> java.lang.ProcessHandle$Info.command() */
			/* name */ 'command',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String'
				],
				/* raw type */ 'java.util.Optional',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Optional<java.lang.String> java.lang.ProcessHandle$Info.user() */
			/* name */ 'user',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String'
				],
				/* raw type */ 'java.util.Optional',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Optional<java.lang.String> java.lang.ProcessHandle$Info.commandLine() */
			/* name */ 'commandLine',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String'
				],
				/* raw type */ 'java.util.Optional',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Optional<java.time.Instant> java.lang.ProcessHandle$Info.startInstant() */
			/* name */ 'startInstant',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.time.Instant'
				],
				/* raw type */ 'java.util.Optional',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Optional<java.time.Duration> java.lang.ProcessHandle$Info.totalCpuDuration() */
			/* name */ 'totalCpuDuration',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.time.Duration'
				],
				/* raw type */ 'java.util.Optional',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
