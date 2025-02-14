import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.time.TimeDuration', [
	/* super class, extends groovy.time.Duration */
	'groovy.time.Duration',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public groovy.time.TimeDuration(int,int,int,int) */
			[/* parameters */
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
		],
		[/* public groovy.time.TimeDuration(int,int,int,int,int) */
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
		[/* public groovy.time.BaseDuration$From groovy.time.TimeDuration.getFrom() */
			/* name */ 'getFrom',
			/* parameters */,
			/* return */ 'groovy.time.BaseDuration$From',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.time.DatumDependentDuration groovy.time.TimeDuration.minus(groovy.time.DatumDependentDuration) */
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
		[/* public groovy.time.DatumDependentDuration groovy.time.TimeDuration.plus(groovy.time.DatumDependentDuration) */
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
		[/* public groovy.time.Duration groovy.time.TimeDuration.minus(groovy.time.Duration) */
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
		[/* public groovy.time.Duration groovy.time.TimeDuration.plus(groovy.time.Duration) */
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
		[/* public java.util.Date groovy.time.TimeDuration.getAgo() */
			/* name */ 'getAgo',
			/* parameters */,
			/* return */ 'java.util.Date',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
