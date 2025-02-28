import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.Method', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `Method`],
		[/* text */ 't', ` provides information about, and access to, a single method
 on a class or interface.  The reflected method may be a class method
 or an instance method (including an abstract method).

 `],
		[/* block */ 'b', [
			[/* text */ 't', `A `],
			[/* inline code block */ 'i', `Method`],
			[/* text */ 't', ` permits widening conversions to occur when matching the
 actual parameters to invoke with the underlying method's formal
 parameters, but it throws an `],
			[/* inline code block */ 'i', `IllegalArgumentException`],
			[/* text */ 't', ` if a
 narrowing conversion would occur.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'invoke(java.lang.Object,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Invokes the underlying method represented by this `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', `
 object, on the specified object with the specified parameters.
 Individual parameters are automatically unwrapped to match
 primitive formal parameters, and both primitive and reference
 parameters are subject to method invocation conversions as
 necessary.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the underlying method is static, then the specified `],
					[/* inline code block */ 'i', `obj`],
					[/* text */ 't', `
 argument is ignored. It may be null.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the number of formal parameters required by the underlying method is
 0, the supplied `],
					[/* inline code block */ 'i', `args`],
					[/* text */ 't', ` array may be of length 0 or null.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the underlying method is an instance method, it is invoked
 using dynamic method lookup as documented in The Java Language
 Specification, section `],
					[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-15.html#jls-15.12.4.4`, `15.12.4.4`],
					[/* text */ 't', `; in particular,
 overriding based on the runtime type of the target object may occur.

 `]
				]],
				[/* block */ 'b', `If the underlying method is static, the class that declared
 the method is initialized if it has not already been initialized.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the method completes normally, the value it returns is
 returned to the caller of invoke; if the value has a primitive
 type, it is first appropriately wrapped in an object. However,
 if the value has the type of an array of a primitive type, the
 elements of the array are `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` wrapped in objects; in
 other words, an array of primitive type is returned.  If the
 underlying method return type is void, the invocation returns
 null.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object the underlying method is invoked from`]
				]],
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `the arguments used for the method call`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Method`],
					[/* text */ 't', ` object
              is enforcing Java language access control and the underlying
              method is inaccessible.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the method is an
              instance method and the specified object argument
              is not an instance of the class or interface
              declaring the underlying method (or of a subclass
              or implementor thereof); if the number of actual
              and formal parameters differ; if an unwrapping
              conversion for primitive arguments fails; or if,
              after possible unwrapping, a parameter value
              cannot be converted to the corresponding formal
              parameter type by a method invocation conversion.`]
				]],
				[/* throw */ 'java.lang.reflect.InvocationTargetException', [/* throw description */
					[/* text */ 't', `if the underlying method
              throws an exception.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified object is null
              and the method is an instance method.`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the initialization
 provoked by this method fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the result of dispatching the method represented by
 this object on `],
				[/* inline code block */ 'i', `obj`],
				[/* text */ 't', ` with parameters
 `],
				[/* inline code block */ 'i', `args`]
			]
		]],
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of the method represented by this `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', `
 object, as a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the simple name of the underlying member`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares this `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', ` against the specified object.  Returns
 true if the objects are the same.  Two `],
				[/* inline code block */ 'i', `Methods`],
				[/* text */ 't', ` are the same if
 they were declared by the same class and have the same name
 and formal parameter types and return type.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the reference object with which to compare.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this object is the same as the obj
          argument; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', `.  The string is
 formatted as the method access modifiers, if any, followed by
 the method return type, followed by a space, followed by the
 class declaring the method, followed by a period, followed by
 the method name, followed by a parenthesized, comma-separated
 list of the method's formal parameter types. If the method
 throws checked exceptions, the parameter list is followed by a
 space, followed by the word "`],
				[/* inline code block */ 'i', `throws`],
				[/* text */ 't', `" followed by a
 comma-separated list of the thrown exception types.
 For example:
 `],
				[/* code block */ 'c', `    public boolean java.lang.Object.equals(java.lang.Object)
 `],
				[/* block */ 'b', [
					[/* text */ 't', `The access modifiers are placed in canonical order as
 specified by "The Java Language Specification".  This is
 `],
					[/* inline code block */ 'i', `public`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `protected`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `private`],
					[/* text */ 't', ` first,
 and then other modifiers in the following order:
 `],
					[/* inline code block */ 'i', `abstract`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `default`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `static`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `final`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `synchronized`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `native`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `strictfp`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string describing this `],
				[/* inline code block */ 'i', `Method`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hashcode for this `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', `.  The hashcode is computed
 as the exclusive-or of the hashcodes for the underlying
 method's declaring class name and the method's name.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'getModifiers()', [
			[/* method description */
				[/* text */ 't', `Returns the Java language `],
				[/* reference */ 'r', `java.lang.reflect.Modifier`],
				[/* text */ 't', ` for
 the executable represented by this object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the Java language `],
				[/* reference */ 'r', `java.lang.reflect.Modifier`],
				[/* text */ 't', ` for
 the executable represented by this object`]
			]
		]],
		[/* method */ 'getTypeParameters()', [
			[/* method description */
				[/* text */ 't', `Returns an array of `],
				[/* inline code block */ 'i', `TypeVariable`],
				[/* text */ 't', ` objects that represent the
 type variables declared by the generic declaration represented by this
 `],
				[/* inline code block */ 'i', `GenericDeclaration`],
				[/* text */ 't', ` object, in declaration order.  Returns an
 array of length 0 if the underlying generic declaration declares no type
 variables.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.reflect.GenericSignatureFormatError', [/* throw description */
					[/* text */ 't', `if the generic
     signature of this generic declaration does not conform to
     the format specified in
     `],
					[/* text */ 't', `The Java Virtual Machine Specification`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an array of `],
				[/* inline code block */ 'i', `TypeVariable`],
				[/* text */ 't', ` objects that represent
     the type variables declared by this generic declaration`]
			]
		]],
		[/* method */ 'getReturnType()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object that represents the formal return type
 of the method represented by this `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', ` object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the return type for the method this object represents`]
			]
		]],
		[/* method */ 'getParameterTypes()', [
			[/* method description */
				[/* text */ 't', `Returns an array of `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` objects that represent the formal
 parameter types, in declaration order, of the executable
 represented by this object.  Returns an array of length
 0 if the underlying executable takes no parameters.
 Note that the constructors of some inner classes
 may have an implicitly declared parameter in addition to
 explicitly declared ones.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the parameter types for the executable this object
 represents`]
			]
		]],
		[/* method */ 'toGenericString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', `, including type
 parameters.  The string is formatted as the method access
 modifiers, if any, followed by an angle-bracketed
 comma-separated list of the method's type parameters, if any,
 including informative bounds of the type parameters, if any,
 followed by the method's generic return type, followed by a
 space, followed by the class declaring the method, followed by
 a period, followed by the method name, followed by a
 parenthesized, comma-separated list of the method's generic
 formal parameter types.

 If this method was declared to take a variable number of
 arguments, instead of denoting the last parameter as
 "`],
				[/* inline code block */ 'i', `Type[]`],
				[/* text */ 't', `", it is denoted as
 "`],
				[/* inline code block */ 'i', `Type...`],
				[/* text */ 't', `".

 A space is used to separate access modifiers from one another
 and from the type parameters or return type.  If there are no
 type parameters, the type parameter list is elided; if the type
 parameter list is present, a space separates the list from the
 class name.  If the method is declared to throw exceptions, the
 parameter list is followed by a space, followed by the word
 "`],
				[/* inline code block */ 'i', `throws`],
				[/* text */ 't', `" followed by a comma-separated list of the generic
 thrown exception types.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The access modifiers are placed in canonical order as
 specified by "The Java Language Specification".  This is
 `],
					[/* inline code block */ 'i', `public`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `protected`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `private`],
					[/* text */ 't', ` first,
 and then other modifiers in the following order:
 `],
					[/* inline code block */ 'i', `abstract`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `default`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `static`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `final`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `synchronized`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `native`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `strictfp`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string describing this `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', `,
 include type parameters`]
			]
		]],
		[/* method */ 'isSynthetic()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this executable is a synthetic
 construct; returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if and only if this executable is a synthetic
 construct as defined by
 `],
				[/* text */ 't', `The Java Language Specification`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getDeclaringClass()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object representing the class or interface
 that declares the method represented by this object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an object representing the declaring class of the
 underlying member`]
			]
		]],
		[/* method */ 'getAnnotation(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns this element's annotation for the specified type if
 such an annotation is `],
				[/* text */ 't', `present`],
				[/* text */ 't', `, else null.

 `],
				[/* block */ 'b', ` Note that any annotation returned by this method is a
 declaration annotation.`]
			],
			[/* parameters */
				[/* parameter */ 'annotationClass', [/* parameter description */
					[/* text */ 't', `the Class object corresponding to the
        annotation type`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given annotation class is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this element's annotation for the specified annotation type if
     present on this element, else null`]
			]
		]],
		[/* method */ 'getDeclaredAnnotations()', [
			[/* method description */
				[/* text */ 't', `Returns annotations that are `],
				[/* text */ 't', `directly present`],
				[/* text */ 't', ` on this element.
 This method ignores inherited annotations.

 If there are no annotations `],
				[/* text */ 't', `directly present`],
				[/* text */ 't', ` on this element,
 the return value is an array of length 0.

 The caller of this method is free to modify the returned array; it will
 have no effect on the arrays returned to other callers.

 `],
				[/* block */ 'b', ` Note that any annotations returned by this method are
 declaration annotations.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `annotations directly present on this element`]
			]
		]],
		[/* method */ 'setAccessible(boolean)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Set the `],
					[/* inline code block */ 'i', `accessible`],
					[/* text */ 't', ` flag for this reflected object to
 the indicated boolean value.  A value of `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` indicates that
 the reflected object should suppress checks for Java language access
 control when it is used. A value of `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` indicates that
 the reflected object should enforce checks for Java language access
 control when it is used, with the variation noted in the class description.

 `],
					[/* block */ 'b', [
						[/* text */ 't', ` This method may be used by a caller in class `],
						[/* inline code block */ 'i', `C`],
						[/* text */ 't', ` to enable
 access to a `],
						[/* reference */ 'r', `java.lang.reflect.Member`],
						[/* text */ 't', ` of `],
						[/* external link */ 'a', `Member.html#getDeclaringClass()`, `declaring class`],
						[/* inline code block */ 'i', `D`],
						[/* text */ 't', ` if any of the following hold: `]
					]],
					[/* list */ 'l', [
						[/* block */ 'b', [
							[/* inline code block */ 'i', `C`],
							[/* text */ 't', ` and `],
							[/* inline code block */ 'i', `D`],
							[/* text */ 't', ` are in the same module. `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` The member is `],
							[/* inline code block */ 'i', `public`],
							[/* text */ 't', ` and `],
							[/* inline code block */ 'i', `D`],
							[/* text */ 't', ` is `],
							[/* inline code block */ 'i', `public`],
							[/* text */ 't', ` in
     a package that the module containing `],
							[/* inline code block */ 'i', `D`],
							[/* external link */ 'a', `../Module.html#isExported(java.lang.String,java.lang.Module)`, `exports`],
							[/* text */ 't', ` to at least the module
     containing `],
							[/* inline code block */ 'i', `C`],
							[/* text */ 't', `. `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` The member is `],
							[/* inline code block */ 'i', `protected`],
							[/* inline code block */ 'i', `static`],
							[/* text */ 't', `, `],
							[/* inline code block */ 'i', `D`],
							[/* text */ 't', ` is
     `],
							[/* inline code block */ 'i', `public`],
							[/* text */ 't', ` in a package that the module containing `],
							[/* inline code block */ 'i', `D`],
							[/* text */ 't', `
     exports to at least the module containing `],
							[/* inline code block */ 'i', `C`],
							[/* text */ 't', `, and `],
							[/* inline code block */ 'i', `C`],
							[/* text */ 't', `
     is a subclass of `],
							[/* inline code block */ 'i', `D`],
							[/* text */ 't', `. `]
						]],
						[/* block */ 'b', [
							[/* inline code block */ 'i', `D`],
							[/* text */ 't', ` is in a package that the module containing `],
							[/* inline code block */ 'i', `D`],
							[/* external link */ 'a', `../Module.html#isOpen(java.lang.String,java.lang.Module)`, `opens`],
							[/* text */ 't', ` to at least the module
     containing `],
							[/* inline code block */ 'i', `C`],
							[/* text */ 't', `.
     All packages in unnamed and open modules are open to all modules and
     so this method always succeeds when `],
							[/* inline code block */ 'i', `D`],
							[/* text */ 't', ` is in an unnamed or
     open module. `]
						]]
					]],
					[/* block */ 'b', ` This method cannot be used to enable access to private members,
 members with default (package) access, protected instance members, or
 protected constructors when the declaring class is in a different module
 to the caller and the package containing the declaring class is not open
 to the caller's module. `],
					[/* block */ 'b', [
						[/* text */ 't', ` This method cannot be used to enable `],
						[/* external link */ 'a', `Field.html#set(java.lang.Object,java.lang.Object)`, `write`],
						[/* text */ 't', `
 access to a `],
						[/* text */ 't', `non-modifiable`],
						[/* text */ 't', ` final field.  The following fields
 are non-modifiable:
 `]
					]],
					[/* list */ 'l', [
						[/* block */ 'b', `static final fields declared in any class or interface`],
						[/* block */ 'b', [
							[/* text */ 't', `final fields declared in a `],
							[/* external link */ 'a', `../Class.html#isHidden()`, `hidden class`]
						]],
						[/* block */ 'b', [
							[/* text */ 't', `final fields declared in a `],
							[/* external link */ 'a', `../Class.html#isRecord()`, `record`]
						]]
					]],
					[/* block */ 'b', ''],
					[/* block */ 'b', [
						[/* text */ 't', ` The `],
						[/* inline code block */ 'i', `accessible`],
						[/* text */ 't', ` flag when `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', ` suppresses Java language access
 control checks to only enable `],
						[/* external link */ 'a', `Field.html#get(java.lang.Object)`, `read`],
						[/* text */ 't', ` access to
 these non-modifiable final fields.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` If there is a security manager, its
 `],
						[/* inline code block */ 'i', `checkPermission`],
						[/* text */ 't', ` method is first called with a
 `],
						[/* inline code block */ 'i', `ReflectPermission("suppressAccessChecks")`],
						[/* text */ 't', ` permission.`]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'flag', [/* parameter description */
					[/* text */ 't', `the new value for the `],
					[/* inline code block */ 'i', `accessible`],
					[/* text */ 't', ` flag`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.reflect.InaccessibleObjectException', [/* throw description */
					[/* text */ 't', `if access cannot be enabled`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the request is denied by the security manager`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'isVarArgs()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this executable was declared to take a
 variable number of arguments; returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this executable was declared to take a
 variable number of arguments; returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'getParameterCount()', [
			[/* method description */
				[/* text */ 't', `Returns the number of formal parameters (whether explicitly
 declared or implicitly declared or neither) for the executable
 represented by this object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The number of formal parameters for the executable this
 object represents`]
			]
		]],
		[/* method */ 'getParameterAnnotations()', [
			[/* method description */
				[/* text */ 't', `Returns an array of arrays of `],
				[/* inline code block */ 'i', `Annotation`],
				[/* text */ 't', `s that
 represent the annotations on the formal parameters, in
 declaration order, of the `],
				[/* inline code block */ 'i', `Executable`],
				[/* text */ 't', ` represented by
 this object.  Synthetic and mandated parameters (see
 explanation below), such as the outer "this" parameter to an
 inner class constructor will be represented in the returned
 array.  If the executable has no parameters (meaning no formal,
 no synthetic, and no mandated parameters), a zero-length array
 will be returned.  If the `],
				[/* inline code block */ 'i', `Executable`],
				[/* text */ 't', ` has one or more
 parameters, a nested array of length zero is returned for each
 parameter with no annotations. The annotation objects contained
 in the returned arrays are serializable.  The caller of this
 method is free to modify the returned arrays; it will have no
 effect on the arrays returned to other callers.

 A compiler may add extra parameters that are implicitly
 declared in source ("mandated"), as well as parameters that
 are neither implicitly nor explicitly declared in source
 ("synthetic") to the parameter list for a method.  See `],
				[/* reference */ 'r', `java.lang.reflect.Parameter`],
				[/* text */ 't', ` for more information.

 `],
				[/* block */ 'b', `Note that any annotations returned by this method are
 declaration annotations.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array of arrays that represent the annotations on
    the formal and implicit parameters, in declaration order, of
    the executable represented by this object`]
			]
		]],
		[/* method */ 'getGenericParameterTypes()', [
			[/* method description */
				[/* text */ 't', `Returns an array of `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', ` objects that represent the
 formal parameter types, in declaration order, of the executable
 represented by this object. An array of length 0 is returned if the
 underlying executable takes no parameters.  Note that the
 constructors of some inner classes may have an implicitly
 declared parameter in addition to explicitly declared ones.
 Also note that as a `],
				[/* external link */ 'a', `../../../../java.base/java/lang/reflect/package-summary.html#LanguageJvmModel`, `modeling artifact`],
				[/* text */ 't', `, the number of returned parameters can differ
 depending on whether or not generic information is present. If
 generic information is present, only parameters explicitly
 present in the source will be returned; if generic information
 is not present, implicit and synthetic parameters may be
 returned as well.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If a formal parameter type is a parameterized type,
 the `],
					[/* inline code block */ 'i', `Type`],
					[/* text */ 't', ` object returned for it must accurately reflect
 the actual type arguments used in the source code.

 `]
				]],
				[/* block */ 'b', `If a formal parameter type is a type variable or a parameterized
 type, it is created. Otherwise, it is resolved.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.reflect.GenericSignatureFormatError', [/* throw description */
					[/* text */ 't', `if the generic method signature does not conform to the format
     specified in
     `],
					[/* text */ 't', `The Java Virtual Machine Specification`]
				]],
				[/* throw */ 'java.lang.TypeNotPresentException', [/* throw description */
					[/* text */ 't', `if any of the parameter
     types of the underlying executable refers to a non-existent type
     declaration`]
				]],
				[/* throw */ 'java.lang.reflect.MalformedParameterizedTypeException', [/* throw description */
					[/* text */ 't', `if any of
     the underlying executable's parameter types refer to a parameterized
     type that cannot be instantiated for any reason`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an array of `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', `s that represent the formal
     parameter types of the underlying executable, in declaration order`]
			]
		]],
		[/* method */ 'getGenericExceptionTypes()', [
			[/* method description */
				[/* text */ 't', `Returns an array of `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', ` objects that represent the
 exceptions declared to be thrown by this executable object.
 Returns an array of length 0 if the underlying executable declares
 no exceptions in its `],
				[/* inline code block */ 'i', `throws`],
				[/* text */ 't', ` clause.

 `],
				[/* block */ 'b', `If an exception type is a type variable or a parameterized
 type, it is created. Otherwise, it is resolved.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.reflect.GenericSignatureFormatError', [/* throw description */
					[/* text */ 't', `if the generic method signature does not conform to the format
     specified in
     `],
					[/* text */ 't', `The Java Virtual Machine Specification`]
				]],
				[/* throw */ 'java.lang.TypeNotPresentException', [/* throw description */
					[/* text */ 't', `if the underlying executable's
     `],
					[/* inline code block */ 'i', `throws`],
					[/* text */ 't', ` clause refers to a non-existent type declaration`]
				]],
				[/* throw */ 'java.lang.reflect.MalformedParameterizedTypeException', [/* throw description */
					[/* text */ 't', `if
     the underlying executable's `],
					[/* inline code block */ 'i', `throws`],
					[/* text */ 't', ` clause refers to a
     parameterized type that cannot be instantiated for any reason`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an array of Types that represent the exception types
     thrown by the underlying executable`]
			]
		]],
		[/* method */ 'isDefault()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this method is a default
 method; returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.

 A default method is a public non-abstract instance method, that
 is, a non-static method with a body, declared in an interface.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if and only if this method is a default
 method as defined by the Java Language Specification.`]
			]
		]],
		[/* method */ 'getGenericReturnType()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', ` object that represents the formal return
 type of the method represented by this `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', ` object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the return type is a parameterized type,
 the `],
					[/* inline code block */ 'i', `Type`],
					[/* text */ 't', ` object returned must accurately reflect
 the actual type arguments used in the source code.

 `]
				]],
				[/* block */ 'b', `If the return type is a type variable or a parameterized type, it
 is created. Otherwise, it is resolved.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.reflect.GenericSignatureFormatError', [/* throw description */
					[/* text */ 't', `if the generic method signature does not conform to the format
     specified in
     `],
					[/* text */ 't', `The Java Virtual Machine Specification`]
				]],
				[/* throw */ 'java.lang.TypeNotPresentException', [/* throw description */
					[/* text */ 't', `if the underlying method's
     return type refers to a non-existent class or interface declaration`]
				]],
				[/* throw */ 'java.lang.reflect.MalformedParameterizedTypeException', [/* throw description */
					[/* text */ 't', `if the
     underlying method's return type refers to a parameterized
     type that cannot be instantiated for any reason`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', ` object that represents the formal return
     type of the underlying  method`]
			]
		]],
		[/* method */ 'getExceptionTypes()', [
			[/* method description */
				[/* text */ 't', `Returns an array of `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` objects that represent the
 types of exceptions declared to be thrown by the underlying
 executable represented by this object.  Returns an array of
 length 0 if the executable declares no exceptions in its `],
				[/* inline code block */ 'i', `throws`],
				[/* text */ 't', ` clause.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the exception types declared as being thrown by the
 executable this object represents`]
			]
		]],
		[/* method */ 'isBridge()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this method is a bridge
 method; returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this method is a bridge
 method; returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'getDefaultValue()', [
			[/* method description */
				[/* text */ 't', `Returns the default value for the annotation member represented by
 this `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', ` instance.  If the member is of a primitive type,
 an instance of the corresponding wrapper type is returned. Returns
 null if no default is associated with the member, or if the method
 instance does not represent a declared member of an annotation type.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.TypeNotPresentException', [/* throw description */
					[/* text */ 't', `if the annotation is of type
     `],
					[/* reference */ 'r', `java.lang.Class`],
					[/* text */ 't', ` and no definition can be found for the
     default class value.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the default value for the annotation member represented
     by this `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', ` instance.`]
			]
		]],
		[/* method */ 'getAnnotatedReturnType()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `AnnotatedType`],
				[/* text */ 't', ` object that represents the use of a type to
 specify the return type of the method/constructor represented by this
 Executable.

 If this `],
				[/* inline code block */ 'i', `Executable`],
				[/* text */ 't', ` object represents a constructor, the `],
				[/* inline code block */ 'i', `AnnotatedType`],
				[/* text */ 't', ` object represents the type of the constructed object.

 If this `],
				[/* inline code block */ 'i', `Executable`],
				[/* text */ 't', ` object represents a method, the `],
				[/* inline code block */ 'i', `AnnotatedType`],
				[/* text */ 't', ` object represents the use of a type to specify the return
 type of the method.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an object representing the return type of the method
 or constructor represented by this `],
				[/* inline code block */ 'i', `Executable`]
			]
		]]
	],
]);
