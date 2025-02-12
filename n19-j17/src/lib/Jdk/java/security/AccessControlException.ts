import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.security.AccessControlException', [
	/* super class, extends java.lang.SecurityException */
	'java.lang.SecurityException',
	/* interfaces */,
	/* modifiers */ 1,
	[/* declared annotations */
		[
			'java.lang.Deprecated',
			['p', 'since', '17'],
			['p', 'forRemoval', true]
		]
	],
	/* type parameters */,
	[/* declared constructors */
		[/* public java.security.AccessControlException(java.lang.String) */
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
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.security.AccessControlException(java.lang.String,java.security.Permission) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.security.Permission',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public java.security.Permission java.security.AccessControlException.getPermission() */
			/* name */ 'getPermission',
			/* parameters */,
			/* return */ 'java.security.Permission',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
