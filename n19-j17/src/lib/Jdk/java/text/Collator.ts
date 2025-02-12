import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.text.Collator', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.util.Comparator<java.lang.Object>, java.lang.Cloneable */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.lang.Object'
			],
			/* raw type */ 'java.util.Comparator',
			/* owner type */ UDF
		]],
		'java.lang.Cloneable'
	],
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* protected java.text.Collator() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public boolean java.text.Collator.equals(java.lang.String,java.lang.String) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.String',
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
		[/* public boolean java.text.Collator.equals(java.lang.Object) */
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
		[/* public abstract int java.text.Collator.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object java.text.Collator.clone() */
			/* name */ 'clone',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.text.Collator.compare(java.lang.Object,java.lang.Object) */
			/* name */ 'compare',
			[/* parameters */
				[/* parameter */
					/* name */ 'o1',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'o2',
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
		[/* public abstract int java.text.Collator.compare(java.lang.String,java.lang.String) */
			/* name */ 'compare',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static synchronized java.text.Collator java.text.Collator.getInstance() */
			/* name */ 'getInstance',
			/* parameters */,
			/* return */ 'java.text.Collator',
			/* exceptions */,
			/* modifiers */ 41,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.text.Collator java.text.Collator.getInstance(java.util.Locale) */
			/* name */ 'getInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'cachedColl',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.Collator',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static synchronized java.util.Locale[] java.text.Collator.getAvailableLocales() */
			/* name */ 'getAvailableLocales',
			/* parameters */,
			/* return */ '[Ljava.util.Locale;',
			/* exceptions */,
			/* modifiers */ 41,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized int java.text.Collator.getDecomposition() */
			/* name */ 'getDecomposition',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized int java.text.Collator.getStrength() */
			/* name */ 'getStrength',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized void java.text.Collator.setStrength(int) */
			/* name */ 'setStrength',
			[/* parameters */
				[/* parameter */
					/* name */ 'newStrength',
					/* type */ 'int',
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
		[/* public synchronized void java.text.Collator.setDecomposition(int) */
			/* name */ 'setDecomposition',
			[/* parameters */
				[/* parameter */
					/* name */ 'decompositionMode',
					/* type */ 'int',
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
		[/* public abstract java.text.CollationKey java.text.Collator.getCollationKey(java.lang.String) */
			/* name */ 'getCollationKey',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.CollationKey',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final int java.text.Collator.PRIMARY */
			/* name */ 'PRIMARY',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.Collator.SECONDARY */
			/* name */ 'SECONDARY',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.Collator.TERTIARY */
			/* name */ 'TERTIARY',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.Collator.IDENTICAL */
			/* name */ 'IDENTICAL',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.Collator.NO_DECOMPOSITION */
			/* name */ 'NO_DECOMPOSITION',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.Collator.CANONICAL_DECOMPOSITION */
			/* name */ 'CANONICAL_DECOMPOSITION',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.Collator.FULL_DECOMPOSITION */
			/* name */ 'FULL_DECOMPOSITION',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
