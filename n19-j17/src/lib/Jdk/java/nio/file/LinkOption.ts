import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.nio.file.LinkOption', [
	/* super class, extends java.lang.Enum<java.nio.file.LinkOption> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.nio.file.LinkOption'
		],
		/* raw type */ 'java.lang.Enum',
		/* owner type */ UDF
	]],
	[/* interfaces, implements java.nio.file.OpenOption, java.nio.file.CopyOption */
		'java.nio.file.OpenOption',
		'java.nio.file.CopyOption'
	],
	/* modifiers */ 16401,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public static java.nio.file.LinkOption java.nio.file.LinkOption.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.file.LinkOption',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.nio.file.LinkOption[] java.nio.file.LinkOption.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.nio.file.LinkOption;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['NOFOLLOW_LINKS', 0]
	]
]);
