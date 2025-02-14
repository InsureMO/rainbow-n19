import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.lang.MetaExpandoProperty', [
	/* super class, extends groovy.lang.MetaProperty */
	'groovy.lang.MetaProperty',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public groovy.lang.MetaExpandoProperty(java.util.Map$Entry) */
			[/* parameters */
				[/* parameter */
					/* name */ 'entry',
					/* type */ 'java.util.Map$Entry',
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
		[/* public java.lang.Object groovy.lang.MetaExpandoProperty.getProperty(java.lang.Object) */
			/* name */ 'getProperty',
			[/* parameters */
				[/* parameter */
					/* name */ 'object',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void groovy.lang.MetaExpandoProperty.setProperty(java.lang.Object,java.lang.Object) */
			/* name */ 'setProperty',
			[/* parameters */
				[/* parameter */
					/* name */ 'object',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'newValue',
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
	/* declared fields */,
	/* enum values */ UDF
]);
