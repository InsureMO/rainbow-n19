import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.reflect.AnnotatedType', [
	/* super class */,
	[/* interfaces, implements java.lang.reflect.AnnotatedElement */
		'java.lang.reflect.AnnotatedElement'
	],
	/* modifiers */ 1537,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract <T extends java.lang.annotation.Annotation> T java.lang.reflect.AnnotatedType.getAnnotation(java.lang.Class<T>) */
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
			/* modifiers */ 1025,
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
		[/* public abstract java.lang.annotation.Annotation[] java.lang.reflect.AnnotatedType.getAnnotations() */
			/* name */ 'getAnnotations',
			/* parameters */,
			/* return */ '[Ljava.lang.annotation.Annotation;',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.annotation.Annotation[] java.lang.reflect.AnnotatedType.getDeclaredAnnotations() */
			/* name */ 'getDeclaredAnnotations',
			/* parameters */,
			/* return */ '[Ljava.lang.annotation.Annotation;',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.reflect.Type java.lang.reflect.AnnotatedType.getType() */
			/* name */ 'getType',
			/* parameters */,
			/* return */ 'java.lang.reflect.Type',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.lang.reflect.AnnotatedType java.lang.reflect.AnnotatedType.getAnnotatedOwnerType() */
			/* name */ 'getAnnotatedOwnerType',
			/* parameters */,
			/* return */ 'java.lang.reflect.AnnotatedType',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
