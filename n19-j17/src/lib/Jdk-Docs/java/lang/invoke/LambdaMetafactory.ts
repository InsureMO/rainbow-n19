import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.LambdaMetafactory', [
	[/* class description */
		[/* block */ 'b', [
			[/* text */ 't', `Methods to facilitate the creation of simple "function objects" that
 implement one or more interfaces by delegation to a provided `],
			[/* reference */ 'r', `java.lang.invoke.MethodHandle`],
			[/* text */ 't', `,
 possibly after type adaptation and partial evaluation of arguments.  These
 methods are typically used as `],
			[/* text */ 't', `bootstrap methods`],
			[/* text */ 't', ` for `],
			[/* inline code block */ 'i', `invokedynamic`],
			[/* text */ 't', `
 call sites, to support the `],
			[/* text */ 't', `lambda expression`],
			[/* text */ 't', ` and `],
			[/* text */ 't', `method
 reference expression`],
			[/* text */ 't', ` features of the Java Programming Language.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Indirect access to the behavior specified by the provided `],
			[/* inline code block */ 'i', `MethodHandle`],
			[/* text */ 't', `
 proceeds in order through three phases:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', `Linkage`],
					[/* text */ 't', ` occurs when the methods in this class are invoked.
     They take as arguments an interface to be implemented (typically a
     `],
					[/* text */ 't', `functional interface`],
					[/* text */ 't', `, one with a single abstract method), a
     name and signature of a method from that interface to be implemented, a
     `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandleInfo`],
					[/* text */ 't', ` describing the desired
     implementation behavior for that method, and possibly other additional
     metadata, and produce a `],
					[/* reference */ 'r', `java.lang.invoke.CallSite`],
					[/* text */ 't', ` whose target can be used to
     create suitable function objects.

     `]
				]],
				[/* block */ 'b', `Linkage may involve dynamically loading a new class that implements
     the target interface, or re-using a suitable existing class.

     `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `CallSite`],
					[/* text */ 't', ` can be considered a "factory" for function
     objects and so these linkage methods are referred to as
     "metafactories".`]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', `Capture`],
					[/* text */ 't', ` occurs when the `],
					[/* inline code block */ 'i', `CallSite`],
					[/* text */ 't', `'s target is
     invoked, typically through an `],
					[/* inline code block */ 'i', `invokedynamic`],
					[/* text */ 't', ` call site,
     producing a function object. This may occur many times for
     a single factory `],
					[/* inline code block */ 'i', `CallSite`],
					[/* text */ 't', `.

     `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the behavior `],
					[/* inline code block */ 'i', `MethodHandle`],
					[/* text */ 't', ` has additional parameters beyond
     those of the specified interface method, these are referred to as
     `],
					[/* text */ 't', `captured parameters`],
					[/* text */ 't', `, which must be provided as arguments to the
     `],
					[/* inline code block */ 'i', `CallSite`],
					[/* text */ 't', ` target. The expected number and types of captured
     parameters are determined during linkage.

     `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Capture may involve allocation of a new function object, or may return
     a suitable existing function object. The identity of a function object
     produced by capture is unpredictable, and therefore identity-sensitive
     operations (such as reference equality, object locking, and `],
					[/* inline code block */ 'i', `System.identityHashCode()`],
					[/* text */ 't', `) may produce different results in different
     implementations, or even upon different invocations in the same
     implementation.`]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', `Invocation`],
					[/* text */ 't', ` occurs when an implemented interface method is
     invoked on a function object. This may occur many times for a single
     function object. The method referenced by the implementation
     `],
					[/* inline code block */ 'i', `MethodHandle`],
					[/* text */ 't', ` is invoked, passing to it the captured arguments and
     the invocation arguments. The result of the method is returned.
     `]
				]]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `It is sometimes useful to restrict the set of inputs or results permitted
 at invocation.  For example, when the generic interface `],
			[/* inline code block */ 'i', `Predicate<T>`],
			[/* text */ 't', `
 is parameterized as `],
			[/* inline code block */ 'i', `Predicate<String>`],
			[/* text */ 't', `, the input must be a
 `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', `, even though the method to implement allows any `],
			[/* inline code block */ 'i', `Object`],
			[/* text */ 't', `.
 At linkage time, an additional `],
			[/* reference */ 'r', `java.lang.invoke.MethodType`],
			[/* text */ 't', ` parameter describes the
 "dynamic" method type; on invocation, the arguments and eventual result
 are checked against this `],
			[/* inline code block */ 'i', `MethodType`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This class provides two forms of linkage methods: a standard version
 (`],
			[/* reference */ 'r', `metafactory(MethodHandles.Lookup, String, MethodType, MethodType, MethodHandle, MethodType)`],
			[/* text */ 't', `)
 using an optimized protocol, and an alternate version
 `],
			[/* reference */ 'r', `altMetafactory(MethodHandles.Lookup, String, MethodType, Object...)`],
			[/* text */ 't', `).
 The alternate version is a generalization of the standard version, providing
 additional control over the behavior of the generated function objects via
 flags and additional arguments.  The alternate version adds the ability to
 manage the following attributes of function objects:

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `Multiple methods.`],
				[/* text */ 't', `  It is sometimes useful to implement multiple
     variations of the method signature, involving argument or return type
     adaptation.  This occurs when multiple distinct VM signatures for a method
     are logically considered to be the same method by the language.  The
     flag `],
				[/* inline code block */ 'i', `FLAG_BRIDGES`],
				[/* text */ 't', ` indicates that a list of additional
     `],
				[/* inline code block */ 'i', `MethodType`],
				[/* text */ 't', `s will be provided, each of which will be implemented
     by the resulting function object.  These methods will share the same
     name and instantiated type.`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Multiple interfaces.`],
				[/* text */ 't', `  If needed, more than one interface
     can be implemented by the function object.  (These additional interfaces
     are typically marker interfaces with no methods.)  The flag `],
				[/* inline code block */ 'i', `FLAG_MARKERS`],
				[/* text */ 't', `
     indicates that a list of additional interfaces will be provided, each of
     which should be implemented by the resulting function object.`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Serializability.`],
				[/* text */ 't', `  The generated function objects do not
     generally support serialization.  If desired, `],
				[/* inline code block */ 'i', `FLAG_SERIALIZABLE`],
				[/* text */ 't', `
     can be used to indicate that the function objects should be serializable.
     Serializable function objects will use, as their serialized form,
     instances of the class `],
				[/* inline code block */ 'i', `SerializedLambda`],
				[/* text */ 't', `, which requires additional
     assistance from the capturing class (the class described by the
     `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup`],
				[/* text */ 't', ` parameter `],
				[/* inline code block */ 'i', `caller`],
				[/* text */ 't', `); see
     `],
				[/* reference */ 'r', `java.lang.invoke.SerializedLambda`],
				[/* text */ 't', ` for details.`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Assume the linkage arguments are as follows:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* inline code block */ 'i', `factoryType`],
				[/* text */ 't', ` (describing the `],
				[/* inline code block */ 'i', `CallSite`],
				[/* text */ 't', ` signature) has
      K parameters of types (D1..Dk) and return type Rd;`]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `interfaceMethodType`],
				[/* text */ 't', ` (describing the implemented method type) has N
      parameters, of types (U1..Un) and return type Ru;`]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `implementation`],
				[/* text */ 't', ` (the `],
				[/* inline code block */ 'i', `MethodHandle`],
				[/* text */ 't', ` providing the
      implementation) has M parameters, of types (A1..Am) and return type Ra
      (if the method describes an instance method, the method type of this
      method handle already includes an extra first argument corresponding to
      the receiver);`]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `dynamicMethodType`],
				[/* text */ 't', ` (allowing restrictions on invocation)
      has N parameters, of types (T1..Tn) and return type Rt.`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Then the following linkage invariants must hold:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* inline code block */ 'i', `interfaceMethodType`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `dynamicMethodType`],
				[/* text */ 't', ` have the same
     arity N, and for i=1..N, Ti and Ui are the same type, or Ti and Ui are
     both reference types and Ti is a subtype of Ui`]
			]],
			[/* block */ 'b', `Either Rt and Ru are the same type, or both are reference types and
     Rt is a subtype of Ru`],
			[/* block */ 'b', `K + N = M`],
			[/* block */ 'b', `For i=1..K, Di = Ai`],
			[/* block */ 'b', `For i=1..N, Ti is adaptable to Aj, where j=i+k`],
			[/* block */ 'b', `The return type Rt is void, or the return type Ra is not void and is
     adaptable to Rt`]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Further, at capture time, if `],
			[/* inline code block */ 'i', `implementation`],
			[/* text */ 't', ` corresponds to an instance
 method, and there are any capture arguments (`],
			[/* inline code block */ 'i', `K > 0`],
			[/* text */ 't', `), then the first
 capture argument (corresponding to the receiver) must be non-null.

 `]
		]],
		[/* block */ 'b', `A type Q is considered adaptable to S as follows:
 `],
		[/* table */ 't', ''],
		[/* block */ 'b', '']
	],
	[/* fields */
		[/* field */ 'FLAG_SERIALIZABLE', [
			[/* field description */
				[/* text */ 't', `Flag for `],
				[/* reference */ 'r', `altMetafactory(java.lang.invoke.MethodHandles.Lookup, java.lang.String, java.lang.invoke.MethodType, java.lang.Object...)`],
				[/* text */ 't', ` indicating the lambda object
 must be serializable`]
			],
		]],
		[/* field */ 'FLAG_MARKERS', [
			[/* field description */
				[/* text */ 't', `Flag for `],
				[/* reference */ 'r', `altMetafactory(java.lang.invoke.MethodHandles.Lookup, java.lang.String, java.lang.invoke.MethodType, java.lang.Object...)`],
				[/* text */ 't', ` indicating the lambda object implements
 other interfaces besides `],
				[/* inline code block */ 'i', `Serializable`]
			],
		]],
		[/* field */ 'FLAG_BRIDGES', [
			[/* field description */
				[/* text */ 't', `Flag for alternate metafactories indicating the lambda object requires
 additional methods that invoke the `],
				[/* inline code block */ 'i', `implementation`]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'metafactory(java.lang.invoke.MethodHandles.Lookup,java.lang.String,java.lang.invoke.MethodType,java.lang.invoke.MethodType,java.lang.invoke.MethodHandle,java.lang.invoke.MethodType)', [
			[/* method description */
				[/* text */ 't', `Facilitates the creation of simple "function objects" that implement one
 or more interfaces by delegation to a provided `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandle`],
				[/* text */ 't', `,
 after appropriate type adaptation and partial evaluation of arguments.
 Typically used as a `],
				[/* text */ 't', `bootstrap method`],
				[/* text */ 't', ` for `],
				[/* inline code block */ 'i', `invokedynamic`],
				[/* text */ 't', `
 call sites, to support the `],
				[/* text */ 't', `lambda expression`],
				[/* text */ 't', ` and `],
				[/* text */ 't', `method
 reference expression`],
				[/* text */ 't', ` features of the Java Programming Language.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is the standard, streamlined metafactory; additional flexibility
 is provided by `],
					[/* reference */ 'r', `altMetafactory(MethodHandles.Lookup, String, MethodType, Object...)`],
					[/* text */ 't', `.
 A general description of the behavior of this method is provided
 `],
					[/* reference */ 'r', `java.lang.invoke.LambdaMetafactory`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `When the target of the `],
					[/* inline code block */ 'i', `CallSite`],
					[/* text */ 't', ` returned from this method is
 invoked, the resulting function objects are instances of a class which
 implements the interface named by the return type of `],
					[/* inline code block */ 'i', `factoryType`],
					[/* text */ 't', `,
 declares a method with the name given by `],
					[/* inline code block */ 'i', `interfaceMethodName`],
					[/* text */ 't', ` and the
 signature given by `],
					[/* inline code block */ 'i', `interfaceMethodType`],
					[/* text */ 't', `.  It may also override additional
 methods from `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'caller', [/* parameter description */
					[/* text */ 't', `Represents a lookup context with the accessibility
               privileges of the caller.  Specifically, the lookup context
               must have `],
					[/* external link */ 'a', `MethodHandles.Lookup.html#hasFullPrivilegeAccess()`, `full privilege access`],
					[/* text */ 't', `.
               When used with `],
					[/* inline code block */ 'i', `invokedynamic`],
					[/* text */ 't', `, this is stacked
               automatically by the VM.`]
				]],
				[/* parameter */ 'interfaceMethodName', [/* parameter description */
					[/* text */ 't', `The name of the method to implement.  When used with
                            `],
					[/* inline code block */ 'i', `invokedynamic`],
					[/* text */ 't', `, this is provided by the
                            `],
					[/* inline code block */ 'i', `NameAndType`],
					[/* text */ 't', ` of the `],
					[/* inline code block */ 'i', `InvokeDynamic`],
					[/* text */ 't', `
                            structure and is stacked automatically by the VM.`]
				]],
				[/* parameter */ 'factoryType', [/* parameter description */
					[/* text */ 't', `The expected signature of the `],
					[/* inline code block */ 'i', `CallSite`],
					[/* text */ 't', `.  The
                    parameter types represent the types of capture variables;
                    the return type is the interface to implement.   When
                    used with `],
					[/* inline code block */ 'i', `invokedynamic`],
					[/* text */ 't', `, this is provided by
                    the `],
					[/* inline code block */ 'i', `NameAndType`],
					[/* text */ 't', ` of the `],
					[/* inline code block */ 'i', `InvokeDynamic`],
					[/* text */ 't', `
                    structure and is stacked automatically by the VM.`]
				]],
				[/* parameter */ 'interfaceMethodType', [/* parameter description */
					[/* text */ 't', `Signature and return type of method to be
                            implemented by the function object.`]
				]],
				[/* parameter */ 'implementation', [/* parameter description */
					[/* text */ 't', `A direct method handle describing the implementation
                       method which should be called (with suitable adaptation
                       of argument types and return types, and with captured
                       arguments prepended to the invocation arguments) at
                       invocation time.`]
				]],
				[/* parameter */ 'dynamicMethodType', [/* parameter description */
					[/* text */ 't', `The signature and return type that should
                          be enforced dynamically at invocation time.
                          In simple use cases this is the same as
                          `],
					[/* inline code block */ 'i', `interfaceMethodType`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.invoke.LambdaConversionException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `caller`],
					[/* text */ 't', ` does not have full privilege
         access, or if `],
					[/* inline code block */ 'i', `interfaceMethodName`],
					[/* text */ 't', ` is not a valid JVM
         method name, or if the return type of `],
					[/* inline code block */ 'i', `factoryType`],
					[/* text */ 't', ` is not
         an interface, or if `],
					[/* inline code block */ 'i', `implementation`],
					[/* text */ 't', ` is not a direct method
         handle referencing a method or constructor, or if the linkage
         invariants are violated, as defined `],
					[/* reference */ 'r', `java.lang.invoke.LambdaMetafactory`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If any argument is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present, and it
         `],
					[/* external link */ 'a', `MethodHandles.Lookup.html#secmgr`, `refuses access`],
					[/* text */ 't', `
         from `],
					[/* inline code block */ 'i', `caller`],
					[/* text */ 't', ` to the package of `],
					[/* inline code block */ 'i', `implementation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a CallSite whose target can be used to perform capture, generating
         instances of the interface named by `],
				[/* inline code block */ 'i', `factoryType`]
			]
		]],
		[/* method */ 'altMetafactory(java.lang.invoke.MethodHandles.Lookup,java.lang.String,java.lang.invoke.MethodType,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Facilitates the creation of simple "function objects" that implement one
 or more interfaces by delegation to a provided `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandle`],
				[/* text */ 't', `,
 after appropriate type adaptation and partial evaluation of arguments.
 Typically used as a `],
				[/* text */ 't', `bootstrap method`],
				[/* text */ 't', ` for `],
				[/* inline code block */ 'i', `invokedynamic`],
				[/* text */ 't', `
 call sites, to support the `],
				[/* text */ 't', `lambda expression`],
				[/* text */ 't', ` and `],
				[/* text */ 't', `method
 reference expression`],
				[/* text */ 't', ` features of the Java Programming Language.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is the general, more flexible metafactory; a streamlined version
 is provided by `],
					[/* reference */ 'r', `metafactory(java.lang.invoke.MethodHandles.Lookup, String, MethodType, MethodType, MethodHandle, MethodType)`],
					[/* text */ 't', `.
 A general description of the behavior of this method is provided
 `],
					[/* reference */ 'r', `java.lang.invoke.LambdaMetafactory`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The argument list for this method includes three fixed parameters,
 corresponding to the parameters automatically stacked by the VM for the
 bootstrap method in an `],
					[/* inline code block */ 'i', `invokedynamic`],
					[/* text */ 't', ` invocation, and an `],
					[/* inline code block */ 'i', `Object[]`],
					[/* text */ 't', `
 parameter that contains additional parameters.  The declared argument
 list for this method is:

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `CallSite altMetafactory(MethodHandles.Lookup caller,
                          String interfaceMethodName,
                          MethodType factoryType,
                          Object... args)`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `but it behaves as if the argument list is as follows:

 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `CallSite altMetafactory(MethodHandles.Lookup caller,
                          String interfaceMethodName,
                          MethodType factoryType,
                          MethodType interfaceMethodType,
                          MethodHandle implementation,
                          MethodType dynamicMethodType,
                          int flags,
                          int altInterfaceCount,        // IF flags has MARKERS set
                          Class... altInterfaces,       // IF flags has MARKERS set
                          int altMethodCount,           // IF flags has BRIDGES set
                          MethodType... altMethods      // IF flags has BRIDGES set
                          )`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Arguments that appear in the argument list for
 `],
					[/* reference */ 'r', `metafactory(MethodHandles.Lookup, String, MethodType, MethodType, MethodHandle, MethodType)`],
					[/* text */ 't', `
 have the same specification as in that method.  The additional arguments
 are interpreted as follows:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `flags`],
						[/* text */ 't', ` indicates additional options; this is a bitwise
     OR of desired flags.  Defined flags are `],
						[/* text */ 't', `FLAG_BRIDGES`],
						[/* text */ 't', `,
     `],
						[/* text */ 't', `FLAG_MARKERS`],
						[/* text */ 't', `, and `],
						[/* text */ 't', `FLAG_SERIALIZABLE`],
						[/* text */ 't', `.`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `altInterfaceCount`],
						[/* text */ 't', ` is the number of additional interfaces
     the function object should implement, and is present if and only if the
     `],
						[/* inline code block */ 'i', `FLAG_MARKERS`],
						[/* text */ 't', ` flag is set.`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `altInterfaces`],
						[/* text */ 't', ` is a variable-length list of additional
     interfaces to implement, whose length equals `],
						[/* inline code block */ 'i', `altInterfaceCount`],
						[/* text */ 't', `,
     and is present if and only if the `],
						[/* inline code block */ 'i', `FLAG_MARKERS`],
						[/* text */ 't', ` flag is set.`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `altMethodCount`],
						[/* text */ 't', ` is the number of additional method signatures
     the function object should implement, and is present if and only if
     the `],
						[/* inline code block */ 'i', `FLAG_BRIDGES`],
						[/* text */ 't', ` flag is set.`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `altMethods`],
						[/* text */ 't', ` is a variable-length list of additional
     methods signatures to implement, whose length equals `],
						[/* inline code block */ 'i', `altMethodCount`],
						[/* text */ 't', `,
     and is present if and only if the `],
						[/* inline code block */ 'i', `FLAG_BRIDGES`],
						[/* text */ 't', ` flag is set.`]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Each class named by `],
					[/* inline code block */ 'i', `altInterfaces`],
					[/* text */ 't', ` is subject to the same
 restrictions as `],
					[/* inline code block */ 'i', `Rd`],
					[/* text */ 't', `, the return type of `],
					[/* inline code block */ 'i', `factoryType`],
					[/* text */ 't', `,
 as described `],
					[/* reference */ 'r', `java.lang.invoke.LambdaMetafactory`],
					[/* text */ 't', `.  Each `],
					[/* inline code block */ 'i', `MethodType`],
					[/* text */ 't', `
 named by `],
					[/* inline code block */ 'i', `altMethods`],
					[/* text */ 't', ` is subject to the same restrictions as
 `],
					[/* inline code block */ 'i', `interfaceMethodType`],
					[/* text */ 't', `, as described `],
					[/* reference */ 'r', `java.lang.invoke.LambdaMetafactory`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `When FLAG_SERIALIZABLE is set in `],
					[/* inline code block */ 'i', `flags`],
					[/* text */ 't', `, the function objects
 will implement `],
					[/* inline code block */ 'i', `Serializable`],
					[/* text */ 't', `, and will have a `],
					[/* inline code block */ 'i', `writeReplace`],
					[/* text */ 't', `
 method that returns an appropriate `],
					[/* reference */ 'r', `java.lang.invoke.SerializedLambda`],
					[/* text */ 't', `.  The
 `],
					[/* inline code block */ 'i', `caller`],
					[/* text */ 't', ` class must have an appropriate `],
					[/* inline code block */ 'i', `$deserializeLambda$`],
					[/* text */ 't', `
 method, as described in `],
					[/* reference */ 'r', `java.lang.invoke.SerializedLambda`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `When the target of the `],
					[/* inline code block */ 'i', `CallSite`],
					[/* text */ 't', ` returned from this method is
 invoked, the resulting function objects are instances of a class with
 the following properties:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The class implements the interface named by the return type
     of `],
						[/* inline code block */ 'i', `factoryType`],
						[/* text */ 't', ` and any interfaces named by `],
						[/* inline code block */ 'i', `altInterfaces`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The class declares methods with the name given by `],
						[/* inline code block */ 'i', `interfaceMethodName`],
						[/* text */ 't', `,
     and the signature given by `],
						[/* inline code block */ 'i', `interfaceMethodType`],
						[/* text */ 't', ` and additional signatures
     given by `],
						[/* inline code block */ 'i', `altMethods`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The class may override methods from `],
						[/* inline code block */ 'i', `Object`],
						[/* text */ 't', `, and may
     implement methods related to serialization.`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'caller', [/* parameter description */
					[/* text */ 't', `Represents a lookup context with the accessibility
               privileges of the caller.  Specifically, the lookup context
               must have `],
					[/* external link */ 'a', `MethodHandles.Lookup.html#hasFullPrivilegeAccess()`, `full privilege access`],
					[/* text */ 't', `.
               When used with `],
					[/* inline code block */ 'i', `invokedynamic`],
					[/* text */ 't', `, this is stacked
               automatically by the VM.`]
				]],
				[/* parameter */ 'interfaceMethodName', [/* parameter description */
					[/* text */ 't', `The name of the method to implement.  When used with
                            `],
					[/* inline code block */ 'i', `invokedynamic`],
					[/* text */ 't', `, this is provided by the
                            `],
					[/* inline code block */ 'i', `NameAndType`],
					[/* text */ 't', ` of the `],
					[/* inline code block */ 'i', `InvokeDynamic`],
					[/* text */ 't', `
                            structure and is stacked automatically by the VM.`]
				]],
				[/* parameter */ 'factoryType', [/* parameter description */
					[/* text */ 't', `The expected signature of the `],
					[/* inline code block */ 'i', `CallSite`],
					[/* text */ 't', `.  The
                    parameter types represent the types of capture variables;
                    the return type is the interface to implement.   When
                    used with `],
					[/* inline code block */ 'i', `invokedynamic`],
					[/* text */ 't', `, this is provided by
                    the `],
					[/* inline code block */ 'i', `NameAndType`],
					[/* text */ 't', ` of the `],
					[/* inline code block */ 'i', `InvokeDynamic`],
					[/* text */ 't', `
                    structure and is stacked automatically by the VM.`]
				]],
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `An array of `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', ` containing the required
              arguments `],
					[/* inline code block */ 'i', `interfaceMethodType`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `implementation`],
					[/* text */ 't', `,
              `],
					[/* inline code block */ 'i', `dynamicMethodType`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `flags`],
					[/* text */ 't', `, and any
              optional arguments, as described above`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.invoke.LambdaConversionException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `caller`],
					[/* text */ 't', ` does not have full privilege
         access, or if `],
					[/* inline code block */ 'i', `interfaceMethodName`],
					[/* text */ 't', ` is not a valid JVM
         method name, or if the return type of `],
					[/* inline code block */ 'i', `factoryType`],
					[/* text */ 't', ` is not
         an interface, or if any of `],
					[/* inline code block */ 'i', `altInterfaces`],
					[/* text */ 't', ` is not an
         interface, or if `],
					[/* inline code block */ 'i', `implementation`],
					[/* text */ 't', ` is not a direct method
         handle referencing a method or constructor, or if the linkage
         invariants are violated, as defined `],
					[/* reference */ 'r', `java.lang.invoke.LambdaMetafactory`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If any argument, or any component of `],
					[/* inline code block */ 'i', `args`],
					[/* text */ 't', `,
         is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the number or types of the components
         of `],
					[/* inline code block */ 'i', `args`],
					[/* text */ 't', ` do not follow the above rules, or if
         `],
					[/* inline code block */ 'i', `altInterfaceCount`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `altMethodCount`],
					[/* text */ 't', ` are negative
         integers.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present, and it
         `],
					[/* external link */ 'a', `MethodHandles.Lookup.html#secmgr`, `refuses access`],
					[/* text */ 't', `
         from `],
					[/* inline code block */ 'i', `caller`],
					[/* text */ 't', ` to the package of `],
					[/* inline code block */ 'i', `implementation`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a CallSite whose target can be used to perform capture, generating
         instances of the interface named by `],
				[/* inline code block */ 'i', `factoryType`]
			]
		]]
	],
]);
