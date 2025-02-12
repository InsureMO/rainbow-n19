import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.Spliterator$OfDouble', [
	/* super class */,
	[/* interfaces, implements java.util.Spliterator$OfPrimitive<java.lang.Double, java.util.function.DoubleConsumer, java.util.Spliterator$OfDouble> */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.lang.Double',
				'java.util.function.DoubleConsumer',
				'java.util.Spliterator$OfDouble'
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
		[/* public default void java.util.Spliterator$OfDouble.forEachRemaining(java.lang.Object) */
			/* name */ 'forEachRemaining',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default void java.util.Spliterator$OfDouble.forEachRemaining(java.util.function.DoubleConsumer) */
			/* name */ 'forEachRemaining',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.DoubleConsumer',
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
		[/* public default void java.util.Spliterator$OfDouble.forEachRemaining(java.util.function.Consumer<? super java.lang.Double>) */
			/* name */ 'forEachRemaining',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									'java.lang.Double'
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
		[/* public default java.util.Spliterator$OfPrimitive java.util.Spliterator$OfDouble.trySplit() */
			/* name */ 'trySplit',
			/* parameters */,
			/* return */ 'java.util.Spliterator$OfPrimitive',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.Spliterator java.util.Spliterator$OfDouble.trySplit() */
			/* name */ 'trySplit',
			/* parameters */,
			/* return */ 'java.util.Spliterator',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Spliterator$OfDouble java.util.Spliterator$OfDouble.trySplit() */
			/* name */ 'trySplit',
			/* parameters */,
			/* return */ 'java.util.Spliterator$OfDouble',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.util.Spliterator$OfDouble.tryAdvance(java.util.function.DoubleConsumer) */
			/* name */ 'tryAdvance',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.DoubleConsumer',
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
		[/* public default boolean java.util.Spliterator$OfDouble.tryAdvance(java.util.function.Consumer<? super java.lang.Double>) */
			/* name */ 'tryAdvance',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									'java.lang.Double'
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
		[/* public default boolean java.util.Spliterator$OfDouble.tryAdvance(java.lang.Object) */
			/* name */ 'tryAdvance',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
