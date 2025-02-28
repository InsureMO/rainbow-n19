import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.ServiceLoader', [
	[/* class description */
		[/* text */ 't', `A facility to load implementations of a service.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* text */ 't', `service`],
			[/* text */ 't', ` is a well-known interface or class for which zero, one,
 or many service providers exist. A `],
			[/* text */ 't', `service provider`],
			[/* text */ 't', ` (or just
 `],
			[/* text */ 't', `provider`],
			[/* text */ 't', `) is a class that implements or subclasses the well-known
 interface or class. A `],
			[/* inline code block */ 'i', `ServiceLoader`],
			[/* text */ 't', ` is an object that locates and
 loads service providers deployed in the run time environment at a time of an
 application's choosing. Application code refers only to the service, not to
 service providers, and is assumed to be capable of choosing between multiple
 service providers (based on the functionality they expose through the service),
 and handling the possibility that no service providers are located.

 `]
		]],
		[/* block */ 'b', ` Obtaining a service loader `],
		[/* block */ 'b', [
			[/* text */ 't', ` An application obtains a service loader for a given service by invoking
 one of the static `],
			[/* inline code block */ 'i', `load`],
			[/* text */ 't', ` methods of `],
			[/* inline code block */ 'i', `ServiceLoader`],
			[/* text */ 't', `. If the
 application is a module, then its module declaration must have a `],
			[/* text */ 't', `uses`],
			[/* text */ 't', `
 directive that specifies the service; this helps to locate providers and ensure
 they will execute reliably. In addition, if the application module does not
 contain the service, then its module declaration must have a `],
			[/* text */ 't', `requires`],
			[/* text */ 't', `
 directive that specifies the module which exports the service. It is strongly
 recommended that the application module does `],
			[/* text */ 't', `not`],
			[/* text */ 't', ` require modules which
 contain providers of the service.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A service loader can be used to locate and instantiate providers of the
 service by means of the `],
			[/* reference */ 'r', `iterator`],
			[/* text */ 't', ` method. `],
			[/* inline code block */ 'i', `ServiceLoader`],
			[/* text */ 't', `
 also defines the `],
			[/* reference */ 'r', `stream`],
			[/* text */ 't', ` method to obtain a stream of providers
 that can be inspected and filtered without instantiating them.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` As an example, suppose the service is `],
			[/* inline code block */ 'i', `com.example.CodecFactory`],
			[/* text */ 't', `, an
 interface that defines methods for producing encoders and decoders:

 `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `package com.example;
     public interface CodecFactory {
         Encoder getEncoder(String encodingName);
         Decoder getDecoder(String encodingName);
     }`]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` The following code obtains a service loader for the `],
			[/* inline code block */ 'i', `CodecFactory`],
			[/* text */ 't', `
 service, then uses its iterator (created automatically by the enhanced-for
 loop) to yield instances of the service providers that are located:

 `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `ServiceLoader<CodecFactory> loader = ServiceLoader.load(CodecFactory.class);
     for (CodecFactory factory : loader) {
         Encoder enc = factory.getEncoder("PNG");
         if (enc != null)
             ... use enc to encode a PNG file
             break;
         }`]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` If this code resides in a module, then in order to refer to the
 `],
			[/* inline code block */ 'i', `com.example.CodecFactory`],
			[/* text */ 't', ` interface, the module declaration would
 require the module which exports the interface. The module declaration would
 also specify use of `],
			[/* inline code block */ 'i', `com.example.CodecFactory`],
			[/* text */ 't', `:
 `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `requires com.example.codec.core;
     uses com.example.CodecFactory;`]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` Sometimes an application may wish to inspect a service provider before
 instantiating it, in order to determine if an instance of that service
 provider would be useful. For example, a service provider for `],
			[/* inline code block */ 'i', `CodecFactory`],
			[/* text */ 't', ` that is capable of producing a "PNG" encoder may be annotated
 with `],
			[/* inline code block */ 'i', `@PNG`],
			[/* text */ 't', `. The following code uses service loader's `],
			[/* inline code block */ 'i', `stream`],
			[/* text */ 't', `
 method to yield instances of `],
			[/* inline code block */ 'i', `Provider<CodecFactory>`],
			[/* text */ 't', ` in contrast to
 how the iterator yields instances of `],
			[/* inline code block */ 'i', `CodecFactory`],
			[/* text */ 't', `:
 `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `ServiceLoader<CodecFactory> loader = ServiceLoader.load(CodecFactory.class);
     Set<CodecFactory> pngFactories = loader
            .stream()                                              // Note a below
            .filter(p -> p.type().isAnnotationPresent(PNG.class))  // Note b
            .map(Provider::get)                                    // Note c
            .collect(Collectors.toSet());`]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', ` A stream of `],
				[/* inline code block */ 'i', `Provider<CodecFactory>`],
				[/* text */ 't', ` objects `]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `p.type()`],
				[/* text */ 't', ` yields a `],
				[/* inline code block */ 'i', `Class<CodecFactory>`]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `get()`],
				[/* text */ 't', ` yields an instance of `],
				[/* inline code block */ 'i', `CodecFactory`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` Designing services `],
		[/* block */ 'b', ` A service is a single type, usually an interface or abstract class. A
 concrete class can be used, but this is not recommended. The type may have
 any accessibility. The methods of a service are highly domain-specific, so
 this API specification cannot give concrete advice about their form or
 function. However, there are two general guidelines:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* block */ 'b', ` A service should declare as many methods as needed to allow service
   providers to communicate their domain-specific properties and other
   quality-of-implementation factors. An application which obtains a service
   loader for the service may then invoke these methods on each instance of
   a service provider, in order to choose the best provider for the
   application. `]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` A service should express whether its service providers are intended
   to be direct implementations of the service or to be an indirection
   mechanism such as a "proxy" or a "factory". Service providers tend to be
   indirection mechanisms when domain-specific objects are relatively
   expensive to instantiate; in this case, the service should be designed
   so that service providers are abstractions which create the "real"
   implementation on demand. For example, the `],
					[/* inline code block */ 'i', `CodecFactory`],
					[/* text */ 't', ` service
   expresses through its name that its service providers are factories
   for codecs, rather than codecs themselves, because it may be expensive
   or complicated to produce certain codecs. `]
				]]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Developing service providers`]
		]],
		[/* block */ 'b', ` A service provider is a single type, usually a concrete class. An
 interface or abstract class is permitted because it may declare a static
 provider method, discussed later. The type must be public and must not be
 an inner class.

 `],
		[/* block */ 'b', ` A service provider and its supporting code may be developed in a module,
 which is then deployed on the application module path or in a modular
 image. Alternatively, a service provider and its supporting code may be
 packaged as a JAR file and deployed on the application class path. The
 advantage of developing a service provider in a module is that the provider
 can be fully encapsulated to hide all details of its implementation.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` An application that obtains a service loader for a given service is
 indifferent to whether providers of the service are deployed in modules or
 packaged as JAR files. The application instantiates service providers via
 the service loader's iterator, or via `],
			[/* reference */ 'r', `java.util.ServiceLoader.Provider`],
			[/* text */ 't', ` objects in
 the service loader's stream, without knowledge of the service providers'
 locations.

 `]
		]],
		[/* block */ 'b', ` Deploying service providers as modules `],
		[/* block */ 'b', [
			[/* text */ 't', ` A service provider that is developed in a module must be specified in a
 `],
			[/* text */ 't', `provides`],
			[/* text */ 't', ` directive in the module declaration. The provides directive
 specifies both the service and the service provider; this helps to locate the
 provider when another module, with a `],
			[/* text */ 't', `uses`],
			[/* text */ 't', ` directive for the service,
 obtains a service loader for the service. It is strongly recommended that the
 module does not export the package containing the service provider. There is
 no support for a module specifying, in a `],
			[/* text */ 't', `provides`],
			[/* text */ 't', ` directive, a service
 provider in another module.

 `]
		]],
		[/* block */ 'b', ` A service provider that is developed in a module has no control over when
 it is instantiated, since that occurs at the behest of the application, but it
 does have control over how it is instantiated:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', ` If the service provider declares a provider method, then the service
   loader invokes that method to obtain an instance of the service provider. A
   provider method is a public static method named "provider" with no formal
   parameters and a return type that is assignable to the service's interface
   or class.
   `],
				[/* block */ 'b', ` In this case, the service provider itself need not be assignable to the
   service's interface or class. `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` If the service provider does not declare a provider method, then the
   service provider is instantiated directly, via its provider constructor. A
   provider constructor is a public constructor with no formal parameters.
   `],
				[/* block */ 'b', ` In this case, the service provider must be assignable to the service's
   interface or class `]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` A service provider that is deployed as an
 `],
			[/* external link */ 'a', `../lang/module/ModuleDescriptor.html#isAutomatic()`, `automatic module`],
			[/* text */ 't', ` on
 the application module path must have a provider constructor. There is no
 support for a provider method in this case.

 `]
		]],
		[/* block */ 'b', ` As an example, suppose a module specifies the following directive:
 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `provides com.example.CodecFactory with com.example.impl.StandardCodecs,
              com.example.impl.ExtendedCodecsFactory;`]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` where

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* inline code block */ 'i', `com.example.CodecFactory`],
				[/* text */ 't', ` is the two-method service from
   earlier. `]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `com.example.impl.StandardCodecs`],
				[/* text */ 't', ` is a public class that implements
   `],
				[/* inline code block */ 'i', `CodecFactory`],
				[/* text */ 't', ` and has a public no-args constructor. `]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `com.example.impl.ExtendedCodecsFactory`],
				[/* text */ 't', ` is a public class that
   does not implement CodecFactory, but it declares a public static no-args
   method named "provider" with a return type of `],
				[/* inline code block */ 'i', `CodecFactory`],
				[/* text */ 't', `. `]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` A service loader will instantiate `],
			[/* inline code block */ 'i', `StandardCodecs`],
			[/* text */ 't', ` via its
 constructor, and will instantiate `],
			[/* inline code block */ 'i', `ExtendedCodecsFactory`],
			[/* text */ 't', ` by invoking
 its `],
			[/* inline code block */ 'i', `provider`],
			[/* text */ 't', ` method. The requirement that the provider constructor or
 provider method is public helps to document the intent that the class (that is,
 the service provider) will be instantiated by an entity (that is, a service
 loader) which is outside the class's package.

 `]
		]],
		[/* block */ 'b', ` Deploying service providers on the class path `],
		[/* text */ 't', `

 A service provider that is packaged as a JAR file for the class path is
 identified by placing a `],
		[/* text */ 't', `provider-configuration file`],
		[/* text */ 't', ` in the resource
 directory `],
		[/* inline code block */ 'i', `META-INF/services`],
		[/* text */ 't', `. The name of the provider-configuration
 file is the fully qualified binary name of the service. The provider-configuration
 file contains a list of fully qualified binary names of service providers, one
 per line.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` For example, suppose the service provider
 `],
			[/* inline code block */ 'i', `com.example.impl.StandardCodecs`],
			[/* text */ 't', ` is packaged in a JAR file for the
 class path. The JAR file will contain a provider-configuration file named:

 `]
		]],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `META-INF/services/com.example.CodecFactory`]
		]],
		[/* text */ 't', `

 that contains the line:

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `com.example.impl.StandardCodecs # Standard codecs`]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `The provider-configuration file must be encoded in UTF-8.`],
			[/* text */ 't', `
 Space and tab characters surrounding each service provider's name, as well as
 blank lines, are ignored. The comment character is `],
			[/* inline code block */ 'i', `'#'`],
			[/* text */ 't', `
 (`],
			[/* inline code block */ 'i', `U+0023`],
			[/* text */ 't', `NUMBER SIGN`],
			[/* text */ 't', `);
 on each line all characters following the first comment character are ignored.
 If a service provider class name is listed more than once in a
 provider-configuration file then the duplicate is ignored. If a service
 provider class is named in more than one configuration file then the duplicate
 is ignored.

 `]
		]],
		[/* block */ 'b', ` A service provider that is mentioned in a provider-configuration file may
 be located in the same JAR file as the provider-configuration file or in a
 different JAR file. The service provider must be visible from the class loader
 that is initially queried to locate the provider-configuration file; this is
 not necessarily the class loader which ultimately locates the
 provider-configuration file.

 `],
		[/* block */ 'b', ` Timing of provider discovery `],
		[/* block */ 'b', [
			[/* text */ 't', ` Service providers are loaded and instantiated lazily, that is, on demand.
 A service loader maintains a cache of the providers that have been loaded so
 far. Each invocation of the `],
			[/* inline code block */ 'i', `iterator`],
			[/* text */ 't', ` method returns an `],
			[/* inline code block */ 'i', `Iterator`],
			[/* text */ 't', `
 that first yields all of the elements cached from previous iteration, in
 instantiation order, and then lazily locates and instantiates any remaining
 providers, adding each one to the cache in turn. Similarly, each invocation
 of the stream method returns a `],
			[/* inline code block */ 'i', `Stream`],
			[/* text */ 't', ` that first processes all
 providers loaded by previous stream operations, in load order, and then lazily
 locates any remaining providers. Caches are cleared via the `],
			[/* reference */ 'r', `reload`],
			[/* text */ 't', ` method.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Errors`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` When using the service loader's `],
			[/* inline code block */ 'i', `iterator`],
			[/* text */ 't', `, the `],
			[/* external link */ 'a', `Iterator.html#hasNext()`, `hasNext`],
			[/* text */ 't', ` and `],
			[/* external link */ 'a', `Iterator.html#next()`, `next`],
			[/* text */ 't', ` methods will
 fail with `],
			[/* reference */ 'r', `java.util.ServiceConfigurationError`],
			[/* text */ 't', ` if an error occurs locating,
 loading or instantiating a service provider. When processing the service
 loader's stream then `],
			[/* inline code block */ 'i', `ServiceConfigurationError`],
			[/* text */ 't', ` may be thrown by any
 method that causes a service provider to be located or loaded.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` When loading or instantiating a service provider in a module, `],
			[/* inline code block */ 'i', `ServiceConfigurationError`],
			[/* text */ 't', ` can be thrown for the following reasons:

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', ` The service provider cannot be loaded. `],
			[/* block */ 'b', ` The service provider does not declare a provider method, and either
   it is not assignable to the service's interface/class or does not have a
   provider constructor. `],
			[/* block */ 'b', ` The service provider declares a public static no-args method named
   "provider" with a return type that is not assignable to the service's
   interface or class. `],
			[/* block */ 'b', [
				[/* text */ 't', ` The service provider class file has more than one public static
   no-args method named "`],
				[/* inline code block */ 'i', `provider`],
				[/* text */ 't', `". `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` The service provider declares a provider method and it fails by
   returning `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` or throwing an exception. `]
			]],
			[/* block */ 'b', ` The service provider does not declare a provider method, and its
   provider constructor fails by throwing an exception. `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` When reading a provider-configuration file, or loading or instantiating
 a provider class named in a provider-configuration file, then `],
			[/* inline code block */ 'i', `ServiceConfigurationError`],
			[/* text */ 't', ` can be thrown for the following reasons:

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', ` The format of the provider-configuration file violates the `],
				[/* external link */ 'a', `ServiceLoader.html#format`, `format`],
				[/* text */ 't', ` specified above; `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` An `],
				[/* reference */ 'r', `java.io.IOException`],
				[/* text */ 't', ` occurs while reading the
   provider-configuration file; `]
			]],
			[/* block */ 'b', ` A service provider cannot be loaded; `],
			[/* block */ 'b', ` A service provider is not assignable to the service's interface or
   class, or does not define a provider constructor, or cannot be
   instantiated. `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` Security `],
		[/* block */ 'b', ` Service loaders always execute in the security context of the caller
 of the iterator or stream methods and may also be restricted by the security
 context of the caller that created the service loader.
 Trusted system code should typically invoke the methods in this class, and
 the methods of the iterators which they return, from within a privileged
 security context.

 `],
		[/* block */ 'b', ` Concurrency `],
		[/* block */ 'b', ` Instances of this class are not safe for use by multiple concurrent
 threads.

 `],
		[/* block */ 'b', ` Null handling `],
		[/* block */ 'b', [
			[/* text */ 't', ` Unless otherwise specified, passing a `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` argument to any
 method in this class will cause a `],
			[/* reference */ 'r', `java.lang.NullPointerException`],
			[/* text */ 't', ` to be thrown.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this service.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A descriptive string`]
			]
		]],
		[/* method */ 'load(java.lang.Class,java.lang.ClassLoader)', [
			[/* method description */
				[/* text */ 't', `Creates a new service loader for the given service. The service loader
 uses the given class loader as the starting point to locate service
 providers for the service. The service loader's `],
				[/* reference */ 'r', `iterator`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `stream`],
				[/* text */ 't', ` locate providers in both named
 and unnamed modules, as follows:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', ` Step 1: Locate providers in named modules. `],
						[/* block */ 'b', ` Service providers are located in all named modules of the class
   loader or to any class loader reachable via parent delegation. `],
						[/* block */ 'b', [
							[/* text */ 't', ` In addition, if the class loader is not the bootstrap or `],
							[/* external link */ 'a', `../lang/ClassLoader.html#getPlatformClassLoader()`, `platform class loader`],
							[/* text */ 't', `, then service
   providers may be located in the named modules of other class loaders.
   Specifically, if the class loader, or any class loader reachable via
   parent delegation, has a module in a `],
							[/* reference */ 'r', `java.lang.ModuleLayer`],
							[/* text */ 't', `, then service providers in all modules in the module layer are
   located.  `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` For example, suppose there is a module layer where each module is
   in its own class loader (see `],
							[/* external link */ 'a', `../lang/ModuleLayer.html#defineModulesWithManyLoaders(java.lang.module.Configuration,java.lang.ClassLoader)`, `defineModulesWithManyLoaders`],
							[/* text */ 't', `). If this `],
							[/* inline code block */ 'i', `ServiceLoader.load`],
							[/* text */ 't', ` method
   is invoked to locate providers using any of the class loaders created for
   the module layer, then it will locate all of the providers in the module
   layer, irrespective of their defining class loader. `]
						]],
						[/* block */ 'b', ` Ordering: The service loader will first locate any service providers
   in modules defined to the class loader, then its parent class loader,
   its parent parent, and so on to the bootstrap class loader. If a class
   loader has modules in a module layer then all providers in that module
   layer are located (irrespective of their class loader) before the
   providers in the parent class loader are located. The ordering of
   modules in same class loader, or the ordering of modules in a module
   layer, is not defined. `],
						[/* block */ 'b', [
							[/* text */ 't', ` If a module declares more than one provider then the providers
   are located in the order that its module descriptor `],
							[/* external link */ 'a', `../lang/module/ModuleDescriptor.Provides.html#providers()`, `lists the providers`],
							[/* text */ 't', `. Providers added dynamically by instrumentation agents (see
   `],
							[/* external link */ 'a', `../../../java.instrument/java/lang/instrument/Instrumentation.html#redefineModule(java.lang.Module,java.util.Set,java.util.Map,java.util.Map,java.util.Set,java.util.Map)`, `redefineModule`],
							[/* text */ 't', `)
   are always located after providers declared by the module. `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', ` Step 2: Locate providers in unnamed modules. `],
						[/* block */ 'b', [
							[/* text */ 't', ` Service providers in unnamed modules are located if their class names
   are listed in provider-configuration files located by the class loader's
   `],
							[/* external link */ 'a', `../lang/ClassLoader.html#getResources(java.lang.String)`, `getResources`],
							[/* text */ 't', ` method. `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` The ordering is based on the order that the class loader's `],
							[/* inline code block */ 'i', `getResources`],
							[/* text */ 't', ` method finds the service configuration files and within
   that, the order that the class names are listed in the file. `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` In a provider-configuration file, any mention of a service provider
   that is deployed in a named module is ignored. This is to avoid
   duplicates that would otherwise arise when a named module has both a
   `],
							[/* text */ 't', `provides`],
							[/* text */ 't', ` directive and a provider-configuration file that mention
   the same service provider. `]
						]],
						[/* block */ 'b', ` The provider class must be visible to the class loader. `]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'service', [/* parameter description */
					[/* text */ 't', `The interface or abstract class representing the service`]
				]],
				[/* parameter */ 'loader', [/* parameter description */
					[/* text */ 't', `The class loader to be used to load provider-configuration files
         and provider classes, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if the system class
         loader (or, failing that, the bootstrap class loader) is to be
         used`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.ServiceConfigurationError', [/* throw description */
					[/* text */ 't', `if the service type is not accessible to the caller or the
         caller is in an explicit module and its module descriptor does
         not declare that it uses `],
					[/* inline code block */ 'i', `service`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A new service loader`]
			]
		]],
		[/* method */ 'load(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Creates a new service loader for the given service type, using the
 current thread's `],
				[/* external link */ 'a', `../lang/Thread.html#getContextClassLoader()`, `context class loader`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` An invocation of this convenience method of the form
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `ServiceLoader.load(service)`]
				]],
				[/* text */ 't', `

 is equivalent to

 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `ServiceLoader.load(service, Thread.currentThread().getContextClassLoader())`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'service', [/* parameter description */
					[/* text */ 't', `The interface or abstract class representing the service`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.ServiceConfigurationError', [/* throw description */
					[/* text */ 't', `if the service type is not accessible to the caller or the
         caller is in an explicit module and its module descriptor does
         not declare that it uses `],
					[/* inline code block */ 'i', `service`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A new service loader`]
			]
		]],
		[/* method */ 'load(java.lang.ModuleLayer,java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Creates a new service loader for the given service type to load service
 providers from modules in the given module layer and its ancestors. It
 does not locate providers in unnamed modules. The ordering that the service
 loader's `],
				[/* reference */ 'r', `iterator`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `stream`],
				[/* text */ 't', ` locate
 providers and yield elements is as follows:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', ` Providers are located in a module layer before locating providers
   in parent layers. Traversal of parent layers is depth-first with each
   layer visited at most once. For example, suppose L0 is the boot layer, L1
   and L2 are modules layers with L0 as their parent. Now suppose that L3 is
   created with L1 and L2 as the parents (in that order). Using a service
   loader to locate providers with L3 as the context will locate providers
   in the following order: L3, L1, L0, L2. `]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` If a module declares more than one provider then the providers
   are located in the order that its module descriptor
   `],
							[/* external link */ 'a', `../lang/module/ModuleDescriptor.Provides.html#providers()`, `lists the providers`],
							[/* text */ 't', `. Providers added dynamically by instrumentation
   agents are always located after providers declared by the module. `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', ` The ordering of modules in a module layer is not defined. `]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'layer', [/* parameter description */
					[/* text */ 't', `The module layer`]
				]],
				[/* parameter */ 'service', [/* parameter description */
					[/* text */ 't', `The interface or abstract class representing the service`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.ServiceConfigurationError', [/* throw description */
					[/* text */ 't', `if the service type is not accessible to the caller or the
         caller is in an explicit module and its module descriptor does
         not declare that it uses `],
					[/* inline code block */ 'i', `service`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A new service loader`]
			]
		]],
		[/* method */ 'iterator()', [
			[/* method description */
				[/* text */ 't', `Returns an iterator to lazily load and instantiate the available
 providers of this loader's service.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` To achieve laziness the actual work of locating and instantiating
 providers is done by the iterator itself. Its `],
					[/* external link */ 'a', `Iterator.html#hasNext()`, `hasNext`],
					[/* text */ 't', ` and `],
					[/* external link */ 'a', `Iterator.html#next()`, `next`],
					[/* text */ 't', ` methods can therefore throw a
 `],
					[/* reference */ 'r', `java.util.ServiceConfigurationError`],
					[/* text */ 't', ` for any of the reasons specified in
 the `],
					[/* text */ 't', `Errors`],
					[/* text */ 't', ` section above. To write robust code it
 is only necessary to catch `],
					[/* inline code block */ 'i', `ServiceConfigurationError`],
					[/* text */ 't', ` when using
 the iterator. If an error is thrown then subsequent invocations of the
 iterator will make a best effort to locate and instantiate the next
 available provider, but in general such recovery cannot be guaranteed.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Caching: The iterator returned by this method first yields all of
 the elements of the provider cache, in the order that they were loaded.
 It then lazily loads and instantiates any remaining service providers,
 adding each one to the cache in turn. If this loader's provider caches are
 cleared by invoking the `],
					[/* reference */ 'r', `reload`],
					[/* text */ 't', ` method then existing
 iterators for this service loader should be discarded.
 The `],
					[/* inline code block */ 'i', `hasNext`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `next`],
					[/* text */ 't', ` methods of the iterator throw `],
					[/* reference */ 'r', `java.util.ConcurrentModificationException`],
					[/* text */ 't', `
 if used after the provider cache has been cleared.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The iterator returned by this method does not support removal.
 Invoking its `],
					[/* external link */ 'a', `Iterator.html#remove()`, `remove`],
					[/* text */ 't', ` method will
 cause an `],
					[/* reference */ 'r', `java.lang.UnsupportedOperationException`],
					[/* text */ 't', ` to be thrown.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `An iterator that lazily loads providers for this loader's
          service`]
			]
		]],
		[/* method */ 'stream()', [
			[/* method description */
				[/* text */ 't', `Returns a stream to lazily load available providers of this loader's
 service. The stream elements are of type `],
				[/* reference */ 'r', `java.util.ServiceLoader.Provider`],
				[/* text */ 't', `, the
 `],
				[/* inline code block */ 'i', `Provider`],
				[/* text */ 't', `'s `],
				[/* external link */ 'a', `ServiceLoader.Provider.html#get()`, `get`],
				[/* text */ 't', ` method must be invoked to
 get or instantiate the provider.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` To achieve laziness the actual work of locating providers is done
 when processing the stream. If a service provider cannot be loaded for any
 of the reasons specified in the `],
					[/* text */ 't', `Errors`],
					[/* text */ 't', ` section
 above then `],
					[/* reference */ 'r', `java.util.ServiceConfigurationError`],
					[/* text */ 't', ` is thrown by whatever method
 caused the service provider to be loaded. `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Caching: When processing the stream then providers that were previously
 loaded by stream operations are processed first, in load order. It then
 lazily loads any remaining service providers. If this loader's provider
 caches are cleared by invoking the `],
					[/* reference */ 'r', `reload`],
					[/* text */ 't', ` method then
 existing streams for this service loader should be discarded. The returned
 stream's source `],
					[/* reference */ 'r', `java.util.Spliterator`],
					[/* text */ 't', ` is `],
					[/* text */ 't', `fail-fast`],
					[/* text */ 't', ` and
 will throw `],
					[/* reference */ 'r', `java.util.ConcurrentModificationException`],
					[/* text */ 't', ` if the provider cache
 has been cleared. `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The following examples demonstrate usage. The first example creates
 a stream of `],
					[/* inline code block */ 'i', `CodecFactory`],
					[/* text */ 't', ` objects, the second example is the same
 except that it sorts the providers by provider class name (and so locate
 all providers).
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `Stream<CodecFactory> providers = ServiceLoader.load(CodecFactory.class)
            .stream()
            .map(Provider::get);

    Stream<CodecFactory> providers = ServiceLoader.load(CodecFactory.class)
            .stream()
            .sorted(Comparator.comparing(p -> p.type().getName()))
            .map(Provider::get);`]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A stream that lazily loads providers for this loader's service`]
			]
		]],
		[/* method */ 'findFirst()', [
			[/* method description */
				[/* text */ 't', `Load the first available service provider of this loader's service. This
 convenience method is equivalent to invoking the `],
				[/* reference */ 'r', `iterator()`],
				[/* text */ 't', ` method and obtaining the first element. It therefore
 returns the first element from the provider cache if possible, it
 otherwise attempts to load and instantiate the first provider.

 `],
				[/* block */ 'b', ` The following example loads the first available service provider. If
 no service providers are located then it uses a default implementation.
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `CodecFactory factory = ServiceLoader.load(CodecFactory.class)
                                        .findFirst()
                                        .orElse(DEFAULT_CODECSET_FACTORY);`]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.ServiceConfigurationError', [/* throw description */
					[/* text */ 't', `If a provider class cannot be loaded for any of the reasons
         specified in the `],
					[/* text */ 't', `Errors`],
					[/* text */ 't', ` section above.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The first service provider or empty `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` if no
         service providers are located`]
			]
		]],
		[/* method */ 'loadInstalled(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Creates a new service loader for the given service type, using the
 `],
				[/* external link */ 'a', `../lang/ClassLoader.html#getPlatformClassLoader()`, `platform class loader`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` This convenience method is equivalent to: `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `ServiceLoader.load(service, ClassLoader.getPlatformClassLoader())`]
				]],
				[/* block */ 'b', ` This method is intended for use when only installed providers are
 desired.  The resulting service will only find and load providers that
 have been installed into the current Java virtual machine; providers on
 the application's module path or class path will be ignored.`]
			],
			[/* parameters */
				[/* parameter */ 'service', [/* parameter description */
					[/* text */ 't', `The interface or abstract class representing the service`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.ServiceConfigurationError', [/* throw description */
					[/* text */ 't', `if the service type is not accessible to the caller or the
         caller is in an explicit module and its module descriptor does
         not declare that it uses `],
					[/* inline code block */ 'i', `service`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A new service loader`]
			]
		]],
		[/* method */ 'reload()', [
			[/* method description */
				[/* text */ 't', `Clear this loader's provider cache so that all providers will be
 reloaded.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` After invoking this method, subsequent invocations of the `],
					[/* reference */ 'r', `iterator`],
					[/* text */ 't', ` or `],
					[/* reference */ 'r', `stream`],
					[/* text */ 't', ` methods will lazily
 locate providers (and instantiate in the case of `],
					[/* inline code block */ 'i', `iterator`],
					[/* text */ 't', `)
 from scratch, just as is done by a newly-created service loader.

 `]
				]],
				[/* block */ 'b', ` This method is intended for use in situations in which new service
 providers can be installed into a running Java virtual machine.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
