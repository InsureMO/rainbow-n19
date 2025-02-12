import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.stream.Collectors', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public static java.util.stream.Collector<java.lang.CharSequence, ?, java.lang.String> java.util.stream.Collectors.joining() */
			/* name */ 'joining',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.CharSequence',
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					'java.lang.String'
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.Collector<java.lang.CharSequence, ?, java.lang.String> java.util.stream.Collectors.joining(java.lang.CharSequence,java.lang.CharSequence,java.lang.CharSequence) */
			/* name */ 'joining',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.CharSequence',
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					'java.lang.String'
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.Collector<java.lang.CharSequence, ?, java.lang.String> java.util.stream.Collectors.joining(java.lang.CharSequence) */
			/* name */ 'joining',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.CharSequence',
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					'java.lang.String'
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static <T> java.util.stream.Collector<T, ?, java.util.List<T>> java.util.stream.Collectors.toList() */
			/* name */ 'toList',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T,K,U> java.util.stream.Collector<T, ?, java.util.Map<K, U>> java.util.stream.Collectors.toMap(java.util.function.Function<? super T, ? extends K>,java.util.function.Function<? super T, ? extends U>) */
			/* name */ 'toMap',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'K']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'K']],
							[/* type variable ref */ 'tr', [/* name */ 'U']]
						],
						/* raw type */ 'java.util.Map',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
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
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T,K,U,M extends java.util.Map<K, U>> java.util.stream.Collector<T, ?, M> java.util.stream.Collectors.toMap(java.util.function.Function<? super T, ? extends K>,java.util.function.Function<? super T, ? extends U>,java.util.function.BinaryOperator<U>,java.util.function.Supplier<M>) */
			/* name */ 'toMap',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'K']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'U']]
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
							[/* type variable ref */ 'tr', [/* name */ 'M']]
						],
						/* raw type */ 'java.util.function.Supplier',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* type variable ref */ 'tr', [/* name */ 'M']]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
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
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'M',
					[/* bounds */
						[/* parameterized type */ 'pt', [
							[/* actual argument types */
								[/* type variable ref */ 'tr', [/* name */ 'K']],
								[/* type variable ref */ 'tr', [/* name */ 'U']]
							],
							/* raw type */ 'java.util.Map',
							/* owner type */ UDF
						]]
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T,K,U> java.util.stream.Collector<T, ?, java.util.Map<K, U>> java.util.stream.Collectors.toMap(java.util.function.Function<? super T, ? extends K>,java.util.function.Function<? super T, ? extends U>,java.util.function.BinaryOperator<U>) */
			/* name */ 'toMap',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'K']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'U']]
						],
						/* raw type */ 'java.util.function.BinaryOperator',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'K']],
							[/* type variable ref */ 'tr', [/* name */ 'U']]
						],
						/* raw type */ 'java.util.Map',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
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
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T> java.util.stream.Collector<T, ?, java.util.Set<T>> java.util.stream.Collectors.toSet() */
			/* name */ 'toSet',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.util.Set',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T> java.util.stream.Collector<T, ?, java.util.Map<java.lang.Boolean, java.util.List<T>>> java.util.stream.Collectors.partitioningBy(java.util.function.Predicate<? super T>) */
			/* name */ 'partitioningBy',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]]
						],
						/* raw type */ 'java.util.function.Predicate',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.Boolean',
							[/* parameterized type */ 'pt', [
								[/* actual argument types */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								],
								/* raw type */ 'java.util.List',
								/* owner type */ UDF
							]]
						],
						/* raw type */ 'java.util.Map',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T,D,A> java.util.stream.Collector<T, ?, java.util.Map<java.lang.Boolean, D>> java.util.stream.Collectors.partitioningBy(java.util.function.Predicate<? super T>,java.util.stream.Collector<? super T, A, D>) */
			/* name */ 'partitioningBy',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]]
						],
						/* raw type */ 'java.util.function.Predicate',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* type variable ref */ 'tr', [/* name */ 'A']],
							[/* type variable ref */ 'tr', [/* name */ 'D']]
						],
						/* raw type */ 'java.util.stream.Collector',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.Boolean',
							[/* type variable ref */ 'tr', [/* name */ 'D']]
						],
						/* raw type */ 'java.util.Map',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
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
					/* name */ 'D',
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
				]
			]
		],
		[/* public static <T> java.util.stream.Collector<T, ?, java.util.Optional<T>> java.util.stream.Collectors.maxBy(java.util.Comparator<? super T>) */
			/* name */ 'maxBy',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]]
						],
						/* raw type */ 'java.util.Comparator',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.util.Optional',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T> java.util.stream.Collector<T, ?, java.util.Optional<T>> java.util.stream.Collectors.minBy(java.util.Comparator<? super T>) */
			/* name */ 'minBy',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]]
						],
						/* raw type */ 'java.util.Comparator',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.util.Optional',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T> java.util.stream.Collector<T, ?, java.lang.Long> java.util.stream.Collectors.summingLong(java.util.function.ToLongFunction<? super T>) */
			/* name */ 'summingLong',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]]
						],
						/* raw type */ 'java.util.function.ToLongFunction',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					'java.lang.Long'
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T> java.util.stream.Collector<T, ?, T> java.util.stream.Collectors.reducing(T,java.util.function.BinaryOperator<T>) */
			/* name */ 'reducing',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.util.function.BinaryOperator',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T> java.util.stream.Collector<T, ?, java.util.Optional<T>> java.util.stream.Collectors.reducing(java.util.function.BinaryOperator<T>) */
			/* name */ 'reducing',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.util.function.BinaryOperator',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.util.Optional',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T,U> java.util.stream.Collector<T, ?, U> java.util.stream.Collectors.reducing(U,java.util.function.Function<? super T, ? extends U>,java.util.function.BinaryOperator<U>) */
			/* name */ 'reducing',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'U']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'U']]
						],
						/* raw type */ 'java.util.function.BinaryOperator',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* type variable ref */ 'tr', [/* name */ 'U']]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
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
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T,K> java.util.stream.Collector<T, ?, java.util.Map<K, java.util.List<T>>> java.util.stream.Collectors.groupingBy(java.util.function.Function<? super T, ? extends K>) */
			/* name */ 'groupingBy',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'K']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'K']],
							[/* parameterized type */ 'pt', [
								[/* actual argument types */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								],
								/* raw type */ 'java.util.List',
								/* owner type */ UDF
							]]
						],
						/* raw type */ 'java.util.Map',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
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
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T,K,A,D> java.util.stream.Collector<T, ?, java.util.Map<K, D>> java.util.stream.Collectors.groupingBy(java.util.function.Function<? super T, ? extends K>,java.util.stream.Collector<? super T, A, D>) */
			/* name */ 'groupingBy',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'K']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* type variable ref */ 'tr', [/* name */ 'A']],
							[/* type variable ref */ 'tr', [/* name */ 'D']]
						],
						/* raw type */ 'java.util.stream.Collector',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'K']],
							[/* type variable ref */ 'tr', [/* name */ 'D']]
						],
						/* raw type */ 'java.util.Map',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
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
					/* name */ 'K',
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
					/* name */ 'D',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T,K,D,A,M extends java.util.Map<K, D>> java.util.stream.Collector<T, ?, M> java.util.stream.Collectors.groupingBy(java.util.function.Function<? super T, ? extends K>,java.util.function.Supplier<M>,java.util.stream.Collector<? super T, A, D>) */
			/* name */ 'groupingBy',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'K']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'M']]
						],
						/* raw type */ 'java.util.function.Supplier',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* type variable ref */ 'tr', [/* name */ 'A']],
							[/* type variable ref */ 'tr', [/* name */ 'D']]
						],
						/* raw type */ 'java.util.stream.Collector',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* type variable ref */ 'tr', [/* name */ 'M']]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
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
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'D',
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
					/* name */ 'M',
					[/* bounds */
						[/* parameterized type */ 'pt', [
							[/* actual argument types */
								[/* type variable ref */ 'tr', [/* name */ 'K']],
								[/* type variable ref */ 'tr', [/* name */ 'D']]
							],
							/* raw type */ 'java.util.Map',
							/* owner type */ UDF
						]]
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T,K,A,D,M extends java.util.concurrent.ConcurrentMap<K, D>> java.util.stream.Collector<T, ?, M> java.util.stream.Collectors.groupingByConcurrent(java.util.function.Function<? super T, ? extends K>,java.util.function.Supplier<M>,java.util.stream.Collector<? super T, A, D>) */
			/* name */ 'groupingByConcurrent',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'K']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'M']]
						],
						/* raw type */ 'java.util.function.Supplier',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* type variable ref */ 'tr', [/* name */ 'A']],
							[/* type variable ref */ 'tr', [/* name */ 'D']]
						],
						/* raw type */ 'java.util.stream.Collector',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* type variable ref */ 'tr', [/* name */ 'M']]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
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
					/* name */ 'K',
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
					/* name */ 'D',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'M',
					[/* bounds */
						[/* parameterized type */ 'pt', [
							[/* actual argument types */
								[/* type variable ref */ 'tr', [/* name */ 'K']],
								[/* type variable ref */ 'tr', [/* name */ 'D']]
							],
							/* raw type */ 'java.util.concurrent.ConcurrentMap',
							/* owner type */ UDF
						]]
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T,K,A,D> java.util.stream.Collector<T, ?, java.util.concurrent.ConcurrentMap<K, D>> java.util.stream.Collectors.groupingByConcurrent(java.util.function.Function<? super T, ? extends K>,java.util.stream.Collector<? super T, A, D>) */
			/* name */ 'groupingByConcurrent',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'K']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* type variable ref */ 'tr', [/* name */ 'A']],
							[/* type variable ref */ 'tr', [/* name */ 'D']]
						],
						/* raw type */ 'java.util.stream.Collector',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'K']],
							[/* type variable ref */ 'tr', [/* name */ 'D']]
						],
						/* raw type */ 'java.util.concurrent.ConcurrentMap',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
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
					/* name */ 'K',
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
					/* name */ 'D',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T,K> java.util.stream.Collector<T, ?, java.util.concurrent.ConcurrentMap<K, java.util.List<T>>> java.util.stream.Collectors.groupingByConcurrent(java.util.function.Function<? super T, ? extends K>) */
			/* name */ 'groupingByConcurrent',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'K']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'K']],
							[/* parameterized type */ 'pt', [
								[/* actual argument types */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								],
								/* raw type */ 'java.util.List',
								/* owner type */ UDF
							]]
						],
						/* raw type */ 'java.util.concurrent.ConcurrentMap',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
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
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T,A,R,RR> java.util.stream.Collector<T, A, RR> java.util.stream.Collectors.collectingAndThen(java.util.stream.Collector<T, A, R>,java.util.function.Function<R, RR>) */
			/* name */ 'collectingAndThen',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']],
							[/* type variable ref */ 'tr', [/* name */ 'A']],
							[/* type variable ref */ 'tr', [/* name */ 'R']]
						],
						/* raw type */ 'java.util.stream.Collector',
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
							[/* type variable ref */ 'tr', [/* name */ 'RR']]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* type variable ref */ 'tr', [/* name */ 'A']],
					[/* type variable ref */ 'tr', [/* name */ 'RR']]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
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
				],
				[/* type variable */
					/* name */ 'RR',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T,K,U> java.util.stream.Collector<T, ?, java.util.concurrent.ConcurrentMap<K, U>> java.util.stream.Collectors.toConcurrentMap(java.util.function.Function<? super T, ? extends K>,java.util.function.Function<? super T, ? extends U>) */
			/* name */ 'toConcurrentMap',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'K']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'K']],
							[/* type variable ref */ 'tr', [/* name */ 'U']]
						],
						/* raw type */ 'java.util.concurrent.ConcurrentMap',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
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
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T,K,U> java.util.stream.Collector<T, ?, java.util.concurrent.ConcurrentMap<K, U>> java.util.stream.Collectors.toConcurrentMap(java.util.function.Function<? super T, ? extends K>,java.util.function.Function<? super T, ? extends U>,java.util.function.BinaryOperator<U>) */
			/* name */ 'toConcurrentMap',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'K']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'U']]
						],
						/* raw type */ 'java.util.function.BinaryOperator',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'K']],
							[/* type variable ref */ 'tr', [/* name */ 'U']]
						],
						/* raw type */ 'java.util.concurrent.ConcurrentMap',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
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
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T,K,U,M extends java.util.concurrent.ConcurrentMap<K, U>> java.util.stream.Collector<T, ?, M> java.util.stream.Collectors.toConcurrentMap(java.util.function.Function<? super T, ? extends K>,java.util.function.Function<? super T, ? extends U>,java.util.function.BinaryOperator<U>,java.util.function.Supplier<M>) */
			/* name */ 'toConcurrentMap',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'K']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'U']]
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
							[/* type variable ref */ 'tr', [/* name */ 'M']]
						],
						/* raw type */ 'java.util.function.Supplier',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* type variable ref */ 'tr', [/* name */ 'M']]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
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
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'M',
					[/* bounds */
						[/* parameterized type */ 'pt', [
							[/* actual argument types */
								[/* type variable ref */ 'tr', [/* name */ 'K']],
								[/* type variable ref */ 'tr', [/* name */ 'U']]
							],
							/* raw type */ 'java.util.concurrent.ConcurrentMap',
							/* owner type */ UDF
						]]
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T,C extends java.util.Collection<T>> java.util.stream.Collector<T, ?, C> java.util.stream.Collectors.toCollection(java.util.function.Supplier<C>) */
			/* name */ 'toCollection',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'C']]
						],
						/* raw type */ 'java.util.function.Supplier',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* type variable ref */ 'tr', [/* name */ 'C']]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
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
					/* name */ 'C',
					[/* bounds */
						[/* parameterized type */ 'pt', [
							[/* actual argument types */
								[/* type variable ref */ 'tr', [/* name */ 'T']]
							],
							/* raw type */ 'java.util.Collection',
							/* owner type */ UDF
						]]
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T> java.util.stream.Collector<T, ?, java.util.List<T>> java.util.stream.Collectors.toUnmodifiableList() */
			/* name */ 'toUnmodifiableList',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T> java.util.stream.Collector<T, ?, java.util.Set<T>> java.util.stream.Collectors.toUnmodifiableSet() */
			/* name */ 'toUnmodifiableSet',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.util.Set',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T,U,A,R> java.util.stream.Collector<T, ?, R> java.util.stream.Collectors.mapping(java.util.function.Function<? super T, ? extends U>,java.util.stream.Collector<? super U, A, R>) */
			/* name */ 'mapping',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								]
							]],
							[/* type variable ref */ 'tr', [/* name */ 'A']],
							[/* type variable ref */ 'tr', [/* name */ 'R']]
						],
						/* raw type */ 'java.util.stream.Collector',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* type variable ref */ 'tr', [/* name */ 'R']]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
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
					/* name */ 'U',
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
		[/* public static <T,U,A,R> java.util.stream.Collector<T, ?, R> java.util.stream.Collectors.flatMapping(java.util.function.Function<? super T, ? extends java.util.stream.Stream<? extends U>>,java.util.stream.Collector<? super U, A, R>) */
			/* name */ 'flatMapping',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* parameterized type */ 'pt', [
										[/* actual argument types */
											[/* wildcard type */ 'wt', [
												[/* upper bounds */
													[/* type variable ref */ 'tr', [/* name */ 'U']]
												],
												/* lower bounds */ UDF
											]]
										],
										/* raw type */ 'java.util.stream.Stream',
										/* owner type */ UDF
									]]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								]
							]],
							[/* type variable ref */ 'tr', [/* name */ 'A']],
							[/* type variable ref */ 'tr', [/* name */ 'R']]
						],
						/* raw type */ 'java.util.stream.Collector',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* type variable ref */ 'tr', [/* name */ 'R']]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
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
					/* name */ 'U',
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
		[/* public static <T,A,R> java.util.stream.Collector<T, ?, R> java.util.stream.Collectors.filtering(java.util.function.Predicate<? super T>,java.util.stream.Collector<? super T, A, R>) */
			/* name */ 'filtering',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]]
						],
						/* raw type */ 'java.util.function.Predicate',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* type variable ref */ 'tr', [/* name */ 'A']],
							[/* type variable ref */ 'tr', [/* name */ 'R']]
						],
						/* raw type */ 'java.util.stream.Collector',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* type variable ref */ 'tr', [/* name */ 'R']]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
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
		[/* public static <T> java.util.stream.Collector<T, ?, java.lang.Long> java.util.stream.Collectors.counting() */
			/* name */ 'counting',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					'java.lang.Long'
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T> java.util.stream.Collector<T, ?, java.lang.Integer> java.util.stream.Collectors.summingInt(java.util.function.ToIntFunction<? super T>) */
			/* name */ 'summingInt',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]]
						],
						/* raw type */ 'java.util.function.ToIntFunction',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					'java.lang.Integer'
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T> java.util.stream.Collector<T, ?, java.lang.Double> java.util.stream.Collectors.summingDouble(java.util.function.ToDoubleFunction<? super T>) */
			/* name */ 'summingDouble',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]]
						],
						/* raw type */ 'java.util.function.ToDoubleFunction',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					'java.lang.Double'
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T> java.util.stream.Collector<T, ?, java.lang.Double> java.util.stream.Collectors.averagingInt(java.util.function.ToIntFunction<? super T>) */
			/* name */ 'averagingInt',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]]
						],
						/* raw type */ 'java.util.function.ToIntFunction',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					'java.lang.Double'
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T> java.util.stream.Collector<T, ?, java.lang.Double> java.util.stream.Collectors.averagingLong(java.util.function.ToLongFunction<? super T>) */
			/* name */ 'averagingLong',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]]
						],
						/* raw type */ 'java.util.function.ToLongFunction',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					'java.lang.Double'
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T> java.util.stream.Collector<T, ?, java.lang.Double> java.util.stream.Collectors.averagingDouble(java.util.function.ToDoubleFunction<? super T>) */
			/* name */ 'averagingDouble',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]]
						],
						/* raw type */ 'java.util.function.ToDoubleFunction',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					'java.lang.Double'
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T,K,U> java.util.stream.Collector<T, ?, java.util.Map<K, U>> java.util.stream.Collectors.toUnmodifiableMap(java.util.function.Function<? super T, ? extends K>,java.util.function.Function<? super T, ? extends U>) */
			/* name */ 'toUnmodifiableMap',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'K']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'K']],
							[/* type variable ref */ 'tr', [/* name */ 'U']]
						],
						/* raw type */ 'java.util.Map',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
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
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T,K,U> java.util.stream.Collector<T, ?, java.util.Map<K, U>> java.util.stream.Collectors.toUnmodifiableMap(java.util.function.Function<? super T, ? extends K>,java.util.function.Function<? super T, ? extends U>,java.util.function.BinaryOperator<U>) */
			/* name */ 'toUnmodifiableMap',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'K']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'U']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'U']]
						],
						/* raw type */ 'java.util.function.BinaryOperator',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'K']],
							[/* type variable ref */ 'tr', [/* name */ 'U']]
						],
						/* raw type */ 'java.util.Map',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
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
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T> java.util.stream.Collector<T, ?, java.util.IntSummaryStatistics> java.util.stream.Collectors.summarizingInt(java.util.function.ToIntFunction<? super T>) */
			/* name */ 'summarizingInt',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]]
						],
						/* raw type */ 'java.util.function.ToIntFunction',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					'java.util.IntSummaryStatistics'
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T> java.util.stream.Collector<T, ?, java.util.LongSummaryStatistics> java.util.stream.Collectors.summarizingLong(java.util.function.ToLongFunction<? super T>) */
			/* name */ 'summarizingLong',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]]
						],
						/* raw type */ 'java.util.function.ToLongFunction',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					'java.util.LongSummaryStatistics'
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T> java.util.stream.Collector<T, ?, java.util.DoubleSummaryStatistics> java.util.stream.Collectors.summarizingDouble(java.util.function.ToDoubleFunction<? super T>) */
			/* name */ 'summarizingDouble',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]]
						],
						/* raw type */ 'java.util.function.ToDoubleFunction',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					'java.util.DoubleSummaryStatistics'
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T,R1,R2,R> java.util.stream.Collector<T, ?, R> java.util.stream.Collectors.teeing(java.util.stream.Collector<? super T, ?, R1>,java.util.stream.Collector<? super T, ?, R2>,java.util.function.BiFunction<? super R1, ? super R2, R>) */
			/* name */ 'teeing',
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
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]],
							[/* type variable ref */ 'tr', [/* name */ 'R1']]
						],
						/* raw type */ 'java.util.stream.Collector',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]],
							[/* type variable ref */ 'tr', [/* name */ 'R2']]
						],
						/* raw type */ 'java.util.stream.Collector',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'R1']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'R2']]
								]
							]],
							[/* type variable ref */ 'tr', [/* name */ 'R']]
						],
						/* raw type */ 'java.util.function.BiFunction',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']],
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]],
					[/* type variable ref */ 'tr', [/* name */ 'R']]
				],
				/* raw type */ 'java.util.stream.Collector',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
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
					/* name */ 'R1',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'R2',
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
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
