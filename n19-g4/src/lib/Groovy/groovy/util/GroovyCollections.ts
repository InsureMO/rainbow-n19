import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.util.GroovyCollections', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public groovy.util.GroovyCollections() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public static <T> T groovy.util.GroovyCollections.max(T[]) */
			/* name */ 'max',
			[/* parameters */
				[/* parameter */
					/* name */ 'items',
					/* type */ [/* generic array type */ 'ga', [[/* type variable ref */ 'tr', [/* name */ 'T']]]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T']],
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
		[/* public static <T> T groovy.util.GroovyCollections.max(java.lang.Iterable<T>) */
			/* name */ 'max',
			[/* parameters */
				[/* parameter */
					/* name */ 'items',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.lang.Iterable',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T']],
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
		[/* public static <T> T groovy.util.GroovyCollections.min(T[]) */
			/* name */ 'min',
			[/* parameters */
				[/* parameter */
					/* name */ 'items',
					/* type */ [/* generic array type */ 'ga', [[/* type variable ref */ 'tr', [/* name */ 'T']]]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T']],
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
		[/* public static <T> T groovy.util.GroovyCollections.min(java.lang.Iterable<T>) */
			/* name */ 'min',
			[/* parameters */
				[/* parameter */
					/* name */ 'items',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.lang.Iterable',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T']],
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
		[/* public static <T> java.util.List<T> groovy.util.GroovyCollections.union(groovy.lang.Closure,java.lang.Iterable<T>...) */
			/* name */ 'union',
			[/* parameters */
				[/* parameter */
					/* name */ 'condition',
					/* type */ 'groovy.lang.Closure',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'iterables',
					/* type */ [/* generic array type */ 'ga', [[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.lang.Iterable',
						/* owner type */ UDF
					]]]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.List',
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
				]
			]
		],
		[/* public static <T> java.util.List<T> groovy.util.GroovyCollections.union(java.lang.Iterable<T>...) */
			/* name */ 'union',
			[/* parameters */
				[/* parameter */
					/* name */ 'iterables',
					/* type */ [/* generic array type */ 'ga', [[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.lang.Iterable',
						/* owner type */ UDF
					]]]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.List',
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
				]
			]
		],
		[/* public static <T> java.util.List<T> groovy.util.GroovyCollections.union(java.util.Comparator<T>,java.lang.Iterable<T>...) */
			/* name */ 'union',
			[/* parameters */
				[/* parameter */
					/* name */ 'comparator',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.util.Comparator',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'iterables',
					/* type */ [/* generic array type */ 'ga', [[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.lang.Iterable',
						/* owner type */ UDF
					]]]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.List',
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
				]
			]
		],
		[/* public static <T> java.util.List<T> groovy.util.GroovyCollections.union(java.util.List<java.lang.Iterable<T>>) */
			/* name */ 'union',
			[/* parameters */
				[/* parameter */
					/* name */ 'iterables',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* parameterized type */ 'pt', [
								[/* actual argument types */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								],
								/* raw type */ 'java.lang.Iterable',
								/* owner type */ UDF
							]]
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.List',
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
		[/* public static <T> java.util.List<T> groovy.util.GroovyCollections.union(java.util.List<java.lang.Iterable<T>>,groovy.lang.Closure) */
			/* name */ 'union',
			[/* parameters */
				[/* parameter */
					/* name */ 'iterables',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* parameterized type */ 'pt', [
								[/* actual argument types */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								],
								/* raw type */ 'java.lang.Iterable',
								/* owner type */ UDF
							]]
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'condition',
					/* type */ 'groovy.lang.Closure',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.List',
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
		[/* public static <T> java.util.List<T> groovy.util.GroovyCollections.union(java.util.List<java.lang.Iterable<T>>,java.util.Comparator<T>) */
			/* name */ 'union',
			[/* parameters */
				[/* parameter */
					/* name */ 'iterables',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* parameterized type */ 'pt', [
								[/* actual argument types */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								],
								/* raw type */ 'java.lang.Iterable',
								/* owner type */ UDF
							]]
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'comparator',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
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
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.List',
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
		[/* public static <T> java.util.List<java.util.List<T>> groovy.util.GroovyCollections.inits(java.lang.Iterable<T>) */
			/* name */ 'inits',
			[/* parameters */
				[/* parameter */
					/* name */ 'collections',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.lang.Iterable',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.List',
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
		[/* public static <T> java.util.List<java.util.List<T>> groovy.util.GroovyCollections.tails(java.lang.Iterable<T>) */
			/* name */ 'tails',
			[/* parameters */
				[/* parameter */
					/* name */ 'collections',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.lang.Iterable',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.List',
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
		[/* public static <T> java.util.Set<java.util.List<T>> groovy.util.GroovyCollections.subsequences(java.util.List<T>) */
			/* name */ 'subsequences',
			[/* parameters */
				[/* parameter */
					/* name */ 'items',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.Set',
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
		[/* public static java.lang.Object groovy.util.GroovyCollections.sum(java.lang.Iterable<?>) */
			/* name */ 'sum',
			[/* parameters */
				[/* parameter */
					/* name */ 'items',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.lang.Iterable',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.Object groovy.util.GroovyCollections.sum(java.lang.Object[]) */
			/* name */ 'sum',
			[/* parameters */
				[/* parameter */
					/* name */ 'items',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.List groovy.util.GroovyCollections.combinations(java.lang.Iterable) */
			/* name */ 'combinations',
			[/* parameters */
				[/* parameter */
					/* name */ 'collections',
					/* type */ 'java.lang.Iterable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.List',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.List groovy.util.GroovyCollections.combinations(java.lang.Object[]) */
			/* name */ 'combinations',
			[/* parameters */
				[/* parameter */
					/* name */ 'collections',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.List',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.List groovy.util.GroovyCollections.transpose(java.lang.Object[]) */
			/* name */ 'transpose',
			[/* parameters */
				[/* parameter */
					/* name */ 'lists',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.List',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.List groovy.util.GroovyCollections.transpose(java.util.List) */
			/* name */ 'transpose',
			[/* parameters */
				[/* parameter */
					/* name */ 'lists',
					/* type */ 'java.util.List',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.List',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
