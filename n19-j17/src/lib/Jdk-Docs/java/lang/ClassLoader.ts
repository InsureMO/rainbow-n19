import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.ClassLoader', [
	[/* class description */
		[/* text */ 't', `A class loader is an object that is responsible for loading classes. The
 class `],
		[/* inline code block */ 'i', `ClassLoader`],
		[/* text */ 't', ` is an abstract class.  Given the `],
		[/* text */ 't', `binary name`],
		[/* text */ 't', ` of a class, a class loader should attempt to
 locate or generate data that constitutes a definition for the class.  A
 typical strategy is to transform the name into a file name and then read a
 "class file" of that name from a file system.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Every `],
			[/* reference */ 'r', `java.lang.Class`],
			[/* text */ 't', ` object contains a `],
			[/* reference */ 'r', `.Class#getClassLoader()`],
			[/* text */ 't', ` to the `],
			[/* inline code block */ 'i', `ClassLoader`],
			[/* text */ 't', ` that defined
 it.

 `]
		]],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `Class`],
			[/* text */ 't', ` objects for array classes are not created by class
 loaders, but are created automatically as required by the Java runtime.
 The class loader for an array class, as returned by `],
			[/* reference */ 'r', `.Class#getClassLoader()`],
			[/* text */ 't', ` is the same as the class loader for its element
 type; if the element type is a primitive type, then the array class has no
 class loader.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Applications implement subclasses of `],
			[/* inline code block */ 'i', `ClassLoader`],
			[/* text */ 't', ` in order to
 extend the manner in which the Java virtual machine dynamically loads
 classes.

 `]
		]],
		[/* block */ 'b', ` Class loaders may typically be used by security managers to indicate
 security domains.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` In addition to loading classes, a class loader is also responsible for
 locating resources. A resource is some data (a "`],
			[/* inline code block */ 'i', `.class`],
			[/* text */ 't', `" file,
 configuration data, or an image for example) that is identified with an
 abstract '/'-separated path name. Resources are typically packaged with an
 application or library so that they can be located by code in the
 application or library. In some cases, the resources are included so that
 they can be located by other libraries.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* inline code block */ 'i', `ClassLoader`],
			[/* text */ 't', ` class uses a delegation model to search for
 classes and resources.  Each instance of `],
			[/* inline code block */ 'i', `ClassLoader`],
			[/* text */ 't', ` has an
 associated parent class loader. When requested to find a class or
 resource, a `],
			[/* inline code block */ 'i', `ClassLoader`],
			[/* text */ 't', ` instance will usually delegate the search
 for the class or resource to its parent class loader before attempting to
 find the class or resource itself.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Class loaders that support concurrent loading of classes are known as
 `],
			[/* reference */ 'r', `#isRegisteredAsParallelCapable()`, `parallel capable`],
			[/* text */ 't', ` class
 loaders and are required to register themselves at their class initialization
 time by invoking the `],
			[/* reference */ 'r', `#registerAsParallelCapable()`, `ClassLoader.registerAsParallelCapable`],
			[/* text */ 't', `
 method. Note that the `],
			[/* inline code block */ 'i', `ClassLoader`],
			[/* text */ 't', ` class is registered as parallel
 capable by default. However, its subclasses still need to register themselves
 if they are parallel capable.
 In environments in which the delegation model is not strictly
 hierarchical, class loaders need to be parallel capable, otherwise class
 loading can lead to deadlocks because the loader lock is held for the
 duration of the class loading process (see `],
			[/* reference */ 'r', `#loadClass(java.lang.String)`, `loadClass`],
			[/* text */ 't', ` methods).

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Run-time Built-in Class Loaders`]
		]],
		[/* text */ 't', `

 The Java run-time has the following built-in class loaders:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', `Bootstrap class loader.
     It is the virtual machine's built-in class loader, typically represented
     as `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, and does not have a parent.`]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* reference */ 'r', `#getPlatformClassLoader()`, `Platform class loader`],
					[/* text */ 't', `.
     The platform class loader is responsible for loading the
     `],
					[/* text */ 't', `platform classes`],
					[/* text */ 't', `.  Platform classes include Java SE platform APIs,
     their implementation classes and JDK-specific run-time classes that are
     defined by the platform class loader or its ancestors.
     The platform class loader can be used as the parent of a `],
					[/* inline code block */ 'i', `ClassLoader`],
					[/* text */ 't', `
     instance.
     `]
				]],
				[/* block */ 'b', ` To allow for upgrading/overriding of modules defined to the platform
     class loader, and where upgraded modules read modules defined to class
     loaders other than the platform class loader and its ancestors, then
     the platform class loader may have to delegate to other class loaders,
     the application class loader for example.
     In other words, classes in named modules defined to class loaders
     other than the platform class loader and its ancestors may be visible
     to the platform class loader. `]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* reference */ 'r', `#getSystemClassLoader()`, `System class loader`],
					[/* text */ 't', `.
     It is also known as `],
					[/* text */ 't', `application class loader`],
					[/* text */ 't', ` and is distinct
     from the platform class loader.
     The system class loader is typically used to define classes on the
     application class path, module path, and JDK-specific tools.
     The platform class loader is the parent or an ancestor of the system class
     loader, so the system class loader can load platform classes by delegating
     to its parent.`]
				]]
			]]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Normally, the Java virtual machine loads classes from the local file
 system in a platform-dependent manner.
 However, some classes may not originate from a file; they may originate
 from other sources, such as the network, or they could be constructed by an
 application.  The method `],
			[/* reference */ 'r', `#defineClass(java.lang.String,byte%5B%5D,int,int)`, `defineClass`],
			[/* text */ 't', ` converts an array of bytes into an instance of class
 `],
			[/* inline code block */ 'i', `Class`],
			[/* text */ 't', `. Instances of this newly defined class can be created using
 `],
			[/* reference */ 'r', `.Class#newInstance()`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The methods and constructors of objects created by a class loader may
 reference other classes.  To determine the class(es) referred to, the Java
 virtual machine invokes the `],
			[/* reference */ 'r', `#loadClass(java.lang.String)`, `loadClass`],
			[/* text */ 't', ` method of
 the class loader that originally created the class.

 `]
		]],
		[/* block */ 'b', ` For example, an application could create a network class loader to
 download class files from a server.  Sample code might look like:

 `],
		[/* block */ 'b', [
			[/* code block */ 'c', `   ClassLoader loader = new NetworkClassLoader(host, port);
   Object main = loader.loadClass("Main", true).newInstance();
        . . .
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` The network class loader subclass must define the methods `],
			[/* reference */ 'r', `#findClass(java.lang.String)`, `findClass`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `loadClassData`],
			[/* text */ 't', ` to load a class
 from the network.  Once it has downloaded the bytes that make up the class,
 it should use the method `],
			[/* reference */ 'r', `#defineClass(byte%5B%5D,int,int)`, `defineClass`],
			[/* text */ 't', ` to
 create a class instance.  A sample implementation is:

 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', `     class NetworkClassLoader extends ClassLoader {
         String host;
         int port;

         public Class findClass(String name) {
             byte[] b = loadClassData(name);
             return defineClass(name, b, 0, b.length);
         }

         private byte[] loadClassData(String name) {
             // load the class data from the connection
              . . .
         }
     }
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Binary names`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Any class name provided as a `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` parameter to methods in
 `],
			[/* inline code block */ 'i', `ClassLoader`],
			[/* text */ 't', ` must be a binary name as defined by
 `],
			[/* text */ 't', `The Java Language Specification`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', ` Examples of valid class names include:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', `   "java.lang.String"
   "javax.swing.JSpinner$DefaultEditor"
   "java.security.KeyStore$Builder$FileBuilder$1"
   "java.net.URLClassLoader$3$1"
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` Any package name provided as a `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` parameter to methods in
 `],
			[/* inline code block */ 'i', `ClassLoader`],
			[/* text */ 't', ` must be either the empty string (denoting an unnamed package)
 or a fully qualified name as defined by
 `],
			[/* text */ 't', `The Java Language Specification`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Creates a new class loader using the `],
				[/* inline code block */ 'i', `ClassLoader`],
				[/* text */ 't', ` returned by
 the method `],
				[/* reference */ 'r', `#getSystemClassLoader()`, `getSystemClassLoader()`],
				[/* text */ 't', ` as the parent class loader.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If there is a security manager, its `],
					[/* reference */ 'r', `.SecurityManager#checkCreateClassLoader()`],
					[/* text */ 't', ` method is invoked.  This may result in
 a security exception.  `]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its
          `],
					[/* inline code block */ 'i', `checkCreateClassLoader`],
					[/* text */ 't', ` method doesn't allow creation
          of a new class loader.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.ClassLoader)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new class loader using the specified parent class loader for
 delegation.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If there is a security manager, its `],
					[/* reference */ 'r', `.SecurityManager#checkCreateClassLoader()`],
					[/* text */ 't', ` method
 is invoked.  This may result in a security exception.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'parent', [/* parameter description */
					[/* text */ 't', `The parent class loader`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its
         `],
					[/* inline code block */ 'i', `checkCreateClassLoader`],
					[/* text */ 't', ` method doesn't allow creation
         of a new class loader.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.ClassLoader)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new class loader of the specified name and using the
 specified parent class loader for delegation.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `class loader name; or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if not named`]
				]],
				[/* parameter */ 'parent', [/* parameter description */
					[/* text */ 't', `the parent class loader`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the given name is empty.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager exists and its
         `],
					[/* reference */ 'r', `.SecurityManager#checkCreateClassLoader()`],
					[/* text */ 't', `
         method doesn't allow creation of a new class loader.`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of this class loader or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if
 this class loader is not named.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `name of this class loader; or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if
 this class loader is not named.`]
			]
		]],
		[/* method */ 'loadClass(java.lang.String,boolean)', [
			[/* method description */
				[/* text */ 't', `Loads the class with the specified `],
				[/* text */ 't', `binary name`],
				[/* text */ 't', `.  The
 default implementation of this method searches for classes in the
 following order:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` Invoke `],
							[/* reference */ 'r', `#findLoadedClass(java.lang.String)`, `findLoadedClass(String)`],
							[/* text */ 't', ` to check if the class
   has already been loaded.  `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` Invoke the `],
							[/* reference */ 'r', `#loadClass(java.lang.String)`, `loadClass`],
							[/* text */ 't', ` method
   on the parent class loader.  If the parent is `],
							[/* inline code block */ 'i', `null`],
							[/* text */ 't', ` the class
   loader built into the virtual machine is used, instead.  `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` Invoke the `],
							[/* reference */ 'r', `#findClass(java.lang.String)`, `findClass(String)`],
							[/* text */ 't', ` method to find the
   class.  `]
						]]
					]]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If the class was found using the above steps, and the
 `],
					[/* inline code block */ 'i', `resolve`],
					[/* text */ 't', ` flag is true, this method will then invoke the `],
					[/* reference */ 'r', `#resolveClass(java.lang.Class)`, `resolveClass(Class)`],
					[/* text */ 't', ` method on the resulting `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Subclasses of `],
					[/* inline code block */ 'i', `ClassLoader`],
					[/* text */ 't', ` are encouraged to override `],
					[/* reference */ 'r', `#findClass(java.lang.String)`, `findClass(String)`],
					[/* text */ 't', `, rather than this method.  `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Unless overridden, this method synchronizes on the result of
 `],
					[/* reference */ 'r', `#getClassLoadingLock(java.lang.String)`, `getClassLoadingLock`],
					[/* text */ 't', ` method
 during the entire class loading process.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The `],
					[/* text */ 't', `binary name`],
					[/* text */ 't', ` of the class`]
				]],
				[/* parameter */ 'resolve', [/* parameter description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` then resolve the class`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassNotFoundException', [/* throw description */
					[/* text */ 't', `If the class could not be found`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The resulting `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object`]
			]
		]],
		[/* method */ 'loadClass(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Loads the class with the specified `],
				[/* text */ 't', `binary name`],
				[/* text */ 't', `.
 This method searches for classes in the same manner as the `],
				[/* reference */ 'r', `#loadClass(java.lang.String,boolean)`, `loadClass(String, boolean)`],
				[/* text */ 't', ` method.  It is invoked by the Java virtual
 machine to resolve class references.  Invoking this method is equivalent
 to invoking `],
				[/* reference */ 'r', `#loadClass(java.lang.String,boolean)`, `loadClass(name, false)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The `],
					[/* text */ 't', `binary name`],
					[/* text */ 't', ` of the class`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassNotFoundException', [/* throw description */
					[/* text */ 't', `If the class was not found`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The resulting `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object`]
			]
		]],
		[/* method */ 'getPlatformClassLoader()', [
			[/* method description */
				[/* text */ 't', `Returns the platform class loader.  All
 `],
				[/* text */ 't', `platform classes`],
				[/* text */ 't', ` are visible to
 the platform class loader.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present, and the caller's class loader is
          not `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, and the caller's class loader is not the same
          as or an ancestor of the platform class loader,
          and the caller does not have the
          `],
					[/* reference */ 'r', `java.lang.RuntimePermission`],
					[/* inline code block */ 'i', `("getClassLoader")`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The platform `],
				[/* inline code block */ 'i', `ClassLoader`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getSystemClassLoader()', [
			[/* method description */
				[/* text */ 't', `Returns the system class loader.  This is the default
 delegation parent for new `],
				[/* inline code block */ 'i', `ClassLoader`],
				[/* text */ 't', ` instances, and is
 typically the class loader used to start the application.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method is first invoked early in the runtime's startup
 sequence, at which point it creates the system class loader. This
 class loader will be the context class loader for the main application
 thread (for example, the thread that invokes the `],
					[/* inline code block */ 'i', `main`],
					[/* text */ 't', ` method of
 the main class).

 `]
				]],
				[/* block */ 'b', ` The default system class loader is an implementation-dependent
 instance of this class.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the system property "`],
					[/* inline code block */ 'i', `java.system.class.loader`],
					[/* text */ 't', `"
 is defined when this method is first invoked then the value of that
 property is taken to be the name of a class that will be returned as the
 system class loader. The class is loaded using the default system class
 loader and must define a public constructor that takes a single parameter
 of type `],
					[/* inline code block */ 'i', `ClassLoader`],
					[/* text */ 't', ` which is used as the delegation parent. An
 instance is then created using this constructor with the default system
 class loader as the parameter.  The resulting class loader is defined
 to be the system class loader. During construction, the class loader
 should take great care to avoid calling `],
					[/* inline code block */ 'i', `getSystemClassLoader()`],
					[/* text */ 't', `.
 If circular initialization of the system class loader is detected then
 an `],
					[/* inline code block */ 'i', `IllegalStateException`],
					[/* text */ 't', ` is thrown.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present, and the caller's class loader
          is not `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` and is not the same as or an ancestor of the
          system class loader, and the caller does not have the
          `],
					[/* reference */ 'r', `java.lang.RuntimePermission`],
					[/* inline code block */ 'i', `("getClassLoader")`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If invoked recursively during the construction of the class
          loader specified by the "`],
					[/* inline code block */ 'i', `java.system.class.loader`],
					[/* text */ 't', `"
          property.`]
				]],
				[/* throw */ 'java.lang.Error', [/* throw description */
					[/* text */ 't', `If the system property "`],
					[/* inline code block */ 'i', `java.system.class.loader`],
					[/* text */ 't', `"
          is defined but the named class could not be loaded, the
          provider class does not define the required constructor, or an
          exception is thrown by that constructor when it is invoked. The
          underlying cause of the error can be retrieved via the
          `],
					[/* reference */ 'r', `.Throwable#getCause()`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The system `],
				[/* inline code block */ 'i', `ClassLoader`]
			]
		]],
		[/* method */ 'definePackage(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.net.URL)', [
			[/* method description */
				[/* text */ 't', `Defines a package by `],
				[/* text */ 't', `name`],
				[/* text */ 't', ` in this `],
				[/* inline code block */ 'i', `ClassLoader`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `Package names`],
					[/* text */ 't', ` must be unique within a class loader and
 cannot be redefined or changed once created.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If a class loader wishes to define a package with specific properties,
 such as version information, then the class loader should call this
 `],
					[/* inline code block */ 'i', `definePackage`],
					[/* text */ 't', ` method before calling `],
					[/* inline code block */ 'i', `defineClass`],
					[/* text */ 't', `.
 Otherwise, the
 `],
					[/* reference */ 'r', `#defineClass(java.lang.String,byte%5B%5D,int,int,java.security.ProtectionDomain)`, `defineClass`],
					[/* text */ 't', `
 method will define a package in this class loader corresponding to the package
 of the newly defined class; the properties of this defined package are
 specified by `],
					[/* reference */ 'r', `java.lang.Package`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The `],
					[/* text */ 't', `package name`]
				]],
				[/* parameter */ 'specTitle', [/* parameter description */
					[/* text */ 't', `The specification title`]
				]],
				[/* parameter */ 'specVersion', [/* parameter description */
					[/* text */ 't', `The specification version`]
				]],
				[/* parameter */ 'specVendor', [/* parameter description */
					[/* text */ 't', `The specification vendor`]
				]],
				[/* parameter */ 'implTitle', [/* parameter description */
					[/* text */ 't', `The implementation title`]
				]],
				[/* parameter */ 'implVersion', [/* parameter description */
					[/* text */ 't', `The implementation version`]
				]],
				[/* parameter */ 'implVendor', [/* parameter description */
					[/* text */ 't', `The implementation vendor`]
				]],
				[/* parameter */ 'sealBase', [/* parameter description */
					[/* text */ 't', `If not `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, then this package is sealed with
         respect to the given code source `],
					[/* reference */ 'r', `java.net.URL`],
					[/* text */ 't', `
         object.  Otherwise, the package is not sealed.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if a package of the given `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is already
          defined by this class loader`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The newly defined `],
				[/* inline code block */ 'i', `Package`],
				[/* text */ 't', ` object`]
			]
		]],
		[/* method */ 'findResource(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Finds the resource with the given name. Class loader implementations
 should override this method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` For resources in named modules then the method must implement the
 rules for encapsulation specified in the `],
					[/* inline code block */ 'i', `Module`],
					[/* reference */ 'r', `.Module#getResourceAsStream(java.lang.String)`],
					[/* text */ 't', ` method. Additionally,
 it must not find non-"`],
					[/* inline code block */ 'i', `.class`],
					[/* text */ 't', `" resources in packages of named
 modules unless the package is `],
					[/* reference */ 'r', `.Module#isOpen(java.lang.String)`],
					[/* text */ 't', `
 unconditionally. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The resource name`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', ` object for reading the resource; `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if
          the resource could not be found, a `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', ` could not be
          constructed to locate the resource, the resource is in a package
          that is not opened unconditionally, or access to the resource is
          denied by the security manager.`]
			]
		]],
		[/* method */ 'findResource(java.lang.String,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a URL to a resource in a module defined to this class loader.
 Class loader implementations that support loading from modules
 should override this method.`]
			],
			[/* parameters */
				[/* parameter */ 'moduleName', [/* parameter description */
					[/* text */ 't', `The module name; or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` to find a resource in the
         `],
					[/* reference */ 'r', `#getUnnamedModule()`, `unnamed module`],
					[/* text */ 't', ` for this
         class loader`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The resource name`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If I/O errors occur`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A URL to the resource; `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the resource could not be
         found, a URL could not be constructed to locate the resource,
         access to the resource is denied by the security manager, or
         there isn't a module of the given name defined to the class
         loader.`]
			]
		]],
		[/* method */ 'getSystemResourceAsStream(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Open for reading, a resource of the specified name from the search path
 used to load classes.  This method locates the resource through the
 system class loader (see `],
				[/* reference */ 'r', `#getSystemClassLoader()`, `getSystemClassLoader()`],
				[/* text */ 't', `).

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Resources in named modules are subject to the encapsulation rules
 specified by `],
					[/* reference */ 'r', `.Module#getResourceAsStream(java.lang.String)`],
					[/* text */ 't', `.
 Additionally, and except for the special case where the resource has a
 name ending with "`],
					[/* inline code block */ 'i', `.class`],
					[/* text */ 't', `", this method will only find resources in
 packages of named modules when the package is `],
					[/* reference */ 'r', `.Module#isOpen(java.lang.String)`],
					[/* text */ 't', ` unconditionally. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The resource name`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `An input stream for reading the resource; `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the
          resource could not be found, the resource is in a package that
          is not opened unconditionally, or access to the resource is
          denied by the security manager.`]
			]
		]],
		[/* method */ 'getResourceAsStream(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns an input stream for reading the specified resource.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The search order is described in the documentation for `],
					[/* reference */ 'r', `#getResource(java.lang.String)`, `getResource(String)`],
					[/* text */ 't', `.  `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Resources in named modules are subject to the encapsulation rules
 specified by `],
					[/* reference */ 'r', `.Module#getResourceAsStream(java.lang.String)`],
					[/* text */ 't', `.
 Additionally, and except for the special case where the resource has a
 name ending with "`],
					[/* inline code block */ 'i', `.class`],
					[/* text */ 't', `", this method will only find resources in
 packages of named modules when the package is `],
					[/* reference */ 'r', `.Module#isOpen(java.lang.String)`],
					[/* text */ 't', ` unconditionally. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The resource name`]
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
				[/* text */ 't', `An input stream for reading the resource; `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the
          resource could not be found, the resource is in a package that
          is not opened unconditionally, or access to the resource is
          denied by the security manager.`]
			]
		]],
		[/* method */ 'getSystemResource(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Find a resource of the specified name from the search path used to load
 classes.  This method locates the resource through the system class
 loader (see `],
				[/* reference */ 'r', `#getSystemClassLoader()`, `getSystemClassLoader()`],
				[/* text */ 't', `).

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Resources in named modules are subject to the encapsulation rules
 specified by `],
					[/* reference */ 'r', `.Module#getResourceAsStream(java.lang.String)`],
					[/* text */ 't', `.
 Additionally, and except for the special case where the resource has a
 name ending with "`],
					[/* inline code block */ 'i', `.class`],
					[/* text */ 't', `", this method will only find resources in
 packages of named modules when the package is `],
					[/* reference */ 'r', `.Module#isOpen(java.lang.String)`],
					[/* text */ 't', ` unconditionally. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The resource name`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A `],
				[/* reference */ 'r', `java.net.URL`],
				[/* text */ 't', ` to the resource; `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the resource could not be found, a URL could not be
          constructed to locate the resource, the resource is in a package
          that is not opened unconditionally or access to the resource is
          denied by the security manager.`]
			]
		]],
		[/* method */ 'getResource(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Finds the resource with the given name.  A resource is some data
 (images, audio, text, etc) that can be accessed by class code in a way
 that is independent of the location of the code.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The name of a resource is a '`],
					[/* inline code block */ 'i', `/`],
					[/* text */ 't', `'-separated path name that
 identifies the resource. `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Resources in named modules are subject to the encapsulation rules
 specified by `],
					[/* reference */ 'r', `.Module#getResourceAsStream(java.lang.String)`],
					[/* text */ 't', `.
 Additionally, and except for the special case where the resource has a
 name ending with "`],
					[/* inline code block */ 'i', `.class`],
					[/* text */ 't', `", this method will only find resources in
 packages of named modules when the package is `],
					[/* reference */ 'r', `.Module#isOpen(java.lang.String)`],
					[/* text */ 't', ` unconditionally (even if the caller of this method is in the
 same module as the resource). `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The resource name`]
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
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', ` object for reading the resource; `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if
          the resource could not be found, a `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', ` could not be
          constructed to locate the resource, the resource is in a package
          that is not opened unconditionally, or access to the resource is
          denied by the security manager.`]
			]
		]],
		[/* method */ 'getPackage(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Finds a package by `],
				[/* text */ 't', `name`],
				[/* text */ 't', ` in this class loader and its ancestors.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If this class loader defines a `],
					[/* inline code block */ 'i', `Package`],
					[/* text */ 't', ` of the given name,
 the `],
					[/* inline code block */ 'i', `Package`],
					[/* text */ 't', ` is returned. Otherwise, the ancestors of
 this class loader are searched recursively (parent by parent)
 for a `],
					[/* inline code block */ 'i', `Package`],
					[/* text */ 't', ` of the given name.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The `],
					[/* text */ 't', `package name`]
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
				[/* text */ 't', ` of the given name that has been defined by
         this class loader or its ancestors, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if not found.`]
			]
		]],
		[/* method */ 'setSigners(java.lang.Class,java.lang.Object[])', [
			[/* method description */
				[/* text */ 't', `Sets the signers of a class.  This should be invoked after defining a
 class.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object`]
				]],
				[/* parameter */ 'signers', [/* parameter description */
					[/* text */ 't', `The signers for the class`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'getClassLoadingLock(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the lock object for class loading operations.
 For backward compatibility, the default implementation of this method
 behaves as follows. If this ClassLoader object is registered as
 parallel capable, the method returns a dedicated object associated
 with the specified class name. Otherwise, the method returns this
 ClassLoader object.`]
			],
			[/* parameters */
				[/* parameter */ 'className', [/* parameter description */
					[/* text */ 't', `The name of the to-be-loaded class`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If registered as parallel capable and `],
					[/* inline code block */ 'i', `className`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the lock for class loading operations`]
			]
		]],
		[/* method */ 'findLoadedClass(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the class with the given `],
				[/* text */ 't', `binary name`],
				[/* text */ 't', ` if this
 loader has been recorded by the Java virtual machine as an initiating
 loader of a class with that `],
				[/* text */ 't', `binary name`],
				[/* text */ 't', `.  Otherwise
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The `],
					[/* text */ 't', `binary name`],
					[/* text */ 't', ` of the class`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the class has
          not been loaded`]
			]
		]],
		[/* method */ 'findClass(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Finds the class with the specified `],
				[/* text */ 't', `binary name`],
				[/* text */ 't', `.
 This method should be overridden by class loader implementations that
 follow the delegation model for loading classes, and will be invoked by
 the `],
				[/* reference */ 'r', `#loadClass(java.lang.String)`, `loadClass`],
				[/* text */ 't', ` method after checking the
 parent class loader for the requested class.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The `],
					[/* text */ 't', `binary name`],
					[/* text */ 't', ` of the class`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassNotFoundException', [/* throw description */
					[/* text */ 't', `If the class could not be found`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The resulting `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object`]
			]
		]],
		[/* method */ 'findClass(java.lang.String,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Finds the class with the given `],
				[/* text */ 't', `binary name`],
				[/* text */ 't', `
 in a module defined to this class loader.
 Class loader implementations that support loading from modules
 should override this method.`]
			],
			[/* parameters */
				[/* parameter */ 'moduleName', [/* parameter description */
					[/* text */ 't', `The module name; or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` to find the class in the
         `],
					[/* reference */ 'r', `#getUnnamedModule()`, `unnamed module`],
					[/* text */ 't', ` for this
         class loader`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The `],
					[/* text */ 't', `binary name`],
					[/* text */ 't', ` of the class`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The resulting `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
         if the class could not be found.`]
			]
		]],
		[/* method */ 'resolveClass(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Links the specified class.  This (misleadingly named) method may be
 used by a class loader to link a class.  If the class `],
				[/* inline code block */ 'i', `c`],
				[/* text */ 't', ` has
 already been linked, then this method simply returns. Otherwise, the
 class is linked as described in the "Execution" chapter of
 `],
				[/* text */ 't', `The Java Language Specification`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `The class to link`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `c`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'defineClass(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Converts an array of bytes into an instance of class `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `.
 Before the `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` can be used it must be resolved.  This method
 is deprecated in favor of the version that takes a `],
				[/* text */ 't', `binary name`],
				[/* text */ 't', ` as its first argument, and is more secure.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `The bytes that make up the class data.  The bytes in positions
         `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` through `],
					[/* inline code block */ 'i', `off+len-1`],
					[/* text */ 't', ` should have the format
         of a valid class file as defined by
         `],
					[/* text */ 't', `The Java Virtual Machine Specification`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `The start offset in `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` of the class data`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `The length of the class data`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassFormatError', [/* throw description */
					[/* text */ 't', `If the data did not contain a valid class`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If either `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is negative, or if
          `],
					[/* inline code block */ 'i', `off+len`],
					[/* text */ 't', ` is greater than `],
					[/* inline code block */ 'i', `b.length`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If an attempt is made to add this class to a package that
          contains classes that were signed by a different set of
          certificates than this class, or if an attempt is made
          to define a class in a package with a fully-qualified name
          that starts with "`],
					[/* inline code block */ 'i', `java.`],
					[/* text */ 't', `".`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object that was created from the specified
          class data`]
			]
		]],
		[/* method */ 'defineClass(java.lang.String,java.nio.ByteBuffer,java.security.ProtectionDomain)', [
			[/* method description */
				[/* text */ 't', `Converts a `],
				[/* reference */ 'r', `java.nio.ByteBuffer`],
				[/* text */ 't', ` into an instance
 of class `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `, with the given `],
				[/* inline code block */ 'i', `ProtectionDomain`],
				[/* text */ 't', `.
 If the given `],
				[/* inline code block */ 'i', `ProtectionDomain`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `, then a default
 protection domain will be assigned to the class as
 specified in the documentation for `],
				[/* reference */ 'r', `#defineClass(java.lang.String,byte%5B%5D,int,int)`, `defineClass(String, byte[], int, int)`],
				[/* text */ 't', `.  Before the class can be used it must be resolved.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The rules about the first class defined in a package determining the
 set of certificates for the package, the restrictions on class names,
 and the defined package of the class
 are identical to those specified in the documentation for `],
					[/* reference */ 'r', `#defineClass(java.lang.String,byte%5B%5D,int,int,java.security.ProtectionDomain)`, `defineClass(String, byte[], int, int, ProtectionDomain)`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* text */ 't', `cl`],
					[/* inline code block */ 'i', `.defineClass(`],
					[/* text */ 't', `name`],
					[/* inline code block */ 'i', `,`],
					[/* text */ 't', `bBuffer`],
					[/* inline code block */ 'i', `,`],
					[/* text */ 't', `pd`],
					[/* inline code block */ 'i', `)`],
					[/* text */ 't', ` yields exactly the same
 result as the statements

`]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `... byte[] temp = new byte[bBuffer.remaining()]; bBuffer.get(temp); return cl.defineClass(name, temp, 0, temp.length, pd);`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The expected `],
					[/* text */ 't', `binary name`],
					[/* text */ 't', `. of the class, or
         `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if not known`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `The bytes that make up the class data. The bytes from positions
         `],
					[/* inline code block */ 'i', `b.position()`],
					[/* text */ 't', ` through `],
					[/* inline code block */ 'i', `b.position() + b.limit() -1`],
					[/* text */ 't', ` should have the format of a valid class file as defined by
         `],
					[/* text */ 't', `The Java Virtual Machine Specification`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'protectionDomain', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `ProtectionDomain`],
					[/* text */ 't', ` of the class, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassFormatError', [/* throw description */
					[/* text */ 't', `If the data did not contain a valid class.`]
				]],
				[/* throw */ 'java.lang.NoClassDefFoundError', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is not `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` and not equal to the
          `],
					[/* text */ 't', `binary name`],
					[/* text */ 't', ` of the class specified by `],
					[/* inline code block */ 'i', `b`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If an attempt is made to add this class to a package that
          contains classes that were signed by a different set of
          certificates than this class, or if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` begins with
          "`],
					[/* inline code block */ 'i', `java.`],
					[/* text */ 't', `".`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object created from the data,
          and `],
				[/* inline code block */ 'i', `ProtectionDomain`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'defineClass(java.lang.String,byte[],int,int,java.security.ProtectionDomain)', [
			[/* method description */
				[/* text */ 't', `Converts an array of bytes into an instance of class `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `,
 with a given `],
				[/* inline code block */ 'i', `ProtectionDomain`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the given `],
					[/* inline code block */ 'i', `ProtectionDomain`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `,
 then a default protection domain will be assigned to the class as specified
 in the documentation for `],
					[/* reference */ 'r', `#defineClass(java.lang.String,byte%5B%5D,int,int)`, `defineClass(String, byte[], int, int)`],
					[/* text */ 't', `.
 Before the class can be used it must be resolved.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The first class defined in a package determines the exact set of
 certificates that all subsequent classes defined in that package must
 contain.  The set of certificates for a class is obtained from the
 `],
					[/* reference */ 'r', `java.security.CodeSource`],
					[/* text */ 't', ` within the
 `],
					[/* inline code block */ 'i', `ProtectionDomain`],
					[/* text */ 't', ` of the class.  Any classes added to that
 package must contain the same set of certificates or a
 `],
					[/* inline code block */ 'i', `SecurityException`],
					[/* text */ 't', ` will be thrown.  Note that if
 `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, this check is not performed.
 You should always pass in the `],
					[/* text */ 't', `binary name`],
					[/* text */ 't', ` of the
 class you are defining as well as the bytes.  This ensures that the
 class you are defining is indeed the class you think it is.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If the specified `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` begins with "`],
					[/* inline code block */ 'i', `java.`],
					[/* text */ 't', `", it can
 only be defined by the `],
					[/* reference */ 'r', `#getPlatformClassLoader()`, `platform class loader`],
					[/* text */ 't', ` or its ancestors; otherwise `],
					[/* inline code block */ 'i', `SecurityException`],
					[/* text */ 't', `
 will be thrown.  If `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is not `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, it must be equal to
 the `],
					[/* text */ 't', `binary name`],
					[/* text */ 't', ` of the class
 specified by the byte array `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, otherwise a `],
					[/* reference */ 'r', `java.lang.NoClassDefFoundError`],
					[/* text */ 't', ` will be thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method defines a package in this class loader corresponding to the
 package of the `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` (if such a package has not already been defined
 in this class loader). The name of the defined package is derived from
 the `],
					[/* text */ 't', `binary name`],
					[/* text */ 't', ` of the class specified by
 the byte array `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `.
 Other properties of the defined package are as specified by `],
					[/* reference */ 'r', `java.lang.Package`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The expected `],
					[/* text */ 't', `binary name`],
					[/* text */ 't', ` of the class, or
         `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if not known`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `The bytes that make up the class data. The bytes in positions
         `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` through `],
					[/* inline code block */ 'i', `off+len-1`],
					[/* text */ 't', ` should have the format
         of a valid class file as defined by
         `],
					[/* text */ 't', `The Java Virtual Machine Specification`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `The start offset in `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` of the class data`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `The length of the class data`]
				]],
				[/* parameter */ 'protectionDomain', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `ProtectionDomain`],
					[/* text */ 't', ` of the class`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassFormatError', [/* throw description */
					[/* text */ 't', `If the data did not contain a valid class`]
				]],
				[/* throw */ 'java.lang.NoClassDefFoundError', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is not `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` and not equal to the
          `],
					[/* text */ 't', `binary name`],
					[/* text */ 't', ` of the class specified by `],
					[/* inline code block */ 'i', `b`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If either `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is negative, or if
          `],
					[/* inline code block */ 'i', `off+len`],
					[/* text */ 't', ` is greater than `],
					[/* inline code block */ 'i', `b.length`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If an attempt is made to add this class to a package that
          contains classes that were signed by a different set of
          certificates than this class, or if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` begins with
          "`],
					[/* inline code block */ 'i', `java.`],
					[/* text */ 't', `" and this class loader is not the platform
          class loader or its ancestor.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object created from the data,
          and `],
				[/* inline code block */ 'i', `ProtectionDomain`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'defineClass(java.lang.String,byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Converts an array of bytes into an instance of class `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', `.
 Before the `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` can be used it must be resolved.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method assigns a default `],
					[/* reference */ 'r', `java.security.ProtectionDomain`],
					[/* text */ 't', ` to the newly defined class.  The
 `],
					[/* inline code block */ 'i', `ProtectionDomain`],
					[/* text */ 't', ` is effectively granted the same set of
 permissions returned when `],
					[/* reference */ 'r', `java.Policy#getPermissions(java.security.CodeSource)`],
					[/* text */ 't', `
 is invoked.  The default protection domain is created on the first invocation
 of `],
					[/* reference */ 'r', `#defineClass(java.lang.String,byte%5B%5D,int,int)`, `defineClass`],
					[/* text */ 't', `,
 and re-used on subsequent invocations.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` To assign a specific `],
					[/* inline code block */ 'i', `ProtectionDomain`],
					[/* text */ 't', ` to the class, use
 the `],
					[/* reference */ 'r', `#defineClass(java.lang.String,byte%5B%5D,int,int,java.security.ProtectionDomain)`, `defineClass`],
					[/* text */ 't', ` method that takes a
 `],
					[/* inline code block */ 'i', `ProtectionDomain`],
					[/* text */ 't', ` as one of its arguments.  `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method defines a package in this class loader corresponding to the
 package of the `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` (if such a package has not already been defined
 in this class loader). The name of the defined package is derived from
 the `],
					[/* text */ 't', `binary name`],
					[/* text */ 't', ` of the class specified by
 the byte array `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `.
 Other properties of the defined package are as specified by `],
					[/* reference */ 'r', `java.lang.Package`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The expected `],
					[/* text */ 't', `binary name`],
					[/* text */ 't', ` of the class, or
         `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if not known`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `The bytes that make up the class data.  The bytes in positions
         `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` through `],
					[/* inline code block */ 'i', `off+len-1`],
					[/* text */ 't', ` should have the format
         of a valid class file as defined by
         `],
					[/* text */ 't', `The Java Virtual Machine Specification`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `The start offset in `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` of the class data`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `The length of the class data`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassFormatError', [/* throw description */
					[/* text */ 't', `If the data did not contain a valid class`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If either `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is negative, or if
          `],
					[/* inline code block */ 'i', `off+len`],
					[/* text */ 't', ` is greater than `],
					[/* inline code block */ 'i', `b.length`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If an attempt is made to add this class to a package that
          contains classes that were signed by a different set of
          certificates than this class (which is unsigned), or if
          `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` begins with "`],
					[/* inline code block */ 'i', `java.`],
					[/* text */ 't', `".`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object that was created from the specified
          class data.`]
			]
		]],
		[/* method */ 'getResources(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Finds all the resources with the given name. A resource is some data
 (images, audio, text, etc) that can be accessed by class code in a way
 that is independent of the location of the code.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The name of a resource is a `],
					[/* inline code block */ 'i', `/`],
					[/* text */ 't', `-separated path name that
 identifies the resource. `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Resources in named modules are subject to the encapsulation rules
 specified by `],
					[/* reference */ 'r', `.Module#getResourceAsStream(java.lang.String)`],
					[/* text */ 't', `.
 Additionally, and except for the special case where the resource has a
 name ending with "`],
					[/* inline code block */ 'i', `.class`],
					[/* text */ 't', `", this method will only find resources in
 packages of named modules when the package is `],
					[/* reference */ 'r', `.Module#isOpen(java.lang.String)`],
					[/* text */ 't', ` unconditionally (even if the caller of this method is in the
 same module as the resource). `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The resource name`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If I/O errors occur`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An enumeration of `],
				[/* reference */ 'r', `java.net.URL`],
				[/* text */ 't', ` objects for the
          resource. If no resources could be found, the enumeration will
          be empty. Resources for which a `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', ` cannot be
          constructed, are in a package that is not opened
          unconditionally, or access to the resource is denied by the
          security manager, are not returned in the enumeration.`]
			]
		]],
		[/* method */ 'findResources(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns an enumeration of `],
				[/* reference */ 'r', `java.net.URL`],
				[/* text */ 't', ` objects
 representing all the resources with the given name. Class loader
 implementations should override this method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` For resources in named modules then the method must implement the
 rules for encapsulation specified in the `],
					[/* inline code block */ 'i', `Module`],
					[/* reference */ 'r', `.Module#getResourceAsStream(java.lang.String)`],
					[/* text */ 't', ` method. Additionally,
 it must not find non-"`],
					[/* inline code block */ 'i', `.class`],
					[/* text */ 't', `" resources in packages of named
 modules unless the package is `],
					[/* reference */ 'r', `.Module#isOpen(java.lang.String)`],
					[/* text */ 't', `
 unconditionally. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The resource name`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If I/O errors occur`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An enumeration of `],
				[/* reference */ 'r', `java.net.URL`],
				[/* text */ 't', ` objects for
          the resource. If no resources could  be found, the enumeration
          will be empty. Resources for which a `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', ` cannot be
          constructed, are in a package that is not opened unconditionally,
          or access to the resource is denied by the security manager,
          are not returned in the enumeration.`]
			]
		]],
		[/* method */ 'getDefinedPackage(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Package`],
				[/* text */ 't', ` of the given `],
				[/* text */ 't', `name`],
				[/* text */ 't', ` that
 has been defined by this class loader.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The `],
					[/* text */ 't', `package name`]
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
				[/* text */ 't', ` of the given name that has been defined
         by this class loader, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if not found`]
			]
		]],
		[/* method */ 'findLibrary(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the absolute path name of a native library.  The VM invokes this
 method to locate the native libraries that belong to classes loaded with
 this class loader. If this method returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `, the VM
 searches the library along the path specified as the
 "`],
				[/* inline code block */ 'i', `java.library.path`],
				[/* text */ 't', `" property.`]
			],
			[/* parameters */
				[/* parameter */ 'libname', [/* parameter description */
					[/* text */ 't', `The library name`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The absolute path of the native library`]
			]
		]],
		[/* method */ 'findSystemClass(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Finds a class with the specified `],
				[/* text */ 't', `binary name`],
				[/* text */ 't', `,
 loading it if necessary.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method loads the class through the system class loader (see
 `],
					[/* reference */ 'r', `#getSystemClassLoader()`, `getSystemClassLoader()`],
					[/* text */ 't', `).  The `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object returned
 might have more than one `],
					[/* inline code block */ 'i', `ClassLoader`],
					[/* text */ 't', ` associated with it.
 Subclasses of `],
					[/* inline code block */ 'i', `ClassLoader`],
					[/* text */ 't', ` need not usually invoke this method,
 because most class loaders need to override just `],
					[/* reference */ 'r', `#findClass(java.lang.String)`, `findClass(String)`],
					[/* text */ 't', `.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The `],
					[/* text */ 't', `binary name`],
					[/* text */ 't', ` of the class`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ClassNotFoundException', [/* throw description */
					[/* text */ 't', `If the class could not be found`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object for the specified `],
				[/* inline code block */ 'i', `name`]
			]
		]],
		[/* method */ 'resources(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a stream whose elements are the URLs of all the resources with
 the given name. A resource is some data (images, audio, text, etc) that
 can be accessed by class code in a way that is independent of the
 location of the code.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The name of a resource is a `],
					[/* inline code block */ 'i', `/`],
					[/* text */ 't', `-separated path name that
 identifies the resource.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The resources will be located when the returned stream is evaluated.
 If the evaluation results in an `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', ` then the I/O
 exception is wrapped in an `],
					[/* reference */ 'r', `java.io.UncheckedIOException`],
					[/* text */ 't', ` that is then
 thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Resources in named modules are subject to the encapsulation rules
 specified by `],
					[/* reference */ 'r', `.Module#getResourceAsStream(java.lang.String)`],
					[/* text */ 't', `.
 Additionally, and except for the special case where the resource has a
 name ending with "`],
					[/* inline code block */ 'i', `.class`],
					[/* text */ 't', `", this method will only find resources in
 packages of named modules when the package is `],
					[/* reference */ 'r', `.Module#isOpen(java.lang.String)`],
					[/* text */ 't', ` unconditionally (even if the caller of this method is in the
 same module as the resource). `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The resource name`]
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
				[/* text */ 't', `A stream of resource `],
				[/* reference */ 'r', `java.net.URL`],
				[/* text */ 't', ` objects. If no
          resources could  be found, the stream will be empty. Resources
          for which a `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', ` cannot be constructed, are in a package
          that is not opened unconditionally, or access to the resource
          is denied by the security manager, will not be in the stream.`]
			]
		]],
		[/* method */ 'isRegisteredAsParallelCapable()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this class loader is registered as
 `],
				[/* reference */ 'r', `#registerAsParallelCapable()`, `parallel capable`],
				[/* text */ 't', `, otherwise
 `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this class loader is parallel capable,
          otherwise `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getSystemResources(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Finds all resources of the specified name from the search path used to
 load classes.  The resources thus found are returned as an
 `],
				[/* reference */ 'r', `java.util.Enumeration`],
				[/* text */ 't', ` of `],
				[/* reference */ 'r', `java.net.URL`],
				[/* text */ 't', ` objects.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The search order is described in the documentation for `],
					[/* reference */ 'r', `#getSystemResource(java.lang.String)`, `getSystemResource(String)`],
					[/* text */ 't', `.  `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Resources in named modules are subject to the encapsulation rules
 specified by `],
					[/* reference */ 'r', `.Module#getResourceAsStream(java.lang.String)`],
					[/* text */ 't', `.
 Additionally, and except for the special case where the resource has a
 name ending with "`],
					[/* inline code block */ 'i', `.class`],
					[/* text */ 't', `", this method will only find resources in
 packages of named modules when the package is `],
					[/* reference */ 'r', `.Module#isOpen(java.lang.String)`],
					[/* text */ 't', ` unconditionally. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The resource name`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If I/O errors occur`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An enumeration of `],
				[/* reference */ 'r', `java.net.URL`],
				[/* text */ 't', ` objects for
          the resource. If no resources could  be found, the enumeration
          will be empty. Resources for which a `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', ` cannot be
          constructed, are in a package that is not opened unconditionally,
          or access to the resource is denied by the security manager,
          are not returned in the enumeration.`]
			]
		]],
		[/* method */ 'getParent()', [
			[/* method description */
				[/* text */ 't', `Returns the parent class loader for delegation. Some implementations may
 use `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` to represent the bootstrap class loader. This method
 will return `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` in such implementations if this class loader's
 parent is the bootstrap class loader.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present, and the caller's class loader
          is not `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` and is not an ancestor of this class loader,
          and the caller does not have the
          `],
					[/* reference */ 'r', `java.lang.RuntimePermission`],
					[/* inline code block */ 'i', `("getClassLoader")`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The parent `],
				[/* inline code block */ 'i', `ClassLoader`]
			]
		]],
		[/* method */ 'getUnnamedModule()', [
			[/* method description */
				[/* text */ 't', `Returns the unnamed `],
				[/* inline code block */ 'i', `Module`],
				[/* text */ 't', ` for this class loader.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The unnamed Module for this class loader`]
			]
		]],
		[/* method */ 'getDefinedPackages()', [
			[/* method description */
				[/* text */ 't', `Returns all of the `],
				[/* inline code block */ 'i', `Package`],
				[/* text */ 't', `s that have been defined by
 this class loader.  The returned array has no duplicated `],
				[/* inline code block */ 'i', `Package`],
				[/* text */ 't', `s
 of the same name.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The array of `],
				[/* inline code block */ 'i', `Package`],
				[/* text */ 't', ` objects that have been defined by
         this class loader; or an zero length array if no package has been
         defined by this class loader.`]
			]
		]],
		[/* method */ 'getPackages()', [
			[/* method description */
				[/* text */ 't', `Returns all of the `],
				[/* inline code block */ 'i', `Package`],
				[/* text */ 't', `s that have been defined by
 this class loader and its ancestors.  The returned array may contain
 more than one `],
				[/* inline code block */ 'i', `Package`],
				[/* text */ 't', ` object of the same package name, each
 defined by a different class loader in the class loader hierarchy.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The array of `],
				[/* inline code block */ 'i', `Package`],
				[/* text */ 't', ` objects that have been defined by
          this class loader and its ancestors`]
			]
		]],
		[/* method */ 'setDefaultAssertionStatus(boolean)', [
			[/* method description */
				[/* text */ 't', `Sets the default assertion status for this class loader.  This setting
 determines whether classes loaded by this class loader and initialized
 in the future will have assertions enabled or disabled by default.
 This setting may be overridden on a per-package or per-class basis by
 invoking `],
				[/* reference */ 'r', `#setPackageAssertionStatus(java.lang.String,boolean)`, `setPackageAssertionStatus(String, boolean)`],
				[/* text */ 't', ` or `],
				[/* reference */ 'r', `#setClassAssertionStatus(java.lang.String,boolean)`, `setClassAssertionStatus(String, boolean)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'enabled', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if classes loaded by this class loader will
         henceforth have assertions enabled by default, `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `
         if they will have assertions disabled by default.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setPackageAssertionStatus(java.lang.String,boolean)', [
			[/* method description */
				[/* text */ 't', `Sets the package default assertion status for the named package.  The
 package default assertion status determines the assertion status for
 classes initialized in the future that belong to the named package or
 any of its "subpackages".

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` A subpackage of a package named p is any package whose name begins
 with "`],
					[/* inline code block */ 'i', `p.`],
					[/* text */ 't', `".  For example, `],
					[/* inline code block */ 'i', `javax.swing.text`],
					[/* text */ 't', ` is a
 subpackage of `],
					[/* inline code block */ 'i', `javax.swing`],
					[/* text */ 't', `, and both `],
					[/* inline code block */ 'i', `java.util`],
					[/* text */ 't', ` and
 `],
					[/* inline code block */ 'i', `java.lang.reflect`],
					[/* text */ 't', ` are subpackages of `],
					[/* inline code block */ 'i', `java`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` In the event that multiple package defaults apply to a given class,
 the package default pertaining to the most specific package takes
 precedence over the others.  For example, if `],
					[/* inline code block */ 'i', `javax.lang`],
					[/* text */ 't', ` and
 `],
					[/* inline code block */ 'i', `javax.lang.reflect`],
					[/* text */ 't', ` both have package defaults associated with
 them, the latter package default applies to classes in
 `],
					[/* inline code block */ 'i', `javax.lang.reflect`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Package defaults take precedence over the class loader's default
 assertion status, and may be overridden on a per-class basis by invoking
 `],
					[/* reference */ 'r', `#setClassAssertionStatus(java.lang.String,boolean)`, `setClassAssertionStatus(String, boolean)`],
					[/* text */ 't', `.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'packageName', [/* parameter description */
					[/* text */ 't', `The name of the package whose package default assertion status
         is to be set. A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value indicates the unnamed
         package that is "current"
         (see section `],
					[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-7.html#jls-7.4.2`, `7.4.2`],
					[/* text */ 't', ` of
         `],
					[/* text */ 't', `The Java Language Specification`],
					[/* text */ 't', `.)`]
				]],
				[/* parameter */ 'enabled', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if classes loaded by this classloader and
         belonging to the named package or any of its subpackages will
         have assertions enabled by default, `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` if they will
         have assertions disabled by default.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setClassAssertionStatus(java.lang.String,boolean)', [
			[/* method description */
				[/* text */ 't', `Sets the desired assertion status for the named top-level class in this
 class loader and any nested classes contained therein.  This setting
 takes precedence over the class loader's default assertion status, and
 over any applicable per-package default.  This method has no effect if
 the named class has already been initialized.  (Once a class is
 initialized, its assertion status cannot change.)

 `],
				[/* block */ 'b', ` If the named class is not a top-level class, this invocation will
 have no effect on the actual assertion status of any class. `]
			],
			[/* parameters */
				[/* parameter */ 'className', [/* parameter description */
					[/* text */ 't', `The fully qualified class name of the top-level class whose
         assertion status is to be set.`]
				]],
				[/* parameter */ 'enabled', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if the named class is to have assertions
         enabled when (and if) it is initialized, `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` if the
         class is to have assertions disabled.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'clearAssertionStatus()', [
			[/* method description */
				[/* text */ 't', `Sets the default assertion status for this class loader to
 `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` and discards any package defaults or class assertion
 status settings associated with the class loader.  This method is
 provided so that class loaders can be made to ignore any command line or
 persistent assertion status settings and "start with a clean slate."`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
