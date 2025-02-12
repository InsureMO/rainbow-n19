import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.HashSet', [
	/* super class, extends java.util.AbstractSet<E> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			[/* type variable ref */ 'tr', [/* name */ 'E']]
		],
		/* raw type */ 'java.util.AbstractSet',
		/* owner type */ UDF
	]],
	[/* interfaces, implements java.util.Set<E>, java.lang.Cloneable, java.io.Serializable */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				[/* type variable ref */ 'tr', [/* name */ 'E']]
			],
			/* raw type */ 'java.util.Set',
			/* owner type */ UDF
		]],
		'java.lang.Cloneable',
		'java.io.Serializable'
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
		[/* public java.util.HashSet(int) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
		[/* public java.util.HashSet(int,float) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
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
		[/* public java.util.HashSet(java.util.Collection<? extends E>) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'E']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.Collection',
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
		],
		[/* public java.util.HashSet() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public boolean java.util.HashSet.add(E) */
			/* name */ 'add',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
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
		[/* public boolean java.util.HashSet.remove(java.lang.Object) */
			/* name */ 'remove',
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
		[/* public java.lang.Object java.util.HashSet.clone() */
			/* name */ 'clone',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.HashSet.clear() */
			/* name */ 'clear',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.HashSet.isEmpty() */
			/* name */ 'isEmpty',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.util.HashSet.size() */
			/* name */ 'size',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public <T> T[] java.util.HashSet.toArray(T[]) */
			/* name */ 'toArray',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* generic array type */ 'ga', [[/* type variable ref */ 'tr', [/* name */ 'T']]]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* generic array type */ 'ga', [[/* type variable ref */ 'tr', [/* name */ 'T']]]],
			/* exceptions */,
			/* modifiers */ 1,
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
		[/* public java.lang.Object[] java.util.HashSet.toArray() */
			/* name */ 'toArray',
			/* parameters */,
			/* return */ '[Ljava.lang.Object;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Iterator<E> java.util.HashSet.iterator() */
			/* name */ 'iterator',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'E']]
				],
				/* raw type */ 'java.util.Iterator',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.HashSet.contains(java.lang.Object) */
			/* name */ 'contains',
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
		[/* public java.util.Spliterator<E> java.util.HashSet.spliterator() */
			/* name */ 'spliterator',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'E']]
				],
				/* raw type */ 'java.util.Spliterator',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
