import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.io.ObjectInputFilter$Status', [
	/* super class, extends java.lang.Enum<java.io.ObjectInputFilter$Status> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.io.ObjectInputFilter$Status'
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
		[/* public static java.io.ObjectInputFilter$Status[] java.io.ObjectInputFilter$Status.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.io.ObjectInputFilter$Status;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.io.ObjectInputFilter$Status java.io.ObjectInputFilter$Status.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.io.ObjectInputFilter$Status',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['UNDECIDED', 0],
		['ALLOWED', 1],
		['REJECTED', 2]
	]
]);
