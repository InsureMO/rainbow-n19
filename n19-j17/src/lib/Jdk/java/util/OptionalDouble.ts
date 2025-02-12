import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.OptionalDouble', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 17,
	[/* declared annotations */
		['jdk.internal.ValueBased']
	],
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public boolean java.util.OptionalDouble.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Object',
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
		[/* public java.lang.String java.util.OptionalDouble.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.util.OptionalDouble.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.OptionalDouble.isEmpty() */
			/* name */ 'isEmpty',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.DoubleStream java.util.OptionalDouble.stream() */
			/* name */ 'stream',
			/* parameters */,
			/* return */ 'java.util.stream.DoubleStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.OptionalDouble java.util.OptionalDouble.of(double) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.OptionalDouble',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.OptionalDouble java.util.OptionalDouble.empty() */
			/* name */ 'empty',
			/* parameters */,
			/* return */ 'java.util.OptionalDouble',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.OptionalDouble.isPresent() */
			/* name */ 'isPresent',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public double java.util.OptionalDouble.orElse(double) */
			/* name */ 'orElse',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public <X extends java.lang.Throwable> double java.util.OptionalDouble.orElseThrow(java.util.function.Supplier<? extends X>) throws X */
			/* name */ 'orElseThrow',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'X']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Supplier',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			[/* exceptions */
				[/* exception */
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'X']],
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'X',
					[/* bounds */
						'java.lang.Throwable'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public double java.util.OptionalDouble.orElseThrow() */
			/* name */ 'orElseThrow',
			/* parameters */,
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.OptionalDouble.ifPresent(java.util.function.DoubleConsumer) */
			/* name */ 'ifPresent',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
		[/* public void java.util.OptionalDouble.ifPresentOrElse(java.util.function.DoubleConsumer,java.lang.Runnable) */
			/* name */ 'ifPresentOrElse',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.DoubleConsumer',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.Runnable',
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
		[/* public double java.util.OptionalDouble.orElseGet(java.util.function.DoubleSupplier) */
			/* name */ 'orElseGet',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.DoubleSupplier',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public double java.util.OptionalDouble.getAsDouble() */
			/* name */ 'getAsDouble',
			/* parameters */,
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
