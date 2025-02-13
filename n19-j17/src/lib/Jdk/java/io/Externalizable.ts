import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.io.Externalizable', [
	/* super class */,
	[/* interfaces, implements java.io.Serializable */
		'java.io.Serializable'
	],
	/* modifiers */ 1537,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
			[/* public abstract void java.io.Externalizable.readExternal(java.io.ObjectInput) throws java.io.IOException,java.lang.ClassNotFoundException */
			/* name */ 'readExternal',
			[/* parameters */
				[/* parameter */
					/* name */ 'in',
					/* type */ 'java.io.ObjectInput',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.lang.ClassNotFoundException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract void java.io.Externalizable.writeExternal(java.io.ObjectOutput) throws java.io.IOException */
			/* name */ 'writeExternal',
			[/* parameters */
				[/* parameter */
					/* name */ 'out',
					/* type */ 'java.io.ObjectOutput',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
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
