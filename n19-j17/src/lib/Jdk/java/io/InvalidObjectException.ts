import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.io.InvalidObjectException', [
	/* super class, extends java.io.ObjectStreamException */
	'java.io.ObjectStreamException',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.io.InvalidObjectException(java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'reason',
					/* type */ 'java.lang.String',
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
	/* declared methods */,
	/* declared fields */,
	/* enum values */ UDF
]);
