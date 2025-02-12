import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.Enum', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.lang.constant.Constable, java.lang.Comparable<E>, java.io.Serializable */
		'java.lang.constant.Constable',
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				[/* type variable ref */ 'tr', [/* name */ 'E']]
			],
			/* raw type */ 'java.lang.Comparable',
			/* owner type */ UDF
		]],
		'java.io.Serializable'
	],
	/* modifiers */ 1025,
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
	[/* declared constructors */
		[/* protected java.lang.Enum(java.lang.String,int) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public final java.lang.String java.lang.Enum.name() */
			/* name */ 'name',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected final void java.lang.Enum.finalize() */
			/* name */ 'finalize',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 20,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final boolean java.lang.Enum.equals(java.lang.Object) */
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
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.Enum.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final int java.lang.Enum.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected final java.lang.Object java.lang.Enum.clone() throws java.lang.CloneNotSupportedException */
			/* name */ 'clone',
			/* parameters */,
			/* return */ 'java.lang.Object',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.CloneNotSupportedException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 20,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.Enum.compareTo(java.lang.Object) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final int java.lang.Enum.compareTo(E) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static <T extends java.lang.Enum<T>> T java.lang.Enum.valueOf(java.lang.Class<T>,java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
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
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T']],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						[/* parameterized type */ 'pt', [
							[/* actual argument types */
								[/* type variable ref */ 'tr', [/* name */ 'T']]
							],
							/* raw type */ 'java.lang.Enum',
							/* owner type */ UDF
						]]
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public final java.util.Optional<java.lang.Enum$EnumDesc<E>> java.lang.Enum.describeConstable() */
			/* name */ 'describeConstable',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'E']]
						],
						/* raw type */ 'java.lang.Enum$EnumDesc',
						/* owner type */ 'java.lang.Enum'
					]]
				],
				/* raw type */ 'java.util.Optional',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.Class<E> java.lang.Enum.getDeclaringClass() */
			/* name */ 'getDeclaringClass',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'E']]
				],
				/* raw type */ 'java.lang.Class',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final int java.lang.Enum.ordinal() */
			/* name */ 'ordinal',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
