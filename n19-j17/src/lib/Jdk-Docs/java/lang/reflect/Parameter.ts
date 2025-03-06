import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.Parameter', [
	[/* class description */
		[/* text */ 't', `Information about method parameters.

 A `],
		[/* inline code block */ 'i', `Parameter`],
		[/* text */ 't', ` provides information about method parameters,
 including its name and modifiers.  It also provides an alternate
 means of obtaining attributes for the parameter.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getAnnotation(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns this element's annotation for the specified type if
 such an annotation is `],
				[/* text */ 't', `present`],
				[/* text */ 't', `, else null.
 `],
				[/* block */ 'b', `Note that any annotation returned by this method is a
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
		[/* method */ 'getDeclaredAnnotation(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns this element's annotation for the specified type if
 such an annotation is `],
				[/* text */ 't', `directly present`],
				[/* text */ 't', `, else null.

 This method ignores inherited annotations. (Returns null if no
 annotations are directly present on this element.)
 `],
				[/* block */ 'b', `Note that any annotation returned by this method is a
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
     directly present on this element, else null`]
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
				[/* reference */ 'r', `java.lang.reflect.AnnotatedElement#getAnnotation(java.lang.Class)`, `AnnotatedElement.getAnnotation(Class)`],
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
				[/* block */ 'b', `Note that any annotations returned by this method are
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
		[/* method */ 'getDeclaredAnnotationsByType(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns this element's annotation(s) for the specified type if
 such annotations are either `],
				[/* text */ 't', `directly present`],
				[/* text */ 't', ` or
 `],
				[/* text */ 't', `indirectly present`],
				[/* text */ 't', `. This method ignores inherited
 annotations.

 If there are no specified annotations directly or indirectly
 present on this element, the return value is an array of length
 0.

 The difference between this method and `],
				[/* reference */ 'r', `java.lang.reflect.AnnotatedElement#getDeclaredAnnotation(java.lang.Class)`, `AnnotatedElement.getDeclaredAnnotation(Class)`],
				[/* text */ 't', ` is that this method detects if its
 argument is a `],
				[/* text */ 't', `repeatable annotation type`],
				[/* text */ 't', ` (JLS `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-9.html#jls-9.6`, `9.6`],
				[/* text */ 't', `), and if so,
 attempts to find one or more annotations of that type by "looking
 through" a container annotation if one is present.

 The caller of this method is free to modify the returned array; it will
 have no effect on the arrays returned to other callers.
 `],
				[/* block */ 'b', `Note that any annotations returned by this method are
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
     directly or indirectly present on this element, else an array of length zero`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares based on the executable and the index.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `The object to compare.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `Whether or not this is equal to the argument.`]
			]
		]],
		[/* method */ 'isImplicit()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this parameter is implicitly declared
 in source code; returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if and only if this parameter is implicitly
 declared as defined by `],
				[/* text */ 't', `The Java Language
 Specification`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'isNamePresent()', [
			[/* method description */
				[/* text */ 't', `Returns true if the parameter has a name according to the class
 file; returns false otherwise. Whether a parameter has a name
 is determined by the MethodParameters attribute of
 the method which declares the parameter.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if and only if the parameter has a name according
 to the class file.`]
			]
		]],
		[/* method */ 'isSynthetic()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this parameter is neither implicitly
 nor explicitly declared in source code; returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `
 otherwise.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if and only if this parameter is a synthetic
 construct as defined by
 `],
				[/* text */ 't', `The Java Language Specification`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'isVarArgs()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this parameter represents a variable
 argument list; returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if an only if this parameter represents a
 variable argument list.`]
			]
		]],
		[/* method */ 'getModifiers()', [
			[/* method description */
				[/* text */ 't', `Returns the Java language `],
				[/* reference */ 'r', `java.lang.reflect.Modifier`, `modifiers`],
				[/* text */ 't', ` for
 the parameter represented by this object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the Java language `],
				[/* reference */ 'r', `java.lang.reflect.Modifier`, `modifiers`],
				[/* text */ 't', ` for
 the parameter represented by this object`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hash code based on the executable's hash code and the
 index.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A hash code based on the executable's hash code.`]
			]
		]],
		[/* method */ 'getAnnotations()', [
			[/* method description */
				[/* text */ 't', `Returns annotations that are `],
				[/* text */ 't', `present`],
				[/* text */ 't', ` on this element.

 If there are no annotations `],
				[/* text */ 't', `present`],
				[/* text */ 't', ` on this element, the return
 value is an array of length 0.

 The caller of this method is free to modify the returned array; it will
 have no effect on the arrays returned to other callers.
 `],
				[/* block */ 'b', `Note that any annotations returned by this method are
 declaration annotations.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `annotations present on this element`]
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
				[/* block */ 'b', `Note that any annotations returned by this method are
 declaration annotations.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `annotations directly present on this element`]
			]
		]],
		[/* method */ 'getType()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object that identifies the
 declared type for the parameter represented by this
 `],
				[/* inline code block */ 'i', `Parameter`],
				[/* text */ 't', ` object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object identifying the declared
 type of the parameter represented by this object`]
			]
		]],
		[/* method */ 'getAnnotatedType()', [
			[/* method description */
				[/* text */ 't', `Returns an AnnotatedType object that represents the use of a type to
 specify the type of the formal parameter represented by this Parameter.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `AnnotatedType`],
				[/* text */ 't', ` object representing the use of a type
         to specify the type of the formal parameter represented by this
         Parameter`]
			]
		]],
		[/* method */ 'getDeclaringExecutable()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `Executable`],
				[/* text */ 't', ` declaring this parameter.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Executable`],
				[/* text */ 't', ` declaring this parameter`]
			]
		]],
		[/* method */ 'getParameterizedType()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', ` object that identifies the parameterized
 type for the parameter represented by this `],
				[/* inline code block */ 'i', `Parameter`],
				[/* text */ 't', `
 object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', ` object identifying the parameterized
 type of the parameter represented by this object`]
			]
		]],
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of the parameter.  If the parameter's name is
 `],
				[/* reference */ 'r', `#isNamePresent()`, `present`],
				[/* text */ 't', `, then this method returns
 the name provided by the class file. Otherwise, this method
 synthesizes a name of the form argN, where N is the index of
 the parameter in the descriptor of the method which declares
 the parameter.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The name of the parameter, either provided by the class
         file or synthesized if the class file does not provide
         a name.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this parameter.  The format is the
 modifiers for the parameter, if any, in canonical order as
 recommended by `],
				[/* text */ 't', `The Java Language
 Specification`],
				[/* text */ 't', `, followed by the fully-qualified type of
 the parameter (excluding the last [] if the parameter is
 variable arity), followed by "..." if the parameter is variable
 arity, followed by a space, followed by the name of the
 parameter.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A string representation of the parameter and associated
 information.`]
			]
		]]
	],
]);
