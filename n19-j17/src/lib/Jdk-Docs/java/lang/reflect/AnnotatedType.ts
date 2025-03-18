import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.AnnotatedType', [
	[/* class description */
		[/* inline code block */ 'i', `AnnotatedType`],
		[/* text */ 't', ` represents the potentially annotated use of a type in
 the program currently running in this VM. The use may be of any type in the
 Java programming language, including an array type, a parameterized type, a
 type variable, or a wildcard type.

 Note that any annotations returned by methods on this interface are
 `],
		[/* text */ 't', `type annotations`],
		[/* text */ 't', ` (JLS `],
		[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-9.html#jls-9.7.4`, `9.7.4`],
		[/* text */ 't', `) as the entity being
 potentially annotated is a type.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'getAnnotation(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns this element's annotation for the specified type if
 such an annotation is `],
				[/* text */ 't', `present`],
				[/* text */ 't', `, else null.
 `],
				[/* block */ 'b', `Note that any annotation returned by this method is a type
 annotation.`]
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
				[/* block */ 'b', `Note that any annotations returned by this method are type
 annotations.`]
			],
			/* parameters */,
			/* throws */,
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
				[/* block */ 'b', `Note that any annotations returned by this method are type
 annotations.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `annotations directly present on this element`]
			]
		]],
		[/* method */ 'getType()', [
			[/* method description */
				[/* text */ 't', `Returns the underlying type that this annotated type represents.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the type this annotated type represents`]
			]
		]],
		[/* method */ 'getAnnotatedOwnerType()', [
			[/* method description */
				[/* text */ 't', `Returns the potentially annotated type that this type is a member of, if
 this type represents a nested type. For example, if this type is
 `],
				[/* inline code block */ 'i', `@TA O<T>.I<S>`],
				[/* text */ 't', `, return a representation of `],
				[/* inline code block */ 'i', `@TA O<T>`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if this `],
					[/* inline code block */ 'i', `AnnotatedType`],
					[/* text */ 't', ` represents a
     top-level class or interface, or a local or anonymous class, or
     a primitive type, or void.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if this `],
					[/* inline code block */ 'i', `AnnotatedType`],
					[/* text */ 't', ` is an instance of
     `],
					[/* inline code block */ 'i', `AnnotatedArrayType`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `AnnotatedTypeVariable`],
					[/* text */ 't', `, or
     `],
					[/* inline code block */ 'i', `AnnotatedWildcardType`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.TypeNotPresentException', [/* throw description */
					[/* text */ 't', `if the owner type
     refers to a non-existent class or interface declaration`]
				]],
				[/* throw */ 'java.lang.reflect.MalformedParameterizedTypeException', [/* throw description */
					[/* text */ 't', `if the owner type
     refers to a parameterized type that cannot be instantiated
     for any reason`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `AnnotatedType`],
				[/* text */ 't', ` object representing the potentially
     annotated type that this type is a member of, or `],
				[/* inline code block */ 'i', `null`]
			]
		]]
	],
	/* enum values */ UDF
]);
