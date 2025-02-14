import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.lang.NumberRange', [
	/* super class, extends java.util.AbstractList<java.lang.Comparable> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.lang.Comparable'
		],
		/* raw type */ 'java.util.AbstractList',
		/* owner type */ UDF
	]],
	[/* interfaces, implements groovy.lang.Range<java.lang.Comparable>, java.io.Serializable */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.lang.Comparable'
			],
			/* raw type */ 'groovy.lang.Range',
			/* owner type */ UDF
		]],
		'java.io.Serializable'
	],
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public <T extends java.lang.Number & java.lang.Comparable,U extends java.lang.Number & java.lang.Comparable,V extends java.lang.Number & java.lang.Comparable<? super java.lang.Number>> groovy.lang.NumberRange(T,U,V) */
			[/* parameters */
				[/* parameter */
					/* name */ 'from',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'to',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'U']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'stepSize',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Number',
						'java.lang.Comparable'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Number',
						'java.lang.Comparable'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'V',
					[/* bounds */
						'java.lang.Number',
						[/* parameterized type */ 'pt', [
							[/* actual argument types */
								[/* wildcard type */ 'wt', [
									[/* upper bounds */
										'java.lang.Object'
									],
									[/* lower bounds */
										'java.lang.Number'
									]
								]]
							],
							/* raw type */ 'java.lang.Comparable',
							/* owner type */ UDF
						]]
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public <T extends java.lang.Number & java.lang.Comparable,U extends java.lang.Number & java.lang.Comparable,V extends java.lang.Number & java.lang.Comparable> groovy.lang.NumberRange(T,U,V,boolean) */
			[/* parameters */
				[/* parameter */
					/* name */ 'from',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'to',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'U']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'stepSize',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'inclusive',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Number',
						'java.lang.Comparable'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Number',
						'java.lang.Comparable'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'V',
					[/* bounds */
						'java.lang.Number',
						'java.lang.Comparable'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public <T extends java.lang.Number & java.lang.Comparable,U extends java.lang.Number & java.lang.Comparable,V extends java.lang.Number & java.lang.Comparable> groovy.lang.NumberRange(T,U,V,boolean,boolean) */
			[/* parameters */
				[/* parameter */
					/* name */ 'from',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'to',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'U']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'stepSize',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'V']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'inclusiveLeft',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'inclusiveRight',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Number',
						'java.lang.Comparable'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Number',
						'java.lang.Comparable'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'V',
					[/* bounds */
						'java.lang.Number',
						'java.lang.Comparable'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public <T extends java.lang.Number & java.lang.Comparable,U extends java.lang.Number & java.lang.Comparable,V extends java.lang.Number & java.lang.Comparable> groovy.lang.NumberRange(T,U,boolean,boolean) */
			[/* parameters */
				[/* parameter */
					/* name */ 'from',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'to',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'U']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'inclusiveLeft',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'inclusiveRight',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Number',
						'java.lang.Comparable'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Number',
						'java.lang.Comparable'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'V',
					[/* bounds */
						'java.lang.Number',
						'java.lang.Comparable'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public <T extends java.lang.Number & java.lang.Comparable,U extends java.lang.Number & java.lang.Comparable> groovy.lang.NumberRange(T,U) */
			[/* parameters */
				[/* parameter */
					/* name */ 'from',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'to',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'U']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Number',
						'java.lang.Comparable'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Number',
						'java.lang.Comparable'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public <T extends java.lang.Number & java.lang.Comparable,U extends java.lang.Number & java.lang.Comparable> groovy.lang.NumberRange(T,U,boolean) */
			[/* parameters */
				[/* parameter */
					/* name */ 'from',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'to',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'U']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'inclusive',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Number',
						'java.lang.Comparable'
					],
					/* annotations */ UDF
				],
				[/* type variable */
					/* name */ 'U',
					[/* bounds */
						'java.lang.Number',
						'java.lang.Comparable'
					],
					/* annotations */ UDF
				]
			]
		]
	],
	[/* declared methods */
		[/* public <T extends java.lang.Number & java.lang.Comparable> groovy.lang.NumberRange groovy.lang.NumberRange.by(T) */
			/* name */ 'by',
			[/* parameters */
				[/* parameter */
					/* name */ 'stepSize',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.lang.NumberRange',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Number',
						'java.lang.Comparable'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public boolean groovy.lang.NumberRange.contains(java.lang.Object) */
			/* name */ 'contains',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
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
		[/* public boolean groovy.lang.NumberRange.containsWithinBounds(java.lang.Object) */
			/* name */ 'containsWithinBounds',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
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
		[/* public boolean groovy.lang.NumberRange.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'that',
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
		[/* public boolean groovy.lang.NumberRange.fastEquals(groovy.lang.NumberRange) */
			/* name */ 'fastEquals',
			[/* parameters */
				[/* parameter */
					/* name */ 'that',
					/* type */ 'groovy.lang.NumberRange',
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
		[/* public boolean groovy.lang.NumberRange.isReverse() */
			/* name */ 'isReverse',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.lang.NumberRange.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.lang.NumberRange.size() */
			/* name */ 'size',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Comparable groovy.lang.NumberRange.get(int) */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'index',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Comparable',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Comparable groovy.lang.NumberRange.getFrom() */
			/* name */ 'getFrom',
			/* parameters */,
			/* return */ 'java.lang.Comparable',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Comparable groovy.lang.NumberRange.getStepSize() */
			/* name */ 'getStepSize',
			/* parameters */,
			/* return */ 'java.lang.Comparable',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Comparable groovy.lang.NumberRange.getTo() */
			/* name */ 'getTo',
			/* parameters */,
			/* return */ 'java.lang.Comparable',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String groovy.lang.NumberRange.inspect() */
			/* name */ 'inspect',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String groovy.lang.NumberRange.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Iterator<java.lang.Comparable> groovy.lang.NumberRange.iterator() */
			/* name */ 'iterator',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Comparable'
				],
				/* raw type */ 'java.util.Iterator',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.List<java.lang.Comparable> groovy.lang.NumberRange.step(int) */
			/* name */ 'step',
			[/* parameters */
				[/* parameter */
					/* name */ 'numSteps',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Comparable'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.List<java.lang.Comparable> groovy.lang.NumberRange.subList(int,int) */
			/* name */ 'subList',
			[/* parameters */
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
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Comparable'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void groovy.lang.NumberRange.step(int,groovy.lang.Closure) */
			/* name */ 'step',
			[/* parameters */
				[/* parameter */
					/* name */ 'numSteps',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'closure',
					/* type */ 'groovy.lang.Closure',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
