import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Class', [
	[/* class description */
		[/* text */ 't', `Instances of the class `],
		[/* inline code block */ 'i', `Class`],
		[/* text */ 't', ` represent classes and
 interfaces in a running Java application. An enum class and a record
 class are kinds of class; an annotation interface is a kind of
 interface. Every array also belongs to a class that is reflected as
 a `],
		[/* inline code block */ 'i', `Class`],
		[/* text */ 't', ` object that is shared by all arrays with the same
 element type and number of dimensions.  The primitive Java types
 (`],
		[/* inline code block */ 'i', `boolean`],
		[/* text */ 't', `, `],
		[/* inline code block */ 'i', `byte`],
		[/* text */ 't', `, `],
		[/* inline code block */ 'i', `char`],
		[/* text */ 't', `, `],
		[/* inline code block */ 'i', `short`],
		[/* text */ 't', `, `],
		[/* inline code block */ 'i', `int`],
		[/* text */ 't', `, `],
		[/* inline code block */ 'i', `long`],
		[/* text */ 't', `, `],
		[/* inline code block */ 'i', `float`],
		[/* text */ 't', `, and `],
		[/* inline code block */ 'i', `double`],
		[/* text */ 't', `), and the
 keyword `],
		[/* inline code block */ 'i', `void`],
		[/* text */ 't', ` are also represented as `],
		[/* inline code block */ 'i', `Class`],
		[/* text */ 't', ` objects.

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `Class`],
			[/* text */ 't', ` has no public constructor. Instead a `],
			[/* inline code block */ 'i', `Class`],
			[/* text */ 't', `
 object is constructed automatically by the Java Virtual Machine when
 a class is derived from the bytes of a `],
			[/* inline code block */ 'i', `class`],
			[/* text */ 't', ` file through
 the invocation of one of the following methods:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* external link */ 'a', `ClassLoader.html#defineClass(java.lang.String,byte%5B%5D,int,int)`, `ClassLoader::defineClass`]
			]],
			[/* block */ 'b', [
				[/* external link */ 'a', `invoke/MethodHandles.Lookup.html#defineClass(byte%5B%5D)`, `java.lang.invoke.MethodHandles.Lookup::defineClass`]
			]],
			[/* block */ 'b', [
				[/* external link */ 'a', `invoke/MethodHandles.Lookup.html#defineHiddenClass(byte%5B%5D,boolean,java.lang.invoke.MethodHandles.Lookup.ClassOption...)`, `java.lang.invoke.MethodHandles.Lookup::defineHiddenClass`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` The methods of class `],
			[/* inline code block */ 'i', `Class`],
			[/* text */ 't', ` expose many characteristics of a
 class or interface. Most characteristics are derived from the `],
			[/* inline code block */ 'i', `class`],
			[/* text */ 't', `
 file that the class loader passed to the Java Virtual Machine or
 from the `],
			[/* inline code block */ 'i', `class`],
			[/* text */ 't', ` file passed to `],
			[/* inline code block */ 'i', `Lookup::defineClass`],
			[/* text */ 't', `
 or `],
			[/* inline code block */ 'i', `Lookup::defineHiddenClass`],
			[/* text */ 't', `.
 A few characteristics are determined by the class loading environment
 at run time, such as the module returned by `],
			[/* reference */ 'r', `getModule()`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The following example uses a `],
			[/* inline code block */ 'i', `Class`],
			[/* text */ 't', ` object to print the
 class name of an object:

 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', `     void printClassName(Object obj) {
         System.out.println("The class of " + obj +
                            " is " + obj.getClass().getName());
     }
 `]
		]],
		[/* text */ 't', `

 It is also possible to get the `],
		[/* inline code block */ 'i', `Class`],
		[/* text */ 't', ` object for a named
 class or interface (or for `],
		[/* inline code block */ 'i', `void`],
		[/* text */ 't', `) using a `],
		[/* text */ 't', `class literal`],
		[/* text */ 't', `.
 For example:

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `System.out.println("The name of class Foo is: "+Foo.class.getName());`]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` Some methods of class `],
			[/* inline code block */ 'i', `Class`],
			[/* text */ 't', ` expose whether the declaration of
 a class or interface in Java source code was `],
			[/* text */ 't', `enclosed`],
			[/* text */ 't', ` within
 another declaration. Other methods describe how a class or interface
 is situated in a `],
			[/* text */ 't', `nest`],
			[/* text */ 't', `. A `],
			[/* text */ 't', `nest`],
			[/* text */ 't', ` is a set of
 classes and interfaces, in the same run-time package, that
 allow mutual access to their `],
			[/* inline code block */ 'i', `private`],
			[/* text */ 't', ` members.
 The classes and interfaces are known as `],
			[/* text */ 't', `nestmates`],
			[/* text */ 't', `.
 One nestmate acts as the
 `],
			[/* text */ 't', `nest host`],
			[/* text */ 't', `, and enumerates the other nestmates which
 belong to the nest; each of them in turn records it as the nest host.
 The classes and interfaces which belong to a nest, including its host, are
 determined when
 `],
			[/* inline code block */ 'i', `class`],
			[/* text */ 't', ` files are generated, for example, a Java compiler
 will typically record a top-level class as the host of a nest where the
 other members are the classes and interfaces whose declarations are
 enclosed within the top-level class declaration.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A class or interface created by the invocation of
 `],
			[/* external link */ 'a', `invoke/MethodHandles.Lookup.html#defineHiddenClass(byte%5B%5D,boolean,java.lang.invoke.MethodHandles.Lookup.ClassOption...)`, `Lookup::defineHiddenClass`],
			[/* text */ 't', ` is a `],
			[/* reference */ 'r', `hidden`],
			[/* text */ 't', `
 class or interface.
 All kinds of class, including enum classes and record classes, may be
 hidden classes; all kinds of interface, including annotation interfaces,
 may be hidden interfaces.

 The `],
			[/* reference */ 'r', `name of a hidden class or interface`],
			[/* text */ 't', ` is
 not a `],
			[/* external link */ 'a', `ClassLoader.html#binary-name`, `binary name`],
			[/* text */ 't', `,
 which means the following:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', `A hidden class or interface cannot be referenced by the constant pools
     of other classes and interfaces.
 `],
			[/* block */ 'b', [
				[/* text */ 't', `A hidden class or interface cannot be described in
     `],
				[/* reference */ 'r', `java.lang.constant.ConstantDesc`],
				[/* text */ 't', ` by
     `],
				[/* reference */ 'r', `Class::describeConstable`],
				[/* text */ 't', `,
     `],
				[/* external link */ 'a', `constant/ClassDesc.html#of(java.lang.String)`, `ClassDesc::of`],
				[/* text */ 't', `, or
     `],
				[/* external link */ 'a', `constant/ClassDesc.html#ofDescriptor(java.lang.String)`, `ClassDesc::ofDescriptor`],
				[/* text */ 't', `.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `A hidden class or interface cannot be discovered by `],
				[/* reference */ 'r', `Class::forName`],
				[/* text */ 't', `
     or `],
				[/* external link */ 'a', `ClassLoader.html#loadClass(java.lang.String,boolean)`, `ClassLoader::loadClass`],
				[/* text */ 't', `.
 `]
			]]
		]],
		[/* text */ 't', `

 A hidden class or interface is never an array class, but may be
 the element type of an array. In all other respects, the fact that
 a class or interface is hidden has no bearing on the characteristics
 exposed by the methods of class `],
		[/* inline code block */ 'i', `Class`],
		[/* text */ 't', `.`],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Returns the  name of the entity (class, interface, array class,
 primitive type, or void) represented by this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents a class or interface,
 not an array class, then:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` If the class or interface is not `],
						[/* reference */ 'r', `hidden`],
						[/* text */ 't', `,
      then the `],
						[/* external link */ 'a', `ClassLoader.html#binary-name`, `binary name`],
						[/* text */ 't', `
      of the class or interface is returned.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` If the class or interface is hidden, then the result is a string
      of the form: `],
						[/* inline code block */ 'i', `N + '/' + <suffix>`],
						[/* text */ 't', `
      where `],
						[/* inline code block */ 'i', `N`],
						[/* text */ 't', ` is the `],
						[/* external link */ 'a', `ClassLoader.html#binary-name`, `binary name`],
						[/* text */ 't', `
      indicated by the `],
						[/* inline code block */ 'i', `class`],
						[/* text */ 't', ` file passed to
      `],
						[/* external link */ 'a', `invoke/MethodHandles.Lookup.html#defineHiddenClass(byte%5B%5D,boolean,java.lang.invoke.MethodHandles.Lookup.ClassOption...)`, `Lookup::defineHiddenClass`],
						[/* text */ 't', `, and `],
						[/* inline code block */ 'i', `<suffix>`],
						[/* text */ 't', ` is an unqualified name.
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents an array class, then
 the result is a string consisting of one or more '`],
					[/* inline code block */ 'i', `[`],
					[/* text */ 't', `' characters
 representing the depth of the array nesting, followed by the element
 type as encoded using the following table:

 `]
				]],
				[/* block */ 'b', [
					[/* table */ 't', '']
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents a primitive type or `],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', `,
 then the result is a string with the same spelling as the Java language
 keyword which corresponds to the primitive type or `],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` Examples:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` String.class.getName()
     returns "java.lang.String"
 byte.class.getName()
     returns "byte"
 (new Object[3]).getClass().getName()
     returns "[Ljava.lang.Object;"
 (new int[3][4][5][6][7][8][9]).getClass().getName()
     returns "[[[[[[[I"
 `]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of the class, interface, or other entity
          represented by this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object.`]
			]
		]],
		[/* method */ 'forName(java.lang.String,boolean,java.lang.ClassLoader)', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object associated with the class or
 interface with the given string name, using the given class loader.
 Given the fully qualified name for a class or interface (in the same
 format returned by `],
				[/* inline code block */ 'i', `getName`],
				[/* text */ 't', `) this method attempts to
 locate and load the class or interface.  The specified class
 loader is used to load the class or interface.  If the parameter
 `],
				[/* inline code block */ 'i', `loader`],
				[/* text */ 't', ` is null, the class is loaded through the bootstrap
 class loader.  The class is initialized only if the
 `],
				[/* inline code block */ 'i', `initialize`],
				[/* text */ 't', ` parameter is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` and if it has
 not been initialized earlier.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` denotes a primitive type or void, an attempt
 will be made to locate a user-defined class in the unnamed package whose
 name is `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', `. Therefore, this method cannot be used to
 obtain any of the `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` objects representing primitive
 types or void.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` denotes an array class, the component type of
 the array class is loaded but not initialized.

 `]
				]],
				[/* block */ 'b', ` For example, in an instance method the expression:

 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `Class.forName("Foo")`]
				]],
				[/* text */ 't', `

 is equivalent to:

 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `Class.forName("Foo", true, this.getClass().getClassLoader())`]
				]],
				[/* text */ 't', `

 Note that this method throws errors related to loading, linking
 or initializing as specified in Sections `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-12.html#jls-12.2`, `12.2`],
				[/* text */ 't', `, `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-12.html#jls-12.3`, `12.3`],
				[/* text */ 't', `, and `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-12.html#jls-12.4`, `12.4`],
				[/* text */ 't', ` of `],
				[/* text */ 't', `The Java Language
 Specification`],
				[/* text */ 't', `.
 Note that this method does not check whether the requested class
 is accessible to its caller.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `fully qualified name of the desired class`]
				]],
				[/* parameter */ 'initialize', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` the class will be initialized
                   (which implies linking). See Section `],
					[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-12.html#jls-12.4`, `12.4`],
					[/* text */ 't', ` of `],
					[/* text */ 't', `The Java Language
                   Specification`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'loader', [/* parameter description */
					[/* text */ 't', `class loader from which the class must be loaded`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.LinkageError', [/* throw description */
					[/* text */ 't', `if the linkage fails`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the initialization provoked
            by this method fails`]
				]],
				[/* throw */ 'java.lang.ClassNotFoundException', [/* throw description */
					[/* text */ 't', `if the class cannot be located by
            the specified class loader`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is present, and the `],
					[/* inline code block */ 'i', `loader`],
					[/* text */ 't', ` is
            `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, and the caller's class loader is not
            `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, and the caller does not have the
            `],
					[/* reference */ 'r', `java.lang.RuntimePermission`],
					[/* inline code block */ 'i', `("getClassLoader")`]
				]]
			],
			[/* return description */
				[/* text */ 't', `class object representing the desired class`]
			]
		]],
		[/* method */ 'forName(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object associated with the class or
 interface with the given string name.  Invoking this method is
 equivalent to:

 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `Class.forName(className, true, currentLoader)`]
				]],
				[/* text */ 't', `

 where `],
				[/* inline code block */ 'i', `currentLoader`],
				[/* text */ 't', ` denotes the defining class loader of
 the current class.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` For example, the following code fragment returns the
 runtime `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` descriptor for the class named
 `],
					[/* inline code block */ 'i', `java.lang.Thread`],
					[/* text */ 't', `:

 `]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `Class t = Class.forName("java.lang.Thread")`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 A call to `],
					[/* inline code block */ 'i', `forName("X")`],
					[/* text */ 't', ` causes the class named
 `],
					[/* inline code block */ 'i', `X`],
					[/* text */ 't', ` to be initialized.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'className', [/* parameter description */
					[/* text */ 't', `the fully qualified name of the desired class.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.LinkageError', [/* throw description */
					[/* text */ 't', `if the linkage fails`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the initialization provoked
            by this method fails`]
				]],
				[/* throw */ 'java.lang.ClassNotFoundException', [/* throw description */
					[/* text */ 't', `if the class cannot be located`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object for the class with the
             specified name.`]
			]
		]],
		[/* method */ 'forName(java.lang.Module,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` with the given `],
				[/* external link */ 'a', `ClassLoader.html#binary-name`, `binary name`],
				[/* text */ 't', ` in the given module.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method attempts to locate and load the class or interface.
 It does not link the class, and does not run the class initializer.
 If the class is not found, this method returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `. `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If the class loader of the given module defines other modules and
 the given name is a class defined in a different module, this method
 returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` after the class is loaded. `]
				]],
				[/* block */ 'b', ` This method does not check whether the requested class is
 accessible to its caller. `]
			],
			[/* parameters */
				[/* parameter */ 'module', [/* parameter description */
					[/* text */ 't', `A module`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The `],
					[/* external link */ 'a', `ClassLoader.html#binary-name`, `binary name`],
					[/* text */ 't', `
                  of the class`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given module or name is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.LinkageError', [/* throw description */
					[/* text */ 't', `if the linkage fails`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', ``],
					[/* list */ 'l', [
						[/* block */ 'b', [
							[/* text */ 't', ` if the caller is not the specified module and
         `],
							[/* inline code block */ 'i', `RuntimePermission("getClassLoader")`],
							[/* text */ 't', ` permission is denied; or`]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` access to the module content is denied. For example,
         permission check will be performed when a class loader calls
         `],
							[/* external link */ 'a', `module/ModuleReader.html#open(java.lang.String)`, `ModuleReader.open(String)`],
							[/* text */ 't', ` to read the bytes of a class file
         in a module.`]
						]]
					]]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object of the given name defined in the given module;
         `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if not found.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Converts the object to a string. The string representation is the
 string "class" or "interface", followed by a space, and then by the
 name of the class in the format returned by `],
				[/* inline code block */ 'i', `getName`],
				[/* text */ 't', `.
 If this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object represents a primitive type,
 this method returns the name of the primitive type.  If
 this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object represents void this method returns
 "void". If this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object represents an array type,
 this method returns "class " followed by `],
				[/* inline code block */ 'i', `getName`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object.`]
			]
		]],
		[/* method */ 'getModule()', [
			[/* method description */
				[/* text */ 't', `Returns the module that this class or interface is a member of.

 If this class represents an array type then this method returns the
 `],
				[/* inline code block */ 'i', `Module`],
				[/* text */ 't', ` for the element type. If this class represents a
 primitive type or void, then the `],
				[/* inline code block */ 'i', `Module`],
				[/* text */ 't', ` object for the
 `],
				[/* inline code block */ 'i', `java.base`],
				[/* text */ 't', ` module is returned.

 If this class is in an unnamed module then the `],
				[/* external link */ 'a', `ClassLoader.html#getUnnamedModule()`, `unnamed`],
				[/* inline code block */ 'i', `Module`],
				[/* text */ 't', ` of the class
 loader for this class is returned.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the module that this class or interface is a member of`]
			]
		]],
		[/* method */ 'getProtectionDomain()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `ProtectionDomain`],
				[/* text */ 't', ` of this class.  If there is a
 security manager installed, this method first calls the security
 manager's `],
				[/* inline code block */ 'i', `checkPermission`],
				[/* text */ 't', ` method with a
 `],
				[/* inline code block */ 'i', `RuntimePermission("getProtectionDomain")`],
				[/* text */ 't', ` permission to
 ensure it's ok to get the
 `],
				[/* inline code block */ 'i', `ProtectionDomain`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
        `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method doesn't allow
        getting the ProtectionDomain.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the ProtectionDomain of this class`]
			]
		]],
		[/* method */ 'isAssignableFrom(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Determines if the class or interface represented by this
 `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object is either the same as, or is a superclass or
 superinterface of, the class or interface represented by the specified
 `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` parameter. It returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if so;
 otherwise it returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `. If this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `
 object represents a primitive type, this method returns
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the specified `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` parameter is
 exactly this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object; otherwise it returns
 `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Specifically, this method tests whether the type represented by the
 specified `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` parameter can be converted to the type
 represented by this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object via an identity conversion
 or via a widening reference conversion. See `],
					[/* text */ 't', `The Java Language
 Specification`],
					[/* text */ 't', `, sections `],
					[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-5.html#jls-5.1.1`, `5.1.1`],
					[/* text */ 't', ` and `],
					[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-5.html#jls-5.1.4`, `5.1.4`],
					[/* text */ 't', `,
 for details.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'cls', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object to be checked`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified Class parameter is
            null.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` value indicating whether objects of the
            type `],
				[/* inline code block */ 'i', `cls`],
				[/* text */ 't', ` can be assigned to objects of this class`]
			]
		]],
		[/* method */ 'isInstance(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` is assignment-compatible
 with the object represented by this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `.  This method is
 the dynamic equivalent of the Java language `],
				[/* inline code block */ 'i', `instanceof`],
				[/* text */ 't', `
 operator. The method returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the specified
 `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` argument is non-null and can be cast to the
 reference type represented by this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object without
 raising a `],
				[/* inline code block */ 'i', `ClassCastException.`],
				[/* text */ 't', ` It returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `
 otherwise.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Specifically, if this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents a
 declared class, this method returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if the specified
 `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', ` argument is an instance of the represented class (or
 of any of its subclasses); it returns `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` otherwise. If
 this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents an array class, this method
 returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if the specified `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', ` argument
 can be converted to an object of the array class by an identity
 conversion or by a widening reference conversion; it returns
 `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` otherwise. If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object
 represents an interface, this method returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if the
 class or any superclass of the specified `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', ` argument
 implements this interface; it returns `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` otherwise. If
 this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents a primitive type, this method
 returns `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to check`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if `],
				[/* inline code block */ 'i', `obj`],
				[/* text */ 't', ` is an instance of this class`]
			]
		]],
		[/* method */ 'getModifiers()', [
			[/* method description */
				[/* text */ 't', `Returns the Java language modifiers for this class or interface, encoded
 in an integer. The modifiers consist of the Java Virtual Machine's
 constants for `],
				[/* inline code block */ 'i', `public`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `protected`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `private`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `final`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `static`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `abstract`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `interface`],
				[/* text */ 't', `; they should be decoded
 using the methods of class `],
				[/* inline code block */ 'i', `Modifier`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the underlying class is an array class, then its
 `],
					[/* inline code block */ 'i', `public`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `private`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `protected`],
					[/* text */ 't', `
 modifiers are the same as those of its component type.  If this
 `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents a primitive type or void, its
 `],
					[/* inline code block */ 'i', `public`],
					[/* text */ 't', ` modifier is always `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, and its
 `],
					[/* inline code block */ 'i', `protected`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `private`],
					[/* text */ 't', ` modifiers are always
 `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `. If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents an array class, a
 primitive type or void, then its `],
					[/* inline code block */ 'i', `final`],
					[/* text */ 't', ` modifier is always
 `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` and its interface modifier is always
 `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `. The values of its other modifiers are not determined
 by this specification.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The modifier encodings are defined in section `],
					[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.1`, `4.1`],
					[/* text */ 't', `
 of `],
					[/* text */ 't', `The Java Virtual Machine Specification`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` representing the modifiers for this class`]
			]
		]],
		[/* method */ 'isInterface()', [
			[/* method description */
				[/* text */ 't', `Determines if this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object represents an
 interface type.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object represents an interface;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isArray()', [
			[/* method description */
				[/* text */ 't', `Determines if this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object represents an array class.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object represents an array class;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isPrimitive()', [
			[/* method description */
				[/* text */ 't', `Determines if the specified `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object represents a
 primitive type.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` There are nine predefined `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` objects to represent
 the eight primitive types and void.  These are created by the Java
 Virtual Machine, and have the same names as the primitive types that
 they represent, namely `],
					[/* inline code block */ 'i', `boolean`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `byte`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', `, and `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` These objects may only be accessed via the following public static
 final variables, and are the only `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` objects for which
 this method returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if and only if this class represents a primitive type`]
			]
		]],
		[/* method */ 'isHidden()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the underlying class is a hidden class.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this class is a hidden class.`]
			]
		]],
		[/* method */ 'getSuperclass()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` representing the direct superclass of the
 entity (class, interface, primitive type or void) represented by
 this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `.  If this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` represents either the
 `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` class, an interface, a primitive type, or void, then
 null is returned.  If this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object represents an array class
 then the `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object representing the `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` class is
 returned.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the direct superclass of the class represented by this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object`]
			]
		]],
		[/* method */ 'cast(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Casts an object to the class or interface represented
 by this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to be cast`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the object is not
 null and is not assignable to the type T.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the object after casting, or null if obj is null`]
			]
		]],
		[/* method */ 'componentType()', [
			[/* method description */
				[/* text */ 't', `Returns the component type of this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `, if it describes
 an array type, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` otherwise.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` describing the component type, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
 if this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` does not describe an array type`]
			]
		]],
		[/* method */ 'describeConstable()', [
			[/* method description */
				[/* text */ 't', `Returns a nominal descriptor for this instance, if one can be
 constructed, or an empty `],
				[/* reference */ 'r', `java.util.Optional`],
				[/* text */ 't', ` if one cannot be.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `An `],
				[/* reference */ 'r', `java.util.Optional`],
				[/* text */ 't', ` containing the resulting nominal descriptor,
 or an empty `],
				[/* reference */ 'r', `java.util.Optional`],
				[/* text */ 't', ` if one cannot be constructed.`]
			]
		]],
		[/* method */ 'getComponentType()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` representing the component type of an
 array.  If this class does not represent an array class this method
 returns null.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` representing the component type of this
 class if this class is an array`]
			]
		]],
		[/* method */ 'isAnnotation()', [
			[/* method description */
				[/* text */ 't', `Returns true if this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object represents an annotation
 interface.  Note that if this method returns true, `],
				[/* reference */ 'r', `isInterface()`],
				[/* text */ 't', `
 would also return true, as all annotation interfaces are also interfaces.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object represents an annotation
      interface; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'isEnum()', [
			[/* method description */
				[/* text */ 't', `Returns true if and only if this class was declared as an enum in the
 source code.

 Note that `],
				[/* reference */ 'r', `java.lang.Enum`],
				[/* text */ 't', ` is not itself an enum class.

 Also note that if an enum constant is declared with a class body,
 the class of that enum constant object is an anonymous class
 and `],
				[/* text */ 't', `not`],
				[/* text */ 't', ` the class of the declaring enum class. The
 `],
				[/* external link */ 'a', `Enum.html#getDeclaringClass()`, `Enum.getDeclaringClass()`],
				[/* text */ 't', ` method of an enum constant can
 be used to get the class of the enum class declaring the
 constant.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if and only if this class was declared as an enum in the
     source code`]
			]
		]],
		[/* method */ 'isRecord()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this class is a record class.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `direct superclass`],
					[/* text */ 't', ` of a record
 class is `],
					[/* inline code block */ 'i', `java.lang.Record`],
					[/* text */ 't', `. A record class is `],
					[/* external link */ 'a', `reflect/Modifier.html#FINAL`, `final`],
					[/* text */ 't', `. A record class has (possibly zero) record
 components; `],
					[/* reference */ 'r', `getRecordComponents()`],
					[/* text */ 't', ` returns a non-null but
 possibly empty value for a record.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Note that class `],
					[/* reference */ 'r', `java.lang.Record`],
					[/* text */ 't', ` is not a record class and thus
 invoking this method on class `],
					[/* inline code block */ 'i', `Record`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if and only if this class is a record class, otherwise false`]
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
     the format specified in section `],
					[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.7.9`, `4.7.9`],
					[/* text */ 't', ` of
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
		[/* method */ 'getClassLoader()', [
			[/* method description */
				[/* text */ 't', `Returns the class loader for the class.  Some implementations may use
 null to represent the bootstrap class loader. This method will return
 null in such implementations if this class was loaded by the bootstrap
 class loader.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object
 represents a primitive type or void, null is returned.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is present, and the caller's class loader
          is not `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` and is not the same as or an ancestor of the
          class loader for the class whose class loader is requested,
          and the caller does not have the
          `],
					[/* reference */ 'r', `java.lang.RuntimePermission`],
					[/* inline code block */ 'i', `("getClassLoader")`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the class loader that loaded the class or interface
          represented by this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object.`]
			]
		]],
		[/* method */ 'newInstance()', [
			[/* method description */
				[/* text */ 't', `Creates a new instance of the class represented by this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `
 object.  The class is instantiated as if by a `],
				[/* inline code block */ 'i', `new`],
				[/* text */ 't', `
 expression with an empty argument list.  The class is initialized if it
 has not already been initialized.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalAccessException', [/* throw description */
					[/* text */ 't', `if the class or its nullary
          constructor is not accessible.`]
				]],
				[/* throw */ 'java.lang.InstantiationException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` represents an abstract class,
          an interface, an array class, a primitive type, or void;
          or if the class has no nullary constructor;
          or if the instantiation fails for some other reason.`]
				]],
				[/* throw */ 'java.lang.ExceptionInInitializerError', [/* throw description */
					[/* text */ 't', `if the initialization
          provoked by this method fails.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present and
          the caller's class loader is not the same as or an
          ancestor of the class loader for the current class and
          invocation of `],
					[/* external link */ 'a', `SecurityManager.html#checkPackageAccess(java.lang.String)`, `s.checkPackageAccess()`],
					[/* text */ 't', ` denies access to the package
          of this class.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a newly allocated instance of the class represented by this
          object.`]
			]
		]],
		[/* method */ 'getInterfaces()', [
			[/* method description */
				[/* text */ 't', `Returns the interfaces directly implemented by the class or interface
 represented by this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents a class, the return value is an array
 containing objects representing all interfaces directly implemented by
 the class.  The order of the interface objects in the array corresponds
 to the order of the interface names in the `],
					[/* inline code block */ 'i', `implements`],
					[/* text */ 't', ` clause of
 the declaration of the class represented by this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object.  For example,
 given the declaration:
 `]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `class Shimmer implements FloorWax, DessertTopping { ... }`]
				]],
				[/* text */ 't', `
 suppose the value of `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', ` is an instance of
 `],
				[/* inline code block */ 'i', `Shimmer`],
				[/* text */ 't', `; the value of the expression:
 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `s.getClass().getInterfaces()[0]`]
				]],
				[/* text */ 't', `
 is the `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object that represents interface
 `],
				[/* inline code block */ 'i', `FloorWax`],
				[/* text */ 't', `; and the value of:
 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `s.getClass().getInterfaces()[1]`]
				]],
				[/* text */ 't', `
 is the `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object that represents interface
 `],
				[/* inline code block */ 'i', `DessertTopping`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents an interface, the array contains objects
 representing all interfaces directly extended by the interface.  The
 order of the interface objects in the array corresponds to the order of
 the interface names in the `],
					[/* inline code block */ 'i', `extends`],
					[/* text */ 't', ` clause of the declaration of
 the interface represented by this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents a class or interface that implements no
 interfaces, the method returns an array of length 0.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents a primitive type or void, the method
 returns an array of length 0.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents an array type, the
 interfaces `],
					[/* inline code block */ 'i', `Cloneable`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `java.io.Serializable`],
					[/* text */ 't', ` are
 returned in that order.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array of interfaces directly implemented by this class`]
			]
		]],
		[/* method */ 'getEnclosingClass()', [
			[/* method description */
				[/* text */ 't', `Returns the immediately enclosing class of the underlying
 class.  If the underlying class is a top level class this
 method returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present and the caller's
             class loader is not the same as or an ancestor of the class
             loader for the enclosing class and invocation of `],
					[/* external link */ 'a', `SecurityManager.html#checkPackageAccess(java.lang.String)`, `s.checkPackageAccess()`],
					[/* text */ 't', `
             denies access to the package of the enclosing class`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the immediately enclosing class of the underlying class`]
			]
		]],
		[/* method */ 'getSimpleName()', [
			[/* method description */
				[/* text */ 't', `Returns the simple name of the underlying class as given in the
 source code. An empty string is returned if the underlying class is
 `],
				[/* reference */ 'r', `anonymous`],
				[/* text */ 't', `.
 A `],
				[/* reference */ 'r', `synthetic class`],
				[/* text */ 't', `, one not present
 in source code, can have a non-empty name including special
 characters, such as "`],
				[/* inline code block */ 'i', `$`],
				[/* text */ 't', `".

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The simple name of an `],
					[/* reference */ 'r', `array class`],
					[/* text */ 't', ` is the simple name of the
 component type with "[]" appended.  In particular the simple
 name of an array class whose component type is anonymous is "[]".`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the simple name of the underlying class`]
			]
		]],
		[/* method */ 'getCanonicalName()', [
			[/* method description */
				[/* text */ 't', `Returns the canonical name of the underlying class as
 defined by `],
				[/* text */ 't', `The Java Language Specification`],
				[/* text */ 't', `.
 Returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the underlying class does not have a canonical
 name. Classes without canonical names include:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `a `],
						[/* reference */ 'r', `local class`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `a `],
						[/* reference */ 'r', `anonymous class`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `a `],
						[/* reference */ 'r', `hidden class`]
					]],
					[/* block */ 'b', `an array whose component type does not have a canonical name`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the canonical name of the underlying class if it exists, and
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'getResourceAsStream(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Finds a resource with a given name.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this class is in a named `],
					[/* reference */ 'r', `java.lang.Module`],
					[/* text */ 't', ` then this method
 will attempt to find the resource in the module. This is done by
 delegating to the module's class loader `],
					[/* external link */ 'a', `ClassLoader.html#findResource(java.lang.String,java.lang.String)`, `findResource(String,String)`],
					[/* text */ 't', `
 method, invoking it with the module name and the absolute name of the
 resource. Resources in named modules are subject to the rules for
 encapsulation specified in the `],
					[/* inline code block */ 'i', `Module`],
					[/* external link */ 'a', `Module.html#getResourceAsStream(java.lang.String)`, `getResourceAsStream`],
					[/* text */ 't', ` method and so this
 method returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` when the resource is a
 non-"`],
					[/* inline code block */ 'i', `.class`],
					[/* text */ 't', `" resource in a package that is not open to the
 caller's module.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Otherwise, if this class is not in a named module then the rules for
 searching resources associated with a given class are implemented by the
 defining `],
					[/* reference */ 'r', `java.lang.ClassLoader`],
					[/* text */ 't', ` of the class.  This method
 delegates to this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object's class loader.
 If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object was loaded by the bootstrap class loader,
 the method delegates to `],
					[/* external link */ 'a', `ClassLoader.html#getSystemResourceAsStream(java.lang.String)`, `ClassLoader.getSystemResourceAsStream(java.lang.String)`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` Before delegation, an absolute resource name is constructed from the
 given resource name using this algorithm:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` If the `],
						[/* inline code block */ 'i', `name`],
						[/* text */ 't', ` begins with a `],
						[/* inline code block */ 'i', `'/'`],
						[/* text */ 't', `
 (`],
						[/* inline code block */ 'i', `'\\u002f'`],
						[/* text */ 't', `), then the absolute name of the resource is the
 portion of the `],
						[/* inline code block */ 'i', `name`],
						[/* text */ 't', ` following the `],
						[/* inline code block */ 'i', `'/'`],
						[/* text */ 't', `.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` Otherwise, the absolute name is of the following form:

 `],
						[/* block */ 'b', [
							[/* inline code block */ 'i', `modified_package_name/name`]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` Where the `],
							[/* inline code block */ 'i', `modified_package_name`],
							[/* text */ 't', ` is the package name of this
 object with `],
							[/* inline code block */ 'i', `'/'`],
							[/* text */ 't', ` substituted for `],
							[/* inline code block */ 'i', `'.'`],
							[/* text */ 't', `
 (`],
							[/* inline code block */ 'i', `'\\u002e'`],
							[/* text */ 't', `).

 `]
						]]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `name of the desired resource`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A `],
				[/* reference */ 'r', `java.io.InputStream`],
				[/* text */ 't', ` object; `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if no
          resource with this name is found, the resource is in a package
          that is not `],
				[/* external link */ 'a', `Module.html#isOpen(java.lang.String,java.lang.Module)`, `open`],
				[/* text */ 't', ` to at
          least the caller module, or access to the resource is denied
          by the security manager.`]
			]
		]],
		[/* method */ 'getResource(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Finds a resource with a given name.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this class is in a named `],
					[/* reference */ 'r', `java.lang.Module`],
					[/* text */ 't', ` then this method
 will attempt to find the resource in the module. This is done by
 delegating to the module's class loader `],
					[/* external link */ 'a', `ClassLoader.html#findResource(java.lang.String,java.lang.String)`, `findResource(String,String)`],
					[/* text */ 't', `
 method, invoking it with the module name and the absolute name of the
 resource. Resources in named modules are subject to the rules for
 encapsulation specified in the `],
					[/* inline code block */ 'i', `Module`],
					[/* external link */ 'a', `Module.html#getResourceAsStream(java.lang.String)`, `getResourceAsStream`],
					[/* text */ 't', ` method and so this
 method returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` when the resource is a
 non-"`],
					[/* inline code block */ 'i', `.class`],
					[/* text */ 't', `" resource in a package that is not open to the
 caller's module.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Otherwise, if this class is not in a named module then the rules for
 searching resources associated with a given class are implemented by the
 defining `],
					[/* reference */ 'r', `java.lang.ClassLoader`],
					[/* text */ 't', ` of the class.  This method
 delegates to this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object's class loader.
 If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object was loaded by the bootstrap class loader,
 the method delegates to `],
					[/* external link */ 'a', `ClassLoader.html#getSystemResource(java.lang.String)`, `ClassLoader.getSystemResource(java.lang.String)`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` Before delegation, an absolute resource name is constructed from the
 given resource name using this algorithm:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` If the `],
						[/* inline code block */ 'i', `name`],
						[/* text */ 't', ` begins with a `],
						[/* inline code block */ 'i', `'/'`],
						[/* text */ 't', `
 (`],
						[/* inline code block */ 'i', `'\\u002f'`],
						[/* text */ 't', `), then the absolute name of the resource is the
 portion of the `],
						[/* inline code block */ 'i', `name`],
						[/* text */ 't', ` following the `],
						[/* inline code block */ 'i', `'/'`],
						[/* text */ 't', `.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` Otherwise, the absolute name is of the following form:

 `],
						[/* block */ 'b', [
							[/* inline code block */ 'i', `modified_package_name/name`]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` Where the `],
							[/* inline code block */ 'i', `modified_package_name`],
							[/* text */ 't', ` is the package name of this
 object with `],
							[/* inline code block */ 'i', `'/'`],
							[/* text */ 't', ` substituted for `],
							[/* inline code block */ 'i', `'.'`],
							[/* text */ 't', `
 (`],
							[/* inline code block */ 'i', `'\\u002e'`],
							[/* text */ 't', `).

 `]
						]]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `name of the desired resource`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A `],
				[/* reference */ 'r', `java.net.URL`],
				[/* text */ 't', ` object; `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if no resource with
         this name is found, the resource cannot be located by a URL, the
         resource is in a package that is not
         `],
				[/* external link */ 'a', `Module.html#isOpen(java.lang.String,java.lang.Module)`, `open`],
				[/* text */ 't', ` to at least the caller
         module, or access to the resource is denied by the security
         manager.`]
			]
		]],
		[/* method */ 'getPackageName()', [
			[/* method description */
				[/* text */ 't', `Returns the fully qualified package name.

 `],
				[/* block */ 'b', ` If this class is a top level class, then this method returns the fully
 qualified name of the package that the class is a member of, or the
 empty string if the class is in an unnamed package.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this class is a member class, then this method is equivalent to
 invoking `],
					[/* inline code block */ 'i', `getPackageName()`],
					[/* text */ 't', ` on the `],
					[/* reference */ 'r', `enclosing class`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If this class is a `],
					[/* reference */ 'r', `local class`],
					[/* text */ 't', ` or an `],
					[/* reference */ 'r', `anonymous class`],
					[/* text */ 't', `, then this method is equivalent to
 invoking `],
					[/* inline code block */ 'i', `getPackageName()`],
					[/* text */ 't', ` on the `],
					[/* reference */ 'r', `declaring class`],
					[/* text */ 't', ` of the `],
					[/* reference */ 'r', `enclosing method`],
					[/* text */ 't', ` or
 `],
					[/* reference */ 'r', `enclosing constructor`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If this class represents an array type then this method returns the
 package name of the element type. If this class represents a primitive
 type or void then the package name "`],
					[/* inline code block */ 'i', `java.lang`],
					[/* text */ 't', `" is returned.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the fully qualified package name`]
			]
		]],
		[/* method */ 'desiredAssertionStatus()', [
			[/* method description */
				[/* text */ 't', `Returns the assertion status that would be assigned to this
 class if it were to be initialized at the time this method is invoked.
 If this class has had its assertion status set, the most recent
 setting will be returned; otherwise, if any package default assertion
 status pertains to this class, the most recent setting for the most
 specific pertinent package default assertion status is returned;
 otherwise, if this class is not a system class (i.e., it has a
 class loader) its class loader's default assertion status is returned;
 otherwise, the system class default assertion status is returned.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the desired assertion status of the specified class.`]
			]
		]],
		[/* method */ 'getMethod(java.lang.String,java.lang.Class...)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', ` object that reflects the specified public
 member method of the class or interface represented by this
 `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object. The `],
				[/* inline code block */ 'i', `name`],
				[/* text */ 't', ` parameter is a
 `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` specifying the simple name of the desired method. The
 `],
				[/* inline code block */ 'i', `parameterTypes`],
				[/* text */ 't', ` parameter is an array of `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `
 objects that identify the method's formal parameter types, in declared
 order. If `],
				[/* inline code block */ 'i', `parameterTypes`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `, it is
 treated as if it were an empty array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents an array type, then this
 method finds any public method inherited by the array type from
 `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', ` except method `],
					[/* inline code block */ 'i', `clone()`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents an interface then this
 method does not find any implicitly declared method from
 `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', `. Therefore, if no methods are explicitly declared in
 this interface or any of its superinterfaces, then this method does not
 find any method.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method does not find any method with name "`],
					[/* inline code block */ 'i', `<init>`],
					[/* text */ 't', `" or
 "`],
					[/* inline code block */ 'i', `<clinit>`],
					[/* text */ 't', `".

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Generally, the method to be reflected is determined by the 4 step
 algorithm that follows.
 Let C be the class or interface represented by this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` A union of methods is composed of:
   `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* text */ 't', ` C's declared public instance and static methods as returned by
        `],
								[/* reference */ 'r', `getDeclaredMethods()`],
								[/* text */ 't', ` and filtered to include only public
        methods that match given `],
								[/* inline code block */ 'i', `name`],
								[/* text */ 't', ` and `],
								[/* inline code block */ 'i', `parameterTypes`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` If C is a class other than `],
								[/* inline code block */ 'i', `Object`],
								[/* text */ 't', `, then include the result
        of invoking this algorithm recursively on the superclass of C.`]
							]],
							[/* block */ 'b', ` Include the results of invoking this algorithm recursively on all
        direct superinterfaces of C, but include only instance methods.`]
						]]
					]],
					[/* block */ 'b', ` This union is partitioned into subsets of methods with same
      return type (the selection of methods from step 1 also guarantees that
      they have the same method name and parameter types).`],
					[/* block */ 'b', [
						[/* text */ 't', ` Within each such subset only the most specific methods are selected.
      Let method M be a method from a set of methods with same VM
      signature (return type, name, parameter types).
      M is most specific if there is no such method N != M from the same
      set, such that N is more specific than M. N is more specific than M
      if:
   `],
						[/* list */ 'l', [
							[/* block */ 'b', ` N is declared by a class and M is declared by an interface; or`],
							[/* block */ 'b', ` N and M are both declared by classes or both by interfaces and
        N's declaring type is the same as or a subtype of M's declaring type
        (clearly, if M's and N's declaring types are the same type, then
        M and N are the same method).`]
						]]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` The result of this algorithm is chosen arbitrarily from the methods
      with most specific return type among all selected methods from step 3.
      Let R be a return type of a method M from the set of all selected methods
      from step 3. M is a method with most specific return type if there is
      no such method N != M from the same set, having return type S != R,
      such that S is a subtype of R as determined by
      R.class.`],
						[/* reference */ 'r', `isAssignableFrom(java.lang.Class<?>)`],
						[/* text */ 't', `(S.class).
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the method`]
				]],
				[/* parameter */ 'parameterTypes', [/* parameter description */
					[/* text */ 't', `the list of parameters`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NoSuchMethodException', [/* throw description */
					[/* text */ 't', `if a matching method is not found
         or if the name is "&lt;init&gt;"or "&lt;clinit&gt;".`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present and
         the caller's class loader is not the same as or an
         ancestor of the class loader for the current class and
         invocation of `],
					[/* external link */ 'a', `SecurityManager.html#checkPackageAccess(java.lang.String)`, `s.checkPackageAccess()`],
					[/* text */ 't', ` denies access to the package
         of this class.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', ` object that matches the specified
         `],
				[/* inline code block */ 'i', `name`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `parameterTypes`]
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
		[/* method */ 'getNestHost()', [
			[/* method description */
				[/* text */ 't', `Returns the nest host of the `],
				[/* text */ 't', `nest`],
				[/* text */ 't', ` to which the class
 or interface represented by this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object belongs.
 Every class and interface belongs to exactly one nest.

 If the nest host of this class or interface has previously
 been determined, then this method returns the nest host.
 If the nest host of this class or interface has
 not previously been determined, then this method determines the nest
 host using the algorithm of JVMS 5.4.4, and returns it.

 Often, a class or interface belongs to a nest consisting only of itself,
 in which case this method returns `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` to indicate that the class
 or interface is the nest host.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents a primitive type, an array type,
 or `],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', `, then this method returns `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', `,
 indicating that the represented entity belongs to the nest consisting only of
 itself, and is the nest host.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If the returned class is not the current class, and
         if a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present and the caller's
         class loader is not the same as or an ancestor of the class
         loader for the returned class and invocation of `],
					[/* external link */ 'a', `SecurityManager.html#checkPackageAccess(java.lang.String)`, `s.checkPackageAccess()`],
					[/* text */ 't', `
         denies access to the package of the returned class`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the nest host of this class or interface`]
			]
		]],
		[/* method */ 'descriptorString()', [
			[/* method description */
				[/* text */ 't', `Returns the descriptor string of the entity (class, interface, array class,
 primitive type, or `],
				[/* inline code block */ 'i', `void`],
				[/* text */ 't', `) represented by this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents a class or interface,
 not an array class, then:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` If the class or interface is not `],
						[/* reference */ 'r', `hidden`],
						[/* text */ 't', `,
      then the result is a field descriptor (JVMS `],
						[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.3.2`, `4.3.2`],
						[/* text */ 't', `)
      for the class or interface. Calling
      `],
						[/* external link */ 'a', `constant/ClassDesc.html#ofDescriptor(java.lang.String)`, `ClassDesc::ofDescriptor`],
						[/* text */ 't', `
      with the result descriptor string produces a `],
						[/* reference */ 'r', `java.lang.constant.ClassDesc`],
						[/* text */ 't', `
      describing this class or interface.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` If the class or interface is `],
						[/* reference */ 'r', `hidden`],
						[/* text */ 't', `,
      then the result is a string of the form:
      `],
						[/* block */ 'b', [
							[/* inline code block */ 'i', `"L" +`],
							[/* text */ 't', `N`],
							[/* inline code block */ 'i', `+ "." + <suffix> + ";"`]
						]],
						[/* text */ 't', `
      where `],
						[/* text */ 't', `N`],
						[/* text */ 't', ` is the `],
						[/* external link */ 'a', `ClassLoader.html#binary-name`, `binary name`],
						[/* text */ 't', `
      encoded in internal form indicated by the `],
						[/* inline code block */ 'i', `class`],
						[/* text */ 't', ` file passed to
      `],
						[/* external link */ 'a', `invoke/MethodHandles.Lookup.html#defineHiddenClass(byte%5B%5D,boolean,java.lang.invoke.MethodHandles.Lookup.ClassOption...)`, `Lookup::defineHiddenClass`],
						[/* text */ 't', `, and `],
						[/* inline code block */ 'i', `<suffix>`],
						[/* text */ 't', ` is an unqualified name.
      A hidden class or interface has no `],
						[/* reference */ 'r', `java.lang.constant.ClassDesc`],
						[/* text */ 't', `.
      The result string is not a type descriptor.
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents an array class, then
 the result is a string consisting of one or more '`],
					[/* inline code block */ 'i', `[`],
					[/* text */ 't', `' characters
 representing the depth of the array nesting, followed by the
 descriptor string of the element type.
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` If the element type is not a `],
						[/* reference */ 'r', `hidden`],
						[/* text */ 't', ` class
 or interface, then this array class can be described nominally.
 Calling `],
						[/* external link */ 'a', `constant/ClassDesc.html#ofDescriptor(java.lang.String)`, `ClassDesc::ofDescriptor`],
						[/* text */ 't', `
 with the result descriptor string produces a `],
						[/* reference */ 'r', `java.lang.constant.ClassDesc`],
						[/* text */ 't', `
 describing this array class.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` If the element type is a `],
						[/* reference */ 'r', `hidden`],
						[/* text */ 't', ` class or
 interface, then this array class cannot be described nominally.
 The result string is not a type descriptor.
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents a primitive type or
 `],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', `, then the result is a field descriptor string which
 is a one-letter code corresponding to a primitive type or `],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', `
 (`],
					[/* inline code block */ 'i', `"B", "C", "D", "F", "I", "J", "S", "Z", "V"`],
					[/* text */ 't', `) (JVMS `],
					[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.3.2`, `4.3.2`],
					[/* text */ 't', `).`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the descriptor string for this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object`]
			]
		]],
		[/* method */ 'getPermittedSubclasses()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` objects representing the
 direct subinterfaces or subclasses permitted to extend or
 implement this class or interface if it is sealed.  The order of such elements
 is unspecified. The array is empty if this sealed class or interface has no
 permitted subclass. If this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object represents a primitive type,
 `],
				[/* inline code block */ 'i', `void`],
				[/* text */ 't', `, an array type, or a class or interface that is not sealed,
 that is `],
				[/* reference */ 'r', `isSealed()`],
				[/* text */ 't', ` returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `, then this method returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.
 Conversely, if `],
				[/* reference */ 'r', `isSealed()`],
				[/* text */ 't', ` returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `, then this method
 returns a non-null value.

 For each class or interface `],
				[/* inline code block */ 'i', `C`],
				[/* text */ 't', ` which is recorded as a permitted
 direct subinterface or subclass of this class or interface,
 this method attempts to obtain the `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `
 object for `],
				[/* inline code block */ 'i', `C`],
				[/* text */ 't', ` (using `],
				[/* reference */ 'r', `the defining class loader`],
				[/* text */ 't', ` of the current `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object).
 The `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` objects which can be obtained and which are direct
 subinterfaces or subclasses of this class or interface,
 are indicated by elements of the returned array. If a `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object
 cannot be obtained, it is silently ignored, and not included in the result
 array.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present and the caller's
         class loader is not the same as or an ancestor of the class
         loader for that returned class and invocation of `],
					[/* external link */ 'a', `SecurityManager.html#checkPackageAccess(java.lang.String)`, `s.checkPackageAccess()`],
					[/* text */ 't', `
         denies access to the package of any class in the returned array.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an array of `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` objects of the permitted subclasses of this class or interface,
         or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this class or interface is not sealed.`]
			]
		]],
		[/* method */ 'arrayType()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` for an array type whose component type
 is described by this `],
				[/* reference */ 'r', `java.lang.Class`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` describing the array type`]
			]
		]],
		[/* method */ 'toGenericString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `, including
 information about modifiers and type parameters.

 The string is formatted as a list of type modifiers, if any,
 followed by the kind of type (empty string for primitive types
 and `],
				[/* inline code block */ 'i', `class`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `enum`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `interface`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `@interface`],
				[/* text */ 't', `, or `],
				[/* inline code block */ 'i', `record`],
				[/* text */ 't', ` as appropriate), followed
 by the type's name, followed by an angle-bracketed
 comma-separated list of the type's type parameters, if any,
 including informative bounds on the type parameters, if any.

 A space is used to separate modifiers from one another and to
 separate any modifiers from the kind of type. The modifiers
 occur in canonical order. If there are no type parameters, the
 type parameter list is elided.

 For an array type, the string starts with the type name,
 followed by an angle-bracketed comma-separated list of the
 type's type parameters, if any, followed by a sequence of
 `],
				[/* inline code block */ 'i', `[]`],
				[/* text */ 't', ` characters, one set of brackets per dimension of
 the array.

 `],
				[/* block */ 'b', `Note that since information about the runtime representation
 of a type is being generated, modifiers not present on the
 originating source code or illegal on the originating source
 code may be present.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string describing this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `, including
 information about modifiers and type parameters`]
			]
		]],
		[/* method */ 'isSynthetic()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this class has the synthetic modifier
 bit set.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this class has the synthetic modifier
 bit set`]
			]
		]],
		[/* method */ 'getGenericSuperclass()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', ` representing the direct superclass of
 the entity (class, interface, primitive type or void) represented by
 this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the superclass is a parameterized type, the `],
					[/* inline code block */ 'i', `Type`],
					[/* text */ 't', `
 object returned must accurately reflect the actual type
 arguments used in the source code. The parameterized type
 representing the superclass is created if it had not been
 created before. See the declaration of `],
					[/* reference */ 'r', `java.lang.reflect.ParameterizedType`],
					[/* text */ 't', ` for the
 semantics of the creation process for parameterized types.  If
 this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents either the `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', `
 class, an interface, a primitive type, or void, then null is
 returned.  If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents an array class
 then the `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object representing the `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', ` class is
 returned.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.reflect.GenericSignatureFormatError', [/* throw description */
					[/* text */ 't', `if the generic
     class signature does not conform to the format specified in
     section `],
					[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.7.9`, `4.7.9`],
					[/* text */ 't', ` of `],
					[/* text */ 't', `The Java Virtual
     Machine Specification`]
				]],
				[/* throw */ 'java.lang.TypeNotPresentException', [/* throw description */
					[/* text */ 't', `if the generic superclass
     refers to a non-existent type declaration`]
				]],
				[/* throw */ 'java.lang.reflect.MalformedParameterizedTypeException', [/* throw description */
					[/* text */ 't', `if the
     generic superclass refers to a parameterized type that cannot be
     instantiated  for any reason`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the direct superclass of the class represented by this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object`]
			]
		]],
		[/* method */ 'getPackage()', [
			[/* method description */
				[/* text */ 't', `Gets the package of this class.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If this class represents an array type, a primitive type or void,
 this method returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the package of this class.`]
			]
		]],
		[/* method */ 'getGenericInterfaces()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', `s representing the interfaces
 directly implemented by the class or interface represented by
 this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If a superinterface is a parameterized type, the
 `],
					[/* inline code block */ 'i', `Type`],
					[/* text */ 't', ` object returned for it must accurately reflect
 the actual type arguments used in the source code. The
 parameterized type representing each superinterface is created
 if it had not been created before. See the declaration of
 `],
					[/* reference */ 'r', `java.lang.reflect.ParameterizedType`],
					[/* text */ 't', `
 for the semantics of the creation process for parameterized
 types.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents a class, the return value is an array
 containing objects representing all interfaces directly implemented by
 the class.  The order of the interface objects in the array corresponds
 to the order of the interface names in the `],
					[/* inline code block */ 'i', `implements`],
					[/* text */ 't', ` clause of
 the declaration of the class represented by this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents an interface, the array contains objects
 representing all interfaces directly extended by the interface.  The
 order of the interface objects in the array corresponds to the order of
 the interface names in the `],
					[/* inline code block */ 'i', `extends`],
					[/* text */ 't', ` clause of the declaration of
 the interface represented by this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents a class or interface that implements no
 interfaces, the method returns an array of length 0.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents a primitive type or void, the method
 returns an array of length 0.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents an array type, the
 interfaces `],
					[/* inline code block */ 'i', `Cloneable`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `java.io.Serializable`],
					[/* text */ 't', ` are
 returned in that order.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.reflect.GenericSignatureFormatError', [/* throw description */
					[/* text */ 't', `if the generic class signature does not conform to the
     format specified in section `],
					[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.7.9`, `4.7.9`],
					[/* text */ 't', ` of `],
					[/* text */ 't', `The
     Java Virtual Machine Specification`]
				]],
				[/* throw */ 'java.lang.TypeNotPresentException', [/* throw description */
					[/* text */ 't', `if any of the generic
     superinterfaces refers to a non-existent type declaration`]
				]],
				[/* throw */ 'java.lang.reflect.MalformedParameterizedTypeException', [/* throw description */
					[/* text */ 't', `if any of the generic superinterfaces refer to a parameterized
     type that cannot be instantiated for any reason`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an array of interfaces directly implemented by this class`]
			]
		]],
		[/* method */ 'getSigners()', [
			[/* method description */
				[/* text */ 't', `Gets the signers of this class.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the signers of this class, or null if there are no signers.  In
          particular, this method returns null if this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object represents
          a primitive type or void.`]
			]
		]],
		[/* method */ 'getEnclosingMethod()', [
			[/* method description */
				[/* text */ 't', `If this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object represents a local or anonymous
 class within a method, returns a `],
				[/* reference */ 'r', `java.lang.reflect.Method`],
				[/* text */ 't', ` object representing the
 immediately enclosing method of the underlying class. Returns
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` otherwise.

 In particular, this method returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the underlying
 class is a local or anonymous class immediately enclosed by a class or
 interface declaration, instance initializer or static initializer.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present and any of the
         following conditions is met:

         `],
					[/* list */ 'l', [
						[/* block */ 'b', [
							[/* text */ 't', ` the caller's class loader is not the same as the
         class loader of the enclosing class and invocation of
         `],
							[/* external link */ 'a', `SecurityManager.html#checkPermission(java.security.Permission)`, `s.checkPermission`],
							[/* text */ 't', ` method with
         `],
							[/* inline code block */ 'i', `RuntimePermission("accessDeclaredMembers")`],
							[/* text */ 't', `
         denies access to the methods within the enclosing class

         `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` the caller's class loader is not the same as or an
         ancestor of the class loader for the enclosing class and
         invocation of `],
							[/* external link */ 'a', `SecurityManager.html#checkPackageAccess(java.lang.String)`, `s.checkPackageAccess()`],
							[/* text */ 't', ` denies access to the package
         of the enclosing class

         `]
						]]
					]]
				]]
			],
			[/* return description */
				[/* text */ 't', `the immediately enclosing method of the underlying class, if
     that class is a local or anonymous class; otherwise `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getEnclosingConstructor()', [
			[/* method description */
				[/* text */ 't', `If this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object represents a local or anonymous
 class within a constructor, returns a `],
				[/* reference */ 'r', `java.lang.reflect.Constructor`],
				[/* text */ 't', ` object representing
 the immediately enclosing constructor of the underlying
 class. Returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` otherwise.  In particular, this
 method returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the underlying class is a local
 or anonymous class immediately enclosed by a class or
 interface declaration, instance initializer or static initializer.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present and any of the
         following conditions is met:

         `],
					[/* list */ 'l', [
						[/* block */ 'b', [
							[/* text */ 't', ` the caller's class loader is not the same as the
         class loader of the enclosing class and invocation of
         `],
							[/* external link */ 'a', `SecurityManager.html#checkPermission(java.security.Permission)`, `s.checkPermission`],
							[/* text */ 't', ` method with
         `],
							[/* inline code block */ 'i', `RuntimePermission("accessDeclaredMembers")`],
							[/* text */ 't', `
         denies access to the constructors within the enclosing class

         `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` the caller's class loader is not the same as or an
         ancestor of the class loader for the enclosing class and
         invocation of `],
							[/* external link */ 'a', `SecurityManager.html#checkPackageAccess(java.lang.String)`, `s.checkPackageAccess()`],
							[/* text */ 't', ` denies access to the package
         of the enclosing class

         `]
						]]
					]]
				]]
			],
			[/* return description */
				[/* text */ 't', `the immediately enclosing constructor of the underlying class, if
     that class is a local or anonymous class; otherwise `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getDeclaringClass()', [
			[/* method description */
				[/* text */ 't', `If the class or interface represented by this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object
 is a member of another class, returns the `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object
 representing the class in which it was declared.  This method returns
 null if this class or interface is not a member of any other class.  If
 this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object represents an array class, a primitive
 type, or void,then this method returns null.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present and the caller's
         class loader is not the same as or an ancestor of the class
         loader for the declaring class and invocation of `],
					[/* external link */ 'a', `SecurityManager.html#checkPackageAccess(java.lang.String)`, `s.checkPackageAccess()`],
					[/* text */ 't', `
         denies access to the package of the declaring class`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the declaring class for this class`]
			]
		]],
		[/* method */ 'getTypeName()', [
			[/* method description */
				[/* text */ 't', `Return an informative string for the name of this class or interface.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an informative string for the name of this class or interface`]
			]
		]],
		[/* method */ 'isAnonymousClass()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the underlying class
 is an anonymous class.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this class is an anonymous class.`]
			]
		]],
		[/* method */ 'isLocalClass()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the underlying class
 is a local class.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this class is a local class.`]
			]
		]],
		[/* method */ 'isMemberClass()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the underlying class
 is a member class.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this class is a member class.`]
			]
		]],
		[/* method */ 'getClasses()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` objects representing all
 the public classes and interfaces that are members of the class
 represented by this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object.  This includes public
 class and interface members inherited from superclasses and public class
 and interface members declared by the class.  This method returns an
 array of length 0 if this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object has no public member
 classes or interfaces.  This method also returns an array of length 0 if
 this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object represents a primitive type, an array
 class, or void.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present and
         the caller's class loader is not the same as or an
         ancestor of the class loader for the current class and
         invocation of `],
					[/* external link */ 'a', `SecurityManager.html#checkPackageAccess(java.lang.String)`, `s.checkPackageAccess()`],
					[/* text */ 't', ` denies access to the package
         of this class.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the array of `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` objects representing the public
         members of this class`]
			]
		]],
		[/* method */ 'getFields()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', ` objects reflecting all
 the accessible public fields of the class or interface represented by
 this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents a class or interface with
 no accessible public fields, then this method returns an array of length
 0.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents a class, then this method
 returns the public fields of the class and of all its superclasses and
 superinterfaces.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents an interface, then this
 method returns the fields of the interface and of all its
 superinterfaces.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents an array type, a primitive
 type, or void, then this method returns an array of length 0.

 `]
				]],
				[/* block */ 'b', ` The elements in the returned array are not sorted and are not in any
 particular order.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present and
         the caller's class loader is not the same as or an
         ancestor of the class loader for the current class and
         invocation of `],
					[/* external link */ 'a', `SecurityManager.html#checkPackageAccess(java.lang.String)`, `s.checkPackageAccess()`],
					[/* text */ 't', ` denies access to the package
         of this class.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the array of `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', ` objects representing the
         public fields`]
			]
		]],
		[/* method */ 'getMethods()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', ` objects reflecting all the
 public methods of the class or interface represented by this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object, including those declared by the class or interface and
 those inherited from superclasses and superinterfaces.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents an array type, then the
 returned array has a `],
					[/* inline code block */ 'i', `Method`],
					[/* text */ 't', ` object for each of the public
 methods inherited by the array type from `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', `. It does not
 contain a `],
					[/* inline code block */ 'i', `Method`],
					[/* text */ 't', ` object for `],
					[/* inline code block */ 'i', `clone()`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents an interface then the
 returned array does not contain any implicitly declared methods from
 `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', `. Therefore, if no methods are explicitly declared in
 this interface or any of its superinterfaces then the returned array
 has length 0. (Note that a `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object which represents a class
 always has public methods, inherited from `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', `.)

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The returned array never contains methods with names "`],
					[/* inline code block */ 'i', `<init>`],
					[/* text */ 't', `"
 or "`],
					[/* inline code block */ 'i', `<clinit>`],
					[/* text */ 't', `".

 `]
				]],
				[/* block */ 'b', ` The elements in the returned array are not sorted and are not in any
 particular order.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Generally, the result is computed as with the following 4 step algorithm.
 Let C be the class or interface represented by this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` A union of methods is composed of:
   `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* text */ 't', ` C's declared public instance and static methods as returned by
        `],
								[/* reference */ 'r', `getDeclaredMethods()`],
								[/* text */ 't', ` and filtered to include only public
        methods.`]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` If C is a class other than `],
								[/* inline code block */ 'i', `Object`],
								[/* text */ 't', `, then include the result
        of invoking this algorithm recursively on the superclass of C.`]
							]],
							[/* block */ 'b', ` Include the results of invoking this algorithm recursively on all
        direct superinterfaces of C, but include only instance methods.`]
						]]
					]],
					[/* block */ 'b', ` Union from step 1 is partitioned into subsets of methods with same
      signature (name, parameter types) and return type.`],
					[/* block */ 'b', [
						[/* text */ 't', ` Within each such subset only the most specific methods are selected.
      Let method M be a method from a set of methods with same signature
      and return type. M is most specific if there is no such method
      N != M from the same set, such that N is more specific than M.
      N is more specific than M if:
   `],
						[/* list */ 'l', [
							[/* block */ 'b', ` N is declared by a class and M is declared by an interface; or`],
							[/* block */ 'b', ` N and M are both declared by classes or both by interfaces and
        N's declaring type is the same as or a subtype of M's declaring type
        (clearly, if M's and N's declaring types are the same type, then
        M and N are the same method).`]
						]]
					]],
					[/* block */ 'b', ` The result of this algorithm is the union of all selected methods from
      step 3.`]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present and
         the caller's class loader is not the same as or an
         ancestor of the class loader for the current class and
         invocation of `],
					[/* external link */ 'a', `SecurityManager.html#checkPackageAccess(java.lang.String)`, `s.checkPackageAccess()`],
					[/* text */ 't', ` denies access to the package
         of this class.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the array of `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', ` objects representing the
         public methods of this class`]
			]
		]],
		[/* method */ 'getConstructors()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing `],
				[/* inline code block */ 'i', `Constructor`],
				[/* text */ 't', ` objects reflecting
 all the public constructors of the class represented by this
 `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object.  An array of length 0 is returned if the
 class has no public constructors, or if the class is an array class, or
 if the class reflects a primitive type or void.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present and
         the caller's class loader is not the same as or an
         ancestor of the class loader for the current class and
         invocation of `],
					[/* external link */ 'a', `SecurityManager.html#checkPackageAccess(java.lang.String)`, `s.checkPackageAccess()`],
					[/* text */ 't', ` denies access to the package
         of this class.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the array of `],
				[/* inline code block */ 'i', `Constructor`],
				[/* text */ 't', ` objects representing the
         public constructors of this class`]
			]
		]],
		[/* method */ 'getField(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', ` object that reflects the specified public member
 field of the class or interface represented by this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `
 object. The `],
				[/* inline code block */ 'i', `name`],
				[/* text */ 't', ` parameter is a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` specifying the
 simple name of the desired field.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The field to be reflected is determined by the algorithm that
 follows.  Let C be the class or interface represented by this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object:

 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', ` If C declares a public field with the name specified, that is the
      field to be reflected.`],
					[/* block */ 'b', ` If no field was found in step 1 above, this algorithm is applied
      recursively to each direct superinterface of C. The direct
      superinterfaces are searched in the order they were declared.`],
					[/* block */ 'b', [
						[/* text */ 't', ` If no field was found in steps 1 and 2 above, and C has a
      superclass S, then this algorithm is invoked recursively upon S.
      If C has no superclass, then a `],
						[/* inline code block */ 'i', `NoSuchFieldException`],
						[/* text */ 't', `
      is thrown.`]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents an array type, then this
 method does not find the `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` field of the array type.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the field name`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NoSuchFieldException', [/* throw description */
					[/* text */ 't', `if a field with the specified name is
         not found.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present and
         the caller's class loader is not the same as or an
         ancestor of the class loader for the current class and
         invocation of `],
					[/* external link */ 'a', `SecurityManager.html#checkPackageAccess(java.lang.String)`, `s.checkPackageAccess()`],
					[/* text */ 't', ` denies access to the package
         of this class.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', ` object of this class specified by
         `],
				[/* inline code block */ 'i', `name`]
			]
		]],
		[/* method */ 'getConstructor(java.lang.Class...)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Constructor`],
				[/* text */ 't', ` object that reflects the specified
 public constructor of the class represented by this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `
 object. The `],
				[/* inline code block */ 'i', `parameterTypes`],
				[/* text */ 't', ` parameter is an array of
 `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` objects that identify the constructor's formal
 parameter types, in declared order.

 If this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object represents an inner class
 declared in a non-static context, the formal parameter types
 include the explicit enclosing instance as the first parameter.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The constructor to reflect is the public constructor of the class
 represented by this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object whose formal parameter
 types match those specified by `],
					[/* inline code block */ 'i', `parameterTypes`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'parameterTypes', [/* parameter description */
					[/* text */ 't', `the parameter array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NoSuchMethodException', [/* throw description */
					[/* text */ 't', `if a matching method is not found.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present and
         the caller's class loader is not the same as or an
         ancestor of the class loader for the current class and
         invocation of `],
					[/* external link */ 'a', `SecurityManager.html#checkPackageAccess(java.lang.String)`, `s.checkPackageAccess()`],
					[/* text */ 't', ` denies access to the package
         of this class.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Constructor`],
				[/* text */ 't', ` object of the public constructor that
         matches the specified `],
				[/* inline code block */ 'i', `parameterTypes`]
			]
		]],
		[/* method */ 'getDeclaredClasses()', [
			[/* method description */
				[/* text */ 't', `Returns an array of `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` objects reflecting all the
 classes and interfaces declared as members of the class represented by
 this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object. This includes public, protected, default
 (package) access, and private classes and interfaces declared by the
 class, but excludes inherited classes and interfaces.  This method
 returns an array of length 0 if the class declares no classes or
 interfaces as members, or if this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object represents a
 primitive type, an array class, or void.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present and any of the
         following conditions is met:

         `],
					[/* list */ 'l', [
						[/* block */ 'b', [
							[/* text */ 't', ` the caller's class loader is not the same as the
         class loader of this class and invocation of
         `],
							[/* external link */ 'a', `SecurityManager.html#checkPermission(java.security.Permission)`, `s.checkPermission`],
							[/* text */ 't', ` method with
         `],
							[/* inline code block */ 'i', `RuntimePermission("accessDeclaredMembers")`],
							[/* text */ 't', `
         denies access to the declared classes within this class

         `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` the caller's class loader is not the same as or an
         ancestor of the class loader for the current class and
         invocation of `],
							[/* external link */ 'a', `SecurityManager.html#checkPackageAccess(java.lang.String)`, `s.checkPackageAccess()`],
							[/* text */ 't', ` denies access to the package
         of this class

         `]
						]]
					]]
				]]
			],
			[/* return description */
				[/* text */ 't', `the array of `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` objects representing all the
         declared members of this class`]
			]
		]],
		[/* method */ 'getDeclaredFields()', [
			[/* method description */
				[/* text */ 't', `Returns an array of `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', ` objects reflecting all the fields
 declared by the class or interface represented by this
 `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object. This includes public, protected, default
 (package) access, and private fields, but excludes inherited fields.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents a class or interface with no
 declared fields, then this method returns an array of length 0.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents an array type, a primitive
 type, or void, then this method returns an array of length 0.

 `]
				]],
				[/* block */ 'b', ` The elements in the returned array are not sorted and are not in any
 particular order.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present and any of the
          following conditions is met:

          `],
					[/* list */ 'l', [
						[/* block */ 'b', [
							[/* text */ 't', ` the caller's class loader is not the same as the
          class loader of this class and invocation of
          `],
							[/* external link */ 'a', `SecurityManager.html#checkPermission(java.security.Permission)`, `s.checkPermission`],
							[/* text */ 't', ` method with
          `],
							[/* inline code block */ 'i', `RuntimePermission("accessDeclaredMembers")`],
							[/* text */ 't', `
          denies access to the declared fields within this class

          `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` the caller's class loader is not the same as or an
          ancestor of the class loader for the current class and
          invocation of `],
							[/* external link */ 'a', `SecurityManager.html#checkPackageAccess(java.lang.String)`, `s.checkPackageAccess()`],
							[/* text */ 't', ` denies access to the package
          of this class

          `]
						]]
					]]
				]]
			],
			[/* return description */
				[/* text */ 't', `the array of `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', ` objects representing all the
          declared fields of this class`]
			]
		]],
		[/* method */ 'getRecordComponents()', [
			[/* method description */
				[/* text */ 't', `Returns an array of `],
				[/* inline code block */ 'i', `RecordComponent`],
				[/* text */ 't', ` objects representing all the
 record components of this record class, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this class is
 not a record class.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The components are returned in the same order that they are declared
 in the record header. The array is empty if this record class has no
 components. If the class is not a record class, that is `],
					[/* reference */ 'r', `isRecord()`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `, then this method returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.
 Conversely, if `],
					[/* reference */ 'r', `isRecord()`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, then this method
 returns a non-null value.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present and any of the
          following conditions is met:

          `],
					[/* list */ 'l', [
						[/* block */ 'b', [
							[/* text */ 't', ` the caller's class loader is not the same as the
          class loader of this class and invocation of
          `],
							[/* external link */ 'a', `SecurityManager.html#checkPermission(java.security.Permission)`, `s.checkPermission`],
							[/* text */ 't', ` method with
          `],
							[/* inline code block */ 'i', `RuntimePermission("accessDeclaredMembers")`],
							[/* text */ 't', `
          denies access to the declared methods within this class

          `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` the caller's class loader is not the same as or an
          ancestor of the class loader for the current class and
          invocation of `],
							[/* external link */ 'a', `SecurityManager.html#checkPackageAccess(java.lang.String)`, `s.checkPackageAccess()`],
							[/* text */ 't', ` denies access to the package
          of this class

          `]
						]]
					]]
				]]
			],
			[/* return description */
				[/* text */ 't', `An array of `],
				[/* inline code block */ 'i', `RecordComponent`],
				[/* text */ 't', ` objects representing all the
          record components of this record class, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this
          class is not a record class`]
			]
		]],
		[/* method */ 'getDeclaredMethods()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', ` objects reflecting all the
 declared methods of the class or interface represented by this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object, including public, protected, default (package)
 access, and private methods, but excluding inherited methods.
 The declared methods may include methods `],
				[/* text */ 't', `not`],
				[/* text */ 't', ` in the
 source of the class or interface, including `],
				[/* external link */ 'a', `reflect/Method.html#isBridge()`, `bridge methods`],
				[/* text */ 't', ` and other `],
				[/* external link */ 'a', `reflect/Executable.html#isSynthetic()`, `synthetic`],
				[/* text */ 't', ` methods added by compilers.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents a class or interface that
 has multiple declared methods with the same name and parameter types,
 but different return types, then the returned array has a `],
					[/* inline code block */ 'i', `Method`],
					[/* text */ 't', `
 object for each such method.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents a class or interface that
 has a class initialization method `],
					[/* inline code block */ 'i', `<clinit>`],
					[/* text */ 't', `, then the returned
 array does `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` have a corresponding `],
					[/* inline code block */ 'i', `Method`],
					[/* text */ 't', ` object.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents a class or interface with no
 declared methods, then the returned array has length 0.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents an array type, a primitive
 type, or void, then the returned array has length 0.

 `]
				]],
				[/* block */ 'b', ` The elements in the returned array are not sorted and are not in any
 particular order.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present and any of the
          following conditions is met:

          `],
					[/* list */ 'l', [
						[/* block */ 'b', [
							[/* text */ 't', ` the caller's class loader is not the same as the
          class loader of this class and invocation of
          `],
							[/* external link */ 'a', `SecurityManager.html#checkPermission(java.security.Permission)`, `s.checkPermission`],
							[/* text */ 't', ` method with
          `],
							[/* inline code block */ 'i', `RuntimePermission("accessDeclaredMembers")`],
							[/* text */ 't', `
          denies access to the declared methods within this class

          `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` the caller's class loader is not the same as or an
          ancestor of the class loader for the current class and
          invocation of `],
							[/* external link */ 'a', `SecurityManager.html#checkPackageAccess(java.lang.String)`, `s.checkPackageAccess()`],
							[/* text */ 't', ` denies access to the package
          of this class

          `]
						]]
					]]
				]]
			],
			[/* return description */
				[/* text */ 't', `the array of `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', ` objects representing all the
          declared methods of this class`]
			]
		]],
		[/* method */ 'getDeclaredConstructors()', [
			[/* method description */
				[/* text */ 't', `Returns an array of `],
				[/* inline code block */ 'i', `Constructor`],
				[/* text */ 't', ` objects reflecting all the
 constructors declared by the class represented by this
 `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object. These are public, protected, default
 (package) access, and private constructors.  The elements in the array
 returned are not sorted and are not in any particular order.  If the
 class has a default constructor, it is included in the returned array.
 This method returns an array of length 0 if this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `
 object represents an interface, a primitive type, an array class, or
 void.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` See `],
					[/* text */ 't', `The Java Language Specification`],
					[/* text */ 't', `,
 section `],
					[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-8.html#jls-8.2`, `8.2`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present and any of the
          following conditions is met:

          `],
					[/* list */ 'l', [
						[/* block */ 'b', [
							[/* text */ 't', ` the caller's class loader is not the same as the
          class loader of this class and invocation of
          `],
							[/* external link */ 'a', `SecurityManager.html#checkPermission(java.security.Permission)`, `s.checkPermission`],
							[/* text */ 't', ` method with
          `],
							[/* inline code block */ 'i', `RuntimePermission("accessDeclaredMembers")`],
							[/* text */ 't', `
          denies access to the declared constructors within this class

          `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` the caller's class loader is not the same as or an
          ancestor of the class loader for the current class and
          invocation of `],
							[/* external link */ 'a', `SecurityManager.html#checkPackageAccess(java.lang.String)`, `s.checkPackageAccess()`],
							[/* text */ 't', ` denies access to the package
          of this class

          `]
						]]
					]]
				]]
			],
			[/* return description */
				[/* text */ 't', `the array of `],
				[/* inline code block */ 'i', `Constructor`],
				[/* text */ 't', ` objects representing all the
          declared constructors of this class`]
			]
		]],
		[/* method */ 'getDeclaredField(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', ` object that reflects the specified declared
 field of the class or interface represented by this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `
 object. The `],
				[/* inline code block */ 'i', `name`],
				[/* text */ 't', ` parameter is a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` that specifies
 the simple name of the desired field.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents an array type, then this
 method does not find the `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` field of the array type.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the field`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NoSuchFieldException', [/* throw description */
					[/* text */ 't', `if a field with the specified name is
          not found.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present and any of the
          following conditions is met:

          `],
					[/* list */ 'l', [
						[/* block */ 'b', [
							[/* text */ 't', ` the caller's class loader is not the same as the
          class loader of this class and invocation of
          `],
							[/* external link */ 'a', `SecurityManager.html#checkPermission(java.security.Permission)`, `s.checkPermission`],
							[/* text */ 't', ` method with
          `],
							[/* inline code block */ 'i', `RuntimePermission("accessDeclaredMembers")`],
							[/* text */ 't', `
          denies access to the declared field

          `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` the caller's class loader is not the same as or an
          ancestor of the class loader for the current class and
          invocation of `],
							[/* external link */ 'a', `SecurityManager.html#checkPackageAccess(java.lang.String)`, `s.checkPackageAccess()`],
							[/* text */ 't', ` denies access to the package
          of this class

          `]
						]]
					]]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Field`],
				[/* text */ 't', ` object for the specified field in this
          class`]
			]
		]],
		[/* method */ 'getDeclaredMethod(java.lang.String,java.lang.Class...)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', ` object that reflects the specified
 declared method of the class or interface represented by this
 `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object. The `],
				[/* inline code block */ 'i', `name`],
				[/* text */ 't', ` parameter is a
 `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` that specifies the simple name of the desired
 method, and the `],
				[/* inline code block */ 'i', `parameterTypes`],
				[/* text */ 't', ` parameter is an array of
 `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` objects that identify the method's formal parameter
 types, in declared order.  If more than one method with the same
 parameter types is declared in a class, and one of these methods has a
 return type that is more specific than any of the others, that method is
 returned; otherwise one of the methods is chosen arbitrarily.  If the
 name is "&lt;init&gt;"or "&lt;clinit&gt;" a `],
				[/* inline code block */ 'i', `NoSuchMethodException`],
				[/* text */ 't', `
 is raised.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents an array type, then this
 method does not find the `],
					[/* inline code block */ 'i', `clone()`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the method`]
				]],
				[/* parameter */ 'parameterTypes', [/* parameter description */
					[/* text */ 't', `the parameter array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NoSuchMethodException', [/* throw description */
					[/* text */ 't', `if a matching method is not found.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present and any of the
          following conditions is met:

          `],
					[/* list */ 'l', [
						[/* block */ 'b', [
							[/* text */ 't', ` the caller's class loader is not the same as the
          class loader of this class and invocation of
          `],
							[/* external link */ 'a', `SecurityManager.html#checkPermission(java.security.Permission)`, `s.checkPermission`],
							[/* text */ 't', ` method with
          `],
							[/* inline code block */ 'i', `RuntimePermission("accessDeclaredMembers")`],
							[/* text */ 't', `
          denies access to the declared method

          `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` the caller's class loader is not the same as or an
          ancestor of the class loader for the current class and
          invocation of `],
							[/* external link */ 'a', `SecurityManager.html#checkPackageAccess(java.lang.String)`, `s.checkPackageAccess()`],
							[/* text */ 't', ` denies access to the package
          of this class

          `]
						]]
					]]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Method`],
				[/* text */ 't', ` object for the method of this class
          matching the specified name and parameters`]
			]
		]],
		[/* method */ 'getDeclaredConstructor(java.lang.Class...)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Constructor`],
				[/* text */ 't', ` object that reflects the specified
 constructor of the class or interface represented by this
 `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object.  The `],
				[/* inline code block */ 'i', `parameterTypes`],
				[/* text */ 't', ` parameter is
 an array of `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` objects that identify the constructor's
 formal parameter types, in declared order.

 If this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object represents an inner class
 declared in a non-static context, the formal parameter types
 include the explicit enclosing instance as the first parameter.`]
			],
			[/* parameters */
				[/* parameter */ 'parameterTypes', [/* parameter description */
					[/* text */ 't', `the parameter array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NoSuchMethodException', [/* throw description */
					[/* text */ 't', `if a matching method is not found.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present and any of the
          following conditions is met:

          `],
					[/* list */ 'l', [
						[/* block */ 'b', [
							[/* text */ 't', ` the caller's class loader is not the same as the
          class loader of this class and invocation of
          `],
							[/* external link */ 'a', `SecurityManager.html#checkPermission(java.security.Permission)`, `s.checkPermission`],
							[/* text */ 't', ` method with
          `],
							[/* inline code block */ 'i', `RuntimePermission("accessDeclaredMembers")`],
							[/* text */ 't', `
          denies access to the declared constructor

          `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` the caller's class loader is not the same as or an
          ancestor of the class loader for the current class and
          invocation of `],
							[/* external link */ 'a', `SecurityManager.html#checkPackageAccess(java.lang.String)`, `s.checkPackageAccess()`],
							[/* text */ 't', ` denies access to the package
          of this class

          `]
						]]
					]]
				]]
			],
			[/* return description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `Constructor`],
				[/* text */ 't', ` object for the constructor with the
          specified parameter list`]
			]
		]],
		[/* method */ 'getEnumConstants()', [
			[/* method description */
				[/* text */ 't', `Returns the elements of this enum class or null if this
 Class object does not represent an enum class.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array containing the values comprising the enum class
     represented by this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object in the order they're
     declared, or null if this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object does not
     represent an enum class`]
			]
		]],
		[/* method */ 'asSubclass(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Casts this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object to represent a subclass of the class
 represented by the specified class object.  Checks that the cast
 is valid, and throws a `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', ` if it is not.  If
 this method succeeds, it always returns a reference to this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is useful when a client needs to "narrow" the type of
 a `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object to pass it to an API that restricts the
 `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` objects that it is willing to accept.  A cast would
 generate a compile-time warning, as the correctness of the cast
 could not be checked at runtime (because generic types are implemented
 by erasure).`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'clazz', [/* parameter description */
					[/* text */ 't', `the class of the type to cast this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object to`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object does not
    represent a subclass of the specified class (here "subclass" includes
    the class itself).`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object, cast to represent a subclass of
    the specified class object.`]
			]
		]],
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
				[/* external link */ 'a', `reflect/AnnotatedElement.html#getAnnotation(java.lang.Class)`, `AnnotatedElement.getAnnotation(Class)`],
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
				[/* external link */ 'a', `reflect/AnnotatedElement.html#getDeclaredAnnotation(java.lang.Class)`, `AnnotatedElement.getDeclaredAnnotation(Class)`],
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
		[/* method */ 'getAnnotatedSuperclass()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `AnnotatedType`],
				[/* text */ 't', ` object that represents the use of a
 type to specify the superclass of the entity represented by this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object. (The `],
				[/* text */ 't', `use`],
				[/* text */ 't', ` of type Foo to specify the superclass
 in '...  extends Foo' is distinct from the `],
				[/* text */ 't', `declaration`],
				[/* text */ 't', ` of class
 Foo.)

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents a class whose declaration
 does not explicitly indicate an annotated superclass, then the return
 value is an `],
					[/* inline code block */ 'i', `AnnotatedType`],
					[/* text */ 't', ` object representing an element with no
 annotations.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` represents either the `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', ` class, an
 interface type, an array type, a primitive type, or void, the return
 value is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an object representing the superclass`]
			]
		]],
		[/* method */ 'getAnnotatedInterfaces()', [
			[/* method description */
				[/* text */ 't', `Returns an array of `],
				[/* inline code block */ 'i', `AnnotatedType`],
				[/* text */ 't', ` objects that represent the use
 of types to specify superinterfaces of the entity represented by this
 `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object. (The `],
				[/* text */ 't', `use`],
				[/* text */ 't', ` of type Foo to specify a
 superinterface in '... implements Foo' is distinct from the
 `],
				[/* text */ 't', `declaration`],
				[/* text */ 't', ` of interface Foo.)

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents a class, the return value is
 an array containing objects representing the uses of interface types to
 specify interfaces implemented by the class. The order of the objects in
 the array corresponds to the order of the interface types used in the
 'implements' clause of the declaration of this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents an interface, the return
 value is an array containing objects representing the uses of interface
 types to specify interfaces directly extended by the interface. The
 order of the objects in the array corresponds to the order of the
 interface types used in the 'extends' clause of the declaration of this
 `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents a class or interface whose
 declaration does not explicitly indicate any annotated superinterfaces,
 the return value is an array of length 0.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents either the `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', `
 class, an array type, a primitive type, or void, the return value is an
 array of length 0.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array representing the superinterfaces`]
			]
		]],
		[/* method */ 'isNestmateOf(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Determines if the given `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` is a nestmate of the
 class or interface represented by this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object.
 Two classes or interfaces are nestmates
 if they have the same `],
				[/* reference */ 'r', `nest host`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the class to check`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this class and `],
				[/* inline code block */ 'i', `c`],
				[/* text */ 't', ` are members of
 the same nest; and `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'getNestMembers()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` objects representing all the
 classes and interfaces that are members of the nest to which the class
 or interface represented by this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object belongs.

 First, this method obtains the `],
				[/* reference */ 'r', `nest host`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `H`],
				[/* text */ 't', `, of the nest to which the class or interface represented by
 this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object belongs. The zeroth element of the returned
 array is `],
				[/* inline code block */ 'i', `H`],
				[/* text */ 't', `.

 Then, for each class or interface `],
				[/* inline code block */ 'i', `C`],
				[/* text */ 't', ` which is recorded by `],
				[/* inline code block */ 'i', `H`],
				[/* text */ 't', `
 as being a member of its nest, this method attempts to obtain the `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `
 object for `],
				[/* inline code block */ 'i', `C`],
				[/* text */ 't', ` (using `],
				[/* reference */ 'r', `the defining class loader`],
				[/* text */ 't', ` of the current `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object), and then obtains the
 `],
				[/* reference */ 'r', `nest host`],
				[/* text */ 't', ` of the nest to which `],
				[/* inline code block */ 'i', `C`],
				[/* text */ 't', ` belongs.
 The classes and interfaces which are recorded by `],
				[/* inline code block */ 'i', `H`],
				[/* text */ 't', ` as being members
 of its nest, and for which `],
				[/* inline code block */ 'i', `H`],
				[/* text */ 't', ` can be determined as their nest host,
 are indicated by subsequent elements of the returned array. The order of
 such elements is unspecified. Duplicates are permitted.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If this `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object represents a primitive type, an array type,
 or `],
					[/* inline code block */ 'i', `void`],
					[/* text */ 't', `, then this method returns a single-element array containing
 `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If any returned class is not the current class, and
 if a security manager, `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, is present and the caller's
 class loader is not the same as or an ancestor of the class
 loader for that returned class and invocation of `],
					[/* external link */ 'a', `SecurityManager.html#checkPackageAccess(java.lang.String)`, `s.checkPackageAccess()`],
					[/* text */ 't', `
 denies access to the package of that returned class`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an array of all classes and interfaces in the same nest as
 this class or interface`]
			]
		]],
		[/* method */ 'isSealed()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object represents
 a sealed class or interface. If this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object represents a
 primitive type, `],
				[/* inline code block */ 'i', `void`],
				[/* text */ 't', `, or an array type, this method returns
 `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `. A sealed class or interface has (possibly zero) permitted
 subclasses; `],
				[/* reference */ 'r', `getPermittedSubclasses()`],
				[/* text */ 't', ` returns a non-null but
 possibly empty value for a sealed class or interface.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object represents
 a sealed class or interface.`]
			]
		]]
	],
]);
