import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.stream.LongStream$LongMapMultiConsumer', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1545,
	[/* declared annotations */
		['java.lang.FunctionalInterface']
	],
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract void java.util.stream.LongStream$LongMapMultiConsumer.accept(long,java.util.function.LongConsumer) */
			/* name */ 'accept',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.function.LongConsumer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
