import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.time.DatumDependentDuration', [
	/* super class, extends groovy.time.BaseDuration */
	'groovy.time.BaseDuration',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public groovy.time.DatumDependentDuration(int,int,int,int,int,int,int) */
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public groovy.time.BaseDuration$From groovy.time.DatumDependentDuration.getFrom() */
			/* name */ 'getFrom',
			/* parameters */,
			/* return */ 'groovy.time.BaseDuration$From',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.time.DatumDependentDuration groovy.time.DatumDependentDuration.minus(groovy.time.DatumDependentDuration) */
			/* name */ 'minus',
			[/* parameters */
				[/* parameter */
					/* name */ 'rhs',
					/* type */ 'groovy.time.DatumDependentDuration',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.DatumDependentDuration',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.time.DatumDependentDuration groovy.time.DatumDependentDuration.minus(groovy.time.Duration) */
			/* name */ 'minus',
			[/* parameters */
				[/* parameter */
					/* name */ 'rhs',
					/* type */ 'groovy.time.Duration',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.DatumDependentDuration',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.time.DatumDependentDuration groovy.time.DatumDependentDuration.plus(groovy.time.DatumDependentDuration) */
			/* name */ 'plus',
			[/* parameters */
				[/* parameter */
					/* name */ 'rhs',
					/* type */ 'groovy.time.DatumDependentDuration',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.DatumDependentDuration',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.time.DatumDependentDuration groovy.time.DatumDependentDuration.plus(groovy.time.Duration) */
			/* name */ 'plus',
			[/* parameters */
				[/* parameter */
					/* name */ 'rhs',
					/* type */ 'groovy.time.Duration',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.DatumDependentDuration',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.time.DatumDependentDuration groovy.time.DatumDependentDuration.plus(groovy.time.TimeDatumDependentDuration) */
			/* name */ 'plus',
			[/* parameters */
				[/* parameter */
					/* name */ 'rhs',
					/* type */ 'groovy.time.TimeDatumDependentDuration',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.DatumDependentDuration',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.time.DatumDependentDuration groovy.time.DatumDependentDuration.plus(groovy.time.TimeDuration) */
			/* name */ 'plus',
			[/* parameters */
				[/* parameter */
					/* name */ 'rhs',
					/* type */ 'groovy.time.TimeDuration',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.DatumDependentDuration',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.time.DatumDependentDuration.getMonths() */
			/* name */ 'getMonths',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.time.DatumDependentDuration.getYears() */
			/* name */ 'getYears',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Date groovy.time.DatumDependentDuration.getAgo() */
			/* name */ 'getAgo',
			/* parameters */,
			/* return */ 'java.util.Date',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long groovy.time.DatumDependentDuration.toMilliseconds() */
			/* name */ 'toMilliseconds',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
