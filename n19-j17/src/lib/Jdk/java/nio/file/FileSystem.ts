import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.nio.file.FileSystem', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.io.Closeable */
		'java.io.Closeable'
	],
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* protected java.nio.file.FileSystem() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public abstract boolean java.nio.file.FileSystem.isOpen() */
			/* name */ 'isOpen',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.file.spi.FileSystemProvider java.nio.file.FileSystem.provider() */
			/* name */ 'provider',
			/* parameters */,
			/* return */ 'java.nio.file.spi.FileSystemProvider',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract void java.nio.file.FileSystem.close() throws java.io.IOException */
			/* name */ 'close',
			/* parameters */,
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
		],
		[/* public abstract java.nio.file.Path java.nio.file.FileSystem.getPath(java.lang.String,java.lang.String...) */
			/* name */ 'getPath',
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
			/* modifiers */ 1153,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.nio.file.FileSystem.isReadOnly() */
			/* name */ 'isReadOnly',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.String java.nio.file.FileSystem.getSeparator() */
			/* name */ 'getSeparator',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.Iterable<java.nio.file.Path> java.nio.file.FileSystem.getRootDirectories() */
			/* name */ 'getRootDirectories',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.nio.file.Path'
				],
				/* raw type */ 'java.lang.Iterable',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.Iterable<java.nio.file.FileStore> java.nio.file.FileSystem.getFileStores() */
			/* name */ 'getFileStores',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.nio.file.FileStore'
				],
				/* raw type */ 'java.lang.Iterable',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Set<java.lang.String> java.nio.file.FileSystem.supportedFileAttributeViews() */
			/* name */ 'supportedFileAttributeViews',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String'
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.file.PathMatcher java.nio.file.FileSystem.getPathMatcher(java.lang.String) */
			/* name */ 'getPathMatcher',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.file.PathMatcher',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.file.attribute.UserPrincipalLookupService java.nio.file.FileSystem.getUserPrincipalLookupService() */
			/* name */ 'getUserPrincipalLookupService',
			/* parameters */,
			/* return */ 'java.nio.file.attribute.UserPrincipalLookupService',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.file.WatchService java.nio.file.FileSystem.newWatchService() throws java.io.IOException */
			/* name */ 'newWatchService',
			/* parameters */,
			/* return */ 'java.nio.file.WatchService',
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
