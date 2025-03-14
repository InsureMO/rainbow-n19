import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.AccessibleObject', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* inline code block */ 'i', `AccessibleObject`],
		[/* text */ 't', ` class is the base class for `],
		[/* inline code block */ 'i', `Field`],
		[/* text */ 't', `,
 `],
		[/* inline code block */ 'i', `Method`],
		[/* text */ 't', `, and `],
		[/* inline code block */ 'i', `Constructor`],
		[/* text */ 't', ` objects (known as `],
		[/* text */ 't', `reflected
 objects`],
		[/* text */ 't', `). It provides the ability to flag a reflected object as
 suppressing checks for Java language access control when it is used. This
 permits sophisticated applications with sufficient privilege, such as Java
 Object Serialization or other persistence mechanisms, to manipulate objects
 in a manner that would normally be prohibited.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Java language access control prevents use of private members outside
 their top-level class; package access members outside their package; protected members
 outside their package or subclasses; and public members outside their
 module unless they are declared in an `],
			[/* reference */ 'r', `java.lang.Module#isExported(java.lang.String,java.lang.Module)`, `exported`],
			[/* text */ 't', ` package and the user `],
			[/* reference */ 'r', `java.lang.Module#canRead(java.lang.Module)`, `reads`],
			[/* text */ 't', ` their module. By
 default, Java language access control is enforced (with one variation) when
 `],
			[/* inline code block */ 'i', `Field`],
			[/* text */ 't', `s, `],
			[/* inline code block */ 'i', `Method`],
			[/* text */ 't', `s, or `],
			[/* inline code block */ 'i', `Constructor`],
			[/* text */ 't', `s are used to get or
 set fields, to invoke methods, or to create and initialize new instances of
 classes, respectively. Every reflected object checks that the code using it
 is in an appropriate class, package, or module. The check when invoked by
 `],
			[/* text */ 't', `JNI code`],
			[/* text */ 't', ` with no Java
 class on the stack only succeeds if the member and the declaring class are
 public, and the class is in a package that is exported to all modules. `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ` The one variation from Java language access control is that the checks
 by reflected objects assume readability. That is, the module containing
 the use of a reflected object is assumed to read the module in which
 the underlying field, method, or constructor is declared. `],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Whether the checks for Java language access control can be suppressed
 (and thus, whether access can be enabled) depends on whether the reflected
 object corresponds to a member in an exported or open package
 (see `],
			[/* reference */ 'r', `#setAccessible(boolean)`, `setAccessible(boolean)`],
			[/* text */ 't', `). `]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructor: only used by the Java Virtual Machine.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
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
		[/* method */ 'getDeclaredAnnotation(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns this element's annotation for the specified type if
 such an annotation is `],
				[/* text */ 't', `directly present`],
				[/* text */ 't', `, else null.

 This method ignores inherited annotations. (Returns null if no
 annotations are directly present on this element.)

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
     directly or indirectly present on this element, else an array of length zero`]
			]
		]],
		[/* method */ 'isAccessible()', [
			[/* method description */
				[/* text */ 't', `Get the value of the `],
				[/* inline code block */ 'i', `accessible`],
				[/* text */ 't', ` flag for this reflected object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value of the object's `],
				[/* inline code block */ 'i', `accessible`],
				[/* text */ 't', ` flag`]
			]
		]],
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
		[/* method */ 'canAccess(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Test if the caller can access this reflected object. If this reflected
 object corresponds to an instance method or field then this method tests
 if the caller can access the given `],
				[/* inline code block */ 'i', `obj`],
				[/* text */ 't', ` with the reflected object.
 For instance methods or fields then the `],
				[/* inline code block */ 'i', `obj`],
				[/* text */ 't', ` argument must be an
 instance of the `],
				[/* reference */ 'r', `java.lang.reflect.Member#getDeclaringClass()`, `declaring class`],
				[/* text */ 't', `. For
 static members and constructors then `],
				[/* inline code block */ 'i', `obj`],
				[/* text */ 't', ` must be `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if the `],
					[/* inline code block */ 'i', `accessible`],
					[/* text */ 't', ` flag
 is set to `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, i.e. the checks for Java language access control
 are suppressed, or if the caller can access the member as
 specified in `],
					[/* text */ 't', `The Java Language Specification`],
					[/* text */ 't', `,
 with the variation noted in the class description. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `an instance object of the declaring class of this reflected
            object if it is an instance method or field`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', ``],
					[/* list */ 'l', [
						[/* block */ 'b', [
							[/* text */ 't', ` if this reflected object is a static member or constructor and
              the given `],
							[/* inline code block */ 'i', `obj`],
							[/* text */ 't', ` is non-`],
							[/* inline code block */ 'i', `null`],
							[/* text */ 't', `, or `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` if this reflected object is an instance method or field
              and the given `],
							[/* inline code block */ 'i', `obj`],
							[/* text */ 't', ` is `],
							[/* inline code block */ 'i', `null`],
							[/* text */ 't', ` or of type
              that is not a subclass of the `],
							[/* reference */ 'r', `java.lang.reflect.Member#getDeclaringClass()`, `declaring class`],
							[/* text */ 't', ` of the member.`]
						]]
					]]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the caller can access this reflected object.`]
			]
		]],
		[/* method */ 'trySetAccessible()', [
			[/* method description */
				[/* text */ 't', `Set the `],
				[/* inline code block */ 'i', `accessible`],
				[/* text */ 't', ` flag for this reflected object to `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `
 if possible. This method sets the `],
				[/* inline code block */ 'i', `accessible`],
				[/* text */ 't', ` flag, as if by
 invoking `],
				[/* reference */ 'r', `#setAccessible(boolean)`, `setAccessible(true)`],
				[/* text */ 't', `, and returns
 the possibly-updated value for the `],
				[/* inline code block */ 'i', `accessible`],
				[/* text */ 't', ` flag. If access
 cannot be enabled, i.e. the checks or Java language access control cannot
 be suppressed, this method returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` (as opposed to `],
				[/* inline code block */ 'i', `setAccessible(true)`],
				[/* text */ 't', ` throwing `],
				[/* inline code block */ 'i', `InaccessibleObjectException`],
				[/* text */ 't', ` when
 it fails).

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method is a no-op if the `],
					[/* inline code block */ 'i', `accessible`],
					[/* text */ 't', ` flag for
 this reflected object is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` For example, a caller can invoke `],
					[/* inline code block */ 'i', `trySetAccessible`],
					[/* text */ 't', `
 on a `],
					[/* inline code block */ 'i', `Method`],
					[/* text */ 't', ` object for a private instance method
 `],
					[/* inline code block */ 'i', `p.T::privateMethod`],
					[/* text */ 't', ` to suppress the checks for Java language access
 control when the `],
					[/* inline code block */ 'i', `Method`],
					[/* text */ 't', ` is invoked.
 If `],
					[/* inline code block */ 'i', `p.T`],
					[/* text */ 't', ` class is in a different module to the caller and
 package `],
					[/* inline code block */ 'i', `p`],
					[/* text */ 't', ` is open to at least the caller's module,
 the code below successfully sets the `],
					[/* inline code block */ 'i', `accessible`],
					[/* text */ 't', ` flag
 to `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `.

 `]
				]],
				[/* code block */ 'c', [
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `p.T obj = ....;  // instance of p.T
     :
     Method m = p.T.class.getDeclaredMethod("privateMethod");
     if (m.trySetAccessible()) {
         m.invoke(obj);
     } else {
         // package p is not opened to the caller to access private member of T
         ...
     }`]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` If there is a security manager, its `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method
 is first called with a `],
					[/* inline code block */ 'i', `ReflectPermission("suppressAccessChecks")`],
					[/* text */ 't', `
 permission. `]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the request is denied by the security manager`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the `],
				[/* inline code block */ 'i', `accessible`],
				[/* text */ 't', ` flag is set to `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `;
         `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if access cannot be enabled.`]
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
				[/* block */ 'b', ` Note that any annotations returned by this method are
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
				[/* block */ 'b', ` Note that any annotations returned by this method are
 declaration annotations.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `annotations directly present on this element`]
			]
		]],
		[/* method */ 'setAccessible(java.lang.reflect.AccessibleObject[],boolean)', [
			[/* method description */
				[/* text */ 't', `Convenience method to set the `],
				[/* inline code block */ 'i', `accessible`],
				[/* text */ 't', ` flag for an
 array of reflected objects with a single security check (for efficiency).

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method may be used to enable access to all reflected objects in
 the array when access to each reflected object can be enabled as
 specified by `],
					[/* reference */ 'r', `#setAccessible(boolean)`, `setAccessible(boolean)`],
					[/* text */ 't', `. `]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If there is a security manager, its
 `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method is first called with a
 `],
					[/* inline code block */ 'i', `ReflectPermission("suppressAccessChecks")`],
					[/* text */ 't', ` permission.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `SecurityException`],
					[/* text */ 't', ` is also thrown if any of the elements of
 the input `],
					[/* inline code block */ 'i', `array`],
					[/* text */ 't', ` is a `],
					[/* reference */ 'r', `java.lang.reflect.Constructor`, `Constructor`],
					[/* text */ 't', `
 object for the class `],
					[/* inline code block */ 'i', `java.lang.Class`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `flag`],
					[/* text */ 't', ` is true.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `the array of AccessibleObjects`]
				]],
				[/* parameter */ 'flag', [/* parameter description */
					[/* text */ 't', `the new value for the `],
					[/* inline code block */ 'i', `accessible`],
					[/* text */ 't', ` flag
              in each object`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.reflect.InaccessibleObjectException', [/* throw description */
					[/* text */ 't', `if access cannot be enabled for all
         objects in the array`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the request is denied by the security manager
         or an element in the array is a constructor for `],
					[/* inline code block */ 'i', `java.lang.Class`]
				]]
			],
			/* return */ UDF
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
					[/* reference */ 'r', `java.lang.reflect.Field#set(java.lang.Object,java.lang.Object)`, `write`],
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
					[/* reference */ 'r', `java.lang.reflect.Field#get(java.lang.Object)`, `read`],
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
		]]
	],
]);
