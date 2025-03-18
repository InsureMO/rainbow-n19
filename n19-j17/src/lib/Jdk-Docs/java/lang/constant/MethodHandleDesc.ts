import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.constant.MethodHandleDesc', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* text */ 't', `nominal descriptor`],
		[/* text */ 't', ` for a
 `],
		[/* reference */ 'r', `java.lang.invoke.MethodHandle`, `MethodHandle`],
		[/* text */ 't', ` constant.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares the specified object with this descriptor for equality.  Returns
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the specified object is also a
 `],
				[/* reference */ 'r', `java.lang.constant.MethodHandleDesc`, `MethodHandleDesc`],
				[/* text */ 't', `, and both encode the same nominal description
 of a method handle.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `the other object`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `whether this descriptor is equal to the other object`]
			]
		]],
		[/* method */ 'invocationType()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`, `MethodTypeDesc`],
				[/* text */ 't', ` describing the invocation type of the
 method handle described by this nominal descriptor.  The invocation type
 describes the full set of stack values that are consumed by the invocation
 (including the receiver, if any).`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.lang.constant.MethodHandleDesc`, `MethodHandleDesc`],
				[/* text */ 't', ` describing the method handle type`]
			]
		]],
		[/* method */ 'asType(java.lang.constant.MethodTypeDesc)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.constant.MethodHandleDesc`, `MethodHandleDesc`],
				[/* text */ 't', ` that describes this method handle
 adapted to a different type, as if by `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandle#asType(java.lang.invoke.MethodType)`, `MethodHandle.asType(MethodType)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.lang.constant.MethodHandleDesc`, `MethodHandleDesc`],
					[/* text */ 't', ` describing the new method type`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.lang.constant.MethodHandleDesc`, `MethodHandleDesc`],
				[/* text */ 't', ` for the adapted method handle`]
			]
		]],
		[/* method */ 'of(java.lang.constant.DirectMethodHandleDesc.Kind,java.lang.constant.ClassDesc,java.lang.String,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* reference */ 'r', `java.lang.constant.MethodHandleDesc`, `MethodHandleDesc`],
				[/* text */ 't', ` corresponding to an invocation of a
 declared method, invocation of a constructor, or access to a field.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The lookup descriptor string has the same format as for the various
 variants of `],
					[/* inline code block */ 'i', `CONSTANT_MethodHandle_info`],
					[/* text */ 't', ` and for the lookup
 methods on `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup`, `MethodHandles.Lookup`],
					[/* text */ 't', `.  For a method or constructor
 invocation, it is interpreted as a method type descriptor; for field
 access, it is interpreted as a field descriptor.  If `],
					[/* inline code block */ 'i', `kind`],
					[/* text */ 't', ` is
 `],
					[/* inline code block */ 'i', `CONSTRUCTOR`],
					[/* text */ 't', `, the `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` parameter is ignored and the return
 type of the lookup descriptor must be `],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', `.  If `],
					[/* inline code block */ 'i', `kind`],
					[/* text */ 't', `
 corresponds to a virtual method invocation, the lookup type includes the
 method parameters but not the receiver type.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'kind', [/* parameter description */
					[/* text */ 't', `The kind of method handle to be described`]
				]],
				[/* parameter */ 'owner', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`, `ClassDesc`],
					[/* text */ 't', ` describing the class containing the
              method, constructor, or field`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the unqualified name of the method or field (ignored if
             `],
					[/* inline code block */ 'i', `kind`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `CONSTRUCTOR`],
					[/* text */ 't', `)`]
				]],
				[/* parameter */ 'lookupDescriptor', [/* parameter description */
					[/* text */ 't', `a method descriptor string the lookup type,
                         if the request is for a method invocation, or
                         describing the invocation type, if the request is
                         for a field or constructor`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any of the non-ignored arguments are null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the descriptor string is not a valid
 method or field descriptor`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* reference */ 'r', `java.lang.constant.MethodHandleDesc`, `MethodHandleDesc`]
			]
		]],
		[/* method */ 'ofConstructor(java.lang.constant.ClassDesc,java.lang.constant.ClassDesc...)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.constant.MethodHandleDesc`, `MethodHandleDesc`],
				[/* text */ 't', ` corresponding to invocation of a constructor`]
			],
			[/* parameters */
				[/* parameter */ 'owner', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`, `ClassDesc`],
					[/* text */ 't', ` describing the class containing the
              constructor`]
				]],
				[/* parameter */ 'paramTypes', [/* parameter description */
					[/* text */ 't', ``],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`, `ClassDesc`],
					[/* text */ 't', `s describing the parameter types of
                   the constructor`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument or its contents is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* reference */ 'r', `java.lang.constant.MethodHandleDesc`, `MethodHandleDesc`]
			]
		]],
		[/* method */ 'ofField(java.lang.constant.DirectMethodHandleDesc.Kind,java.lang.constant.ClassDesc,java.lang.String,java.lang.constant.ClassDesc)', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* reference */ 'r', `java.lang.constant.MethodHandleDesc`, `MethodHandleDesc`],
				[/* text */ 't', ` corresponding to a method handle
 that accesses a field.`]
			],
			[/* parameters */
				[/* parameter */ 'kind', [/* parameter description */
					[/* text */ 't', `the kind of the method handle to be described; must be one of `],
					[/* inline code block */ 'i', `GETTER`],
					[/* text */ 't', `,
             `],
					[/* inline code block */ 'i', `SETTER`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `STATIC_GETTER`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `STATIC_SETTER`]
				]],
				[/* parameter */ 'owner', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`, `ClassDesc`],
					[/* text */ 't', ` describing the class containing the field`]
				]],
				[/* parameter */ 'fieldName', [/* parameter description */
					[/* text */ 't', `the unqualified name of the field`]
				]],
				[/* parameter */ 'fieldType', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`, `ClassDesc`],
					[/* text */ 't', ` describing the type of the field`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any of the arguments are null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `kind`],
					[/* text */ 't', ` is not one of the
 valid values or if the field name is not valid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* reference */ 'r', `java.lang.constant.MethodHandleDesc`, `MethodHandleDesc`]
			]
		]],
		[/* method */ 'ofMethod(java.lang.constant.DirectMethodHandleDesc.Kind,java.lang.constant.ClassDesc,java.lang.String,java.lang.constant.MethodTypeDesc)', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* reference */ 'r', `java.lang.constant.MethodHandleDesc`, `MethodHandleDesc`],
				[/* text */ 't', ` corresponding to an invocation of a
 declared method or constructor.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The lookup descriptor string has the same format as for the lookup
 methods on `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup`, `MethodHandles.Lookup`],
					[/* text */ 't', `.  If `],
					[/* inline code block */ 'i', `kind`],
					[/* text */ 't', ` is
 `],
					[/* inline code block */ 'i', `CONSTRUCTOR`],
					[/* text */ 't', `, the name is ignored and the return type of the lookup
 type must be `],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', `.  If `],
					[/* inline code block */ 'i', `kind`],
					[/* text */ 't', ` corresponds to a virtual method
 invocation, the lookup type includes the method parameters but not the
 receiver type.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'kind', [/* parameter description */
					[/* text */ 't', `The kind of method handle to be described; must be one of
             `],
					[/* inline code block */ 'i', `SPECIAL, VIRTUAL, STATIC, INTERFACE_SPECIAL, INTERFACE_VIRTUAL, INTERFACE_STATIC, CONSTRUCTOR`]
				]],
				[/* parameter */ 'owner', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`, `ClassDesc`],
					[/* text */ 't', ` describing the class containing the
              method or constructor`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the unqualified name of the method (ignored if `],
					[/* inline code block */ 'i', `kind`],
					[/* text */ 't', `
             is `],
					[/* inline code block */ 'i', `CONSTRUCTOR`],
					[/* text */ 't', `)`]
				]],
				[/* parameter */ 'lookupMethodType', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`, `MethodTypeDesc`],
					[/* text */ 't', ` describing the lookup type`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any non-ignored arguments are null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` has the incorrect
 format, or the kind is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* reference */ 'r', `java.lang.constant.MethodHandleDesc`, `MethodHandleDesc`]
			]
		]]
	],
	/* enum values */ UDF
]);
