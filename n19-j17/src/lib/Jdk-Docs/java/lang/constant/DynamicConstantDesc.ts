import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.constant.DynamicConstantDesc', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* external link */ 'a', `package-summary.html#nominal`, `nominal descriptor`],
		[/* text */ 't', ` for a
 dynamic constant (one described in the constant pool with
 `],
		[/* inline code block */ 'i', `Constant_Dynamic_info`],
		[/* text */ 't', `.)

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Concrete subtypes of `],
			[/* reference */ 'r', `java.lang.constant.DynamicConstantDesc`],
			[/* text */ 't', ` should be immutable
 and their behavior should not rely on object identity.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.constant.DirectMethodHandleDesc,java.lang.String,java.lang.constant.ClassDesc,java.lang.constant.ConstantDesc...)', [
			[/* constructor description */
				[/* text */ 't', `Creates a nominal descriptor for a dynamic constant.`]
			],
			[/* parameters */
				[/* parameter */ 'bootstrapMethod', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.lang.constant.DirectMethodHandleDesc`],
					[/* text */ 't', ` describing the
                        bootstrap method for the constant`]
				]],
				[/* parameter */ 'constantName', [/* parameter description */
					[/* text */ 't', `The unqualified name that would appear in the `],
					[/* inline code block */ 'i', `NameAndType`],
					[/* text */ 't', `
                     operand of the `],
					[/* inline code block */ 'i', `LDC`],
					[/* text */ 't', ` for this constant`]
				]],
				[/* parameter */ 'constantType', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`],
					[/* text */ 't', ` describing the type
                     that would appear in the `],
					[/* inline code block */ 'i', `NameAndType`],
					[/* text */ 't', ` operand
                     of the `],
					[/* inline code block */ 'i', `LDC`],
					[/* text */ 't', ` for this constant`]
				]],
				[/* parameter */ 'bootstrapArgs', [/* parameter description */
					[/* text */ 't', ``],
					[/* reference */ 'r', `java.lang.constant.ConstantDesc`],
					[/* text */ 't', `s describing the static arguments
                      to the bootstrap, that would appear in the
                      `],
					[/* inline code block */ 'i', `BootstrapMethods`],
					[/* text */ 't', ` attribute`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` has the incorrect
 format`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares the specified object with this descriptor for equality.  Returns
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the specified object is also a
 `],
				[/* reference */ 'r', `java.lang.constant.DynamicConstantDesc`],
				[/* text */ 't', `, and both descriptors have equal
 bootstrap methods, bootstrap argument lists, constant name, and
 constant type.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `DynamicConstantDesc`],
					[/* text */ 't', ` to compare to this
       `],
					[/* inline code block */ 'i', `DynamicConstantDesc`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the specified `],
				[/* inline code block */ 'i', `DynamicConstantDesc`],
				[/* text */ 't', `
      is equal to this `],
				[/* inline code block */ 'i', `DynamicConstantDesc`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a compact textual description of this constant description,
 including the bootstrap method, the constant name and type, and
 the static bootstrap arguments.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A compact textual description of this call site descriptor`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns a hash code value for the object. This method is
 supported for the benefit of hash tables such as those provided by
 `],
					[/* reference */ 'r', `java.util.HashMap`],
					[/* text */ 't', `.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `
 The general contract of `],
						[/* inline code block */ 'i', `hashCode`],
						[/* text */ 't', ` is:
 `]
					]],
					[/* list */ 'l', [
						[/* block */ 'b', [
							[/* text */ 't', `Whenever it is invoked on the same object more than once during
     an execution of a Java application, the `],
							[/* inline code block */ 'i', `hashCode`],
							[/* text */ 't', ` method
     must consistently return the same integer, provided no information
     used in `],
							[/* inline code block */ 'i', `equals`],
							[/* text */ 't', ` comparisons on the object is modified.
     This integer need not remain consistent from one execution of an
     application to another execution of the same application.
 `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', `If two objects are equal according to the `],
							[/* external link */ 'a', `../Object.html#equals(java.lang.Object)`, `equals`],
							[/* text */ 't', ` method, then calling the `],
							[/* inline code block */ 'i', `hashCode`],
							[/* text */ 't', ` method on each of the two objects must produce the
     same integer result.
 `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', `It is `],
							[/* text */ 't', `not`],
							[/* text */ 't', ` required that if two objects are unequal
     according to the `],
							[/* external link */ 'a', `../Object.html#equals(java.lang.Object)`, `equals`],
							[/* text */ 't', ` method, then
     calling the `],
							[/* inline code block */ 'i', `hashCode`],
							[/* text */ 't', ` method on each of the two objects
     must produce distinct integer results.  However, the programmer
     should be aware that producing distinct integer results for
     unequal objects may improve the performance of hash tables.
 `]
						]]
					]],
					[/* block */ 'b', '']
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'of(java.lang.constant.DirectMethodHandleDesc,java.lang.constant.ConstantDesc...)', [
			[/* method description */
				[/* text */ 't', `Returns a nominal descriptor for a dynamic constant whose name parameter
 is `],
				[/* external link */ 'a', `ConstantDescs.html#DEFAULT_NAME`, `ConstantDescs.DEFAULT_NAME`],
				[/* text */ 't', `, and whose type parameter is always
 the same as the bootstrap method return type.`]
			],
			[/* parameters */
				[/* parameter */ 'bootstrapMethod', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.lang.constant.DirectMethodHandleDesc`],
					[/* text */ 't', ` describing the
                        bootstrap method for the constant`]
				]],
				[/* parameter */ 'bootstrapArgs', [/* parameter description */
					[/* text */ 't', ``],
					[/* reference */ 'r', `java.lang.constant.ConstantDesc`],
					[/* text */ 't', `s describing the static arguments
                      to the bootstrap, that would appear in the
                      `],
					[/* inline code block */ 'i', `BootstrapMethods`],
					[/* text */ 't', ` attribute`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the nominal descriptor`]
			]
		]],
		[/* method */ 'of(java.lang.constant.DirectMethodHandleDesc)', [
			[/* method description */
				[/* text */ 't', `Returns a nominal descriptor for a dynamic constant whose bootstrap has
 no static arguments, whose name parameter is `],
				[/* external link */ 'a', `ConstantDescs.html#DEFAULT_NAME`, `ConstantDescs.DEFAULT_NAME`],
				[/* text */ 't', `,
 and whose type parameter is always the same as the bootstrap method return type.`]
			],
			[/* parameters */
				[/* parameter */ 'bootstrapMethod', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.lang.constant.DirectMethodHandleDesc`],
					[/* text */ 't', ` describing the
                        bootstrap method for the constant`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the nominal descriptor`]
			]
		]],
		[/* method */ 'resolveConstantDesc(java.lang.invoke.MethodHandles.Lookup)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Resolves this descriptor reflectively, emulating the resolution behavior
 of JVMS 5.4.3 and the access control behavior of JVMS 5.4.4.  The resolution
 and access control context is provided by the `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup`],
					[/* text */ 't', `
 parameter.  No caching of the resulting value is performed.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'lookup', [/* parameter description */
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup`],
					[/* text */ 't', ` to provide name resolution
               and access control context`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ReflectiveOperationException', [/* throw description */
					[/* text */ 't', `if a class, method, or field
 could not be reflectively resolved in the course of resolution`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the resolved constant value`]
			]
		]],
		[/* method */ 'bootstrapMethod()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.constant.MethodHandleDesc`],
				[/* text */ 't', ` describing the bootstrap method for
 this constant.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the bootstrap method`]
			]
		]],
		[/* method */ 'ofNamed(java.lang.constant.DirectMethodHandleDesc,java.lang.String,java.lang.constant.ClassDesc,java.lang.constant.ConstantDesc...)', [
			[/* method description */
				[/* text */ 't', `Returns a nominal descriptor for a dynamic constant.`]
			],
			[/* parameters */
				[/* parameter */ 'bootstrapMethod', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.lang.constant.DirectMethodHandleDesc`],
					[/* text */ 't', ` describing the
                        bootstrap method for the constant`]
				]],
				[/* parameter */ 'constantName', [/* parameter description */
					[/* text */ 't', `The unqualified name that would appear in the `],
					[/* inline code block */ 'i', `NameAndType`],
					[/* text */ 't', `
                     operand of the `],
					[/* inline code block */ 'i', `LDC`],
					[/* text */ 't', ` for this constant`]
				]],
				[/* parameter */ 'constantType', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`],
					[/* text */ 't', ` describing the type
                     that would appear in the `],
					[/* inline code block */ 'i', `NameAndType`],
					[/* text */ 't', ` operand
                     of the `],
					[/* inline code block */ 'i', `LDC`],
					[/* text */ 't', ` for this constant`]
				]],
				[/* parameter */ 'bootstrapArgs', [/* parameter description */
					[/* text */ 't', ``],
					[/* reference */ 'r', `java.lang.constant.ConstantDesc`],
					[/* text */ 't', `s describing the static arguments
                      to the bootstrap, that would appear in the
                      `],
					[/* inline code block */ 'i', `BootstrapMethods`],
					[/* text */ 't', ` attribute`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` has the incorrect
 format`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the nominal descriptor`]
			]
		]],
		[/* method */ 'constantName()', [
			[/* method description */
				[/* text */ 't', `Returns the name that would appear in the `],
				[/* inline code block */ 'i', `NameAndType`],
				[/* text */ 't', ` operand
 of the `],
				[/* inline code block */ 'i', `LDC`],
				[/* text */ 't', ` for this constant.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the constant name`]
			]
		]],
		[/* method */ 'constantType()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` describing the type that would appear in the
 `],
				[/* inline code block */ 'i', `NameAndType`],
				[/* text */ 't', ` operand of the `],
				[/* inline code block */ 'i', `LDC`],
				[/* text */ 't', ` for this constant.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the constant type`]
			]
		]],
		[/* method */ 'bootstrapArgs()', [
			[/* method description */
				[/* text */ 't', `Returns the bootstrap arguments for this constant.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the bootstrap arguments`]
			]
		]],
		[/* method */ 'ofCanonical(java.lang.constant.DirectMethodHandleDesc,java.lang.String,java.lang.constant.ClassDesc,java.lang.constant.ConstantDesc[])', [
			[/* method description */
				[/* text */ 't', `Returns a nominal descriptor for a dynamic constant, transforming it into
 a more specific type if the constant bootstrap is a well-known one and a
 more specific nominal descriptor type (e.g., ClassDesc) is available.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Classes whose `],
					[/* external link */ 'a', `Constable.html#describeConstable()`, `Constable.describeConstable()`],
					[/* text */ 't', ` method produce
 a `],
					[/* reference */ 'r', `java.lang.constant.DynamicConstantDesc`],
					[/* text */ 't', ` with a well-known bootstrap including
 `],
					[/* reference */ 'r', `java.lang.Class`],
					[/* text */ 't', ` (for instances describing primitive types), `],
					[/* reference */ 'r', `java.lang.Enum`],
					[/* text */ 't', `,
 and `],
					[/* reference */ 'r', `java.lang.invoke.VarHandle`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Bytecode-reading APIs that process the constant pool and wish to expose
 entries as `],
					[/* reference */ 'r', `java.lang.constant.ConstantDesc`],
					[/* text */ 't', ` to their callers should generally use this
 method in preference to `],
					[/* reference */ 'r', `ofNamed(DirectMethodHandleDesc, String, ClassDesc, ConstantDesc...)`],
					[/* text */ 't', `
 because this may result in a more specific type that can be provided to
 callers.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'bootstrapMethod', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.lang.constant.DirectMethodHandleDesc`],
					[/* text */ 't', ` describing the
                        bootstrap method for the constant`]
				]],
				[/* parameter */ 'constantName', [/* parameter description */
					[/* text */ 't', `The unqualified name that would appear in the `],
					[/* inline code block */ 'i', `NameAndType`],
					[/* text */ 't', `
                     operand of the `],
					[/* inline code block */ 'i', `LDC`],
					[/* text */ 't', ` for this constant`]
				]],
				[/* parameter */ 'constantType', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`],
					[/* text */ 't', ` describing the type
                     that would appear in the `],
					[/* inline code block */ 'i', `NameAndType`],
					[/* text */ 't', ` operand
                     of the `],
					[/* inline code block */ 'i', `LDC`],
					[/* text */ 't', ` for this constant`]
				]],
				[/* parameter */ 'bootstrapArgs', [/* parameter description */
					[/* text */ 't', ``],
					[/* reference */ 'r', `java.lang.constant.ConstantDesc`],
					[/* text */ 't', `s describing the static arguments
                      to the bootstrap, that would appear in the
                      `],
					[/* inline code block */ 'i', `BootstrapMethods`],
					[/* text */ 't', ` attribute`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` has the incorrect
 format`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the nominal descriptor`]
			]
		]],
		[/* method */ 'bootstrapArgsList()', [
			[/* method description */
				[/* text */ 't', `Returns the bootstrap arguments for this constant as an immutable `],
				[/* reference */ 'r', `java.util.List`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.util.List`],
				[/* text */ 't', ` of the bootstrap arguments`]
			]
		]]
	],
]);
