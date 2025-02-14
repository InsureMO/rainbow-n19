import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.lang.GString', [
	/* super class, extends groovy.lang.GroovyObjectSupport */
	'groovy.lang.GroovyObjectSupport',
	[/* interfaces, implements java.lang.Comparable, java.lang.CharSequence, groovy.lang.Writable, groovy.lang.Buildable, java.io.Serializable */
		'java.lang.Comparable',
		'java.lang.CharSequence',
		'groovy.lang.Writable',
		'groovy.lang.Buildable',
		'java.io.Serializable'
	],
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public groovy.lang.GString(java.lang.Object) */
			[/* parameters */
				[/* parameter */
					/* name */ 'values',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.GString(java.lang.Object[]) */
			[/* parameters */
				[/* parameter */
					/* name */ 'values',
					/* type */ '[Ljava.lang.Object;',
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
		[/* protected int groovy.lang.GString.calcInitialCapacity() */
			/* name */ 'calcInitialCapacity',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.String[] groovy.lang.GString.getStrings() */
			/* name */ 'getStrings',
			/* parameters */,
			/* return */ '[Ljava.lang.String;',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean groovy.lang.GString.equals(groovy.lang.GString) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'that',
					/* type */ 'groovy.lang.GString',
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
		[/* public boolean groovy.lang.GString.equals(java.lang.Object) */
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
		[/* public byte[] groovy.lang.GString.getBytes() */
			/* name */ 'getBytes',
			/* parameters */,
			/* return */ '[B',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public byte[] groovy.lang.GString.getBytes(java.lang.String) throws java.io.UnsupportedEncodingException */
			/* name */ 'getBytes',
			[/* parameters */
				[/* parameter */
					/* name */ 'charset',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ '[B',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.UnsupportedEncodingException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public char groovy.lang.GString.charAt(int) */
			/* name */ 'charAt',
			[/* parameters */
				[/* parameter */
					/* name */ 'index',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'char',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.GString groovy.lang.GString.plus(groovy.lang.GString) */
			/* name */ 'plus',
			[/* parameters */
				[/* parameter */
					/* name */ 'that',
					/* type */ 'groovy.lang.GString',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.lang.GString',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.GString groovy.lang.GString.plus(java.lang.String) */
			/* name */ 'plus',
			[/* parameters */
				[/* parameter */
					/* name */ 'that',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.lang.GString',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.lang.GString.compareTo(java.lang.Object) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'that',
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
		[/* public int groovy.lang.GString.getValueCount() */
			/* name */ 'getValueCount',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.lang.GString.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.lang.GString.length() */
			/* name */ 'length',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.Writer groovy.lang.GString.writeTo(java.io.Writer) throws java.io.IOException */
			/* name */ 'writeTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'out',
					/* type */ 'java.io.Writer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.io.Writer',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.CharSequence groovy.lang.GString.subSequence(int,int) */
			/* name */ 'subSequence',
			[/* parameters */
				[/* parameter */
					/* name */ 'start',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'end',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.CharSequence',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object groovy.lang.GString.getValue(int) */
			/* name */ 'getValue',
			[/* parameters */
				[/* parameter */
					/* name */ 'idx',
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
		[/* public java.lang.Object groovy.lang.GString.invokeMethod(java.lang.String,java.lang.Object) */
			/* name */ 'invokeMethod',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'args',
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
		[/* public java.lang.Object[] groovy.lang.GString.getValues() */
			/* name */ 'getValues',
			/* parameters */,
			/* return */ '[Ljava.lang.Object;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String groovy.lang.GString.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.regex.Pattern groovy.lang.GString.negate() */
			/* name */ 'negate',
			/* parameters */,
			/* return */ 'java.util.regex.Pattern',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void groovy.lang.GString.build(groovy.lang.GroovyObject) */
			/* name */ 'build',
			[/* parameters */
				[/* parameter */
					/* name */ 'builder',
					/* type */ 'groovy.lang.GroovyObject',
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
	[/* declared fields */
		[/* public static final java.lang.String[] groovy.lang.GString.EMPTY_STRING_ARRAY */
			/* name */ 'EMPTY_STRING_ARRAY',
			/* type */ '[Ljava.lang.String;',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.lang.Object[] groovy.lang.GString.EMPTY_OBJECT_ARRAY */
			/* name */ 'EMPTY_OBJECT_ARRAY',
			/* type */ '[Ljava.lang.Object;',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final groovy.lang.GString groovy.lang.GString.EMPTY */
			/* name */ 'EMPTY',
			/* type */ 'groovy.lang.GString',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
