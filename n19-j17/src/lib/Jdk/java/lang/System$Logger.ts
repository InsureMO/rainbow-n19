import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.System$Logger', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1545,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract boolean java.lang.System$Logger.isLoggable(java.lang.System$Logger$Level) */
			/* name */ 'isLoggable',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.System$Logger$Level',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.String java.lang.System$Logger.getName() */
			/* name */ 'getName',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract void java.lang.System$Logger.log(java.lang.System$Logger$Level,java.util.ResourceBundle,java.lang.String,java.lang.Object...) */
			/* name */ 'log',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.System$Logger$Level',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.ResourceBundle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg3',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1153,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract void java.lang.System$Logger.log(java.lang.System$Logger$Level,java.util.ResourceBundle,java.lang.String,java.lang.Throwable) */
			/* name */ 'log',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.System$Logger$Level',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.ResourceBundle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg3',
					/* type */ 'java.lang.Throwable',
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
		[/* public default void java.lang.System$Logger.log(java.lang.System$Logger$Level,java.lang.Object) */
			/* name */ 'log',
			[/* parameters */
				[/* parameter */
					/* name */ 'level',
					/* type */ 'java.lang.System$Logger$Level',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
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
		[/* public default void java.lang.System$Logger.log(java.lang.System$Logger$Level,java.lang.String) */
			/* name */ 'log',
			[/* parameters */
				[/* parameter */
					/* name */ 'level',
					/* type */ 'java.lang.System$Logger$Level',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'msg',
					/* type */ 'java.lang.String',
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
		[/* public default void java.lang.System$Logger.log(java.lang.System$Logger$Level,java.lang.String,java.lang.Object...) */
			/* name */ 'log',
			[/* parameters */
				[/* parameter */
					/* name */ 'level',
					/* type */ 'java.lang.System$Logger$Level',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'format',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'params',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 129,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default void java.lang.System$Logger.log(java.lang.System$Logger$Level,java.lang.String,java.lang.Throwable) */
			/* name */ 'log',
			[/* parameters */
				[/* parameter */
					/* name */ 'level',
					/* type */ 'java.lang.System$Logger$Level',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'msg',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'thrown',
					/* type */ 'java.lang.Throwable',
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
		[/* public default void java.lang.System$Logger.log(java.lang.System$Logger$Level,java.util.function.Supplier<java.lang.String>) */
			/* name */ 'log',
			[/* parameters */
				[/* parameter */
					/* name */ 'level',
					/* type */ 'java.lang.System$Logger$Level',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'msgSupplier',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String'
						],
						/* raw type */ 'java.util.function.Supplier',
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
		[/* public default void java.lang.System$Logger.log(java.lang.System$Logger$Level,java.util.function.Supplier<java.lang.String>,java.lang.Throwable) */
			/* name */ 'log',
			[/* parameters */
				[/* parameter */
					/* name */ 'level',
					/* type */ 'java.lang.System$Logger$Level',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'msgSupplier',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String'
						],
						/* raw type */ 'java.util.function.Supplier',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'thrown',
					/* type */ 'java.lang.Throwable',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
