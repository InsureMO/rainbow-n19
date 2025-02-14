import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.util.BuilderSupport', [
	/* super class, extends groovy.lang.GroovyObjectSupport */
	'groovy.lang.GroovyObjectSupport',
	/* interfaces */,
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public groovy.util.BuilderSupport() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.util.BuilderSupport(groovy.lang.Closure,groovy.util.BuilderSupport) */
			[/* parameters */
				[/* parameter */
					/* name */ 'nameMappingClosure',
					/* type */ 'groovy.lang.Closure',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'proxyBuilder',
					/* type */ 'groovy.util.BuilderSupport',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.util.BuilderSupport(groovy.util.BuilderSupport) */
			[/* parameters */
				[/* parameter */
					/* name */ 'proxyBuilder',
					/* type */ 'groovy.util.BuilderSupport',
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
		[/* protected abstract java.lang.Object groovy.util.BuilderSupport.createNode(java.lang.Object) */
			/* name */ 'createNode',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1028,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected abstract java.lang.Object groovy.util.BuilderSupport.createNode(java.lang.Object,java.lang.Object) */
			/* name */ 'createNode',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
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
			/* modifiers */ 1028,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected abstract java.lang.Object groovy.util.BuilderSupport.createNode(java.lang.Object,java.util.Map) */
			/* name */ 'createNode',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'attributes',
					/* type */ 'java.util.Map',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 1028,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected abstract java.lang.Object groovy.util.BuilderSupport.createNode(java.lang.Object,java.util.Map,java.lang.Object) */
			/* name */ 'createNode',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'attributes',
					/* type */ 'java.util.Map',
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
			/* modifiers */ 1028,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected abstract void groovy.util.BuilderSupport.setParent(java.lang.Object,java.lang.Object) */
			/* name */ 'setParent',
			[/* parameters */
				[/* parameter */
					/* name */ 'parent',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'child',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1028,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected java.lang.Object groovy.util.BuilderSupport.doInvokeMethod(java.lang.String,java.lang.Object,java.lang.Object) */
			/* name */ 'doInvokeMethod',
			[/* parameters */
				[/* parameter */
					/* name */ 'methodName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.Object',
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
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected java.lang.Object groovy.util.BuilderSupport.getCurrent() */
			/* name */ 'getCurrent',
			/* parameters */,
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected java.lang.Object groovy.util.BuilderSupport.getName(java.lang.String) */
			/* name */ 'getName',
			[/* parameters */
				[/* parameter */
					/* name */ 'methodName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected java.lang.Object groovy.util.BuilderSupport.postNodeCompletion(java.lang.Object,java.lang.Object) */
			/* name */ 'postNodeCompletion',
			[/* parameters */
				[/* parameter */
					/* name */ 'parent',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'node',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected void groovy.util.BuilderSupport.nodeCompleted(java.lang.Object,java.lang.Object) */
			/* name */ 'nodeCompleted',
			[/* parameters */
				[/* parameter */
					/* name */ 'parent',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'node',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected void groovy.util.BuilderSupport.setClosureDelegate(groovy.lang.Closure,java.lang.Object) */
			/* name */ 'setClosureDelegate',
			[/* parameters */
				[/* parameter */
					/* name */ 'closure',
					/* type */ 'groovy.lang.Closure',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'node',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected void groovy.util.BuilderSupport.setCurrent(java.lang.Object) */
			/* name */ 'setCurrent',
			[/* parameters */
				[/* parameter */
					/* name */ 'current',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object groovy.util.BuilderSupport.invokeMethod(java.lang.String) */
			/* name */ 'invokeMethod',
			[/* parameters */
				[/* parameter */
					/* name */ 'methodName',
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
		[/* public java.lang.Object groovy.util.BuilderSupport.invokeMethod(java.lang.String,java.lang.Object) */
			/* name */ 'invokeMethod',
			[/* parameters */
				[/* parameter */
					/* name */ 'methodName',
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
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
