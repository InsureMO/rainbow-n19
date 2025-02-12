import {UDF} from '../../../../../utils';
import {JdkClassCreateHelper} from '../../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.nio.file.attribute.UserPrincipalLookupService', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* protected java.nio.file.attribute.UserPrincipalLookupService() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public abstract java.nio.file.attribute.UserPrincipal java.nio.file.attribute.UserPrincipalLookupService.lookupPrincipalByName(java.lang.String) throws java.io.IOException */
			/* name */ 'lookupPrincipalByName',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.file.attribute.UserPrincipal',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.file.attribute.GroupPrincipal java.nio.file.attribute.UserPrincipalLookupService.lookupPrincipalByGroupName(java.lang.String) throws java.io.IOException */
			/* name */ 'lookupPrincipalByGroupName',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.file.attribute.GroupPrincipal',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
