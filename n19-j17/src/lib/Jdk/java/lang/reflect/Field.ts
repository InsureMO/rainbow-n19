import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.reflect.Field', [
	/* super class, extends java.lang.reflect.AccessibleObject */
	'java.lang.reflect.AccessibleObject',
	[/* interfaces, implements java.lang.reflect.Member */
		'java.lang.reflect.Member'
	],
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public <T extends java.lang.annotation.Annotation> T java.lang.reflect.Field.getAnnotation(java.lang.Class<T>) */
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
		[/* public <T extends java.lang.annotation.Annotation> T[] java.lang.reflect.Field.getAnnotationsByType(java.lang.Class<T>) */
			/* name */ 'getAnnotationsByType',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
			/* return */ [/* generic array type */ 'ga', [[/* type variable ref */ 'tr', [/* name */ 'T']]]],
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
		[/* public boolean java.lang.reflect.Field.equals(java.lang.Object) */
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
		[/* public boolean java.lang.reflect.Field.getBoolean(java.lang.Object) throws java.lang.IllegalArgumentException,java.lang.IllegalAccessException */
			/* name */ 'getBoolean',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive'],
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		],
		[/* public boolean java.lang.reflect.Field.isEnumConstant() */
			/* name */ 'isEnumConstant',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.lang.reflect.Field.isSynthetic() */
			/* name */ 'isSynthetic',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public byte java.lang.reflect.Field.getByte(java.lang.Object) throws java.lang.IllegalArgumentException,java.lang.IllegalAccessException */
			/* name */ 'getByte',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'byte',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive'],
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		],
		[/* public char java.lang.reflect.Field.getChar(java.lang.Object) throws java.lang.IllegalArgumentException,java.lang.IllegalAccessException */
			/* name */ 'getChar',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'char',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive'],
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		],
		[/* public double java.lang.reflect.Field.getDouble(java.lang.Object) throws java.lang.IllegalArgumentException,java.lang.IllegalAccessException */
			/* name */ 'getDouble',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive'],
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		],
		[/* public float java.lang.reflect.Field.getFloat(java.lang.Object) throws java.lang.IllegalArgumentException,java.lang.IllegalAccessException */
			/* name */ 'getFloat',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'float',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive'],
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		],
		[/* public int java.lang.reflect.Field.getInt(java.lang.Object) throws java.lang.IllegalArgumentException,java.lang.IllegalAccessException */
			/* name */ 'getInt',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive'],
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		],
		[/* public int java.lang.reflect.Field.getModifiers() */
			/* name */ 'getModifiers',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.reflect.Field.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Class<?> java.lang.reflect.Field.getDeclaringClass() */
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
		[/* public java.lang.Class<?> java.lang.reflect.Field.getType() */
			/* name */ 'getType',
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
		[/* public java.lang.Object java.lang.reflect.Field.get(java.lang.Object) throws java.lang.IllegalArgumentException,java.lang.IllegalAccessException */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive'],
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.reflect.Field.getName() */
			/* name */ 'getName',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.reflect.Field.toGenericString() */
			/* name */ 'toGenericString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.reflect.Field.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.annotation.Annotation[] java.lang.reflect.Field.getDeclaredAnnotations() */
			/* name */ 'getDeclaredAnnotations',
			/* parameters */,
			/* return */ '[Ljava.lang.annotation.Annotation;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.reflect.AnnotatedType java.lang.reflect.Field.getAnnotatedType() */
			/* name */ 'getAnnotatedType',
			/* parameters */,
			/* return */ 'java.lang.reflect.AnnotatedType',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.reflect.Type java.lang.reflect.Field.getGenericType() */
			/* name */ 'getGenericType',
			/* parameters */,
			/* return */ 'java.lang.reflect.Type',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.lang.reflect.Field.getLong(java.lang.Object) throws java.lang.IllegalArgumentException,java.lang.IllegalAccessException */
			/* name */ 'getLong',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive'],
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		],
		[/* public short java.lang.reflect.Field.getShort(java.lang.Object) throws java.lang.IllegalArgumentException,java.lang.IllegalAccessException */
			/* name */ 'getShort',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'short',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive'],
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		],
		[/* public void java.lang.reflect.Field.set(java.lang.Object,java.lang.Object) throws java.lang.IllegalArgumentException,java.lang.IllegalAccessException */
			/* name */ 'set',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
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
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive'],
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		],
		[/* public void java.lang.reflect.Field.setAccessible(boolean) */
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
		],
		[/* public void java.lang.reflect.Field.setBoolean(java.lang.Object,boolean) throws java.lang.IllegalArgumentException,java.lang.IllegalAccessException */
			/* name */ 'setBoolean',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'z',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive'],
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		],
		[/* public void java.lang.reflect.Field.setByte(java.lang.Object,byte) throws java.lang.IllegalArgumentException,java.lang.IllegalAccessException */
			/* name */ 'setByte',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'b',
					/* type */ 'byte',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive'],
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		],
		[/* public void java.lang.reflect.Field.setChar(java.lang.Object,char) throws java.lang.IllegalArgumentException,java.lang.IllegalAccessException */
			/* name */ 'setChar',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'c',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive'],
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		],
		[/* public void java.lang.reflect.Field.setDouble(java.lang.Object,double) throws java.lang.IllegalArgumentException,java.lang.IllegalAccessException */
			/* name */ 'setDouble',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'd',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive'],
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		],
		[/* public void java.lang.reflect.Field.setFloat(java.lang.Object,float) throws java.lang.IllegalArgumentException,java.lang.IllegalAccessException */
			/* name */ 'setFloat',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'f',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive'],
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		],
		[/* public void java.lang.reflect.Field.setInt(java.lang.Object,int) throws java.lang.IllegalArgumentException,java.lang.IllegalAccessException */
			/* name */ 'setInt',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'i',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive'],
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		],
		[/* public void java.lang.reflect.Field.setLong(java.lang.Object,long) throws java.lang.IllegalArgumentException,java.lang.IllegalAccessException */
			/* name */ 'setLong',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'l',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive'],
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		],
		[/* public void java.lang.reflect.Field.setShort(java.lang.Object,short) throws java.lang.IllegalArgumentException,java.lang.IllegalAccessException */
			/* name */ 'setShort',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 's',
					/* type */ 'short',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.IllegalAccessException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive'],
				['jdk.internal.vm.annotation.ForceInline']
			],
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
