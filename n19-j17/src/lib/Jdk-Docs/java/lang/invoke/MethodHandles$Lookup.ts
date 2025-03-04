import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.MethodHandles$Lookup', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* text */ 't', `lookup object`],
		[/* text */ 't', ` is a factory for creating method handles,
 when the creation requires access checking.
 Method handles do not perform
 access checks when they are called, but rather when they are created.
 Therefore, method handle access
 restrictions must be enforced when a method handle is created.
 The caller class against which those restrictions are enforced
 is known as the `],
		[/* reference */ 'r', `#lookupClass()`, `lookup class`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 A lookup class which needs to create method handles will call
 `],
			[/* reference */ 'r', `.MethodHandles#lookup()`],
			[/* text */ 't', ` to create a factory for itself.
 When the `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` factory object is created, the identity of the lookup class is
 determined, and securely stored in the `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` object.
 The lookup class (or its delegates) may then use factory methods
 on the `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` object to create method handles for access-checked members.
 This includes all methods, constructors, and fields which are allowed to the lookup class,
 even private ones.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ``],
			[/* text */ 't', `Lookup Factory Methods`]
		]],
		[/* text */ 't', `
 The factory methods on a `],
		[/* inline code block */ 'i', `Lookup`],
		[/* text */ 't', ` object correspond to all major
 use cases for methods, constructors, and fields.
 Each method handle created by a factory method is the functional
 equivalent of a particular `],
		[/* text */ 't', `bytecode behavior`],
		[/* text */ 't', `.
 (Bytecode behaviors are described in section `],
		[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-5.html#jvms-5.4.3.5`, `5.4.3.5`],
		[/* text */ 't', ` of
 the Java Virtual Machine Specification.)
 Here is a summary of the correspondence between these factory methods and
 the behavior of the resulting method handles:
 `],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ``],
						[/* text */ 't', `lookup expression`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `member`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `bytecode behavior`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* reference */ 'r', `#findGetter(java.lang.Class,java.lang.String,java.lang.Class)`, `lookup.findGetter(C.class,"f",FT.class)`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `FT f;`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `(T) this.f;`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* reference */ 'r', `#findStaticGetter(java.lang.Class,java.lang.String,java.lang.Class)`, `lookup.findStaticGetter(C.class,"f",FT.class)`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `static`],
						[/* new line */ 'n'],
						[/* inline code block */ 'i', `FT f;`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `(FT) C.f;`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* reference */ 'r', `#findSetter(java.lang.Class,java.lang.String,java.lang.Class)`, `lookup.findSetter(C.class,"f",FT.class)`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `FT f;`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `this.f = x;`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* reference */ 'r', `#findStaticSetter(java.lang.Class,java.lang.String,java.lang.Class)`, `lookup.findStaticSetter(C.class,"f",FT.class)`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `static`],
						[/* new line */ 'n'],
						[/* inline code block */ 'i', `FT f;`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `C.f = arg;`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* reference */ 'r', `#findVirtual(java.lang.Class,java.lang.String,java.lang.invoke.MethodType)`, `lookup.findVirtual(C.class,"m",MT)`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `T m(A*);`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `(T) this.m(arg*);`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* reference */ 'r', `#findStatic(java.lang.Class,java.lang.String,java.lang.invoke.MethodType)`, `lookup.findStatic(C.class,"m",MT)`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `static`],
						[/* new line */ 'n'],
						[/* inline code block */ 'i', `T m(A*);`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `(T) C.m(arg*);`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* reference */ 'r', `#findSpecial(java.lang.Class,java.lang.String,java.lang.invoke.MethodType,java.lang.Class)`, `lookup.findSpecial(C.class,"m",MT,this.class)`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `T m(A*);`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `(T) super.m(arg*);`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* reference */ 'r', `#findConstructor(java.lang.Class,java.lang.invoke.MethodType)`, `lookup.findConstructor(C.class,MT)`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `C(A*);`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `new C(arg*);`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* reference */ 'r', `#unreflectGetter(java.lang.reflect.Field)`, `lookup.unreflectGetter(aField)`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `(`],
						[/* inline code block */ 'i', `static`],
						[/* text */ 't', `)?`],
						[/* new line */ 'n'],
						[/* inline code block */ 'i', `FT f;`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `(FT) aField.get(thisOrNull);`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* reference */ 'r', `#unreflectSetter(java.lang.reflect.Field)`, `lookup.unreflectSetter(aField)`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `(`],
						[/* inline code block */ 'i', `static`],
						[/* text */ 't', `)?`],
						[/* new line */ 'n'],
						[/* inline code block */ 'i', `FT f;`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `aField.set(thisOrNull, arg);`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* reference */ 'r', `#unreflect(java.lang.reflect.Method)`, `lookup.unreflect(aMethod)`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `(`],
						[/* inline code block */ 'i', `static`],
						[/* text */ 't', `)?`],
						[/* new line */ 'n'],
						[/* inline code block */ 'i', `T m(A*);`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `(T) aMethod.invoke(thisOrNull, arg*);`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* reference */ 'r', `#unreflectConstructor(java.lang.reflect.Constructor)`, `lookup.unreflectConstructor(aConstructor)`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `C(A*);`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `(C) aConstructor.newInstance(arg*);`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* reference */ 'r', `#unreflectSpecial(java.lang.reflect.Method,java.lang.Class)`, `lookup.unreflectSpecial(aMethod,this.class)`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `T m(A*);`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `(T) super.m(arg*);`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* reference */ 'r', `#findClass(java.lang.String)`, `lookup.findClass("C")`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `class C { ... }`]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `C.class;`]
					]]
				]]
			]],
		],
		[/* text */ 't', `

 Here, the type `],
		[/* inline code block */ 'i', `C`],
		[/* text */ 't', ` is the class or interface being searched for a member,
 documented as a parameter named `],
		[/* inline code block */ 'i', `refc`],
		[/* text */ 't', ` in the lookup methods.
 The method type `],
		[/* inline code block */ 'i', `MT`],
		[/* text */ 't', ` is composed from the return type `],
		[/* inline code block */ 'i', `T`],
		[/* text */ 't', `
 and the sequence of argument types `],
		[/* inline code block */ 'i', `A*`],
		[/* text */ 't', `.
 The constructor also has a sequence of argument types `],
		[/* inline code block */ 'i', `A*`],
		[/* text */ 't', ` and
 is deemed to return the newly-created object of type `],
		[/* inline code block */ 'i', `C`],
		[/* text */ 't', `.
 Both `],
		[/* inline code block */ 'i', `MT`],
		[/* text */ 't', ` and the field type `],
		[/* inline code block */ 'i', `FT`],
		[/* text */ 't', ` are documented as a parameter named `],
		[/* inline code block */ 'i', `type`],
		[/* text */ 't', `.
 The formal parameter `],
		[/* inline code block */ 'i', `this`],
		[/* text */ 't', ` stands for the self-reference of type `],
		[/* inline code block */ 'i', `C`],
		[/* text */ 't', `;
 if it is present, it is always the leading argument to the method handle invocation.
 (In the case of some `],
		[/* inline code block */ 'i', `protected`],
		[/* text */ 't', ` members, `],
		[/* inline code block */ 'i', `this`],
		[/* text */ 't', ` may be
 restricted in type to the lookup class; see below.)
 The name `],
		[/* inline code block */ 'i', `arg`],
		[/* text */ 't', ` stands for all the other method handle arguments.
 In the code examples for the Core Reflection API, the name `],
		[/* inline code block */ 'i', `thisOrNull`],
		[/* text */ 't', `
 stands for a null reference if the accessed method or field is static,
 and `],
		[/* inline code block */ 'i', `this`],
		[/* text */ 't', ` otherwise.
 The names `],
		[/* inline code block */ 'i', `aMethod`],
		[/* text */ 't', `, `],
		[/* inline code block */ 'i', `aField`],
		[/* text */ 't', `, and `],
		[/* inline code block */ 'i', `aConstructor`],
		[/* text */ 't', ` stand
 for reflective objects corresponding to the given members declared in type `],
		[/* inline code block */ 'i', `C`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The bytecode behavior for a `],
			[/* inline code block */ 'i', `findClass`],
			[/* text */ 't', ` operation is a load of a constant class,
 as if by `],
			[/* inline code block */ 'i', `ldc CONSTANT_Class`],
			[/* text */ 't', `.
 The behavior is represented, not as a method handle, but directly as a `],
			[/* inline code block */ 'i', `Class`],
			[/* text */ 't', ` constant.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 In cases where the given member is of variable arity (i.e., a method or constructor)
 the returned method handle will also be of `],
			[/* reference */ 'r', `.MethodHandle#asVarargsCollector(java.lang.Class)`],
			[/* text */ 't', `.
 In all other cases, the returned method handle will be of fixed arity.
 `]
		]],
		[/* block */ 'b', `Discussion:`],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `If `],
				[/* inline code block */ 'i', `C`],
				[/* text */ 't', ` is not symbolically accessible from the lookup class's loader,
 the lookup can still succeed, even when there is no equivalent
 Java expression or bytecoded constant.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Likewise, if `],
				[/* inline code block */ 'i', `T`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `MT`],
				[/* text */ 't', `
 is not symbolically accessible from the lookup class's loader,
 the lookup can still succeed.
 For example, lookups for `],
				[/* inline code block */ 'i', `MethodHandle.invokeExact`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `MethodHandle.invoke`],
				[/* text */ 't', ` will always succeed, regardless of requested type.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `If there is a security manager installed, it can forbid the lookup
 on various grounds (`],
				[/* reference */ 'r', `.MethodHandles.Lookup#secmgr`],
				[/* text */ 't', `).
 By contrast, the `],
				[/* inline code block */ 'i', `ldc`],
				[/* text */ 't', ` instruction on a `],
				[/* inline code block */ 'i', `CONSTANT_MethodHandle`],
				[/* text */ 't', `
 constant is not subject to security manager checks.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `If the looked-up method has a
 `],
				[/* reference */ 'r', `.MethodHandle#maxarity`],
				[/* text */ 't', `,
 the method handle creation may fail with an
 `],
				[/* inline code block */ 'i', `IllegalArgumentException`],
				[/* text */ 't', `, due to the method handle type having
 `],
				[/* reference */ 'r', `.MethodHandle#maxarity`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ``],
			[/* text */ 't', `Access checking`]
		]],
		[/* text */ 't', `
 Access checks are applied in the factory methods of `],
		[/* inline code block */ 'i', `Lookup`],
		[/* text */ 't', `,
 when a method handle is created.
 This is a key difference from the Core Reflection API, since
 `],
		[/* reference */ 'r', `java.Method#invoke(java.lang.Object,java.lang.Object...)`],
		[/* text */ 't', `
 performs access checking against every caller, on every call.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 All access checks start from a `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` object, which
 compares its recorded lookup class against all requests to
 create method handles.
 A single `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` object can be used to create any number
 of access-checked method handles, all checked against a single
 lookup class.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 A `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` object can be shared with other trusted code,
 such as a metaobject protocol.
 A shared `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` object delegates the capability
 to create method handles on private members of the lookup class.
 Even if privileged code uses the `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` object,
 the access checking is confined to the privileges of the
 original lookup class.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 A lookup can fail, because
 the containing class is not accessible to the lookup class, or
 because the desired class member is missing, or because the
 desired class member is not accessible to the lookup class, or
 because the lookup object is not trusted enough to access the member.
 In the case of a field setter function on a `],
			[/* inline code block */ 'i', `final`],
			[/* text */ 't', ` field,
 finality enforcement is treated as a kind of access control,
 and the lookup will fail, except in special cases of
 `],
			[/* reference */ 'r', `#unreflectSetter(java.lang.reflect.Field)`, `Lookup.unreflectSetter`],
			[/* text */ 't', `.
 In any of these cases, a `],
			[/* inline code block */ 'i', `ReflectiveOperationException`],
			[/* text */ 't', ` will be
 thrown from the attempted lookup.  The exact class will be one of
 the following:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', `NoSuchMethodException — if a method is requested but does not exist
 `],
			[/* block */ 'b', `NoSuchFieldException — if a field is requested but does not exist
 `],
			[/* block */ 'b', `IllegalAccessException — if the member exists but an access check fails
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 In general, the conditions under which a method handle may be
 looked up for a method `],
			[/* inline code block */ 'i', `M`],
			[/* text */ 't', ` are no more restrictive than the conditions
 under which the lookup class could have compiled, verified, and resolved a call to `],
			[/* inline code block */ 'i', `M`],
			[/* text */ 't', `.
 Where the JVM would raise exceptions like `],
			[/* inline code block */ 'i', `NoSuchMethodError`],
			[/* text */ 't', `,
 a method handle lookup will generally raise a corresponding
 checked exception, such as `],
			[/* inline code block */ 'i', `NoSuchMethodException`],
			[/* text */ 't', `.
 And the effect of invoking the method handle resulting from the lookup
 is `],
			[/* reference */ 'r', `.MethodHandles.Lookup#equiv`],
			[/* text */ 't', `
 to executing the compiled, verified, and resolved call to `],
			[/* inline code block */ 'i', `M`],
			[/* text */ 't', `.
 The same point is true of fields and constructors.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Discussion:`],
			[/* text */ 't', `
 Access checks only apply to named and reflected methods,
 constructors, and fields.
 Other method handle creation methods, such as
 `],
			[/* reference */ 'r', `.MethodHandle#asType(java.lang.invoke.MethodType)`],
			[/* text */ 't', `,
 do not require any access checks, and are used
 independently of any `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` object.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 If the desired member is `],
			[/* inline code block */ 'i', `protected`],
			[/* text */ 't', `, the usual JVM rules apply,
 including the requirement that the lookup class must either be in the
 same package as the desired member, or must inherit that member.
 (See the Java Virtual Machine Specification, sections `],
			[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.9.2`, `4.9.2`],
			[/* text */ 't', `, `],
			[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-5.html#jvms-5.4.3.5`, `5.4.3.5`],
			[/* text */ 't', `, and `],
			[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-6.html#jvms-6.4`, `6.4`],
			[/* text */ 't', `.)
 In addition, if the desired member is a non-static field or method
 in a different package, the resulting method handle may only be applied
 to objects of the lookup class or one of its subclasses.
 This requirement is enforced by narrowing the type of the leading
 `],
			[/* inline code block */ 'i', `this`],
			[/* text */ 't', ` parameter from `],
			[/* inline code block */ 'i', `C`],
			[/* text */ 't', `
 (which will necessarily be a superclass of the lookup class)
 to the lookup class itself.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The JVM imposes a similar requirement on `],
			[/* inline code block */ 'i', `invokespecial`],
			[/* text */ 't', ` instruction,
 that the receiver argument must match both the resolved method `],
			[/* text */ 't', `and`],
			[/* text */ 't', `
 the current class.  Again, this requirement is enforced by narrowing the
 type of the leading parameter to the resulting method handle.
 (See the Java Virtual Machine Specification, section `],
			[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.10.1.9`, `4.10.1.9`],
			[/* text */ 't', `.)
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The JVM represents constructors and static initializer blocks as internal methods
 with special names (`],
			[/* inline code block */ 'i', `"<init>"`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `"<clinit>"`],
			[/* text */ 't', `).
 The internal syntax of invocation instructions allows them to refer to such internal
 methods as if they were normal methods, but the JVM bytecode verifier rejects them.
 A lookup of such an internal method will produce a `],
			[/* inline code block */ 'i', `NoSuchMethodException`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 If the relationship between nested types is expressed directly through the
 `],
			[/* inline code block */ 'i', `NestHost`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `NestMembers`],
			[/* text */ 't', ` attributes
 (see the Java Virtual Machine Specification, sections `],
			[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.7.28`, `4.7.28`],
			[/* text */ 't', ` and `],
			[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.7.29`, `4.7.29`],
			[/* text */ 't', `),
 then the associated `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` object provides direct access to
 the lookup class and all of its nestmates
 (see `],
			[/* reference */ 'r', `java.Class#getNestHost()`],
			[/* text */ 't', `).
 Otherwise, access between nested classes is obtained by the Java compiler creating
 a wrapper method to access a private method of another class in the same nest.
 For example, a nested class `],
			[/* inline code block */ 'i', `C.D`],
			[/* text */ 't', `
 can access private members within other related classes such as
 `],
			[/* inline code block */ 'i', `C`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `C.D.E`],
			[/* text */ 't', `, or `],
			[/* inline code block */ 'i', `C.B`],
			[/* text */ 't', `,
 but the Java compiler may need to generate wrapper methods in
 those related classes.  In such cases, a `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` object on
 `],
			[/* inline code block */ 'i', `C.E`],
			[/* text */ 't', ` would be unable to access those private members.
 A workaround for this limitation is the `],
			[/* reference */ 'r', `#in(java.lang.Class)`, `Lookup.in`],
			[/* text */ 't', ` method,
 which can transform a lookup on `],
			[/* inline code block */ 'i', `C.E`],
			[/* text */ 't', ` into one on any of those other
 classes, without special elevation of privilege.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The accesses permitted to a given lookup object may be limited,
 according to its set of `],
			[/* reference */ 'r', `#lookupModes()`, `lookupModes`],
			[/* text */ 't', `,
 to a subset of members normally accessible to the lookup class.
 For example, the `],
			[/* reference */ 'r', `.MethodHandles#publicLookup()`],
			[/* text */ 't', `
 method produces a lookup object which is only allowed to access
 public members in public classes of exported packages.
 The caller sensitive method `],
			[/* reference */ 'r', `.MethodHandles#lookup()`],
			[/* text */ 't', `
 produces a lookup object with full capabilities relative to
 its caller class, to emulate all supported bytecode behaviors.
 Also, the `],
			[/* reference */ 'r', `#in(java.lang.Class)`, `Lookup.in`],
			[/* text */ 't', ` method may produce a lookup object
 with fewer access modes than the original lookup object.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ``],
			[/* text */ 't', `Discussion of private and module access:`],
			[/* text */ 't', `
 We say that a lookup has `],
			[/* text */ 't', `private access`],
			[/* text */ 't', `
 if its `],
			[/* reference */ 'r', `#lookupModes()`, `lookup modes`],
			[/* text */ 't', `
 include the possibility of accessing `],
			[/* inline code block */ 'i', `private`],
			[/* text */ 't', ` members
 (which includes the private members of nestmates).
 As documented in the relevant methods elsewhere,
 only lookups with private access possess the following capabilities:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', `access private fields, methods, and constructors of the lookup class and its nestmates
 `],
			[/* block */ 'b', [
				[/* text */ 't', `create method handles which `],
				[/* reference */ 'r', `#findSpecial(java.lang.Class,java.lang.String,java.lang.invoke.MethodType,java.lang.Class)`, `emulate invokespecial`],
				[/* text */ 't', ` instructions
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `avoid `],
				[/* reference */ 'r', `.MethodHandles.Lookup#secmgr`],
				[/* text */ 't', `
     for classes accessible to the lookup class
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `create `],
				[/* reference */ 'r', `#in(java.lang.Class)`, `delegated lookup objects`],
				[/* text */ 't', ` which have private access to other classes
     within the same package member
 `]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 Similarly, a lookup with module access ensures that the original lookup creator was
 a member in the same module as the lookup class.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Private and module access are independently determined modes; a lookup may have
 either or both or neither.  A lookup which possesses both access modes is said to
 possess `],
			[/* reference */ 'r', `#hasFullPrivilegeAccess()`, `full privilege access`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', `original access`],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `create method handles which invoke `],
				[/* reference */ 'r', `.MethodHandles.Lookup#callsens`],
				[/* text */ 't', ` methods,
     such as `],
				[/* inline code block */ 'i', `Class.forName`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `obtain the `],
				[/* reference */ 'r', `.MethodHandles#classData(java.lang.invoke.MethodHandles.Lookup,java.lang.String,java.lang.Class)`],
				[/* text */ 't', ` associated with the lookup class`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 Each of these permissions is a consequence of the fact that a lookup object
 with private access can be securely traced back to an originating class,
 whose `],
			[/* reference */ 'r', `.MethodHandles.Lookup#equiv`],
			[/* text */ 't', ` and Java language access permissions
 can be reliably determined and emulated by method handles.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ``],
			[/* text */ 't', `Cross-module lookups`]
		]],
		[/* text */ 't', `
 When a lookup class in one module `],
		[/* inline code block */ 'i', `M1`],
		[/* text */ 't', ` accesses a class in another module
 `],
		[/* inline code block */ 'i', `M2`],
		[/* text */ 't', `, extra access checking is performed beyond the access mode bits.
 A `],
		[/* inline code block */ 'i', `Lookup`],
		[/* text */ 't', ` with `],
		[/* text */ 't', `PUBLIC`],
		[/* text */ 't', ` mode and a lookup class in `],
		[/* inline code block */ 'i', `M1`],
		[/* text */ 't', `
 can access public types in `],
		[/* inline code block */ 'i', `M2`],
		[/* text */ 't', ` when `],
		[/* inline code block */ 'i', `M2`],
		[/* text */ 't', ` is readable to `],
		[/* inline code block */ 'i', `M1`],
		[/* text */ 't', `
 and when the type is in a package of `],
		[/* inline code block */ 'i', `M2`],
		[/* text */ 't', ` that is exported to
 at least `],
		[/* inline code block */ 'i', `M1`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 A `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` on `],
			[/* inline code block */ 'i', `C`],
			[/* text */ 't', ` can also `],
			[/* text */ 't', `teleport`],
			[/* text */ 't', ` to a target class
 via `],
			[/* reference */ 'r', `#in(java.lang.Class)`, `Lookup.in`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `.MethodHandles#privateLookupIn(java.lang.Class,java.lang.invoke.MethodHandles.Lookup)`],
			[/* text */ 't', ` methods.
 Teleporting across modules will always record the original lookup class as
 the `],
			[/* reference */ 'r', `#previousLookupClass()`, `previous lookup class`],
			[/* text */ 't', `
 and drops `],
			[/* text */ 't', `MODULE`],
			[/* text */ 't', ` access.
 If the target class is in the same module as the lookup class `],
			[/* inline code block */ 'i', `C`],
			[/* text */ 't', `,
 then the target class becomes the new lookup class
 and there is no change to the previous lookup class.
 If the target class is in a different module from `],
			[/* inline code block */ 'i', `M1`],
			[/* text */ 't', ` (`],
			[/* inline code block */ 'i', `C`],
			[/* text */ 't', `'s module),
 `],
			[/* inline code block */ 'i', `C`],
			[/* text */ 't', ` becomes the new previous lookup class
 and the target class becomes the new lookup class.
 In that case, if there was already a previous lookup class in `],
			[/* inline code block */ 'i', `M0`],
			[/* text */ 't', `,
 and it differs from `],
			[/* inline code block */ 'i', `M1`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `M2`],
			[/* text */ 't', `, then the resulting lookup
 drops all privileges.
 For example,
 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `Lookup lookup = MethodHandles.lookup();   // in class C
 Lookup lookup2 = lookup.in(D.class);
 MethodHandle mh = lookup2.findStatic(E.class, "m", MT);`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 The `],
			[/* reference */ 'r', `.MethodHandles#lookup()`],
			[/* text */ 't', ` factory method produces a `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` object
 with `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` previous lookup class.
 `],
			[/* reference */ 'r', `#in(java.lang.Class)`, `lookup.in(D.class)`],
			[/* text */ 't', ` transforms the `],
			[/* inline code block */ 'i', `lookup`],
			[/* text */ 't', ` on class `],
			[/* inline code block */ 'i', `C`],
			[/* text */ 't', `
 to class `],
			[/* inline code block */ 'i', `D`],
			[/* text */ 't', ` without elevation of privileges.
 If `],
			[/* inline code block */ 'i', `C`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `D`],
			[/* text */ 't', ` are in the same module,
 `],
			[/* inline code block */ 'i', `lookup2`],
			[/* text */ 't', ` records `],
			[/* inline code block */ 'i', `D`],
			[/* text */ 't', ` as the new lookup class and keeps the
 same previous lookup class as the original `],
			[/* inline code block */ 'i', `lookup`],
			[/* text */ 't', `, or
 `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` if not present.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 When a `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` teleports from a class
 in one nest to another nest, `],
			[/* inline code block */ 'i', `PRIVATE`],
			[/* text */ 't', ` access is dropped.
 When a `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` teleports from a class in one package to
 another package, `],
			[/* inline code block */ 'i', `PACKAGE`],
			[/* text */ 't', ` access is dropped.
 When a `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` teleports from a class in one module to another module,
 `],
			[/* inline code block */ 'i', `MODULE`],
			[/* text */ 't', ` access is dropped.
 Teleporting across modules drops the ability to access non-exported classes
 in both the module of the new lookup class and the module of the old lookup class
 and the resulting `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` remains only `],
			[/* inline code block */ 'i', `PUBLIC`],
			[/* text */ 't', ` access.
 A `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` can teleport back and forth to a class in the module of
 the lookup class and the module of the previous class lookup.
 Teleporting across modules can only decrease access but cannot increase it.
 Teleporting to some third module drops all accesses.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 In the above example, if `],
			[/* inline code block */ 'i', `C`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `D`],
			[/* text */ 't', ` are in different modules,
 `],
			[/* inline code block */ 'i', `lookup2`],
			[/* text */ 't', ` records `],
			[/* inline code block */ 'i', `D`],
			[/* text */ 't', ` as its lookup class and
 `],
			[/* inline code block */ 'i', `C`],
			[/* text */ 't', ` as its previous lookup class and `],
			[/* inline code block */ 'i', `lookup2`],
			[/* text */ 't', ` has only
 `],
			[/* inline code block */ 'i', `PUBLIC`],
			[/* text */ 't', ` access. `],
			[/* inline code block */ 'i', `lookup2`],
			[/* text */ 't', ` can teleport to other class in
 `],
			[/* inline code block */ 'i', `C`],
			[/* text */ 't', `'s module and `],
			[/* inline code block */ 'i', `D`],
			[/* text */ 't', `'s module.
 If class `],
			[/* inline code block */ 'i', `E`],
			[/* text */ 't', ` is in a third module, `],
			[/* inline code block */ 'i', `lookup2.in(E.class)`],
			[/* text */ 't', ` creates
 a `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` on `],
			[/* inline code block */ 'i', `E`],
			[/* text */ 't', ` with no access and `],
			[/* inline code block */ 'i', `lookup2`],
			[/* text */ 't', `'s lookup
 class `],
			[/* inline code block */ 'i', `D`],
			[/* text */ 't', ` is recorded as its previous lookup class.
 `]
		]],
		[/* block */ 'b', `
 Teleporting across modules restricts access to the public types that
 both the lookup class and the previous lookup class can equally access
 (see below).
 `],
		[/* block */ 'b', [
			[/* reference */ 'r', `.MethodHandles#privateLookupIn(java.lang.Class,java.lang.invoke.MethodHandles.Lookup)`],
			[/* text */ 't', `
 can be used to teleport a `],
			[/* inline code block */ 'i', `lookup`],
			[/* text */ 't', ` from class `],
			[/* inline code block */ 'i', `C`],
			[/* text */ 't', ` to class `],
			[/* inline code block */ 'i', `T`],
			[/* text */ 't', `
 and create a new `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` with `],
			[/* text */ 't', `private access`],
			[/* text */ 't', `
 if the lookup class is allowed to do `],
			[/* text */ 't', `deep reflection`],
			[/* text */ 't', ` on `],
			[/* inline code block */ 'i', `T`],
			[/* text */ 't', `.
 The `],
			[/* inline code block */ 'i', `lookup`],
			[/* text */ 't', ` must have `],
			[/* text */ 't', `MODULE`],
			[/* text */ 't', ` and `],
			[/* text */ 't', `PRIVATE`],
			[/* text */ 't', ` access
 to call `],
			[/* inline code block */ 'i', `privateLookupIn`],
			[/* text */ 't', `.
 A `],
			[/* inline code block */ 'i', `lookup`],
			[/* text */ 't', ` on `],
			[/* inline code block */ 'i', `C`],
			[/* text */ 't', ` in module `],
			[/* inline code block */ 'i', `M1`],
			[/* text */ 't', ` is allowed to do deep reflection
 on all classes in `],
			[/* inline code block */ 'i', `M1`],
			[/* text */ 't', `.  If `],
			[/* inline code block */ 'i', `T`],
			[/* text */ 't', ` is in `],
			[/* inline code block */ 'i', `M1`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `privateLookupIn`],
			[/* text */ 't', `
 produces a new `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` on `],
			[/* inline code block */ 'i', `T`],
			[/* text */ 't', ` with full capabilities.
 A `],
			[/* inline code block */ 'i', `lookup`],
			[/* text */ 't', ` on `],
			[/* inline code block */ 'i', `C`],
			[/* text */ 't', ` is also allowed
 to do deep reflection on `],
			[/* inline code block */ 'i', `T`],
			[/* text */ 't', ` in another module `],
			[/* inline code block */ 'i', `M2`],
			[/* text */ 't', ` if
 `],
			[/* inline code block */ 'i', `M1`],
			[/* text */ 't', ` reads `],
			[/* inline code block */ 'i', `M2`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `M2`],
			[/* reference */ 'r', `java.Module#isOpen(java.lang.String,java.lang.Module)`],
			[/* text */ 't', `
 the package containing `],
			[/* inline code block */ 'i', `T`],
			[/* text */ 't', ` to at least `],
			[/* inline code block */ 'i', `M1`],
			[/* text */ 't', `.
 `],
			[/* inline code block */ 'i', `T`],
			[/* text */ 't', ` becomes the new lookup class and `],
			[/* inline code block */ 'i', `C`],
			[/* text */ 't', ` becomes the new previous
 lookup class and `],
			[/* inline code block */ 'i', `MODULE`],
			[/* text */ 't', ` access is dropped from the resulting `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', `.
 The resulting `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` can be used to do member lookup or teleport
 to another lookup class by calling `],
			[/* reference */ 'r', `#in(java.lang.Class)`, `Lookup::in`],
			[/* text */ 't', `.  But
 it cannot be used to obtain another private `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` by calling
 `],
			[/* reference */ 'r', `.MethodHandles#privateLookupIn(java.lang.Class,java.lang.invoke.MethodHandles.Lookup)`],
			[/* text */ 't', `
 because it has no `],
			[/* inline code block */ 'i', `MODULE`],
			[/* text */ 't', ` access.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ``],
			[/* text */ 't', `Cross-module access checks`]
		]],
		[/* text */ 't', `

 A `],
		[/* inline code block */ 'i', `Lookup`],
		[/* text */ 't', ` with `],
		[/* text */ 't', `PUBLIC`],
		[/* text */ 't', ` or with `],
		[/* text */ 't', `UNCONDITIONAL`],
		[/* text */ 't', ` mode
 allows cross-module access. The access checking is performed with respect
 to both the lookup class and the previous lookup class if present.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 A `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` with `],
			[/* text */ 't', `UNCONDITIONAL`],
			[/* text */ 't', ` mode can access public type
 in all modules when the type is in a package that is `],
			[/* reference */ 'r', `java.Module#isExported(java.lang.String)`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 If a `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` on `],
			[/* inline code block */ 'i', `LC`],
			[/* text */ 't', ` in `],
			[/* inline code block */ 'i', `M1`],
			[/* text */ 't', ` has no previous lookup class,
 the lookup with `],
			[/* text */ 't', `PUBLIC`],
			[/* text */ 't', ` mode can access all public types in modules
 that are readable to `],
			[/* inline code block */ 'i', `M1`],
			[/* text */ 't', ` and the type is in a package that is exported
 at least to `],
			[/* inline code block */ 'i', `M1`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 If a `],
			[/* inline code block */ 'i', `Lookup`],
			[/* text */ 't', ` on `],
			[/* inline code block */ 'i', `LC`],
			[/* text */ 't', ` in `],
			[/* inline code block */ 'i', `M1`],
			[/* text */ 't', ` has a previous lookup class
 `],
			[/* inline code block */ 'i', `PLC`],
			[/* text */ 't', ` on `],
			[/* inline code block */ 'i', `M0`],
			[/* text */ 't', `, the lookup with `],
			[/* text */ 't', `PUBLIC`],
			[/* text */ 't', ` mode can access
 the intersection of all public types that are accessible to `],
			[/* inline code block */ 'i', `M1`],
			[/* text */ 't', `
 with all public types that are accessible to `],
			[/* inline code block */ 'i', `M0`],
			[/* text */ 't', `. `],
			[/* inline code block */ 'i', `M0`],
			[/* text */ 't', `
 reads `],
			[/* inline code block */ 'i', `M1`],
			[/* text */ 't', ` and hence the set of accessible types includes:

 `]
		]],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Equally accessible types to `],
						[/* inline code block */ 'i', `M0`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `M1`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `unconditional-exported packages from `],
						[/* inline code block */ 'i', `M1`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `unconditional-exported packages from `],
						[/* inline code block */ 'i', `M0`],
						[/* text */ 't', ` if `],
						[/* inline code block */ 'i', `M1`],
						[/* text */ 't', ` reads `],
						[/* inline code block */ 'i', `M0`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `unconditional-exported packages from a third module `],
						[/* inline code block */ 'i', `M2`],
						[/* text */ 't', `
 if both `],
						[/* inline code block */ 'i', `M0`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `M1`],
						[/* text */ 't', ` read `],
						[/* inline code block */ 'i', `M2`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `qualified-exported packages from `],
						[/* inline code block */ 'i', `M1`],
						[/* text */ 't', ` to `],
						[/* inline code block */ 'i', `M0`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `qualified-exported packages from `],
						[/* inline code block */ 'i', `M0`],
						[/* text */ 't', ` to `],
						[/* inline code block */ 'i', `M1`],
						[/* text */ 't', `
 if `],
						[/* inline code block */ 'i', `M1`],
						[/* text */ 't', ` reads `],
						[/* inline code block */ 'i', `M0`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `qualified-exported packages from a third module `],
						[/* inline code block */ 'i', `M2`],
						[/* text */ 't', ` to
 both `],
						[/* inline code block */ 'i', `M0`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `M1`],
						[/* text */ 't', ` if both `],
						[/* inline code block */ 'i', `M0`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `M1`],
						[/* text */ 't', ` read `],
						[/* inline code block */ 'i', `M2`]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ``],
			[/* text */ 't', `Access modes`]
		]],
		[/* text */ 't', `

 The table below shows the access modes of a `],
		[/* inline code block */ 'i', `Lookup`],
		[/* text */ 't', ` produced by
 any of the following factory or transformation methods:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* reference */ 'r', `.MethodHandles#lookup()`]
			]],
			[/* block */ 'b', [
				[/* reference */ 'r', `.MethodHandles#publicLookup()`]
			]],
			[/* block */ 'b', [
				[/* reference */ 'r', `.MethodHandles#privateLookupIn(java.lang.Class,java.lang.invoke.MethodHandles.Lookup)`]
			]],
			[/* block */ 'b', [
				[/* reference */ 'r', `#in(java.lang.Class)`, `Lookup::in`]
			]],
			[/* block */ 'b', [
				[/* reference */ 'r', `#dropLookupMode(int)`, `Lookup::dropLookupMode`]
			]]
		]],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Lookup object`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `original`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `protected`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `private`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `package`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `module`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `public`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `CL = MethodHandles.lookup()`],
						[/* text */ 't', ` in `],
						[/* inline code block */ 'i', `C`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `ORI`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PRO`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PRI`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PAC`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `MOD`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `CL.in(C1)`],
						[/* text */ 't', ` same package`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PAC`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `MOD`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `CL.in(C1)`],
						[/* text */ 't', ` same module`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `MOD`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `CL.in(D)`],
						[/* text */ 't', ` different module`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `2R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `CL.in(D).in(C)`],
						[/* text */ 't', ` hop back to module`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `2R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `PRI1 = privateLookupIn(C1,CL)`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PRO`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PRI`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PAC`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `MOD`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `PRI1a = privateLookupIn(C,PRI1)`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PRO`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PRI`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PAC`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `MOD`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `PRI1.in(C1)`],
						[/* text */ 't', ` same package`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PAC`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `MOD`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `PRI1.in(C1)`],
						[/* text */ 't', ` different package`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `MOD`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `PRI1.in(D)`],
						[/* text */ 't', ` different module`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `2R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `PRI1.dropLookupMode(PROTECTED)`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PRI`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PAC`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `MOD`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `PRI1.dropLookupMode(PRIVATE)`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PAC`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `MOD`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `PRI1.dropLookupMode(PACKAGE)`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `MOD`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `PRI1.dropLookupMode(MODULE)`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `PRI1.dropLookupMode(PUBLIC)`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `none`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `PRI2 = privateLookupIn(D,CL)`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PRO`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PRI`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PAC`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `2R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `privateLookupIn(D,PRI1)`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PRO`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PRI`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PAC`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `2R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `privateLookupIn(C,PRI2)`],
						[/* text */ 't', ` fails`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `IAE`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `PRI2.in(D2)`],
						[/* text */ 't', ` same package`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PAC`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `2R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `PRI2.in(D2)`],
						[/* text */ 't', ` different package`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `2R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `PRI2.in(C1)`],
						[/* text */ 't', ` hop back to module`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `2R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `PRI2.in(E)`],
						[/* text */ 't', ` hop to third module`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `none`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `PRI2.dropLookupMode(PROTECTED)`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PRI`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PAC`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `2R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `PRI2.dropLookupMode(PRIVATE)`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PAC`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `2R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `PRI2.dropLookupMode(PACKAGE)`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `2R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `PRI2.dropLookupMode(MODULE)`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `2R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `PRI2.dropLookupMode(PUBLIC)`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `none`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `CL.dropLookupMode(PROTECTED)`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PRI`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PAC`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `MOD`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `CL.dropLookupMode(PRIVATE)`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PAC`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `MOD`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `CL.dropLookupMode(PACKAGE)`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `MOD`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `CL.dropLookupMode(MODULE)`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1R`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `CL.dropLookupMode(PUBLIC)`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `none`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `PUB = publicLookup()`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `U`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `PUB.in(D)`],
						[/* text */ 't', ` different module`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `U`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `PUB.in(D).in(E)`],
						[/* text */ 't', ` third module`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `U`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `PUB.dropLookupMode(UNCONDITIONAL)`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `none`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `privateLookupIn(C1,PUB)`],
						[/* text */ 't', ` fails`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `IAE`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `ANY.in(X)`],
						[/* text */ 't', `, for inaccessible `],
						[/* inline code block */ 'i', `X`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `none`]
					]]
				]]
			]],
		],
		[/* block */ 'b', `
 Notes:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `Class `],
				[/* inline code block */ 'i', `C`],
				[/* text */ 't', ` and class `],
				[/* inline code block */ 'i', `C1`],
				[/* text */ 't', ` are in module `],
				[/* inline code block */ 'i', `M1`],
				[/* text */ 't', `,
     but `],
				[/* inline code block */ 'i', `D`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `D2`],
				[/* text */ 't', ` are in module `],
				[/* inline code block */ 'i', `M2`],
				[/* text */ 't', `, and `],
				[/* inline code block */ 'i', `E`],
				[/* text */ 't', `
     is in module `],
				[/* inline code block */ 'i', `M3`],
				[/* text */ 't', `. `],
				[/* inline code block */ 'i', `X`],
				[/* text */ 't', ` stands for class which is inaccessible
     to the lookup. `],
				[/* inline code block */ 'i', `ANY`],
				[/* text */ 't', ` stands for any of the example lookups.`]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `ORI`],
				[/* text */ 't', ` indicates `],
				[/* text */ 't', `ORIGINAL`],
				[/* text */ 't', ` bit set,
     `],
				[/* inline code block */ 'i', `PRO`],
				[/* text */ 't', ` indicates `],
				[/* text */ 't', `PROTECTED`],
				[/* text */ 't', ` bit set,
     `],
				[/* inline code block */ 'i', `PRI`],
				[/* text */ 't', ` indicates `],
				[/* text */ 't', `PRIVATE`],
				[/* text */ 't', ` bit set,
     `],
				[/* inline code block */ 'i', `PAC`],
				[/* text */ 't', ` indicates `],
				[/* text */ 't', `PACKAGE`],
				[/* text */ 't', ` bit set,
     `],
				[/* inline code block */ 'i', `MOD`],
				[/* text */ 't', ` indicates `],
				[/* text */ 't', `MODULE`],
				[/* text */ 't', ` bit set,
     `],
				[/* inline code block */ 'i', `1R`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `2R`],
				[/* text */ 't', ` indicate `],
				[/* text */ 't', `PUBLIC`],
				[/* text */ 't', ` bit set,
     `],
				[/* inline code block */ 'i', `U`],
				[/* text */ 't', ` indicates `],
				[/* text */ 't', `UNCONDITIONAL`],
				[/* text */ 't', ` bit set,
     `],
				[/* inline code block */ 'i', `IAE`],
				[/* text */ 't', ` indicates `],
				[/* inline code block */ 'i', `IllegalAccessException`],
				[/* text */ 't', ` thrown.`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Public access comes in three kinds:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `unconditional (`],
						[/* inline code block */ 'i', `U`],
						[/* text */ 't', `): the lookup assumes readability.
     The lookup has `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', ` previous lookup class.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `one-module-reads (`],
						[/* inline code block */ 'i', `1R`],
						[/* text */ 't', `): the module access checking is
     performed with respect to the lookup class.  The lookup has `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `
     previous lookup class.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `two-module-reads (`],
						[/* inline code block */ 'i', `2R`],
						[/* text */ 't', `): the module access checking is
     performed with respect to the lookup class and the previous lookup class.
     The lookup has a non-null previous lookup class which is in a
     different module from the current lookup class.
 `]
					]]
				]]
			]],
			[/* block */ 'b', `Any attempt to reach a third module loses all access.`],
			[/* block */ 'b', [
				[/* text */ 't', `If a target class `],
				[/* inline code block */ 'i', `X`],
				[/* text */ 't', ` is not accessible to `],
				[/* inline code block */ 'i', `Lookup::in`],
				[/* text */ 't', `
 all access modes are dropped.`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ``],
			[/* text */ 't', `Security manager interactions`]
		]],
		[/* text */ 't', `
 Although bytecode instructions can only refer to classes in
 a related class loader, this API can search for methods in any
 class, as long as a reference to its `],
		[/* inline code block */ 'i', `Class`],
		[/* text */ 't', ` object is
 available.  Such cross-loader references are also possible with the
 Core Reflection API, and are impossible to bytecode instructions
 such as `],
		[/* inline code block */ 'i', `invokestatic`],
		[/* text */ 't', ` or `],
		[/* inline code block */ 'i', `getfield`],
		[/* text */ 't', `.
 There is a `],
		[/* reference */ 'r', `java.lang.SecurityManager`],
		[/* text */ 't', `
 to allow applications to check such cross-loader references.
 These checks apply to both the `],
		[/* inline code block */ 'i', `MethodHandles.Lookup`],
		[/* text */ 't', ` API
 and the Core Reflection API
 (as found on `],
		[/* reference */ 'r', `java.lang.Class`],
		[/* text */ 't', `).
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 If a security manager is present, member and class lookups are subject to
 additional checks.
 From one to three calls are made to the security manager.
 Any of these calls can refuse access by throwing a
 `],
			[/* reference */ 'r', `java.lang.SecurityException`],
			[/* text */ 't', `.
 Define `],
			[/* inline code block */ 'i', `smgr`],
			[/* text */ 't', ` as the security manager,
 `],
			[/* inline code block */ 'i', `lookc`],
			[/* text */ 't', ` as the lookup class of the current lookup object,
 `],
			[/* inline code block */ 'i', `refc`],
			[/* text */ 't', ` as the containing class in which the member
 is being sought, and `],
			[/* inline code block */ 'i', `defc`],
			[/* text */ 't', ` as the class in which the
 member is actually defined.
 (If a class or other type is being accessed,
 the `],
			[/* inline code block */ 'i', `refc`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `defc`],
			[/* text */ 't', ` values are the class itself.)
 The value `],
			[/* inline code block */ 'i', `lookc`],
			[/* text */ 't', ` is defined as `],
			[/* text */ 't', `not present`],
			[/* text */ 't', `
 if the current lookup object does not have
 `],
			[/* reference */ 'r', `#hasFullPrivilegeAccess()`, `full privilege access`],
			[/* text */ 't', `.
 The calls are made according to the following rules:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `Step 1:`],
				[/* text */ 't', `
     If `],
				[/* inline code block */ 'i', `lookc`],
				[/* text */ 't', ` is not present, or if its class loader is not
     the same as or an ancestor of the class loader of `],
				[/* inline code block */ 'i', `refc`],
				[/* text */ 't', `,
     then `],
				[/* reference */ 'r', `java.SecurityManager#checkPackageAccess(java.lang.String)`],
				[/* text */ 't', ` is called,
     where `],
				[/* inline code block */ 'i', `refcPkg`],
				[/* text */ 't', ` is the package of `],
				[/* inline code block */ 'i', `refc`],
				[/* text */ 't', `.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Step 2a:`],
				[/* text */ 't', `
     If the retrieved member is not public and
     `],
				[/* inline code block */ 'i', `lookc`],
				[/* text */ 't', ` is not present, then
     `],
				[/* reference */ 'r', `java.SecurityManager#checkPermission(java.security.Permission)`],
				[/* text */ 't', `
     with `],
				[/* inline code block */ 'i', `RuntimePermission("accessDeclaredMembers")`],
				[/* text */ 't', ` is called.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Step 2b:`],
				[/* text */ 't', `
     If the retrieved class has a `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` class loader,
     and `],
				[/* inline code block */ 'i', `lookc`],
				[/* text */ 't', ` is not present, then
     `],
				[/* reference */ 'r', `java.SecurityManager#checkPermission(java.security.Permission)`],
				[/* text */ 't', `
     with `],
				[/* inline code block */ 'i', `RuntimePermission("getClassLoader")`],
				[/* text */ 't', ` is called.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Step 3:`],
				[/* text */ 't', `
     If the retrieved member is not public,
     and if `],
				[/* inline code block */ 'i', `lookc`],
				[/* text */ 't', ` is not present,
     and if `],
				[/* inline code block */ 'i', `defc`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `refc`],
				[/* text */ 't', ` are different,
     then `],
				[/* reference */ 'r', `java.SecurityManager#checkPackageAccess(java.lang.String)`],
				[/* text */ 't', ` is called,
     where `],
				[/* inline code block */ 'i', `defcPkg`],
				[/* text */ 't', ` is the package of `],
				[/* inline code block */ 'i', `defc`],
				[/* text */ 't', `.
 `]
			]]
		]],
		[/* text */ 't', `
 Security checks are performed after other access checks have passed.
 Therefore, the above rules presuppose a member or class that is public,
 or else that is being accessed from a lookup class that has
 rights to access the member or class.
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 If a security manager is present and the current lookup object does not have
 `],
			[/* reference */ 'r', `#hasFullPrivilegeAccess()`, `full privilege access`],
			[/* text */ 't', `, then
 `],
			[/* reference */ 'r', `#defineClass(byte%5B%5D)`, `defineClass`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#defineHiddenClass(byte%5B%5D,boolean,java.lang.invoke.MethodHandles.Lookup.ClassOption...)`, `defineHiddenClass`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#defineHiddenClassWithClassData(byte%5B%5D,java.lang.Object,boolean,java.lang.invoke.MethodHandles.Lookup.ClassOption...)`, `defineHiddenClassWithClassData`],
			[/* text */ 't', `
 calls `],
			[/* reference */ 'r', `java.SecurityManager#checkPermission(java.security.Permission)`],
			[/* text */ 't', `
 with `],
			[/* inline code block */ 'i', `RuntimePermission("defineClass")`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ``],
			[/* text */ 't', `Caller sensitive methods`]
		]],
		[/* text */ 't', `
 A small number of Java methods have a special property called caller sensitivity.
 A `],
		[/* text */ 't', `caller-sensitive`],
		[/* text */ 't', ` method can behave differently depending on the
 identity of its immediate caller.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 If a method handle for a caller-sensitive method is requested,
 the general rules for `],
			[/* reference */ 'r', `.MethodHandles.Lookup#equiv`],
			[/* text */ 't', ` apply,
 but they take account of the lookup class in a special way.
 The resulting method handle behaves as if it were called
 from an instruction contained in the lookup class,
 so that the caller-sensitive method detects the lookup class.
 (By contrast, the invoker of the method handle is disregarded.)
 Thus, in the case of caller-sensitive methods,
 different lookup classes may give rise to
 differently behaving method handles.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 In cases where the lookup object is
 `],
			[/* reference */ 'r', `.MethodHandles#publicLookup()`],
			[/* text */ 't', `,
 or some other lookup object without the
 `],
			[/* text */ 't', `original access`],
			[/* text */ 't', `,
 the lookup class is disregarded.
 In such cases, no caller-sensitive method handle can be created,
 access is forbidden, and the lookup fails with an
 `],
			[/* inline code block */ 'i', `IllegalAccessException`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Discussion:`],
			[/* text */ 't', `
 For example, the caller-sensitive method
 `],
			[/* reference */ 'r', `java.Class#forName(java.lang.String)`],
			[/* text */ 't', `
 can return varying classes or throw varying exceptions,
 depending on the class loader of the class that calls it.
 A public lookup of `],
			[/* inline code block */ 'i', `Class.forName`],
			[/* text */ 't', ` will fail, because
 there is no reasonable way to determine its bytecode behavior.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 If an application caches method handles for broad sharing,
 it should use `],
			[/* inline code block */ 'i', `publicLookup()`],
			[/* text */ 't', ` to create them.
 If there is a lookup of `],
			[/* inline code block */ 'i', `Class.forName`],
			[/* text */ 't', `, it will fail,
 and the application must take appropriate action in that case.
 It may be that a later lookup, perhaps during the invocation of a
 bootstrap method, can incorporate the specific identity
 of the caller, making the method accessible.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The function `],
			[/* inline code block */ 'i', `MethodHandles.lookup`],
			[/* text */ 't', ` is caller sensitive
 so that there can be a secure foundation for lookups.
 Nearly all other methods in the JSR 292 API rely on lookup
 objects to check access requests.`]
		]]
	],
	[/* fields */
		[/* field */ 'MODULE', [
			[/* field description */
				[/* text */ 't', `A single-bit mask representing `],
				[/* inline code block */ 'i', `module`],
				[/* text */ 't', ` access,
  which may contribute to the result of `],
				[/* reference */ 'r', `#lookupModes()`, `lookupModes`],
				[/* text */ 't', `.
  The value is `],
				[/* inline code block */ 'i', `0x10`],
				[/* text */ 't', `, which does not correspond meaningfully to
  any particular `],
				[/* reference */ 'r', `java.lang.reflect.Modifier`],
				[/* text */ 't', `.
  In conjunction with the `],
				[/* inline code block */ 'i', `PUBLIC`],
				[/* text */ 't', ` modifier bit, a `],
				[/* inline code block */ 'i', `Lookup`],
				[/* text */ 't', `
  with this lookup mode can access all public types in the module of the
  lookup class and public types in packages exported by other modules
  to the module of the lookup class.
  `],
				[/* block */ 'b', [
					[/* text */ 't', `
  If this lookup mode is set, the `],
					[/* reference */ 'r', `#previousLookupClass()`, `previous lookup class`],
					[/* text */ 't', ` is always `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
		]],
		[/* field */ 'ORIGINAL', [
			[/* field description */
				[/* text */ 't', `A single-bit mask representing `],
				[/* inline code block */ 'i', `original`],
				[/* text */ 't', ` access
  which may contribute to the result of `],
				[/* reference */ 'r', `#lookupModes()`, `lookupModes`],
				[/* text */ 't', `.
  The value is `],
				[/* inline code block */ 'i', `0x40`],
				[/* text */ 't', `, which does not correspond meaningfully to
  any particular `],
				[/* reference */ 'r', `java.lang.reflect.Modifier`],
				[/* text */ 't', `.

  `],
				[/* block */ 'b', [
					[/* text */ 't', `
  If this lookup mode is set, the `],
					[/* inline code block */ 'i', `Lookup`],
					[/* text */ 't', ` object must be
  created by the original lookup class by calling
  `],
					[/* reference */ 'r', `.MethodHandles#lookup()`],
					[/* text */ 't', ` method or by a bootstrap method
  invoked by the VM.  The `],
					[/* inline code block */ 'i', `Lookup`],
					[/* text */ 't', ` object with this lookup
  mode has `],
					[/* reference */ 'r', `#hasFullPrivilegeAccess()`, `full privilege access`],
					[/* text */ 't', `.`]
				]]
			],
		]],
		[/* field */ 'PACKAGE', [
			[/* field description */
				[/* text */ 't', `A single-bit mask representing `],
				[/* inline code block */ 'i', `package`],
				[/* text */ 't', ` access (default access),
  which may contribute to the result of `],
				[/* reference */ 'r', `#lookupModes()`, `lookupModes`],
				[/* text */ 't', `.
  The value is `],
				[/* inline code block */ 'i', `0x08`],
				[/* text */ 't', `, which does not correspond meaningfully to
  any particular `],
				[/* reference */ 'r', `java.lang.reflect.Modifier`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'PRIVATE', [
			[/* field description */
				[/* text */ 't', `A single-bit mask representing `],
				[/* inline code block */ 'i', `private`],
				[/* text */ 't', ` access,
  which may contribute to the result of `],
				[/* reference */ 'r', `#lookupModes()`, `lookupModes`],
				[/* text */ 't', `.
  The value, `],
				[/* inline code block */ 'i', `0x02`],
				[/* text */ 't', `, happens to be the same as the value of the
  `],
				[/* inline code block */ 'i', `private`],
				[/* reference */ 'r', `java.Modifier#PRIVATE`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'PROTECTED', [
			[/* field description */
				[/* text */ 't', `A single-bit mask representing `],
				[/* inline code block */ 'i', `protected`],
				[/* text */ 't', ` access,
  which may contribute to the result of `],
				[/* reference */ 'r', `#lookupModes()`, `lookupModes`],
				[/* text */ 't', `.
  The value, `],
				[/* inline code block */ 'i', `0x04`],
				[/* text */ 't', `, happens to be the same as the value of the
  `],
				[/* inline code block */ 'i', `protected`],
				[/* reference */ 'r', `java.Modifier#PROTECTED`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'PUBLIC', [
			[/* field description */
				[/* text */ 't', `A single-bit mask representing `],
				[/* inline code block */ 'i', `public`],
				[/* text */ 't', ` access,
  which may contribute to the result of `],
				[/* reference */ 'r', `#lookupModes()`, `lookupModes`],
				[/* text */ 't', `.
  The value, `],
				[/* inline code block */ 'i', `0x01`],
				[/* text */ 't', `, happens to be the same as the value of the
  `],
				[/* inline code block */ 'i', `public`],
				[/* reference */ 'r', `java.Modifier#PUBLIC`],
				[/* text */ 't', `.
  `],
				[/* block */ 'b', [
					[/* text */ 't', `
  A `],
					[/* inline code block */ 'i', `Lookup`],
					[/* text */ 't', ` with this lookup mode performs cross-module access check
  with respect to the `],
					[/* reference */ 'r', `#lookupClass()`, `lookup class`],
					[/* text */ 't', ` and
  `],
					[/* reference */ 'r', `#previousLookupClass()`, `previous lookup class`],
					[/* text */ 't', ` if present.`]
				]]
			],
		]],
		[/* field */ 'UNCONDITIONAL', [
			[/* field description */
				[/* text */ 't', `A single-bit mask representing `],
				[/* inline code block */ 'i', `unconditional`],
				[/* text */ 't', ` access
  which may contribute to the result of `],
				[/* reference */ 'r', `#lookupModes()`, `lookupModes`],
				[/* text */ 't', `.
  The value is `],
				[/* inline code block */ 'i', `0x20`],
				[/* text */ 't', `, which does not correspond meaningfully to
  any particular `],
				[/* reference */ 'r', `java.lang.reflect.Modifier`],
				[/* text */ 't', `.
  A `],
				[/* inline code block */ 'i', `Lookup`],
				[/* text */ 't', ` with this lookup mode assumes `],
				[/* reference */ 'r', `java.Module#canRead(java.lang.Module)`],
				[/* text */ 't', `.
  This lookup mode can access all public members of public types
  of all modules when the type is in a package that is `],
				[/* reference */ 'r', `java.Module#isExported(java.lang.String)`],
				[/* text */ 't', `.

  `],
				[/* block */ 'b', [
					[/* text */ 't', `
  If this lookup mode is set, the `],
					[/* reference */ 'r', `#previousLookupClass()`, `previous lookup class`],
					[/* text */ 't', ` is always `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'hasFullPrivilegeAccess()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this lookup has `],
				[/* text */ 't', `full privilege access`],
				[/* text */ 't', `,
 i.e. `],
				[/* inline code block */ 'i', `PRIVATE`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `MODULE`],
				[/* text */ 't', ` access.
 A `],
				[/* inline code block */ 'i', `Lookup`],
				[/* text */ 't', ` object must have full privilege access in order to
 access all members that are allowed to the
 `],
				[/* reference */ 'r', `#lookupClass()`, `lookup class`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this lookup has full privilege access.`]
			]
		]],
		[/* method */ 'hasPrivateAccess()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this lookup has `],
				[/* inline code block */ 'i', `PRIVATE`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `MODULE`],
				[/* text */ 't', ` access.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this lookup has `],
				[/* inline code block */ 'i', `PRIVATE`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `MODULE`],
				[/* text */ 't', ` access.`]
			]
		]],
		[/* method */ 'lookupModes()', [
			[/* method description */
				[/* text */ 't', `Tells which access-protection classes of members this lookup object can produce.
  The result is a bit-mask of the bits
  `],
				[/* text */ 't', `PUBLIC (0x01)`],
				[/* text */ 't', `,
  `],
				[/* text */ 't', `PRIVATE (0x02)`],
				[/* text */ 't', `,
  `],
				[/* text */ 't', `PROTECTED (0x04)`],
				[/* text */ 't', `,
  `],
				[/* text */ 't', `PACKAGE (0x08)`],
				[/* text */ 't', `,
  `],
				[/* text */ 't', `MODULE (0x10)`],
				[/* text */ 't', `,
  `],
				[/* text */ 't', `UNCONDITIONAL (0x20)`],
				[/* text */ 't', `,
  and `],
				[/* text */ 't', `ORIGINAL (0x40)`],
				[/* text */ 't', `.
  `],
				[/* block */ 'b', [
					[/* text */ 't', `
  A freshly-created lookup object
  on the `],
					[/* reference */ 'r', `.MethodHandles#lookup()`],
					[/* text */ 't', ` has
  all possible bits set, except `],
					[/* inline code block */ 'i', `UNCONDITIONAL`],
					[/* text */ 't', `.
  A lookup object on a new lookup class
  `],
					[/* reference */ 'r', `#in(java.lang.Class)`, `created from a previous lookup object`],
					[/* text */ 't', `
  may have some mode bits set to zero.
  Mode bits can also be
  `],
					[/* reference */ 'r', `#dropLookupMode(int)`, `directly cleared`],
					[/* text */ 't', `.
  Once cleared, mode bits cannot be restored from the downgraded lookup object.
  The purpose of this is to restrict access via the new lookup object,
  so that it can access only names which can be reached by the original
  lookup object, and also by the new lookup class.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the lookup modes, which limit the kinds of access performed by this lookup object`]
			]
		]],
		[/* method */ 'accessClass(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Determines if a class can be accessed from the lookup context defined by
 this `],
				[/* inline code block */ 'i', `Lookup`],
				[/* text */ 't', ` object. The static initializer of the class is not run.
 If `],
				[/* inline code block */ 'i', `targetClass`],
				[/* text */ 't', ` is an array class, `],
				[/* inline code block */ 'i', `targetClass`],
				[/* text */ 't', ` is accessible
 if the element type of the array class is accessible.  Otherwise,
 `],
				[/* inline code block */ 'i', `targetClass`],
				[/* text */ 't', ` is determined as accessible as follows.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* inline code block */ 'i', `targetClass`],
					[/* text */ 't', ` is in the same module as the lookup class,
 the lookup class is `],
					[/* inline code block */ 'i', `LC`],
					[/* text */ 't', ` in module `],
					[/* inline code block */ 'i', `M1`],
					[/* text */ 't', ` and
 the previous lookup class is in module `],
					[/* inline code block */ 'i', `M0`],
					[/* text */ 't', ` or
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if not present,
 `],
					[/* inline code block */ 'i', `targetClass`],
					[/* text */ 't', ` is accessible if and only if one of the following is true:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If this lookup has `],
						[/* text */ 't', `PRIVATE`],
						[/* text */ 't', ` access, `],
						[/* inline code block */ 'i', `targetClass`],
						[/* text */ 't', ` is
     `],
						[/* inline code block */ 'i', `LC`],
						[/* text */ 't', ` or other class in the same nest of `],
						[/* inline code block */ 'i', `LC`],
						[/* text */ 't', `.`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If this lookup has `],
						[/* text */ 't', `PACKAGE`],
						[/* text */ 't', ` access, `],
						[/* inline code block */ 'i', `targetClass`],
						[/* text */ 't', ` is
     in the same runtime package of `],
						[/* inline code block */ 'i', `LC`],
						[/* text */ 't', `.`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If this lookup has `],
						[/* text */ 't', `MODULE`],
						[/* text */ 't', ` access, `],
						[/* inline code block */ 'i', `targetClass`],
						[/* text */ 't', ` is
     a public type in `],
						[/* inline code block */ 'i', `M1`],
						[/* text */ 't', `.`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If this lookup has `],
						[/* text */ 't', `PUBLIC`],
						[/* text */ 't', ` access, `],
						[/* inline code block */ 'i', `targetClass`],
						[/* text */ 't', ` is
     a public type in a package exported by `],
						[/* inline code block */ 'i', `M1`],
						[/* text */ 't', ` to at least  `],
						[/* inline code block */ 'i', `M0`],
						[/* text */ 't', `
     if the previous lookup class is present; otherwise, `],
						[/* inline code block */ 'i', `targetClass`],
						[/* text */ 't', `
     is a public type in a package exported by `],
						[/* inline code block */ 'i', `M1`],
						[/* text */ 't', ` unconditionally.`]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Otherwise, if this lookup has `],
					[/* text */ 't', `UNCONDITIONAL`],
					[/* text */ 't', ` access, this lookup
 can access public types in all modules when the type is in a package
 that is exported unconditionally.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Otherwise, `],
					[/* inline code block */ 'i', `targetClass`],
					[/* text */ 't', ` is in a different module from `],
					[/* inline code block */ 'i', `lookupClass`],
					[/* text */ 't', `,
 and if this lookup does not have `],
					[/* inline code block */ 'i', `PUBLIC`],
					[/* text */ 't', ` access, `],
					[/* inline code block */ 'i', `lookupClass`],
					[/* text */ 't', `
 is inaccessible.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Otherwise, if this lookup has no `],
					[/* reference */ 'r', `#previousLookupClass()`, `previous lookup class`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `M1`],
					[/* text */ 't', ` is the module containing `],
					[/* inline code block */ 'i', `lookupClass`],
					[/* text */ 't', ` and
 `],
					[/* inline code block */ 'i', `M2`],
					[/* text */ 't', ` is the module containing `],
					[/* inline code block */ 'i', `targetClass`],
					[/* text */ 't', `,
 then `],
					[/* inline code block */ 'i', `targetClass`],
					[/* text */ 't', ` is accessible if and only if
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `M1`],
						[/* text */ 't', ` reads `],
						[/* inline code block */ 'i', `M2`],
						[/* text */ 't', `, and
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `targetClass`],
						[/* text */ 't', ` is public and in a package exported by
     `],
						[/* inline code block */ 'i', `M2`],
						[/* text */ 't', ` at least to `],
						[/* inline code block */ 'i', `M1`],
						[/* text */ 't', `.
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Otherwise, if this lookup has a `],
					[/* reference */ 'r', `#previousLookupClass()`, `previous lookup class`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `M1`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `M2`],
					[/* text */ 't', ` are as before, and `],
					[/* inline code block */ 'i', `M0`],
					[/* text */ 't', ` is the module
 containing the previous lookup class, then `],
					[/* inline code block */ 'i', `targetClass`],
					[/* text */ 't', ` is accessible
 if and only if one of the following is true:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `targetClass`],
						[/* text */ 't', ` is in `],
						[/* inline code block */ 'i', `M0`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `M1`],
						[/* text */ 't', `
     reads `],
						[/* inline code block */ 'i', `M0`],
						[/* text */ 't', ` and the type is
     in a package that is exported to at least `],
						[/* inline code block */ 'i', `M1`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `targetClass`],
						[/* text */ 't', ` is in `],
						[/* inline code block */ 'i', `M1`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `M0`],
						[/* text */ 't', `
     reads `],
						[/* inline code block */ 'i', `M1`],
						[/* text */ 't', ` and the type is
     in a package that is exported to at least `],
						[/* inline code block */ 'i', `M0`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `targetClass`],
						[/* text */ 't', ` is in a third module `],
						[/* inline code block */ 'i', `M2`],
						[/* text */ 't', ` and both `],
						[/* inline code block */ 'i', `M0`],
						[/* text */ 't', `
     and `],
						[/* inline code block */ 'i', `M1`],
						[/* text */ 't', ` reads `],
						[/* inline code block */ 'i', `M2`],
						[/* text */ 't', ` and the type is in a package
     that is exported to at least both `],
						[/* inline code block */ 'i', `M0`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `M2`],
						[/* text */ 't', `.
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Otherwise, `],
					[/* inline code block */ 'i', `targetClass`],
					[/* text */ 't', ` is not accessible.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'targetClass', [/* parameter description */
					[/* text */ 't', `the class to be access-checked`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if the class is not accessible from the lookup class
 and previous lookup class, if present, using the allowed access modes.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is present and it
                           `],
					[/* reference */ 'r', `.MethodHandles.Lookup#secmgr`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `targetClass`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the class that has been access-checked`]
			]
		]],
		[/* method */ 'defineClass(byte[])', [
			[/* method description */
				[/* text */ 't', `Creates and links a class or interface from `],
				[/* inline code block */ 'i', `bytes`],
				[/* text */ 't', `
 with the same class loader and in the same runtime package and
 `],
				[/* reference */ 'r', `java.security.ProtectionDomain`],
				[/* text */ 't', ` as this lookup's
 `],
				[/* reference */ 'r', `#lookupClass()`, `lookup class`],
				[/* text */ 't', ` as if calling
 `],
				[/* reference */ 'r', `java.ClassLoader#defineClass(java.lang.String,byte[],int,int,java.security.ProtectionDomain)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `#lookupModes()`, `lookup modes`],
					[/* text */ 't', ` for this lookup must include
 `],
					[/* text */ 't', `PACKAGE`],
					[/* text */ 't', ` access as default (package) members will be
 accessible to the class. The `],
					[/* inline code block */ 'i', `PACKAGE`],
					[/* text */ 't', ` lookup mode serves to authenticate
 that the lookup object was created by a caller in the runtime package (or derived
 from a lookup originally created by suitably privileged code to a target class in
 the runtime package). `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `bytes`],
					[/* text */ 't', ` parameter is the class bytes of a valid class file (as defined
 by the `],
					[/* text */ 't', `The Java Virtual Machine Specification`],
					[/* text */ 't', `) with a class name in the
 same package as the lookup class. `]
				]],
				[/* block */ 'b', `The Java Language
 Specification`],
				[/* block */ 'b', [
					[/* text */ 't', ` If there is a security manager and this lookup does not have `],
					[/* reference */ 'r', `#hasFullPrivilegeAccess()`, `full privilege access`],
					[/* text */ 't', `, its `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method
 is first called to check `],
					[/* inline code block */ 'i', `RuntimePermission("defineClass")`],
					[/* text */ 't', `. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'bytes', [/* parameter description */
					[/* text */ 't', `the class bytes`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if this lookup does not have `],
					[/* inline code block */ 'i', `PACKAGE`],
					[/* text */ 't', ` access`]
				]],
				[/* throw */ 'java.lang.ClassFormatError', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `bytes`],
					[/* text */ 't', ` is not a `],
					[/* inline code block */ 'i', `ClassFile`],
					[/* text */ 't', ` structure`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `bytes`],
					[/* text */ 't', ` denotes a class in a different package
 than the lookup class or `],
					[/* inline code block */ 'i', `bytes`],
					[/* text */ 't', ` is not a class or interface
 (`],
					[/* inline code block */ 'i', `ACC_MODULE`],
					[/* text */ 't', ` flag is set in the value of the `],
					[/* inline code block */ 'i', `access_flags`],
					[/* text */ 't', ` item)`]
				]],
				[/* throw */ 'java.lang.VerifyError', [/* throw description */
					[/* text */ 't', `if the newly created class cannot be verified`]
				]],
				[/* throw */ 'java.lang.LinkageError', [/* throw description */
					[/* text */ 't', `if the newly created class cannot be linked for any other reason`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is present and it
                           `],
					[/* reference */ 'r', `.MethodHandles.Lookup#secmgr`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `bytes`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object for the class`]
			]
		]],
		[/* method */ 'ensureInitialized(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Ensures that `],
				[/* inline code block */ 'i', `targetClass`],
				[/* text */ 't', ` has been initialized. The class
 to be initialized must be `],
				[/* reference */ 'r', `#accessClass(java.lang.Class)`, `accessible`],
				[/* text */ 't', `
 to this `],
				[/* inline code block */ 'i', `Lookup`],
				[/* text */ 't', ` object.  This method causes `],
				[/* inline code block */ 'i', `targetClass`],
				[/* text */ 't', `
 to be initialized if it has not been already initialized,
 as specified in JVMS `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-5.html#jvms-5.5`, `5.5`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'targetClass', [/* parameter description */
					[/* text */ 't', `the class to be initialized`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `targetClass`],
					[/* text */ 't', ` is a primitive type or `],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', `
          or array class`]
				]],
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `targetClass`],
					[/* text */ 't', ` is not
          `],
					[/* reference */ 'r', `#accessClass(java.lang.Class)`, `accessible`],
					[/* text */ 't', ` to this lookup`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the class initialization provoked
          by this method fails`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is present and it
          `],
					[/* reference */ 'r', `.MethodHandles.Lookup#secmgr`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `targetClass`],
				[/* text */ 't', ` that has been initialized`]
			]
		]],
		[/* method */ 'findClass(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Looks up a class by name from the lookup context defined by this `],
				[/* inline code block */ 'i', `Lookup`],
				[/* text */ 't', ` object,
 `],
				[/* reference */ 'r', `.MethodHandles.Lookup#equiv`],
				[/* text */ 't', ` by an `],
				[/* inline code block */ 'i', `ldc`],
				[/* text */ 't', ` instruction.
 Such a resolution, as specified in JVMS 5.4.3.1 section, attempts to locate and load the class,
 and then determines whether the class is accessible to this lookup object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The lookup context here is determined by the `],
					[/* reference */ 'r', `#lookupClass()`, `lookup class`],
					[/* text */ 't', `,
 its class loader, and the `],
					[/* reference */ 'r', `#lookupModes()`, `lookup modes`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'targetName', [/* parameter description */
					[/* text */ 't', `the fully qualified name of the class to be looked up.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is present and it
                           `],
					[/* reference */ 'r', `.MethodHandles.Lookup#secmgr`]
				]],
				[/* throw */ 'java.lang.LinkageError', [/* throw description */
					[/* text */ 't', `if the linkage fails`]
				]],
				[/* throw */ 'java.lang.ClassNotFoundException', [/* throw description */
					[/* text */ 't', `if the class cannot be loaded by the lookup class' loader.`]
				]],
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if the class is not accessible, using the allowed access
 modes.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `targetName`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the requested class.`]
			]
		]],
		[/* method */ 'lookupClass()', [
			[/* method description */
				[/* text */ 't', `Tells which class is performing the lookup.  It is this class against
  which checks are performed for visibility and access permissions.
  `],
				[/* block */ 'b', [
					[/* text */ 't', `
  If this lookup object has a `],
					[/* reference */ 'r', `#previousLookupClass()`, `previous lookup class`],
					[/* text */ 't', `,
  access checks are performed against both the lookup class and the previous lookup class.
  `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
  The class implies a maximum level of access permission,
  but the permissions may be additionally limited by the bitmask
  `],
					[/* reference */ 'r', `#lookupModes()`, `lookupModes`],
					[/* text */ 't', `, which controls whether non-public members
  can be accessed.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the lookup class, on behalf of which this lookup object finds members`]
			]
		]],
		[/* method */ 'previousLookupClass()', [
			[/* method description */
				[/* text */ 't', `Reports a lookup class in another module that this lookup object
 was previously teleported from, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A `],
					[/* inline code block */ 'i', `Lookup`],
					[/* text */ 't', ` object produced by the factory methods, such as the
 `],
					[/* reference */ 'r', `.MethodHandles#lookup()`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `.MethodHandles#publicLookup()`],
					[/* text */ 't', ` method,
 has `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` previous lookup class.
 A `],
					[/* inline code block */ 'i', `Lookup`],
					[/* text */ 't', ` object has a non-null previous lookup class
 when this lookup was teleported from an old lookup class
 in one module to a new lookup class in another module.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the lookup class in another module that this lookup object was
         previously teleported from, or `],
				[/* inline code block */ 'i', `null`]
			]
		]],
		[/* method */ 'bind(java.lang.Object,java.lang.String,java.lang.invoke.MethodType)', [
			[/* method description */
				[/* text */ 't', `Produces an early-bound method handle for a non-static method.
 The receiver must have a supertype `],
				[/* inline code block */ 'i', `defc`],
				[/* text */ 't', ` in which a method
 of the given name and type is accessible to the lookup class.
 The method and all its argument types must be accessible to the lookup object.
 The type of the method handle will be that of the method,
 without any insertion of an additional receiver parameter.
 The given receiver will be bound into the method handle,
 so that every call to the method handle will invoke the
 requested method on the given receiver.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned method handle will have
 `],
					[/* reference */ 'r', `.MethodHandle#asVarargsCollector(java.lang.Class)`],
					[/* text */ 't', ` if and only if
 the method's variable arity modifier bit (`],
					[/* inline code block */ 'i', `0x0080`],
					[/* text */ 't', `) is set
 `],
					[/* text */ 't', `and`],
					[/* text */ 't', ` the trailing array argument is not the only argument.
 (If the trailing array argument is the only argument,
 the given receiver value will be bound to it.)
 `]
				]],
				[/* block */ 'b', `
 This is almost equivalent to the following code, with some differences noted below:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `import static java.lang.invoke.MethodHandles.*;
import static java.lang.invoke.MethodType.*;
...
MethodHandle mh0 = lookup().findVirtual(defc, name, type);
MethodHandle mh1 = mh0.bindTo(receiver);
mh1 = mh1.withVarargs(mh0.isVarargsCollector());
return mh1;`]
					]]
				]],
				[/* text */ 't', `
 where `],
				[/* inline code block */ 'i', `defc`],
				[/* text */ 't', ` is either `],
				[/* inline code block */ 'i', `receiver.getClass()`],
				[/* text */ 't', ` or a super
 type of that class, in which the requested method is accessible
 to the lookup class.
 (Unlike `],
				[/* inline code block */ 'i', `bind`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `bindTo`],
				[/* text */ 't', ` does not preserve variable arity.
 Also, `],
				[/* inline code block */ 'i', `bindTo`],
				[/* text */ 't', ` may throw a `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', ` in instances where `],
				[/* inline code block */ 'i', `bind`],
				[/* text */ 't', ` would
 throw an `],
				[/* inline code block */ 'i', `IllegalAccessException`],
				[/* text */ 't', `, as in the case where the member is `],
				[/* inline code block */ 'i', `protected`],
				[/* text */ 't', ` and
 the receiver is restricted by `],
				[/* inline code block */ 'i', `findVirtual`],
				[/* text */ 't', ` to the lookup class.)`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'receiver', [/* parameter description */
					[/* text */ 't', `the object from which the method is accessed`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the method`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the type of the method, with the receiver argument omitted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NoSuchMethodException', [/* throw description */
					[/* text */ 't', `if the method does not exist`]
				]],
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if access checking fails
                                or if the method's variable arity modifier bit
                                is set and `],
					[/* inline code block */ 'i', `asVarargsCollector`],
					[/* text */ 't', ` fails`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is present and it
                              `],
					[/* reference */ 'r', `.MethodHandles.Lookup#secmgr`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the desired method handle`]
			]
		]],
		[/* method */ 'findConstructor(java.lang.Class,java.lang.invoke.MethodType)', [
			[/* method description */
				[/* text */ 't', `Produces a method handle which creates an object and initializes it, using
 the constructor of the specified type.
 The parameter types of the method handle will be those of the constructor,
 while the return type will be a reference to the constructor's class.
 The constructor and all its argument types must be accessible to the lookup object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The requested type must have a return type of `],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', `.
 (This is consistent with the JVM's treatment of constructor type descriptors.)
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned method handle will have
 `],
					[/* reference */ 'r', `.MethodHandle#asVarargsCollector(java.lang.Class)`],
					[/* text */ 't', ` if and only if
 the constructor's variable arity modifier bit (`],
					[/* inline code block */ 'i', `0x0080`],
					[/* text */ 't', `) is set.
 `]
				]],
				[/* block */ 'b', `
 If the returned method handle is invoked, the constructor's class will
 be initialized, if it has not already been initialized.
 `],
				[/* block */ 'b', `Example:`],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `import static java.lang.invoke.MethodHandles.*;
import static java.lang.invoke.MethodType.*;
...
MethodHandle MH_newArrayList = publicLookup().findConstructor(
  ArrayList.class, methodType(void.class, Collection.class));
Collection orig = Arrays.asList("x", "y");
Collection copy = (ArrayList) MH_newArrayList.invokeExact(orig);
assert(orig != copy);
assertEquals(orig, copy);
// a variable-arity constructor:
MethodHandle MH_newProcessBuilder = publicLookup().findConstructor(
  ProcessBuilder.class, methodType(void.class, String[].class));
ProcessBuilder pb = (ProcessBuilder)
  MH_newProcessBuilder.invoke("x", "y", "z");
assertEquals("[x, y, z]", pb.command().toString());`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'refc', [/* parameter description */
					[/* text */ 't', `the class or interface from which the method is accessed`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the type of the method, with the receiver argument omitted, and a void return type`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NoSuchMethodException', [/* throw description */
					[/* text */ 't', `if the constructor does not exist`]
				]],
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if access checking fails
                                or if the method's variable arity modifier bit
                                is set and `],
					[/* inline code block */ 'i', `asVarargsCollector`],
					[/* text */ 't', ` fails`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is present and it
                              `],
					[/* reference */ 'r', `.MethodHandles.Lookup#secmgr`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the desired method handle`]
			]
		]],
		[/* method */ 'findGetter(java.lang.Class,java.lang.String,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Produces a method handle giving read access to a non-static field.
 The type of the method handle will have a return type of the field's
 value type.
 The method handle's single argument will be the instance containing
 the field.
 Access checking is performed immediately on behalf of the lookup class.`]
			],
			[/* parameters */
				[/* parameter */ 'refc', [/* parameter description */
					[/* text */ 't', `the class or interface from which the method is accessed`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the field's name`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the field's type`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NoSuchFieldException', [/* throw description */
					[/* text */ 't', `if the field does not exist`]
				]],
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if access checking fails, or if the field is `],
					[/* inline code block */ 'i', `static`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is present and it
                              `],
					[/* reference */ 'r', `.MethodHandles.Lookup#secmgr`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle which can load values from the field`]
			]
		]],
		[/* method */ 'findSetter(java.lang.Class,java.lang.String,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Produces a method handle giving write access to a non-static field.
 The type of the method handle will have a void return type.
 The method handle will take two arguments, the instance containing
 the field, and the value to be stored.
 The second argument will be of the field's value type.
 Access checking is performed immediately on behalf of the lookup class.`]
			],
			[/* parameters */
				[/* parameter */ 'refc', [/* parameter description */
					[/* text */ 't', `the class or interface from which the method is accessed`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the field's name`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the field's type`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NoSuchFieldException', [/* throw description */
					[/* text */ 't', `if the field does not exist`]
				]],
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if access checking fails, or if the field is `],
					[/* inline code block */ 'i', `static`],
					[/* text */ 't', `
                                or `],
					[/* inline code block */ 'i', `final`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is present and it
                              `],
					[/* reference */ 'r', `.MethodHandles.Lookup#secmgr`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle which can store values into the field`]
			]
		]],
		[/* method */ 'findSpecial(java.lang.Class,java.lang.String,java.lang.invoke.MethodType,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Produces an early-bound method handle for a virtual method.
 It will bypass checks for overriding methods on the receiver,
 `],
				[/* reference */ 'r', `.MethodHandles.Lookup#equiv`],
				[/* text */ 't', ` from an `],
				[/* inline code block */ 'i', `invokespecial`],
				[/* text */ 't', `
 instruction from within the explicitly specified `],
				[/* inline code block */ 'i', `specialCaller`],
				[/* text */ 't', `.
 The type of the method handle will be that of the method,
 with a suitably restricted receiver type prepended.
 (The receiver type will be `],
				[/* inline code block */ 'i', `specialCaller`],
				[/* text */ 't', ` or a subtype.)
 The method and all its argument types must be accessible
 to the lookup object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Before method resolution,
 if the explicitly specified caller class is not identical with the
 lookup class, or if this lookup object does not have
 `],
					[/* reference */ 'r', `.MethodHandles.Lookup#privacc`],
					[/* text */ 't', `
 privileges, the access fails.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned method handle will have
 `],
					[/* reference */ 'r', `.MethodHandle#asVarargsCollector(java.lang.Class)`],
					[/* text */ 't', ` if and only if
 the method's variable arity modifier bit (`],
					[/* inline code block */ 'i', `0x0080`],
					[/* text */ 't', `) is set.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `(Note:  JVM internal methods named `],
					[/* inline code block */ 'i', `"<init>"`],
					[/* text */ 't', ` are not visible to this API,
 even though the `],
					[/* inline code block */ 'i', `invokespecial`],
					[/* text */ 't', ` instruction can refer to them
 in special circumstances.  Use `],
					[/* reference */ 'r', `#findConstructor(java.lang.Class,java.lang.invoke.MethodType)`, `findConstructor`],
					[/* text */ 't', `
 to access instance initialization methods in a safe manner.)`]
				]],
				[/* block */ 'b', `Example:`],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `import static java.lang.invoke.MethodHandles.*;
import static java.lang.invoke.MethodType.*;
...
static class Listie extends ArrayList {
  public String toString() { return "[wee Listie]"; }
  static Lookup lookup() { return MethodHandles.lookup(); }
}
...
// no access to constructor via invokeSpecial:
MethodHandle MH_newListie = Listie.lookup()
  .findConstructor(Listie.class, methodType(void.class));
Listie l = (Listie) MH_newListie.invokeExact();
try { assertEquals("impossible", Listie.lookup().findSpecial(
        Listie.class, "<init>", methodType(void.class), Listie.class));
 } catch (NoSuchMethodException ex) { } // OK
// access to super and self methods via invokeSpecial:
MethodHandle MH_super = Listie.lookup().findSpecial(
  ArrayList.class, "toString" , methodType(String.class), Listie.class);
MethodHandle MH_this = Listie.lookup().findSpecial(
  Listie.class, "toString" , methodType(String.class), Listie.class);
MethodHandle MH_duper = Listie.lookup().findSpecial(
  Object.class, "toString" , methodType(String.class), Listie.class);
assertEquals("[]", (String) MH_super.invokeExact(l));
assertEquals(""+l, (String) MH_this.invokeExact(l));
assertEquals("[]", (String) MH_duper.invokeExact(l)); // ArrayList method
try { assertEquals("inaccessible", Listie.lookup().findSpecial(
        String.class, "toString", methodType(String.class), Listie.class));
 } catch (IllegalAccessException ex) { } // OK
Listie subl = new Listie() { public String toString() { return "[subclass]"; } };
assertEquals(""+l, (String) MH_this.invokeExact(subl)); // Listie method`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'refc', [/* parameter description */
					[/* text */ 't', `the class or interface from which the method is accessed`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the method (which must not be "<init>")`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the type of the method, with the receiver argument omitted`]
				]],
				[/* parameter */ 'specialCaller', [/* parameter description */
					[/* text */ 't', `the proposed calling class to perform the `],
					[/* inline code block */ 'i', `invokespecial`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NoSuchMethodException', [/* throw description */
					[/* text */ 't', `if the method does not exist`]
				]],
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if access checking fails,
                                or if the method is `],
					[/* inline code block */ 'i', `static`],
					[/* text */ 't', `,
                                or if the method's variable arity modifier bit
                                is set and `],
					[/* inline code block */ 'i', `asVarargsCollector`],
					[/* text */ 't', ` fails`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is present and it
                              `],
					[/* reference */ 'r', `.MethodHandles.Lookup#secmgr`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the desired method handle`]
			]
		]],
		[/* method */ 'findStatic(java.lang.Class,java.lang.String,java.lang.invoke.MethodType)', [
			[/* method description */
				[/* text */ 't', `Produces a method handle for a static method.
 The type of the method handle will be that of the method.
 (Since static methods do not take receivers, there is no
 additional receiver argument inserted into the method handle type,
 as there would be with `],
				[/* reference */ 'r', `#findVirtual(java.lang.Class,java.lang.String,java.lang.invoke.MethodType)`, `findVirtual`],
				[/* text */ 't', ` or `],
				[/* reference */ 'r', `#findSpecial(java.lang.Class,java.lang.String,java.lang.invoke.MethodType,java.lang.Class)`, `findSpecial`],
				[/* text */ 't', `.)
 The method and all its argument types must be accessible to the lookup object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned method handle will have
 `],
					[/* reference */ 'r', `.MethodHandle#asVarargsCollector(java.lang.Class)`],
					[/* text */ 't', ` if and only if
 the method's variable arity modifier bit (`],
					[/* inline code block */ 'i', `0x0080`],
					[/* text */ 't', `) is set.
 `]
				]],
				[/* block */ 'b', `
 If the returned method handle is invoked, the method's class will
 be initialized, if it has not already been initialized.
 `],
				[/* block */ 'b', `Example:`],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `import static java.lang.invoke.MethodHandles.*;
import static java.lang.invoke.MethodType.*;
...
MethodHandle MH_asList = publicLookup().findStatic(Arrays.class,
  "asList", methodType(List.class, Object[].class));
assertEquals("[x, y]", MH_asList.invoke("x", "y").toString());`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'refc', [/* parameter description */
					[/* text */ 't', `the class from which the method is accessed`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the method`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the type of the method`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NoSuchMethodException', [/* throw description */
					[/* text */ 't', `if the method does not exist`]
				]],
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if access checking fails,
                                or if the method is not `],
					[/* inline code block */ 'i', `static`],
					[/* text */ 't', `,
                                or if the method's variable arity modifier bit
                                is set and `],
					[/* inline code block */ 'i', `asVarargsCollector`],
					[/* text */ 't', ` fails`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is present and it
                              `],
					[/* reference */ 'r', `.MethodHandles.Lookup#secmgr`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the desired method handle`]
			]
		]],
		[/* method */ 'findStaticGetter(java.lang.Class,java.lang.String,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Produces a method handle giving read access to a static field.
 The type of the method handle will have a return type of the field's
 value type.
 The method handle will take no arguments.
 Access checking is performed immediately on behalf of the lookup class.
 `],
				[/* block */ 'b', `
 If the returned method handle is invoked, the field's class will
 be initialized, if it has not already been initialized.`]
			],
			[/* parameters */
				[/* parameter */ 'refc', [/* parameter description */
					[/* text */ 't', `the class or interface from which the method is accessed`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the field's name`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the field's type`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NoSuchFieldException', [/* throw description */
					[/* text */ 't', `if the field does not exist`]
				]],
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if access checking fails, or if the field is not `],
					[/* inline code block */ 'i', `static`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is present and it
                              `],
					[/* reference */ 'r', `.MethodHandles.Lookup#secmgr`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle which can load values from the field`]
			]
		]],
		[/* method */ 'findStaticSetter(java.lang.Class,java.lang.String,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Produces a method handle giving write access to a static field.
 The type of the method handle will have a void return type.
 The method handle will take a single
 argument, of the field's value type, the value to be stored.
 Access checking is performed immediately on behalf of the lookup class.
 `],
				[/* block */ 'b', `
 If the returned method handle is invoked, the field's class will
 be initialized, if it has not already been initialized.`]
			],
			[/* parameters */
				[/* parameter */ 'refc', [/* parameter description */
					[/* text */ 't', `the class or interface from which the method is accessed`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the field's name`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the field's type`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NoSuchFieldException', [/* throw description */
					[/* text */ 't', `if the field does not exist`]
				]],
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if access checking fails, or if the field is not `],
					[/* inline code block */ 'i', `static`],
					[/* text */ 't', `
                                or is `],
					[/* inline code block */ 'i', `final`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is present and it
                              `],
					[/* reference */ 'r', `.MethodHandles.Lookup#secmgr`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle which can store values into the field`]
			]
		]],
		[/* method */ 'findVirtual(java.lang.Class,java.lang.String,java.lang.invoke.MethodType)', [
			[/* method description */
				[/* text */ 't', `Produces a method handle for a virtual method.
 The type of the method handle will be that of the method,
 with the receiver type (usually `],
				[/* inline code block */ 'i', `refc`],
				[/* text */ 't', `) prepended.
 The method and all its argument types must be accessible to the lookup object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 When called, the handle will treat the first argument as a receiver
 and, for non-private methods, dispatch on the receiver's type to determine which method
 implementation to enter.
 For private methods the named method in `],
					[/* inline code block */ 'i', `refc`],
					[/* text */ 't', ` will be invoked on the receiver.
 (The dispatching action is identical with that performed by an
 `],
					[/* inline code block */ 'i', `invokevirtual`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `invokeinterface`],
					[/* text */ 't', ` instruction.)
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The first argument will be of type `],
					[/* inline code block */ 'i', `refc`],
					[/* text */ 't', ` if the lookup
 class has full privileges to access the member.  Otherwise
 the member must be `],
					[/* inline code block */ 'i', `protected`],
					[/* text */ 't', ` and the first argument
 will be restricted in type to the lookup class.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned method handle will have
 `],
					[/* reference */ 'r', `.MethodHandle#asVarargsCollector(java.lang.Class)`],
					[/* text */ 't', ` if and only if
 the method's variable arity modifier bit (`],
					[/* inline code block */ 'i', `0x0080`],
					[/* text */ 't', `) is set.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Because of the general `],
					[/* reference */ 'r', `.MethodHandles.Lookup#equiv`],
					[/* text */ 't', ` between `],
					[/* inline code block */ 'i', `invokevirtual`],
					[/* text */ 't', `
 instructions and method handles produced by `],
					[/* inline code block */ 'i', `findVirtual`],
					[/* text */ 't', `,
 if the class is `],
					[/* inline code block */ 'i', `MethodHandle`],
					[/* text */ 't', ` and the name string is
 `],
					[/* inline code block */ 'i', `invokeExact`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `invoke`],
					[/* text */ 't', `, the resulting
 method handle is equivalent to one produced by
 `],
					[/* reference */ 'r', `.MethodHandles#exactInvoker(java.lang.invoke.MethodType)`],
					[/* text */ 't', ` or
 `],
					[/* reference */ 'r', `.MethodHandles#invoker(java.lang.invoke.MethodType)`],
					[/* text */ 't', `
 with the same `],
					[/* inline code block */ 'i', `type`],
					[/* text */ 't', ` argument.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the class is `],
					[/* inline code block */ 'i', `VarHandle`],
					[/* text */ 't', ` and the name string corresponds to
 the name of a signature-polymorphic access mode method, the resulting
 method handle is equivalent to one produced by
 `],
					[/* reference */ 'r', `.MethodHandles#varHandleInvoker(java.lang.invoke.VarHandle.AccessMode,java.lang.invoke.MethodType)`],
					[/* text */ 't', ` with
 the access mode corresponding to the name string and with the same
 `],
					[/* inline code block */ 'i', `type`],
					[/* text */ 't', ` arguments.
 `]
				]],
				[/* block */ 'b', `Example:`],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `import static java.lang.invoke.MethodHandles.*;
import static java.lang.invoke.MethodType.*;
...
MethodHandle MH_concat = publicLookup().findVirtual(String.class,
  "concat", methodType(String.class, String.class));
MethodHandle MH_hashCode = publicLookup().findVirtual(Object.class,
  "hashCode", methodType(int.class));
MethodHandle MH_hashCode_String = publicLookup().findVirtual(String.class,
  "hashCode", methodType(int.class));
assertEquals("xy", (String) MH_concat.invokeExact("x", "y"));
assertEquals("xy".hashCode(), (int) MH_hashCode.invokeExact((Object)"xy"));
assertEquals("xy".hashCode(), (int) MH_hashCode_String.invokeExact("xy"));
// interface method:
MethodHandle MH_subSequence = publicLookup().findVirtual(CharSequence.class,
  "subSequence", methodType(CharSequence.class, int.class, int.class));
assertEquals("def", MH_subSequence.invoke("abcdefghi", 3, 6).toString());
// constructor "internal method" must be accessed differently:
MethodType MT_newString = methodType(void.class); //()V for new String()
try { assertEquals("impossible", lookup()
        .findVirtual(String.class, "<init>", MT_newString));
 } catch (NoSuchMethodException ex) { } // OK
MethodHandle MH_newString = publicLookup()
  .findConstructor(String.class, MT_newString);
assertEquals("", (String) MH_newString.invokeExact());`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'refc', [/* parameter description */
					[/* text */ 't', `the class or interface from which the method is accessed`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the method`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the type of the method, with the receiver argument omitted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NoSuchMethodException', [/* throw description */
					[/* text */ 't', `if the method does not exist`]
				]],
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if access checking fails,
                                or if the method is `],
					[/* inline code block */ 'i', `static`],
					[/* text */ 't', `,
                                or if the method's variable arity modifier bit
                                is set and `],
					[/* inline code block */ 'i', `asVarargsCollector`],
					[/* text */ 't', ` fails`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is present and it
                              `],
					[/* reference */ 'r', `.MethodHandles.Lookup#secmgr`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the desired method handle`]
			]
		]],
		[/* method */ 'unreflect(java.lang.reflect.Method)', [
			[/* method description */
				[/* text */ 't', `Makes a `],
				[/* reference */ 'r', `.MethodHandleInfo#directmh`],
				[/* text */ 't', `
 to `],
				[/* text */ 't', `m`],
				[/* text */ 't', `, if the lookup class has permission.
 If `],
				[/* text */ 't', `m`],
				[/* text */ 't', ` is non-static, the receiver argument is treated as an initial argument.
 If `],
				[/* text */ 't', `m`],
				[/* text */ 't', ` is virtual, overriding is respected on every call.
 Unlike the Core Reflection API, exceptions are `],
				[/* text */ 't', `not`],
				[/* text */ 't', ` wrapped.
 The type of the method handle will be that of the method,
 with the receiver type prepended (but only if it is non-static).
 If the method's `],
				[/* inline code block */ 'i', `accessible`],
				[/* text */ 't', ` flag is not set,
 access checking is performed immediately on behalf of the lookup class.
 If `],
				[/* text */ 't', `m`],
				[/* text */ 't', ` is not public, do not share the resulting handle with untrusted parties.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned method handle will have
 `],
					[/* reference */ 'r', `.MethodHandle#asVarargsCollector(java.lang.Class)`],
					[/* text */ 't', ` if and only if
 the method's variable arity modifier bit (`],
					[/* inline code block */ 'i', `0x0080`],
					[/* text */ 't', `) is set.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* text */ 't', `m`],
					[/* text */ 't', ` is static, and
 if the returned method handle is invoked, the method's class will
 be initialized, if it has not already been initialized.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `the reflected method`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if access checking fails
                                or if the method's variable arity modifier bit
                                is set and `],
					[/* inline code block */ 'i', `asVarargsCollector`],
					[/* text */ 't', ` fails`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle which can invoke the reflected method`]
			]
		]],
		[/* method */ 'unreflectConstructor(java.lang.reflect.Constructor)', [
			[/* method description */
				[/* text */ 't', `Produces a method handle for a reflected constructor.
 The type of the method handle will be that of the constructor,
 with the return type changed to the declaring class.
 The method handle will perform a `],
				[/* inline code block */ 'i', `newInstance`],
				[/* text */ 't', ` operation,
 creating a new instance of the constructor's class on the
 arguments passed to the method handle.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the constructor's `],
					[/* inline code block */ 'i', `accessible`],
					[/* text */ 't', ` flag is not set,
 access checking is performed immediately on behalf of the lookup class.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned method handle will have
 `],
					[/* reference */ 'r', `.MethodHandle#asVarargsCollector(java.lang.Class)`],
					[/* text */ 't', ` if and only if
 the constructor's variable arity modifier bit (`],
					[/* inline code block */ 'i', `0x0080`],
					[/* text */ 't', `) is set.
 `]
				]],
				[/* block */ 'b', `
 If the returned method handle is invoked, the constructor's class will
 be initialized, if it has not already been initialized.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the reflected constructor`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if access checking fails
                                or if the method's variable arity modifier bit
                                is set and `],
					[/* inline code block */ 'i', `asVarargsCollector`],
					[/* text */ 't', ` fails`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle which can invoke the reflected constructor`]
			]
		]],
		[/* method */ 'unreflectGetter(java.lang.reflect.Field)', [
			[/* method description */
				[/* text */ 't', `Produces a method handle giving read access to a reflected field.
 The type of the method handle will have a return type of the field's
 value type.
 If the field is `],
				[/* inline code block */ 'i', `static`],
				[/* text */ 't', `, the method handle will take no arguments.
 Otherwise, its single argument will be the instance containing
 the field.
 If the `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', ` object's `],
				[/* inline code block */ 'i', `accessible`],
				[/* text */ 't', ` flag is not set,
 access checking is performed immediately on behalf of the lookup class.
 `],
				[/* block */ 'b', `
 If the field is static, and
 if the returned method handle is invoked, the field's class will
 be initialized, if it has not already been initialized.`]
			],
			[/* parameters */
				[/* parameter */ 'f', [/* parameter description */
					[/* text */ 't', `the reflected field`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if access checking fails`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle which can load values from the reflected field`]
			]
		]],
		[/* method */ 'unreflectSetter(java.lang.reflect.Field)', [
			[/* method description */
				[/* text */ 't', `Produces a method handle giving write access to a reflected field.
 The type of the method handle will have a void return type.
 If the field is `],
				[/* inline code block */ 'i', `static`],
				[/* text */ 't', `, the method handle will take a single
 argument, of the field's value type, the value to be stored.
 Otherwise, the two arguments will be the instance containing
 the field, and the value to be stored.
 If the `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', ` object's `],
				[/* inline code block */ 'i', `accessible`],
				[/* text */ 't', ` flag is not set,
 access checking is performed immediately on behalf of the lookup class.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is `],
					[/* inline code block */ 'i', `final`],
					[/* text */ 't', `, write access will not be
 allowed and access checking will fail, except under certain
 narrow circumstances documented for `],
					[/* reference */ 'r', `java.Field#set(java.lang.Object,java.lang.Object)`],
					[/* text */ 't', `.
 A method handle is returned only if a corresponding call to
 the `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object's `],
					[/* inline code block */ 'i', `set`],
					[/* text */ 't', ` method could return
 normally.  In particular, fields which are both `],
					[/* inline code block */ 'i', `static`],
					[/* text */ 't', `
 and `],
					[/* inline code block */ 'i', `final`],
					[/* text */ 't', ` may never be set.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is `],
					[/* inline code block */ 'i', `static`],
					[/* text */ 't', `, and
 if the returned method handle is invoked, the field's class will
 be initialized, if it has not already been initialized.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'f', [/* parameter description */
					[/* text */ 't', `the reflected field`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if access checking fails,
         or if the field is `],
					[/* inline code block */ 'i', `final`],
					[/* text */ 't', ` and write access
         is not enabled on the `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle which can store values into the reflected field`]
			]
		]],
		[/* method */ 'unreflectSpecial(java.lang.reflect.Method,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Produces a method handle for a reflected method.
 It will bypass checks for overriding methods on the receiver,
 `],
				[/* reference */ 'r', `.MethodHandles.Lookup#equiv`],
				[/* text */ 't', ` from an `],
				[/* inline code block */ 'i', `invokespecial`],
				[/* text */ 't', `
 instruction from within the explicitly specified `],
				[/* inline code block */ 'i', `specialCaller`],
				[/* text */ 't', `.
 The type of the method handle will be that of the method,
 with a suitably restricted receiver type prepended.
 (The receiver type will be `],
				[/* inline code block */ 'i', `specialCaller`],
				[/* text */ 't', ` or a subtype.)
 If the method's `],
				[/* inline code block */ 'i', `accessible`],
				[/* text */ 't', ` flag is not set,
 access checking is performed immediately on behalf of the lookup class,
 as if `],
				[/* inline code block */ 'i', `invokespecial`],
				[/* text */ 't', ` instruction were being linked.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Before method resolution,
 if the explicitly specified caller class is not identical with the
 lookup class, or if this lookup object does not have
 `],
					[/* reference */ 'r', `.MethodHandles.Lookup#privacc`],
					[/* text */ 't', `
 privileges, the access fails.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned method handle will have
 `],
					[/* reference */ 'r', `.MethodHandle#asVarargsCollector(java.lang.Class)`],
					[/* text */ 't', ` if and only if
 the method's variable arity modifier bit (`],
					[/* inline code block */ 'i', `0x0080`],
					[/* text */ 't', `) is set.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `the reflected method`]
				]],
				[/* parameter */ 'specialCaller', [/* parameter description */
					[/* text */ 't', `the class nominally calling the method`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if access checking fails,
                                or if the method is `],
					[/* inline code block */ 'i', `static`],
					[/* text */ 't', `,
                                or if the method's variable arity modifier bit
                                is set and `],
					[/* inline code block */ 'i', `asVarargsCollector`],
					[/* text */ 't', ` fails`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a method handle which can invoke the reflected method`]
			]
		]],
		[/* method */ 'revealDirect(java.lang.invoke.MethodHandle)', [
			[/* method description */
				[/* text */ 't', `Cracks a `],
				[/* reference */ 'r', `.MethodHandleInfo#directmh`],
				[/* text */ 't', `
 created by this lookup object or a similar one.
 Security and access checks are performed to ensure that this lookup object
 is capable of reproducing the target method handle.
 This means that the cracking may fail if target is a direct method handle
 but was created by an unrelated lookup object.
 This can happen if the method handle is `],
				[/* reference */ 'r', `.MethodHandles.Lookup#callsens`],
				[/* text */ 't', `
 and was created by a lookup object for a different class.`]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `a direct method handle to crack into symbolic reference components`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is present and it
                              `],
					[/* reference */ 'r', `.MethodHandles.Lookup#secmgr`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the target is not a direct method handle or if access checking fails`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the target is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a symbolic reference which can be used to reconstruct this method handle from this lookup object`]
			]
		]],
		[/* method */ 'defineHiddenClass(byte[],boolean,java.lang.invoke.MethodHandles.Lookup.ClassOption...)', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* text */ 't', `hidden`],
				[/* text */ 't', ` class or interface from `],
				[/* inline code block */ 'i', `bytes`],
				[/* text */ 't', `,
 returning a `],
				[/* inline code block */ 'i', `Lookup`],
				[/* text */ 't', ` on the newly created class or interface.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Ordinarily, a class or interface `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', ` is created by a class loader,
 which either defines `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', ` directly or delegates to another class loader.
 A class loader defines `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', ` directly by invoking
 `],
					[/* reference */ 'r', `java.ClassLoader#defineClass(java.lang.String,byte[],int,int,java.security.ProtectionDomain)`],
					[/* text */ 't', `, which causes the Java Virtual Machine
 to derive `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', ` from a purported representation in `],
					[/* inline code block */ 'i', `class`],
					[/* text */ 't', ` file format.
 In situations where use of a class loader is undesirable, a class or interface
 `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', ` can be created by this method instead. This method is capable of
 defining `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', `, and thereby creating it, without invoking
 `],
					[/* inline code block */ 'i', `ClassLoader::defineClass`],
					[/* text */ 't', `.
 Instead, this method defines `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', ` as if by arranging for
 the Java Virtual Machine to derive a nonarray class or interface `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', `
 from a purported representation in `],
					[/* inline code block */ 'i', `class`],
					[/* text */ 't', ` file format
 using the following rules:

 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` The `],
						[/* reference */ 'r', `#lookupModes()`, `lookup modes`],
						[/* text */ 't', ` for this `],
						[/* inline code block */ 'i', `Lookup`],
						[/* text */ 't', `
 must include `],
						[/* reference */ 'r', `#hasFullPrivilegeAccess()`, `full privilege`],
						[/* text */ 't', ` access.
 This level of access is needed to create `],
						[/* inline code block */ 'i', `C`],
						[/* text */ 't', ` in the module
 of the lookup class of this `],
						[/* inline code block */ 'i', `Lookup`],
						[/* text */ 't', `.`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` The purported representation in `],
						[/* inline code block */ 'i', `bytes`],
						[/* text */ 't', ` must be a `],
						[/* inline code block */ 'i', `ClassFile`],
						[/* text */ 't', `
 structure (JVMS `],
						[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.1`, `4.1`],
						[/* text */ 't', `) of a supported major and minor version.
 The major and minor version may differ from the `],
						[/* inline code block */ 'i', `class`],
						[/* text */ 't', ` file version
 of the lookup class of this `],
						[/* inline code block */ 'i', `Lookup`],
						[/* text */ 't', `.`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` The value of `],
						[/* inline code block */ 'i', `this_class`],
						[/* text */ 't', ` must be a valid index in the
 `],
						[/* inline code block */ 'i', `constant_pool`],
						[/* text */ 't', ` table, and the entry at that index must be a valid
 `],
						[/* inline code block */ 'i', `CONSTANT_Class_info`],
						[/* text */ 't', ` structure. Let `],
						[/* inline code block */ 'i', `N`],
						[/* text */ 't', ` be the binary name
 encoded in internal form that is specified by this structure. `],
						[/* inline code block */ 'i', `N`],
						[/* text */ 't', ` must
 denote a class or interface in the same package as the lookup class.`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` Let `],
						[/* inline code block */ 'i', `CN`],
						[/* text */ 't', ` be the string `],
						[/* inline code block */ 'i', `N + "." + <suffix>`],
						[/* text */ 't', `,
 where `],
						[/* inline code block */ 'i', `<suffix>`],
						[/* text */ 't', ` is an unqualified name.

 `],
						[/* block */ 'b', [
							[/* text */ 't', ` Let `],
							[/* inline code block */ 'i', `newBytes`],
							[/* text */ 't', ` be the `],
							[/* inline code block */ 'i', `ClassFile`],
							[/* text */ 't', ` structure given by
 `],
							[/* inline code block */ 'i', `bytes`],
							[/* text */ 't', ` with an additional entry in the `],
							[/* inline code block */ 'i', `constant_pool`],
							[/* text */ 't', ` table,
 indicating a `],
							[/* inline code block */ 'i', `CONSTANT_Utf8_info`],
							[/* text */ 't', ` structure for `],
							[/* inline code block */ 'i', `CN`],
							[/* text */ 't', `, and
 where the `],
							[/* inline code block */ 'i', `CONSTANT_Class_info`],
							[/* text */ 't', ` structure indicated by `],
							[/* inline code block */ 'i', `this_class`],
							[/* text */ 't', `
 refers to the new `],
							[/* inline code block */ 'i', `CONSTANT_Utf8_info`],
							[/* text */ 't', ` structure.

 `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` Let `],
							[/* inline code block */ 'i', `L`],
							[/* text */ 't', ` be the defining class loader of the lookup class of this `],
							[/* inline code block */ 'i', `Lookup`],
							[/* text */ 't', `.

 `]
						]],
						[/* block */ 'b', [
							[/* inline code block */ 'i', `C`],
							[/* text */ 't', ` is derived with name `],
							[/* inline code block */ 'i', `CN`],
							[/* text */ 't', `, class loader `],
							[/* inline code block */ 'i', `L`],
							[/* text */ 't', `, and
 purported representation `],
							[/* inline code block */ 'i', `newBytes`],
							[/* text */ 't', ` as if by the rules of JVMS `],
							[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-5.html#jvms-5.3.5`, `5.3.5`],
							[/* text */ 't', `,
 with the following adjustments:
 `]
						]],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* text */ 't', ` The constant indicated by `],
								[/* inline code block */ 'i', `this_class`],
								[/* text */ 't', ` is permitted to specify a name
 that includes a single `],
								[/* inline code block */ 'i', `"."`],
								[/* text */ 't', ` character, even though this is not a valid
 binary class or interface name in internal form.`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` The Java Virtual Machine marks `],
								[/* inline code block */ 'i', `L`],
								[/* text */ 't', ` as the defining class loader of `],
								[/* inline code block */ 'i', `C`],
								[/* text */ 't', `,
 but no class loader is recorded as an initiating class loader of `],
								[/* inline code block */ 'i', `C`],
								[/* text */ 't', `.`]
							]],
							[/* block */ 'b', [
								[/* inline code block */ 'i', `C`],
								[/* text */ 't', ` is considered to have the same runtime
 `],
								[/* reference */ 'r', `java.Class#getPackage()`],
								[/* text */ 't', `, `],
								[/* reference */ 'r', `java.Class#getModule()`],
								[/* text */ 't', `
 and `],
								[/* reference */ 'r', `java.security.ProtectionDomain`],
								[/* text */ 't', `
 as the lookup class of this `],
								[/* inline code block */ 'i', `Lookup`],
								[/* text */ 't', `.
 `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` Let `],
								[/* inline code block */ 'i', `GN`],
								[/* text */ 't', ` be the binary name obtained by taking `],
								[/* inline code block */ 'i', `N`],
								[/* text */ 't', `
 (a binary name encoded in internal form) and replacing ASCII forward slashes with
 ASCII periods. For the instance of `],
								[/* reference */ 'r', `java.lang.Class`],
								[/* text */ 't', ` representing `],
								[/* inline code block */ 'i', `C`],
								[/* text */ 't', `:
 `],
								[/* list */ 'l', [
									[/* block */ 'b', [
										[/* reference */ 'r', `java.Class#getName()`],
										[/* text */ 't', ` returns the string `],
										[/* inline code block */ 'i', `GN + "/" + <suffix>`],
										[/* text */ 't', `,
      even though this is not a valid binary class or interface name.`]
									]],
									[/* block */ 'b', [
										[/* reference */ 'r', `java.Class#descriptorString()`],
										[/* text */ 't', ` returns the string
      `],
										[/* inline code block */ 'i', `"L" + N + "." + <suffix> + ";"`],
										[/* text */ 't', `,
      even though this is not a valid type descriptor name.`]
									]],
									[/* block */ 'b', [
										[/* reference */ 'r', `java.Class#describeConstable()`],
										[/* text */ 't', ` returns an empty optional as `],
										[/* inline code block */ 'i', `C`],
										[/* text */ 't', `
      cannot be described in `],
										[/* reference */ 'r', `java.lang.constant.ClassDesc`],
										[/* text */ 't', `.`]
									]]
								]]
							]]
						]],
						[/* block */ 'b', '']
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` After `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', ` is derived, it is linked by the Java Virtual Machine.
 Linkage occurs as specified in JVMS `],
					[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-5.html#jvms-5.4.3`, `5.4.3`],
					[/* text */ 't', `, with the following adjustments:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` During verification, whenever it is necessary to load the class named
 `],
						[/* inline code block */ 'i', `CN`],
						[/* text */ 't', `, the attempt succeeds, producing class `],
						[/* inline code block */ 'i', `C`],
						[/* text */ 't', `. No request is
 made of any class loader.`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` On any attempt to resolve the entry in the run-time constant pool indicated
 by `],
						[/* inline code block */ 'i', `this_class`],
						[/* text */ 't', `, the symbolic reference is considered to be resolved to
 `],
						[/* inline code block */ 'i', `C`],
						[/* text */ 't', ` and resolution always succeeds immediately.`]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` If the `],
					[/* inline code block */ 'i', `initialize`],
					[/* text */ 't', ` parameter is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `,
 then `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', ` is initialized by the Java Virtual Machine.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The newly created class or interface `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', ` serves as the
 `],
					[/* reference */ 'r', `#lookupClass()`, `lookup class`],
					[/* text */ 't', ` of the `],
					[/* inline code block */ 'i', `Lookup`],
					[/* text */ 't', ` object
 returned by this method. `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', ` is `],
					[/* text */ 't', `hidden`],
					[/* text */ 't', ` in the sense that
 no other class or interface can refer to `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', ` via a constant pool entry.
 That is, a hidden class or interface cannot be named as a supertype, a field type,
 a method parameter type, or a method return type by any other class.
 This is because a hidden class or interface does not have a binary name, so
 there is no internal form available to record in any class's constant pool.
 A hidden class or interface is not discoverable by `],
					[/* reference */ 'r', `java.Class#forName(java.lang.String,boolean,java.lang.ClassLoader)`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.ClassLoader#loadClass(java.lang.String,boolean)`],
					[/* text */ 't', `, or `],
					[/* reference */ 'r', `#findClass(java.lang.String)`, `findClass(String)`],
					[/* text */ 't', `, and
 is not `],
					[/* text */ 't', `modifiable`],
					[/* text */ 't', ` by Java agents or tool agents using the `],
					[/* text */ 't', `JVM Tool Interface`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` A class or interface created by
 `],
					[/* reference */ 'r', `java.ClassLoader#defineClass(java.lang.String,byte[],int,int,java.security.ProtectionDomain)`],
					[/* text */ 't', ` has a strong relationship with that class loader.
 That is, every `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object contains a reference to the `],
					[/* inline code block */ 'i', `ClassLoader`],
					[/* text */ 't', `
 that `],
					[/* reference */ 'r', `java.Class#getClassLoader()`],
					[/* text */ 't', `.
 This means that a class created by a class loader may be unloaded if and
 only if its defining loader is not reachable and thus may be reclaimed
 by a garbage collector (JLS 12.7).

 By default, however, a hidden class or interface may be unloaded even if
 the class loader that is marked as its defining loader is
 `],
					[/* text */ 't', `reachable`],
					[/* text */ 't', `.
 This behavior is useful when a hidden class or interface serves multiple
 classes defined by arbitrary class loaders.  In other cases, a hidden
 class or interface may be linked to a single class (or a small number of classes)
 with the same defining loader as the hidden class or interface.
 In such cases, where the hidden class or interface must be coterminous
 with a normal class or interface, the `],
					[/* reference */ 'r', `.MethodHandles.Lookup.ClassOption#STRONG`],
					[/* text */ 't', `
 option may be passed in `],
					[/* inline code block */ 'i', `options`],
					[/* text */ 't', `.
 This arranges for a hidden class to have the same strong relationship
 with the class loader marked as its defining loader,
 as a normal class or interface has with its own defining loader.

 If `],
					[/* inline code block */ 'i', `STRONG`],
					[/* text */ 't', ` is not used, then the invoker of `],
					[/* inline code block */ 'i', `defineHiddenClass`],
					[/* text */ 't', `
 may still prevent a hidden class or interface from being
 unloaded by ensuring that the `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object is reachable.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The unloading characteristics are set for each hidden class when it is
 defined, and cannot be changed later.  An advantage of allowing hidden classes
 to be unloaded independently of the class loader marked as their defining loader
 is that a very large number of hidden classes may be created by an application.
 In contrast, if `],
					[/* inline code block */ 'i', `STRONG`],
					[/* text */ 't', ` is used, then the JVM may run out of memory,
 just as if normal classes were created by class loaders.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Classes and interfaces in a nest are allowed to have mutual access to
 their private members.  The nest relationship is determined by
 the `],
					[/* inline code block */ 'i', `NestHost`],
					[/* text */ 't', ` attribute (JVMS `],
					[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.7.28`, `4.7.28`],
					[/* text */ 't', `) and
 the `],
					[/* inline code block */ 'i', `NestMembers`],
					[/* text */ 't', ` attribute (JVMS `],
					[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.7.29`, `4.7.29`],
					[/* text */ 't', `) in a `],
					[/* inline code block */ 'i', `class`],
					[/* text */ 't', ` file.
 By default, a hidden class belongs to a nest consisting only of itself
 because a hidden class has no binary name.
 The `],
					[/* reference */ 'r', `.MethodHandles.Lookup.ClassOption#NESTMATE`],
					[/* text */ 't', ` option can be passed in `],
					[/* inline code block */ 'i', `options`],
					[/* text */ 't', `
 to create a hidden class or interface `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', ` as a member of a nest.
 The nest to which `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', ` belongs is not based on any `],
					[/* inline code block */ 'i', `NestHost`],
					[/* text */ 't', ` attribute
 in the `],
					[/* inline code block */ 'i', `ClassFile`],
					[/* text */ 't', ` structure from which `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', ` was derived.
 Instead, the following rules determine the nest host of `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', `:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If the nest host of the lookup class of this `],
						[/* inline code block */ 'i', `Lookup`],
						[/* text */ 't', ` has previously
     been determined, then let `],
						[/* inline code block */ 'i', `H`],
						[/* text */ 't', ` be the nest host of the lookup class.
     Otherwise, the nest host of the lookup class is determined using the
     algorithm in JVMS `],
						[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-5.html#jvms-5.4.4`, `5.4.4`],
						[/* text */ 't', `, yielding `],
						[/* inline code block */ 'i', `H`],
						[/* text */ 't', `.`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The nest host of `],
						[/* inline code block */ 'i', `C`],
						[/* text */ 't', ` is determined to be `],
						[/* inline code block */ 'i', `H`],
						[/* text */ 't', `,
     the nest host of the lookup class.`]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', ` A hidden class or interface may be serializable, but this requires a custom
 serialization mechanism in order to ensure that instances are properly serialized
 and deserialized. The default serialization mechanism supports only classes and
 interfaces that are discoverable by their class name.`]
			],
			[/* parameters */
				[/* parameter */ 'bytes', [/* parameter description */
					[/* text */ 't', `the bytes that make up the class data,
 in the format of a valid `],
					[/* inline code block */ 'i', `class`],
					[/* text */ 't', ` file as defined by
 `],
					[/* text */ 't', `The Java Virtual Machine Specification`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'initialize', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` the class will be initialized.`]
				]],
				[/* parameter */ 'options', [/* parameter description */
					[/* text */ 't', ``],
					[/* reference */ 'r', `enum class in java.lang.invoke.MethodHandles.Lookup.ClassOption`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Lookup`],
					[/* text */ 't', ` does not have
 `],
					[/* reference */ 'r', `#hasFullPrivilegeAccess()`, `full privilege`],
					[/* text */ 't', ` access`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is present and it
 `],
					[/* reference */ 'r', `.MethodHandles.Lookup#secmgr`]
				]],
				[/* throw */ 'java.lang.ClassFormatError', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `bytes`],
					[/* text */ 't', ` is not a `],
					[/* inline code block */ 'i', `ClassFile`],
					[/* text */ 't', ` structure`]
				]],
				[/* throw */ 'java.lang.UnsupportedClassVersionError', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `bytes`],
					[/* text */ 't', ` is not of a supported major or minor version`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `bytes`],
					[/* text */ 't', ` denotes a class in a different package
 than the lookup class or `],
					[/* inline code block */ 'i', `bytes`],
					[/* text */ 't', ` is not a class or interface
 (`],
					[/* inline code block */ 'i', `ACC_MODULE`],
					[/* text */ 't', ` flag is set in the value of the `],
					[/* inline code block */ 'i', `access_flags`],
					[/* text */ 't', ` item)`]
				]],
				[/* throw */ 'java.lang.IncompatibleClassChangeError', [/* throw description */
					[/* text */ 't', `if the class or interface named as
 the direct superclass of `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', ` is in fact an interface, or if any of the classes
 or interfaces named as direct superinterfaces of `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', ` are not in fact interfaces`]
				]],
				[/* throw */ 'java.lang.ClassCircularityError', [/* throw description */
					[/* text */ 't', `if any of the superclasses or superinterfaces of
 `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', ` itself`]
				]],
				[/* throw */ 'java.lang.VerifyError', [/* throw description */
					[/* text */ 't', `if the newly created class cannot be verified`]
				]],
				[/* throw */ 'java.lang.LinkageError', [/* throw description */
					[/* text */ 't', `if the newly created class cannot be linked for any other reason`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any parameter is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Lookup`],
				[/* text */ 't', ` object on the hidden class,
 with `],
				[/* text */ 't', `original`],
				[/* text */ 't', ` and
 `],
				[/* reference */ 'r', `#hasFullPrivilegeAccess()`, `full privilege`],
				[/* text */ 't', ` access`]
			]
		]],
		[/* method */ 'defineHiddenClassWithClassData(byte[],java.lang.Object,boolean,java.lang.invoke.MethodHandles.Lookup.ClassOption...)', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* text */ 't', `hidden`],
				[/* text */ 't', ` class or interface from `],
				[/* inline code block */ 'i', `bytes`],
				[/* text */ 't', ` with associated
 `],
				[/* reference */ 'r', `.MethodHandles#classData(java.lang.invoke.MethodHandles.Lookup,java.lang.String,java.lang.Class)`],
				[/* text */ 't', `,
 returning a `],
				[/* inline code block */ 'i', `Lookup`],
				[/* text */ 't', ` on the newly created class or interface.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method is equivalent to calling
 `],
					[/* reference */ 'r', `#defineHiddenClass(byte%5B%5D,boolean,java.lang.invoke.MethodHandles.Lookup.ClassOption...)`, `defineHiddenClass(bytes, initialize, options)`],
					[/* text */ 't', `
 as if the hidden class is injected with a private static final `],
					[/* text */ 't', `unnamed`],
					[/* text */ 't', `
 field which is initialized with the given `],
					[/* inline code block */ 'i', `classData`],
					[/* text */ 't', ` at
 the first instruction of the class initializer.
 The newly created class is linked by the Java Virtual Machine.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `.MethodHandles#classData(java.lang.invoke.MethodHandles.Lookup,java.lang.String,java.lang.Class)`],
					[/* text */ 't', `
 and `],
					[/* reference */ 'r', `.MethodHandles#classDataAt(java.lang.invoke.MethodHandles.Lookup,java.lang.String,java.lang.Class,int)`],
					[/* text */ 't', `
 methods can be used to retrieve the `],
					[/* inline code block */ 'i', `classData`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'bytes', [/* parameter description */
					[/* text */ 't', `the class bytes`]
				]],
				[/* parameter */ 'classData', [/* parameter description */
					[/* text */ 't', `pre-initialized class data`]
				]],
				[/* parameter */ 'initialize', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` the class will be initialized.`]
				]],
				[/* parameter */ 'options', [/* parameter description */
					[/* text */ 't', ``],
					[/* reference */ 'r', `enum class in java.lang.invoke.MethodHandles.Lookup.ClassOption`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Lookup`],
					[/* text */ 't', ` does not have
 `],
					[/* reference */ 'r', `#hasFullPrivilegeAccess()`, `full privilege`],
					[/* text */ 't', ` access`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is present and it
 `],
					[/* reference */ 'r', `.MethodHandles.Lookup#secmgr`]
				]],
				[/* throw */ 'java.lang.ClassFormatError', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `bytes`],
					[/* text */ 't', ` is not a `],
					[/* inline code block */ 'i', `ClassFile`],
					[/* text */ 't', ` structure`]
				]],
				[/* throw */ 'java.lang.UnsupportedClassVersionError', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `bytes`],
					[/* text */ 't', ` is not of a supported major or minor version`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `bytes`],
					[/* text */ 't', ` denotes a class in a different package
 than the lookup class or `],
					[/* inline code block */ 'i', `bytes`],
					[/* text */ 't', ` is not a class or interface
 (`],
					[/* inline code block */ 'i', `ACC_MODULE`],
					[/* text */ 't', ` flag is set in the value of the `],
					[/* inline code block */ 'i', `access_flags`],
					[/* text */ 't', ` item)`]
				]],
				[/* throw */ 'java.lang.IncompatibleClassChangeError', [/* throw description */
					[/* text */ 't', `if the class or interface named as
 the direct superclass of `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', ` is in fact an interface, or if any of the classes
 or interfaces named as direct superinterfaces of `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', ` are not in fact interfaces`]
				]],
				[/* throw */ 'java.lang.ClassCircularityError', [/* throw description */
					[/* text */ 't', `if any of the superclasses or superinterfaces of
 `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `C`],
					[/* text */ 't', ` itself`]
				]],
				[/* throw */ 'java.lang.VerifyError', [/* throw description */
					[/* text */ 't', `if the newly created class cannot be verified`]
				]],
				[/* throw */ 'java.lang.LinkageError', [/* throw description */
					[/* text */ 't', `if the newly created class cannot be linked for any other reason`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any parameter is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Lookup`],
				[/* text */ 't', ` object on the hidden class,
 with `],
				[/* text */ 't', `original`],
				[/* text */ 't', ` and
 `],
				[/* reference */ 'r', `#hasFullPrivilegeAccess()`, `full privilege`],
				[/* text */ 't', ` access`]
			]
		]],
		[/* method */ 'dropLookupMode(int)', [
			[/* method description */
				[/* text */ 't', `Creates a lookup on the same lookup class which this lookup object
 finds members, but with a lookup mode that has lost the given lookup mode.
 The lookup mode to drop is one of `],
				[/* text */ 't', `PUBLIC`],
				[/* text */ 't', `, `],
				[/* text */ 't', `MODULE`],
				[/* text */ 't', `, `],
				[/* text */ 't', `PACKAGE`],
				[/* text */ 't', `, `],
				[/* text */ 't', `PROTECTED`],
				[/* text */ 't', `,
 `],
				[/* text */ 't', `PRIVATE`],
				[/* text */ 't', `, `],
				[/* text */ 't', `ORIGINAL`],
				[/* text */ 't', `, or
 `],
				[/* text */ 't', `UNCONDITIONAL`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this lookup is a `],
					[/* reference */ 'r', `.MethodHandles#publicLookup()`],
					[/* text */ 't', `,
 this lookup has `],
					[/* inline code block */ 'i', `UNCONDITIONAL`],
					[/* text */ 't', ` mode set and it has no other mode set.
 When dropping `],
					[/* inline code block */ 'i', `UNCONDITIONAL`],
					[/* text */ 't', ` on a public lookup then the resulting
 lookup has no access.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If this lookup is not a public lookup, then the following applies
 regardless of its `],
					[/* reference */ 'r', `#lookupModes()`, `lookup modes`],
					[/* text */ 't', `.
 `],
					[/* text */ 't', `PROTECTED`],
					[/* text */ 't', ` and `],
					[/* text */ 't', `ORIGINAL`],
					[/* text */ 't', ` are always
 dropped and so the resulting lookup mode will never have these access
 capabilities. When dropping `],
					[/* inline code block */ 'i', `PACKAGE`],
					[/* text */ 't', `
 then the resulting lookup will not have `],
					[/* inline code block */ 'i', `PACKAGE`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `PRIVATE`],
					[/* text */ 't', `
 access. When dropping `],
					[/* inline code block */ 'i', `MODULE`],
					[/* text */ 't', ` then the resulting lookup will not
 have `],
					[/* inline code block */ 'i', `MODULE`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `PACKAGE`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `PRIVATE`],
					[/* text */ 't', ` access.
 When dropping `],
					[/* inline code block */ 'i', `PUBLIC`],
					[/* text */ 't', ` then the resulting lookup has no access.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'modeToDrop', [/* parameter description */
					[/* text */ 't', `the lookup mode to drop`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `modeToDrop`],
					[/* text */ 't', ` is not one of `],
					[/* inline code block */ 'i', `PUBLIC`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `MODULE`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `PACKAGE`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `PROTECTED`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `PRIVATE`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `ORIGINAL`],
					[/* text */ 't', `
 or `],
					[/* inline code block */ 'i', `UNCONDITIONAL`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a lookup object which lacks the indicated mode, or the same object if there is no change`]
			]
		]],
		[/* method */ 'in(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Creates a lookup on the specified new lookup class.
 The resulting object will report the specified
 class as its own `],
				[/* reference */ 'r', `#lookupClass()`, `lookupClass`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 However, the resulting `],
					[/* inline code block */ 'i', `Lookup`],
					[/* text */ 't', ` object is guaranteed
 to have no more access capabilities than the original.
 In particular, access capabilities can be lost as follows:`]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If the new lookup class is different from the old lookup class,
 i.e. `],
						[/* text */ 't', `ORIGINAL`],
						[/* text */ 't', ` access is lost.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the new lookup class is in a different module from the old one,
 i.e. `],
						[/* text */ 't', `MODULE`],
						[/* text */ 't', ` access is lost.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the new lookup class is in a different package
 than the old one, protected and default (package) members will not be accessible,
 i.e. `],
						[/* text */ 't', `PROTECTED`],
						[/* text */ 't', ` and `],
						[/* text */ 't', `PACKAGE`],
						[/* text */ 't', ` access are lost.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the new lookup class is not within the same package member
 as the old one, private members will not be accessible, and protected members
 will not be accessible by virtue of inheritance,
 i.e. `],
						[/* text */ 't', `PRIVATE`],
						[/* text */ 't', ` access is lost.
 (Protected members may continue to be accessible because of package sharing.)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the new lookup class is not
 `],
						[/* reference */ 'r', `#accessClass(java.lang.Class)`, `accessible`],
						[/* text */ 't', ` to this lookup,
 then no members, not even public members, will be accessible
 i.e. all access modes are lost.
 `]
					]],
					[/* block */ 'b', `If the new lookup class, the old lookup class and the previous lookup class
 are all in different modules i.e. teleporting to a third module,
 all access modes are lost.
 `]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 The new previous lookup class is chosen as follows:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If the new lookup object has `],
						[/* text */ 't', `UNCONDITIONAL`],
						[/* text */ 't', ` bit,
 the new previous lookup class is `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', `If the new lookup class is in the same module as the old lookup class,
 the new previous lookup class is the old previous lookup class.
 `],
					[/* block */ 'b', `If the new lookup class is in a different module from the old lookup class,
 the new previous lookup class is the old lookup class.
`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The resulting lookup's capabilities for loading classes
 (used during `],
					[/* reference */ 'r', `#findClass(java.lang.String)`, `findClass(java.lang.String)`],
					[/* text */ 't', ` invocations)
 are determined by the lookup class' loader,
 which may change due to this operation.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'requestedLookupClass', [/* parameter description */
					[/* text */ 't', `the desired lookup class for the new lookup object`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `requestedLookupClass`],
					[/* text */ 't', ` is a primitive type or void or array class`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a lookup object which reports the desired lookup class, or the same object
 if there is no change`]
			]
		]],
		[/* method */ 'findStaticVarHandle(java.lang.Class,java.lang.String,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Produces a VarHandle giving access to a static field `],
				[/* inline code block */ 'i', `name`],
				[/* text */ 't', ` of
 type `],
				[/* inline code block */ 'i', `type`],
				[/* text */ 't', ` declared in a class of type `],
				[/* inline code block */ 'i', `decl`],
				[/* text */ 't', `.
 The VarHandle's variable type is `],
				[/* inline code block */ 'i', `type`],
				[/* text */ 't', ` and it has no
 coordinate types.
 `],
				[/* block */ 'b', `
 Access checking is performed immediately on behalf of the lookup
 class.
 `],
				[/* block */ 'b', `
 If the returned VarHandle is operated on, the declaring class will be
 initialized, if it has not already been initialized.
 `],
				[/* block */ 'b', `
 Certain access modes of the returned VarHandle are unsupported under
 the following conditions:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `if the field is declared `],
						[/* inline code block */ 'i', `final`],
						[/* text */ 't', `, then the write, atomic
     update, numeric atomic update, and bitwise atomic update access
     modes are unsupported.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `if the field type is anything other than `],
						[/* inline code block */ 'i', `byte`],
						[/* text */ 't', `,
     `],
						[/* inline code block */ 'i', `short`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `char`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `int`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', `,
     `],
						[/* inline code block */ 'i', `float`],
						[/* text */ 't', `, or `],
						[/* inline code block */ 'i', `double`],
						[/* text */ 't', `, then numeric atomic update
     access modes are unsupported.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `if the field type is anything other than `],
						[/* inline code block */ 'i', `boolean`],
						[/* text */ 't', `,
     `],
						[/* inline code block */ 'i', `byte`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `short`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `char`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `int`],
						[/* text */ 't', ` or
     `],
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', ` then bitwise atomic update access modes are
     unsupported.
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is declared `],
					[/* inline code block */ 'i', `volatile`],
					[/* text */ 't', ` then the returned VarHandle
 will override access to the field (effectively ignore the
 `],
					[/* inline code block */ 'i', `volatile`],
					[/* text */ 't', ` declaration) in accordance to its specified
 access modes.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field type is `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` then numeric
 and atomic update access modes compare values using their bitwise
 representation (see `],
					[/* reference */ 'r', `java.Float#floatToRawIntBits(float)`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.Double#doubleToRawLongBits(double)`],
					[/* text */ 't', `, respectively).`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'decl', [/* parameter description */
					[/* text */ 't', `the class that declares the static field`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the field's name`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the field's type, of type `],
					[/* inline code block */ 'i', `T`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NoSuchFieldException', [/* throw description */
					[/* text */ 't', `if the field does not exist`]
				]],
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if access checking fails, or if the field is not `],
					[/* inline code block */ 'i', `static`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is present and it
                              `],
					[/* reference */ 'r', `.MethodHandles.Lookup#secmgr`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a VarHandle giving access to a static field`]
			]
		]],
		[/* method */ 'findVarHandle(java.lang.Class,java.lang.String,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Produces a VarHandle giving access to a non-static field `],
				[/* inline code block */ 'i', `name`],
				[/* text */ 't', `
 of type `],
				[/* inline code block */ 'i', `type`],
				[/* text */ 't', ` declared in a class of type `],
				[/* inline code block */ 'i', `recv`],
				[/* text */ 't', `.
 The VarHandle's variable type is `],
				[/* inline code block */ 'i', `type`],
				[/* text */ 't', ` and it has one
 coordinate type, `],
				[/* inline code block */ 'i', `recv`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 Access checking is performed immediately on behalf of the lookup
 class.
 `],
				[/* block */ 'b', `
 Certain access modes of the returned VarHandle are unsupported under
 the following conditions:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `if the field is declared `],
						[/* inline code block */ 'i', `final`],
						[/* text */ 't', `, then the write, atomic
     update, numeric atomic update, and bitwise atomic update access
     modes are unsupported.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `if the field type is anything other than `],
						[/* inline code block */ 'i', `byte`],
						[/* text */ 't', `,
     `],
						[/* inline code block */ 'i', `short`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `char`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `int`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', `,
     `],
						[/* inline code block */ 'i', `float`],
						[/* text */ 't', `, or `],
						[/* inline code block */ 'i', `double`],
						[/* text */ 't', ` then numeric atomic update
     access modes are unsupported.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `if the field type is anything other than `],
						[/* inline code block */ 'i', `boolean`],
						[/* text */ 't', `,
     `],
						[/* inline code block */ 'i', `byte`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `short`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `char`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `int`],
						[/* text */ 't', ` or
     `],
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', ` then bitwise atomic update access modes are
     unsupported.
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is declared `],
					[/* inline code block */ 'i', `volatile`],
					[/* text */ 't', ` then the returned VarHandle
 will override access to the field (effectively ignore the
 `],
					[/* inline code block */ 'i', `volatile`],
					[/* text */ 't', ` declaration) in accordance to its specified
 access modes.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field type is `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` then numeric
 and atomic update access modes compare values using their bitwise
 representation (see `],
					[/* reference */ 'r', `java.Float#floatToRawIntBits(float)`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.Double#doubleToRawLongBits(double)`],
					[/* text */ 't', `, respectively).`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'recv', [/* parameter description */
					[/* text */ 't', `the receiver class, of type `],
					[/* inline code block */ 'i', `R`],
					[/* text */ 't', `, that declares the
 non-static field`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the field's name`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the field's type, of type `],
					[/* inline code block */ 'i', `T`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NoSuchFieldException', [/* throw description */
					[/* text */ 't', `if the field does not exist`]
				]],
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if access checking fails, or if the field is `],
					[/* inline code block */ 'i', `static`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is present and it
                              `],
					[/* reference */ 'r', `.MethodHandles.Lookup#secmgr`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a VarHandle giving access to non-static fields.`]
			]
		]],
		[/* method */ 'unreflectVarHandle(java.lang.reflect.Field)', [
			[/* method description */
				[/* text */ 't', `Produces a VarHandle giving access to a reflected field `],
				[/* inline code block */ 'i', `f`],
				[/* text */ 't', `
 of type `],
				[/* inline code block */ 'i', `T`],
				[/* text */ 't', ` declared in a class of type `],
				[/* inline code block */ 'i', `R`],
				[/* text */ 't', `.
 The VarHandle's variable type is `],
				[/* inline code block */ 'i', `T`],
				[/* text */ 't', `.
 If the field is non-static the VarHandle has one coordinate type,
 `],
				[/* inline code block */ 'i', `R`],
				[/* text */ 't', `.  Otherwise, the field is static, and the VarHandle has no
 coordinate types.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Access checking is performed immediately on behalf of the lookup
 class, regardless of the value of the field's `],
					[/* inline code block */ 'i', `accessible`],
					[/* text */ 't', `
 flag.
 `]
				]],
				[/* block */ 'b', `
 If the field is static, and if the returned VarHandle is operated
 on, the field's declaring class will be initialized, if it has not
 already been initialized.
 `],
				[/* block */ 'b', `
 Certain access modes of the returned VarHandle are unsupported under
 the following conditions:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `if the field is declared `],
						[/* inline code block */ 'i', `final`],
						[/* text */ 't', `, then the write, atomic
     update, numeric atomic update, and bitwise atomic update access
     modes are unsupported.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `if the field type is anything other than `],
						[/* inline code block */ 'i', `byte`],
						[/* text */ 't', `,
     `],
						[/* inline code block */ 'i', `short`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `char`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `int`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', `,
     `],
						[/* inline code block */ 'i', `float`],
						[/* text */ 't', `, or `],
						[/* inline code block */ 'i', `double`],
						[/* text */ 't', ` then numeric atomic update
     access modes are unsupported.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `if the field type is anything other than `],
						[/* inline code block */ 'i', `boolean`],
						[/* text */ 't', `,
     `],
						[/* inline code block */ 'i', `byte`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `short`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `char`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `int`],
						[/* text */ 't', ` or
     `],
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', ` then bitwise atomic update access modes are
     unsupported.
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is declared `],
					[/* inline code block */ 'i', `volatile`],
					[/* text */ 't', ` then the returned VarHandle
 will override access to the field (effectively ignore the
 `],
					[/* inline code block */ 'i', `volatile`],
					[/* text */ 't', ` declaration) in accordance to its specified
 access modes.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field type is `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` then numeric
 and atomic update access modes compare values using their bitwise
 representation (see `],
					[/* reference */ 'r', `java.Float#floatToRawIntBits(float)`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.Double#doubleToRawLongBits(double)`],
					[/* text */ 't', `, respectively).`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'f', [/* parameter description */
					[/* text */ 't', `the reflected field, with a field of type `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', `, and
 a declaring class of type `],
					[/* inline code block */ 'i', `R`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if access checking fails`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a VarHandle giving access to non-static fields or a static
 field`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Displays the name of the class from which lookups are to be made,
 followed by "/" and the name of the `],
				[/* reference */ 'r', `#previousLookupClass()`, `previous lookup class`],
				[/* text */ 't', ` if present.
 (The name is the one reported by `],
				[/* reference */ 'r', `java.Class#getName()`],
				[/* text */ 't', `.)
 If there are restrictions on the access permitted to this lookup,
 this is indicated by adding a suffix to the class name, consisting
 of a slash and a keyword.  The keyword represents the strongest
 allowed access, and is chosen as follows:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If no access is allowed, the suffix is "/noaccess".
 `],
					[/* block */ 'b', `If only unconditional access is allowed, the suffix is "/publicLookup".
 `],
					[/* block */ 'b', `If only public access to types in exported packages is allowed, the suffix is "/public".
 `],
					[/* block */ 'b', `If only public and module access are allowed, the suffix is "/module".
 `],
					[/* block */ 'b', `If public and package access are allowed, the suffix is "/package".
 `],
					[/* block */ 'b', `If public, package, and private access are allowed, the suffix is "/private".
 `]
				]],
				[/* text */ 't', `
 If none of the above cases apply, it is the case that
 `],
				[/* reference */ 'r', `#hasFullPrivilegeAccess()`, `full privilege access`],
				[/* text */ 't', `
 (public, module, package, private, and protected) is allowed.
 In this case, no suffix is added.
 This is true only of an object obtained originally from
 `],
				[/* reference */ 'r', `.MethodHandles#lookup()`],
				[/* text */ 't', `.
 Objects created by `],
				[/* reference */ 'r', `#in(java.lang.Class)`, `Lookup.in`],
				[/* text */ 't', `
 always have restricted access, and will display a suffix.
 `],
				[/* block */ 'b', `
 (It may seem strange that protected access should be
 stronger than private access.  Viewed independently from
 package access, protected access is the first to be lost,
 because it requires a direct subclass relationship between
 caller and callee.)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of the object.`]
			]
		]]
	],
]);
