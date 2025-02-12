import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.Boolean', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.io.Serializable, java.lang.Comparable<java.lang.Boolean>, java.lang.constant.Constable */
		'java.io.Serializable',
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.lang.Boolean'
			],
			/* raw type */ 'java.lang.Comparable',
			/* owner type */ UDF
		]],
		'java.lang.constant.Constable'
	],
	/* modifiers */ 17,
	[/* declared annotations */
		['jdk.internal.ValueBased']
	],
	/* type parameters */,
	[/* declared constructors */
		[/* public java.lang.Boolean(boolean) */
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '9'],
					['p', 'forRemoval', true]
				]
			],
			/* type parameters */ UDF
		],
		[/* public java.lang.Boolean(java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 's',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '9'],
					['p', 'forRemoval', true]
				]
			],
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public boolean java.lang.Boolean.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.Boolean.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.String java.lang.Boolean.toString(boolean) */
			/* name */ 'toString',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.Boolean.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.lang.Boolean.hashCode(boolean) */
			/* name */ 'hashCode',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.Boolean.compareTo(java.lang.Boolean) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'b',
					/* type */ 'java.lang.Boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.Boolean.compareTo(java.lang.Object) */
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
		[/* public static boolean java.lang.Boolean.getBoolean(java.lang.String) */
			/* name */ 'getBoolean',
			[/* parameters */
				[/* parameter */
					/* name */ 'result',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.lang.Boolean.compare(boolean,boolean) */
			/* name */ 'compare',
			[/* parameters */
				[/* parameter */
					/* name */ 'y',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.lang.Boolean.booleanValue() */
			/* name */ 'booleanValue',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static java.lang.Boolean java.lang.Boolean.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Boolean',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.Boolean java.lang.Boolean.valueOf(boolean) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Boolean',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public java.util.Optional<java.lang.constant.DynamicConstantDesc<java.lang.Boolean>> java.lang.Boolean.describeConstable() */
			/* name */ 'describeConstable',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.Boolean'
						],
						/* raw type */ 'java.lang.constant.DynamicConstantDesc',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.Optional',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static boolean java.lang.Boolean.parseBoolean(java.lang.String) */
			/* name */ 'parseBoolean',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static boolean java.lang.Boolean.logicalAnd(boolean,boolean) */
			/* name */ 'logicalAnd',
			[/* parameters */
				[/* parameter */
					/* name */ 'b',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static boolean java.lang.Boolean.logicalOr(boolean,boolean) */
			/* name */ 'logicalOr',
			[/* parameters */
				[/* parameter */
					/* name */ 'b',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static boolean java.lang.Boolean.logicalXor(boolean,boolean) */
			/* name */ 'logicalXor',
			[/* parameters */
				[/* parameter */
					/* name */ 'b',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final java.lang.Boolean java.lang.Boolean.TRUE */
			/* name */ 'TRUE',
			/* type */ 'java.lang.Boolean',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.lang.Boolean java.lang.Boolean.FALSE */
			/* name */ 'FALSE',
			/* type */ 'java.lang.Boolean',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.lang.Class<java.lang.Boolean> java.lang.Boolean.TYPE */
			/* name */ 'TYPE',
			/* type */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Boolean'
				],
				/* raw type */ 'java.lang.Class',
				/* owner type */ UDF
			]],
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
