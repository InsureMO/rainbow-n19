import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.StackWalker', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public java.lang.Class<?> java.lang.StackWalker.getCallerClass() */
			/* name */ 'getCallerClass',
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
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive']
			],
			/* type parameters */ UDF
		],
		[/* public static java.lang.StackWalker java.lang.StackWalker.getInstance() */
			/* name */ 'getInstance',
			/* parameters */,
			/* return */ 'java.lang.StackWalker',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.StackWalker java.lang.StackWalker.getInstance(java.lang.StackWalker$Option) */
			/* name */ 'getInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.StackWalker$Option',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StackWalker',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.StackWalker java.lang.StackWalker.getInstance(java.util.Set<java.lang.StackWalker$Option>,int) */
			/* name */ 'getInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'estimateDepth',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.StackWalker$Option'
						],
						/* raw type */ 'java.util.Set',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'optionSet',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StackWalker',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.StackWalker java.lang.StackWalker.getInstance(java.util.Set<java.lang.StackWalker$Option>) */
			/* name */ 'getInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'optionSet',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.StackWalker$Option'
						],
						/* raw type */ 'java.util.Set',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StackWalker',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.StackWalker.forEach(java.util.function.Consumer<? super java.lang.StackWalker$StackFrame>) */
			/* name */ 'forEach',
			[/* parameters */
				[/* parameter */
					/* name */ 'action',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									'java.lang.StackWalker$StackFrame'
								]
							]]
						],
						/* raw type */ 'java.util.function.Consumer',
						/* owner type */ UDF
					]],
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
		[/* public <T> T java.lang.StackWalker.walk(java.util.function.Function<? super java.util.stream.Stream<java.lang.StackWalker$StackFrame>, ? extends T>) */
			/* name */ 'walk',
			[/* parameters */
				[/* parameter */
					/* name */ 'function',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									[/* parameterized type */ 'pt', [
										[/* actual argument types */
											'java.lang.StackWalker$StackFrame'
										],
										/* raw type */ 'java.util.stream.Stream',
										/* owner type */ UDF
									]]
								]
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T']],
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive']
			],
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
