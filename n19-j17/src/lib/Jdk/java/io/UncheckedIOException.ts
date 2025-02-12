import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.io.UncheckedIOException', [
	/* super class, extends java.lang.RuntimeException */
	'java.lang.RuntimeException',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.io.UncheckedIOException(java.io.IOException) */
			[/* parameters */
				[/* parameter */
					/* name */ 'cause',
					/* type */ 'java.io.IOException',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.UncheckedIOException(java.lang.String,java.io.IOException) */
			[/* parameters */
				[/* parameter */
					/* name */ 'message',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'cause',
					/* type */ 'java.io.IOException',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public java.io.IOException java.io.UncheckedIOException.getCause() */
			/* name */ 'getCause',
			/* parameters */,
			/* return */ 'java.io.IOException',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Throwable java.io.UncheckedIOException.getCause() */
			/* name */ 'getCause',
			/* parameters */,
			/* return */ 'java.lang.Throwable',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
