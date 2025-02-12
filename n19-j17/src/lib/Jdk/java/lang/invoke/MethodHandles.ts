import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.invoke.MethodHandles', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public static <T extends java.lang.reflect.Member> T java.lang.invoke.MethodHandles.reflectAs(java.lang.Class<T>,java.lang.invoke.MethodHandle) */
			/* name */ 'reflectAs',
			[/* parameters */
				[/* parameter */
					/* name */ 'expected',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T']],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.reflect.Member'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T> T java.lang.invoke.MethodHandles.classData(java.lang.invoke.MethodHandles$Lookup,java.lang.String,java.lang.Class<T>) throws java.lang.IllegalAccessException */
			/* name */ 'classData',
			[/* parameters */
				[/* parameter */
					/* name */ 'caller',
					/* type */ 'java.lang.invoke.MethodHandles$Lookup',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'type',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T']],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T> T java.lang.invoke.MethodHandles.classDataAt(java.lang.invoke.MethodHandles$Lookup,java.lang.String,java.lang.Class<T>,int) throws java.lang.IllegalAccessException */
			/* name */ 'classDataAt',
			[/* parameters */
				[/* parameter */
					/* name */ 'caller',
					/* type */ 'java.lang.invoke.MethodHandles$Lookup',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'type',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'index',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T']],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.arrayConstructor(java.lang.Class<?>) throws java.lang.IllegalArgumentException */
			/* name */ 'arrayConstructor',
			[/* parameters */
				[/* parameter */
					/* name */ 'arrayClass',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.arrayElementGetter(java.lang.Class<?>) throws java.lang.IllegalArgumentException */
			/* name */ 'arrayElementGetter',
			[/* parameters */
				[/* parameter */
					/* name */ 'arrayClass',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.arrayElementSetter(java.lang.Class<?>) throws java.lang.IllegalArgumentException */
			/* name */ 'arrayElementSetter',
			[/* parameters */
				[/* parameter */
					/* name */ 'arrayClass',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.arrayLength(java.lang.Class<?>) throws java.lang.IllegalArgumentException */
			/* name */ 'arrayLength',
			[/* parameters */
				[/* parameter */
					/* name */ 'arrayClass',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.catchException(java.lang.invoke.MethodHandle,java.lang.Class<? extends java.lang.Throwable>,java.lang.invoke.MethodHandle) */
			/* name */ 'catchException',
			[/* parameters */
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'exType',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Throwable'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'handler',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.collectArguments(java.lang.invoke.MethodHandle,int,java.lang.invoke.MethodHandle) */
			/* name */ 'collectArguments',
			[/* parameters */
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'pos',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'filter',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.constant(java.lang.Class<?>,java.lang.Object) */
			/* name */ 'constant',
			[/* parameters */
				[/* parameter */
					/* name */ 'type',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'value',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.countedLoop(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle) */
			/* name */ 'countedLoop',
			[/* parameters */
				[/* parameter */
					/* name */ 'iterations',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'init',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'body',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.countedLoop(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle) */
			/* name */ 'countedLoop',
			[/* parameters */
				[/* parameter */
					/* name */ 'start',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'end',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'init',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'body',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.doWhileLoop(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle) */
			/* name */ 'doWhileLoop',
			[/* parameters */
				[/* parameter */
					/* name */ 'init',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'body',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'pred',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.dropArguments(java.lang.invoke.MethodHandle,int,java.lang.Class<?>...) */
			/* name */ 'dropArguments',
			[/* parameters */
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'pos',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'valueTypes',
					/* type */ [/* generic array type */ 'ga', [[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]]]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 137,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.dropArguments(java.lang.invoke.MethodHandle,int,java.util.List<java.lang.Class<?>>) */
			/* name */ 'dropArguments',
			[/* parameters */
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'pos',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'valueTypes',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* parameterized type */ 'pt', [
								[/* actual argument types */
									[/* wildcard type */ 'wt', [
										[/* upper bounds */
											'java.lang.Object'
										],
										/* lower bounds */ UDF
									]]
								],
								/* raw type */ 'java.lang.Class',
								/* owner type */ UDF
							]]
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.dropArgumentsToMatch(java.lang.invoke.MethodHandle,int,java.util.List<java.lang.Class<?>>,int) */
			/* name */ 'dropArgumentsToMatch',
			[/* parameters */
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'skip',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'newTypes',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* parameterized type */ 'pt', [
								[/* actual argument types */
									[/* wildcard type */ 'wt', [
										[/* upper bounds */
											'java.lang.Object'
										],
										/* lower bounds */ UDF
									]]
								],
								/* raw type */ 'java.lang.Class',
								/* owner type */ UDF
							]]
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'pos',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.dropReturn(java.lang.invoke.MethodHandle) */
			/* name */ 'dropReturn',
			[/* parameters */
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.empty(java.lang.invoke.MethodType) */
			/* name */ 'empty',
			[/* parameters */
				[/* parameter */
					/* name */ 'type',
					/* type */ 'java.lang.invoke.MethodType',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.exactInvoker(java.lang.invoke.MethodType) */
			/* name */ 'exactInvoker',
			[/* parameters */
				[/* parameter */
					/* name */ 'type',
					/* type */ 'java.lang.invoke.MethodType',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.explicitCastArguments(java.lang.invoke.MethodHandle,java.lang.invoke.MethodType) */
			/* name */ 'explicitCastArguments',
			[/* parameters */
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'newType',
					/* type */ 'java.lang.invoke.MethodType',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.filterArguments(java.lang.invoke.MethodHandle,int,java.lang.invoke.MethodHandle...) */
			/* name */ 'filterArguments',
			[/* parameters */
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'pos',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'filters',
					/* type */ '[Ljava.lang.invoke.MethodHandle;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 137,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.filterReturnValue(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle) */
			/* name */ 'filterReturnValue',
			[/* parameters */
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'filter',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.foldArguments(java.lang.invoke.MethodHandle,int,java.lang.invoke.MethodHandle) */
			/* name */ 'foldArguments',
			[/* parameters */
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'pos',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'combiner',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.foldArguments(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle) */
			/* name */ 'foldArguments',
			[/* parameters */
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'combiner',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.guardWithTest(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle) */
			/* name */ 'guardWithTest',
			[/* parameters */
				[/* parameter */
					/* name */ 'test',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'fallback',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.identity(java.lang.Class<?>) */
			/* name */ 'identity',
			[/* parameters */
				[/* parameter */
					/* name */ 'type',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.insertArguments(java.lang.invoke.MethodHandle,int,java.lang.Object...) */
			/* name */ 'insertArguments',
			[/* parameters */
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'pos',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'values',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 137,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.invoker(java.lang.invoke.MethodType) */
			/* name */ 'invoker',
			[/* parameters */
				[/* parameter */
					/* name */ 'type',
					/* type */ 'java.lang.invoke.MethodType',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.iteratedLoop(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle) */
			/* name */ 'iteratedLoop',
			[/* parameters */
				[/* parameter */
					/* name */ 'iterator',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'init',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'body',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.loop(java.lang.invoke.MethodHandle[]...) */
			/* name */ 'loop',
			[/* parameters */
				[/* parameter */
					/* name */ 'clauses',
					/* type */ '[[Ljava.lang.invoke.MethodHandle;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 137,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.permuteArguments(java.lang.invoke.MethodHandle,java.lang.invoke.MethodType,int...) */
			/* name */ 'permuteArguments',
			[/* parameters */
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'newType',
					/* type */ 'java.lang.invoke.MethodType',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'reorder',
					/* type */ '[I',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 137,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.spreadInvoker(java.lang.invoke.MethodType,int) */
			/* name */ 'spreadInvoker',
			[/* parameters */
				[/* parameter */
					/* name */ 'type',
					/* type */ 'java.lang.invoke.MethodType',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'leadingArgCount',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.tableSwitch(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle...) */
			/* name */ 'tableSwitch',
			[/* parameters */
				[/* parameter */
					/* name */ 'fallback',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'targets',
					/* type */ '[Ljava.lang.invoke.MethodHandle;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 137,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.throwException(java.lang.Class<?>,java.lang.Class<? extends java.lang.Throwable>) */
			/* name */ 'throwException',
			[/* parameters */
				[/* parameter */
					/* name */ 'returnType',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'exType',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Throwable'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.tryFinally(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle) */
			/* name */ 'tryFinally',
			[/* parameters */
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'cleanup',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.varHandleExactInvoker(java.lang.invoke.VarHandle$AccessMode,java.lang.invoke.MethodType) */
			/* name */ 'varHandleExactInvoker',
			[/* parameters */
				[/* parameter */
					/* name */ 'accessMode',
					/* type */ 'java.lang.invoke.VarHandle$AccessMode',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'type',
					/* type */ 'java.lang.invoke.MethodType',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.varHandleInvoker(java.lang.invoke.VarHandle$AccessMode,java.lang.invoke.MethodType) */
			/* name */ 'varHandleInvoker',
			[/* parameters */
				[/* parameter */
					/* name */ 'accessMode',
					/* type */ 'java.lang.invoke.VarHandle$AccessMode',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'type',
					/* type */ 'java.lang.invoke.MethodType',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.whileLoop(java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle,java.lang.invoke.MethodHandle) */
			/* name */ 'whileLoop',
			[/* parameters */
				[/* parameter */
					/* name */ 'init',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'pred',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'body',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles.zero(java.lang.Class<?>) */
			/* name */ 'zero',
			[/* parameters */
				[/* parameter */
					/* name */ 'type',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandles$Lookup java.lang.invoke.MethodHandles.lookup() */
			/* name */ 'lookup',
			/* parameters */,
			/* return */ 'java.lang.invoke.MethodHandles$Lookup',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive'],
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandles$Lookup java.lang.invoke.MethodHandles.privateLookupIn(java.lang.Class<?>,java.lang.invoke.MethodHandles$Lookup) throws java.lang.IllegalAccessException */
			/* name */ 'privateLookupIn',
			[/* parameters */
				[/* parameter */
					/* name */ 'targetClass',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'caller',
					/* type */ 'java.lang.invoke.MethodHandles$Lookup',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandles$Lookup',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandles$Lookup java.lang.invoke.MethodHandles.publicLookup() */
			/* name */ 'publicLookup',
			/* parameters */,
			/* return */ 'java.lang.invoke.MethodHandles$Lookup',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.VarHandle java.lang.invoke.MethodHandles.arrayElementVarHandle(java.lang.Class<?>) throws java.lang.IllegalArgumentException */
			/* name */ 'arrayElementVarHandle',
			[/* parameters */
				[/* parameter */
					/* name */ 'arrayClass',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.VarHandle',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.VarHandle java.lang.invoke.MethodHandles.byteArrayViewVarHandle(java.lang.Class<?>,java.nio.ByteOrder) throws java.lang.IllegalArgumentException */
			/* name */ 'byteArrayViewVarHandle',
			[/* parameters */
				[/* parameter */
					/* name */ 'viewArrayClass',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'byteOrder',
					/* type */ 'java.nio.ByteOrder',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.VarHandle',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.VarHandle java.lang.invoke.MethodHandles.byteBufferViewVarHandle(java.lang.Class<?>,java.nio.ByteOrder) throws java.lang.IllegalArgumentException */
			/* name */ 'byteBufferViewVarHandle',
			[/* parameters */
				[/* parameter */
					/* name */ 'viewArrayClass',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'byteOrder',
					/* type */ 'java.nio.ByteOrder',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.VarHandle',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
