import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.System$Logger$Level', [
	/* super class, extends java.lang.Enum<java.lang.System$Logger$Level> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.lang.System$Logger$Level'
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
		[/* public final int java.lang.System$Logger$Level.getSeverity() */
			/* name */ 'getSeverity',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.String java.lang.System$Logger$Level.getName() */
			/* name */ 'getName',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.System$Logger$Level java.lang.System$Logger$Level.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.System$Logger$Level',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.System$Logger$Level[] java.lang.System$Logger$Level.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.lang.System$Logger$Level;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['ALL', 0],
		['TRACE', 1],
		['DEBUG', 2],
		['INFO', 3],
		['WARNING', 4],
		['ERROR', 5],
		['OFF', 6]
	]
]);
