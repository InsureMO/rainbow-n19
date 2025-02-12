import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.invoke.TypeDescriptor$OfMethod', [
	/* super class */,
	[/* interfaces, implements java.lang.invoke.TypeDescriptor */
		'java.lang.invoke.TypeDescriptor'
	],
	/* modifiers */ 1545,
	/* declared annotations */,
	[/* type parameters */
		[/* type variable */
			/* name */ 'F',
			[/* bounds */
				[/* parameterized type */ 'pt', [
					[/* actual argument types */
						[/* type variable ref */ 'tr', [/* name */ 'F']]
					],
					/* raw type */ 'java.lang.invoke.TypeDescriptor$OfField',
					/* owner type */ 'java.lang.invoke.TypeDescriptor'
				]]
			],
			/* annotations */ UDF
		],
		[/* type variable */
			/* name */ 'M',
			[/* bounds */
				[/* parameterized type */ 'pt', [
					[/* actual argument types */
						[/* type variable ref */ 'tr', [/* name */ 'F']],
						[/* type variable ref */ 'tr', [/* name */ 'M']]
					],
					/* raw type */ 'java.lang.invoke.TypeDescriptor$OfMethod',
					/* owner type */ 'java.lang.invoke.TypeDescriptor'
				]]
			],
			/* annotations */ UDF
		]
	],
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract F java.lang.invoke.TypeDescriptor$OfMethod.returnType() */
			/* name */ 'returnType',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'F']],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract F java.lang.invoke.TypeDescriptor$OfMethod.parameterType(int) */
			/* name */ 'parameterType',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'F']],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract M java.lang.invoke.TypeDescriptor$OfMethod.insertParameterTypes(int,F...) */
			/* name */ 'insertParameterTypes',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* generic array type */ 'ga', [[/* type variable ref */ 'tr', [/* name */ 'F']]]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'M']],
			/* exceptions */,
			/* modifiers */ 1153,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract M java.lang.invoke.TypeDescriptor$OfMethod.changeReturnType(F) */
			/* name */ 'changeReturnType',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'F']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'M']],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract M java.lang.invoke.TypeDescriptor$OfMethod.dropParameterTypes(int,int) */
			/* name */ 'dropParameterTypes',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'M']],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.lang.invoke.TypeDescriptor$OfMethod.parameterCount() */
			/* name */ 'parameterCount',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.List<F> java.lang.invoke.TypeDescriptor$OfMethod.parameterList() */
			/* name */ 'parameterList',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'F']]
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract F[] java.lang.invoke.TypeDescriptor$OfMethod.parameterArray() */
			/* name */ 'parameterArray',
			/* parameters */,
			/* return */ [/* generic array type */ 'ga', [[/* type variable ref */ 'tr', [/* name */ 'F']]]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract M java.lang.invoke.TypeDescriptor$OfMethod.changeParameterType(int,F) */
			/* name */ 'changeParameterType',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'F']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'M']],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
