import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.security.ProtectionDomain', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.security.ProtectionDomain(java.security.CodeSource,java.security.PermissionCollection) */
			[/* parameters */
				[/* parameter */
					/* name */ 'codesource',
					/* type */ 'java.security.CodeSource',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'permissions',
					/* type */ 'java.security.PermissionCollection',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.security.ProtectionDomain(java.security.CodeSource,java.security.PermissionCollection,java.lang.ClassLoader,java.security.Principal[]) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.security.CodeSource',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.security.PermissionCollection',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'java.lang.ClassLoader',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg3',
					/* type */ '[Ljava.security.Principal;',
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
		[/* public java.lang.String java.security.ProtectionDomain.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.ClassLoader java.security.ProtectionDomain.getClassLoader() */
			/* name */ 'getClassLoader',
			/* parameters */,
			/* return */ 'java.lang.ClassLoader',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.security.CodeSource java.security.ProtectionDomain.getCodeSource() */
			/* name */ 'getCodeSource',
			/* parameters */,
			/* return */ 'java.security.CodeSource',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.security.ProtectionDomain.implies(java.security.Permission) */
			/* name */ 'implies',
			[/* parameters */
				[/* parameter */
					/* name */ 'perm',
					/* type */ 'java.security.Permission',
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
		[/* public final java.security.PermissionCollection java.security.ProtectionDomain.getPermissions() */
			/* name */ 'getPermissions',
			/* parameters */,
			/* return */ 'java.security.PermissionCollection',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.security.Principal[] java.security.ProtectionDomain.getPrincipals() */
			/* name */ 'getPrincipals',
			/* parameters */,
			/* return */ '[Ljava.security.Principal;',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final boolean java.security.ProtectionDomain.staticPermissionsOnly() */
			/* name */ 'staticPermissionsOnly',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
