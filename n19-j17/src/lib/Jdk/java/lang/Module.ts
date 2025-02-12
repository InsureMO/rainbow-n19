import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.Module', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.lang.reflect.AnnotatedElement */
		'java.lang.reflect.AnnotatedElement'
	],
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public java.lang.String java.lang.Module.getName() */
			/* name */ 'getName',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.Module.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Module java.lang.Module.addReads(java.lang.Module) */
			/* name */ 'addReads',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Module',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Module',
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive']
			],
			/* type parameters */ UDF
		],
		[/* public java.lang.Module java.lang.Module.addExports(java.lang.String,java.lang.Module) */
			/* name */ 'addExports',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.Module',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Module',
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive']
			],
			/* type parameters */ UDF
		],
		[/* public java.lang.Module java.lang.Module.addOpens(java.lang.String,java.lang.Module) */
			/* name */ 'addOpens',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.Module',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Module',
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive']
			],
			/* type parameters */ UDF
		],
		[/* public java.lang.Module java.lang.Module.addUses(java.lang.Class<?>) */
			/* name */ 'addUses',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
			/* return */ 'java.lang.Module',
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive']
			],
			/* type parameters */ UDF
		],
		[/* public java.lang.ClassLoader java.lang.Module.getClassLoader() */
			/* name */ 'getClassLoader',
			/* parameters */,
			/* return */ 'java.lang.ClassLoader',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.ModuleDescriptor java.lang.Module.getDescriptor() */
			/* name */ 'getDescriptor',
			/* parameters */,
			/* return */ 'java.lang.module.ModuleDescriptor',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.lang.Module.isNamed() */
			/* name */ 'isNamed',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.InputStream java.lang.Module.getResourceAsStream(java.lang.String) throws java.io.IOException */
			/* name */ 'getResourceAsStream',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.io.InputStream',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive']
			],
			/* type parameters */ UDF
		],
		[/* public boolean java.lang.Module.isOpen(java.lang.String) */
			/* name */ 'isOpen',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
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
		[/* public boolean java.lang.Module.isOpen(java.lang.String,java.lang.Module) */
			/* name */ 'isOpen',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.Module',
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
		[/* public <T extends java.lang.annotation.Annotation> T java.lang.Module.getAnnotation(java.lang.Class<T>) */
			/* name */ 'getAnnotation',
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
		[/* public java.lang.annotation.Annotation[] java.lang.Module.getAnnotations() */
			/* name */ 'getAnnotations',
			/* parameters */,
			/* return */ '[Ljava.lang.annotation.Annotation;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.annotation.Annotation[] java.lang.Module.getDeclaredAnnotations() */
			/* name */ 'getDeclaredAnnotations',
			/* parameters */,
			/* return */ '[Ljava.lang.annotation.Annotation;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Set<java.lang.String> java.lang.Module.getPackages() */
			/* name */ 'getPackages',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String'
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.lang.Module.canRead(java.lang.Module) */
			/* name */ 'canRead',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Module',
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
		[/* public boolean java.lang.Module.canUse(java.lang.Class<?>) */
			/* name */ 'canUse',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ModuleLayer java.lang.Module.getLayer() */
			/* name */ 'getLayer',
			/* parameters */,
			/* return */ 'java.lang.ModuleLayer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.lang.Module.isExported(java.lang.String,java.lang.Module) */
			/* name */ 'isExported',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.Module',
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
		[/* public boolean java.lang.Module.isExported(java.lang.String) */
			/* name */ 'isExported',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
