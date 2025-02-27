import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.lang.Sequence', [
	/* super class, extends java.util.ArrayList */
	'java.util.ArrayList',
	[/* interfaces, implements groovy.lang.GroovyObject */
		'groovy.lang.GroovyObject'
	],
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public groovy.lang.Sequence() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.Sequence(java.lang.Class) */
			[/* parameters */
				[/* parameter */
					/* name */ 'type',
					/* type */ 'java.lang.Class',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.Sequence(java.lang.Class,java.util.List) */
			[/* parameters */
				[/* parameter */
					/* name */ 'type',
					/* type */ 'java.lang.Class',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'content',
					/* type */ 'java.util.List',
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
		[/* protected void groovy.lang.Sequence.checkCollectionType(java.util.Collection) */
			/* name */ 'checkCollectionType',
			[/* parameters */
				[/* parameter */
					/* name */ 'c',
					/* type */ 'java.util.Collection',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected void groovy.lang.Sequence.checkType(java.lang.Object) */
			/* name */ 'checkType',
			[/* parameters */
				[/* parameter */
					/* name */ 'object',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected void groovy.lang.Sequence.removeRange(int,int) */
			/* name */ 'removeRange',
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
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean groovy.lang.Sequence.add(java.lang.Object) */
			/* name */ 'add',
			[/* parameters */
				[/* parameter */
					/* name */ 'element',
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
		[/* public boolean groovy.lang.Sequence.addAll(int,java.util.Collection) */
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
					/* type */ 'java.util.Collection',
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
		[/* public boolean groovy.lang.Sequence.addAll(java.util.Collection) */
			/* name */ 'addAll',
			[/* parameters */
				[/* parameter */
					/* name */ 'c',
					/* type */ 'java.util.Collection',
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
		[/* public boolean groovy.lang.Sequence.equals(groovy.lang.Sequence) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'that',
					/* type */ 'groovy.lang.Sequence',
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
		[/* public boolean groovy.lang.Sequence.equals(java.lang.Object) */
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
		[/* public int groovy.lang.Sequence.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.lang.Sequence.minimumSize() */
			/* name */ 'minimumSize',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Class groovy.lang.Sequence.type() */
			/* name */ 'type',
			/* parameters */,
			/* return */ 'java.lang.Class',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object groovy.lang.Sequence.remove(int) */
			/* name */ 'remove',
			[/* parameters */
				[/* parameter */
					/* name */ 'index',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object groovy.lang.Sequence.set(int,java.lang.Object) */
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
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void groovy.lang.Sequence.add(int,java.lang.Object) */
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
					/* type */ 'java.lang.Object',
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
		[/* public void groovy.lang.Sequence.clear() */
			/* name */ 'clear',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void groovy.lang.Sequence.set(java.util.Collection) */
			/* name */ 'set',
			[/* parameters */
				[/* parameter */
					/* name */ 'collection',
					/* type */ 'java.util.Collection',
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
