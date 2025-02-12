import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.module.ModuleDescriptor$Builder', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 25,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public java.lang.module.ModuleDescriptor$Builder java.lang.module.ModuleDescriptor$Builder.version(java.lang.String) */
			/* name */ 'version',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.ModuleDescriptor$Builder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.ModuleDescriptor$Builder java.lang.module.ModuleDescriptor$Builder.version(java.lang.module.ModuleDescriptor$Version) */
			/* name */ 'version',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.module.ModuleDescriptor$Version',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.ModuleDescriptor$Builder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.ModuleDescriptor$Builder java.lang.module.ModuleDescriptor$Builder.packages(java.util.Set<java.lang.String>) */
			/* name */ 'packages',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String'
						],
						/* raw type */ 'java.util.Set',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.ModuleDescriptor$Builder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.ModuleDescriptor$Builder java.lang.module.ModuleDescriptor$Builder.exports(java.lang.String) */
			/* name */ 'exports',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.ModuleDescriptor$Builder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.ModuleDescriptor$Builder java.lang.module.ModuleDescriptor$Builder.exports(java.util.Set<java.lang.module.ModuleDescriptor$Exports$Modifier>,java.lang.String,java.util.Set<java.lang.String>) */
			/* name */ 'exports',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.module.ModuleDescriptor$Exports$Modifier'
						],
						/* raw type */ 'java.util.Set',
						/* owner type */ UDF
					]],
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
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String'
						],
						/* raw type */ 'java.util.Set',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.ModuleDescriptor$Builder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.ModuleDescriptor$Builder java.lang.module.ModuleDescriptor$Builder.exports(java.lang.String,java.util.Set<java.lang.String>) */
			/* name */ 'exports',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String'
						],
						/* raw type */ 'java.util.Set',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.ModuleDescriptor$Builder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.ModuleDescriptor$Builder java.lang.module.ModuleDescriptor$Builder.exports(java.util.Set<java.lang.module.ModuleDescriptor$Exports$Modifier>,java.lang.String) */
			/* name */ 'exports',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.module.ModuleDescriptor$Exports$Modifier'
						],
						/* raw type */ 'java.util.Set',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.ModuleDescriptor$Builder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.ModuleDescriptor$Builder java.lang.module.ModuleDescriptor$Builder.exports(java.lang.module.ModuleDescriptor$Exports) */
			/* name */ 'exports',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.module.ModuleDescriptor$Exports',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.ModuleDescriptor$Builder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.ModuleDescriptor$Builder java.lang.module.ModuleDescriptor$Builder.opens(java.lang.String) */
			/* name */ 'opens',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.ModuleDescriptor$Builder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.ModuleDescriptor$Builder java.lang.module.ModuleDescriptor$Builder.opens(java.util.Set<java.lang.module.ModuleDescriptor$Opens$Modifier>,java.lang.String,java.util.Set<java.lang.String>) */
			/* name */ 'opens',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.module.ModuleDescriptor$Opens$Modifier'
						],
						/* raw type */ 'java.util.Set',
						/* owner type */ UDF
					]],
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
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String'
						],
						/* raw type */ 'java.util.Set',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.ModuleDescriptor$Builder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.ModuleDescriptor$Builder java.lang.module.ModuleDescriptor$Builder.opens(java.lang.String,java.util.Set<java.lang.String>) */
			/* name */ 'opens',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String'
						],
						/* raw type */ 'java.util.Set',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.ModuleDescriptor$Builder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.ModuleDescriptor$Builder java.lang.module.ModuleDescriptor$Builder.opens(java.lang.module.ModuleDescriptor$Opens) */
			/* name */ 'opens',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.module.ModuleDescriptor$Opens',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.ModuleDescriptor$Builder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.ModuleDescriptor$Builder java.lang.module.ModuleDescriptor$Builder.opens(java.util.Set<java.lang.module.ModuleDescriptor$Opens$Modifier>,java.lang.String) */
			/* name */ 'opens',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.module.ModuleDescriptor$Opens$Modifier'
						],
						/* raw type */ 'java.util.Set',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.ModuleDescriptor$Builder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.ModuleDescriptor$Builder java.lang.module.ModuleDescriptor$Builder.uses(java.lang.String) */
			/* name */ 'uses',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.ModuleDescriptor$Builder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.ModuleDescriptor$Builder java.lang.module.ModuleDescriptor$Builder.provides(java.lang.module.ModuleDescriptor$Provides) */
			/* name */ 'provides',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.module.ModuleDescriptor$Provides',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.ModuleDescriptor$Builder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.ModuleDescriptor$Builder java.lang.module.ModuleDescriptor$Builder.provides(java.lang.String,java.util.List<java.lang.String>) */
			/* name */ 'provides',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.ModuleDescriptor$Builder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.ModuleDescriptor java.lang.module.ModuleDescriptor$Builder.build() */
			/* name */ 'build',
			/* parameters */,
			/* return */ 'java.lang.module.ModuleDescriptor',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.ModuleDescriptor$Builder java.lang.module.ModuleDescriptor$Builder.requires(java.lang.module.ModuleDescriptor$Requires) */
			/* name */ 'requires',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.module.ModuleDescriptor$Requires',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.ModuleDescriptor$Builder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.ModuleDescriptor$Builder java.lang.module.ModuleDescriptor$Builder.requires(java.util.Set<java.lang.module.ModuleDescriptor$Requires$Modifier>,java.lang.String,java.lang.module.ModuleDescriptor$Version) */
			/* name */ 'requires',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.module.ModuleDescriptor$Requires$Modifier'
						],
						/* raw type */ 'java.util.Set',
						/* owner type */ UDF
					]],
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
					/* type */ 'java.lang.module.ModuleDescriptor$Version',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.ModuleDescriptor$Builder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.ModuleDescriptor$Builder java.lang.module.ModuleDescriptor$Builder.requires(java.lang.String) */
			/* name */ 'requires',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.ModuleDescriptor$Builder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.ModuleDescriptor$Builder java.lang.module.ModuleDescriptor$Builder.requires(java.util.Set<java.lang.module.ModuleDescriptor$Requires$Modifier>,java.lang.String) */
			/* name */ 'requires',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.module.ModuleDescriptor$Requires$Modifier'
						],
						/* raw type */ 'java.util.Set',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.ModuleDescriptor$Builder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.ModuleDescriptor$Builder java.lang.module.ModuleDescriptor$Builder.mainClass(java.lang.String) */
			/* name */ 'mainClass',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.ModuleDescriptor$Builder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
