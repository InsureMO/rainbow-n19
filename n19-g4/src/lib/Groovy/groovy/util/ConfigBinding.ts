import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.util.ConfigBinding', [
	/* super class, extends groovy.lang.Binding */
	'groovy.lang.Binding',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public groovy.util.ConfigBinding(groovy.lang.Closure) */
			[/* parameters */
				[/* parameter */
					/* name */ 'c',
					/* type */ 'groovy.lang.Closure',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public java.lang.Object groovy.util.ConfigBinding.getCallable() */
			/* name */ 'getCallable',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void groovy.util.ConfigBinding.setCallable(java.lang.Object) */
			/* name */ 'setCallable',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void groovy.util.ConfigBinding.setVariable(java.lang.String,java.lang.Object) */
			/* name */ 'setVariable',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'value',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static transient boolean groovy.util.ConfigBinding.__$stMC */
			/* name */ '__$stMC',
			/* type */ 'boolean',
			/* annotations */ UDF,
			/* modifiers */ 4233
		]
	],
	/* enum values */ UDF
]);
