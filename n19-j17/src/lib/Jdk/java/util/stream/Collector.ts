import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.stream.Collector', [
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
		],
		[/* type variable */
			/* name */ 'A',
			[/* bounds */
				'java.lang.Object'
			],
			/* annotations */ UDF
		],
		[/* type variable */
			/* name */ 'R',
			[/* bounds */
				'java.lang.Object'
			],
			/* annotations */ UDF
		]
	],
	/* declared constructors */,
	[/* declared methods */
		[/* public static <T,A,R> java.util.stream.Collector<T, A, R> java.util.stream.Collector.of(java.util.function.Supplier<A>,java.util.function.BiConsumer<A, T>,java.util.function.BinaryOperator<A>,java.util.function.Function<A, R>,java.util.stream.Collector$Characteristics...) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'A']]
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
							[/* type variable ref */ 'tr', [/* name */ 'A']],
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.util.function.BiConsumer',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'A']]
						],
						/* raw type */ 'java.util.function.BinaryOperator',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg3',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'A']],
							[/* type variable ref */ 'tr', [/* name */ 'R']]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg4',
					/* type */ '[Ljava.util.stream.Collector$Characteristics;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* type variable ref */ 'tr', [/* name */ 'A']],
					[/* type variable ref */ 'tr', [/* name */ 'R']]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 137,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'A',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'R',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T,R> java.util.stream.Collector<T, R, R> java.util.stream.Collector.of(java.util.function.Supplier<R>,java.util.function.BiConsumer<R, T>,java.util.function.BinaryOperator<R>,java.util.stream.Collector$Characteristics...) */
			/* name */ 'of',
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
							[/* type variable ref */ 'tr', [/* name */ 'R']],
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.util.function.BiConsumer',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'R']]
						],
						/* raw type */ 'java.util.function.BinaryOperator',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg3',
					/* type */ '[Ljava.util.stream.Collector$Characteristics;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* type variable ref */ 'tr', [/* name */ 'R']],
					[/* type variable ref */ 'tr', [/* name */ 'R']]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 137,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'R',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public abstract java.util.Set<java.util.stream.Collector$Characteristics> java.util.stream.Collector.characteristics() */
			/* name */ 'characteristics',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.util.stream.Collector$Characteristics'
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.function.BinaryOperator<A> java.util.stream.Collector.combiner() */
			/* name */ 'combiner',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'A']]
				],
				/* raw type */ 'java.util.function.BinaryOperator',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.function.Supplier<A> java.util.stream.Collector.supplier() */
			/* name */ 'supplier',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'A']]
				],
				/* raw type */ 'java.util.function.Supplier',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.function.BiConsumer<A, T> java.util.stream.Collector.accumulator() */
			/* name */ 'accumulator',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'A']],
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.function.BiConsumer',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.function.Function<A, R> java.util.stream.Collector.finisher() */
			/* name */ 'finisher',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'A']],
					[/* type variable ref */ 'tr', [/* name */ 'R']]
				],
				/* raw type */ 'java.util.function.Function',
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
