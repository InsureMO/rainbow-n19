import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.stream.Collector$Characteristics', [
	/* super class, extends java.lang.Enum<java.util.stream.Collector$Characteristics> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.util.stream.Collector$Characteristics'
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
		[/* public static java.util.stream.Collector$Characteristics java.util.stream.Collector$Characteristics.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.Collector$Characteristics',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.Collector$Characteristics[] java.util.stream.Collector$Characteristics.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.util.stream.Collector$Characteristics;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['CONCURRENT', 0],
		['UNORDERED', 1],
		['IDENTITY_FINISH', 2]
	]
]);
