import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.io.ObjectInputFilter', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1537,
	[/* declared annotations */
		['java.lang.FunctionalInterface']
	],
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public static java.io.ObjectInputFilter java.io.ObjectInputFilter.merge(java.io.ObjectInputFilter,java.io.ObjectInputFilter) */
			/* name */ 'merge',
			[/* parameters */
				[/* parameter */
					/* name */ 'anotherFilter',
					/* type */ 'java.io.ObjectInputFilter',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.io.ObjectInputFilter',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.io.ObjectInputFilter',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.io.ObjectInputFilter$Status java.io.ObjectInputFilter.checkInput(java.io.ObjectInputFilter$FilterInfo) */
			/* name */ 'checkInput',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.io.ObjectInputFilter$FilterInfo',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.io.ObjectInputFilter$Status',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.io.ObjectInputFilter java.io.ObjectInputFilter.allowFilter(java.util.function.Predicate<java.lang.Class<?>>,java.io.ObjectInputFilter$Status) */
			/* name */ 'allowFilter',
			[/* parameters */
				[/* parameter */
					/* name */ 'otherStatus',
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
						/* raw type */ 'java.util.function.Predicate',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.io.ObjectInputFilter$Status',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.io.ObjectInputFilter',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.io.ObjectInputFilter java.io.ObjectInputFilter.rejectFilter(java.util.function.Predicate<java.lang.Class<?>>,java.io.ObjectInputFilter$Status) */
			/* name */ 'rejectFilter',
			[/* parameters */
				[/* parameter */
					/* name */ 'otherStatus',
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
						/* raw type */ 'java.util.function.Predicate',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.io.ObjectInputFilter$Status',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.io.ObjectInputFilter',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.io.ObjectInputFilter java.io.ObjectInputFilter.rejectUndecidedClass(java.io.ObjectInputFilter) */
			/* name */ 'rejectUndecidedClass',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.io.ObjectInputFilter',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.io.ObjectInputFilter',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
