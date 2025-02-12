import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.Thread$UncaughtExceptionHandler', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1545,
	[/* declared annotations */
		['java.lang.FunctionalInterface']
	],
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract void java.lang.Thread$UncaughtExceptionHandler.uncaughtException(java.lang.Thread,java.lang.Throwable) */
			/* name */ 'uncaughtException',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Thread',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.Throwable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
