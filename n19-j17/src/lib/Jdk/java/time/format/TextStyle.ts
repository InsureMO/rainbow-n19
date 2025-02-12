import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.format.TextStyle', [
	/* super class, extends java.lang.Enum<java.time.format.TextStyle> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.time.format.TextStyle'
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
		[/* public static java.time.format.TextStyle[] java.time.format.TextStyle.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.time.format.TextStyle;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.format.TextStyle java.time.format.TextStyle.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.format.TextStyle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.time.format.TextStyle.isStandalone() */
			/* name */ 'isStandalone',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.TextStyle java.time.format.TextStyle.asStandalone() */
			/* name */ 'asStandalone',
			/* parameters */,
			/* return */ 'java.time.format.TextStyle',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.format.TextStyle java.time.format.TextStyle.asNormal() */
			/* name */ 'asNormal',
			/* parameters */,
			/* return */ 'java.time.format.TextStyle',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['FULL', 0],
		['FULL_STANDALONE', 1],
		['SHORT', 2],
		['SHORT_STANDALONE', 3],
		['NARROW', 4],
		['NARROW_STANDALONE', 5]
	]
]);
