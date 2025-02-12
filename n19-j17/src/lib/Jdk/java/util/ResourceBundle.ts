import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.ResourceBundle', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.util.ResourceBundle() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* protected abstract java.lang.Object java.util.ResourceBundle.handleGetObject(java.lang.String) */
			/* name */ 'handleGetObject',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
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
		[/* protected java.util.Set<java.lang.String> java.util.ResourceBundle.handleKeySet() */
			/* name */ 'handleKeySet',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String'
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* protected void java.util.ResourceBundle.setParent(java.util.ResourceBundle) */
			/* name */ 'setParent',
			[/* parameters */
				[/* parameter */
					/* name */ 'parent',
					/* type */ 'java.util.ResourceBundle',
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
		[/* public abstract java.util.Enumeration<java.lang.String> java.util.ResourceBundle.getKeys() */
			/* name */ 'getKeys',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String'
				],
				/* raw type */ 'java.util.Enumeration',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.ResourceBundle.containsKey(java.lang.String) */
			/* name */ 'containsKey',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'java.lang.String',
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
		[/* public final java.lang.Object java.util.ResourceBundle.getObject(java.lang.String) */
			/* name */ 'getObject',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.String java.util.ResourceBundle.getString(java.lang.String) */
			/* name */ 'getString',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.String[] java.util.ResourceBundle.getStringArray(java.lang.String) */
			/* name */ 'getStringArray',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ '[Ljava.lang.String;',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.ResourceBundle.getBaseBundleName() */
			/* name */ 'getBaseBundleName',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Locale java.util.ResourceBundle.getLocale() */
			/* name */ 'getLocale',
			/* parameters */,
			/* return */ 'java.util.Locale',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Set<java.lang.String> java.util.ResourceBundle.keySet() */
			/* name */ 'keySet',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String'
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static final java.util.ResourceBundle java.util.ResourceBundle.getBundle(java.lang.String) */
			/* name */ 'getBundle',
			[/* parameters */
				[/* parameter */
					/* name */ 'baseName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.ResourceBundle',
			/* exceptions */,
			/* modifiers */ 25,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive']
			],
			/* type parameters */ UDF
		],
		[/* public static final java.util.ResourceBundle java.util.ResourceBundle.getBundle(java.lang.String,java.util.Locale) */
			/* name */ 'getBundle',
			[/* parameters */
				[/* parameter */
					/* name */ 'baseName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'locale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.ResourceBundle',
			/* exceptions */,
			/* modifiers */ 25,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive']
			],
			/* type parameters */ UDF
		],
		[/* public static final java.util.ResourceBundle java.util.ResourceBundle.getBundle(java.lang.String,java.util.Locale,java.util.ResourceBundle$Control) */
			/* name */ 'getBundle',
			[/* parameters */
				[/* parameter */
					/* name */ 'baseName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'targetLocale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'control',
					/* type */ 'java.util.ResourceBundle$Control',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.ResourceBundle',
			/* exceptions */,
			/* modifiers */ 25,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive']
			],
			/* type parameters */ UDF
		],
		[/* public static final java.util.ResourceBundle java.util.ResourceBundle.getBundle(java.lang.String,java.util.ResourceBundle$Control) */
			/* name */ 'getBundle',
			[/* parameters */
				[/* parameter */
					/* name */ 'baseName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'control',
					/* type */ 'java.util.ResourceBundle$Control',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.ResourceBundle',
			/* exceptions */,
			/* modifiers */ 25,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive']
			],
			/* type parameters */ UDF
		],
		[/* public static final void java.util.ResourceBundle.clearCache() */
			/* name */ 'clearCache',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 25,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive']
			],
			/* type parameters */ UDF
		],
		[/* public static final void java.util.ResourceBundle.clearCache(java.lang.ClassLoader) */
			/* name */ 'clearCache',
			[/* parameters */
				[/* parameter */
					/* name */ 'loader',
					/* type */ 'java.lang.ClassLoader',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 25,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.ResourceBundle java.util.ResourceBundle.getBundle(java.lang.String,java.lang.Module) */
			/* name */ 'getBundle',
			[/* parameters */
				[/* parameter */
					/* name */ 'baseName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'module',
					/* type */ 'java.lang.Module',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.ResourceBundle',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive']
			],
			/* type parameters */ UDF
		],
		[/* public static java.util.ResourceBundle java.util.ResourceBundle.getBundle(java.lang.String,java.util.Locale,java.lang.ClassLoader) */
			/* name */ 'getBundle',
			[/* parameters */
				[/* parameter */
					/* name */ 'baseName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'locale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'loader',
					/* type */ 'java.lang.ClassLoader',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.ResourceBundle',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive']
			],
			/* type parameters */ UDF
		],
		[/* public static java.util.ResourceBundle java.util.ResourceBundle.getBundle(java.lang.String,java.util.Locale,java.lang.ClassLoader,java.util.ResourceBundle$Control) */
			/* name */ 'getBundle',
			[/* parameters */
				[/* parameter */
					/* name */ 'baseName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'targetLocale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'loader',
					/* type */ 'java.lang.ClassLoader',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'control',
					/* type */ 'java.util.ResourceBundle$Control',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.ResourceBundle',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive']
			],
			/* type parameters */ UDF
		],
		[/* public static java.util.ResourceBundle java.util.ResourceBundle.getBundle(java.lang.String,java.util.Locale,java.lang.Module) */
			/* name */ 'getBundle',
			[/* parameters */
				[/* parameter */
					/* name */ 'baseName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'targetLocale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'module',
					/* type */ 'java.lang.Module',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.ResourceBundle',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.reflect.CallerSensitive']
			],
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* protected java.util.ResourceBundle java.util.ResourceBundle.parent */
			/* name */ 'parent',
			/* type */ 'java.util.ResourceBundle',
			/* annotations */ UDF,
			/* modifiers */ 4
		]
	],
	/* enum values */ UDF
]);
