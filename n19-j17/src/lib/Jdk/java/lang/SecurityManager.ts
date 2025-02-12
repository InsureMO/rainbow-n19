import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.SecurityManager', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
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
		[/* public java.lang.SecurityManager() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* protected native java.lang.Class<?>[] java.lang.SecurityManager.getClassContext() */
			/* name */ 'getClassContext',
			/* parameters */,
			/* return */ [/* generic array type */ 'ga', [[/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]]
				],
				/* raw type */ 'java.lang.Class',
				/* owner type */ UDF
			]]]],
			/* exceptions */,
			/* modifiers */ 260,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object java.lang.SecurityManager.getSecurityContext() */
			/* name */ 'getSecurityContext',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ThreadGroup java.lang.SecurityManager.getThreadGroup() */
			/* name */ 'getThreadGroup',
			/* parameters */,
			/* return */ 'java.lang.ThreadGroup',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkAccept(java.lang.String,int) */
			/* name */ 'checkAccept',
			[/* parameters */
				[/* parameter */
					/* name */ 'host',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'port',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkAccess(java.lang.Thread) */
			/* name */ 'checkAccess',
			[/* parameters */
				[/* parameter */
					/* name */ 't',
					/* type */ 'java.lang.Thread',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkAccess(java.lang.ThreadGroup) */
			/* name */ 'checkAccess',
			[/* parameters */
				[/* parameter */
					/* name */ 'g',
					/* type */ 'java.lang.ThreadGroup',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkConnect(java.lang.String,int) */
			/* name */ 'checkConnect',
			[/* parameters */
				[/* parameter */
					/* name */ 'host',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'port',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkConnect(java.lang.String,int,java.lang.Object) */
			/* name */ 'checkConnect',
			[/* parameters */
				[/* parameter */
					/* name */ 'host',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'port',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'context',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkCreateClassLoader() */
			/* name */ 'checkCreateClassLoader',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkDelete(java.lang.String) */
			/* name */ 'checkDelete',
			[/* parameters */
				[/* parameter */
					/* name */ 'file',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkExec(java.lang.String) */
			/* name */ 'checkExec',
			[/* parameters */
				[/* parameter */
					/* name */ 'cmd',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkExit(int) */
			/* name */ 'checkExit',
			[/* parameters */
				[/* parameter */
					/* name */ 'status',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkLink(java.lang.String) */
			/* name */ 'checkLink',
			[/* parameters */
				[/* parameter */
					/* name */ 'lib',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkListen(int) */
			/* name */ 'checkListen',
			[/* parameters */
				[/* parameter */
					/* name */ 'port',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkMulticast(java.net.InetAddress) */
			/* name */ 'checkMulticast',
			[/* parameters */
				[/* parameter */
					/* name */ 'maddr',
					/* type */ 'java.net.InetAddress',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkMulticast(java.net.InetAddress,byte) */
			/* name */ 'checkMulticast',
			[/* parameters */
				[/* parameter */
					/* name */ 'maddr',
					/* type */ 'java.net.InetAddress',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'ttl',
					/* type */ 'byte',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '1.4'],
					['p', 'forRemoval', true]
				]
			],
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkPackageAccess(java.lang.String) */
			/* name */ 'checkPackageAccess',
			[/* parameters */
				[/* parameter */
					/* name */ 'tmpPropertyStr',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkPackageDefinition(java.lang.String) */
			/* name */ 'checkPackageDefinition',
			[/* parameters */
				[/* parameter */
					/* name */ 'tmpPropertyStr',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkPermission(java.security.Permission) */
			/* name */ 'checkPermission',
			[/* parameters */
				[/* parameter */
					/* name */ 'perm',
					/* type */ 'java.security.Permission',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkPermission(java.security.Permission,java.lang.Object) */
			/* name */ 'checkPermission',
			[/* parameters */
				[/* parameter */
					/* name */ 'perm',
					/* type */ 'java.security.Permission',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'context',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkPrintJobAccess() */
			/* name */ 'checkPrintJobAccess',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkPropertiesAccess() */
			/* name */ 'checkPropertiesAccess',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkPropertyAccess(java.lang.String) */
			/* name */ 'checkPropertyAccess',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkRead(java.io.FileDescriptor) */
			/* name */ 'checkRead',
			[/* parameters */
				[/* parameter */
					/* name */ 'fd',
					/* type */ 'java.io.FileDescriptor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkRead(java.lang.String) */
			/* name */ 'checkRead',
			[/* parameters */
				[/* parameter */
					/* name */ 'file',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkRead(java.lang.String,java.lang.Object) */
			/* name */ 'checkRead',
			[/* parameters */
				[/* parameter */
					/* name */ 'file',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'context',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkSecurityAccess(java.lang.String) */
			/* name */ 'checkSecurityAccess',
			[/* parameters */
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkSetFactory() */
			/* name */ 'checkSetFactory',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkWrite(java.io.FileDescriptor) */
			/* name */ 'checkWrite',
			[/* parameters */
				[/* parameter */
					/* name */ 'fd',
					/* type */ 'java.io.FileDescriptor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.lang.SecurityManager.checkWrite(java.lang.String) */
			/* name */ 'checkWrite',
			[/* parameters */
				[/* parameter */
					/* name */ 'file',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
