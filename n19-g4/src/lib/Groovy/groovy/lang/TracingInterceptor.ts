import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.lang.TracingInterceptor', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements groovy.lang.Interceptor */
		'groovy.lang.Interceptor'
	],
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public groovy.lang.TracingInterceptor() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* protected void groovy.lang.TracingInterceptor.write(java.lang.Object,java.lang.String,java.lang.Object[],java.lang.String) */
			/* name */ 'write',
			[/* parameters */
				[/* parameter */
					/* name */ 'object',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'methodName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arguments',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'origin',
					/* type */ 'java.lang.String',
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
		[/* protected void groovy.lang.TracingInterceptor.writeInfo(java.lang.Class,java.lang.String,java.lang.Object[]) throws java.io.IOException */
			/* name */ 'writeInfo',
			[/* parameters */
				[/* parameter */
					/* name */ 'aClass',
					/* type */ 'java.lang.Class',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'methodName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arguments',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean groovy.lang.TracingInterceptor.doInvoke() */
			/* name */ 'doInvoke',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.Writer groovy.lang.TracingInterceptor.getWriter() */
			/* name */ 'getWriter',
			/* parameters */,
			/* return */ 'java.io.Writer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Object groovy.lang.TracingInterceptor.afterInvoke(java.lang.Object,java.lang.String,java.lang.Object[],java.lang.Object) */
			/* name */ 'afterInvoke',
			[/* parameters */
				[/* parameter */
					/* name */ 'object',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'methodName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arguments',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'result',
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
		[/* public java.lang.Object groovy.lang.TracingInterceptor.beforeInvoke(java.lang.Object,java.lang.String,java.lang.Object[]) */
			/* name */ 'beforeInvoke',
			[/* parameters */
				[/* parameter */
					/* name */ 'object',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'methodName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arguments',
					/* type */ '[Ljava.lang.Object;',
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
		[/* public void groovy.lang.TracingInterceptor.setWriter(java.io.Writer) */
			/* name */ 'setWriter',
			[/* parameters */
				[/* parameter */
					/* name */ 'writer',
					/* type */ 'java.io.Writer',
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
		[/* protected java.io.Writer groovy.lang.TracingInterceptor.writer */
			/* name */ 'writer',
			/* type */ 'java.io.Writer',
			/* annotations */ UDF,
			/* modifiers */ 4
		]
	],
	/* enum values */ UDF
]);
