import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.module.ModuleFinder', [
	[/* class description */
		[/* text */ 't', `A finder of modules. A `],
		[/* inline code block */ 'i', `ModuleFinder`],
		[/* text */ 't', ` is used to find modules during
 `],
		[/* text */ 't', `resolution`],
		[/* text */ 't', ` or
 `],
		[/* reference */ 'r', `java.lang.module.Configuration#service-binding`, `service binding`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* inline code block */ 'i', `ModuleFinder`],
			[/* text */ 't', ` can only find one module with a given name. A
 `],
			[/* inline code block */ 'i', `ModuleFinder`],
			[/* text */ 't', ` that finds modules in a sequence of directories, for
 example, will locate the first occurrence of a module of a given name and
 will ignore other modules of that name that appear in directories later in
 the sequence. `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ` Example usage: `],
		[/* text */ 't', `

 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `Path dir1, dir2, dir3;

     ModuleFinder finder = ModuleFinder.of(dir1, dir2, dir3);

     Optional<ModuleReference> omref = finder.find("jdk.foo");
     omref.ifPresent(mref -> ... );`]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* reference */ 'r', `#find(java.lang.String)`, `find`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `#findAll()`, `findAll`],
			[/* text */ 't', ` methods
 defined here can fail for several reasons. These include I/O errors, errors
 detected parsing a module descriptor (`],
			[/* inline code block */ 'i', `module-info.class`],
			[/* text */ 't', `), or in the
 case of `],
			[/* inline code block */ 'i', `ModuleFinder`],
			[/* text */ 't', ` returned by `],
			[/* reference */ 'r', `#of(java.nio.file.Path...)`, `ModuleFinder.of`],
			[/* text */ 't', `, that
 two or more modules with the same name are found in a directory.
 When an error is detected then these methods throw `],
			[/* reference */ 'r', `java.lang.module.FindException`, `FindException`],
			[/* text */ 't', ` with an appropriate `],
			[/* reference */ 'r', `java.lang.Throwable#getCause()`, `cause`],
			[/* text */ 't', `.
 The behavior of a `],
			[/* inline code block */ 'i', `ModuleFinder`],
			[/* text */ 't', ` after a `],
			[/* inline code block */ 'i', `FindException`],
			[/* text */ 't', ` is
 thrown is undefined. For example, invoking `],
			[/* inline code block */ 'i', `find`],
			[/* text */ 't', ` after an exception
 is thrown may or may not scan the same modules that lead to the exception.
 It is recommended that a module finder be discarded after an exception is
 thrown. `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* inline code block */ 'i', `ModuleFinder`],
			[/* text */ 't', ` is not required to be thread safe. `]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'find(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Finds a reference to a module of a given name.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` A `],
					[/* inline code block */ 'i', `ModuleFinder`],
					[/* text */ 't', ` provides a consistent view of the
 modules that it locates. If `],
					[/* inline code block */ 'i', `find`],
					[/* text */ 't', ` is invoked several times to
 locate the same module (by name) then it will return the same result
 each time. If a module is located then it is guaranteed to be a member
 of the set of modules returned by the `],
					[/* reference */ 'r', `#findAll()`, `findAll`],
					[/* text */ 't', `
 method. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The name of the module to find`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.module.FindException', [/* throw description */
					[/* text */ 't', `If an error occurs finding the module`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If denied by the security manager`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A reference to a module with the given name or an empty
         `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` if not found`]
			]
		]],
		[/* method */ 'findAll()', [
			[/* method description */
				[/* text */ 't', `Returns the set of all module references that this finder can locate.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` A `],
					[/* inline code block */ 'i', `ModuleFinder`],
					[/* text */ 't', ` provides a consistent view of the modules
 that it locates. If `],
					[/* reference */ 'r', `#findAll()`, `findAll`],
					[/* text */ 't', ` is invoked several times
 then it will return the same (equals) result each time. For each `],
					[/* inline code block */ 'i', `ModuleReference`],
					[/* text */ 't', ` element in the returned set then it is guaranteed that
 `],
					[/* reference */ 'r', `#find(java.lang.String)`, `find`],
					[/* text */ 't', ` will locate the `],
					[/* inline code block */ 'i', `ModuleReference`],
					[/* text */ 't', ` if invoked
 to find that module. `]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.module.FindException', [/* throw description */
					[/* text */ 't', `If an error occurs finding all modules`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If denied by the security manager`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The set of all module references that this finder locates`]
			]
		]],
		[/* method */ 'compose(java.lang.module.ModuleFinder...)', [
			[/* method description */
				[/* text */ 't', `Returns a module finder that is composed from a sequence of zero or more
 module finders. The `],
				[/* reference */ 'r', `#find(java.lang.String)`, `find`],
				[/* text */ 't', ` method of the resulting
 module finder will locate a module by invoking the `],
				[/* inline code block */ 'i', `find`],
				[/* text */ 't', ` method
 of each module finder, in array index order, until either the module is
 found or all module finders have been searched. The `],
				[/* reference */ 'r', `#findAll()`, `findAll`],
				[/* text */ 't', ` method of the resulting module finder will return a set of
 modules that includes all modules located by the first module finder.
 The set of modules will include all modules located by the second or
 subsequent module finder that are not located by previous module finders
 in the sequence.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` When locating modules then any exceptions or errors thrown by the
 `],
					[/* inline code block */ 'i', `find`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `findAll`],
					[/* text */ 't', ` methods of the underlying module finders
 will be propagated to the caller of the resulting module finder's
 `],
					[/* inline code block */ 'i', `find`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `findAll`],
					[/* text */ 't', ` methods. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'finders', [/* parameter description */
					[/* text */ 't', `The array of module finders`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `A `],
				[/* inline code block */ 'i', `ModuleFinder`],
				[/* text */ 't', ` that composes a sequence of module finders`]
			]
		]],
		[/* method */ 'of(java.nio.file.Path...)', [
			[/* method description */
				[/* text */ 't', `Returns a module finder that locates modules on the file system by
 searching a sequence of directories and/or packaged modules.

 Each element in the given array is one of:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', ` A path to a directory of modules.`]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` A path to the `],
							[/* text */ 't', `top-level`],
							[/* text */ 't', ` directory of an
         `],
							[/* text */ 't', `exploded module`],
							[/* text */ 't', `. `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', `packaged module`]
					]]
				]],
				[/* text */ 't', `

 The module finder locates modules by searching each directory, exploded
 module, or packaged module in array index order. It finds the first
 occurrence of a module with a given name and ignores other modules of
 that name that appear later in the sequence.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If an element is a path to a directory of modules then each entry in
 the directory is a packaged module or the top-level directory of an
 exploded module. It is an error if a directory contains more than one
 module with the same name. If an element is a path to a directory, and
 that directory contains a file named `],
					[/* inline code block */ 'i', `module-info.class`],
					[/* text */ 't', `, then the
 directory is treated as an exploded module rather than a directory of
 modules. `]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The module finder returned by this method
 supports modules packaged as JAR files. A JAR file with a `],
					[/* inline code block */ 'i', `module-info.class`],
					[/* text */ 't', ` in its top-level directory, or in a versioned entry
 in a `],
					[/* reference */ 'r', `java.util.jar.JarFile#isMultiRelease()`, `multi-release`],
					[/* text */ 't', `
 JAR file, is a modular JAR file and thus defines an `],
					[/* text */ 't', `explicit`],
					[/* text */ 't', `
 module. A JAR file that does not have a `],
					[/* inline code block */ 'i', `module-info.class`],
					[/* text */ 't', ` in its
 top-level directory defines an `],
					[/* text */ 't', `automatic module`],
					[/* text */ 't', `, as follows:
 `]
				]],
				[/* text */ 't', `

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` If the JAR file has the attribute "`],
							[/* inline code block */ 'i', `Automatic-Module-Name`],
							[/* text */ 't', `"
     in its main manifest then its value is the `],
							[/* reference */ 'r', `java.lang.module.ModuleDescriptor#name()`, `module name`],
							[/* text */ 't', `. The module name is otherwise
     derived from the name of the JAR file. `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` The `],
							[/* reference */ 'r', `java.lang.module.ModuleDescriptor#version()`, `version`],
							[/* text */ 't', `, and the
     module name when the attribute "`],
							[/* inline code block */ 'i', `Automatic-Module-Name`],
							[/* text */ 't', `" is not
     present, are derived from the file name of the JAR file as follows: `]
						]],
						[/* text */ 't', `

     `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* block */ 'b', [
									[/* text */ 't', ` The "`],
									[/* inline code block */ 'i', `.jar`],
									[/* text */ 't', `" suffix is removed. `]
								]]
							]],
							[/* block */ 'b', [
								[/* block */ 'b', [
									[/* text */ 't', ` If the name matches the regular expression `],
									[/* inline code block */ 'i', `"-(\\\\d+(\\\\.|$))"`],
									[/* text */ 't', ` then the module name will be derived from the
         subsequence preceding the hyphen of the first occurrence. The
         subsequence after the hyphen is parsed as a `],
									[/* reference */ 'r', `java.lang.module.ModuleDescriptor.Version`, `Version`],
									[/* text */ 't', ` and ignored if it cannot be
         parsed as a `],
									[/* inline code block */ 'i', `Version`],
									[/* text */ 't', `. `]
								]]
							]],
							[/* block */ 'b', [
								[/* block */ 'b', [
									[/* text */ 't', ` All non-alphanumeric characters (`],
									[/* inline code block */ 'i', `[^A-Za-z0-9]`],
									[/* text */ 't', `)
         in the module name are replaced with a dot (`],
									[/* inline code block */ 'i', `"."`],
									[/* text */ 't', `), all
         repeating dots are replaced with one dot, and all leading and
         trailing dots are removed. `]
								]]
							]],
							[/* block */ 'b', [
								[/* block */ 'b', [
									[/* text */ 't', ` As an example, a JAR file named "`],
									[/* inline code block */ 'i', `foo-bar.jar`],
									[/* text */ 't', `" will
         derive a module name "`],
									[/* inline code block */ 'i', `foo.bar`],
									[/* text */ 't', `" and no version. A JAR file
         named "`],
									[/* inline code block */ 'i', `foo-bar-1.2.3-SNAPSHOT.jar`],
									[/* text */ 't', `" will derive a module
         name "`],
									[/* inline code block */ 'i', `foo.bar`],
									[/* text */ 't', `" and "`],
									[/* inline code block */ 'i', `1.2.3-SNAPSHOT`],
									[/* text */ 't', `" as the version.
         `]
								]]
							]]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` The set of packages in the module is derived from the
     non-directory entries in the JAR file that have names ending in
     "`],
							[/* inline code block */ 'i', `.class`],
							[/* text */ 't', `". A candidate package name is derived from the name
     using the characters up to, but not including, the last forward slash.
     All remaining forward slashes are replaced with dot (`],
							[/* inline code block */ 'i', `"."`],
							[/* text */ 't', `). If
     the resulting string is a legal package name then it is assumed to be
     a package name. For example, if the JAR file contains the entry
     "`],
							[/* inline code block */ 'i', `p/q/Foo.class`],
							[/* text */ 't', `" then the package name derived is
     "`],
							[/* inline code block */ 'i', `p.q`],
							[/* text */ 't', `".`]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` The contents of entries starting with `],
							[/* inline code block */ 'i', `META-INF/services/`],
							[/* text */ 't', ` are assumed to be service configuration files
     (see `],
							[/* reference */ 'r', `java.util.ServiceLoader`, `ServiceLoader`],
							[/* text */ 't', `). If the name of a file
     (that follows `],
							[/* inline code block */ 'i', `META-INF/services/`],
							[/* text */ 't', `) is a legal class name
     then it is assumed to be the fully-qualified class name of a service
     type. The entries in the file are assumed to be the fully-qualified
     class names of provider classes. `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` If the JAR file has a `],
							[/* inline code block */ 'i', `Main-Class`],
							[/* text */ 't', ` attribute in its
     main manifest, its value is a legal class name, and its package is
     in the set of packages derived for the module, then the value is the
     module `],
							[/* reference */ 'r', `java.lang.module.ModuleDescriptor#mainClass()`, `main class`],
							[/* text */ 't', `. `]
						]]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If a `],
					[/* inline code block */ 'i', `ModuleDescriptor`],
					[/* text */ 't', ` cannot be created (by means of the
 `],
					[/* reference */ 'r', `java.lang.module.ModuleDescriptor.Builder`, `ModuleDescriptor.Builder`],
					[/* text */ 't', ` API) for an
 automatic module then `],
					[/* inline code block */ 'i', `FindException`],
					[/* text */ 't', ` is thrown. This can arise
 when the value of the "`],
					[/* inline code block */ 'i', `Automatic-Module-Name`],
					[/* text */ 't', `" attribute is not a
 legal module name, a legal module name cannot be derived from the file
 name of the JAR file, where the JAR file contains a `],
					[/* inline code block */ 'i', `.class`],
					[/* text */ 't', ` in
 the top-level directory of the JAR file, where an entry in a service
 configuration file is not a legal class name or its package name is not
 in the set of packages derived for the module. `]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` In addition to JAR files, an implementation may also support modules
 that are packaged in other implementation specific module formats. If
 an element in the array specified to this method is a path to a directory
 of modules then entries in the directory that not recognized as modules
 are ignored. If an element in the array is a path to a packaged module
 that is not recognized then a `],
					[/* inline code block */ 'i', `FindException`],
					[/* text */ 't', ` is thrown when the
 file is encountered. Paths to files that do not exist are always ignored.
 `]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` As with automatic modules, the contents of a packaged or exploded
 module may need to be `],
					[/* text */ 't', `scanned`],
					[/* text */ 't', ` in order to determine the packages
 in the module. Whether `],
					[/* reference */ 'r', `java.nio.file.Files#isHidden(java.nio.file.Path)`, `hidden files`],
					[/* text */ 't', ` are ignored or not is implementation specific and therefore
 not specified. If a `],
					[/* inline code block */ 'i', `.class`],
					[/* text */ 't', ` file (other than `],
					[/* inline code block */ 'i', `module-info.class`],
					[/* text */ 't', `) is found in the top-level directory then it is
 assumed to be a class in the unnamed package and so `],
					[/* inline code block */ 'i', `FindException`],
					[/* text */ 't', `
 is thrown. `]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Finders created by this method are lazy and do not eagerly check
 that the given file paths are directories or packaged modules.
 Consequently, the `],
					[/* inline code block */ 'i', `find`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `findAll`],
					[/* text */ 't', ` methods will only
 fail if invoking these methods results in searching a directory or
 packaged module and an error is encountered. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'entries', [/* parameter description */
					[/* text */ 't', `A possibly-empty array of paths to directories of modules
        or paths to packaged or exploded modules`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `A `],
				[/* inline code block */ 'i', `ModuleFinder`],
				[/* text */ 't', ` that locates modules on the file system`]
			]
		]],
		[/* method */ 'ofSystem()', [
			[/* method description */
				[/* text */ 't', `Returns a module finder that locates the `],
				[/* text */ 't', `system modules`],
				[/* text */ 't', `. The
 system modules are the modules in the Java run-time image.
 The module finder will always find `],
				[/* inline code block */ 'i', `java.base`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If there is a security manager set then its `],
					[/* reference */ 'r', `java.lang.SecurityManager#checkPermission(java.security.Permission)`, `checkPermission`],
					[/* text */ 't', ` method is
 invoked to check that the caller has been granted
 `],
					[/* reference */ 'r', `java.lang.RuntimePermission`, `RuntimePermission("accessSystemModules")`],
					[/* text */ 't', `
 to access the system modules. `]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If denied by the security manager`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A `],
				[/* inline code block */ 'i', `ModuleFinder`],
				[/* text */ 't', ` that locates the system modules`]
			]
		]]
	],
	/* enum values */ UDF
]);
