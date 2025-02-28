import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.VarHandle$AccessMode', [
	[/* class description */
		[/* text */ 't', `The set of access modes that specify how a variable, referenced by a
 VarHandle, is accessed.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
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
		[/* method */ 'methodName()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `VarHandle`],
				[/* text */ 't', ` signature-polymorphic method name
 associated with this `],
				[/* inline code block */ 'i', `AccessMode`],
				[/* text */ 't', ` value.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the signature-polymorphic method name`]
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
		[/* method */ 'valueFromMethodName(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `AccessMode`],
				[/* text */ 't', ` value associated with the specified
 `],
				[/* inline code block */ 'i', `VarHandle`],
				[/* text */ 't', ` signature-polymorphic method name.`]
			],
			[/* parameters */
				[/* parameter */ 'methodName', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic method name`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if there is no `],
					[/* inline code block */ 'i', `AccessMode`],
					[/* text */ 't', `
         value associated with method name (indicating the method
         name does not correspond to a `],
					[/* inline code block */ 'i', `VarHandle`],
					[/* text */ 't', `
         signature-polymorphic method name).`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `AccessMode`],
				[/* text */ 't', ` value`]
			]
		]]
	],
]);
