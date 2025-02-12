import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.reflect.InvocationTargetException', [
	/* super class, extends java.lang.ReflectiveOperationException */
	'java.lang.ReflectiveOperationException',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.lang.reflect.InvocationTargetException(java.lang.Throwable,java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.Throwable',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 's',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.reflect.InvocationTargetException(java.lang.Throwable) */
			[/* parameters */
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.Throwable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected java.lang.reflect.InvocationTargetException() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public java.lang.Throwable java.lang.reflect.InvocationTargetException.getCause() */
			/* name */ 'getCause',
			/* parameters */,
			/* return */ 'java.lang.Throwable',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Throwable java.lang.reflect.InvocationTargetException.getTargetException() */
			/* name */ 'getTargetException',
			/* parameters */,
			/* return */ 'java.lang.Throwable',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
