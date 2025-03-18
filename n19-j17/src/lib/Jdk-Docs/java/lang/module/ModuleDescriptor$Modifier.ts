import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.module.ModuleDescriptor$Modifier', [
	[/* class description */
		[/* text */ 't', `A modifier on a module.`]
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
		[/* enum value */ 'OPEN', [
			[/* enum value description */
				[/* text */ 't', `An open module. An open module does not declare any open packages
 but the resulting module is treated as if all packages are open.`]
			],
		]],
		[/* enum value */ 'AUTOMATIC', [
			[/* enum value description */
				[/* text */ 't', `An automatic module. An automatic module is treated as if it exports
 and opens all packages.`]
			],
		]],
		[/* enum value */ 'SYNTHETIC', [
			[/* enum value description */
				[/* text */ 't', `The module was not explicitly or implicitly declared.`]
			],
		]],
		[/* enum value */ 'MANDATED', [
			[/* enum value description */
				[/* text */ 't', `The module was implicitly declared.`]
			],
		]]
	],
]);
