import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.net.ContentHandler', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.net.ContentHandler() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public abstract java.lang.Object java.net.ContentHandler.getContent(java.net.URLConnection) throws java.io.IOException */
			/* name */ 'getContent',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.net.URLConnection',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object java.net.ContentHandler.getContent(java.net.URLConnection,java.lang.Class[]) throws java.io.IOException */
			/* name */ 'getContent',
			[/* parameters */
				[/* parameter */
					/* name */ 'urlc',
					/* type */ 'java.net.URLConnection',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'classes',
					/* type */ '[Ljava.lang.Class;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
