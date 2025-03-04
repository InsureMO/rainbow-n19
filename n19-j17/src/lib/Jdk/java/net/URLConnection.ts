import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.net.URLConnection', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* protected java.net.URLConnection(java.net.URL) */
			[/* parameters */
				[/* parameter */
					/* name */ 'url',
					/* type */ 'java.net.URL',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public abstract void java.net.URLConnection.connect() throws java.io.IOException */
			/* name */ 'connect',
			/* parameters */,
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.net.URLConnection.getAllowUserInteraction() */
			/* name */ 'getAllowUserInteraction',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.net.URLConnection.getDefaultUseCaches() */
			/* name */ 'getDefaultUseCaches',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.net.URLConnection.getDoInput() */
			/* name */ 'getDoInput',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.net.URLConnection.getDoOutput() */
			/* name */ 'getDoOutput',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.net.URLConnection.getUseCaches() */
			/* name */ 'getUseCaches',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.net.URLConnection.getConnectTimeout() */
			/* name */ 'getConnectTimeout',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.net.URLConnection.getContentLength() */
			/* name */ 'getContentLength',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.net.URLConnection.getHeaderFieldInt(java.lang.String,int) */
			/* name */ 'getHeaderFieldInt',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'Default',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.net.URLConnection.getReadTimeout() */
			/* name */ 'getReadTimeout',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.InputStream java.net.URLConnection.getInputStream() throws java.io.IOException */
			/* name */ 'getInputStream',
			/* parameters */,
			/* return */ 'java.io.InputStream',
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
		[/* public java.io.OutputStream java.net.URLConnection.getOutputStream() throws java.io.IOException */
			/* name */ 'getOutputStream',
			/* parameters */,
			/* return */ 'java.io.OutputStream',
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
		[/* public java.lang.Object java.net.URLConnection.getContent() throws java.io.IOException */
			/* name */ 'getContent',
			/* parameters */,
			/* return */ 'java.lang.Object',
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
		[/* public java.lang.Object java.net.URLConnection.getContent(java.lang.Class<?>[]) throws java.io.IOException */
			/* name */ 'getContent',
			[/* parameters */
				[/* parameter */
					/* name */ 'classes',
					/* type */ [/* generic array type */ 'ga', [[/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* wildcard type */ 'wt', [
								[/* upper bounds */
									'java.lang.Object'
								],
								/* lower bounds */ UDF
							]]
						],
						/* raw type */ 'java.lang.Class',
						/* owner type */ UDF
					]]]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Object',
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
		[/* public java.lang.String java.net.URLConnection.getContentEncoding() */
			/* name */ 'getContentEncoding',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.net.URLConnection.getContentType() */
			/* name */ 'getContentType',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.net.URLConnection.getHeaderField(int) */
			/* name */ 'getHeaderField',
			[/* parameters */
				[/* parameter */
					/* name */ 'n',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.net.URLConnection.getHeaderField(java.lang.String) */
			/* name */ 'getHeaderField',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.net.URLConnection.getHeaderFieldKey(int) */
			/* name */ 'getHeaderFieldKey',
			[/* parameters */
				[/* parameter */
					/* name */ 'n',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.net.URLConnection.getRequestProperty(java.lang.String) */
			/* name */ 'getRequestProperty',
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.net.URLConnection.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.net.URL java.net.URLConnection.getURL() */
			/* name */ 'getURL',
			/* parameters */,
			/* return */ 'java.net.URL',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.security.Permission java.net.URLConnection.getPermission() throws java.io.IOException */
			/* name */ 'getPermission',
			/* parameters */,
			/* return */ 'java.security.Permission',
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
		[/* public java.util.Map<java.lang.String, java.util.List<java.lang.String>> java.net.URLConnection.getHeaderFields() */
			/* name */ 'getHeaderFields',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String',
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.Map',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Map<java.lang.String, java.util.List<java.lang.String>> java.net.URLConnection.getRequestProperties() */
			/* name */ 'getRequestProperties',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String',
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.Map',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.net.URLConnection.getContentLengthLong() */
			/* name */ 'getContentLengthLong',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.net.URLConnection.getDate() */
			/* name */ 'getDate',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.net.URLConnection.getExpiration() */
			/* name */ 'getExpiration',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.net.URLConnection.getHeaderFieldDate(java.lang.String,long) */
			/* name */ 'getHeaderFieldDate',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'Default',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.net.URLConnection.getHeaderFieldLong(java.lang.String,long) */
			/* name */ 'getHeaderFieldLong',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'Default',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.net.URLConnection.getIfModifiedSince() */
			/* name */ 'getIfModifiedSince',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.net.URLConnection.getLastModified() */
			/* name */ 'getLastModified',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static boolean java.net.URLConnection.getDefaultAllowUserInteraction() */
			/* name */ 'getDefaultAllowUserInteraction',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static boolean java.net.URLConnection.getDefaultUseCaches(java.lang.String) */
			/* name */ 'getDefaultUseCaches',
			[/* parameters */
				[/* parameter */
					/* name */ 'protocol',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.String java.net.URLConnection.getDefaultRequestProperty(java.lang.String) */
			/* name */ 'getDefaultRequestProperty',
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
			/* modifiers */ 9,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', ''],
					['p', 'forRemoval', false]
				]
			],
			/* type parameters */ UDF
		],
		[/* public static java.lang.String java.net.URLConnection.guessContentTypeFromName(java.lang.String) */
			/* name */ 'guessContentTypeFromName',
			[/* parameters */
				[/* parameter */
					/* name */ 'fname',
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
		],
		[/* public static java.lang.String java.net.URLConnection.guessContentTypeFromStream(java.io.InputStream) throws java.io.IOException */
			/* name */ 'guessContentTypeFromStream',
			[/* parameters */
				[/* parameter */
					/* name */ 'is',
					/* type */ 'java.io.InputStream',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.net.FileNameMap java.net.URLConnection.getFileNameMap() */
			/* name */ 'getFileNameMap',
			/* parameters */,
			/* return */ 'java.net.FileNameMap',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static synchronized void java.net.URLConnection.setContentHandlerFactory(java.net.ContentHandlerFactory) */
			/* name */ 'setContentHandlerFactory',
			[/* parameters */
				[/* parameter */
					/* name */ 'fac',
					/* type */ 'java.net.ContentHandlerFactory',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 41,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static void java.net.URLConnection.setDefaultAllowUserInteraction(boolean) */
			/* name */ 'setDefaultAllowUserInteraction',
			[/* parameters */
				[/* parameter */
					/* name */ 'defaultallowuserinteraction',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static void java.net.URLConnection.setDefaultRequestProperty(java.lang.String,java.lang.String) */
			/* name */ 'setDefaultRequestProperty',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'value',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', ''],
					['p', 'forRemoval', false]
				]
			],
			/* type parameters */ UDF
		],
		[/* public static void java.net.URLConnection.setDefaultUseCaches(java.lang.String,boolean) */
			/* name */ 'setDefaultUseCaches',
			[/* parameters */
				[/* parameter */
					/* name */ 'protocol',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'defaultVal',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static void java.net.URLConnection.setFileNameMap(java.net.FileNameMap) */
			/* name */ 'setFileNameMap',
			[/* parameters */
				[/* parameter */
					/* name */ 'map',
					/* type */ 'java.net.FileNameMap',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.net.URLConnection.addRequestProperty(java.lang.String,java.lang.String) */
			/* name */ 'addRequestProperty',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'value',
					/* type */ 'java.lang.String',
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
		[/* public void java.net.URLConnection.setAllowUserInteraction(boolean) */
			/* name */ 'setAllowUserInteraction',
			[/* parameters */
				[/* parameter */
					/* name */ 'allowuserinteraction',
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
		[/* public void java.net.URLConnection.setConnectTimeout(int) */
			/* name */ 'setConnectTimeout',
			[/* parameters */
				[/* parameter */
					/* name */ 'timeout',
					/* type */ 'int',
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
		[/* public void java.net.URLConnection.setDefaultUseCaches(boolean) */
			/* name */ 'setDefaultUseCaches',
			[/* parameters */
				[/* parameter */
					/* name */ 'defaultusecaches',
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
		[/* public void java.net.URLConnection.setDoInput(boolean) */
			/* name */ 'setDoInput',
			[/* parameters */
				[/* parameter */
					/* name */ 'doinput',
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
		[/* public void java.net.URLConnection.setDoOutput(boolean) */
			/* name */ 'setDoOutput',
			[/* parameters */
				[/* parameter */
					/* name */ 'dooutput',
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
		[/* public void java.net.URLConnection.setIfModifiedSince(long) */
			/* name */ 'setIfModifiedSince',
			[/* parameters */
				[/* parameter */
					/* name */ 'ifmodifiedsince',
					/* type */ 'long',
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
		[/* public void java.net.URLConnection.setReadTimeout(int) */
			/* name */ 'setReadTimeout',
			[/* parameters */
				[/* parameter */
					/* name */ 'timeout',
					/* type */ 'int',
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
		[/* public void java.net.URLConnection.setRequestProperty(java.lang.String,java.lang.String) */
			/* name */ 'setRequestProperty',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'value',
					/* type */ 'java.lang.String',
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
		[/* public void java.net.URLConnection.setUseCaches(boolean) */
			/* name */ 'setUseCaches',
			[/* parameters */
				[/* parameter */
					/* name */ 'usecaches',
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
		]
	],
	[/* declared fields */
		[/* protected boolean java.net.URLConnection.allowUserInteraction */
			/* name */ 'allowUserInteraction',
			/* type */ 'boolean',
			/* annotations */ UDF,
			/* modifiers */ 4
		],
		[/* protected boolean java.net.URLConnection.connected */
			/* name */ 'connected',
			/* type */ 'boolean',
			/* annotations */ UDF,
			/* modifiers */ 4
		],
		[/* protected boolean java.net.URLConnection.doInput */
			/* name */ 'doInput',
			/* type */ 'boolean',
			/* annotations */ UDF,
			/* modifiers */ 4
		],
		[/* protected boolean java.net.URLConnection.doOutput */
			/* name */ 'doOutput',
			/* type */ 'boolean',
			/* annotations */ UDF,
			/* modifiers */ 4
		],
		[/* protected long java.net.URLConnection.ifModifiedSince */
			/* name */ 'ifModifiedSince',
			/* type */ 'long',
			/* annotations */ UDF,
			/* modifiers */ 4
		],
		[/* protected java.net.URL java.net.URLConnection.url */
			/* name */ 'url',
			/* type */ 'java.net.URL',
			/* annotations */ UDF,
			/* modifiers */ 4
		],
		[/* protected boolean java.net.URLConnection.useCaches */
			/* name */ 'useCaches',
			/* type */ 'boolean',
			/* annotations */ UDF,
			/* modifiers */ 4
		]
	],
	/* enum values */ UDF
]);
