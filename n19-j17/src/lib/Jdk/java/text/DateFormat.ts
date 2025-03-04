import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.text.DateFormat', [
	/* super class, extends java.text.Format */
	'java.text.Format',
	/* interfaces */,
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* protected java.text.DateFormat() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public abstract java.lang.StringBuffer java.text.DateFormat.format(java.util.Date,java.lang.StringBuffer,java.text.FieldPosition) */
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
					/* name */ 'fieldPosition',
					/* type */ 'java.text.FieldPosition',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Date java.text.DateFormat.parse(java.lang.String,java.text.ParsePosition) */
			/* name */ 'parse',
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
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
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.text.DateFormat.equals(java.lang.Object) */
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
		[/* public boolean java.text.DateFormat.isLenient() */
			/* name */ 'isLenient',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.String java.text.DateFormat.format(java.util.Date) */
			/* name */ 'format',
			[/* parameters */
				[/* parameter */
					/* name */ 'date',
					/* type */ 'java.util.Date',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.StringBuffer java.text.DateFormat.format(java.lang.Object,java.lang.StringBuffer,java.text.FieldPosition) */
			/* name */ 'format',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
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
					/* name */ 'fieldPosition',
					/* type */ 'java.text.FieldPosition',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.text.DateFormat.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object java.text.DateFormat.clone() */
			/* name */ 'clone',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object java.text.DateFormat.parseObject(java.lang.String,java.text.ParsePosition) */
			/* name */ 'parseObject',
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
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
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.text.NumberFormat java.text.DateFormat.getNumberFormat() */
			/* name */ 'getNumberFormat',
			/* parameters */,
			/* return */ 'java.text.NumberFormat',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Calendar java.text.DateFormat.getCalendar() */
			/* name */ 'getCalendar',
			/* parameters */,
			/* return */ 'java.util.Calendar',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Date java.text.DateFormat.parse(java.lang.String) throws java.text.ParseException */
			/* name */ 'parse',
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Date',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.text.ParseException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.TimeZone java.text.DateFormat.getTimeZone() */
			/* name */ 'getTimeZone',
			/* parameters */,
			/* return */ 'java.util.TimeZone',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static final java.text.DateFormat java.text.DateFormat.getDateInstance() */
			/* name */ 'getDateInstance',
			/* parameters */,
			/* return */ 'java.text.DateFormat',
			/* exceptions */,
			/* modifiers */ 25,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static final java.text.DateFormat java.text.DateFormat.getDateInstance(int) */
			/* name */ 'getDateInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'style',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.DateFormat',
			/* exceptions */,
			/* modifiers */ 25,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static final java.text.DateFormat java.text.DateFormat.getDateInstance(int,java.util.Locale) */
			/* name */ 'getDateInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'style',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'aLocale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.DateFormat',
			/* exceptions */,
			/* modifiers */ 25,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static final java.text.DateFormat java.text.DateFormat.getDateTimeInstance() */
			/* name */ 'getDateTimeInstance',
			/* parameters */,
			/* return */ 'java.text.DateFormat',
			/* exceptions */,
			/* modifiers */ 25,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static final java.text.DateFormat java.text.DateFormat.getDateTimeInstance(int,int) */
			/* name */ 'getDateTimeInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'dateStyle',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'timeStyle',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.DateFormat',
			/* exceptions */,
			/* modifiers */ 25,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static final java.text.DateFormat java.text.DateFormat.getDateTimeInstance(int,int,java.util.Locale) */
			/* name */ 'getDateTimeInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'dateStyle',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'timeStyle',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'aLocale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.DateFormat',
			/* exceptions */,
			/* modifiers */ 25,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static final java.text.DateFormat java.text.DateFormat.getInstance() */
			/* name */ 'getInstance',
			/* parameters */,
			/* return */ 'java.text.DateFormat',
			/* exceptions */,
			/* modifiers */ 25,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static final java.text.DateFormat java.text.DateFormat.getTimeInstance() */
			/* name */ 'getTimeInstance',
			/* parameters */,
			/* return */ 'java.text.DateFormat',
			/* exceptions */,
			/* modifiers */ 25,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static final java.text.DateFormat java.text.DateFormat.getTimeInstance(int) */
			/* name */ 'getTimeInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'style',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.DateFormat',
			/* exceptions */,
			/* modifiers */ 25,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static final java.text.DateFormat java.text.DateFormat.getTimeInstance(int,java.util.Locale) */
			/* name */ 'getTimeInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'style',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'aLocale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.DateFormat',
			/* exceptions */,
			/* modifiers */ 25,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Locale[] java.text.DateFormat.getAvailableLocales() */
			/* name */ 'getAvailableLocales',
			/* parameters */,
			/* return */ '[Ljava.util.Locale;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.text.DateFormat.setCalendar(java.util.Calendar) */
			/* name */ 'setCalendar',
			[/* parameters */
				[/* parameter */
					/* name */ 'newCalendar',
					/* type */ 'java.util.Calendar',
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
		[/* public void java.text.DateFormat.setLenient(boolean) */
			/* name */ 'setLenient',
			[/* parameters */
				[/* parameter */
					/* name */ 'lenient',
					/* type */ 'boolean',
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
		[/* public void java.text.DateFormat.setNumberFormat(java.text.NumberFormat) */
			/* name */ 'setNumberFormat',
			[/* parameters */
				[/* parameter */
					/* name */ 'newNumberFormat',
					/* type */ 'java.text.NumberFormat',
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
		[/* public void java.text.DateFormat.setTimeZone(java.util.TimeZone) */
			/* name */ 'setTimeZone',
			[/* parameters */
				[/* parameter */
					/* name */ 'zone',
					/* type */ 'java.util.TimeZone',
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
		[/* public static final int java.text.DateFormat.AM_PM_FIELD */
			/* name */ 'AM_PM_FIELD',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* protected java.util.Calendar java.text.DateFormat.calendar */
			/* name */ 'calendar',
			/* type */ 'java.util.Calendar',
			/* annotations */ UDF,
			/* modifiers */ 4
		],
		[/* public static final int java.text.DateFormat.DATE_FIELD */
			/* name */ 'DATE_FIELD',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.DateFormat.DAY_OF_WEEK_FIELD */
			/* name */ 'DAY_OF_WEEK_FIELD',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.DateFormat.DAY_OF_WEEK_IN_MONTH_FIELD */
			/* name */ 'DAY_OF_WEEK_IN_MONTH_FIELD',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.DateFormat.DAY_OF_YEAR_FIELD */
			/* name */ 'DAY_OF_YEAR_FIELD',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.DateFormat.DEFAULT */
			/* name */ 'DEFAULT',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.DateFormat.ERA_FIELD */
			/* name */ 'ERA_FIELD',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.DateFormat.FULL */
			/* name */ 'FULL',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.DateFormat.HOUR0_FIELD */
			/* name */ 'HOUR0_FIELD',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.DateFormat.HOUR1_FIELD */
			/* name */ 'HOUR1_FIELD',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.DateFormat.HOUR_OF_DAY0_FIELD */
			/* name */ 'HOUR_OF_DAY0_FIELD',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.DateFormat.HOUR_OF_DAY1_FIELD */
			/* name */ 'HOUR_OF_DAY1_FIELD',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.DateFormat.LONG */
			/* name */ 'LONG',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.DateFormat.MEDIUM */
			/* name */ 'MEDIUM',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.DateFormat.MILLISECOND_FIELD */
			/* name */ 'MILLISECOND_FIELD',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.DateFormat.MINUTE_FIELD */
			/* name */ 'MINUTE_FIELD',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.DateFormat.MONTH_FIELD */
			/* name */ 'MONTH_FIELD',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* protected java.text.NumberFormat java.text.DateFormat.numberFormat */
			/* name */ 'numberFormat',
			/* type */ 'java.text.NumberFormat',
			/* annotations */ UDF,
			/* modifiers */ 4
		],
		[/* public static final int java.text.DateFormat.SECOND_FIELD */
			/* name */ 'SECOND_FIELD',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.DateFormat.SHORT */
			/* name */ 'SHORT',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.DateFormat.TIMEZONE_FIELD */
			/* name */ 'TIMEZONE_FIELD',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.DateFormat.WEEK_OF_MONTH_FIELD */
			/* name */ 'WEEK_OF_MONTH_FIELD',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.DateFormat.WEEK_OF_YEAR_FIELD */
			/* name */ 'WEEK_OF_YEAR_FIELD',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.text.DateFormat.YEAR_FIELD */
			/* name */ 'YEAR_FIELD',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
