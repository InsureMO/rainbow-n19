import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.invoke.MethodHandles$Lookup', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 25,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public boolean java.lang.invoke.MethodHandles$Lookup.hasFullPrivilegeAccess() */
			/* name */ 'hasFullPrivilegeAccess',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.lang.invoke.MethodHandles$Lookup.hasPrivateAccess() */
			/* name */ 'hasPrivateAccess',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '14'],
					['p', 'forRemoval', false]
				]
			],
			/* type parameters */ UDF
		],
		[/* public int java.lang.invoke.MethodHandles$Lookup.lookupModes() */
			/* name */ 'lookupModes',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Class<?> java.lang.invoke.MethodHandles$Lookup.accessClass(java.lang.Class<?>) throws java.lang.IllegalAccessException */
			/* name */ 'accessClass',
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
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
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
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Class<?> java.lang.invoke.MethodHandles$Lookup.defineClass(byte[]) throws java.lang.IllegalAccessException */
			/* name */ 'defineClass',
			[/* parameters */
				[/* parameter */
					/* name */ 'bytes',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
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
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Class<?> java.lang.invoke.MethodHandles$Lookup.ensureInitialized(java.lang.Class<?>) throws java.lang.IllegalAccessException */
			/* name */ 'ensureInitialized',
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
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
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
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Class<?> java.lang.invoke.MethodHandles$Lookup.findClass(java.lang.String) throws java.lang.ClassNotFoundException,java.lang.IllegalAccessException */
			/* name */ 'findClass',
			[/* parameters */
				[/* parameter */
					/* name */ 'targetName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
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
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.ClassNotFoundException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Class<?> java.lang.invoke.MethodHandles$Lookup.lookupClass() */
			/* name */ 'lookupClass',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
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
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Class<?> java.lang.invoke.MethodHandles$Lookup.previousLookupClass() */
			/* name */ 'previousLookupClass',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
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
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.invoke.MethodHandles$Lookup.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles$Lookup.bind(java.lang.Object,java.lang.String,java.lang.invoke.MethodType) throws java.lang.NoSuchMethodException,java.lang.IllegalAccessException */
			/* name */ 'bind',
			[/* parameters */
				[/* parameter */
					/* name */ 'receiver',
					/* type */ 'java.lang.Object',
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
					/* type */ 'java.lang.invoke.MethodType',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.NoSuchMethodException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles$Lookup.findConstructor(java.lang.Class<?>,java.lang.invoke.MethodType) throws java.lang.NoSuchMethodException,java.lang.IllegalAccessException */
			/* name */ 'findConstructor',
			[/* parameters */
				[/* parameter */
					/* name */ 'refc',
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
					/* name */ 'type',
					/* type */ 'java.lang.invoke.MethodType',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.NoSuchMethodException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles$Lookup.findGetter(java.lang.Class<?>,java.lang.String,java.lang.Class<?>) throws java.lang.NoSuchFieldException,java.lang.IllegalAccessException */
			/* name */ 'findGetter',
			[/* parameters */
				[/* parameter */
					/* name */ 'refc',
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
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
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
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.NoSuchFieldException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles$Lookup.findSetter(java.lang.Class<?>,java.lang.String,java.lang.Class<?>) throws java.lang.NoSuchFieldException,java.lang.IllegalAccessException */
			/* name */ 'findSetter',
			[/* parameters */
				[/* parameter */
					/* name */ 'refc',
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
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
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
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.NoSuchFieldException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles$Lookup.findSpecial(java.lang.Class<?>,java.lang.String,java.lang.invoke.MethodType,java.lang.Class<?>) throws java.lang.NoSuchMethodException,java.lang.IllegalAccessException */
			/* name */ 'findSpecial',
			[/* parameters */
				[/* parameter */
					/* name */ 'refc',
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
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'type',
					/* type */ 'java.lang.invoke.MethodType',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'specialCaller',
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
					/* type */ 'java.lang.NoSuchMethodException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles$Lookup.findStatic(java.lang.Class<?>,java.lang.String,java.lang.invoke.MethodType) throws java.lang.NoSuchMethodException,java.lang.IllegalAccessException */
			/* name */ 'findStatic',
			[/* parameters */
				[/* parameter */
					/* name */ 'refc',
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
					/* name */ 'name',
					/* type */ 'java.lang.String',
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
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.NoSuchMethodException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles$Lookup.findStaticGetter(java.lang.Class<?>,java.lang.String,java.lang.Class<?>) throws java.lang.NoSuchFieldException,java.lang.IllegalAccessException */
			/* name */ 'findStaticGetter',
			[/* parameters */
				[/* parameter */
					/* name */ 'refc',
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
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
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
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.NoSuchFieldException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles$Lookup.findStaticSetter(java.lang.Class<?>,java.lang.String,java.lang.Class<?>) throws java.lang.NoSuchFieldException,java.lang.IllegalAccessException */
			/* name */ 'findStaticSetter',
			[/* parameters */
				[/* parameter */
					/* name */ 'refc',
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
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
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
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.NoSuchFieldException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles$Lookup.findVirtual(java.lang.Class<?>,java.lang.String,java.lang.invoke.MethodType) throws java.lang.NoSuchMethodException,java.lang.IllegalAccessException */
			/* name */ 'findVirtual',
			[/* parameters */
				[/* parameter */
					/* name */ 'refc',
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
					/* name */ 'name',
					/* type */ 'java.lang.String',
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
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.NoSuchMethodException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles$Lookup.unreflect(java.lang.reflect.Method) throws java.lang.IllegalAccessException */
			/* name */ 'unreflect',
			[/* parameters */
				[/* parameter */
					/* name */ 'm',
					/* type */ 'java.lang.reflect.Method',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles$Lookup.unreflectConstructor(java.lang.reflect.Constructor<?>) throws java.lang.IllegalAccessException */
			/* name */ 'unreflectConstructor',
			[/* parameters */
				[/* parameter */
					/* name */ 'c',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.lang.reflect.Constructor',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles$Lookup.unreflectGetter(java.lang.reflect.Field) throws java.lang.IllegalAccessException */
			/* name */ 'unreflectGetter',
			[/* parameters */
				[/* parameter */
					/* name */ 'f',
					/* type */ 'java.lang.reflect.Field',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles$Lookup.unreflectSetter(java.lang.reflect.Field) throws java.lang.IllegalAccessException */
			/* name */ 'unreflectSetter',
			[/* parameters */
				[/* parameter */
					/* name */ 'f',
					/* type */ 'java.lang.reflect.Field',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandle',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.MethodHandle java.lang.invoke.MethodHandles$Lookup.unreflectSpecial(java.lang.reflect.Method,java.lang.Class<?>) throws java.lang.IllegalAccessException */
			/* name */ 'unreflectSpecial',
			[/* parameters */
				[/* parameter */
					/* name */ 'm',
					/* type */ 'java.lang.reflect.Method',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'specialCaller',
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
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.MethodHandleInfo java.lang.invoke.MethodHandles$Lookup.revealDirect(java.lang.invoke.MethodHandle) */
			/* name */ 'revealDirect',
			[/* parameters */
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.invoke.MethodHandle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandleInfo',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.MethodHandles$Lookup java.lang.invoke.MethodHandles$Lookup.defineHiddenClass(byte[],boolean,java.lang.invoke.MethodHandles$Lookup$ClassOption...) throws java.lang.IllegalAccessException */
			/* name */ 'defineHiddenClass',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ '[Ljava.lang.invoke.MethodHandles$Lookup$ClassOption;',
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
			/* modifiers */ 129,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.MethodHandles$Lookup java.lang.invoke.MethodHandles$Lookup.defineHiddenClassWithClassData(byte[],java.lang.Object,boolean,java.lang.invoke.MethodHandles$Lookup$ClassOption...) throws java.lang.IllegalAccessException */
			/* name */ 'defineHiddenClassWithClassData',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg3',
					/* type */ '[Ljava.lang.invoke.MethodHandles$Lookup$ClassOption;',
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
			/* modifiers */ 129,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.MethodHandles$Lookup java.lang.invoke.MethodHandles$Lookup.dropLookupMode(int) */
			/* name */ 'dropLookupMode',
			[/* parameters */
				[/* parameter */
					/* name */ 'modeToDrop',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandles$Lookup',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.MethodHandles$Lookup java.lang.invoke.MethodHandles$Lookup.in(java.lang.Class<?>) */
			/* name */ 'in',
			[/* parameters */
				[/* parameter */
					/* name */ 'requestedLookupClass',
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
			/* return */ 'java.lang.invoke.MethodHandles$Lookup',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.VarHandle java.lang.invoke.MethodHandles$Lookup.findStaticVarHandle(java.lang.Class<?>,java.lang.String,java.lang.Class<?>) throws java.lang.NoSuchFieldException,java.lang.IllegalAccessException */
			/* name */ 'findStaticVarHandle',
			[/* parameters */
				[/* parameter */
					/* name */ 'decl',
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
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
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
			/* return */ 'java.lang.invoke.VarHandle',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.NoSuchFieldException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.VarHandle java.lang.invoke.MethodHandles$Lookup.findVarHandle(java.lang.Class<?>,java.lang.String,java.lang.Class<?>) throws java.lang.NoSuchFieldException,java.lang.IllegalAccessException */
			/* name */ 'findVarHandle',
			[/* parameters */
				[/* parameter */
					/* name */ 'recv',
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
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
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
			/* return */ 'java.lang.invoke.VarHandle',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.NoSuchFieldException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.invoke.VarHandle java.lang.invoke.MethodHandles$Lookup.unreflectVarHandle(java.lang.reflect.Field) throws java.lang.IllegalAccessException */
			/* name */ 'unreflectVarHandle',
			[/* parameters */
				[/* parameter */
					/* name */ 'f',
					/* type */ 'java.lang.reflect.Field',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.VarHandle',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final int java.lang.invoke.MethodHandles$Lookup.PUBLIC */
			/* name */ 'PUBLIC',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.lang.invoke.MethodHandles$Lookup.PRIVATE */
			/* name */ 'PRIVATE',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.lang.invoke.MethodHandles$Lookup.PROTECTED */
			/* name */ 'PROTECTED',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.lang.invoke.MethodHandles$Lookup.PACKAGE */
			/* name */ 'PACKAGE',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.lang.invoke.MethodHandles$Lookup.MODULE */
			/* name */ 'MODULE',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.lang.invoke.MethodHandles$Lookup.UNCONDITIONAL */
			/* name */ 'UNCONDITIONAL',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.lang.invoke.MethodHandles$Lookup.ORIGINAL */
			/* name */ 'ORIGINAL',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
