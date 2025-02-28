import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.System$Logger$Level', [
	[/* class description */
		[/* text */ 't', `System `],
		[/* reference */ 'r', `java.lang.System.Logger`],
		[/* text */ 't', ` levels.

 A level has a `],
		[/* reference */ 'r', `name`],
		[/* text */ 't', ` and `],
		[/* reference */ 'r', `severity`],
		[/* text */ 't', `.
 Level values are `],
		[/* text */ 't', `ALL`],
		[/* text */ 't', `, `],
		[/* text */ 't', `TRACE`],
		[/* text */ 't', `, `],
		[/* text */ 't', `DEBUG`],
		[/* text */ 't', `,
 `],
		[/* text */ 't', `INFO`],
		[/* text */ 't', `, `],
		[/* text */ 't', `WARNING`],
		[/* text */ 't', `, `],
		[/* text */ 't', `ERROR`],
		[/* text */ 't', `, `],
		[/* text */ 't', `OFF`],
		[/* text */ 't', `,
 by order of increasing severity.
 `],
		[/* new line */ 'n'],
		[/* text */ 't', `ALL`],
		[/* text */ 't', ` and `],
		[/* text */ 't', `OFF`],
		[/* text */ 't', `
 are simple markers with severities mapped respectively to
 `],
		[/* external link */ 'a', `Integer.html#MIN_VALUE`, `Integer.MIN_VALUE`],
		[/* text */ 't', ` and
 `],
		[/* external link */ 'a', `Integer.html#MAX_VALUE`, `Integer.MAX_VALUE`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `java.util.logging.Level`]
		]],
		[/* block */ 'b', [
			[/* reference */ 'r', `enum class in java.lang.System.Logger.Level`],
			[/* text */ 't', ` are mapped to
 `],
			[/* reference */ 'r', `java.util.logging.Level`],
			[/* text */ 't', `
 of corresponding severity.
 `],
			[/* new line */ 'n'],
			[/* text */ 't', `The mapping is as follows:
 `],
			[/* new line */ 'n'],
			[/* new line */ 'n']
		]],
		[/* table */ 't', ''],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of this level.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this level `],
				[/* external link */ 'a', `Enum.html#name()`, `Enum.name()`],
				[/* text */ 't', `.`]
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
		]],
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
		[/* method */ 'getSeverity()', [
			[/* method description */
				[/* text */ 't', `Returns the severity of this level.
 A higher severity means a more severe condition.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this level severity.`]
			]
		]]
	],
]);
