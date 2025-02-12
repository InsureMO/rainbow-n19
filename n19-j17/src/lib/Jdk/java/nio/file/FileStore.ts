import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.nio.file.FileStore', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* protected java.nio.file.FileStore() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public abstract java.lang.String java.nio.file.FileStore.name() */
			/* name */ 'name',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.String java.nio.file.FileStore.type() */
			/* name */ 'type',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.nio.file.FileStore.isReadOnly() */
			/* name */ 'isReadOnly',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract long java.nio.file.FileStore.getTotalSpace() throws java.io.IOException */
			/* name */ 'getTotalSpace',
			/* parameters */,
			/* return */ 'long',
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
		[/* public abstract long java.nio.file.FileStore.getUsableSpace() throws java.io.IOException */
			/* name */ 'getUsableSpace',
			/* parameters */,
			/* return */ 'long',
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
		[/* public abstract java.lang.Object java.nio.file.FileStore.getAttribute(java.lang.String) throws java.io.IOException */
			/* name */ 'getAttribute',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
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
		[/* public abstract long java.nio.file.FileStore.getUnallocatedSpace() throws java.io.IOException */
			/* name */ 'getUnallocatedSpace',
			/* parameters */,
			/* return */ 'long',
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
		[/* public long java.nio.file.FileStore.getBlockSize() throws java.io.IOException */
			/* name */ 'getBlockSize',
			/* parameters */,
			/* return */ 'long',
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
		[/* public abstract boolean java.nio.file.FileStore.supportsFileAttributeView(java.lang.Class<? extends java.nio.file.attribute.FileAttributeView>) */
			/* name */ 'supportsFileAttributeView',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.nio.file.attribute.FileAttributeView'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
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
		[/* public abstract boolean java.nio.file.FileStore.supportsFileAttributeView(java.lang.String) */
			/* name */ 'supportsFileAttributeView',
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
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract <V extends java.nio.file.attribute.FileStoreAttributeView> V java.nio.file.FileStore.getFileStoreAttributeView(java.lang.Class<V>) */
			/* name */ 'getFileStoreAttributeView',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'V']]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'V']],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'V',
					[/* bounds */
						'java.nio.file.attribute.FileStoreAttributeView'
					],
					/* annotations */ UDF
				]
			]
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
