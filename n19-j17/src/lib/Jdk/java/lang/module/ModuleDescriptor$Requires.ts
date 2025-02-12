import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.module.ModuleDescriptor$Requires', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.lang.Comparable<java.lang.module.ModuleDescriptor$Requires> */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.lang.module.ModuleDescriptor$Requires'
			],
			/* raw type */ 'java.lang.Comparable',
			/* owner type */ UDF
		]]
	],
	/* modifiers */ 25,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public java.util.Set<java.lang.module.ModuleDescriptor$Requires$Modifier> java.lang.module.ModuleDescriptor$Requires.modifiers() */
			/* name */ 'modifiers',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.module.ModuleDescriptor$Requires$Modifier'
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.module.ModuleDescriptor$Requires.name() */
			/* name */ 'name',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.lang.module.ModuleDescriptor$Requires.equals(java.lang.Object) */
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.module.ModuleDescriptor$Requires.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.module.ModuleDescriptor$Requires.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.module.ModuleDescriptor$Requires.compareTo(java.lang.Object) */
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
		[/* public int java.lang.module.ModuleDescriptor$Requires.compareTo(java.lang.module.ModuleDescriptor$Requires) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.module.ModuleDescriptor$Requires',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Optional<java.lang.String> java.lang.module.ModuleDescriptor$Requires.rawCompiledVersion() */
			/* name */ 'rawCompiledVersion',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String'
				],
				/* raw type */ 'java.util.Optional',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Optional<java.lang.module.ModuleDescriptor$Version> java.lang.module.ModuleDescriptor$Requires.compiledVersion() */
			/* name */ 'compiledVersion',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.module.ModuleDescriptor$Version'
				],
				/* raw type */ 'java.util.Optional',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
