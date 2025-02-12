import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.LinkedList', [
	/* super class, extends java.util.AbstractSequentialList<E> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			[/* type variable ref */ 'tr', [/* name */ 'E']]
		],
		/* raw type */ 'java.util.AbstractSequentialList',
		/* owner type */ UDF
	]],
	[/* interfaces, implements java.util.List<E>, java.util.Deque<E>, java.lang.Cloneable, java.io.Serializable */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				[/* type variable ref */ 'tr', [/* name */ 'E']]
			],
			/* raw type */ 'java.util.List',
			/* owner type */ UDF
		]],
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				[/* type variable ref */ 'tr', [/* name */ 'E']]
			],
			/* raw type */ 'java.util.Deque',
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
		[/* public java.util.LinkedList() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.LinkedList(java.util.Collection<? extends E>) */
			[/* parameters */
				[/* parameter */
					/* name */ 'c',
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
		]
	],
	[/* declared methods */
		[/* public <T> T[] java.util.LinkedList.toArray(T[]) */
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
		[/* public E java.util.LinkedList.element() */
			/* name */ 'element',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'E']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public E java.util.LinkedList.get(int) */
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
		[/* public E java.util.LinkedList.getFirst() */
			/* name */ 'getFirst',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'E']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public E java.util.LinkedList.getLast() */
			/* name */ 'getLast',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'E']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public E java.util.LinkedList.peek() */
			/* name */ 'peek',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'E']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public E java.util.LinkedList.peekFirst() */
			/* name */ 'peekFirst',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'E']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public E java.util.LinkedList.peekLast() */
			/* name */ 'peekLast',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'E']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public E java.util.LinkedList.poll() */
			/* name */ 'poll',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'E']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public E java.util.LinkedList.pollFirst() */
			/* name */ 'pollFirst',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'E']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public E java.util.LinkedList.pollLast() */
			/* name */ 'pollLast',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'E']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public E java.util.LinkedList.pop() */
			/* name */ 'pop',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'E']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public E java.util.LinkedList.remove() */
			/* name */ 'remove',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'E']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public E java.util.LinkedList.remove(int) */
			/* name */ 'remove',
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
		[/* public E java.util.LinkedList.removeFirst() */
			/* name */ 'removeFirst',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'E']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public E java.util.LinkedList.removeLast() */
			/* name */ 'removeLast',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'E']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public E java.util.LinkedList.set(int,E) */
			/* name */ 'set',
			[/* parameters */
				[/* parameter */
					/* name */ 'index',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'element',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
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
		[/* public boolean java.util.LinkedList.add(E) */
			/* name */ 'add',
			[/* parameters */
				[/* parameter */
					/* name */ 'e',
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
		[/* public boolean java.util.LinkedList.addAll(int,java.util.Collection<? extends E>) */
			/* name */ 'addAll',
			[/* parameters */
				[/* parameter */
					/* name */ 'index',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'c',
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
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.LinkedList.addAll(java.util.Collection<? extends E>) */
			/* name */ 'addAll',
			[/* parameters */
				[/* parameter */
					/* name */ 'c',
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
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.LinkedList.contains(java.lang.Object) */
			/* name */ 'contains',
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
		[/* public boolean java.util.LinkedList.offer(E) */
			/* name */ 'offer',
			[/* parameters */
				[/* parameter */
					/* name */ 'e',
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
		[/* public boolean java.util.LinkedList.offerFirst(E) */
			/* name */ 'offerFirst',
			[/* parameters */
				[/* parameter */
					/* name */ 'e',
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
		[/* public boolean java.util.LinkedList.offerLast(E) */
			/* name */ 'offerLast',
			[/* parameters */
				[/* parameter */
					/* name */ 'e',
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
		[/* public boolean java.util.LinkedList.remove(java.lang.Object) */
			/* name */ 'remove',
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
		[/* public boolean java.util.LinkedList.removeFirstOccurrence(java.lang.Object) */
			/* name */ 'removeFirstOccurrence',
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
		[/* public boolean java.util.LinkedList.removeLastOccurrence(java.lang.Object) */
			/* name */ 'removeLastOccurrence',
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
		[/* public int java.util.LinkedList.indexOf(java.lang.Object) */
			/* name */ 'indexOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'o',
					/* type */ 'java.lang.Object',
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
		[/* public int java.util.LinkedList.lastIndexOf(java.lang.Object) */
			/* name */ 'lastIndexOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'o',
					/* type */ 'java.lang.Object',
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
		[/* public int java.util.LinkedList.size() */
			/* name */ 'size',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object java.util.LinkedList.clone() */
			/* name */ 'clone',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object[] java.util.LinkedList.toArray() */
			/* name */ 'toArray',
			/* parameters */,
			/* return */ '[Ljava.lang.Object;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Iterator<E> java.util.LinkedList.descendingIterator() */
			/* name */ 'descendingIterator',
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
		[/* public java.util.ListIterator<E> java.util.LinkedList.listIterator(int) */
			/* name */ 'listIterator',
			[/* parameters */
				[/* parameter */
					/* name */ 'index',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'E']]
				],
				/* raw type */ 'java.util.ListIterator',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Spliterator<E> java.util.LinkedList.spliterator() */
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
		],
		[/* public void java.util.LinkedList.add(int,E) */
			/* name */ 'add',
			[/* parameters */
				[/* parameter */
					/* name */ 'index',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'element',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
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
		[/* public void java.util.LinkedList.addFirst(E) */
			/* name */ 'addFirst',
			[/* parameters */
				[/* parameter */
					/* name */ 'e',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
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
		[/* public void java.util.LinkedList.addLast(E) */
			/* name */ 'addLast',
			[/* parameters */
				[/* parameter */
					/* name */ 'e',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
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
		[/* public void java.util.LinkedList.clear() */
			/* name */ 'clear',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.LinkedList.push(E) */
			/* name */ 'push',
			[/* parameters */
				[/* parameter */
					/* name */ 'e',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
