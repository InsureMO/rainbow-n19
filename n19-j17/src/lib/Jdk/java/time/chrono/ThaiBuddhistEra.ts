import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.chrono.ThaiBuddhistEra', [
	/* super class, extends java.lang.Enum<java.time.chrono.ThaiBuddhistEra> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.time.chrono.ThaiBuddhistEra'
		],
		/* raw type */ 'java.lang.Enum',
		/* owner type */ UDF
	]],
	[/* interfaces, implements java.time.chrono.Era */
		'java.time.chrono.Era'
	],
	/* modifiers */ 16401,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public static java.time.chrono.ThaiBuddhistEra[] java.time.chrono.ThaiBuddhistEra.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.time.chrono.ThaiBuddhistEra;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.chrono.ThaiBuddhistEra java.time.chrono.ThaiBuddhistEra.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.ThaiBuddhistEra',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.time.chrono.ThaiBuddhistEra.getValue() */
			/* name */ 'getValue',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.chrono.ThaiBuddhistEra java.time.chrono.ThaiBuddhistEra.of(int) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.ThaiBuddhistEra',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.time.chrono.ThaiBuddhistEra.getDisplayName(java.time.format.TextStyle,java.util.Locale) */
			/* name */ 'getDisplayName',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.format.TextStyle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['BEFORE_BE', 0],
		['BE', 1]
	]
]);
