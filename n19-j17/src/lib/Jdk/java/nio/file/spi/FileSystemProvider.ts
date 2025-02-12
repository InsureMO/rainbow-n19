import {UDF} from '../../../../../utils';
import {JdkClassCreateHelper} from '../../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.nio.file.spi.FileSystemProvider', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* protected java.nio.file.spi.FileSystemProvider() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public abstract <A extends java.nio.file.attribute.BasicFileAttributes> A java.nio.file.spi.FileSystemProvider.readAttributes(java.nio.file.Path,java.lang.Class<A>,java.nio.file.LinkOption...) throws java.io.IOException */
			/* name */ 'readAttributes',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'A']]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ '[Ljava.nio.file.LinkOption;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'A']],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1153,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'A',
					[/* bounds */
						'java.nio.file.attribute.BasicFileAttributes'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public abstract <V extends java.nio.file.attribute.FileAttributeView> V java.nio.file.spi.FileSystemProvider.getFileAttributeView(java.nio.file.Path,java.lang.Class<V>,java.nio.file.LinkOption...) */
			/* name */ 'getFileAttributeView',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'V']]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ '[Ljava.nio.file.LinkOption;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'V']],
			/* exceptions */,
			/* modifiers */ 1153,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'V',
					[/* bounds */
						'java.nio.file.attribute.FileAttributeView'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public abstract boolean java.nio.file.spi.FileSystemProvider.isHidden(java.nio.file.Path) throws java.io.IOException */
			/* name */ 'isHidden',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
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
		[/* public abstract boolean java.nio.file.spi.FileSystemProvider.isSameFile(java.nio.file.Path,java.nio.file.Path) throws java.io.IOException */
			/* name */ 'isSameFile',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
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
		[/* public abstract java.lang.String java.nio.file.spi.FileSystemProvider.getScheme() */
			/* name */ 'getScheme',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.channels.SeekableByteChannel java.nio.file.spi.FileSystemProvider.newByteChannel(java.nio.file.Path,java.util.Set<? extends java.nio.file.OpenOption>,java.nio.file.attribute.FileAttribute<?>...) throws java.io.IOException */
			/* name */ 'newByteChannel',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.nio.file.OpenOption'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.Set',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ [/* generic array type */ 'ga', [[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.nio.file.attribute.FileAttribute',
						/* owner type */ UDF
					]]]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.channels.SeekableByteChannel',
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
		[/* public abstract java.nio.file.DirectoryStream<java.nio.file.Path> java.nio.file.spi.FileSystemProvider.newDirectoryStream(java.nio.file.Path,java.nio.file.DirectoryStream$Filter<? super java.nio.file.Path>) throws java.io.IOException */
			/* name */ 'newDirectoryStream',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								[/* lower bounds */
									'java.nio.file.Path'
								]
							]]
						],
						/* raw type */ 'java.nio.file.DirectoryStream$Filter',
						/* owner type */ 'java.nio.file.DirectoryStream'
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.nio.file.Path'
				],
				/* raw type */ 'java.nio.file.DirectoryStream',
				/* owner type */ UDF
			]],
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
		[/* public abstract java.nio.file.FileStore java.nio.file.spi.FileSystemProvider.getFileStore(java.nio.file.Path) throws java.io.IOException */
			/* name */ 'getFileStore',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.file.FileStore',
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
		[/* public abstract java.nio.file.FileSystem java.nio.file.spi.FileSystemProvider.getFileSystem(java.net.URI) */
			/* name */ 'getFileSystem',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.net.URI',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.file.FileSystem',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.file.FileSystem java.nio.file.spi.FileSystemProvider.newFileSystem(java.net.URI,java.util.Map<java.lang.String, ?>) throws java.io.IOException */
			/* name */ 'newFileSystem',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.net.URI',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String',
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.Map',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.file.FileSystem',
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
		[/* public abstract java.nio.file.Path java.nio.file.spi.FileSystemProvider.getPath(java.net.URI) */
			/* name */ 'getPath',
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
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Map<java.lang.String, java.lang.Object> java.nio.file.spi.FileSystemProvider.readAttributes(java.nio.file.Path,java.lang.String,java.nio.file.LinkOption...) throws java.io.IOException */
			/* name */ 'readAttributes',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ '[Ljava.nio.file.LinkOption;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String',
					'java.lang.Object'
				],
				/* raw type */ 'java.util.Map',
				/* owner type */ UDF
			]],
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
		[/* public abstract void java.nio.file.spi.FileSystemProvider.checkAccess(java.nio.file.Path,java.nio.file.AccessMode...) throws java.io.IOException */
			/* name */ 'checkAccess',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ '[Ljava.nio.file.AccessMode;',
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
			/* modifiers */ 1153,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract void java.nio.file.spi.FileSystemProvider.copy(java.nio.file.Path,java.nio.file.Path,java.nio.file.CopyOption...) throws java.io.IOException */
			/* name */ 'copy',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ '[Ljava.nio.file.CopyOption;',
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
			/* modifiers */ 1153,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract void java.nio.file.spi.FileSystemProvider.createDirectory(java.nio.file.Path,java.nio.file.attribute.FileAttribute<?>...) throws java.io.IOException */
			/* name */ 'createDirectory',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.file.Path',
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
						/* raw type */ 'java.nio.file.attribute.FileAttribute',
						/* owner type */ UDF
					]]]],
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
			/* modifiers */ 1153,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract void java.nio.file.spi.FileSystemProvider.delete(java.nio.file.Path) throws java.io.IOException */
			/* name */ 'delete',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.file.Path',
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
		],
		[/* public abstract void java.nio.file.spi.FileSystemProvider.move(java.nio.file.Path,java.nio.file.Path,java.nio.file.CopyOption...) throws java.io.IOException */
			/* name */ 'move',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ '[Ljava.nio.file.CopyOption;',
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
			/* modifiers */ 1153,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract void java.nio.file.spi.FileSystemProvider.setAttribute(java.nio.file.Path,java.lang.String,java.lang.Object,java.nio.file.LinkOption...) throws java.io.IOException */
			/* name */ 'setAttribute',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg3',
					/* type */ '[Ljava.nio.file.LinkOption;',
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
			/* modifiers */ 1153,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.nio.file.spi.FileSystemProvider.deleteIfExists(java.nio.file.Path) throws java.io.IOException */
			/* name */ 'deleteIfExists',
			[/* parameters */
				[/* parameter */
					/* name */ 'path',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.InputStream java.nio.file.spi.FileSystemProvider.newInputStream(java.nio.file.Path,java.nio.file.OpenOption...) throws java.io.IOException */
			/* name */ 'newInputStream',
			[/* parameters */
				[/* parameter */
					/* name */ 'path',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'options',
					/* type */ '[Ljava.nio.file.OpenOption;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.io.InputStream',
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
		[/* public java.io.OutputStream java.nio.file.spi.FileSystemProvider.newOutputStream(java.nio.file.Path,java.nio.file.OpenOption...) throws java.io.IOException */
			/* name */ 'newOutputStream',
			[/* parameters */
				[/* parameter */
					/* name */ 'path',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'options',
					/* type */ '[Ljava.nio.file.OpenOption;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.io.OutputStream',
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
		[/* public java.nio.channels.AsynchronousFileChannel java.nio.file.spi.FileSystemProvider.newAsynchronousFileChannel(java.nio.file.Path,java.util.Set<? extends java.nio.file.OpenOption>,java.util.concurrent.ExecutorService,java.nio.file.attribute.FileAttribute<?>...) throws java.io.IOException */
			/* name */ 'newAsynchronousFileChannel',
			[/* parameters */
				[/* parameter */
					/* name */ 'path',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'options',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.nio.file.OpenOption'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.Set',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'executor',
					/* type */ 'java.util.concurrent.ExecutorService',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'attrs',
					/* type */ [/* generic array type */ 'ga', [[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.nio.file.attribute.FileAttribute',
						/* owner type */ UDF
					]]]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.channels.AsynchronousFileChannel',
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
		[/* public java.nio.channels.FileChannel java.nio.file.spi.FileSystemProvider.newFileChannel(java.nio.file.Path,java.util.Set<? extends java.nio.file.OpenOption>,java.nio.file.attribute.FileAttribute<?>...) throws java.io.IOException */
			/* name */ 'newFileChannel',
			[/* parameters */
				[/* parameter */
					/* name */ 'path',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'options',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.nio.file.OpenOption'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.Set',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'attrs',
					/* type */ [/* generic array type */ 'ga', [[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.nio.file.attribute.FileAttribute',
						/* owner type */ UDF
					]]]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.channels.FileChannel',
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
		[/* public java.nio.file.FileSystem java.nio.file.spi.FileSystemProvider.newFileSystem(java.nio.file.Path,java.util.Map<java.lang.String, ?>) throws java.io.IOException */
			/* name */ 'newFileSystem',
			[/* parameters */
				[/* parameter */
					/* name */ 'path',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'env',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String',
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.util.Map',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.file.FileSystem',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.file.Path java.nio.file.spi.FileSystemProvider.readSymbolicLink(java.nio.file.Path) throws java.io.IOException */
			/* name */ 'readSymbolicLink',
			[/* parameters */
				[/* parameter */
					/* name */ 'link',
					/* type */ 'java.nio.file.Path',
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.List<java.nio.file.spi.FileSystemProvider> java.nio.file.spi.FileSystemProvider.installedProviders() */
			/* name */ 'installedProviders',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.nio.file.spi.FileSystemProvider'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.nio.file.spi.FileSystemProvider.createLink(java.nio.file.Path,java.nio.file.Path) throws java.io.IOException */
			/* name */ 'createLink',
			[/* parameters */
				[/* parameter */
					/* name */ 'link',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'existing',
					/* type */ 'java.nio.file.Path',
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.nio.file.spi.FileSystemProvider.createSymbolicLink(java.nio.file.Path,java.nio.file.Path,java.nio.file.attribute.FileAttribute<?>...) throws java.io.IOException */
			/* name */ 'createSymbolicLink',
			[/* parameters */
				[/* parameter */
					/* name */ 'link',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.nio.file.Path',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'attrs',
					/* type */ [/* generic array type */ 'ga', [[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.nio.file.attribute.FileAttribute',
						/* owner type */ UDF
					]]]],
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
			/* modifiers */ 129,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
