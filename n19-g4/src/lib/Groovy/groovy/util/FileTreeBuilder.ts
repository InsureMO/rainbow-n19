import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.util.FileTreeBuilder', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements groovy.lang.GroovyObject */
		'groovy.lang.GroovyObject'
	],
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public groovy.util.FileTreeBuilder() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				['groovy.transform.Generated']
			],
			/* type parameters */ UDF
		],
		[/* public groovy.util.FileTreeBuilder(java.io.File) */
			[/* parameters */
				[/* parameter */
					/* name */ 'baseDir',
					/* type */ 'java.io.File',
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
		[/* public java.io.File groovy.util.FileTreeBuilder.call(groovy.lang.Closure) */
			/* name */ 'call',
			[/* parameters */
				[/* parameter */
					/* name */ 'spec',
					/* type */ 'groovy.lang.Closure',
					/* modifiers */ 0,
					[/* annotations */
						[
							'groovy.lang.DelegatesTo',
							['p', 'type', ''],
							['p', 'value', 'groovy.util.FileTreeBuilder'],
							['p', 'target', ''],
							['p', 'strategy', 1],
							['p', 'genericTypeIndex', -1]
						]
					]
				]
			],
			/* return */ 'java.io.File',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.File groovy.util.FileTreeBuilder.dir(java.lang.String) */
			/* name */ 'dir',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.io.File',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.File groovy.util.FileTreeBuilder.dir(java.lang.String,groovy.lang.Closure) */
			/* name */ 'dir',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'spec',
					/* type */ 'groovy.lang.Closure',
					/* modifiers */ 0,
					[/* annotations */
						[
							'groovy.lang.DelegatesTo',
							['p', 'type', ''],
							['p', 'value', 'groovy.util.FileTreeBuilder'],
							['p', 'target', ''],
							['p', 'strategy', 1],
							['p', 'genericTypeIndex', -1]
						]
					]
				]
			],
			/* return */ 'java.io.File',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.File groovy.util.FileTreeBuilder.file(java.lang.String,byte...) */
			/* name */ 'file',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'contents',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.io.File',
			/* exceptions */,
			/* modifiers */ 129,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.File groovy.util.FileTreeBuilder.file(java.lang.String,groovy.lang.Closure) */
			/* name */ 'file',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'spec',
					/* type */ 'groovy.lang.Closure',
					/* modifiers */ 0,
					[/* annotations */
						[
							'groovy.transform.stc.ClosureParams',
							['p', 'value', 'groovy.transform.stc.FromString'],
							['p', 'options', ['File']],
							['p', 'conflictResolutionStrategy', 'groovy.transform.stc.ClosureSignatureConflictResolver']
						],
						[
							'groovy.lang.DelegatesTo',
							['p', 'type', ''],
							['p', 'value', 'java.io.File'],
							['p', 'target', ''],
							['p', 'strategy', 1],
							['p', 'genericTypeIndex', -1]
						]
					]
				]
			],
			/* return */ 'java.io.File',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.File groovy.util.FileTreeBuilder.file(java.lang.String,java.io.File) */
			/* name */ 'file',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.io.File',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.io.File',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.File groovy.util.FileTreeBuilder.file(java.lang.String,java.lang.CharSequence) */
			/* name */ 'file',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'contents',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.io.File',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.File groovy.util.FileTreeBuilder.getBaseDir() */
			/* name */ 'getBaseDir',
			/* parameters */,
			/* return */ 'java.io.File',
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				['groovy.transform.Generated']
			],
			/* type parameters */ UDF
		],
		[/* public java.lang.Object groovy.util.FileTreeBuilder.methodMissing(java.lang.String,java.lang.Object) */
			/* name */ 'methodMissing',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'args',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void groovy.util.FileTreeBuilder.setBaseDir(java.io.File) */
			/* name */ 'setBaseDir',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.io.File',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				['groovy.transform.Generated']
			],
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static transient boolean groovy.util.FileTreeBuilder.__$stMC */
			/* name */ '__$stMC',
			/* type */ 'boolean',
			/* annotations */ UDF,
			/* modifiers */ 4233
		]
	],
	/* enum values */ UDF
]);
