import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.io.InterruptedIOException', [
	/* super class, extends java.io.IOException */
	'java.io.IOException',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.io.InterruptedIOException() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.InterruptedIOException(java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
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
	/* declared methods */,
	[/* declared fields */
		[/* public int java.io.InterruptedIOException.bytesTransferred */
			/* name */ 'bytesTransferred',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 1
		]
	],
	/* enum values */ UDF
]);
