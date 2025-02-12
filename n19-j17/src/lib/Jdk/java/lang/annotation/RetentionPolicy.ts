import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.annotation.RetentionPolicy', [
	/* super class, extends java.lang.Enum<java.lang.annotation.RetentionPolicy> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.lang.annotation.RetentionPolicy'
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
		[/* public static java.lang.annotation.RetentionPolicy[] java.lang.annotation.RetentionPolicy.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.lang.annotation.RetentionPolicy;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.annotation.RetentionPolicy java.lang.annotation.RetentionPolicy.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.annotation.RetentionPolicy',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['SOURCE', 0],
		['CLASS', 1],
		['RUNTIME', 2]
	]
]);
