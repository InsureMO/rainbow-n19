import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.text.NumberFormat$Style', [
	/* super class, extends java.lang.Enum<java.text.NumberFormat$Style> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.text.NumberFormat$Style'
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
		[/* public static java.text.NumberFormat$Style[] java.text.NumberFormat$Style.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.text.NumberFormat$Style;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.text.NumberFormat$Style java.text.NumberFormat$Style.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.NumberFormat$Style',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['SHORT', 0],
		['LONG', 1]
	]
]);
