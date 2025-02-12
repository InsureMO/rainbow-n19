import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.stream.DoubleStream$Builder', [
	/* super class */,
	[/* interfaces, implements java.util.function.DoubleConsumer */
		'java.util.function.DoubleConsumer'
	],
	/* modifiers */ 1545,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public default java.util.stream.DoubleStream$Builder java.util.stream.DoubleStream$Builder.add(double) */
			/* name */ 'add',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.DoubleStream$Builder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract void java.util.stream.DoubleStream$Builder.accept(double) */
			/* name */ 'accept',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'double',
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
		[/* public abstract java.util.stream.DoubleStream java.util.stream.DoubleStream$Builder.build() */
			/* name */ 'build',
			/* parameters */,
			/* return */ 'java.util.stream.DoubleStream',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
