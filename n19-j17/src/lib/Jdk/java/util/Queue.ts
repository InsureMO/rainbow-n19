import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.Queue', [
	/* super class */,
	[/* interfaces, implements java.util.Collection<E> */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				[/* type variable ref */ 'tr', [/* name */ 'E']]
			],
			/* raw type */ 'java.util.Collection',
			/* owner type */ UDF
		]]
	],
	/* modifiers */ 1537,
	/* declared annotations */,
	[/* type parameters */
		[/* type variable */
			/* name */ 'E',
			[/* bounds */
				'java.lang.Object'
			],
			/* annotations */ UDF
		]
	],
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract E java.util.Queue.element() */
			/* name */ 'element',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'E']],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract E java.util.Queue.peek() */
			/* name */ 'peek',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'E']],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract E java.util.Queue.poll() */
			/* name */ 'poll',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'E']],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract E java.util.Queue.remove() */
			/* name */ 'remove',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'E']],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.util.Queue.add(E) */
			/* name */ 'add',
			[/* parameters */
				[/* parameter */
					/* name */ 'e',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.util.Queue.offer(E) */
			/* name */ 'offer',
			[/* parameters */
				[/* parameter */
					/* name */ 'e',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
