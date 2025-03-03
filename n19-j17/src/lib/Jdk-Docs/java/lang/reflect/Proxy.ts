import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.Proxy', [
	[/* class description */
		[/* inline code block */ 'i', `Proxy`],
		[/* text */ 't', ` provides static methods for creating objects that act like instances
 of interfaces but allow for customized method invocation.
 To create a proxy instance for some interface `],
		[/* inline code block */ 'i', `Foo`],
		[/* text */ 't', `:
 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `InvocationHandler handler = new MyInvocationHandler(...);
     Foo f = (Foo) Proxy.newProxyInstance(Foo.class.getClassLoader(),
                                          new Class<?>[] { Foo.class },
                                          handler);`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 A `],
			[/* text */ 't', `proxy class`],
			[/* text */ 't', ` is a class created at runtime that implements a specified
 list of interfaces, known as `],
			[/* text */ 't', `proxy interfaces`],
			[/* text */ 't', `. A `],
			[/* text */ 't', `proxy instance`],
			[/* text */ 't', `
 is an instance of a proxy class.

 Each proxy instance has an associated `],
			[/* text */ 't', `invocation handler`],
			[/* text */ 't', `
 object, which implements the interface `],
			[/* reference */ 'r', `java.lang.reflect.InvocationHandler`],
			[/* text */ 't', `.
 A method invocation on a proxy instance through one of its proxy
 interfaces will be dispatched to the `],
			[/* reference */ 'r', `.InvocationHandler#invoke(java.lang.Object,java.lang.reflect.Method,java.lang.Object[])`],
			[/* text */ 't', ` method of the instance's invocation handler, passing the proxy
 instance, a `],
			[/* inline code block */ 'i', `java.lang.reflect.Method`],
			[/* text */ 't', ` object identifying
 the method that was invoked, and an array of type `],
			[/* inline code block */ 'i', `Object`],
			[/* text */ 't', `
 containing the arguments.  The invocation handler processes the
 encoded method invocation as appropriate and the result that it
 returns will be returned as the result of the method invocation on
 the proxy instance.

 `]
		]],
		[/* block */ 'b', `A proxy class has the following properties:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `The unqualified name of a proxy class is unspecified.  The space
 of class names that begin with the string `],
				[/* inline code block */ 'i', `"$Proxy"`],
				[/* text */ 't', `
 should be, however, reserved for proxy classes.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `The package and module in which a proxy class is defined is specified
 `],
				[/* text */ 't', `below`],
				[/* text */ 't', `.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `A proxy class is `],
				[/* text */ 't', `final and non-abstract`],
				[/* text */ 't', `.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `A proxy class extends `],
				[/* inline code block */ 'i', `java.lang.reflect.Proxy`],
				[/* text */ 't', `.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `A proxy class implements exactly the interfaces specified at its
 creation, in the same order. Invoking `],
				[/* reference */ 'r', `java.Class#getInterfaces()`],
				[/* text */ 't', `
 on its `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object will return an array containing the same
 list of interfaces (in the order specified at its creation), invoking
 `],
				[/* reference */ 'r', `java.Class#getMethods()`],
				[/* text */ 't', ` on its `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object will return
 an array of `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', ` objects that include all of the
 methods in those interfaces, and invoking `],
				[/* inline code block */ 'i', `getMethod`],
				[/* text */ 't', ` will
 find methods in the proxy interfaces as would be expected.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `The `],
				[/* reference */ 'r', `java.security.ProtectionDomain`],
				[/* text */ 't', ` of a proxy class
 is the same as that of system classes loaded by the bootstrap class
 loader, such as `],
				[/* inline code block */ 'i', `java.lang.Object`],
				[/* text */ 't', `, because the code for a
 proxy class is generated by trusted system code.  This protection
 domain will typically be granted `],
				[/* inline code block */ 'i', `java.security.AllPermission`],
				[/* text */ 't', `.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `The `],
				[/* reference */ 'r', `#isProxyClass(java.lang.Class)`, `Proxy.isProxyClass`],
				[/* text */ 't', ` method can be used
 to determine if a given class is a proxy class.
 `]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `A proxy instance has the following properties:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `Given a proxy instance `],
				[/* inline code block */ 'i', `proxy`],
				[/* text */ 't', ` and one of the
 interfaces, `],
				[/* inline code block */ 'i', `Foo`],
				[/* text */ 't', `, implemented by its proxy class, the
 following expression will return true:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `proxy instanceof Foo`]
				]],
				[/* text */ 't', `
 and the following cast operation will succeed (rather than throwing
 a `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', `):
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(Foo) proxy`]
				]]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Each proxy instance has an associated invocation handler, the one
 that was passed to its constructor.  The static
 `],
				[/* reference */ 'r', `#getInvocationHandler(java.lang.Object)`, `Proxy.getInvocationHandler`],
				[/* text */ 't', ` method
 will return the invocation handler associated with the proxy instance
 passed as its argument.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `An interface method invocation on a proxy instance will be
 encoded and dispatched to the invocation handler's `],
				[/* reference */ 'r', `.InvocationHandler#invoke(java.lang.Object,java.lang.reflect.Method,java.lang.Object[])`],
				[/* text */ 't', ` method as described in the
 documentation for that method.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `A proxy interface may define a default method or inherit
 a default method from its superinterface directly or indirectly.
 An invocation handler can invoke a default method of a proxy interface
 by calling `],
				[/* reference */ 'r', `.InvocationHandler#invokeDefault(java.lang.Object,java.lang.reflect.Method,java.lang.Object...)`],
				[/* text */ 't', `.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `An invocation of the `],
				[/* inline code block */ 'i', `hashCode`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `equals`],
				[/* text */ 't', `, or `],
				[/* inline code block */ 'i', `toString`],
				[/* text */ 't', ` methods declared in
 `],
				[/* inline code block */ 'i', `java.lang.Object`],
				[/* text */ 't', ` on a proxy instance will be encoded and
 dispatched to the invocation handler's `],
				[/* inline code block */ 'i', `invoke`],
				[/* text */ 't', ` method in
 the same manner as interface method invocations are encoded and
 dispatched, as described above.  The declaring class of the
 `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', ` object passed to `],
				[/* inline code block */ 'i', `invoke`],
				[/* text */ 't', ` will be
 `],
				[/* inline code block */ 'i', `java.lang.Object`],
				[/* text */ 't', `.  Other public methods of a proxy
 instance inherited from `],
				[/* inline code block */ 'i', `java.lang.Object`],
				[/* text */ 't', ` are not
 overridden by a proxy class, so invocations of those methods behave
 like they do for instances of `],
				[/* inline code block */ 'i', `java.lang.Object`],
				[/* text */ 't', `.
 `]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Package and Module Membership of Proxy Class`]
		]],
		[/* text */ 't', `

 The package and module to which a proxy class belongs are chosen such that
 the accessibility of the proxy class is in line with the accessibility of
 the proxy interfaces. Specifically, the package and the module membership
 of a proxy class defined via the
 `],
		[/* reference */ 'r', `#getProxyClass(java.lang.ClassLoader,java.lang.Class...)`, `getProxyClass(ClassLoader, Class[])`],
		[/* text */ 't', ` or
 `],
		[/* reference */ 'r', `#newProxyInstance(java.lang.ClassLoader,java.lang.Class%5B%5D,java.lang.reflect.InvocationHandler)`, `newProxyInstance(ClassLoader, Class[], InvocationHandler)`],
		[/* text */ 't', `
 methods is specified as follows:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `If all the proxy interfaces are in `],
				[/* text */ 't', `exported`],
				[/* text */ 't', ` or `],
				[/* text */ 't', `open`],
				[/* text */ 't', `
     packages:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `if all the proxy interfaces are `],
						[/* text */ 't', `public`],
						[/* text */ 't', `, then the proxy class is
     `],
						[/* text */ 't', `public`],
						[/* text */ 't', ` in an unconditionally exported but non-open package.
     The name of the package and the module are unspecified.`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `if at least one of all the proxy interfaces is `],
						[/* text */ 't', `non-public`],
						[/* text */ 't', `, then
     the proxy class is `],
						[/* text */ 't', `non-public`],
						[/* text */ 't', ` in the package and module of the
     non-public interfaces. All the non-public interfaces must be in the same
     package and module; otherwise, proxying them is
     `],
						[/* text */ 't', `not possible`],
						[/* text */ 't', `.`]
					]]
				]]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `If at least one proxy interface is in a package that is
     `],
				[/* text */ 't', `non-exported`],
				[/* text */ 't', ` and `],
				[/* text */ 't', `non-open`],
				[/* text */ 't', `:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `if all the proxy interfaces are `],
						[/* text */ 't', `public`],
						[/* text */ 't', `, then the proxy class is
     `],
						[/* text */ 't', `public`],
						[/* text */ 't', ` in a `],
						[/* text */ 't', `non-exported`],
						[/* text */ 't', `, `],
						[/* text */ 't', `non-open`],
						[/* text */ 't', ` package of
     `],
						[/* text */ 't', `dynamic module.`],
						[/* text */ 't', `
     The names of the package and the module are unspecified.`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `if at least one of all the proxy interfaces is `],
						[/* text */ 't', `non-public`],
						[/* text */ 't', `, then
     the proxy class is `],
						[/* text */ 't', `non-public`],
						[/* text */ 't', ` in the package and module of the
     non-public interfaces. All the non-public interfaces must be in the same
     package and module; otherwise, proxying them is
     `],
						[/* text */ 't', `not possible`],
						[/* text */ 't', `.`]
					]]
				]]
			]]
		]],
		[/* block */ 'b', `
 Note that if proxy interfaces with a mix of accessibilities -- for example,
 an exported public interface and a non-exported non-public interface -- are
 proxied by the same instance, then the proxy class's accessibility is
 governed by the least accessible proxy interface.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Note that it is possible for arbitrary code to obtain access to a proxy class
 in an open package with `],
			[/* reference */ 'r', `.AccessibleObject#setAccessible(java.lang.reflect.AccessibleObject[],boolean)`],
			[/* text */ 't', `,
 whereas a proxy class in a non-open package is never accessible to
 code outside the module of the proxy class.

 `]
		]],
		[/* block */ 'b', `
 Throughout this specification, a "non-exported package" refers to a package
 that is not exported to all modules, and a "non-open package" refers to
 a package that is not open to all modules.  Specifically, these terms refer to
 a package that either is not exported/open by its containing module or is
 exported/open in a qualified fashion by its containing module.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Dynamic Modules`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 A dynamic module is a named module generated at runtime. A proxy class
 defined in a dynamic module is encapsulated and not accessible to any module.
 Calling `],
			[/* reference */ 'r', `.Constructor#newInstance(java.lang.Object...)`],
			[/* text */ 't', ` on a proxy class in
 a dynamic module will throw `],
			[/* inline code block */ 'i', `IllegalAccessException`],
			[/* text */ 't', `;
 `],
			[/* inline code block */ 'i', `Proxy.newProxyInstance`],
			[/* text */ 't', ` method should be used instead.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 A dynamic module can read the modules of all of the superinterfaces of a proxy
 class and the modules of the classes and interfaces referenced by
 all public method signatures of a proxy class.  If a superinterface or
 a referenced class or interface, say `],
			[/* inline code block */ 'i', `T`],
			[/* text */ 't', `, is in a non-exported package,
 the `],
			[/* reference */ 'r', `java.lang.Module`],
			[/* text */ 't', ` of `],
			[/* inline code block */ 'i', `T`],
			[/* text */ 't', ` is updated to export the
 package of `],
			[/* inline code block */ 'i', `T`],
			[/* text */ 't', ` to the dynamic module.

 `]
		]],
		[/* block */ 'b', `Methods Duplicated in Multiple Proxy Interfaces`],
		[/* block */ 'b', [
			[/* text */ 't', `When two or more proxy interfaces contain a method with
 the same name and parameter signature, the order of the proxy class's
 interfaces becomes significant.  When such a `],
			[/* text */ 't', `duplicate method`],
			[/* text */ 't', `
 is invoked on a proxy instance, the `],
			[/* inline code block */ 'i', `Method`],
			[/* text */ 't', ` object passed
 to the invocation handler will not necessarily be the one whose
 declaring class is assignable from the reference type of the interface
 that the proxy's method was invoked through.  This limitation exists
 because the corresponding method implementation in the generated proxy
 class cannot determine which interface it was invoked through.
 Therefore, when a duplicate method is invoked on a proxy instance,
 the `],
			[/* inline code block */ 'i', `Method`],
			[/* text */ 't', ` object for the method in the foremost interface
 that contains the method (either directly or inherited through a
 superinterface) in the proxy class's list of interfaces is passed to
 the invocation handler's `],
			[/* inline code block */ 'i', `invoke`],
			[/* text */ 't', ` method, regardless of the
 reference type through which the method invocation occurred.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `If a proxy interface contains a method with the same name and
 parameter signature as the `],
			[/* inline code block */ 'i', `hashCode`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', `,
 or `],
			[/* inline code block */ 'i', `toString`],
			[/* text */ 't', ` methods of `],
			[/* inline code block */ 'i', `java.lang.Object`],
			[/* text */ 't', `,
 when such a method is invoked on a proxy instance, the
 `],
			[/* inline code block */ 'i', `Method`],
			[/* text */ 't', ` object passed to the invocation handler will have
 `],
			[/* inline code block */ 'i', `java.lang.Object`],
			[/* text */ 't', ` as its declaring class.  In other words,
 the public, non-final methods of `],
			[/* inline code block */ 'i', `java.lang.Object`],
			[/* text */ 't', `
 logically precede all of the proxy interfaces for the determination of
 which `],
			[/* inline code block */ 'i', `Method`],
			[/* text */ 't', ` object to pass to the invocation handler.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Note also that when a duplicate method is dispatched to an
 invocation handler, the `],
			[/* inline code block */ 'i', `invoke`],
			[/* text */ 't', ` method may only throw
 checked exception types that are assignable to one of the exception
 types in the `],
			[/* inline code block */ 'i', `throws`],
			[/* text */ 't', ` clause of the method in `],
			[/* text */ 't', `all`],
			[/* text */ 't', ` of
 the proxy interfaces that it can be invoked through.  If the
 `],
			[/* inline code block */ 'i', `invoke`],
			[/* text */ 't', ` method throws a checked exception that is not
 assignable to any of the exception types declared by the method in one
 of the proxy interfaces that it can be invoked through, then an
 unchecked `],
			[/* inline code block */ 'i', `UndeclaredThrowableException`],
			[/* text */ 't', ` will be thrown by
 the invocation on the proxy instance.  This restriction means that not
 all of the exception types returned by invoking
 `],
			[/* inline code block */ 'i', `getExceptionTypes`],
			[/* text */ 't', ` on the `],
			[/* inline code block */ 'i', `Method`],
			[/* text */ 't', ` object
 passed to the `],
			[/* inline code block */ 'i', `invoke`],
			[/* text */ 't', ` method can necessarily be thrown
 successfully by the `],
			[/* inline code block */ 'i', `invoke`],
			[/* text */ 't', ` method.`]
		]]
	],
	[/* fields */
		[/* field */ 'h', [
			[/* field description */
				[/* text */ 't', `the invocation handler for this proxy instance.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.lang.reflect.InvocationHandler)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `Proxy`],
				[/* text */ 't', ` instance from a subclass
 (typically, a dynamic proxy class) with the specified value
 for its invocation handler.`]
			],
			[/* parameters */
				[/* parameter */ 'h', [/* parameter description */
					[/* text */ 't', `the invocation handler for this proxy instance`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given invocation handler, `],
					[/* inline code block */ 'i', `h`],
					[/* text */ 't', `,
         is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'isProxyClass(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns true if the given class is a proxy class.`]
			],
			[/* parameters */
				[/* parameter */ 'cl', [/* parameter description */
					[/* text */ 't', `the class to test`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `cl`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the class is a proxy class and
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'newProxyInstance(java.lang.ClassLoader,java.lang.Class[],java.lang.reflect.InvocationHandler)', [
			[/* method description */
				[/* text */ 't', `Returns a proxy instance for the specified interfaces
 that dispatches method invocations to the specified invocation
 handler.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `IllegalArgumentException will be thrown if any of the following restrictions is violated:`]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `All of `],
						[/* inline code block */ 'i', `Class`],
						[/* text */ 't', ` objects in the given `],
						[/* inline code block */ 'i', `interfaces`],
						[/* text */ 't', ` array
 must represent `],
						[/* reference */ 'r', `java.Class#isHidden()`],
						[/* text */ 't', ` and
 `],
						[/* reference */ 'r', `java.Class#isSealed()`],
						[/* text */ 't', ` interfaces,
 not classes or primitive types.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `No two elements in the `],
						[/* inline code block */ 'i', `interfaces`],
						[/* text */ 't', ` array may
 refer to identical `],
						[/* inline code block */ 'i', `Class`],
						[/* text */ 't', ` objects.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `All of the interface types must be visible by name through the
 specified class loader. In other words, for class loader
 `],
						[/* inline code block */ 'i', `cl`],
						[/* text */ 't', ` and every interface `],
						[/* inline code block */ 'i', `i`],
						[/* text */ 't', `, the following
 expression must be true:`],
						[/* block */ 'b', [
							[/* inline code block */ 'i', `Class.forName(i.getName(), false, cl) == i`]
						]]
					]],
					[/* block */ 'b', `All of the types referenced by all
 public method signatures of the specified interfaces
 and those inherited by their superinterfaces
 must be visible by name through the specified class loader.

 `],
					[/* block */ 'b', `All non-public interfaces must be in the same package
 and module, defined by the specified class loader and
 the module of the non-public interfaces can access all of
 the interface types; otherwise, it would not be possible for
 the proxy class to implement all of the interfaces,
 regardless of what package it is defined in.

 `],
					[/* block */ 'b', [
						[/* text */ 't', `For any set of member methods of the specified interfaces
 that have the same signature:
 `],
						[/* list */ 'l', [
							[/* block */ 'b', `If the return type of any of the methods is a primitive
 type or void, then all of the methods must have that same
 return type.
 `],
							[/* block */ 'b', `Otherwise, one of the methods must have a return type that
 is assignable to all of the return types of the rest of the
 methods.
 `]
						]]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The resulting proxy class must not exceed any limits imposed
 on classes by the virtual machine.  For example, the VM may limit
 the number of interfaces that a class may implement to 65535; in
 that case, the size of the `],
						[/* inline code block */ 'i', `interfaces`],
						[/* text */ 't', ` array must not
 exceed 65535.
 `]
					]],
					[/* block */ 'b', '']
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Note that the order of the specified proxy interfaces is
 significant: two requests for a proxy class with the same combination
 of interfaces but in a different order will result in two distinct
 proxy classes.`]
			],
			[/* parameters */
				[/* parameter */ 'loader', [/* parameter description */
					[/* text */ 't', `the class loader to define the proxy class`]
				]],
				[/* parameter */ 'interfaces', [/* parameter description */
					[/* text */ 't', `the list of interfaces for the proxy class
          to implement`]
				]],
				[/* parameter */ 'h', [/* parameter description */
					[/* text */ 't', `the invocation handler to dispatch method invocations to`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if any of the `],
					[/* text */ 't', `restrictions`],
					[/* text */ 't', ` on the parameters are violated`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present
          and any of the following conditions is met:
          `],
					[/* list */ 'l', [
						[/* block */ 'b', [
							[/* text */ 't', ` the given `],
							[/* inline code block */ 'i', `loader`],
							[/* text */ 't', ` is `],
							[/* inline code block */ 'i', `null`],
							[/* text */ 't', ` and
               the caller's class loader is not `],
							[/* inline code block */ 'i', `null`],
							[/* text */ 't', ` and the
               invocation of `],
							[/* reference */ 'r', `java.SecurityManager#checkPermission(java.security.Permission)`],
							[/* text */ 't', ` with
               `],
							[/* inline code block */ 'i', `RuntimePermission("getClassLoader")`],
							[/* text */ 't', ` permission
               denies access;`]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` for each proxy interface, `],
							[/* inline code block */ 'i', `intf`],
							[/* text */ 't', `,
               the caller's class loader is not the same as or an
               ancestor of the class loader for `],
							[/* inline code block */ 'i', `intf`],
							[/* text */ 't', ` and
               invocation of `],
							[/* reference */ 'r', `java.SecurityManager#checkPackageAccess(java.lang.String)`],
							[/* text */ 't', ` denies access to `],
							[/* inline code block */ 'i', `intf`],
							[/* text */ 't', `;`]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` any of the given proxy interfaces is non-public and the
               caller class is not in the same `],
							[/* reference */ 'r', `java.lang.Package`],
							[/* text */ 't', `
               as the non-public interface and the invocation of
               `],
							[/* reference */ 'r', `java.SecurityManager#checkPermission(java.security.Permission)`],
							[/* text */ 't', ` with
               `],
							[/* inline code block */ 'i', `ReflectPermission("newProxyInPackage.{package name}")`],
							[/* text */ 't', `
               permission denies access.`]
						]]
					]]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `interfaces`],
					[/* text */ 't', ` array
          argument or any of its elements are `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, or
          if the invocation handler, `],
					[/* inline code block */ 'i', `h`],
					[/* text */ 't', `, is
          `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a proxy instance with the specified invocation handler of a
          proxy class that is defined by the specified class loader
          and that implements the specified interfaces`]
			]
		]],
		[/* method */ 'getInvocationHandler(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the invocation handler for the specified proxy instance.`]
			],
			[/* parameters */
				[/* parameter */ 'proxy', [/* parameter description */
					[/* text */ 't', `the proxy instance to return the invocation handler for`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the argument is not a
          proxy instance`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present
          and the caller's class loader is not the same as or an
          ancestor of the class loader for the invocation handler
          and invocation of `],
					[/* reference */ 'r', `java.SecurityManager#checkPackageAccess(java.lang.String)`],
					[/* text */ 't', ` denies access to the invocation
          handler's class.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the invocation handler for the proxy instance`]
			]
		]],
		[/* method */ 'getProxyClass(java.lang.ClassLoader,java.lang.Class...)', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `java.lang.Class`],
				[/* text */ 't', ` object for a proxy class
 given a class loader and an array of interfaces.  The proxy class
 will be defined by the specified class loader and will implement
 all of the supplied interfaces.  If any of the given interfaces
 is non-public, the proxy class will be non-public. If a proxy class
 for the same permutation of interfaces has already been defined by the
 class loader, then the existing proxy class will be returned; otherwise,
 a proxy class for those interfaces will be generated dynamically
 and defined by the class loader.`]
			],
			[/* parameters */
				[/* parameter */ 'loader', [/* parameter description */
					[/* text */ 't', `the class loader to define the proxy class`]
				]],
				[/* parameter */ 'interfaces', [/* parameter description */
					[/* text */ 't', `the list of interfaces for the proxy class
          to implement`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if any of the `],
					[/* text */ 't', `restrictions`],
					[/* text */ 't', ` on the parameters are violated`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present
          and any of the following conditions is met:
          `],
					[/* list */ 'l', [
						[/* block */ 'b', [
							[/* text */ 't', ` the given `],
							[/* inline code block */ 'i', `loader`],
							[/* text */ 't', ` is `],
							[/* inline code block */ 'i', `null`],
							[/* text */ 't', ` and
             the caller's class loader is not `],
							[/* inline code block */ 'i', `null`],
							[/* text */ 't', ` and the
             invocation of `],
							[/* reference */ 'r', `java.SecurityManager#checkPermission(java.security.Permission)`],
							[/* text */ 't', ` with
             `],
							[/* inline code block */ 'i', `RuntimePermission("getClassLoader")`],
							[/* text */ 't', ` permission
             denies access.`]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` for each proxy interface, `],
							[/* inline code block */ 'i', `intf`],
							[/* text */ 't', `,
             the caller's class loader is not the same as or an
             ancestor of the class loader for `],
							[/* inline code block */ 'i', `intf`],
							[/* text */ 't', ` and
             invocation of `],
							[/* reference */ 'r', `java.SecurityManager#checkPackageAccess(java.lang.String)`],
							[/* text */ 't', ` denies access to `],
							[/* inline code block */ 'i', `intf`],
							[/* text */ 't', `.`]
						]]
					]]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `interfaces`],
					[/* text */ 't', ` array
          argument or any of its elements are `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a proxy class that is defined in the specified class loader
          and that implements the specified interfaces`]
			]
		]]
	],
]);
