import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.lang.GroovyObject', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1537,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public default java.lang.Object groovy.lang.GroovyObject.getProperty(java.lang.String) */
			/* name */ 'getProperty',
			[/* parameters */
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
			[/* annotations */
				['groovy.transform.Internal']
			],
			/* type parameters */ UDF
		],
		[/* public default java.lang.Object groovy.lang.GroovyObject.invokeMethod(java.lang.String,java.lang.Object) */
			/* name */ 'invokeMethod',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'args',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				['groovy.transform.Internal']
			],
			/* type parameters */ UDF
		],
		[/* public default void groovy.lang.GroovyObject.setProperty(java.lang.String,java.lang.Object) */
			/* name */ 'setProperty',
			[/* parameters */
				[/* parameter */
					/* name */ 'propertyName',
					/* type */ 'java.lang.String',
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
			[/* annotations */
				['groovy.transform.Internal']
			],
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
