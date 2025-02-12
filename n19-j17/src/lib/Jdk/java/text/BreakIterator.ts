import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.text.BreakIterator', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.lang.Cloneable */
		'java.lang.Cloneable'
	],
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* protected java.text.BreakIterator() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public java.lang.Object java.text.BreakIterator.clone() */
			/* name */ 'clone',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.text.BreakIterator.next() */
			/* name */ 'next',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.text.BreakIterator.next(int) */
			/* name */ 'next',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
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
		[/* public abstract int java.text.BreakIterator.last() */
			/* name */ 'last',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.text.BreakIterator.first() */
			/* name */ 'first',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.text.BreakIterator.current() */
			/* name */ 'current',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.text.BreakIterator.previous() */
			/* name */ 'previous',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static synchronized java.util.Locale[] java.text.BreakIterator.getAvailableLocales() */
			/* name */ 'getAvailableLocales',
			/* parameters */,
			/* return */ '[Ljava.util.Locale;',
			/* exceptions */,
			/* modifiers */ 41,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.text.CharacterIterator java.text.BreakIterator.getText() */
			/* name */ 'getText',
			/* parameters */,
			/* return */ 'java.text.CharacterIterator',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.text.BreakIterator.setText(java.lang.String) */
			/* name */ 'setText',
			[/* parameters */
				[/* parameter */
					/* name */ 'newText',
					/* type */ 'java.lang.String',
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
		[/* public abstract void java.text.BreakIterator.setText(java.text.CharacterIterator) */
			/* name */ 'setText',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.text.CharacterIterator',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.text.BreakIterator java.text.BreakIterator.getWordInstance(java.util.Locale) */
			/* name */ 'getWordInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.BreakIterator',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.text.BreakIterator java.text.BreakIterator.getWordInstance() */
			/* name */ 'getWordInstance',
			/* parameters */,
			/* return */ 'java.text.BreakIterator',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.text.BreakIterator java.text.BreakIterator.getLineInstance(java.util.Locale) */
			/* name */ 'getLineInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.BreakIterator',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.text.BreakIterator java.text.BreakIterator.getLineInstance() */
			/* name */ 'getLineInstance',
			/* parameters */,
			/* return */ 'java.text.BreakIterator',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.text.BreakIterator java.text.BreakIterator.getCharacterInstance(java.util.Locale) */
			/* name */ 'getCharacterInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.BreakIterator',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.text.BreakIterator java.text.BreakIterator.getCharacterInstance() */
			/* name */ 'getCharacterInstance',
			/* parameters */,
			/* return */ 'java.text.BreakIterator',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.text.BreakIterator java.text.BreakIterator.getSentenceInstance() */
			/* name */ 'getSentenceInstance',
			/* parameters */,
			/* return */ 'java.text.BreakIterator',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.text.BreakIterator java.text.BreakIterator.getSentenceInstance(java.util.Locale) */
			/* name */ 'getSentenceInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.BreakIterator',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.text.BreakIterator.isBoundary(int) */
			/* name */ 'isBoundary',
			[/* parameters */
				[/* parameter */
					/* name */ 'offset',
					/* type */ 'int',
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
		[/* public abstract int java.text.BreakIterator.following(int) */
			/* name */ 'following',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
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
		[/* public int java.text.BreakIterator.preceding(int) */
			/* name */ 'preceding',
			[/* parameters */
				[/* parameter */
					/* name */ 'offset',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final int java.text.BreakIterator.DONE */
			/* name */ 'DONE',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
