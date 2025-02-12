import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.nio.ByteOrder', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public java.lang.String java.nio.ByteOrder.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.nio.ByteOrder java.nio.ByteOrder.nativeOrder() */
			/* name */ 'nativeOrder',
			/* parameters */,
			/* return */ 'java.nio.ByteOrder',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final java.nio.ByteOrder java.nio.ByteOrder.BIG_ENDIAN */
			/* name */ 'BIG_ENDIAN',
			/* type */ 'java.nio.ByteOrder',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.nio.ByteOrder java.nio.ByteOrder.LITTLE_ENDIAN */
			/* name */ 'LITTLE_ENDIAN',
			/* type */ 'java.nio.ByteOrder',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
