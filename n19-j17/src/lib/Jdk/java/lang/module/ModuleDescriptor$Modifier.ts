import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.module.ModuleDescriptor$Modifier', [
	/* super class, extends java.lang.Enum<java.lang.module.ModuleDescriptor$Modifier> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.lang.module.ModuleDescriptor$Modifier'
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
		[/* public static java.lang.module.ModuleDescriptor$Modifier java.lang.module.ModuleDescriptor$Modifier.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.ModuleDescriptor$Modifier',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.module.ModuleDescriptor$Modifier[] java.lang.module.ModuleDescriptor$Modifier.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.lang.module.ModuleDescriptor$Modifier;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['OPEN', 0],
		['AUTOMATIC', 1],
		['SYNTHETIC', 2],
		['MANDATED', 3]
	]
]);
