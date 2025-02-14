import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.Thread', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.lang.Runnable */
		'java.lang.Runnable'
	],
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.lang.Thread() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Thread(java.lang.Runnable) */
			[/* parameters */
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Thread(java.lang.Runnable,java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Thread(java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Thread(java.lang.ThreadGroup,java.lang.Runnable) */
			[/* parameters */
				[/* parameter */
					/* name */ 'group',
					/* type */ 'java.lang.ThreadGroup',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Thread(java.lang.ThreadGroup,java.lang.Runnable,java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'group',
					/* type */ 'java.lang.ThreadGroup',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Thread(java.lang.ThreadGroup,java.lang.Runnable,java.lang.String,long) */
			[/* parameters */
				[/* parameter */
					/* name */ 'group',
					/* type */ 'java.lang.ThreadGroup',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'stackSize',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Thread(java.lang.ThreadGroup,java.lang.Runnable,java.lang.String,long,boolean) */
			[/* parameters */
				[/* parameter */
					/* name */ 'group',
					/* type */ 'java.lang.ThreadGroup',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.Runnable',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'stackSize',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'inheritThreadLocals',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Thread(java.lang.ThreadGroup,java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'group',
					/* type */ 'java.lang.ThreadGroup',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* protected java.lang.Object java.lang.Thread.clone() throws java.lang.CloneNotSupportedException */
			/* name */ 'clone',
			/* parameters */,
			/* return */ 'java.lang.Object',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.CloneNotSupportedException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.lang.Thread.isInterrupted() */
			/* name */ 'isInterrupted',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final boolean java.lang.Thread.isDaemon() */
			/* name */ 'isDaemon',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final int java.lang.Thread.getPriority() */
			/* name */ 'getPriority',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.String java.lang.Thread.getName() */
			/* name */ 'getName',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.ThreadGroup java.lang.Thread.getThreadGroup() */
			/* name */ 'getThreadGroup',
			/* parameters */,
			/* return */ 'java.lang.ThreadGroup',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final native boolean java.lang.Thread.isAlive() */
			/* name */ 'isAlive',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 273,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final synchronized void java.lang.Thread.join(long) throws java.lang.InterruptedException */
			/* name */ 'join',
			[/* parameters */
				[/* parameter */
					/* name */ 'millis',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.InterruptedException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 49,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final synchronized void java.lang.Thread.join(long,int) throws java.lang.InterruptedException */
			/* name */ 'join',
			[/* parameters */
				[/* parameter */
					/* name */ 'millis',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'nanos',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.InterruptedException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 49,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final synchronized void java.lang.Thread.setName(java.lang.String) */
			/* name */ 'setName',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 49,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final void java.lang.Thread.checkAccess() */
			/* name */ 'checkAccess',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 17,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '17'],
					['p', 'forRemoval', true]
				]
			],
			/* type parameters */ UDF
		],
		[/* public final void java.lang.Thread.join() throws java.lang.InterruptedException */
			/* name */ 'join',
			/* parameters */,
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.InterruptedException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final void java.lang.Thread.resume() */
			/* name */ 'resume',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 17,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '1.2'],
					['p', 'forRemoval', true]
				]
			],
			/* type parameters */ UDF
		],
		[/* public final void java.lang.Thread.setDaemon(boolean) */
			/* name */ 'setDaemon',
			[/* parameters */
				[/* parameter */
					/* name */ 'on',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final void java.lang.Thread.setPriority(int) */
			/* name */ 'setPriority',
			[/* parameters */
				[/* parameter */
					/* name */ 'newPriority',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final void java.lang.Thread.stop() */
			/* name */ 'stop',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 17,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '1.2'],
					['p', 'forRemoval', false]
				]
			],
			/* type parameters */ UDF
		],
		[/* public final void java.lang.Thread.suspend() */
			/* name */ 'suspend',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 17,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '1.2'],
					['p', 'forRemoval', true]
				]
			],
			/* type parameters */ UDF
		],
		[/* public int java.lang.Thread.countStackFrames() */
			/* name */ 'countStackFrames',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '1.2'],
					['p', 'forRemoval', true]
				]
			],
			/* type parameters */ UDF
		],
		[/* public java.lang.ClassLoader java.lang.Thread.getContextClassLoader() */
			/* name */ 'getContextClassLoader',
			/* parameters */,
			/* return */ 'java.lang.ClassLoader',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.StackTraceElement[] java.lang.Thread.getStackTrace() */
			/* name */ 'getStackTrace',
			/* parameters */,
			/* return */ '[Ljava.lang.StackTraceElement;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.Thread.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Thread$State java.lang.Thread.getState() */
			/* name */ 'getState',
			/* parameters */,
			/* return */ 'java.lang.Thread$State',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Thread$UncaughtExceptionHandler java.lang.Thread.getUncaughtExceptionHandler() */
			/* name */ 'getUncaughtExceptionHandler',
			/* parameters */,
			/* return */ 'java.lang.Thread$UncaughtExceptionHandler',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.lang.Thread.getId() */
			/* name */ 'getId',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static boolean java.lang.Thread.interrupted() */
			/* name */ 'interrupted',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.lang.Thread.activeCount() */
			/* name */ 'activeCount',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.lang.Thread.enumerate(java.lang.Thread[]) */
			/* name */ 'enumerate',
			[/* parameters */
				[/* parameter */
					/* name */ 'tarray',
					/* type */ '[Ljava.lang.Thread;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.Thread$UncaughtExceptionHandler java.lang.Thread.getDefaultUncaughtExceptionHandler() */
			/* name */ 'getDefaultUncaughtExceptionHandler',
			/* parameters */,
			/* return */ 'java.lang.Thread$UncaughtExceptionHandler',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Map<java.lang.Thread, java.lang.StackTraceElement[]> java.lang.Thread.getAllStackTraces() */
			/* name */ 'getAllStackTraces',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Thread',
					'[Ljava.lang.StackTraceElement;'
				],
				/* raw type */ 'java.util.Map',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native boolean java.lang.Thread.holdsLock(java.lang.Object) */
			/* name */ 'holdsLock',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native java.lang.Thread java.lang.Thread.currentThread() */
			/* name */ 'currentThread',
			/* parameters */,
			/* return */ 'java.lang.Thread',
			/* exceptions */,
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native void java.lang.Thread.sleep(long) throws java.lang.InterruptedException */
			/* name */ 'sleep',
			[/* parameters */
				[/* parameter */
					/* name */ 'millis',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.InterruptedException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native void java.lang.Thread.yield() */
			/* name */ 'yield',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static void java.lang.Thread.dumpStack() */
			/* name */ 'dumpStack',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static void java.lang.Thread.onSpinWait() */
			/* name */ 'onSpinWait',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static void java.lang.Thread.setDefaultUncaughtExceptionHandler(java.lang.Thread$UncaughtExceptionHandler) */
			/* name */ 'setDefaultUncaughtExceptionHandler',
			[/* parameters */
				[/* parameter */
					/* name */ 'eh',
					/* type */ 'java.lang.Thread$UncaughtExceptionHandler',
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
		[/* public static void java.lang.Thread.sleep(long,int) throws java.lang.InterruptedException */
			/* name */ 'sleep',
			[/* parameters */
				[/* parameter */
					/* name */ 'millis',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'nanos',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.InterruptedException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized void java.lang.Thread.start() */
			/* name */ 'start',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.Thread.interrupt() */
			/* name */ 'interrupt',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.Thread.run() */
			/* name */ 'run',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.Thread.setContextClassLoader(java.lang.ClassLoader) */
			/* name */ 'setContextClassLoader',
			[/* parameters */
				[/* parameter */
					/* name */ 'cl',
					/* type */ 'java.lang.ClassLoader',
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
		[/* public void java.lang.Thread.setUncaughtExceptionHandler(java.lang.Thread$UncaughtExceptionHandler) */
			/* name */ 'setUncaughtExceptionHandler',
			[/* parameters */
				[/* parameter */
					/* name */ 'eh',
					/* type */ 'java.lang.Thread$UncaughtExceptionHandler',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final int java.lang.Thread.MIN_PRIORITY */
			/* name */ 'MIN_PRIORITY',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.lang.Thread.NORM_PRIORITY */
			/* name */ 'NORM_PRIORITY',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.lang.Thread.MAX_PRIORITY */
			/* name */ 'MAX_PRIORITY',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
