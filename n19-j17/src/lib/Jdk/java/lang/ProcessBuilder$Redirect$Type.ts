import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.ProcessBuilder$Redirect$Type', [
	/* super class, extends java.lang.Enum<java.lang.ProcessBuilder$Redirect$Type> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.lang.ProcessBuilder$Redirect$Type'
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
		[/* public static java.lang.ProcessBuilder$Redirect$Type[] java.lang.ProcessBuilder$Redirect$Type.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.lang.ProcessBuilder$Redirect$Type;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.ProcessBuilder$Redirect$Type java.lang.ProcessBuilder$Redirect$Type.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ProcessBuilder$Redirect$Type',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['PIPE', 0],
		['INHERIT', 1],
		['READ', 2],
		['WRITE', 3],
		['APPEND', 4]
	]
]);
