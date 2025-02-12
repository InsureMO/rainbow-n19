import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.invoke.ConstantCallSite', [
	/* super class, extends java.lang.invoke.CallSite */
	'java.lang.invoke.CallSite',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* protected java.lang.invoke.ConstantCallSite(java.lang.invoke.MethodType,java.lang.invoke.MethodHandle) throws java.lang.Throwable */
			[/* parameters */
				[/* parameter */
					/* name */ 'targetType',
					/* type */ 'java.lang.invoke.MethodType',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'createTargetHook',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.Throwable',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.ConstantCallSite(java.lang.invoke.MethodHandle) */
			[/* parameters */
				[/* parameter */
					/* name */ 'target',
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
		[/* public final java.lang.invoke.MethodHandle java.lang.invoke.ConstantCallSite.dynamicInvoker() */
			/* name */ 'dynamicInvoker',
			/* parameters */,
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.invoke.MethodHandle java.lang.invoke.ConstantCallSite.getTarget() */
			/* name */ 'getTarget',
			/* parameters */,
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final void java.lang.invoke.ConstantCallSite.setTarget(java.lang.invoke.MethodHandle) */
			/* name */ 'setTarget',
			[/* parameters */
				[/* parameter */
					/* name */ 'ignore',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
