import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.InheritableThreadLocal', [
	/* super class, extends java.lang.ThreadLocal<T> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			[/* type variable ref */ 'tr', [/* name */ 'T']]
		],
		/* raw type */ 'java.lang.ThreadLocal',
		/* owner type */ UDF
	]],
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	[/* type parameters */
		[/* type variable */
			/* name */ 'T',
			[/* bounds */
				'java.lang.Object'
			],
			/* annotations */ UDF
		]
	],
	[/* declared constructors */
		[/* public java.lang.InheritableThreadLocal() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* protected T java.lang.InheritableThreadLocal.childValue(T) */
			/* name */ 'childValue',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T']],
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
