import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.Hashtable', [
	/* super class, extends java.util.Dictionary<K, V> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			[/* type variable ref */ 'tr', [/* name */ 'K']],
			[/* type variable ref */ 'tr', [/* name */ 'V']]
		],
		/* raw type */ 'java.util.Dictionary',
		/* owner type */ UDF
	]],
	[/* interfaces, implements java.util.Map<K, V>, java.lang.Cloneable, java.io.Serializable */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				[/* type variable ref */ 'tr', [/* name */ 'K']],
				[/* type variable ref */ 'tr', [/* name */ 'V']]
			],
			/* raw type */ 'java.util.Map',
			/* owner type */ UDF
		]],
		'java.lang.Cloneable',
		'java.io.Serializable'
	],
	/* modifiers */ 1,
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
	[/* declared constructors */
		[/* public java.util.Hashtable() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Hashtable(int) */
			[/* parameters */
				[/* parameter */
					/* name */ 'initialCapacity',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Hashtable(int,float) */
			[/* parameters */
				[/* parameter */
					/* name */ 'initialCapacity',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'loadFactor',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Hashtable(java.util.Map<? extends K, ? extends V>) */
			[/* parameters */
				[/* parameter */
					/* name */ 't',
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
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* protected void java.util.Hashtable.rehash() */
			/* name */ 'rehash',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.Hashtable.containsValue(java.lang.Object) */
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Collection<V> java.util.Hashtable.values() */
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Set<K> java.util.Hashtable.keySet() */
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Set<java.util.Map$Entry<K, V>> java.util.Hashtable.entrySet() */
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized V java.util.Hashtable.compute(K,java.util.function.BiFunction<? super K, ? super V, ? extends V>) */
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized V java.util.Hashtable.computeIfAbsent(K,java.util.function.Function<? super K, ? extends V>) */
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized V java.util.Hashtable.computeIfPresent(K,java.util.function.BiFunction<? super K, ? super V, ? extends V>) */
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized V java.util.Hashtable.get(java.lang.Object) */
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized V java.util.Hashtable.getOrDefault(java.lang.Object,V) */
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized V java.util.Hashtable.merge(K,V,java.util.function.BiFunction<? super V, ? super V, ? extends V>) */
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized V java.util.Hashtable.put(K,V) */
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized V java.util.Hashtable.putIfAbsent(K,V) */
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized V java.util.Hashtable.remove(java.lang.Object) */
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized V java.util.Hashtable.replace(K,V) */
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized boolean java.util.Hashtable.contains(java.lang.Object) */
			/* name */ 'contains',
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized boolean java.util.Hashtable.containsKey(java.lang.Object) */
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized boolean java.util.Hashtable.equals(java.lang.Object) */
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized boolean java.util.Hashtable.isEmpty() */
			/* name */ 'isEmpty',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized boolean java.util.Hashtable.remove(java.lang.Object,java.lang.Object) */
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized boolean java.util.Hashtable.replace(K,V,V) */
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized int java.util.Hashtable.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized int java.util.Hashtable.size() */
			/* name */ 'size',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.Object java.util.Hashtable.clone() */
			/* name */ 'clone',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.String java.util.Hashtable.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.util.Enumeration<K> java.util.Hashtable.keys() */
			/* name */ 'keys',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']]
				],
				/* raw type */ 'java.util.Enumeration',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.util.Enumeration<V> java.util.Hashtable.elements() */
			/* name */ 'elements',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.Enumeration',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized void java.util.Hashtable.clear() */
			/* name */ 'clear',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized void java.util.Hashtable.forEach(java.util.function.BiConsumer<? super K, ? super V>) */
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized void java.util.Hashtable.putAll(java.util.Map<? extends K, ? extends V>) */
			/* name */ 'putAll',
			[/* parameters */
				[/* parameter */
					/* name */ 't',
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized void java.util.Hashtable.replaceAll(java.util.function.BiFunction<? super K, ? super V, ? extends V>) */
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
