import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.Spliterator$OfPrimitive', [
	/* super class */,
	[/* interfaces, implements java.util.Spliterator<T> */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				[/* type variable ref */ 'tr', [/* name */ 'T']]
			],
			/* raw type */ 'java.util.Spliterator',
			/* owner type */ UDF
		]]
	],
	/* modifiers */ 1545,
	/* declared annotations */,
	[/* type parameters */
		[/* type variable */
			/* name */ 'T',
			[/* bounds */
				'java.lang.Object'
			],
			/* annotations */ UDF
		],
		[/* type variable */
			/* name */ 'T_CONS',
			[/* bounds */
				'java.lang.Object'
			],
			/* annotations */ UDF
		],
		[/* type variable */
			/* name */ 'T_SPLITR',
			[/* bounds */
				[/* parameterized type */ 'pt', [
					[/* actual argument types */
						[/* type variable ref */ 'tr', [/* name */ 'T']],
						[/* type variable ref */ 'tr', [/* name */ 'T_CONS']],
						[/* type variable ref */ 'tr', [/* name */ 'T_SPLITR']]
					],
					/* raw type */ 'java.util.Spliterator$OfPrimitive',
					/* owner type */ 'java.util.Spliterator'
				]]
			],
			/* annotations */ UDF
		]
	],
	/* declared constructors */,
	[/* declared methods */
		[/* public default void java.util.Spliterator$OfPrimitive.forEachRemaining(T_CONS) */
			/* name */ 'forEachRemaining',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T_CONS']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.Spliterator java.util.Spliterator$OfPrimitive.trySplit() */
			/* name */ 'trySplit',
			/* parameters */,
			/* return */ 'java.util.Spliterator',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract T_SPLITR java.util.Spliterator$OfPrimitive.trySplit() */
			/* name */ 'trySplit',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T_SPLITR']],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.util.Spliterator$OfPrimitive.tryAdvance(T_CONS) */
			/* name */ 'tryAdvance',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T_CONS']],
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
