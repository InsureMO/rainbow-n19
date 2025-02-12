import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.annotation.ElementType', [
	/* super class, extends java.lang.Enum<java.lang.annotation.ElementType> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.lang.annotation.ElementType'
		],
		/* raw type */ 'java.lang.Enum',
		/* owner type */ UDF
	]],
	/* interfaces */,
	/* modifiers */ 16401,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public static java.lang.annotation.ElementType[] java.lang.annotation.ElementType.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.lang.annotation.ElementType;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.annotation.ElementType java.lang.annotation.ElementType.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.annotation.ElementType',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['TYPE', 0],
		['FIELD', 1],
		['METHOD', 2],
		['PARAMETER', 3],
		['CONSTRUCTOR', 4],
		['LOCAL_VARIABLE', 5],
		['ANNOTATION_TYPE', 6],
		['PACKAGE', 7],
		['TYPE_PARAMETER', 8],
		['TYPE_USE', 9],
		['MODULE', 10],
		['RECORD_COMPONENT', 11]
	]
]);
