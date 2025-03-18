import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.MethodHandles$Lookup$ClassOption', [
	[/* class description */
		[/* text */ 't', `The set of class options that specify whether a hidden class created by
 `],
		[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#defineHiddenClass(byte[],boolean,java.lang.invoke.MethodHandles.Lookup.ClassOption...)`, `Lookup::defineHiddenClass`],
		[/* text */ 't', ` method is dynamically added as a new member
 to the nest of a lookup class and/or whether a hidden class has
 a strong relationship with the class loader marked as its defining loader.`]
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
		[/* enum value */ 'NESTMATE', [
			[/* enum value description */
				[/* text */ 't', `Specifies that a hidden class be added to `],
				[/* reference */ 'r', `java.lang.Class#getNestHost()`, `nest`],
				[/* text */ 't', `
 of a lookup class as a nestmate.

 `],
				[/* block */ 'b', ` A hidden nestmate class has access to the private members of all
 classes and interfaces in the same nest.`]
			],
		]],
		[/* enum value */ 'STRONG', [
			[/* enum value description */
				[/* text */ 't', `Specifies that a hidden class has a `],
				[/* text */ 't', `strong`],
				[/* text */ 't', `
 relationship with the class loader marked as its defining loader,
 as a normal class or interface has with its own defining loader.
 This means that the hidden class may be unloaded if and only if
 its defining loader is not reachable and thus may be reclaimed
 by a garbage collector (JLS 12.7).

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` By default, a hidden class or interface may be unloaded
 even if the class loader that is marked as its defining loader is
 `],
					[/* text */ 't', `reachable`],
					[/* text */ 't', `.`]
				]]
			],
		]]
	],
]);
