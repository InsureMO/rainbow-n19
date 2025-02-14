import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.invoke.MethodHandles$Lookup$ClassOption', [
	/* super class, extends java.lang.Enum<java.lang.invoke.MethodHandles$Lookup$ClassOption> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.lang.invoke.MethodHandles$Lookup$ClassOption'
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
		[/* public static java.lang.invoke.MethodHandles$Lookup$ClassOption java.lang.invoke.MethodHandles$Lookup$ClassOption.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.invoke.MethodHandles$Lookup$ClassOption',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.invoke.MethodHandles$Lookup$ClassOption[] java.lang.invoke.MethodHandles$Lookup$ClassOption.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.lang.invoke.MethodHandles$Lookup$ClassOption;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['NESTMATE', 0],
		['STRONG', 1]
	]
]);
