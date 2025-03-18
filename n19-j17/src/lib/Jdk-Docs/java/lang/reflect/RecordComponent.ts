import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.RecordComponent', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `RecordComponent`],
		[/* text */ 't', ` provides information about, and dynamic access to, a
 component of a record class.`]
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
				[/* block */ 'b', `Note that any annotations returned by this method are
 declaration annotations.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `annotations directly present on this element`]
			]
		]],
		[/* method */ 'getDeclaringRecord()', [
			[/* method description */
				[/* text */ 't', `Returns the record class which declares this record component.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The record class declaring this record component.`]
			]
		]],
		[/* method */ 'getType()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` that identifies the declared type for this
 record component.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` identifying the declared type of the component
 represented by this record component`]
			]
		]],
		[/* method */ 'getAnnotatedType()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `AnnotatedType`],
				[/* text */ 't', ` object that represents the use of a type to specify
 the declared type of this record component.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an object representing the declared type of this record component`]
			]
		]],
		[/* method */ 'getAccessor()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', ` that represents the accessor for this record
 component.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', ` that represents the accessor for this record
 component`]
			]
		]],
		[/* method */ 'getGenericType()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', ` object that represents the declared type for
 this record component.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the declared type of the record component is a parameterized type,
 the `],
					[/* inline code block */ 'i', `Type`],
					[/* text */ 't', ` object returned reflects the actual type arguments used
 in the source code.

 `]
				]],
				[/* block */ 'b', `If the type of the underlying record component is a type variable or a
 parameterized type, it is created. Otherwise, it is resolved.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.reflect.GenericSignatureFormatError', [/* throw description */
					[/* text */ 't', `if the generic record component
         signature does not conform to the format specified in
         `],
					[/* text */ 't', `The Java Virtual Machine Specification`]
				]],
				[/* throw */ 'java.lang.TypeNotPresentException', [/* throw description */
					[/* text */ 't', `if the generic type
         signature of the underlying record component refers to a non-existent
         type declaration`]
				]],
				[/* throw */ 'java.lang.reflect.MalformedParameterizedTypeException', [/* throw description */
					[/* text */ 't', `if the generic
         signature of the underlying record component refers to a parameterized
         type that cannot be instantiated for any reason`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', ` object that represents the declared type for
         this record component`]
			]
		]],
		[/* method */ 'getGenericSignature()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` that describes the generic type signature for
 this record component.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` that describes the generic type signature for
 this record component`]
			]
		]],
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of this record component.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the name of this record component`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this record component. The format is
 the record component type, followed by a space, followed by the name
 of the record component.
 For example:
 `],
				[/* code block */ 'c', `    java.lang.String name
    int age
 `]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a string describing this record component`]
			]
		]]
	],
	/* enum values */ UDF
]);
