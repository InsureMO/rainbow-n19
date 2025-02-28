import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.AnnotatedElement', [
	[/* class description */
		[/* text */ 't', `Represents an annotated construct of the program currently running
 in this VM.

 A construct is either an element or a type. Annotations on an
 element are on a `],
		[/* text */ 't', `declaration`],
		[/* text */ 't', `, whereas annotations on a
 type are on a specific `],
		[/* text */ 't', `use`],
		[/* text */ 't', ` of a type name.

 As defined by `],
		[/* text */ 't', `The Java Language Specification`],
		[/* text */ 't', `
 section `],
		[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-9.html#jls-9.7.4`, `9.7.4`],
		[/* text */ 't', `, an annotation on an element is a
 `],
		[/* text */ 't', `declaration annotation`],
		[/* text */ 't', ` and an annotation on a type is a
 `],
		[/* text */ 't', `type annotation`],
		[/* text */ 't', `.

 Note that any annotations returned by methods on the `],
		[/* reference */ 'r', `java.lang.reflect.AnnotatedType`],
		[/* text */ 't', ` interface and its subinterfaces are
 type annotations as the entity being potentially annotated is a
 type. Annotations returned by methods outside of the `],
		[/* inline code block */ 'i', `AnnotatedType`],
		[/* text */ 't', ` hierarchy are declaration annotations.

 `],
		[/* block */ 'b', `This interface allows annotations to be read reflectively.  All
 annotations returned by methods in this interface are immutable and
 serializable. The arrays returned by methods of this interface may
 be modified by callers without affecting the arrays returned to
 other callers.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* reference */ 'r', `getAnnotationsByType(Class)`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `getDeclaredAnnotationsByType(Class)`],
			[/* text */ 't', ` methods support multiple
 annotations of the same type on an element. If the argument to
 either method is a repeatable annotation type (JLS `],
			[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-9.html#jls-9.6`, `9.6`],
			[/* text */ 't', `),
 then the method will "look through" a container annotation (JLS
 `],
			[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-9.html#jls-9.7`, `9.7`],
			[/* text */ 't', `), if present, and return any annotations inside the
 container. Container annotations may be generated at compile-time
 to wrap multiple annotations of the argument type.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The terms `],
			[/* text */ 't', `directly present`],
			[/* text */ 't', `, `],
			[/* text */ 't', `indirectly present`],
			[/* text */ 't', `,
 `],
			[/* text */ 't', `present`],
			[/* text */ 't', `, and `],
			[/* text */ 't', `associated`],
			[/* text */ 't', ` are used throughout this
 interface to describe precisely which annotations are returned by
 methods:

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', ` An annotation `],
				[/* text */ 't', `A`],
				[/* text */ 't', ` is `],
				[/* text */ 't', `directly present`],
				[/* text */ 't', ` on an
 element `],
				[/* text */ 't', `E`],
				[/* text */ 't', ` if `],
				[/* text */ 't', `E`],
				[/* text */ 't', ` has a `],
				[/* inline code block */ 'i', `RuntimeVisibleAnnotations`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `RuntimeVisibleParameterAnnotations`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `RuntimeVisibleTypeAnnotations`],
				[/* text */ 't', ` attribute, and the attribute
 contains `],
				[/* text */ 't', `A`],
				[/* text */ 't', `.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `An annotation `],
				[/* text */ 't', `A`],
				[/* text */ 't', ` is `],
				[/* text */ 't', `indirectly present`],
				[/* text */ 't', ` on an
 element `],
				[/* text */ 't', `E`],
				[/* text */ 't', ` if `],
				[/* text */ 't', `E`],
				[/* text */ 't', ` has a `],
				[/* inline code block */ 'i', `RuntimeVisibleAnnotations`],
				[/* text */ 't', ` or
 `],
				[/* inline code block */ 'i', `RuntimeVisibleParameterAnnotations`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `RuntimeVisibleTypeAnnotations`],
				[/* text */ 't', `
 attribute, and `],
				[/* text */ 't', `A`],
				[/* text */ 't', ` 's type is repeatable, and the attribute contains
 exactly one annotation whose value element contains `],
				[/* text */ 't', `A`],
				[/* text */ 't', ` and whose
 type is the containing annotation type of `],
				[/* text */ 't', `A`],
				[/* text */ 't', ` 's type.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `An annotation `],
				[/* text */ 't', `A`],
				[/* text */ 't', ` is `],
				[/* text */ 't', `present`],
				[/* text */ 't', ` on an element `],
				[/* text */ 't', `E`],
				[/* text */ 't', ` if either:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `A`],
						[/* text */ 't', ` is directly present on `],
						[/* text */ 't', `E`],
						[/* text */ 't', `; or

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `No annotation of `],
						[/* text */ 't', `A`],
						[/* text */ 't', ` 's type is directly present on
 `],
						[/* text */ 't', `E`],
						[/* text */ 't', `, and `],
						[/* text */ 't', `E`],
						[/* text */ 't', ` is a class, and `],
						[/* text */ 't', `A`],
						[/* text */ 't', ` 's type is
 inheritable, and `],
						[/* text */ 't', `A`],
						[/* text */ 't', ` is present on the superclass of `],
						[/* text */ 't', `E`],
						[/* text */ 't', `.

 `]
					]]
				]]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `An annotation `],
				[/* text */ 't', `A`],
				[/* text */ 't', ` is `],
				[/* text */ 't', `associated`],
				[/* text */ 't', ` with an element `],
				[/* text */ 't', `E`],
				[/* text */ 't', `
 if either:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `A`],
						[/* text */ 't', ` is directly or indirectly present on `],
						[/* text */ 't', `E`],
						[/* text */ 't', `; or

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `No annotation of `],
						[/* text */ 't', `A`],
						[/* text */ 't', ` 's type is directly or indirectly
 present on `],
						[/* text */ 't', `E`],
						[/* text */ 't', `, and `],
						[/* text */ 't', `E`],
						[/* text */ 't', ` is a class, and `],
						[/* text */ 't', `A`],
						[/* text */ 't', `'s type
 is inheritable, and `],
						[/* text */ 't', `A`],
						[/* text */ 't', ` is associated with the superclass of
 `],
						[/* text */ 't', `E`],
						[/* text */ 't', `.

 `]
					]]
				]]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `The table below summarizes which kind of annotation presence
 different methods in this interface examine.

 `],
		[/* table */ 't', ''],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `For an invocation of `],
			[/* inline code block */ 'i', `get[Declared]AnnotationsByType(Class <T>)`],
			[/* text */ 't', `,
 the order of annotations which are directly or indirectly
 present on an element `],
			[/* text */ 't', `E`],
			[/* text */ 't', ` is computed as if indirectly present
 annotations on `],
			[/* text */ 't', `E`],
			[/* text */ 't', ` are directly present on `],
			[/* text */ 't', `E`],
			[/* text */ 't', ` in place
 of their container annotation, in the order in which they appear in
 the value element of the container annotation.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `There are several compatibility concerns to keep in mind if an
 annotation type `],
			[/* text */ 't', `T`],
			[/* text */ 't', ` is originally `],
			[/* text */ 't', `not`],
			[/* text */ 't', ` repeatable and
 later modified to be repeatable.

 The containing annotation type for `],
			[/* text */ 't', `T`],
			[/* text */ 't', ` is `],
			[/* text */ 't', `TC`],
			[/* text */ 't', `.

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `Modifying `],
				[/* text */ 't', `T`],
				[/* text */ 't', ` to be repeatable is source and binary
 compatible with existing uses of `],
				[/* text */ 't', `T`],
				[/* text */ 't', ` and with existing uses
 of `],
				[/* text */ 't', `TC`],
				[/* text */ 't', `.

 That is, for source compatibility, source code with annotations of
 type `],
				[/* text */ 't', `T`],
				[/* text */ 't', ` or of type `],
				[/* text */ 't', `TC`],
				[/* text */ 't', ` will still compile. For binary
 compatibility, class files with annotations of type `],
				[/* text */ 't', `T`],
				[/* text */ 't', ` or of
 type `],
				[/* text */ 't', `TC`],
				[/* text */ 't', ` (or with other kinds of uses of type `],
				[/* text */ 't', `T`],
				[/* text */ 't', ` or of
 type `],
				[/* text */ 't', `TC`],
				[/* text */ 't', `) will link against the modified version of `],
				[/* text */ 't', `T`],
				[/* text */ 't', `
 if they linked against the earlier version.

 (An annotation type `],
				[/* text */ 't', `TC`],
				[/* text */ 't', ` may informally serve as an acting
 containing annotation type before `],
				[/* text */ 't', `T`],
				[/* text */ 't', ` is modified to be
 formally repeatable. Alternatively, when `],
				[/* text */ 't', `T`],
				[/* text */ 't', ` is made
 repeatable, `],
				[/* text */ 't', `TC`],
				[/* text */ 't', ` can be introduced as a new type.)

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `If an annotation type `],
				[/* text */ 't', `TC`],
				[/* text */ 't', ` is present on an element, and
 `],
				[/* text */ 't', `T`],
				[/* text */ 't', ` is modified to be repeatable with `],
				[/* text */ 't', `TC`],
				[/* text */ 't', ` as its
 containing annotation type then:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The change to `],
						[/* text */ 't', `T`],
						[/* text */ 't', ` is behaviorally compatible with respect
 to the `],
						[/* inline code block */ 'i', `get[Declared]Annotation(Class<T>)`],
						[/* text */ 't', ` (called with an
 argument of `],
						[/* text */ 't', `T`],
						[/* text */ 't', ` or `],
						[/* text */ 't', `TC`],
						[/* text */ 't', `) and `],
						[/* inline code block */ 'i', `get[Declared]Annotations()`],
						[/* text */ 't', ` methods because the results of the
 methods will not change due to `],
						[/* text */ 't', `TC`],
						[/* text */ 't', ` becoming the containing
 annotation type for `],
						[/* text */ 't', `T`],
						[/* text */ 't', `.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The change to `],
						[/* text */ 't', `T`],
						[/* text */ 't', ` changes the results of the `],
						[/* inline code block */ 'i', `get[Declared]AnnotationsByType(Class<T>)`],
						[/* text */ 't', ` methods called with an
 argument of `],
						[/* text */ 't', `T`],
						[/* text */ 't', `, because those methods will now recognize an
 annotation of type `],
						[/* text */ 't', `TC`],
						[/* text */ 't', ` as a container annotation for `],
						[/* text */ 't', `T`],
						[/* text */ 't', `
 and will "look through" it to expose annotations of type `],
						[/* text */ 't', `T`],
						[/* text */ 't', `.

 `]
					]]
				]]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `If an annotation of type `],
				[/* text */ 't', `T`],
				[/* text */ 't', ` is present on an
 element and `],
				[/* text */ 't', `T`],
				[/* text */ 't', ` is made repeatable and more annotations of
 type `],
				[/* text */ 't', `T`],
				[/* text */ 't', ` are added to the element:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` The addition of the annotations of type `],
						[/* text */ 't', `T`],
						[/* text */ 't', ` is both
 source compatible and binary compatible.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The addition of the annotations of type `],
						[/* text */ 't', `T`],
						[/* text */ 't', ` changes the results
 of the `],
						[/* inline code block */ 'i', `get[Declared]Annotation(Class<T>)`],
						[/* text */ 't', ` methods and `],
						[/* inline code block */ 'i', `get[Declared]Annotations()`],
						[/* text */ 't', ` methods, because those methods will now
 only see a container annotation on the element and not see an
 annotation of type `],
						[/* text */ 't', `T`],
						[/* text */ 't', `.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The addition of the annotations of type `],
						[/* text */ 't', `T`],
						[/* text */ 't', ` changes the
 results of the `],
						[/* inline code block */ 'i', `get[Declared]AnnotationsByType(Class<T>)`],
						[/* text */ 't', `
 methods, because their results will expose the additional
 annotations of type `],
						[/* text */ 't', `T`],
						[/* text */ 't', ` whereas previously they exposed only a
 single annotation of type `],
						[/* text */ 't', `T`],
						[/* text */ 't', `.

 `]
					]]
				]]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `If an annotation returned by a method in this interface contains
 (directly or indirectly) a `],
			[/* reference */ 'r', `java.lang.Class`],
			[/* text */ 't', `-valued member referring to
 a class that is not accessible in this VM, attempting to read the class
 by calling the relevant Class-returning method on the returned annotation
 will result in a `],
			[/* reference */ 'r', `java.lang.TypeNotPresentException`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Similarly, attempting to read an enum-valued member will result in
 a `],
			[/* reference */ 'r', `java.lang.EnumConstantNotPresentException`],
			[/* text */ 't', ` if the enum constant in the
 annotation is no longer present in the enum class.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `If an annotation type `],
			[/* text */ 't', `T`],
			[/* text */ 't', ` is (meta-)annotated with an
 `],
			[/* inline code block */ 'i', `@Repeatable`],
			[/* text */ 't', ` annotation whose value element indicates a type
 `],
			[/* text */ 't', `TC`],
			[/* text */ 't', `, but `],
			[/* text */ 't', `TC`],
			[/* text */ 't', ` does not declare a `],
			[/* inline code block */ 'i', `value()`],
			[/* text */ 't', ` method
 with a return type of `],
			[/* text */ 't', `T`],
			[/* inline code block */ 'i', `[]`],
			[/* text */ 't', `, then an exception of type
 `],
			[/* reference */ 'r', `java.lang.annotation.AnnotationFormatError`],
			[/* text */ 't', ` is thrown.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Finally, attempting to read a member whose definition has evolved
 incompatibly will result in a `],
			[/* reference */ 'r', `java.lang.annotation.AnnotationTypeMismatchException`],
			[/* text */ 't', ` or an
 `],
			[/* reference */ 'r', `java.lang.annotation.IncompleteAnnotationException`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'isAnnotationPresent(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns true if an annotation for the specified type
 is `],
				[/* text */ 't', `present`],
				[/* text */ 't', ` on this element, else false.  This method
 is designed primarily for convenient access to marker annotations.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The truth value returned by this method is equivalent to:
 `],
					[/* inline code block */ 'i', `getAnnotation(annotationClass) != null`]
				]]
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
				[/* text */ 't', `true if an annotation for the specified annotation
     type is present on this element, else false`]
			]
		]],
		[/* method */ 'getAnnotation(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns this element's annotation for the specified type if
 such an annotation is `],
				[/* text */ 't', `present`],
				[/* text */ 't', `, else null.`]
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
				[/* reference */ 'r', `getAnnotation(Class)`],
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
 have no effect on the arrays returned to other callers.`]
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
 have no effect on the arrays returned to other callers.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `annotations present on this element`]
			]
		]],
		[/* method */ 'getDeclaredAnnotation(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns this element's annotation for the specified type if
 such an annotation is `],
				[/* text */ 't', `directly present`],
				[/* text */ 't', `, else null.

 This method ignores inherited annotations. (Returns null if no
 annotations are directly present on this element.)`]
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
				[/* reference */ 'r', `getDeclaredAnnotation(Class)`],
				[/* text */ 't', ` is that this method detects if its
 argument is a `],
				[/* text */ 't', `repeatable annotation type`],
				[/* text */ 't', ` (JLS `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-9.html#jls-9.6`, `9.6`],
				[/* text */ 't', `), and if so,
 attempts to find one or more annotations of that type by "looking
 through" a container annotation if one is present.

 The caller of this method is free to modify the returned array; it will
 have no effect on the arrays returned to other callers.`]
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
 have no effect on the arrays returned to other callers.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `annotations directly present on this element`]
			]
		]]
	],
]);
