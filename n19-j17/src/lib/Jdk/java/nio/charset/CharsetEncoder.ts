import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.nio.charset.CharsetEncoder', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* protected java.nio.charset.CharsetEncoder(java.nio.charset.Charset,float,float,byte[]) */
			[/* parameters */
				[/* parameter */
					/* name */ 'cs',
					/* type */ 'java.nio.charset.Charset',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'averageBytesPerChar',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'maxBytesPerChar',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'replacement',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected java.nio.charset.CharsetEncoder(java.nio.charset.Charset,float,float) */
			[/* parameters */
				[/* parameter */
					/* name */ 'cs',
					/* type */ 'java.nio.charset.Charset',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'averageBytesPerChar',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'maxBytesPerChar',
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
		[/* public final java.nio.charset.CharsetEncoder java.nio.charset.CharsetEncoder.onMalformedInput(java.nio.charset.CodingErrorAction) */
			/* name */ 'onMalformedInput',
			[/* parameters */
				[/* parameter */
					/* name */ 'newAction',
					/* type */ 'java.nio.charset.CodingErrorAction',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.charset.CharsetEncoder',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.charset.CharsetEncoder java.nio.charset.CharsetEncoder.onUnmappableCharacter(java.nio.charset.CodingErrorAction) */
			/* name */ 'onUnmappableCharacter',
			[/* parameters */
				[/* parameter */
					/* name */ 'newAction',
					/* type */ 'java.nio.charset.CodingErrorAction',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.charset.CharsetEncoder',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final float java.nio.charset.CharsetEncoder.maxBytesPerChar() */
			/* name */ 'maxBytesPerChar',
			/* parameters */,
			/* return */ 'float',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.charset.CoderResult java.nio.charset.CharsetEncoder.encode(java.nio.CharBuffer,java.nio.ByteBuffer,boolean) */
			/* name */ 'encode',
			[/* parameters */
				[/* parameter */
					/* name */ 'cr',
					/* type */ 'java.nio.CharBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'x',
					/* type */ 'java.nio.ByteBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'cr',
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
		[/* public final java.nio.ByteBuffer java.nio.charset.CharsetEncoder.encode(java.nio.CharBuffer) throws java.nio.charset.CharacterCodingException */
			/* name */ 'encode',
			[/* parameters */
				[/* parameter */
					/* name */ 'o',
					/* type */ 'java.nio.CharBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.ByteBuffer',
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
		[/* public final java.nio.charset.CoderResult java.nio.charset.CharsetEncoder.flush(java.nio.ByteBuffer) */
			/* name */ 'flush',
			[/* parameters */
				[/* parameter */
					/* name */ 'cr',
					/* type */ 'java.nio.ByteBuffer',
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
		[/* public boolean java.nio.charset.CharsetEncoder.canEncode(java.lang.CharSequence) */
			/* name */ 'canEncode',
			[/* parameters */
				[/* parameter */
					/* name */ 'cb',
					/* type */ 'java.lang.CharSequence',
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
		[/* public boolean java.nio.charset.CharsetEncoder.canEncode(char) */
			/* name */ 'canEncode',
			[/* parameters */
				[/* parameter */
					/* name */ 'c',
					/* type */ 'char',
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
		[/* public final java.nio.charset.Charset java.nio.charset.CharsetEncoder.charset() */
			/* name */ 'charset',
			/* parameters */,
			/* return */ 'java.nio.charset.Charset',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final byte[] java.nio.charset.CharsetEncoder.replacement() */
			/* name */ 'replacement',
			/* parameters */,
			/* return */ '[B',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.charset.CharsetEncoder java.nio.charset.CharsetEncoder.reset() */
			/* name */ 'reset',
			/* parameters */,
			/* return */ 'java.nio.charset.CharsetEncoder',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected java.nio.charset.CoderResult java.nio.charset.CharsetEncoder.implFlush(java.nio.ByteBuffer) */
			/* name */ 'implFlush',
			[/* parameters */
				[/* parameter */
					/* name */ 'out',
					/* type */ 'java.nio.ByteBuffer',
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
		[/* public boolean java.nio.charset.CharsetEncoder.isLegalReplacement(byte[]) */
			/* name */ 'isLegalReplacement',
			[/* parameters */
				[/* parameter */
					/* name */ 'repl',
					/* type */ '[B',
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
		[/* protected abstract java.nio.charset.CoderResult java.nio.charset.CharsetEncoder.encodeLoop(java.nio.CharBuffer,java.nio.ByteBuffer) */
			/* name */ 'encodeLoop',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.CharBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.nio.ByteBuffer',
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
		[/* public java.nio.charset.CodingErrorAction java.nio.charset.CharsetEncoder.malformedInputAction() */
			/* name */ 'malformedInputAction',
			/* parameters */,
			/* return */ 'java.nio.charset.CodingErrorAction',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.charset.CodingErrorAction java.nio.charset.CharsetEncoder.unmappableCharacterAction() */
			/* name */ 'unmappableCharacterAction',
			/* parameters */,
			/* return */ 'java.nio.charset.CodingErrorAction',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final float java.nio.charset.CharsetEncoder.averageBytesPerChar() */
			/* name */ 'averageBytesPerChar',
			/* parameters */,
			/* return */ 'float',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.charset.CharsetEncoder java.nio.charset.CharsetEncoder.replaceWith(byte[]) */
			/* name */ 'replaceWith',
			[/* parameters */
				[/* parameter */
					/* name */ 'newReplacement',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.charset.CharsetEncoder',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected void java.nio.charset.CharsetEncoder.implReplaceWith(byte[]) */
			/* name */ 'implReplaceWith',
			[/* parameters */
				[/* parameter */
					/* name */ 'newReplacement',
					/* type */ '[B',
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
		[/* protected void java.nio.charset.CharsetEncoder.implOnMalformedInput(java.nio.charset.CodingErrorAction) */
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
		[/* protected void java.nio.charset.CharsetEncoder.implOnUnmappableCharacter(java.nio.charset.CodingErrorAction) */
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
		[/* protected void java.nio.charset.CharsetEncoder.implReset() */
			/* name */ 'implReset',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
