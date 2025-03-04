import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.GregorianCalendar', [
	/* super class, extends java.util.Calendar */
	'java.util.Calendar',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.util.GregorianCalendar() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.GregorianCalendar(int,int,int) */
			[/* parameters */
				[/* parameter */
					/* name */ 'year',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'month',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'dayOfMonth',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.GregorianCalendar(int,int,int,int,int) */
			[/* parameters */
				[/* parameter */
					/* name */ 'year',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'month',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'dayOfMonth',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'hourOfDay',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'minute',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.GregorianCalendar(int,int,int,int,int,int) */
			[/* parameters */
				[/* parameter */
					/* name */ 'year',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'month',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'dayOfMonth',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'hourOfDay',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'minute',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'second',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.GregorianCalendar(java.util.Locale) */
			[/* parameters */
				[/* parameter */
					/* name */ 'aLocale',
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
		[/* public java.util.GregorianCalendar(java.util.TimeZone) */
			[/* parameters */
				[/* parameter */
					/* name */ 'zone',
					/* type */ 'java.util.TimeZone',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.GregorianCalendar(java.util.TimeZone,java.util.Locale) */
			[/* parameters */
				[/* parameter */
					/* name */ 'zone',
					/* type */ 'java.util.TimeZone',
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
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* protected void java.util.GregorianCalendar.computeFields() */
			/* name */ 'computeFields',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected void java.util.GregorianCalendar.computeTime() */
			/* name */ 'computeTime',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.GregorianCalendar.equals(java.lang.Object) */
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
		[/* public boolean java.util.GregorianCalendar.isLeapYear(int) */
			/* name */ 'isLeapYear',
			[/* parameters */
				[/* parameter */
					/* name */ 'year',
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
		[/* public final boolean java.util.GregorianCalendar.isWeekDateSupported() */
			/* name */ 'isWeekDateSupported',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.util.Date java.util.GregorianCalendar.getGregorianChange() */
			/* name */ 'getGregorianChange',
			/* parameters */,
			/* return */ 'java.util.Date',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.util.GregorianCalendar.getActualMaximum(int) */
			/* name */ 'getActualMaximum',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
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
		],
		[/* public int java.util.GregorianCalendar.getActualMinimum(int) */
			/* name */ 'getActualMinimum',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
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
		],
		[/* public int java.util.GregorianCalendar.getGreatestMinimum(int) */
			/* name */ 'getGreatestMinimum',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
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
		],
		[/* public int java.util.GregorianCalendar.getLeastMaximum(int) */
			/* name */ 'getLeastMaximum',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
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
		],
		[/* public int java.util.GregorianCalendar.getMaximum(int) */
			/* name */ 'getMaximum',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
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
		],
		[/* public int java.util.GregorianCalendar.getMinimum(int) */
			/* name */ 'getMinimum',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
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
		],
		[/* public int java.util.GregorianCalendar.getWeekYear() */
			/* name */ 'getWeekYear',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.util.GregorianCalendar.getWeeksInWeekYear() */
			/* name */ 'getWeeksInWeekYear',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.util.GregorianCalendar.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object java.util.GregorianCalendar.clone() */
			/* name */ 'clone',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.GregorianCalendar.getCalendarType() */
			/* name */ 'getCalendarType',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.ZonedDateTime java.util.GregorianCalendar.toZonedDateTime() */
			/* name */ 'toZonedDateTime',
			/* parameters */,
			/* return */ 'java.time.ZonedDateTime',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.TimeZone java.util.GregorianCalendar.getTimeZone() */
			/* name */ 'getTimeZone',
			/* parameters */,
			/* return */ 'java.util.TimeZone',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.GregorianCalendar java.util.GregorianCalendar.from(java.time.ZonedDateTime) */
			/* name */ 'from',
			[/* parameters */
				[/* parameter */
					/* name */ 'zdt',
					/* type */ 'java.time.ZonedDateTime',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.GregorianCalendar',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.GregorianCalendar.add(int,int) */
			/* name */ 'add',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'amount',
					/* type */ 'int',
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
		[/* public void java.util.GregorianCalendar.roll(int,boolean) */
			/* name */ 'roll',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'up',
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
		[/* public void java.util.GregorianCalendar.roll(int,int) */
			/* name */ 'roll',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'amount',
					/* type */ 'int',
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
		[/* public void java.util.GregorianCalendar.setGregorianChange(java.util.Date) */
			/* name */ 'setGregorianChange',
			[/* parameters */
				[/* parameter */
					/* name */ 'date',
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
		[/* public void java.util.GregorianCalendar.setTimeZone(java.util.TimeZone) */
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
		],
		[/* public void java.util.GregorianCalendar.setWeekDate(int,int,int) */
			/* name */ 'setWeekDate',
			[/* parameters */
				[/* parameter */
					/* name */ 'weekYear',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'weekOfYear',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'dayOfWeek',
					/* type */ 'int',
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
		[/* public static final int java.util.GregorianCalendar.AD */
			/* name */ 'AD',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.GregorianCalendar.BC */
			/* name */ 'BC',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
