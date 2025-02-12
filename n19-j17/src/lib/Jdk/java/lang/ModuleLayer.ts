import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.ModuleLayer', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public java.lang.ClassLoader java.lang.ModuleLayer.findLoader(java.lang.String) */
			/* name */ 'findLoader',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ClassLoader',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ModuleLayer java.lang.ModuleLayer.defineModules(java.lang.module.Configuration,java.util.function.Function<java.lang.String, java.lang.ClassLoader>) */
			/* name */ 'defineModules',
			[/* parameters */
				[/* parameter */
					/* name */ 'cf',
					/* type */ 'java.lang.module.Configuration',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'clf',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String',
							'java.lang.ClassLoader'
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ModuleLayer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ModuleLayer java.lang.ModuleLayer.defineModulesWithManyLoaders(java.lang.module.Configuration,java.lang.ClassLoader) */
			/* name */ 'defineModulesWithManyLoaders',
			[/* parameters */
				[/* parameter */
					/* name */ 'cf',
					/* type */ 'java.lang.module.Configuration',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'parentLoader',
					/* type */ 'java.lang.ClassLoader',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ModuleLayer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ModuleLayer java.lang.ModuleLayer.defineModulesWithOneLoader(java.lang.module.Configuration,java.lang.ClassLoader) */
			/* name */ 'defineModulesWithOneLoader',
			[/* parameters */
				[/* parameter */
					/* name */ 'cf',
					/* type */ 'java.lang.module.Configuration',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'parentLoader',
					/* type */ 'java.lang.ClassLoader',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ModuleLayer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.ModuleLayer.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.Configuration java.lang.ModuleLayer.configuration() */
			/* name */ 'configuration',
			/* parameters */,
			/* return */ 'java.lang.module.Configuration',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.List<java.lang.ModuleLayer> java.lang.ModuleLayer.parents() */
			/* name */ 'parents',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.ModuleLayer'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Optional<java.lang.Module> java.lang.ModuleLayer.findModule(java.lang.String) */
			/* name */ 'findModule',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Module'
				],
				/* raw type */ 'java.util.Optional',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Set<java.lang.Module> java.lang.ModuleLayer.modules() */
			/* name */ 'modules',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Module'
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.ModuleLayer java.lang.ModuleLayer.boot() */
			/* name */ 'boot',
			/* parameters */,
			/* return */ 'java.lang.ModuleLayer',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.ModuleLayer java.lang.ModuleLayer.empty() */
			/* name */ 'empty',
			/* parameters */,
			/* return */ 'java.lang.ModuleLayer',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.ModuleLayer$Controller java.lang.ModuleLayer.defineModules(java.lang.module.Configuration,java.util.List<java.lang.ModuleLayer>,java.util.function.Function<java.lang.String, java.lang.ClassLoader>) */
			/* name */ 'defineModules',
			[/* parameters */
				[/* parameter */
					/* name */ 'layer',
					/* type */ 'java.lang.module.Configuration',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'e',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.ModuleLayer'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'parentLayers',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String',
							'java.lang.ClassLoader'
						],
						/* raw type */ 'java.util.function.Function',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ModuleLayer$Controller',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.ModuleLayer$Controller java.lang.ModuleLayer.defineModulesWithManyLoaders(java.lang.module.Configuration,java.util.List<java.lang.ModuleLayer>,java.lang.ClassLoader) */
			/* name */ 'defineModulesWithManyLoaders',
			[/* parameters */
				[/* parameter */
					/* name */ 'layer',
					/* type */ 'java.lang.module.Configuration',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'e',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.ModuleLayer'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'parentLayers',
					/* type */ 'java.lang.ClassLoader',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ModuleLayer$Controller',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.ModuleLayer$Controller java.lang.ModuleLayer.defineModulesWithOneLoader(java.lang.module.Configuration,java.util.List<java.lang.ModuleLayer>,java.lang.ClassLoader) */
			/* name */ 'defineModulesWithOneLoader',
			[/* parameters */
				[/* parameter */
					/* name */ 'loader',
					/* type */ 'java.lang.module.Configuration',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'layer',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.ModuleLayer'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'e',
					/* type */ 'java.lang.ClassLoader',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.ModuleLayer$Controller',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
