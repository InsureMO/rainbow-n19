import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.System', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public static void java.lang.System.exit(int) */
			/* name */ 'exit',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static void java.lang.System.runFinalization() */
			/* name */ 'runFinalization',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.String java.lang.System.getProperty(java.lang.String) */
			/* name */ 'getProperty',
			[/* parameters */
				[/* parameter */
					/* name */ 'sm',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.String java.lang.System.getProperty(java.lang.String,java.lang.String) */
			/* name */ 'getProperty',
			[/* parameters */
				[/* parameter */
					/* name */ 'def',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'sm',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native int java.lang.System.identityHashCode(java.lang.Object) */
			/* name */ 'identityHashCode',
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
			/* modifiers */ 265,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static native long java.lang.System.currentTimeMillis() */
			/* name */ 'currentTimeMillis',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 265,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static native long java.lang.System.nanoTime() */
			/* name */ 'nanoTime',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 265,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static native void java.lang.System.arraycopy(java.lang.Object,int,java.lang.Object,int,int) */
			/* name */ 'arraycopy',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg3',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg4',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 265,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static void java.lang.System.load(java.lang.String) */
			/* name */ 'load',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive']
			],
			/* type parameters */ UDF
		],
		[/* public static java.lang.SecurityManager java.lang.System.getSecurityManager() */
			/* name */ 'getSecurityManager',
			/* parameters */,
			/* return */ 'java.lang.SecurityManager',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '17'],
					['p', 'forRemoval', true]
				]
			],
			/* type parameters */ UDF
		],
		[/* public static void java.lang.System.loadLibrary(java.lang.String) */
			/* name */ 'loadLibrary',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive']
			],
			/* type parameters */ UDF
		],
		[/* public static java.io.Console java.lang.System.console() */
			/* name */ 'console',
			/* parameters */,
			/* return */ 'java.io.Console',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.nio.channels.Channel java.lang.System.inheritedChannel() throws java.io.IOException */
			/* name */ 'inheritedChannel',
			/* parameters */,
			/* return */ 'java.nio.channels.Channel',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static void java.lang.System.setSecurityManager(java.lang.SecurityManager) */
			/* name */ 'setSecurityManager',
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.lang.SecurityManager',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '17'],
					['p', 'forRemoval', true]
				],
				['jdk.internal.reflect.CallerSensitive']
			],
			/* type parameters */ UDF
		],
		[/* public static java.lang.String java.lang.System.lineSeparator() */
			/* name */ 'lineSeparator',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.String java.lang.System.setProperty(java.lang.String,java.lang.String) */
			/* name */ 'setProperty',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'sm',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.String java.lang.System.getenv(java.lang.String) */
			/* name */ 'getenv',
			[/* parameters */
				[/* parameter */
					/* name */ 'sm',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Map<java.lang.String, java.lang.String> java.lang.System.getenv() */
			/* name */ 'getenv',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String',
					'java.lang.String'
				],
				/* raw type */ 'java.util.Map',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.System$Logger java.lang.System.getLogger(java.lang.String,java.util.ResourceBundle) */
			/* name */ 'getLogger',
			[/* parameters */
				[/* parameter */
					/* name */ 'pa',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'bundle',
					/* type */ 'java.util.ResourceBundle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.System$Logger',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive']
			],
			/* type parameters */ UDF
		],
		[/* public static java.lang.System$Logger java.lang.System.getLogger(java.lang.String) */
			/* name */ 'getLogger',
			[/* parameters */
				[/* parameter */
					/* name */ 'caller',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.System$Logger',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive']
			],
			/* type parameters */ UDF
		],
		[/* public static void java.lang.System.gc() */
			/* name */ 'gc',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static void java.lang.System.setIn(java.io.InputStream) */
			/* name */ 'setIn',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.io.InputStream',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static void java.lang.System.setOut(java.io.PrintStream) */
			/* name */ 'setOut',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.io.PrintStream',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static void java.lang.System.setErr(java.io.PrintStream) */
			/* name */ 'setErr',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.io.PrintStream',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Properties java.lang.System.getProperties() */
			/* name */ 'getProperties',
			/* parameters */,
			/* return */ 'java.util.Properties',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static void java.lang.System.setProperties(java.util.Properties) */
			/* name */ 'setProperties',
			[/* parameters */
				[/* parameter */
					/* name */ 'tempProps',
					/* type */ 'java.util.Properties',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.String java.lang.System.clearProperty(java.lang.String) */
			/* name */ 'clearProperty',
			[/* parameters */
				[/* parameter */
					/* name */ 'sm',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native java.lang.String java.lang.System.mapLibraryName(java.lang.String) */
			/* name */ 'mapLibraryName',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final java.io.InputStream java.lang.System.in */
			/* name */ 'in',
			/* type */ 'java.io.InputStream',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.io.PrintStream java.lang.System.out */
			/* name */ 'out',
			/* type */ 'java.io.PrintStream',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.io.PrintStream java.lang.System.err */
			/* name */ 'err',
			/* type */ 'java.io.PrintStream',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
