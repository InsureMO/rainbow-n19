import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.text.SimpleDateFormat', [
	/* super class, extends java.text.DateFormat */
	'java.text.DateFormat',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.text.SimpleDateFormat() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.text.SimpleDateFormat(java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.text.SimpleDateFormat(java.lang.String,java.text.DateFormatSymbols) */
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'formatSymbols',
					/* type */ 'java.text.DateFormatSymbols',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.text.SimpleDateFormat(java.lang.String,java.util.Locale) */
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
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
		]
	],
	[/* declared methods */
		[/* public boolean java.text.SimpleDateFormat.equals(java.lang.Object) */
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
		[/* public int java.text.SimpleDateFormat.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object java.text.SimpleDateFormat.clone() */
			/* name */ 'clone',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.text.SimpleDateFormat.toLocalizedPattern() */
			/* name */ 'toLocalizedPattern',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.text.SimpleDateFormat.toPattern() */
			/* name */ 'toPattern',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.StringBuffer java.text.SimpleDateFormat.format(java.util.Date,java.lang.StringBuffer,java.text.FieldPosition) */
			/* name */ 'format',
			[/* parameters */
				[/* parameter */
					/* name */ 'date',
					/* type */ 'java.util.Date',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'toAppendTo',
					/* type */ 'java.lang.StringBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'pos',
					/* type */ 'java.text.FieldPosition',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.text.AttributedCharacterIterator java.text.SimpleDateFormat.formatToCharacterIterator(java.lang.Object) */
			/* name */ 'formatToCharacterIterator',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.AttributedCharacterIterator',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.text.DateFormatSymbols java.text.SimpleDateFormat.getDateFormatSymbols() */
			/* name */ 'getDateFormatSymbols',
			/* parameters */,
			/* return */ 'java.text.DateFormatSymbols',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Date java.text.SimpleDateFormat.get2DigitYearStart() */
			/* name */ 'get2DigitYearStart',
			/* parameters */,
			/* return */ 'java.util.Date',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Date java.text.SimpleDateFormat.parse(java.lang.String,java.text.ParsePosition) */
			/* name */ 'parse',
			[/* parameters */
				[/* parameter */
					/* name */ 'text',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'pos',
					/* type */ 'java.text.ParsePosition',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Date',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.text.SimpleDateFormat.applyLocalizedPattern(java.lang.String) */
			/* name */ 'applyLocalizedPattern',
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
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
		[/* public void java.text.SimpleDateFormat.applyPattern(java.lang.String) */
			/* name */ 'applyPattern',
			[/* parameters */
				[/* parameter */
					/* name */ 'pattern',
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
		[/* public void java.text.SimpleDateFormat.set2DigitYearStart(java.util.Date) */
			/* name */ 'set2DigitYearStart',
			[/* parameters */
				[/* parameter */
					/* name */ 'startDate',
					/* type */ 'java.util.Date',
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
		[/* public void java.text.SimpleDateFormat.setDateFormatSymbols(java.text.DateFormatSymbols) */
			/* name */ 'setDateFormatSymbols',
			[/* parameters */
				[/* parameter */
					/* name */ 'newFormatSymbols',
					/* type */ 'java.text.DateFormatSymbols',
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
