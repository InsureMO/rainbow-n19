import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.Map', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1537,
	/* declared annotations */,
	[/* type parameters */
		[/* type variable */
			/* name */ 'K',
			[/* bounds */
				'java.lang.Object'
			],
			/* annotations */ UDF
		],
		[/* type variable */
			/* name */ 'V',
			[/* bounds */
				'java.lang.Object'
			],
			/* annotations */ UDF
		]
	],
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract V java.util.Map.get(java.lang.Object) */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'V']],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract V java.util.Map.put(K,V) */
			/* name */ 'put',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'value',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'V']],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract V java.util.Map.remove(java.lang.Object) */
			/* name */ 'remove',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'V']],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.util.Map.containsKey(java.lang.Object) */
			/* name */ 'containsKey',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'java.lang.Object',
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
		[/* public abstract boolean java.util.Map.containsValue(java.lang.Object) */
			/* name */ 'containsValue',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ 'java.lang.Object',
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
		[/* public abstract boolean java.util.Map.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'o',
					/* type */ 'java.lang.Object',
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
		[/* public abstract boolean java.util.Map.isEmpty() */
			/* name */ 'isEmpty',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.util.Map.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.util.Map.size() */
			/* name */ 'size',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Collection<V> java.util.Map.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.Collection',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Set<K> java.util.Map.keySet() */
			/* name */ 'keySet',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']]
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Set<java.util.Map$Entry<K, V>> java.util.Map.entrySet() */
			/* name */ 'entrySet',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'K']],
							[/* type variable ref */ 'tr', [/* name */ 'V']]
						],
						/* raw type */ 'java.util.Map$Entry',
						/* owner type */ 'java.util.Map'
					]]
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract void java.util.Map.clear() */
			/* name */ 'clear',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract void java.util.Map.putAll(java.util.Map<? extends K, ? extends V>) */
			/* name */ 'putAll',
			[/* parameters */
				[/* parameter */
					/* name */ 'm',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'K']]
								],
								/* lower bounds */ UDF
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'V']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.Map',
						/* owner type */ UDF
					]],
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
		[/* public default V java.util.Map.compute(K,java.util.function.BiFunction<? super K, ? super V, ? extends V>) */
			/* name */ 'compute',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'remappingFunction',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'K']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'V']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'V']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.BiFunction',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'V']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default V java.util.Map.computeIfAbsent(K,java.util.function.Function<? super K, ? extends V>) */
			/* name */ 'computeIfAbsent',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'mappingFunction',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'K']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'V']]
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
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'V']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default V java.util.Map.computeIfPresent(K,java.util.function.BiFunction<? super K, ? super V, ? extends V>) */
			/* name */ 'computeIfPresent',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'remappingFunction',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'K']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'V']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'V']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.BiFunction',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'V']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default V java.util.Map.getOrDefault(java.lang.Object,V) */
			/* name */ 'getOrDefault',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'defaultValue',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'V']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default V java.util.Map.merge(K,V,java.util.function.BiFunction<? super V, ? super V, ? extends V>) */
			/* name */ 'merge',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'value',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'remappingFunction',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'V']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'V']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'V']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.BiFunction',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'V']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default V java.util.Map.putIfAbsent(K,V) */
			/* name */ 'putIfAbsent',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'value',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'V']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default V java.util.Map.replace(K,V) */
			/* name */ 'replace',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'value',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'V']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default boolean java.util.Map.remove(java.lang.Object,java.lang.Object) */
			/* name */ 'remove',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'value',
					/* type */ 'java.lang.Object',
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
		[/* public default boolean java.util.Map.replace(K,V,V) */
			/* name */ 'replace',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'oldValue',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'newValue',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
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
		[/* public default void java.util.Map.forEach(java.util.function.BiConsumer<? super K, ? super V>) */
			/* name */ 'forEach',
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
									[/* type variable ref */ 'tr', [/* name */ 'K']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'V']]
								]
							]]
						],
						/* raw type */ 'java.util.function.BiConsumer',
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
		[/* public default void java.util.Map.replaceAll(java.util.function.BiFunction<? super K, ? super V, ? extends V>) */
			/* name */ 'replaceAll',
			[/* parameters */
				[/* parameter */
					/* name */ 'function',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'K']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* type variable ref */ 'tr', [/* name */ 'V']]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'V']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.BiFunction',
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
		[/* public static <K,V> java.util.Map$Entry<K, V> java.util.Map.entry(K,V) */
			/* name */ 'entry',
			[/* parameters */
				[/* parameter */
					/* name */ 'k',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.Map$Entry',
				/* owner type */ 'java.util.Map'
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'V',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <K,V> java.util.Map<K, V> java.util.Map.copyOf(java.util.Map<? extends K, ? extends V>) */
			/* name */ 'copyOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'map',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'K']]
								],
								/* lower bounds */ UDF
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'V']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.Map',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.Map',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'V',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <K,V> java.util.Map<K, V> java.util.Map.of() */
			/* name */ 'of',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.Map',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'V',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <K,V> java.util.Map<K, V> java.util.Map.of(K,V) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'k1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.Map',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'V',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <K,V> java.util.Map<K, V> java.util.Map.of(K,V,K,V) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'k1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.Map',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'V',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <K,V> java.util.Map<K, V> java.util.Map.of(K,V,K,V,K,V) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'k1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.Map',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'V',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <K,V> java.util.Map<K, V> java.util.Map.of(K,V,K,V,K,V,K,V) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'k1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.Map',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'V',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <K,V> java.util.Map<K, V> java.util.Map.of(K,V,K,V,K,V,K,V,K,V) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'k1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.Map',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'V',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <K,V> java.util.Map<K, V> java.util.Map.of(K,V,K,V,K,V,K,V,K,V,K,V) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'k1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k6',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v6',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.Map',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'V',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <K,V> java.util.Map<K, V> java.util.Map.of(K,V,K,V,K,V,K,V,K,V,K,V,K,V) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'k1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k6',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v6',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k7',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v7',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.Map',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'V',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <K,V> java.util.Map<K, V> java.util.Map.of(K,V,K,V,K,V,K,V,K,V,K,V,K,V,K,V) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'k1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k6',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v6',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k7',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v7',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k8',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v8',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.Map',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'V',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <K,V> java.util.Map<K, V> java.util.Map.of(K,V,K,V,K,V,K,V,K,V,K,V,K,V,K,V,K,V) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'k1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k6',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v6',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k7',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v7',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k8',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v8',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k9',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v9',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.Map',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'V',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <K,V> java.util.Map<K, V> java.util.Map.of(K,V,K,V,K,V,K,V,K,V,K,V,K,V,K,V,K,V,K,V) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'k1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k6',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v6',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k7',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v7',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k8',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v8',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k9',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v9',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'k10',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v10',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.Map',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'V',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <K,V> java.util.Map<K, V> java.util.Map.ofEntries(java.util.Map$Entry<? extends K, ? extends V>...) */
			/* name */ 'ofEntries',
			[/* parameters */
				[/* parameter */
					/* name */ 'entries',
					/* type */ [/* generic array type */ 'ga', [[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'K']]
								],
								/* lower bounds */ UDF
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'V']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.Map$Entry',
						/* owner type */ 'java.util.Map'
					]]]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.Map',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 137,
			[/* annotations */
				['java.lang.SafeVarargs']
			],
			[/* type parameters */
				[/* type variable */
					/* name */ 'K',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'V',
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
