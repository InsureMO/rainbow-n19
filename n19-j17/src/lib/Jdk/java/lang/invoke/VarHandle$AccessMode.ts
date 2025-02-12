import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.invoke.VarHandle$AccessMode', [
	/* super class, extends java.lang.Enum<java.lang.invoke.VarHandle$AccessMode> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.lang.invoke.VarHandle$AccessMode'
		],
		/* raw type */ 'java.lang.Enum',
		/* owner type */ UDF
	]],
	/* interfaces */,
	/* modifiers */ 16409,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public static java.lang.invoke.VarHandle$AccessMode[] java.lang.invoke.VarHandle$AccessMode.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.lang.invoke.VarHandle$AccessMode;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.invoke.VarHandle$AccessMode.methodName() */
			/* name */ 'methodName',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.VarHandle$AccessMode java.lang.invoke.VarHandle$AccessMode.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.VarHandle$AccessMode',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.VarHandle$AccessMode java.lang.invoke.VarHandle$AccessMode.valueFromMethodName(java.lang.String) */
			/* name */ 'valueFromMethodName',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.VarHandle$AccessMode',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['GET', 0],
		['SET', 1],
		['GET_VOLATILE', 2],
		['SET_VOLATILE', 3],
		['GET_ACQUIRE', 4],
		['SET_RELEASE', 5],
		['GET_OPAQUE', 6],
		['SET_OPAQUE', 7],
		['COMPARE_AND_SET', 8],
		['COMPARE_AND_EXCHANGE', 9],
		['COMPARE_AND_EXCHANGE_ACQUIRE', 10],
		['COMPARE_AND_EXCHANGE_RELEASE', 11],
		['WEAK_COMPARE_AND_SET_PLAIN', 12],
		['WEAK_COMPARE_AND_SET', 13],
		['WEAK_COMPARE_AND_SET_ACQUIRE', 14],
		['WEAK_COMPARE_AND_SET_RELEASE', 15],
		['GET_AND_SET', 16],
		['GET_AND_SET_ACQUIRE', 17],
		['GET_AND_SET_RELEASE', 18],
		['GET_AND_ADD', 19],
		['GET_AND_ADD_ACQUIRE', 20],
		['GET_AND_ADD_RELEASE', 21],
		['GET_AND_BITWISE_OR', 22],
		['GET_AND_BITWISE_OR_RELEASE', 23],
		['GET_AND_BITWISE_OR_ACQUIRE', 24],
		['GET_AND_BITWISE_AND', 25],
		['GET_AND_BITWISE_AND_RELEASE', 26],
		['GET_AND_BITWISE_AND_ACQUIRE', 27],
		['GET_AND_BITWISE_XOR', 28],
		['GET_AND_BITWISE_XOR_RELEASE', 29],
		['GET_AND_BITWISE_XOR_ACQUIRE', 30]
	]
]);
