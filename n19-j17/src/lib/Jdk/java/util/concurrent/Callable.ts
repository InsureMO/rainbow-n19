import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.concurrent.Callable', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1537,
	[/* declared annotations */
		['java.lang.FunctionalInterface']
	],
	[/* type parameters */
		[/* type variable */
			/* name */ 'V',
			[/* bounds */
				'java.lang.Object'
			],
			/* annotations */ UDF
		]
	],
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract V java.util.concurrent.Callable.call() throws java.lang.Exception */
			/* name */ 'call',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'V']],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.Exception',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
