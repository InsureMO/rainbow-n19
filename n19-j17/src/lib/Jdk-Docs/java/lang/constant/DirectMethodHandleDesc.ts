import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.constant.DirectMethodHandleDesc', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* external link */ 'a', `package-summary.html#nominal`, `nominal descriptor`],
		[/* text */ 't', ` for a direct
 `],
		[/* reference */ 'r', `java.lang.invoke.MethodHandle`],
		[/* text */ 't', `.  A `],
		[/* reference */ 'r', `java.lang.constant.DirectMethodHandleDesc`],
		[/* text */ 't', ` corresponds to
 a `],
		[/* inline code block */ 'i', `Constant_MethodHandle_info`],
		[/* text */ 't', ` entry in the constant pool of a classfile.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'methodName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of the method or field described by this nominal descriptor.
 For constructors, returns the reserved name `],
				[/* inline code block */ 'i', `"<init>"`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of the method or field`]
			]
		]],
		[/* method */ 'refKind()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `refKind`],
				[/* text */ 't', ` of the method handle described by this nominal
 reference, as defined by `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandleInfo`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the reference kind`]
			]
		]],
		[/* method */ 'kind()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `kind`],
				[/* text */ 't', ` of the method handle described by this nominal
 descriptor.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* reference */ 'r', `enum class in java.lang.constant.DirectMethodHandleDesc.Kind`]
			]
		]],
		[/* method */ 'owner()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` describing the class declaring the
 method or field described by this nominal descriptor.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the class declaring the method or field`]
			]
		]],
		[/* method */ 'lookupDescriptor()', [
			[/* method description */
				[/* text */ 't', `Returns the lookup descriptor of the method handle described by this descriptor,
 after adjusting for the invocation mode.  This will correspond to either
 a method type descriptor string (for methods and constructors), or a field
 descriptor string (for field access method handles).  The lookup descriptor
 string is in the same format as accepted by `],
				[/* external link */ 'a', `MethodHandleDesc.html#of(java.lang.constant.DirectMethodHandleDesc.Kind,java.lang.constant.ClassDesc,java.lang.String,java.lang.String)`, `MethodHandleDesc.of(Kind, ClassDesc, String, String)`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the lookup descriptor string`]
			]
		]],
		[/* method */ 'isOwnerInterface()', [
			[/* method description */
				[/* text */ 't', `Indicates if the method is declared by an interface`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the method is declared by an interface`]
			]
		]]
	],
]);
