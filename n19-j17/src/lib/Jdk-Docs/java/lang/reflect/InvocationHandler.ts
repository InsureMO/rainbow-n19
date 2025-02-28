import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.InvocationHandler', [
	[/* class description */
		[/* inline code block */ 'i', `InvocationHandler`],
		[/* text */ 't', ` is the interface implemented by
 the `],
		[/* text */ 't', `invocation handler`],
		[/* text */ 't', ` of a proxy instance.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Each proxy instance has an associated invocation handler.
 When a method is invoked on a proxy instance, the method
 invocation is encoded and dispatched to the `],
			[/* inline code block */ 'i', `invoke`],
			[/* text */ 't', `
 method of its invocation handler.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'invoke(java.lang.Object,java.lang.reflect.Method,java.lang.Object[])', [
			[/* method description */
				[/* text */ 't', `Processes a method invocation on a proxy instance and returns
 the result.  This method will be invoked on an invocation handler
 when a method is invoked on a proxy instance that it is
 associated with.`]
			],
			[/* parameters */
				[/* parameter */ 'proxy', [/* parameter description */
					[/* text */ 't', `the proxy instance that the method was invoked on`]
				]],
				[/* parameter */ 'method', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Method`],
					[/* text */ 't', ` instance corresponding to
 the interface method invoked on the proxy instance.  The declaring
 class of the `],
					[/* inline code block */ 'i', `Method`],
					[/* text */ 't', ` object will be the interface that
 the method was declared in, which may be a superinterface of the
 proxy interface that the proxy class inherits the method through.`]
				]],
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `an array of objects containing the values of the
 arguments passed in the method invocation on the proxy instance,
 or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if interface method takes no arguments.
 Arguments of primitive types are wrapped in instances of the
 appropriate primitive wrapper class, such as
 `],
					[/* inline code block */ 'i', `java.lang.Integer`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `java.lang.Boolean`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.Throwable', [/* throw description */
					[/* text */ 't', `the exception to throw from the method
 invocation on the proxy instance.  The exception's type must be
 assignable either to any of the exception types declared in the
 `],
					[/* inline code block */ 'i', `throws`],
					[/* text */ 't', ` clause of the interface method or to the
 unchecked exception types `],
					[/* inline code block */ 'i', `java.lang.RuntimeException`],
					[/* text */ 't', `
 or `],
					[/* inline code block */ 'i', `java.lang.Error`],
					[/* text */ 't', `.  If a checked exception is
 thrown by this method that is not assignable to any of the
 exception types declared in the `],
					[/* inline code block */ 'i', `throws`],
					[/* text */ 't', ` clause of
 the interface method, then an
 `],
					[/* reference */ 'r', `java.lang.reflect.UndeclaredThrowableException`],
					[/* text */ 't', ` containing the
 exception that was thrown by this method will be thrown by the
 method invocation on the proxy instance.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value to return from the method invocation on the
 proxy instance.  If the declared return type of the interface
 method is a primitive type, then the value returned by
 this method must be an instance of the corresponding primitive
 wrapper class; otherwise, it must be a type assignable to the
 declared return type.  If the value returned by this method is
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and the interface method's return type is
 primitive, then a `],
				[/* inline code block */ 'i', `NullPointerException`],
				[/* text */ 't', ` will be
 thrown by the method invocation on the proxy instance.  If the
 value returned by this method is otherwise not compatible with
 the interface method's declared return type as described above,
 a `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', ` will be thrown by the method
 invocation on the proxy instance.`]
			]
		]],
		[/* method */ 'invokeDefault(java.lang.Object,java.lang.reflect.Method,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Invokes the specified default method on the given `],
				[/* inline code block */ 'i', `proxy`],
				[/* text */ 't', ` instance with
 the given parameters.  The given `],
				[/* inline code block */ 'i', `method`],
				[/* text */ 't', ` must be a default method
 declared in a proxy interface of the `],
				[/* inline code block */ 'i', `proxy`],
				[/* text */ 't', `'s class or inherited
 from its superinterface directly or indirectly.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Invoking this method behaves as if `],
					[/* inline code block */ 'i', `invokespecial`],
					[/* text */ 't', ` instruction executed
 from the proxy class, targeting the default method in a proxy interface.
 This is equivalent to the invocation:
 `],
					[/* inline code block */ 'i', `X.super.m(A* a)`],
					[/* text */ 't', ` where `],
					[/* inline code block */ 'i', `X`],
					[/* text */ 't', ` is a proxy interface and the call to
 `],
					[/* inline code block */ 'i', `X.super::m(A*)`],
					[/* text */ 't', ` is resolved to the given `],
					[/* inline code block */ 'i', `method`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Examples: interface `],
					[/* inline code block */ 'i', `A`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `B`],
					[/* text */ 't', ` both declare a default
 implementation of method `],
					[/* inline code block */ 'i', `m`],
					[/* text */ 't', `. Interface `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', ` extends `],
					[/* inline code block */ 'i', `A`],
					[/* text */ 't', `
 and inherits the default method `],
					[/* inline code block */ 'i', `m`],
					[/* text */ 't', ` from its superinterface `],
					[/* inline code block */ 'i', `A`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `interface A {
     default T m(A a) { return t1; }
 }
 interface B {
     default T m(A a) { return t2; }
 }
 interface C extends A {}`]
					]]
				]],
				[/* text */ 't', `

 The following creates a proxy instance that implements `],
				[/* inline code block */ 'i', `A`],
				[/* text */ 't', `
 and invokes the default method `],
				[/* inline code block */ 'i', `A::m`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `Object proxy = Proxy.newProxyInstance(loader, new Class<?>[] { A.class },
         (o, m, params) -> {
             if (m.isDefault()) {
                 // if it's a default method, invoke it
                 return InvocationHandler.invokeDefault(o, m, params);
             }
         });`]
					]]
				]],
				[/* text */ 't', `

 If a proxy instance implements both `],
				[/* inline code block */ 'i', `A`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `B`],
				[/* text */ 't', `, both
 of which provides the default implementation of method `],
				[/* inline code block */ 'i', `m`],
				[/* text */ 't', `,
 the invocation handler can dispatch the method invocation to
 `],
				[/* inline code block */ 'i', `A::m`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `B::m`],
				[/* text */ 't', ` via the `],
				[/* inline code block */ 'i', `invokeDefault`],
				[/* text */ 't', ` method.
 For example, the following code delegates the method invocation
 to `],
				[/* inline code block */ 'i', `B::m`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `Object proxy = Proxy.newProxyInstance(loader, new Class<?>[] { A.class, B.class },
         (o, m, params) -> {
             if (m.getName().equals("m")) {
                 // invoke B::m instead of A::m
                 Method bMethod = B.class.getMethod(m.getName(), m.getParameterTypes());
                 return InvocationHandler.invokeDefault(o, bMethod, params);
             }
         });`]
					]]
				]],
				[/* text */ 't', `

 If a proxy instance implements `],
				[/* inline code block */ 'i', `C`],
				[/* text */ 't', ` that inherits the default
 method `],
				[/* inline code block */ 'i', `m`],
				[/* text */ 't', ` from its superinterface `],
				[/* inline code block */ 'i', `A`],
				[/* text */ 't', `, then
 the interface method invocation on `],
				[/* inline code block */ 'i', `"m"`],
				[/* text */ 't', ` is dispatched to
 the invocation handler's `],
				[/* reference */ 'r', `invoke`],
				[/* text */ 't', `
 method with the `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', ` object argument representing the
 default method `],
				[/* inline code block */ 'i', `A::m`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `Object proxy = Proxy.newProxyInstance(loader, new Class<?>[] { C.class },
        (o, m, params) -> {
             if (m.isDefault()) {
                 // behaves as if calling C.super.m(params)
                 return InvocationHandler.invokeDefault(o, m, params);
             }
        });`]
					]]
				]],
				[/* text */ 't', `

 The invocation of method `],
				[/* inline code block */ 'i', `"m"`],
				[/* text */ 't', ` on this `],
				[/* inline code block */ 'i', `proxy`],
				[/* text */ 't', ` will behave
 as if `],
				[/* inline code block */ 'i', `C.super::m`],
				[/* text */ 't', ` is called and that is resolved to invoking
 `],
				[/* inline code block */ 'i', `A::m`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Adding a default method, or changing a method from abstract to default
 may cause an exception if an existing code attempts to call `],
					[/* inline code block */ 'i', `invokeDefault`],
					[/* text */ 't', `
 to invoke a default method.

 For example, if `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', ` is modified to implement a default method
 `],
					[/* inline code block */ 'i', `m`],
					[/* text */ 't', `:

 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `interface C extends A {
     default T m(A a) { return t3; }
 }`]
					]]
				]],
				[/* text */ 't', `

 The code above that creates proxy instance `],
				[/* inline code block */ 'i', `proxy`],
				[/* text */ 't', ` with
 the modified `],
				[/* inline code block */ 'i', `C`],
				[/* text */ 't', ` will run with no exception and it will result in
 calling `],
				[/* inline code block */ 'i', `C::m`],
				[/* text */ 't', ` instead of `],
				[/* inline code block */ 'i', `A::m`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The following is another example that creates a proxy instance of `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', `
 and the invocation handler calls the `],
					[/* inline code block */ 'i', `invokeDefault`],
					[/* text */ 't', ` method
 to invoke `],
					[/* inline code block */ 'i', `A::m`],
					[/* text */ 't', `:

 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `C c = (C) Proxy.newProxyInstance(loader, new Class<?>[] { C.class },
         (o, m, params) -> {
             if (m.getName().equals("m")) {
                 // IllegalArgumentException thrown as {@code A::m} is not a method
                 // inherited from its proxy interface C
                 Method aMethod = A.class.getMethod(m.getName(), m.getParameterTypes());
                 return InvocationHandler.invokeDefault(o, aMethod params);
             }
         });
 c.m(...);`]
					]]
				]],
				[/* text */ 't', `

 The above code runs successfully with the old version of `],
				[/* inline code block */ 'i', `C`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `A::m`],
				[/* text */ 't', ` is invoked.  When running with the new version of `],
				[/* inline code block */ 'i', `C`],
				[/* text */ 't', `,
 the above code will fail with `],
				[/* inline code block */ 'i', `IllegalArgumentException`],
				[/* text */ 't', ` because
 `],
				[/* inline code block */ 'i', `C`],
				[/* text */ 't', ` overrides the implementation of the same method and
 `],
				[/* inline code block */ 'i', `A::m`],
				[/* text */ 't', ` is not accessible by a proxy instance.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'proxy', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Proxy`],
					[/* text */ 't', ` instance on which the default method to be invoked`]
				]],
				[/* parameter */ 'method', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Method`],
					[/* text */ 't', ` instance corresponding to a default method
                declared in a proxy interface of the proxy class or inherited
                from its superinterface directly or indirectly`]
				]],
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the parameters used for the method invocation; can be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `
                if the number of formal parameters required by the method is zero.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if any of the following conditions is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `:
         `],
					[/* list */ 'l', [
						[/* block */ 'b', [
							[/* inline code block */ 'i', `proxy`],
							[/* text */ 't', ` is not `],
							[/* external link */ 'a', `Proxy.html#isProxyClass(java.lang.Class)`, `a proxy instance`],
							[/* text */ 't', `; or`]
						]],
						[/* block */ 'b', [
							[/* text */ 't', `the given `],
							[/* inline code block */ 'i', `method`],
							[/* text */ 't', ` is not a default method declared
             in a proxy interface of the proxy class and not inherited from
             any of its superinterfaces; or`]
						]],
						[/* block */ 'b', [
							[/* text */ 't', `the given `],
							[/* inline code block */ 'i', `method`],
							[/* text */ 't', ` is overridden directly or indirectly by
             the proxy interfaces and the method reference to the named
             method never resolves to the given `],
							[/* inline code block */ 'i', `method`],
							[/* text */ 't', `; or`]
						]],
						[/* block */ 'b', [
							[/* text */ 't', `the length of the given `],
							[/* inline code block */ 'i', `args`],
							[/* text */ 't', ` array does not match the
             number of parameters of the method to be invoked; or`]
						]],
						[/* block */ 'b', [
							[/* text */ 't', `any of the `],
							[/* inline code block */ 'i', `args`],
							[/* text */ 't', ` elements fails the unboxing
             conversion if the corresponding method parameter type is
             a primitive type; or if, after possible unboxing, any of the
             `],
							[/* inline code block */ 'i', `args`],
							[/* text */ 't', ` elements cannot be assigned to the corresponding
             method parameter type.`]
						]]
					]]
				]],
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if the declaring class of the specified
         default method is inaccessible to the caller class`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `proxy`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `method`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.Throwable', [/* throw description */
					[/* text */ 't', `anything thrown by the default method`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value returned from the method invocation`]
			]
		]]
	],
]);
