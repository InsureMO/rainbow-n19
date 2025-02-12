import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.reflect.Constructor', [
	/* super class, extends java.lang.reflect.Executable */
	'java.lang.reflect.Executable',
	/* interfaces */,
	/* modifiers */ 17,
	/* declared annotations */,
	[/* type parameters */
		[/* type variable */
			/* name */ 'T',
			[/* bounds */
				'java.lang.Object'
			],
			/* annotations */ UDF
		]
	],
	/* declared constructors */,
	[/* declared methods */
		[/* public <T extends java.lang.annotation.Annotation> T java.lang.reflect.Constructor.getAnnotation(java.lang.Class<T>) */
			/* name */ 'getAnnotation',
			[/* parameters */
				[/* parameter */
					/* name */ 'annotationClass',
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
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.annotation.Annotation'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public T java.lang.reflect.Constructor.newInstance(java.lang.Object...) throws java.lang.InstantiationException,java.lang.IllegalAccessException,java.lang.IllegalArgumentException,java.lang.reflect.InvocationTargetException */
			/* name */ 'newInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'initargs',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T']],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.InstantiationException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.reflect.InvocationTargetException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 129,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive'],
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		],
		[/* public boolean java.lang.reflect.Constructor.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
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
		[/* public boolean java.lang.reflect.Constructor.isSynthetic() */
			/* name */ 'isSynthetic',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.lang.reflect.Constructor.isVarArgs() */
			/* name */ 'isVarArgs',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.reflect.Constructor.getModifiers() */
			/* name */ 'getModifiers',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.reflect.Constructor.getParameterCount() */
			/* name */ 'getParameterCount',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.reflect.Constructor.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Class<?>[] java.lang.reflect.Constructor.getExceptionTypes() */
			/* name */ 'getExceptionTypes',
			/* parameters */,
			/* return */ [/* generic array type */ 'ga', [[/* parameterized type */ 'pt', [
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
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Class<?>[] java.lang.reflect.Constructor.getParameterTypes() */
			/* name */ 'getParameterTypes',
			/* parameters */,
			/* return */ [/* generic array type */ 'ga', [[/* parameterized type */ 'pt', [
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
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Class<T> java.lang.reflect.Constructor.getDeclaringClass() */
			/* name */ 'getDeclaringClass',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.lang.Class',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.reflect.Constructor.getName() */
			/* name */ 'getName',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.reflect.Constructor.toGenericString() */
			/* name */ 'toGenericString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.reflect.Constructor.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.annotation.Annotation[] java.lang.reflect.Constructor.getDeclaredAnnotations() */
			/* name */ 'getDeclaredAnnotations',
			/* parameters */,
			/* return */ '[Ljava.lang.annotation.Annotation;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.annotation.Annotation[][] java.lang.reflect.Constructor.getParameterAnnotations() */
			/* name */ 'getParameterAnnotations',
			/* parameters */,
			/* return */ '[[Ljava.lang.annotation.Annotation;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.reflect.AnnotatedType java.lang.reflect.Constructor.getAnnotatedReceiverType() */
			/* name */ 'getAnnotatedReceiverType',
			/* parameters */,
			/* return */ 'java.lang.reflect.AnnotatedType',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.reflect.AnnotatedType java.lang.reflect.Constructor.getAnnotatedReturnType() */
			/* name */ 'getAnnotatedReturnType',
			/* parameters */,
			/* return */ 'java.lang.reflect.AnnotatedType',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.reflect.TypeVariable<java.lang.reflect.Constructor<T>>[] java.lang.reflect.Constructor.getTypeParameters() */
			/* name */ 'getTypeParameters',
			/* parameters */,
			/* return */ [/* generic array type */ 'ga', [[/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.lang.reflect.Constructor',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.lang.reflect.TypeVariable',
				/* owner type */ UDF
			]]]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.reflect.Type[] java.lang.reflect.Constructor.getGenericExceptionTypes() */
			/* name */ 'getGenericExceptionTypes',
			/* parameters */,
			/* return */ '[Ljava.lang.reflect.Type;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.reflect.Type[] java.lang.reflect.Constructor.getGenericParameterTypes() */
			/* name */ 'getGenericParameterTypes',
			/* parameters */,
			/* return */ '[Ljava.lang.reflect.Type;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.reflect.Constructor.setAccessible(boolean) */
			/* name */ 'setAccessible',
			[/* parameters */
				[/* parameter */
					/* name */ 'flag',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive']
			],
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
