import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.io.ObjectInputStream', [
	/* super class, extends java.io.InputStream */
	'java.io.InputStream',
	[/* interfaces, implements java.io.ObjectInput, java.io.ObjectStreamConstants */
		'java.io.ObjectInput',
		'java.io.ObjectStreamConstants'
	],
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.io.ObjectInputStream(java.io.InputStream) throws java.io.IOException */
			[/* parameters */
				[/* parameter */
					/* name */ 'in',
					/* type */ 'java.io.InputStream',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected java.io.ObjectInputStream() throws java.io.IOException,java.lang.SecurityException */
			/* parameters */,
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.SecurityException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* protected java.lang.Class<?> java.io.ObjectInputStream.resolveClass(java.io.ObjectStreamClass) throws java.io.IOException,java.lang.ClassNotFoundException */
			/* name */ 'resolveClass',
			[/* parameters */
				[/* parameter */
					/* name */ 'cl',
					/* type */ 'java.io.ObjectStreamClass',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
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
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ClassNotFoundException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.io.ObjectInputStream.defaultReadObject() throws java.io.IOException,java.lang.ClassNotFoundException */
			/* name */ 'defaultReadObject',
			/* parameters */,
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ClassNotFoundException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.Object java.io.ObjectInputStream.readObject() throws java.io.IOException,java.lang.ClassNotFoundException */
			/* name */ 'readObject',
			/* parameters */,
			/* return */ 'java.lang.Object',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ClassNotFoundException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.io.ObjectInputStream.read(byte[],int,int) throws java.io.IOException */
			/* name */ 'read',
			[/* parameters */
				[/* parameter */
					/* name */ 'buf',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'off',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'len',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.io.ObjectInputStream.read() throws java.io.IOException */
			/* name */ 'read',
			/* parameters */,
			/* return */ 'int',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.ObjectInputStream$GetField java.io.ObjectInputStream.readFields() throws java.io.IOException,java.lang.ClassNotFoundException */
			/* name */ 'readFields',
			/* parameters */,
			/* return */ 'java.io.ObjectInputStream$GetField',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ClassNotFoundException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.io.ObjectInputStream.readLine() throws java.io.IOException */
			/* name */ 'readLine',
			/* parameters */,
			/* return */ 'java.lang.String',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', ''],
					['p', 'forRemoval', false]
				]
			],
			/* type parameters */ UDF
		],
		[/* public void java.io.ObjectInputStream.close() throws java.io.IOException */
			/* name */ 'close',
			/* parameters */,
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.io.ObjectInputStream.readInt() throws java.io.IOException */
			/* name */ 'readInt',
			/* parameters */,
			/* return */ 'int',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.io.ObjectInputStream.available() throws java.io.IOException */
			/* name */ 'available',
			/* parameters */,
			/* return */ 'int',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.io.ObjectInputStream.readUTF() throws java.io.IOException */
			/* name */ 'readUTF',
			/* parameters */,
			/* return */ 'java.lang.String',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public char java.io.ObjectInputStream.readChar() throws java.io.IOException */
			/* name */ 'readChar',
			/* parameters */,
			/* return */ 'char',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public float java.io.ObjectInputStream.readFloat() throws java.io.IOException */
			/* name */ 'readFloat',
			/* parameters */,
			/* return */ 'float',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.io.ObjectInputStream.readUnsignedShort() throws java.io.IOException */
			/* name */ 'readUnsignedShort',
			/* parameters */,
			/* return */ 'int',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.io.ObjectInputStream.readLong() throws java.io.IOException */
			/* name */ 'readLong',
			/* parameters */,
			/* return */ 'long',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public byte java.io.ObjectInputStream.readByte() throws java.io.IOException */
			/* name */ 'readByte',
			/* parameters */,
			/* return */ 'byte',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public short java.io.ObjectInputStream.readShort() throws java.io.IOException */
			/* name */ 'readShort',
			/* parameters */,
			/* return */ 'short',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.io.ObjectInputStream.readFully(byte[]) throws java.io.IOException */
			/* name */ 'readFully',
			[/* parameters */
				[/* parameter */
					/* name */ 'buf',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.io.ObjectInputStream.readFully(byte[],int,int) throws java.io.IOException */
			/* name */ 'readFully',
			[/* parameters */
				[/* parameter */
					/* name */ 'buf',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'off',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'len',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.io.ObjectInputStream.skipBytes(int) throws java.io.IOException */
			/* name */ 'skipBytes',
			[/* parameters */
				[/* parameter */
					/* name */ 'len',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.io.ObjectInputStream.readBoolean() throws java.io.IOException */
			/* name */ 'readBoolean',
			/* parameters */,
			/* return */ 'boolean',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.io.ObjectInputStream.readUnsignedByte() throws java.io.IOException */
			/* name */ 'readUnsignedByte',
			/* parameters */,
			/* return */ 'int',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public double java.io.ObjectInputStream.readDouble() throws java.io.IOException */
			/* name */ 'readDouble',
			/* parameters */,
			/* return */ 'double',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected void java.io.ObjectInputStream.readStreamHeader() throws java.io.IOException,java.io.StreamCorruptedException */
			/* name */ 'readStreamHeader',
			/* parameters */,
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.io.StreamCorruptedException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected java.lang.Object java.io.ObjectInputStream.readObjectOverride() throws java.io.IOException,java.lang.ClassNotFoundException */
			/* name */ 'readObjectOverride',
			/* parameters */,
			/* return */ 'java.lang.Object',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ClassNotFoundException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected java.lang.Object java.io.ObjectInputStream.resolveObject(java.lang.Object) throws java.io.IOException */
			/* name */ 'resolveObject',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected java.lang.Class<?> java.io.ObjectInputStream.resolveProxyClass(java.lang.String[]) throws java.io.IOException,java.lang.ClassNotFoundException */
			/* name */ 'resolveProxyClass',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.lang.String;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
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
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ClassNotFoundException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected java.io.ObjectStreamClass java.io.ObjectInputStream.readClassDescriptor() throws java.io.IOException,java.lang.ClassNotFoundException */
			/* name */ 'readClassDescriptor',
			/* parameters */,
			/* return */ 'java.io.ObjectStreamClass',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ClassNotFoundException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object java.io.ObjectInputStream.readUnshared() throws java.io.IOException,java.lang.ClassNotFoundException */
			/* name */ 'readUnshared',
			/* parameters */,
			/* return */ 'java.lang.Object',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ClassNotFoundException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.io.ObjectInputStream.registerValidation(java.io.ObjectInputValidation,int) throws java.io.NotActiveException,java.io.InvalidObjectException */
			/* name */ 'registerValidation',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.io.ObjectInputValidation',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'prio',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.NotActiveException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.io.InvalidObjectException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected boolean java.io.ObjectInputStream.enableResolveObject(boolean) throws java.lang.SecurityException */
			/* name */ 'enableResolveObject',
			[/* parameters */
				[/* parameter */
					/* name */ 'sm',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.SecurityException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.io.ObjectInputFilter java.io.ObjectInputStream.getObjectInputFilter() */
			/* name */ 'getObjectInputFilter',
			/* parameters */,
			/* return */ 'java.io.ObjectInputFilter',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final void java.io.ObjectInputStream.setObjectInputFilter(java.io.ObjectInputFilter) */
			/* name */ 'setObjectInputFilter',
			[/* parameters */
				[/* parameter */
					/* name */ 'filter',
					/* type */ 'java.io.ObjectInputFilter',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
