import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.TypeDescriptor$OfMethod', [
	[/* class description */
		[/* text */ 't', `An entity that has a method type descriptor
 Method descriptors conforming to JVMS `],
		[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.3.3`, `4.3.3`],
		[/* text */ 't', ` can be described
 nominally via `],
		[/* reference */ 'r', `.MethodType#describeConstable()`],
		[/* text */ 't', `;
 otherwise they cannot be described nominally.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'returnType()', [
			[/* method description */
				[/* text */ 't', `Return a field descriptor describing the return type of the method type described
 by this descriptor`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a field descriptor for the return type`]
			]
		]],
		[/* method */ 'parameterType(int)', [
			[/* method description */
				[/* text */ 't', `Return a field descriptor describing the requested parameter of the method type
 described by this descriptor`]
			],
			[/* parameters */
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `the index of the parameter`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the index is outside the half-open
 range {[0, parameterCount)}`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a field descriptor for the requested parameter type`]
			]
		]],
		[/* method */ 'insertParameterTypes(int,java.lang.invoke.TypeDescriptor.OfField...)', UDF],
		[/* method */ 'changeReturnType(java.lang.invoke.TypeDescriptor.OfField)', [
			[/* method description */
				[/* text */ 't', `Return a method descriptor that is identical to this one, except that the return
 type has been changed to the specified type`]
			],
			[/* parameters */
				[/* parameter */ 'newReturn', [/* parameter description */
					[/* text */ 't', `a field descriptor for the new return type`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the new method descriptor`]
			]
		]],
		[/* method */ 'dropParameterTypes(int,int)', [
			[/* method description */
				[/* text */ 't', `Return a method descriptor that is identical to this one,
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
				[/* text */ 't', `the new method descriptor`]
			]
		]],
		[/* method */ 'parameterCount()', [
			[/* method description */
				[/* text */ 't', `Return the number of parameters in the method type`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of parameters`]
			]
		]],
		[/* method */ 'parameterList()', [
			[/* method description */
				[/* text */ 't', `Return an immutable list of field descriptors for the parameter types of the method type
 described by this descriptor`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `field descriptors for the parameter types`]
			]
		]],
		[/* method */ 'parameterArray()', [
			[/* method description */
				[/* text */ 't', `Return an array of field descriptors for the parameter types of the method type
 described by this descriptor`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `field descriptors for the parameter types`]
			]
		]],
		[/* method */ 'changeParameterType(int,java.lang.invoke.TypeDescriptor.OfField)', [
			[/* method description */
				[/* text */ 't', `Return a method descriptor that is identical to this one,
 except that a single parameter type has been changed to the specified type.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index of the parameter to change`]
				]],
				[/* parameter */ 'paramType', [/* parameter description */
					[/* text */ 't', `a field descriptor describing the new parameter type`]
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
				[/* text */ 't', `the new method descriptor`]
			]
		]]
	],
]);
