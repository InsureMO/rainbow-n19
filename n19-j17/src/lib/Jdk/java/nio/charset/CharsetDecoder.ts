import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.nio.charset.CharsetDecoder', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* protected java.nio.charset.CharsetDecoder(java.nio.charset.Charset,float,float) */
			[/* parameters */
				[/* parameter */
					/* name */ 'cs',
					/* type */ 'java.nio.charset.Charset',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'averageCharsPerByte',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'maxCharsPerByte',
					/* type */ 'float',
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
		[/* protected abstract java.nio.charset.CoderResult java.nio.charset.CharsetDecoder.decodeLoop(java.nio.ByteBuffer,java.nio.CharBuffer) */
			/* name */ 'decodeLoop',
			[/* parameters */
				[/* parameter */
					/* name */ 'in',
					/* type */ 'java.nio.ByteBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'out',
					/* type */ 'java.nio.CharBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.charset.CoderResult',
			/* exceptions */,
			/* modifiers */ 1028,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected java.nio.charset.CoderResult java.nio.charset.CharsetDecoder.implFlush(java.nio.CharBuffer) */
			/* name */ 'implFlush',
			[/* parameters */
				[/* parameter */
					/* name */ 'out',
					/* type */ 'java.nio.CharBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.charset.CoderResult',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected void java.nio.charset.CharsetDecoder.implOnMalformedInput(java.nio.charset.CodingErrorAction) */
			/* name */ 'implOnMalformedInput',
			[/* parameters */
				[/* parameter */
					/* name */ 'newAction',
					/* type */ 'java.nio.charset.CodingErrorAction',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected void java.nio.charset.CharsetDecoder.implOnUnmappableCharacter(java.nio.charset.CodingErrorAction) */
			/* name */ 'implOnUnmappableCharacter',
			[/* parameters */
				[/* parameter */
					/* name */ 'newAction',
					/* type */ 'java.nio.charset.CodingErrorAction',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected void java.nio.charset.CharsetDecoder.implReplaceWith(java.lang.String) */
			/* name */ 'implReplaceWith',
			[/* parameters */
				[/* parameter */
					/* name */ 'newReplacement',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected void java.nio.charset.CharsetDecoder.implReset() */
			/* name */ 'implReset',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.nio.charset.CharsetDecoder.isAutoDetecting() */
			/* name */ 'isAutoDetecting',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.nio.charset.CharsetDecoder.isCharsetDetected() */
			/* name */ 'isCharsetDetected',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final float java.nio.charset.CharsetDecoder.averageCharsPerByte() */
			/* name */ 'averageCharsPerByte',
			/* parameters */,
			/* return */ 'float',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final float java.nio.charset.CharsetDecoder.maxCharsPerByte() */
			/* name */ 'maxCharsPerByte',
			/* parameters */,
			/* return */ 'float',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.String java.nio.charset.CharsetDecoder.replacement() */
			/* name */ 'replacement',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.CharBuffer java.nio.charset.CharsetDecoder.decode(java.nio.ByteBuffer) throws java.nio.charset.CharacterCodingException */
			/* name */ 'decode',
			[/* parameters */
				[/* parameter */
					/* name */ 'in',
					/* type */ 'java.nio.ByteBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.CharBuffer',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.nio.charset.CharacterCodingException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.charset.Charset java.nio.charset.CharsetDecoder.charset() */
			/* name */ 'charset',
			/* parameters */,
			/* return */ 'java.nio.charset.Charset',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.charset.CharsetDecoder java.nio.charset.CharsetDecoder.onMalformedInput(java.nio.charset.CodingErrorAction) */
			/* name */ 'onMalformedInput',
			[/* parameters */
				[/* parameter */
					/* name */ 'newAction',
					/* type */ 'java.nio.charset.CodingErrorAction',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.charset.CharsetDecoder',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.charset.CharsetDecoder java.nio.charset.CharsetDecoder.onUnmappableCharacter(java.nio.charset.CodingErrorAction) */
			/* name */ 'onUnmappableCharacter',
			[/* parameters */
				[/* parameter */
					/* name */ 'newAction',
					/* type */ 'java.nio.charset.CodingErrorAction',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.charset.CharsetDecoder',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.charset.CharsetDecoder java.nio.charset.CharsetDecoder.replaceWith(java.lang.String) */
			/* name */ 'replaceWith',
			[/* parameters */
				[/* parameter */
					/* name */ 'newReplacement',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.charset.CharsetDecoder',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.charset.CharsetDecoder java.nio.charset.CharsetDecoder.reset() */
			/* name */ 'reset',
			/* parameters */,
			/* return */ 'java.nio.charset.CharsetDecoder',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.charset.CoderResult java.nio.charset.CharsetDecoder.decode(java.nio.ByteBuffer,java.nio.CharBuffer,boolean) */
			/* name */ 'decode',
			[/* parameters */
				[/* parameter */
					/* name */ 'in',
					/* type */ 'java.nio.ByteBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'out',
					/* type */ 'java.nio.CharBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'endOfInput',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.charset.CoderResult',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.charset.CoderResult java.nio.charset.CharsetDecoder.flush(java.nio.CharBuffer) */
			/* name */ 'flush',
			[/* parameters */
				[/* parameter */
					/* name */ 'out',
					/* type */ 'java.nio.CharBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.charset.CoderResult',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.charset.Charset java.nio.charset.CharsetDecoder.detectedCharset() */
			/* name */ 'detectedCharset',
			/* parameters */,
			/* return */ 'java.nio.charset.Charset',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.charset.CodingErrorAction java.nio.charset.CharsetDecoder.malformedInputAction() */
			/* name */ 'malformedInputAction',
			/* parameters */,
			/* return */ 'java.nio.charset.CodingErrorAction',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.charset.CodingErrorAction java.nio.charset.CharsetDecoder.unmappableCharacterAction() */
			/* name */ 'unmappableCharacterAction',
			/* parameters */,
			/* return */ 'java.nio.charset.CodingErrorAction',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
