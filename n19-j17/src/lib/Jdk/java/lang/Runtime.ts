import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.Runtime', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public boolean java.lang.Runtime.removeShutdownHook(java.lang.Thread) */
			/* name */ 'removeShutdownHook',
			[/* parameters */
				[/* parameter */
					/* name */ 'hook',
					/* type */ 'java.lang.Thread',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Process java.lang.Runtime.exec(java.lang.String) throws java.io.IOException */
			/* name */ 'exec',
			[/* parameters */
				[/* parameter */
					/* name */ 'command',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Process',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Process java.lang.Runtime.exec(java.lang.String,java.lang.String[]) throws java.io.IOException */
			/* name */ 'exec',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ '[Ljava.lang.String;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Process',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Process java.lang.Runtime.exec(java.lang.String,java.lang.String[],java.io.File) throws java.io.IOException */
			/* name */ 'exec',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ '[Ljava.lang.String;',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'java.io.File',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Process',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Process java.lang.Runtime.exec(java.lang.String[]) throws java.io.IOException */
			/* name */ 'exec',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.String;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Process',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Process java.lang.Runtime.exec(java.lang.String[],java.lang.String[]) throws java.io.IOException */
			/* name */ 'exec',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.String;',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ '[Ljava.lang.String;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Process',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Process java.lang.Runtime.exec(java.lang.String[],java.lang.String[],java.io.File) throws java.io.IOException */
			/* name */ 'exec',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.String;',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ '[Ljava.lang.String;',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'java.io.File',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Process',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public native int java.lang.Runtime.availableProcessors() */
			/* name */ 'availableProcessors',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 257,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public native long java.lang.Runtime.freeMemory() */
			/* name */ 'freeMemory',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 257,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public native long java.lang.Runtime.maxMemory() */
			/* name */ 'maxMemory',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 257,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public native long java.lang.Runtime.totalMemory() */
			/* name */ 'totalMemory',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 257,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public native void java.lang.Runtime.gc() */
			/* name */ 'gc',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 257,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.Runtime java.lang.Runtime.getRuntime() */
			/* name */ 'getRuntime',
			/* parameters */,
			/* return */ 'java.lang.Runtime',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.Runtime$Version java.lang.Runtime.version() */
			/* name */ 'version',
			/* parameters */,
			/* return */ 'java.lang.Runtime$Version',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.Runtime.addShutdownHook(java.lang.Thread) */
			/* name */ 'addShutdownHook',
			[/* parameters */
				[/* parameter */
					/* name */ 'hook',
					/* type */ 'java.lang.Thread',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.Runtime.exit(int) */
			/* name */ 'exit',
			[/* parameters */
				[/* parameter */
					/* name */ 'status',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.Runtime.halt(int) */
			/* name */ 'halt',
			[/* parameters */
				[/* parameter */
					/* name */ 'status',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.Runtime.load(java.lang.String) */
			/* name */ 'load',
			[/* parameters */
				[/* parameter */
					/* name */ 'filename',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive']
			],
			/* type parameters */ UDF
		],
		[/* public void java.lang.Runtime.loadLibrary(java.lang.String) */
			/* name */ 'loadLibrary',
			[/* parameters */
				[/* parameter */
					/* name */ 'libname',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive']
			],
			/* type parameters */ UDF
		],
		[/* public void java.lang.Runtime.runFinalization() */
			/* name */ 'runFinalization',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
