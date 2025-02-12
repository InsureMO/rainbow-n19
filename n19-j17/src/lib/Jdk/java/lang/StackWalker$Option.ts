import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.StackWalker$Option', [
	/* super class, extends java.lang.Enum<java.lang.StackWalker$Option> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.lang.StackWalker$Option'
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
		[/* public static java.lang.StackWalker$Option[] java.lang.StackWalker$Option.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.lang.StackWalker$Option;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.StackWalker$Option java.lang.StackWalker$Option.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StackWalker$Option',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['RETAIN_CLASS_REFERENCE', 0],
		['SHOW_REFLECT_FRAMES', 1],
		['SHOW_HIDDEN_FRAMES', 2]
	]
]);
