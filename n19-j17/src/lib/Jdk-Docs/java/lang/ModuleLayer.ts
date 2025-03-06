import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.ModuleLayer', [
	[/* class description */
		[/* text */ 't', `A layer of modules in the Java virtual machine.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A layer is created from a graph of modules in a `],
			[/* reference */ 'r', `java.lang.module.Configuration`, `Configuration`],
			[/* text */ 't', `
 and a function that maps each module to a `],
			[/* reference */ 'r', `java.lang.ClassLoader`, `ClassLoader`],
			[/* text */ 't', `.
 Creating a layer informs the Java virtual machine about the classes that
 may be loaded from the modules so that the Java virtual machine knows which
 module that each class is a member of. `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Creating a layer creates a `],
			[/* reference */ 'r', `java.lang.Module`, `Module`],
			[/* text */ 't', ` object for each `],
			[/* reference */ 'r', `java.lang.module.ResolvedModule`, `ResolvedModule`],
			[/* text */ 't', ` in the configuration. For each resolved module that is
 `],
			[/* reference */ 'r', `java.lang.module.ResolvedModule#reads()`, `read`],
			[/* text */ 't', `, the `],
			[/* inline code block */ 'i', `Module`],
			[/* reference */ 'r', `java.lang.Module#canRead(java.lang.Module)`, `reads`],
			[/* text */ 't', ` the corresponding run-time `],
			[/* inline code block */ 'i', `Module`],
			[/* text */ 't', `, which may
 be in the same layer or a `],
			[/* reference */ 'r', `#parents()`, `parent`],
			[/* text */ 't', ` layer. `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* reference */ 'r', `#defineModulesWithOneLoader(java.lang.module.Configuration,java.lang.ClassLoader)`, `defineModulesWithOneLoader`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `#defineModulesWithManyLoaders(java.lang.module.Configuration,java.lang.ClassLoader)`, `defineModulesWithManyLoaders`],
			[/* text */ 't', ` methods
 provide convenient ways to create a module layer where all modules are
 mapped to a single class loader or where each module is mapped to its own
 class loader. The `],
			[/* reference */ 'r', `#defineModules(java.lang.module.Configuration,java.util.function.Function)`, `defineModules`],
			[/* text */ 't', ` method is for more
 advanced cases where modules are mapped to custom class loaders by means of
 a function specified to the method. Each of these methods has an instance
 and static variant. The instance methods create a layer with the receiver
 as the parent layer. The static methods are for more advanced cases where
 there can be more than one parent layer or where a `],
			[/* reference */ 'r', `java.lang.ModuleLayer.Controller`, `Controller`],
			[/* text */ 't', ` is needed to control modules in the layer
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A Java virtual machine has at least one non-empty layer, the `],
			[/* reference */ 'r', `#boot()`, `boot`],
			[/* text */ 't', ` layer, that is created when the Java virtual machine is
 started. The boot layer contains module `],
			[/* inline code block */ 'i', `java.base`],
			[/* text */ 't', ` and is the only
 layer in the Java virtual machine with a module named "`],
			[/* inline code block */ 'i', `java.base`],
			[/* text */ 't', `".
 The modules in the boot layer are mapped to the bootstrap class loader and
 other class loaders that are `],
			[/* reference */ 'r', `java.lang.ClassLoader#builtinLoaders`, `built-in`],
			[/* text */ 't', ` into the Java virtual machine. The boot layer will often be
 the `],
			[/* reference */ 'r', `#parents()`, `parent`],
			[/* text */ 't', ` when creating additional layers. `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Each `],
			[/* inline code block */ 'i', `Module`],
			[/* text */ 't', ` in a layer is created so that it `],
			[/* reference */ 'r', `java.lang.Module#isExported(java.lang.String)`, `exports`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `java.lang.Module#isOpen(java.lang.String)`, `opens`],
			[/* text */ 't', `
 the packages described by its `],
			[/* reference */ 'r', `java.lang.module.ModuleDescriptor`, `ModuleDescriptor`],
			[/* text */ 't', `. Qualified exports
 (where a package is exported to a set of target modules rather than all
 modules) are reified when creating the layer as follows: `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', ` If module `],
				[/* inline code block */ 'i', `X`],
				[/* text */ 't', ` exports a package to `],
				[/* inline code block */ 'i', `Y`],
				[/* text */ 't', `, and if the
     runtime `],
				[/* inline code block */ 'i', `Module`],
				[/* inline code block */ 'i', `X`],
				[/* text */ 't', ` reads `],
				[/* inline code block */ 'i', `Module`],
				[/* inline code block */ 'i', `Y`],
				[/* text */ 't', `, then
     the package is exported to `],
				[/* inline code block */ 'i', `Module`],
				[/* inline code block */ 'i', `Y`],
				[/* text */ 't', ` (which may be in
     the same layer as `],
				[/* inline code block */ 'i', `X`],
				[/* text */ 't', ` or a parent layer). `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` If module `],
				[/* inline code block */ 'i', `X`],
				[/* text */ 't', ` exports a package to `],
				[/* inline code block */ 'i', `Y`],
				[/* text */ 't', `, and if the
     runtime `],
				[/* inline code block */ 'i', `Module`],
				[/* inline code block */ 'i', `X`],
				[/* text */ 't', ` does not read `],
				[/* inline code block */ 'i', `Y`],
				[/* text */ 't', ` then target
     `],
				[/* inline code block */ 'i', `Y`],
				[/* text */ 't', ` is located as if by invoking `],
				[/* reference */ 'r', `#findModule(java.lang.String)`, `findModule`],
				[/* text */ 't', ` to find the module in the layer or its parent layers. If
     `],
				[/* inline code block */ 'i', `Y`],
				[/* text */ 't', ` is found then the package is exported to the instance of
     `],
				[/* inline code block */ 'i', `Y`],
				[/* text */ 't', ` that was found. If `],
				[/* inline code block */ 'i', `Y`],
				[/* text */ 't', ` is not found then the qualified
     export is ignored. `]
			]]
		]],
		[/* block */ 'b', ` Qualified opens are handled in same way as qualified exports. `],
		[/* block */ 'b', [
			[/* text */ 't', ` As when creating a `],
			[/* inline code block */ 'i', `Configuration`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `java.lang.module.ModuleDescriptor#isAutomatic()`, `automatic`],
			[/* text */ 't', ` modules receive special
 treatment when creating a layer. An automatic module is created in the
 Java virtual machine as a `],
			[/* inline code block */ 'i', `Module`],
			[/* text */ 't', ` that reads every unnamed `],
			[/* inline code block */ 'i', `Module`],
			[/* text */ 't', ` in the Java virtual machine. `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Unless otherwise specified, passing a `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` argument to a method
 in this class causes a `],
			[/* reference */ 'r', `java.lang.NullPointerException`, `NullPointerException`],
			[/* text */ 't', ` to
 be thrown. `]
		]],
		[/* block */ 'b', ` Example usage: `],
		[/* block */ 'b', [
			[/* text */ 't', ` This example creates a configuration by resolving a module named
 "`],
			[/* inline code block */ 'i', `myapp`],
			[/* text */ 't', `" with the configuration for the boot layer as the parent. It
 then creates a new layer with the modules in this configuration. All modules
 are defined to the same class loader. `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `ModuleFinder finder = ModuleFinder.of(dir1, dir2, dir3);

     ModuleLayer parent = ModuleLayer.boot();

     Configuration cf = parent.configuration().resolve(finder, ModuleFinder.of(), Set.of("myapp"));

     ClassLoader scl = ClassLoader.getSystemClassLoader();

     ModuleLayer layer = parent.defineModulesWithOneLoader(cf, scl);

     Class<?> c = layer.findLoader("myapp").loadClass("app.Main");`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'findLoader(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `ClassLoader`],
				[/* text */ 't', ` for the module with the given name. If
 a module of the given name is not in this layer then the `],
				[/* reference */ 'r', `#parents()`, `parent`],
				[/* text */ 't', ` layers are searched in the manner specified by `],
				[/* reference */ 'r', `#findModule(java.lang.String)`, `findModule`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If there is a security manager then its `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', `
 method is called with a `],
					[/* inline code block */ 'i', `RuntimePermission("getClassLoader")`],
					[/* text */ 't', `
 permission to check that the caller is allowed to get access to the
 class loader. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The name of the module to find`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if a module of the given name is not
         defined in this layer or any parent of this layer`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if denied by the security manager`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The ClassLoader that the module is defined to`]
			]
		]],
		[/* method */ 'configuration()', [
			[/* method description */
				[/* text */ 't', `Returns the configuration for this layer.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The configuration for this layer`]
			]
		]],
		[/* method */ 'defineModules(java.lang.module.Configuration,java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Creates a new module layer, with this layer as its parent, by defining the
 modules in the given `],
				[/* inline code block */ 'i', `Configuration`],
				[/* text */ 't', ` to the Java virtual machine.
 Each module is mapped, by name, to its class loader by means of the
 given function. This method works exactly as specified by the static
 `],
				[/* reference */ 'r', `#defineModules(java.lang.module.Configuration,java.util.List,java.util.function.Function)`, `defineModules`],
				[/* text */ 't', `
 method when invoked with this layer as the parent. In other words, if
 this layer is `],
				[/* inline code block */ 'i', `thisLayer`],
				[/* text */ 't', ` then this method is equivalent to
 invoking:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `ModuleLayer.defineModules(cf, List.of(thisLayer), clf).layer();`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'cf', [/* parameter description */
					[/* text */ 't', `The configuration for the layer`]
				]],
				[/* parameter */ 'clf', [/* parameter description */
					[/* text */ 't', `The function to map a module name to a class loader`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the given configuration has more than one parent or the parent
         of the configuration is not the configuration for this layer`]
				]],
				[/* throw */ 'java.lang.LayerInstantiationException', [/* throw description */
					[/* text */ 't', `If the layer cannot be created for any of the reasons specified
         by the static `],
					[/* inline code block */ 'i', `defineModules`],
					[/* text */ 't', ` method`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `RuntimePermission("getClassLoader")`],
					[/* text */ 't', ` is denied by
         the security manager`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The newly created layer`]
			]
		]],
		[/* method */ 'defineModulesWithManyLoaders(java.lang.module.Configuration,java.lang.ClassLoader)', [
			[/* method description */
				[/* text */ 't', `Creates a new module layer, with this layer as its parent, by defining the
 modules in the given `],
				[/* inline code block */ 'i', `Configuration`],
				[/* text */ 't', ` to the Java virtual machine.
 Each module is defined to its own `],
				[/* reference */ 'r', `java.lang.ClassLoader`, `ClassLoader`],
				[/* text */ 't', ` created by this
 method. The `],
				[/* reference */ 'r', `java.lang.ClassLoader#getParent()`, `parent`],
				[/* text */ 't', ` of each class loader
 is the given parent class loader. This method works exactly as specified
 by the static `],
				[/* reference */ 'r', `#defineModulesWithManyLoaders(java.lang.module.Configuration,java.util.List,java.lang.ClassLoader)`, `defineModulesWithManyLoaders`],
				[/* text */ 't', ` method when invoked with this layer as the
 parent. In other words, if this layer is `],
				[/* inline code block */ 'i', `thisLayer`],
				[/* text */ 't', ` then this
 method is equivalent to invoking:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `ModuleLayer.defineModulesWithManyLoaders(cf, List.of(thisLayer), parentLoader).layer();`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'cf', [/* parameter description */
					[/* text */ 't', `The configuration for the layer`]
				]],
				[/* parameter */ 'parentLoader', [/* parameter description */
					[/* text */ 't', `The parent class loader for each of the class loaders created by
         this method; may be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` for the bootstrap class loader`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the given configuration has more than one parent or the parent
         of the configuration is not the configuration for this layer`]
				]],
				[/* throw */ 'java.lang.LayerInstantiationException', [/* throw description */
					[/* text */ 't', `If the layer cannot be created for any of the reasons specified
         by the static `],
					[/* inline code block */ 'i', `defineModulesWithManyLoaders`],
					[/* text */ 't', ` method`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `RuntimePermission("createClassLoader")`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `RuntimePermission("getClassLoader")`],
					[/* text */ 't', ` is denied by
         the security manager`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The newly created layer`]
			]
		]],
		[/* method */ 'defineModulesWithOneLoader(java.lang.module.Configuration,java.lang.ClassLoader)', [
			[/* method description */
				[/* text */ 't', `Creates a new module layer, with this layer as its parent, by defining the
 modules in the given `],
				[/* inline code block */ 'i', `Configuration`],
				[/* text */ 't', ` to the Java virtual machine.
 This method creates one class loader and defines all modules to that
 class loader. The `],
				[/* reference */ 'r', `java.lang.ClassLoader#getParent()`, `parent`],
				[/* text */ 't', ` of each class
 loader is the given parent class loader. This method works exactly as
 specified by the static `],
				[/* reference */ 'r', `#defineModulesWithOneLoader(java.lang.module.Configuration,java.util.List,java.lang.ClassLoader)`, `defineModulesWithOneLoader`],
				[/* text */ 't', ` method when invoked with this layer as the
 parent. In other words, if this layer is `],
				[/* inline code block */ 'i', `thisLayer`],
				[/* text */ 't', ` then this
 method is equivalent to invoking:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `ModuleLayer.defineModulesWithOneLoader(cf, List.of(thisLayer), parentLoader).layer();`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'cf', [/* parameter description */
					[/* text */ 't', `The configuration for the layer`]
				]],
				[/* parameter */ 'parentLoader', [/* parameter description */
					[/* text */ 't', `The parent class loader for the class loader created by this
         method; may be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` for the bootstrap class loader`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the given configuration has more than one parent or the parent
         of the configuration is not the configuration for this layer`]
				]],
				[/* throw */ 'java.lang.LayerInstantiationException', [/* throw description */
					[/* text */ 't', `If the layer cannot be created for any of the reasons specified
         by the static `],
					[/* inline code block */ 'i', `defineModulesWithOneLoader`],
					[/* text */ 't', ` method`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `RuntimePermission("createClassLoader")`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `RuntimePermission("getClassLoader")`],
					[/* text */ 't', ` is denied by
         the security manager`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The newly created layer`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this module layer.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A possibly empty string describing this module layer`]
			]
		]],
		[/* method */ 'parents()', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable list of this layer's parents, in search
 order. If this is the `],
				[/* reference */ 'r', `#empty()`, `empty layer`],
				[/* text */ 't', ` then an
 empty list is returned.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A possibly-empty unmodifiable list of this layer's parents`]
			]
		]],
		[/* method */ 'findModule(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the module with the given name in this layer, or if not in this
 layer, the `],
				[/* reference */ 'r', `#parents()`, `parent`],
				[/* text */ 't', ` layers. Finding a module in
 parent layers is equivalent to invoking `],
				[/* inline code block */ 'i', `findModule`],
				[/* text */ 't', ` on each
 parent, in search order, until the module is found or all parents have
 been searched. In a `],
				[/* text */ 't', `tree of layers`],
				[/* text */ 't', `  then this is equivalent to
 a depth-first search.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The name of the module to find`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The module with the given name or an empty `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', `
         if there isn't a module with this name in this layer or any
         parent layer`]
			]
		]],
		[/* method */ 'modules()', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable set of the modules in this layer.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A possibly-empty unmodifiable set of the modules in this layer`]
			]
		]],
		[/* method */ 'boot()', [
			[/* method description */
				[/* text */ 't', `Returns the boot layer. The boot layer contains at least one module,
 `],
				[/* inline code block */ 'i', `java.base`],
				[/* text */ 't', `. Its parent is the `],
				[/* reference */ 'r', `#empty()`, `empty`],
				[/* text */ 't', ` layer.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The boot layer`]
			]
		]],
		[/* method */ 'empty()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* text */ 't', `empty`],
				[/* text */ 't', ` layer. There are no modules in the empty
 layer. It has no parents.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The empty layer`]
			]
		]],
		[/* method */ 'defineModules(java.lang.module.Configuration,java.util.List,java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Creates a new module layer by defining the modules in the given `],
				[/* inline code block */ 'i', `Configuration`],
				[/* text */ 't', ` to the Java virtual machine. The given function maps each
 module in the configuration, by name, to a class loader. Creating the
 layer informs the Java virtual machine about the classes that may be
 loaded so that the Java virtual machine knows which module that each
 class is a member of.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The class loader delegation implemented by the class loaders must
 respect module readability. The class loaders should be
 `],
					[/* reference */ 'r', `java.lang.ClassLoader#registerAsParallelCapable()`, `parallel-capable`],
					[/* text */ 't', ` so as to
 avoid deadlocks during class loading. In addition, the entity creating
 a new layer with this method should arrange that the class loaders be
 ready to load from these modules before there are any attempts to load
 classes or resources. `]
				]],
				[/* block */ 'b', ` Creating a layer can fail for the following reasons: `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', ` Two or more modules with the same package are mapped to the
     same class loader. `]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', ` A module is mapped to a class loader that already has a
     module of the same name defined to it. `]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', ` A module is mapped to a class loader that has already
     defined types in any of the packages in the module. `]
					]]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` In addition, a layer cannot be created if the configuration contains
 a module named "`],
					[/* inline code block */ 'i', `java.base`],
					[/* text */ 't', `", a configuration contains a module
 with a package named "`],
					[/* inline code block */ 'i', `java`],
					[/* text */ 't', `" or a package name starting with
 "`],
					[/* inline code block */ 'i', `java.`],
					[/* text */ 't', `", or the function to map a module name to a class loader
 returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or the `],
					[/* reference */ 'r', `java.lang.ClassLoader#getPlatformClassLoader()`, `platform class loader`],
					[/* text */ 't', `. `]
				]],
				[/* block */ 'b', ` If the function to map a module name to class loader throws an error
 or runtime exception then it is propagated to the caller of this method.
 `]
			],
			[/* parameters */
				[/* parameter */ 'cf', [/* parameter description */
					[/* text */ 't', `The configuration for the layer`]
				]],
				[/* parameter */ 'parentLayers', [/* parameter description */
					[/* text */ 't', `The list of parent layers in search order`]
				]],
				[/* parameter */ 'clf', [/* parameter description */
					[/* text */ 't', `The function to map a module name to a class loader`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the parent(s) of the given configuration do not match the
         configuration of the parent layers, including order`]
				]],
				[/* throw */ 'java.lang.LayerInstantiationException', [/* throw description */
					[/* text */ 't', `If creating the layer fails for any of the reasons listed above`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `RuntimePermission("getClassLoader")`],
					[/* text */ 't', ` is denied by
         the security manager`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A controller that controls the newly created layer`]
			]
		]],
		[/* method */ 'defineModulesWithManyLoaders(java.lang.module.Configuration,java.util.List,java.lang.ClassLoader)', [
			[/* method description */
				[/* text */ 't', `Creates a new module layer by defining the modules in the given `],
				[/* inline code block */ 'i', `Configuration`],
				[/* text */ 't', ` to the Java virtual machine. Each module is defined to
 its own `],
				[/* reference */ 'r', `java.lang.ClassLoader`, `ClassLoader`],
				[/* text */ 't', ` created by this method. The `],
				[/* reference */ 'r', `java.lang.ClassLoader#getParent()`, `parent`],
				[/* text */ 't', ` of each class loader is the given parent
 class loader.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The class loaders created by this method implement `],
					[/* text */ 't', `direct
 delegation`],
					[/* text */ 't', ` when loading classes from modules. If the `],
					[/* reference */ 'r', `java.lang.ClassLoader#loadClass(java.lang.String,boolean)`, `loadClass`],
					[/* text */ 't', ` method is invoked to
 load a class then it uses the package name of the class to map it to a
 module. The package may be in the module defined to the class loader.
 The package may be exported by another module in this layer to the
 module defined to the class loader. It may be in a package exported by a
 module in a parent layer. The class loader delegates to the class loader
 of the module, throwing `],
					[/* inline code block */ 'i', `ClassNotFoundException`],
					[/* text */ 't', ` if not found by
 that class loader. When `],
					[/* inline code block */ 'i', `loadClass`],
					[/* text */ 't', ` is invoked to load a class
 that does not map to a module then it delegates to the parent class
 loader. `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The class loaders created by this method locate resources
 (`],
					[/* reference */ 'r', `java.lang.ClassLoader#getResource(java.lang.String)`, `getResource`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `java.lang.ClassLoader#getResources(java.lang.String)`, `getResources`],
					[/* text */ 't', `, and other resource
 methods) in the module defined to the class loader before searching
 the parent class loader. `]
				]],
				[/* block */ 'b', ` If there is a security manager then the class loaders created by
 this method will load classes and resources with privileges that are
 restricted by the calling context of this method. `]
			],
			[/* parameters */
				[/* parameter */ 'cf', [/* parameter description */
					[/* text */ 't', `The configuration for the layer`]
				]],
				[/* parameter */ 'parentLayers', [/* parameter description */
					[/* text */ 't', `The list of parent layers in search order`]
				]],
				[/* parameter */ 'parentLoader', [/* parameter description */
					[/* text */ 't', `The parent class loader for each of the class loaders created by
         this method; may be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` for the bootstrap class loader`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the parent(s) of the given configuration do not match the
         configuration of the parent layers, including order`]
				]],
				[/* throw */ 'java.lang.LayerInstantiationException', [/* throw description */
					[/* text */ 't', `If the layer cannot be created because the configuration contains
         a module named "`],
					[/* inline code block */ 'i', `java.base`],
					[/* text */ 't', `" or a module contains a package
         named "`],
					[/* inline code block */ 'i', `java`],
					[/* text */ 't', `" or a package with a name starting with
         "`],
					[/* inline code block */ 'i', `java.`],
					[/* text */ 't', `"`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `RuntimePermission("createClassLoader")`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `RuntimePermission("getClassLoader")`],
					[/* text */ 't', ` is denied by
         the security manager`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A controller that controls the newly created layer`]
			]
		]],
		[/* method */ 'defineModulesWithOneLoader(java.lang.module.Configuration,java.util.List,java.lang.ClassLoader)', [
			[/* method description */
				[/* text */ 't', `Creates a new module layer by defining the modules in the given `],
				[/* inline code block */ 'i', `Configuration`],
				[/* text */ 't', ` to the Java virtual machine. This method creates one
 class loader and defines all modules to that class loader.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The class loader created by this method implements `],
					[/* text */ 't', `direct
 delegation`],
					[/* text */ 't', ` when loading classes from modules. If the `],
					[/* reference */ 'r', `java.lang.ClassLoader#loadClass(java.lang.String,boolean)`, `loadClass`],
					[/* text */ 't', ` method is invoked to
 load a class then it uses the package name of the class to map it to a
 module. This may be a module in this layer and hence defined to the same
 class loader. It may be a package in a module in a parent layer that is
 exported to one or more of the modules in this layer. The class
 loader delegates to the class loader of the module, throwing `],
					[/* inline code block */ 'i', `ClassNotFoundException`],
					[/* text */ 't', ` if not found by that class loader.
 When `],
					[/* inline code block */ 'i', `loadClass`],
					[/* text */ 't', ` is invoked to load classes that do not map to a
 module then it delegates to the parent class loader. `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The class loader created by this method locates resources
 (`],
					[/* reference */ 'r', `java.lang.ClassLoader#getResource(java.lang.String)`, `getResource`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `java.lang.ClassLoader#getResources(java.lang.String)`, `getResources`],
					[/* text */ 't', `, and other resource
 methods) in all modules in the layer before searching the parent class
 loader. `]
				]],
				[/* block */ 'b', ` Attempting to create a layer with all modules defined to the same
 class loader can fail for the following reasons:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', `Overlapping packages`]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', `Split delegation`]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` In addition, a layer cannot be created if the configuration contains
 a module named "`],
					[/* inline code block */ 'i', `java.base`],
					[/* text */ 't', `", or a module contains a package named
 "`],
					[/* inline code block */ 'i', `java`],
					[/* text */ 't', `" or a package with a name starting with "`],
					[/* inline code block */ 'i', `java.`],
					[/* text */ 't', `". `]
				]],
				[/* block */ 'b', ` If there is a security manager then the class loader created by
 this method will load classes and resources with privileges that are
 restricted by the calling context of this method. `]
			],
			[/* parameters */
				[/* parameter */ 'cf', [/* parameter description */
					[/* text */ 't', `The configuration for the layer`]
				]],
				[/* parameter */ 'parentLayers', [/* parameter description */
					[/* text */ 't', `The list of parent layers in search order`]
				]],
				[/* parameter */ 'parentLoader', [/* parameter description */
					[/* text */ 't', `The parent class loader for the class loader created by this
         method; may be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` for the bootstrap class loader`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the parent(s) of the given configuration do not match the
         configuration of the parent layers, including order`]
				]],
				[/* throw */ 'java.lang.LayerInstantiationException', [/* throw description */
					[/* text */ 't', `If all modules cannot be defined to the same class loader for any
         of the reasons listed above`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `RuntimePermission("createClassLoader")`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `RuntimePermission("getClassLoader")`],
					[/* text */ 't', ` is denied by
         the security manager`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A controller that controls the newly created layer`]
			]
		]]
	],
]);
