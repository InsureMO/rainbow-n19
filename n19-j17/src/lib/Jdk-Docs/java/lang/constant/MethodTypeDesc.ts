import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.constant.MethodTypeDesc', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* reference */ 'r', `.package-summary#nominal`],
		[/* text */ 't', ` for a
 `],
		[/* reference */ 'r', `java.lang.invoke.MethodType`],
		[/* text */ 't', ` constant.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares the specified object with this descriptor for equality.  Returns
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the specified object is also a
 `],
				[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`],
				[/* text */ 't', ` both have the same arity, their return types
 are equal, and each pair of corresponding parameter types are equal.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `the other object`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `whether this descriptor is equal to the other object`]
			]
		]],
		[/* method */ 'parameterCount()', [
			[/* method description */
				[/* text */ 't', `Returns the number of parameters of the method type described by
 this `],
				[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of parameters`]
			]
		]],
		[/* method */ 'parameterType(int)', [
			[/* method description */
				[/* text */ 't', `Returns the parameter type of the `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', `'th parameter of the method type
 described by this `],
				[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index of the parameter to retrieve`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the index is outside the half-open
 range {[0, parameterCount())}`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` describing the desired parameter type`]
			]
		]],
		[/* method */ 'returnType()', [
			[/* method description */
				[/* text */ 't', `Gets the return type of the method type described by this `],
				[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` describing the return type of the method type`]
			]
		]],
		[/* method */ 'parameterArray()', [
			[/* method description */
				[/* text */ 't', `Returns the parameter types as an array.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array of `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` describing the parameter types`]
			]
		]],
		[/* method */ 'changeParameterType(int,java.lang.constant.ClassDesc)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`],
				[/* text */ 't', ` that is identical to this one,
 except that a single parameter type has been changed to the specified type.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index of the parameter to change`]
				]],
				[/* parameter */ 'paramType', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`],
					[/* text */ 't', ` describing the new parameter type`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the index is outside the half-open
 range {[0, parameterCount)}`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`],
				[/* text */ 't', ` describing the desired method type`]
			]
		]],
		[/* method */ 'changeReturnType(java.lang.constant.ClassDesc)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`],
				[/* text */ 't', ` that is identical to
 this one, except with the specified return type.`]
			],
			[/* parameters */
				[/* parameter */ 'returnType', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`],
					[/* text */ 't', ` describing the new return type`]
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
				[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`],
				[/* text */ 't', ` describing the desired method type`]
			]
		]],
		[/* method */ 'dropParameterTypes(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`],
				[/* text */ 't', ` that is identical to this one,
 except that a range of parameter types have been removed.`]
			],
			[/* parameters */
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `the index of the first parameter to remove`]
				]],
				[/* parameter */ 'end', [/* parameter description */
					[/* text */ 't', `the index after the last parameter to remove`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` is outside the half-open
 range `],
					[/* inline code block */ 'i', `[0, parameterCount)`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', ` is outside the closed range
 `],
					[/* inline code block */ 'i', `[0, parameterCount]`],
					[/* text */ 't', `, or if `],
					[/* inline code block */ 'i', `start > end`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`],
				[/* text */ 't', ` describing the desired method type`]
			]
		]],
		[/* method */ 'insertParameterTypes(int,java.lang.constant.ClassDesc...)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`],
				[/* text */ 't', ` that is identical to this one,
 except that a range of additional parameter types have been inserted.`]
			],
			[/* parameters */
				[/* parameter */ 'pos', [/* parameter description */
					[/* text */ 't', `the index at which to insert the first inserted parameter`]
				]],
				[/* parameter */ 'paramTypes', [/* parameter description */
					[/* text */ 't', ``],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`],
					[/* text */ 't', `s describing the new parameter types
                   to insert`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument or its contents are `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is outside the closed
 range {[0, parameterCount]}`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if any element of `],
					[/* inline code block */ 'i', `paramTypes`],
					[/* text */ 't', `
 is a `],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`],
					[/* text */ 't', ` for `],
					[/* inline code block */ 'i', `void`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`],
				[/* text */ 't', ` describing the desired method type`]
			]
		]],
		[/* method */ 'parameterList()', [
			[/* method description */
				[/* text */ 't', `Returns the parameter types as an immutable `],
				[/* reference */ 'r', `java.util.List`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.util.List`],
				[/* text */ 't', ` of `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` describing the parameter types`]
			]
		]],
		[/* method */ 'descriptorString()', [
			[/* method description */
				[/* text */ 't', `Returns the method type descriptor string.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the method type descriptor string`]
			]
		]],
		[/* method */ 'displayDescriptor()', [
			[/* method description */
				[/* text */ 't', `Returns a human-readable descriptor for this method type, using the
 canonical names for parameter and return types.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the human-readable descriptor for this method type`]
			]
		]],
		[/* method */ 'of(java.lang.constant.ClassDesc,java.lang.constant.ClassDesc...)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`],
				[/* text */ 't', ` given the return type and parameter
 types.`]
			],
			[/* parameters */
				[/* parameter */ 'returnDesc', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`],
					[/* text */ 't', ` describing the return type`]
				]],
				[/* parameter */ 'paramDescs', [/* parameter description */
					[/* text */ 't', ``],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`],
					[/* text */ 't', `s describing the argument types`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument or its contents are `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if any element of `],
					[/* inline code block */ 'i', `paramDescs`],
					[/* text */ 't', ` is a
 `],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`],
					[/* text */ 't', ` for `],
					[/* inline code block */ 'i', `void`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`],
				[/* text */ 't', ` describing the desired method type`]
			]
		]],
		[/* method */ 'ofDescriptor(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`],
				[/* text */ 't', ` given a method descriptor string.`]
			],
			[/* parameters */
				[/* parameter */ 'descriptor', [/* parameter description */
					[/* text */ 't', `a method descriptor string`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the descriptor string is not a valid
 method descriptor`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`],
				[/* text */ 't', ` describing the desired method type`]
			]
		]]
	],
]);
