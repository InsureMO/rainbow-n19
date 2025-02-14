import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.util.ProxyGenerator', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public groovy.util.ProxyGenerator() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public boolean groovy.util.ProxyGenerator.getDebug() */
			/* name */ 'getDebug',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean groovy.util.ProxyGenerator.getEmptyMethods() */
			/* name */ 'getEmptyMethods',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.GroovyObject groovy.util.ProxyGenerator.instantiateAggregate(java.util.List<java.lang.Class>) */
			/* name */ 'instantiateAggregate',
			[/* parameters */
				[/* parameter */
					/* name */ 'interfaces',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.Class'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.lang.GroovyObject',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.GroovyObject groovy.util.ProxyGenerator.instantiateAggregate(java.util.Map,java.util.List<java.lang.Class>) */
			/* name */ 'instantiateAggregate',
			[/* parameters */
				[/* parameter */
					/* name */ 'closureMap',
					/* type */ 'java.util.Map',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'interfaces',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.Class'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.lang.GroovyObject',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.GroovyObject groovy.util.ProxyGenerator.instantiateAggregate(java.util.Map,java.util.List<java.lang.Class>,java.lang.Class) */
			/* name */ 'instantiateAggregate',
			[/* parameters */
				[/* parameter */
					/* name */ 'closureMap',
					/* type */ 'java.util.Map',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'interfaces',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.Class'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'clazz',
					/* type */ 'java.lang.Class',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.lang.GroovyObject',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.GroovyObject groovy.util.ProxyGenerator.instantiateAggregate(java.util.Map,java.util.List<java.lang.Class>,java.lang.Class,java.lang.Object[]) */
			/* name */ 'instantiateAggregate',
			[/* parameters */
				[/* parameter */
					/* name */ 'closureMap',
					/* type */ 'java.util.Map',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'interfaces',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.Class'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'clazz',
					/* type */ 'java.lang.Class',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'constructorArgs',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.lang.GroovyObject',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.GroovyObject groovy.util.ProxyGenerator.instantiateAggregateFromBaseClass(groovy.lang.Closure,java.lang.Class) */
			/* name */ 'instantiateAggregateFromBaseClass',
			[/* parameters */
				[/* parameter */
					/* name */ 'cl',
					/* type */ 'groovy.lang.Closure',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'clazz',
					/* type */ 'java.lang.Class',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.lang.GroovyObject',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.GroovyObject groovy.util.ProxyGenerator.instantiateAggregateFromBaseClass(java.lang.Class) */
			/* name */ 'instantiateAggregateFromBaseClass',
			[/* parameters */
				[/* parameter */
					/* name */ 'clazz',
					/* type */ 'java.lang.Class',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.lang.GroovyObject',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.GroovyObject groovy.util.ProxyGenerator.instantiateAggregateFromBaseClass(java.lang.Class,java.lang.Object[]) */
			/* name */ 'instantiateAggregateFromBaseClass',
			[/* parameters */
				[/* parameter */
					/* name */ 'clazz',
					/* type */ 'java.lang.Class',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'constructorArgs',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.lang.GroovyObject',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.GroovyObject groovy.util.ProxyGenerator.instantiateAggregateFromBaseClass(java.util.Map,java.lang.Class) */
			/* name */ 'instantiateAggregateFromBaseClass',
			[/* parameters */
				[/* parameter */
					/* name */ 'map',
					/* type */ 'java.util.Map',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'clazz',
					/* type */ 'java.lang.Class',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.lang.GroovyObject',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.GroovyObject groovy.util.ProxyGenerator.instantiateAggregateFromBaseClass(java.util.Map,java.lang.Class,java.lang.Object[]) */
			/* name */ 'instantiateAggregateFromBaseClass',
			[/* parameters */
				[/* parameter */
					/* name */ 'map',
					/* type */ 'java.util.Map',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'clazz',
					/* type */ 'java.lang.Class',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'constructorArgs',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.lang.GroovyObject',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.GroovyObject groovy.util.ProxyGenerator.instantiateAggregateFromInterface(java.lang.Class) */
			/* name */ 'instantiateAggregateFromInterface',
			[/* parameters */
				[/* parameter */
					/* name */ 'clazz',
					/* type */ 'java.lang.Class',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.lang.GroovyObject',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.GroovyObject groovy.util.ProxyGenerator.instantiateAggregateFromInterface(java.util.Map,java.lang.Class) */
			/* name */ 'instantiateAggregateFromInterface',
			[/* parameters */
				[/* parameter */
					/* name */ 'map',
					/* type */ 'java.util.Map',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'clazz',
					/* type */ 'java.lang.Class',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.lang.GroovyObject',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.GroovyObject groovy.util.ProxyGenerator.instantiateDelegate(java.lang.Object) */
			/* name */ 'instantiateDelegate',
			[/* parameters */
				[/* parameter */
					/* name */ 'delegate',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.lang.GroovyObject',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.GroovyObject groovy.util.ProxyGenerator.instantiateDelegate(java.util.List<java.lang.Class>,java.lang.Object) */
			/* name */ 'instantiateDelegate',
			[/* parameters */
				[/* parameter */
					/* name */ 'interfaces',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.Class'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'delegate',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.lang.GroovyObject',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.GroovyObject groovy.util.ProxyGenerator.instantiateDelegate(java.util.Map,java.util.List<java.lang.Class>,java.lang.Object) */
			/* name */ 'instantiateDelegate',
			[/* parameters */
				[/* parameter */
					/* name */ 'closureMap',
					/* type */ 'java.util.Map',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'interfaces',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.Class'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'delegate',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.lang.GroovyObject',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.GroovyObject groovy.util.ProxyGenerator.instantiateDelegateWithBaseClass(java.util.Map,java.util.List<java.lang.Class>,java.lang.Object) */
			/* name */ 'instantiateDelegateWithBaseClass',
			[/* parameters */
				[/* parameter */
					/* name */ 'closureMap',
					/* type */ 'java.util.Map',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'interfaces',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.Class'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'delegate',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.lang.GroovyObject',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.GroovyObject groovy.util.ProxyGenerator.instantiateDelegateWithBaseClass(java.util.Map,java.util.List<java.lang.Class>,java.lang.Object,java.lang.Class) */
			/* name */ 'instantiateDelegateWithBaseClass',
			[/* parameters */
				[/* parameter */
					/* name */ 'closureMap',
					/* type */ 'java.util.Map',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'interfaces',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.Class'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'delegate',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'baseClass',
					/* type */ 'java.lang.Class',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.lang.GroovyObject',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.GroovyObject groovy.util.ProxyGenerator.instantiateDelegateWithBaseClass(java.util.Map,java.util.List<java.lang.Class>,java.lang.Object,java.lang.Class,java.lang.String) */
			/* name */ 'instantiateDelegateWithBaseClass',
			[/* parameters */
				[/* parameter */
					/* name */ 'closureMap',
					/* type */ 'java.util.Map',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'interfaces',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.Class'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'delegate',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'baseClass',
					/* type */ 'java.lang.Class',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.lang.GroovyObject',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.ClassLoader groovy.util.ProxyGenerator.getOverride() */
			/* name */ 'getOverride',
			/* parameters */,
			/* return */ 'java.lang.ClassLoader',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void groovy.util.ProxyGenerator.setDebug(boolean) */
			/* name */ 'setDebug',
			[/* parameters */
				[/* parameter */
					/* name */ 'debug',
					/* type */ 'boolean',
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
		[/* public void groovy.util.ProxyGenerator.setEmptyMethods(boolean) */
			/* name */ 'setEmptyMethods',
			[/* parameters */
				[/* parameter */
					/* name */ 'emptyMethods',
					/* type */ 'boolean',
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
		[/* public void groovy.util.ProxyGenerator.setOverride(java.lang.ClassLoader) */
			/* name */ 'setOverride',
			[/* parameters */
				[/* parameter */
					/* name */ 'override',
					/* type */ 'java.lang.ClassLoader',
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
		[/* public static final groovy.util.ProxyGenerator groovy.util.ProxyGenerator.INSTANCE */
			/* name */ 'INSTANCE',
			/* type */ 'groovy.util.ProxyGenerator',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
