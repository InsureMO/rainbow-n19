import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.Throwable', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.io.Serializable */
		'java.io.Serializable'
	],
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* protected java.lang.Throwable(java.lang.String,java.lang.Throwable,boolean,boolean) */
			[/* parameters */
				[/* parameter */
					/* name */ 'message',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'cause',
					/* type */ 'java.lang.Throwable',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'enableSuppression',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'writableStackTrace',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Throwable() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Throwable(java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'message',
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
		[/* public java.lang.Throwable(java.lang.String,java.lang.Throwable) */
			[/* parameters */
				[/* parameter */
					/* name */ 'message',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'cause',
					/* type */ 'java.lang.Throwable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Throwable(java.lang.Throwable) */
			[/* parameters */
				[/* parameter */
					/* name */ 'cause',
					/* type */ 'java.lang.Throwable',
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
		[/* public final synchronized java.lang.Throwable[] java.lang.Throwable.getSuppressed() */
			/* name */ 'getSuppressed',
			/* parameters */,
			/* return */ '[Ljava.lang.Throwable;',
			/* exceptions */,
			/* modifiers */ 49,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final synchronized void java.lang.Throwable.addSuppressed(java.lang.Throwable) */
			/* name */ 'addSuppressed',
			[/* parameters */
				[/* parameter */
					/* name */ 'exception',
					/* type */ 'java.lang.Throwable',
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
		[/* public java.lang.StackTraceElement[] java.lang.Throwable.getStackTrace() */
			/* name */ 'getStackTrace',
			/* parameters */,
			/* return */ '[Ljava.lang.StackTraceElement;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.Throwable.getLocalizedMessage() */
			/* name */ 'getLocalizedMessage',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.Throwable.getMessage() */
			/* name */ 'getMessage',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.Throwable.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.Throwable java.lang.Throwable.fillInStackTrace() */
			/* name */ 'fillInStackTrace',
			/* parameters */,
			/* return */ 'java.lang.Throwable',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.Throwable java.lang.Throwable.getCause() */
			/* name */ 'getCause',
			/* parameters */,
			/* return */ 'java.lang.Throwable',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.Throwable java.lang.Throwable.initCause(java.lang.Throwable) */
			/* name */ 'initCause',
			[/* parameters */
				[/* parameter */
					/* name */ 'cause',
					/* type */ 'java.lang.Throwable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Throwable',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.Throwable.printStackTrace() */
			/* name */ 'printStackTrace',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.Throwable.printStackTrace(java.io.PrintStream) */
			/* name */ 'printStackTrace',
			[/* parameters */
				[/* parameter */
					/* name */ 's',
					/* type */ 'java.io.PrintStream',
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
		[/* public void java.lang.Throwable.printStackTrace(java.io.PrintWriter) */
			/* name */ 'printStackTrace',
			[/* parameters */
				[/* parameter */
					/* name */ 's',
					/* type */ 'java.io.PrintWriter',
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
		[/* public void java.lang.Throwable.setStackTrace(java.lang.StackTraceElement[]) */
			/* name */ 'setStackTrace',
			[/* parameters */
				[/* parameter */
					/* name */ 'stackTrace',
					/* type */ '[Ljava.lang.StackTraceElement;',
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
	/* declared fields */,
	/* enum values */ UDF
]);
