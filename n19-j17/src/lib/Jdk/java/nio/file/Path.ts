import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.nio.file.Path', [
	/* super class */,
	[/* interfaces, implements java.lang.Comparable<java.nio.file.Path>, java.lang.Iterable<java.nio.file.Path>, java.nio.file.Watchable */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.nio.file.Path'
			],
			/* raw type */ 'java.lang.Comparable',
			/* owner type */ UDF
		]],
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.nio.file.Path'
			],
			/* raw type */ 'java.lang.Iterable',
			/* owner type */ UDF
		]],
		'java.nio.file.Watchable'
	],
	/* modifiers */ 1537,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract java.nio.file.Path java.nio.file.Path.getName(int) */
			/* name */ 'getName',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.file.Path',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.nio.file.Path.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.String java.nio.file.Path.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.nio.file.Path.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.nio.file.Path.compareTo(java.nio.file.Path) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default int java.nio.file.Path.compareTo(java.lang.Object) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default boolean java.nio.file.Path.startsWith(java.lang.String) */
			/* name */ 'startsWith',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
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
		[/* public abstract boolean java.nio.file.Path.startsWith(java.nio.file.Path) */
			/* name */ 'startsWith',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.Iterator<java.nio.file.Path> java.nio.file.Path.iterator() */
			/* name */ 'iterator',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.nio.file.Path'
				],
				/* raw type */ 'java.util.Iterator',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.nio.file.Path java.nio.file.Path.of(java.lang.String,java.lang.String...) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ '[Ljava.lang.String;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.file.Path',
			/* exceptions */,
			/* modifiers */ 137,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.nio.file.Path java.nio.file.Path.of(java.net.URI) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.net.URI',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.file.Path',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.nio.file.Path.endsWith(java.nio.file.Path) */
			/* name */ 'endsWith',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default boolean java.nio.file.Path.endsWith(java.lang.String) */
			/* name */ 'endsWith',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
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
		[/* public default java.nio.file.WatchKey java.nio.file.Path.register(java.nio.file.WatchService,java.nio.file.WatchEvent$Kind<?>...) throws java.io.IOException */
			/* name */ 'register',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.file.WatchService',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* generic array type */ 'ga', [[/* parameterized type */ 'pt', [
	[/* actual argument types */
		[/* wildcard type */ 'wt', [
			[/* upper bounds */
				'java.lang.Object'
			],
			/* lower bounds */ UDF
		]]
	],
	/* raw type */ 'java.nio.file.WatchEvent$Kind',
	/* owner type */ 'java.nio.file.WatchEvent'
]]]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.file.WatchKey',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 129,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.file.WatchKey java.nio.file.Path.register(java.nio.file.WatchService,java.nio.file.WatchEvent$Kind<?>[],java.nio.file.WatchEvent$Modifier...) throws java.io.IOException */
			/* name */ 'register',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.file.WatchService',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* generic array type */ 'ga', [[/* parameterized type */ 'pt', [
	[/* actual argument types */
		[/* wildcard type */ 'wt', [
			[/* upper bounds */
				'java.lang.Object'
			],
			/* lower bounds */ UDF
		]]
	],
	/* raw type */ 'java.nio.file.WatchEvent$Kind',
	/* owner type */ 'java.nio.file.WatchEvent'
]]]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ '[Ljava.nio.file.WatchEvent$Modifier;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.file.WatchKey',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1153,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.nio.file.Path.isAbsolute() */
			/* name */ 'isAbsolute',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.nio.file.Path java.nio.file.Path.resolve(java.lang.String) */
			/* name */ 'resolve',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.file.Path',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.file.Path java.nio.file.Path.resolve(java.nio.file.Path) */
			/* name */ 'resolve',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.file.Path',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.file.Path java.nio.file.Path.getParent() */
			/* name */ 'getParent',
			/* parameters */,
			/* return */ 'java.nio.file.Path',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.file.Path java.nio.file.Path.getRoot() */
			/* name */ 'getRoot',
			/* parameters */,
			/* return */ 'java.nio.file.Path',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.file.Path java.nio.file.Path.normalize() */
			/* name */ 'normalize',
			/* parameters */,
			/* return */ 'java.nio.file.Path',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.file.Path java.nio.file.Path.toRealPath(java.nio.file.LinkOption...) throws java.io.IOException */
			/* name */ 'toRealPath',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[Ljava.nio.file.LinkOption;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.file.Path',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1153,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.io.File java.nio.file.Path.toFile() */
			/* name */ 'toFile',
			/* parameters */,
			/* return */ 'java.io.File',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.file.Path java.nio.file.Path.getFileName() */
			/* name */ 'getFileName',
			/* parameters */,
			/* return */ 'java.nio.file.Path',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.file.FileSystem java.nio.file.Path.getFileSystem() */
			/* name */ 'getFileSystem',
			/* parameters */,
			/* return */ 'java.nio.file.FileSystem',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.file.Path java.nio.file.Path.relativize(java.nio.file.Path) */
			/* name */ 'relativize',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.file.Path',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.nio.file.Path java.nio.file.Path.resolveSibling(java.nio.file.Path) */
			/* name */ 'resolveSibling',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.file.Path',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.nio.file.Path java.nio.file.Path.resolveSibling(java.lang.String) */
			/* name */ 'resolveSibling',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.file.Path',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.nio.file.Path.getNameCount() */
			/* name */ 'getNameCount',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.file.Path java.nio.file.Path.subpath(int,int) */
			/* name */ 'subpath',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.file.Path',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.net.URI java.nio.file.Path.toUri() */
			/* name */ 'toUri',
			/* parameters */,
			/* return */ 'java.net.URI',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.file.Path java.nio.file.Path.toAbsolutePath() */
			/* name */ 'toAbsolutePath',
			/* parameters */,
			/* return */ 'java.nio.file.Path',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
