import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.AbstractMap', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.util.Map<K, V> */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				[/* type variable ref */ 'tr', [/* name */ 'K']],
				[/* type variable ref */ 'tr', [/* name */ 'V']]
			],
			/* raw type */ 'java.util.Map',
			/* owner type */ UDF
		]]
	],
	/* modifiers */ 1025,
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
		[/* protected java.util.AbstractMap() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public V java.util.AbstractMap.remove(java.lang.Object) */
			/* name */ 'remove',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Object',
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
		[/* public V java.util.AbstractMap.get(java.lang.Object) */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Object',
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
		[/* public V java.util.AbstractMap.put(K,V) */
			/* name */ 'put',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
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
		[/* public boolean java.util.AbstractMap.equals(java.lang.Object) */
			/* name */ 'equals',
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.AbstractMap.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Collection<V> java.util.AbstractMap.values() */
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
		[/* public int java.util.AbstractMap.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected java.lang.Object java.util.AbstractMap.clone() throws java.lang.CloneNotSupportedException */
			/* name */ 'clone',
			/* parameters */,
			/* return */ 'java.lang.Object',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.CloneNotSupportedException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.AbstractMap.clear() */
			/* name */ 'clear',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.AbstractMap.isEmpty() */
			/* name */ 'isEmpty',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.util.AbstractMap.size() */
			/* name */ 'size',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Set<java.util.Map$Entry<K, V>> java.util.AbstractMap.entrySet() */
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
		[/* public void java.util.AbstractMap.putAll(java.util.Map<? extends K, ? extends V>) */
			/* name */ 'putAll',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.AbstractMap.containsKey(java.lang.Object) */
			/* name */ 'containsKey',
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Set<K> java.util.AbstractMap.keySet() */
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
		[/* public boolean java.util.AbstractMap.containsValue(java.lang.Object) */
			/* name */ 'containsValue',
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
