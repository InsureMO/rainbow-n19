import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.util.FileNameByRegexFinder', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements groovy.util.IFileNameFinder, groovy.lang.GroovyObject */
		'groovy.util.IFileNameFinder',
		'groovy.lang.GroovyObject'
	],
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public groovy.util.FileNameByRegexFinder() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				['groovy.transform.Generated']
			],
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public java.util.List<java.lang.String> groovy.util.FileNameByRegexFinder.getFileNames(java.lang.String,java.lang.String) */
			/* name */ 'getFileNames',
			[/* parameters */
				[/* parameter */
					/* name */ 'basedir',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'pattern',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.List<java.lang.String> groovy.util.FileNameByRegexFinder.getFileNames(java.lang.String,java.lang.String,java.lang.String) */
			/* name */ 'getFileNames',
			[/* parameters */
				[/* parameter */
					/* name */ 'basedir',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'pattern',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'excludesPattern',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static transient boolean groovy.util.FileNameByRegexFinder.__$stMC */
			/* name */ '__$stMC',
			/* type */ 'boolean',
			/* annotations */ UDF,
			/* modifiers */ 4233
		]
	],
	/* enum values */ UDF
]);
