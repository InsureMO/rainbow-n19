import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.text.Normalizer$Form', [
	/* super class, extends java.lang.Enum<java.text.Normalizer$Form> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.text.Normalizer$Form'
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
		[/* public static java.text.Normalizer$Form java.text.Normalizer$Form.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.text.Normalizer$Form',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.text.Normalizer$Form[] java.text.Normalizer$Form.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.text.Normalizer$Form;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['NFD', 0],
		['NFC', 1],
		['NFKD', 2],
		['NFKC', 3]
	]
]);
