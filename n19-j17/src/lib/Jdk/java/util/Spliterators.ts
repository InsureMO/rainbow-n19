import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.Spliterators', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public static <T> java.util.Iterator<T> java.util.Spliterators.iterator(java.util.Spliterator<? extends T>) */
			/* name */ 'iterator',
			[/* parameters */
				[/* parameter */
					/* name */ 'spliterator',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.Spliterator',
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
				/* raw type */ 'java.util.Iterator',
				/* owner type */ UDF
			]],
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
		[/* public static <T> java.util.Spliterator<T> java.util.Spliterators.emptySpliterator() */
			/* name */ 'emptySpliterator',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.Spliterator',
				/* owner type */ UDF
			]],
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
		[/* public static <T> java.util.Spliterator<T> java.util.Spliterators.spliterator(java.lang.Object[],int) */
			/* name */ 'spliterator',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
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
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.Spliterator',
				/* owner type */ UDF
			]],
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
		[/* public static <T> java.util.Spliterator<T> java.util.Spliterators.spliterator(java.lang.Object[],int,int,int) */
			/* name */ 'spliterator',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg3',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.Spliterator',
				/* owner type */ UDF
			]],
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
		[/* public static <T> java.util.Spliterator<T> java.util.Spliterators.spliterator(java.util.Collection<? extends T>,int) */
			/* name */ 'spliterator',
			[/* parameters */
				[/* parameter */
					/* name */ 'c',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.Collection',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'characteristics',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.Spliterator',
				/* owner type */ UDF
			]],
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
		[/* public static <T> java.util.Spliterator<T> java.util.Spliterators.spliterator(java.util.Iterator<? extends T>,long,int) */
			/* name */ 'spliterator',
			[/* parameters */
				[/* parameter */
					/* name */ 'iterator',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.Iterator',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'size',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.Spliterator',
				/* owner type */ UDF
			]],
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
		[/* public static <T> java.util.Spliterator<T> java.util.Spliterators.spliteratorUnknownSize(java.util.Iterator<? extends T>,int) */
			/* name */ 'spliteratorUnknownSize',
			[/* parameters */
				[/* parameter */
					/* name */ 'iterator',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									[/* type variable ref */ 'tr', [/* name */ 'T']]
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.Iterator',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'characteristics',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.Spliterator',
				/* owner type */ UDF
			]],
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
		[/* public static java.util.PrimitiveIterator$OfDouble java.util.Spliterators.iterator(java.util.Spliterator$OfDouble) */
			/* name */ 'iterator',
			[/* parameters */
				[/* parameter */
					/* name */ 'spliterator',
					/* type */ 'java.util.Spliterator$OfDouble',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.PrimitiveIterator$OfDouble',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.PrimitiveIterator$OfInt java.util.Spliterators.iterator(java.util.Spliterator$OfInt) */
			/* name */ 'iterator',
			[/* parameters */
				[/* parameter */
					/* name */ 'spliterator',
					/* type */ 'java.util.Spliterator$OfInt',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.PrimitiveIterator$OfInt',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.PrimitiveIterator$OfLong java.util.Spliterators.iterator(java.util.Spliterator$OfLong) */
			/* name */ 'iterator',
			[/* parameters */
				[/* parameter */
					/* name */ 'spliterator',
					/* type */ 'java.util.Spliterator$OfLong',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.PrimitiveIterator$OfLong',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Spliterator$OfDouble java.util.Spliterators.emptyDoubleSpliterator() */
			/* name */ 'emptyDoubleSpliterator',
			/* parameters */,
			/* return */ 'java.util.Spliterator$OfDouble',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Spliterator$OfDouble java.util.Spliterators.spliterator(double[],int) */
			/* name */ 'spliterator',
			[/* parameters */
				[/* parameter */
					/* name */ 'array',
					/* type */ '[D',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'additionalCharacteristics',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Spliterator$OfDouble',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Spliterator$OfDouble java.util.Spliterators.spliterator(double[],int,int,int) */
			/* name */ 'spliterator',
			[/* parameters */
				[/* parameter */
					/* name */ 'array',
					/* type */ '[D',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'fromIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'toIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'additionalCharacteristics',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Spliterator$OfDouble',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Spliterator$OfDouble java.util.Spliterators.spliterator(java.util.PrimitiveIterator$OfDouble,long,int) */
			/* name */ 'spliterator',
			[/* parameters */
				[/* parameter */
					/* name */ 'iterator',
					/* type */ 'java.util.PrimitiveIterator$OfDouble',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'size',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Spliterator$OfDouble',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Spliterator$OfDouble java.util.Spliterators.spliteratorUnknownSize(java.util.PrimitiveIterator$OfDouble,int) */
			/* name */ 'spliteratorUnknownSize',
			[/* parameters */
				[/* parameter */
					/* name */ 'iterator',
					/* type */ 'java.util.PrimitiveIterator$OfDouble',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'characteristics',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Spliterator$OfDouble',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Spliterator$OfInt java.util.Spliterators.emptyIntSpliterator() */
			/* name */ 'emptyIntSpliterator',
			/* parameters */,
			/* return */ 'java.util.Spliterator$OfInt',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Spliterator$OfInt java.util.Spliterators.spliterator(int[],int) */
			/* name */ 'spliterator',
			[/* parameters */
				[/* parameter */
					/* name */ 'array',
					/* type */ '[I',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'additionalCharacteristics',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Spliterator$OfInt',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Spliterator$OfInt java.util.Spliterators.spliterator(int[],int,int,int) */
			/* name */ 'spliterator',
			[/* parameters */
				[/* parameter */
					/* name */ 'array',
					/* type */ '[I',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'fromIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'toIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'additionalCharacteristics',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Spliterator$OfInt',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Spliterator$OfInt java.util.Spliterators.spliterator(java.util.PrimitiveIterator$OfInt,long,int) */
			/* name */ 'spliterator',
			[/* parameters */
				[/* parameter */
					/* name */ 'iterator',
					/* type */ 'java.util.PrimitiveIterator$OfInt',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'size',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Spliterator$OfInt',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Spliterator$OfInt java.util.Spliterators.spliteratorUnknownSize(java.util.PrimitiveIterator$OfInt,int) */
			/* name */ 'spliteratorUnknownSize',
			[/* parameters */
				[/* parameter */
					/* name */ 'iterator',
					/* type */ 'java.util.PrimitiveIterator$OfInt',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'characteristics',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Spliterator$OfInt',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Spliterator$OfLong java.util.Spliterators.emptyLongSpliterator() */
			/* name */ 'emptyLongSpliterator',
			/* parameters */,
			/* return */ 'java.util.Spliterator$OfLong',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Spliterator$OfLong java.util.Spliterators.spliterator(java.util.PrimitiveIterator$OfLong,long,int) */
			/* name */ 'spliterator',
			[/* parameters */
				[/* parameter */
					/* name */ 'iterator',
					/* type */ 'java.util.PrimitiveIterator$OfLong',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'size',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Spliterator$OfLong',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Spliterator$OfLong java.util.Spliterators.spliterator(long[],int) */
			/* name */ 'spliterator',
			[/* parameters */
				[/* parameter */
					/* name */ 'array',
					/* type */ '[J',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'additionalCharacteristics',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Spliterator$OfLong',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Spliterator$OfLong java.util.Spliterators.spliterator(long[],int,int,int) */
			/* name */ 'spliterator',
			[/* parameters */
				[/* parameter */
					/* name */ 'array',
					/* type */ '[J',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'fromIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'toIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'additionalCharacteristics',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Spliterator$OfLong',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Spliterator$OfLong java.util.Spliterators.spliteratorUnknownSize(java.util.PrimitiveIterator$OfLong,int) */
			/* name */ 'spliteratorUnknownSize',
			[/* parameters */
				[/* parameter */
					/* name */ 'iterator',
					/* type */ 'java.util.PrimitiveIterator$OfLong',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'characteristics',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Spliterator$OfLong',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
