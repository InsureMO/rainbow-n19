import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.math.RoundingMode', [
	/* super class, extends java.lang.Enum<java.math.RoundingMode> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.math.RoundingMode'
		],
		/* raw type */ 'java.lang.Enum',
		/* owner type */ UDF
	]],
	/* interfaces */,
	/* modifiers */ 16401,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public static java.math.RoundingMode java.math.RoundingMode.valueOf(int) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'rm',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.RoundingMode',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.math.RoundingMode java.math.RoundingMode.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.RoundingMode',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.math.RoundingMode[] java.math.RoundingMode.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.math.RoundingMode;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['UP', 0],
		['DOWN', 1],
		['CEILING', 2],
		['FLOOR', 3],
		['HALF_UP', 4],
		['HALF_DOWN', 5],
		['HALF_EVEN', 6],
		['UNNECESSARY', 7]
	]
]);
