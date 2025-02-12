import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('javax.security.auth.Subject', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.io.Serializable */
		'java.io.Serializable'
	],
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public javax.security.auth.Subject() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public javax.security.auth.Subject(boolean,java.util.Set<? extends java.security.Principal>,java.util.Set<?>,java.util.Set<?>) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.security.Principal'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.Set',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.Set',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg3',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.Set',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public boolean javax.security.auth.Subject.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
		[/* public java.lang.String javax.security.auth.Subject.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int javax.security.auth.Subject.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void javax.security.auth.Subject.setReadOnly() */
			/* name */ 'setReadOnly',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Set<java.security.Principal> javax.security.auth.Subject.getPrincipals() */
			/* name */ 'getPrincipals',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.security.Principal'
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public <T extends java.security.Principal> java.util.Set<T> javax.security.auth.Subject.getPrincipals(java.lang.Class<T>) */
			/* name */ 'getPrincipals',
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
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.security.Principal'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public boolean javax.security.auth.Subject.isReadOnly() */
			/* name */ 'isReadOnly',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static javax.security.auth.Subject javax.security.auth.Subject.getSubject(java.security.AccessControlContext) */
			/* name */ 'getSubject',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.security.AccessControlContext',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'javax.security.auth.Subject',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '17'],
					['p', 'forRemoval', true]
				]
			],
			/* type parameters */ UDF
		],
		[/* public static <T> T javax.security.auth.Subject.doAs(javax.security.auth.Subject,java.security.PrivilegedAction<T>) */
			/* name */ 'doAs',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'javax.security.auth.Subject',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.security.PrivilegedAction',
						/* owner type */ UDF
					]],
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
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <T> T javax.security.auth.Subject.doAs(javax.security.auth.Subject,java.security.PrivilegedExceptionAction<T>) throws java.security.PrivilegedActionException */
			/* name */ 'doAs',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'javax.security.auth.Subject',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.security.PrivilegedExceptionAction',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T']],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.security.PrivilegedActionException',
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
		[/* public static <T> T javax.security.auth.Subject.doAsPrivileged(javax.security.auth.Subject,java.security.PrivilegedAction<T>,java.security.AccessControlContext) */
			/* name */ 'doAsPrivileged',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'javax.security.auth.Subject',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.security.PrivilegedAction',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'java.security.AccessControlContext',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T']],
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '17'],
					['p', 'forRemoval', true]
				]
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
		],
		[/* public static <T> T javax.security.auth.Subject.doAsPrivileged(javax.security.auth.Subject,java.security.PrivilegedExceptionAction<T>,java.security.AccessControlContext) throws java.security.PrivilegedActionException */
			/* name */ 'doAsPrivileged',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'javax.security.auth.Subject',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T']]
						],
						/* raw type */ 'java.security.PrivilegedExceptionAction',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'java.security.AccessControlContext',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T']],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.security.PrivilegedActionException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '17'],
					['p', 'forRemoval', true]
				]
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
		],
		[/* public java.util.Set<java.lang.Object> javax.security.auth.Subject.getPublicCredentials() */
			/* name */ 'getPublicCredentials',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Object'
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public <T> java.util.Set<T> javax.security.auth.Subject.getPublicCredentials(java.lang.Class<T>) */
			/* name */ 'getPublicCredentials',
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
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
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
		[/* public <T> java.util.Set<T> javax.security.auth.Subject.getPrivateCredentials(java.lang.Class<T>) */
			/* name */ 'getPrivateCredentials',
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
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
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
		[/* public java.util.Set<java.lang.Object> javax.security.auth.Subject.getPrivateCredentials() */
			/* name */ 'getPrivateCredentials',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Object'
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
