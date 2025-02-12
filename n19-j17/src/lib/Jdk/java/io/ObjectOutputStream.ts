import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.io.ObjectOutputStream', [
	/* super class, extends java.io.OutputStream */
	'java.io.OutputStream',
	[/* interfaces, implements java.io.ObjectOutput, java.io.ObjectStreamConstants */
		'java.io.ObjectOutput',
		'java.io.ObjectStreamConstants'
	],
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* protected java.io.ObjectOutputStream() throws java.io.IOException,java.lang.SecurityException */
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
		],
		[/* public java.io.ObjectOutputStream(java.io.OutputStream) throws java.io.IOException */
			[/* parameters */
				[/* parameter */
					/* name */ 'out',
					/* type */ 'java.io.OutputStream',
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
		]
	],
	[/* declared methods */
		[/* protected boolean java.io.ObjectOutputStream.enableReplaceObject(boolean) throws java.lang.SecurityException */
			/* name */ 'enableReplaceObject',
			[/* parameters */
				[/* parameter */
					/* name */ 'enable',
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
		[/* protected java.lang.Object java.io.ObjectOutputStream.replaceObject(java.lang.Object) throws java.io.IOException */
			/* name */ 'replaceObject',
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
		[/* protected void java.io.ObjectOutputStream.annotateClass(java.lang.Class<?>) throws java.io.IOException */
			/* name */ 'annotateClass',
			[/* parameters */
				[/* parameter */
					/* name */ 'cl',
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
				]
			],
			/* return */ 'void',
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
		[/* protected void java.io.ObjectOutputStream.annotateProxyClass(java.lang.Class<?>) throws java.io.IOException */
			/* name */ 'annotateProxyClass',
			[/* parameters */
				[/* parameter */
					/* name */ 'cl',
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
				]
			],
			/* return */ 'void',
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
		[/* protected void java.io.ObjectOutputStream.drain() throws java.io.IOException */
			/* name */ 'drain',
			/* parameters */,
			/* return */ 'void',
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
		[/* protected void java.io.ObjectOutputStream.writeClassDescriptor(java.io.ObjectStreamClass) throws java.io.IOException */
			/* name */ 'writeClassDescriptor',
			[/* parameters */
				[/* parameter */
					/* name */ 'desc',
					/* type */ 'java.io.ObjectStreamClass',
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
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected void java.io.ObjectOutputStream.writeObjectOverride(java.lang.Object) throws java.io.IOException */
			/* name */ 'writeObjectOverride',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
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
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected void java.io.ObjectOutputStream.writeStreamHeader() throws java.io.IOException */
			/* name */ 'writeStreamHeader',
			/* parameters */,
			/* return */ 'void',
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
		[/* public final void java.io.ObjectOutputStream.writeObject(java.lang.Object) throws java.io.IOException */
			/* name */ 'writeObject',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
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
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.ObjectOutputStream$PutField java.io.ObjectOutputStream.putFields() throws java.io.IOException */
			/* name */ 'putFields',
			/* parameters */,
			/* return */ 'java.io.ObjectOutputStream$PutField',
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
		[/* public void java.io.ObjectOutputStream.close() throws java.io.IOException */
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
		[/* public void java.io.ObjectOutputStream.defaultWriteObject() throws java.io.IOException */
			/* name */ 'defaultWriteObject',
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
		[/* public void java.io.ObjectOutputStream.flush() throws java.io.IOException */
			/* name */ 'flush',
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
		[/* public void java.io.ObjectOutputStream.reset() throws java.io.IOException */
			/* name */ 'reset',
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
		[/* public void java.io.ObjectOutputStream.useProtocolVersion(int) throws java.io.IOException */
			/* name */ 'useProtocolVersion',
			[/* parameters */
				[/* parameter */
					/* name */ 'version',
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
		[/* public void java.io.ObjectOutputStream.write(byte[]) throws java.io.IOException */
			/* name */ 'write',
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
		[/* public void java.io.ObjectOutputStream.write(byte[],int,int) throws java.io.IOException */
			/* name */ 'write',
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
		[/* public void java.io.ObjectOutputStream.write(int) throws java.io.IOException */
			/* name */ 'write',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
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
		[/* public void java.io.ObjectOutputStream.writeBoolean(boolean) throws java.io.IOException */
			/* name */ 'writeBoolean',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'boolean',
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
		[/* public void java.io.ObjectOutputStream.writeByte(int) throws java.io.IOException */
			/* name */ 'writeByte',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
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
		[/* public void java.io.ObjectOutputStream.writeBytes(java.lang.String) throws java.io.IOException */
			/* name */ 'writeBytes',
			[/* parameters */
				[/* parameter */
					/* name */ 'str',
					/* type */ 'java.lang.String',
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
		[/* public void java.io.ObjectOutputStream.writeChar(int) throws java.io.IOException */
			/* name */ 'writeChar',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
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
		[/* public void java.io.ObjectOutputStream.writeChars(java.lang.String) throws java.io.IOException */
			/* name */ 'writeChars',
			[/* parameters */
				[/* parameter */
					/* name */ 'str',
					/* type */ 'java.lang.String',
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
		[/* public void java.io.ObjectOutputStream.writeDouble(double) throws java.io.IOException */
			/* name */ 'writeDouble',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'double',
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
		[/* public void java.io.ObjectOutputStream.writeFields() throws java.io.IOException */
			/* name */ 'writeFields',
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
		[/* public void java.io.ObjectOutputStream.writeFloat(float) throws java.io.IOException */
			/* name */ 'writeFloat',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'float',
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
		[/* public void java.io.ObjectOutputStream.writeInt(int) throws java.io.IOException */
			/* name */ 'writeInt',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
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
		[/* public void java.io.ObjectOutputStream.writeLong(long) throws java.io.IOException */
			/* name */ 'writeLong',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'long',
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
		[/* public void java.io.ObjectOutputStream.writeShort(int) throws java.io.IOException */
			/* name */ 'writeShort',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
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
		[/* public void java.io.ObjectOutputStream.writeUTF(java.lang.String) throws java.io.IOException */
			/* name */ 'writeUTF',
			[/* parameters */
				[/* parameter */
					/* name */ 'str',
					/* type */ 'java.lang.String',
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
		[/* public void java.io.ObjectOutputStream.writeUnshared(java.lang.Object) throws java.io.IOException */
			/* name */ 'writeUnshared',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
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
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
