import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.beans.DefaultPropertyReader', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements groovy.beans.PropertyReader */
		'groovy.beans.PropertyReader'
	],
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public groovy.beans.DefaultPropertyReader() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public java.lang.Object groovy.beans.DefaultPropertyReader.read(java.lang.Object,java.lang.String) */
			/* name */ 'read',
			[/* parameters */
				[/* parameter */
					/* name */ 'owner',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'propertyName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final groovy.beans.PropertyReader groovy.beans.DefaultPropertyReader.INSTANCE */
			/* name */ 'INSTANCE',
			/* type */ 'groovy.beans.PropertyReader',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
