import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.NavigableMap', [
	/* super class */,
	[/* interfaces, implements java.util.SortedMap<K, V> */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				[/* type variable ref */ 'tr', [/* name */ 'K']],
				[/* type variable ref */ 'tr', [/* name */ 'V']]
			],
			/* raw type */ 'java.util.SortedMap',
			/* owner type */ UDF
		]]
	],
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
		[/* public abstract java.util.NavigableSet<K> java.util.NavigableMap.navigableKeySet() */
			/* name */ 'navigableKeySet',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']]
				],
				/* raw type */ 'java.util.NavigableSet',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.NavigableSet<K> java.util.NavigableMap.descendingKeySet() */
			/* name */ 'descendingKeySet',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']]
				],
				/* raw type */ 'java.util.NavigableSet',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract K java.util.NavigableMap.lowerKey(K) */
			/* name */ 'lowerKey',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'K']],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract K java.util.NavigableMap.floorKey(K) */
			/* name */ 'floorKey',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'K']],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract K java.util.NavigableMap.ceilingKey(K) */
			/* name */ 'ceilingKey',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'K']],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract K java.util.NavigableMap.higherKey(K) */
			/* name */ 'higherKey',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'K']],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Map$Entry<K, V> java.util.NavigableMap.pollFirstEntry() */
			/* name */ 'pollFirstEntry',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.Map$Entry',
				/* owner type */ 'java.util.Map'
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Map$Entry<K, V> java.util.NavigableMap.pollLastEntry() */
			/* name */ 'pollLastEntry',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.Map$Entry',
				/* owner type */ 'java.util.Map'
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.NavigableMap<K, V> java.util.NavigableMap.subMap(K,boolean,K,boolean) */
			/* name */ 'subMap',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg3',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.NavigableMap',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.SortedMap<K, V> java.util.NavigableMap.subMap(K,K) */
			/* name */ 'subMap',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.SortedMap',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.SortedMap<K, V> java.util.NavigableMap.headMap(K) */
			/* name */ 'headMap',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.SortedMap',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.NavigableMap<K, V> java.util.NavigableMap.headMap(K,boolean) */
			/* name */ 'headMap',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.NavigableMap',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.NavigableMap<K, V> java.util.NavigableMap.tailMap(K,boolean) */
			/* name */ 'tailMap',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.NavigableMap',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.SortedMap<K, V> java.util.NavigableMap.tailMap(K) */
			/* name */ 'tailMap',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.SortedMap',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.NavigableMap<K, V> java.util.NavigableMap.descendingMap() */
			/* name */ 'descendingMap',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.NavigableMap',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Map$Entry<K, V> java.util.NavigableMap.lowerEntry(K) */
			/* name */ 'lowerEntry',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
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
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Map$Entry<K, V> java.util.NavigableMap.floorEntry(K) */
			/* name */ 'floorEntry',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
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
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Map$Entry<K, V> java.util.NavigableMap.ceilingEntry(K) */
			/* name */ 'ceilingEntry',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
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
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Map$Entry<K, V> java.util.NavigableMap.higherEntry(K) */
			/* name */ 'higherEntry',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'K']],
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
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Map$Entry<K, V> java.util.NavigableMap.firstEntry() */
			/* name */ 'firstEntry',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.Map$Entry',
				/* owner type */ 'java.util.Map'
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Map$Entry<K, V> java.util.NavigableMap.lastEntry() */
			/* name */ 'lastEntry',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'K']],
					[/* type variable ref */ 'tr', [/* name */ 'V']]
				],
				/* raw type */ 'java.util.Map$Entry',
				/* owner type */ 'java.util.Map'
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
