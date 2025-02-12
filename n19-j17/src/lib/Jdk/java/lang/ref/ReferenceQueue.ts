import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.ref.ReferenceQueue', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	[/* type parameters */
		[/* type variable */
			/* name */ 'T',
			[/* bounds */
				'java.lang.Object'
			],
			/* annotations */ UDF
		]
	],
	[/* declared constructors */
		[/* public java.lang.ref.ReferenceQueue() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public java.lang.ref.Reference<? extends T> java.lang.ref.ReferenceQueue.poll() */
			/* name */ 'poll',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* lower bounds */ UDF
					]]
				],
				/* raw type */ 'java.lang.ref.Reference',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ref.Reference<? extends T> java.lang.ref.ReferenceQueue.remove() throws java.lang.InterruptedException */
			/* name */ 'remove',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* lower bounds */ UDF
					]]
				],
				/* raw type */ 'java.lang.ref.Reference',
				/* owner type */ UDF
			]],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.InterruptedException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ref.Reference<? extends T> java.lang.ref.ReferenceQueue.remove(long) throws java.lang.IllegalArgumentException,java.lang.InterruptedException */
			/* name */ 'remove',
			[/* parameters */
				[/* parameter */
					/* name */ 'end',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* lower bounds */ UDF
					]]
				],
				/* raw type */ 'java.lang.ref.Reference',
				/* owner type */ UDF
			]],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.InterruptedException',
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
