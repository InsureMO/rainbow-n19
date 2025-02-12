import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.ThreadGroup', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.lang.Thread$UncaughtExceptionHandler */
		'java.lang.Thread$UncaughtExceptionHandler'
	],
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.lang.ThreadGroup(java.lang.String) */
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
		[/* public java.lang.ThreadGroup(java.lang.ThreadGroup,java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'parent',
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
		[/* public final java.lang.String java.lang.ThreadGroup.getName() */
			/* name */ 'getName',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.ThreadGroup.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.ThreadGroup.list() */
			/* name */ 'list',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.ThreadGroup java.lang.ThreadGroup.getParent() */
			/* name */ 'getParent',
			/* parameters */,
			/* return */ 'java.lang.ThreadGroup',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final void java.lang.ThreadGroup.checkAccess() */
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
		[/* public final void java.lang.ThreadGroup.setDaemon(boolean) */
			/* name */ 'setDaemon',
			[/* parameters */
				[/* parameter */
					/* name */ 'daemon',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 17,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '16'],
					['p', 'forRemoval', true]
				]
			],
			/* type parameters */ UDF
		],
		[/* public final boolean java.lang.ThreadGroup.isDaemon() */
			/* name */ 'isDaemon',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 17,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '16'],
					['p', 'forRemoval', true]
				]
			],
			/* type parameters */ UDF
		],
		[/* public final void java.lang.ThreadGroup.resume() */
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
		[/* public final void java.lang.ThreadGroup.interrupt() */
			/* name */ 'interrupt',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final int java.lang.ThreadGroup.getMaxPriority() */
			/* name */ 'getMaxPriority',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.ThreadGroup.activeCount() */
			/* name */ 'activeCount',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.ThreadGroup.enumerate(java.lang.ThreadGroup[],boolean) */
			/* name */ 'enumerate',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.ThreadGroup;',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.ThreadGroup.enumerate(java.lang.ThreadGroup[]) */
			/* name */ 'enumerate',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.ThreadGroup;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.ThreadGroup.enumerate(java.lang.Thread[]) */
			/* name */ 'enumerate',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Thread;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.ThreadGroup.enumerate(java.lang.Thread[],boolean) */
			/* name */ 'enumerate',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Thread;',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.ThreadGroup.uncaughtException(java.lang.Thread,java.lang.Throwable) */
			/* name */ 'uncaughtException',
			[/* parameters */
				[/* parameter */
					/* name */ 'ueh',
					/* type */ 'java.lang.Thread',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 't',
					/* type */ 'java.lang.Throwable',
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
		[/* public final void java.lang.ThreadGroup.stop() */
			/* name */ 'stop',
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
		[/* public final void java.lang.ThreadGroup.suspend() */
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
		[/* public final void java.lang.ThreadGroup.setMaxPriority(int) */
			/* name */ 'setMaxPriority',
			[/* parameters */
				[/* parameter */
					/* name */ 'groupsSnapshot',
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
		[/* public int java.lang.ThreadGroup.activeGroupCount() */
			/* name */ 'activeGroupCount',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final void java.lang.ThreadGroup.destroy() */
			/* name */ 'destroy',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 17,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '16'],
					['p', 'forRemoval', true]
				]
			],
			/* type parameters */ UDF
		],
		[/* public synchronized boolean java.lang.ThreadGroup.isDestroyed() */
			/* name */ 'isDestroyed',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 33,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '16'],
					['p', 'forRemoval', true]
				]
			],
			/* type parameters */ UDF
		],
		[/* public final boolean java.lang.ThreadGroup.parentOf(java.lang.ThreadGroup) */
			/* name */ 'parentOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'g',
					/* type */ 'java.lang.ThreadGroup',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.lang.ThreadGroup.allowThreadSuspension(boolean) */
			/* name */ 'allowThreadSuspension',
			[/* parameters */
				[/* parameter */
					/* name */ 'b',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
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
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
