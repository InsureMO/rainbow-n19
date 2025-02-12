import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.text.AttributedCharacterIterator$Attribute', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.io.Serializable */
		'java.io.Serializable'
	],
	/* modifiers */ 9,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* protected java.text.AttributedCharacterIterator$Attribute(java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* protected java.lang.String java.text.AttributedCharacterIterator$Attribute.getName() */
			/* name */ 'getName',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final boolean java.text.AttributedCharacterIterator$Attribute.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.text.AttributedCharacterIterator$Attribute.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final int java.text.AttributedCharacterIterator$Attribute.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected java.lang.Object java.text.AttributedCharacterIterator$Attribute.readResolve() throws java.io.InvalidObjectException */
			/* name */ 'readResolve',
			/* parameters */,
			/* return */ 'java.lang.Object',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.InvalidObjectException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final java.text.AttributedCharacterIterator$Attribute java.text.AttributedCharacterIterator$Attribute.LANGUAGE */
			/* name */ 'LANGUAGE',
			/* type */ 'java.text.AttributedCharacterIterator$Attribute',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.text.AttributedCharacterIterator$Attribute java.text.AttributedCharacterIterator$Attribute.READING */
			/* name */ 'READING',
			/* type */ 'java.text.AttributedCharacterIterator$Attribute',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.text.AttributedCharacterIterator$Attribute java.text.AttributedCharacterIterator$Attribute.INPUT_METHOD_SEGMENT */
			/* name */ 'INPUT_METHOD_SEGMENT',
			/* type */ 'java.text.AttributedCharacterIterator$Attribute',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
