import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.Base64', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public static java.util.Base64$Decoder java.util.Base64.getDecoder() */
			/* name */ 'getDecoder',
			/* parameters */,
			/* return */ 'java.util.Base64$Decoder',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Base64$Decoder java.util.Base64.getMimeDecoder() */
			/* name */ 'getMimeDecoder',
			/* parameters */,
			/* return */ 'java.util.Base64$Decoder',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Base64$Decoder java.util.Base64.getUrlDecoder() */
			/* name */ 'getUrlDecoder',
			/* parameters */,
			/* return */ 'java.util.Base64$Decoder',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Base64$Encoder java.util.Base64.getEncoder() */
			/* name */ 'getEncoder',
			/* parameters */,
			/* return */ 'java.util.Base64$Encoder',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Base64$Encoder java.util.Base64.getMimeEncoder() */
			/* name */ 'getMimeEncoder',
			/* parameters */,
			/* return */ 'java.util.Base64$Encoder',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Base64$Encoder java.util.Base64.getMimeEncoder(int,byte[]) */
			/* name */ 'getMimeEncoder',
			[/* parameters */
				[/* parameter */
					/* name */ 'lineLength',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'lineSeparator',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Base64$Encoder',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Base64$Encoder java.util.Base64.getUrlEncoder() */
			/* name */ 'getUrlEncoder',
			/* parameters */,
			/* return */ 'java.util.Base64$Encoder',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
