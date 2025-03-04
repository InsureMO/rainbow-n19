import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Module', [
	[/* class description */
		[/* text */ 't', `Represents a run-time module, either `],
		[/* reference */ 'r', `#isNamed()`, `named`],
		[/* text */ 't', ` or unnamed.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Named modules have a `],
			[/* reference */ 'r', `#getName()`, `name`],
			[/* text */ 't', ` and are constructed by the
 Java Virtual Machine when a graph of modules is defined to the Java virtual
 machine to create a `],
			[/* reference */ 'r', `java.lang.ModuleLayer`],
			[/* text */ 't', `. `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` An unnamed module does not have a name. There is an unnamed module for
 each `],
			[/* reference */ 'r', `java.lang.ClassLoader`],
			[/* text */ 't', `, obtained by invoking its `],
			[/* reference */ 'r', `.ClassLoader#getUnnamedModule()`],
			[/* text */ 't', ` method. All types that are
 not in a named module are members of their defining class loader's unnamed
 module. `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The package names that are parameters or returned by methods defined in
 this class are the fully-qualified names of the packages as defined in
 section `],
			[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-6.html#jls-6.5.3`, `6.5.3`],
			[/* text */ 't', ` of `],
			[/* text */ 't', `The Java Language Specification`],
			[/* text */ 't', `, for
 example, `],
			[/* inline code block */ 'i', `"java.lang"`],
			[/* text */ 't', `. `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Unless otherwise specified, passing a `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` argument to a method
 in this class causes a `],
			[/* reference */ 'r', `java.lang.NullPointerException`],
			[/* text */ 't', ` to
 be thrown. `]
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
 This method returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` when invoked on an unnamed module.

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
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this element's annotation for the specified annotation type if
     present on this element, else null`]
			]
		]],
		[/* method */ 'canRead(java.lang.Module)', [
			[/* method description */
				[/* text */ 't', `Indicates if this module reads the given module. This method returns
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if invoked to test if this module reads itself. It also
 returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if invoked on an unnamed module (as unnamed
 modules read all modules).`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `The other module`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this module reads `],
				[/* inline code block */ 'i', `other`]
			]
		]],
		[/* method */ 'canUse(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Indicates if this module has a service dependence on the given service
 type. This method always returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` when invoked on an unnamed
 module or an automatic module.`]
			],
			[/* parameters */
				[/* parameter */ 'service', [/* parameter description */
					[/* text */ 't', `The service type`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this module uses service type `],
				[/* inline code block */ 'i', `st`]
			]
		]],
		[/* method */ 'isExported(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this module exports the given package
 unconditionally.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method always returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` when invoked on an unnamed
 module. A package that is `],
					[/* reference */ 'r', `#isOpen(java.lang.String)`, `opened`],
					[/* text */ 't', ` unconditionally
 is considered exported unconditionally at run-time and so this method
 returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if the package is opened unconditionally. `]
				]],
				[/* block */ 'b', ` This method does not check if the given module reads this module. `]
			],
			[/* parameters */
				[/* parameter */ 'pn', [/* parameter description */
					[/* text */ 't', `The package name`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this module exports the package unconditionally`]
			]
		]],
		[/* method */ 'isExported(java.lang.String,java.lang.Module)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this module exports the given package to at
 least the given module.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if invoked to test if a package in
 this module is exported to itself. It always returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` when
 invoked on an unnamed module. A package that is `],
					[/* reference */ 'r', `#isOpen(java.lang.String,java.lang.Module)`, `open`],
					[/* text */ 't', ` to
 the given module is considered exported to that module at run-time and
 so this method returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if the package is open to the given
 module. `]
				]],
				[/* block */ 'b', ` This method does not check if the given module reads this module. `]
			],
			[/* parameters */
				[/* parameter */ 'pn', [/* parameter description */
					[/* text */ 't', `The package name`]
				]],
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `The other module`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this module exports the package to at least the
         given module`]
			]
		]],
		[/* method */ 'isNamed()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this module is a named module.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this is a named module`]
			]
		]],
		[/* method */ 'isOpen(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this module has `],
				[/* text */ 't', `opened`],
				[/* text */ 't', ` a package
 unconditionally.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method always returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` when invoked on an unnamed
 module. Additionally, it always returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` when invoked on an
 `],
					[/* reference */ 'r', `.ModuleDescriptor#isOpen()`],
					[/* text */ 't', ` module with a package in the
 module. `]
				]],
				[/* block */ 'b', ` This method does not check if the given module reads this module. `]
			],
			[/* parameters */
				[/* parameter */ 'pn', [/* parameter description */
					[/* text */ 't', `The package name`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this module has `],
				[/* text */ 't', `opened`],
				[/* text */ 't', ` the package
         unconditionally`]
			]
		]],
		[/* method */ 'isOpen(java.lang.String,java.lang.Module)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this module has `],
				[/* text */ 't', `opened`],
				[/* text */ 't', ` a package to at
 least the given module.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if invoked to test if a package in
 this module is open to itself. It returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` when invoked on an
 `],
					[/* reference */ 'r', `.ModuleDescriptor#isOpen()`],
					[/* text */ 't', ` module with a package in the module.
 It always returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` when invoked on an unnamed module. `]
				]],
				[/* block */ 'b', ` This method does not check if the given module reads this module. `]
			],
			[/* parameters */
				[/* parameter */ 'pn', [/* parameter description */
					[/* text */ 't', `The package name`]
				]],
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `The other module`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this module has `],
				[/* text */ 't', `opened`],
				[/* text */ 't', ` the package
         to at least the given module`]
			]
		]],
		[/* method */ 'getResourceAsStream(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns an input stream for reading a resource in this module.
 The `],
				[/* inline code block */ 'i', `name`],
				[/* text */ 't', ` parameter is a `],
				[/* inline code block */ 'i', `'/'`],
				[/* text */ 't', `-separated path name that
 identifies the resource. As with `],
				[/* reference */ 'r', `.Class#getResourceAsStream(java.lang.String)`],
				[/* text */ 't', `, this method delegates to the module's class
 loader `],
				[/* reference */ 'r', `.ClassLoader#findResource(java.lang.String,java.lang.String)`],
				[/* text */ 't', ` method, invoking it with the module name
 (or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` when the module is unnamed) and the name of the
 resource. If the resource name has a leading slash then it is dropped
 before delegation.

 `],
				[/* block */ 'b', `encapsulated`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` If the resource name ends with  "`],
						[/* inline code block */ 'i', `.class`],
						[/* text */ 't', `" then it is not
     encapsulated. `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` A `],
						[/* text */ 't', `package name`],
						[/* text */ 't', ` is derived from the resource name. If
     the package name is a `],
						[/* reference */ 'r', `#getPackages()`, `package`],
						[/* text */ 't', ` in the
     module then the resource can only be located by the caller of this
     method when the package is `],
						[/* reference */ 'r', `#isOpen(java.lang.String,java.lang.Module)`, `open`],
						[/* text */ 't', `
     to at least the caller's module. If the resource is not in a
     package in the module then the resource is not encapsulated. `]
					]]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` In the above, the `],
					[/* text */ 't', `package name`],
					[/* text */ 't', ` for a resource is derived
 from the subsequence of characters that precedes the last `],
					[/* inline code block */ 'i', `'/'`],
					[/* text */ 't', ` in
 the name and then replacing each `],
					[/* inline code block */ 'i', `'/'`],
					[/* text */ 't', ` character in the subsequence
 with `],
					[/* inline code block */ 'i', `'.'`],
					[/* text */ 't', `. A leading slash is ignored when deriving the package
 name. As an example, the package name derived for a resource named
 "`],
					[/* inline code block */ 'i', `a/b/c/foo.properties`],
					[/* text */ 't', `" is "`],
					[/* inline code block */ 'i', `a.b.c`],
					[/* text */ 't', `". A resource name
 with the name "`],
					[/* inline code block */ 'i', `META-INF/MANIFEST.MF`],
					[/* text */ 't', `" is never encapsulated
 because "`],
					[/* inline code block */ 'i', `META-INF`],
					[/* text */ 't', `" is not a legal package name. `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if the resource is not in this
 module, the resource is encapsulated and cannot be located by the caller,
 or access to the resource is denied by the security manager. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The resource name`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An input stream for reading the resource or `],
				[/* inline code block */ 'i', `null`]
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
 This method returns an empty array when invoked on an unnamed module.

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
 This method returns an empty array when invoked on an unnamed module.

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
		[/* method */ 'getClassLoader()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `ClassLoader`],
				[/* text */ 't', ` for this module.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If there is a security manager then its `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', `
 method if first called with a `],
					[/* inline code block */ 'i', `RuntimePermission("getClassLoader")`],
					[/* text */ 't', `
 permission to check that the caller is allowed to get access to the
 class loader. `]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If denied by the security manager`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The class loader for this module`]
			]
		]],
		[/* method */ 'addExports(java.lang.String,java.lang.Module)', [
			[/* method description */
				[/* text */ 't', `If the caller's module is this module then update this module to export
 the given package to the given module.

 `],
				[/* block */ 'b', `open`]
			],
			[/* parameters */
				[/* parameter */ 'pn', [/* parameter description */
					[/* text */ 't', `The package name`]
				]],
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `The module`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `pn`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, or this is a named module and the
         package `],
					[/* inline code block */ 'i', `pn`],
					[/* text */ 't', ` is not a package in this module`]
				]],
				[/* throw */ 'java.lang.IllegalCallerException', [/* throw description */
					[/* text */ 't', `If this is a named module and the caller's module is not this
         module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this module`]
			]
		]],
		[/* method */ 'addOpens(java.lang.String,java.lang.Module)', [
			[/* method description */
				[/* text */ 't', `If this module has `],
				[/* text */ 't', `opened`],
				[/* text */ 't', ` a package to at least the caller
 module then update this module to open the package to the given module.
 Opening a package with this method allows all types in the package,
 and all their members, not just public types and their public members,
 to be reflected on by the given module when using APIs that support
 private access or a way to bypass or suppress default Java language
 access control checks.

 `],
				[/* block */ 'b', `open`]
			],
			[/* parameters */
				[/* parameter */ 'pn', [/* parameter description */
					[/* text */ 't', `The package name`]
				]],
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `The module`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `pn`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, or this is a named module and the
         package `],
					[/* inline code block */ 'i', `pn`],
					[/* text */ 't', ` is not a package in this module`]
				]],
				[/* throw */ 'java.lang.IllegalCallerException', [/* throw description */
					[/* text */ 't', `If this is a named module and this module has not opened the
         package to at least the caller's module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this module`]
			]
		]],
		[/* method */ 'addReads(java.lang.Module)', [
			[/* method description */
				[/* text */ 't', `If the caller's module is this module then update this module to read
 the given module.

 This method is a no-op if `],
				[/* inline code block */ 'i', `other`],
				[/* text */ 't', ` is this module (all modules read
 themselves), this module is an unnamed module (as unnamed modules read
 all modules), or this module already reads `],
				[/* inline code block */ 'i', `other`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `The other module`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalCallerException', [/* throw description */
					[/* text */ 't', `If this is a named module and the caller's module is not this
         module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this module`]
			]
		]],
		[/* method */ 'addUses(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `If the caller's module is this module then update this module to add a
 service dependence on the given service type. This method is intended
 for use by frameworks that invoke `],
				[/* reference */ 'r', `java.util.ServiceLoader`],
				[/* text */ 't', ` on behalf of other modules or where the framework is
 passed a reference to the service type by other code. This method is
 a no-op when invoked on an unnamed module or an automatic module.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method does not cause `],
					[/* reference */ 'r', `.Configuration#resolveAndBind(java.lang.module.ModuleFinder,java.lang.module.ModuleFinder,java.util.Collection)`],
					[/* text */ 't', ` to be re-run. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'service', [/* parameter description */
					[/* text */ 't', `The service type`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalCallerException', [/* throw description */
					[/* text */ 't', `If this is a named module and the caller's module is not this
         module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this module`]
			]
		]],
		[/* method */ 'getDescriptor()', [
			[/* method description */
				[/* text */ 't', `Returns the module descriptor for this module or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this
 module is an unnamed module.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The module descriptor for this module`]
			]
		]],
		[/* method */ 'getLayer()', [
			[/* method description */
				[/* text */ 't', `Returns the module layer that contains this module or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if
 this module is not in a module layer.

 A module layer contains named modules and therefore this method always
 returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` when invoked on an unnamed module.

 `],
				[/* block */ 'b', [
					[/* reference */ 'r', `.Proxy#dynamicmodule`],
					[/* text */ 't', ` are
 named modules that are generated at runtime. A dynamic module may or may
 not be in a module layer. `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The module layer that contains this module`]
			]
		]],
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Returns the module name or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this module is an unnamed
 module.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The module name`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns the string representation of this module. For a named module,
 the representation is the string `],
				[/* inline code block */ 'i', `"module"`],
				[/* text */ 't', `, followed by a space,
 and then the module name. For an unnamed module, the representation is
 the string `],
				[/* inline code block */ 'i', `"unnamed module"`],
				[/* text */ 't', `, followed by a space, and then an
 implementation specific string that identifies the unnamed module.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The string representation of this module`]
			]
		]],
		[/* method */ 'getPackages()', [
			[/* method description */
				[/* text */ 't', `Returns the set of package names for the packages in this module.

 `],
				[/* block */ 'b', ` For named modules, the returned set contains an element for each
 package in the module. `],
				[/* block */ 'b', [
					[/* text */ 't', ` For unnamed modules, the returned set contains an element for
 each package that `],
					[/* reference */ 'r', `.ClassLoader#getDefinedPackages()`],
					[/* text */ 't', `
 in the unnamed module.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the set of the package names of the packages in this module`]
			]
		]]
	],
]);
