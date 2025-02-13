import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.TimeZone', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.io.Serializable, java.lang.Cloneable */
		'java.io.Serializable',
		'java.lang.Cloneable'
	],
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.util.TimeZone() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public abstract boolean java.util.TimeZone.inDaylightTime(java.util.Date) */
			/* name */ 'inDaylightTime',
			[/* parameters */
				[/* parameter */
					/* name */ 'date',
					/* type */ 'java.util.Date',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.util.TimeZone.useDaylightTime() */
			/* name */ 'useDaylightTime',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.util.TimeZone.getOffset(int,int,int,int,int,int) */
			/* name */ 'getOffset',
			[/* parameters */
				[/* parameter */
					/* name */ 'era',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
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
					/* name */ 'day',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'dayOfWeek',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'milliseconds',
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
		[/* public abstract int java.util.TimeZone.getRawOffset() */
			/* name */ 'getRawOffset',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract void java.util.TimeZone.setRawOffset(int) */
			/* name */ 'setRawOffset',
			[/* parameters */
				[/* parameter */
					/* name */ 'offsetMillis',
					/* type */ 'int',
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
		[/* public boolean java.util.TimeZone.hasSameRules(java.util.TimeZone) */
			/* name */ 'hasSameRules',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ 'java.util.TimeZone',
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
		[/* public boolean java.util.TimeZone.observesDaylightTime() */
			/* name */ 'observesDaylightTime',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.String java.util.TimeZone.getDisplayName() */
			/* name */ 'getDisplayName',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.String java.util.TimeZone.getDisplayName(boolean,int) */
			/* name */ 'getDisplayName',
			[/* parameters */
				[/* parameter */
					/* name */ 'daylight',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'style',
					/* type */ 'int',
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
		[/* public final java.lang.String java.util.TimeZone.getDisplayName(java.util.Locale) */
			/* name */ 'getDisplayName',
			[/* parameters */
				[/* parameter */
					/* name */ 'locale',
					/* type */ 'java.util.Locale',
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
		[/* public int java.util.TimeZone.getDSTSavings() */
			/* name */ 'getDSTSavings',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.util.TimeZone.getOffset(long) */
			/* name */ 'getOffset',
			[/* parameters */
				[/* parameter */
					/* name */ 'date',
					/* type */ 'long',
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
		[/* public java.lang.Object java.util.TimeZone.clone() */
			/* name */ 'clone',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.TimeZone.getDisplayName(boolean,int,java.util.Locale) */
			/* name */ 'getDisplayName',
			[/* parameters */
				[/* parameter */
					/* name */ 'daylight',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'style',
					/* type */ 'int',
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
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.TimeZone.getID() */
			/* name */ 'getID',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.ZoneId java.util.TimeZone.toZoneId() */
			/* name */ 'toZoneId',
			/* parameters */,
			/* return */ 'java.time.ZoneId',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.TimeZone java.util.TimeZone.getDefault() */
			/* name */ 'getDefault',
			/* parameters */,
			/* return */ 'java.util.TimeZone',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.TimeZone java.util.TimeZone.getTimeZone(java.time.ZoneId) */
			/* name */ 'getTimeZone',
			[/* parameters */
				[/* parameter */
					/* name */ 'zoneId',
					/* type */ 'java.time.ZoneId',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.TimeZone',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static synchronized java.lang.String[] java.util.TimeZone.getAvailableIDs() */
			/* name */ 'getAvailableIDs',
			/* parameters */,
			/* return */ '[Ljava.lang.String;',
			/* exceptions */,
			/* modifiers */ 41,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static synchronized java.lang.String[] java.util.TimeZone.getAvailableIDs(int) */
			/* name */ 'getAvailableIDs',
			[/* parameters */
				[/* parameter */
					/* name */ 'rawOffset',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ '[Ljava.lang.String;',
			/* exceptions */,
			/* modifiers */ 41,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static synchronized java.util.TimeZone java.util.TimeZone.getTimeZone(java.lang.String) */
			/* name */ 'getTimeZone',
			[/* parameters */
				[/* parameter */
					/* name */ 'ID',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.TimeZone',
			/* exceptions */,
			/* modifiers */ 41,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static void java.util.TimeZone.setDefault(java.util.TimeZone) */
			/* name */ 'setDefault',
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
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.TimeZone.setID(java.lang.String) */
			/* name */ 'setID',
			[/* parameters */
				[/* parameter */
					/* name */ 'ID',
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
	[/* declared fields */
		[/* public static final int java.util.TimeZone.SHORT */
			/* name */ 'SHORT',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.TimeZone.LONG */
			/* name */ 'LONG',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
