import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.text.AttributedString', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.text.AttributedString(java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'text',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.text.AttributedString(java.lang.String,java.util.Map<? extends java.text.AttributedCharacterIterator$Attribute, ?>) */
			[/* parameters */
				[/* parameter */
					/* name */ 'text',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'attributes',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.text.AttributedCharacterIterator$Attribute'
								],
								/* lower bounds */ UDF
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.Map',
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
		],
		[/* public java.text.AttributedString(java.text.AttributedCharacterIterator) */
			[/* parameters */
				[/* parameter */
					/* name */ 'text',
					/* type */ 'java.text.AttributedCharacterIterator',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.text.AttributedString(java.text.AttributedCharacterIterator,int,int) */
			[/* parameters */
				[/* parameter */
					/* name */ 'text',
					/* type */ 'java.text.AttributedCharacterIterator',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'beginIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'endIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.text.AttributedString(java.text.AttributedCharacterIterator,int,int,java.text.AttributedCharacterIterator$Attribute[]) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.text.AttributedCharacterIterator',
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
					/* type */ '[Ljava.text.AttributedCharacterIterator$Attribute;',
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
		[/* public java.text.AttributedCharacterIterator java.text.AttributedString.getIterator() */
			/* name */ 'getIterator',
			/* parameters */,
			/* return */ 'java.text.AttributedCharacterIterator',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.text.AttributedCharacterIterator java.text.AttributedString.getIterator(java.text.AttributedCharacterIterator$Attribute[]) */
			/* name */ 'getIterator',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.text.AttributedCharacterIterator$Attribute;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.AttributedCharacterIterator',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.text.AttributedCharacterIterator java.text.AttributedString.getIterator(java.text.AttributedCharacterIterator$Attribute[],int,int) */
			/* name */ 'getIterator',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.text.AttributedCharacterIterator$Attribute;',
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
				]
			],
			/* return */ 'java.text.AttributedCharacterIterator',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.text.AttributedString.addAttribute(java.text.AttributedCharacterIterator$Attribute,java.lang.Object) */
			/* name */ 'addAttribute',
			[/* parameters */
				[/* parameter */
					/* name */ 'attribute',
					/* type */ 'java.text.AttributedCharacterIterator$Attribute',
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
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.text.AttributedString.addAttribute(java.text.AttributedCharacterIterator$Attribute,java.lang.Object,int,int) */
			/* name */ 'addAttribute',
			[/* parameters */
				[/* parameter */
					/* name */ 'attribute',
					/* type */ 'java.text.AttributedCharacterIterator$Attribute',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'value',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'beginIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'endIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.text.AttributedString.addAttributes(java.util.Map<? extends java.text.AttributedCharacterIterator$Attribute, ?>,int,int) */
			/* name */ 'addAttributes',
			[/* parameters */
				[/* parameter */
					/* name */ 'attributes',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.text.AttributedCharacterIterator$Attribute'
								],
								/* lower bounds */ UDF
							]],
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.Map',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'beginIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'endIndex',
					/* type */ 'int',
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
