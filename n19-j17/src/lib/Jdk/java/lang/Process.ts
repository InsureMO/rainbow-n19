import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.Process', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.lang.Process() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public abstract int java.lang.Process.exitValue() */
			/* name */ 'exitValue',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.lang.Process.waitFor() throws java.lang.InterruptedException */
			/* name */ 'waitFor',
			/* parameters */,
			/* return */ 'int',
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
		[/* public abstract java.io.InputStream java.lang.Process.getErrorStream() */
			/* name */ 'getErrorStream',
			/* parameters */,
			/* return */ 'java.io.InputStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.io.InputStream java.lang.Process.getInputStream() */
			/* name */ 'getInputStream',
			/* parameters */,
			/* return */ 'java.io.InputStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.io.OutputStream java.lang.Process.getOutputStream() */
			/* name */ 'getOutputStream',
			/* parameters */,
			/* return */ 'java.io.OutputStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract void java.lang.Process.destroy() */
			/* name */ 'destroy',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.lang.Process.isAlive() */
			/* name */ 'isAlive',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.lang.Process.supportsNormalTermination() */
			/* name */ 'supportsNormalTermination',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.lang.Process.waitFor(long,java.util.concurrent.TimeUnit) throws java.lang.InterruptedException */
			/* name */ 'waitFor',
			[/* parameters */
				[/* parameter */
					/* name */ 'timeout',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'unit',
					/* type */ 'java.util.concurrent.TimeUnit',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.InterruptedException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.io.BufferedReader java.lang.Process.errorReader() */
			/* name */ 'errorReader',
			/* parameters */,
			/* return */ 'java.io.BufferedReader',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.io.BufferedReader java.lang.Process.errorReader(java.nio.charset.Charset) */
			/* name */ 'errorReader',
			[/* parameters */
				[/* parameter */
					/* name */ 'charset',
					/* type */ 'java.nio.charset.Charset',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.io.BufferedReader',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.io.BufferedReader java.lang.Process.inputReader() */
			/* name */ 'inputReader',
			/* parameters */,
			/* return */ 'java.io.BufferedReader',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.io.BufferedReader java.lang.Process.inputReader(java.nio.charset.Charset) */
			/* name */ 'inputReader',
			[/* parameters */
				[/* parameter */
					/* name */ 'charset',
					/* type */ 'java.nio.charset.Charset',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.io.BufferedReader',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.io.BufferedWriter java.lang.Process.outputWriter() */
			/* name */ 'outputWriter',
			/* parameters */,
			/* return */ 'java.io.BufferedWriter',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.io.BufferedWriter java.lang.Process.outputWriter(java.nio.charset.Charset) */
			/* name */ 'outputWriter',
			[/* parameters */
				[/* parameter */
					/* name */ 'charset',
					/* type */ 'java.nio.charset.Charset',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.io.BufferedWriter',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Process java.lang.Process.destroyForcibly() */
			/* name */ 'destroyForcibly',
			/* parameters */,
			/* return */ 'java.lang.Process',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ProcessHandle java.lang.Process.toHandle() */
			/* name */ 'toHandle',
			/* parameters */,
			/* return */ 'java.lang.ProcessHandle',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ProcessHandle$Info java.lang.Process.info() */
			/* name */ 'info',
			/* parameters */,
			/* return */ 'java.lang.ProcessHandle$Info',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.concurrent.CompletableFuture<java.lang.Process> java.lang.Process.onExit() */
			/* name */ 'onExit',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Process'
				],
				/* raw type */ 'java.util.concurrent.CompletableFuture',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.Stream<java.lang.ProcessHandle> java.lang.Process.children() */
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.Stream<java.lang.ProcessHandle> java.lang.Process.descendants() */
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.lang.Process.pid() */
			/* name */ 'pid',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
