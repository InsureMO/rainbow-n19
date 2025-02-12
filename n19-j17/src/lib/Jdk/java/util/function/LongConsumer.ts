import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.function.LongConsumer', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1537,
	[/* declared annotations */
		['java.lang.FunctionalInterface']
	],
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract void java.util.function.LongConsumer.accept(long) */
			/* name */ 'accept',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
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
		[/* public default java.util.function.LongConsumer java.util.function.LongConsumer.andThen(java.util.function.LongConsumer) */
			/* name */ 'andThen',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.LongConsumer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.function.LongConsumer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
