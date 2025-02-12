import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.nio.DoubleBuffer', [
	/* super class, extends java.nio.Buffer */
	'java.nio.Buffer',
	[/* interfaces, implements java.lang.Comparable<java.nio.DoubleBuffer> */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.nio.DoubleBuffer'
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
		[/* public abstract boolean java.nio.DoubleBuffer.isDirect() */
			/* name */ 'isDirect',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract double java.nio.DoubleBuffer.get() */
			/* name */ 'get',
			/* parameters */,
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract double java.nio.DoubleBuffer.get(int) */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.ByteOrder java.nio.DoubleBuffer.order() */
			/* name */ 'order',
			/* parameters */,
			/* return */ 'java.nio.ByteOrder',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.DoubleBuffer java.nio.DoubleBuffer.asReadOnlyBuffer() */
			/* name */ 'asReadOnlyBuffer',
			/* parameters */,
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.DoubleBuffer java.nio.DoubleBuffer.compact() */
			/* name */ 'compact',
			/* parameters */,
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.DoubleBuffer java.nio.DoubleBuffer.duplicate() */
			/* name */ 'duplicate',
			/* parameters */,
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.DoubleBuffer java.nio.DoubleBuffer.put(double) */
			/* name */ 'put',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.DoubleBuffer java.nio.DoubleBuffer.put(int,double) */
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
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.DoubleBuffer java.nio.DoubleBuffer.slice() */
			/* name */ 'slice',
			/* parameters */,
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.DoubleBuffer java.nio.DoubleBuffer.slice(int,int) */
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
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.nio.DoubleBuffer.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'ob',
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
		[/* public final boolean java.nio.DoubleBuffer.hasArray() */
			/* name */ 'hasArray',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final double[] java.nio.DoubleBuffer.array() */
			/* name */ 'array',
			/* parameters */,
			/* return */ '[D',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final int java.nio.DoubleBuffer.arrayOffset() */
			/* name */ 'arrayOffset',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.DoubleBuffer java.nio.DoubleBuffer.clear() */
			/* name */ 'clear',
			/* parameters */,
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.DoubleBuffer java.nio.DoubleBuffer.flip() */
			/* name */ 'flip',
			/* parameters */,
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.DoubleBuffer java.nio.DoubleBuffer.limit(int) */
			/* name */ 'limit',
			[/* parameters */
				[/* parameter */
					/* name */ 'newLimit',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.DoubleBuffer java.nio.DoubleBuffer.mark() */
			/* name */ 'mark',
			/* parameters */,
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.DoubleBuffer java.nio.DoubleBuffer.position(int) */
			/* name */ 'position',
			[/* parameters */
				[/* parameter */
					/* name */ 'newPosition',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.DoubleBuffer java.nio.DoubleBuffer.put(double[]) */
			/* name */ 'put',
			[/* parameters */
				[/* parameter */
					/* name */ 'src',
					/* type */ '[D',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.DoubleBuffer java.nio.DoubleBuffer.reset() */
			/* name */ 'reset',
			/* parameters */,
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.DoubleBuffer java.nio.DoubleBuffer.rewind() */
			/* name */ 'rewind',
			/* parameters */,
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.nio.DoubleBuffer.compareTo(java.lang.Object) */
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
		[/* public int java.nio.DoubleBuffer.compareTo(java.nio.DoubleBuffer) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'that',
					/* type */ 'java.nio.DoubleBuffer',
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
		[/* public int java.nio.DoubleBuffer.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.nio.DoubleBuffer.mismatch(java.nio.DoubleBuffer) */
			/* name */ 'mismatch',
			[/* parameters */
				[/* parameter */
					/* name */ 'that',
					/* type */ 'java.nio.DoubleBuffer',
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
		[/* public java.lang.Object java.nio.DoubleBuffer.array() */
			/* name */ 'array',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.nio.DoubleBuffer.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.DoubleBuffer.clear() */
			/* name */ 'clear',
			/* parameters */,
			/* return */ 'java.nio.Buffer',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.DoubleBuffer.duplicate() */
			/* name */ 'duplicate',
			/* parameters */,
			/* return */ 'java.nio.Buffer',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.DoubleBuffer.flip() */
			/* name */ 'flip',
			/* parameters */,
			/* return */ 'java.nio.Buffer',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.DoubleBuffer.limit(int) */
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
		[/* public java.nio.Buffer java.nio.DoubleBuffer.mark() */
			/* name */ 'mark',
			/* parameters */,
			/* return */ 'java.nio.Buffer',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.DoubleBuffer.position(int) */
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
		[/* public java.nio.Buffer java.nio.DoubleBuffer.reset() */
			/* name */ 'reset',
			/* parameters */,
			/* return */ 'java.nio.Buffer',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.DoubleBuffer.rewind() */
			/* name */ 'rewind',
			/* parameters */,
			/* return */ 'java.nio.Buffer',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.DoubleBuffer.slice() */
			/* name */ 'slice',
			/* parameters */,
			/* return */ 'java.nio.Buffer',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.Buffer java.nio.DoubleBuffer.slice(int,int) */
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
		[/* public java.nio.DoubleBuffer java.nio.DoubleBuffer.get(double[]) */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'dst',
					/* type */ '[D',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.DoubleBuffer java.nio.DoubleBuffer.get(double[],int,int) */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'dst',
					/* type */ '[D',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'offset',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'length',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.DoubleBuffer java.nio.DoubleBuffer.get(int,double[]) */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'index',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'dst',
					/* type */ '[D',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.DoubleBuffer java.nio.DoubleBuffer.get(int,double[],int,int) */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'index',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'dst',
					/* type */ '[D',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'offset',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'length',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.DoubleBuffer java.nio.DoubleBuffer.put(double[],int,int) */
			/* name */ 'put',
			[/* parameters */
				[/* parameter */
					/* name */ 'src',
					/* type */ '[D',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'offset',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'length',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.DoubleBuffer java.nio.DoubleBuffer.put(int,double[]) */
			/* name */ 'put',
			[/* parameters */
				[/* parameter */
					/* name */ 'index',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'src',
					/* type */ '[D',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.DoubleBuffer java.nio.DoubleBuffer.put(int,double[],int,int) */
			/* name */ 'put',
			[/* parameters */
				[/* parameter */
					/* name */ 'index',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'src',
					/* type */ '[D',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'offset',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'length',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.DoubleBuffer java.nio.DoubleBuffer.put(int,java.nio.DoubleBuffer,int,int) */
			/* name */ 'put',
			[/* parameters */
				[/* parameter */
					/* name */ 'index',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'src',
					/* type */ 'java.nio.DoubleBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'offset',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'length',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.DoubleBuffer java.nio.DoubleBuffer.put(java.nio.DoubleBuffer) */
			/* name */ 'put',
			[/* parameters */
				[/* parameter */
					/* name */ 'src',
					/* type */ 'java.nio.DoubleBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.nio.DoubleBuffer java.nio.DoubleBuffer.allocate(int) */
			/* name */ 'allocate',
			[/* parameters */
				[/* parameter */
					/* name */ 'capacity',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.nio.DoubleBuffer java.nio.DoubleBuffer.wrap(double[]) */
			/* name */ 'wrap',
			[/* parameters */
				[/* parameter */
					/* name */ 'array',
					/* type */ '[D',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.nio.DoubleBuffer java.nio.DoubleBuffer.wrap(double[],int,int) */
			/* name */ 'wrap',
			[/* parameters */
				[/* parameter */
					/* name */ 'array',
					/* type */ '[D',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'offset',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'length',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.DoubleBuffer',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
