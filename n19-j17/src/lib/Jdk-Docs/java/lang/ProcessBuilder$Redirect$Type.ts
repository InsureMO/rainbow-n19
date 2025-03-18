import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.ProcessBuilder$Redirect$Type', [
	[/* class description */
		[/* text */ 't', `The type of a `],
		[/* reference */ 'r', `java.lang.ProcessBuilder.Redirect`, `ProcessBuilder.Redirect`],
		[/* text */ 't', `.`]
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
		[/* enum value */ 'PIPE', [
			[/* enum value description */
				[/* text */ 't', `The type of `],
				[/* reference */ 'r', `java.lang.ProcessBuilder.Redirect#PIPE`, `Redirect.PIPE`],
				[/* text */ 't', `.`]
			],
		]],
		[/* enum value */ 'INHERIT', [
			[/* enum value description */
				[/* text */ 't', `The type of `],
				[/* reference */ 'r', `java.lang.ProcessBuilder.Redirect#INHERIT`, `Redirect.INHERIT`],
				[/* text */ 't', `.`]
			],
		]],
		[/* enum value */ 'READ', [
			[/* enum value description */
				[/* text */ 't', `The type of redirects returned from
 `],
				[/* reference */ 'r', `java.lang.ProcessBuilder.Redirect#from(java.io.File)`, `Redirect.from(File)`],
				[/* text */ 't', `.`]
			],
		]],
		[/* enum value */ 'WRITE', [
			[/* enum value description */
				[/* text */ 't', `The type of redirects returned from
 `],
				[/* reference */ 'r', `java.lang.ProcessBuilder.Redirect#to(java.io.File)`, `Redirect.to(File)`],
				[/* text */ 't', `.`]
			],
		]],
		[/* enum value */ 'APPEND', [
			[/* enum value description */
				[/* text */ 't', `The type of redirects returned from
 `],
				[/* reference */ 'r', `java.lang.ProcessBuilder.Redirect#appendTo(java.io.File)`, `Redirect.appendTo(File)`],
				[/* text */ 't', `.`]
			],
		]]
	],
]);
