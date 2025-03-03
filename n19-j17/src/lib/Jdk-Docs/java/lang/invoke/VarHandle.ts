import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.VarHandle', [
	[/* class description */
		[/* text */ 't', `A VarHandle is a dynamically strongly typed reference to a variable, or to a
 parametrically-defined family of variables, including static fields,
 non-static fields, array elements, or components of an off-heap data
 structure.  Access to such variables is supported under various
 `],
		[/* text */ 't', `access modes`],
		[/* text */ 't', `, including plain read/write access, volatile
 read/write access, and compare-and-set.

 `],
		[/* block */ 'b', `VarHandles are immutable and have no visible state.  VarHandles cannot be
 subclassed by the user.

 `],
		[/* block */ 'b', `A VarHandle has:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `a `],
				[/* reference */ 'r', `#varType()`, `variable type`],
				[/* text */ 't', ` T, the type of every variable referenced
 by this VarHandle; and
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `a list of `],
				[/* reference */ 'r', `#coordinateTypes()`, `coordinate types`],
				[/* inline code block */ 'i', `CT1, CT2, ..., CTn`],
				[/* text */ 't', `, the types of `],
				[/* text */ 't', `coordinate expressions`],
				[/* text */ 't', ` that
 jointly locate a variable referenced by this VarHandle.
 `]
			]]
		]],
		[/* text */ 't', `
 Variable and coordinate types may be primitive or reference, and are
 represented by `],
		[/* inline code block */ 'i', `Class`],
		[/* text */ 't', ` objects.  The list of coordinate types may be
 empty.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Factory methods that produce or `],
			[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup`],
			[/* text */ 't', ` VarHandle instances document the supported variable type and the list
 of coordinate types.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Each access mode is associated with one `],
			[/* text */ 't', `access mode method`],
			[/* text */ 't', `, a
 `],
			[/* reference */ 'r', `.MethodHandle#sigpoly`],
			[/* text */ 't', ` method named
 for the access mode.  When an access mode method is invoked on a VarHandle
 instance, the initial arguments to the invocation are coordinate expressions
 that indicate in precisely which object the variable is to be accessed.
 Trailing arguments to the invocation represent values of importance to the
 access mode.  For example, the various compare-and-set or compare-and-exchange
 access modes require two trailing arguments for the variable's expected value
 and new value.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The arity and types of arguments to the invocation of an access mode
 method are not checked statically.  Instead, each access mode method
 specifies an `],
			[/* reference */ 'r', `#accessModeType(java.lang.invoke.VarHandle.AccessMode)`, `access mode type`],
			[/* text */ 't', `,
 represented as an instance of `],
			[/* reference */ 'r', `java.lang.invoke.MethodType`],
			[/* text */ 't', `, that serves as a kind of
 method signature against which the arguments are checked dynamically.  An
 access mode type gives formal parameter types in terms of the coordinate
 types of a VarHandle instance and the types for values of importance to the
 access mode.  An access mode type also gives a return type, often in terms of
 the variable type of a VarHandle instance.  When an access mode method is
 invoked on a VarHandle instance, the symbolic type descriptor at the
 call site, the run time types of arguments to the invocation, and the run
 time type of the return value, must `],
			[/* text */ 't', `match`],
			[/* text */ 't', ` the types
 given in the access mode type.  A runtime exception will be thrown if the
 match fails.

 For example, the access mode method `],
			[/* reference */ 'r', `#compareAndSet(java.lang.Object...)`, `compareAndSet(java.lang.Object...)`],
			[/* text */ 't', ` specifies that if
 its receiver is a VarHandle instance with coordinate types
 `],
			[/* inline code block */ 'i', `CT1, ..., CTn`],
			[/* text */ 't', ` and variable type `],
			[/* inline code block */ 'i', `T`],
			[/* text */ 't', `, then its access mode type
 is `],
			[/* inline code block */ 'i', `(CT1 c1, ..., CTn cn, T expectedValue, T newValue)boolean`],
			[/* text */ 't', `.
 Suppose that a VarHandle instance can access array elements, and that its
 coordinate types are `],
			[/* inline code block */ 'i', `String[]`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `int`],
			[/* text */ 't', ` while its variable type
 is `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', `.  The access mode type for `],
			[/* inline code block */ 'i', `compareAndSet`],
			[/* text */ 't', ` on this
 VarHandle instance would be
 `],
			[/* inline code block */ 'i', `(String[] c1, int c2, String expectedValue, String newValue)boolean`],
			[/* text */ 't', `.
 Such a VarHandle instance may be produced by the
 `],
			[/* reference */ 'r', `.MethodHandles#arrayElementVarHandle(java.lang.Class)`],
			[/* text */ 't', ` and
 access array elements as follows:
 `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `String[] sa = ...
 VarHandle avh = MethodHandles.arrayElementVarHandle(String[].class);
 boolean r = avh.compareAndSet(sa, 10, "expected", "new");`]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Access modes control atomicity and consistency properties.
 `],
			[/* text */ 't', `Plain`],
			[/* text */ 't', ` read (`],
			[/* inline code block */ 'i', `get`],
			[/* text */ 't', `) and write (`],
			[/* inline code block */ 'i', `set`],
			[/* text */ 't', `)
 accesses are guaranteed to be bitwise atomic only for references
 and for primitive values of at most 32 bits, and impose no observable
 ordering constraints with respect to threads other than the
 executing thread. `],
			[/* text */ 't', `Opaque`],
			[/* text */ 't', ` operations are bitwise atomic and
 coherently ordered with respect to accesses to the same variable.
 In addition to obeying Opaque properties, `],
			[/* text */ 't', `Acquire`],
			[/* text */ 't', ` mode
 reads and their subsequent accesses are ordered after matching
 `],
			[/* text */ 't', `Release`],
			[/* text */ 't', ` mode writes and their previous accesses.  In
 addition to obeying Acquire and Release properties, all
 `],
			[/* text */ 't', `Volatile`],
			[/* text */ 't', ` operations are totally ordered with respect to
 each other.

 `]
		]],
		[/* block */ 'b', `Access modes are grouped into the following categories:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `read access modes that get the value of a variable under specified
 memory ordering effects.
 The set of corresponding access mode methods belonging to this group
 consists of the methods
 `],
				[/* reference */ 'r', `#get(java.lang.Object...)`, `get`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#getVolatile(java.lang.Object...)`, `getVolatile`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#getAcquire(java.lang.Object...)`, `getAcquire`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#getOpaque(java.lang.Object...)`, `getOpaque`],
				[/* text */ 't', `.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `write access modes that set the value of a variable under specified
 memory ordering effects.
 The set of corresponding access mode methods belonging to this group
 consists of the methods
 `],
				[/* reference */ 'r', `#set(java.lang.Object...)`, `set`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#setVolatile(java.lang.Object...)`, `setVolatile`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#setRelease(java.lang.Object...)`, `setRelease`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#setOpaque(java.lang.Object...)`, `setOpaque`],
				[/* text */ 't', `.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `atomic update access modes that, for example, atomically compare and set
 the value of a variable under specified memory ordering effects.
 The set of corresponding access mode methods belonging to this group
 consists of the methods
 `],
				[/* reference */ 'r', `#compareAndSet(java.lang.Object...)`, `compareAndSet`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#weakCompareAndSetPlain(java.lang.Object...)`, `weakCompareAndSetPlain`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#weakCompareAndSet(java.lang.Object...)`, `weakCompareAndSet`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#weakCompareAndSetAcquire(java.lang.Object...)`, `weakCompareAndSetAcquire`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#weakCompareAndSetRelease(java.lang.Object...)`, `weakCompareAndSetRelease`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#compareAndExchangeAcquire(java.lang.Object...)`, `compareAndExchangeAcquire`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#compareAndExchange(java.lang.Object...)`, `compareAndExchange`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#compareAndExchangeRelease(java.lang.Object...)`, `compareAndExchangeRelease`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#getAndSet(java.lang.Object...)`, `getAndSet`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#getAndSetAcquire(java.lang.Object...)`, `getAndSetAcquire`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#getAndSetRelease(java.lang.Object...)`, `getAndSetRelease`],
				[/* text */ 't', `.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `numeric atomic update access modes that, for example, atomically get and
 set with addition the value of a variable under specified memory ordering
 effects.
 The set of corresponding access mode methods belonging to this group
 consists of the methods
 `],
				[/* reference */ 'r', `#getAndAdd(java.lang.Object...)`, `getAndAdd`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#getAndAddAcquire(java.lang.Object...)`, `getAndAddAcquire`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#getAndAddRelease(java.lang.Object...)`, `getAndAddRelease`],
				[/* text */ 't', `,
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `bitwise atomic update access modes that, for example, atomically get and
 bitwise OR the value of a variable under specified memory ordering
 effects.
 The set of corresponding access mode methods belonging to this group
 consists of the methods
 `],
				[/* reference */ 'r', `#getAndBitwiseOr(java.lang.Object...)`, `getAndBitwiseOr`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#getAndBitwiseOrAcquire(java.lang.Object...)`, `getAndBitwiseOrAcquire`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#getAndBitwiseOrRelease(java.lang.Object...)`, `getAndBitwiseOrRelease`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#getAndBitwiseAnd(java.lang.Object...)`, `getAndBitwiseAnd`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#getAndBitwiseAndAcquire(java.lang.Object...)`, `getAndBitwiseAndAcquire`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#getAndBitwiseAndRelease(java.lang.Object...)`, `getAndBitwiseAndRelease`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#getAndBitwiseXor(java.lang.Object...)`, `getAndBitwiseXor`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#getAndBitwiseXorAcquire(java.lang.Object...)`, `getAndBitwiseXorAcquire`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#getAndBitwiseXorRelease(java.lang.Object...)`, `getAndBitwiseXorRelease`],
				[/* text */ 't', `.
 `]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Factory methods that produce or `],
			[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup`],
			[/* text */ 't', ` VarHandle instances document the set of access modes that are
 supported, which may also include documenting restrictions based on the
 variable type and whether a variable is read-only.  If an access mode is not
 supported then the corresponding access mode method will on invocation throw
 an `],
			[/* inline code block */ 'i', `UnsupportedOperationException`],
			[/* text */ 't', `.  Factory methods should document
 any additional undeclared exceptions that may be thrown by access mode
 methods.
 The `],
			[/* reference */ 'r', `#get(java.lang.Object...)`, `get`],
			[/* text */ 't', ` access mode is supported for all
 VarHandle instances and the corresponding method never throws
 `],
			[/* inline code block */ 'i', `UnsupportedOperationException`],
			[/* text */ 't', `.
 If a VarHandle references a read-only variable (for example a `],
			[/* inline code block */ 'i', `final`],
			[/* text */ 't', `
 field) then write, atomic update, numeric atomic update, and bitwise atomic
 update access modes are not supported and corresponding methods throw
 `],
			[/* inline code block */ 'i', `UnsupportedOperationException`],
			[/* text */ 't', `.
 Read/write access modes (if supported), with the exception of
 `],
			[/* inline code block */ 'i', `get`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `set`],
			[/* text */ 't', `, provide atomic access for
 reference types and all primitive types.
 Unless stated otherwise in the documentation of a factory method, the access
 modes `],
			[/* inline code block */ 'i', `get`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `set`],
			[/* text */ 't', ` (if supported) provide atomic access for
 reference types and all primitives types, with the exception of `],
			[/* inline code block */ 'i', `long`],
			[/* text */ 't', `
 and `],
			[/* inline code block */ 'i', `double`],
			[/* text */ 't', ` on 32-bit platforms.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Access modes will override any memory ordering effects specified at
 the declaration site of a variable.  For example, a VarHandle accessing
 a field using the `],
			[/* inline code block */ 'i', `get`],
			[/* text */ 't', ` access mode will access the field as
 specified `],
			[/* text */ 't', `by its access mode`],
			[/* text */ 't', ` even if that field is declared
 `],
			[/* inline code block */ 'i', `volatile`],
			[/* text */ 't', `.  When mixed access is performed extreme care should be
 taken since the Java Memory Model may permit surprising results.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `In addition to supporting access to variables under various access modes,
 a set of static methods, referred to as memory fence methods, is also
 provided for fine-grained control of memory ordering.

 The Java Language Specification permits other threads to observe operations
 as if they were executed in orders different than are apparent in program
 source code, subject to constraints arising, for example, from the use of
 locks, `],
			[/* inline code block */ 'i', `volatile`],
			[/* text */ 't', ` fields or VarHandles.  The static methods,
 `],
			[/* reference */ 'r', `#fullFence()`, `fullFence`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `#acquireFence()`, `acquireFence`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#releaseFence()`, `releaseFence`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `#loadLoadFence()`, `loadLoadFence`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `#storeStoreFence()`, `storeStoreFence`],
			[/* text */ 't', `, can also be used to impose
 constraints.  Their specifications, as is the case for certain access modes,
 are phrased in terms of the lack of "reorderings" -- observable ordering
 effects that might otherwise occur if the fence was not present.  More
 precise phrasing of the specification of access mode methods and memory fence
 methods may accompany future updates of the Java Language Specification.

 `]
		]],
		[/* block */ 'b', `Compiling invocation of access mode methods`],
		[/* text */ 't', `
 A Java method call expression naming an access mode method can invoke a
 VarHandle from Java source code.  From the viewpoint of source code, these
 methods can take any arguments and their polymorphic result (if expressed)
 can be cast to any return type.  Formally this is accomplished by giving the
 access mode methods variable arity `],
		[/* inline code block */ 'i', `Object`],
		[/* text */ 't', ` arguments and
 `],
		[/* inline code block */ 'i', `Object`],
		[/* text */ 't', ` return types (if the return type is polymorphic), but they
 have an additional quality called `],
		[/* text */ 't', `signature polymorphism`],
		[/* text */ 't', ` which
 connects this freedom of invocation directly to the JVM execution stack.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 As is usual with virtual methods, source-level calls to access mode methods
 compile to an `],
			[/* inline code block */ 'i', `invokevirtual`],
			[/* text */ 't', ` instruction.  More unusually, the
 compiler must record the actual argument types, and may not perform method
 invocation conversions on the arguments.  Instead, it must generate
 instructions to push them on the stack according to their own unconverted
 types.  The VarHandle object itself will be pushed on the stack before the
 arguments.  The compiler then generates an `],
			[/* inline code block */ 'i', `invokevirtual`],
			[/* text */ 't', ` instruction
 that invokes the access mode method with a symbolic type descriptor which
 describes the argument and return types.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 To issue a complete symbolic type descriptor, the compiler must also
 determine the return type (if polymorphic).  This is based on a cast on the
 method invocation expression, if there is one, or else `],
			[/* inline code block */ 'i', `Object`],
			[/* text */ 't', ` if the
 invocation is an expression, or else `],
			[/* inline code block */ 'i', `void`],
			[/* text */ 't', ` if the invocation is a
 statement.  The cast may be to a primitive type (but not `],
			[/* inline code block */ 'i', `void`],
			[/* text */ 't', `).
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 As a corner case, an uncasted `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` argument is given a symbolic type
 descriptor of `],
			[/* inline code block */ 'i', `java.lang.Void`],
			[/* text */ 't', `.  The ambiguity with the type
 `],
			[/* inline code block */ 'i', `Void`],
			[/* text */ 't', ` is harmless, since there are no references of type `],
			[/* inline code block */ 'i', `Void`],
			[/* text */ 't', `
 except the null reference.


 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Performing invocation of access mode methods`]
		]],
		[/* text */ 't', `
 The first time an `],
		[/* inline code block */ 'i', `invokevirtual`],
		[/* text */ 't', ` instruction is executed it is linked
 by symbolically resolving the names in the instruction and verifying that
 the method call is statically legal.  This also holds for calls to access mode
 methods.  In this case, the symbolic type descriptor emitted by the compiler
 is checked for correct syntax, and names it contains are resolved.  Thus, an
 `],
		[/* inline code block */ 'i', `invokevirtual`],
		[/* text */ 't', ` instruction which invokes an access mode method will
 always link, as long as the symbolic type descriptor is syntactically
 well-formed and the types exist.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 When the `],
			[/* inline code block */ 'i', `invokevirtual`],
			[/* text */ 't', ` is executed after linking, the receiving
 VarHandle's access mode type is first checked by the JVM to ensure that it
 matches the symbolic type descriptor.  If the type
 match fails, it means that the access mode method which the caller is
 invoking is not present on the individual VarHandle being invoked.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Invocation of an access mode method behaves, by default, as if an invocation of
 `],
			[/* reference */ 'r', `.MethodHandle#invoke(java.lang.Object...)`],
			[/* text */ 't', `, where the receiving method handle accepts the
 VarHandle instance as the leading argument.  More specifically, the
 following, where `],
			[/* inline code block */ 'i', `{access-mode}`],
			[/* text */ 't', ` corresponds to the access mode method
 name:
 `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `VarHandle vh = ..
 R r = (R) vh.{access-mode}(p1, p2, ..., pN);`]
		]],
		[/* text */ 't', `
 behaves as if:
 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `VarHandle vh = ..
 VarHandle.AccessMode am = VarHandle.AccessMode.valueFromMethodName("{access-mode}");
 MethodHandle mh = MethodHandles.varHandleExactInvoker(
                       am,
                       vh.accessModeType(am));

 R r = (R) mh.invoke(vh, p1, p2, ..., pN)`]
		]],
		[/* text */ 't', `
 (modulo access mode methods do not declare throwing of `],
		[/* inline code block */ 'i', `Throwable`],
		[/* text */ 't', `).
 This is equivalent to:
 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `MethodHandle mh = MethodHandles.lookup().findVirtual(
                       VarHandle.class,
                       "{access-mode}",
                       MethodType.methodType(R, p1, p2, ..., pN));

 R r = (R) mh.invokeExact(vh, p1, p2, ..., pN)`]
		]],
		[/* text */ 't', `
 where the desired method type is the symbolic type descriptor and a
 `],
		[/* reference */ 'r', `.MethodHandle#invokeExact(java.lang.Object...)`],
		[/* text */ 't', ` is performed, since before invocation of the
 target, the handle will apply reference casts as necessary and box, unbox, or
 widen primitive values, as if by `],
		[/* reference */ 'r', `.MethodHandle#asType(java.lang.invoke.MethodType)`],
		[/* text */ 't', ` (see also
 `],
		[/* reference */ 'r', `.MethodHandles#varHandleInvoker(java.lang.invoke.VarHandle.AccessMode,java.lang.invoke.MethodType)`],
		[/* text */ 't', `).

 More concisely, such behavior is equivalent to:
 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `VarHandle vh = ..
 VarHandle.AccessMode am = VarHandle.AccessMode.valueFromMethodName("{access-mode}");
 MethodHandle mh = vh.toMethodHandle(am);

 R r = (R) mh.invoke(p1, p2, ..., pN)`]
		]],
		[/* text */ 't', `
 Where, in this case, the method handle is bound to the VarHandle instance.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 A VarHandle's invocation behavior can be adjusted (see `],
			[/* reference */ 'r', `#withInvokeExactBehavior()`, `withInvokeExactBehavior()`],
			[/* text */ 't', `) such that invocation of
 an access mode method behaves as if invocation of `],
			[/* reference */ 'r', `.MethodHandle#invokeExact(java.lang.Object...)`],
			[/* text */ 't', `,
 where the receiving method handle accepts the VarHandle instance as the leading argument.
 More specifically, the following, where `],
			[/* inline code block */ 'i', `{access-mode}`],
			[/* text */ 't', ` corresponds to the access mode method
 name:
 `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `VarHandle vh = ..
 R r = (R) vh.{access-mode}(p1, p2, ..., pN);`]
		]],
		[/* text */ 't', `
 behaves as if:
 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `VarHandle vh = ..
 VarHandle.AccessMode am = VarHandle.AccessMode.valueFromMethodName("{access-mode}");
 MethodHandle mh = MethodHandles.varHandleExactInvoker(
                       am,
                       vh.accessModeType(am));

 R r = (R) mh.invokeExact(vh, p1, p2, ..., pN)`]
		]],
		[/* text */ 't', `
 (modulo access mode methods do not declare throwing of `],
		[/* inline code block */ 'i', `Throwable`],
		[/* text */ 't', `).

 More concisely, such behavior is equivalent to:
 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `VarHandle vh = ..
 VarHandle.AccessMode am = VarHandle.AccessMode.valueFromMethodName("{access-mode}");
 MethodHandle mh = vh.toMethodHandle(am);

 R r = (R) mh.invokeExact(p1, p2, ..., pN)`]
		]],
		[/* text */ 't', `
 Where, in this case, the method handle is bound to the VarHandle instance.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Invocation checking`],
		[/* text */ 't', `
 In typical programs, VarHandle access mode type matching will usually
 succeed.  But if a match fails, the JVM will throw a
 `],
		[/* reference */ 'r', `java.lang.invoke.WrongMethodTypeException`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Thus, an access mode type mismatch which might show up as a linkage error
 in a statically typed program can show up as a dynamic
 `],
			[/* inline code block */ 'i', `WrongMethodTypeException`],
			[/* text */ 't', ` in a program which uses VarHandles.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Because access mode types contain "live" `],
			[/* inline code block */ 'i', `Class`],
			[/* text */ 't', ` objects, method type
 matching takes into account both type names and class loaders.
 Thus, even if a VarHandle `],
			[/* inline code block */ 'i', `VH`],
			[/* text */ 't', ` is created in one class loader
 `],
			[/* inline code block */ 'i', `L1`],
			[/* text */ 't', ` and used in another `],
			[/* inline code block */ 'i', `L2`],
			[/* text */ 't', `, VarHandle access mode method
 calls are type-safe, because the caller's symbolic type descriptor, as
 resolved in `],
			[/* inline code block */ 'i', `L2`],
			[/* text */ 't', `, is matched against the original callee method's
 symbolic type descriptor, as resolved in `],
			[/* inline code block */ 'i', `L1`],
			[/* text */ 't', `.  The resolution in
 `],
			[/* inline code block */ 'i', `L1`],
			[/* text */ 't', ` happens when `],
			[/* inline code block */ 'i', `VH`],
			[/* text */ 't', ` is created and its access mode types are
 assigned, while the resolution in `],
			[/* inline code block */ 'i', `L2`],
			[/* text */ 't', ` happens when the
 `],
			[/* inline code block */ 'i', `invokevirtual`],
			[/* text */ 't', ` instruction is linked.
 `]
		]],
		[/* block */ 'b', `
 Apart from type descriptor checks, a VarHandles's capability to
 access it's variables is unrestricted.
 If a VarHandle is formed on a non-public variable by a class that has access
 to that variable, the resulting VarHandle can be used in any place by any
 caller who receives a reference to it.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Unlike with the Core Reflection API, where access is checked every time a
 reflective method is invoked, VarHandle access checking is performed
 `],
			[/* reference */ 'r', `.MethodHandles.Lookup#access`],
			[/* text */ 't', `.
 Thus, VarHandles to non-public variables, or to variables in non-public
 classes, should generally be kept secret.  They should not be passed to
 untrusted code unless their use from the untrusted code would be harmless.


 `]
		]],
		[/* block */ 'b', `VarHandle creation`],
		[/* text */ 't', `
 Java code can create a VarHandle that directly accesses any field that is
 accessible to that code.  This is done via a reflective, capability-based
 API called `],
		[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup`],
		[/* text */ 't', `.
 For example, a VarHandle for a non-static field can be obtained
 from `],
		[/* reference */ 'r', `.MethodHandles.Lookup#findVarHandle(java.lang.Class,java.lang.String,java.lang.Class)`],
		[/* text */ 't', `.
 There is also a conversion method from Core Reflection API objects,
 `],
		[/* reference */ 'r', `.MethodHandles.Lookup#unreflectVarHandle(java.lang.reflect.Field)`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', `
 Access to protected field members is restricted to receivers only of the
 accessing class, or one of its subclasses, and the accessing class must in
 turn be a subclass (or package sibling) of the protected member's defining
 class.  If a VarHandle refers to a protected non-static field of a declaring
 class outside the current package, the receiver argument will be narrowed to
 the type of the accessing class.

 `],
		[/* block */ 'b', `Interoperation between VarHandles and the Core Reflection API`],
		[/* text */ 't', `
 Using factory methods in the `],
		[/* reference */ 'r', `java.lang.invoke.MethodHandles.Lookup`],
		[/* text */ 't', ` API, any field represented by a Core Reflection API object
 can be converted to a behaviorally equivalent VarHandle.
 For example, a reflective `],
		[/* reference */ 'r', `java.lang.reflect.Field`],
		[/* text */ 't', ` can
 be converted to a VarHandle using
 `],
		[/* reference */ 'r', `.MethodHandles.Lookup#unreflectVarHandle(java.lang.reflect.Field)`],
		[/* text */ 't', `.
 The resulting VarHandles generally provide more direct and efficient
 access to the underlying fields.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 As a special case, when the Core Reflection API is used to view the
 signature polymorphic access mode methods in this class, they appear as
 ordinary non-polymorphic methods.  Their reflective appearance, as viewed by
 `],
			[/* reference */ 'r', `java.Class#getDeclaredMethod(java.lang.String,java.lang.Class...)`],
			[/* text */ 't', `,
 is unaffected by their special status in this API.
 For example, `],
			[/* reference */ 'r', `java.Method#getModifiers()`],
			[/* text */ 't', `
 will report exactly those modifier bits required for any similarly
 declared method, including in this case `],
			[/* inline code block */ 'i', `native`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `varargs`],
			[/* text */ 't', `
 bits.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 As with any reflected method, these methods (when reflected) may be invoked
 directly via `],
			[/* reference */ 'r', `java.Method#invoke(java.lang.Object,java.lang.Object...)`],
			[/* text */ 't', `,
 via JNI, or indirectly via
 `],
			[/* reference */ 'r', `.MethodHandles.Lookup#unreflect(java.lang.reflect.Method)`],
			[/* text */ 't', `.
 However, such reflective calls do not result in access mode method
 invocations.  Such a call, if passed the required argument (a single one, of
 type `],
			[/* inline code block */ 'i', `Object[]`],
			[/* text */ 't', `), will ignore the argument and will throw an
 `],
			[/* inline code block */ 'i', `UnsupportedOperationException`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Since `],
			[/* inline code block */ 'i', `invokevirtual`],
			[/* text */ 't', ` instructions can natively invoke VarHandle
 access mode methods under any symbolic type descriptor, this reflective view
 conflicts with the normal presentation of these methods via bytecodes.
 Thus, these native methods, when reflectively viewed by
 `],
			[/* inline code block */ 'i', `Class.getDeclaredMethod`],
			[/* text */ 't', `, may be regarded as placeholders only.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 In order to obtain an invoker method for a particular access mode type,
 use `],
			[/* reference */ 'r', `.MethodHandles#varHandleExactInvoker(java.lang.invoke.VarHandle.AccessMode,java.lang.invoke.MethodType)`],
			[/* text */ 't', ` or
 `],
			[/* reference */ 'r', `.MethodHandles#varHandleInvoker(java.lang.invoke.VarHandle.AccessMode,java.lang.invoke.MethodType)`],
			[/* text */ 't', `.  The
 `],
			[/* reference */ 'r', `.MethodHandles.Lookup#findVirtual(java.lang.Class,java.lang.String,java.lang.invoke.MethodType)`],
			[/* text */ 't', `
 API is also able to return a method handle to call an access mode method for
 any specified access mode type and is equivalent in behavior to
 `],
			[/* reference */ 'r', `.MethodHandles#varHandleInvoker(java.lang.invoke.VarHandle.AccessMode,java.lang.invoke.MethodType)`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', `Interoperation between VarHandles and Java generics`],
		[/* text */ 't', `
 A VarHandle can be obtained for a variable, such as a field, which is
 declared with Java generic types.  As with the Core Reflection API, the
 VarHandle's variable type will be constructed from the erasure of the
 source-level type.  When a VarHandle access mode method is invoked, the
 types
 of its arguments or the return value cast type may be generic types or type
 instances.  If this occurs, the compiler will replace those types by their
 erasures when it constructs the symbolic type descriptor for the
 `],
		[/* inline code block */ 'i', `invokevirtual`],
		[/* text */ 't', ` instruction.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'get(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Returns the value of a variable, with memory semantics of reading as
 if the variable was declared non-`],
				[/* inline code block */ 'i', `volatile`],
				[/* text */ 't', `.  Commonly referred to
 as plain read access.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn)T`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `get`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.GET)`],
					[/* text */ 't', ` on this VarHandle.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This access mode is supported by all VarHandle instances and never
 throws `],
					[/* inline code block */ 'i', `UnsupportedOperationException`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signature-polymorphic result that is the value of the
 variable
 , statically represented using `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a compact textual description of this `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle`],
				[/* text */ 't', `,
 including the type of variable described, and a description of its coordinates.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A compact textual description of this `],
				[/* reference */ 'r', `java.lang.invoke.VarHandle`]
			]
		]],
		[/* method */ 'fullFence()', [
			[/* method description */
				[/* text */ 't', `Ensures that loads and stores before the fence will not be reordered
 with
 loads and stores after the fence.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'describeConstable()', [
			[/* method description */
				[/* text */ 't', `Return a nominal descriptor for this instance, if one can be
 constructed, or an empty `],
				[/* reference */ 'r', `java.util.Optional`],
				[/* text */ 't', ` if one cannot be.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `An `],
				[/* reference */ 'r', `java.util.Optional`],
				[/* text */ 't', ` containing the resulting nominal descriptor,
 or an empty `],
				[/* reference */ 'r', `java.util.Optional`],
				[/* text */ 't', ` if one cannot be constructed.`]
			]
		]],
		[/* method */ 'set(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Sets the value of a variable to the `],
				[/* inline code block */ 'i', `newValue`],
				[/* text */ 't', `, with memory
 semantics of setting as if the variable was declared non-`],
				[/* inline code block */ 'i', `volatile`],
				[/* text */ 't', `
 and non-`],
				[/* inline code block */ 'i', `final`],
				[/* text */ 't', `.  Commonly referred to as plain write access.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T newValue)void`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `set`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.SET)`],
					[/* text */ 't', ` on this VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T newValue)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'varType()', [
			[/* method description */
				[/* text */ 't', `Returns the variable type of variables referenced by this VarHandle.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the variable type of variables referenced by this VarHandle`]
			]
		]],
		[/* method */ 'coordinateTypes()', [
			[/* method description */
				[/* text */ 't', `Returns the coordinate types for this VarHandle.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the coordinate types for this VarHandle. The returned
 list is unmodifiable`]
			]
		]],
		[/* method */ 'accessModeType(java.lang.invoke.VarHandle.AccessMode)', [
			[/* method description */
				[/* text */ 't', `Obtains the access mode type for this VarHandle and a given access mode.

 `],
				[/* block */ 'b', `The access mode type's parameter types will consist of a prefix that
 is the coordinate types of this VarHandle followed by further
 types as defined by the access mode method.
 The access mode type's return type is defined by the return type of the
 access mode method.`]
			],
			[/* parameters */
				[/* parameter */ 'accessMode', [/* parameter description */
					[/* text */ 't', `the access mode, corresponding to the
 signature-polymorphic method of the same name`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the access mode type for the given access mode`]
			]
		]],
		[/* method */ 'isAccessModeSupported(java.lang.invoke.VarHandle.AccessMode)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the given access mode is supported, otherwise
 `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The return of a `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` value for a given access mode indicates
 that an `],
					[/* inline code block */ 'i', `UnsupportedOperationException`],
					[/* text */ 't', ` is thrown on invocation
 of the corresponding access mode method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'accessMode', [/* parameter description */
					[/* text */ 't', `the access mode, corresponding to the
 signature-polymorphic method of the same name`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the given access mode is supported, otherwise
 `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'loadLoadFence()', [
			[/* method description */
				[/* text */ 't', `Ensures that loads before the fence will not be reordered with
 loads after the fence.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'storeStoreFence()', [
			[/* method description */
				[/* text */ 't', `Ensures that stores before the fence will not be reordered with
 stores after the fence.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'hasInvokeExactBehavior()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this VarHandle has `],
				[/* text */ 't', `invoke-exact behavior`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this VarHandle has `],
				[/* text */ 't', `invoke-exact behavior`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getVolatile(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Returns the value of a variable, with memory semantics of reading as if
 the variable was declared `],
				[/* inline code block */ 'i', `volatile`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn)T`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `getVolatile`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.GET_VOLATILE)`],
					[/* text */ 't', ` on this
 VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signature-polymorphic result that is the value of the
 variable
 , statically represented using `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'setVolatile(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Sets the value of a variable to the `],
				[/* inline code block */ 'i', `newValue`],
				[/* text */ 't', `, with memory
 semantics of setting as if the variable was declared `],
				[/* inline code block */ 'i', `volatile`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T newValue)void`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `setVolatile`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.SET_VOLATILE)`],
					[/* text */ 't', ` on this
 VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T newValue)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'getOpaque(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Returns the value of a variable, accessed in program order, but with no
 assurance of memory ordering effects with respect to other threads.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn)T`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `getOpaque`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.GET_OPAQUE)`],
					[/* text */ 't', ` on this
 VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signature-polymorphic result that is the value of the
 variable
 , statically represented using `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'setOpaque(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Sets the value of a variable to the `],
				[/* inline code block */ 'i', `newValue`],
				[/* text */ 't', `, in program order,
 but with no assurance of memory ordering effects with respect to other
 threads.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T newValue)void`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `setOpaque`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.SET_OPAQUE)`],
					[/* text */ 't', ` on this
 VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T newValue)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'getAcquire(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Returns the value of a variable, and ensures that subsequent loads and
 stores are not reordered before this access.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn)T`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `getAcquire`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.GET_ACQUIRE)`],
					[/* text */ 't', ` on this
 VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signature-polymorphic result that is the value of the
 variable
 , statically represented using `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'setRelease(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Sets the value of a variable to the `],
				[/* inline code block */ 'i', `newValue`],
				[/* text */ 't', `, and ensures that
 prior loads and stores are not reordered after this access.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T newValue)void`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `setRelease`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.SET_RELEASE)`],
					[/* text */ 't', ` on this
 VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T newValue)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'compareAndSet(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Atomically sets the value of a variable to the `],
				[/* inline code block */ 'i', `newValue`],
				[/* text */ 't', ` with the
 memory semantics of `],
				[/* reference */ 'r', `#setVolatile(java.lang.Object...)`, `setVolatile(java.lang.Object...)`],
				[/* text */ 't', ` if the variable's current value,
 referred to as the `],
				[/* text */ 't', `witness value`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `==`],
				[/* text */ 't', ` the
 `],
				[/* inline code block */ 'i', `expectedValue`],
				[/* text */ 't', `, as accessed with the memory semantics of
 `],
				[/* reference */ 'r', `#getVolatile(java.lang.Object...)`, `getVolatile(java.lang.Object...)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T expectedValue, T newValue)boolean`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `compareAndSet`],
					[/* text */ 't', ` must match the access mode type that is the result of
 calling `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.COMPARE_AND_SET)`],
					[/* text */ 't', ` on
 this VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T expectedValue, T newValue)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if successful, otherwise `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if the
 witness value was not the same as the `],
				[/* inline code block */ 'i', `expectedValue`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'compareAndExchange(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Atomically sets the value of a variable to the `],
				[/* inline code block */ 'i', `newValue`],
				[/* text */ 't', ` with the
 memory semantics of `],
				[/* reference */ 'r', `#setVolatile(java.lang.Object...)`, `setVolatile(java.lang.Object...)`],
				[/* text */ 't', ` if the variable's current value,
 referred to as the `],
				[/* text */ 't', `witness value`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `==`],
				[/* text */ 't', ` the
 `],
				[/* inline code block */ 'i', `expectedValue`],
				[/* text */ 't', `, as accessed with the memory semantics of
 `],
				[/* reference */ 'r', `#getVolatile(java.lang.Object...)`, `getVolatile(java.lang.Object...)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T expectedValue, T newValue)T`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `compareAndExchange`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.COMPARE_AND_EXCHANGE)`],
					[/* text */ 't', `
 on this VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T expectedValue, T newValue)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type is not
 compatible with the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type is compatible with the
 caller's symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signature-polymorphic result that is the witness value, which
 will be the same as the `],
				[/* inline code block */ 'i', `expectedValue`],
				[/* text */ 't', ` if successful
 , statically represented using `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'compareAndExchangeAcquire(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Atomically sets the value of a variable to the `],
				[/* inline code block */ 'i', `newValue`],
				[/* text */ 't', ` with the
 memory semantics of `],
				[/* reference */ 'r', `#set(java.lang.Object...)`, `set(java.lang.Object...)`],
				[/* text */ 't', ` if the variable's current value,
 referred to as the `],
				[/* text */ 't', `witness value`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `==`],
				[/* text */ 't', ` the
 `],
				[/* inline code block */ 'i', `expectedValue`],
				[/* text */ 't', `, as accessed with the memory semantics of
 `],
				[/* reference */ 'r', `#getAcquire(java.lang.Object...)`, `getAcquire(java.lang.Object...)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T expectedValue, T newValue)T`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `compareAndExchangeAcquire`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.COMPARE_AND_EXCHANGE_ACQUIRE)`],
					[/* text */ 't', ` on
 this VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T expectedValue, T newValue)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signature-polymorphic result that is the witness value, which
 will be the same as the `],
				[/* inline code block */ 'i', `expectedValue`],
				[/* text */ 't', ` if successful
 , statically represented using `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'compareAndExchangeRelease(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Atomically sets the value of a variable to the `],
				[/* inline code block */ 'i', `newValue`],
				[/* text */ 't', ` with the
 memory semantics of `],
				[/* reference */ 'r', `#setRelease(java.lang.Object...)`, `setRelease(java.lang.Object...)`],
				[/* text */ 't', ` if the variable's current value,
 referred to as the `],
				[/* text */ 't', `witness value`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `==`],
				[/* text */ 't', ` the
 `],
				[/* inline code block */ 'i', `expectedValue`],
				[/* text */ 't', `, as accessed with the memory semantics of
 `],
				[/* reference */ 'r', `#get(java.lang.Object...)`, `get(java.lang.Object...)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T expectedValue, T newValue)T`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `compareAndExchangeRelease`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.COMPARE_AND_EXCHANGE_RELEASE)`],
					[/* text */ 't', `
 on this VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T expectedValue, T newValue)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signature-polymorphic result that is the witness value, which
 will be the same as the `],
				[/* inline code block */ 'i', `expectedValue`],
				[/* text */ 't', ` if successful
 , statically represented using `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'weakCompareAndSetPlain(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Possibly atomically sets the value of a variable to the `],
				[/* inline code block */ 'i', `newValue`],
				[/* text */ 't', `
 with the semantics of `],
				[/* reference */ 'r', `#set(java.lang.Object...)`, `set(java.lang.Object...)`],
				[/* text */ 't', ` if the variable's current value,
 referred to as the `],
				[/* text */ 't', `witness value`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `==`],
				[/* text */ 't', ` the
 `],
				[/* inline code block */ 'i', `expectedValue`],
				[/* text */ 't', `, as accessed with the memory semantics of
 `],
				[/* reference */ 'r', `#get(java.lang.Object...)`, `get(java.lang.Object...)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `This operation may fail spuriously (typically, due to memory
 contention) even if the witness value does match the expected value.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T expectedValue, T newValue)boolean`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `weakCompareAndSetPlain`],
					[/* text */ 't', ` must match the access mode type that is the result of
 calling `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.WEAK_COMPARE_AND_SET_PLAIN)`],
					[/* text */ 't', `
 on this VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T expectedValue, T newValue)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if successful, otherwise `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if the
 witness value was not the same as the `],
				[/* inline code block */ 'i', `expectedValue`],
				[/* text */ 't', ` or if this
 operation spuriously failed.`]
			]
		]],
		[/* method */ 'weakCompareAndSet(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Possibly atomically sets the value of a variable to the `],
				[/* inline code block */ 'i', `newValue`],
				[/* text */ 't', `
 with the memory semantics of `],
				[/* reference */ 'r', `#setVolatile(java.lang.Object...)`, `setVolatile(java.lang.Object...)`],
				[/* text */ 't', ` if the variable's
 current value, referred to as the `],
				[/* text */ 't', `witness value`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `==`],
				[/* text */ 't', ` the
 `],
				[/* inline code block */ 'i', `expectedValue`],
				[/* text */ 't', `, as accessed with the memory semantics of
 `],
				[/* reference */ 'r', `#getVolatile(java.lang.Object...)`, `getVolatile(java.lang.Object...)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `This operation may fail spuriously (typically, due to memory
 contention) even if the witness value does match the expected value.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T expectedValue, T newValue)boolean`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `weakCompareAndSet`],
					[/* text */ 't', ` must match the access mode type that is the
 result of calling `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.WEAK_COMPARE_AND_SET)`],
					[/* text */ 't', `
 on this VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T expectedValue, T newValue)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if successful, otherwise `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if the
 witness value was not the same as the `],
				[/* inline code block */ 'i', `expectedValue`],
				[/* text */ 't', ` or if this
 operation spuriously failed.`]
			]
		]],
		[/* method */ 'weakCompareAndSetAcquire(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Possibly atomically sets the value of a variable to the `],
				[/* inline code block */ 'i', `newValue`],
				[/* text */ 't', `
 with the semantics of `],
				[/* reference */ 'r', `#set(java.lang.Object...)`, `set(java.lang.Object...)`],
				[/* text */ 't', ` if the variable's current value,
 referred to as the `],
				[/* text */ 't', `witness value`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `==`],
				[/* text */ 't', ` the
 `],
				[/* inline code block */ 'i', `expectedValue`],
				[/* text */ 't', `, as accessed with the memory semantics of
 `],
				[/* reference */ 'r', `#getAcquire(java.lang.Object...)`, `getAcquire(java.lang.Object...)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `This operation may fail spuriously (typically, due to memory
 contention) even if the witness value does match the expected value.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T expectedValue, T newValue)boolean`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `weakCompareAndSetAcquire`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.WEAK_COMPARE_AND_SET_ACQUIRE)`],
					[/* text */ 't', `
 on this VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T expectedValue, T newValue)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if successful, otherwise `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if the
 witness value was not the same as the `],
				[/* inline code block */ 'i', `expectedValue`],
				[/* text */ 't', ` or if this
 operation spuriously failed.`]
			]
		]],
		[/* method */ 'weakCompareAndSetRelease(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Possibly atomically sets the value of a variable to the `],
				[/* inline code block */ 'i', `newValue`],
				[/* text */ 't', `
 with the semantics of `],
				[/* reference */ 'r', `#setRelease(java.lang.Object...)`, `setRelease(java.lang.Object...)`],
				[/* text */ 't', ` if the variable's current
 value, referred to as the `],
				[/* text */ 't', `witness value`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `==`],
				[/* text */ 't', ` the
 `],
				[/* inline code block */ 'i', `expectedValue`],
				[/* text */ 't', `, as accessed with the memory semantics of
 `],
				[/* reference */ 'r', `#get(java.lang.Object...)`, `get(java.lang.Object...)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `This operation may fail spuriously (typically, due to memory
 contention) even if the witness value does match the expected value.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T expectedValue, T newValue)boolean`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `weakCompareAndSetRelease`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.WEAK_COMPARE_AND_SET_RELEASE)`],
					[/* text */ 't', `
 on this VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T expectedValue, T newValue)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if successful, otherwise `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if the
 witness value was not the same as the `],
				[/* inline code block */ 'i', `expectedValue`],
				[/* text */ 't', ` or if this
 operation spuriously failed.`]
			]
		]],
		[/* method */ 'getAndSet(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Atomically sets the value of a variable to the `],
				[/* inline code block */ 'i', `newValue`],
				[/* text */ 't', ` with the
 memory semantics of `],
				[/* reference */ 'r', `#setVolatile(java.lang.Object...)`, `setVolatile(java.lang.Object...)`],
				[/* text */ 't', ` and returns the variable's
 previous value, as accessed with the memory semantics of
 `],
				[/* reference */ 'r', `#getVolatile(java.lang.Object...)`, `getVolatile(java.lang.Object...)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T newValue)T`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `getAndSet`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.GET_AND_SET)`],
					[/* text */ 't', ` on this
 VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T newValue)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signature-polymorphic result that is the previous value of
 the variable
 , statically represented using `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getAndSetAcquire(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Atomically sets the value of a variable to the `],
				[/* inline code block */ 'i', `newValue`],
				[/* text */ 't', ` with the
 memory semantics of `],
				[/* reference */ 'r', `#set(java.lang.Object...)`, `set(java.lang.Object...)`],
				[/* text */ 't', ` and returns the variable's
 previous value, as accessed with the memory semantics of
 `],
				[/* reference */ 'r', `#getAcquire(java.lang.Object...)`, `getAcquire(java.lang.Object...)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T newValue)T`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `getAndSetAcquire`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.GET_AND_SET_ACQUIRE)`],
					[/* text */ 't', ` on this
 VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T newValue)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signature-polymorphic result that is the previous value of
 the variable
 , statically represented using `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getAndSetRelease(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Atomically sets the value of a variable to the `],
				[/* inline code block */ 'i', `newValue`],
				[/* text */ 't', ` with the
 memory semantics of `],
				[/* reference */ 'r', `#setRelease(java.lang.Object...)`, `setRelease(java.lang.Object...)`],
				[/* text */ 't', ` and returns the variable's
 previous value, as accessed with the memory semantics of
 `],
				[/* reference */ 'r', `#get(java.lang.Object...)`, `get(java.lang.Object...)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T newValue)T`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `getAndSetRelease`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.GET_AND_SET_RELEASE)`],
					[/* text */ 't', ` on this
 VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T newValue)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signature-polymorphic result that is the previous value of
 the variable
 , statically represented using `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getAndAdd(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Atomically adds the `],
				[/* inline code block */ 'i', `value`],
				[/* text */ 't', ` to the current value of a variable with
 the memory semantics of `],
				[/* reference */ 'r', `#setVolatile(java.lang.Object...)`, `setVolatile(java.lang.Object...)`],
				[/* text */ 't', `, and returns the variable's
 previous value, as accessed with the memory semantics of
 `],
				[/* reference */ 'r', `#getVolatile(java.lang.Object...)`, `getVolatile(java.lang.Object...)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T value)T`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `getAndAdd`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.GET_AND_ADD)`],
					[/* text */ 't', ` on this
 VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T value)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signature-polymorphic result that is the previous value of
 the variable
 , statically represented using `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getAndAddAcquire(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Atomically adds the `],
				[/* inline code block */ 'i', `value`],
				[/* text */ 't', ` to the current value of a variable with
 the memory semantics of `],
				[/* reference */ 'r', `#set(java.lang.Object...)`, `set(java.lang.Object...)`],
				[/* text */ 't', `, and returns the variable's
 previous value, as accessed with the memory semantics of
 `],
				[/* reference */ 'r', `#getAcquire(java.lang.Object...)`, `getAcquire(java.lang.Object...)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T value)T`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `getAndAddAcquire`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.GET_AND_ADD_ACQUIRE)`],
					[/* text */ 't', ` on this
 VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T value)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signature-polymorphic result that is the previous value of
 the variable
 , statically represented using `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getAndAddRelease(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Atomically adds the `],
				[/* inline code block */ 'i', `value`],
				[/* text */ 't', ` to the current value of a variable with
 the memory semantics of `],
				[/* reference */ 'r', `#setRelease(java.lang.Object...)`, `setRelease(java.lang.Object...)`],
				[/* text */ 't', `, and returns the variable's
 previous value, as accessed with the memory semantics of
 `],
				[/* reference */ 'r', `#get(java.lang.Object...)`, `get(java.lang.Object...)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T value)T`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `getAndAddRelease`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.GET_AND_ADD_RELEASE)`],
					[/* text */ 't', ` on this
 VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T value)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signature-polymorphic result that is the previous value of
 the variable
 , statically represented using `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getAndBitwiseOr(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Atomically sets the value of a variable to the result of
 bitwise OR between the variable's current value and the `],
				[/* inline code block */ 'i', `mask`],
				[/* text */ 't', `
 with the memory semantics of `],
				[/* reference */ 'r', `#setVolatile(java.lang.Object...)`, `setVolatile(java.lang.Object...)`],
				[/* text */ 't', ` and returns the
 variable's previous value, as accessed with the memory semantics of
 `],
				[/* reference */ 'r', `#getVolatile(java.lang.Object...)`, `getVolatile(java.lang.Object...)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the variable type is the non-integral `],
					[/* inline code block */ 'i', `boolean`],
					[/* text */ 't', ` type then a
 logical OR is performed instead of a bitwise OR.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T mask)T`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `getAndBitwiseOr`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.GET_AND_BITWISE_OR)`],
					[/* text */ 't', ` on this
 VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T mask)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signature-polymorphic result that is the previous value of
 the variable
 , statically represented using `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getAndBitwiseOrAcquire(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Atomically sets the value of a variable to the result of
 bitwise OR between the variable's current value and the `],
				[/* inline code block */ 'i', `mask`],
				[/* text */ 't', `
 with the memory semantics of `],
				[/* reference */ 'r', `#set(java.lang.Object...)`, `set(java.lang.Object...)`],
				[/* text */ 't', ` and returns the
 variable's previous value, as accessed with the memory semantics of
 `],
				[/* reference */ 'r', `#getAcquire(java.lang.Object...)`, `getAcquire(java.lang.Object...)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the variable type is the non-integral `],
					[/* inline code block */ 'i', `boolean`],
					[/* text */ 't', ` type then a
 logical OR is performed instead of a bitwise OR.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T mask)T`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `getAndBitwiseOrAcquire`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.GET_AND_BITWISE_OR_ACQUIRE)`],
					[/* text */ 't', ` on this
 VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T mask)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signature-polymorphic result that is the previous value of
 the variable
 , statically represented using `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getAndBitwiseOrRelease(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Atomically sets the value of a variable to the result of
 bitwise OR between the variable's current value and the `],
				[/* inline code block */ 'i', `mask`],
				[/* text */ 't', `
 with the memory semantics of `],
				[/* reference */ 'r', `#setRelease(java.lang.Object...)`, `setRelease(java.lang.Object...)`],
				[/* text */ 't', ` and returns the
 variable's previous value, as accessed with the memory semantics of
 `],
				[/* reference */ 'r', `#get(java.lang.Object...)`, `get(java.lang.Object...)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the variable type is the non-integral `],
					[/* inline code block */ 'i', `boolean`],
					[/* text */ 't', ` type then a
 logical OR is performed instead of a bitwise OR.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T mask)T`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `getAndBitwiseOrRelease`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.GET_AND_BITWISE_OR_RELEASE)`],
					[/* text */ 't', ` on this
 VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T mask)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signature-polymorphic result that is the previous value of
 the variable
 , statically represented using `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getAndBitwiseAnd(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Atomically sets the value of a variable to the result of
 bitwise AND between the variable's current value and the `],
				[/* inline code block */ 'i', `mask`],
				[/* text */ 't', `
 with the memory semantics of `],
				[/* reference */ 'r', `#setVolatile(java.lang.Object...)`, `setVolatile(java.lang.Object...)`],
				[/* text */ 't', ` and returns the
 variable's previous value, as accessed with the memory semantics of
 `],
				[/* reference */ 'r', `#getVolatile(java.lang.Object...)`, `getVolatile(java.lang.Object...)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the variable type is the non-integral `],
					[/* inline code block */ 'i', `boolean`],
					[/* text */ 't', ` type then a
 logical AND is performed instead of a bitwise AND.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T mask)T`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `getAndBitwiseAnd`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.GET_AND_BITWISE_AND)`],
					[/* text */ 't', ` on this
 VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T mask)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signature-polymorphic result that is the previous value of
 the variable
 , statically represented using `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getAndBitwiseAndAcquire(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Atomically sets the value of a variable to the result of
 bitwise AND between the variable's current value and the `],
				[/* inline code block */ 'i', `mask`],
				[/* text */ 't', `
 with the memory semantics of `],
				[/* reference */ 'r', `#set(java.lang.Object...)`, `set(java.lang.Object...)`],
				[/* text */ 't', ` and returns the
 variable's previous value, as accessed with the memory semantics of
 `],
				[/* reference */ 'r', `#getAcquire(java.lang.Object...)`, `getAcquire(java.lang.Object...)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the variable type is the non-integral `],
					[/* inline code block */ 'i', `boolean`],
					[/* text */ 't', ` type then a
 logical AND is performed instead of a bitwise AND.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T mask)T`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `getAndBitwiseAndAcquire`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.GET_AND_BITWISE_AND_ACQUIRE)`],
					[/* text */ 't', ` on this
 VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T mask)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signature-polymorphic result that is the previous value of
 the variable
 , statically represented using `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getAndBitwiseAndRelease(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Atomically sets the value of a variable to the result of
 bitwise AND between the variable's current value and the `],
				[/* inline code block */ 'i', `mask`],
				[/* text */ 't', `
 with the memory semantics of `],
				[/* reference */ 'r', `#setRelease(java.lang.Object...)`, `setRelease(java.lang.Object...)`],
				[/* text */ 't', ` and returns the
 variable's previous value, as accessed with the memory semantics of
 `],
				[/* reference */ 'r', `#get(java.lang.Object...)`, `get(java.lang.Object...)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the variable type is the non-integral `],
					[/* inline code block */ 'i', `boolean`],
					[/* text */ 't', ` type then a
 logical AND is performed instead of a bitwise AND.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T mask)T`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `getAndBitwiseAndRelease`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.GET_AND_BITWISE_AND_RELEASE)`],
					[/* text */ 't', ` on this
 VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T mask)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signature-polymorphic result that is the previous value of
 the variable
 , statically represented using `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getAndBitwiseXor(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Atomically sets the value of a variable to the result of
 bitwise XOR between the variable's current value and the `],
				[/* inline code block */ 'i', `mask`],
				[/* text */ 't', `
 with the memory semantics of `],
				[/* reference */ 'r', `#setVolatile(java.lang.Object...)`, `setVolatile(java.lang.Object...)`],
				[/* text */ 't', ` and returns the
 variable's previous value, as accessed with the memory semantics of
 `],
				[/* reference */ 'r', `#getVolatile(java.lang.Object...)`, `getVolatile(java.lang.Object...)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the variable type is the non-integral `],
					[/* inline code block */ 'i', `boolean`],
					[/* text */ 't', ` type then a
 logical XOR is performed instead of a bitwise XOR.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T mask)T`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `getAndBitwiseXor`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.GET_AND_BITWISE_XOR)`],
					[/* text */ 't', ` on this
 VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T mask)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signature-polymorphic result that is the previous value of
 the variable
 , statically represented using `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getAndBitwiseXorAcquire(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Atomically sets the value of a variable to the result of
 bitwise XOR between the variable's current value and the `],
				[/* inline code block */ 'i', `mask`],
				[/* text */ 't', `
 with the memory semantics of `],
				[/* reference */ 'r', `#set(java.lang.Object...)`, `set(java.lang.Object...)`],
				[/* text */ 't', ` and returns the
 variable's previous value, as accessed with the memory semantics of
 `],
				[/* reference */ 'r', `#getAcquire(java.lang.Object...)`, `getAcquire(java.lang.Object...)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the variable type is the non-integral `],
					[/* inline code block */ 'i', `boolean`],
					[/* text */ 't', ` type then a
 logical XOR is performed instead of a bitwise XOR.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T mask)T`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `getAndBitwiseXorAcquire`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.GET_AND_BITWISE_XOR_ACQUIRE)`],
					[/* text */ 't', ` on this
 VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T mask)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signature-polymorphic result that is the previous value of
 the variable
 , statically represented using `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getAndBitwiseXorRelease(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Atomically sets the value of a variable to the result of
 bitwise XOR between the variable's current value and the `],
				[/* inline code block */ 'i', `mask`],
				[/* text */ 't', `
 with the memory semantics of `],
				[/* reference */ 'r', `#setRelease(java.lang.Object...)`, `setRelease(java.lang.Object...)`],
				[/* text */ 't', ` and returns the
 variable's previous value, as accessed with the memory semantics of
 `],
				[/* reference */ 'r', `#get(java.lang.Object...)`, `get(java.lang.Object...)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the variable type is the non-integral `],
					[/* inline code block */ 'i', `boolean`],
					[/* text */ 't', ` type then a
 logical XOR is performed instead of a bitwise XOR.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The method signature is of the form `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T mask)T`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The symbolic type descriptor at the call site of `],
					[/* inline code block */ 'i', `getAndBitwiseXorRelease`],
					[/* text */ 't', `
 must match the access mode type that is the result of calling
 `],
					[/* inline code block */ 'i', `accessModeType(VarHandle.AccessMode.GET_AND_BITWISE_XOR_RELEASE)`],
					[/* text */ 't', ` on this
 VarHandle.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the signature-polymorphic parameter list of the form
 `],
					[/* inline code block */ 'i', `(CT1 ct1, ..., CTn ctn, T mask)`],
					[/* text */ 't', `
 , statically represented using varargs.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the access mode is unsupported
 for this VarHandle.`]
				]],
				[/* throw */ 'java.lang.invoke.WrongMethodTypeException', [/* throw description */
					[/* text */ 't', `if the access mode type does not
 match the caller's symbolic type descriptor.`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the access mode type matches the caller's
 symbolic type descriptor, but a reference cast fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signature-polymorphic result that is the previous value of
 the variable
 , statically represented using `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'withInvokeExactBehavior()', [
			[/* method description */
				[/* text */ 't', `Returns a VarHandle, with access to the same variable(s) as this VarHandle, but whose
 invocation behavior of access mode methods is adjusted to
 `],
				[/* text */ 't', `invoke-exact behavior`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 If this VarHandle already has invoke-exact behavior this VarHandle is returned.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Invoking `],
					[/* reference */ 'r', `#hasInvokeExactBehavior()`, `hasInvokeExactBehavior()`],
					[/* text */ 't', ` on the returned var handle
 is guaranteed to return `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a VarHandle with invoke-exact behavior`]
			]
		]],
		[/* method */ 'withInvokeBehavior()', [
			[/* method description */
				[/* text */ 't', `Returns a VarHandle, with access to the same variable(s) as this VarHandle, but whose
 invocation behavior of access mode methods is adjusted to
 `],
				[/* text */ 't', `invoke behavior`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 If this VarHandle already has invoke behavior this VarHandle is returned.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Invoking `],
					[/* reference */ 'r', `#hasInvokeExactBehavior()`, `hasInvokeExactBehavior()`],
					[/* text */ 't', ` on the returned var handle
 is guaranteed to return `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a VarHandle with invoke behavior`]
			]
		]],
		[/* method */ 'toMethodHandle(java.lang.invoke.VarHandle.AccessMode)', [
			[/* method description */
				[/* text */ 't', `Obtains a method handle bound to this VarHandle and the given access
 mode.`]
			],
			[/* parameters */
				[/* parameter */ 'accessMode', [/* parameter description */
					[/* text */ 't', `the access mode, corresponding to the
 signature-polymorphic method of the same name`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a method handle bound to this VarHandle and the given access mode`]
			]
		]],
		[/* method */ 'acquireFence()', [
			[/* method description */
				[/* text */ 't', `Ensures that loads before the fence will not be reordered with loads and
 stores after the fence.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'releaseFence()', [
			[/* method description */
				[/* text */ 't', `Ensures that loads and stores before the fence will not be
 reordered with stores after the fence.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
