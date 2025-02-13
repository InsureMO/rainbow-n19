import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.EnumSet', [
	/* super class, extends java.util.AbstractSet<E> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			[/* type variable ref */ 'tr', [/* name */ 'E']]
		],
		/* raw type */ 'java.util.AbstractSet',
		/* owner type */ UDF
	]],
	[/* interfaces, implements java.lang.Cloneable, java.io.Serializable */
		'java.lang.Cloneable',
		'java.io.Serializable'
	],
	/* modifiers */ 1025,
	/* declared annotations */,
	[/* type parameters */
		[/* type variable */
			/* name */ 'E',
			[/* bounds */
				[/* parameterized type */ 'pt', [
					[/* actual argument types */
						[/* type variable ref */ 'tr', [/* name */ 'E']]
					],
					/* raw type */ 'java.lang.Enum',
					/* owner type */ UDF
				]]
			],
			/* annotations */ UDF
		]
	],
	/* declared constructors */,
	[/* declared methods */
		[/* public java.util.EnumSet<E> java.util.EnumSet.clone() */
			/* name */ 'clone',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'E']]
				],
				/* raw type */ 'java.util.EnumSet',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static <E extends java.lang.Enum<E>> java.util.EnumSet<E> java.util.EnumSet.allOf(java.lang.Class<E>) */
			/* name */ 'allOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'elementType',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'E']]
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
					[/* type variable ref */ 'tr', [/* name */ 'E']]
				],
				/* raw type */ 'java.util.EnumSet',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'E',
					[/* bounds */
						[/* parameterized type */ 'pt', [
							[/* actual argument types */
								[/* type variable ref */ 'tr', [/* name */ 'E']]
							],
							/* raw type */ 'java.lang.Enum',
							/* owner type */ UDF
						]]
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <E extends java.lang.Enum<E>> java.util.EnumSet<E> java.util.EnumSet.complementOf(java.util.EnumSet<E>) */
			/* name */ 'complementOf',
			[/* parameters */
				[/* parameter */
					/* name */ 's',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'E']]
						],
						/* raw type */ 'java.util.EnumSet',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'E']]
				],
				/* raw type */ 'java.util.EnumSet',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'E',
					[/* bounds */
						[/* parameterized type */ 'pt', [
							[/* actual argument types */
								[/* type variable ref */ 'tr', [/* name */ 'E']]
							],
							/* raw type */ 'java.lang.Enum',
							/* owner type */ UDF
						]]
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <E extends java.lang.Enum<E>> java.util.EnumSet<E> java.util.EnumSet.copyOf(java.util.Collection<E>) */
			/* name */ 'copyOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'c',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'E']]
						],
						/* raw type */ 'java.util.Collection',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'E']]
				],
				/* raw type */ 'java.util.EnumSet',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'E',
					[/* bounds */
						[/* parameterized type */ 'pt', [
							[/* actual argument types */
								[/* type variable ref */ 'tr', [/* name */ 'E']]
							],
							/* raw type */ 'java.lang.Enum',
							/* owner type */ UDF
						]]
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <E extends java.lang.Enum<E>> java.util.EnumSet<E> java.util.EnumSet.copyOf(java.util.EnumSet<E>) */
			/* name */ 'copyOf',
			[/* parameters */
				[/* parameter */
					/* name */ 's',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'E']]
						],
						/* raw type */ 'java.util.EnumSet',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'E']]
				],
				/* raw type */ 'java.util.EnumSet',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'E',
					[/* bounds */
						[/* parameterized type */ 'pt', [
							[/* actual argument types */
								[/* type variable ref */ 'tr', [/* name */ 'E']]
							],
							/* raw type */ 'java.lang.Enum',
							/* owner type */ UDF
						]]
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <E extends java.lang.Enum<E>> java.util.EnumSet<E> java.util.EnumSet.noneOf(java.lang.Class<E>) */
			/* name */ 'noneOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'elementType',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'E']]
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
					[/* type variable ref */ 'tr', [/* name */ 'E']]
				],
				/* raw type */ 'java.util.EnumSet',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'E',
					[/* bounds */
						[/* parameterized type */ 'pt', [
							[/* actual argument types */
								[/* type variable ref */ 'tr', [/* name */ 'E']]
							],
							/* raw type */ 'java.lang.Enum',
							/* owner type */ UDF
						]]
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <E extends java.lang.Enum<E>> java.util.EnumSet<E> java.util.EnumSet.of(E) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'e',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'E']]
				],
				/* raw type */ 'java.util.EnumSet',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'E',
					[/* bounds */
						[/* parameterized type */ 'pt', [
							[/* actual argument types */
								[/* type variable ref */ 'tr', [/* name */ 'E']]
							],
							/* raw type */ 'java.lang.Enum',
							/* owner type */ UDF
						]]
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <E extends java.lang.Enum<E>> java.util.EnumSet<E> java.util.EnumSet.of(E,E) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'e1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'e2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'E']]
				],
				/* raw type */ 'java.util.EnumSet',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'E',
					[/* bounds */
						[/* parameterized type */ 'pt', [
							[/* actual argument types */
								[/* type variable ref */ 'tr', [/* name */ 'E']]
							],
							/* raw type */ 'java.lang.Enum',
							/* owner type */ UDF
						]]
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <E extends java.lang.Enum<E>> java.util.EnumSet<E> java.util.EnumSet.of(E,E,E) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'e1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'e2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'e3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'E']]
				],
				/* raw type */ 'java.util.EnumSet',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'E',
					[/* bounds */
						[/* parameterized type */ 'pt', [
							[/* actual argument types */
								[/* type variable ref */ 'tr', [/* name */ 'E']]
							],
							/* raw type */ 'java.lang.Enum',
							/* owner type */ UDF
						]]
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <E extends java.lang.Enum<E>> java.util.EnumSet<E> java.util.EnumSet.of(E,E,E,E) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'e1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'e2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'e3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'e4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'E']]
				],
				/* raw type */ 'java.util.EnumSet',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'E',
					[/* bounds */
						[/* parameterized type */ 'pt', [
							[/* actual argument types */
								[/* type variable ref */ 'tr', [/* name */ 'E']]
							],
							/* raw type */ 'java.lang.Enum',
							/* owner type */ UDF
						]]
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <E extends java.lang.Enum<E>> java.util.EnumSet<E> java.util.EnumSet.of(E,E,E,E,E) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'e1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'e2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'e3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'e4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'e5',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'E']]
				],
				/* raw type */ 'java.util.EnumSet',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'E',
					[/* bounds */
						[/* parameterized type */ 'pt', [
							[/* actual argument types */
								[/* type variable ref */ 'tr', [/* name */ 'E']]
							],
							/* raw type */ 'java.lang.Enum',
							/* owner type */ UDF
						]]
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <E extends java.lang.Enum<E>> java.util.EnumSet<E> java.util.EnumSet.of(E,E...) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'first',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'rest',
					/* type */ [/* generic array type */ 'ga', [[/* type variable ref */ 'tr', [/* name */ 'E']]]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'E']]
				],
				/* raw type */ 'java.util.EnumSet',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 137,
			[/* annotations */
				['java.lang.SafeVarargs']
			],
			[/* type parameters */
				[/* type variable */
					/* name */ 'E',
					[/* bounds */
						[/* parameterized type */ 'pt', [
							[/* actual argument types */
								[/* type variable ref */ 'tr', [/* name */ 'E']]
							],
							/* raw type */ 'java.lang.Enum',
							/* owner type */ UDF
						]]
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public static <E extends java.lang.Enum<E>> java.util.EnumSet<E> java.util.EnumSet.range(E,E) */
			/* name */ 'range',
			[/* parameters */
				[/* parameter */
					/* name */ 'from',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'to',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'E']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'E']]
				],
				/* raw type */ 'java.util.EnumSet',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'E',
					[/* bounds */
						[/* parameterized type */ 'pt', [
							[/* actual argument types */
								[/* type variable ref */ 'tr', [/* name */ 'E']]
							],
							/* raw type */ 'java.lang.Enum',
							/* owner type */ UDF
						]]
					],
					/* annotations */ UDF
				]
			]
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
