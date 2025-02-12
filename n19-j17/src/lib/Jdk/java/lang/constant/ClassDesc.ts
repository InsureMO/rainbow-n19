import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.constant.ClassDesc', [
	/* super class */,
	[/* interfaces, implements java.lang.constant.ConstantDesc, java.lang.invoke.TypeDescriptor$OfField<java.lang.constant.ClassDesc> */
		'java.lang.constant.ConstantDesc',
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.lang.constant.ClassDesc'
			],
			/* raw type */ 'java.lang.invoke.TypeDescriptor$OfField',
			/* owner type */ 'java.lang.invoke.TypeDescriptor'
		]]
	],
	/* modifiers */ 1537,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract boolean java.lang.constant.ClassDesc.equals(java.lang.Object) */
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
		[/* public default boolean java.lang.constant.ClassDesc.isArray() */
			/* name */ 'isArray',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default boolean java.lang.constant.ClassDesc.isPrimitive() */
			/* name */ 'isPrimitive',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.lang.invoke.TypeDescriptor$OfField java.lang.constant.ClassDesc.componentType() */
			/* name */ 'componentType',
			/* parameters */,
			/* return */ 'java.lang.invoke.TypeDescriptor$OfField',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.lang.constant.ClassDesc java.lang.constant.ClassDesc.componentType() */
			/* name */ 'componentType',
			/* parameters */,
			/* return */ 'java.lang.constant.ClassDesc',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.constant.ClassDesc java.lang.constant.ClassDesc.of(java.lang.String) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.constant.ClassDesc',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.constant.ClassDesc java.lang.constant.ClassDesc.of(java.lang.String,java.lang.String) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'className',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.constant.ClassDesc',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.lang.String java.lang.constant.ClassDesc.packageName() */
			/* name */ 'packageName',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.String java.lang.constant.ClassDesc.descriptorString() */
			/* name */ 'descriptorString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.constant.ClassDesc java.lang.constant.ClassDesc.ofDescriptor(java.lang.String) */
			/* name */ 'ofDescriptor',
			[/* parameters */
				[/* parameter */
					/* name */ 'depth',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.constant.ClassDesc',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.lang.invoke.TypeDescriptor$OfField java.lang.constant.ClassDesc.arrayType() */
			/* name */ 'arrayType',
			/* parameters */,
			/* return */ 'java.lang.invoke.TypeDescriptor$OfField',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.lang.constant.ClassDesc java.lang.constant.ClassDesc.arrayType(int) */
			/* name */ 'arrayType',
			[/* parameters */
				[/* parameter */
					/* name */ 'rank',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.constant.ClassDesc',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.lang.constant.ClassDesc java.lang.constant.ClassDesc.arrayType() */
			/* name */ 'arrayType',
			/* parameters */,
			/* return */ 'java.lang.constant.ClassDesc',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.lang.String java.lang.constant.ClassDesc.displayName() */
			/* name */ 'displayName',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.lang.constant.ClassDesc java.lang.constant.ClassDesc.nested(java.lang.String) */
			/* name */ 'nested',
			[/* parameters */
				[/* parameter */
					/* name */ 'nestedName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.constant.ClassDesc',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.lang.constant.ClassDesc java.lang.constant.ClassDesc.nested(java.lang.String,java.lang.String...) */
			/* name */ 'nested',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ '[Ljava.lang.String;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.constant.ClassDesc',
			/* exceptions */,
			/* modifiers */ 129,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default boolean java.lang.constant.ClassDesc.isClassOrInterface() */
			/* name */ 'isClassOrInterface',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
