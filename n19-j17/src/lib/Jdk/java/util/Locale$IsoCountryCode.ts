import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.Locale$IsoCountryCode', [
	/* super class, extends java.lang.Enum<java.util.Locale$IsoCountryCode> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.util.Locale$IsoCountryCode'
		],
		/* raw type */ 'java.lang.Enum',
		/* owner type */ UDF
	]],
	/* interfaces */,
	/* modifiers */ 17417,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public static java.util.Locale$IsoCountryCode[] java.util.Locale$IsoCountryCode.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.util.Locale$IsoCountryCode;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Locale$IsoCountryCode java.util.Locale$IsoCountryCode.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Locale$IsoCountryCode',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['PART1_ALPHA2', 0],
		['PART1_ALPHA3', 1],
		['PART3', 2]
	]
]);
