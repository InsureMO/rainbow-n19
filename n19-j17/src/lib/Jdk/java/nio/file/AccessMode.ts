import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.nio.file.AccessMode', [
	/* super class, extends java.lang.Enum<java.nio.file.AccessMode> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.nio.file.AccessMode'
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
		[/* public static java.nio.file.AccessMode java.nio.file.AccessMode.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.file.AccessMode',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.nio.file.AccessMode[] java.nio.file.AccessMode.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.nio.file.AccessMode;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['READ', 0],
		['WRITE', 1],
		['EXECUTE', 2]
	]
]);
