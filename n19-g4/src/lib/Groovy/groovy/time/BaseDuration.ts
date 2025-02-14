import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.time.BaseDuration', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.lang.Comparable<groovy.time.BaseDuration> */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'groovy.time.BaseDuration'
			],
			/* raw type */ 'java.lang.Comparable',
			/* owner type */ UDF
		]]
	],
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* protected groovy.time.BaseDuration(int,int,int,int,int) */
			[/* parameters */
				[/* parameter */
					/* name */ 'days',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'hours',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'minutes',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'seconds',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'millis',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected groovy.time.BaseDuration(int,int,int,int,int,int,int) */
			[/* parameters */
				[/* parameter */
					/* name */ 'years',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'months',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'days',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'hours',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'minutes',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'seconds',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'millis',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public abstract groovy.time.BaseDuration$From groovy.time.BaseDuration.getFrom() */
			/* name */ 'getFrom',
			/* parameters */,
			/* return */ 'groovy.time.BaseDuration$From',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Date groovy.time.BaseDuration.getAgo() */
			/* name */ 'getAgo',
			/* parameters */,
			/* return */ 'java.util.Date',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract long groovy.time.BaseDuration.toMilliseconds() */
			/* name */ 'toMilliseconds',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.time.BaseDuration.compareTo(groovy.time.BaseDuration) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'otherDuration',
					/* type */ 'groovy.time.BaseDuration',
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
		[/* public int groovy.time.BaseDuration.getDays() */
			/* name */ 'getDays',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.time.BaseDuration.getHours() */
			/* name */ 'getHours',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.time.BaseDuration.getMillis() */
			/* name */ 'getMillis',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.time.BaseDuration.getMinutes() */
			/* name */ 'getMinutes',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.time.BaseDuration.getMonths() */
			/* name */ 'getMonths',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.time.BaseDuration.getSeconds() */
			/* name */ 'getSeconds',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.time.BaseDuration.getYears() */
			/* name */ 'getYears',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String groovy.time.BaseDuration.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Date groovy.time.BaseDuration.plus(java.util.Date) */
			/* name */ 'plus',
			[/* parameters */
				[/* parameter */
					/* name */ 'date',
					/* type */ 'java.util.Date',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Date',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* protected final int groovy.time.BaseDuration.years */
			/* name */ 'years',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 20
		],
		[/* protected final int groovy.time.BaseDuration.months */
			/* name */ 'months',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 20
		],
		[/* protected final int groovy.time.BaseDuration.days */
			/* name */ 'days',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 20
		],
		[/* protected final int groovy.time.BaseDuration.hours */
			/* name */ 'hours',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 20
		],
		[/* protected final int groovy.time.BaseDuration.minutes */
			/* name */ 'minutes',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 20
		],
		[/* protected final int groovy.time.BaseDuration.seconds */
			/* name */ 'seconds',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 20
		],
		[/* protected final int groovy.time.BaseDuration.millis */
			/* name */ 'millis',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 20
		]
	],
	/* enum values */ UDF
]);
