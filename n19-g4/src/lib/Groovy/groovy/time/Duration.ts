import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.time.Duration', [
	/* super class, extends groovy.time.BaseDuration */
	'groovy.time.BaseDuration',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public groovy.time.Duration(int,int,int,int,int) */
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public groovy.time.BaseDuration$From groovy.time.Duration.getFrom() */
			/* name */ 'getFrom',
			/* parameters */,
			/* return */ 'groovy.time.BaseDuration$From',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.time.DatumDependentDuration groovy.time.Duration.minus(groovy.time.DatumDependentDuration) */
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
		[/* public groovy.time.DatumDependentDuration groovy.time.Duration.plus(groovy.time.DatumDependentDuration) */
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
		[/* public groovy.time.Duration groovy.time.Duration.minus(groovy.time.Duration) */
			/* name */ 'minus',
			[/* parameters */
				[/* parameter */
					/* name */ 'rhs',
					/* type */ 'groovy.time.Duration',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.Duration',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.time.Duration groovy.time.Duration.plus(groovy.time.Duration) */
			/* name */ 'plus',
			[/* parameters */
				[/* parameter */
					/* name */ 'rhs',
					/* type */ 'groovy.time.Duration',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.Duration',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.time.Duration groovy.time.Duration.plus(groovy.time.TimeDuration) */
			/* name */ 'plus',
			[/* parameters */
				[/* parameter */
					/* name */ 'rhs',
					/* type */ 'groovy.time.TimeDuration',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.Duration',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.time.TimeDatumDependentDuration groovy.time.Duration.minus(groovy.time.TimeDatumDependentDuration) */
			/* name */ 'minus',
			[/* parameters */
				[/* parameter */
					/* name */ 'rhs',
					/* type */ 'groovy.time.TimeDatumDependentDuration',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.TimeDatumDependentDuration',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.time.TimeDuration groovy.time.Duration.minus(groovy.time.TimeDuration) */
			/* name */ 'minus',
			[/* parameters */
				[/* parameter */
					/* name */ 'rhs',
					/* type */ 'groovy.time.TimeDuration',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.TimeDuration',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Date groovy.time.Duration.getAgo() */
			/* name */ 'getAgo',
			/* parameters */,
			/* return */ 'java.util.Date',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long groovy.time.Duration.toMilliseconds() */
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
