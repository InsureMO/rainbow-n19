import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.invoke.MutableCallSite', [
	/* super class, extends java.lang.invoke.CallSite */
	'java.lang.invoke.CallSite',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.lang.invoke.MutableCallSite(java.lang.invoke.MethodType) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.invoke.MethodType',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.MutableCallSite(java.lang.invoke.MethodHandle) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.invoke.MethodHandle',
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
		[/* public final java.lang.invoke.MethodHandle java.lang.invoke.MutableCallSite.dynamicInvoker() */
			/* name */ 'dynamicInvoker',
			/* parameters */,
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.invoke.MethodHandle java.lang.invoke.MutableCallSite.getTarget() */
			/* name */ 'getTarget',
			/* parameters */,
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.invoke.MutableCallSite.setTarget(java.lang.invoke.MethodHandle) */
			/* name */ 'setTarget',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.invoke.MethodHandle',
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
		[/* public static void java.lang.invoke.MutableCallSite.syncAll(java.lang.invoke.MutableCallSite[]) */
			/* name */ 'syncAll',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.invoke.MutableCallSite;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
