import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.MethodType', [
	[/* class description */
		[/* text */ 't', `A method type represents the arguments and return type accepted and
 returned by a method handle, or the arguments and return type passed
 and expected  by a method handle caller.  Method types must be properly
 matched between a method handle and all its callers,
 and the JVM's operations enforce this matching at, specifically
 during calls to `],
		[/* reference */ 'r', `java.lang.invoke.MethodHandle#invokeExact(java.lang.Object...)`, `MethodHandle.invokeExact`],
		[/* text */ 't', `
 and `],
		[/* reference */ 'r', `java.lang.invoke.MethodHandle#invoke(java.lang.Object...)`, `MethodHandle.invoke`],
		[/* text */ 't', `, and during execution
 of `],
		[/* inline code block */ 'i', `invokedynamic`],
		[/* text */ 't', ` instructions.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The structure is a return type accompanied by any number of parameter types.
 The types (primitive, `],
			[/* inline code block */ 'i', `void`],
			[/* text */ 't', `, and reference) are represented by `],
			[/* reference */ 'r', `java.lang.Class`, `Class`],
			[/* text */ 't', ` objects.
 (For ease of exposition, we treat `],
			[/* inline code block */ 'i', `void`],
			[/* text */ 't', ` as if it were a type.
 In fact, it denotes the absence of a return type.)
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 All instances of `],
			[/* inline code block */ 'i', `MethodType`],
			[/* text */ 't', ` are immutable.
 Two instances are completely interchangeable if they compare equal.
 Equality depends on pairwise correspondence of the return and parameter types and on nothing else.
 `]
		]],
		[/* block */ 'b', `
 This type can be created only by factory methods.
 All factory methods may cache values, though caching is not guaranteed.
 Some factory methods are static, while others are virtual methods which
 modify precursor method types, e.g., by changing a selected parameter.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Factory methods which operate on groups of parameter types
 are systematically presented in two versions, so that both Java arrays and
 Java lists can be used to work with groups of parameter types.
 The query methods `],
			[/* inline code block */ 'i', `parameterArray`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `parameterList`],
			[/* text */ 't', `
 also provide a choice between arrays and lists.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* inline code block */ 'i', `MethodType`],
			[/* text */ 't', ` objects are sometimes derived from bytecode instructions
 such as `],
			[/* inline code block */ 'i', `invokedynamic`],
			[/* text */ 't', `, specifically from the type descriptor strings associated
 with the instructions in a class file's constant pool.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Like classes and strings, method types can also be represented directly
 in a class file's constant pool as constants.
 A method type may be loaded by an `],
			[/* inline code block */ 'i', `ldc`],
			[/* text */ 't', ` instruction which refers
 to a suitable `],
			[/* inline code block */ 'i', `CONSTANT_MethodType`],
			[/* text */ 't', ` constant pool entry.
 The entry refers to a `],
			[/* inline code block */ 'i', `CONSTANT_Utf8`],
			[/* text */ 't', ` spelling for the descriptor string.
 (For full details on method type constants, see sections `],
			[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.4.8`, `4.4.8`],
			[/* text */ 't', ` and `],
			[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-5.html#jvms-5.4.3.5`, `5.4.3.5`],
			[/* text */ 't', ` of the Java Virtual Machine
 Specification.)
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 When the JVM materializes a `],
			[/* inline code block */ 'i', `MethodType`],
			[/* text */ 't', ` from a descriptor string,
 all classes named in the descriptor must be accessible, and will be loaded.
 (But the classes need not be initialized, as is the case with a `],
			[/* inline code block */ 'i', `CONSTANT_Class`],
			[/* text */ 't', `.)
 This loading may occur at any time before the `],
			[/* inline code block */ 'i', `MethodType`],
			[/* text */ 't', ` object is first derived.
 `]
		]],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `descriptor`, `Nominal Descriptors`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 A `],
			[/* inline code block */ 'i', `MethodType`],
			[/* text */ 't', ` can be described in `],
			[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`, `nominal form`],
			[/* text */ 't', `
 if and only if all of the parameter types and return type can be described
 with a `],
			[/* reference */ 'r', `java.lang.Class#describeConstable()`, `nominal descriptor`],
			[/* text */ 't', ` represented by
 `],
			[/* reference */ 'r', `java.lang.constant.ClassDesc`, `ClassDesc`],
			[/* text */ 't', `.  If a method type can be described nominally, then:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `The method type has a `],
				[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`, `nominal descriptor`],
				[/* text */ 't', `
     returned by `],
				[/* reference */ 'r', `#describeConstable()`, `MethodType::describeConstable`],
				[/* text */ 't', `.`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `The descriptor string returned by
     `],
				[/* reference */ 'r', `#descriptorString()`, `MethodType::descriptorString`],
				[/* text */ 't', ` or
     `],
				[/* reference */ 'r', `#toMethodDescriptorString()`, `MethodType::toMethodDescriptorString`],
				[/* text */ 't', `
     for the method type is a method descriptor (JVMS `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.3.3`, `4.3.3`],
				[/* text */ 't', `).`]
			]]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 If any of the parameter types or return type cannot be described
 nominally, i.e. `],
			[/* reference */ 'r', `java.lang.Class#describeConstable()`, `Class::describeConstable`],
			[/* text */ 't', `
 returns an empty optional for that type,
 then the method type cannot be described nominally:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `The method type has no `],
				[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`, `nominal descriptor`],
				[/* text */ 't', ` and
     `],
				[/* reference */ 'r', `#describeConstable()`, `MethodType::describeConstable`],
				[/* text */ 't', ` returns
     an empty optional.`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `The descriptor string returned by
     `],
				[/* reference */ 'r', `#descriptorString()`, `MethodType::descriptorString`],
				[/* text */ 't', ` or
     `],
				[/* reference */ 'r', `#toMethodDescriptorString()`, `MethodType::toMethodDescriptorString`],
				[/* text */ 't', `
     for the method type is not a type descriptor.`]
			]]
		]],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares the specified object with this type for equality.
 That is, it returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the specified object
 is also a method type with exactly the same parameters and return type.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `object to compare`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this object is the same as the obj
          argument; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'hasPrimitives()', [
			[/* method description */
				[/* text */ 't', `Reports if this type contains a primitive argument or return value.
 The return type `],
				[/* inline code block */ 'i', `void`],
				[/* text */ 't', ` counts as a primitive.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if any of the types are primitives`]
			]
		]],
		[/* method */ 'hasWrappers()', [
			[/* method description */
				[/* text */ 't', `Reports if this type contains a wrapper argument or return value.
 Wrappers are types which box primitive values, such as `],
				[/* reference */ 'r', `java.lang.Integer`, `Integer`],
				[/* text */ 't', `.
 The reference type `],
				[/* inline code block */ 'i', `java.lang.Void`],
				[/* text */ 't', ` counts as a wrapper,
 if it occurs as a return type.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if any of the types are wrappers`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code value for this method type.
 It is defined to be the same as the hashcode of a List
 whose elements are the return type followed by the
 parameter types.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hash code value for this method type`]
			]
		]],
		[/* method */ 'parameterCount()', [
			[/* method description */
				[/* text */ 't', `Returns the number of parameter types in this method type.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of parameter types`]
			]
		]],
		[/* method */ 'lastParameterType()', [
			[/* method description */
				[/* text */ 't', `Returns the last parameter type of this method type.
 If this type has no parameters, the sentinel value
 `],
				[/* inline code block */ 'i', `void.class`],
				[/* text */ 't', ` is returned instead.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the last parameter type if any, else `],
				[/* inline code block */ 'i', `void.class`]
			]
		]],
		[/* method */ 'parameterType(int)', [
			[/* method description */
				[/* text */ 't', `Returns the parameter type at the specified index, within this method type.`]
			],
			[/* parameters */
				[/* parameter */ 'num', [/* parameter description */
					[/* text */ 't', `the index (zero-based) of the desired parameter type`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `num`],
					[/* text */ 't', ` is not a valid index into `],
					[/* inline code block */ 'i', `parameterArray()`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the selected parameter type`]
			]
		]],
		[/* method */ 'returnType()', [
			[/* method description */
				[/* text */ 't', `Returns the return type of this method type.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the return type`]
			]
		]],
		[/* method */ 'parameterArray()', [
			[/* method description */
				[/* text */ 't', `Presents the parameter types as an array (a convenience method).
 Changes to the array will not result in changes to the type.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the parameter types (as a fresh copy if necessary)`]
			]
		]],
		[/* method */ 'appendParameterTypes(java.lang.Class...)', [
			[/* method description */
				[/* text */ 't', `Finds or creates a method type with additional parameter types.
 Convenience method for `],
				[/* reference */ 'r', `#methodType(java.lang.Class,java.lang.Class%5B%5D)`, `methodType`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'ptypesToInsert', [/* parameter description */
					[/* text */ 't', `zero or more new parameter types to insert after the end of the parameter list`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if any element of `],
					[/* inline code block */ 'i', `ptypesToInsert`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `void.class`],
					[/* text */ 't', `
                                  or if the resulting method type would have more than 255 parameter slots`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `ptypesToInsert`],
					[/* text */ 't', ` or any of its elements is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the same type, except with the selected parameter(s) appended`]
			]
		]],
		[/* method */ 'appendParameterTypes(java.util.List)', [
			[/* method description */
				[/* text */ 't', `Finds or creates a method type with additional parameter types.
 Convenience method for `],
				[/* reference */ 'r', `#methodType(java.lang.Class,java.lang.Class%5B%5D)`, `methodType`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'ptypesToInsert', [/* parameter description */
					[/* text */ 't', `zero or more new parameter types to insert after the end of the parameter list`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if any element of `],
					[/* inline code block */ 'i', `ptypesToInsert`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `void.class`],
					[/* text */ 't', `
                                  or if the resulting method type would have more than 255 parameter slots`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `ptypesToInsert`],
					[/* text */ 't', ` or any of its elements is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the same type, except with the selected parameter(s) appended`]
			]
		]],
		[/* method */ 'changeParameterType(int,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Finds or creates a method type with a single different parameter type.
 Convenience method for `],
				[/* reference */ 'r', `#methodType(java.lang.Class,java.lang.Class%5B%5D)`, `methodType`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'num', [/* parameter description */
					[/* text */ 't', `the index (zero-based) of the parameter type to change`]
				]],
				[/* parameter */ 'nptype', [/* parameter description */
					[/* text */ 't', `a new parameter type to replace the old one with`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `num`],
					[/* text */ 't', ` is not a valid index into `],
					[/* inline code block */ 'i', `parameterArray()`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `nptype`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `void.class`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `nptype`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the same type, except with the selected parameter changed`]
			]
		]],
		[/* method */ 'changeReturnType(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Finds or creates a method type with a different return type.
 Convenience method for `],
				[/* reference */ 'r', `#methodType(java.lang.Class,java.lang.Class%5B%5D)`, `methodType`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'nrtype', [/* parameter description */
					[/* text */ 't', `a return parameter type to replace the old one with`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `nrtype`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the same type, except with the return type change`]
			]
		]],
		[/* method */ 'dropParameterTypes(int,int)', [
			[/* method description */
				[/* text */ 't', `Finds or creates a method type with some parameter types omitted.
 Convenience method for `],
				[/* reference */ 'r', `#methodType(java.lang.Class,java.lang.Class%5B%5D)`, `methodType`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `the index (zero-based) of the first parameter type to remove`]
				]],
				[/* parameter */ 'end', [/* parameter description */
					[/* text */ 't', `the index (greater than `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', `) of the first parameter type after not to remove`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` is negative or greater than `],
					[/* inline code block */ 'i', `parameterCount()`],
					[/* text */ 't', `
                                  or if `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', ` is negative or greater than `],
					[/* inline code block */ 'i', `parameterCount()`],
					[/* text */ 't', `
                                  or if `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` is greater than `],
					[/* inline code block */ 'i', `end`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the same type, except with the selected parameter(s) removed`]
			]
		]],
		[/* method */ 'erase()', [
			[/* method description */
				[/* text */ 't', `Erases all reference types to `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.
 Convenience method for `],
				[/* reference */ 'r', `#methodType(java.lang.Class,java.lang.Class%5B%5D)`, `methodType`],
				[/* text */ 't', `.
 All primitive types (including `],
				[/* inline code block */ 'i', `void`],
				[/* text */ 't', `) will remain unchanged.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a version of the original type with all reference types replaced`]
			]
		]],
		[/* method */ 'generic()', [
			[/* method description */
				[/* text */ 't', `Converts all types, both reference and primitive, to `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.
 Convenience method for `],
				[/* reference */ 'r', `#genericMethodType(int)`, `genericMethodType`],
				[/* text */ 't', `.
 The expression `],
				[/* inline code block */ 'i', `type.wrap().erase()`],
				[/* text */ 't', ` produces the same value
 as `],
				[/* inline code block */ 'i', `type.generic()`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a version of the original type with all types replaced`]
			]
		]],
		[/* method */ 'insertParameterTypes(int,java.lang.Class...)', [
			[/* method description */
				[/* text */ 't', `Finds or creates a method type with additional parameter types.
 Convenience method for `],
				[/* reference */ 'r', `#methodType(java.lang.Class,java.lang.Class%5B%5D)`, `methodType`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'num', [/* parameter description */
					[/* text */ 't', `the position (zero-based) of the inserted parameter type(s)`]
				]],
				[/* parameter */ 'ptypesToInsert', [/* parameter description */
					[/* text */ 't', `zero or more new parameter types to insert into the parameter list`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `num`],
					[/* text */ 't', ` is negative or greater than `],
					[/* inline code block */ 'i', `parameterCount()`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if any element of `],
					[/* inline code block */ 'i', `ptypesToInsert`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `void.class`],
					[/* text */ 't', `
                                  or if the resulting method type would have more than 255 parameter slots`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `ptypesToInsert`],
					[/* text */ 't', ` or any of its elements is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the same type, except with the selected parameter(s) inserted`]
			]
		]],
		[/* method */ 'insertParameterTypes(int,java.util.List)', [
			[/* method description */
				[/* text */ 't', `Finds or creates a method type with additional parameter types.
 Convenience method for `],
				[/* reference */ 'r', `#methodType(java.lang.Class,java.lang.Class%5B%5D)`, `methodType`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'num', [/* parameter description */
					[/* text */ 't', `the position (zero-based) of the inserted parameter type(s)`]
				]],
				[/* parameter */ 'ptypesToInsert', [/* parameter description */
					[/* text */ 't', `zero or more new parameter types to insert into the parameter list`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `num`],
					[/* text */ 't', ` is negative or greater than `],
					[/* inline code block */ 'i', `parameterCount()`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if any element of `],
					[/* inline code block */ 'i', `ptypesToInsert`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `void.class`],
					[/* text */ 't', `
                                  or if the resulting method type would have more than 255 parameter slots`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `ptypesToInsert`],
					[/* text */ 't', ` or any of its elements is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the same type, except with the selected parameter(s) inserted`]
			]
		]],
		[/* method */ 'unwrap()', [
			[/* method description */
				[/* text */ 't', `Converts all wrapper types to their corresponding primitive types.
 Convenience method for `],
				[/* reference */ 'r', `#methodType(java.lang.Class,java.lang.Class%5B%5D)`, `methodType`],
				[/* text */ 't', `.
 All primitive types (including `],
				[/* inline code block */ 'i', `void`],
				[/* text */ 't', `) will remain unchanged.
 A return type of `],
				[/* inline code block */ 'i', `java.lang.Void`],
				[/* text */ 't', ` is changed to `],
				[/* inline code block */ 'i', `void`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a version of the original type with all wrapper types replaced`]
			]
		]],
		[/* method */ 'wrap()', [
			[/* method description */
				[/* text */ 't', `Converts all primitive types to their corresponding wrapper types.
 Convenience method for `],
				[/* reference */ 'r', `#methodType(java.lang.Class,java.lang.Class%5B%5D)`, `methodType`],
				[/* text */ 't', `.
 All reference types (including wrapper types) will remain unchanged.
 A `],
				[/* inline code block */ 'i', `void`],
				[/* text */ 't', ` return type is changed to the type `],
				[/* inline code block */ 'i', `java.lang.Void`],
				[/* text */ 't', `.
 The expression `],
				[/* inline code block */ 'i', `type.wrap().erase()`],
				[/* text */ 't', ` produces the same value
 as `],
				[/* inline code block */ 'i', `type.generic()`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a version of the original type with all primitive types replaced`]
			]
		]],
		[/* method */ 'descriptorString()', [
			[/* method description */
				[/* text */ 't', `Returns a descriptor string for this method type.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If this method type can be `],
					[/* text */ 't', `described nominally`],
					[/* text */ 't', `,
 then the result is a method type descriptor (JVMS `],
					[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.3.3`, `4.3.3`],
					[/* text */ 't', `).
 `],
					[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`, `MethodTypeDesc`],
					[/* text */ 't', ` for this method type
 can be produced by calling `],
					[/* reference */ 'r', `java.lang.constant.MethodTypeDesc#ofDescriptor(java.lang.String)`, `MethodTypeDesc::ofDescriptor`],
					[/* text */ 't', ` with the result descriptor string.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If this method type cannot be `],
					[/* text */ 't', `described nominally`],
					[/* text */ 't', `
 and the result is a string of the form:
 `]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `"(<parameter-descriptors>)<return-descriptor>"`]
				]],
				[/* text */ 't', `
 where `],
				[/* inline code block */ 'i', `<parameter-descriptors>`],
				[/* text */ 't', ` is the concatenation of the
 `],
				[/* reference */ 'r', `java.lang.Class#descriptorString()`, `descriptor string`],
				[/* text */ 't', ` of all
 of the parameter types and the `],
				[/* reference */ 'r', `java.lang.Class#descriptorString()`, `descriptor string`],
				[/* text */ 't', `
 of the return type. No `],
				[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`, `MethodTypeDesc`],
				[/* text */ 't', `
 can be produced from the result string.`],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the descriptor string for this method type`]
			]
		]],
		[/* method */ 'toMethodDescriptorString()', [
			[/* method description */
				[/* text */ 't', `Returns a descriptor string for the method type.  This method
 is equivalent to calling `],
				[/* reference */ 'r', `#descriptorString()`, `MethodType::descriptorString`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that this is not a strict inverse of `],
					[/* reference */ 'r', `#fromMethodDescriptorString(java.lang.String,java.lang.ClassLoader)`, `fromMethodDescriptorString`],
					[/* text */ 't', `.
 Two distinct classes which share a common name but have different class loaders
 will appear identical when viewed within descriptor strings.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is included for the benefit of applications that must
 generate bytecodes that process method handles and `],
					[/* inline code block */ 'i', `invokedynamic`],
					[/* text */ 't', `.
 `],
					[/* reference */ 'r', `#fromMethodDescriptorString(java.lang.String,java.lang.ClassLoader)`, `fromMethodDescriptorString`],
					[/* text */ 't', `,
 because the latter requires a suitable class loader argument.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the descriptor string for this method type`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of the method type,
 of the form `],
				[/* inline code block */ 'i', `"(PT0,PT1...)RT"`],
				[/* text */ 't', `.
 The string representation of a method type is a
 parenthesis enclosed, comma separated list of type names,
 followed immediately by the return type.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Each type is represented by its
 `],
					[/* reference */ 'r', `java.lang.Class#getSimpleName()`, `simple name`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of the object.`]
			]
		]],
		[/* method */ 'parameterList()', [
			[/* method description */
				[/* text */ 't', `Presents the parameter types as a list (a convenience method).
 The list will be immutable.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the parameter types (as an immutable list)`]
			]
		]],
		[/* method */ 'describeConstable()', [
			[/* method description */
				[/* text */ 't', `Returns a nominal descriptor for this instance, if one can be
 constructed, or an empty `],
				[/* reference */ 'r', `java.util.Optional`, `Optional`],
				[/* text */ 't', ` if one cannot be.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `An `],
				[/* reference */ 'r', `java.util.Optional`, `Optional`],
				[/* text */ 't', ` containing the resulting nominal descriptor,
 or an empty `],
				[/* reference */ 'r', `java.util.Optional`, `Optional`],
				[/* text */ 't', ` if one cannot be constructed.`]
			]
		]],
		[/* method */ 'fromMethodDescriptorString(java.lang.String,java.lang.ClassLoader)', [
			[/* method description */
				[/* text */ 't', `Finds or creates an instance of a method type, given the spelling of its bytecode descriptor.
 Convenience method for `],
				[/* reference */ 'r', `#methodType(java.lang.Class,java.lang.Class%5B%5D)`, `methodType`],
				[/* text */ 't', `.
 Any class or interface name embedded in the descriptor string will be
 resolved by the given loader (or if it is null, on the system class loader).
 `],
				[/* block */ 'b', `
 Note that it is possible to encounter method types which cannot be
 constructed by this method, because their component types are
 not all reachable from a common class loader.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is included for the benefit of applications that must
 generate bytecodes that process method handles and `],
					[/* inline code block */ 'i', `invokedynamic`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'descriptor', [/* parameter description */
					[/* text */ 't', `a bytecode-level type descriptor string "(T...)T"`]
				]],
				[/* parameter */ 'loader', [/* parameter description */
					[/* text */ 't', `the class loader in which to look up the types`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the string is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the string is not well-formed`]
				]],
				[/* throw */ 'java.lang.TypeNotPresentException', [/* throw description */
					[/* text */ 't', `if a named type cannot be found`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the security manager is present and
         `],
					[/* inline code block */ 'i', `loader`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` and the caller does not have the
         `],
					[/* reference */ 'r', `java.lang.RuntimePermission`, `RuntimePermission`],
					[/* inline code block */ 'i', `("getClassLoader")`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method type matching the bytecode-level type descriptor`]
			]
		]],
		[/* method */ 'genericMethodType(int)', [
			[/* method description */
				[/* text */ 't', `Finds or creates a method type whose components are all `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.
 Convenience method for `],
				[/* reference */ 'r', `#methodType(java.lang.Class,java.lang.Class%5B%5D)`, `methodType`],
				[/* text */ 't', `.
 All parameters and the return type will be Object.`]
			],
			[/* parameters */
				[/* parameter */ 'objectArgCount', [/* parameter description */
					[/* text */ 't', `number of parameters`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `objectArgCount`],
					[/* text */ 't', ` is negative or greater than 255`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a generally applicable method type, for all calls of the given argument count`]
			]
		]],
		[/* method */ 'genericMethodType(int,boolean)', [
			[/* method description */
				[/* text */ 't', `Finds or creates a method type whose components are `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` with an optional trailing `],
				[/* inline code block */ 'i', `Object[]`],
				[/* text */ 't', ` array.
 Convenience method for `],
				[/* reference */ 'r', `#methodType(java.lang.Class,java.lang.Class%5B%5D)`, `methodType`],
				[/* text */ 't', `.
 All parameters and the return type will be `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `,
 except the final array parameter if any, which will be `],
				[/* inline code block */ 'i', `Object[]`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'objectArgCount', [/* parameter description */
					[/* text */ 't', `number of parameters (excluding the final array parameter if any)`]
				]],
				[/* parameter */ 'finalArray', [/* parameter description */
					[/* text */ 't', `whether there will be a trailing array parameter, of type `],
					[/* inline code block */ 'i', `Object[]`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `objectArgCount`],
					[/* text */ 't', ` is negative or greater than 255 (or 254, if `],
					[/* inline code block */ 'i', `finalArray`],
					[/* text */ 't', ` is true)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a generally applicable method type, for all calls of the given fixed argument count and a collected array of further arguments`]
			]
		]],
		[/* method */ 'methodType(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Finds or creates a method type with the given components.
 Convenience method for `],
				[/* reference */ 'r', `#methodType(java.lang.Class,java.lang.Class%5B%5D)`, `methodType`],
				[/* text */ 't', `.
 The resulting method has no parameter types.`]
			],
			[/* parameters */
				[/* parameter */ 'rtype', [/* parameter description */
					[/* text */ 't', `the return type`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `rtype`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method type with the given return value`]
			]
		]],
		[/* method */ 'methodType(java.lang.Class,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Finds or creates a method type with the given components.
 Convenience method for `],
				[/* reference */ 'r', `#methodType(java.lang.Class,java.lang.Class%5B%5D)`, `methodType`],
				[/* text */ 't', `.
 The resulting method has the single given parameter type.`]
			],
			[/* parameters */
				[/* parameter */ 'rtype', [/* parameter description */
					[/* text */ 't', `the return type`]
				]],
				[/* parameter */ 'ptype0', [/* parameter description */
					[/* text */ 't', `the parameter type`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `rtype`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `ptype0`],
					[/* text */ 't', ` is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `ptype0`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `void.class`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method type with the given return value and parameter type`]
			]
		]],
		[/* method */ 'methodType(java.lang.Class,java.lang.Class,java.lang.Class...)', [
			[/* method description */
				[/* text */ 't', `Finds or creates a method type with the given components.
 Convenience method for `],
				[/* reference */ 'r', `#methodType(java.lang.Class,java.lang.Class%5B%5D)`, `methodType`],
				[/* text */ 't', `.
 The leading parameter type is prepended to the remaining array.`]
			],
			[/* parameters */
				[/* parameter */ 'rtype', [/* parameter description */
					[/* text */ 't', `the return type`]
				]],
				[/* parameter */ 'ptype0', [/* parameter description */
					[/* text */ 't', `the first parameter type`]
				]],
				[/* parameter */ 'ptypes', [/* parameter description */
					[/* text */ 't', `the remaining parameter types`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `rtype`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `ptype0`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `ptypes`],
					[/* text */ 't', ` or any element of `],
					[/* inline code block */ 'i', `ptypes`],
					[/* text */ 't', ` is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `ptype0`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `ptypes`],
					[/* text */ 't', ` or any element of `],
					[/* inline code block */ 'i', `ptypes`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `void.class`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method type with the given components`]
			]
		]],
		[/* method */ 'methodType(java.lang.Class,java.lang.Class[])', [
			[/* method description */
				[/* text */ 't', `Finds or creates an instance of the given method type.`]
			],
			[/* parameters */
				[/* parameter */ 'rtype', [/* parameter description */
					[/* text */ 't', `the return type`]
				]],
				[/* parameter */ 'ptypes', [/* parameter description */
					[/* text */ 't', `the parameter types`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `rtype`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `ptypes`],
					[/* text */ 't', ` or any element of `],
					[/* inline code block */ 'i', `ptypes`],
					[/* text */ 't', ` is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if any element of `],
					[/* inline code block */ 'i', `ptypes`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `void.class`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method type with the given components`]
			]
		]],
		[/* method */ 'methodType(java.lang.Class,java.lang.invoke.MethodType)', [
			[/* method description */
				[/* text */ 't', `Finds or creates a method type with the given components.
 Convenience method for `],
				[/* reference */ 'r', `#methodType(java.lang.Class,java.lang.Class%5B%5D)`, `methodType`],
				[/* text */ 't', `.
 The resulting method has the same parameter types as `],
				[/* inline code block */ 'i', `ptypes`],
				[/* text */ 't', `,
 and the specified return type.`]
			],
			[/* parameters */
				[/* parameter */ 'rtype', [/* parameter description */
					[/* text */ 't', `the return type`]
				]],
				[/* parameter */ 'ptypes', [/* parameter description */
					[/* text */ 't', `the method type which supplies the parameter types`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `rtype`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `ptypes`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method type with the given components`]
			]
		]],
		[/* method */ 'methodType(java.lang.Class,java.util.List)', [
			[/* method description */
				[/* text */ 't', `Finds or creates a method type with the given components.
 Convenience method for `],
				[/* reference */ 'r', `#methodType(java.lang.Class,java.lang.Class%5B%5D)`, `methodType`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'rtype', [/* parameter description */
					[/* text */ 't', `the return type`]
				]],
				[/* parameter */ 'ptypes', [/* parameter description */
					[/* text */ 't', `the parameter types`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `rtype`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `ptypes`],
					[/* text */ 't', ` or any element of `],
					[/* inline code block */ 'i', `ptypes`],
					[/* text */ 't', ` is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if any element of `],
					[/* inline code block */ 'i', `ptypes`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `void.class`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method type with the given components`]
			]
		]]
	],
]);
