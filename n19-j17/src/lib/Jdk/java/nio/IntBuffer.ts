import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.nio.IntBuffer', [
	/* super class, extends java.nio.Buffer */
	'java.nio.Buffer',
	[/* interfaces, implements java.lang.Comparable<java.nio.IntBuffer> */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.nio.IntBuffer'
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
		[/* public abstract int java.nio.IntBuffer.get() */
			/* name */ 'get',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.IntBuffer java.nio.IntBuffer.get(int,int[]) */
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
					/* type */ '[I',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.nio.IntBuffer.get(int) */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
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
		[/* public java.nio.IntBuffer java.nio.IntBuffer.get(int,int[],int,int) */
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
					/* type */ '[I',
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
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.IntBuffer java.nio.IntBuffer.get(int[],int,int) */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[I',
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
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.IntBuffer java.nio.IntBuffer.get(int[]) */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[I',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.IntBuffer java.nio.IntBuffer.put(int[]) */
			/* name */ 'put',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[I',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.IntBuffer java.nio.IntBuffer.put(int,int[],int,int) */
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
					/* type */ '[I',
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
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.IntBuffer java.nio.IntBuffer.put(int,int[]) */
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
					/* type */ '[I',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.IntBuffer java.nio.IntBuffer.put(int[],int,int) */
			/* name */ 'put',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[I',
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
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.IntBuffer java.nio.IntBuffer.put(int,java.nio.IntBuffer,int,int) */
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
					/* type */ 'java.nio.IntBuffer',
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
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.IntBuffer java.nio.IntBuffer.put(java.nio.IntBuffer) */
			/* name */ 'put',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.IntBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.IntBuffer java.nio.IntBuffer.put(int,int) */
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
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.IntBuffer java.nio.IntBuffer.put(int) */
			/* name */ 'put',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.nio.IntBuffer.equals(java.lang.Object) */
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
		[/* public java.lang.String java.nio.IntBuffer.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.nio.IntBuffer.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.nio.IntBuffer.compareTo(java.lang.Object) */
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
		[/* public int java.nio.IntBuffer.compareTo(java.nio.IntBuffer) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.IntBuffer',
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
		[/* public java.nio.Buffer java.nio.IntBuffer.clear() */
			/* name */ 'clear',
			/* parameters */,
			/* return */ 'java.nio.Buffer',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.IntBuffer java.nio.IntBuffer.clear() */
			/* name */ 'clear',
			/* parameters */,
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.nio.IntBuffer java.nio.IntBuffer.wrap(int[]) */
			/* name */ 'wrap',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[I',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.nio.IntBuffer java.nio.IntBuffer.wrap(int[],int,int) */
			/* name */ 'wrap',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[I',
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
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.IntBuffer java.nio.IntBuffer.position(int) */
			/* name */ 'position',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.IntBuffer.position(int) */
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
		[/* public final java.nio.IntBuffer java.nio.IntBuffer.limit(int) */
			/* name */ 'limit',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.IntBuffer.limit(int) */
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
		[/* public abstract boolean java.nio.IntBuffer.isDirect() */
			/* name */ 'isDirect',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final boolean java.nio.IntBuffer.hasArray() */
			/* name */ 'hasArray',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final int[] java.nio.IntBuffer.array() */
			/* name */ 'array',
			/* parameters */,
			/* return */ '[I',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object java.nio.IntBuffer.array() */
			/* name */ 'array',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final int java.nio.IntBuffer.arrayOffset() */
			/* name */ 'arrayOffset',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.IntBuffer.mark() */
			/* name */ 'mark',
			/* parameters */,
			/* return */ 'java.nio.Buffer',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.IntBuffer java.nio.IntBuffer.mark() */
			/* name */ 'mark',
			/* parameters */,
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.IntBuffer.reset() */
			/* name */ 'reset',
			/* parameters */,
			/* return */ 'java.nio.Buffer',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.IntBuffer java.nio.IntBuffer.reset() */
			/* name */ 'reset',
			/* parameters */,
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.IntBuffer.flip() */
			/* name */ 'flip',
			/* parameters */,
			/* return */ 'java.nio.Buffer',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.IntBuffer java.nio.IntBuffer.flip() */
			/* name */ 'flip',
			/* parameters */,
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.IntBuffer.rewind() */
			/* name */ 'rewind',
			/* parameters */,
			/* return */ 'java.nio.Buffer',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.IntBuffer java.nio.IntBuffer.rewind() */
			/* name */ 'rewind',
			/* parameters */,
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.IntBuffer.slice() */
			/* name */ 'slice',
			/* parameters */,
			/* return */ 'java.nio.Buffer',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.IntBuffer.slice(int,int) */
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
		[/* public abstract java.nio.IntBuffer java.nio.IntBuffer.slice(int,int) */
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
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.IntBuffer java.nio.IntBuffer.slice() */
			/* name */ 'slice',
			/* parameters */,
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.IntBuffer java.nio.IntBuffer.duplicate() */
			/* name */ 'duplicate',
			/* parameters */,
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.IntBuffer.duplicate() */
			/* name */ 'duplicate',
			/* parameters */,
			/* return */ 'java.nio.Buffer',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.ByteOrder java.nio.IntBuffer.order() */
			/* name */ 'order',
			/* parameters */,
			/* return */ 'java.nio.ByteOrder',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.nio.IntBuffer.mismatch(java.nio.IntBuffer) */
			/* name */ 'mismatch',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.IntBuffer',
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
		[/* public static java.nio.IntBuffer java.nio.IntBuffer.allocate(int) */
			/* name */ 'allocate',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.IntBuffer java.nio.IntBuffer.asReadOnlyBuffer() */
			/* name */ 'asReadOnlyBuffer',
			/* parameters */,
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.IntBuffer java.nio.IntBuffer.compact() */
			/* name */ 'compact',
			/* parameters */,
			/* return */ 'java.nio.IntBuffer',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
