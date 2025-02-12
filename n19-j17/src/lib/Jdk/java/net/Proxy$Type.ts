import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.net.Proxy$Type', [
	/* super class, extends java.lang.Enum<java.net.Proxy$Type> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.net.Proxy$Type'
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
		[/* public static java.net.Proxy$Type java.net.Proxy$Type.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.net.Proxy$Type',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.net.Proxy$Type[] java.net.Proxy$Type.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.net.Proxy$Type;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['DIRECT', 0],
		['HTTP', 1],
		['SOCKS', 2]
	]
]);
