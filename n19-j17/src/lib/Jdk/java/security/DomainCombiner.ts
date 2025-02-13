import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.security.DomainCombiner', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1537,
	[/* declared annotations */
		[
			'java.lang.Deprecated',
			['p', 'since', '17'],
			['p', 'forRemoval', true]
		]
	],
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract java.security.ProtectionDomain[] java.security.DomainCombiner.combine(java.security.ProtectionDomain[],java.security.ProtectionDomain[]) */
			/* name */ 'combine',
			[/* parameters */
				[/* parameter */
					/* name */ 'currentDomains',
					/* type */ '[Ljava.security.ProtectionDomain;',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'assignedDomains',
					/* type */ '[Ljava.security.ProtectionDomain;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ '[Ljava.security.ProtectionDomain;',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
