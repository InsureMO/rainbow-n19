import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.module.ModuleDescriptor$Requires$Modifier', [
	[/* class description */
		[/* text */ 't', `A modifier on a module dependence.`]
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
		[/* enum value */ 'TRANSITIVE', [
			[/* enum value description */
				[/* text */ 't', `The dependence causes any module which depends on the `],
				[/* text */ 't', `current
 module`],
				[/* text */ 't', ` to have an implicitly declared dependence on the module
 named by the `],
				[/* inline code block */ 'i', `Requires`],
				[/* text */ 't', `.`]
			],
		]],
		[/* enum value */ 'STATIC', [
			[/* enum value description */
				[/* text */ 't', `The dependence is mandatory in the static phase, during compilation,
 but is optional in the dynamic phase, during execution.`]
			],
		]],
		[/* enum value */ 'SYNTHETIC', [
			[/* enum value description */
				[/* text */ 't', `The dependence was not explicitly or implicitly declared in the
 source of the module declaration.`]
			],
		]],
		[/* enum value */ 'MANDATED', [
			[/* enum value description */
				[/* text */ 't', `The dependence was implicitly declared in the source of the module
 declaration.`]
			],
		]]
	],
]);
