import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.Enum$EnumDesc', [
	/* super class, extends java.lang.constant.DynamicConstantDesc<E> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			[/* type variable ref */ 'tr', [/* name */ 'E']]
		],
		/* raw type */ 'java.lang.constant.DynamicConstantDesc',
		/* owner type */ UDF
	]],
	/* interfaces */,
	/* modifiers */ 25,
	/* declared annotations */,
	[/* type parameters */
		[/* type variable */
			/* name */ 'E',
			[/* bounds */
				[/* parameterized type */ 'pt', [
					[/* actual argument types */
						[/* type variable ref */ 'tr', [/* name */ 'E']]
					],
					/* raw type */ 'java.lang.Enum',
					/* owner type */ UDF
				]]
			],
			/* annotations */ UDF
		]
	],
	/* declared constructors */,
	[/* declared methods */
		[/* public java.lang.String java.lang.Enum$EnumDesc.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static <E extends java.lang.Enum<E>> java.lang.Enum$EnumDesc<E> java.lang.Enum$EnumDesc.of(java.lang.constant.ClassDesc,java.lang.String) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.constant.ClassDesc',
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
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'E']]
				],
				/* raw type */ 'java.lang.Enum$EnumDesc',
				/* owner type */ 'java.lang.Enum'
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'E',
					[/* bounds */
						[/* parameterized type */ 'pt', [
							[/* actual argument types */
								[/* type variable ref */ 'tr', [/* name */ 'E']]
							],
							/* raw type */ 'java.lang.Enum',
							/* owner type */ UDF
						]]
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public java.lang.Object java.lang.Enum$EnumDesc.resolveConstantDesc(java.lang.invoke.MethodHandles$Lookup) throws java.lang.ReflectiveOperationException */
			/* name */ 'resolveConstantDesc',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.invoke.MethodHandles$Lookup',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.ReflectiveOperationException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public E java.lang.Enum$EnumDesc.resolveConstantDesc(java.lang.invoke.MethodHandles$Lookup) throws java.lang.ReflectiveOperationException */
			/* name */ 'resolveConstantDesc',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.invoke.MethodHandles$Lookup',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'E']],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.ReflectiveOperationException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
