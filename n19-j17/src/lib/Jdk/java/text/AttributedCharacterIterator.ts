import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.text.AttributedCharacterIterator', [
	/* super class */,
	[/* interfaces, implements java.text.CharacterIterator */
		'java.text.CharacterIterator'
	],
	/* modifiers */ 1537,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract int java.text.AttributedCharacterIterator.getRunLimit() */
			/* name */ 'getRunLimit',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.text.AttributedCharacterIterator.getRunLimit(java.text.AttributedCharacterIterator$Attribute) */
			/* name */ 'getRunLimit',
			[/* parameters */
				[/* parameter */
					/* name */ 'attribute',
					/* type */ 'java.text.AttributedCharacterIterator$Attribute',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.text.AttributedCharacterIterator.getRunLimit(java.util.Set<? extends java.text.AttributedCharacterIterator$Attribute>) */
			/* name */ 'getRunLimit',
			[/* parameters */
				[/* parameter */
					/* name */ 'attribute',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.text.AttributedCharacterIterator$Attribute'
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
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.text.AttributedCharacterIterator.getRunStart() */
			/* name */ 'getRunStart',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.text.AttributedCharacterIterator.getRunStart(java.text.AttributedCharacterIterator$Attribute) */
			/* name */ 'getRunStart',
			[/* parameters */
				[/* parameter */
					/* name */ 'attribute',
					/* type */ 'java.text.AttributedCharacterIterator$Attribute',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.text.AttributedCharacterIterator.getRunStart(java.util.Set<? extends java.text.AttributedCharacterIterator$Attribute>) */
			/* name */ 'getRunStart',
			[/* parameters */
				[/* parameter */
					/* name */ 'attribute',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.text.AttributedCharacterIterator$Attribute'
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
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.Object java.text.AttributedCharacterIterator.getAttribute(java.text.AttributedCharacterIterator$Attribute) */
			/* name */ 'getAttribute',
			[/* parameters */
				[/* parameter */
					/* name */ 'attribute',
					/* type */ 'java.text.AttributedCharacterIterator$Attribute',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Map<java.text.AttributedCharacterIterator$Attribute, java.lang.Object> java.text.AttributedCharacterIterator.getAttributes() */
			/* name */ 'getAttributes',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.text.AttributedCharacterIterator$Attribute',
					'java.lang.Object'
				],
				/* raw type */ 'java.util.Map',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Set<java.text.AttributedCharacterIterator$Attribute> java.text.AttributedCharacterIterator.getAllAttributeKeys() */
			/* name */ 'getAllAttributeKeys',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.text.AttributedCharacterIterator$Attribute'
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
