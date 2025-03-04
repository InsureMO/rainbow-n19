import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.nio.charset.CoderResult', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public boolean java.nio.charset.CoderResult.isError() */
			/* name */ 'isError',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.nio.charset.CoderResult.isMalformed() */
			/* name */ 'isMalformed',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.nio.charset.CoderResult.isOverflow() */
			/* name */ 'isOverflow',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.nio.charset.CoderResult.isUnderflow() */
			/* name */ 'isUnderflow',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.nio.charset.CoderResult.isUnmappable() */
			/* name */ 'isUnmappable',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.nio.charset.CoderResult.length() */
			/* name */ 'length',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.nio.charset.CoderResult.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.nio.charset.CoderResult java.nio.charset.CoderResult.malformedForLength(int) */
			/* name */ 'malformedForLength',
			[/* parameters */
				[/* parameter */
					/* name */ 'length',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.charset.CoderResult',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.nio.charset.CoderResult java.nio.charset.CoderResult.unmappableForLength(int) */
			/* name */ 'unmappableForLength',
			[/* parameters */
				[/* parameter */
					/* name */ 'length',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.charset.CoderResult',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.nio.charset.CoderResult.throwException() throws java.nio.charset.CharacterCodingException */
			/* name */ 'throwException',
			/* parameters */,
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.nio.charset.CharacterCodingException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final java.nio.charset.CoderResult java.nio.charset.CoderResult.OVERFLOW */
			/* name */ 'OVERFLOW',
			/* type */ 'java.nio.charset.CoderResult',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.nio.charset.CoderResult java.nio.charset.CoderResult.UNDERFLOW */
			/* name */ 'UNDERFLOW',
			/* type */ 'java.nio.charset.CoderResult',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
