import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.io.FileDescriptor', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.io.FileDescriptor() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public boolean java.io.FileDescriptor.valid() */
			/* name */ 'valid',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public native void java.io.FileDescriptor.sync() throws java.io.SyncFailedException */
			/* name */ 'sync',
			/* parameters */,
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.SyncFailedException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 257,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final java.io.FileDescriptor java.io.FileDescriptor.in */
			/* name */ 'in',
			/* type */ 'java.io.FileDescriptor',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.io.FileDescriptor java.io.FileDescriptor.out */
			/* name */ 'out',
			/* type */ 'java.io.FileDescriptor',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.io.FileDescriptor java.io.FileDescriptor.err */
			/* name */ 'err',
			/* type */ 'java.io.FileDescriptor',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
