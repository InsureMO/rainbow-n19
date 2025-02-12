import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.Observer', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1537,
	[/* declared annotations */
		[
			'java.lang.Deprecated',
			['p', 'since', '9'],
			['p', 'forRemoval', false]
		]
	],
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract void java.util.Observer.update(java.util.Observable,java.lang.Object) */
			/* name */ 'update',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.Observable',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.Object',
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
