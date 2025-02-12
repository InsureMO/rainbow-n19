import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.constant.DynamicConstantDesc', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.lang.constant.ConstantDesc */
		'java.lang.constant.ConstantDesc'
	],
	/* modifiers */ 1025,
	/* declared annotations */,
	[/* type parameters */
		[/* type variable */
			/* name */ 'T',
			[/* bounds */
				'java.lang.Object'
			],
			/* annotations */ UDF
		]
	],
	[/* declared constructors */
		[/* protected java.lang.constant.DynamicConstantDesc(java.lang.constant.DirectMethodHandleDesc,java.lang.String,java.lang.constant.ClassDesc,java.lang.constant.ConstantDesc...) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.constant.DirectMethodHandleDesc',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'java.lang.constant.ClassDesc',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg3',
					/* type */ '[Ljava.lang.constant.ConstantDesc;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 132,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public T java.lang.constant.DynamicConstantDesc.resolveConstantDesc(java.lang.invoke.MethodHandles$Lookup) throws java.lang.ReflectiveOperationException */
			/* name */ 'resolveConstantDesc',
			[/* parameters */
				[/* parameter */
					/* name */ 'lookup',
					/* type */ 'java.lang.invoke.MethodHandles$Lookup',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T']],
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
		[/* public final boolean java.lang.constant.DynamicConstantDesc.equals(java.lang.Object) */
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
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final int java.lang.constant.DynamicConstantDesc.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.constant.DynamicConstantDesc.constantName() */
			/* name */ 'constantName',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.constant.DynamicConstantDesc.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.constant.ClassDesc java.lang.constant.DynamicConstantDesc.constantType() */
			/* name */ 'constantType',
			/* parameters */,
			/* return */ 'java.lang.constant.ClassDesc',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.constant.ConstantDesc[] java.lang.constant.DynamicConstantDesc.bootstrapArgs() */
			/* name */ 'bootstrapArgs',
			/* parameters */,
			/* return */ '[Ljava.lang.constant.ConstantDesc;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.constant.DirectMethodHandleDesc java.lang.constant.DynamicConstantDesc.bootstrapMethod() */
			/* name */ 'bootstrapMethod',
			/* parameters */,
			/* return */ 'java.lang.constant.DirectMethodHandleDesc',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.List<java.lang.constant.ConstantDesc> java.lang.constant.DynamicConstantDesc.bootstrapArgsList() */
			/* name */ 'bootstrapArgsList',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.constant.ConstantDesc'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static <T> java.lang.constant.ConstantDesc java.lang.constant.DynamicConstantDesc.ofCanonical(java.lang.constant.DirectMethodHandleDesc,java.lang.String,java.lang.constant.ClassDesc,java.lang.constant.ConstantDesc[]) */
			/* name */ 'ofCanonical',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.constant.DirectMethodHandleDesc',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'java.lang.constant.ClassDesc',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg3',
					/* type */ '[Ljava.lang.constant.ConstantDesc;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.constant.ConstantDesc',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T> java.lang.constant.DynamicConstantDesc<T> java.lang.constant.DynamicConstantDesc.of(java.lang.constant.DirectMethodHandleDesc) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'bootstrapMethod',
					/* type */ 'java.lang.constant.DirectMethodHandleDesc',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.lang.constant.DynamicConstantDesc',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T> java.lang.constant.DynamicConstantDesc<T> java.lang.constant.DynamicConstantDesc.of(java.lang.constant.DirectMethodHandleDesc,java.lang.constant.ConstantDesc...) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.constant.DirectMethodHandleDesc',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ '[Ljava.lang.constant.ConstantDesc;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.lang.constant.DynamicConstantDesc',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 137,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T> java.lang.constant.DynamicConstantDesc<T> java.lang.constant.DynamicConstantDesc.ofNamed(java.lang.constant.DirectMethodHandleDesc,java.lang.String,java.lang.constant.ClassDesc,java.lang.constant.ConstantDesc...) */
			/* name */ 'ofNamed',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.constant.DirectMethodHandleDesc',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'java.lang.constant.ClassDesc',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg3',
					/* type */ '[Ljava.lang.constant.ConstantDesc;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.lang.constant.DynamicConstantDesc',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 137,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
