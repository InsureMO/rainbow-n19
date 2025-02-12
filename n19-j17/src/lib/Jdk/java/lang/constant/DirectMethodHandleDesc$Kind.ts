import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.constant.DirectMethodHandleDesc$Kind', [
	/* super class, extends java.lang.Enum<java.lang.constant.DirectMethodHandleDesc$Kind> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.lang.constant.DirectMethodHandleDesc$Kind'
		],
		/* raw type */ 'java.lang.Enum',
		/* owner type */ UDF
	]],
	/* interfaces */,
	/* modifiers */ 16409,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public static java.lang.constant.DirectMethodHandleDesc$Kind java.lang.constant.DirectMethodHandleDesc$Kind.valueOf(int) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.constant.DirectMethodHandleDesc$Kind',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.constant.DirectMethodHandleDesc$Kind java.lang.constant.DirectMethodHandleDesc$Kind.valueOf(int,boolean) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'isInterface',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'i',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.constant.DirectMethodHandleDesc$Kind',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.constant.DirectMethodHandleDesc$Kind java.lang.constant.DirectMethodHandleDesc$Kind.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.constant.DirectMethodHandleDesc$Kind',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.constant.DirectMethodHandleDesc$Kind[] java.lang.constant.DirectMethodHandleDesc$Kind.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.lang.constant.DirectMethodHandleDesc$Kind;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public final int java.lang.constant.DirectMethodHandleDesc$Kind.refKind */
			/* name */ 'refKind',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 17
		],
		[/* public final boolean java.lang.constant.DirectMethodHandleDesc$Kind.isInterface */
			/* name */ 'isInterface',
			/* type */ 'boolean',
			/* annotations */ UDF,
			/* modifiers */ 17
		]
	],
	[/* enum values */
		['STATIC', 0],
		['INTERFACE_STATIC', 1],
		['VIRTUAL', 2],
		['INTERFACE_VIRTUAL', 3],
		['SPECIAL', 4],
		['INTERFACE_SPECIAL', 5],
		['CONSTRUCTOR', 6],
		['GETTER', 7],
		['SETTER', 8],
		['STATIC_GETTER', 9],
		['STATIC_SETTER', 10]
	]
]);
