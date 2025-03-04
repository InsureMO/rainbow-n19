import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Package', [
	[/* class description */
		[/* text */ 't', `Represents metadata about a run-time package associated with a class loader.
 Metadata includes annotations, versioning, and sealing.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Annotations for the run-time package are read from `],
			[/* inline code block */ 'i', `package-info.class`],
			[/* text */ 't', `
 at the same code source as classes in the run-time package.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The set of classes that make up the run-time package may implement a
 particular specification. The specification title, version, and vendor
 (indicating the owner/maintainer of the specification) can be provided
 when the `],
			[/* inline code block */ 'i', `Package`],
			[/* text */ 't', ` is defined. An application can ask if the
 `],
			[/* inline code block */ 'i', `Package`],
			[/* text */ 't', ` is compatible with a particular specification version
 by using the `],
			[/* reference */ 'r', `#isCompatibleWith(java.lang.String)`, `Package.isCompatibleWith(String)`],
			[/* text */ 't', `
 method. In addition, information about the actual classes that make up the
 run-time package can be provided when the `],
			[/* inline code block */ 'i', `Package`],
			[/* text */ 't', ` is defined.
 This information consists of an implementation title, version, and vendor
 (indicating the supplier of the classes).
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 A `],
			[/* inline code block */ 'i', `Package`],
			[/* text */ 't', ` may be explicitly defined with
 the `],
			[/* reference */ 'r', `.ClassLoader#definePackage(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.net.URL)`],
			[/* text */ 't', ` method.
 The caller supplies the specification and implementation titles, versions, and
 vendors. The caller also indicates whether the package is
 `],
			[/* reference */ 'r', `java.jar.Attributes.Name#SEALED`],
			[/* text */ 't', `.
 If a `],
			[/* inline code block */ 'i', `Package`],
			[/* text */ 't', ` is not explicitly defined for a run-time package when
 a class in that run-time package is defined, then a `],
			[/* inline code block */ 'i', `Package`],
			[/* text */ 't', ` is
 automatically defined by the class's defining class loader, as follows.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 A `],
			[/* inline code block */ 'i', `Package`],
			[/* text */ 't', ` automatically defined for classes in a named module has
 the following properties:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `The name of the package is derived from the `],
				[/* reference */ 'r', `.Class#getName()`],
				[/* text */ 't', `
     of the classes. Since classes in a named module must be in a named package,
     the derived name is never empty.`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `The package is sealed with the `],
				[/* reference */ 'r', `.ModuleReference#location()`],
				[/* text */ 't', ` as the code source, if known.`]
			]],
			[/* block */ 'b', `The specification and implementation titles, versions, and vendors
     are unspecified.`],
			[/* block */ 'b', [
				[/* text */ 't', `Any annotations on the package are read from `],
				[/* inline code block */ 'i', `package-info.class`],
				[/* text */ 't', `
     as specified above.`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 A `],
			[/* inline code block */ 'i', `Package`],
			[/* text */ 't', ` automatically defined for classes in an unnamed module
 has the following properties:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `The name of the package is either `],
				[/* inline code block */ 'i', `""`],
				[/* text */ 't', ` (for classes in an unnamed package)
     or derived from the `],
				[/* reference */ 'r', `.Class#getName()`],
				[/* text */ 't', ` of the classes
     (for classes in a named package).`]
			]],
			[/* block */ 'b', `The package is not sealed.`],
			[/* block */ 'b', `The specification and implementation titles, versions, and vendors
     are unspecified.`],
			[/* block */ 'b', [
				[/* text */ 't', `Any annotations on the package are read from `],
				[/* inline code block */ 'i', `package-info.class`],
				[/* text */ 't', `
     as specified above.`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 A `],
			[/* inline code block */ 'i', `Package`],
			[/* text */ 't', ` can be obtained with the `],
			[/* reference */ 'r', `#getPackage(java.lang.String)`, `Package.getPackage(String)`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `.ClassLoader#getDefinedPackage(java.lang.String)`],
			[/* text */ 't', ` methods.
 Every `],
			[/* inline code block */ 'i', `Package`],
			[/* text */ 't', ` defined by a class loader can be obtained
 with the `],
			[/* reference */ 'r', `#getPackages()`, `Package.getPackages()`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `.ClassLoader#getDefinedPackages()`],
			[/* text */ 't', ` methods.`]
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
				[/* block */ 'b', [
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
					[/* reference */ 'r', `.AnnotatedElement#getDeclaredAnnotation(java.lang.Class)`],
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
				[/* text */ 't', `all this element's annotations for the specified annotation type if
     directly or indirectly present on this element, else an array of length zero`]
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
		[/* method */ 'isCompatibleWith(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Compare this package's specification version with a
 desired version. It returns true if
 this packages specification version number is greater than or equal
 to the desired version number. `],
				[/* block */ 'b', `

 Version numbers are compared by sequentially comparing corresponding
 components of the desired and specification strings.
 Each component is converted as a decimal integer and the values
 compared.
 If the specification value is greater than the desired
 value true is returned. If the value is less false is returned.
 If the values are equal the period is skipped and the next pair of
 components is compared.`]
			],
			[/* parameters */
				[/* parameter */ 'desired', [/* parameter description */
					[/* text */ 't', `the version string of the desired version.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `if the current version is not known or
         the desired or current version is not of the correct dotted form.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if this package's version number is greater
         than or equal to the desired version number`]
			]
		]],
		[/* method */ 'isSealed()', [
			[/* method description */
				[/* text */ 't', `Returns true if this package is sealed.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the package is sealed, false otherwise`]
			]
		]],
		[/* method */ 'isSealed(java.net.URL)', [
			[/* method description */
				[/* text */ 't', `Returns true if this package is sealed with respect to the specified
 code source `],
				[/* inline code block */ 'i', `url`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'url', [/* parameter description */
					[/* text */ 't', `the code source URL`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this package is sealed with respect to the given `],
				[/* inline code block */ 'i', `url`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Return the hash code computed from the package name.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hash code computed from the package name.`]
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
		[/* method */ 'getImplementationTitle()', [
			[/* method description */
				[/* text */ 't', `Return the title of this package.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the title of the implementation, `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` is returned if it is not known.`]
			]
		]],
		[/* method */ 'getImplementationVendor()', [
			[/* method description */
				[/* text */ 't', `Returns the vendor that implemented this package, `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
 is returned if it is not known.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the vendor that implemented this package, `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
 is returned if it is not known.`]
			]
		]],
		[/* method */ 'getImplementationVersion()', [
			[/* method description */
				[/* text */ 't', `Return the version of this implementation. It consists of any string
 assigned by the vendor of this implementation and does
 not have any particular syntax specified or expected by the Java
 runtime. It may be compared for equality with other
 package version strings used for this implementation
 by this vendor for this package.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the version of the implementation, `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` is returned if it is not known.`]
			]
		]],
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Return the name of this package.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The fully-qualified name of this package as defined in section `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-6.html#jls-6.5.3`, `6.5.3`],
				[/* text */ 't', ` of
          `],
				[/* text */ 't', `The Java Language Specification`],
				[/* text */ 't', `,
          for example, `],
				[/* inline code block */ 'i', `java.lang`]
			]
		]],
		[/* method */ 'getSpecificationTitle()', [
			[/* method description */
				[/* text */ 't', `Return the title of the specification that this package implements.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the specification title, `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` is returned if it is not known.`]
			]
		]],
		[/* method */ 'getSpecificationVendor()', [
			[/* method description */
				[/* text */ 't', `Return the name of the organization, vendor,
 or company that owns and maintains the specification
 of the classes that implement this package.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the specification vendor, `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` is returned if it is not known.`]
			]
		]],
		[/* method */ 'getSpecificationVersion()', [
			[/* method description */
				[/* text */ 't', `Returns the version number of the specification
 that this package implements.
 This version string must be a sequence of non-negative decimal
 integers separated by "."'s and may have leading zeros.
 When version strings are compared the most significant
 numbers are compared.


 `],
				[/* block */ 'b', `Specification version numbers use a syntax that consists of non-negative
 decimal integers separated by periods ".", for example "2.0" or
 "1.2.3.4.5.6.7".  This allows an extensible number to be used to represent
 major, minor, micro, etc. versions.  The version specification is described
 by the following formal grammar:
 `],
				[/* block */ 'b', [
					[/* dl */ 'dl', [
						[/* dt */ 'dt', [
							[/* text */ 't', `SpecificationVersion:`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `opt`, 'sub'],
							[/* text */ 't', `

 `]
						]],
						[/* dt */ 'dt', [
							[/* text */ 't', `RefinedVersion:`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* inline code block */ 'i', `.`],
							[/* text */ 't', ` `],
							[/* text */ 't', `Digits`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* inline code block */ 'i', `.`],
							[/* text */ 't', ` `],
							[/* text */ 't', `Digits RefinedVersion`],
							[/* text */ 't', `

 `]
						]],
						[/* dt */ 'dt', [
							[/* text */ 't', `Digits:`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `Digit`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `Digits`],
							[/* text */ 't', `

 `]
						]],
						[/* dt */ 'dt', [
							[/* text */ 't', `Digit:`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `any character for which `],
							[/* reference */ 'r', `.Character#isDigit(char)`],
							[/* text */ 't', ` returns `],
							[/* inline code block */ 'i', `true`],
							[/* text */ 't', `,
 e.g. 0, 1, 2, ...
 `]
						]]
					]]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the specification version, `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` is returned if it is not known.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns the string representation of this Package.
 Its value is the string "package " and the package name.
 If the package title is defined it is appended.
 If the package version is defined it is appended.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the string representation of the package.`]
			]
		]],
		[/* method */ 'getPackage(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Finds a package by name in the caller's class loader and its
 ancestors.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the caller's class loader defines a `],
					[/* inline code block */ 'i', `Package`],
					[/* text */ 't', ` of the given name,
 the `],
					[/* inline code block */ 'i', `Package`],
					[/* text */ 't', ` is returned. Otherwise, the ancestors of the
 caller's class loader are searched recursively (parent by parent)
 for a `],
					[/* inline code block */ 'i', `Package`],
					[/* text */ 't', ` of the given name.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Calling this method is equivalent to calling `],
					[/* reference */ 'r', `.ClassLoader#getPackage(java.lang.String)`],
					[/* text */ 't', `
 on a `],
					[/* inline code block */ 'i', `ClassLoader`],
					[/* text */ 't', ` instance which is the caller's class loader.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `A package name, such as "`],
					[/* inline code block */ 'i', `java.lang`],
					[/* text */ 't', `".`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `Package`],
				[/* text */ 't', ` of the given name defined by the caller's
         class loader or its ancestors, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if not found.`]
			]
		]],
		[/* method */ 'getPackages()', [
			[/* method description */
				[/* text */ 't', `Returns all of the `],
				[/* inline code block */ 'i', `Package`],
				[/* text */ 't', `s defined by the caller's class loader
 and its ancestors.  The returned array may contain more than one
 `],
				[/* inline code block */ 'i', `Package`],
				[/* text */ 't', ` object of the same package name, each defined by
 a different class loader in the class loader hierarchy.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Calling this method is equivalent to calling `],
					[/* reference */ 'r', `.ClassLoader#getPackages()`],
					[/* text */ 't', `
 on a `],
					[/* inline code block */ 'i', `ClassLoader`],
					[/* text */ 't', ` instance which is the caller's class loader.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The array of `],
				[/* inline code block */ 'i', `Package`],
				[/* text */ 't', ` objects defined by this
          class loader and its ancestors`]
			]
		]]
	],
]);
