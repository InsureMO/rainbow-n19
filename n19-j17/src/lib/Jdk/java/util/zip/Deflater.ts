import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.zip.Deflater', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.util.zip.Deflater() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.zip.Deflater(int) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
		[/* public java.util.zip.Deflater(int,boolean) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'boolean',
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
		[/* public void java.util.zip.Deflater.end() */
			/* name */ 'end',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.zip.Deflater.reset() */
			/* name */ 'reset',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.zip.Deflater.finish() */
			/* name */ 'finish',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.zip.Deflater.finished() */
			/* name */ 'finished',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.zip.Deflater.needsInput() */
			/* name */ 'needsInput',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.zip.Deflater.setInput(byte[],int,int) */
			/* name */ 'setInput',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[B',
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
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.zip.Deflater.setInput(byte[]) */
			/* name */ 'setInput',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[B',
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
		[/* public void java.util.zip.Deflater.setInput(java.nio.ByteBuffer) */
			/* name */ 'setInput',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.ByteBuffer',
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
		[/* public long java.util.zip.Deflater.getBytesWritten() */
			/* name */ 'getBytesWritten',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.zip.Deflater.setDictionary(byte[]) */
			/* name */ 'setDictionary',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[B',
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
		[/* public void java.util.zip.Deflater.setDictionary(byte[],int,int) */
			/* name */ 'setDictionary',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[B',
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
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.zip.Deflater.setDictionary(java.nio.ByteBuffer) */
			/* name */ 'setDictionary',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.ByteBuffer',
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
		[/* public int java.util.zip.Deflater.getAdler() */
			/* name */ 'getAdler',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.util.zip.Deflater.getBytesRead() */
			/* name */ 'getBytesRead',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.util.zip.Deflater.getTotalIn() */
			/* name */ 'getTotalIn',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.util.zip.Deflater.getTotalOut() */
			/* name */ 'getTotalOut',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.zip.Deflater.setLevel(int) */
			/* name */ 'setLevel',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
		[/* public int java.util.zip.Deflater.deflate(java.nio.ByteBuffer,int) */
			/* name */ 'deflate',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.ByteBuffer',
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
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.util.zip.Deflater.deflate(byte[],int,int) */
			/* name */ 'deflate',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[B',
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
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.util.zip.Deflater.deflate(byte[]) */
			/* name */ 'deflate',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.util.zip.Deflater.deflate(byte[],int,int,int) */
			/* name */ 'deflate',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[B',
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
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.util.zip.Deflater.deflate(java.nio.ByteBuffer) */
			/* name */ 'deflate',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.ByteBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.zip.Deflater.setStrategy(int) */
			/* name */ 'setStrategy',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
	[/* declared fields */
		[/* public static final int java.util.zip.Deflater.DEFLATED */
			/* name */ 'DEFLATED',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.zip.Deflater.NO_COMPRESSION */
			/* name */ 'NO_COMPRESSION',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.zip.Deflater.BEST_SPEED */
			/* name */ 'BEST_SPEED',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.zip.Deflater.BEST_COMPRESSION */
			/* name */ 'BEST_COMPRESSION',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.zip.Deflater.DEFAULT_COMPRESSION */
			/* name */ 'DEFAULT_COMPRESSION',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.zip.Deflater.FILTERED */
			/* name */ 'FILTERED',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.zip.Deflater.HUFFMAN_ONLY */
			/* name */ 'HUFFMAN_ONLY',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.zip.Deflater.DEFAULT_STRATEGY */
			/* name */ 'DEFAULT_STRATEGY',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.zip.Deflater.NO_FLUSH */
			/* name */ 'NO_FLUSH',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.zip.Deflater.SYNC_FLUSH */
			/* name */ 'SYNC_FLUSH',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.zip.Deflater.FULL_FLUSH */
			/* name */ 'FULL_FLUSH',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
