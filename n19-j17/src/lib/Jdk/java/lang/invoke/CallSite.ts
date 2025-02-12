import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.invoke.CallSite', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public java.lang.invoke.MethodType java.lang.invoke.CallSite.type() */
			/* name */ 'type',
			/* parameters */,
			/* return */ 'java.lang.invoke.MethodType',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.invoke.MethodHandle java.lang.invoke.CallSite.dynamicInvoker() */
			/* name */ 'dynamicInvoker',
			/* parameters */,
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.invoke.MethodHandle java.lang.invoke.CallSite.getTarget() */
			/* name */ 'getTarget',
			/* parameters */,
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract void java.lang.invoke.CallSite.setTarget(java.lang.invoke.MethodHandle) */
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
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
