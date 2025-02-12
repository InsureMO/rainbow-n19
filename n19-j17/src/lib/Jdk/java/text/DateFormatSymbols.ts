import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.text.DateFormatSymbols', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.io.Serializable, java.lang.Cloneable */
		'java.io.Serializable',
		'java.lang.Cloneable'
	],
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.text.DateFormatSymbols(java.util.Locale) */
			[/* parameters */
				[/* parameter */
					/* name */ 'locale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.text.DateFormatSymbols() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public boolean java.text.DateFormatSymbols.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
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
		[/* public int java.text.DateFormatSymbols.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object java.text.DateFormatSymbols.clone() */
			/* name */ 'clone',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static final java.text.DateFormatSymbols java.text.DateFormatSymbols.getInstance() */
			/* name */ 'getInstance',
			/* parameters */,
			/* return */ 'java.text.DateFormatSymbols',
			/* exceptions */,
			/* modifiers */ 25,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static final java.text.DateFormatSymbols java.text.DateFormatSymbols.getInstance(java.util.Locale) */
			/* name */ 'getInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'dfs',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.DateFormatSymbols',
			/* exceptions */,
			/* modifiers */ 25,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Locale[] java.text.DateFormatSymbols.getAvailableLocales() */
			/* name */ 'getAvailableLocales',
			/* parameters */,
			/* return */ '[Ljava.util.Locale;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String[] java.text.DateFormatSymbols.getMonths() */
			/* name */ 'getMonths',
			/* parameters */,
			/* return */ '[Ljava.lang.String;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String[] java.text.DateFormatSymbols.getEras() */
			/* name */ 'getEras',
			/* parameters */,
			/* return */ '[Ljava.lang.String;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String[] java.text.DateFormatSymbols.getShortMonths() */
			/* name */ 'getShortMonths',
			/* parameters */,
			/* return */ '[Ljava.lang.String;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String[] java.text.DateFormatSymbols.getWeekdays() */
			/* name */ 'getWeekdays',
			/* parameters */,
			/* return */ '[Ljava.lang.String;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String[] java.text.DateFormatSymbols.getShortWeekdays() */
			/* name */ 'getShortWeekdays',
			/* parameters */,
			/* return */ '[Ljava.lang.String;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String[] java.text.DateFormatSymbols.getAmPmStrings() */
			/* name */ 'getAmPmStrings',
			/* parameters */,
			/* return */ '[Ljava.lang.String;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.text.DateFormatSymbols.getLocalPatternChars() */
			/* name */ 'getLocalPatternChars',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.text.DateFormatSymbols.setEras(java.lang.String[]) */
			/* name */ 'setEras',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.String;',
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
		[/* public java.lang.String[][] java.text.DateFormatSymbols.getZoneStrings() */
			/* name */ 'getZoneStrings',
			/* parameters */,
			/* return */ '[[Ljava.lang.String;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.text.DateFormatSymbols.setMonths(java.lang.String[]) */
			/* name */ 'setMonths',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.String;',
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
		[/* public void java.text.DateFormatSymbols.setShortMonths(java.lang.String[]) */
			/* name */ 'setShortMonths',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.String;',
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
		[/* public void java.text.DateFormatSymbols.setWeekdays(java.lang.String[]) */
			/* name */ 'setWeekdays',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.String;',
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
		[/* public void java.text.DateFormatSymbols.setShortWeekdays(java.lang.String[]) */
			/* name */ 'setShortWeekdays',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.String;',
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
		[/* public void java.text.DateFormatSymbols.setAmPmStrings(java.lang.String[]) */
			/* name */ 'setAmPmStrings',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.String;',
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
		[/* public void java.text.DateFormatSymbols.setZoneStrings(java.lang.String[][]) */
			/* name */ 'setZoneStrings',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[[Ljava.lang.String;',
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
		[/* public void java.text.DateFormatSymbols.setLocalPatternChars(java.lang.String) */
			/* name */ 'setLocalPatternChars',
			[/* parameters */
				[/* parameter */
					/* name */ 'newLocalPatternChars',
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
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
