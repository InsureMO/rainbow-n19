import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.io.FileFilter', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1537,
	[/* declared annotations */
		['java.lang.FunctionalInterface']
	],
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract boolean java.io.FileFilter.accept(java.io.File) */
			/* name */ 'accept',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.io.File',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
