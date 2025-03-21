import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.constant.ConstantDesc', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* text */ 't', `nominal descriptor`],
		[/* text */ 't', ` for a loadable
 constant value, as defined in JVMS 4.4. Such a descriptor can be resolved via
 `],
		[/* reference */ 'r', `#resolveConstantDesc(java.lang.invoke.MethodHandles.Lookup)`, `resolveConstantDesc(MethodHandles.Lookup)`],
		[/* text */ 't', ` to yield the
 constant value itself.

 `],
		[/* block */ 'b', `Class names in a nominal descriptor, like class names in the constant pool
 of a classfile, must be interpreted with respect to a particular class
 loader, which is not part of the nominal descriptor.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Static constants that are expressible natively in the constant pool (`],
			[/* reference */ 'r', `java.lang.String`, `String`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `java.lang.Integer`, `Integer`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.lang.Long`, `Long`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.lang.Float`, `Float`],
			[/* text */ 't', `, and `],
			[/* reference */ 'r', `java.lang.Double`, `Double`],
			[/* text */ 't', `) implement
 `],
			[/* reference */ 'r', `java.lang.constant.ConstantDesc`, `ConstantDesc`],
			[/* text */ 't', `, and serve as nominal descriptors for themselves.
 Native linkable constants (`],
			[/* reference */ 'r', `java.lang.Class`, `Class`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.lang.invoke.MethodType`, `MethodType`],
			[/* text */ 't', `, and
 `],
			[/* reference */ 'r', `java.lang.invoke.MethodHandle`, `MethodHandle`],
			[/* text */ 't', `) have counterpart `],
			[/* reference */ 'r', `java.lang.constant.ConstantDesc`, `ConstantDesc`],
			[/* text */ 't', ` types:
 `],
			[/* reference */ 'r', `java.lang.constant.ClassDesc`, `ClassDesc`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`, `MethodTypeDesc`],
			[/* text */ 't', `, and `],
			[/* reference */ 'r', `java.lang.constant.MethodHandleDesc`, `MethodHandleDesc`],
			[/* text */ 't', `.
 Other constants are represented by subtypes of `],
			[/* reference */ 'r', `java.lang.constant.DynamicConstantDesc`, `DynamicConstantDesc`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `APIs that perform generation or parsing of bytecode are encouraged to use
 `],
			[/* reference */ 'r', `java.lang.constant.ConstantDesc`, `ConstantDesc`],
			[/* text */ 't', ` to describe the operand of an `],
			[/* inline code block */ 'i', `ldc`],
			[/* text */ 't', ` instruction
 (including dynamic constants), the static bootstrap arguments of
 dynamic constants and `],
			[/* inline code block */ 'i', `invokedynamic`],
			[/* text */ 't', ` instructions, and other
 bytecodes or classfile structures that make use of the constant pool.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Constants describing various common constants (such as `],
			[/* reference */ 'r', `java.lang.constant.ClassDesc`, `ClassDesc`],
			[/* text */ 't', `
 instances for platform types) can be found in `],
			[/* reference */ 'r', `java.lang.constant.ConstantDescs`, `ConstantDescs`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Implementations of `],
			[/* reference */ 'r', `java.lang.constant.ConstantDesc`, `ConstantDesc`],
			[/* text */ 't', ` should be immutable
 and their behavior should not rely on object identity.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Non-platform classes should not implement `],
			[/* reference */ 'r', `java.lang.constant.ConstantDesc`, `ConstantDesc`],
			[/* text */ 't', ` directly.
 Instead, they should extend `],
			[/* reference */ 'r', `java.lang.constant.DynamicConstantDesc`, `DynamicConstantDesc`],
			[/* text */ 't', ` (as `],
			[/* reference */ 'r', `java.lang.Enum.EnumDesc`, `Enum.EnumDesc`],
			[/* text */ 't', `
 and `],
			[/* reference */ 'r', `java.lang.invoke.VarHandle.VarHandleDesc`, `VarHandle.VarHandleDesc`],
			[/* text */ 't', ` do.)

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Nominal descriptors should be compared using the
 `],
			[/* reference */ 'r', `java.lang.Object#equals(java.lang.Object)`, `Object.equals(Object)`],
			[/* text */ 't', ` method. There is no guarantee that any
 particular entity will always be represented by the same descriptor instance.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'resolveConstantDesc(java.lang.invoke.MethodHandles.Lookup)', [
			[/* method description */
				[/* text */ 't', `Resolves this descriptor reflectively, emulating the resolution behavior
 of JVMS 5.4.3 and the access control behavior of JVMS 5.4.4.  The resolution
 and access control context is provided by the `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup`, `MethodHandles.Lookup`],
				[/* text */ 't', `
 parameter.  No caching of the resulting value is performed.`]
			],
			[/* parameters */
				[/* parameter */ 'lookup', [/* parameter description */
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup`, `MethodHandles.Lookup`],
					[/* text */ 't', ` to provide name resolution
               and access control context`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ReflectiveOperationException', [/* throw description */
					[/* text */ 't', `if a class, method, or field
 could not be reflectively resolved in the course of resolution`]
				]],
				[/* throw */ 'java.lang.LinkageError', [/* throw description */
					[/* text */ 't', `if a linkage error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the resolved constant value`]
			]
		]]
	],
	/* enum values */ UDF
]);
