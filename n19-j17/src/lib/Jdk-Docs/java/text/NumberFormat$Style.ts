import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.NumberFormat$Style', [
	[/* class description */
		[/* text */ 't', `A number format style.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* inline code block */ 'i', `Style`],
			[/* text */ 't', ` is an enum which represents the style for formatting
 a number within a given `],
			[/* inline code block */ 'i', `NumberFormat`],
			[/* text */ 't', ` instance.`]
		]]
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
		[/* enum value */ 'SHORT', [
			[/* enum value description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `SHORT`],
				[/* text */ 't', ` number format style.`]
			],
		]],
		[/* enum value */ 'LONG', [
			[/* enum value description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `LONG`],
				[/* text */ 't', ` number format style.`]
			],
		]]
	],
]);
