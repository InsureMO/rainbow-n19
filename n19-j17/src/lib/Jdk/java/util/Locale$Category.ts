import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.Locale$Category', [
	/* super class, extends java.lang.Enum<java.util.Locale$Category> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.util.Locale$Category'
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
		[/* public static java.util.Locale$Category[] java.util.Locale$Category.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.util.Locale$Category;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Locale$Category java.util.Locale$Category.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Locale$Category',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['DISPLAY', 0],
		['FORMAT', 1]
	]
]);
