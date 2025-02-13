import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.reflect.Array', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public static java.lang.Object java.lang.reflect.Array.newInstance(java.lang.Class<?>,int) throws java.lang.NegativeArraySizeException */
			/* name */ 'newInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'componentType',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
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
			/* return */ 'java.lang.Object',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.NegativeArraySizeException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.Object java.lang.reflect.Array.newInstance(java.lang.Class<?>,int...) throws java.lang.IllegalArgumentException,java.lang.NegativeArraySizeException */
			/* name */ 'newInstance',
			[/* parameters */
				[/* parameter */
					/* name */ 'componentType',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'dimensions',
					/* type */ '[I',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.NegativeArraySizeException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 137,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native boolean java.lang.reflect.Array.getBoolean(java.lang.Object,int) throws java.lang.IllegalArgumentException,java.lang.ArrayIndexOutOfBoundsException */
			/* name */ 'getBoolean',
			[/* parameters */
				[/* parameter */
					/* name */ 'componentType',
					/* type */ 'java.lang.Object',
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
			/* return */ 'boolean',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ArrayIndexOutOfBoundsException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native byte java.lang.reflect.Array.getByte(java.lang.Object,int) throws java.lang.IllegalArgumentException,java.lang.ArrayIndexOutOfBoundsException */
			/* name */ 'getByte',
			[/* parameters */
				[/* parameter */
					/* name */ 'componentType',
					/* type */ 'java.lang.Object',
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
			/* return */ 'byte',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ArrayIndexOutOfBoundsException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native char java.lang.reflect.Array.getChar(java.lang.Object,int) throws java.lang.IllegalArgumentException,java.lang.ArrayIndexOutOfBoundsException */
			/* name */ 'getChar',
			[/* parameters */
				[/* parameter */
					/* name */ 'componentType',
					/* type */ 'java.lang.Object',
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
			/* return */ 'char',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ArrayIndexOutOfBoundsException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native double java.lang.reflect.Array.getDouble(java.lang.Object,int) throws java.lang.IllegalArgumentException,java.lang.ArrayIndexOutOfBoundsException */
			/* name */ 'getDouble',
			[/* parameters */
				[/* parameter */
					/* name */ 'componentType',
					/* type */ 'java.lang.Object',
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
			/* return */ 'double',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ArrayIndexOutOfBoundsException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native float java.lang.reflect.Array.getFloat(java.lang.Object,int) throws java.lang.IllegalArgumentException,java.lang.ArrayIndexOutOfBoundsException */
			/* name */ 'getFloat',
			[/* parameters */
				[/* parameter */
					/* name */ 'componentType',
					/* type */ 'java.lang.Object',
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
			/* return */ 'float',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ArrayIndexOutOfBoundsException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native int java.lang.reflect.Array.getInt(java.lang.Object,int) throws java.lang.IllegalArgumentException,java.lang.ArrayIndexOutOfBoundsException */
			/* name */ 'getInt',
			[/* parameters */
				[/* parameter */
					/* name */ 'componentType',
					/* type */ 'java.lang.Object',
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
			/* return */ 'int',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ArrayIndexOutOfBoundsException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native int java.lang.reflect.Array.getLength(java.lang.Object) throws java.lang.IllegalArgumentException */
			/* name */ 'getLength',
			[/* parameters */
				[/* parameter */
					/* name */ 'componentType',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 265,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static native java.lang.Object java.lang.reflect.Array.get(java.lang.Object,int) throws java.lang.IllegalArgumentException,java.lang.ArrayIndexOutOfBoundsException */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'componentType',
					/* type */ 'java.lang.Object',
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
			/* return */ 'java.lang.Object',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ArrayIndexOutOfBoundsException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native long java.lang.reflect.Array.getLong(java.lang.Object,int) throws java.lang.IllegalArgumentException,java.lang.ArrayIndexOutOfBoundsException */
			/* name */ 'getLong',
			[/* parameters */
				[/* parameter */
					/* name */ 'componentType',
					/* type */ 'java.lang.Object',
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
			/* return */ 'long',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ArrayIndexOutOfBoundsException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native short java.lang.reflect.Array.getShort(java.lang.Object,int) throws java.lang.IllegalArgumentException,java.lang.ArrayIndexOutOfBoundsException */
			/* name */ 'getShort',
			[/* parameters */
				[/* parameter */
					/* name */ 'componentType',
					/* type */ 'java.lang.Object',
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
			/* return */ 'short',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ArrayIndexOutOfBoundsException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native void java.lang.reflect.Array.set(java.lang.Object,int,java.lang.Object) throws java.lang.IllegalArgumentException,java.lang.ArrayIndexOutOfBoundsException */
			/* name */ 'set',
			[/* parameters */
				[/* parameter */
					/* name */ 'componentType',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'length',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ArrayIndexOutOfBoundsException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native void java.lang.reflect.Array.setBoolean(java.lang.Object,int,boolean) throws java.lang.IllegalArgumentException,java.lang.ArrayIndexOutOfBoundsException */
			/* name */ 'setBoolean',
			[/* parameters */
				[/* parameter */
					/* name */ 'componentType',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'length',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ArrayIndexOutOfBoundsException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native void java.lang.reflect.Array.setByte(java.lang.Object,int,byte) throws java.lang.IllegalArgumentException,java.lang.ArrayIndexOutOfBoundsException */
			/* name */ 'setByte',
			[/* parameters */
				[/* parameter */
					/* name */ 'componentType',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'length',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'byte',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ArrayIndexOutOfBoundsException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native void java.lang.reflect.Array.setChar(java.lang.Object,int,char) throws java.lang.IllegalArgumentException,java.lang.ArrayIndexOutOfBoundsException */
			/* name */ 'setChar',
			[/* parameters */
				[/* parameter */
					/* name */ 'componentType',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'length',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ArrayIndexOutOfBoundsException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native void java.lang.reflect.Array.setDouble(java.lang.Object,int,double) throws java.lang.IllegalArgumentException,java.lang.ArrayIndexOutOfBoundsException */
			/* name */ 'setDouble',
			[/* parameters */
				[/* parameter */
					/* name */ 'componentType',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'length',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ArrayIndexOutOfBoundsException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native void java.lang.reflect.Array.setFloat(java.lang.Object,int,float) throws java.lang.IllegalArgumentException,java.lang.ArrayIndexOutOfBoundsException */
			/* name */ 'setFloat',
			[/* parameters */
				[/* parameter */
					/* name */ 'componentType',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'length',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ArrayIndexOutOfBoundsException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native void java.lang.reflect.Array.setInt(java.lang.Object,int,int) throws java.lang.IllegalArgumentException,java.lang.ArrayIndexOutOfBoundsException */
			/* name */ 'setInt',
			[/* parameters */
				[/* parameter */
					/* name */ 'componentType',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'length',
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
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ArrayIndexOutOfBoundsException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native void java.lang.reflect.Array.setLong(java.lang.Object,int,long) throws java.lang.IllegalArgumentException,java.lang.ArrayIndexOutOfBoundsException */
			/* name */ 'setLong',
			[/* parameters */
				[/* parameter */
					/* name */ 'componentType',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'length',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ArrayIndexOutOfBoundsException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static native void java.lang.reflect.Array.setShort(java.lang.Object,int,short) throws java.lang.IllegalArgumentException,java.lang.ArrayIndexOutOfBoundsException */
			/* name */ 'setShort',
			[/* parameters */
				[/* parameter */
					/* name */ 'componentType',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'length',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'short',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ArrayIndexOutOfBoundsException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 265,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
