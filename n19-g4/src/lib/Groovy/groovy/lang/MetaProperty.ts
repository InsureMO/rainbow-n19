import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.lang.MetaProperty', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public groovy.lang.MetaProperty(java.lang.String,java.lang.Class) */
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'type',
					/* type */ 'java.lang.Class',
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
		[/* public abstract java.lang.Object groovy.lang.MetaProperty.getProperty(java.lang.Object) */
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
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract void groovy.lang.MetaProperty.setProperty(java.lang.Object,java.lang.Object) */
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
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.lang.MetaProperty.getModifiers() */
			/* name */ 'getModifiers',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Class groovy.lang.MetaProperty.getType() */
			/* name */ 'getType',
			/* parameters */,
			/* return */ 'java.lang.Class',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String groovy.lang.MetaProperty.getName() */
			/* name */ 'getName',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.String groovy.lang.MetaProperty.getGetterName(java.lang.String,java.lang.Class) */
			/* name */ 'getGetterName',
			[/* parameters */
				[/* parameter */
					/* name */ 'propertyName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'type',
					/* type */ 'java.lang.Class',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.String groovy.lang.MetaProperty.getSetterName(java.lang.String) */
			/* name */ 'getSetterName',
			[/* parameters */
				[/* parameter */
					/* name */ 'propertyName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final java.lang.String groovy.lang.MetaProperty.PROPERTY_SET_PREFIX */
			/* name */ 'PROPERTY_SET_PREFIX',
			/* type */ 'java.lang.String',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* protected final java.lang.String groovy.lang.MetaProperty.name */
			/* name */ 'name',
			/* type */ 'java.lang.String',
			/* annotations */ UDF,
			/* modifiers */ 20
		],
		[/* protected java.lang.Class groovy.lang.MetaProperty.type */
			/* name */ 'type',
			/* type */ 'java.lang.Class',
			/* annotations */ UDF,
			/* modifiers */ 4
		]
	],
	/* enum values */ UDF
]);
