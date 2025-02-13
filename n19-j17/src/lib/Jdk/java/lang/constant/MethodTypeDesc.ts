import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.constant.MethodTypeDesc', [
	/* super class */,
	[/* interfaces, implements java.lang.constant.ConstantDesc, java.lang.invoke.TypeDescriptor$OfMethod<java.lang.constant.ClassDesc, java.lang.constant.MethodTypeDesc> */
		'java.lang.constant.ConstantDesc',
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.lang.constant.ClassDesc',
				'java.lang.constant.MethodTypeDesc'
			],
			/* raw type */ 'java.lang.invoke.TypeDescriptor$OfMethod',
			/* owner type */ 'java.lang.invoke.TypeDescriptor'
		]]
	],
	/* modifiers */ 1537,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract boolean java.lang.constant.MethodTypeDesc.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'o',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.lang.constant.MethodTypeDesc.parameterCount() */
			/* name */ 'parameterCount',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.constant.ClassDesc java.lang.constant.MethodTypeDesc.parameterType(int) */
			/* name */ 'parameterType',
			[/* parameters */
				[/* parameter */
					/* name */ 'index',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.constant.ClassDesc',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.constant.ClassDesc java.lang.constant.MethodTypeDesc.returnType() */
			/* name */ 'returnType',
			/* parameters */,
			/* return */ 'java.lang.constant.ClassDesc',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.constant.ClassDesc[] java.lang.constant.MethodTypeDesc.parameterArray() */
			/* name */ 'parameterArray',
			/* parameters */,
			/* return */ '[Ljava.lang.constant.ClassDesc;',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.constant.MethodTypeDesc java.lang.constant.MethodTypeDesc.changeParameterType(int,java.lang.constant.ClassDesc) */
			/* name */ 'changeParameterType',
			[/* parameters */
				[/* parameter */
					/* name */ 'index',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'paramType',
					/* type */ 'java.lang.constant.ClassDesc',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.constant.MethodTypeDesc',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.constant.MethodTypeDesc java.lang.constant.MethodTypeDesc.changeReturnType(java.lang.constant.ClassDesc) */
			/* name */ 'changeReturnType',
			[/* parameters */
				[/* parameter */
					/* name */ 'returnType',
					/* type */ 'java.lang.constant.ClassDesc',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.constant.MethodTypeDesc',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.constant.MethodTypeDesc java.lang.constant.MethodTypeDesc.dropParameterTypes(int,int) */
			/* name */ 'dropParameterTypes',
			[/* parameters */
				[/* parameter */
					/* name */ 'start',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'end',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.constant.MethodTypeDesc',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.constant.MethodTypeDesc java.lang.constant.MethodTypeDesc.insertParameterTypes(int,java.lang.constant.ClassDesc...) */
			/* name */ 'insertParameterTypes',
			[/* parameters */
				[/* parameter */
					/* name */ 'pos',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'paramTypes',
					/* type */ '[Ljava.lang.constant.ClassDesc;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.constant.MethodTypeDesc',
			/* exceptions */,
			/* modifiers */ 1153,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.List<java.lang.constant.ClassDesc> java.lang.constant.MethodTypeDesc.parameterList() */
			/* name */ 'parameterList',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.constant.ClassDesc'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.lang.String java.lang.constant.MethodTypeDesc.descriptorString() */
			/* name */ 'descriptorString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.lang.String java.lang.constant.MethodTypeDesc.displayDescriptor() */
			/* name */ 'displayDescriptor',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.constant.MethodTypeDesc java.lang.constant.MethodTypeDesc.of(java.lang.constant.ClassDesc,java.lang.constant.ClassDesc...) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'returnDesc',
					/* type */ 'java.lang.constant.ClassDesc',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'paramDescs',
					/* type */ '[Ljava.lang.constant.ClassDesc;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.constant.MethodTypeDesc',
			/* exceptions */,
			/* modifiers */ 137,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.constant.MethodTypeDesc java.lang.constant.MethodTypeDesc.ofDescriptor(java.lang.String) */
			/* name */ 'ofDescriptor',
			[/* parameters */
				[/* parameter */
					/* name */ 'descriptor',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.constant.MethodTypeDesc',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
