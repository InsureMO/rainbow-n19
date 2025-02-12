import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.constant.MethodHandleDesc', [
	/* super class */,
	[/* interfaces, implements java.lang.constant.ConstantDesc */
		'java.lang.constant.ConstantDesc'
	],
	/* modifiers */ 1537,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract boolean java.lang.constant.MethodHandleDesc.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
		[/* public abstract java.lang.constant.MethodTypeDesc java.lang.constant.MethodHandleDesc.invocationType() */
			/* name */ 'invocationType',
			/* parameters */,
			/* return */ 'java.lang.constant.MethodTypeDesc',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.lang.constant.MethodHandleDesc java.lang.constant.MethodHandleDesc.asType(java.lang.constant.MethodTypeDesc) */
			/* name */ 'asType',
			[/* parameters */
				[/* parameter */
					/* name */ 'type',
					/* type */ 'java.lang.constant.MethodTypeDesc',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.constant.MethodHandleDesc',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.constant.DirectMethodHandleDesc java.lang.constant.MethodHandleDesc.of(java.lang.constant.DirectMethodHandleDesc$Kind,java.lang.constant.ClassDesc,java.lang.String,java.lang.String) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'kind',
					/* type */ 'java.lang.constant.DirectMethodHandleDesc$Kind',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'owner',
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
					/* name */ 'lookupDescriptor',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.constant.DirectMethodHandleDesc',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.constant.DirectMethodHandleDesc java.lang.constant.MethodHandleDesc.ofConstructor(java.lang.constant.ClassDesc,java.lang.constant.ClassDesc...) */
			/* name */ 'ofConstructor',
			[/* parameters */
				[/* parameter */
					/* name */ 'owner',
					/* type */ 'java.lang.constant.ClassDesc',
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
			/* return */ 'java.lang.constant.DirectMethodHandleDesc',
			/* exceptions */,
			/* modifiers */ 137,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.constant.DirectMethodHandleDesc java.lang.constant.MethodHandleDesc.ofField(java.lang.constant.DirectMethodHandleDesc$Kind,java.lang.constant.ClassDesc,java.lang.String,java.lang.constant.ClassDesc) */
			/* name */ 'ofField',
			[/* parameters */
				[/* parameter */
					/* name */ 'kind',
					/* type */ 'java.lang.constant.DirectMethodHandleDesc$Kind',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'owner',
					/* type */ 'java.lang.constant.ClassDesc',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'fieldName',
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
			/* return */ 'java.lang.constant.DirectMethodHandleDesc',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.constant.DirectMethodHandleDesc java.lang.constant.MethodHandleDesc.ofMethod(java.lang.constant.DirectMethodHandleDesc$Kind,java.lang.constant.ClassDesc,java.lang.String,java.lang.constant.MethodTypeDesc) */
			/* name */ 'ofMethod',
			[/* parameters */
				[/* parameter */
					/* name */ 'kind',
					/* type */ 'java.lang.constant.DirectMethodHandleDesc$Kind',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'owner',
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
					/* name */ 'lookupMethodType',
					/* type */ 'java.lang.constant.MethodTypeDesc',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.constant.DirectMethodHandleDesc',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
