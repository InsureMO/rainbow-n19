import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.Executable', [
	[/* class description */
		[/* text */ 't', `A shared superclass for the common functionality of `],
		[/* reference */ 'r', `java.lang.reflect.Method`],
		[/* text */ 't', `
 and `],
		[/* reference */ 'r', `java.lang.reflect.Constructor`],
		[/* text */ 't', `.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of the executable represented by this object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the simple name of the underlying member`]
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
				[/* inline code block */ 'i', `Executable`],
				[/* text */ 't', `, including
 any type parameters.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string describing this `],
				[/* inline code block */ 'i', `Executable`],
				[/* text */ 't', `, including
 any type parameters`]
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
 that declares the executable represented by this object.`]
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
		[/* method */ 'getAnnotationsByType(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns annotations that are `],
				[/* text */ 't', `associated`],
				[/* text */ 't', ` with this element.

 If there are no annotations `],
				[/* text */ 't', `associated`],
				[/* text */ 't', ` with this element, the return
 value is an array of length 0.

 The difference between this method and `],
				[/* reference */ 'r', `.AnnotatedElement#getAnnotation(java.lang.Class)`],
				[/* text */ 't', `
 is that this method detects if its argument is a `],
				[/* text */ 't', `repeatable
 annotation type`],
				[/* text */ 't', ` (JLS `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-9.html#jls-9.6`, `9.6`],
				[/* text */ 't', `), and if so, attempts to find one or
 more annotations of that type by "looking through" a container
 annotation.

 The caller of this method is free to modify the returned array; it will
 have no effect on the arrays returned to other callers.

 `],
				[/* block */ 'b', ` Note that any annotations returned by this method are
 declaration annotations.`]
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
				[/* text */ 't', `all this element's annotations for the specified annotation type if
     associated with this element, else an array of length zero`]
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
		[/* method */ 'getAnnotatedParameterTypes()', [
			[/* method description */
				[/* text */ 't', `Returns an array of `],
				[/* inline code block */ 'i', `AnnotatedType`],
				[/* text */ 't', ` objects that represent the use
 of types to specify formal parameter types of the method/constructor
 represented by this Executable. The order of the objects in the array
 corresponds to the order of the formal parameter types in the
 declaration of the method/constructor.

 Returns an array of length 0 if the method/constructor declares no
 parameters.
 Note that the constructors of some inner classes
 may have an implicitly declared parameter in addition to
 explicitly declared ones.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array of objects representing the types of the
 formal parameters of the method or constructor represented by this
 `],
				[/* inline code block */ 'i', `Executable`]
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
		[/* method */ 'getParameters()', [
			[/* method description */
				[/* text */ 't', `Returns an array of `],
				[/* inline code block */ 'i', `Parameter`],
				[/* text */ 't', ` objects representing
 all the parameters to the underlying executable represented by
 this object. An array of length 0 is returned if the executable
 has no parameters.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The parameters of the underlying executable do not necessarily
 have unique names, or names that are legal identifiers in the
 Java programming language (JLS `],
					[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-3.html#jls-3.8`, `3.8`],
					[/* text */ 't', `).`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.reflect.MalformedParametersException', [/* throw description */
					[/* text */ 't', `if the class file contains
 a MethodParameters attribute that is improperly formatted.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an array of `],
				[/* inline code block */ 'i', `Parameter`],
				[/* text */ 't', ` objects representing
 all the parameters to the underlying executable represented by
 this object`]
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
		]],
		[/* method */ 'getAnnotatedExceptionTypes()', [
			[/* method description */
				[/* text */ 't', `Returns an array of `],
				[/* inline code block */ 'i', `AnnotatedType`],
				[/* text */ 't', ` objects that represent the use
 of types to specify the declared exceptions of the method/constructor
 represented by this Executable. The order of the objects in the array
 corresponds to the order of the exception types in the declaration of
 the method/constructor.

 Returns an array of length 0 if the method/constructor declares no
 exceptions.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array of objects representing the declared
 exceptions of the method or constructor represented by this `],
				[/* inline code block */ 'i', `Executable`]
			]
		]]
	],
]);
