import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.lang.ObjectRange', [
	/* super class, extends java.util.AbstractList<java.lang.Comparable> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.lang.Comparable'
		],
		/* raw type */ 'java.util.AbstractList',
		/* owner type */ UDF
	]],
	[/* interfaces, implements groovy.lang.Range<java.lang.Comparable> */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.lang.Comparable'
			],
			/* raw type */ 'groovy.lang.Range',
			/* owner type */ UDF
		]]
	],
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public groovy.lang.ObjectRange(java.lang.Comparable,java.lang.Comparable) */
			[/* parameters */
				[/* parameter */
					/* name */ 'from',
					/* type */ 'java.lang.Comparable',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'to',
					/* type */ 'java.lang.Comparable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.ObjectRange(java.lang.Comparable,java.lang.Comparable,boolean) */
			[/* parameters */
				[/* parameter */
					/* name */ 'smaller',
					/* type */ 'java.lang.Comparable',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'larger',
					/* type */ 'java.lang.Comparable',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'reverse',
					/* type */ 'boolean',
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
		[/* protected int groovy.lang.ObjectRange.compareTo(java.lang.Comparable,java.lang.Comparable) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'first',
					/* type */ 'java.lang.Comparable',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'second',
					/* type */ 'java.lang.Comparable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected java.lang.Object groovy.lang.ObjectRange.decrement(java.lang.Object) */
			/* name */ 'decrement',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected java.lang.Object groovy.lang.ObjectRange.increment(java.lang.Object) */
			/* name */ 'increment',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected void groovy.lang.ObjectRange.checkBoundaryCompatibility() */
			/* name */ 'checkBoundaryCompatibility',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean groovy.lang.ObjectRange.contains(java.lang.Object) */
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean groovy.lang.ObjectRange.containsWithinBounds(java.lang.Object) */
			/* name */ 'containsWithinBounds',
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
		[/* public boolean groovy.lang.ObjectRange.equals(groovy.lang.ObjectRange) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'that',
					/* type */ 'groovy.lang.ObjectRange',
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
		[/* public boolean groovy.lang.ObjectRange.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'that',
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
		[/* public boolean groovy.lang.ObjectRange.isReverse() */
			/* name */ 'isReverse',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.lang.ObjectRange.size() */
			/* name */ 'size',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Comparable groovy.lang.ObjectRange.get(int) */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'index',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Comparable',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Comparable groovy.lang.ObjectRange.getFrom() */
			/* name */ 'getFrom',
			/* parameters */,
			/* return */ 'java.lang.Comparable',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Comparable groovy.lang.ObjectRange.getTo() */
			/* name */ 'getTo',
			/* parameters */,
			/* return */ 'java.lang.Comparable',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String groovy.lang.ObjectRange.inspect() */
			/* name */ 'inspect',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String groovy.lang.ObjectRange.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Iterator<java.lang.Comparable> groovy.lang.ObjectRange.iterator() */
			/* name */ 'iterator',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Comparable'
				],
				/* raw type */ 'java.util.Iterator',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.List<java.lang.Comparable> groovy.lang.ObjectRange.step(int) */
			/* name */ 'step',
			[/* parameters */
				[/* parameter */
					/* name */ 'step',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Comparable'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.List<java.lang.Comparable> groovy.lang.ObjectRange.subList(int,int) */
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
					'java.lang.Comparable'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void groovy.lang.ObjectRange.step(int,groovy.lang.Closure) */
			/* name */ 'step',
			[/* parameters */
				[/* parameter */
					/* name */ 'step',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'closure',
					/* type */ 'groovy.lang.Closure',
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
