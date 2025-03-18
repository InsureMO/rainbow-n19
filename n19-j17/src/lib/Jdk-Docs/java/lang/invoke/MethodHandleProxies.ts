import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.MethodHandleProxies', [
	[/* class description */
		[/* text */ 't', `This class consists exclusively of static methods that help adapt
 method handles to other JVM types, such as interfaces.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'asInterfaceInstance(java.lang.Class,java.lang.invoke.MethodHandle)', [
			[/* method description */
				[/* text */ 't', `Produces an instance of the given single-method interface which redirects
 its calls to the given method handle.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A single-method interface is an interface which declares a uniquely named method.
 When determining the uniquely named method of a single-method interface,
 the public `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', ` methods (`],
					[/* inline code block */ 'i', `toString`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `equals`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `hashCode`],
					[/* text */ 't', `)
 are disregarded as are any default (non-abstract) methods.
 For example, `],
					[/* reference */ 'r', `java.util.Comparator`, `Comparator`],
					[/* text */ 't', ` is a single-method interface,
 even though it re-declares the `],
					[/* inline code block */ 'i', `Object.equals`],
					[/* text */ 't', ` method and also
 declares default methods, such as `],
					[/* inline code block */ 'i', `Comparator.reverse`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The interface must be public and not `],
					[/* reference */ 'r', `java.lang.Class#isSealed()`, `sealed`],
					[/* text */ 't', `.
 No additional access checks are performed.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The resulting instance of the required type will respond to
 invocation of the type's uniquely named method by calling
 the given target on the incoming arguments,
 and returning or throwing whatever the target
 returns or throws.  The invocation will be as if by
 `],
					[/* inline code block */ 'i', `target.invoke`],
					[/* text */ 't', `.
 The target's type will be checked before the
 instance is created, as if by a call to `],
					[/* inline code block */ 'i', `asType`],
					[/* text */ 't', `,
 which may result in a `],
					[/* inline code block */ 'i', `WrongMethodTypeException`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The uniquely named method is allowed to be multiply declared,
 with distinct type descriptors.  (E.g., it can be overloaded,
 or can possess bridge methods.)  All such declarations are
 connected directly to the target method handle.
 Argument and return types are adjusted by `],
					[/* inline code block */ 'i', `asType`],
					[/* text */ 't', `
 for each individual declaration.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The wrapper instance will implement the requested interface
 and its super-types, but no other single-method interfaces.
 This means that the instance will not unexpectedly
 pass an `],
					[/* inline code block */ 'i', `instanceof`],
					[/* text */ 't', ` test for any unrequested type.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* text */ 't', `Implementation Note:`],
					[/* text */ 't', `
 Therefore, each instance must implement a unique single-method interface.
 Implementations may not bundle together
 multiple single-method interfaces onto single implementation classes
 in the style of `],
					[/* reference */ 'r', `java.awt.AWTEventMulticaster`, `AWTEventMulticaster`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The method handle may throw an `],
					[/* text */ 't', `undeclared exception`],
					[/* text */ 't', `,
 which means any checked exception (or other checked throwable)
 not declared by the requested type's single abstract method.
 If this happens, the throwable will be wrapped in an instance of
 `],
					[/* reference */ 'r', `java.lang.reflect.UndeclaredThrowableException`, `UndeclaredThrowableException`],
					[/* text */ 't', `
 and thrown in that wrapped form.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Like `],
					[/* reference */ 'r', `java.lang.Integer#valueOf(java.lang.String,int)`, `Integer.valueOf`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `asInterfaceInstance`],
					[/* text */ 't', ` is a factory method whose results are defined
 by their behavior.
 It is not guaranteed to return a new instance for every call.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Because of the possibility of `],
					[/* reference */ 'r', `java.lang.reflect.Method#isBridge()`, `bridge methods`],
					[/* text */ 't', `
 and other corner cases, the interface may also have several abstract methods
 with the same name but having distinct descriptors (types of returns and parameters).
 In this case, all the methods are bound in common to the one given target.
 The type check and effective `],
					[/* inline code block */ 'i', `asType`],
					[/* text */ 't', ` conversion is applied to each
 method type descriptor, and all abstract methods are bound to the target in common.
 Beyond this type check, no further checks are made to determine that the
 abstract methods are related in any way.
 `]
				]],
				[/* block */ 'b', `
 Future versions of this API may accept additional types,
 such as abstract classes with single abstract methods.
 Future versions of this API may also equip wrapper instances
 with one or more additional public "marker" interfaces.
 `],
				[/* block */ 'b', `
 If a security manager is installed, this method is caller sensitive.
 During any invocation of the target method handle via the returned wrapper,
 the original creator of the wrapper (the caller) will be visible
 to context checks requested by the security manager.`]
			],
			[/* parameters */
				[/* parameter */ 'intfc', [/* parameter description */
					[/* text */ 't', `a class object representing `],
					[/* inline code block */ 'i', `T`]
				]],
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the method handle to invoke from the wrapper`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if either argument is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `intfc`],
					[/* text */ 't', ` is not a
         valid argument to this method`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the target cannot
         be converted to the type required by the requested interface`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a correctly-typed wrapper for the given target`]
			]
		]],
		[/* method */ 'isWrapperInstance(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Determines if the given object was produced by a call to `],
				[/* reference */ 'r', `#asInterfaceInstance(java.lang.Class,java.lang.invoke.MethodHandle)`, `asInterfaceInstance`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `any reference`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if the reference is not null and points to an object produced by `],
				[/* inline code block */ 'i', `asInterfaceInstance`]
			]
		]],
		[/* method */ 'wrapperInstanceType(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Recovers the unique single-method interface type for which this wrapper instance was created.
 The object `],
				[/* inline code block */ 'i', `x`],
				[/* text */ 't', ` must have been produced by a call to `],
				[/* reference */ 'r', `#asInterfaceInstance(java.lang.Class,java.lang.invoke.MethodHandle)`, `asInterfaceInstance`],
				[/* text */ 't', `.
 This requirement may be tested via `],
				[/* reference */ 'r', `#isWrapperInstance(java.lang.Object)`, `isWrapperInstance`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `any reference`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the reference x is not to a wrapper instance`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the single-method interface type for which the wrapper was created`]
			]
		]],
		[/* method */ 'wrapperInstanceTarget(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Produces or recovers a target method handle which is behaviorally
 equivalent to the unique method of this wrapper instance.
 The object `],
				[/* inline code block */ 'i', `x`],
				[/* text */ 't', ` must have been produced by a call to `],
				[/* reference */ 'r', `#asInterfaceInstance(java.lang.Class,java.lang.invoke.MethodHandle)`, `asInterfaceInstance`],
				[/* text */ 't', `.
 This requirement may be tested via `],
				[/* reference */ 'r', `#isWrapperInstance(java.lang.Object)`, `isWrapperInstance`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `any reference`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the reference x is not to a wrapper instance`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle implementing the unique method`]
			]
		]]
	],
	/* enum values */ UDF
]);
