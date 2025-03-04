import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.VarHandle$VarHandleDesc', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* text */ 't', `nominal descriptor`],
		[/* text */ 't', ` for a
 `],
		[/* reference */ 'r', `java.lang.invoke.VarHandle`],
		[/* text */ 't', ` constant.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'varType()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` describing the type of the variable described
 by this descriptor.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the variable type`]
			]
		]],
		[/* method */ 'resolveConstantDesc(java.lang.invoke.MethodHandles.Lookup)', UDF],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a compact textual description of this constant description.
 For a field `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle`],
				[/* text */ 't', `, includes the owner, name, and type
 of the field, and whether it is static; for an array `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle`],
				[/* text */ 't', `,
 the name of the component type.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A compact textual description of this descriptor`]
			]
		]],
		[/* method */ 'ofArray(java.lang.constant.ClassDesc)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle.VarHandleDesc`],
				[/* text */ 't', ` corresponding to a `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle`],
				[/* text */ 't', `
 for an array type.`]
			],
			[/* parameters */
				[/* parameter */ 'arrayClass', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`],
					[/* text */ 't', ` describing the type of the array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any of the arguments are null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle.VarHandleDesc`]
			]
		]],
		[/* method */ 'ofField(java.lang.constant.ClassDesc,java.lang.String,java.lang.constant.ClassDesc)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle.VarHandleDesc`],
				[/* text */ 't', ` corresponding to a `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle`],
				[/* text */ 't', `
 for an instance field.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the unqualified name of the field`]
				]],
				[/* parameter */ 'declaringClass', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`],
					[/* text */ 't', ` describing the declaring class,
                       for field var handles`]
				]],
				[/* parameter */ 'fieldType', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`],
					[/* text */ 't', ` describing the type of the field`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any of the arguments are null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle.VarHandleDesc`]
			]
		]],
		[/* method */ 'ofStaticField(java.lang.constant.ClassDesc,java.lang.String,java.lang.constant.ClassDesc)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle.VarHandleDesc`],
				[/* text */ 't', ` corresponding to a `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle`],
				[/* text */ 't', `
 for a static field.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the unqualified name of the field`]
				]],
				[/* parameter */ 'declaringClass', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`],
					[/* text */ 't', ` describing the declaring class,
                       for field var handles`]
				]],
				[/* parameter */ 'fieldType', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`],
					[/* text */ 't', ` describing the type of the field`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any of the arguments are null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle.VarHandleDesc`]
			]
		]]
	],
]);
