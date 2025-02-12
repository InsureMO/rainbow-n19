import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.security.AccessControlContext', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 17,
	[/* declared annotations */
		[
			'java.lang.Deprecated',
			['p', 'since', '17'],
			['p', 'forRemoval', true]
		]
	],
	/* type parameters */,
	[/* declared constructors */
		[/* public java.security.AccessControlContext(java.security.AccessControlContext,java.security.DomainCombiner) */
			[/* parameters */
				[/* parameter */
					/* name */ 'acc',
					/* type */ 'java.security.AccessControlContext',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'combiner',
					/* type */ 'java.security.DomainCombiner',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.security.AccessControlContext(java.security.ProtectionDomain[]) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.security.ProtectionDomain;',
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
		[/* public boolean java.security.AccessControlContext.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'that',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.security.AccessControlContext.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.security.AccessControlContext.checkPermission(java.security.Permission) throws java.security.AccessControlException */
			/* name */ 'checkPermission',
			[/* parameters */
				[/* parameter */
					/* name */ 'i',
					/* type */ 'java.security.Permission',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.security.AccessControlException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.security.DomainCombiner java.security.AccessControlContext.getDomainCombiner() */
			/* name */ 'getDomainCombiner',
			/* parameters */,
			/* return */ 'java.security.DomainCombiner',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
