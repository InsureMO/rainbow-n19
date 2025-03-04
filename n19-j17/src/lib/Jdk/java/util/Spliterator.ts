import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.Spliterator', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1537,
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
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract boolean java.util.Spliterator.tryAdvance(java.util.function.Consumer<? super T>) */
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
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
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.util.Spliterator.characteristics() */
			/* name */ 'characteristics',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Spliterator<T> java.util.Spliterator.trySplit() */
			/* name */ 'trySplit',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.Spliterator',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract long java.util.Spliterator.estimateSize() */
			/* name */ 'estimateSize',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default boolean java.util.Spliterator.hasCharacteristics(int) */
			/* name */ 'hasCharacteristics',
			[/* parameters */
				[/* parameter */
					/* name */ 'characteristics',
					/* type */ 'int',
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
		[/* public default java.util.Comparator<? super T> java.util.Spliterator.getComparator() */
			/* name */ 'getComparator',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						[/* lower bounds */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						]
					]]
				],
				/* raw type */ 'java.util.Comparator',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default long java.util.Spliterator.getExactSizeIfKnown() */
			/* name */ 'getExactSizeIfKnown',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default void java.util.Spliterator.forEachRemaining(java.util.function.Consumer<? super T>) */
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
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
		]
	],
	[/* declared fields */
		[/* public static final int java.util.Spliterator.CONCURRENT */
			/* name */ 'CONCURRENT',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.Spliterator.DISTINCT */
			/* name */ 'DISTINCT',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.Spliterator.IMMUTABLE */
			/* name */ 'IMMUTABLE',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.Spliterator.NONNULL */
			/* name */ 'NONNULL',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.Spliterator.ORDERED */
			/* name */ 'ORDERED',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.Spliterator.SIZED */
			/* name */ 'SIZED',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.Spliterator.SORTED */
			/* name */ 'SORTED',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.Spliterator.SUBSIZED */
			/* name */ 'SUBSIZED',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
