import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.invoke.VarHandle$VarHandleDesc', [
	/* super class, extends java.lang.constant.DynamicConstantDesc<java.lang.invoke.VarHandle> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.lang.invoke.VarHandle'
		],
		/* raw type */ 'java.lang.constant.DynamicConstantDesc',
		/* owner type */ UDF
	]],
	/* interfaces */,
	/* modifiers */ 25,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public java.lang.String java.lang.invoke.VarHandle$VarHandleDesc.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.constant.ClassDesc java.lang.invoke.VarHandle$VarHandleDesc.varType() */
			/* name */ 'varType',
			/* parameters */,
			/* return */ 'java.lang.constant.ClassDesc',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.VarHandle java.lang.invoke.VarHandle$VarHandleDesc.resolveConstantDesc(java.lang.invoke.MethodHandles$Lookup) throws java.lang.ReflectiveOperationException */
			/* name */ 'resolveConstantDesc',
			[/* parameters */
				[/* parameter */
					/* name */ 'lookup',
					/* type */ 'java.lang.invoke.MethodHandles$Lookup',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.VarHandle',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.ReflectiveOperationException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.VarHandle$VarHandleDesc java.lang.invoke.VarHandle$VarHandleDesc.ofArray(java.lang.constant.ClassDesc) */
			/* name */ 'ofArray',
			[/* parameters */
				[/* parameter */
					/* name */ 'arrayClass',
					/* type */ 'java.lang.constant.ClassDesc',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.VarHandle$VarHandleDesc',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.VarHandle$VarHandleDesc java.lang.invoke.VarHandle$VarHandleDesc.ofField(java.lang.constant.ClassDesc,java.lang.String,java.lang.constant.ClassDesc) */
			/* name */ 'ofField',
			[/* parameters */
				[/* parameter */
					/* name */ 'declaringClass',
					/* type */ 'java.lang.constant.ClassDesc',
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
					/* name */ 'fieldType',
					/* type */ 'java.lang.constant.ClassDesc',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.VarHandle$VarHandleDesc',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.VarHandle$VarHandleDesc java.lang.invoke.VarHandle$VarHandleDesc.ofStaticField(java.lang.constant.ClassDesc,java.lang.String,java.lang.constant.ClassDesc) */
			/* name */ 'ofStaticField',
			[/* parameters */
				[/* parameter */
					/* name */ 'declaringClass',
					/* type */ 'java.lang.constant.ClassDesc',
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
					/* name */ 'fieldType',
					/* type */ 'java.lang.constant.ClassDesc',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.VarHandle$VarHandleDesc',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
