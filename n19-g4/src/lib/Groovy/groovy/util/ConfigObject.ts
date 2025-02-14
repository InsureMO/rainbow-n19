import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.util.ConfigObject', [
	/* super class, extends groovy.lang.GroovyObjectSupport */
	'groovy.lang.GroovyObjectSupport',
	[/* interfaces, implements groovy.lang.Writable, java.util.Map, java.lang.Cloneable */
		'groovy.lang.Writable',
		'java.util.Map',
		'java.lang.Cloneable'
	],
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public groovy.util.ConfigObject() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.util.ConfigObject(java.net.URL) */
			[/* parameters */
				[/* parameter */
					/* name */ 'file',
					/* type */ 'java.net.URL',
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
		[/* public boolean groovy.util.ConfigObject.containsKey(java.lang.Object) */
			/* name */ 'containsKey',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
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
		[/* public boolean groovy.util.ConfigObject.containsValue(java.lang.Object) */
			/* name */ 'containsValue',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
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
		[/* public boolean groovy.util.ConfigObject.isEmpty() */
			/* name */ 'isEmpty',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.util.ConfigObject groovy.util.ConfigObject.clone() */
			/* name */ 'clone',
			/* parameters */,
			/* return */ 'groovy.util.ConfigObject',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int groovy.util.ConfigObject.size() */
			/* name */ 'size',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.Writer groovy.util.ConfigObject.writeTo(java.io.Writer) throws java.io.IOException */
			/* name */ 'writeTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'outArg',
					/* type */ 'java.io.Writer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.io.Writer',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Boolean groovy.util.ConfigObject.isSet(java.lang.String) */
			/* name */ 'isSet',
			[/* parameters */
				[/* parameter */
					/* name */ 'option',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object groovy.util.ConfigObject.get(java.lang.Object) */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
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
		[/* public java.lang.Object groovy.util.ConfigObject.getProperty(java.lang.String) */
			/* name */ 'getProperty',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
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
		],
		[/* public java.lang.Object groovy.util.ConfigObject.put(java.lang.Object,java.lang.Object) */
			/* name */ 'put',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'java.lang.Object',
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
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object groovy.util.ConfigObject.remove(java.lang.Object) */
			/* name */ 'remove',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
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
		[/* public java.lang.String groovy.util.ConfigObject.prettyPrint() */
			/* name */ 'prettyPrint',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String groovy.util.ConfigObject.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.net.URL groovy.util.ConfigObject.getConfigFile() */
			/* name */ 'getConfigFile',
			/* parameters */,
			/* return */ 'java.net.URL',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Collection groovy.util.ConfigObject.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ 'java.util.Collection',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Map groovy.util.ConfigObject.flatten() */
			/* name */ 'flatten',
			/* parameters */,
			/* return */ 'java.util.Map',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Map groovy.util.ConfigObject.flatten(java.util.Map) */
			/* name */ 'flatten',
			[/* parameters */
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.util.Map',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Map',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Map groovy.util.ConfigObject.merge(groovy.util.ConfigObject) */
			/* name */ 'merge',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ 'groovy.util.ConfigObject',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Map',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Properties groovy.util.ConfigObject.toProperties() */
			/* name */ 'toProperties',
			/* parameters */,
			/* return */ 'java.util.Properties',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Properties groovy.util.ConfigObject.toProperties(java.lang.String) */
			/* name */ 'toProperties',
			[/* parameters */
				[/* parameter */
					/* name */ 'prefix',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Properties',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Set groovy.util.ConfigObject.entrySet() */
			/* name */ 'entrySet',
			/* parameters */,
			/* return */ 'java.util.Set',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Set groovy.util.ConfigObject.keySet() */
			/* name */ 'keySet',
			/* parameters */,
			/* return */ 'java.util.Set',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void groovy.util.ConfigObject.clear() */
			/* name */ 'clear',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void groovy.util.ConfigObject.putAll(java.util.Map) */
			/* name */ 'putAll',
			[/* parameters */
				[/* parameter */
					/* name */ 'm',
					/* type */ 'java.util.Map',
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
		[/* public void groovy.util.ConfigObject.setConfigFile(java.net.URL) */
			/* name */ 'setConfigFile',
			[/* parameters */
				[/* parameter */
					/* name */ 'configFile',
					/* type */ 'java.net.URL',
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
