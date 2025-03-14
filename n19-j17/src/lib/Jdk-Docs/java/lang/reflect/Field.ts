import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.Field', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `Field`],
		[/* text */ 't', ` provides information about, and dynamic access to, a
 single field of a class or an interface.  The reflected field may
 be a class (static) field or an instance field.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `A `],
			[/* inline code block */ 'i', `Field`],
			[/* text */ 't', ` permits widening conversions to occur during a get or
 set access operation, but throws an `],
			[/* inline code block */ 'i', `IllegalArgumentException`],
			[/* text */ 't', ` if a
 narrowing conversion would occur.`]
		]]
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
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares this `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', ` against the specified object.  Returns
 true if the objects are the same.  Two `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', ` objects are the same if
 they were declared by the same class and have the same name
 and type.`]
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
		[/* method */ 'getBoolean(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Gets the value of a static or instance `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` field.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to extract the `],
					[/* inline code block */ 'i', `boolean`],
					[/* text */ 't', ` value
 from`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object
              is enforcing Java language access control and the underlying
              field is inaccessible.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified object is not
              an instance of the class or interface declaring the
              underlying field (or a subclass or implementor
              thereof), or if the field value cannot be
              converted to the type `],
					[/* inline code block */ 'i', `boolean`],
					[/* text */ 't', ` by a
              widening conversion.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified object is null
              and the field is an instance field.`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the initialization provoked
              by this method fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` field`]
			]
		]],
		[/* method */ 'isEnumConstant()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this field represents an element of
 an enumerated class; returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this field represents an element of
 an enumerated class.`]
			]
		]],
		[/* method */ 'isSynthetic()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this field is a synthetic
 field; returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if and only if this field is a synthetic
 field as defined by the Java Language Specification.`]
			]
		]],
		[/* method */ 'getByte(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Gets the value of a static or instance `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', ` field.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to extract the `],
					[/* inline code block */ 'i', `byte`],
					[/* text */ 't', ` value
 from`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object
              is enforcing Java language access control and the underlying
              field is inaccessible.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified object is not
              an instance of the class or interface declaring the
              underlying field (or a subclass or implementor
              thereof), or if the field value cannot be
              converted to the type `],
					[/* inline code block */ 'i', `byte`],
					[/* text */ 't', ` by a
              widening conversion.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified object is null
              and the field is an instance field.`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the initialization provoked
              by this method fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', ` field`]
			]
		]],
		[/* method */ 'getChar(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Gets the value of a static or instance field of type
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` or of another primitive type convertible to
 type `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` via a widening conversion.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to extract the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value
 from`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object
              is enforcing Java language access control and the underlying
              field is inaccessible.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified object is not
              an instance of the class or interface declaring the
              underlying field (or a subclass or implementor
              thereof), or if the field value cannot be
              converted to the type `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` by a
              widening conversion.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified object is null
              and the field is an instance field.`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the initialization provoked
              by this method fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the field converted to type `],
				[/* inline code block */ 'i', `char`]
			]
		]],
		[/* method */ 'getDouble(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Gets the value of a static or instance field of type
 `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` or of another primitive type convertible to
 type `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` via a widening conversion.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to extract the `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` value
 from`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object
              is enforcing Java language access control and the underlying
              field is inaccessible.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified object is not
              an instance of the class or interface declaring the
              underlying field (or a subclass or implementor
              thereof), or if the field value cannot be
              converted to the type `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` by a
              widening conversion.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified object is null
              and the field is an instance field.`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the initialization provoked
              by this method fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the field converted to type `],
				[/* inline code block */ 'i', `double`]
			]
		]],
		[/* method */ 'getFloat(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Gets the value of a static or instance field of type
 `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` or of another primitive type convertible to
 type `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` via a widening conversion.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to extract the `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` value
 from`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object
              is enforcing Java language access control and the underlying
              field is inaccessible.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified object is not
              an instance of the class or interface declaring the
              underlying field (or a subclass or implementor
              thereof), or if the field value cannot be
              converted to the type `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` by a
              widening conversion.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified object is null
              and the field is an instance field.`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the initialization provoked
              by this method fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the field converted to type `],
				[/* inline code block */ 'i', `float`]
			]
		]],
		[/* method */ 'getInt(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Gets the value of a static or instance field of type
 `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` or of another primitive type convertible to
 type `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` via a widening conversion.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to extract the `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value
 from`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object
              is enforcing Java language access control and the underlying
              field is inaccessible.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified object is not
              an instance of the class or interface declaring the
              underlying field (or a subclass or implementor
              thereof), or if the field value cannot be
              converted to the type `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` by a
              widening conversion.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified object is null
              and the field is an instance field.`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the initialization provoked
              by this method fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the field converted to type `],
				[/* inline code block */ 'i', `int`]
			]
		]],
		[/* method */ 'getModifiers()', [
			[/* method description */
				[/* text */ 't', `Returns the Java language modifiers for the field represented
 by this `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', ` object, as an integer. The `],
				[/* inline code block */ 'i', `Modifier`],
				[/* text */ 't', ` class should
 be used to decode the modifiers.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the Java language modifiers for the underlying member`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hashcode for this `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', `.  This is computed as the
 exclusive-or of the hashcodes for the underlying field's
 declaring class name and its name.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'getDeclaredAnnotations()', UDF],
		[/* method */ 'getDeclaringClass()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object representing the class or interface
 that declares the field represented by this `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', ` object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an object representing the declaring class of the
 underlying member`]
			]
		]],
		[/* method */ 'getType()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object that identifies the
 declared type for the field represented by this
 `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', ` object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object identifying the declared
 type of the field represented by this object`]
			]
		]],
		[/* method */ 'get(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the value of the field represented by this `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', `, on
 the specified object. The value is automatically wrapped in an
 object if it has a primitive type.

 `],
				[/* block */ 'b', `The underlying field's value is obtained as follows:

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the underlying field is a static field, the `],
					[/* inline code block */ 'i', `obj`],
					[/* text */ 't', ` argument
 is ignored; it may be null.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Otherwise, the underlying field is an instance field.  If the
 specified `],
					[/* inline code block */ 'i', `obj`],
					[/* text */ 't', ` argument is null, the method throws a
 `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', `. If the specified object is not an
 instance of the class or interface declaring the underlying
 field, the method throws an `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object is enforcing Java language access control, and
 the underlying field is inaccessible, the method throws an
 `],
					[/* inline code block */ 'i', `IllegalAccessException`],
					[/* text */ 't', `.
 If the underlying field is static, the class that declared the
 field is initialized if it has not already been initialized.

 `]
				]],
				[/* block */ 'b', `Otherwise, the value is retrieved from the underlying instance
 or static field.  If the field has a primitive type, the value
 is wrapped in an object before being returned, otherwise it is
 returned as is.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the field is hidden in the type of `],
					[/* inline code block */ 'i', `obj`],
					[/* text */ 't', `,
 the field's value is obtained according to the preceding rules.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `object from which the represented field's value is
 to be extracted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object
              is enforcing Java language access control and the underlying
              field is inaccessible.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified object is not an
              instance of the class or interface declaring the underlying
              field (or a subclass or implementor thereof).`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified object is null
              and the field is an instance field.`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the initialization provoked
              by this method fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the represented field in object
 `],
				[/* inline code block */ 'i', `obj`],
				[/* text */ 't', `; primitive values are wrapped in an appropriate
 object before being returned`]
			]
		]],
		[/* method */ 'getAnnotatedType()', [
			[/* method description */
				[/* text */ 't', `Returns an AnnotatedType object that represents the use of a type to specify
 the declared type of the field represented by this Field.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an object representing the declared type of the field
 represented by this Field`]
			]
		]],
		[/* method */ 'getGenericType()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', ` object that represents the declared type for
 the field represented by this `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', ` object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the declared type of the field is a parameterized type,
 the `],
					[/* inline code block */ 'i', `Type`],
					[/* text */ 't', ` object returned must accurately reflect the
 actual type arguments used in the source code.

 `]
				]],
				[/* block */ 'b', `If the type of the underlying field is a type variable or a
 parameterized type, it is created. Otherwise, it is resolved.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.reflect.GenericSignatureFormatError', [/* throw description */
					[/* text */ 't', `if the generic field
     signature does not conform to the format specified in
     `],
					[/* text */ 't', `The Java Virtual Machine Specification`]
				]],
				[/* throw */ 'java.lang.TypeNotPresentException', [/* throw description */
					[/* text */ 't', `if the generic type
     signature of the underlying field refers to a non-existent
     class or interface declaration`]
				]],
				[/* throw */ 'java.lang.reflect.MalformedParameterizedTypeException', [/* throw description */
					[/* text */ 't', `if the generic
     signature of the underlying field refers to a parameterized type
     that cannot be instantiated for any reason`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', ` object that represents the declared type for
     the field represented by this `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', ` object`]
			]
		]],
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of the field represented by this `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', ` object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the simple name of the underlying member`]
			]
		]],
		[/* method */ 'toGenericString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', `, including
 its generic type.  The format is the access modifiers for the
 field, if any, followed by the generic field type, followed by
 a space, followed by the fully-qualified name of the class
 declaring the field, followed by a period, followed by the name
 of the field.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The modifiers are placed in canonical order as specified by
 "The Java Language Specification".  This is `],
					[/* inline code block */ 'i', `public`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `protected`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `private`],
					[/* text */ 't', ` first, and then other
 modifiers in the following order: `],
					[/* inline code block */ 'i', `static`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `final`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `transient`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `volatile`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string describing this `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', `, including
 its generic type`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', `.  The format is
 the access modifiers for the field, if any, followed
 by the field type, followed by a space, followed by
 the fully-qualified name of the class declaring the field,
 followed by a period, followed by the name of the field.
 For example:
 `],
				[/* code block */ 'c', `    public static final int java.lang.Thread.MIN_PRIORITY
    private int java.io.FileDescriptor.fd
 `],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The modifiers are placed in canonical order as specified by
 "The Java Language Specification".  This is `],
					[/* inline code block */ 'i', `public`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `protected`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `private`],
					[/* text */ 't', ` first, and then other
 modifiers in the following order: `],
					[/* inline code block */ 'i', `static`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `final`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `transient`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `volatile`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string describing this `],
				[/* inline code block */ 'i', `Field`]
			]
		]],
		[/* method */ 'getLong(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Gets the value of a static or instance field of type
 `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` or of another primitive type convertible to
 type `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` via a widening conversion.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to extract the `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` value
 from`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object
              is enforcing Java language access control and the underlying
              field is inaccessible.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified object is not
              an instance of the class or interface declaring the
              underlying field (or a subclass or implementor
              thereof), or if the field value cannot be
              converted to the type `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` by a
              widening conversion.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified object is null
              and the field is an instance field.`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the initialization provoked
              by this method fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the field converted to type `],
				[/* inline code block */ 'i', `long`]
			]
		]],
		[/* method */ 'getShort(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Gets the value of a static or instance field of type
 `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` or of another primitive type convertible to
 type `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` via a widening conversion.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to extract the `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', ` value
 from`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object
              is enforcing Java language access control and the underlying
              field is inaccessible.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified object is not
              an instance of the class or interface declaring the
              underlying field (or a subclass or implementor
              thereof), or if the field value cannot be
              converted to the type `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', ` by a
              widening conversion.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified object is null
              and the field is an instance field.`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the initialization provoked
              by this method fails.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the field converted to type `],
				[/* inline code block */ 'i', `short`]
			]
		]],
		[/* method */ 'set(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Sets the field represented by this `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', ` object on the
 specified object argument to the specified new value. The new
 value is automatically unwrapped if the underlying field has a
 primitive type.

 `],
				[/* block */ 'b', `The operation proceeds as follows:

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the underlying field is static, the `],
					[/* inline code block */ 'i', `obj`],
					[/* text */ 't', ` argument is
 ignored; it may be null.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Otherwise the underlying field is an instance field.  If the
 specified object argument is null, the method throws a
 `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', `.  If the specified object argument is not
 an instance of the class or interface declaring the underlying
 field, the method throws an `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object is enforcing Java language access control, and
 the underlying field is inaccessible, the method throws an
 `],
					[/* inline code block */ 'i', `IllegalAccessException`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the underlying field is final, this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object has
 `],
					[/* text */ 't', `write`],
					[/* text */ 't', ` access if and only if the following conditions are met:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* reference */ 'r', `#setAccessible(boolean)`, `setAccessible(true)`],
						[/* text */ 't', ` has succeeded for
     this `],
						[/* inline code block */ 'i', `Field`],
						[/* text */ 't', ` object;`]
					]],
					[/* block */ 'b', `the field is non-static; and`],
					[/* block */ 'b', [
						[/* text */ 't', `the field's declaring class is not a `],
						[/* reference */ 'r', `java.lang.Class#isHidden()`, `hidden class`],
						[/* text */ 't', `; and`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `the field's declaring class is not a `],
						[/* reference */ 'r', `java.lang.Class#isRecord()`, `record class`],
						[/* text */ 't', `.`]
					]]
				]],
				[/* text */ 't', `
 If any of the above checks is not met, this method throws an
 `],
				[/* inline code block */ 'i', `IllegalAccessException`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', ` Setting a final field in this way
 is meaningful only during deserialization or reconstruction of
 instances of classes with blank final fields, before they are
 made available for access by other parts of a program. Use in
 any other context may have unpredictable effects, including cases
 in which other parts of a program continue to use the original
 value of this field.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the underlying field is of a primitive type, an unwrapping
 conversion is attempted to convert the new value to a value of
 a primitive type.  If this attempt fails, the method throws an
 `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If, after possible unwrapping, the new value cannot be
 converted to the type of the underlying field by an identity or
 widening conversion, the method throws an
 `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', `If the underlying field is static, the class that declared the
 field is initialized if it has not already been initialized.

 `],
				[/* block */ 'b', `The field is set to the possibly unwrapped and widened new value.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the field is hidden in the type of `],
					[/* inline code block */ 'i', `obj`],
					[/* text */ 't', `,
 the field's value is set according to the preceding rules.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object whose field should be modified`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the new value for the field of `],
					[/* inline code block */ 'i', `obj`],
					[/* text */ 't', `
 being modified`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object
              is enforcing Java language access control and the underlying
              field is inaccessible or final;
              or if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object has no write access.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified object is not an
              instance of the class or interface declaring the underlying
              field (or a subclass or implementor thereof),
              or if an unwrapping conversion fails.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified object is null
              and the field is an instance field.`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the initialization provoked
              by this method fails.`]
				]]
			],
			/* return */ UDF
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
						[/* reference */ 'r', `java.lang.reflect.Member`, `member`],
						[/* text */ 't', ` of `],
						[/* reference */ 'r', `java.lang.reflect.Member#getDeclaringClass()`, `declaring class`],
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `D`],
						[/* text */ 't', ` if any of the following hold: `]
					]],
					[/* text */ 't', `

 `],
					[/* list */ 'l', [
						[/* block */ 'b', [
							[/* text */ 't', ` `],
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
							[/* text */ 't', ` `],
							[/* reference */ 'r', `java.lang.Module#isExported(java.lang.String,java.lang.Module)`, `exports`],
							[/* text */ 't', ` to at least the module
     containing `],
							[/* inline code block */ 'i', `C`],
							[/* text */ 't', `. `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` The member is `],
							[/* inline code block */ 'i', `protected`],
							[/* text */ 't', ` `],
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
							[/* text */ 't', ` `],
							[/* inline code block */ 'i', `D`],
							[/* text */ 't', ` is in a package that the module containing `],
							[/* inline code block */ 'i', `D`],
							[/* text */ 't', `
     `],
							[/* reference */ 'r', `java.lang.Module#isOpen(java.lang.String,java.lang.Module)`, `opens`],
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
					[/* text */ 't', `

 `],
					[/* block */ 'b', ` This method cannot be used to enable access to private members,
 members with default (package) access, protected instance members, or
 protected constructors when the declaring class is in a different module
 to the caller and the package containing the declaring class is not open
 to the caller's module. `],
					[/* text */ 't', `

 `],
					[/* block */ 'b', [
						[/* text */ 't', ` This method cannot be used to enable `],
						[/* reference */ 'r', `#set(java.lang.Object,java.lang.Object)`, `write`],
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
							[/* reference */ 'r', `java.lang.Class#isHidden()`, `hidden class`]
						]],
						[/* block */ 'b', [
							[/* text */ 't', `final fields declared in a `],
							[/* reference */ 'r', `java.lang.Class#isRecord()`, `record`]
						]]
					]],
					[/* text */ 't', `
 `],
					[/* block */ 'b', ''],
					[/* block */ 'b', [
						[/* text */ 't', ` The `],
						[/* inline code block */ 'i', `accessible`],
						[/* text */ 't', ` flag when `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', ` suppresses Java language access
 control checks to only enable `],
						[/* reference */ 'r', `#get(java.lang.Object)`, `read`],
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
		[/* method */ 'setBoolean(java.lang.Object,boolean)', [
			[/* method description */
				[/* text */ 't', `Sets the value of a field as a `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` on the specified object.
 This method is equivalent to
 `],
				[/* inline code block */ 'i', `set(obj, zObj)`],
				[/* text */ 't', `,
 where `],
				[/* inline code block */ 'i', `zObj`],
				[/* text */ 't', ` is a `],
				[/* inline code block */ 'i', `Boolean`],
				[/* text */ 't', ` object and
 `],
				[/* inline code block */ 'i', `zObj.booleanValue() == z`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object whose field should be modified`]
				]],
				[/* parameter */ 'z', [/* parameter description */
					[/* text */ 't', `the new value for the field of `],
					[/* inline code block */ 'i', `obj`],
					[/* text */ 't', `
 being modified`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object
              is enforcing Java language access control and the underlying
              field is either inaccessible or final;
              or if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object has no write access.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified object is not an
              instance of the class or interface declaring the underlying
              field (or a subclass or implementor thereof),
              or if an unwrapping conversion fails.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified object is null
              and the field is an instance field.`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the initialization provoked
              by this method fails.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setByte(java.lang.Object,byte)', [
			[/* method description */
				[/* text */ 't', `Sets the value of a field as a `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', ` on the specified object.
 This method is equivalent to
 `],
				[/* inline code block */ 'i', `set(obj, bObj)`],
				[/* text */ 't', `,
 where `],
				[/* inline code block */ 'i', `bObj`],
				[/* text */ 't', ` is a `],
				[/* inline code block */ 'i', `Byte`],
				[/* text */ 't', ` object and
 `],
				[/* inline code block */ 'i', `bObj.byteValue() == b`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object whose field should be modified`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the new value for the field of `],
					[/* inline code block */ 'i', `obj`],
					[/* text */ 't', `
 being modified`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object
              is enforcing Java language access control and the underlying
              field is either inaccessible or final;
              or if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object has no write access.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified object is not an
              instance of the class or interface declaring the underlying
              field (or a subclass or implementor thereof),
              or if an unwrapping conversion fails.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified object is null
              and the field is an instance field.`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the initialization provoked
              by this method fails.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setChar(java.lang.Object,char)', [
			[/* method description */
				[/* text */ 't', `Sets the value of a field as a `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` on the specified object.
 This method is equivalent to
 `],
				[/* inline code block */ 'i', `set(obj, cObj)`],
				[/* text */ 't', `,
 where `],
				[/* inline code block */ 'i', `cObj`],
				[/* text */ 't', ` is a `],
				[/* inline code block */ 'i', `Character`],
				[/* text */ 't', ` object and
 `],
				[/* inline code block */ 'i', `cObj.charValue() == c`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object whose field should be modified`]
				]],
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the new value for the field of `],
					[/* inline code block */ 'i', `obj`],
					[/* text */ 't', `
 being modified`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object
              is enforcing Java language access control and the underlying
              field is either inaccessible or final;
              or if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object has no write access.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified object is not an
              instance of the class or interface declaring the underlying
              field (or a subclass or implementor thereof),
              or if an unwrapping conversion fails.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified object is null
              and the field is an instance field.`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the initialization provoked
              by this method fails.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setDouble(java.lang.Object,double)', [
			[/* method description */
				[/* text */ 't', `Sets the value of a field as a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` on the specified object.
 This method is equivalent to
 `],
				[/* inline code block */ 'i', `set(obj, dObj)`],
				[/* text */ 't', `,
 where `],
				[/* inline code block */ 'i', `dObj`],
				[/* text */ 't', ` is a `],
				[/* inline code block */ 'i', `Double`],
				[/* text */ 't', ` object and
 `],
				[/* inline code block */ 'i', `dObj.doubleValue() == d`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object whose field should be modified`]
				]],
				[/* parameter */ 'd', [/* parameter description */
					[/* text */ 't', `the new value for the field of `],
					[/* inline code block */ 'i', `obj`],
					[/* text */ 't', `
 being modified`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object
              is enforcing Java language access control and the underlying
              field is either inaccessible or final;
              or if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object has no write access.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified object is not an
              instance of the class or interface declaring the underlying
              field (or a subclass or implementor thereof),
              or if an unwrapping conversion fails.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified object is null
              and the field is an instance field.`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the initialization provoked
              by this method fails.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setFloat(java.lang.Object,float)', [
			[/* method description */
				[/* text */ 't', `Sets the value of a field as a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` on the specified object.
 This method is equivalent to
 `],
				[/* inline code block */ 'i', `set(obj, fObj)`],
				[/* text */ 't', `,
 where `],
				[/* inline code block */ 'i', `fObj`],
				[/* text */ 't', ` is a `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', ` object and
 `],
				[/* inline code block */ 'i', `fObj.floatValue() == f`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object whose field should be modified`]
				]],
				[/* parameter */ 'f', [/* parameter description */
					[/* text */ 't', `the new value for the field of `],
					[/* inline code block */ 'i', `obj`],
					[/* text */ 't', `
 being modified`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object
              is enforcing Java language access control and the underlying
              field is either inaccessible or final;
              or if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object has no write access.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified object is not an
              instance of the class or interface declaring the underlying
              field (or a subclass or implementor thereof),
              or if an unwrapping conversion fails.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified object is null
              and the field is an instance field.`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the initialization provoked
              by this method fails.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setInt(java.lang.Object,int)', [
			[/* method description */
				[/* text */ 't', `Sets the value of a field as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` on the specified object.
 This method is equivalent to
 `],
				[/* inline code block */ 'i', `set(obj, iObj)`],
				[/* text */ 't', `,
 where `],
				[/* inline code block */ 'i', `iObj`],
				[/* text */ 't', ` is an `],
				[/* inline code block */ 'i', `Integer`],
				[/* text */ 't', ` object and
 `],
				[/* inline code block */ 'i', `iObj.intValue() == i`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object whose field should be modified`]
				]],
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `the new value for the field of `],
					[/* inline code block */ 'i', `obj`],
					[/* text */ 't', `
 being modified`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object
              is enforcing Java language access control and the underlying
              field is either inaccessible or final;
              or if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object has no write access.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified object is not an
              instance of the class or interface declaring the underlying
              field (or a subclass or implementor thereof),
              or if an unwrapping conversion fails.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified object is null
              and the field is an instance field.`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the initialization provoked
              by this method fails.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setLong(java.lang.Object,long)', [
			[/* method description */
				[/* text */ 't', `Sets the value of a field as a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` on the specified object.
 This method is equivalent to
 `],
				[/* inline code block */ 'i', `set(obj, lObj)`],
				[/* text */ 't', `,
 where `],
				[/* inline code block */ 'i', `lObj`],
				[/* text */ 't', ` is a `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` object and
 `],
				[/* inline code block */ 'i', `lObj.longValue() == l`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object whose field should be modified`]
				]],
				[/* parameter */ 'l', [/* parameter description */
					[/* text */ 't', `the new value for the field of `],
					[/* inline code block */ 'i', `obj`],
					[/* text */ 't', `
 being modified`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object
              is enforcing Java language access control and the underlying
              field is either inaccessible or final;
              or if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object has no write access.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified object is not an
              instance of the class or interface declaring the underlying
              field (or a subclass or implementor thereof),
              or if an unwrapping conversion fails.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified object is null
              and the field is an instance field.`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the initialization provoked
              by this method fails.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setShort(java.lang.Object,short)', [
			[/* method description */
				[/* text */ 't', `Sets the value of a field as a `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` on the specified object.
 This method is equivalent to
 `],
				[/* inline code block */ 'i', `set(obj, sObj)`],
				[/* text */ 't', `,
 where `],
				[/* inline code block */ 'i', `sObj`],
				[/* text */ 't', ` is a `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` object and
 `],
				[/* inline code block */ 'i', `sObj.shortValue() == s`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object whose field should be modified`]
				]],
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the new value for the field of `],
					[/* inline code block */ 'i', `obj`],
					[/* text */ 't', `
 being modified`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object
              is enforcing Java language access control and the underlying
              field is either inaccessible or final;
              or if this `],
					[/* inline code block */ 'i', `Field`],
					[/* text */ 't', ` object has no write access.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified object is not an
              instance of the class or interface declaring the underlying
              field (or a subclass or implementor thereof),
              or if an unwrapping conversion fails.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified object is null
              and the field is an instance field.`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the initialization provoked
              by this method fails.`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
