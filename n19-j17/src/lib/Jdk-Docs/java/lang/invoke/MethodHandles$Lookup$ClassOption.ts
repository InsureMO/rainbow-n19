import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.MethodHandles$Lookup$ClassOption', [
	[/* class description */
		[/* text */ 't', `The set of class options that specify whether a hidden class created by
 `],
		[/* reference */ 'r', `.MethodHandles.Lookup#defineHiddenClass(byte[],boolean,java.lang.invoke.MethodHandles.Lookup.ClassOption...)`],
		[/* text */ 't', ` method is dynamically added as a new member
 to the nest of a lookup class and/or whether a hidden class has
 a strong relationship with the class loader marked as its defining loader.`]
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
