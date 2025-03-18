import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.constant.DirectMethodHandleDesc$Kind', [
	[/* class description */
		[/* text */ 't', `Kinds of method handles that can be described with `],
		[/* reference */ 'r', `java.lang.constant.DirectMethodHandleDesc`, `DirectMethodHandleDesc`],
		[/* text */ 't', `.`]
	],
	[/* fields */
		[/* field */ 'isInterface', [
			[/* field description */
				[/* text */ 't', `Is this an interface`]
			],
		]],
		[/* field */ 'refKind', [
			[/* field description */
				[/* text */ 't', `The corresponding `],
				[/* inline code block */ 'i', `refKind`],
				[/* text */ 't', ` value for this kind of method handle,
 as defined by `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandleInfo`, `MethodHandleInfo`]
			],
		]]
	],
	/* constructors */,
	[/* methods */
		[/* method */ 'valueOf(int)', [
			[/* method description */
				[/* text */ 't', `Returns the enumeration member with the given `],
				[/* inline code block */ 'i', `refKind`],
				[/* text */ 't', ` field.
 Behaves as if `],
				[/* inline code block */ 'i', `valueOf(refKind, false)`],
				[/* text */ 't', `.  As a special case,
 if `],
				[/* inline code block */ 'i', `refKind`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `REF_invokeInterface`],
				[/* text */ 't', ` (9) then the
 `],
				[/* inline code block */ 'i', `isInterface`],
				[/* text */ 't', ` field will be true.`]
			],
			[/* parameters */
				[/* parameter */ 'refKind', [/* parameter description */
					[/* text */ 't', `refKind of desired member`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if there is no such member`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the matching enumeration member`]
			]
		]],
		[/* method */ 'valueOf(int,boolean)', [
			[/* method description */
				[/* text */ 't', `Returns the enumeration member with the given the `],
				[/* inline code block */ 'i', `refKind`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `isInterface`],
				[/* text */ 't', ` arguments.
 For most values of `],
				[/* inline code block */ 'i', `refKind`],
				[/* text */ 't', ` there is an exact match regardless of the value of `],
				[/* inline code block */ 'i', `isInterface`],
				[/* text */ 't', `.
 These are:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `REF_invokeVirtual`],
						[/* text */ 't', ` which matches to `],
						[/* inline code block */ 'i', `VIRTUAL`],
						[/* text */ 't', `
     `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `REF_invokeInterface`],
						[/* text */ 't', ` which matches to `],
						[/* inline code block */ 'i', `INTERFACE_VIRTUAL`],
						[/* text */ 't', `
     `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `REF_newInvokeSpecial`],
						[/* text */ 't', ` which matches to `],
						[/* inline code block */ 'i', `CONSTRUCTOR`],
						[/* text */ 't', `
     `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `REF_getField`],
						[/* text */ 't', ` which matches to `],
						[/* inline code block */ 'i', `GETTER`],
						[/* text */ 't', `
     `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `REF_putField`],
						[/* text */ 't', ` which matches to `],
						[/* inline code block */ 'i', `SETTER`],
						[/* text */ 't', `
     `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `REF_getStatic`],
						[/* text */ 't', ` which matches to `],
						[/* inline code block */ 'i', `STATIC_GETTER`],
						[/* text */ 't', `
     `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `REF_putStatic`],
						[/* text */ 't', ` which matches to `],
						[/* inline code block */ 'i', `STATIC_SETTER`],
						[/* text */ 't', `
 `]
					]]
				]],
				[/* text */ 't', `
 As for the rest, the returned kind will depend on the value (false or true accordingly) of `],
				[/* inline code block */ 'i', `isInterface`],
				[/* text */ 't', `:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `REF_invokeStatic`],
						[/* text */ 't', ` which matches to `],
						[/* inline code block */ 'i', `STATIC`],
						[/* text */ 't', ` or `],
						[/* inline code block */ 'i', `INTERFACE_STATIC`],
						[/* text */ 't', `
     `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `REF_invokeSpecial`],
						[/* text */ 't', ` which matches to `],
						[/* inline code block */ 'i', `SPECIAL`],
						[/* text */ 't', ` or `],
						[/* inline code block */ 'i', `INTERFACE_SPECIAL`],
						[/* text */ 't', `
 `]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'refKind', [/* parameter description */
					[/* text */ 't', `refKind of desired member`]
				]],
				[/* parameter */ 'isInterface', [/* parameter description */
					[/* text */ 't', `whether desired member is for interface methods`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if there is no such member`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the matching enumeration member`]
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
		[/* enum value */ 'STATIC', [
			[/* enum value description */
				[/* text */ 't', `A method handle for a method invoked as with `],
				[/* inline code block */ 'i', `invokestatic`]
			],
		]],
		[/* enum value */ 'INTERFACE_STATIC', [
			[/* enum value description */
				[/* text */ 't', `A method handle for a method invoked as with `],
				[/* inline code block */ 'i', `invokestatic`]
			],
		]],
		[/* enum value */ 'VIRTUAL', [
			[/* enum value description */
				[/* text */ 't', `A method handle for a method invoked as with `],
				[/* inline code block */ 'i', `invokevirtual`]
			],
		]],
		[/* enum value */ 'INTERFACE_VIRTUAL', [
			[/* enum value description */
				[/* text */ 't', `A method handle for a method invoked as with `],
				[/* inline code block */ 'i', `invokeinterface`]
			],
		]],
		[/* enum value */ 'SPECIAL', [
			[/* enum value description */
				[/* text */ 't', `A method handle for a method invoked as with `],
				[/* inline code block */ 'i', `invokespecial`]
			],
		]],
		[/* enum value */ 'INTERFACE_SPECIAL', [
			[/* enum value description */
				[/* text */ 't', `A method handle for an interface method invoked as with `],
				[/* inline code block */ 'i', `invokespecial`]
			],
		]],
		[/* enum value */ 'CONSTRUCTOR', [
			[/* enum value description */
				[/* text */ 't', `A method handle for a constructor`]
			],
		]],
		[/* enum value */ 'GETTER', [
			[/* enum value description */
				[/* text */ 't', `A method handle for a read accessor for an instance field`]
			],
		]],
		[/* enum value */ 'SETTER', [
			[/* enum value description */
				[/* text */ 't', `A method handle for a write accessor for an instance field`]
			],
		]],
		[/* enum value */ 'STATIC_GETTER', [
			[/* enum value description */
				[/* text */ 't', `A method handle for a read accessor for a static field`]
			],
		]],
		[/* enum value */ 'STATIC_SETTER', [
			[/* enum value description */
				[/* text */ 't', `A method handle for a write accessor for a static field`]
			],
		]]
	],
]);
