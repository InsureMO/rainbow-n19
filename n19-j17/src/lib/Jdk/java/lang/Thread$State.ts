import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.Thread$State', [
	/* super class, extends java.lang.Enum<java.lang.Thread$State> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.lang.Thread$State'
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
		[/* public static java.lang.Thread$State java.lang.Thread$State.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Thread$State',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.Thread$State[] java.lang.Thread$State.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.lang.Thread$State;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['NEW', 0],
		['RUNNABLE', 1],
		['BLOCKED', 2],
		['WAITING', 3],
		['TIMED_WAITING', 4],
		['TERMINATED', 5]
	]
]);
