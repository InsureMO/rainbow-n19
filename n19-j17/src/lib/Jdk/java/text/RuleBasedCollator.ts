import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.text.RuleBasedCollator', [
	/* super class, extends java.text.Collator */
	'java.text.Collator',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.text.RuleBasedCollator(java.lang.String) throws java.text.ParseException */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.text.ParseException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public boolean java.text.RuleBasedCollator.equals(java.lang.Object) */
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
		[/* public int java.text.RuleBasedCollator.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object java.text.RuleBasedCollator.clone() */
			/* name */ 'clone',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized int java.text.RuleBasedCollator.compare(java.lang.String,java.lang.String) */
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.text.RuleBasedCollator.getRules() */
			/* name */ 'getRules',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.text.CollationElementIterator java.text.RuleBasedCollator.getCollationElementIterator(java.lang.String) */
			/* name */ 'getCollationElementIterator',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.CollationElementIterator',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.text.CollationElementIterator java.text.RuleBasedCollator.getCollationElementIterator(java.text.CharacterIterator) */
			/* name */ 'getCollationElementIterator',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.text.CharacterIterator',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.CollationElementIterator',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.text.CollationKey java.text.RuleBasedCollator.getCollationKey(java.lang.String) */
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
