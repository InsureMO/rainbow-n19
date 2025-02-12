import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.format.ResolverStyle', [
	/* super class, extends java.lang.Enum<java.time.format.ResolverStyle> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.time.format.ResolverStyle'
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
		[/* public static java.time.format.ResolverStyle java.time.format.ResolverStyle.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.ResolverStyle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.format.ResolverStyle[] java.time.format.ResolverStyle.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.time.format.ResolverStyle;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['STRICT', 0],
		['SMART', 1],
		['LENIENT', 2]
	]
]);
