import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.stream.DoubleStream', [
	/* super class */,
	[/* interfaces, implements java.util.stream.BaseStream<java.lang.Double, java.util.stream.DoubleStream> */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.lang.Double',
				'java.util.stream.DoubleStream'
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
		[/* public abstract <R> R java.util.stream.DoubleStream.collect(java.util.function.Supplier<R>,java.util.function.ObjDoubleConsumer<R>,java.util.function.BiConsumer<R, R>) */
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
						/* raw type */ 'java.util.function.ObjDoubleConsumer',
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
		[/* public abstract <U> java.util.stream.Stream<U> java.util.stream.DoubleStream.mapToObj(java.util.function.DoubleFunction<? extends U>) */
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
						/* raw type */ 'java.util.function.DoubleFunction',
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
		[/* public abstract boolean java.util.stream.DoubleStream.allMatch(java.util.function.DoublePredicate) */
			/* name */ 'allMatch',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.DoublePredicate',
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
		[/* public abstract boolean java.util.stream.DoubleStream.anyMatch(java.util.function.DoublePredicate) */
			/* name */ 'anyMatch',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.DoublePredicate',
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
		[/* public abstract boolean java.util.stream.DoubleStream.noneMatch(java.util.function.DoublePredicate) */
			/* name */ 'noneMatch',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.DoublePredicate',
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
		[/* public abstract double java.util.stream.DoubleStream.reduce(double,java.util.function.DoubleBinaryOperator) */
			/* name */ 'reduce',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.function.DoubleBinaryOperator',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract double java.util.stream.DoubleStream.sum() */
			/* name */ 'sum',
			/* parameters */,
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract double[] java.util.stream.DoubleStream.toArray() */
			/* name */ 'toArray',
			/* parameters */,
			/* return */ '[D',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.DoubleSummaryStatistics java.util.stream.DoubleStream.summaryStatistics() */
			/* name */ 'summaryStatistics',
			/* parameters */,
			/* return */ 'java.util.DoubleSummaryStatistics',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.OptionalDouble java.util.stream.DoubleStream.average() */
			/* name */ 'average',
			/* parameters */,
			/* return */ 'java.util.OptionalDouble',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.OptionalDouble java.util.stream.DoubleStream.findAny() */
			/* name */ 'findAny',
			/* parameters */,
			/* return */ 'java.util.OptionalDouble',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.OptionalDouble java.util.stream.DoubleStream.findFirst() */
			/* name */ 'findFirst',
			/* parameters */,
			/* return */ 'java.util.OptionalDouble',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.OptionalDouble java.util.stream.DoubleStream.max() */
			/* name */ 'max',
			/* parameters */,
			/* return */ 'java.util.OptionalDouble',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.OptionalDouble java.util.stream.DoubleStream.min() */
			/* name */ 'min',
			/* parameters */,
			/* return */ 'java.util.OptionalDouble',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.OptionalDouble java.util.stream.DoubleStream.reduce(java.util.function.DoubleBinaryOperator) */
			/* name */ 'reduce',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.DoubleBinaryOperator',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.OptionalDouble',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.PrimitiveIterator$OfDouble java.util.stream.DoubleStream.iterator() */
			/* name */ 'iterator',
			/* parameters */,
			/* return */ 'java.util.PrimitiveIterator$OfDouble',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Spliterator$OfDouble java.util.stream.DoubleStream.spliterator() */
			/* name */ 'spliterator',
			/* parameters */,
			/* return */ 'java.util.Spliterator$OfDouble',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.DoubleStream java.util.stream.DoubleStream.distinct() */
			/* name */ 'distinct',
			/* parameters */,
			/* return */ 'java.util.stream.DoubleStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.DoubleStream java.util.stream.DoubleStream.filter(java.util.function.DoublePredicate) */
			/* name */ 'filter',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.DoublePredicate',
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
		[/* public abstract java.util.stream.DoubleStream java.util.stream.DoubleStream.flatMap(java.util.function.DoubleFunction<? extends java.util.stream.DoubleStream>) */
			/* name */ 'flatMap',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.util.stream.DoubleStream'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.DoubleFunction',
						/* owner type */ UDF
					]],
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
		[/* public abstract java.util.stream.DoubleStream java.util.stream.DoubleStream.limit(long) */
			/* name */ 'limit',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
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
		[/* public abstract java.util.stream.DoubleStream java.util.stream.DoubleStream.map(java.util.function.DoubleUnaryOperator) */
			/* name */ 'map',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.DoubleUnaryOperator',
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
		[/* public abstract java.util.stream.DoubleStream java.util.stream.DoubleStream.parallel() */
			/* name */ 'parallel',
			/* parameters */,
			/* return */ 'java.util.stream.DoubleStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.DoubleStream java.util.stream.DoubleStream.peek(java.util.function.DoubleConsumer) */
			/* name */ 'peek',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.DoubleConsumer',
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
		[/* public abstract java.util.stream.DoubleStream java.util.stream.DoubleStream.sequential() */
			/* name */ 'sequential',
			/* parameters */,
			/* return */ 'java.util.stream.DoubleStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.DoubleStream java.util.stream.DoubleStream.skip(long) */
			/* name */ 'skip',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
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
		[/* public abstract java.util.stream.DoubleStream java.util.stream.DoubleStream.sorted() */
			/* name */ 'sorted',
			/* parameters */,
			/* return */ 'java.util.stream.DoubleStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.IntStream java.util.stream.DoubleStream.mapToInt(java.util.function.DoubleToIntFunction) */
			/* name */ 'mapToInt',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.DoubleToIntFunction',
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
		[/* public abstract java.util.stream.LongStream java.util.stream.DoubleStream.mapToLong(java.util.function.DoubleToLongFunction) */
			/* name */ 'mapToLong',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.DoubleToLongFunction',
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
		[/* public abstract java.util.stream.Stream<java.lang.Double> java.util.stream.DoubleStream.boxed() */
			/* name */ 'boxed',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Double'
				],
				/* raw type */ 'java.util.stream.Stream',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract long java.util.stream.DoubleStream.count() */
			/* name */ 'count',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract void java.util.stream.DoubleStream.forEach(java.util.function.DoubleConsumer) */
			/* name */ 'forEach',
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
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract void java.util.stream.DoubleStream.forEachOrdered(java.util.function.DoubleConsumer) */
			/* name */ 'forEachOrdered',
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
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.Iterator java.util.stream.DoubleStream.iterator() */
			/* name */ 'iterator',
			/* parameters */,
			/* return */ 'java.util.Iterator',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.Spliterator java.util.stream.DoubleStream.spliterator() */
			/* name */ 'spliterator',
			/* parameters */,
			/* return */ 'java.util.Spliterator',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.stream.BaseStream java.util.stream.DoubleStream.parallel() */
			/* name */ 'parallel',
			/* parameters */,
			/* return */ 'java.util.stream.BaseStream',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.stream.BaseStream java.util.stream.DoubleStream.sequential() */
			/* name */ 'sequential',
			/* parameters */,
			/* return */ 'java.util.stream.BaseStream',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.stream.DoubleStream java.util.stream.DoubleStream.dropWhile(java.util.function.DoublePredicate) */
			/* name */ 'dropWhile',
			[/* parameters */
				[/* parameter */
					/* name */ 'predicate',
					/* type */ 'java.util.function.DoublePredicate',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.DoubleStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.stream.DoubleStream java.util.stream.DoubleStream.mapMulti(java.util.stream.DoubleStream$DoubleMapMultiConsumer) */
			/* name */ 'mapMulti',
			[/* parameters */
				[/* parameter */
					/* name */ 'mapper',
					/* type */ 'java.util.stream.DoubleStream$DoubleMapMultiConsumer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.DoubleStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.stream.DoubleStream java.util.stream.DoubleStream.takeWhile(java.util.function.DoublePredicate) */
			/* name */ 'takeWhile',
			[/* parameters */
				[/* parameter */
					/* name */ 'predicate',
					/* type */ 'java.util.function.DoublePredicate',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.DoubleStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.DoubleStream java.util.stream.DoubleStream.concat(java.util.stream.DoubleStream,java.util.stream.DoubleStream) */
			/* name */ 'concat',
			[/* parameters */
				[/* parameter */
					/* name */ 'b',
					/* type */ 'java.util.stream.DoubleStream',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'split',
					/* type */ 'java.util.stream.DoubleStream',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.DoubleStream',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.DoubleStream java.util.stream.DoubleStream.empty() */
			/* name */ 'empty',
			/* parameters */,
			/* return */ 'java.util.stream.DoubleStream',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.DoubleStream java.util.stream.DoubleStream.generate(java.util.function.DoubleSupplier) */
			/* name */ 'generate',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.DoubleSupplier',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.DoubleStream',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.DoubleStream java.util.stream.DoubleStream.iterate(double,java.util.function.DoublePredicate,java.util.function.DoubleUnaryOperator) */
			/* name */ 'iterate',
			[/* parameters */
				[/* parameter */
					/* name */ 'hasNext',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'next',
					/* type */ 'java.util.function.DoublePredicate',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'spliterator',
					/* type */ 'java.util.function.DoubleUnaryOperator',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.DoubleStream',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.DoubleStream java.util.stream.DoubleStream.iterate(double,java.util.function.DoubleUnaryOperator) */
			/* name */ 'iterate',
			[/* parameters */
				[/* parameter */
					/* name */ 'f',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'spliterator',
					/* type */ 'java.util.function.DoubleUnaryOperator',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.DoubleStream',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.DoubleStream java.util.stream.DoubleStream.of(double) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.DoubleStream',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.DoubleStream java.util.stream.DoubleStream.of(double...) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[D',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.DoubleStream',
			/* exceptions */,
			/* modifiers */ 137,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.DoubleStream$Builder java.util.stream.DoubleStream.builder() */
			/* name */ 'builder',
			/* parameters */,
			/* return */ 'java.util.stream.DoubleStream$Builder',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
