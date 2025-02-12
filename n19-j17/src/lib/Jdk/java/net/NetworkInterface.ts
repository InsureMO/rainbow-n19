import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.net.NetworkInterface', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public java.lang.String java.net.NetworkInterface.getName() */
			/* name */ 'getName',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.net.NetworkInterface.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
		[/* public java.lang.String java.net.NetworkInterface.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.net.NetworkInterface.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.net.NetworkInterface java.net.NetworkInterface.getParent() */
			/* name */ 'getParent',
			/* parameters */,
			/* return */ 'java.net.NetworkInterface',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.net.NetworkInterface java.net.NetworkInterface.getByName(java.lang.String) throws java.net.SocketException */
			/* name */ 'getByName',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.net.NetworkInterface',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.net.SocketException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.net.NetworkInterface.getIndex() */
			/* name */ 'getIndex',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.stream.Stream<java.net.NetworkInterface> java.net.NetworkInterface.networkInterfaces() throws java.net.SocketException */
			/* name */ 'networkInterfaces',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.net.NetworkInterface'
				],
				/* raw type */ 'java.util.stream.Stream',
				/* owner type */ UDF
			]],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.net.SocketException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.Stream<java.net.InetAddress> java.net.NetworkInterface.inetAddresses() */
			/* name */ 'inetAddresses',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.net.InetAddress'
				],
				/* raw type */ 'java.util.stream.Stream',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.net.NetworkInterface.getDisplayName() */
			/* name */ 'getDisplayName',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Enumeration<java.net.InetAddress> java.net.NetworkInterface.getInetAddresses() */
			/* name */ 'getInetAddresses',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.net.InetAddress'
				],
				/* raw type */ 'java.util.Enumeration',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.List<java.net.InterfaceAddress> java.net.NetworkInterface.getInterfaceAddresses() */
			/* name */ 'getInterfaceAddresses',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.net.InterfaceAddress'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Enumeration<java.net.NetworkInterface> java.net.NetworkInterface.getSubInterfaces() */
			/* name */ 'getSubInterfaces',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.net.NetworkInterface'
				],
				/* raw type */ 'java.util.Enumeration',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.Stream<java.net.NetworkInterface> java.net.NetworkInterface.subInterfaces() */
			/* name */ 'subInterfaces',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.net.NetworkInterface'
				],
				/* raw type */ 'java.util.stream.Stream',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.net.NetworkInterface java.net.NetworkInterface.getByIndex(int) throws java.net.SocketException */
			/* name */ 'getByIndex',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.net.NetworkInterface',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.net.SocketException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.net.NetworkInterface java.net.NetworkInterface.getByInetAddress(java.net.InetAddress) throws java.net.SocketException */
			/* name */ 'getByInetAddress',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.net.InetAddress',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.net.NetworkInterface',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.net.SocketException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Enumeration<java.net.NetworkInterface> java.net.NetworkInterface.getNetworkInterfaces() throws java.net.SocketException */
			/* name */ 'getNetworkInterfaces',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.net.NetworkInterface'
				],
				/* raw type */ 'java.util.Enumeration',
				/* owner type */ UDF
			]],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.net.SocketException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.net.NetworkInterface.isUp() throws java.net.SocketException */
			/* name */ 'isUp',
			/* parameters */,
			/* return */ 'boolean',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.net.SocketException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.net.NetworkInterface.isLoopback() throws java.net.SocketException */
			/* name */ 'isLoopback',
			/* parameters */,
			/* return */ 'boolean',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.net.SocketException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.net.NetworkInterface.isPointToPoint() throws java.net.SocketException */
			/* name */ 'isPointToPoint',
			/* parameters */,
			/* return */ 'boolean',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.net.SocketException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.net.NetworkInterface.supportsMulticast() throws java.net.SocketException */
			/* name */ 'supportsMulticast',
			/* parameters */,
			/* return */ 'boolean',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.net.SocketException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public byte[] java.net.NetworkInterface.getHardwareAddress() throws java.net.SocketException */
			/* name */ 'getHardwareAddress',
			/* parameters */,
			/* return */ '[B',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.net.SocketException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.net.NetworkInterface.getMTU() throws java.net.SocketException */
			/* name */ 'getMTU',
			/* parameters */,
			/* return */ 'int',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.net.SocketException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.net.NetworkInterface.isVirtual() */
			/* name */ 'isVirtual',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
