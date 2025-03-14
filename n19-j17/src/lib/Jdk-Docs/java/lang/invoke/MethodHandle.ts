import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.MethodHandle', [
	[/* class description */
		[/* text */ 't', `A method handle is a typed, directly executable reference to an underlying method,
 constructor, field, or similar low-level operation, with optional
 transformations of arguments or return values.
 These transformations are quite general, and include such patterns as
 `],
		[/* reference */ 'r', `#asType(java.lang.invoke.MethodType)`, `conversion`],
		[/* text */ 't', `,
 `],
		[/* reference */ 'r', `#bindTo(java.lang.Object)`, `insertion`],
		[/* text */ 't', `,
 `],
		[/* reference */ 'r', `java.lang.invoke.MethodHandles#dropArguments(java.lang.invoke.MethodHandle,int,java.util.List)`, `deletion`],
		[/* text */ 't', `,
 and `],
		[/* reference */ 'r', `java.lang.invoke.MethodHandles#filterArguments(java.lang.invoke.MethodHandle,int,java.lang.invoke.MethodHandle...)`, `substitution`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', `Method handle contents`],
		[/* text */ 't', `
 Method handles are dynamically and strongly typed according to their parameter and return types.
 They are not distinguished by the name or the defining class of their underlying methods.
 A method handle must be invoked using a symbolic type descriptor which matches
 the method handle's own `],
		[/* reference */ 'r', `#type()`, `type descriptor`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Every method handle reports its type descriptor via the `],
			[/* reference */ 'r', `#type()`, `type`],
			[/* text */ 't', ` accessor.
 This type descriptor is a `],
			[/* reference */ 'r', `java.lang.invoke.MethodType`, `MethodType`],
			[/* text */ 't', ` object,
 whose structure is a series of classes, one of which is
 the return type of the method (or `],
			[/* inline code block */ 'i', `void.class`],
			[/* text */ 't', ` if none).
 `]
		]],
		[/* block */ 'b', `
 A method handle's type controls the types of invocations it accepts,
 and the kinds of transformations that apply to it.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 A method handle contains a pair of special invoker methods
 called `],
			[/* reference */ 'r', `#invokeExact(java.lang.Object...)`, `invokeExact`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `#invoke(java.lang.Object...)`, `invoke`],
			[/* text */ 't', `.
 Both invoker methods provide direct access to the method handle's
 underlying method, constructor, field, or other operation,
 as modified by transformations of arguments and return values.
 Both invokers accept calls which exactly match the method handle's own type.
 The plain, inexact invoker also accepts a range of other call types.
 `]
		]],
		[/* block */ 'b', `
 Method handles are immutable and have no visible state.
 Of course, they can be bound to underlying methods or data which exhibit state.
 With respect to the Java Memory Model, any method handle will behave
 as if all of its (internal) fields are final variables.  This means that any method
 handle made visible to the application will always be fully formed.
 This is true even if the method handle is published through a shared
 variable in a data race.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Method handles cannot be subclassed by the user.
 Implementations may (or may not) create internal subclasses of `],
			[/* inline code block */ 'i', `MethodHandle`],
			[/* text */ 't', `
 which may be visible via the `],
			[/* reference */ 'r', `java.lang.Object#getClass()`, `Object.getClass`],
			[/* text */ 't', `
 operation.  The programmer should not draw conclusions about a method handle
 from its specific class, as the method handle class hierarchy (if any)
 may change from time to time or across implementations from different vendors.

 `]
		]],
		[/* block */ 'b', `Method handle compilation`],
		[/* text */ 't', `
 A Java method call expression naming `],
		[/* inline code block */ 'i', `invokeExact`],
		[/* text */ 't', ` or `],
		[/* inline code block */ 'i', `invoke`],
		[/* text */ 't', `
 can invoke a method handle from Java source code.
 From the viewpoint of source code, these methods can take any arguments
 and their result can be cast to any return type.
 Formally this is accomplished by giving the invoker methods
 `],
		[/* inline code block */ 'i', `Object`],
		[/* text */ 't', ` return types and variable arity `],
		[/* inline code block */ 'i', `Object`],
		[/* text */ 't', ` arguments,
 but they have an additional quality called `],
		[/* text */ 't', `signature polymorphism`],
		[/* text */ 't', `
 which connects this freedom of invocation directly to the JVM execution stack.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 As is usual with virtual methods, source-level calls to `],
			[/* inline code block */ 'i', `invokeExact`],
			[/* text */ 't', `
 and `],
			[/* inline code block */ 'i', `invoke`],
			[/* text */ 't', ` compile to an `],
			[/* inline code block */ 'i', `invokevirtual`],
			[/* text */ 't', ` instruction.
 More unusually, the compiler must record the actual argument types,
 and may not perform method invocation conversions on the arguments.
 Instead, it must generate instructions that push them on the stack according
 to their own unconverted types.  The method handle object itself is pushed on
 the stack before the arguments.
 The compiler then generates an `],
			[/* inline code block */ 'i', `invokevirtual`],
			[/* text */ 't', ` instruction that invokes
 the method handle with a symbolic type descriptor which describes the argument
 and return types.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 To issue a complete symbolic type descriptor, the compiler must also determine
 the return type.  This is based on a cast on the method invocation expression,
 if there is one, or else `],
			[/* inline code block */ 'i', `Object`],
			[/* text */ 't', ` if the invocation is an expression,
 or else `],
			[/* inline code block */ 'i', `void`],
			[/* text */ 't', ` if the invocation is a statement.
 The cast may be to a primitive type (but not `],
			[/* inline code block */ 'i', `void`],
			[/* text */ 't', `).
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 As a corner case, an uncasted `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` argument is given
 a symbolic type descriptor of `],
			[/* inline code block */ 'i', `java.lang.Void`],
			[/* text */ 't', `.
 The ambiguity with the type `],
			[/* inline code block */ 'i', `Void`],
			[/* text */ 't', ` is harmless, since there are no references of type
 `],
			[/* inline code block */ 'i', `Void`],
			[/* text */ 't', ` except the null reference.

 `]
		]],
		[/* block */ 'b', `Method handle invocation`],
		[/* text */ 't', `
 The first time an `],
		[/* inline code block */ 'i', `invokevirtual`],
		[/* text */ 't', ` instruction is executed
 it is linked by symbolically resolving the names in the instruction
 and verifying that the method call is statically legal.
 This also holds for calls to `],
		[/* inline code block */ 'i', `invokeExact`],
		[/* text */ 't', ` and `],
		[/* inline code block */ 'i', `invoke`],
		[/* text */ 't', `.
 In this case, the symbolic type descriptor emitted by the compiler is checked for
 correct syntax, and names it contains are resolved.
 Thus, an `],
		[/* inline code block */ 'i', `invokevirtual`],
		[/* text */ 't', ` instruction which invokes
 a method handle will always link, as long
 as the symbolic type descriptor is syntactically well-formed
 and the types exist.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 When the `],
			[/* inline code block */ 'i', `invokevirtual`],
			[/* text */ 't', ` is executed after linking,
 the receiving method handle's type is first checked by the JVM
 to ensure that it matches the symbolic type descriptor.
 If the type match fails, it means that the method which the
 caller is invoking is not present on the individual
 method handle being invoked.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 In the case of `],
			[/* inline code block */ 'i', `invokeExact`],
			[/* text */ 't', `, the type descriptor of the invocation
 (after resolving symbolic type names) must exactly match the method type
 of the receiving method handle.
 In the case of plain, inexact `],
			[/* inline code block */ 'i', `invoke`],
			[/* text */ 't', `, the resolved type descriptor
 must be a valid argument to the receiver's `],
			[/* reference */ 'r', `#asType(java.lang.invoke.MethodType)`, `asType`],
			[/* text */ 't', ` method.
 Thus, plain `],
			[/* inline code block */ 'i', `invoke`],
			[/* text */ 't', ` is more permissive than `],
			[/* inline code block */ 'i', `invokeExact`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 After type matching, a call to `],
			[/* inline code block */ 'i', `invokeExact`],
			[/* text */ 't', ` directly
 and immediately invoke the method handle's underlying method
 (or other behavior, as the case may be).
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 A call to plain `],
			[/* inline code block */ 'i', `invoke`],
			[/* text */ 't', ` works the same as a call to
 `],
			[/* inline code block */ 'i', `invokeExact`],
			[/* text */ 't', `, if the symbolic type descriptor specified by the caller
 exactly matches the method handle's own type.
 If there is a type mismatch, `],
			[/* inline code block */ 'i', `invoke`],
			[/* text */ 't', ` attempts
 to adjust the type of the receiving method handle,
 as if by a call to `],
			[/* reference */ 'r', `#asType(java.lang.invoke.MethodType)`, `asType`],
			[/* text */ 't', `,
 to obtain an exactly invokable method handle `],
			[/* inline code block */ 'i', `M2`],
			[/* text */ 't', `.
 This allows a more powerful negotiation of method type
 between caller and callee.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 (`],
			[/* text */ 't', `Note:`],
			[/* text */ 't', ` The adjusted method handle `],
			[/* inline code block */ 'i', `M2`],
			[/* text */ 't', ` is not directly observable,
 and implementations are therefore not required to materialize it.)

 `]
		]],
		[/* block */ 'b', `Invocation checking`],
		[/* text */ 't', `
 In typical programs, method handle type matching will usually succeed.
 But if a match fails, the JVM will throw a `],
		[/* reference */ 'r', `java.lang.invoke.WrongMethodTypeException`, `WrongMethodTypeException`],
		[/* text */ 't', `,
 either directly (in the case of `],
		[/* inline code block */ 'i', `invokeExact`],
		[/* text */ 't', `) or indirectly as if
 by a failed call to `],
		[/* inline code block */ 'i', `asType`],
		[/* text */ 't', ` (in the case of `],
		[/* inline code block */ 'i', `invoke`],
		[/* text */ 't', `).
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Thus, a method type mismatch which might show up as a linkage error
 in a statically typed program can show up as
 a dynamic `],
			[/* inline code block */ 'i', `WrongMethodTypeException`],
			[/* text */ 't', `
 in a program which uses method handles.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Because method types contain "live" `],
			[/* inline code block */ 'i', `Class`],
			[/* text */ 't', ` objects,
 method type matching takes into account both type names and class loaders.
 Thus, even if a method handle `],
			[/* inline code block */ 'i', `M`],
			[/* text */ 't', ` is created in one
 class loader `],
			[/* inline code block */ 'i', `L1`],
			[/* text */ 't', ` and used in another `],
			[/* inline code block */ 'i', `L2`],
			[/* text */ 't', `,
 method handle calls are type-safe, because the caller's symbolic type
 descriptor, as resolved in `],
			[/* inline code block */ 'i', `L2`],
			[/* text */ 't', `,
 is matched against the original callee method's symbolic type descriptor,
 as resolved in `],
			[/* inline code block */ 'i', `L1`],
			[/* text */ 't', `.
 The resolution in `],
			[/* inline code block */ 'i', `L1`],
			[/* text */ 't', ` happens when `],
			[/* inline code block */ 'i', `M`],
			[/* text */ 't', ` is created
 and its type is assigned, while the resolution in `],
			[/* inline code block */ 'i', `L2`],
			[/* text */ 't', ` happens
 when the `],
			[/* inline code block */ 'i', `invokevirtual`],
			[/* text */ 't', ` instruction is linked.
 `]
		]],
		[/* block */ 'b', `
 Apart from type descriptor checks,
 a method handle's capability to call its underlying method is unrestricted.
 If a method handle is formed on a non-public method by a class
 that has access to that method, the resulting handle can be used
 in any place by any caller who receives a reference to it.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Unlike with the Core Reflection API, where access is checked every time
 a reflective method is invoked,
 method handle access checking is performed
 `],
			[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#access`, `when the method handle is created`],
			[/* text */ 't', `.
 In the case of `],
			[/* inline code block */ 'i', `ldc`],
			[/* text */ 't', ` (see below), access checking is performed as part of linking
 the constant pool entry underlying the constant method handle.
 `]
		]],
		[/* block */ 'b', `
 Thus, handles to non-public methods, or to methods in non-public classes,
 should generally be kept secret.
 They should not be passed to untrusted code unless their use from
 the untrusted code would be harmless.

 `],
		[/* block */ 'b', `Method handle creation`],
		[/* text */ 't', `
 Java code can create a method handle that directly accesses
 any method, constructor, or field that is accessible to that code.
 This is done via a reflective, capability-based API called
 `],
		[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup`, `MethodHandles.Lookup`],
		[/* text */ 't', `.
 For example, a static method handle can be obtained
 from `],
		[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#findStatic(java.lang.Class,java.lang.String,java.lang.invoke.MethodType)`, `Lookup.findStatic`],
		[/* text */ 't', `.
 There are also conversion methods from Core Reflection API objects,
 such as `],
		[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#unreflect(java.lang.reflect.Method)`, `Lookup.unreflect`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Like classes and strings, method handles that correspond to accessible
 fields, methods, and constructors can also be represented directly
 in a class file's constant pool as constants to be loaded by `],
			[/* inline code block */ 'i', `ldc`],
			[/* text */ 't', ` bytecodes.
 A new type of constant pool entry, `],
			[/* inline code block */ 'i', `CONSTANT_MethodHandle`],
			[/* text */ 't', `,
 refers directly to an associated `],
			[/* inline code block */ 'i', `CONSTANT_Methodref`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `CONSTANT_InterfaceMethodref`],
			[/* text */ 't', `, or `],
			[/* inline code block */ 'i', `CONSTANT_Fieldref`],
			[/* text */ 't', `
 constant pool entry.
 (For full details on method handle constants, see sections `],
			[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.4.8`, `4.4.8`],
			[/* text */ 't', ` and `],
			[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-5.html#jvms-5.4.3.5`, `5.4.3.5`],
			[/* text */ 't', ` of the Java Virtual Machine
 Specification.)
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Method handles produced by lookups or constant loads from methods or
 constructors with the variable arity modifier bit (`],
			[/* inline code block */ 'i', `0x0080`],
			[/* text */ 't', `)
 have a corresponding variable arity, as if they were defined with
 the help of `],
			[/* reference */ 'r', `#asVarargsCollector(java.lang.Class)`, `asVarargsCollector`],
			[/* text */ 't', `
 or `],
			[/* reference */ 'r', `#withVarargs(boolean)`, `withVarargs`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 A method reference may refer either to a static or non-static method.
 In the non-static case, the method handle type includes an explicit
 receiver argument, prepended before any other arguments.
 In the method handle's type, the initial receiver argument is typed
 according to the class under which the method was initially requested.
 (E.g., if a non-static method handle is obtained via `],
			[/* inline code block */ 'i', `ldc`],
			[/* text */ 't', `,
 the type of the receiver is the class named in the constant pool entry.)
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Method handle constants are subject to the same link-time access checks
 their corresponding bytecode instructions, and the `],
			[/* inline code block */ 'i', `ldc`],
			[/* text */ 't', ` instruction
 will throw corresponding linkage errors if the bytecode behaviors would
 throw such errors.
 `]
		]],
		[/* block */ 'b', `
 As a corollary of this, access to protected members is restricted
 to receivers only of the accessing class, or one of its subclasses,
 and the accessing class must in turn be a subclass (or package sibling)
 of the protected member's defining class.
 If a method reference refers to a protected non-static method or field
 of a class outside the current package, the receiver argument will
 be narrowed to the type of the accessing class.
 `],
		[/* block */ 'b', `
 When a method handle to a virtual method is invoked, the method is
 always looked up in the receiver (that is, the first argument).
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 A non-virtual method handle to a specific virtual method implementation
 can also be created.  These do not perform virtual lookup based on
 receiver type.  Such a method handle simulates the effect of
 an `],
			[/* inline code block */ 'i', `invokespecial`],
			[/* text */ 't', ` instruction to the same method.
 A non-virtual method handle can also be created to simulate the effect
 of an `],
			[/* inline code block */ 'i', `invokevirtual`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `invokeinterface`],
			[/* text */ 't', ` instruction on
 a private method (as applicable).

 `]
		]],
		[/* block */ 'b', `Usage examples`],
		[/* text */ 't', `
 Here are some examples of usage:
 `],
		[/* blockquote */ 'q', [
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `Object x, y; String s; int i;
MethodType mt; MethodHandle mh;
MethodHandles.Lookup lookup = MethodHandles.lookup();
// mt is (char,char)String
mt = MethodType.methodType(String.class, char.class, char.class);
mh = lookup.findVirtual(String.class, "replace", mt);
s = (String) mh.invokeExact("daddy",'d','n');
// invokeExact(Ljava/lang/String;CC)Ljava/lang/String;
assertEquals(s, "nanny");
// weakly typed invocation (using MHs.invoke)
s = (String) mh.invokeWithArguments("sappy", 'p', 'v');
assertEquals(s, "savvy");
// mt is (Object[])List
mt = MethodType.methodType(java.util.List.class, Object[].class);
mh = lookup.findStatic(java.util.Arrays.class, "asList", mt);
assert(mh.isVarargsCollector());
x = mh.invoke("one", "two");
// invoke(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/Object;
assertEquals(x, java.util.Arrays.asList("one","two"));
// mt is (Object,Object,Object)Object
mt = MethodType.genericMethodType(3);
mh = mh.asType(mt);
x = mh.invokeExact((Object)1, (Object)2, (Object)3);
// invokeExact(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;
assertEquals(x, java.util.Arrays.asList(1,2,3));
// mt is ()int
mt = MethodType.methodType(int.class);
mh = lookup.findVirtual(java.util.List.class, "size", mt);
i = (int) mh.invokeExact(java.util.Arrays.asList(1,2,3));
// invokeExact(Ljava/util/List;)I
assert(i == 3);
mt = MethodType.methodType(void.class, String.class);
mh = lookup.findVirtual(java.io.PrintStream.class, "println", mt);
mh.invokeExact(System.out, "Hello, world.");
// invokeExact(Ljava/io/PrintStream;Ljava/lang/String;)V`]
			]]
		]],
		[/* text */ 't', `
 Each of the above calls to `],
		[/* inline code block */ 'i', `invokeExact`],
		[/* text */ 't', ` or plain `],
		[/* inline code block */ 'i', `invoke`],
		[/* text */ 't', `
 generates a single invokevirtual instruction with
 the symbolic type descriptor indicated in the following comment.
 In these examples, the helper method `],
		[/* inline code block */ 'i', `assertEquals`],
		[/* text */ 't', ` is assumed to
 be a method which calls `],
		[/* reference */ 'r', `java.util.Objects#equals(java.lang.Object,java.lang.Object)`, `Objects.equals`],
		[/* text */ 't', `
 on its arguments, and asserts that the result is true.

 `],
		[/* block */ 'b', `Exceptions`],
		[/* text */ 't', `
 The methods `],
		[/* inline code block */ 'i', `invokeExact`],
		[/* text */ 't', ` and `],
		[/* inline code block */ 'i', `invoke`],
		[/* text */ 't', ` are declared
 to throw `],
		[/* reference */ 'r', `java.lang.Throwable`, `Throwable`],
		[/* text */ 't', `,
 which is to say that there is no static restriction on what a method handle
 can throw.  Since the JVM does not distinguish between checked
 and unchecked exceptions (other than by their class, of course),
 there is no particular effect on bytecode shape from ascribing
 checked exceptions to method handle invocations.  But in Java source
 code, methods which perform method handle calls must either explicitly
 throw `],
		[/* inline code block */ 'i', `Throwable`],
		[/* text */ 't', `, or else must catch all
 throwables locally, rethrowing only those which are legal in the context,
 and wrapping ones which are illegal.

 `],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `sigpoly`, ``],
			[/* text */ 't', `Signature polymorphism`]
		]],
		[/* text */ 't', `
 The unusual compilation and linkage behavior of
 `],
		[/* inline code block */ 'i', `invokeExact`],
		[/* text */ 't', ` and plain `],
		[/* inline code block */ 'i', `invoke`],
		[/* text */ 't', `
 is referenced by the term `],
		[/* text */ 't', `signature polymorphism`],
		[/* text */ 't', `.
 As defined in the Java Language Specification,
 a signature polymorphic method is one which can operate with
 any of a wide range of call signatures and return types.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 In source code, a call to a signature polymorphic method will
 compile, regardless of the requested symbolic type descriptor.
 As usual, the Java compiler emits an `],
			[/* inline code block */ 'i', `invokevirtual`],
			[/* text */ 't', `
 instruction with the given symbolic type descriptor against the named method.
 The unusual part is that the symbolic type descriptor is derived from
 the actual argument and return types, not from the method declaration.
 `]
		]],
		[/* block */ 'b', `
 When the JVM processes bytecode containing signature polymorphic calls,
 it will successfully link any such call, regardless of its symbolic type descriptor.
 (In order to retain type safety, the JVM will guard such calls with suitable
 dynamic type checks, as described elsewhere.)
 `],
		[/* block */ 'b', `
 Bytecode generators, including the compiler back end, are required to emit
 untransformed symbolic type descriptors for these methods.
 Tools which determine symbolic linkage are required to accept such
 untransformed descriptors, without reporting linkage errors.

 `],
		[/* block */ 'b', `Interoperation between method handles and the Core Reflection API`],
		[/* text */ 't', `
 Using factory methods in the `],
		[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup`, `Lookup`],
		[/* text */ 't', ` API,
 any class member represented by a Core Reflection API object
 can be converted to a behaviorally equivalent method handle.
 For example, a reflective `],
		[/* reference */ 'r', `java.lang.reflect.Method`, `Method`],
		[/* text */ 't', ` can
 be converted to a method handle using
 `],
		[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#unreflect(java.lang.reflect.Method)`, `Lookup.unreflect`],
		[/* text */ 't', `.
 The resulting method handles generally provide more direct and efficient
 access to the underlying class members.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 As a special case,
 when the Core Reflection API is used to view the signature polymorphic
 methods `],
			[/* inline code block */ 'i', `invokeExact`],
			[/* text */ 't', ` or plain `],
			[/* inline code block */ 'i', `invoke`],
			[/* text */ 't', ` in this class,
 they appear as ordinary non-polymorphic methods.
 Their reflective appearance, as viewed by
 `],
			[/* reference */ 'r', `java.lang.Class#getDeclaredMethod(java.lang.String,java.lang.Class...)`, `Class.getDeclaredMethod`],
			[/* text */ 't', `,
 is unaffected by their special status in this API.
 For example, `],
			[/* reference */ 'r', `java.lang.reflect.Method#getModifiers()`, `Method.getModifiers`],
			[/* text */ 't', `
 will report exactly those modifier bits required for any similarly
 declared method, including in this case `],
			[/* inline code block */ 'i', `native`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `varargs`],
			[/* text */ 't', ` bits.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 As with any reflected method, these methods (when reflected) may be
 invoked via `],
			[/* reference */ 'r', `java.lang.reflect.Method#invoke(java.lang.Object,java.lang.Object...)`, `java.lang.reflect.Method.invoke`],
			[/* text */ 't', `.
 However, such reflective calls do not result in method handle invocations.
 Such a call, if passed the required argument
 (a single one, of type `],
			[/* inline code block */ 'i', `Object[]`],
			[/* text */ 't', `), will ignore the argument and
 will throw an `],
			[/* inline code block */ 'i', `UnsupportedOperationException`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Since `],
			[/* inline code block */ 'i', `invokevirtual`],
			[/* text */ 't', ` instructions can natively
 invoke method handles under any symbolic type descriptor, this reflective view conflicts
 with the normal presentation of these methods via bytecodes.
 Thus, these two native methods, when reflectively viewed by
 `],
			[/* inline code block */ 'i', `Class.getDeclaredMethod`],
			[/* text */ 't', `, may be regarded as placeholders only.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 In order to obtain an invoker method for a particular type descriptor,
 use `],
			[/* reference */ 'r', `java.lang.invoke.MethodHandles#exactInvoker(java.lang.invoke.MethodType)`, `MethodHandles.exactInvoker`],
			[/* text */ 't', `,
 or `],
			[/* reference */ 'r', `java.lang.invoke.MethodHandles#invoker(java.lang.invoke.MethodType)`, `MethodHandles.invoker`],
			[/* text */ 't', `.
 The `],
			[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#findVirtual(java.lang.Class,java.lang.String,java.lang.invoke.MethodType)`, `Lookup.findVirtual`],
			[/* text */ 't', `
 API is also able to return a method handle
 to call `],
			[/* inline code block */ 'i', `invokeExact`],
			[/* text */ 't', ` or plain `],
			[/* inline code block */ 'i', `invoke`],
			[/* text */ 't', `,
 for any specified type descriptor .

 `]
		]],
		[/* block */ 'b', `Interoperation between method handles and Java generics`],
		[/* text */ 't', `
 A method handle can be obtained on a method, constructor, or field
 which is declared with Java generic types.
 As with the Core Reflection API, the type of the method handle
 will be constructed from the erasure of the source-level type.
 When a method handle is invoked, the types of its arguments
 or the return value cast type may be generic types or type instances.
 If this occurs, the compiler will replace those
 types by their erasures when it constructs the symbolic type descriptor
 for the `],
		[/* inline code block */ 'i', `invokevirtual`],
		[/* text */ 't', ` instruction.
 `],
		[/* block */ 'b', `
 Method handles do not represent
 their function-like types in terms of Java parameterized (generic) types,
 because there are three mismatches between function-like types and parameterized
 Java types.
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `Method types range over all possible arities,
 from no arguments to up to the  `],
				[/* reference */ 'r', `java.lang.invoke.MethodHandle#maxarity`, `maximum number`],
				[/* text */ 't', ` of allowed arguments.
 Generics are not variadic, and so cannot represent this.`]
			]],
			[/* block */ 'b', `Method types can specify arguments of primitive types,
 which Java generic types cannot range over.`],
			[/* block */ 'b', `Higher order functions over method handles (combinators) are
 often generic across a wide range of function types, including
 those of multiple arities.  It is impossible to represent such
 genericity with a Java type parameter.`]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `maxarity`, ``],
			[/* text */ 't', `Arity limits`]
		]],
		[/* text */ 't', `
 The JVM imposes on all methods and constructors of any kind an absolute
 limit of 255 stacked arguments.  This limit can appear more restrictive
 in certain cases:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `A `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` argument counts (for purposes of arity limits) as two argument slots.
 `]
			]],
			[/* block */ 'b', `A non-static method consumes an extra argument for the object on which the method is called.
 `],
			[/* block */ 'b', `A constructor consumes an extra argument for the object which is being constructed.
 `],
			[/* block */ 'b', [
				[/* text */ 't', `Since a method handle’s `],
				[/* inline code block */ 'i', `invoke`],
				[/* text */ 't', ` method (or other signature-polymorphic method) is non-virtual,
     it consumes an extra argument for the method handle itself, in addition to any non-virtual receiver object.
 `]
			]]
		]],
		[/* text */ 't', `
 These limits imply that certain method handles cannot be created, solely because of the JVM limit on stacked arguments.
 For example, if a static JVM method accepts exactly 255 arguments, a method handle cannot be created for it.
 Attempts to create method handles with impossible method types lead to an `],
		[/* reference */ 'r', `java.lang.IllegalArgumentException`, `IllegalArgumentException`],
		[/* text */ 't', `.
 In particular, a method handle’s type must not have an arity of the exact maximum 255.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'isVarargsCollector()', [
			[/* method description */
				[/* text */ 't', `Determines if this method handle
 supports `],
				[/* reference */ 'r', `#asVarargsCollector(java.lang.Class)`, `variable arity`],
				[/* text */ 't', ` calls.
 Such method handles arise from the following sources:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `a call to `],
						[/* reference */ 'r', `#asVarargsCollector(java.lang.Class)`, `asVarargsCollector`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `a call to a `],
						[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup`, `lookup method`],
						[/* text */ 't', `
     which resolves to a variable arity Java method or constructor
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `an `],
						[/* inline code block */ 'i', `ldc`],
						[/* text */ 't', ` instruction of a `],
						[/* inline code block */ 'i', `CONSTANT_MethodHandle`],
						[/* text */ 't', `
     which resolves to a variable arity Java method or constructor
 `]
					]]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this method handle accepts more than one arity of plain, inexact `],
				[/* inline code block */ 'i', `invoke`],
				[/* text */ 't', ` calls`]
			]
		]],
		[/* method */ 'invoke(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Invokes the method handle, allowing any caller type descriptor,
 and optionally performing conversions on arguments and return values.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the call site's symbolic type descriptor exactly matches this method handle's `],
					[/* reference */ 'r', `#type()`, `type`],
					[/* text */ 't', `,
 the call proceeds as if by `],
					[/* reference */ 'r', `#invokeExact(java.lang.Object...)`, `invokeExact`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Otherwise, the call proceeds as if this method handle were first
 adjusted by calling `],
					[/* reference */ 'r', `#asType(java.lang.invoke.MethodType)`, `asType`],
					[/* text */ 't', ` to adjust this method handle
 to the required type, and then the call proceeds as if by
 `],
					[/* reference */ 'r', `#invokeExact(java.lang.Object...)`, `invokeExact`],
					[/* text */ 't', ` on the adjusted method handle.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 There is no guarantee that the `],
					[/* inline code block */ 'i', `asType`],
					[/* text */ 't', ` call is actually made.
 If the JVM can predict the results of making the call, it may perform
 adaptations directly on the caller's arguments,
 and call the target method handle according to its own exact type.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The resolved type descriptor at the call site of `],
					[/* inline code block */ 'i', `invoke`],
					[/* text */ 't', ` must
 be a valid argument to the receivers `],
					[/* inline code block */ 'i', `asType`],
					[/* text */ 't', ` method.
 In particular, the caller must specify the same argument arity
 as the callee's type,
 if the callee is not a `],
					[/* reference */ 'r', `#asVarargsCollector(java.lang.Class)`, `variable arity collector`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When this method is observed via the Core Reflection API,
 it will appear as a single native method, taking an object array and returning an object.
 If this native method is invoked directly via
 `],
					[/* reference */ 'r', `java.lang.reflect.Method#invoke(java.lang.Object,java.lang.Object...)`, `java.lang.reflect.Method.invoke`],
					[/* text */ 't', `, via JNI,
 or indirectly via `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#unreflect(java.lang.reflect.Method)`, `Lookup.unreflect`],
					[/* text */ 't', `,
 it will throw an `],
					[/* inline code block */ 'i', `UnsupportedOperationException`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list, statically represented using varargs`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the target's type cannot be adjusted to the caller's symbolic type descriptor`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the target's type can be adjusted to the caller, but a reference cast fails`]
				]],
				[/* throw */ 'java.lang.Throwable', [/* throw description */
					[/* text */ 't', `anything thrown by the underlying method propagates unchanged through the method handle call`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signature-polymorphic result, statically represented using `],
				[/* inline code block */ 'i', `Object`]
			]
		]],
		[/* method */ 'invokeExact(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Invokes the method handle, allowing any caller type descriptor, but requiring an exact type match.
 The symbolic type descriptor at the call site of `],
				[/* inline code block */ 'i', `invokeExact`],
				[/* text */ 't', ` must
 exactly match this method handle's `],
				[/* reference */ 'r', `#type()`, `type`],
				[/* text */ 't', `.
 No conversions are allowed on arguments or return values.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 When this method is observed via the Core Reflection API,
 it will appear as a single native method, taking an object array and returning an object.
 If this native method is invoked directly via
 `],
					[/* reference */ 'r', `java.lang.reflect.Method#invoke(java.lang.Object,java.lang.Object...)`, `java.lang.reflect.Method.invoke`],
					[/* text */ 't', `, via JNI,
 or indirectly via `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup#unreflect(java.lang.reflect.Method)`, `Lookup.unreflect`],
					[/* text */ 't', `,
 it will throw an `],
					[/* inline code block */ 'i', `UnsupportedOperationException`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list, statically represented using varargs`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the target's type is not identical with the caller's symbolic type descriptor`]
				]],
				[/* throw */ 'java.lang.Throwable', [/* throw description */
					[/* text */ 't', `anything thrown by the underlying method propagates unchanged through the method handle call`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signature-polymorphic result, statically represented using `],
				[/* inline code block */ 'i', `Object`]
			]
		]],
		[/* method */ 'asCollector(int,java.lang.Class,int)', [
			[/* method description */
				[/* text */ 't', `Makes an `],
				[/* text */ 't', `array-collecting`],
				[/* text */ 't', ` method handle, which accepts a given number of positional arguments starting
 at a given position, and collects them into an array argument. The new method handle adapts, as its
 `],
				[/* text */ 't', `target`],
				[/* text */ 't', `, the current method handle. The type of the adapter will be the same as the type of the target,
 except that the parameter at the position indicated by `],
				[/* inline code block */ 'i', `collectArgPos`],
				[/* text */ 't', ` (usually of type `],
				[/* inline code block */ 'i', `arrayType`],
				[/* text */ 't', `)
 is replaced by `],
				[/* inline code block */ 'i', `arrayLength`],
				[/* text */ 't', ` parameters whose type is element type of `],
				[/* inline code block */ 'i', `arrayType`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method behaves very much like `],
					[/* reference */ 'r', `#asCollector(java.lang.Class,int)`, `asCollector(Class, int)`],
					[/* text */ 't', `, but differs in that its `],
					[/* inline code block */ 'i', `collectArgPos`],
					[/* text */ 't', ` argument indicates at which position in the parameter list arguments should be collected. This
 index is zero-based.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'collectArgPos', [/* parameter description */
					[/* text */ 't', `the zero-based position in the parameter list at which to start collecting.`]
				]],
				[/* parameter */ 'arrayType', [/* parameter description */
					[/* text */ 't', `often `],
					[/* inline code block */ 'i', `Object[]`],
					[/* text */ 't', `, the type of the array argument which will collect the arguments`]
				]],
				[/* parameter */ 'arrayLength', [/* parameter description */
					[/* text */ 't', `the number of arguments to collect into a new array argument`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `arrayType`],
					[/* text */ 't', ` is a null reference`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `arrayType`],
					[/* text */ 't', ` is not an array type
         or `],
					[/* inline code block */ 'i', `arrayType`],
					[/* text */ 't', ` is not assignable to this method handle's array parameter type,
         or `],
					[/* inline code block */ 'i', `arrayLength`],
					[/* text */ 't', ` is not a legal array size,
         or `],
					[/* inline code block */ 'i', `collectArgPos`],
					[/* text */ 't', ` has an illegal value (negative, or greater than the number of arguments),
         or the resulting method handle's type would have
         `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#maxarity`, `too many parameters`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the implied `],
					[/* inline code block */ 'i', `asType`],
					[/* text */ 't', ` call fails`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new method handle which collects some arguments
         into an array, before calling the original method handle`]
			]
		]],
		[/* method */ 'asCollector(java.lang.Class,int)', [
			[/* method description */
				[/* text */ 't', `Makes an `],
				[/* text */ 't', `array-collecting`],
				[/* text */ 't', ` method handle, which accepts a given number of trailing
 positional arguments and collects them into an array argument.
 The new method handle adapts, as its `],
				[/* text */ 't', `target`],
				[/* text */ 't', `,
 the current method handle.  The type of the adapter will be
 the same as the type of the target, except that a single trailing
 parameter (usually of type `],
				[/* inline code block */ 'i', `arrayType`],
				[/* text */ 't', `) is replaced by
 `],
				[/* inline code block */ 'i', `arrayLength`],
				[/* text */ 't', ` parameters whose type is element type of `],
				[/* inline code block */ 'i', `arrayType`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the array type differs from the final argument type on the original target,
 the original target is adapted to take the array type directly,
 as if by a call to `],
					[/* reference */ 'r', `#asType(java.lang.invoke.MethodType)`, `asType`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When called, the adapter replaces its trailing `],
					[/* inline code block */ 'i', `arrayLength`],
					[/* text */ 't', `
 arguments by a single new array of type `],
					[/* inline code block */ 'i', `arrayType`],
					[/* text */ 't', `, whose elements
 comprise (in order) the replaced arguments.
 Finally the target is called.
 What the target eventually returns is returned unchanged by the adapter.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 (The array may also be a shared constant when `],
					[/* inline code block */ 'i', `arrayLength`],
					[/* text */ 't', ` is zero.)
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 (`],
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `arrayType`],
					[/* text */ 't', ` is often identical to the
 `],
					[/* reference */ 'r', `java.lang.invoke.MethodType#lastParameterType()`, `last parameter type`],
					[/* text */ 't', `
 of the original target.
 It is an explicit argument for symmetry with `],
					[/* inline code block */ 'i', `asSpreader`],
					[/* text */ 't', `, and also
 to allow the target to use a simple `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', ` as its last parameter type.)
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In order to create a collecting adapter which is not restricted to a particular
 number of collected arguments, use `],
					[/* reference */ 'r', `#asVarargsCollector(java.lang.Class)`, `asVarargsCollector`],
					[/* text */ 't', `
 or `],
					[/* reference */ 'r', `#withVarargs(boolean)`, `withVarargs`],
					[/* text */ 't', ` instead.
 `]
				]],
				[/* block */ 'b', `
 Here are some examples of array-collecting method handles:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `MethodHandle deepToString = publicLookup()
  .findStatic(Arrays.class, "deepToString", methodType(String.class, Object[].class));
assertEquals("[won]",   (String) deepToString.invokeExact(new Object[]{"won"}));
MethodHandle ts1 = deepToString.asCollector(Object[].class, 1);
assertEquals(methodType(String.class, Object.class), ts1.type());
//assertEquals("[won]", (String) ts1.invokeExact(         new Object[]{"won"})); //FAIL
assertEquals("[[won]]", (String) ts1.invokeExact((Object) new Object[]{"won"}));
// arrayType can be a subtype of Object[]
MethodHandle ts2 = deepToString.asCollector(String[].class, 2);
assertEquals(methodType(String.class, String.class, String.class), ts2.type());
assertEquals("[two, too]", (String) ts2.invokeExact("two", "too"));
MethodHandle ts0 = deepToString.asCollector(Object[].class, 0);
assertEquals("[]", (String) ts0.invokeExact());
// collectors can be nested, Lisp-style
MethodHandle ts22 = deepToString.asCollector(Object[].class, 3).asCollector(String[].class, 2);
assertEquals("[A, B, [C, D]]", ((String) ts22.invokeExact((Object)'A', (Object)"B", "C", "D")));
// arrayType can be any primitive array type
MethodHandle bytesToString = publicLookup()
  .findStatic(Arrays.class, "toString", methodType(String.class, byte[].class))
  .asCollector(byte[].class, 3);
assertEquals("[1, 2, 3]", (String) bytesToString.invokeExact((byte)1, (byte)2, (byte)3));
MethodHandle longsToString = publicLookup()
  .findStatic(Arrays.class, "toString", methodType(String.class, long[].class))
  .asCollector(long[].class, 1);
assertEquals("[123]", (String) longsToString.invokeExact((long)123));`]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` The resulting adapter is never a `],
					[/* reference */ 'r', `#asVarargsCollector(java.lang.Class)`, `variable-arity method handle`],
					[/* text */ 't', `, even if the original target method handle was.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'arrayType', [/* parameter description */
					[/* text */ 't', `often `],
					[/* inline code block */ 'i', `Object[]`],
					[/* text */ 't', `, the type of the array argument which will collect the arguments`]
				]],
				[/* parameter */ 'arrayLength', [/* parameter description */
					[/* text */ 't', `the number of arguments to collect into a new array argument`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `arrayType`],
					[/* text */ 't', ` is a null reference`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `arrayType`],
					[/* text */ 't', ` is not an array type
         or `],
					[/* inline code block */ 'i', `arrayType`],
					[/* text */ 't', ` is not assignable to this method handle's trailing parameter type,
         or `],
					[/* inline code block */ 'i', `arrayLength`],
					[/* text */ 't', ` is not a legal array size,
         or the resulting method handle's type would have
         `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#maxarity`, `too many parameters`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the implied `],
					[/* inline code block */ 'i', `asType`],
					[/* text */ 't', ` call fails`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new method handle which collects some trailing argument
         into an array, before calling the original method handle`]
			]
		]],
		[/* method */ 'asFixedArity()', [
			[/* method description */
				[/* text */ 't', `Makes a `],
				[/* text */ 't', `fixed arity`],
				[/* text */ 't', ` method handle which is otherwise
 equivalent to the current method handle.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the current method handle is not of
 `],
					[/* reference */ 'r', `#asVarargsCollector(java.lang.Class)`, `variable arity`],
					[/* text */ 't', `,
 the current method handle is returned.
 This is true even if the current method handle
 could not be a valid input to `],
					[/* inline code block */ 'i', `asVarargsCollector`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Otherwise, the resulting fixed-arity method handle has the same
 type and behavior of the current method handle,
 except that `],
					[/* reference */ 'r', `#isVarargsCollector()`, `isVarargsCollector`],
					[/* text */ 't', `
 will be false.
 The fixed-arity method handle may (or may not) be the
 a previous argument to `],
					[/* inline code block */ 'i', `asVarargsCollector`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 Here is an example, of a list-making variable arity method handle:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `MethodHandle asListVar = publicLookup()
  .findStatic(Arrays.class, "asList", methodType(List.class, Object[].class))
  .asVarargsCollector(Object[].class);
MethodHandle asListFix = asListVar.asFixedArity();
assertEquals("[1]", asListVar.invoke(1).toString());
Exception caught = null;
try { asListFix.invoke((Object)1); }
catch (Exception ex) { caught = ex; }
assert(caught instanceof ClassCastException);
assertEquals("[two, too]", asListVar.invoke("two", "too").toString());
try { asListFix.invoke("two", "too"); }
catch (Exception ex) { caught = ex; }
assert(caught instanceof WrongMethodTypeException);
Object[] argv = { "three", "thee", "tee" };
assertEquals("[three, thee, tee]", asListVar.invoke(argv).toString());
assertEquals("[three, thee, tee]", asListFix.invoke(argv).toString());
assertEquals(1, ((List) asListVar.invoke((Object)argv)).size());
assertEquals("[three, thee, tee]", asListFix.invoke((Object)argv).toString());`]
					]]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a new method handle which accepts only a fixed number of arguments`]
			]
		]],
		[/* method */ 'asSpreader(int,java.lang.Class,int)', [
			[/* method description */
				[/* text */ 't', `Makes an `],
				[/* text */ 't', `array-spreading`],
				[/* text */ 't', ` method handle, which accepts an array argument at a given position and spreads
 its elements as positional arguments in place of the array. The new method handle adapts, as its `],
				[/* text */ 't', `target`],
				[/* text */ 't', `,
 the current method handle. The type of the adapter will be the same as the type of the target, except that the
 `],
				[/* inline code block */ 'i', `arrayLength`],
				[/* text */ 't', ` parameters of the target's type, starting at the zero-based position `],
				[/* inline code block */ 'i', `spreadArgPos`],
				[/* text */ 't', `,
 are replaced by a single array parameter of type `],
				[/* inline code block */ 'i', `arrayType`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method behaves very much like `],
					[/* reference */ 'r', `#asSpreader(java.lang.Class,int)`, `asSpreader(Class, int)`],
					[/* text */ 't', `, but accepts an additional `],
					[/* inline code block */ 'i', `spreadArgPos`],
					[/* text */ 't', `
 argument to indicate at which position in the parameter list the spreading should take place.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'spreadArgPos', [/* parameter description */
					[/* text */ 't', `the position (zero-based index) in the argument list at which spreading should start.`]
				]],
				[/* parameter */ 'arrayType', [/* parameter description */
					[/* text */ 't', `usually `],
					[/* inline code block */ 'i', `Object[]`],
					[/* text */ 't', `, the type of the array argument from which to extract the spread arguments`]
				]],
				[/* parameter */ 'arrayLength', [/* parameter description */
					[/* text */ 't', `the number of arguments to spread from an incoming array argument`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `arrayType`],
					[/* text */ 't', ` is a null reference`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `arrayType`],
					[/* text */ 't', ` is not an array type,
         or if target does not have at least
         `],
					[/* inline code block */ 'i', `arrayLength`],
					[/* text */ 't', ` parameter types,
         or if `],
					[/* inline code block */ 'i', `arrayLength`],
					[/* text */ 't', ` is negative,
         or if `],
					[/* inline code block */ 'i', `spreadArgPos`],
					[/* text */ 't', ` has an illegal value (negative, or together with arrayLength exceeding the
         number of arguments),
         or if the resulting method handle's type would have
         `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#maxarity`, `too many parameters`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the implied `],
					[/* inline code block */ 'i', `asType`],
					[/* text */ 't', ` call fails`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new method handle which spreads an array argument at a given position,
         before calling the original method handle`]
			]
		]],
		[/* method */ 'asSpreader(java.lang.Class,int)', [
			[/* method description */
				[/* text */ 't', `Makes an `],
				[/* text */ 't', `array-spreading`],
				[/* text */ 't', ` method handle, which accepts a trailing array argument
 and spreads its elements as positional arguments.
 The new method handle adapts, as its `],
				[/* text */ 't', `target`],
				[/* text */ 't', `,
 the current method handle.  The type of the adapter will be
 the same as the type of the target, except that the final
 `],
				[/* inline code block */ 'i', `arrayLength`],
				[/* text */ 't', ` parameters of the target's type are replaced
 by a single array parameter of type `],
				[/* inline code block */ 'i', `arrayType`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the array element type differs from any of the corresponding
 argument types on the original target,
 the original target is adapted to take the array elements directly,
 as if by a call to `],
					[/* reference */ 'r', `#asType(java.lang.invoke.MethodType)`, `asType`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 When called, the adapter replaces a trailing array argument
 by the array's elements, each as its own argument to the target.
 (The order of the arguments is preserved.)
 They are converted pairwise by casting and/or unboxing
 to the types of the trailing parameters of the target.
 Finally the target is called.
 What the target eventually returns is returned unchanged by the adapter.
 `],
				[/* block */ 'b', `
 Before calling the target, the adapter verifies that the array
 contains exactly enough elements to provide a correct argument count
 to the target method handle.
 (The array may also be null when zero elements are required.)
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 When the adapter is called, the length of the supplied `],
					[/* inline code block */ 'i', `array`],
					[/* text */ 't', `
 argument is queried as if by `],
					[/* inline code block */ 'i', `array.length`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `arraylength`],
					[/* text */ 't', `
 bytecode. If the adapter accepts a zero-length trailing array argument,
 the supplied `],
					[/* inline code block */ 'i', `array`],
					[/* text */ 't', ` argument can either be a zero-length array or
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `; otherwise, the adapter will throw a `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', `
 if the array is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` and throw an `],
					[/* reference */ 'r', `java.lang.IllegalArgumentException`, `IllegalArgumentException`],
					[/* text */ 't', `
 if the array does not have the correct number of elements.
 `]
				]],
				[/* block */ 'b', `
 Here are some simple examples of array-spreading method handles:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `MethodHandle equals = publicLookup()
  .findVirtual(String.class, "equals", methodType(boolean.class, Object.class));
assert( (boolean) equals.invokeExact("me", (Object)"me"));
assert(!(boolean) equals.invokeExact("me", (Object)"thee"));
// spread both arguments from a 2-array:
MethodHandle eq2 = equals.asSpreader(Object[].class, 2);
assert( (boolean) eq2.invokeExact(new Object[]{ "me", "me" }));
assert(!(boolean) eq2.invokeExact(new Object[]{ "me", "thee" }));
// try to spread from anything but a 2-array:
for (int n = 0; n <= 10; n++) {
  Object[] badArityArgs = (n == 2 ? new Object[0] : new Object[n]);
  try { assert((boolean) eq2.invokeExact(badArityArgs) && false); }
  catch (IllegalArgumentException ex) { } // OK
}
// spread both arguments from a String array:
MethodHandle eq2s = equals.asSpreader(String[].class, 2);
assert( (boolean) eq2s.invokeExact(new String[]{ "me", "me" }));
assert(!(boolean) eq2s.invokeExact(new String[]{ "me", "thee" }));
// spread second arguments from a 1-array:
MethodHandle eq1 = equals.asSpreader(Object[].class, 1);
assert( (boolean) eq1.invokeExact("me", new Object[]{ "me" }));
assert(!(boolean) eq1.invokeExact("me", new Object[]{ "thee" }));
// spread no arguments from a 0-array or null:
MethodHandle eq0 = equals.asSpreader(Object[].class, 0);
assert( (boolean) eq0.invokeExact("me", (Object)"me", new Object[0]));
assert(!(boolean) eq0.invokeExact("me", (Object)"thee", (Object[])null));
// asSpreader and asCollector are approximate inverses:
for (int n = 0; n <= 2; n++) {
    for (Class<?> a : new Class<?>[]{Object[].class, String[].class, CharSequence[].class}) {
        MethodHandle equals2 = equals.asSpreader(a, n).asCollector(a, n);
        assert( (boolean) equals2.invokeWithArguments("me", "me"));
        assert(!(boolean) equals2.invokeWithArguments("me", "thee"));
    }
}
MethodHandle caToString = publicLookup()
  .findStatic(Arrays.class, "toString", methodType(String.class, char[].class));
assertEquals("[A, B, C]", (String) caToString.invokeExact("ABC".toCharArray()));
MethodHandle caString3 = caToString.asCollector(char[].class, 3);
assertEquals("[A, B, C]", (String) caString3.invokeExact('A', 'B', 'C'));
MethodHandle caToString2 = caString3.asSpreader(char[].class, 2);
assertEquals("[A, B, C]", (String) caToString2.invokeExact('A', "BC".toCharArray()));`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'arrayType', [/* parameter description */
					[/* text */ 't', `usually `],
					[/* inline code block */ 'i', `Object[]`],
					[/* text */ 't', `, the type of the array argument from which to extract the spread arguments`]
				]],
				[/* parameter */ 'arrayLength', [/* parameter description */
					[/* text */ 't', `the number of arguments to spread from an incoming array argument`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `arrayType`],
					[/* text */ 't', ` is a null reference`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `arrayType`],
					[/* text */ 't', ` is not an array type,
         or if target does not have at least
         `],
					[/* inline code block */ 'i', `arrayLength`],
					[/* text */ 't', ` parameter types,
         or if `],
					[/* inline code block */ 'i', `arrayLength`],
					[/* text */ 't', ` is negative,
         or if the resulting method handle's type would have
         `],
					[/* reference */ 'r', `java.lang.invoke.MethodHandle#maxarity`, `too many parameters`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the implied `],
					[/* inline code block */ 'i', `asType`],
					[/* text */ 't', ` call fails`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new method handle which spreads its final array argument,
         before calling the original method handle`]
			]
		]],
		[/* method */ 'asType(java.lang.invoke.MethodType)', [
			[/* method description */
				[/* text */ 't', `Produces an adapter method handle which adapts the type of the
 current method handle to a new type.
 The resulting method handle is guaranteed to report a type
 which is equal to the desired new type.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the original type and new type are equal, returns `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 The new method handle, when invoked, will perform the following
 steps:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `Convert the incoming argument list to match the original
     method handle's argument list.
 `],
					[/* block */ 'b', `Invoke the original method handle on the converted argument list.
 `],
					[/* block */ 'b', `Convert any result returned by the original method handle
     to the return type of new method handle.
 `]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method provides the crucial behavioral difference between
 `],
					[/* reference */ 'r', `#invokeExact(java.lang.Object...)`, `invokeExact`],
					[/* text */ 't', ` and plain, inexact `],
					[/* reference */ 'r', `#invoke(java.lang.Object...)`, `invoke`],
					[/* text */ 't', `.
 The two methods
 perform the same steps when the caller's type descriptor exactly matches
 the callee's, but when the types differ, plain `],
					[/* reference */ 'r', `#invoke(java.lang.Object...)`, `invoke`],
					[/* text */ 't', `
 also calls `],
					[/* inline code block */ 'i', `asType`],
					[/* text */ 't', ` (or some internal equivalent) in order
 to match up the caller's and callee's types.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the current method is a variable arity method handle
 argument list conversion may involve the conversion and collection
 of several arguments into an array, as
 `],
					[/* reference */ 'r', `#asVarargsCollector(java.lang.Class)`, `described elsewhere`],
					[/* text */ 't', `.
 In every other case, all conversions are applied `],
					[/* text */ 't', `pairwise`],
					[/* text */ 't', `,
 which means that each argument or return value is converted to
 exactly one argument or return value (or no return value).
 The applied conversions are defined by consulting
 the corresponding component types of the old and new
 method handle types.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Let `],
					[/* text */ 't', `T0`],
					[/* text */ 't', ` and `],
					[/* text */ 't', `T1`],
					[/* text */ 't', ` be corresponding new and old parameter types,
 or old and new return types.  Specifically, for some valid index `],
					[/* inline code block */ 'i', `i`],
					[/* text */ 't', `, let
 `],
					[/* text */ 't', `T0`],
					[/* inline code block */ 'i', `=newType.parameterType(i)`],
					[/* text */ 't', ` and `],
					[/* text */ 't', `T1`],
					[/* inline code block */ 'i', `=this.type().parameterType(i)`],
					[/* text */ 't', `.
 Or else, going the other way for return values, let
 `],
					[/* text */ 't', `T0`],
					[/* inline code block */ 'i', `=this.type().returnType()`],
					[/* text */ 't', ` and `],
					[/* text */ 't', `T1`],
					[/* inline code block */ 'i', `=newType.returnType()`],
					[/* text */ 't', `.
 If the types are the same, the new method handle makes no change
 to the corresponding argument or return value (if any).
 Otherwise, one of the following conversions is applied
 if possible:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* text */ 't', `T0`],
						[/* text */ 't', ` and `],
						[/* text */ 't', `T1`],
						[/* text */ 't', ` are references, then a cast to `],
						[/* text */ 't', `T1`],
						[/* text */ 't', ` is applied.
     (The types do not need to be related in any particular way.
     This is because a dynamic value of null can convert to any reference type.)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* text */ 't', `T0`],
						[/* text */ 't', ` and `],
						[/* text */ 't', `T1`],
						[/* text */ 't', ` are primitives, then a Java method invocation
     conversion (JLS 5.3) is applied, if one exists.
     (Specifically, `],
						[/* text */ 't', `T0`],
						[/* text */ 't', ` must convert to `],
						[/* text */ 't', `T1`],
						[/* text */ 't', ` by a widening primitive conversion.)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* text */ 't', `T0`],
						[/* text */ 't', ` is a primitive and `],
						[/* text */ 't', `T1`],
						[/* text */ 't', ` a reference,
     a Java casting conversion (JLS 5.5) is applied if one exists.
     (Specifically, the value is boxed from `],
						[/* text */ 't', `T0`],
						[/* text */ 't', ` to its wrapper class,
     which is then widened as needed to `],
						[/* text */ 't', `T1`],
						[/* text */ 't', `.)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* text */ 't', `T0`],
						[/* text */ 't', ` is a reference and `],
						[/* text */ 't', `T1`],
						[/* text */ 't', ` a primitive, an unboxing
     conversion will be applied at runtime, possibly followed
     by a Java method invocation conversion (JLS 5.3)
     on the primitive value.  (These are the primitive widening conversions.)
     `],
						[/* text */ 't', `T0`],
						[/* text */ 't', ` must be a wrapper class or a supertype of one.
     (In the case where `],
						[/* text */ 't', `T0`],
						[/* text */ 't', ` is Object, these are the conversions
     allowed by `],
						[/* reference */ 'r', `java.lang.reflect.Method#invoke(java.lang.Object,java.lang.Object...)`, `java.lang.reflect.Method.invoke`],
						[/* text */ 't', `.)
     The unboxing conversion must have a possibility of success, which means that
     if `],
						[/* text */ 't', `T0`],
						[/* text */ 't', ` is not itself a wrapper class, there must exist at least one
     wrapper class `],
						[/* text */ 't', `TW`],
						[/* text */ 't', ` which is a subtype of `],
						[/* text */ 't', `T0`],
						[/* text */ 't', ` and whose unboxed
     primitive value can be widened to `],
						[/* text */ 't', `T1`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the return type `],
						[/* text */ 't', `T1`],
						[/* text */ 't', ` is marked as void, any returned value is discarded
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the return type `],
						[/* text */ 't', `T0`],
						[/* text */ 't', ` is void and `],
						[/* text */ 't', `T1`],
						[/* text */ 't', ` a reference, a null value is introduced.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the return type `],
						[/* text */ 't', `T0`],
						[/* text */ 't', ` is void and `],
						[/* text */ 't', `T1`],
						[/* text */ 't', ` a primitive,
     a zero value is introduced.
 `]
					]]
				]],
				[/* text */ 't', `
 (`],
				[/* text */ 't', `Note:`],
				[/* text */ 't', ` Both `],
				[/* text */ 't', `T0`],
				[/* text */ 't', ` and `],
				[/* text */ 't', `T1`],
				[/* text */ 't', ` may be regarded as static types,
 because neither corresponds specifically to the `],
				[/* text */ 't', `dynamic type`],
				[/* text */ 't', ` of any
 actual argument or return value.)
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 The method handle conversion cannot be made if any one of the required
 pairwise conversions cannot be made.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 At runtime, the conversions applied to reference arguments
 or return values may require additional runtime checks which can fail.
 An unboxing operation may fail because the original reference is null,
 causing a `],
					[/* reference */ 'r', `java.lang.NullPointerException`, `NullPointerException`],
					[/* text */ 't', `.
 An unboxing operation or a reference cast may also fail on a reference
 to an object of the wrong type,
 causing a `],
					[/* reference */ 'r', `java.lang.ClassCastException`, `ClassCastException`],
					[/* text */ 't', `.
 Although an unboxing operation may accept several kinds of wrappers,
 if none are available, a `],
					[/* inline code block */ 'i', `ClassCastException`],
					[/* text */ 't', ` will be thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'newType', [/* parameter description */
					[/* text */ 't', `the expected type of the new method handle`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `newType`],
					[/* text */ 't', ` is a null reference`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the conversion cannot be made`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle which delegates to `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` after performing
           any necessary argument conversions, and arranges for any
           necessary return value conversions`]
			]
		]],
		[/* method */ 'asVarargsCollector(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Makes a `],
				[/* text */ 't', `variable arity`],
				[/* text */ 't', ` adapter which is able to accept
 any number of trailing positional arguments and collect them
 into an array argument.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The type and behavior of the adapter will be the same as
 the type and behavior of the target, except that certain
 `],
					[/* inline code block */ 'i', `invoke`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `asType`],
					[/* text */ 't', ` requests can lead to
 trailing positional arguments being collected into target's
 trailing parameter.
 Also, the
 `],
					[/* reference */ 'r', `java.lang.invoke.MethodType#lastParameterType()`, `last parameter type`],
					[/* text */ 't', `
 of the adapter will be
 `],
					[/* inline code block */ 'i', `arrayType`],
					[/* text */ 't', `, even if the target has a different
 last parameter type.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This transformation may return `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` if the method handle is
 already of variable arity and its trailing parameter type
 is identical to `],
					[/* inline code block */ 'i', `arrayType`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When called with `],
					[/* reference */ 'r', `#invokeExact(java.lang.Object...)`, `invokeExact`],
					[/* text */ 't', `, the adapter invokes
 the target with no argument changes.
 (`],
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This behavior is different from a
 `],
					[/* reference */ 'r', `#asCollector(java.lang.Class,int)`, `fixed arity collector`],
					[/* text */ 't', `,
 since it accepts a whole array of indeterminate length,
 rather than a fixed number of arguments.)
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When called with plain, inexact `],
					[/* reference */ 'r', `#invoke(java.lang.Object...)`, `invoke`],
					[/* text */ 't', `, if the caller
 type is the same as the adapter, the adapter invokes the target as with
 `],
					[/* inline code block */ 'i', `invokeExact`],
					[/* text */ 't', `.
 (This is the normal behavior for `],
					[/* inline code block */ 'i', `invoke`],
					[/* text */ 't', ` when types match.)
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Otherwise, if the caller and adapter arity are the same, and the
 trailing parameter type of the caller is a reference type identical to
 or assignable to the trailing parameter type of the adapter,
 the arguments and return values are converted pairwise,
 as if by `],
					[/* reference */ 'r', `#asType(java.lang.invoke.MethodType)`, `asType`],
					[/* text */ 't', ` on a fixed arity
 method handle.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Otherwise, the arities differ, or the adapter's trailing parameter
 type is not assignable from the corresponding caller type.
 In this case, the adapter replaces all trailing arguments from
 the original trailing argument position onward, by
 a new array of type `],
					[/* inline code block */ 'i', `arrayType`],
					[/* text */ 't', `, whose elements
 comprise (in order) the replaced arguments.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The caller type must provides as least enough arguments,
 and of the correct type, to satisfy the target's requirement for
 positional arguments before the trailing array argument.
 Thus, the caller must supply, at a minimum, `],
					[/* inline code block */ 'i', `N-1`],
					[/* text */ 't', ` arguments,
 where `],
					[/* inline code block */ 'i', `N`],
					[/* text */ 't', ` is the arity of the target.
 Also, there must exist conversions from the incoming arguments
 to the target's arguments.
 As with other uses of plain `],
					[/* inline code block */ 'i', `invoke`],
					[/* text */ 't', `, if these basic
 requirements are not fulfilled, a `],
					[/* inline code block */ 'i', `WrongMethodTypeException`],
					[/* text */ 't', `
 may be thrown.
 `]
				]],
				[/* block */ 'b', `
 In all cases, what the target eventually returns is returned unchanged by the adapter.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 In the final case, it is exactly as if the target method handle were
 temporarily adapted with a `],
					[/* reference */ 'r', `#asCollector(java.lang.Class,int)`, `fixed arity collector`],
					[/* text */ 't', `
 to the arity required by the caller type.
 (As with `],
					[/* inline code block */ 'i', `asCollector`],
					[/* text */ 't', `, if the array length is zero,
 a shared constant may be used instead of a new array.
 If the implied call to `],
					[/* inline code block */ 'i', `asCollector`],
					[/* text */ 't', ` would throw
 an `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `WrongMethodTypeException`],
					[/* text */ 't', `,
 the call to the variable arity adapter must throw
 `],
					[/* inline code block */ 'i', `WrongMethodTypeException`],
					[/* text */ 't', `.)
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The behavior of `],
					[/* reference */ 'r', `#asType(java.lang.invoke.MethodType)`, `asType`],
					[/* text */ 't', ` is also specialized for
 variable arity adapters, to maintain the invariant that
 plain, inexact `],
					[/* inline code block */ 'i', `invoke`],
					[/* text */ 't', ` is always equivalent to an `],
					[/* inline code block */ 'i', `asType`],
					[/* text */ 't', `
 call to adjust the target type, followed by `],
					[/* inline code block */ 'i', `invokeExact`],
					[/* text */ 't', `.
 Therefore, a variable arity adapter responds
 to an `],
					[/* inline code block */ 'i', `asType`],
					[/* text */ 't', ` request by building a fixed arity collector,
 if and only if the adapter and requested type differ either
 in arity or trailing argument type.
 The resulting fixed arity collector has its type further adjusted
 (if necessary) to the requested type by pairwise conversion,
 as if by another application of `],
					[/* inline code block */ 'i', `asType`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When a method handle is obtained by executing an `],
					[/* inline code block */ 'i', `ldc`],
					[/* text */ 't', ` instruction
 of a `],
					[/* inline code block */ 'i', `CONSTANT_MethodHandle`],
					[/* text */ 't', ` constant, and the target method is marked
 as a variable arity method (with the modifier bit `],
					[/* inline code block */ 'i', `0x0080`],
					[/* text */ 't', `),
 the method handle will accept multiple arities, as if the method handle
 constant were created by means of a call to `],
					[/* inline code block */ 'i', `asVarargsCollector`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In order to create a collecting adapter which collects a predetermined
 number of arguments, and whose type reflects this predetermined number,
 use `],
					[/* reference */ 'r', `#asCollector(java.lang.Class,int)`, `asCollector`],
					[/* text */ 't', ` instead.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 No method handle transformations produce new method handles with
 variable arity, unless they are documented as doing so.
 Therefore, besides `],
					[/* inline code block */ 'i', `asVarargsCollector`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `withVarargs`],
					[/* text */ 't', `,
 all methods in `],
					[/* inline code block */ 'i', `MethodHandle`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `MethodHandles`],
					[/* text */ 't', `
 will return a method handle with fixed arity,
 except in the cases where they are specified to return their original
 operand (e.g., `],
					[/* inline code block */ 'i', `asType`],
					[/* text */ 't', ` of the method handle's own type).
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Calling `],
					[/* inline code block */ 'i', `asVarargsCollector`],
					[/* text */ 't', ` on a method handle which is already
 of variable arity will produce a method handle with the same type and behavior.
 It may (or may not) return the original variable arity method handle.
 `]
				]],
				[/* block */ 'b', `
 Here is an example, of a list-making variable arity method handle:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `MethodHandle deepToString = publicLookup()
  .findStatic(Arrays.class, "deepToString", methodType(String.class, Object[].class));
MethodHandle ts1 = deepToString.asVarargsCollector(Object[].class);
assertEquals("[won]",   (String) ts1.invokeExact(    new Object[]{"won"}));
assertEquals("[won]",   (String) ts1.invoke(         new Object[]{"won"}));
assertEquals("[won]",   (String) ts1.invoke(                      "won" ));
assertEquals("[[won]]", (String) ts1.invoke((Object) new Object[]{"won"}));
// findStatic of Arrays.asList(...) produces a variable arity method handle:
MethodHandle asList = publicLookup()
  .findStatic(Arrays.class, "asList", methodType(List.class, Object[].class));
assertEquals(methodType(List.class, Object[].class), asList.type());
assert(asList.isVarargsCollector());
assertEquals("[]", asList.invoke().toString());
assertEquals("[1]", asList.invoke(1).toString());
assertEquals("[two, too]", asList.invoke("two", "too").toString());
String[] argv = { "three", "thee", "tee" };
assertEquals("[three, thee, tee]", asList.invoke(argv).toString());
assertEquals("[three, thee, tee]", asList.invoke((Object[])argv).toString());
List ls = (List) asList.invoke((Object)argv);
assertEquals(1, ls.size());
assertEquals("[three, thee, tee]", Arrays.toString((Object[])ls.get(0)));`]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Discussion:`]
			],
			[/* parameters */
				[/* parameter */ 'arrayType', [/* parameter description */
					[/* text */ 't', `often `],
					[/* inline code block */ 'i', `Object[]`],
					[/* text */ 't', `, the type of the array argument which will collect the arguments`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `arrayType`],
					[/* text */ 't', ` is a null reference`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `arrayType`],
					[/* text */ 't', ` is not an array type
         or `],
					[/* inline code block */ 'i', `arrayType`],
					[/* text */ 't', ` is not assignable to this method handle's trailing parameter type`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new method handle which can collect any number of trailing arguments
         into an array, before calling the original method handle`]
			]
		]],
		[/* method */ 'bindTo(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Binds a value `],
				[/* inline code block */ 'i', `x`],
				[/* text */ 't', ` to the first argument of a method handle, without invoking it.
 The new method handle adapts, as its `],
				[/* text */ 't', `target`],
				[/* text */ 't', `,
 the current method handle by binding it to the given argument.
 The type of the bound handle will be
 the same as the type of the target, except that a single leading
 reference parameter will be omitted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 When called, the bound handle inserts the given value `],
					[/* inline code block */ 'i', `x`],
					[/* text */ 't', `
 as a new leading argument to the target.  The other arguments are
 also passed unchanged.
 What the target eventually returns is returned unchanged by the bound handle.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The reference `],
					[/* inline code block */ 'i', `x`],
					[/* text */ 't', ` must be convertible to the first parameter
 type of the target.
 `]
				]],
				[/* block */ 'b', `Note:`],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` The resulting adapter is never a `],
					[/* reference */ 'r', `#asVarargsCollector(java.lang.Class)`, `variable-arity method handle`],
					[/* text */ 't', `, even if the original target method handle was.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the value to bind to the first argument of the target`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the target does not have a
         leading parameter type that is a reference type`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `x`],
					[/* text */ 't', ` cannot be converted
         to the leading parameter type of the target`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new method handle which prepends the given value to the incoming
         argument list, before calling the original method handle`]
			]
		]],
		[/* method */ 'withVarargs(boolean)', [
			[/* method description */
				[/* text */ 't', `Adapts this method handle to be `],
				[/* reference */ 'r', `#asVarargsCollector(java.lang.Class)`, `variable arity`],
				[/* text */ 't', `
 if the boolean flag is true, else `],
				[/* reference */ 'r', `#asFixedArity()`, `fixed arity`],
				[/* text */ 't', `.
 If the method handle is already of the proper arity mode, it is returned
 unchanged.`]
			],
			[/* parameters */
				[/* parameter */ 'makeVarargs', [/* parameter description */
					[/* text */ 't', `true if the return method handle should have variable arity behavior`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `makeVarargs`],
					[/* text */ 't', ` is true and
         this method handle does not have a trailing array parameter`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle of the same type, with possibly adjusted variable arity behavior`]
			]
		]],
		[/* method */ 'type()', [
			[/* method description */
				[/* text */ 't', `Reports the type of this method handle.
 Every invocation of this method handle via `],
				[/* inline code block */ 'i', `invokeExact`],
				[/* text */ 't', ` must exactly match this type.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the method handle type`]
			]
		]],
		[/* method */ 'invokeWithArguments(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Performs a variable arity invocation, passing the arguments in the given array
 to the method handle, as if via an inexact `],
				[/* reference */ 'r', `#invoke(java.lang.Object...)`, `invoke`],
				[/* text */ 't', ` from a call site
 which mentions only the type `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `, and whose actual argument count is the length
 of the argument array.
 `],
				[/* block */ 'b', `
 Specifically, execution proceeds as if by the following steps,
 although the methods are not guaranteed to be called if the JVM
 can predict their effects.
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `Determine the length of the argument array as `],
						[/* inline code block */ 'i', `N`],
						[/* text */ 't', `.
     For a null reference, `],
						[/* inline code block */ 'i', `N=0`],
						[/* text */ 't', `. `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Collect the `],
						[/* inline code block */ 'i', `N`],
						[/* text */ 't', ` elements of the array as a logical
     argument list, each argument statically typed as an `],
						[/* inline code block */ 'i', `Object`],
						[/* text */ 't', `. `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Determine, as `],
						[/* inline code block */ 'i', `M`],
						[/* text */ 't', `, the parameter count of the type of this
     method handle. `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Determine the general type `],
						[/* inline code block */ 'i', `TN`],
						[/* text */ 't', ` of `],
						[/* inline code block */ 'i', `N`],
						[/* text */ 't', ` arguments or
     `],
						[/* inline code block */ 'i', `M`],
						[/* text */ 't', ` arguments, if smaller than `],
						[/* inline code block */ 'i', `N`],
						[/* text */ 't', `, as
     `],
						[/* inline code block */ 'i', `TN=MethodType.genericMethodType(Math.min(N, M))`],
						[/* text */ 't', `.`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* inline code block */ 'i', `N`],
						[/* text */ 't', ` is greater than `],
						[/* inline code block */ 'i', `M`],
						[/* text */ 't', `, perform the following
     checks and actions to shorten the logical argument list: `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* text */ 't', `Check that this method handle has variable arity with a
         `],
								[/* reference */ 'r', `java.lang.invoke.MethodType#lastParameterType()`, `trailing parameter`],
								[/* text */ 't', `
         of some array type `],
								[/* inline code block */ 'i', `A[]`],
								[/* text */ 't', `.  If not, fail with a
         `],
								[/* inline code block */ 'i', `WrongMethodTypeException`],
								[/* text */ 't', `. `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', `Collect the trailing elements (there are `],
								[/* inline code block */ 'i', `N-M+1`],
								[/* text */ 't', ` of them)
         from the logical argument list into a single array of
         type `],
								[/* inline code block */ 'i', `A[]`],
								[/* text */ 't', `, using `],
								[/* inline code block */ 'i', `asType`],
								[/* text */ 't', ` conversions to
         convert each trailing argument to type `],
								[/* inline code block */ 'i', `A`],
								[/* text */ 't', `. `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', `If any of these conversions proves impossible, fail with either
         a `],
								[/* inline code block */ 'i', `ClassCastException`],
								[/* text */ 't', ` if any trailing element cannot be
         cast to `],
								[/* inline code block */ 'i', `A`],
								[/* text */ 't', ` or a `],
								[/* inline code block */ 'i', `NullPointerException`],
								[/* text */ 't', ` if any
         trailing element is `],
								[/* inline code block */ 'i', `null`],
								[/* text */ 't', ` and `],
								[/* inline code block */ 'i', `A`],
								[/* text */ 't', ` is not a reference
         type. `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', `Replace the logical arguments gathered into the array of
         type `],
								[/* inline code block */ 'i', `A[]`],
								[/* text */ 't', ` with the array itself, thus shortening
         the argument list to length `],
								[/* inline code block */ 'i', `M`],
								[/* text */ 't', `. This final argument
         retains the static type `],
								[/* inline code block */ 'i', `A[]`],
								[/* text */ 't', `.`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', `Adjust the type `],
								[/* inline code block */ 'i', `TN`],
								[/* text */ 't', ` by changing the `],
								[/* inline code block */ 'i', `N`],
								[/* text */ 't', `th
         parameter type from `],
								[/* inline code block */ 'i', `Object`],
								[/* text */ 't', ` to `],
								[/* inline code block */ 'i', `A[]`],
								[/* text */ 't', `.
     `]
							]]
						]],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Force the original target method handle `],
						[/* inline code block */ 'i', `MH0`],
						[/* text */ 't', ` to the
     required type, as `],
						[/* inline code block */ 'i', `MH1 = MH0.asType(TN)`],
						[/* text */ 't', `. `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Spread the argument list into `],
						[/* inline code block */ 'i', `N`],
						[/* text */ 't', ` separate arguments `],
						[/* inline code block */ 'i', `A0, ...`],
						[/* text */ 't', `. `]
					]],
					[/* block */ 'b', `Invoke the type-adjusted method handle on the unpacked arguments:
     MH1.invokeExact(A0, ...). `],
					[/* block */ 'b', [
						[/* text */ 't', `Take the return value as an `],
						[/* inline code block */ 'i', `Object`],
						[/* text */ 't', ` reference. `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the target method handle has variable arity, and the argument list is longer
 than that arity, the excess arguments, starting at the position of the trailing
 array argument, will be gathered (if possible, as if by `],
					[/* inline code block */ 'i', `asType`],
					[/* text */ 't', ` conversions)
 into an array of the appropriate type, and invocation will proceed on the
 shortened argument list.
 In this way, `],
					[/* text */ 't', `jumbo argument lists`],
					[/* text */ 't', ` which would spread into more
 than 254 slots can still be processed uniformly.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Unlike the `],
					[/* reference */ 'r', `#invoke(java.lang.Object...)`, `generic`],
					[/* text */ 't', ` invocation mode, which can
 "recycle" an array argument, passing it directly to the target method,
 this invocation mode `],
					[/* text */ 't', `always`],
					[/* text */ 't', ` creates a new array parameter, even
 if the original array passed to `],
					[/* inline code block */ 'i', `invokeWithArguments`],
					[/* text */ 't', ` would have
 been acceptable as a direct argument to the target method.
 Even if the number `],
					[/* inline code block */ 'i', `M`],
					[/* text */ 't', ` of actual arguments is the arity `],
					[/* inline code block */ 'i', `N`],
					[/* text */ 't', `,
 and the last argument is dynamically a suitable array of type `],
					[/* inline code block */ 'i', `A[]`],
					[/* text */ 't', `,
 it will still be boxed into a new one-element array, since the call
 site statically types the argument as `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', `, not an array type.
 This is not a special rule for this method, but rather a regular effect
 of the `],
					[/* reference */ 'r', `#asVarargsCollector(java.lang.Class)`, `rules for variable-arity invocation`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Because of the action of the `],
					[/* inline code block */ 'i', `asType`],
					[/* text */ 't', ` step, the following argument
 conversions are applied as necessary:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', `reference casting
 `],
					[/* block */ 'b', `unboxing
 `],
					[/* block */ 'b', `widening primitive conversions
 `],
					[/* block */ 'b', `variable arity conversion
 `]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 The result returned by the call is boxed if it is a primitive,
 or forced to null if the return type is void.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Unlike the signature polymorphic methods `],
					[/* inline code block */ 'i', `invokeExact`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `invoke`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `invokeWithArguments`],
					[/* text */ 't', ` can be accessed normally via the Core Reflection API and JNI.
 It can therefore be used as a bridge between native or reflective code and method handles.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'arguments', [/* parameter description */
					[/* text */ 't', `the arguments to pass to the target`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if an argument cannot be converted by reference casting`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the target's type cannot be adjusted to take the given number of `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', ` arguments`]
				]],
				[/* throw */ 'java.lang.Throwable', [/* throw description */
					[/* text */ 't', `anything thrown by the target method invocation`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the result returned by the target`]
			]
		]],
		[/* method */ 'invokeWithArguments(java.util.List)', [
			[/* method description */
				[/* text */ 't', `Performs a variable arity invocation, passing the arguments in the given list
 to the method handle, as if via an inexact `],
				[/* reference */ 'r', `#invoke(java.lang.Object...)`, `invoke`],
				[/* text */ 't', ` from a call site
 which mentions only the type `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `, and whose actual argument count is the length
 of the argument list.
 `],
				[/* block */ 'b', `
 This method is also equivalent to the following code:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `invokeWithArguments(arguments.toArray())`]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Jumbo-sized lists are acceptable if this method handle has variable arity.
 See `],
					[/* reference */ 'r', `#invokeWithArguments(java.lang.Object...)`, `invokeWithArguments(Object[])`],
					[/* text */ 't', ` for details.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'arguments', [/* parameter description */
					[/* text */ 't', `the arguments to pass to the target`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `arguments`],
					[/* text */ 't', ` is a null reference`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if an argument cannot be converted by reference casting`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the target's type cannot be adjusted to take the given number of `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', ` arguments`]
				]],
				[/* throw */ 'java.lang.Throwable', [/* throw description */
					[/* text */ 't', `anything thrown by the target method invocation`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the result returned by the target`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of the method handle,
 starting with the string `],
				[/* inline code block */ 'i', `"MethodHandle"`],
				[/* text */ 't', ` and
 ending with the string representation of the method handle's type.
 In other words, this method returns a string equal to the value of:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `"MethodHandle" + type().toString()`]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', `Note:`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of the method handle`]
			]
		]],
		[/* method */ 'describeConstable()', [
			[/* method description */
				[/* text */ 't', `Return a nominal descriptor for this instance, if one can be
 constructed, or an empty `],
				[/* reference */ 'r', `java.util.Optional`, `Optional`],
				[/* text */ 't', ` if one cannot be.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
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
]);
