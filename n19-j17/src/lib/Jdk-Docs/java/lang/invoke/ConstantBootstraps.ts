import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.ConstantBootstraps', [
	[/* class description */
		[/* text */ 't', `Bootstrap methods for dynamically-computed constants.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The bootstrap methods in this class will throw a
 `],
			[/* inline code block */ 'i', `NullPointerException`],
			[/* text */ 't', ` for any reference argument that is `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', `,
 unless the argument is specified to be unused or specified to accept a
 `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` value.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'enumConstant(java.lang.invoke.MethodHandles.Lookup,java.lang.String,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `enum`],
				[/* text */ 't', ` constant of the type specified by `],
				[/* inline code block */ 'i', `type`],
				[/* text */ 't', `
 with the name specified by `],
				[/* inline code block */ 'i', `name`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'lookup', [/* parameter description */
					[/* text */ 't', `the lookup context describing the class performing the
 operation (normally stacked by the JVM)`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the constant to return, which must exactly match
 an enum constant in the specified type.`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object describing the enum type for which
 a constant is to be returned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessError', [/* throw description */
					[/* text */ 't', `if the declaring class or the field is not
 accessible to the class performing the operation`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified enum type has
 no constant with the specified name, or the specified
 class object does not represent an enum type`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the enum constant of the specified enum type with the
 specified name`]
			]
		]],
		[/* method */ 'primitiveClass(java.lang.invoke.MethodHandles.Lookup,java.lang.String,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.Class`, `Class`],
				[/* text */ 't', ` mirror for the primitive type whose type
 descriptor is specified by `],
				[/* inline code block */ 'i', `name`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'lookup', [/* parameter description */
					[/* text */ 't', `unused`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the descriptor (JVMS 4.3) of the desired primitive type`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the required result type (must be `],
					[/* inline code block */ 'i', `Class.class`],
					[/* text */ 't', `)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the name is not a descriptor for a
 primitive type or the type is not `],
					[/* inline code block */ 'i', `Class.class`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* reference */ 'r', `java.lang.Class`, `Class`],
				[/* text */ 't', ` mirror`]
			]
		]],
		[/* method */ 'arrayVarHandle(java.lang.invoke.MethodHandles.Lookup,java.lang.String,java.lang.Class,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Finds a `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle`, `VarHandle`],
				[/* text */ 't', ` for an array type.`]
			],
			[/* parameters */
				[/* parameter */ 'lookup', [/* parameter description */
					[/* text */ 't', `the lookup context describing the class performing the
 operation (normally stacked by the JVM)`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `unused`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the required result type (must be `],
					[/* inline code block */ 'i', `Class<VarHandle>`],
					[/* text */ 't', `)`]
				]],
				[/* parameter */ 'arrayClass', [/* parameter description */
					[/* text */ 't', `the type of the array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessError', [/* throw description */
					[/* text */ 't', `if the component type of the array is not
 accessible to the class performing the operation`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the type is not `],
					[/* inline code block */ 'i', `VarHandle`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle`, `VarHandle`]
			]
		]],
		[/* method */ 'fieldVarHandle(java.lang.invoke.MethodHandles.Lookup,java.lang.String,java.lang.Class,java.lang.Class,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Finds a `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle`, `VarHandle`],
				[/* text */ 't', ` for an instance field.`]
			],
			[/* parameters */
				[/* parameter */ 'lookup', [/* parameter description */
					[/* text */ 't', `the lookup context describing the class performing the
 operation (normally stacked by the JVM)`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the field`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the required result type (must be `],
					[/* inline code block */ 'i', `Class<VarHandle>`],
					[/* text */ 't', `)`]
				]],
				[/* parameter */ 'declaringClass', [/* parameter description */
					[/* text */ 't', `the class in which the field is declared`]
				]],
				[/* parameter */ 'fieldType', [/* parameter description */
					[/* text */ 't', `the type of the field`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessError', [/* throw description */
					[/* text */ 't', `if the declaring class or the field is not
 accessible to the class performing the operation`]
				]],
				[/* throw */ 'java.lang.NoSuchFieldError', [/* throw description */
					[/* text */ 't', `if the specified field does not exist`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the type is not `],
					[/* inline code block */ 'i', `VarHandle`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle`, `VarHandle`]
			]
		]],
		[/* method */ 'staticFieldVarHandle(java.lang.invoke.MethodHandles.Lookup,java.lang.String,java.lang.Class,java.lang.Class,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Finds a `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle`, `VarHandle`],
				[/* text */ 't', ` for a static field.`]
			],
			[/* parameters */
				[/* parameter */ 'lookup', [/* parameter description */
					[/* text */ 't', `the lookup context describing the class performing the
 operation (normally stacked by the JVM)`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the field`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the required result type (must be `],
					[/* inline code block */ 'i', `Class<VarHandle>`],
					[/* text */ 't', `)`]
				]],
				[/* parameter */ 'declaringClass', [/* parameter description */
					[/* text */ 't', `the class in which the field is declared`]
				]],
				[/* parameter */ 'fieldType', [/* parameter description */
					[/* text */ 't', `the type of the field`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessError', [/* throw description */
					[/* text */ 't', `if the declaring class or the field is not
 accessible to the class performing the operation`]
				]],
				[/* throw */ 'java.lang.NoSuchFieldError', [/* throw description */
					[/* text */ 't', `if the specified field does not exist`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the type is not `],
					[/* inline code block */ 'i', `VarHandle`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle`, `VarHandle`]
			]
		]],
		[/* method */ 'explicitCast(java.lang.invoke.MethodHandles.Lookup,java.lang.String,java.lang.Class,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Applies a conversion from a source type to a destination type.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Given a destination type `],
					[/* inline code block */ 'i', `dstType`],
					[/* text */ 't', ` and an input
 value `],
					[/* inline code block */ 'i', `value`],
					[/* text */ 't', `, one of the following will happen:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* inline code block */ 'i', `dstType`],
						[/* text */ 't', ` is `],
						[/* inline code block */ 'i', `void.class`],
						[/* text */ 't', `,
     a `],
						[/* reference */ 'r', `java.lang.ClassCastException`, `ClassCastException`],
						[/* text */ 't', ` is thrown.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* inline code block */ 'i', `dstType`],
						[/* text */ 't', ` is `],
						[/* inline code block */ 'i', `Object.class`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `value`],
						[/* text */ 't', ` is returned as is.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Otherwise one of the following conversions is applied to `],
					[/* inline code block */ 'i', `value`],
					[/* text */ 't', `:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* inline code block */ 'i', `dstType`],
						[/* text */ 't', ` is a reference type, a reference cast
     is applied to `],
						[/* inline code block */ 'i', `value`],
						[/* text */ 't', ` as if by calling `],
						[/* inline code block */ 'i', `dstType.cast(value)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* inline code block */ 'i', `dstType`],
						[/* text */ 't', ` is a primitive type, then, if the runtime type
     of `],
						[/* inline code block */ 'i', `value`],
						[/* text */ 't', ` is a primitive wrapper type (such as `],
						[/* reference */ 'r', `java.lang.Integer`, `Integer`],
						[/* text */ 't', `),
     a Java unboxing conversion is applied `],
						[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-5.html#jls-5.1.8`, `5.1.8`],
						[/* text */ 't', ` followed by a
     Java casting conversion `],
						[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-5.html#jls-5.5`, `5.5`],
						[/* text */ 't', ` converting either directly to
     `],
						[/* inline code block */ 'i', `dstType`],
						[/* text */ 't', `, or, if `],
						[/* inline code block */ 'i', `dstType`],
						[/* text */ 't', ` is `],
						[/* inline code block */ 'i', `boolean`],
						[/* text */ 't', `,
     to `],
						[/* inline code block */ 'i', `int`],
						[/* text */ 't', `, which is then converted to either `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', `
     or `],
						[/* inline code block */ 'i', `false`],
						[/* text */ 't', ` depending on whether the least-significant-bit
     is 1 or 0 respectively. If the runtime type of `],
						[/* inline code block */ 'i', `value`],
						[/* text */ 't', ` is
     not a primitive wrapper type a `],
						[/* reference */ 'r', `java.lang.ClassCastException`, `ClassCastException`],
						[/* text */ 't', ` is thrown.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 The result is the same as when using the following code:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `MethodHandle id = MethodHandles.identity(dstType);
 MethodType mt = MethodType.methodType(dstType, Object.class);
 MethodHandle conv = MethodHandles.explicitCastArguments(id, mt);
 return conv.invoke(value);`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'lookup', [/* parameter description */
					[/* text */ 't', `unused`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `unused`]
				]],
				[/* parameter */ 'dstType', [/* parameter description */
					[/* text */ 't', `the destination type of the conversion`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to be converted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `when `],
					[/* inline code block */ 'i', `dstType`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', `,
         when a cast per (1) fails, or when `],
					[/* inline code block */ 'i', `dstType`],
					[/* text */ 't', ` is a primitive type
         and the runtime type of `],
					[/* inline code block */ 'i', `value`],
					[/* text */ 't', ` is not a primitive wrapper type
         (such as `],
					[/* reference */ 'r', `java.lang.Integer`, `Integer`],
					[/* text */ 't', `)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the converted value`]
			]
		]],
		[/* method */ 'getStaticFinal(java.lang.invoke.MethodHandles.Lookup,java.lang.String,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns the value of a static final field declared in the class which
 is the same as the field's type (or, for primitive-valued fields,
 declared in the wrapper class.)  This is a simplified form of
 `],
				[/* reference */ 'r', `#getStaticFinal(java.lang.invoke.MethodHandles.Lookup,java.lang.String,java.lang.Class,java.lang.Class)`, `getStaticFinal(MethodHandles.Lookup, String, Class, Class)`],
				[/* text */ 't', `
 for the case where a class declares distinguished constant instances of
 itself.`]
			],
			[/* parameters */
				[/* parameter */ 'lookup', [/* parameter description */
					[/* text */ 't', `the lookup context describing the class performing the
 operation (normally stacked by the JVM)`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the field`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the type of the field`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessError', [/* throw description */
					[/* text */ 't', `if the declaring class or the field is not
 accessible to the class performing the operation`]
				]],
				[/* throw */ 'java.lang.NoSuchFieldError', [/* throw description */
					[/* text */ 't', `if the specified field does not exist`]
				]],
				[/* throw */ 'java.lang.IncompatibleClassChangeError', [/* throw description */
					[/* text */ 't', `if the specified field is not
 `],
					[/* inline code block */ 'i', `final`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the field`]
			]
		]],
		[/* method */ 'getStaticFinal(java.lang.invoke.MethodHandles.Lookup,java.lang.String,java.lang.Class,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns the value of a static final field.`]
			],
			[/* parameters */
				[/* parameter */ 'lookup', [/* parameter description */
					[/* text */ 't', `the lookup context describing the class performing the
 operation (normally stacked by the JVM)`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the field`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the type of the field`]
				]],
				[/* parameter */ 'declaringClass', [/* parameter description */
					[/* text */ 't', `the class in which the field is declared`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessError', [/* throw description */
					[/* text */ 't', `if the declaring class or the field is not
 accessible to the class performing the operation`]
				]],
				[/* throw */ 'java.lang.NoSuchFieldError', [/* throw description */
					[/* text */ 't', `if the specified field does not exist`]
				]],
				[/* throw */ 'java.lang.IncompatibleClassChangeError', [/* throw description */
					[/* text */ 't', `if the specified field is not
 `],
					[/* inline code block */ 'i', `final`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the field`]
			]
		]],
		[/* method */ 'invoke(java.lang.invoke.MethodHandles.Lookup,java.lang.String,java.lang.Class,java.lang.invoke.MethodHandle,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Returns the result of invoking a method handle with the provided
 arguments.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method behaves as if the method handle to be invoked is the result
 of adapting the given method handle, via `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#asType(java.lang.invoke.MethodType)`, `MethodHandle.asType(java.lang.invoke.MethodType)`],
					[/* text */ 't', `, to
 adjust the return type to the desired type.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'lookup', [/* parameter description */
					[/* text */ 't', `unused`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `unused`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the desired type of the value to be returned, which must be
 compatible with the return type of the method handle`]
				]],
				[/* parameter */ 'handle', [/* parameter description */
					[/* text */ 't', `the method handle to be invoked`]
				]],
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the arguments to pass to the method handle, as if with
 `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#invokeWithArguments(java.lang.Object...)`, `MethodHandle.invokeWithArguments(java.lang.Object...)`],
					[/* text */ 't', `.  Each argument may be
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the handle's method type cannot be
 adjusted to take the given number of arguments, or if the handle's return
 type cannot be adjusted to the desired type`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if an argument or the result produced by
 invoking the handle cannot be converted by reference casting`]
				]],
				[/* throw */ 'java.lang.Throwable', [/* throw description */
					[/* text */ 't', `anything thrown by the method handle invocation`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the result of invoking the method handle`]
			]
		]],
		[/* method */ 'nullConstant(java.lang.invoke.MethodHandles.Lookup,java.lang.String,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` object reference for the reference type specified
 by `],
				[/* inline code block */ 'i', `type`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'lookup', [/* parameter description */
					[/* text */ 't', `unused`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `unused`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `a reference type`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `type`],
					[/* text */ 't', ` is not a reference type`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` value`]
			]
		]]
	],
]);
