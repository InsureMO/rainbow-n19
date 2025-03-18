import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.module.ModuleDescriptor$Builder', [
	[/* class description */
		[/* text */ 't', `A builder for building `],
		[/* reference */ 'r', `java.lang.module.ModuleDescriptor`, `ModuleDescriptor`],
		[/* text */ 't', ` objects.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` `],
			[/* inline code block */ 'i', `ModuleDescriptor`],
			[/* text */ 't', ` defines the `],
			[/* reference */ 'r', `java.lang.module.ModuleDescriptor#newModule(java.lang.String,java.util.Set)`, `newModule`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `java.lang.module.ModuleDescriptor#newOpenModule(java.lang.String)`, `newOpenModule`],
			[/* text */ 't', `, and `],
			[/* reference */ 'r', `java.lang.module.ModuleDescriptor#newAutomaticModule(java.lang.String)`, `newAutomaticModule`],
			[/* text */ 't', ` methods to create builders for building
 `],
			[/* text */ 't', `normal`],
			[/* text */ 't', `, open, and automatic modules. `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` The set of packages in the module are accumulated by the `],
			[/* inline code block */ 'i', `Builder`],
			[/* text */ 't', ` as the `],
			[/* reference */ 'r', `#exports(java.lang.String)`, `exports`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#opens(java.lang.String)`, `opens`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#packages(java.util.Set)`, `packages`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#provides(java.lang.String,java.util.List)`, `provides`],
			[/* text */ 't', `, and
 `],
			[/* reference */ 'r', `#mainClass(java.lang.String)`, `mainClass`],
			[/* text */ 't', ` methods are
 invoked. `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` The module names, package names, and class names that are parameters
 specified to the builder methods are the module names, package names,
 and qualified names of classes (in named packages) as defined in the
 `],
			[/* text */ 't', `The Java Language Specification`],
			[/* text */ 't', `. `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ` Example usage: `],
		[/* text */ 't', `
 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `ModuleDescriptor descriptor = ModuleDescriptor.newModule("stats.core")
         .requires("java.base")
         .exports("org.acme.stats.core.clustering")
         .exports("org.acme.stats.core.regression")
         .packages(Set.of("org.acme.stats.core.internal"))
         .build();`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'build()', [
			[/* method description */
				[/* text */ 't', `Builds and returns a `],
				[/* inline code block */ 'i', `ModuleDescriptor`],
				[/* text */ 't', ` from its components.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The module will require "`],
					[/* inline code block */ 'i', `java.base`],
					[/* text */ 't', `" even if the dependence
 has not been declared (the exception is when building a module named
 "`],
					[/* inline code block */ 'i', `java.base`],
					[/* text */ 't', `" as it cannot require itself). The dependence on
 "`],
					[/* inline code block */ 'i', `java.base`],
					[/* text */ 't', `" will have the `],
					[/* reference */ 'r', `java.lang.module.ModuleDescriptor.Requires.Modifier#MANDATED`, `MANDATED`],
					[/* text */ 't', `
 modifier if the dependence was not declared. `]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The module descriptor`]
			]
		]],
		[/* method */ 'exports(java.lang.module.ModuleDescriptor.Exports)', [
			[/* method description */
				[/* text */ 't', `Adds an exported package.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `The export`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If the `],
					[/* reference */ 'r', `java.lang.module.ModuleDescriptor.Exports#source()`, `package`],
					[/* text */ 't', ` is already declared as
         exported or this builder is for an automatic module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This builder`]
			]
		]],
		[/* method */ 'exports(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Adds an exported package. The package is exported to all modules.`]
			],
			[/* parameters */
				[/* parameter */ 'pn', [/* parameter description */
					[/* text */ 't', `The package name`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the package name is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or is not a legal
         package name`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If the package is already declared as exported
         or this builder is for an automatic module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This builder`]
			]
		]],
		[/* method */ 'exports(java.lang.String,java.util.Set)', [
			[/* method description */
				[/* text */ 't', `Adds an exported package. The package is exported to a set of target
 modules.`]
			],
			[/* parameters */
				[/* parameter */ 'pn', [/* parameter description */
					[/* text */ 't', `The package name`]
				]],
				[/* parameter */ 'targets', [/* parameter description */
					[/* text */ 't', `The set of target modules names`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the package name is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or is not a legal
         package name, the set of target modules is empty, or the set
         of target modules contains a name that is not a legal module
         name`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If the package is already declared as exported
         or this builder is for an automatic module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This builder`]
			]
		]],
		[/* method */ 'exports(java.util.Set,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Adds an exported package with the given (and possibly empty) set of
 modifiers. The package is exported to all modules.`]
			],
			[/* parameters */
				[/* parameter */ 'ms', [/* parameter description */
					[/* text */ 't', `The set of modifiers`]
				]],
				[/* parameter */ 'pn', [/* parameter description */
					[/* text */ 't', `The package name`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the package name is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or is not a legal
         package name`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If the package is already declared as exported
         or this builder is for an automatic module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This builder`]
			]
		]],
		[/* method */ 'exports(java.util.Set,java.lang.String,java.util.Set)', [
			[/* method description */
				[/* text */ 't', `Adds an exported package with the given (and possibly empty) set of
 modifiers. The package is exported to a set of target modules.`]
			],
			[/* parameters */
				[/* parameter */ 'ms', [/* parameter description */
					[/* text */ 't', `The set of modifiers`]
				]],
				[/* parameter */ 'pn', [/* parameter description */
					[/* text */ 't', `The package name`]
				]],
				[/* parameter */ 'targets', [/* parameter description */
					[/* text */ 't', `The set of target modules names`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the package name is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or is not a legal
         package name, the set of target modules is empty, or the set
         of target modules contains a name that is not a legal module
         name`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If the package is already declared as exported
         or this builder is for an automatic module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This builder`]
			]
		]],
		[/* method */ 'mainClass(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Sets the module main class. The package for the main class is added
 to the module if not already added. In other words, this method is
 equivalent to first invoking this builder's `],
				[/* reference */ 'r', `#packages(java.util.Set)`, `packages`],
				[/* text */ 't', ` method to add the package name of the main class.`]
			],
			[/* parameters */
				[/* parameter */ 'mc', [/* parameter description */
					[/* text */ 't', `The module main class`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `mainClass`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or not a qualified
         name of a class in a named package`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This builder`]
			]
		]],
		[/* method */ 'opens(java.lang.module.ModuleDescriptor.Opens)', [
			[/* method description */
				[/* text */ 't', `Adds an open package.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `Opens`],
					[/* text */ 't', ` object`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If the package is already declared as open, or this is a
         builder for an open module or automatic module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This builder`]
			]
		]],
		[/* method */ 'opens(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Adds an open package. The package is open to all modules.`]
			],
			[/* parameters */
				[/* parameter */ 'pn', [/* parameter description */
					[/* text */ 't', `The package name`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the package name is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or is not a legal
         package name`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If the package is already declared as open, or this is a
         builder for an open module or automatic module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This builder`]
			]
		]],
		[/* method */ 'opens(java.lang.String,java.util.Set)', [
			[/* method description */
				[/* text */ 't', `Adds an open package. The package is open to a set of target modules.`]
			],
			[/* parameters */
				[/* parameter */ 'pn', [/* parameter description */
					[/* text */ 't', `The package name`]
				]],
				[/* parameter */ 'targets', [/* parameter description */
					[/* text */ 't', `The set of target modules names`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the package name is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or is not a legal
         package name, the set of target modules is empty, or the set
         of target modules contains a name that is not a legal module
         name`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If the package is already declared as open, or this is a
         builder for an open module or automatic module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This builder`]
			]
		]],
		[/* method */ 'opens(java.util.Set,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Adds an open package with the given (and possibly empty) set of
 modifiers. The package is open to all modules.`]
			],
			[/* parameters */
				[/* parameter */ 'ms', [/* parameter description */
					[/* text */ 't', `The set of modifiers`]
				]],
				[/* parameter */ 'pn', [/* parameter description */
					[/* text */ 't', `The package name`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the package name is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or is not a legal
         package name`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If the package is already declared as open, or this is a
         builder for an open module or automatic module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This builder`]
			]
		]],
		[/* method */ 'opens(java.util.Set,java.lang.String,java.util.Set)', [
			[/* method description */
				[/* text */ 't', `Adds an open package with the given (and possibly empty) set of
 modifiers. The package is open to a set of target modules.`]
			],
			[/* parameters */
				[/* parameter */ 'ms', [/* parameter description */
					[/* text */ 't', `The set of modifiers`]
				]],
				[/* parameter */ 'pn', [/* parameter description */
					[/* text */ 't', `The package name`]
				]],
				[/* parameter */ 'targets', [/* parameter description */
					[/* text */ 't', `The set of target modules names`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the package name is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or is not a legal
         package name, the set of target modules is empty, or the set
         of target modules contains a name that is not a legal module
         name`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If the package is already declared as open, or this is a
         builder for an open module or automatic module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This builder`]
			]
		]],
		[/* method */ 'packages(java.util.Set)', [
			[/* method description */
				[/* text */ 't', `Adds packages to the module. All packages in the set of package names
 that are not in the module are added to module.`]
			],
			[/* parameters */
				[/* parameter */ 'pns', [/* parameter description */
					[/* text */ 't', `The (possibly empty) set of package names`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If any of the package names is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or is not a
         legal package name`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This builder`]
			]
		]],
		[/* method */ 'provides(java.lang.module.ModuleDescriptor.Provides)', [
			[/* method description */
				[/* text */ 't', `Provides a service with one or more implementations. The package for
 each `],
				[/* inline code block */ 'i', `provider`],
				[/* text */ 't', ` (or provider factory) is
 added to the module if not already added.`]
			],
			[/* parameters */
				[/* parameter */ 'p', [/* parameter description */
					[/* text */ 't', `The provides`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If the providers for the service type have already been
         declared`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This builder`]
			]
		]],
		[/* method */ 'provides(java.lang.String,java.util.List)', [
			[/* method description */
				[/* text */ 't', `Provides implementations of a service. The package for each provider
 (or provider factory) is added to the module if not already added.`]
			],
			[/* parameters */
				[/* parameter */ 'service', [/* parameter description */
					[/* text */ 't', `The service type`]
				]],
				[/* parameter */ 'providers', [/* parameter description */
					[/* text */ 't', `The list of provider or provider factory class names`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the service type or any of the provider class names is
         `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or not a qualified name of a class in a named
         package, or the list of provider class names is empty`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If the providers for the service type have already been
         declared`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This builder`]
			]
		]],
		[/* method */ 'requires(java.lang.module.ModuleDescriptor.Requires)', [
			[/* method description */
				[/* text */ 't', `Adds a dependence on a module.`]
			],
			[/* parameters */
				[/* parameter */ 'req', [/* parameter description */
					[/* text */ 't', `The dependence`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the dependence is on the module that this builder was
         initialized to build`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If the dependence on the module has already been declared
         or this builder is for an automatic module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This builder`]
			]
		]],
		[/* method */ 'requires(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Adds a dependence on a module with an empty set of modifiers.`]
			],
			[/* parameters */
				[/* parameter */ 'mn', [/* parameter description */
					[/* text */ 't', `The module name`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the module name is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, is not a legal module
         name, or is equal to the module name that this builder
         was initialized to build`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If the dependence on the module has already been declared
         or this builder is for an automatic module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This builder`]
			]
		]],
		[/* method */ 'requires(java.util.Set,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Adds a dependence on a module with the given (and possibly empty)
 set of modifiers.`]
			],
			[/* parameters */
				[/* parameter */ 'ms', [/* parameter description */
					[/* text */ 't', `The set of modifiers`]
				]],
				[/* parameter */ 'mn', [/* parameter description */
					[/* text */ 't', `The module name`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the module name is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, is not a legal module
         name, or is equal to the module name that this builder
         was initialized to build`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If the dependence on the module has already been declared
         or this builder is for an automatic module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This builder`]
			]
		]],
		[/* method */ 'requires(java.util.Set,java.lang.String,java.lang.module.ModuleDescriptor.Version)', [
			[/* method description */
				[/* text */ 't', `Adds a dependence on a module with the given (and possibly empty)
 set of modifiers. The dependence includes the version of the
 module that was recorded at compile-time.`]
			],
			[/* parameters */
				[/* parameter */ 'ms', [/* parameter description */
					[/* text */ 't', `The set of modifiers`]
				]],
				[/* parameter */ 'mn', [/* parameter description */
					[/* text */ 't', `The module name`]
				]],
				[/* parameter */ 'compiledVersion', [/* parameter description */
					[/* text */ 't', `The version of the module recorded at compile-time`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the module name is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, is not a legal module
         name, or is equal to the module name that this builder
         was initialized to build`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If the dependence on the module has already been declared
         or this builder is for an automatic module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This builder`]
			]
		]],
		[/* method */ 'uses(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Adds a service dependence.`]
			],
			[/* parameters */
				[/* parameter */ 'service', [/* parameter description */
					[/* text */ 't', `The service type`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the service type is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or not a qualified name of
         a class in a named package`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If a dependency on the service type has already been declared
         or this is a builder for an automatic module`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This builder`]
			]
		]],
		[/* method */ 'version(java.lang.module.ModuleDescriptor.Version)', [
			[/* method description */
				[/* text */ 't', `Sets the module version.`]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `The version`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `This builder`]
			]
		]],
		[/* method */ 'version(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Sets the module version.`]
			],
			[/* parameters */
				[/* parameter */ 'vs', [/* parameter description */
					[/* text */ 't', `The version string to parse`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `vs`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or cannot be parsed as a
         version string`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This builder`]
			]
		]]
	],
	/* enum values */ UDF
]);
