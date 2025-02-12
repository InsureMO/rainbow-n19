import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.invoke.VolatileCallSite', [
	/* super class, extends java.lang.invoke.CallSite */
	'java.lang.invoke.CallSite',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.lang.invoke.VolatileCallSite(java.lang.invoke.MethodType) */
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
		[/* public java.lang.invoke.VolatileCallSite(java.lang.invoke.MethodHandle) */
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
		[/* public final java.lang.invoke.MethodHandle java.lang.invoke.VolatileCallSite.dynamicInvoker() */
			/* name */ 'dynamicInvoker',
			/* parameters */,
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.invoke.MethodHandle java.lang.invoke.VolatileCallSite.getTarget() */
			/* name */ 'getTarget',
			/* parameters */,
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.invoke.VolatileCallSite.setTarget(java.lang.invoke.MethodHandle) */
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
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
