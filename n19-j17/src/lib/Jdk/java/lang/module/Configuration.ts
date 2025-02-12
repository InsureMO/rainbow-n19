import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.module.Configuration', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public java.lang.String java.lang.module.Configuration.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.module.Configuration java.lang.module.Configuration.empty() */
			/* name */ 'empty',
			/* parameters */,
			/* return */ 'java.lang.module.Configuration',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.Configuration java.lang.module.Configuration.resolve(java.lang.module.ModuleFinder,java.lang.module.ModuleFinder,java.util.Collection<java.lang.String>) */
			/* name */ 'resolve',
			[/* parameters */
				[/* parameter */
					/* name */ 'before',
					/* type */ 'java.lang.module.ModuleFinder',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'after',
					/* type */ 'java.lang.module.ModuleFinder',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'roots',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String'
						],
						/* raw type */ 'java.util.Collection',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.Configuration',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.module.Configuration java.lang.module.Configuration.resolve(java.lang.module.ModuleFinder,java.util.List<java.lang.module.Configuration>,java.lang.module.ModuleFinder,java.util.Collection<java.lang.String>) */
			/* name */ 'resolve',
			[/* parameters */
				[/* parameter */
					/* name */ 'parents',
					/* type */ 'java.lang.module.ModuleFinder',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'after',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.module.Configuration'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'roots',
					/* type */ 'java.lang.module.ModuleFinder',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'parentList',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String'
						],
						/* raw type */ 'java.util.Collection',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.Configuration',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Set<java.lang.module.ResolvedModule> java.lang.module.Configuration.modules() */
			/* name */ 'modules',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.module.ResolvedModule'
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.List<java.lang.module.Configuration> java.lang.module.Configuration.parents() */
			/* name */ 'parents',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.module.Configuration'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Optional<java.lang.module.ResolvedModule> java.lang.module.Configuration.findModule(java.lang.String) */
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
					'java.lang.module.ResolvedModule'
				],
				/* raw type */ 'java.util.Optional',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.module.Configuration java.lang.module.Configuration.resolveAndBind(java.lang.module.ModuleFinder,java.util.List<java.lang.module.Configuration>,java.lang.module.ModuleFinder,java.util.Collection<java.lang.String>) */
			/* name */ 'resolveAndBind',
			[/* parameters */
				[/* parameter */
					/* name */ 'parents',
					/* type */ 'java.lang.module.ModuleFinder',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'after',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.module.Configuration'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'roots',
					/* type */ 'java.lang.module.ModuleFinder',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'parentList',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String'
						],
						/* raw type */ 'java.util.Collection',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.Configuration',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.module.Configuration java.lang.module.Configuration.resolveAndBind(java.lang.module.ModuleFinder,java.lang.module.ModuleFinder,java.util.Collection<java.lang.String>) */
			/* name */ 'resolveAndBind',
			[/* parameters */
				[/* parameter */
					/* name */ 'before',
					/* type */ 'java.lang.module.ModuleFinder',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'after',
					/* type */ 'java.lang.module.ModuleFinder',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'roots',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String'
						],
						/* raw type */ 'java.util.Collection',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.Configuration',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
