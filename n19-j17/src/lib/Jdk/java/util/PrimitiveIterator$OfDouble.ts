import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.PrimitiveIterator$OfDouble', [
	/* super class */,
	[/* interfaces, implements java.util.PrimitiveIterator<java.lang.Double, java.util.function.DoubleConsumer> */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.lang.Double',
				'java.util.function.DoubleConsumer'
			],
			/* raw type */ 'java.util.PrimitiveIterator',
			/* owner type */ UDF
		]]
	],
	/* modifiers */ 1545,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public default void java.util.PrimitiveIterator$OfDouble.forEachRemaining(java.lang.Object) */
			/* name */ 'forEachRemaining',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default void java.util.PrimitiveIterator$OfDouble.forEachRemaining(java.util.function.DoubleConsumer) */
			/* name */ 'forEachRemaining',
			[/* parameters */
				[/* parameter */
					/* name */ 'action',
					/* type */ 'java.util.function.DoubleConsumer',
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
		[/* public default void java.util.PrimitiveIterator$OfDouble.forEachRemaining(java.util.function.Consumer<? super java.lang.Double>) */
			/* name */ 'forEachRemaining',
			[/* parameters */
				[/* parameter */
					/* name */ 'action',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									'java.lang.Double'
								]
							]]
						],
						/* raw type */ 'java.util.function.Consumer',
						/* owner type */ UDF
					]],
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
		[/* public default java.lang.Object java.util.PrimitiveIterator$OfDouble.next() */
			/* name */ 'next',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.lang.Double java.util.PrimitiveIterator$OfDouble.next() */
			/* name */ 'next',
			/* parameters */,
			/* return */ 'java.lang.Double',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract double java.util.PrimitiveIterator$OfDouble.nextDouble() */
			/* name */ 'nextDouble',
			/* parameters */,
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
