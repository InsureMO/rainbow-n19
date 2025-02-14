import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.beans.DefaultPropertyWriter', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements groovy.beans.PropertyWriter */
		'groovy.beans.PropertyWriter'
	],
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public groovy.beans.DefaultPropertyWriter() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public void groovy.beans.DefaultPropertyWriter.write(java.lang.Object,java.lang.String,java.lang.Object) */
			/* name */ 'write',
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
		[/* public static final groovy.beans.PropertyWriter groovy.beans.DefaultPropertyWriter.INSTANCE */
			/* name */ 'INSTANCE',
			/* type */ 'groovy.beans.PropertyWriter',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
