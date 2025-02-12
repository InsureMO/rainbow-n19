import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.temporal.TemporalAmount', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1537,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract long java.time.temporal.TemporalAmount.get(java.time.temporal.TemporalUnit) */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.temporal.TemporalUnit',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.time.temporal.Temporal java.time.temporal.TemporalAmount.addTo(java.time.temporal.Temporal) */
			/* name */ 'addTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.temporal.Temporal',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.Temporal',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.List<java.time.temporal.TemporalUnit> java.time.temporal.TemporalAmount.getUnits() */
			/* name */ 'getUnits',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.time.temporal.TemporalUnit'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.time.temporal.Temporal java.time.temporal.TemporalAmount.subtractFrom(java.time.temporal.Temporal) */
			/* name */ 'subtractFrom',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.temporal.Temporal',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.Temporal',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
