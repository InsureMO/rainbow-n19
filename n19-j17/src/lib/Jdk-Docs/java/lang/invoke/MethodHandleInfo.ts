import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.MethodHandleInfo', [
	[/* class description */
		[/* text */ 't', `A symbolic reference obtained by cracking a direct method handle
 into its constituent symbolic parts.
 To crack a direct method handle, call `],
		[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#revealDirect(java.lang.invoke.MethodHandle)`, `Lookup.revealDirect`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `directmh`, ``],
			[/* text */ 't', `Direct Method Handles`]
		]],
		[/* text */ 't', `
 A `],
		[/* text */ 't', `direct method handle`],
		[/* text */ 't', ` represents a method, constructor, or field without
 any intervening argument bindings or other transformations.
 The method, constructor, or field referred to by a direct method handle is called
 its `],
		[/* text */ 't', `underlying member`],
		[/* text */ 't', `.
 Direct method handles may be obtained in any of these ways:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `By executing an `],
				[/* inline code block */ 'i', `ldc`],
				[/* text */ 't', ` instruction on a `],
				[/* inline code block */ 'i', `CONSTANT_MethodHandle`],
				[/* text */ 't', ` constant.
     (See the Java Virtual Machine Specification, sections `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.4.8`, `4.4.8`],
				[/* text */ 't', ` and `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-5.html#jvms-5.4.3`, `5.4.3`],
				[/* text */ 't', `.)
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `By calling one of the `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#lookups`, `Lookup Factory Methods`],
				[/* text */ 't', `,
     such as `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#findVirtual(java.lang.Class,java.lang.String,java.lang.invoke.MethodType)`, `Lookup.findVirtual`],
				[/* text */ 't', `,
     to resolve a symbolic reference into a method handle.
     A symbolic reference consists of a class, name string, and type.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `By calling the factory method `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#unreflect(java.lang.reflect.Method)`, `Lookup.unreflect`],
				[/* text */ 't', `
     or `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#unreflectSpecial(java.lang.reflect.Method,java.lang.Class)`, `Lookup.unreflectSpecial`],
				[/* text */ 't', `
     to convert a `],
				[/* reference */ 'r', `java.lang.reflect.Method`, `Method`],
				[/* text */ 't', ` into a method handle.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `By calling the factory method `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#unreflectConstructor(java.lang.reflect.Constructor)`, `Lookup.unreflectConstructor`],
				[/* text */ 't', `
     to convert a `],
				[/* reference */ 'r', `java.lang.reflect.Constructor`, `Constructor`],
				[/* text */ 't', ` into a method handle.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `By calling the factory method `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#unreflectGetter(java.lang.reflect.Field)`, `Lookup.unreflectGetter`],
				[/* text */ 't', `
     or `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#unreflectSetter(java.lang.reflect.Field)`, `Lookup.unreflectSetter`],
				[/* text */ 't', `
     to convert a `],
				[/* reference */ 'r', `java.lang.reflect.Field`, `Field`],
				[/* text */ 't', ` into a method handle.
 `]
			]]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', `Restrictions on Cracking`],
		[/* text */ 't', `
 Given a suitable `],
		[/* inline code block */ 'i', `Lookup`],
		[/* text */ 't', ` object, it is possible to crack any direct method handle
 to recover a symbolic reference for the underlying method, constructor, or field.
 Cracking must be done via a `],
		[/* inline code block */ 'i', `Lookup`],
		[/* text */ 't', ` object equivalent to that which created
 the target method handle, or which has enough access permissions to recreate
 an equivalent method handle.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 If the underlying method is `],
			[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#callsens`, `caller sensitive`],
			[/* text */ 't', `,
 the direct method handle will have been "bound" to a particular caller class, the
 `],
			[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#lookupClass()`, `lookup class`],
			[/* text */ 't', `
 of the lookup object used to create it.
 Cracking this method handle with a different lookup class will fail
 even if the underlying method is public (like `],
			[/* inline code block */ 'i', `Class.forName`],
			[/* text */ 't', `).
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The requirement of lookup object matching provides a "fast fail" behavior
 for programs which may otherwise trust erroneous revelation of a method
 handle with symbolic information (or caller binding) from an unexpected scope.
 Use `],
			[/* reference */ 'r', `java.lang.invoke.MethodHandles#reflectAs(java.lang.Class,java.lang.invoke.MethodHandle)`, `MethodHandles.reflectAs(java.lang.Class<T>, java.lang.invoke.MethodHandle)`],
			[/* text */ 't', ` to override this limitation.

 `]
		]],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `refkinds`, ``],
			[/* text */ 't', `Reference kinds`]
		]],
		[/* text */ 't', `
 The `],
		[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#lookups`, `Lookup Factory Methods`],
		[/* text */ 't', `
 correspond to all major use cases for methods, constructors, and fields.
 These use cases may be distinguished using small integers as follows:
 `],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `reference kind`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `descriptive name`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `scope`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `member`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `behavior`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `1`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `REF_getField`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `class`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `FT f;`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `(T) this.f;`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `2`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `REF_getStatic`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `class`],
						[/* text */ 't', ` or `],
						[/* inline code block */ 'i', `interface`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `static`],
						[/* new line */ 'n'],
						[/* inline code block */ 'i', `FT f;`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `(T) C.f;`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `3`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `REF_putField`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `class`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `FT f;`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `this.f = x;`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `4`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `REF_putStatic`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `class`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `static`],
						[/* new line */ 'n'],
						[/* inline code block */ 'i', `FT f;`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `C.f = arg;`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `5`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `REF_invokeVirtual`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `class`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `T m(A*);`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `(T) this.m(arg*);`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `6`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `REF_invokeStatic`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `class`],
						[/* text */ 't', ` or `],
						[/* inline code block */ 'i', `interface`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `static`],
						[/* new line */ 'n'],
						[/* inline code block */ 'i', `T m(A*);`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `(T) C.m(arg*);`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `7`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `REF_invokeSpecial`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `class`],
						[/* text */ 't', ` or `],
						[/* inline code block */ 'i', `interface`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `T m(A*);`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `(T) super.m(arg*);`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `8`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `REF_newInvokeSpecial`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `class`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `C(A*);`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `new C(arg*);`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `9`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `REF_invokeInterface`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `interface`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `T m(A*);`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `(T) this.m(arg*);`]
					]]
				]]
			]],
		]
	],
	[/* fields */
		[/* field */ 'REF_getField', [
			[/* field description */
				[/* text */ 't', `A direct method handle reference kind,
 as defined in the `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandleInfo#refkinds`, `table above`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'REF_getStatic', [
			[/* field description */
				[/* text */ 't', `A direct method handle reference kind,
 as defined in the `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandleInfo#refkinds`, `table above`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'REF_invokeInterface', [
			[/* field description */
				[/* text */ 't', `A direct method handle reference kind,
 as defined in the `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandleInfo#refkinds`, `table above`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'REF_invokeSpecial', [
			[/* field description */
				[/* text */ 't', `A direct method handle reference kind,
 as defined in the `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandleInfo#refkinds`, `table above`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'REF_invokeStatic', [
			[/* field description */
				[/* text */ 't', `A direct method handle reference kind,
 as defined in the `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandleInfo#refkinds`, `table above`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'REF_invokeVirtual', [
			[/* field description */
				[/* text */ 't', `A direct method handle reference kind,
 as defined in the `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandleInfo#refkinds`, `table above`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'REF_newInvokeSpecial', [
			[/* field description */
				[/* text */ 't', `A direct method handle reference kind,
 as defined in the `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandleInfo#refkinds`, `table above`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'REF_putField', [
			[/* field description */
				[/* text */ 't', `A direct method handle reference kind,
 as defined in the `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandleInfo#refkinds`, `table above`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'REF_putStatic', [
			[/* field description */
				[/* text */ 't', `A direct method handle reference kind,
 as defined in the `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandleInfo#refkinds`, `table above`],
				[/* text */ 't', `.`]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'reflectAs(java.lang.Class,java.lang.invoke.MethodHandles.Lookup)', [
			[/* method description */
				[/* text */ 't', `Reflects the underlying member as a method, constructor, or field object.
 If the underlying member is public, it is reflected as if by
 `],
				[/* inline code block */ 'i', `getMethod`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `getConstructor`],
				[/* text */ 't', `, or `],
				[/* inline code block */ 'i', `getField`],
				[/* text */ 't', `.
 Otherwise, it is reflected as if by
 `],
				[/* inline code block */ 'i', `getDeclaredMethod`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `getDeclaredConstructor`],
				[/* text */ 't', `, or `],
				[/* inline code block */ 'i', `getDeclaredField`],
				[/* text */ 't', `.
 The underlying member must be accessible to the given lookup object.`]
			],
			[/* parameters */
				[/* parameter */ 'expected', [/* parameter description */
					[/* text */ 't', `a class object representing the desired result type `],
					[/* inline code block */ 'i', `T`]
				]],
				[/* parameter */ 'lookup', [/* parameter description */
					[/* text */ 't', `the lookup object that created this MethodHandleInfo, or one with equivalent access privileges`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the member is not of the expected type`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either argument is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the underlying member is not accessible to the given lookup object`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a reference to the method, constructor, or field object`]
			]
		]],
		[/* method */ 'getModifiers()', [
			[/* method description */
				[/* text */ 't', `Returns the access modifiers of the underlying member.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the Java language modifiers for underlying member,
         or -1 if the member cannot be accessed`]
			]
		]],
		[/* method */ 'getReferenceKind()', [
			[/* method description */
				[/* text */ 't', `Returns the reference kind of the cracked method handle, which in turn
 determines whether the method handle's underlying member was a constructor, method, or field.
 See the `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandleInfo#refkinds`, `table above`],
				[/* text */ 't', ` for definitions.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the integer code for the kind of reference used to access the underlying member`]
			]
		]],
		[/* method */ 'getDeclaringClass()', [
			[/* method description */
				[/* text */ 't', `Returns the class in which the cracked method handle's underlying member was defined.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the declaring class of the underlying member`]
			]
		]],
		[/* method */ 'getMethodType()', [
			[/* method description */
				[/* text */ 't', `Returns the nominal type of the cracked symbolic reference, expressed as a method type.
 If the reference is to a constructor, the return type will be `],
				[/* inline code block */ 'i', `void`],
				[/* text */ 't', `.
 If it is to a non-static method, the method type will not mention the `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` parameter.
 If it is to a field and the requested access is to read the field,
 the method type will have no parameters and return the field type.
 If it is to a field and the requested access is to write the field,
 the method type will have one parameter of the field type and return `],
				[/* inline code block */ 'i', `void`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that original direct method handle may include a leading `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` parameter,
 or (in the case of a constructor) will replace the `],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', ` return type
 with the constructed class.
 The nominal type does not include any `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` parameter,
 and (in the case of a constructor) will return `],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the type of the underlying member, expressed as a method type`]
			]
		]],
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of the cracked method handle's underlying member.
 This is `],
				[/* inline code block */ 'i', `"<init>"`],
				[/* text */ 't', ` if the underlying member was a constructor,
 else it is a simple method name or field name.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the simple name of the underlying member`]
			]
		]],
		[/* method */ 'isVarArgs()', [
			[/* method description */
				[/* text */ 't', `Determines if the underlying member was a variable arity method or constructor.
 Such members are represented by method handles that are varargs collectors.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the underlying member was declared with variable arity.`]
			]
		]],
		[/* method */ 'referenceKindToString(int)', [
			[/* method description */
				[/* text */ 't', `Returns the descriptive name of the given reference kind,
 as defined in the `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandleInfo#refkinds`, `table above`],
				[/* text */ 't', `.
 The conventional prefix "REF_" is omitted.`]
			],
			[/* parameters */
				[/* parameter */ 'referenceKind', [/* parameter description */
					[/* text */ 't', `an integer code for a kind of reference used to access a class member`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the argument is not a valid
            `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandleInfo#refkinds`, `reference kind number`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a mixed-case string such as `],
				[/* inline code block */ 'i', `"getField"`]
			]
		]],
		[/* method */ 'toString(int,java.lang.Class,java.lang.String,java.lang.invoke.MethodType)', [
			[/* method description */
				[/* text */ 't', `Returns a string representation for a `],
				[/* inline code block */ 'i', `MethodHandleInfo`],
				[/* text */ 't', `,
 given the four parts of its symbolic reference.
 This is defined to be of the form `],
				[/* inline code block */ 'i', `"RK C.N:MT"`],
				[/* text */ 't', `, where `],
				[/* inline code block */ 'i', `RK`],
				[/* text */ 't', ` is the
 `],
				[/* reference */ 'r', `#referenceKindToString(int)`, `reference kind string`],
				[/* text */ 't', ` for `],
				[/* inline code block */ 'i', `kind`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `C`],
				[/* text */ 't', ` is the `],
				[/* reference */ 'r', `java.lang.Class#getName()`, `name`],
				[/* text */ 't', ` of `],
				[/* inline code block */ 'i', `defc`],
				[/* text */ 't', `
 `],
				[/* inline code block */ 'i', `N`],
				[/* text */ 't', ` is the `],
				[/* inline code block */ 'i', `name`],
				[/* text */ 't', `, and
 `],
				[/* inline code block */ 'i', `MT`],
				[/* text */ 't', ` is the `],
				[/* inline code block */ 'i', `type`],
				[/* text */ 't', `.
 These four values may be obtained from the
 `],
				[/* reference */ 'r', `#getReferenceKind()`, `reference kind`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#getDeclaringClass()`, `declaring class`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#getName()`, `member name`],
				[/* text */ 't', `,
 and `],
				[/* reference */ 'r', `#getMethodType()`, `method type`],
				[/* text */ 't', `
 of a `],
				[/* inline code block */ 'i', `MethodHandleInfo`],
				[/* text */ 't', ` object.`]
			],
			[/* parameters */
				[/* parameter */ 'kind', [/* parameter description */
					[/* text */ 't', `the `],
					[/* reference */ 'r', `#getReferenceKind()`, `reference kind`],
					[/* text */ 't', ` part of the symbolic reference`]
				]],
				[/* parameter */ 'defc', [/* parameter description */
					[/* text */ 't', `the `],
					[/* reference */ 'r', `#getDeclaringClass()`, `declaring class`],
					[/* text */ 't', ` part of the symbolic reference`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the `],
					[/* reference */ 'r', `#getName()`, `member name`],
					[/* text */ 't', ` part of the symbolic reference`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the `],
					[/* reference */ 'r', `#getMethodType()`, `method type`],
					[/* text */ 't', ` part of the symbolic reference`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the first argument is not a valid
            `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandleInfo#refkinds`, `reference kind number`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any reference argument is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a string of the form `],
				[/* inline code block */ 'i', `"RK C.N:MT"`]
			]
		]]
	],
]);
