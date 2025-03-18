import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.net.Proxy$Type', [
	[/* class description */
		[/* text */ 't', `Represents the proxy type.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'valueOf(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the enum constant of this class with the specified name.
The string must match `],
				[/* text */ 't', `exactly`],
				[/* text */ 't', ` an identifier used to declare an
enum constant in this class.  (Extraneous whitespace characters are 
not permitted.)`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the enum constant to be returned.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if this enum class has no constant with the specified name`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the enum constant with the specified name`]
			]
		]],
		[/* method */ 'values()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing the constants of this enum class, in
the order they are declared.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an array containing the constants of this enum class, in the order they are declared`]
			]
		]]
	],
	[/* enum values */
		[/* enum value */ 'DIRECT', [
			[/* enum value description */
				[/* text */ 't', `Represents a direct connection, or the absence of a proxy.`]
			],
		]],
		[/* enum value */ 'HTTP', [
			[/* enum value description */
				[/* text */ 't', `Represents proxy for high level protocols such as HTTP or FTP.`]
			],
		]],
		[/* enum value */ 'SOCKS', [
			[/* enum value description */
				[/* text */ 't', `Represents a SOCKS (V4 or V5) proxy.`]
			],
		]]
	],
]);
