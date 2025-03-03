import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.Constructor', [
	[/* class description */
		[/* inline code block */ 'i', `Constructor`],
		[/* text */ 't', ` provides information about, and access to, a single
 constructor for a class.

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `Constructor`],
			[/* text */ 't', ` permits widening conversions to occur when matching the
 actual parameters to newInstance() with the underlying
 constructor's formal parameters, but throws an
 `],
			[/* inline code block */ 'i', `IllegalArgumentException`],
			[/* text */ 't', ` if a narrowing conversion would occur.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of this constructor, as a string.  This is
 the binary name of the constructor's declaring class.`]
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
				[/* inline code block */ 'i', `Constructor`],
				[/* text */ 't', ` against the specified object.
 Returns true if the objects are the same.  Two `],
				[/* inline code block */ 'i', `Constructor`],
				[/* text */ 't', ` objects are
 the same if they were declared by the same class and have the
 same formal parameter types.`]
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
				[/* inline code block */ 'i', `Constructor`],
				[/* text */ 't', `.  The string is
 formatted as the constructor access modifiers, if any,
 followed by the fully-qualified name of the declaring class,
 followed by a parenthesized, comma-separated list of the
 constructor's formal parameter types.  For example:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `public java.util.HashMap(int,float)`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the constructor is declared to throw exceptions, the
 parameter list is followed by a space, followed by the word
 "`],
					[/* inline code block */ 'i', `throws`],
					[/* text */ 't', `" followed by a comma-separated list of the
 thrown exception types.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The only possible modifiers for constructors are the access
 modifiers `],
					[/* inline code block */ 'i', `public`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `protected`],
					[/* text */ 't', ` or
 `],
					[/* inline code block */ 'i', `private`],
					[/* text */ 't', `.  Only one of these may appear, or none if the
 constructor has default (package) access.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string describing this `],
				[/* inline code block */ 'i', `Constructor`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hashcode for this `],
				[/* inline code block */ 'i', `Constructor`],
				[/* text */ 't', `. The hashcode is
 the same as the hashcode for the underlying constructor's
 declaring class name.`]
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
		[/* method */ 'newInstance(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Uses the constructor represented by this `],
				[/* inline code block */ 'i', `Constructor`],
				[/* text */ 't', ` object to
 create and initialize a new instance of the constructor's
 declaring class, with the specified initialization parameters.
 Individual parameters are automatically unwrapped to match
 primitive formal parameters, and both primitive and reference
 parameters are subject to method invocation conversions as necessary.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the number of formal parameters required by the underlying constructor
 is 0, the supplied `],
					[/* inline code block */ 'i', `initargs`],
					[/* text */ 't', ` array may be of length 0 or null.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the constructor's declaring class is an inner class in a
 non-static context, the first argument to the constructor needs
 to be the enclosing instance; see section `],
					[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-15.html#jls-15.9.3`, `15.9.3`],
					[/* text */ 't', ` of
 `],
					[/* text */ 't', `The Java Language Specification`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', `If the required access and argument checks succeed and the
 instantiation will proceed, the constructor's declaring class
 is initialized if it has not already been initialized.

 `],
				[/* block */ 'b', `If the constructor completes normally, returns the newly
 created and initialized instance.`]
			],
			[/* parameters */
				[/* parameter */ 'initargs', [/* parameter description */
					[/* text */ 't', `array of objects to be passed as arguments to
 the constructor call; values of primitive types are wrapped in
 a wrapper object of the appropriate type (e.g. a `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', `
 in a `],
					[/* reference */ 'r', `java.lang.Float`],
					[/* text */ 't', `)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Constructor`],
					[/* text */ 't', ` object
              is enforcing Java language access control and the underlying
              constructor is inaccessible.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the number of actual
              and formal parameters differ; if an unwrapping
              conversion for primitive arguments fails; or if,
              after possible unwrapping, a parameter value
              cannot be converted to the corresponding formal
              parameter type by a method invocation conversion; if
              this constructor pertains to an enum class.`]
				]],
				[/* throw */ 'java.lang.InstantiationException', [/* throw description */
					[/* text */ 't', `if the class that declares the
              underlying constructor represents an abstract class.`]
				]],
				[/* throw */ 'java.lang.reflect.InvocationTargetException', [/* throw description */
					[/* text */ 't', `if the underlying constructor
              throws an exception.`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the initialization provoked
              by this method fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new object created by calling the constructor
 this object represents`]
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
				[/* inline code block */ 'i', `Constructor`],
				[/* text */ 't', `,
 including type parameters.  The string is formatted as the
 constructor access modifiers, if any, followed by an
 angle-bracketed comma separated list of the constructor's type
 parameters, if any, including  informative bounds of the
 type parameters, if any, followed by the fully-qualified name of the
 declaring class, followed by a parenthesized, comma-separated
 list of the constructor's generic formal parameter types.

 If this constructor was declared to take a variable number of
 arguments, instead of denoting the last parameter as
 "`],
				[/* inline code block */ 'i', `Type[]`],
				[/* text */ 't', `", it is denoted as
 "`],
				[/* inline code block */ 'i', `Type...`],
				[/* text */ 't', `".

 A space is used to separate access modifiers from one another
 and from the type parameters or class name.  If there are no
 type parameters, the type parameter list is elided; if the type
 parameter list is present, a space separates the list from the
 class name.  If the constructor is declared to throw
 exceptions, the parameter list is followed by a space, followed
 by the word "`],
				[/* inline code block */ 'i', `throws`],
				[/* text */ 't', `" followed by a
 comma-separated list of the generic thrown exception types.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The only possible modifiers for constructors are the access
 modifiers `],
					[/* inline code block */ 'i', `public`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `protected`],
					[/* text */ 't', ` or
 `],
					[/* inline code block */ 'i', `private`],
					[/* text */ 't', `.  Only one of these may appear, or none if the
 constructor has default (package) access.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string describing this `],
				[/* inline code block */ 'i', `Constructor`],
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
				[/* text */ 't', ` object representing the class that
 declares the constructor represented by this object.`]
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
					[/* reference */ 'r', `.Member#getDeclaringClass()`],
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
						[/* reference */ 'r', `java.Module#isExported(java.lang.String,java.lang.Module)`],
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
						[/* reference */ 'r', `java.Module#isOpen(java.lang.String,java.lang.Module)`],
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
					[/* reference */ 'r', `.Field#set(java.lang.Object,java.lang.Object)`],
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
						[/* reference */ 'r', `java.Class#isHidden()`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `final fields declared in a `],
						[/* reference */ 'r', `java.Class#isRecord()`]
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
					[/* reference */ 'r', `.Field#get(java.lang.Object)`],
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
					[/* text */ 't', ` permission.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` A `],
					[/* inline code block */ 'i', `SecurityException`],
					[/* text */ 't', ` is also thrown if this object is a
 `],
					[/* inline code block */ 'i', `Constructor`],
					[/* text */ 't', ` object for the class `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `flag`],
					[/* text */ 't', `
 is true. `]
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
					[/* text */ 't', `if the request is denied by the security manager
         or this is a constructor for `],
					[/* inline code block */ 'i', `java.lang.Class`]
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
				[/* text */ 't', `modeling artifact`],
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
		]],
		[/* method */ 'getAnnotatedReceiverType()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `AnnotatedType`],
				[/* text */ 't', ` object that represents the use of a
 type to specify the receiver type of the method/constructor represented
 by this `],
				[/* inline code block */ 'i', `Executable`],
				[/* text */ 't', ` object.

 The receiver type of a method/constructor is available only if the
 method/constructor has a receiver parameter (JLS `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-8.html#jls-8.4.1`, `8.4.1`],
				[/* text */ 't', `). If this `],
				[/* inline code block */ 'i', `Executable`],
				[/* text */ 't', ` object `],
				[/* text */ 't', `represents an instance method or represents a
 constructor of an inner member class`],
				[/* text */ 't', `, and the
 method/constructor `],
				[/* text */ 't', `either`],
				[/* text */ 't', ` has no receiver parameter or has a
 receiver parameter with no annotations on its type, then the return
 value is an `],
				[/* inline code block */ 'i', `AnnotatedType`],
				[/* text */ 't', ` object representing an element with no
 annotations.

 If this `],
				[/* inline code block */ 'i', `Executable`],
				[/* text */ 't', ` object represents a static method or
 represents a constructor of a top level, static member, local, or
 anonymous class, then the return value is null.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an object representing the receiver type of the method or
 constructor represented by this `],
				[/* inline code block */ 'i', `Executable`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if
 this `],
				[/* inline code block */ 'i', `Executable`],
				[/* text */ 't', ` can not have a receiver parameter`]
			]
		]]
	],
]);
