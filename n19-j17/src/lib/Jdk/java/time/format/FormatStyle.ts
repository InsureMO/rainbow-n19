import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.format.FormatStyle', [
	/* super class, extends java.lang.Enum<java.time.format.FormatStyle> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.time.format.FormatStyle'
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
		[/* public static java.time.format.FormatStyle java.time.format.FormatStyle.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.FormatStyle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.format.FormatStyle[] java.time.format.FormatStyle.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.time.format.FormatStyle;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['FULL', 0],
		['LONG', 1],
		['MEDIUM', 2],
		['SHORT', 3]
	]
]);
