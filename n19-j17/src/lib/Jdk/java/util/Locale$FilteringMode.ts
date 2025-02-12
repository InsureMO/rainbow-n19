import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.Locale$FilteringMode', [
	/* super class, extends java.lang.Enum<java.util.Locale$FilteringMode> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.util.Locale$FilteringMode'
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
		[/* public static java.util.Locale$FilteringMode java.util.Locale$FilteringMode.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Locale$FilteringMode',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Locale$FilteringMode[] java.util.Locale$FilteringMode.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.util.Locale$FilteringMode;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['AUTOSELECT_FILTERING', 0],
		['EXTENDED_FILTERING', 1],
		['IGNORE_EXTENDED_RANGES', 2],
		['MAP_EXTENDED_RANGES', 3],
		['REJECT_EXTENDED_RANGES', 4]
	]
]);
