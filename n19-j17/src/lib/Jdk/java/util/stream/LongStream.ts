import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.stream.LongStream', [
	/* super class */,
	[/* interfaces, implements java.util.stream.BaseStream<java.lang.Long, java.util.stream.LongStream> */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.lang.Long',
				'java.util.stream.LongStream'
			],
			/* raw type */ 'java.util.stream.BaseStream',
			/* owner type */ UDF
		]]
	],
	/* modifiers */ 1537,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract <R> R java.util.stream.LongStream.collect(java.util.function.Supplier<R>,java.util.function.ObjLongConsumer<R>,java.util.function.BiConsumer<R, R>) */
			/* name */ 'collect',
			[/* parameters */
				[/* parameter */
					/* name */ 'supplier',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'R']]
						],
						/* raw type */ 'java.util.function.Supplier',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'accumulator',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'R']]
						],
						/* raw type */ 'java.util.function.ObjLongConsumer',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'combiner',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'R']],
							[/* type variable ref */ 'tr', [/* name */ 'R']]
						],
						/* raw type */ 'java.util.function.BiConsumer',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'R']],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'R',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public abstract <U> java.util.stream.Stream<U> java.util.stream.LongStream.mapToObj(java.util.function.LongFunction<? extends U>) */
			/* name */ 'mapToObj',
			[/* parameters */
				[/* parameter */
					/* name */ 'mapper',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.LongFunction',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'U']]
				],
				/* raw type */ 'java.util.stream.Stream',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public abstract boolean java.util.stream.LongStream.allMatch(java.util.function.LongPredicate) */
			/* name */ 'allMatch',
			[/* parameters */
				[/* parameter */
					/* name */ 'predicate',
					/* type */ 'java.util.function.LongPredicate',
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
		[/* public abstract boolean java.util.stream.LongStream.anyMatch(java.util.function.LongPredicate) */
			/* name */ 'anyMatch',
			[/* parameters */
				[/* parameter */
					/* name */ 'predicate',
					/* type */ 'java.util.function.LongPredicate',
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
		[/* public abstract boolean java.util.stream.LongStream.noneMatch(java.util.function.LongPredicate) */
			/* name */ 'noneMatch',
			[/* parameters */
				[/* parameter */
					/* name */ 'predicate',
					/* type */ 'java.util.function.LongPredicate',
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
		[/* public abstract java.util.LongSummaryStatistics java.util.stream.LongStream.summaryStatistics() */
			/* name */ 'summaryStatistics',
			/* parameters */,
			/* return */ 'java.util.LongSummaryStatistics',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.OptionalDouble java.util.stream.LongStream.average() */
			/* name */ 'average',
			/* parameters */,
			/* return */ 'java.util.OptionalDouble',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.OptionalLong java.util.stream.LongStream.findAny() */
			/* name */ 'findAny',
			/* parameters */,
			/* return */ 'java.util.OptionalLong',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.OptionalLong java.util.stream.LongStream.findFirst() */
			/* name */ 'findFirst',
			/* parameters */,
			/* return */ 'java.util.OptionalLong',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.OptionalLong java.util.stream.LongStream.max() */
			/* name */ 'max',
			/* parameters */,
			/* return */ 'java.util.OptionalLong',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.OptionalLong java.util.stream.LongStream.min() */
			/* name */ 'min',
			/* parameters */,
			/* return */ 'java.util.OptionalLong',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.OptionalLong java.util.stream.LongStream.reduce(java.util.function.LongBinaryOperator) */
			/* name */ 'reduce',
			[/* parameters */
				[/* parameter */
					/* name */ 'op',
					/* type */ 'java.util.function.LongBinaryOperator',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.OptionalLong',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.PrimitiveIterator$OfLong java.util.stream.LongStream.iterator() */
			/* name */ 'iterator',
			/* parameters */,
			/* return */ 'java.util.PrimitiveIterator$OfLong',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Spliterator$OfLong java.util.stream.LongStream.spliterator() */
			/* name */ 'spliterator',
			/* parameters */,
			/* return */ 'java.util.Spliterator$OfLong',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.DoubleStream java.util.stream.LongStream.asDoubleStream() */
			/* name */ 'asDoubleStream',
			/* parameters */,
			/* return */ 'java.util.stream.DoubleStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.DoubleStream java.util.stream.LongStream.mapToDouble(java.util.function.LongToDoubleFunction) */
			/* name */ 'mapToDouble',
			[/* parameters */
				[/* parameter */
					/* name */ 'mapper',
					/* type */ 'java.util.function.LongToDoubleFunction',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.DoubleStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.IntStream java.util.stream.LongStream.mapToInt(java.util.function.LongToIntFunction) */
			/* name */ 'mapToInt',
			[/* parameters */
				[/* parameter */
					/* name */ 'mapper',
					/* type */ 'java.util.function.LongToIntFunction',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.IntStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.LongStream java.util.stream.LongStream.distinct() */
			/* name */ 'distinct',
			/* parameters */,
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.LongStream java.util.stream.LongStream.filter(java.util.function.LongPredicate) */
			/* name */ 'filter',
			[/* parameters */
				[/* parameter */
					/* name */ 'predicate',
					/* type */ 'java.util.function.LongPredicate',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.LongStream java.util.stream.LongStream.flatMap(java.util.function.LongFunction<? extends java.util.stream.LongStream>) */
			/* name */ 'flatMap',
			[/* parameters */
				[/* parameter */
					/* name */ 'mapper',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.util.stream.LongStream'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.LongFunction',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.LongStream java.util.stream.LongStream.limit(long) */
			/* name */ 'limit',
			[/* parameters */
				[/* parameter */
					/* name */ 'maxSize',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.LongStream java.util.stream.LongStream.map(java.util.function.LongUnaryOperator) */
			/* name */ 'map',
			[/* parameters */
				[/* parameter */
					/* name */ 'mapper',
					/* type */ 'java.util.function.LongUnaryOperator',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.LongStream java.util.stream.LongStream.parallel() */
			/* name */ 'parallel',
			/* parameters */,
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.LongStream java.util.stream.LongStream.peek(java.util.function.LongConsumer) */
			/* name */ 'peek',
			[/* parameters */
				[/* parameter */
					/* name */ 'action',
					/* type */ 'java.util.function.LongConsumer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.LongStream java.util.stream.LongStream.sequential() */
			/* name */ 'sequential',
			/* parameters */,
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.LongStream java.util.stream.LongStream.skip(long) */
			/* name */ 'skip',
			[/* parameters */
				[/* parameter */
					/* name */ 'n',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.LongStream java.util.stream.LongStream.sorted() */
			/* name */ 'sorted',
			/* parameters */,
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.Stream<java.lang.Long> java.util.stream.LongStream.boxed() */
			/* name */ 'boxed',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Long'
				],
				/* raw type */ 'java.util.stream.Stream',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract long java.util.stream.LongStream.count() */
			/* name */ 'count',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract long java.util.stream.LongStream.reduce(long,java.util.function.LongBinaryOperator) */
			/* name */ 'reduce',
			[/* parameters */
				[/* parameter */
					/* name */ 'identity',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'op',
					/* type */ 'java.util.function.LongBinaryOperator',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract long java.util.stream.LongStream.sum() */
			/* name */ 'sum',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract long[] java.util.stream.LongStream.toArray() */
			/* name */ 'toArray',
			/* parameters */,
			/* return */ '[J',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract void java.util.stream.LongStream.forEach(java.util.function.LongConsumer) */
			/* name */ 'forEach',
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
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract void java.util.stream.LongStream.forEachOrdered(java.util.function.LongConsumer) */
			/* name */ 'forEachOrdered',
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
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.stream.LongStream java.util.stream.LongStream.dropWhile(java.util.function.LongPredicate) */
			/* name */ 'dropWhile',
			[/* parameters */
				[/* parameter */
					/* name */ 'predicate',
					/* type */ 'java.util.function.LongPredicate',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.stream.LongStream java.util.stream.LongStream.mapMulti(java.util.stream.LongStream$LongMapMultiConsumer) */
			/* name */ 'mapMulti',
			[/* parameters */
				[/* parameter */
					/* name */ 'mapper',
					/* type */ 'java.util.stream.LongStream$LongMapMultiConsumer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.stream.LongStream java.util.stream.LongStream.takeWhile(java.util.function.LongPredicate) */
			/* name */ 'takeWhile',
			[/* parameters */
				[/* parameter */
					/* name */ 'predicate',
					/* type */ 'java.util.function.LongPredicate',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.LongStream java.util.stream.LongStream.concat(java.util.stream.LongStream,java.util.stream.LongStream) */
			/* name */ 'concat',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'java.util.stream.LongStream',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'b',
					/* type */ 'java.util.stream.LongStream',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.LongStream java.util.stream.LongStream.empty() */
			/* name */ 'empty',
			/* parameters */,
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.LongStream java.util.stream.LongStream.generate(java.util.function.LongSupplier) */
			/* name */ 'generate',
			[/* parameters */
				[/* parameter */
					/* name */ 's',
					/* type */ 'java.util.function.LongSupplier',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.LongStream java.util.stream.LongStream.iterate(long,java.util.function.LongPredicate,java.util.function.LongUnaryOperator) */
			/* name */ 'iterate',
			[/* parameters */
				[/* parameter */
					/* name */ 'seed',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.function.LongPredicate',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'hasNext',
					/* type */ 'java.util.function.LongUnaryOperator',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.LongStream java.util.stream.LongStream.iterate(long,java.util.function.LongUnaryOperator) */
			/* name */ 'iterate',
			[/* parameters */
				[/* parameter */
					/* name */ 'seed',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.function.LongUnaryOperator',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.LongStream java.util.stream.LongStream.of(long) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 't',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.LongStream java.util.stream.LongStream.of(long...) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'values',
					/* type */ '[J',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 137,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.LongStream java.util.stream.LongStream.range(long,long) */
			/* name */ 'range',
			[/* parameters */
				[/* parameter */
					/* name */ 'startInclusive',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.LongStream java.util.stream.LongStream.rangeClosed(long,long) */
			/* name */ 'rangeClosed',
			[/* parameters */
				[/* parameter */
					/* name */ 'startInclusive',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.LongStream$Builder java.util.stream.LongStream.builder() */
			/* name */ 'builder',
			/* parameters */,
			/* return */ 'java.util.stream.LongStream$Builder',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
