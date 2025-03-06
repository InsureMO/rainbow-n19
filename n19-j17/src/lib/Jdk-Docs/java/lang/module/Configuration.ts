import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.module.Configuration', [
	[/* class description */
		[/* text */ 't', `A configuration that is the result of `],
		[/* text */ 't', `resolution`],
		[/* text */ 't', ` or resolution with
 `],
		[/* reference */ 'r', `java.lang.module.Configuration#service-binding`, `service binding`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A configuration encapsulates the `],
			[/* text */ 't', `readability graph`],
			[/* text */ 't', ` that is the
 output of resolution. A readability graph is a directed graph whose vertices
 are of type `],
			[/* reference */ 'r', `java.lang.module.ResolvedModule`, `ResolvedModule`],
			[/* text */ 't', ` and the edges represent the readability
 amongst the modules. `],
			[/* inline code block */ 'i', `Configuration`],
			[/* text */ 't', ` defines the `],
			[/* reference */ 'r', `#modules()`, `modules()`],
			[/* text */ 't', ` method to get the set of resolved modules in the graph. `],
			[/* inline code block */ 'i', `ResolvedModule`],
			[/* text */ 't', ` defines the `],
			[/* reference */ 'r', `java.lang.module.ResolvedModule#reads()`, `reads()`],
			[/* text */ 't', ` method to
 get the set of modules that a resolved module reads. The modules that are
 read may be in the same configuration or may be in `],
			[/* reference */ 'r', `#parents()`, `parent`],
			[/* text */ 't', `
 configurations. `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Configuration defines the `],
			[/* reference */ 'r', `#resolve(java.lang.module.ModuleFinder,java.util.List,java.lang.module.ModuleFinder,java.util.Collection)`, `resolve`],
			[/* text */ 't', ` method to resolve a collection of root modules, and the `],
			[/* reference */ 'r', `#resolveAndBind(java.lang.module.ModuleFinder,java.util.List,java.lang.module.ModuleFinder,java.util.Collection)`, `resolveAndBind`],
			[/* text */ 't', `
 method to do resolution with service binding. There are instance and
 static variants of both methods. The instance methods create a configuration
 with the receiver as the parent configuration. The static methods are for
 more advanced cases where there can be more than one parent configuration. `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Each `],
			[/* reference */ 'r', `java.lang.ModuleLayer`, `layer`],
			[/* text */ 't', ` of modules in the Java virtual
 machine is created from a configuration. The configuration for the `],
			[/* reference */ 'r', `java.lang.ModuleLayer#boot()`, `boot`],
			[/* text */ 't', ` layer is obtained by invoking `],
			[/* inline code block */ 'i', `ModuleLayer.boot().configuration()`],
			[/* text */ 't', `. The configuration for the boot layer
 will often be the parent when creating new configurations. `]
		]],
		[/* block */ 'b', ` Example `],
		[/* block */ 'b', [
			[/* text */ 't', ` The following example uses the `],
			[/* reference */ 'r', `#resolve(java.lang.module.ModuleFinder,java.lang.module.ModuleFinder,java.util.Collection)`, `resolve`],
			[/* text */ 't', ` method to resolve a
 module named `],
			[/* text */ 't', `myapp`],
			[/* text */ 't', ` with the configuration for the boot layer as the
 parent configuration. It prints the name of each resolved module and the
 names of the modules that each module reads. `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `ModuleFinder finder = ModuleFinder.of(dir1, dir2, dir3);

    Configuration parent = ModuleLayer.boot().configuration();

    Configuration cf = parent.resolve(finder, ModuleFinder.of(), Set.of("myapp"));
    cf.modules().forEach(m -> {
        System.out.format("%s -> %s%n",
            m.name(),
            m.reads().stream()
                .map(ResolvedModule::name)
                .collect(Collectors.joining(", ")));
    });`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'resolve(java.lang.module.ModuleFinder,java.lang.module.ModuleFinder,java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Resolves a collection of root modules, with this configuration as its
 parent, to create a new configuration. This method works exactly as
 specified by the static `],
				[/* reference */ 'r', `#resolve(java.lang.module.ModuleFinder,java.util.List,java.lang.module.ModuleFinder,java.util.Collection)`, `resolve`],
				[/* text */ 't', `
 method when invoked with this configuration as the parent. In other words,
 if this configuration is `],
				[/* inline code block */ 'i', `cf`],
				[/* text */ 't', ` then this method is equivalent to
 invoking:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Configuration.resolve(before, List.of(cf), after, roots);`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'before', [/* parameter description */
					[/* text */ 't', `The `],
					[/* text */ 't', `before`],
					[/* text */ 't', ` module finder to find modules`]
				]],
				[/* parameter */ 'after', [/* parameter description */
					[/* text */ 't', `The `],
					[/* text */ 't', `after`],
					[/* text */ 't', ` module finder to locate modules when not
         located by the `],
					[/* inline code block */ 'i', `before`],
					[/* text */ 't', ` module finder or in parent
         configurations`]
				]],
				[/* parameter */ 'roots', [/* parameter description */
					[/* text */ 't', `The possibly-empty collection of module names of the modules
         to resolve`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.module.FindException', [/* throw description */
					[/* text */ 't', `If resolution fails for any of the observability-related reasons
         specified by the static `],
					[/* inline code block */ 'i', `resolve`],
					[/* text */ 't', ` method`]
				]],
				[/* throw */ 'java.lang.module.ResolutionException', [/* throw description */
					[/* text */ 't', `If resolution fails any of the consistency checks specified by
         the static `],
					[/* inline code block */ 'i', `resolve`],
					[/* text */ 't', ` method`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If locating a module is denied by the security manager`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The configuration that is the result of resolving the given
         root modules`]
			]
		]],
		[/* method */ 'resolveAndBind(java.lang.module.ModuleFinder,java.lang.module.ModuleFinder,java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Resolves a collection of root modules, with service binding, and with
 this configuration as its parent, to create a new configuration.
 This method works exactly as specified by the static `],
				[/* reference */ 'r', `#resolveAndBind(java.lang.module.ModuleFinder,java.util.List,java.lang.module.ModuleFinder,java.util.Collection)`, `resolveAndBind`],
				[/* text */ 't', ` method when invoked with this configuration
 as the parent. In other words, if this configuration is `],
				[/* inline code block */ 'i', `cf`],
				[/* text */ 't', ` then
 this method is equivalent to invoking:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Configuration.resolveAndBind(before, List.of(cf), after, roots);`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'before', [/* parameter description */
					[/* text */ 't', `The `],
					[/* text */ 't', `before`],
					[/* text */ 't', ` module finder to find modules`]
				]],
				[/* parameter */ 'after', [/* parameter description */
					[/* text */ 't', `The `],
					[/* text */ 't', `after`],
					[/* text */ 't', ` module finder to locate modules when not
         located by the `],
					[/* inline code block */ 'i', `before`],
					[/* text */ 't', ` module finder or in parent
         configurations`]
				]],
				[/* parameter */ 'roots', [/* parameter description */
					[/* text */ 't', `The possibly-empty collection of module names of the modules
         to resolve`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.module.FindException', [/* throw description */
					[/* text */ 't', `If resolution fails for any of the observability-related reasons
         specified by the static `],
					[/* inline code block */ 'i', `resolve`],
					[/* text */ 't', ` method`]
				]],
				[/* throw */ 'java.lang.module.ResolutionException', [/* throw description */
					[/* text */ 't', `If resolution fails any of the consistency checks specified by
         the static `],
					[/* inline code block */ 'i', `resolve`],
					[/* text */ 't', ` method`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If locating a module is denied by the security manager`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The configuration that is the result of resolving, with service
         binding, the given root modules`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this configuration.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A possibly empty string describing this configuration`]
			]
		]],
		[/* method */ 'parents()', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable list of this configuration's parents, in search
 order. If this is the `],
				[/* reference */ 'r', `#empty()`, `empty configuration`],
				[/* text */ 't', ` then an
 empty list is returned.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A possibly-empty unmodifiable list of this parent configurations`]
			]
		]],
		[/* method */ 'findModule(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Finds a resolved module in this configuration, or if not in this
 configuration, the `],
				[/* reference */ 'r', `#parents()`, `parent`],
				[/* text */ 't', ` configurations.
 Finding a module in parent configurations is equivalent to invoking
 `],
				[/* inline code block */ 'i', `findModule`],
				[/* text */ 't', ` on each parent, in search order, until the module
 is found or all parents have been searched. In a `],
				[/* text */ 't', `tree of
 configurations`],
				[/* text */ 't', ` then this is equivalent to a depth-first search.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The module name of the resolved module to find`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The resolved module with the given name or an empty `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` if there isn't a module with this name in this
         configuration or any parent configurations`]
			]
		]],
		[/* method */ 'modules()', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable set of the resolved modules in this configuration.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A possibly-empty unmodifiable set of the resolved modules
         in this configuration`]
			]
		]],
		[/* method */ 'empty()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* text */ 't', `empty`],
				[/* text */ 't', ` configuration. There are no modules in the
 empty configuration. It has no parents.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The empty configuration`]
			]
		]],
		[/* method */ 'resolve(java.lang.module.ModuleFinder,java.util.List,java.lang.module.ModuleFinder,java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Resolves a collection of root modules to create a configuration.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Each root module is located using the given `],
					[/* inline code block */ 'i', `before`],
					[/* text */ 't', ` module
 finder. If a module is not found then it is located in the parent
 configuration as if by invoking the `],
					[/* reference */ 'r', `#findModule(java.lang.String)`, `findModule`],
					[/* text */ 't', ` method on each parent in iteration order. If not found then
 the module is located using the given `],
					[/* inline code block */ 'i', `after`],
					[/* text */ 't', ` module finder. The
 same search order is used to locate transitive dependences. Root modules
 or dependences that are located in a parent configuration are resolved
 no further and are not included in the resulting configuration. `]
				]],
				[/* block */ 'b', ` When all modules have been enumerated then a readability graph
 is computed, and in conjunction with the module exports and service use,
 checked for consistency. `],
				[/* block */ 'b', [
					[/* text */ 't', ` Resolution may fail with `],
					[/* inline code block */ 'i', `FindException`],
					[/* text */ 't', ` for the following
 `],
					[/* text */ 't', `observability-related`],
					[/* text */ 't', ` reasons: `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', ` A root module, or a direct or transitive dependency, is not
     found. `]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` An error occurs when attempting to find a module.
     Possible errors include I/O errors, errors detected parsing a module
     descriptor (`],
							[/* inline code block */ 'i', `module-info.class`],
							[/* text */ 't', `) or two versions of the same
     module are found in the same directory. `]
						]]
					]]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Resolution may fail with `],
					[/* inline code block */ 'i', `ResolutionException`],
					[/* text */ 't', ` if any of the
 following consistency checks fail: `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` A cycle is detected, say where module `],
							[/* inline code block */ 'i', `m1`],
							[/* text */ 't', ` requires
     module `],
							[/* inline code block */ 'i', `m2`],
							[/* text */ 't', ` and `],
							[/* inline code block */ 'i', `m2`],
							[/* text */ 't', ` requires `],
							[/* inline code block */ 'i', `m1`],
							[/* text */ 't', `. `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', ` A module reads two or more modules with the same name. This
     includes the case where a module reads another with the same name as
     itself. `]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` Two or more modules in the configuration export the same
     package to a module that reads both. This includes the case where a
     module `],
							[/* inline code block */ 'i', `M`],
							[/* text */ 't', ` containing package `],
							[/* inline code block */ 'i', `p`],
							[/* text */ 't', ` reads another module
     that exports `],
							[/* inline code block */ 'i', `p`],
							[/* text */ 't', ` to `],
							[/* inline code block */ 'i', `M`],
							[/* text */ 't', `. `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` A module `],
							[/* inline code block */ 'i', `M`],
							[/* text */ 't', ` declares that it "`],
							[/* inline code block */ 'i', `uses p.S`],
							[/* text */ 't', `" or
     "`],
							[/* inline code block */ 'i', `provides p.S with ...`],
							[/* text */ 't', `" but package `],
							[/* inline code block */ 'i', `p`],
							[/* text */ 't', ` is neither in
     module `],
							[/* inline code block */ 'i', `M`],
							[/* text */ 't', ` nor exported to `],
							[/* inline code block */ 'i', `M`],
							[/* text */ 't', ` by any module that
     `],
							[/* inline code block */ 'i', `M`],
							[/* text */ 't', ` reads. `]
						]]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'before', [/* parameter description */
					[/* text */ 't', `The `],
					[/* text */ 't', `before`],
					[/* text */ 't', ` module finder to find modules`]
				]],
				[/* parameter */ 'parents', [/* parameter description */
					[/* text */ 't', `The list parent configurations in search order`]
				]],
				[/* parameter */ 'after', [/* parameter description */
					[/* text */ 't', `The `],
					[/* text */ 't', `after`],
					[/* text */ 't', ` module finder to locate modules when not
         located by the `],
					[/* inline code block */ 'i', `before`],
					[/* text */ 't', ` module finder or in parent
         configurations`]
				]],
				[/* parameter */ 'roots', [/* parameter description */
					[/* text */ 't', `The possibly-empty collection of module names of the modules
         to resolve`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.module.FindException', [/* throw description */
					[/* text */ 't', `If resolution fails for any of observability-related reasons
         specified above`]
				]],
				[/* throw */ 'java.lang.module.ResolutionException', [/* throw description */
					[/* text */ 't', `If resolution fails for any of the consistency checks specified
         above`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the list of parents is empty, or the list has two or more
         parents with modules for different target operating systems,
         architectures, or versions`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If locating a module is denied by the security manager`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The configuration that is the result of resolving the given
         root modules`]
			]
		]],
		[/* method */ 'resolveAndBind(java.lang.module.ModuleFinder,java.util.List,java.lang.module.ModuleFinder,java.util.Collection)', [
			[/* method description */
				[/* text */ 't', `Resolves a collection of root modules, with service binding, to create
 configuration.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method works exactly as specified by `],
					[/* reference */ 'r', `#resolve(java.lang.module.ModuleFinder,java.util.List,java.lang.module.ModuleFinder,java.util.Collection)`, `resolve`],
					[/* text */ 't', ` except that the graph of resolved modules is augmented
 with modules induced by the service-use dependence relation. `]
				]],
				[/* block */ 'b', [
					[/* anchor */ 'r', '#-id', `service-binding`, ``],
					[/* text */ 't', `More specifically, the root modules are
 resolved as if by calling `],
					[/* inline code block */ 'i', `resolve`],
					[/* text */ 't', `. The resolved modules, and
 all modules in the parent configurations, with `],
					[/* reference */ 'r', `java.lang.module.ModuleDescriptor#uses()`, `service dependences`],
					[/* text */ 't', ` are then examined. All modules found by the given
 module finders that `],
					[/* reference */ 'r', `java.lang.module.ModuleDescriptor#provides()`, `provide`],
					[/* text */ 't', ` an
 implementation of one or more of the service types are added to the
 module graph and then resolved as if by calling the `],
					[/* inline code block */ 'i', `resolve`],
					[/* text */ 't', ` method. Adding modules to the module graph may introduce new
 service-use dependences and so the process works iteratively until no
 more modules are added. `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` As service binding involves resolution then it may fail with `],
					[/* inline code block */ 'i', `FindException`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `ResolutionException`],
					[/* text */ 't', ` for exactly the same
 reasons specified in `],
					[/* inline code block */ 'i', `resolve`],
					[/* text */ 't', `. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'before', [/* parameter description */
					[/* text */ 't', `The `],
					[/* text */ 't', `before`],
					[/* text */ 't', ` module finder to find modules`]
				]],
				[/* parameter */ 'parents', [/* parameter description */
					[/* text */ 't', `The list parent configurations in search order`]
				]],
				[/* parameter */ 'after', [/* parameter description */
					[/* text */ 't', `The `],
					[/* text */ 't', `after`],
					[/* text */ 't', ` module finder to locate modules when not
         located by the `],
					[/* inline code block */ 'i', `before`],
					[/* text */ 't', ` module finder or in parent
         configurations`]
				]],
				[/* parameter */ 'roots', [/* parameter description */
					[/* text */ 't', `The possibly-empty collection of module names of the modules
         to resolve`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.module.FindException', [/* throw description */
					[/* text */ 't', `If resolution fails for any of the observability-related reasons
         specified by the static `],
					[/* inline code block */ 'i', `resolve`],
					[/* text */ 't', ` method`]
				]],
				[/* throw */ 'java.lang.module.ResolutionException', [/* throw description */
					[/* text */ 't', `If resolution fails any of the consistency checks specified by
         the static `],
					[/* inline code block */ 'i', `resolve`],
					[/* text */ 't', ` method`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the list of parents is empty, or the list has two or more
         parents with modules for different target operating systems,
         architectures, or versions`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If locating a module is denied by the security manager`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The configuration that is the result of resolving, with service
         binding, the given root modules`]
			]
		]]
	],
]);
