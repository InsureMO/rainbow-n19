import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.module.ModuleFinder', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1537,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract java.util.Optional<java.lang.module.ModuleReference> java.lang.module.ModuleFinder.find(java.lang.String) */
			/* name */ 'find',
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
					'java.lang.module.ModuleReference'
				],
				/* raw type */ 'java.util.Optional',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.Set<java.lang.module.ModuleReference> java.lang.module.ModuleFinder.findAll() */
			/* name */ 'findAll',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.module.ModuleReference'
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.module.ModuleFinder java.lang.module.ModuleFinder.compose(java.lang.module.ModuleFinder...) */
			/* name */ 'compose',
			[/* parameters */
				[/* parameter */
					/* name */ 'finders',
					/* type */ '[Ljava.lang.module.ModuleFinder;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.ModuleFinder',
			/* exceptions */,
			/* modifiers */ 137,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.module.ModuleFinder java.lang.module.ModuleFinder.of(java.nio.file.Path...) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'entries',
					/* type */ '[Ljava.nio.file.Path;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.module.ModuleFinder',
			/* exceptions */,
			/* modifiers */ 137,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.module.ModuleFinder java.lang.module.ModuleFinder.ofSystem() */
			/* name */ 'ofSystem',
			/* parameters */,
			/* return */ 'java.lang.module.ModuleFinder',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
