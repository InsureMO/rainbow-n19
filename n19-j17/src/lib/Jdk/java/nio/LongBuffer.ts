import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.nio.LongBuffer', [
	/* super class, extends java.nio.Buffer */
	'java.nio.Buffer',
	[/* interfaces, implements java.lang.Comparable<java.nio.LongBuffer> */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.nio.LongBuffer'
			],
			/* raw type */ 'java.lang.Comparable',
			/* owner type */ UDF
		]]
	],
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract long java.nio.LongBuffer.get() */
			/* name */ 'get',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.LongBuffer java.nio.LongBuffer.get(int,long[]) */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ '[J',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract long java.nio.LongBuffer.get(int) */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.LongBuffer java.nio.LongBuffer.get(int,long[],int,int) */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ '[J',
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
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.LongBuffer java.nio.LongBuffer.get(long[],int,int) */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[J',
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
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.LongBuffer java.nio.LongBuffer.get(long[]) */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[J',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.LongBuffer java.nio.LongBuffer.put(long[]) */
			/* name */ 'put',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[J',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.LongBuffer java.nio.LongBuffer.put(int,long[],int,int) */
			/* name */ 'put',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ '[J',
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
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.LongBuffer java.nio.LongBuffer.put(int,long[]) */
			/* name */ 'put',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ '[J',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.LongBuffer java.nio.LongBuffer.put(long[],int,int) */
			/* name */ 'put',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[J',
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
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.LongBuffer java.nio.LongBuffer.put(int,java.nio.LongBuffer,int,int) */
			/* name */ 'put',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.nio.LongBuffer',
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
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.LongBuffer java.nio.LongBuffer.put(java.nio.LongBuffer) */
			/* name */ 'put',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.LongBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.LongBuffer java.nio.LongBuffer.put(int,long) */
			/* name */ 'put',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.LongBuffer java.nio.LongBuffer.put(long) */
			/* name */ 'put',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.nio.LongBuffer.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
		[/* public java.lang.String java.nio.LongBuffer.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.nio.LongBuffer.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.nio.LongBuffer.compareTo(java.lang.Object) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.nio.LongBuffer.compareTo(java.nio.LongBuffer) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.LongBuffer',
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
		[/* public java.nio.Buffer java.nio.LongBuffer.clear() */
			/* name */ 'clear',
			/* parameters */,
			/* return */ 'java.nio.Buffer',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.LongBuffer java.nio.LongBuffer.clear() */
			/* name */ 'clear',
			/* parameters */,
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.nio.LongBuffer java.nio.LongBuffer.wrap(long[]) */
			/* name */ 'wrap',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[J',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.nio.LongBuffer java.nio.LongBuffer.wrap(long[],int,int) */
			/* name */ 'wrap',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[J',
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
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.LongBuffer java.nio.LongBuffer.position(int) */
			/* name */ 'position',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.LongBuffer.position(int) */
			/* name */ 'position',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.Buffer',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.LongBuffer java.nio.LongBuffer.limit(int) */
			/* name */ 'limit',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.LongBuffer.limit(int) */
			/* name */ 'limit',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.Buffer',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.nio.LongBuffer.isDirect() */
			/* name */ 'isDirect',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final boolean java.nio.LongBuffer.hasArray() */
			/* name */ 'hasArray',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final long[] java.nio.LongBuffer.array() */
			/* name */ 'array',
			/* parameters */,
			/* return */ '[J',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object java.nio.LongBuffer.array() */
			/* name */ 'array',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final int java.nio.LongBuffer.arrayOffset() */
			/* name */ 'arrayOffset',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.LongBuffer.mark() */
			/* name */ 'mark',
			/* parameters */,
			/* return */ 'java.nio.Buffer',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.LongBuffer java.nio.LongBuffer.mark() */
			/* name */ 'mark',
			/* parameters */,
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.LongBuffer.reset() */
			/* name */ 'reset',
			/* parameters */,
			/* return */ 'java.nio.Buffer',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.LongBuffer java.nio.LongBuffer.reset() */
			/* name */ 'reset',
			/* parameters */,
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.LongBuffer.flip() */
			/* name */ 'flip',
			/* parameters */,
			/* return */ 'java.nio.Buffer',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.LongBuffer java.nio.LongBuffer.flip() */
			/* name */ 'flip',
			/* parameters */,
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.LongBuffer.rewind() */
			/* name */ 'rewind',
			/* parameters */,
			/* return */ 'java.nio.Buffer',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.LongBuffer java.nio.LongBuffer.rewind() */
			/* name */ 'rewind',
			/* parameters */,
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.LongBuffer.slice() */
			/* name */ 'slice',
			/* parameters */,
			/* return */ 'java.nio.Buffer',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.LongBuffer.slice(int,int) */
			/* name */ 'slice',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
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
			/* return */ 'java.nio.Buffer',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.LongBuffer java.nio.LongBuffer.slice(int,int) */
			/* name */ 'slice',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
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
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.LongBuffer java.nio.LongBuffer.slice() */
			/* name */ 'slice',
			/* parameters */,
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.LongBuffer java.nio.LongBuffer.duplicate() */
			/* name */ 'duplicate',
			/* parameters */,
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.LongBuffer.duplicate() */
			/* name */ 'duplicate',
			/* parameters */,
			/* return */ 'java.nio.Buffer',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.ByteOrder java.nio.LongBuffer.order() */
			/* name */ 'order',
			/* parameters */,
			/* return */ 'java.nio.ByteOrder',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.nio.LongBuffer.mismatch(java.nio.LongBuffer) */
			/* name */ 'mismatch',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.LongBuffer',
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
		[/* public static java.nio.LongBuffer java.nio.LongBuffer.allocate(int) */
			/* name */ 'allocate',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.LongBuffer java.nio.LongBuffer.asReadOnlyBuffer() */
			/* name */ 'asReadOnlyBuffer',
			/* parameters */,
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.LongBuffer java.nio.LongBuffer.compact() */
			/* name */ 'compact',
			/* parameters */,
			/* return */ 'java.nio.LongBuffer',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
