import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.format.SignStyle', [
	[/* class description */
		[/* text */ 't', `Enumeration of ways to handle the positive/negative sign.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The formatting engine allows the positive and negative signs of numbers
 to be controlled using this enum.
 See `],
			[/* reference */ 'r', `java.time.format.DateTimeFormatterBuilder`, `DateTimeFormatterBuilder`],
			[/* text */ 't', ` for usage.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
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
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array containing the constants of this enum class, in the order they are declared`]
			]
		]]
	],
]);
