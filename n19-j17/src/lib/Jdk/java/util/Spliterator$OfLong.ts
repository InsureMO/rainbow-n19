import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.Spliterator$OfLong', [
	/* super class */,
	[/* interfaces, implements java.util.Spliterator$OfPrimitive<java.lang.Long, java.util.function.LongConsumer, java.util.Spliterator$OfLong> */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.lang.Long',
				'java.util.function.LongConsumer',
				'java.util.Spliterator$OfLong'
			],
			/* raw type */ 'java.util.Spliterator$OfPrimitive',
			/* owner type */ 'java.util.Spliterator'
		]]
	],
	/* modifiers */ 1545,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract boolean java.util.Spliterator$OfLong.tryAdvance(java.util.function.LongConsumer) */
			/* name */ 'tryAdvance',
			[/* parameters */
				[/* parameter */
					/* name */ 'action',
					/* type */ 'java.util.function.LongConsumer',
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
		[/* public abstract java.util.Spliterator$OfLong java.util.Spliterator$OfLong.trySplit() */
			/* name */ 'trySplit',
			/* parameters */,
			/* return */ 'java.util.Spliterator$OfLong',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default boolean java.util.Spliterator$OfLong.tryAdvance(java.util.function.Consumer<? super java.lang.Long>) */
			/* name */ 'tryAdvance',
			[/* parameters */
				[/* parameter */
					/* name */ 'action',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									'java.lang.Long'
								]
							]]
						],
						/* raw type */ 'java.util.function.Consumer',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default void java.util.Spliterator$OfLong.forEachRemaining(java.util.function.Consumer<? super java.lang.Long>) */
			/* name */ 'forEachRemaining',
			[/* parameters */
				[/* parameter */
					/* name */ 'action',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									'java.lang.Long'
								]
							]]
						],
						/* raw type */ 'java.util.function.Consumer',
						/* owner type */ UDF
					]],
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
		[/* public default void java.util.Spliterator$OfLong.forEachRemaining(java.util.function.LongConsumer) */
			/* name */ 'forEachRemaining',
			[/* parameters */
				[/* parameter */
					/* name */ 'action',
					/* type */ 'java.util.function.LongConsumer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
