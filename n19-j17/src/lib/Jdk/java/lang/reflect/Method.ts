import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.reflect.Method', [
	/* super class, extends java.lang.reflect.Executable */
	'java.lang.reflect.Executable',
	/* interfaces */,
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public <T extends java.lang.annotation.Annotation> T java.lang.reflect.Method.getAnnotation(java.lang.Class<T>) */
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
		[/* public boolean java.lang.reflect.Method.equals(java.lang.Object) */
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
		[/* public boolean java.lang.reflect.Method.isBridge() */
			/* name */ 'isBridge',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.lang.reflect.Method.isDefault() */
			/* name */ 'isDefault',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.lang.reflect.Method.isSynthetic() */
			/* name */ 'isSynthetic',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.lang.reflect.Method.isVarArgs() */
			/* name */ 'isVarArgs',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.reflect.Method.getModifiers() */
			/* name */ 'getModifiers',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.reflect.Method.getParameterCount() */
			/* name */ 'getParameterCount',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.reflect.Method.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Class<?> java.lang.reflect.Method.getDeclaringClass() */
			/* name */ 'getDeclaringClass',
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
		[/* public java.lang.Class<?> java.lang.reflect.Method.getReturnType() */
			/* name */ 'getReturnType',
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
		[/* public java.lang.Class<?>[] java.lang.reflect.Method.getExceptionTypes() */
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
		[/* public java.lang.Class<?>[] java.lang.reflect.Method.getParameterTypes() */
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
		[/* public java.lang.Object java.lang.reflect.Method.getDefaultValue() */
			/* name */ 'getDefaultValue',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object java.lang.reflect.Method.invoke(java.lang.Object,java.lang.Object...) throws java.lang.IllegalAccessException,java.lang.IllegalArgumentException,java.lang.reflect.InvocationTargetException */
			/* name */ 'invoke',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'args',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			[/* exceptions */
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
				['jdk.internal.vm.annotation.ForceInline'],
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.reflect.Method.getName() */
			/* name */ 'getName',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.reflect.Method.toGenericString() */
			/* name */ 'toGenericString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.reflect.Method.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.annotation.Annotation[] java.lang.reflect.Method.getDeclaredAnnotations() */
			/* name */ 'getDeclaredAnnotations',
			/* parameters */,
			/* return */ '[Ljava.lang.annotation.Annotation;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.annotation.Annotation[][] java.lang.reflect.Method.getParameterAnnotations() */
			/* name */ 'getParameterAnnotations',
			/* parameters */,
			/* return */ '[[Ljava.lang.annotation.Annotation;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.reflect.AnnotatedType java.lang.reflect.Method.getAnnotatedReturnType() */
			/* name */ 'getAnnotatedReturnType',
			/* parameters */,
			/* return */ 'java.lang.reflect.AnnotatedType',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.reflect.Type java.lang.reflect.Method.getGenericReturnType() */
			/* name */ 'getGenericReturnType',
			/* parameters */,
			/* return */ 'java.lang.reflect.Type',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.reflect.TypeVariable<java.lang.reflect.Method>[] java.lang.reflect.Method.getTypeParameters() */
			/* name */ 'getTypeParameters',
			/* parameters */,
			/* return */ [/* generic array type */ 'ga', [[/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.reflect.Method'
				],
				/* raw type */ 'java.lang.reflect.TypeVariable',
				/* owner type */ UDF
			]]]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.reflect.Type[] java.lang.reflect.Method.getGenericExceptionTypes() */
			/* name */ 'getGenericExceptionTypes',
			/* parameters */,
			/* return */ '[Ljava.lang.reflect.Type;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.reflect.Type[] java.lang.reflect.Method.getGenericParameterTypes() */
			/* name */ 'getGenericParameterTypes',
			/* parameters */,
			/* return */ '[Ljava.lang.reflect.Type;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.reflect.Method.setAccessible(boolean) */
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
