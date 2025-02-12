import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.format.SignStyle', [
	/* super class, extends java.lang.Enum<java.time.format.SignStyle> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.time.format.SignStyle'
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
		[/* public static java.time.format.SignStyle[] java.time.format.SignStyle.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.time.format.SignStyle;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.format.SignStyle java.time.format.SignStyle.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.SignStyle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['NORMAL', 0],
		['ALWAYS', 1],
		['NEVER', 2],
		['NOT_NEGATIVE', 3],
		['EXCEEDS_PAD', 4]
	]
]);
