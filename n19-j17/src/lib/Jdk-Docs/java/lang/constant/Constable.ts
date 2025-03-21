import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.constant.Constable', [
	[/* class description */
		[/* text */ 't', `Represents a type which is `],
		[/* text */ 't', `constable`],
		[/* text */ 't', `.  A constable type is one whose
 values are constants that can be represented in the constant pool of a Java
 classfile as described in JVMS 4.4, and whose instances can describe themselves
 nominally as a `],
		[/* reference */ 'r', `java.lang.constant.ConstantDesc`, `ConstantDesc`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Some constable types have a native representation in the constant pool:
 `],
			[/* reference */ 'r', `java.lang.String`, `String`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.lang.Integer`, `Integer`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.lang.Long`, `Long`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.lang.Float`, `Float`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `java.lang.Double`, `Double`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.lang.Class`, `Class`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.lang.invoke.MethodType`, `MethodType`],
			[/* text */ 't', `, and `],
			[/* reference */ 'r', `java.lang.invoke.MethodHandle`, `MethodHandle`],
			[/* text */ 't', `.
 The types `],
			[/* reference */ 'r', `java.lang.String`, `String`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.lang.Integer`, `Integer`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.lang.Long`, `Long`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.lang.Float`, `Float`],
			[/* text */ 't', `,
 and `],
			[/* reference */ 'r', `java.lang.Double`, `Double`],
			[/* text */ 't', ` serve as their own nominal descriptors; `],
			[/* reference */ 'r', `java.lang.Class`, `Class`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `java.lang.invoke.MethodType`, `MethodType`],
			[/* text */ 't', `, and `],
			[/* reference */ 'r', `java.lang.invoke.MethodHandle`, `MethodHandle`],
			[/* text */ 't', ` have corresponding nominal
 descriptors `],
			[/* reference */ 'r', `java.lang.constant.ClassDesc`, `ClassDesc`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.lang.constant.MethodTypeDesc`, `MethodTypeDesc`],
			[/* text */ 't', `, and `],
			[/* reference */ 'r', `java.lang.constant.MethodHandleDesc`, `MethodHandleDesc`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Other reference types can be constable if their instances can describe
 themselves in nominal form as a `],
			[/* reference */ 'r', `java.lang.constant.ConstantDesc`, `ConstantDesc`],
			[/* text */ 't', `. Examples in the Java SE
 Platform API are types that support Java language features such as `],
			[/* reference */ 'r', `java.lang.Enum`, `Enum`],
			[/* text */ 't', `,
 and runtime support classes such as `],
			[/* reference */ 'r', `java.lang.invoke.VarHandle`, `VarHandle`],
			[/* text */ 't', `.  These are typically
 described with a `],
			[/* reference */ 'r', `java.lang.constant.DynamicConstantDesc`, `DynamicConstantDesc`],
			[/* text */ 't', `, which describes dynamically
 generated constants (JVMS 4.4.10).

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The nominal form of an instance of a constable type is obtained via
 `],
			[/* reference */ 'r', `#describeConstable()`, `describeConstable()`],
			[/* text */ 't', `. A `],
			[/* reference */ 'r', `java.lang.constant.Constable`, `Constable`],
			[/* text */ 't', ` need
 not be able to (or may choose not to) describe all its instances in the form of
 a `],
			[/* reference */ 'r', `java.lang.constant.ConstantDesc`, `ConstantDesc`],
			[/* text */ 't', `; this method returns an `],
			[/* reference */ 'r', `java.util.Optional`, `Optional`],
			[/* text */ 't', ` that can be
 empty to indicate that a nominal descriptor could not be created for an instance.
 (For example, `],
			[/* reference */ 'r', `java.lang.invoke.MethodHandle`, `MethodHandle`],
			[/* text */ 't', ` will produce nominal descriptors for direct
 method handles, but not necessarily those produced by method handle
 combinators.)`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'describeConstable()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* reference */ 'r', `java.util.Optional`, `Optional`],
				[/* text */ 't', ` containing the nominal descriptor for this
 instance, if one can be constructed, or an empty `],
				[/* reference */ 'r', `java.util.Optional`, `Optional`],
				[/* text */ 't', `
 if one cannot be constructed.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `An `],
				[/* reference */ 'r', `java.util.Optional`, `Optional`],
				[/* text */ 't', ` containing the resulting nominal descriptor,
 or an empty `],
				[/* reference */ 'r', `java.util.Optional`, `Optional`],
				[/* text */ 't', ` if one cannot be constructed.`]
			]
		]]
	],
	/* enum values */ UDF
]);
