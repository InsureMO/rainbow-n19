import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.lang.Tuple', [
	/* super class, extends java.util.AbstractList<E> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			[/* type variable ref */ 'tr', [/* name */ 'E']]
		],
		/* raw type */ 'java.util.AbstractList',
		/* owner type */ UDF
	]],
	[/* interfaces, implements java.io.Serializable, java.lang.Cloneable, java.lang.Comparable<groovy.lang.Tuple<E>> */
		'java.io.Serializable',
		'java.lang.Cloneable',
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				[/* parameterized type */ 'pt', [
					[/* actual argument types */
						[/* type variable ref */ 'tr', [/* name */ 'E']]
					],
					/* raw type */ 'groovy.lang.Tuple',
					/* owner type */ UDF
				]]
			],
			/* raw type */ 'java.lang.Comparable',
			/* owner type */ UDF
		]]
	],
	/* modifiers */ 1,
	/* declared annotations */,
	[/* type parameters */
		[/* type variable */
			/* name */ 'E',
			[/* bounds */
				'java.lang.Object'
			],
			/* annotations */ UDF
		]
	],
	[/* declared constructors */
		[/* public groovy.lang.Tuple(E...) */
			[/* parameters */
				[/* parameter */
					/* name */ 'contents',
					/* type */ [/* generic array type */ 'ga', [[/* type variable ref */ 'tr', [/* name */ 'E']]]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 129,
			[/* annotations */
				['java.lang.SafeVarargs']
			],
			/* type parameters */ UDF
		],
		[/* public groovy.lang.Tuple(groovy.lang.Tuple<E>) */
			[/* parameters */
				[/* parameter */
					/* name */ 'tuple',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'E']]
						],
						/* raw type */ 'groovy.lang.Tuple',
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
		[/* public E groovy.lang.Tuple.get(int) */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'index',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'E']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public E[] groovy.lang.Tuple.toArray() */
			/* name */ 'toArray',
			/* parameters */,
			/* return */ [/* generic array type */ 'ga', [[/* type variable ref */ 'tr', [/* name */ 'E']]]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean groovy.lang.Tuple.equals(java.lang.Object) */
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.Tuple<E> groovy.lang.Tuple.clone() */
			/* name */ 'clone',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'E']]
				],
				/* raw type */ 'groovy.lang.Tuple',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.Tuple<E> groovy.lang.Tuple.subTuple(int,int) */
			/* name */ 'subTuple',
			[/* parameters */
				[/* parameter */
					/* name */ 'fromIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'toIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'E']]
				],
				/* raw type */ 'groovy.lang.Tuple',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.lang.Tuple.compareTo(groovy.lang.Tuple<E>) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'E']]
						],
						/* raw type */ 'groovy.lang.Tuple',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.lang.Tuple.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.lang.Tuple.size() */
			/* name */ 'size',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.List<E> groovy.lang.Tuple.subList(int,int) */
			/* name */ 'subList',
			[/* parameters */
				[/* parameter */
					/* name */ 'fromIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'toIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'E']]
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static <T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15,T16> groovy.lang.Tuple16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> groovy.lang.Tuple.tuple(T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15,T16) */
			/* name */ 'tuple',
			[/* parameters */
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T1']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T2']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T3']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T4']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T5']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v6',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T6']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v7',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T7']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v8',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T8']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v9',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T9']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v10',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T10']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v11',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T11']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v12',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T12']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v13',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T13']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v14',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T14']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v15',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T15']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v16',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T16']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T1']],
					[/* type variable ref */ 'tr', [/* name */ 'T2']],
					[/* type variable ref */ 'tr', [/* name */ 'T3']],
					[/* type variable ref */ 'tr', [/* name */ 'T4']],
					[/* type variable ref */ 'tr', [/* name */ 'T5']],
					[/* type variable ref */ 'tr', [/* name */ 'T6']],
					[/* type variable ref */ 'tr', [/* name */ 'T7']],
					[/* type variable ref */ 'tr', [/* name */ 'T8']],
					[/* type variable ref */ 'tr', [/* name */ 'T9']],
					[/* type variable ref */ 'tr', [/* name */ 'T10']],
					[/* type variable ref */ 'tr', [/* name */ 'T11']],
					[/* type variable ref */ 'tr', [/* name */ 'T12']],
					[/* type variable ref */ 'tr', [/* name */ 'T13']],
					[/* type variable ref */ 'tr', [/* name */ 'T14']],
					[/* type variable ref */ 'tr', [/* name */ 'T15']],
					[/* type variable ref */ 'tr', [/* name */ 'T16']]
				],
				/* raw type */ 'groovy.lang.Tuple16',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T1',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T2',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T3',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T4',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T5',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T6',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T7',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T8',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T9',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T10',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T11',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T12',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T13',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T14',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T15',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T16',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15> groovy.lang.Tuple15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> groovy.lang.Tuple.tuple(T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15) */
			/* name */ 'tuple',
			[/* parameters */
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T1']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T2']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T3']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T4']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T5']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v6',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T6']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v7',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T7']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v8',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T8']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v9',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T9']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v10',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T10']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v11',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T11']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v12',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T12']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v13',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T13']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v14',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T14']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v15',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T15']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T1']],
					[/* type variable ref */ 'tr', [/* name */ 'T2']],
					[/* type variable ref */ 'tr', [/* name */ 'T3']],
					[/* type variable ref */ 'tr', [/* name */ 'T4']],
					[/* type variable ref */ 'tr', [/* name */ 'T5']],
					[/* type variable ref */ 'tr', [/* name */ 'T6']],
					[/* type variable ref */ 'tr', [/* name */ 'T7']],
					[/* type variable ref */ 'tr', [/* name */ 'T8']],
					[/* type variable ref */ 'tr', [/* name */ 'T9']],
					[/* type variable ref */ 'tr', [/* name */ 'T10']],
					[/* type variable ref */ 'tr', [/* name */ 'T11']],
					[/* type variable ref */ 'tr', [/* name */ 'T12']],
					[/* type variable ref */ 'tr', [/* name */ 'T13']],
					[/* type variable ref */ 'tr', [/* name */ 'T14']],
					[/* type variable ref */ 'tr', [/* name */ 'T15']]
				],
				/* raw type */ 'groovy.lang.Tuple15',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T1',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T2',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T3',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T4',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T5',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T6',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T7',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T8',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T9',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T10',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T11',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T12',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T13',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T14',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T15',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14> groovy.lang.Tuple14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> groovy.lang.Tuple.tuple(T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14) */
			/* name */ 'tuple',
			[/* parameters */
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T1']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T2']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T3']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T4']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T5']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v6',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T6']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v7',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T7']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v8',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T8']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v9',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T9']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v10',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T10']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v11',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T11']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v12',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T12']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v13',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T13']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v14',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T14']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T1']],
					[/* type variable ref */ 'tr', [/* name */ 'T2']],
					[/* type variable ref */ 'tr', [/* name */ 'T3']],
					[/* type variable ref */ 'tr', [/* name */ 'T4']],
					[/* type variable ref */ 'tr', [/* name */ 'T5']],
					[/* type variable ref */ 'tr', [/* name */ 'T6']],
					[/* type variable ref */ 'tr', [/* name */ 'T7']],
					[/* type variable ref */ 'tr', [/* name */ 'T8']],
					[/* type variable ref */ 'tr', [/* name */ 'T9']],
					[/* type variable ref */ 'tr', [/* name */ 'T10']],
					[/* type variable ref */ 'tr', [/* name */ 'T11']],
					[/* type variable ref */ 'tr', [/* name */ 'T12']],
					[/* type variable ref */ 'tr', [/* name */ 'T13']],
					[/* type variable ref */ 'tr', [/* name */ 'T14']]
				],
				/* raw type */ 'groovy.lang.Tuple14',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T1',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T2',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T3',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T4',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T5',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T6',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T7',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T8',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T9',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T10',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T11',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T12',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T13',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T14',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13> groovy.lang.Tuple13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> groovy.lang.Tuple.tuple(T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13) */
			/* name */ 'tuple',
			[/* parameters */
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T1']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T2']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T3']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T4']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T5']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v6',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T6']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v7',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T7']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v8',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T8']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v9',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T9']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v10',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T10']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v11',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T11']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v12',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T12']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v13',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T13']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T1']],
					[/* type variable ref */ 'tr', [/* name */ 'T2']],
					[/* type variable ref */ 'tr', [/* name */ 'T3']],
					[/* type variable ref */ 'tr', [/* name */ 'T4']],
					[/* type variable ref */ 'tr', [/* name */ 'T5']],
					[/* type variable ref */ 'tr', [/* name */ 'T6']],
					[/* type variable ref */ 'tr', [/* name */ 'T7']],
					[/* type variable ref */ 'tr', [/* name */ 'T8']],
					[/* type variable ref */ 'tr', [/* name */ 'T9']],
					[/* type variable ref */ 'tr', [/* name */ 'T10']],
					[/* type variable ref */ 'tr', [/* name */ 'T11']],
					[/* type variable ref */ 'tr', [/* name */ 'T12']],
					[/* type variable ref */ 'tr', [/* name */ 'T13']]
				],
				/* raw type */ 'groovy.lang.Tuple13',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T1',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T2',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T3',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T4',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T5',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T6',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T7',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T8',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T9',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T10',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T11',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T12',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T13',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12> groovy.lang.Tuple12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> groovy.lang.Tuple.tuple(T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12) */
			/* name */ 'tuple',
			[/* parameters */
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T1']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T2']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T3']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T4']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T5']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v6',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T6']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v7',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T7']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v8',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T8']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v9',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T9']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v10',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T10']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v11',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T11']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v12',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T12']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T1']],
					[/* type variable ref */ 'tr', [/* name */ 'T2']],
					[/* type variable ref */ 'tr', [/* name */ 'T3']],
					[/* type variable ref */ 'tr', [/* name */ 'T4']],
					[/* type variable ref */ 'tr', [/* name */ 'T5']],
					[/* type variable ref */ 'tr', [/* name */ 'T6']],
					[/* type variable ref */ 'tr', [/* name */ 'T7']],
					[/* type variable ref */ 'tr', [/* name */ 'T8']],
					[/* type variable ref */ 'tr', [/* name */ 'T9']],
					[/* type variable ref */ 'tr', [/* name */ 'T10']],
					[/* type variable ref */ 'tr', [/* name */ 'T11']],
					[/* type variable ref */ 'tr', [/* name */ 'T12']]
				],
				/* raw type */ 'groovy.lang.Tuple12',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T1',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T2',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T3',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T4',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T5',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T6',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T7',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T8',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T9',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T10',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T11',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T12',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11> groovy.lang.Tuple11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> groovy.lang.Tuple.tuple(T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11) */
			/* name */ 'tuple',
			[/* parameters */
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T1']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T2']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T3']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T4']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T5']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v6',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T6']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v7',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T7']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v8',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T8']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v9',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T9']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v10',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T10']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v11',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T11']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T1']],
					[/* type variable ref */ 'tr', [/* name */ 'T2']],
					[/* type variable ref */ 'tr', [/* name */ 'T3']],
					[/* type variable ref */ 'tr', [/* name */ 'T4']],
					[/* type variable ref */ 'tr', [/* name */ 'T5']],
					[/* type variable ref */ 'tr', [/* name */ 'T6']],
					[/* type variable ref */ 'tr', [/* name */ 'T7']],
					[/* type variable ref */ 'tr', [/* name */ 'T8']],
					[/* type variable ref */ 'tr', [/* name */ 'T9']],
					[/* type variable ref */ 'tr', [/* name */ 'T10']],
					[/* type variable ref */ 'tr', [/* name */ 'T11']]
				],
				/* raw type */ 'groovy.lang.Tuple11',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T1',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T2',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T3',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T4',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T5',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T6',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T7',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T8',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T9',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T10',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T11',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T1,T2,T3,T4,T5,T6,T7,T8,T9,T10> groovy.lang.Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> groovy.lang.Tuple.tuple(T1,T2,T3,T4,T5,T6,T7,T8,T9,T10) */
			/* name */ 'tuple',
			[/* parameters */
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T1']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T2']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T3']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T4']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T5']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v6',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T6']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v7',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T7']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v8',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T8']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v9',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T9']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v10',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T10']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T1']],
					[/* type variable ref */ 'tr', [/* name */ 'T2']],
					[/* type variable ref */ 'tr', [/* name */ 'T3']],
					[/* type variable ref */ 'tr', [/* name */ 'T4']],
					[/* type variable ref */ 'tr', [/* name */ 'T5']],
					[/* type variable ref */ 'tr', [/* name */ 'T6']],
					[/* type variable ref */ 'tr', [/* name */ 'T7']],
					[/* type variable ref */ 'tr', [/* name */ 'T8']],
					[/* type variable ref */ 'tr', [/* name */ 'T9']],
					[/* type variable ref */ 'tr', [/* name */ 'T10']]
				],
				/* raw type */ 'groovy.lang.Tuple10',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T1',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T2',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T3',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T4',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T5',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T6',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T7',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T8',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T9',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T10',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T1,T2,T3,T4,T5,T6,T7,T8,T9> groovy.lang.Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9> groovy.lang.Tuple.tuple(T1,T2,T3,T4,T5,T6,T7,T8,T9) */
			/* name */ 'tuple',
			[/* parameters */
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T1']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T2']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T3']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T4']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T5']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v6',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T6']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v7',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T7']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v8',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T8']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v9',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T9']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T1']],
					[/* type variable ref */ 'tr', [/* name */ 'T2']],
					[/* type variable ref */ 'tr', [/* name */ 'T3']],
					[/* type variable ref */ 'tr', [/* name */ 'T4']],
					[/* type variable ref */ 'tr', [/* name */ 'T5']],
					[/* type variable ref */ 'tr', [/* name */ 'T6']],
					[/* type variable ref */ 'tr', [/* name */ 'T7']],
					[/* type variable ref */ 'tr', [/* name */ 'T8']],
					[/* type variable ref */ 'tr', [/* name */ 'T9']]
				],
				/* raw type */ 'groovy.lang.Tuple9',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T1',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T2',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T3',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T4',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T5',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T6',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T7',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T8',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T9',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T1,T2,T3,T4,T5,T6,T7,T8> groovy.lang.Tuple8<T1, T2, T3, T4, T5, T6, T7, T8> groovy.lang.Tuple.tuple(T1,T2,T3,T4,T5,T6,T7,T8) */
			/* name */ 'tuple',
			[/* parameters */
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T1']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T2']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T3']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T4']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T5']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v6',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T6']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v7',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T7']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v8',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T8']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T1']],
					[/* type variable ref */ 'tr', [/* name */ 'T2']],
					[/* type variable ref */ 'tr', [/* name */ 'T3']],
					[/* type variable ref */ 'tr', [/* name */ 'T4']],
					[/* type variable ref */ 'tr', [/* name */ 'T5']],
					[/* type variable ref */ 'tr', [/* name */ 'T6']],
					[/* type variable ref */ 'tr', [/* name */ 'T7']],
					[/* type variable ref */ 'tr', [/* name */ 'T8']]
				],
				/* raw type */ 'groovy.lang.Tuple8',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T1',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T2',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T3',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T4',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T5',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T6',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T7',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T8',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T1,T2,T3,T4,T5,T6,T7> groovy.lang.Tuple7<T1, T2, T3, T4, T5, T6, T7> groovy.lang.Tuple.tuple(T1,T2,T3,T4,T5,T6,T7) */
			/* name */ 'tuple',
			[/* parameters */
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T1']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T2']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T3']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T4']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T5']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v6',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T6']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v7',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T7']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T1']],
					[/* type variable ref */ 'tr', [/* name */ 'T2']],
					[/* type variable ref */ 'tr', [/* name */ 'T3']],
					[/* type variable ref */ 'tr', [/* name */ 'T4']],
					[/* type variable ref */ 'tr', [/* name */ 'T5']],
					[/* type variable ref */ 'tr', [/* name */ 'T6']],
					[/* type variable ref */ 'tr', [/* name */ 'T7']]
				],
				/* raw type */ 'groovy.lang.Tuple7',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T1',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T2',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T3',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T4',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T5',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T6',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T7',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T1,T2,T3,T4,T5,T6> groovy.lang.Tuple6<T1, T2, T3, T4, T5, T6> groovy.lang.Tuple.tuple(T1,T2,T3,T4,T5,T6) */
			/* name */ 'tuple',
			[/* parameters */
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T1']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T2']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T3']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T4']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T5']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v6',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T6']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T1']],
					[/* type variable ref */ 'tr', [/* name */ 'T2']],
					[/* type variable ref */ 'tr', [/* name */ 'T3']],
					[/* type variable ref */ 'tr', [/* name */ 'T4']],
					[/* type variable ref */ 'tr', [/* name */ 'T5']],
					[/* type variable ref */ 'tr', [/* name */ 'T6']]
				],
				/* raw type */ 'groovy.lang.Tuple6',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T1',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T2',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T3',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T4',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T5',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T6',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T1,T2,T3,T4,T5> groovy.lang.Tuple5<T1, T2, T3, T4, T5> groovy.lang.Tuple.tuple(T1,T2,T3,T4,T5) */
			/* name */ 'tuple',
			[/* parameters */
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T1']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T2']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T3']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T4']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T5']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T1']],
					[/* type variable ref */ 'tr', [/* name */ 'T2']],
					[/* type variable ref */ 'tr', [/* name */ 'T3']],
					[/* type variable ref */ 'tr', [/* name */ 'T4']],
					[/* type variable ref */ 'tr', [/* name */ 'T5']]
				],
				/* raw type */ 'groovy.lang.Tuple5',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T1',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T2',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T3',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T4',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T5',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T1,T2,T3,T4> groovy.lang.Tuple4<T1, T2, T3, T4> groovy.lang.Tuple.tuple(T1,T2,T3,T4) */
			/* name */ 'tuple',
			[/* parameters */
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T1']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T2']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T3']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T4']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T1']],
					[/* type variable ref */ 'tr', [/* name */ 'T2']],
					[/* type variable ref */ 'tr', [/* name */ 'T3']],
					[/* type variable ref */ 'tr', [/* name */ 'T4']]
				],
				/* raw type */ 'groovy.lang.Tuple4',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T1',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T2',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T3',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T4',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T1,T2,T3> groovy.lang.Tuple3<T1, T2, T3> groovy.lang.Tuple.tuple(T1,T2,T3) */
			/* name */ 'tuple',
			[/* parameters */
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T1']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T2']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T3']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T1']],
					[/* type variable ref */ 'tr', [/* name */ 'T2']],
					[/* type variable ref */ 'tr', [/* name */ 'T3']]
				],
				/* raw type */ 'groovy.lang.Tuple3',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T1',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T2',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T3',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T1,T2> groovy.lang.Tuple2<T1, T2> groovy.lang.Tuple.tuple(T1,T2) */
			/* name */ 'tuple',
			[/* parameters */
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T1']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T2']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T1']],
					[/* type variable ref */ 'tr', [/* name */ 'T2']]
				],
				/* raw type */ 'groovy.lang.Tuple2',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T1',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'T2',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T1> groovy.lang.Tuple1<T1> groovy.lang.Tuple.tuple(T1) */
			/* name */ 'tuple',
			[/* parameters */
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T1']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T1']]
				],
				/* raw type */ 'groovy.lang.Tuple1',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T1',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static groovy.lang.Tuple0 groovy.lang.Tuple.tuple() */
			/* name */ 'tuple',
			/* parameters */,
			/* return */ 'groovy.lang.Tuple0',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
