import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.ProcessBuilder$Redirect', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1033,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract java.lang.ProcessBuilder$Redirect$Type java.lang.ProcessBuilder$Redirect.type() */
			/* name */ 'type',
			/* parameters */,
			/* return */ 'java.lang.ProcessBuilder$Redirect$Type',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.lang.ProcessBuilder$Redirect.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'r',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.ProcessBuilder$Redirect.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.File java.lang.ProcessBuilder$Redirect.file() */
			/* name */ 'file',
			/* parameters */,
			/* return */ 'java.io.File',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.ProcessBuilder$Redirect java.lang.ProcessBuilder$Redirect.appendTo(java.io.File) */
			/* name */ 'appendTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.io.File',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ProcessBuilder$Redirect',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.ProcessBuilder$Redirect java.lang.ProcessBuilder$Redirect.from(java.io.File) */
			/* name */ 'from',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.io.File',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ProcessBuilder$Redirect',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.ProcessBuilder$Redirect java.lang.ProcessBuilder$Redirect.to(java.io.File) */
			/* name */ 'to',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.io.File',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ProcessBuilder$Redirect',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final java.lang.ProcessBuilder$Redirect java.lang.ProcessBuilder$Redirect.PIPE */
			/* name */ 'PIPE',
			/* type */ 'java.lang.ProcessBuilder$Redirect',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.lang.ProcessBuilder$Redirect java.lang.ProcessBuilder$Redirect.INHERIT */
			/* name */ 'INHERIT',
			/* type */ 'java.lang.ProcessBuilder$Redirect',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.lang.ProcessBuilder$Redirect java.lang.ProcessBuilder$Redirect.DISCARD */
			/* name */ 'DISCARD',
			/* type */ 'java.lang.ProcessBuilder$Redirect',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
