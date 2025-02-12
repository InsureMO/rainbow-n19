import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.ModuleLayer$Controller', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 25,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public java.lang.ModuleLayer$Controller java.lang.ModuleLayer$Controller.addReads(java.lang.Module,java.lang.Module) */
			/* name */ 'addReads',
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.lang.Module',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.Module',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ModuleLayer$Controller',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ModuleLayer$Controller java.lang.ModuleLayer$Controller.addExports(java.lang.Module,java.lang.String,java.lang.Module) */
			/* name */ 'addExports',
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.lang.Module',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'pn',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.Module',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ModuleLayer$Controller',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ModuleLayer$Controller java.lang.ModuleLayer$Controller.addOpens(java.lang.Module,java.lang.String,java.lang.Module) */
			/* name */ 'addOpens',
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.lang.Module',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'pn',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.lang.Module',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ModuleLayer$Controller',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ModuleLayer java.lang.ModuleLayer$Controller.layer() */
			/* name */ 'layer',
			/* parameters */,
			/* return */ 'java.lang.ModuleLayer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
