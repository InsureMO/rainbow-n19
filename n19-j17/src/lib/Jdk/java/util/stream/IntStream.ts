import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.stream.IntStream', [
	/* super class */,
	[/* interfaces, implements java.util.stream.BaseStream<java.lang.Integer, java.util.stream.IntStream> */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.lang.Integer',
				'java.util.stream.IntStream'
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
		[/* public abstract java.util.OptionalInt java.util.stream.IntStream.min() */
			/* name */ 'min',
			/* parameters */,
			/* return */ 'java.util.OptionalInt',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.OptionalInt java.util.stream.IntStream.max() */
			/* name */ 'max',
			/* parameters */,
			/* return */ 'java.util.OptionalInt',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int[] java.util.stream.IntStream.toArray() */
			/* name */ 'toArray',
			/* parameters */,
			/* return */ '[I',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.Iterator java.util.stream.IntStream.iterator() */
			/* name */ 'iterator',
			/* parameters */,
			/* return */ 'java.util.Iterator',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.PrimitiveIterator$OfInt java.util.stream.IntStream.iterator() */
			/* name */ 'iterator',
			/* parameters */,
			/* return */ 'java.util.PrimitiveIterator$OfInt',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.IntStream java.util.stream.IntStream.map(java.util.function.IntUnaryOperator) */
			/* name */ 'map',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.IntUnaryOperator',
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
		[/* public abstract <R> R java.util.stream.IntStream.collect(java.util.function.Supplier<R>,java.util.function.ObjIntConsumer<R>,java.util.function.BiConsumer<R, R>) */
			/* name */ 'collect',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'R']]
						],
						/* raw type */ 'java.util.function.ObjIntConsumer',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
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
		[/* public static java.util.stream.IntStream java.util.stream.IntStream.of(int) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.IntStream',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.IntStream java.util.stream.IntStream.of(int...) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[I',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.IntStream',
			/* exceptions */,
			/* modifiers */ 137,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract long java.util.stream.IntStream.count() */
			/* name */ 'count',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.IntStream$Builder java.util.stream.IntStream.builder() */
			/* name */ 'builder',
			/* parameters */,
			/* return */ 'java.util.stream.IntStream$Builder',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.IntStream java.util.stream.IntStream.concat(java.util.stream.IntStream,java.util.stream.IntStream) */
			/* name */ 'concat',
			[/* parameters */
				[/* parameter */
					/* name */ 'b',
					/* type */ 'java.util.stream.IntStream',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'split',
					/* type */ 'java.util.stream.IntStream',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.IntStream',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.IntStream java.util.stream.IntStream.limit(long) */
			/* name */ 'limit',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
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
		[/* public abstract java.util.Spliterator$OfInt java.util.stream.IntStream.spliterator() */
			/* name */ 'spliterator',
			/* parameters */,
			/* return */ 'java.util.Spliterator$OfInt',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.Spliterator java.util.stream.IntStream.spliterator() */
			/* name */ 'spliterator',
			/* parameters */,
			/* return */ 'java.util.Spliterator',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.IntStream java.util.stream.IntStream.filter(java.util.function.IntPredicate) */
			/* name */ 'filter',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.IntPredicate',
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
		[/* public static java.util.stream.IntStream java.util.stream.IntStream.empty() */
			/* name */ 'empty',
			/* parameters */,
			/* return */ 'java.util.stream.IntStream',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.util.stream.IntStream.anyMatch(java.util.function.IntPredicate) */
			/* name */ 'anyMatch',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.IntPredicate',
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
		[/* public abstract java.util.stream.IntStream java.util.stream.IntStream.flatMap(java.util.function.IntFunction<? extends java.util.stream.IntStream>) */
			/* name */ 'flatMap',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.util.stream.IntStream'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.IntFunction',
						/* owner type */ UDF
					]],
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
		[/* public abstract void java.util.stream.IntStream.forEach(java.util.function.IntConsumer) */
			/* name */ 'forEach',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.IntConsumer',
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
		[/* public abstract java.util.OptionalInt java.util.stream.IntStream.findAny() */
			/* name */ 'findAny',
			/* parameters */,
			/* return */ 'java.util.OptionalInt',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.IntStream java.util.stream.IntStream.skip(long) */
			/* name */ 'skip',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
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
		[/* public abstract java.util.stream.IntStream java.util.stream.IntStream.peek(java.util.function.IntConsumer) */
			/* name */ 'peek',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.IntConsumer',
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
		[/* public abstract int java.util.stream.IntStream.sum() */
			/* name */ 'sum',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.util.stream.IntStream.reduce(int,java.util.function.IntBinaryOperator) */
			/* name */ 'reduce',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.function.IntBinaryOperator',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.OptionalInt java.util.stream.IntStream.reduce(java.util.function.IntBinaryOperator) */
			/* name */ 'reduce',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.IntBinaryOperator',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.OptionalInt',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.IntStream java.util.stream.IntStream.distinct() */
			/* name */ 'distinct',
			/* parameters */,
			/* return */ 'java.util.stream.IntStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.OptionalInt java.util.stream.IntStream.findFirst() */
			/* name */ 'findFirst',
			/* parameters */,
			/* return */ 'java.util.OptionalInt',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.util.stream.IntStream.allMatch(java.util.function.IntPredicate) */
			/* name */ 'allMatch',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.IntPredicate',
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
		[/* public static java.util.stream.IntStream java.util.stream.IntStream.range(int,int) */
			/* name */ 'range',
			[/* parameters */
				[/* parameter */
					/* name */ 'endExclusive',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.IntStream',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.IntStream java.util.stream.IntStream.parallel() */
			/* name */ 'parallel',
			/* parameters */,
			/* return */ 'java.util.stream.IntStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.stream.BaseStream java.util.stream.IntStream.parallel() */
			/* name */ 'parallel',
			/* parameters */,
			/* return */ 'java.util.stream.BaseStream',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.IntStream java.util.stream.IntStream.iterate(int,java.util.function.IntUnaryOperator) */
			/* name */ 'iterate',
			[/* parameters */
				[/* parameter */
					/* name */ 'f',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'spliterator',
					/* type */ 'java.util.function.IntUnaryOperator',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.IntStream',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.IntStream java.util.stream.IntStream.iterate(int,java.util.function.IntPredicate,java.util.function.IntUnaryOperator) */
			/* name */ 'iterate',
			[/* parameters */
				[/* parameter */
					/* name */ 'hasNext',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'next',
					/* type */ 'java.util.function.IntPredicate',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'spliterator',
					/* type */ 'java.util.function.IntUnaryOperator',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.IntStream',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.IntStream java.util.stream.IntStream.sorted() */
			/* name */ 'sorted',
			/* parameters */,
			/* return */ 'java.util.stream.IntStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.IntStream java.util.stream.IntStream.generate(java.util.function.IntSupplier) */
			/* name */ 'generate',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.IntSupplier',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.IntStream',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.stream.BaseStream java.util.stream.IntStream.sequential() */
			/* name */ 'sequential',
			/* parameters */,
			/* return */ 'java.util.stream.BaseStream',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.IntStream java.util.stream.IntStream.sequential() */
			/* name */ 'sequential',
			/* parameters */,
			/* return */ 'java.util.stream.IntStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.LongStream java.util.stream.IntStream.mapToLong(java.util.function.IntToLongFunction) */
			/* name */ 'mapToLong',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.IntToLongFunction',
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
		[/* public abstract java.util.stream.DoubleStream java.util.stream.IntStream.mapToDouble(java.util.function.IntToDoubleFunction) */
			/* name */ 'mapToDouble',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.IntToDoubleFunction',
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
		[/* public default java.util.stream.IntStream java.util.stream.IntStream.mapMulti(java.util.stream.IntStream$IntMapMultiConsumer) */
			/* name */ 'mapMulti',
			[/* parameters */
				[/* parameter */
					/* name */ 'mapper',
					/* type */ 'java.util.stream.IntStream$IntMapMultiConsumer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.IntStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.stream.IntStream java.util.stream.IntStream.takeWhile(java.util.function.IntPredicate) */
			/* name */ 'takeWhile',
			[/* parameters */
				[/* parameter */
					/* name */ 'predicate',
					/* type */ 'java.util.function.IntPredicate',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.IntStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.stream.IntStream java.util.stream.IntStream.dropWhile(java.util.function.IntPredicate) */
			/* name */ 'dropWhile',
			[/* parameters */
				[/* parameter */
					/* name */ 'predicate',
					/* type */ 'java.util.function.IntPredicate',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.IntStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract void java.util.stream.IntStream.forEachOrdered(java.util.function.IntConsumer) */
			/* name */ 'forEachOrdered',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.IntConsumer',
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
		[/* public abstract boolean java.util.stream.IntStream.noneMatch(java.util.function.IntPredicate) */
			/* name */ 'noneMatch',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.IntPredicate',
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
		[/* public abstract <U> java.util.stream.Stream<U> java.util.stream.IntStream.mapToObj(java.util.function.IntFunction<? extends U>) */
			/* name */ 'mapToObj',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.IntFunction',
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
		[/* public static java.util.stream.IntStream java.util.stream.IntStream.rangeClosed(int,int) */
			/* name */ 'rangeClosed',
			[/* parameters */
				[/* parameter */
					/* name */ 'endInclusive',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.IntStream',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.OptionalDouble java.util.stream.IntStream.average() */
			/* name */ 'average',
			/* parameters */,
			/* return */ 'java.util.OptionalDouble',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.IntSummaryStatistics java.util.stream.IntStream.summaryStatistics() */
			/* name */ 'summaryStatistics',
			/* parameters */,
			/* return */ 'java.util.IntSummaryStatistics',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.LongStream java.util.stream.IntStream.asLongStream() */
			/* name */ 'asLongStream',
			/* parameters */,
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.DoubleStream java.util.stream.IntStream.asDoubleStream() */
			/* name */ 'asDoubleStream',
			/* parameters */,
			/* return */ 'java.util.stream.DoubleStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.Stream<java.lang.Integer> java.util.stream.IntStream.boxed() */
			/* name */ 'boxed',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Integer'
				],
				/* raw type */ 'java.util.stream.Stream',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
