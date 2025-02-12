import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.StringBuffer', [
	/* super class, extends java.lang.AbstractStringBuilder */
	'java.lang.AbstractStringBuilder',
	[/* interfaces, implements java.io.Serializable, java.lang.Comparable<java.lang.StringBuffer>, java.lang.CharSequence */
		'java.io.Serializable',
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.lang.StringBuffer'
			],
			/* raw type */ 'java.lang.Comparable',
			/* owner type */ UDF
		]],
		'java.lang.CharSequence'
	],
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.lang.StringBuffer(java.lang.CharSequence) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.StringBuffer(java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public java.lang.StringBuffer(int) */
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
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public java.lang.StringBuffer() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public synchronized int java.lang.StringBuffer.length() */
			/* name */ 'length',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.String java.lang.StringBuffer.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 33,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.append(char[]) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[C',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.StringBuffer java.lang.StringBuffer.append(int) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 33,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.StringBuffer java.lang.StringBuffer.append(long) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.StringBuffer java.lang.StringBuffer.append(float) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.StringBuffer java.lang.StringBuffer.append(char[]) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[C',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.StringBuffer java.lang.StringBuffer.append(char[],int,int) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[C',
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
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.StringBuffer java.lang.StringBuffer.append(boolean) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.StringBuffer java.lang.StringBuffer.append(char) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 33,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.append(int) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.append(long) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.append(float) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.append(double) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.StringBuffer java.lang.StringBuffer.append(double) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.append(char[],int,int) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[C',
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
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.append(boolean) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.append(char) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.append(java.lang.String) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.append(java.lang.StringBuffer) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.StringBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.append(java.lang.CharSequence) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Appendable java.lang.StringBuffer.append(java.lang.CharSequence) throws java.io.IOException */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Appendable',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Appendable java.lang.StringBuffer.append(java.lang.CharSequence,int,int) throws java.io.IOException */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.CharSequence',
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
			/* return */ 'java.lang.Appendable',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Appendable java.lang.StringBuffer.append(char) throws java.io.IOException */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Appendable',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 4161,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.append(java.lang.Object) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.StringBuffer java.lang.StringBuffer.append(java.lang.String) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 33,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.StringBuffer java.lang.StringBuffer.append(java.lang.StringBuffer) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.StringBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.StringBuffer java.lang.StringBuffer.append(java.lang.CharSequence,int,int) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.CharSequence',
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
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.StringBuffer java.lang.StringBuffer.append(java.lang.Object) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.append(java.lang.CharSequence,int,int) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.CharSequence',
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
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.StringBuffer java.lang.StringBuffer.append(java.lang.CharSequence) */
			/* name */ 'append',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized void java.lang.StringBuffer.getChars(int,int,char[],int) */
			/* name */ 'getChars',
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
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ '[C',
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
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized int java.lang.StringBuffer.compareTo(java.lang.StringBuffer) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.StringBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.StringBuffer.compareTo(java.lang.Object) */
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
		[/* public int java.lang.StringBuffer.indexOf(java.lang.String) */
			/* name */ 'indexOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
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
		[/* public synchronized int java.lang.StringBuffer.indexOf(java.lang.String,int) */
			/* name */ 'indexOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.insert(int,int) */
			/* name */ 'insert',
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
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.insert(int,char) */
			/* name */ 'insert',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.insert(int,boolean) */
			/* name */ 'insert',
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
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.insert(int,java.lang.CharSequence,int,int) */
			/* name */ 'insert',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.CharSequence',
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
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.insert(int,long) */
			/* name */ 'insert',
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
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.insert(int,float) */
			/* name */ 'insert',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.insert(int,double) */
			/* name */ 'insert',
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
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.insert(int,java.lang.Object) */
			/* name */ 'insert',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.insert(int,char[],int,int) */
			/* name */ 'insert',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ '[C',
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
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.StringBuffer java.lang.StringBuffer.insert(int,char[],int,int) */
			/* name */ 'insert',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ '[C',
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
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.StringBuffer java.lang.StringBuffer.insert(int,float) */
			/* name */ 'insert',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.insert(int,java.lang.String) */
			/* name */ 'insert',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.insert(int,char[]) */
			/* name */ 'insert',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ '[C',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.insert(int,java.lang.CharSequence) */
			/* name */ 'insert',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.StringBuffer java.lang.StringBuffer.insert(int,java.lang.CharSequence) */
			/* name */ 'insert',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.StringBuffer java.lang.StringBuffer.insert(int,double) */
			/* name */ 'insert',
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
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.StringBuffer java.lang.StringBuffer.insert(int,char[]) */
			/* name */ 'insert',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ '[C',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.StringBuffer java.lang.StringBuffer.insert(int,java.lang.String) */
			/* name */ 'insert',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.StringBuffer java.lang.StringBuffer.insert(int,boolean) */
			/* name */ 'insert',
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
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.StringBuffer java.lang.StringBuffer.insert(int,char) */
			/* name */ 'insert',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.StringBuffer java.lang.StringBuffer.insert(int,int) */
			/* name */ 'insert',
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
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.StringBuffer java.lang.StringBuffer.insert(int,long) */
			/* name */ 'insert',
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
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.StringBuffer java.lang.StringBuffer.insert(int,java.lang.Object) */
			/* name */ 'insert',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.StringBuffer java.lang.StringBuffer.insert(int,java.lang.CharSequence,int,int) */
			/* name */ 'insert',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.CharSequence',
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
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized char java.lang.StringBuffer.charAt(int) */
			/* name */ 'charAt',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'char',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized int java.lang.StringBuffer.codePointAt(int) */
			/* name */ 'codePointAt',
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized int java.lang.StringBuffer.codePointBefore(int) */
			/* name */ 'codePointBefore',
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized int java.lang.StringBuffer.codePointCount(int,int) */
			/* name */ 'codePointCount',
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
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized int java.lang.StringBuffer.offsetByCodePoints(int,int) */
			/* name */ 'offsetByCodePoints',
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
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized int java.lang.StringBuffer.lastIndexOf(java.lang.String,int) */
			/* name */ 'lastIndexOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.StringBuffer.lastIndexOf(java.lang.String) */
			/* name */ 'lastIndexOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
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
		[/* public synchronized java.lang.String java.lang.StringBuffer.substring(int,int) */
			/* name */ 'substring',
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
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.String java.lang.StringBuffer.substring(int) */
			/* name */ 'substring',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.replace(int,int,java.lang.String) */
			/* name */ 'replace',
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
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.StringBuffer java.lang.StringBuffer.replace(int,int,java.lang.String) */
			/* name */ 'replace',
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
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.IntStream java.lang.StringBuffer.codePoints() */
			/* name */ 'codePoints',
			/* parameters */,
			/* return */ 'java.util.stream.IntStream',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.CharSequence java.lang.StringBuffer.subSequence(int,int) */
			/* name */ 'subSequence',
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
			/* return */ 'java.lang.CharSequence',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.IntStream java.lang.StringBuffer.chars() */
			/* name */ 'chars',
			/* parameters */,
			/* return */ 'java.util.stream.IntStream',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.delete(int,int) */
			/* name */ 'delete',
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
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.StringBuffer java.lang.StringBuffer.delete(int,int) */
			/* name */ 'delete',
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
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized void java.lang.StringBuffer.setLength(int) */
			/* name */ 'setLength',
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized int java.lang.StringBuffer.capacity() */
			/* name */ 'capacity',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized void java.lang.StringBuffer.ensureCapacity(int) */
			/* name */ 'ensureCapacity',
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
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized void java.lang.StringBuffer.trimToSize() */
			/* name */ 'trimToSize',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized void java.lang.StringBuffer.setCharAt(int,char) */
			/* name */ 'setCharAt',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.appendCodePoint(int) */
			/* name */ 'appendCodePoint',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.StringBuffer java.lang.StringBuffer.appendCodePoint(int) */
			/* name */ 'appendCodePoint',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.StringBuffer java.lang.StringBuffer.deleteCharAt(int) */
			/* name */ 'deleteCharAt',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.deleteCharAt(int) */
			/* name */ 'deleteCharAt',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.StringBuffer java.lang.StringBuffer.reverse() */
			/* name */ 'reverse',
			/* parameters */,
			/* return */ 'java.lang.StringBuffer',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.AbstractStringBuilder java.lang.StringBuffer.reverse() */
			/* name */ 'reverse',
			/* parameters */,
			/* return */ 'java.lang.AbstractStringBuilder',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
